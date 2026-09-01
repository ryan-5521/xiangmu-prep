/* ============================================================
 * 状态层：进度记录、错题、模拟成绩、筛选与抽样、localStorage 持久化
 * ============================================================ */
(function () {
  const C = window.COURSE;
  const KEY = "xiangmu_prep_state_v1";

  /* ---------- 工具 ---------- */
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return defaultState();
      const s = JSON.parse(raw);
      return Object.assign(defaultState(), s);
    } catch (e) { return defaultState(); }
  }
  function defaultState() {
    return { profile: { nickname: "考生" }, practiced: {}, wrong: [], reviewed: [], mocks: [] };
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }

  /* 全题库（带章节信息） */
  function allQuestions() {
    const out = [];
    C.chapters.forEach(ch => ch.questions.forEach(q => {
      out.push(Object.assign({}, q, { chapterId: ch.id, chapterName: ch.name, module: ch.module }));
    }));
    return out;
  }
  function questionById(id) {
    return allQuestions().find(q => q.id === id) || null;
  }
  function byChapter(chId) {
    const ch = C.chapters.find(c => c.id === chId);
    return ch ? ch.questions.map(q => Object.assign({}, q, { chapterId: ch.id, chapterName: ch.name, module: ch.module })) : [];
  }

  /* 种子随机（mulberry32），保证同一模拟卷可复现 */
  function seeded(seed) {
    let a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function hashStr(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function shuffle(arr, rng) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* 按 章节 + 难度 + 题型 筛选练习题目 */
  function filterQuestions(f) {
    f = f || {};
    let list = allQuestions();
    if (f.chapter && f.chapter !== "all") list = list.filter(q => q.chapterId === f.chapter);
    if (f.difficulty && f.difficulty !== "all") list = list.filter(q => q.difficulty === Number(f.difficulty));
    if (f.type && f.type !== "all") list = list.filter(q => q.type === f.type);
    return list;
  }

  /* 生成模拟卷：按 mock.mix 的难度分布从全题库抽样；不足则跨难度补足 */
  function buildMock(mockId) {
    const m = C.mocks.find(x => x.id === mockId);
    if (!m) return [];
    const rng = seeded(hashStr(mockId) + 7);
    const pool = allQuestions();
    const byDiff = { 1: [], 2: [], 3: [] };
    pool.forEach(q => byDiff[q.difficulty].push(q));
    let picked = [];
    const used = new Set();
    const take = (bucket, n) => {
      const avail = shuffle(bucket, rng).filter(q => !used.has(q.id));
      for (let i = 0; i < n && i < avail.length; i++) { used.add(avail[i].id); picked.push(avail[i]); }
    };
    let remaining = m.count;
    [1, 2, 3].forEach(d => {
      const need = Math.min(m.mix[d] || 0, remaining);
      if (need > 0) { take(byDiff[d], need); remaining -= need; }
    });
    // 跨难度补足（若某难度题量不足以满足 mix）
    if (remaining > 0) {
      const rest = shuffle(pool, rng).filter(q => !used.has(q.id));
      for (let i = 0; i < remaining && i < rest.length; i++) { used.add(rest[i].id); picked.push(rest[i]); }
    }
    return shuffle(picked, rng).map(q => Object.assign({}, q));
  }

  /* ---------- 持久化状态 ---------- */
  let state = load();

  /* ---------- 练习记录 ---------- */
  // results: [{qid, correct:boolean}]
  function recordPractice(chapterId, results) {
    const total = results.length;
    const correct = results.filter(r => r.correct).length;
    const prev = state.practiced[chapterId] || { count: 0, correct: 0, ts: 0 };
    state.practiced[chapterId] = {
      count: prev.count + total,
      correct: prev.correct + correct,
      ts: Date.now()
    };
    // 答错的写入错题本（去重，按 qid）
    results.forEach(r => {
      if (!r.correct) addWrong(r.qid, r.chapterId, r.userAnswer, false);
    });
    save();
  }

  /* ---------- 错题本 ---------- */
  function addWrong(qid, chapterId, userAnswer, persist) {
    if (state.wrong.some(w => w.qid === qid && !isReviewedById(w.id))) {
      // 已存在未掌握的错题，刷新作答
      const w = state.wrong.find(x => x.qid === qid);
      if (w) { w.userAnswer = userAnswer; w.ts = Date.now(); }
    } else if (!state.wrong.some(w => w.qid === qid)) {
      state.wrong.push({ id: "w_" + qid + "_" + Date.now(), qid, chapterId, userAnswer, ts: Date.now() });
    }
    if (persist !== false) save();
  }
  function isReviewedById(id) { return state.reviewed.indexOf(id) >= 0; }
  function removeWrong(id) {
    state.wrong = state.wrong.filter(w => w.id !== id);
    state.reviewed = state.reviewed.filter(x => x !== id);
    save();
  }
  function markReviewed(id, val) {
    if (val === false) state.reviewed = state.reviewed.filter(x => x !== id);
    else if (state.reviewed.indexOf(id) < 0) state.reviewed.push(id);
    save();
  }
  function getWrong(f) {
    f = f || {};
    let list = state.wrong.slice();
    if (f.chapter && f.chapter !== "all") list = list.filter(w => w.chapterId === f.chapter);
    if (f.mastered === true) list = list.filter(w => isReviewedById(w.id));
    if (f.mastered === false) list = list.filter(w => !isReviewedById(w.id));
    return list.map(w => {
      const q = questionById(w.qid) || {};
      return Object.assign({}, w, {
        stem: q.stem, options: q.options, type: q.type, answer: q.answer,
        explanation: q.explanation, difficulty: q.difficulty, chapterName: q.chapterName,
        reviewed: isReviewedById(w.id)
      });
    });
  }

  /* ---------- 模拟成绩 ---------- */
  function recordMock(name, results, total) {
    const correct = results.filter(r => r.correct).length;
    state.mocks.unshift({ mockId: name, name, score: correct, total, ts: Date.now(), details: results });
    save();
  }

  /* ---------- 统计 ---------- */
  function getStats() {
    let practicedTotal = 0, correctTotal = 0;
    const chapters = C.chapters.map(ch => {
      const p = state.practiced[ch.id] || { count: 0, correct: 0 };
      practicedTotal += p.count; correctTotal += p.count;
      const acc = p.count ? Math.round((p.correct / p.count) * 100) : 0;
      return {
        id: ch.id, name: ch.name, module: ch.module,
        total: ch.questions.length, practiced: p.count, correct: p.correct,
        accuracy: p.count ? acc : 0,
        mastered: p.count >= ch.questions.length && acc >= 80
      };
    });
    correctTotal = 0;
    C.chapters.forEach(ch => { const p = state.practiced[ch.id]; if (p) correctTotal += p.correct; });
    const accuracy = practicedTotal ? Math.round((correctTotal / practicedTotal) * 100) : 0;
    const started = chapters.filter(c => c.practiced > 0).length;
    const mastered = chapters.filter(c => c.mastered).length;
    const mockAvg = state.mocks.length
      ? Math.round(state.mocks.reduce((s, m) => s + (m.score / m.total) * 100, 0) / state.mocks.length)
      : 0;
    const pendingWrong = state.wrong.filter(w => !isReviewedById(w.id)).length;
    return {
      practicedTotal, correctTotal, accuracy,
      startedChapters: started, totalChapters: C.chapters.length,
      masteredChapters: mastered,
      wrongCount: state.wrong.length, pendingWrong,
      mockCount: state.mocks.length, mockAvg,
      chapters
    };
  }

  function setProfile(nick) { state.profile.nickname = nick || "考生"; save(); }
  function reset() { state = defaultState(); save(); }

  /* ---------- 对外 API ---------- */
  window.Store = {
    allQuestions, questionById, byChapter, filterQuestions, buildMock,
    recordPractice, addWrong, removeWrong, markReviewed, isReviewed: isReviewedById, getWrong,
    recordMock, getStats, setProfile, reset, state: () => state,
    meta: () => C.meta, difficultyLabel: () => C.difficultyLabel, typeLabel: () => C.typeLabel
  };
})();
