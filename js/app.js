/* ============================================================
 * 界面层：看板 / 知识点梳理 / 章节练习 / 模拟试题 / 错题回顾
 * ============================================================ */
(function () {
  const S = window.Store, C = window.COURSE;
  const D = S.difficultyLabel(), T = S.typeLabel();
  const META = S.meta();

  const NAV = [
    { id: "dashboard", label: "学习看板" },
    { id: "knowledge", label: "知识点梳理" },
    { id: "practice", label: "章节练习" },
    { id: "mock", label: "模拟试题" },
    { id: "wrong", label: "错题回顾" },
    { id: "settings", label: "设置" }
  ];
  let view = "dashboard";
  let practiceFilter = { chapter: "all", difficulty: "all", type: "all" };
  let wrongFilter = { chapter: "all", mastered: false };

  /* ---------- DOM 构建工具 ---------- */
  function el(tag, attrs, ...kids) {
    const n = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      const v = attrs[k];
      if (v == null) continue;
      if (k === "class") n.className = v;
      else if (k === "html") n.innerHTML = v;
      else if (k === "text") n.textContent = v;
      else if (k.indexOf("on") === 0 && typeof v === "function") n.addEventListener(k.slice(2).toLowerCase(), v);
      else n.setAttribute(k, v);
    }
    kids.flat().forEach(c => {
      if (c == null || c === false) return;
      n.appendChild((typeof c === "string" || typeof c === "number") ? document.createTextNode(String(c)) : c);
    });
    return n;
  }
  const clear = n => { while (n.firstChild) n.removeChild(n.firstChild); };
  function toggleArr(arr, v) { const i = arr.indexOf(v); if (i >= 0) arr.splice(i, 1); else arr.push(v); }
  function chosenCorrect(q, chosen) {
    if (q.type === "multi") {
      if (!chosen || chosen.length === 0) return false;
      const a = chosen.slice().sort(), b = q.answer.slice().sort();
      return a.length === b.length && a.every((v, i) => v === b[i]);
    }
    return Number(chosen) === q.answer;
  }
  function answerText(q, idx) {
    if (q.type === "multi") return (idx || []).map(i => String.fromCharCode(65 + i)).join("、");
    return idx == null ? "—" : String.fromCharCode(65 + Number(idx));
  }
  /* 把作答值格式化为「字母. 选项文本」（填空直接返回原文），便于错题对比 */
  function fmtAnswer(q, val) {
    if (!q || !q.options) return (val == null || val === "") ? "—" : String(val);
    const letter = i => String.fromCharCode(65 + i);
    if (q.type === "multi") {
      const arr = (val || []).filter(i => i != null).map(i => letter(i) + ". " + (q.options[i] || ""));
      return arr.length ? arr.join("；") : "—";
    }
    if (val == null) return "—";
    const i = Number(val);
    return letter(i) + ". " + (q.options[i] != null ? q.options[i] : "");
  }

  /* ---------- 路由 ---------- */
  function route(v) {
    view = v;
    document.querySelectorAll(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.v === v));
    const main = document.getElementById("app");
    clear(main);
    if (v === "dashboard") renderDashboard(main);
    else if (v === "knowledge") renderKnowledge(main);
    else if (v === "practice") renderPractice(main);
    else if (v === "mock") renderMock(main);
    else if (v === "wrong") renderWrong(main);
    else if (v === "settings") renderSettings(main);
    window.scrollTo(0, 0);
  }

  /* ================= 学习看板 ================= */
  function renderDashboard(main) {
    clear(main);
    const st = S.getStats();
    const head = el("div", { class: "page-head" },
      el("h1", null, "学习看板"),
      el("p", { class: "sub" }, "考生 " + S.state().profile.nickname + " · " + META.exam));
    main.appendChild(head);

    const cards = el("div", { class: "stat-grid" },
      statCard("已练习题目", st.practicedTotal + " 题", "累计作答"),
      statCard("整体正确率", st.accuracy + "%", "答对 " + st.correctTotal + " 题"),
      statCard("已掌握章节", st.masteredChapters + " / " + st.totalChapters, "正确率≥80%且已练完"),
      statCard("待巩固错题", st.pendingWrong + " 题", "共 " + st.wrongCount + " 题入错题本"),
      statCard("模拟平均分", st.mockAvg + " 分", "已做 " + st.mockCount + " 套"),
      statCard("已启动章节", st.startedChapters + " / " + st.totalChapters, "已开展练习")
    );
    main.appendChild(cards);

    // 章节进度
    main.appendChild(el("h2", { class: "sec" }, "章节掌握进度"));
    const list = el("div", { class: "chap-list" });
    st.chapters.forEach(c => {
      const pct = c.total ? Math.min(100, Math.round(c.practiced / c.total * 100)) : 0;
      const row = el("div", { class: "chap-row" + (c.mastered ? " mastered" : "") },
        el("div", { class: "chap-info" },
          el("span", { class: "chap-name" }, c.name),
          el("span", { class: "chap-meta" }, "已练 " + c.practiced + "/" + c.total + " · 正确率 " + c.accuracy + "%" + (c.mastered ? " · 已掌握 ✓" : ""))),
        el("div", { class: "bar" }, el("div", { class: "bar-fill", style: "width:" + pct + "%" })),
        el("div", { class: "chap-act" },
          el("button", { class: "btn-mini", onclick: () => { practiceFilter.chapter = c.id; route("practice"); } }, "练习"),
          el("button", { class: "btn-mini ghost", onclick: () => { knowledgeSelect = c.id; route("knowledge"); } }, "知识点"))
      );
      list.appendChild(row);
    });
    main.appendChild(list);

    // 快捷入口
    main.appendChild(el("div", { class: "cta-row" },
      el("button", { class: "btn btn-primary", onclick: () => route("practice") }, "开始章节练习"),
      el("button", { class: "btn", onclick: () => route("mock") }, "做一套模拟题"),
      el("button", { class: "btn ghost", onclick: () => route("wrong") }, "复习错题（" + st.pendingWrong + "）")));
  }
  function statCard(title, val, sub) {
    return el("div", { class: "stat-card" },
      el("div", { class: "stat-val" }, val),
      el("div", { class: "stat-title" }, title),
      el("div", { class: "stat-sub" }, sub));
  }

  /* ================= 知识点梳理 ================= */
  let knowledgeSelect = null;
  function renderKnowledge(main) {
    clear(main);
    const head = el("div", { class: "page-head" },
      el("h1", null, "知识点梳理"),
      el("p", { class: "sub" }, "按模块与章节组织的考点清单，点击章节展开知识点"));
    main.appendChild(head);

    const modules = [];
    C.chapters.forEach(c => { let m = modules.find(x => x.name === c.module); if (!m) { m = { name: c.module, items: [] }; modules.push(m); } m.items.push(c); });

    // 章节快速选择
    const sel = el("select", { class: "sel", onchange: e => { knowledgeSelect = e.target.value || null; renderKnowledge(main); } });
    sel.appendChild(el("option", { value: "" }, "— 选择章节快速定位 —"));
    C.chapters.forEach(c => sel.appendChild(el("option", { value: c.id, selected: knowledgeSelect === c.id ? "selected" : null }, c.module + " / " + c.name)));
    main.appendChild(el("div", { class: "toolbar" }, sel));

    modules.forEach(m => {
      main.appendChild(el("h2", { class: "sec" }, m.name));
      const wrap = el("div", { class: "kp-chaps" });
      m.items.forEach(c => {
        const open = knowledgeSelect === c.id;
        const kpBox = el("div", { class: "kp-box" + (open ? " open" : "") });
        const header = el("div", { class: "kp-head", onclick: () => { knowledgeSelect = open ? null : c.id; renderKnowledge(main); } },
          el("span", { class: "kp-arrow" }, open ? "▾" : "▸"),
          el("span", { class: "kp-title" }, c.name),
          el("span", { class: "kp-count" }, c.knowledgePoints.length + " 个考点 · " + c.questions.length + " 题"));
        kpBox.appendChild(header);
        if (open) {
          const grid = el("div", { class: "kp-grid" });
          c.knowledgePoints.forEach(kp => {
            grid.appendChild(el("div", { class: "kp-card" },
              el("div", { class: "kp-card-title" }, kp.title),
              el("div", { class: "kp-card-body" }, kp.body)));
          });
          kpBox.appendChild(grid);
          kpBox.appendChild(el("div", { class: "kp-act" },
            el("button", { class: "btn-mini", onclick: () => { practiceFilter.chapter = c.id; route("practice"); } }, "练习本章"),
            el("button", { class: "btn-mini ghost", onclick: () => route("practice") }, "全部练习")));
        }
        wrap.appendChild(kpBox);
      });
      main.appendChild(wrap);
    });
  }

  /* ================= 章节练习（章节 + 难度筛选） ================= */
  function renderPractice(main) {
    clear(main);
    const head = el("div", { class: "page-head" },
      el("h1", null, "章节练习"),
      el("p", { class: "sub" }, "支持按章节、难度、题型筛选，提交后即时判分并记入进度与错题本"));
    main.appendChild(head);

    const f = practiceFilter;
    // 章节选择
    const chapSel = el("select", { class: "sel", onchange: e => f.chapter = e.target.value });
    chapSel.appendChild(el("option", { value: "all", selected: f.chapter === "all" ? "selected" : null }, "全部章节"));
    C.chapters.forEach(c => chapSel.appendChild(el("option", { value: c.id, selected: f.chapter === c.id ? "selected" : null }, c.module + " / " + c.name)));

    const typeSel = el("select", { class: "sel", onchange: e => f.type = e.target.value });
    [["all", "全部题型"], ["single", "单选"], ["multi", "多选"], ["bool", "判断"]].forEach(([v, t]) =>
      typeSel.appendChild(el("option", { value: v, selected: f.type === v ? "selected" : null }, t)));

    const diffBox = el("div", { class: "seg" });
    [["all", "全部难度"], ["1", "易"], ["2", "中"], ["3", "难"]].forEach(([v, t]) => {
      diffBox.appendChild(el("button", { class: "seg-btn" + (f.difficulty === v ? " on" : ""), onclick: () => { f.difficulty = v; renderPractice(main); } }, t));
    });

    const preview = S.filterQuestions(f).length;
    main.appendChild(el("div", { class: "filters" },
      el("label", { class: "fl" }, "章节", chapSel),
      el("label", { class: "fl" }, "题型", typeSel),
      el("div", { class: "fl" }, "难度", diffBox),
      el("div", { class: "fl preview" }, "命中 " + preview + " 题")
    ));

    main.appendChild(el("div", { class: "cta-row" },
      el("button", { class: "btn btn-primary", onclick: () => {
        const qs = S.filterQuestions(f);
        if (!qs.length) return flash("当前筛选条件无题目");
        runQuiz(main, {
          title: "章节练习 · " + (f.chapter === "all" ? "全部章节" : (C.chapters.find(c => c.id === f.chapter) || {}).name),
          questions: qs, submitLabel: "提交并查看解析",
          onComplete: results => {
            const grouped = {};
            results.forEach(r => { (grouped[r.chapterId] = grouped[r.chapterId] || []).push(r); });
            Object.keys(grouped).forEach(cid => S.recordPractice(cid, grouped[cid]));
            flash("已记录 " + results.length + " 题，正确 " + results.filter(r => r.correct).length + " 题");
            renderDashboard(document.getElementById("app"));
          }
        });
      } }, "开始练习（" + preview + " 题）"),
      el("button", { class: "btn ghost", onclick: () => route("knowledge") }, "先看知识点")));
  }

  /* ================= 模拟试题 ================= */
  function renderMock(main) {
    clear(main);
    const head = el("div", { class: "page-head" },
      el("h1", null, "模拟试题"),
      el("p", { class: "sub" }, "全真模拟卷，按考纲难度分布从题库抽样生成，提交后给出成绩与逐题解析"));
    main.appendChild(head);

    const last = S.state().mocks;
    if (last.length) {
      main.appendChild(el("h2", { class: "sec" }, "最近成绩"));
      const tbl = el("div", { class: "mock-hist" });
      last.slice(0, 5).forEach(m => {
        const pct = Math.round(m.score / m.total * 100);
        tbl.appendChild(el("div", { class: "mock-hist-row" },
          el("span", null, m.name),
          el("span", null, m.score + " / " + m.total + "（" + pct + "%）"),
          el("span", { class: "mock-date" }, new Date(m.ts).toLocaleString("zh-CN", { hour12: false }))));
      });
      main.appendChild(tbl);
    }

    main.appendChild(el("h2", { class: "sec" }, "模拟卷"));
    const grid = el("div", { class: "mock-grid" });
    C.mocks.forEach(m => {
      grid.appendChild(el("div", { class: "mock-card" },
        el("div", { class: "mock-name" }, m.name),
        el("div", { class: "mock-desc" }, m.desc),
        el("div", { class: "mock-meta" }, "题量 " + m.count + " · 难度 易" + (m.mix[1] || 0) + "/中" + (m.mix[2] || 0) + "/难" + (m.mix[3] || 0)),
        el("button", { class: "btn btn-primary", onclick: () => {
          const qs = S.buildMock(m.id);
          runQuiz(main, {
            title: m.name, questions: qs, submitLabel: "交卷并查看成绩",
            onComplete: results => {
              const correct = results.filter(r => r.correct).length;
              S.recordMock(m.name, results, results.length);
              flash("模拟成绩 " + correct + "/" + results.length);
            }
          });
        } }, "开始模拟（" + m.count + " 题）")));
    });
    main.appendChild(grid);
  }

  /* ================= 错题回顾 ================= */
  function renderWrong(main) {
    clear(main);
    const head = el("div", { class: "page-head" },
      el("h1", null, "错题回顾"),
      el("p", { class: "sub" }, "自动收集答错题目，可重练、标记已掌握或移除"));
    main.appendChild(head);

    const wf = wrongFilter;
    const chapSel = el("select", { class: "sel", onchange: e => { wf.chapter = e.target.value; renderWrong(main); } });
    chapSel.appendChild(el("option", { value: "all", selected: wf.chapter === "all" ? "selected" : null }, "全部章节"));
    C.chapters.forEach(c => chapSel.appendChild(el("option", { value: c.id, selected: wf.chapter === c.id ? "selected" : null }, c.name)));

    const seg = el("div", { class: "seg" });
    [["false", "待巩固"], ["true", "已掌握"], ["all", "全部"]].forEach(([v, t]) => {
      const active = (wf.mastered === false && v === "false") || (wf.mastered === true && v === "true") || (wf.mastered === "all" && v === "all");
      seg.appendChild(el("button", { class: "seg-btn" + (active ? " on" : ""), onclick: () => { wf.mastered = v; renderWrong(main); } }, t));
    });

    const list = S.getWrong({ chapter: wf.chapter, mastered: wf.mastered === "all" ? undefined : wf.mastered });
    main.appendChild(el("div", { class: "filters" },
      el("label", { class: "fl" }, "章节", chapSel),
      el("div", { class: "fl" }, "状态", seg),
      el("div", { class: "fl preview" }, "共 " + list.length + " 题")
    ));

    if (!list.length) {
      main.appendChild(el("div", { class: "empty" }, "暂无错题，去练习或模拟中巩固吧 ✓"));
      return;
    }

    main.appendChild(el("div", { class: "cta-row" },
      el("button", { class: "btn btn-primary", onclick: () => {
        const qs = list.map(w => Object.assign({}, w, { id: w.qid }));
        runQuiz(main, {
          title: "错题重练（" + list.length + " 题）", questions: qs, submitLabel: "提交",
          onComplete: results => {
            const ok = results.filter(r => r.correct).length;
            results.forEach(r => { if (r.correct) S.markReviewed(wrongIdByQid(r.qid), true); });
            flash("重练 " + results.length + " 题，答对 " + ok + " 题，已自动将答对题移出待巩固");
            renderWrong(document.getElementById("app"));
          }
        });
      } }, "全部重练")));

    const box = el("div", { class: "wrong-list" });
    list.forEach(w => {
      box.appendChild(el("div", { class: "wrong-card" + (w.reviewed ? " done" : "") },
        el("div", { class: "wrong-meta" },
          el("span", { class: "badge t" + w.type }, T[w.type]),
          el("span", { class: "badge d" + w.difficulty }, D[w.difficulty]),
          el("span", { class: "badge ch" }, w.chapterName || ""),
          w.reviewed ? el("span", { class: "badge ok" }, "已掌握") : null),
        el("div", { class: "wrong-stem" }, w.stem),
        el("div", { class: "wrong-ans" },
          el("div", { class: "ans-row your" },
            el("span", { class: "ans-label" }, "你的答案"),
            el("span", { class: "ans-val" }, fmtAnswer(w, w.userAnswer))
          ),
          el("div", { class: "ans-row correct" },
            el("span", { class: "ans-label" }, "正确答案"),
            el("span", { class: "ans-val" }, fmtAnswer(w, w.answer))
          )
        ),
        w.explanation ? el("div", { class: "wrong-exp" }, "解析：" + w.explanation) : null,
        el("div", { class: "wrong-act" },
          el("button", { class: "btn-mini", onclick: () => S.markReviewed(w.id, !w.reviewed) || renderWrong(main) }, w.reviewed ? "取消掌握" : "标记已掌握"),
          el("button", { class: "btn-mini ghost", onclick: () => { S.removeWrong(w.id); renderWrong(main); } }, "移除"))
      ));
    });
    main.appendChild(box);
  }
  function wrongIdByQid(qid) { const w = S.state().wrong.find(x => x.qid === qid); return w ? w.id : null; }

  /* ================= 设置 ================= */
  function renderSettings(main) {
    clear(main);
    const head = el("div", { class: "page-head" }, el("h1", null, "设置"), el("p", { class: "sub" }, "个性化与数据管理"));
    main.appendChild(head);
    const st = S.state();
    const stat = S.getStats();
    const nick = el("input", { class: "inp", value: st.profile.nickname });
    main.appendChild(el("div", { class: "set-row" },
      el("label", null, "考生昵称"),
      nick,
      el("button", { class: "btn btn-primary", onclick: () => { S.setProfile(nick.value.trim() || "考生"); flash("已保存"); renderDashboard(document.getElementById("app")); } }, "保存")));
    main.appendChild(el("div", { class: "set-row" },
      el("label", null, "学习数据"),
      el("span", { class: "set-note" }, "已练 " + stat.practicedTotal + " 题 · 错题 " + st.wrong.length + " · 模拟 " + st.mocks.length + " 套")));
    main.appendChild(el("div", { class: "set-row" },
      el("span", { class: "set-note" }, "重置将清空全部进度、错题与模拟成绩，不可恢复。"),
      el("button", { class: "btn danger", onclick: () => { if (confirm("确认重置全部学习数据？")) { S.reset(); flash("已重置"); route("dashboard"); } } }, "重置全部数据")));
    main.appendChild(el("div", { class: "set-row" },
      el("span", { class: "set-note" }, "本工具题库为自测整理，正式备考请以官方教程与历年真题为准。")));
  }

  /* ================= 通用答题引擎 ================= */
  function runQuiz(mount, opts) {
    const questions = opts.questions;
    const state = questions.map(q => ({ chosen: q.type === "multi" ? [] : null }));

    function renderForm() {
      clear(mount);
      const wrap = el("div", { class: "quiz" });
      wrap.appendChild(el("div", { class: "quiz-head" },
        el("h2", null, opts.title),
        el("span", { class: "quiz-sub" }, "共 " + questions.length + " 题 · 提交后显示正确答案与解析")));
      questions.forEach((q, i) => {
        const card = el("div", { class: "q-card" });
        card.appendChild(el("div", { class: "q-meta" },
          el("span", { class: "badge t" + q.type }, T[q.type]),
          el("span", { class: "badge d" + q.difficulty }, D[q.difficulty]),
          q.chapterName ? el("span", { class: "badge ch" }, q.chapterName) : null));
        card.appendChild(el("div", { class: "q-stem" }, (i + 1) + ". " + q.stem));
        const ob = el("div", { class: "q-opts" });
        q.options.forEach((opt, oi) => {
          const id = "q" + i + "o" + oi;
          if (q.type === "multi") {
            const cb = el("input", { type: "checkbox", id, value: oi });
            cb.addEventListener("change", () => toggleArr(state[i].chosen, oi));
            ob.appendChild(el("label", { class: "opt", for: id }, cb, el("span", null, String.fromCharCode(65 + oi) + ". " + opt)));
          } else {
            const rb = el("input", { type: "radio", name: "q" + i, id, value: oi });
            rb.addEventListener("change", () => { state[i].chosen = oi; });
            ob.appendChild(el("label", { class: "opt", for: id }, rb, el("span", null, String.fromCharCode(65 + oi) + ". " + opt)));
          }
        });
        card.appendChild(ob);
        wrap.appendChild(card);
      });
      wrap.appendChild(el("div", { class: "quiz-bar" },
        el("button", { class: "btn btn-primary", onclick: submit }, opts.submitLabel || "提交并查看解析"),
        el("button", { class: "btn ghost", onclick: () => route(view) }, "退出")));
      mount.appendChild(wrap);
      window.scrollTo(0, 0);
    }

    function submit() {
      const results = questions.map((q, i) => {
        const correct = chosenCorrect(q, state[i].chosen);
        return { qid: q.id, chapterId: q.chapterId, userAnswer: state[i].chosen, correct };
      });
      const correctN = results.filter(r => r.correct).length;
      const passLine = META.passLine;
      const pct = Math.round(correctN / questions.length * 100);

      clear(mount);
      const wrap = el("div", { class: "quiz-result" });
      wrap.appendChild(el("div", { class: "result-head" },
        el("h2", null, opts.title + " · 成绩"),
        el("div", { class: "result-score" + (pct >= (passLine / 75 * 100) ? " pass" : " fail") },
          correctN + " / " + questions.length + "（" + pct + "%）"),
        el("div", { class: "result-tip" },
          opts.title.indexOf("模拟") >= 0
            ? (pct >= (passLine / 75 * 100) ? "达到合格线（≥" + passLine + "），继续保持！" : "未达合格线（≥" + passLine + "），重点巩固错题。")
            : "已记入学习进度与错题本")));

      questions.forEach((q, i) => {
        const ok = results[i].correct;
        const card = el("div", { class: "q-card " + (ok ? "q-ok" : "q-bad") });
        card.appendChild(el("div", { class: "q-meta" },
          el("span", { class: "badge " + (ok ? "ok" : "no") }, ok ? "✓ 正确" : "✗ 错误"),
          el("span", { class: "badge t" + q.type }, T[q.type]),
          el("span", { class: "badge d" + q.difficulty }, D[q.difficulty])));
        card.appendChild(el("div", { class: "q-stem" }, (i + 1) + ". " + q.stem));
        const ob = el("div", { class: "q-opts" });
        q.options.forEach((opt, oi) => {
          let cls = "opt";
          const isCorrect = q.type === "multi" ? q.answer.indexOf(oi) >= 0 : oi === q.answer;
          const isChosen = q.type === "multi" ? (state[i].chosen || []).indexOf(oi) >= 0 : state[i].chosen === oi;
          if (isCorrect) cls += " correct";
          else if (isChosen) cls += " wrong";
          ob.appendChild(el("div", { class: cls },
            el("span", null, String.fromCharCode(65 + oi) + ". " + opt),
            isCorrect ? el("span", { class: "tag" }, "正确答案") : (isChosen ? el("span", { class: "tag no" }, "你的选择") : null)));
        });
        card.appendChild(ob);
        if (q.explanation) card.appendChild(el("div", { class: "wrong-exp" }, "解析：" + q.explanation));
        wrap.appendChild(card);
      });

      wrap.appendChild(el("div", { class: "quiz-bar" },
        el("button", { class: "btn btn-primary", onclick: () => renderForm() }, "再做一遍"),
        el("button", { class: "btn", onclick: () => route("dashboard") }, "回看板"),
        el("button", { class: "btn ghost", onclick: () => route("wrong") }, "看错题本")));
      mount.appendChild(wrap);
      window.scrollTo(0, 0);
      if (typeof opts.onComplete === "function") opts.onComplete(results);
    }

    renderForm();
  }

  /* ---------- 轻提示 ---------- */
  let flashTimer = null;
  function flash(msg) {
    let t = document.getElementById("flash");
    if (!t) { t = el("div", { id: "flash", class: "flash" }); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("show");
    clearTimeout(flashTimer); flashTimer = setTimeout(() => t.classList.remove("show"), 1800);
  }

  /* ---------- 初始化 ---------- */
  function init() {
    const nav = document.getElementById("nav");
    NAV.forEach(n => nav.appendChild(el("button", { class: "nav-item" + (n.id === view ? " active" : ""), "data-v": n.id, onclick: () => route(n.id) }, n.label)));
    route("dashboard");
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
