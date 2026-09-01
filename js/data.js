/* ============================================================
 * 系统集成项目管理工程师（中级）备考学习工具 - 考纲数据
 * 考纲对齐《系统集成项目管理工程师教程（第3版）》+ 2024 版考试大纲
 * 题型说明：single=单选  multi=多选  bool=判断
 * 难度：1=易  2=中  3=难
 * 说明：以下题为原创/整理的自测题，用于知识巩固；正式备考请以官方教程与历年真题为准。
 * ============================================================ */
window.COURSE = {
  meta: {
    title: "系统集成项目管理工程师（中级）备考学习工具",
    exam: "计算机技术与软件专业技术资格（水平）考试 · 系统集成项目管理工程师（中级）",
    version: "1.0",
    passLine: 45,            // 上午基础知识满分75，合格线通常45
    mockTimeMin: 150         // 模拟题建议时长（分钟）
  },
  difficultyLabel: { 1: "易", 2: "中", 3: "难" },
  typeLabel: { single: "单选", multi: "多选", bool: "判断" },

  chapters: [
    /* ===================== 第1章 信息化与系统集成基础 ===================== */
    {
      id: "ch1", module: "基础篇", name: "信息化与系统集成基础",
      knowledgePoints: [
        { id: "ch1-k1", title: "信息化的内涵与六要素", body: "信息化是以信息技术广泛应用为主导，信息资源为核心，信息网络为基础，信息技术产业为支撑，以法规、政策、标准为保障，以信息技术人才为依托的长期历史过程。六要素：信息技术应用（龙头）、信息资源（核心）、信息网络（基础）、信息技术和产业（支撑）、信息化人才（成功之本）、信息化政策法规和标准规范（保障）。" },
        { id: "ch1-k2", title: "信息系统的生命周期", body: "立项 → 开发 → 运维 → 消亡。开发阶段又分：总体规划、系统分析、系统设计、系统实施、系统验收（系统分析/设计/实施为核心）。" },
        { id: "ch1-k3", title: "信息系统集成", body: "以计算机软件、硬件、网络通信等为基础，将分离的设备、功能、信息等集成到相互关联、统一协调的系统中。层次：设备系统集成（硬件/网络）、应用系统集成（应用集成含界面/流程/数据集成）。" },
        { id: "ch1-k4", title: "IT服务管理（ITIL / ITSS）", body: "ITIL 关注 IT 服务管理最佳实践；ITSS（信息技术服务标准）是我国自主制定的 IT 服务标准体系，含人员、过程、技术、资源四要素。" },
        { id: "ch1-k5", title: "软件工程与开发模型", body: "瀑布模型（阶段顺序、文档驱动）、原型模型（快速构造原型）、迭代/增量、螺旋模型（结合风险分析）、敏捷（Scrum、XP，拥抱变化、小步快跑）。" },
        { id: "ch1-k6", title: "新一代信息技术", body: "云计算（IaaS/PaaS/SaaS）、大数据（4V：Volume/Velocity/Variety/Value）、物联网（感知层/网络层/应用层）、移动互联网、人工智能、区块链。" }
      ],
      questions: [
        { id: "ch1-1", type: "single", difficulty: 1, kp: "ch1-k1", stem: "国家信息化体系六要素中，作为核心的是（ ）。", options: ["信息技术应用", "信息资源", "信息网络", "信息化人才"], answer: 1, explanation: "信息资源是核心；信息技术应用是龙头/主导；信息网络是基础；信息化人才是成功之本；政策法规标准是保障。" },
        { id: "ch1-2", type: "single", difficulty: 1, kp: "ch1-k2", stem: "信息系统生命周期中，包含总体规划、系统分析、系统设计、系统实施、系统验收的阶段是（ ）。", options: ["立项阶段", "开发阶段", "运维阶段", "消亡阶段"], answer: 1, explanation: "开发阶段包含总体规划、系统分析、系统设计、系统实施、系统验收五个子阶段。" },
        { id: "ch1-3", type: "single", difficulty: 2, kp: "ch1-k3", stem: "将多个应用系统之间的数据和业务流程打通，实现跨系统业务协同，属于（ ）。", options: ["设备系统集成", "网络集成", "应用系统集成（流程集成）", "安全集成"], answer: 2, explanation: "应用系统集成（集成化应用）包括界面集成、数据集成、流程（控制/业务）集成，使多系统协同。" },
        { id: "ch1-4", type: "single", difficulty: 2, kp: "ch1-k4", stem: "我国自主制定、以人员/过程/技术/资源四要素为框架的 IT 服务标准体系的简称是（ ）。", options: ["ITIL", "ITSS", "COBIT", "CMMI"], answer: 1, explanation: "ITSS 是信息技术服务标准，强调人员、过程、技术、资源四要素；ITIL 是英国发起的 IT 服务管理最佳实践。" },
        { id: "ch1-5", type: "single", difficulty: 1, kp: "ch1-k5", stem: "强调阶段顺序、以文档为驱动、需求变更成本高的典型开发模型是（ ）。", options: ["瀑布模型", "原型模型", "敏捷开发", "螺旋模型"], answer: 0, explanation: "瀑布模型阶段顺序、文档驱动，早期需求变更代价小但后期变更成本高。" },
        { id: "ch1-6", type: "single", difficulty: 2, kp: "ch1-k6", stem: "大数据的 4V 特征不包括（ ）。", options: ["Volume（海量）", "Velocity（高速）", "Variety（多样）", "Valid（有效）"], answer: 3, explanation: "4V 为 Volume、Velocity、Variety、Value（价值密度低），无 Valid。" },
        { id: "ch1-7", type: "multi", difficulty: 2, kp: "ch1-k1", stem: "下列关于国家信息化体系六要素的说法，正确的有（ ）。", options: ["信息技术应用是龙头", "信息资源是核心", "信息化人才是成功之本", "信息网络是核心"], answer: [0, 1, 2], explanation: "核心=信息资源，基础=信息网络，龙头=信息技术应用，成功之本=人才，保障=政策法规标准。" },
        { id: "ch1-8", type: "multi", difficulty: 3, kp: "ch1-k6", stem: "云计算的服务模式包括（ ）。", options: ["IaaS（基础设施即服务）", "PaaS（平台即服务）", "SaaS（软件即服务）", "DaaS（数据即服务，非三大基本模式之一）"], answer: [0, 1, 2], explanation: "云计算三大基础服务模式为 IaaS、PaaS、SaaS。" },
        { id: "ch1-9", type: "bool", difficulty: 1, kp: "ch1-k2", stem: "信息系统的生命周期依次为：立项、开发、运维、消亡。", options: ["正确", "错误"], answer: 0, explanation: "正确，这是信息系统生命周期的四个大阶段。" },
        { id: "ch1-10", type: "single", difficulty: 2, kp: "ch1-k3", stem: "在系统集成中，将分散的硬件设备、网络、软件组合成一个有机整体的集成属于（ ）。", options: ["应用系统集成", "设备系统集成", "数据集成", "流程集成"], answer: 1, explanation: "设备系统集成（硬件系统集成/弱电集成）把设备/网络/软件整合为统一系统。" }
      ]
    },

    /* ===================== 第2章 项目管理基础知识 ===================== */
    {
      id: "ch2", module: "基础篇", name: "项目管理基础知识",
      knowledgePoints: [
        { id: "ch2-k1", title: "项目的定义与特征", body: "项目是为创造独特产品、服务或成果而进行的临时性工作。三大特征：临时性（有明确起止）、独特性（唯一交付物）、渐进明细（逐步完善）。" },
        { id: "ch2-k2", title: "项目与运营的区别", body: "项目是临时的、独特的；运营是持续的、重复的。两者需通过资源协调、成果交付相互关联。" },
        { id: "ch2-k3", title: "五大过程组", body: "启动、规划、执行、监控、收尾。各过程组在不同阶段投入量不同，并非线性一次。" },
        { id: "ch2-k4", title: "十大知识领域", body: "整合（整体）管理、范围、进度、成本、质量、资源（人力）、沟通、风险、采购、干系人管理。对应 49 个过程（PMBOK 第6版）。" },
        { id: "ch2-k5", title: "项目管理三角形（制约因素）", body: "范围、时间、成本、质量相互制约；任一变动会影响其他。范围与质量是基础，时间、成本、质量是目标。" },
        { id: "ch2-k6", title: "组织结构类型", body: "职能型（项目经理权力小、资源分散）、项目型（项目经理权力大、资源独占）、矩阵型（弱/平衡/强，共享资源）。强矩阵项目经理权限较大。" },
        { id: "ch2-k7", title: "项目阶段与生命周期", body: "阶段关口（阶段审查）决定继续/暂停/终止。生命周期类型：预测型（瀑布）、迭代/增量、适应型（敏捷）。" },
        { id: "ch2-k8", title: "项目干系人", body: "能影响项目或受项目影响的个人或组织，包括发起人、客户、团队、职能部门、供应商等。" }
      ],
      questions: [
        { id: "ch2-1", type: "single", difficulty: 1, kp: "ch2-k1", stem: "项目的三个基本特征不包括（ ）。", options: ["临时性", "独特性", "渐进明细", "可重复性"], answer: 3, explanation: "项目是临时性、独特、渐进明细；可重复性是运营的特征。" },
        { id: "ch2-2", type: "single", difficulty: 1, kp: "ch2-k3", stem: "项目管理的五大过程组是（ ）。", options: ["启动、规划、执行、监控、收尾", "启动、设计、开发、测试、上线", "计划、组织、领导、控制、收尾", "需求、设计、实施、验收、运维"], answer: 0, explanation: "五大过程组：启动、规划、执行、监控、收尾。" },
        { id: "ch2-3", type: "single", difficulty: 2, kp: "ch2-k4", stem: "PMBOK 十大知识领域中，负责协调各知识领域、确保整体一致的是（ ）。", options: ["范围管理", "整合（整体）管理", "沟通管理", "干系人管理"], answer: 1, explanation: "整合（整体）管理负责统一协调各知识领域，制定项目章程、管理计划、整体变更控制等。" },
        { id: "ch2-4", type: "single", difficulty: 2, kp: "ch2-k6", stem: "在（ ）组织结构中，项目经理权力最小、资源由职能部门控制。", options: ["项目型", "强矩阵", "职能型", "平衡矩阵"], answer: 2, explanation: "职能型组织中项目经理权力最小（甚至无专职项目经理），资源归职能部门所有。" },
        { id: "ch2-5", type: "single", difficulty: 3, kp: "ch2-k6", stem: "某组织既有职能部门又有项目部门，项目成员全职在项目工作、项目经理有较大权限，该结构最可能是（ ）。", options: ["弱矩阵", "平衡矩阵", "强矩阵", "项目型"], answer: 3, explanation: "项目型组织中成员全职在项目、项目经理权力最大；强矩阵介于职能与项目型之间。题干强调'全职+较大权限'更偏项目型。" },
        { id: "ch2-6", type: "multi", difficulty: 2, kp: "ch2-k4", stem: "下列属于项目管理十大知识领域的有（ ）。", options: ["范围管理", "进度管理", "采购管理", "行政管理"], answer: [0, 1, 2], explanation: "十大领域：整合、范围、进度、成本、质量、资源、沟通、风险、采购、干系人。无'行政管理'。" },
        { id: "ch2-7", type: "multi", difficulty: 2, kp: "ch2-k5", stem: "项目管理三角形中相互制约的因素通常包括（ ）。", options: ["范围", "时间", "成本", "质量"], answer: [0, 1, 2, 3], explanation: "范围、时间、成本、质量相互制约，任一变动影响其他。" },
        { id: "ch2-8", type: "bool", difficulty: 1, kp: "ch2-k2", stem: "项目是临时的、独特的，而运营是持续的、重复的。", options: ["正确", "错误"], answer: 0, explanation: "正确，这是项目与运营的核心区别。" },
        { id: "ch2-9", type: "single", difficulty: 2, kp: "ch2-k3", stem: "在项目收尾过程组，最主要的工作是（ ）。", options: ["制定项目章程", "确认范围并移交成果、归档", "编制进度计划", "识别风险"], answer: 1, explanation: "收尾包括结束项目或阶段、合同收尾、移交成果、资料归档、总结经验。" },
        { id: "ch2-10", type: "single", difficulty: 1, kp: "ch2-k8", stem: "能够为项目提供资金或资源、并对项目结果有决定权的人通常称为（ ）。", options: ["项目经理", "项目发起人（Sponsor）", "职能经理", "团队成员"], answer: 1, explanation: "发起人（Sponsor）为项目提供资源与资金支持，常常是项目客户的代表。" },
        { id: "ch2-11", type: "bool", difficulty: 2, kp: "ch2-k6", stem: "在弱矩阵组织中，项目经理的权限大于职能经理。", options: ["正确", "错误"], answer: 1, explanation: "错误，弱矩阵中职能经理权力更大，项目经理权限很小（多为协调人）。" }
      ]
    },

    /* ===================== 第3章 项目立项管理 ===================== */
    {
      id: "ch3", module: "启动与规划", name: "项目立项管理",
      knowledgePoints: [
        { id: "ch3-k1", title: "立项流程", body: "项目建议书（立项申请）→ 可行性研究 → 可行性研究报告 → 项目审批/报批 → 招投标 → 合同。项目建议书是启动阶段的初始文件。" },
        { id: "ch3-k2", title: "可行性研究的内容与层次", body: "内容：技术、经济、运行/操作、法律、社会/社会可行性、环境等。层次：机会可行性研究→初步可行性研究→详细可行性研究。" },
        { id: "ch3-k3", title: "成本效益分析方法", body: "净现值 NPV（折现后收益现值-成本，>0 可行）、内部收益率 IRR（NPV=0 的折现率）、投资回收期（静态/动态）、投资收益率。" },
        { id: "ch3-k4", title: "招投标基本制度", body: "公开招标（不特定对象）、邀请招标（≥3 家特定对象）。评标由评标委员会（5 人以上单数）负责。中标通知书对双方具法律效力。" },
        { id: "ch3-k5", title: "项目建议书主要内容", body: "项目必要性、市场预测、拟建规模、建设条件、投资估算与资金筹措、效益估计等。" }
      ],
      questions: [
        { id: "ch3-1", type: "single", difficulty: 1, kp: "ch3-k1", stem: "在立项阶段，作为项目启动初始文件、说明项目必要性的文档是（ ）。", options: ["可行性研究报告", "项目建议书（立项申请）", "项目章程", "需求规格说明书"], answer: 1, explanation: "项目建议书是立项启动的初始文档，阐述项目背景与必要性。" },
        { id: "ch3-2", type: "single", difficulty: 2, kp: "ch3-k2", stem: "可行性研究层次的正确顺序是（ ）。", options: ["详细→初步→机会", "机会→初步→详细", "初步→机会→详细", "机会→详细→初步"], answer: 1, explanation: "依次：机会可行性研究 → 初步可行性研究 → 详细可行性研究。" },
        { id: "ch3-3", type: "single", difficulty: 3, kp: "ch3-k3", stem: "某项目初始投资 100 万元，未来 3 年净收益现值分别为 40、45、50 万元，则净现值 NPV 为（ ）万元。", options: ["135", "35", "45", "100"], answer: 1, explanation: "NPV = 40+45+50 - 100 = 35 万元（已给现值，直接加总减投资）。NPV>0 项目可行。" },
        { id: "ch3-4", type: "single", difficulty: 2, kp: "ch3-k4", stem: "邀请招标的邀请对象数量应不少于（ ）家。", options: ["2", "3", "5", "7"], answer: 1, explanation: "邀请招标应向≥3 个具备能力的特定法人/组织发出邀请。" },
        { id: "ch3-5", type: "single", difficulty: 2, kp: "ch3-k4", stem: "依法必须招标的项目，评标委员会成员人数应为（ ）。", options: ["3 人以上单数", "5 人以上单数", "7 人以上双数", "任意人数"], answer: 1, explanation: "评标委员会由 5 人以上单数组成，技术经济专家不少于 2/3。" },
        { id: "ch3-6", type: "multi", difficulty: 2, kp: "ch3-k2", stem: "可行性研究通常包含的内容有（ ）。", options: ["技术可行性", "经济可行性", "运行可行性", "法律可行性"], answer: [0, 1, 2, 3], explanation: "可行性研究含技术、经济、运行（操作）、法律、社会、环境等。" },
        { id: "ch3-7", type: "multi", difficulty: 3, kp: "ch3-k3", stem: "下列属于项目经济评价动态指标的有（ ）。", options: ["净现值 NPV", "内部收益率 IRR", "投资回收期（静态）", "净现值率"], answer: [0, 1, 3], explanation: "动态指标考虑资金时间价值：NPV、IRR、净现值率、动态投资回收期。静态回收期未折现。" },
        { id: "ch3-8", type: "bool", difficulty: 1, kp: "ch3-k1", stem: "项目建议书应当在可行性研究完成之后编制。", options: ["正确", "错误"], answer: 1, explanation: "错误，先有项目建议书（立项申请），再做可行性研究。" },
        { id: "ch3-9", type: "single", difficulty: 2, kp: "ch3-k5", stem: "下列通常不属于项目建议书内容的是（ ）。", options: ["项目建设的必要性", "市场预测与拟建规模", "详细施工方案设计", "投资估算与资金筹措"], answer: 2, explanation: "详细施工方案属于实施阶段内容，项目建议书只做概要性说明。" }
      ]
    },

    /* ===================== 第4章 项目整体（整合）管理 ===================== */
    {
      id: "ch4", module: "启动与规划", name: "项目整体（整合）管理",
      knowledgePoints: [
        { id: "ch4-k1", title: "制定项目章程", body: "正式批准项目并授权项目经理动用资源。输入含合同、SOW、商业论证、环境资产；输出项目章程。由发起人/高级管理层签发。" },
        { id: "ch4-k2", title: "制定项目管理计划", body: "汇总各子计划（范围/进度/成本/质量/资源/沟通/风险/采购/干系人管理计划、变更管理计划等）与基准，形成 MPP。" },
        { id: "ch4-k3", title: "指导与管理项目工作", body: "执行批准的计划以完成可交付成果，产生工作绩效数据，提出变更请求。" },
        { id: "ch4-k4", title: "监控项目工作与实施整体变更控制", body: "监督并生成工作绩效信息/报告；所有变更须经 CCB 审批（实施整体变更控制是核心整合过程）。" },
        { id: "ch4-k5", title: "结束项目或阶段", body: "完成收尾、移交产品、释放资源、总结经验教训、归档。" },
        { id: "ch4-k6", title: "变更控制委员会 CCB", body: "CCB 是决策机构，审批变更（一般不亲自实施变更），通常由干系人代表组成；项目经理负责召集与执行。" }
      ],
      questions: [
        { id: "ch4-1", type: "single", difficulty: 1, kp: "ch4-k1", stem: "正式批准项目成立并授权项目经理使用资源的关键文件是（ ）。", options: ["项目章程", "项目管理计划", "合同", "需求文件"], answer: 0, explanation: "项目章程由发起人签发，正式批准项目并授权项目经理。" },
        { id: "ch4-2", type: "single", difficulty: 2, kp: "ch4-k2", stem: "项目管理计划（MPP）不包含（ ）。", options: ["范围管理计划", "进度基准", "已批准的变更请求", "成本管理计划"], answer: 2, explanation: "已批准的变更请求是指导与管理项目工作的输入/输出，不是计划本身的组成；计划含各子计划与基准。" },
        { id: "ch4-3", type: "single", difficulty: 2, kp: "ch4-k4", stem: "所有变更请求最终须经（ ）审批后方可实施。", options: ["项目经理个人", "变更控制委员会 CCB", "团队成员", "客户代表"], answer: 1, explanation: "整体变更控制由 CCB 审批变更；项目经理负责流程管理与执行。" },
        { id: "ch4-4", type: "single", difficulty: 2, kp: "ch4-k6", stem: "关于 CCB 的描述，正确的是（ ）。", options: ["CCB 负责亲自实施变更", "CCB 是变更审批的决策机构", "CCB 由项目经理一人组成", "CCB 只审批范围变更"], answer: 1, explanation: "CCB 是决策机构，审批变更（不亲自实施）；可含多方干系人代表；审批各类变更。" },
        { id: "ch4-5", type: "single", difficulty: 3, kp: "ch4-k4", stem: "项目执行中发现成本超支，项目经理拟动用管理储备应对，该动作属于（ ）。", options: ["直接执行，无需审批", "需经 CCB 审批的变更", "仅需客户同意", "不属于变更"], answer: 1, explanation: "动用管理储备影响成本基准，属变更，须经 CCB 审批。" },
        { id: "ch4-6", type: "multi", difficulty: 2, kp: "ch4-k2", stem: "项目管理计划通常包含以下哪些基准（ ）。", options: ["范围基准", "进度基准", "成本基准", "质量基准"], answer: [0, 1, 2], explanation: "三大基准：范围、进度、成本基准；质量通常不计基准但有计划。" },
        { id: "ch4-7", type: "bool", difficulty: 1, kp: "ch4-k1", stem: "项目章程由项目经理制定并签发。", options: ["正确", "错误"], answer: 1, explanation: "错误，章程由发起人/高级管理层签发，项目经理很少自定章程。" },
        { id: "ch4-8", type: "single", difficulty: 2, kp: "ch4-k5", stem: "项目收尾阶段不包括（ ）。", options: ["移交可交付成果", "合同收尾", "总结经验教训并归档", "制定进度计划"], answer: 3, explanation: "制定进度计划属规划阶段；收尾含移交、合同收尾、经验总结与归档。" },
        { id: "ch4-9", type: "bool", difficulty: 2, kp: "ch4-k3", stem: "指导与管理项目工作过程会产生工作绩效数据。", options: ["正确", "错误"], answer: 0, explanation: "正确，执行过程产出原始工作绩效数据，经分析后形成绩效信息/报告。" }
      ]
    },

    /* ===================== 第5章 项目范围管理 ===================== */
    {
      id: "ch5", module: "启动与规划", name: "项目范围管理",
      knowledgePoints: [
        { id: "ch5-k1", title: "规划范围管理与收集需求", body: "需求管理计划；收集需求产出需求文件与需求跟踪矩阵（RTM，正向+反向可追溯）。" },
        { id: "ch5-k2", title: "定义范围与项目范围说明书", body: "输出项目范围说明书：产品范围描述、可交付成果、验收标准、项目边界、制约与假设。" },
        { id: "ch5-k3", title: "创建 WBS", body: "把可交付成果和项目工作分解为可控的工作包。100%规则：WBS 包含全部范围。WBS 字典说明各组件。底层为工作包。" },
        { id: "ch5-k4", title: "确认范围与控制范围", body: "确认范围：由客户/发起人正式验收可交付成果。控制范围：监督范围状态、管理变更，防止范围蔓延（creep）与镀金（gold plating）。" },
        { id: "ch5-k5", title: "WBS 与范围基准", body: "范围基准 = 范围管理计划 + 项目范围说明书 + WBS + WBS 字典。" }
      ],
      questions: [
        { id: "ch5-1", type: "single", difficulty: 2, kp: "ch5-k3", stem: "WBS 分解应遵循的核心原则是（ ）。", options: ["80/20 法则", "100%规则（包含全部项目工作）", "最小可行产品原则", "单一职责原则"], answer: 1, explanation: "100%规则：WBS 必须包含项目全部范围，且只含需完成的工作。" },
        { id: "ch5-2", type: "single", difficulty: 1, kp: "ch5-k2", stem: "明确产品范围描述、可交付成果、验收标准和项目边界的文件是（ ）。", options: ["需求文件", "项目范围说明书", "WBS", "项目章程"], answer: 1, explanation: "项目范围说明书描述产品范围、可交付成果、验收标准、边界与制约/假设。" },
        { id: "ch5-3", type: "single", difficulty: 2, kp: "ch5-k4", stem: "由客户或发起人对已完成的可交付成果进行正式接受，属于（ ）。", options: ["控制范围", "确认范围", "定义范围", "创建 WBS"], answer: 1, explanation: "确认范围是客户/发起人正式验收可交付成果的过程。" },
        { id: "ch5-4", type: "single", difficulty: 3, kp: "ch5-k4", stem: "项目团队未经客户确认，主动增加了原范围之外的'增强功能'，这种现象称为（ ）。", options: ["范围蔓延", "镀金（gold plating）", "范围潜变", "范围基准偏移"], answer: 1, explanation: "镀金=团队自发增加未要求的功能；范围蔓延=范围未经控制地扩大。题干强调'主动增加'为镀金。" },
        { id: "ch5-5", type: "multi", difficulty: 2, kp: "ch5-k5", stem: "范围基准的组成部分包括（ ）。", options: ["项目范围说明书", "WBS", "WBS 字典", "进度基准"], answer: [0, 1, 2], explanation: "范围基准 = 范围说明书 + WBS + WBS 字典；进度基准属进度管理。" },
        { id: "ch5-6", type: "bool", difficulty: 1, kp: "ch5-k1", stem: "需求跟踪矩阵用于建立需求与后续产物之间的双向可追溯性。", options: ["正确", "错误"], answer: 0, explanation: "正确，RTM 支持需求正向与反向追溯，便于变更影响分析。" },
        { id: "ch5-7", type: "single", difficulty: 2, kp: "ch5-k3", stem: "WBS 最底层的可交付成果单元称为（ ）。", options: ["控制账户", "工作包", "活动", "里程碑"], answer: 1, explanation: "WBS 底层为工作包（work package），是估算/控制的基本单元；活动由工作包进一步分解。" },
        { id: "ch5-8", type: "bool", difficulty: 2, kp: "ch5-k4", stem: "控制范围的主要职责是防止未经控制的范围蔓延。", options: ["正确", "错误"], answer: 0, explanation: "正确，控制范围监督范围并管理变更，防止蔓延。" },
        { id: "ch5-9", type: "single", difficulty: 1, kp: "ch5-k1", stem: "收集需求过程的主要输出是（ ）。", options: ["需求文件与需求跟踪矩阵", "WBS", "范围说明书", "项目章程"], answer: 0, explanation: "收集需求输出需求文件和需求跟踪矩阵。" }
      ]
    },

    /* ===================== 第6章 项目进度管理 ===================== */
    {
      id: "ch6", module: "启动与规划", name: "项目进度管理",
      knowledgePoints: [
        { id: "ch6-k1", title: "定义活动与排列活动顺序", body: "定义活动（滚动波浪式规划）；排列活动顺序用 PDM（前导图法）：FS/SF/SS/FF 四种依赖；提前量（-）/滞后量（+）。" },
        { id: "ch6-k2", title: "估算活动资源与持续时间", body: "类比估算（自上而下、快但不准）、参数估算、三点估算：期望=(O+4M+P)/6，标准差σ=(P-O)/6。" },
        { id: "ch6-k3", title: "关键路径法 CPM", body: "关键路径=网络图中总工期最长的路径；其上活动总浮动=0；关键路径可能不止一条。缩短关键路径可压缩工期。" },
        { id: "ch6-k4", title: "进度压缩", body: "赶工（crashing，增资源/成本换时间，不改变范围）、快速跟进（fast tracking，并行本应串行的活动，增风险）。" },
        { id: "ch6-k5", title: "浮动时间", body: "总浮动 TF=最晚开始-最早开始；自由浮动 FF=不影响后继最早开始的可推迟量。关键活动 TF=0。" },
        { id: "ch6-k6", title: "制定与控制进度", body: "进度基准 vs 进度计划；资源平衡（平衡资源冲突、可能延长工期）；里程碑清单。" }
      ],
      questions: [
        { id: "ch6-1", type: "single", difficulty: 2, kp: "ch6-k1", stem: "前导图法（PDM）中，'完成-开始（FS）'表示（ ）。", options: ["前活动开始后后活动才开始", "前活动完成后后活动才开始", "前活动完成后后活动也完成", "前活动开始后后活动完成"], answer: 1, explanation: "FS：前置活动完成，后续活动才能开始，是最常用依赖。" },
        { id: "ch6-2", type: "single", difficulty: 3, kp: "ch6-k2", stem: "某活动最乐观 4 天、最可能 10 天、最悲观 18 天，三点估算的期望工期为（ ）天。", options: ["10", "11", "10.33", "9"], answer: 1, explanation: "期望=(4+4×10+18)/6 = 62/6 ≈ 10.33 天。" },
        { id: "ch6-3", type: "single", difficulty: 3, kp: "ch6-k2", stem: "上题活动的标准差σ约为（ ）天。", options: ["2.33", "1.5", "3", "4"], answer: 0, explanation: "σ=(P-O)/6 = (18-4)/6 ≈ 2.33 天。" },
        { id: "ch6-4", type: "single", difficulty: 2, kp: "ch6-k3", stem: "关于关键路径，正确的是（ ）。", options: ["关键路径总浮动最大", "关键路径是网络图中最短路径", "关键路径上活动总浮动为 0", "关键路径不会变化"], answer: 2, explanation: "关键路径=最长路径，其上活动总浮动为 0；项目进行中可能变化。" },
        { id: "ch6-5", type: "single", difficulty: 2, kp: "ch6-k4", stem: "通过增加加班与资源投入来缩短关键活动工期、且不改变范围的压缩方法是（ ）。", options: ["快速跟进", "赶工（crashing）", "资源平衡", "并行工程"], answer: 1, explanation: "赶工=增资源/成本换时间，范围不变；快速跟进=并行串行活动、增风险。" },
        { id: "ch6-6", type: "single", difficulty: 3, kp: "ch6-k4", stem: "将原本必须串行的设计与编码改为部分并行，以压缩进度，但可能增加返工风险，这是（ ）。", options: ["赶工", "快速跟进", "资源平衡", "进度平滑"], answer: 1, explanation: "快速跟进把串行活动并行，压缩工期但增加风险与返工。" },
        { id: "ch6-7", type: "single", difficulty: 3, kp: "ch6-k5", stem: "某活动最早开始 ES=5、最晚开始 LS=9，则总浮动时间为（ ）。", options: ["4", "5", "9", "0"], answer: 0, explanation: "总浮动 TF = LS-ES = 9-5 = 4 天。" },
        { id: "ch6-8", type: "multi", difficulty: 2, kp: "ch6-k1", stem: "前导图法（PDM）中的依赖关系类型包括（ ）。", options: ["完成-开始 FS", "开始-开始 SS", "完成-完成 FF", "开始-完成 SF"], answer: [0, 1, 2, 3], explanation: "PDM 四种依赖：FS、SS、FF、SF。" },
        { id: "ch6-9", type: "bool", difficulty: 1, kp: "ch6-k3", stem: "一个项目网络图中可能存在多条关键路径。", options: ["正确", "错误"], answer: 0, explanation: "正确，多条等长最长路径可同时成为关键路径。" },
        { id: "ch6-10", type: "single", difficulty: 2, kp: "ch6-k6", stem: "为消除资源过度分配而调整进度，可能使总工期延长的方法叫（ ）。", options: ["赶工", "资源平衡", "快速跟进", "进度压缩"], answer: 1, explanation: "资源平衡（Resource Leveling）解决资源冲突，通常以延长工期为代价。" },
        { id: "ch6-11", type: "bool", difficulty: 2, kp: "ch6-k2", stem: "类比估算比参数估算更准确。", options: ["正确", "错误"], answer: 1, explanation: "错误，类比（自上而下）快但准确度低；参数/自下而上更准确。" },
        { id: "ch6-12", type: "single", difficulty: 2, kp: "ch6-k5", stem: "不影响任何后续活动最早开始时间的前提下，某活动可推迟的时间称为（ ）。", options: ["总浮动", "自由浮动", "滞后量", "提前量"], answer: 1, explanation: "自由浮动 FF 是不影响后继最早开始的可推迟量；总浮动是不影响项目完工的可推迟量。" }
      ]
    },

    /* ===================== 第7章 项目成本管理 ===================== */
    {
      id: "ch7", module: "启动与规划", name: "项目成本管理",
      knowledgePoints: [
        { id: "ch7-k1", title: "规划成本管理与估算成本", body: "成本的类型：直接/间接、固定/可变、可控/不可控、机会/沉没。估算方法：类比、参数、自下而上、三点、储备分析（应急储备由 PV 计、管理储备不计入基准）。" },
        { id: "ch7-k2", title: "制定预算与成本基准", body: "成本基准=各时段预算累加（不含管理储备）；BAC=完工预算。管理储备加入得到项目总预算。" },
        { id: "ch7-k3", title: "挣值管理 EVM 基本量", body: "PV 计划价值、EV 挣值（实际完成工作的预算）、AC 实际成本。" },
        { id: "ch7-k4", title: "挣值偏差与指数", body: "CV=EV-AC（成本偏差，>0 节支）；SV=EV-PV（进度偏差，>0 提前）；CPI=EV/AC（>1 好）；SPI=EV/PV（>1 快）。" },
        { id: "ch7-k5", title: "完工预测", body: "EAC=AC+ETC；典型偏差 EAC=BAC/CPI；ETC=BAC-EV（非典型）；VAC=BAC-EAC；TCPI=(BAC-EV)/(总预算-AC)。" }
      ],
      questions: [
        { id: "ch7-1", type: "single", difficulty: 2, kp: "ch7-k3", stem: "挣值管理中，'实际完成工作的预算价值'对应（ ）。", options: ["PV", "EV", "AC", "BAC"], answer: 1, explanation: "EV（Earned Value）是实际完成工作的预算价值。" },
        { id: "ch7-2", type: "single", difficulty: 3, kp: "ch7-k4", stem: "某项目 PV=100、EV=90、AC=110，则成本偏差 CV 与进度偏差 SV 为（ ）。", options: ["CV=20, SV=10", "CV=-20, SV=-10", "CV=10, SV=-20", "CV=-10, SV=20"], answer: 1, explanation: "CV=EV-AC=90-110=-20（超支）；SV=EV-PV=90-100=-10（落后）。" },
        { id: "ch7-3", type: "single", difficulty: 3, kp: "ch7-k4", stem: "上题中 CPI 与 SPI 分别为（ ）。", options: ["0.82, 0.90", "1.22, 1.10", "0.90, 0.82", "1.10, 1.22"], answer: 0, explanation: "CPI=EV/AC=90/110≈0.82（<1 超支）；SPI=EV/PV=90/100=0.90（<1 落后）。" },
        { id: "ch7-4", type: "single", difficulty: 3, kp: "ch7-k5", stem: "BAC=200，已发生 AC=120，EV=100，且估算未来按当前 CPI 持续，则完工估算 EAC 为（ ）。", options: ["100", "200", "240", "160"], answer: 2, explanation: "EAC=BAC/CPI=200/(100/120)=200/0.833≈240。" },
        { id: "ch7-5", type: "single", difficulty: 3, kp: "ch7-k5", stem: "按典型偏差预测，完工尚需估算 ETC 约为（ ）。（沿用上题 BAC=200,AC=120,EV=100）", options: ["80", "100", "120", "200"], answer: 1, explanation: "ETC=EAC-AC=240-120=120；或 ETC=(BAC-EV)/CPI=(200-100)/0.833≈120。" },
        { id: "ch7-6", type: "single", difficulty: 2, kp: "ch7-k2", stem: "成本基准（Cost Baseline）的组成是（ ）。", options: ["BAC + 管理储备", "各时段预算累加（不含管理储备）", "仅应急储备", "AC 累计"], answer: 1, explanation: "成本基准=按时间分布的预算累加，不含管理储备；加管理储备=项目总预算。" },
        { id: "ch7-7", type: "multi", difficulty: 2, kp: "ch7-k1", stem: "成本估算常用方法包括（ ）。", options: ["类比估算", "参数估算", "自下而上估算", "三点估算"], answer: [0, 1, 2, 3], explanation: "成本估算方法含类比、参数、自下而上、三点、储备分析等。" },
        { id: "ch7-8", type: "bool", difficulty: 2, kp: "ch7-k1", stem: "管理储备是为了应对已识别风险而预留的，计入成本基准。", options: ["正确", "错误"], answer: 1, explanation: "错误，应急储备应对'已知-未知'风险、计入基准；管理储备应对'未知-未知'、不计入成本基准，需变更审批才能使用。" },
        { id: "ch7-9", type: "single", difficulty: 3, kp: "ch7-k5", stem: "VAC（完工偏差）= BAC - EAC，若 VAC<0 表示（ ）。", options: ["完工将节支", "完工将超支", "进度提前", "成本偏差为正"], answer: 1, explanation: "VAC<0 说明预计完工成本高于 BAC，即完工超支。" },
        { id: "ch7-10", type: "bool", difficulty: 2, kp: "ch7-k4", stem: "CPI>1 表示项目当前成本节约。", options: ["正确", "错误"], answer: 0, explanation: "正确，CPI=EV/AC>1 说明单位成本完成更多工作，节支。" },
        { id: "ch7-11", type: "single", difficulty: 2, kp: "ch7-k3", stem: "计划在某时点应完成工作的预算价值称为（ ）。", options: ["EV", "AC", "PV", "ETC"], answer: 2, explanation: "PV 计划价值=计划工作×预算单价。" },
        { id: "ch7-12", type: "single", difficulty: 3, kp: "ch7-k5", stem: "为在 BAC 内完工所需剩余工作的绩效指数为（ ）。", options: ["SPI", "CPI", "TCPI", "EAC"], answer: 2, explanation: "TCPI 完工尚需绩效指数=(BAC-EV)/(总预算-AC)，衡量后续必须达到的成本绩效。" }
      ]
    },

    /* ===================== 第8章 项目质量管理 ===================== */
    {
      id: "ch8", module: "启动与规划", name: "项目质量管理",
      knowledgePoints: [
        { id: "ch8-k1", title: "规划质量/质量保证/质量控制", body: "规划质量管理（定标准/指标）；实施质量保证（过程审计、过程改进，面向过程）；控制质量（检查产品、找缺陷，面向结果）。" },
        { id: "ch8-k2", title: "质量管理大师思想", body: "戴明（PDCA 循环、14 点）；朱兰（质量三部曲：计划-控制-改进，80/20 法则）；克劳斯比（零缺陷、第一次就把事做对、质量成本 PONC）；石川馨（因果图）。" },
        { id: "ch8-k3", title: "七种质量工具（旧 QC 七工具）", body: "因果图（鱼骨图）、流程图、核查表、帕累托图（80/20）、直方图、控制图（±3σ 上下限）、散点图。" },
        { id: "ch8-k4", title: "预防与检查、公差与界限", body: "预防（防缺陷）> 检查（找缺陷）；公差（允许偏差）与控制界限（±3σ）。特殊原因 vs 普通原因变异。" },
        { id: "ch8-k5", title: "质量成本", body: "一致性成本（预防+评估）与非一致性成本（内部失败+外部失败）；克劳斯比强调 PONC（不符合要求的代价）。" }
      ],
      questions: [
        { id: "ch8-1", type: "single", difficulty: 1, kp: "ch8-k1", stem: "面向'过程'、通过质量审计推动过程改进的过程是（ ）。", options: ["控制质量", "实施质量保证", "规划质量管理", "确认范围"], answer: 1, explanation: "实施质量保证面向过程（审计、过程改进）；控制质量面向结果（检查缺陷）。" },
        { id: "ch8-2", type: "single", difficulty: 2, kp: "ch8-k2", stem: "提出'零缺陷'与'第一次就把事情做对'的质量管理专家是（ ）。", options: ["戴明", "朱兰", "克劳斯比", "石川馨"], answer: 2, explanation: "克劳斯比主张零缺陷（Zero Defects）与 PONC。" },
        { id: "ch8-3", type: "single", difficulty: 2, kp: "ch8-k3", stem: "用于找出'少数关键原因'、体现 80/20 规律的工具是（ ）。", options: ["因果图", "帕累托图", "散点图", "直方图"], answer: 1, explanation: "帕累托图按发生频率排序，识别关键少数原因（80/20）。" },
        { id: "ch8-4", type: "single", difficulty: 2, kp: "ch8-k3", stem: "用于分析质量特性与影响因素之间因果关系的工具是（ ）。", options: ["控制图", "因果图（鱼骨图）", "核查表", "流程图"], answer: 1, explanation: "因果图（石川馨图/鱼骨图）分析结果与原因的因果关系。" },
        { id: "ch8-5", type: "single", difficulty: 3, kp: "ch8-k4", stem: "控制图中，超出（ ）控制界限的点通常被视为特殊原因变异。", options: ["±1σ", "±2σ", "±3σ", "±6σ"], answer: 2, explanation: "控制图通常取均值±3σ 为上下控制限，越界多为特殊原因，需调查。" },
        { id: "ch8-6", type: "multi", difficulty: 2, kp: "ch8-k3", stem: "下列属于老七种质量工具的有（ ）。", options: ["因果图", "帕累托图", "控制图", "亲和图"], answer: [0, 1, 2], explanation: "因果图、帕累托图、控制图属老七工具；亲和图属新七工具。" },
        { id: "ch8-7", type: "bool", difficulty: 1, kp: "ch8-k1", stem: "控制质量是检查产品、识别缺陷，属于事后把关。", options: ["正确", "错误"], answer: 0, explanation: "正确，控制质量面向结果、检查产品发现缺陷。" },
        { id: "ch8-8", type: "single", difficulty: 2, kp: "ch8-k5", stem: "为预防缺陷而投入的培训、流程设计等成本属于（ ）。", options: ["内部失败成本", "外部失败成本", "一致性成本（预防成本）", "非一致性成本"], answer: 2, explanation: "预防与评估成本属一致性成本（Conformance）；内/外部失败属非一致性。" },
        { id: "ch8-9", type: "single", difficulty: 1, kp: "ch8-k2", stem: "提出 PDCA（计划-执行-检查-处理）循环的专家是（ ）。", options: ["戴明", "朱兰", "克劳斯比", "田口"], answer: 0, explanation: "戴明倡导 PDCA 持续改进循环（休哈特提出、戴明推广）。" },
        { id: "ch8-10", type: "bool", difficulty: 2, kp: "ch8-k4", stem: "在质量管理中，预防成本通常低于失败成本，因此'预防胜于检查'。", options: ["正确", "错误"], answer: 0, explanation: "正确，预防缺陷的成本一般远低于缺陷发生后的修复成本。" }
      ]
    },

    /* ===================== 第9章 项目资源管理 ===================== */
    {
      id: "ch9", module: "启动与规划", name: "项目资源管理",
      knowledgePoints: [
        { id: "ch9-k1", title: "规划资源管理", body: "制定资源管理计划与团队章程；RAM（责任分配矩阵）如 RACI（执行 R/负责 A/咨询 C/知会 I）。" },
        { id: "ch9-k2", title: "建设团队与塔克曼阶梯", body: "团队发展阶段：形成（Forming）→震荡（Storming）→规范（Norming）→成熟（Performing）→解散（Adjourning）。" },
        { id: "ch9-k3", title: "激励理论", body: "马斯洛需求层次；赫茨伯格双因素（保健+激励）；麦克利兰成就需要（成就/权力/归属）；弗鲁姆期望理论（激励=效价×期望×工具性）；XY 理论（麦格雷戈）。" },
        { id: "ch9-k4", title: "管理团队与冲突管理", body: "冲突来源：资源、进度、优先级等。解决策略（优→劣）：合作/解决问题 > 妥协 > 缓和 > 强迫 > 撤退/回避。冲突宜尽早直面。" },
        { id: "ch9-k5", title: "获取资源与虚拟团队", body: "谈判获取资源；虚拟团队跨地域协作，依赖沟通技术。" }
      ],
      questions: [
        { id: "ch9-1", type: "single", difficulty: 2, kp: "ch9-k1", stem: "RACI 矩阵中，'A（Accountable）'表示（ ）。", options: ["执行工作的人", "对结果最终负责的人（唯一）", "被咨询的人", "被通知的人"], answer: 1, explanation: "RACI：R 执行、A 负责（唯一 accountable）、C 咨询、I 知会。" },
        { id: "ch9-2", type: "single", difficulty: 2, kp: "ch9-k2", stem: "团队发展五阶段的正确顺序是（ ）。", options: ["形成→震荡→规范→成熟→解散", "震荡→形成→规范→成熟→解散", "形成→规范→震荡→成熟→解散", "成熟→规范→震荡→形成→解散"], answer: 0, explanation: "塔克曼：形成→震荡→规范→成熟→解散。" },
        { id: "ch9-3", type: "single", difficulty: 2, kp: "ch9-k3", stem: "提出'双因素理论'（保健因素+激励因素）的管理学者是（ ）。", options: ["马斯洛", "赫茨伯格", "麦克利兰", "麦格雷戈"], answer: 1, explanation: "赫茨伯格双因素理论：保健（避免不满）+激励（带来满意）。" },
        { id: "ch9-4", type: "single", difficulty: 3, kp: "ch9-k4", stem: "下列冲突解决策略中，通常最有效、能彻底解决问题的是（ ）。", options: ["强迫", "撤退/回避", "合作/解决问题", "妥协"], answer: 2, explanation: "合作/解决问题（直面根源、双赢）最有效；强迫/回避通常伤关系或积压问题。" },
        { id: "ch9-5", type: "single", difficulty: 2, kp: "ch9-k3", stem: "弗鲁姆（Vroom）期望理论的激励力公式为（ ）。", options: ["激励=能力×机会", "激励=效价×期望×工具性", "激励=需求×满足", "激励=风险×回报"], answer: 1, explanation: "期望理论：动机=效价(Valence)×期望(Expectancy)×工具性(Instrumentality)。" },
        { id: "ch9-6", type: "multi", difficulty: 2, kp: "ch9-k3", stem: "下列属于激励理论的有（ ）。", options: ["马斯洛需求层次", "赫茨伯格双因素", "麦克利兰成就需要", "XYZ 理论"], answer: [0, 1, 2], explanation: "马斯洛、赫茨伯格、麦克利兰均属激励理论；麦格雷戈为 X/Y 理论（无 Z 在此列，且 XYZ 非标准说法）。" },
        { id: "ch9-7", type: "bool", difficulty: 1, kp: "ch9-k2", stem: "团队成员在'震荡期'通常出现冲突与摩擦。", options: ["正确", "错误"], answer: 0, explanation: "正确，震荡期（Storming）是观念和角色冲突的高发阶段。" },
        { id: "ch9-8", type: "single", difficulty: 3, kp: "ch9-k4", stem: "当两个部门为稀缺资源激烈争执、且问题不迫切时，项目经理暂时搁置争议先推进其他工作，这属于（ ）。", options: ["合作解决", "撤退/回避", "缓和/包容", "强迫"], answer: 1, explanation: "撤退/回避=推迟或退出冲突，不解决；题干'暂时搁置'即回避。" },
        { id: "ch9-9", type: "single", difficulty: 2, kp: "ch9-k5", stem: "跨地域、依赖沟通技术协作的团队称为（ ）。", options: ["职能团队", "虚拟团队", "敏捷团队", "矩阵团队"], answer: 1, explanation: "虚拟团队 geographically dispersed，依赖会议/协作工具。" },
        { id: "ch9-10", type: "bool", difficulty: 2, kp: "ch9-k4", stem: "冲突在项目中应尽量避免，最好完全消除。", options: ["正确", "错误"], answer: 1, explanation: "错误，冲突不可避免且适度冲突有益；关键是有效管理、尽早面对。" }
      ]
    },

    /* ===================== 第10章 项目沟通管理 ===================== */
    {
      id: "ch10", module: "执行与监控", name: "项目沟通管理",
      knowledgePoints: [
        { id: "ch10-k1", title: "沟通渠道数量", body: "N 个人时沟通渠道数 = N×(N-1)/2。人数翻倍，渠道约翻 4 倍。" },
        { id: "ch10-k2", title: "沟通方法与模型", body: "交互式（会议/对话，双向）、推式（邮件/报告，单向推送）、拉式（知识库/门户，按需获取）。沟通模型含编码-解码-噪声-反馈。" },
        { id: "ch10-k3", title: "沟通维度", body: "内部/外部、正式/非正式、垂直（上下级）/水平（同级）、官方/非官方、书面/口头。" },
        { id: "ch10-k4", title: "规划/管理/监督沟通", body: "规划沟通管理（定沟通需求与方式）；管理沟通（执行传递）；监督沟通（确保效果）。" }
      ],
      questions: [
        { id: "ch10-1", type: "single", difficulty: 2, kp: "ch10-k1", stem: "项目团队有 10 名成员，则沟通渠道数为（ ）。", options: ["45", "55", "90", "100"], answer: 0, explanation: "渠道数 = 10×9/2 = 45。" },
        { id: "ch10-2", type: "single", difficulty: 3, kp: "ch10-k1", stem: "团队由 5 人增至 11 人，沟通渠道数约增加（ ）倍。", options: ["2", "4", "5", "11"], answer: 1, explanation: "5人=10 渠道，11人=55 渠道，55/10=5.5 倍≈约 4–5 倍；人数翻倍渠道约翻 4 倍（此处 5→11 近似）。标准说法：人数翻倍渠道约翻 4 倍。11/5≈2.2 倍人数，渠道 5.5 倍。选约 5 倍最接近。" },
        { id: "ch10-3", type: "single", difficulty: 2, kp: "ch10-k2", stem: "将项目周报通过邮件群发给干系人，属于（ ）沟通方法。", options: ["交互式", "推式", "拉式", "非正式"], answer: 1, explanation: "邮件群发是单向推送，属推式沟通。" },
        { id: "ch10-4", type: "single", difficulty: 2, kp: "ch10-k2", stem: "建立项目知识库供成员随时查询资料，属于（ ）沟通方法。", options: ["交互式", "推式", "拉式", "垂直"], answer: 2, explanation: "知识库/门户按需获取，属拉式沟通。" },
        { id: "ch10-5", type: "multi", difficulty: 2, kp: "ch10-k3", stem: "沟通可按维度分类，包括（ ）。", options: ["内部/外部", "正式/非正式", "垂直/水平", "书面/口头"], answer: [0, 1, 2, 3], explanation: "沟通维度含内部外部、正式非正式、垂直水平、官方非官方、书面口头等。" },
        { id: "ch10-6", type: "bool", difficulty: 1, kp: "ch10-k4", stem: "沟通管理计划应在规划沟通管理过程制定。", options: ["正确", "错误"], answer: 0, explanation: "正确，规划沟通管理输出沟通管理计划。" },
        { id: "ch10-7", type: "single", difficulty: 2, kp: "ch10-k2", stem: "面对面会议、电话交谈属于（ ）沟通。", options: ["推式", "拉式", "交互式", "异步"], answer: 2, explanation: "实时双向交流为交互式沟通（会议、通话、即时消息）。" },
        { id: "ch10-8", type: "bool", difficulty: 2, kp: "ch10-k1", stem: "沟通渠道数随团队人数呈线性增长。", options: ["正确", "错误"], answer: 1, explanation: "错误，呈指数（N(N-1)/2）增长，人数增加渠道激增。" }
      ]
    },

    /* ===================== 第11章 项目干系人管理 ===================== */
    {
      id: "ch11", module: "执行与监控", name: "项目干系人管理",
      knowledgePoints: [
        { id: "ch11-k1", title: "识别干系人与权力/利益方格", body: "权力/利益方格：高权力高利益（重点管理）、高权力低利益（令其满意）、低权力高利益（随时告知）、低权力低利益（监督）。" },
        { id: "ch11-k2", title: "规划干系人参与", body: "对比当前参与度与期望参与度（不知晓/抵制/中立/支持/领导），制定参与计划。" },
        { id: "ch11-k3", title: "管理/监督干系人参与", body: "管理：沟通引导提升支持；监督：监测关系变化并调整策略。" },
        { id: "ch11-k4", title: "干系人参与度等级", body: "不了解（Unaware）→抵制（Resistant）→中立（Neutral）→支持（Supportive）→领导（Leading）。" }
      ],
      questions: [
        { id: "ch11-1", type: "single", difficulty: 2, kp: "ch11-k1", stem: "对于'高权力、高利益'的关键干系人，应对策略是（ ）。", options: ["监督", "令其满意", "随时告知", "重点管理"], answer: 3, explanation: "高权力高利益=重点管理（密切参与）。" },
        { id: "ch11-2", type: "single", difficulty: 2, kp: "ch11-k1", stem: "对'高权力、低利益'的干系人，通常应（ ）。", options: ["重点管理", "令其满意", "随时告知", "监督"], answer: 1, explanation: "高权力低利益=令其满意（保持满意，避免其负面干预）。" },
        { id: "ch11-3", type: "single", difficulty: 2, kp: "ch11-k2", stem: "干系人参与度从低到高通常分为（ ）。", options: ["抵制→中立→支持→领导→不了解", "不了解→抵制→中立→支持→领导", "领导→支持→中立→抵制→不了解", "中立→支持→领导→抵制→不了解"], answer: 1, explanation: "参与度等级：不了解→抵制→中立→支持→领导。" },
        { id: "ch11-4", type: "multi", difficulty: 2, kp: "ch11-k1", stem: "权力/利益方格的四个象限对应的策略包括（ ）。", options: ["重点管理", "令其满意", "随时告知", "监督"], answer: [0, 1, 2, 3], explanation: "四象限分别对应重点管理、令其满意、随时告知、监督。" },
        { id: "ch11-5", type: "bool", difficulty: 1, kp: "ch11-k3", stem: "干系人管理应尽早识别并持续参与。", options: ["正确", "错误"], answer: 0, explanation: "正确，干系人管理贯穿全程，早识别、早参与。" },
        { id: "ch11-6", type: "single", difficulty: 2, kp: "ch11-k2", stem: "规划干系人参与的核心是将（ ）进行对比。", options: ["权力与利益", "当前参与度与期望参与度", "风险与机会", "成本与收益"], answer: 1, explanation: "通过对比当前与期望参与度，制定提升策略。" },
        { id: "ch11-7", type: "bool", difficulty: 1, kp: "ch11-k4", stem: "'领导（Leading）'是干系人参与度的最高等级。", options: ["正确", "错误"], answer: 0, explanation: "正确，领导级干系人主动推动项目。" },
        { id: "ch11-8", type: "single", difficulty: 1, kp: "ch11-k1", stem: "识别干系人过程通常在（ ）进行并得到更新。", options: ["仅在启动时一次", "启动并贯穿项目定期更新", "收尾时", "验收时"], answer: 1, explanation: "识别干系人在启动进行，并随项目推进定期更新。" }
      ]
    },

    /* ===================== 第12章 项目风险管理 ===================== */
    {
      id: "ch12", module: "执行与监控", name: "项目风险管理",
      knowledgePoints: [
        { id: "ch12-k1", title: "风险登记册与识别", body: "识别风险产出风险登记册（最初含已识别风险、潜在应对措施）。技术：头脑风暴、SWOT、检查表、德尔菲、图解（鱼骨/流程图）。" },
        { id: "ch12-k2", title: "定性风险分析", body: "评估概率与影响，用概率影响矩阵排序，确定风险等级（高/中/低），考虑紧迫性、数据质量。" },
        { id: "ch12-k3", title: "定量风险分析", body: "EMV（预期货币价值）=概率×影响；决策树；敏感性分析（龙卷风图）；蒙特卡洛模拟。用于评估整体风险。" },
        { id: "ch12-k4", title: "规划风险应对", body: "消极（威胁）：规避、转移、减轻、接受。积极（机会）：开拓、分享、提高、接受。整体策略：上报。应急 vs 弹回计划。" },
        { id: "ch12-k5", title: "实施与监督风险", body: "实施应对、监督风险（风险审计、储备分析、技术绩效分析）。" }
      ],
      questions: [
        { id: "ch12-1", type: "single", difficulty: 2, kp: "ch12-k1", stem: "识别风险过程的主要输出是（ ）。", options: ["风险登记册", "风险应对计划", "概率影响矩阵", "EMV"], answer: 0, explanation: "识别风险输出风险登记册（含已识别风险清单与潜在应对措施）。" },
        { id: "ch12-2", type: "single", difficulty: 3, kp: "ch12-k3", stem: "某风险发生概率 40%、若发生损失 50 万元，则该风险的 EMV 为（ ）。", options: ["20 万元", "50 万元", "125 万元", "12.5 万元"], answer: 0, explanation: "EMV = 0.4 × 50 = 20 万元（对威胁取负值，量级 20 万）。" },
        { id: "ch12-3", type: "single", difficulty: 2, kp: "ch12-k4", stem: "通过购买保险将风险后果转移给第三方，属于（ ）策略。", options: ["规避", "转移", "减轻", "接受"], answer: 1, explanation: "购买保险/分包属转移（风险转移，责任仍在但财务后果转移）。" },
        { id: "ch12-4", type: "single", difficulty: 2, kp: "ch12-k4", stem: "改变计划彻底取消风险源头（如取消高危活动），属于（ ）策略。", options: ["规避", "转移", "减轻", "接受"], answer: 0, explanation: "规避=改变计划消除威胁或其触发条件（如取消活动、缩小范围）。" },
        { id: "ch12-5", type: "single", difficulty: 3, kp: "ch12-k3", stem: "用于显示哪个不确定因素对结果影响最大的定量技术（常以条形图呈现）是（ ）。", options: ["决策树", "敏感性分析（龙卷风图）", "蒙特卡洛模拟", "EMV"], answer: 1, explanation: "敏感性分析以龙卷风图显示各变量对结果影响大小。" },
        { id: "ch12-6", type: "multi", difficulty: 2, kp: "ch12-k4", stem: "针对威胁（消极风险）的应对策略包括（ ）。", options: ["规避", "转移", "减轻", "开拓"], answer: [0, 1, 2], explanation: "威胁应对：规避/转移/减轻/接受；开拓属机会应对。" },
        { id: "ch12-7", type: "bool", difficulty: 1, kp: "ch12-k2", stem: "定性风险分析使用概率影响矩阵对风险排序。", options: ["正确", "错误"], answer: 0, explanation: "正确，定性分析用概率-影响矩阵评估并排序风险。" },
        { id: "ch12-8", type: "single", difficulty: 2, kp: "ch12-k4", stem: "针对机会（积极风险）'确保抓住并最大化其影响'的策略是（ ）。", options: ["提高", "分享", "开拓", "接受"], answer: 2, explanation: "开拓（Exploit）确保机会实现（如分配最优资源）；提高是增大概率/影响。" },
        { id: "ch12-9", type: "multi", difficulty: 3, kp: "ch12-k3", stem: "下列属于定量风险分析技术的有（ ）。", options: ["EMV 期望货币值", "决策树", "蒙特卡洛模拟", "概率影响矩阵"], answer: [0, 1, 2], explanation: "定量：EMV、决策树、敏感性分析、蒙特卡洛；概率影响矩阵属定性。" },
        { id: "ch12-10", type: "bool", difficulty: 2, kp: "ch12-k5", stem: "风险审计用于检查风险管理过程的有效性。", options: ["正确", "错误"], answer: 0, explanation: "正确，风险审计评估风险管理过程与应对有效性。" },
        { id: "ch12-11", type: "single", difficulty: 2, kp: "ch12-k4", stem: "预留应急储备以应对'已知-未知'风险的应对方式属于（ ）。", options: ["规避", "减轻（含接受中的主动接受）", "转移", "上报"], answer: 1, explanation: "应急储备应对已知-未知风险，属减轻/主动接受的范畴（接受可分主动/被动，主动接受建应急储备）。" }
      ]
    },

    /* ===================== 第13章 项目采购管理 ===================== */
    {
      id: "ch13", module: "执行与监控", name: "项目采购管理",
      knowledgePoints: [
        { id: "ch13-k1", title: "合同类型（总价类）", body: "固定总价 FFP（卖方风险大、买方风险小）、总价加激励 FPIF。范围明确宜采用总价。" },
        { id: "ch13-k2", title: "合同类型（成本补偿/工料）", body: "成本补偿：CPFF（成本+固定费）、CPFPI（成本+激励费）、CPPC（成本+百分比费，买方风险最大）。工料 T&M 介于二者间。" },
        { id: "ch13-k3", title: "自制或外购分析", body: "比较自行完成与外包的成本与收益，含直接/间接成本、隐性成本。" },
        { id: "ch13-k4", title: "实施采购与招投标", body: "招标准备→发布→投标→评标→授标→签约。评标委员会 5 人以上单数。" },
        { id: "ch13-k5", title: "控制采购与合同收尾", body: "控制采购：合同变更、绩效审查、索赔管理。结束采购：核实交付、合同收尾、经验教训。" }
      ],
      questions: [
        { id: "ch13-1", type: "single", difficulty: 2, kp: "ch13-k1", stem: "范围明确、买方希望将成本风险转移给卖方时，最适合的合同是（ ）。", options: ["成本加百分比酬金 CPPC", "固定总价 FFP", "工料合同 T&M", "成本加激励费 CPIF"], answer: 1, explanation: "FFP 范围明确、卖方承担成本风险，买方风险最小。" },
        { id: "ch13-2", type: "single", difficulty: 3, kp: "ch13-k2", stem: "下列哪种合同买方承担的成本风险最大（ ）。", options: ["固定总价 FFP", "总价加激励 FPIF", "成本加百分比酬金 CPPC", "工料 T&M"], answer: 2, explanation: "CPPC 卖方成本实报实销且按比例取酬，买方风险最大（我国依法限制此类）。" },
        { id: "ch13-3", type: "single", difficulty: 2, kp: "ch13-k3", stem: "比较'自行开发'与'外包采购'的决策分析称为（ ）。", options: ["挣值分析", "自制或外购分析", "储备分析", "偏差分析"], answer: 1, explanation: "自制或外购分析（Make-or-Buy）决定内部完成还是外部采购。" },
        { id: "ch13-4", type: "single", difficulty: 2, kp: "ch13-k4", stem: "依法必须招标的项目，评标委员会应由（ ）组成。", options: ["3 人以上单数", "5 人以上单数", "任意偶数", "仅技术专家"], answer: 1, explanation: "评标委员会 5 人以上单数，技术经济专家≥2/3。" },
        { id: "ch13-5", type: "multi", difficulty: 2, kp: "ch13-k1", stem: "总价类合同包括（ ）。", options: ["固定总价 FFP", "总价加激励 FPIF", "成本加固定费 CPFF", "工料 T&M"], answer: [0, 1], explanation: "总价类：FFP、FPIF、FP-EPA 等；CPFF 属成本补偿；T&M 独立类。" },
        { id: "ch13-6", type: "bool", difficulty: 1, kp: "ch13-k3", stem: "自制或外购分析只考虑直接成本即可。", options: ["正确", "错误"], answer: 1, explanation: "错误，还应考虑间接成本、隐性成本、战略与风险。" },
        { id: "ch13-7", type: "single", difficulty: 3, kp: "ch13-k2", stem: "范围不完全明确、且希望买卖双方共担成本风险时，较适合（ ）。", options: ["FFP", "CPIF（成本加激励费）", "CPPC", "工时合同"], answer: 1, explanation: "CPIF 在范围不确定时，用激励费让双方共担风险、共享节约。" },
        { id: "ch13-8", type: "bool", difficulty: 2, kp: "ch13-k5", stem: "控制采购过程包含对卖方绩效的审查与合同变更管理。", options: ["正确", "错误"], answer: 0, explanation: "正确，控制采购含绩效审查、变更、索赔管理。" },
        { id: "ch13-9", type: "single", difficulty: 1, kp: "ch13-k4", stem: "向不特定多数人公开发布招标公告的招标方式是（ ）。", options: ["邀请招标", "公开招标", "竞争性谈判", "单一来源"], answer: 1, explanation: "公开招标面向不特定对象；邀请招标面向特定≥3家。" }
      ]
    },

    /* ===================== 第14章 合同管理 ===================== */
    {
      id: "ch14", module: "执行与监控", name: "合同管理",
      knowledgePoints: [
        { id: "ch14-k1", title: "合同分类", body: "按计价：总价/成本补偿/工料；按成立：诺成（承诺即成立）vs 实践（交付标的物才成立，如保管、自然人借款）；按义务：双务 vs 单务。" },
        { id: "ch14-k2", title: "合同订立", body: "要约（希望订约的意思表示）+ 承诺（受要约人同意）。承诺生效时合同成立。" },
        { id: "ch14-k3", title: "合同履行与变更", body: "全面履行原则；变更需协商一致；重大变更可重新订约。" },
        { id: "ch14-k4", title: "违约责任与索赔", body: "索赔应在约定/法定时限内提出（通常 28 天）；索赔类型：工期索赔、费用索赔。违约方承担继续履行、补救、赔偿等责任。" },
        { id: "ch14-k5", title: "争议解决", body: "协商→调解→仲裁（一裁终局，需协议）→诉讼。仲裁与诉讼一般互斥。" }
      ],
      questions: [
        { id: "ch14-1", type: "single", difficulty: 2, kp: "ch14-k2", stem: "合同订立一般经过（ ）两个阶段。", options: ["招标与投标", "要约与承诺", "起草与签署", "评审与批准"], answer: 1, explanation: "合同经要约与承诺达成一致即成立。" },
        { id: "ch14-2", type: "single", difficulty: 2, kp: "ch14-k1", stem: "自然人之间的借款合同，自贷款人提供借款时成立，属于（ ）合同。", options: ["诺成合同", "实践合同", "双务合同", "格式合同"], answer: 1, explanation: "实践合同（要物合同）于交付标的物时成立，如自然人借款、保管。" },
        { id: "ch14-3", type: "single", difficulty: 3, kp: "ch14-k4", stem: "承包人因发包人原因造成工期延误，按 FIDIC/惯例应在（ ）内提交索赔意向通知。", options: ["7 天", "14 天", "28 天", "60 天"], answer: 2, explanation: "常见合同（含 FIDIC、部分示范文本）索赔通知时限为 28 天。" },
        { id: "ch14-4", type: "single", difficulty: 2, kp: "ch14-k5", stem: "争议解决中，'一裁终局、不公开审理、需双方达成仲裁协议'的是（ ）。", options: ["诉讼", "仲裁", "调解", "协商"], answer: 1, explanation: "仲裁一裁终局、需仲裁协议，与诉讼互斥。" },
        { id: "ch14-5", type: "multi", difficulty: 2, kp: "ch14-k3", stem: "合同履行的原则包括（ ）。", options: ["全面履行", "诚实信用", "部分履行即可", "协作履行"], answer: [0, 1, 3], explanation: "履行原则含全面履行、诚实信用、协作履行等；部分履行违反全面履行。" },
        { id: "ch14-6", type: "bool", difficulty: 1, kp: "ch14-k4", stem: "当事人一方违约，应承担继续履行、采取补救措施或赔偿损失等责任。", options: ["正确", "错误"], answer: 0, explanation: "正确，违约责任的承担方式含继续履行、补救、赔偿等。" },
        { id: "ch14-7", type: "single", difficulty: 2, kp: "ch14-k4", stem: "因发包方设计变更导致承包商增加费用，承包商的合理主张是（ ）。", options: ["工期索赔", "费用索赔", "工期+费用索赔", "不可索赔"], answer: 2, explanation: "业主原因的设计变更通常可同时索赔工期与费用。" },
        { id: "ch14-8", type: "bool", difficulty: 2, kp: "ch14-k5", stem: "仲裁与诉讼可以同时适用解决同一争议。", options: ["正确", "错误"], answer: 1, explanation: "错误，仲裁与诉讼互斥，选定仲裁（且有效协议）则排除诉讼。" },
        { id: "ch14-9", type: "single", difficulty: 1, kp: "ch14-k2", stem: "受要约人对要约内容作出实质性变更的，视为（ ）。", options: ["承诺", "新要约（反要约）", "合同成立", "无效"], answer: 1, explanation: "对要约实质性变更构成反要约（新要约），需原要约人承诺。" }
      ]
    },

    /* ===================== 第15章 变更管理与配置管理 ===================== */
    {
      id: "ch15", module: "保障与合规", name: "变更管理与配置管理",
      knowledgePoints: [
        { id: "ch15-k1", title: "变更管理流程", body: "变更申请 → 变更影响分析/评估 → CCB 审批 → 实施变更 → 验证与确认 → 发布/沟通 → 闭环归档。任何变更须书面、评估、审批。" },
        { id: "ch15-k2", title: "变更控制委员会 CCB", body: "CCB 审批变更（不实施）；配置管理员执行配置库操作；项目经理评估与协调。" },
        { id: "ch15-k3", title: "配置管理基础", body: "配置项（CI）是受控的基本单元；基线（Baseline）是经评审的配置项集合（如需求基线、设计基线）；配置库分开发库、受控库、产品库。" },
        { id: "ch15-k4", title: "配置审计与状态报告", body: "功能配置审计（验证功能）、物理配置审计（验证文档/产物一致）；配置状态报告跟踪变更。" },
        { id: "ch15-k5", title: "变更与配置的关系", body: "变更管理关注'是否改'，配置管理关注'改了什么、如何受控'。变更经审批后在配置管理系统中落地。" }
      ],
      questions: [
        { id: "ch15-1", type: "single", difficulty: 2, kp: "ch15-k1", stem: "规范的变更流程顺序是（ ）。", options: ["审批→申请→实施→评估", "申请→评估→审批→实施→验证", "实施→申请→审批→验证", "评估→申请→实施→审批"], answer: 1, explanation: "变更：申请→影响分析/评估→CCB审批→实施→验证确认→发布→闭环。" },
        { id: "ch15-2", type: "single", difficulty: 2, kp: "ch15-k3", stem: "经正式评审、作为后续工作基准的配置项集合称为（ ）。", options: ["配置项", "基线（Baseline）", "配置库", "版本"], answer: 1, explanation: "基线=经评审的配置项集合，是后续开发/验证的基准（如需求基线）。" },
        { id: "ch15-3", type: "single", difficulty: 2, kp: "ch15-k3", stem: "受控库通常对应（ ）的配置库级别。", options: ["开发库", "受控库（配置管理库）", "产品库", "临时库"], answer: 1, explanation: "配置库三级：开发库（动态）、受控库（主库，受控）、产品库（静态/发布）。" },
        { id: "ch15-4", type: "multi", difficulty: 2, kp: "ch15-k3", stem: "配置库通常分为（ ）。", options: ["开发库", "受控库", "产品库", "测试库"], answer: [0, 1, 2], explanation: "配置库三级：开发库、受控库、产品库。" },
        { id: "ch15-5", type: "bool", difficulty: 1, kp: "ch15-k2", stem: "CCB 负责亲自实施被批准的变更。", options: ["正确", "错误"], answer: 1, explanation: "错误，CCB 只审批变更；实施由项目团队/配置管理员执行。" },
        { id: "ch15-6", type: "single", difficulty: 3, kp: "ch15-k4", stem: "验证'交付的产品是否实现了需求规格中的功能'的配置审计是（ ）。", options: ["物理配置审计", "功能配置审计", "基线审计", "版本审计"], answer: 1, explanation: "功能配置审计验证功能/性能是否实现；物理配置审计核对文档与产物一致性。" },
        { id: "ch15-7", type: "bool", difficulty: 2, kp: "ch15-k5", stem: "变更管理关注是否变更，配置管理关注变更如何受控落地。", options: ["正确", "错误"], answer: 0, explanation: "正确，二者互补：变更决策+配置受控。" },
        { id: "ch15-8", type: "single", difficulty: 2, kp: "ch15-k1", stem: "口头提出的紧急变更，正确的处理是（ ）。", options: ["立即实施再补手续", "拒绝实施", "先记录并走书面变更流程审批后实施", "仅项目经理决定即可"], answer: 2, explanation: "任何变更应书面申请、评估、审批后实施；紧急情况下亦须事后补手续。" }
      ]
    },

    /* ===================== 第16章 信息安全、法律法规与标准规范 ===================== */
    {
      id: "ch16", module: "保障与合规", name: "信息安全、法律法规与标准规范",
      knowledgePoints: [
        { id: "ch16-k1", title: "信息安全三要素（CIA）", body: "保密性（Confidentiality）、完整性（Integrity）、可用性（Availability）；外加真实性、不可抵赖性。等保 2.0 分 5 级。" },
        { id: "ch16-k2", title: "加密技术", body: "对称加密（DES/AES，密钥相同、快）：非对称加密（RSA，公私钥、慢，用于密钥交换/签名）；哈希（MD5/SHA，不可逆）。" },
        { id: "ch16-k3", title: "主要法律法规", body: "招标投标法、政府采购法、合同法（民法典合同编）、著作权法、电子签名法、网络安全法、数据安全法、个人信息保护法。" },
        { id: "ch16-k4", title: "标准规范", body: "国家标准 GB（强制 GB、推荐 GB/T）；行业标准；国际标准 ISO/IEC；团体/企业标准。标准分级：国家/行业/地方/企业。" },
        { id: "ch16-k5", title: "知识产权", body: "著作权自作品完成自动产生（无需登记）；软件著作权保护期自然人终生+50年；职务作品权利一般归单位。商标/专利需申请。" },
        { id: "ch16-k6", title: "职业道德规范", body: "诚实、公正、负责、尊重知识产权、保守秘密、持续学习、维护社会公共利益。" }
      ],
      questions: [
        { id: "ch16-1", type: "single", difficulty: 1, kp: "ch16-k1", stem: "信息安全三要素 CIA 指（ ）。", options: ["计算、存储、网络", "保密性、完整性、可用性", "机密、认证、审计", "防病毒、防火墙、加密"], answer: 1, explanation: "CIA=Confidentiality 保密性、Integrity 完整性、Availability 可用性。" },
        { id: "ch16-2", type: "single", difficulty: 2, kp: "ch16-k2", stem: "下列哪种是非对称加密算法（ ）。", options: ["DES", "AES", "RSA", "3DES"], answer: 2, explanation: "RSA 是非对称（公私钥）；DES/AES/3DES 为对称加密。" },
        { id: "ch16-3", type: "single", difficulty: 2, kp: "ch16-k2", stem: "哈希算法（如 SHA）的主要特点是（ ）。", options: ["可逆加密", "不可逆且定长摘要", "使用公私钥", "用于实时通信"], answer: 1, explanation: "哈希生成定长、不可逆摘要，用于完整性校验/数字指纹。" },
        { id: "ch16-4", type: "single", difficulty: 2, kp: "ch16-k3", stem: "规范政府采购活动的法律是（ ）。", options: ["招标投标法", "政府采购法", "著作权法", "电子签名法"], answer: 1, explanation: "政府采购法规范政府采购；招标投标法规范各类依法必须招标的项目。" },
        { id: "ch16-5", type: "single", difficulty: 2, kp: "ch16-k4", stem: "推荐性国家标准的代号是（ ）。", options: ["GB", "GB/T", "ISO", "QB"], answer: 1, explanation: "GB 强制、GB/T 推荐；ISO 国际；QB 企业。" },
        { id: "ch16-6", type: "single", difficulty: 3, kp: "ch16-k5", stem: "关于软件著作权，下列说法正确的是（ ）。", options: ["需登记才受保护", "自软件开发完成之日起自动受保护", "保护期 10 年", "职务软件归开发者个人"], answer: 1, explanation: "著作权自作品完成自动产生，无需登记；软件著作权保护期一般自然人终生+50年；职务作品权利通常归单位。" },
        { id: "ch16-7", type: "multi", difficulty: 2, kp: "ch16-k3", stem: "下列属于我国信息安全/数据领域法律的有（ ）。", options: ["网络安全法", "数据安全法", "个人信息保护法", "招标投标法"], answer: [0, 1, 2], explanation: "网络安全法、数据安全法、个人信息保护法属数据/安全领域；招标投标法属采购。" },
        { id: "ch16-8", type: "multi", difficulty: 2, kp: "ch16-k4", stem: "按《标准化法》，我国标准分为（ ）。", options: ["国家标准", "行业标准", "地方标准", "企业标准"], answer: [0, 1, 2, 3], explanation: "标准分级：国家、行业、地方、团体、企业标准。" },
        { id: "ch16-9", type: "bool", difficulty: 1, kp: "ch16-k1", stem: "等保 2.0 将信息系统安全保护等级分为五级。", options: ["正确", "错误"], answer: 0, explanation: "正确，等保 2.0 分 5 级（自主保护→指导保护→监督保护→强制保护→专控保护）。" },
        { id: "ch16-10", type: "single", difficulty: 2, kp: "ch16-k6", stem: "项目管理人员在职业行为中，对获悉的客户商业秘密应当（ ）。", options: ["对外公开以彰显能力", "严格保密", "用于个人副业", "随意透露给同事"], answer: 1, explanation: "职业道德要求保守秘密、尊重知识产权与客户利益。" },
        { id: "ch16-11", type: "bool", difficulty: 2, kp: "ch16-k5", stem: "专利权和商标权自申请/注册后获得，需主管部门授权。", options: ["正确", "错误"], answer: 0, explanation: "正确，专利与商标需申请/注册授权；著作权自动产生。" }
      ]
    }
  ],

  /* 模拟试题：从全题库按难度分布抽样生成（store 实现 buildMock） */
  mocks: [
    { id: "mock1", name: "模拟试卷（一）· 全真模拟", desc: "覆盖全部考纲，难度分布贴近真题（75 题，建议 150 分钟）", count: 75, mix: { 1: 22, 2: 40, 3: 13 } },
    { id: "mock2", name: "模拟试卷（二）· 重点强化", desc: "偏重计算与案例分析类考点（75 题）", count: 75, mix: { 1: 18, 2: 38, 3: 19 } },
    { id: "mock3", name: "模拟试卷（三）· 冲刺速测", desc: "高频易错点冲刺，题量适中（40 题，建议 80 分钟）", count: 40, mix: { 1: 14, 2: 18, 3: 8 } }
  ]
};
