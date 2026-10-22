# Research summary

The full bilingual report follows. Aggregated paper-search execution was unavailable (missing requests in the bundled runtime; alternate execution encountered permission errors). Individual primary-source web searches, papers and official documentation were used instead. No automatic systematic-search completeness claim is made.

# AI Health & Science Atlas / 生物医学 AI 研究地图

Verified snapshot / 核查快照：2026-10-23

Public primary sources only. Not a systematic review or medical advice. / 仅整理公开原始来源；非系统综述或医疗建议。

## Research routes / 研究路线

### 01 理解疾病，而不是只预测标签 / Understand disease, not just labels

**Overview / 总览**

先找出哪些细胞、分子或组织结构与病变有关，再通过干预检验机制。

First locate disease-associated cells, molecules and tissue structures; then test mechanisms through interventions.

**Question / 问题**

哪个细胞状态是原因，哪个只是结果？

Which cell state is a cause, and which is a consequence?

**Data / 数据**

脑/滑膜/肾组织组学 + 病理 + 供体临床信息。

Brain/synovial/kidney omics + pathology + donor clinical information.

**Challenge / 挑战**

供体少、尸检横截面、治疗/年龄/批次混杂。

Few donors, postmortem snapshots, treatment/age/batch confounding.

**Next / 方向**

用遗传、空间与干预三条证据交叉验证；优先在人源细胞与多个供体验证。

Triangulate genetic, spatial and intervention evidence; validate in human-derived cells and multiple donors.

Studies: Single-cell AD atlas · Mathys (2019); Multiregion AD atlas · Mathys (2024); BEYOND · Cellular communities (2024); PICALM · Microglial mechanism (2025); PHGDH · Non-enzymatic AD mechanism (2025); PASCode (2026); GAGE-seq / Hicformer (2026); Spatial proximity to AD pathology (2026); Prospective uncertainty-aware SPMS classification (2026); Rheumatoid arthritis synovial atlas (2023); Spatial diabetic kidney atlas (2026)

### 02 预测干预后的细胞变化 / Predict cellular responses to interventions

**Overview / 总览**

回答“改变这个基因或加这个药，会怎样”，是虚拟细胞的重要组成。

Ask what happens after changing a gene or adding a drug: a core part of virtual-cell research.

**Question / 问题**

能否预测训练中没见过的药物、基因、剂量或供体？

Can we predict unseen drugs, genes, doses or donors?

**Data / 数据**

Perturb-seq、药物表达、形态图像，配对条件而非通常配对同一细胞。

Perturb-seq, drug-response expression and morphology; matched conditions, usually not matched individual cells.

**Challenge / 挑战**

干预多、每条件样本少；组合爆炸；指标可能奖励无变化预测。

Many interventions, limited conditions, combinatorial explosion; metrics can reward no-change predictions.

**Next / 方向**

先做均值/线性/加性基线，再做模型；独立留出供体、靶基因或细胞类型。

Establish mean/linear/additive baselines before larger models; independently hold out donors, targets or cell types.

Studies: Combinatorial Perturb-seq · Norman (2019); Genome-scale Perturb-seq · Replogle (2022); scGen (2019); CPA (2023); GEARS (2023); State (2026); Do foundation models beat simple baselines? (2025); Calibrated perturbation benchmarking (2026); PertEval-scFM (2025)

### 03 推断因果与选择下一个实验 / Infer causality and choose the next experiment

**Overview / 总览**

预测回答“可能发生什么”；因果研究还要回答“改变它是否真的造成结果”。

Prediction asks what may happen; causal research asks whether changing something actually causes the outcome.

**Question / 问题**

哪些调控关系可干预？有限预算应验证哪条？

Which regulatory relationships are intervenable? Which should limited budgets test?

**Data / 数据**

观察组学 + CRISPR 干预 + 调控先验 + 实验成本。

Observational omics + CRISPR interventions + regulatory priors + experimental costs.

**Challenge / 挑战**

未知混杂、反馈环、干预不完美，真值网络也常不完整。

Unobserved confounding, feedback, imperfect interventions and incomplete ground-truth networks.

**Next / 方向**

明确因果假设；做留出干预验证与不确定性估计；评估实际实验收益。

State causal assumptions; validate on held-out interventions, quantify uncertainty and measure experimental utility.

Studies: CellOracle (2023); scPRINT (2025); CausalBench (2025); Causal active learning (2023); CRISPR activation / inhibition in T cells (2022)

### 04 把细胞放回组织空间 / Put cells back into tissue context

**Overview / 总览**

细胞的邻居、位置与局部环境可能与表达同样重要。

Neighbors, location and the local environment can matter as much as expression.

**Question / 问题**

组织微环境怎样参与病变，测量误差会改变结论吗？

How does the tissue environment relate to disease, and can measurement errors change conclusions?

**Data / 数据**

表达矩阵 + 分子/细胞坐标 + 组织图像 + 分割。

Expression + molecule/cell coordinates + tissue images + segmentation.

**Challenge / 挑战**

分子归属错误、分辨率不一、空间自相关与批次。

Molecule misassignment, varying resolution, spatial autocorrelation and batches.

**Next / 方向**

显式建模测量误差；用阻断或共培养实验验证通信假设。

Model measurement error explicitly; test communication hypotheses using blocking or co-culture experiments.

Studies: Nicheformer (2025); ResolVI (2026); Technical biases in imaging spatial transcriptomics (2026); Spatial proximity to AD pathology (2026); Spatial diabetic kidney atlas (2026); SPARK (2026)

### 05 从 DNA 变异走到功能机制 / Move from DNA variants to function

**Overview / 总览**

DNA 风险位点是线索，需要连接调控、细胞状态与可验证功能。

A risk locus is a clue; connect regulation, cell states and testable function.

**Question / 问题**

哪个变异影响哪个基因，在哪种细胞中产生影响？

Which variant affects which gene, in which cell type?

**Data / 数据**

GWAS、eQTL、ATAC/Hi-C、序列与干预读出。

GWAS, eQTLs, ATAC/Hi-C, sequence and intervention readouts.

**Challenge / 挑战**

连锁不平衡、多效性、组织不匹配与基因组坐标。

Linkage disequilibrium, pleiotropy, tissue mismatch and genome coordinates.

**Next / 方向**

精细定位 + 序列模型排序 + CRISPR/报告基因验证，不仅报告分数。

Fine-map, prioritize with sequence models, then validate with CRISPR/reporter assays—not just scores.

Studies: AlphaGenome (2026); Evo 2 (2026); GAGE-seq / Hicformer (2026); PICALM · Microglial mechanism (2025); Paper2Agent (2026)

### 06 发现靶点与药物候选 / Discover targets and drug candidates

**Overview / 总览**

从疾病–靶点关联到分子结构、活性与实验，分阶段缩小候选范围。

Narrow candidates in stages: disease–target evidence, structure, activity and experiments.

**Question / 问题**

候选能否结合、改变细胞，并最终对患者有益？

Can a candidate bind, alter cells and ultimately benefit patients?

**Data / 数据**

知识图、依赖筛选、SMILES、结构、活性与患者结局。

Knowledge graphs, dependency screens, SMILES, structures, activity and patient outcomes.

**Challenge / 挑战**

不同活性单位、负例偏差、细胞系到患者的差距。

Different activity units, negative-example bias and the cell-line-to-patient gap.

**Next / 方向**

报告证据链与候选失败；做外部验证、目标试验模拟或前瞻实验。

Report evidence chains and failures; use external validation, target-trial emulation or prospective experiments.

Studies: TxGNN (2024); AlphaFold 2 (2021); AlphaFold 3 (2024); Boltz-2 (2025); AI co-scientist (2026); Virtual Lab (2025)

### 07 从病理图像提取可解释信息 / Extract interpretable information from pathology

**Overview / 总览**

图像可用于分类，也可帮助形成肿瘤微环境假设；两者证据层级不同。

Images support classification and tumor-microenvironment hypotheses; these have different evidence requirements.

**Question / 问题**

模型依据真正的病理，还是扫描仪与医院差异？

Does the model rely on pathology or on scanner and hospital differences?

**Data / 数据**

全切片、多通道图像、临床结局与必要的区域标注。

Whole slides, multichannel images, outcomes and relevant region annotations.

**Challenge / 挑战**

大文件 I/O、中心偏差、弱标签和解释不稳定。

Large-file I/O, site bias, weak labels and unstable explanations.

**Next / 方向**

按患者/医院留出，测试可解释特征，尽量连接空间或分子验证。

Hold out patients/sites, test interpretable features and connect spatial or molecular validation.

Studies: UNI (2024); CONCH (2024); SPARK (2026)

### 08 让科研助手可执行、可审计 / Make scientific assistants executable and auditable

**Overview / 总览**

Agent 的价值不是写出像论文的答案，而是把工具、数据与证据串起来。

An agent’s value is not paper-like prose, but linking tools, data and evidence.

**Question / 问题**

结论能否被独立复现？助手能否识别无效工具结果？

Can conclusions be independently reproduced? Can the assistant recognize invalid tool results?

**Data / 数据**

研究问题、文献、工具 schema、代码、数据和反馈。

Questions, literature, tool schemas, code, data and feedback.

**Challenge / 挑战**

引用不支持结论、代码静默错误、验证器偏差与敏感数据。

Unsupported citations, silent code errors, verifier bias and sensitive data.

**Next / 方向**

保存执行轨迹和版本；建立任务级及操作级验证；限定权限、隔离代码。

Preserve execution traces and versions; validate tasks and actions; scope permissions and sandbox code.

Studies: Biomni (2026); CellVoyager (2026); BioMedAgent (2026); Paper2Agent (2026); ScienceBuddy (2026); GENOAR · Omnicell navigation (2026); Real PMIDs, Wrong Papers (2026)

## Papers / 论文

### Single-cell AD atlas · Mathys (2019)

Nature · association

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41586-019-1195-2)

**Question / 问题**

阿尔兹海默病中，不同脑细胞发生了哪些变化？

Which brain cells change in Alzheimer’s disease?

**Data / 数据**

48 位供体、80,660 个细胞核；脑组织单核 RNA 测序。

48 donors; 80,660 nuclei; brain single-nucleus RNA sequencing.

**Method / 方法**

按细胞类型比较基因表达与病理程度。

Compare gene expression and pathology within cell types.

**Finding / 结论**

早期变化更具细胞类型特异性，后期出现共同应激反应。

Early changes are more cell-type-specific; later changes share stress responses.

**Limitation / 局限**

观察研究；不是 AI 干预模型，也不能证明变化是病因。

Observational atlas, not an AI intervention model or proof of disease causation.

[Primary source / 原文](https://www.nature.com/articles/s41586-019-1195-2)

### Multiregion AD atlas · Mathys (2024)

Nature · association

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41586-024-07606-7)

**Question / 问题**

为什么同一个脑内有些区域更容易受损？

Why are some brain regions more vulnerable than others?

**Data / 数据**

48 位供体、6 个脑区、约 130 万个细胞核。

48 donors, six regions, approximately 1.3 million nuclei.

**Method / 方法**

多脑区细胞状态比较，结合病理与认知信息。

Compare regional cell states with pathology and cognition.

**Finding / 结论**

定位易损细胞及与认知韧性相关的星形胶质细胞程序。

Identifies vulnerable cells and astrocyte programs associated with cognitive resilience.

**Limitation / 局限**

尸检横截面数据；区域差异不等于疾病真实时间轨迹。

Postmortem cross-sectional data; regional differences are not a measured disease timeline.

[Primary source / 原文](https://www.nature.com/articles/s41586-024-07606-7)

### BEYOND · Cellular communities (2024)

Nature · association

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41586-024-07871-6)

**Question / 问题**

把单个细胞的变化连接成疾病中的“细胞群落”。

Connect individual cell changes into disease-associated cellular communities.

**Data / 数据**

437 位供体、约 165 万个细胞核；另有 bulk 数据验证。

437 donors and approximately 1.65 million nuclei; additional bulk-data replication.

**Method / 方法**

细胞群落、疾病进程模型和统计中介分析。

Cellular communities, disease-progression modeling and statistical mediation.

**Finding / 结论**

提出衰老、AD 病理与细胞群落之间的联系。

Links aging, AD pathology and cellular communities.

**Limitation / 局限**

统计因果解释依赖假设；伪时间不是追踪同一个人的纵向测量。

Causal interpretation depends on assumptions; pseudotime is not longitudinal follow-up.

[Primary source / 原文](https://www.nature.com/articles/s41586-024-07871-6)

### PICALM · Microglial mechanism (2025)

Nature · experiment

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41586-025-09486-x)

**Question / 问题**

一个 AD 风险变异怎样影响脑内免疫细胞？

How does an AD risk variant affect brain immune cells?

**Data / 数据**

人源 iPSC 微胶质细胞、风险变异与功能实验。

Human iPSC-derived microglia, risk variants and functional experiments.

**Method / 方法**

基因编辑、调控结合与遗传/药理干预；以实验为主。

Gene editing, regulatory binding and genetic/pharmacological perturbations; primarily experimental.

**Finding / 结论**

风险变异降低 PICALM，关联脂滴增加与吞噬受损，并提供机制支持。

Supports a chain from reduced PICALM to lipid accumulation and impaired phagocytosis.

**Limitation / 局限**

细胞模型机制支持，不是已验证的人体治疗；可作为 AI 候选机制验证范例。

Cell-model mechanism evidence, not a proven human therapy; a template for validating AI hypotheses.

[Primary source / 原文](https://www.nature.com/articles/s41586-025-09486-x)

### PHGDH · Non-enzymatic AD mechanism (2025)

Cell · experiment

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://pmc.ncbi.nlm.nih.gov/articles/PMC12204802/)

**Question / 问题**

蛋白除了已知酶功能，是否还能推动 AD 病理？

Can a protein drive AD pathology beyond its known enzyme function?

**Data / 数据**

分子实验、脑类器官和小鼠模型；转录组 GSE261164。

Molecular assays, brain organoids and mouse models; transcriptomics GSE261164.

**Method / 方法**

结构预测辅助提出 DNA 结合线索，再做突变与功能验证。

Structure prediction motivates a DNA-binding hypothesis, followed by mutation and functional tests.

**Finding / 结论**

提出 PHGDH 非酶性转录调控、自噬与淀粉样病理的联系。

Supports non-enzymatic PHGDH transcriptional regulation linked to autophagy and amyloid pathology.

**Limitation / 局限**

AI 提供线索，实验提供证据；抑制剂结果仍是临床前。

AI supplies a lead; experiments supply evidence. Inhibitor findings remain preclinical.

[Primary source / 原文](https://pmc.ncbi.nlm.nih.gov/articles/PMC12204802/)

### PASCode (2026)

Nature Medicine · Sep 23 · association

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41591-025-04128-1)

**Question / 问题**

哪些脑细胞更能反映疾病和认知状态？

Which brain cells best reflect disease and cognitive status?

**Data / 数据**

PsychAD 全资源 1,494 位供体、630 万细胞核；论文 AD 聚焦分析为子集。

PsychAD resource: 1,494 donors and 6.3 million nuclei; AD-focused analyses use a subset.

**Method / 方法**

图注意力模型将细胞与供体表型关联，生成细胞评分。

A graph-attention model associates cells with donor phenotypes and produces cell scores.

**Finding / 结论**

定位与神经退行性病理和认知相关的细胞状态。

Localizes cell states associated with neurodegenerative pathology and cognition.

**Limitation / 局限**

表型关联评分，不是单细胞病因标签；须按供体划分训练测试。

Phenotype-association scores are not causal cell labels; split evaluation by donor.

[Primary source / 原文](https://www.nature.com/articles/s41591-025-04128-1)

### GAGE-seq / Hicformer (2026)

Science · Jul 23 · prediction

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://pmc.ncbi.nlm.nih.gov/articles/PMC13499675/)

**Question / 问题**

把 DNA 的三维折叠与脑细胞基因活动联系起来。

Connect 3D DNA folding with gene activity in brain cells.

**Data / 数据**

20 位供体（10 AD / 10 对照）、23,825 个细胞核，联合 RNA 与 Hi-C。

20 donors (10 AD / 10 controls), 23,825 nuclei, joint RNA and Hi-C.

**Method / 方法**

序列与三维接触驱动的表达预测；使用细胞类型汇总信号。

Sequence and 3D-contact-based expression prediction using cell-type pseudobulk signals.

**Finding / 结论**

帮助解释不同细胞类型的调控与 AD 相关改变。

Helps interpret cell-type-specific regulation and AD-associated changes.

**Limitation / 局限**

预测/归因不等于因果；20 位供体不能按细胞数扩大有效样本量。

Prediction and attribution are not causality; 20 donors do not become thousands of independent patients.

[Primary source / 原文](https://pmc.ncbi.nlm.nih.gov/articles/PMC13499675/)

### Spatial proximity to AD pathology (2026)

bioRxiv · Oct 16 · Preprint · association

Year type / 年份类型: 预印本 / Preprint

[Year source / 年份来源](https://www.biorxiv.org/content/10.64898/2026.10.15.759523v1)

**Question / 问题**

淀粉样蛋白和 tau 病理附近的细胞状态，是否会随细胞类型和基因型而变化？

Do cellular states near amyloid and tau pathology vary by cell type and genotype?

**Data / 数据**

人类死后海马组织；空间转录组、病理位置与供体基因型。

Postmortem human hippocampus with spatial transcriptomics, pathology locations and donor genotypes.

**Method / 方法**

按细胞类型比较与病理距离相关的表达，并分析基因型交互。

Compare distance-associated expression by cell type and analyze genotype interactions.

**Finding / 结论**

作者报告了病理邻近区域中细胞类型与基因型特异的分子特征。

The authors report cell-type- and genotype-specific molecular characteristics near pathology.

**Limitation / 局限**

横断面死后组织中的空间关联不能确定时间顺序或因果机制；这是尚未同行评审的预印本。

Spatial associations in cross-sectional postmortem tissue do not establish temporal order or causal mechanism; this is an unreviewed preprint.

[Primary source / 原文](https://www.biorxiv.org/content/10.64898/2026.10.15.759523v1)

### Rheumatoid arthritis synovial atlas (2023)

Nature · association

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41586-023-06708-y)

**Question / 问题**

关节炎患者的免疫细胞和组织细胞是否有不同组合？

Do arthritis patients have distinct immune and tissue-cell compositions?

**Data / 数据**

类风湿关节炎滑膜组织、多模态单细胞数据。

Rheumatoid arthritis synovial tissue with multimodal single-cell data.

**Method / 方法**

细胞聚类、状态识别与患者组织分型。

Cell clustering, state identification and tissue-based patient stratification.

**Finding / 结论**

显示不同炎症细胞组合，为机制与分层研究提供地图。

Maps distinct inflammatory cell combinations for mechanism and stratification research.

**Limitation / 局限**

组织分型不是已经验证的药物选择规则。

Tissue subtypes are not yet validated rules for choosing therapy.

[Primary source / 原文](https://www.nature.com/articles/s41586-023-06708-y)

### Cytokine-driven fibroblast states (2023)

Nature Immunology · experiment

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41590-023-01527-9)

**Question / 问题**

炎症信号如何改变关节中的成纤维细胞？

How do inflammatory signals change joint fibroblasts?

**Data / 数据**

滑膜细胞、单细胞数据及细胞因子暴露实验。

Synovial cells, single-cell data and cytokine-exposure experiments.

**Method / 方法**

用 TNF、IFNγ、IL-1β 等干预检验细胞状态来源。

Perturb cytokine signaling to test the origins of fibroblast states.

**Finding / 结论**

连接炎症微环境与不同成纤维细胞程序。

Connects the inflammatory environment to distinct fibroblast programs.

**Limitation / 局限**

实验条件中的状态诱导，不代表患者全身长期响应。

State induction in an experimental context does not establish long-term patient response.

[Primary source / 原文](https://www.nature.com/articles/s41590-023-01527-9)

### Spatial diabetic kidney atlas (2026)

Nature · association

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41586-026-10363-4)

**Question / 问题**

糖尿病肾病中，细胞位置怎样反映损伤？

How do cell locations reflect injury in diabetic kidney disease?

**Data / 数据**

肾组织单核 RNA、Xenium / CosMx 空间数据及临床信息。

Kidney single-nucleus RNA, Xenium/CosMx spatial data and clinical information.

**Method / 方法**

整合细胞类型、空间邻域与疾病表型。

Integrate cell types, spatial neighborhoods and disease phenotypes.

**Finding / 结论**

描绘损伤组织结构及 B 细胞富集等疾病亚群。

Maps injured tissue architecture and disease subgroups including B-cell-rich patterns.

**Limitation / 局限**

空间共现不是细胞之间的因果作用；治疗需独立验证。

Spatial co-occurrence is not causal interaction; treatment implications require validation.

[Primary source / 原文](https://www.nature.com/articles/s41586-026-10363-4)

### CRISPR activation / inhibition in T cells (2022)

Science · experiment

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://pubmed.ncbi.nlm.nih.gov/35113687/)

**Question / 问题**

哪些基因真正改变 T 细胞的免疫反应？

Which genes actually alter T-cell immune responses?

**Data / 数据**

原代 T 细胞、全基因组 CRISPRa/i 筛选与单细胞读出。

Primary T cells, genome-wide CRISPRa/i screens and single-cell readouts.

**Method / 方法**

干预基因后测量 IL-2 / IFNγ 等反应。

Perturb genes and measure responses such as IL-2 and IFNγ.

**Finding / 结论**

提供可用于建模的干预数据和免疫调控候选。

Provides intervention data and immune-regulatory candidates for modeling.

**Limitation / 局限**

供体、激活状态和实验读出限制外推范围。

Donor, activation state and measured endpoints constrain generalization.

[Primary source / 原文](https://pubmed.ncbi.nlm.nih.gov/35113687/)

### scVI (2018)

Nature Methods · prediction

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41592-018-0229-2)

**Question / 问题**

怎样比较不同批次测到的细胞？

How can cells measured in different batches be compared?

**Data / 数据**

单细胞 RNA 原始计数和批次标签。

Single-cell RNA counts and batch labels.

**Method / 方法**

概率生成模型学习细胞低维表示并建模测量噪声。

A probabilistic generative model learns cell representations and measurement noise.

**Finding / 结论**

成为数据整合、降维与下游分析的常用基线。

A widely used baseline for integration, representation and downstream analysis.

**Limitation / 局限**

批次校正可能抹去真实差异；整合漂亮不代表生物结论正确。

Batch correction may remove true differences; attractive embeddings do not establish biology.

[Primary source / 原文](https://www.nature.com/articles/s41592-018-0229-2)

### scGen (2019)

Nature Methods · prediction

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41592-019-0494-8)

**Question / 问题**

能否预测未测过的细胞对刺激的反应？

Can we predict how unmeasured cells respond to a stimulus?

**Data / 数据**

刺激前后单细胞表达与细胞类型标签。

Single-cell expression before/after stimulation with cell-type labels.

**Method / 方法**

在潜在空间中转移条件变化。

Transfer condition differences in a latent representation.

**Finding / 结论**

展示跨细胞类型预测刺激反应的思路。

Demonstrates a strategy for transferring stimulus-response predictions across cell types.

**Limitation / 局限**

潜在变化可迁移是假设；未见刺激与严重分布变化仍困难。

Transferable latent changes are an assumption; unseen stimuli and major shifts remain difficult.

[Primary source / 原文](https://www.nature.com/articles/s41592-019-0494-8)

### CPA (2023)

Molecular Systems Biology · prediction

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://doi.org/10.15252/msb.202211517)

**Question / 问题**

药物、剂量和细胞类型组合怎样改变细胞？

How do drug, dose and cell-type combinations change cells?

**Data / 数据**

带药物、剂量、细胞类型等条件的表达矩阵。

Expression matrices annotated with drug, dose and cell type.

**Method / 方法**

分解细胞状态与条件，再组合预测。

Disentangle cell state and conditions, then compose predictions.

**Finding / 结论**

支持药物条件及组合响应建模。

Supports modeling drug conditions and combinations.

**Limitation / 局限**

不要将组合外推直接等同于任意未见基因敲除预测。

Compositional extrapolation is not unrestricted prediction of unseen gene knockouts.

[Primary source / 原文](https://doi.org/10.15252/msb.202211517)

### CellOracle (2023)

Nature · prediction

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41586-022-05688-9)

**Question / 问题**

关闭一个转录因子，细胞可能走向哪种状态？

Where might a cell go if a transcription factor is switched off?

**Data / 数据**

RNA 表达；ATAC 或调控先验信息。

RNA expression with ATAC or regulatory priors.

**Method / 方法**

建立细胞类型相关基因调控网络并模拟扰动。

Build cell-type-specific gene-regulatory networks and simulate perturbations.

**Finding / 结论**

提供调控候选及细胞状态变化预测；部分系统有实验验证。

Produces regulatory candidates and state-change predictions with validation in selected systems.

**Limitation / 局限**

网络先验和线性近似限制预测；不能为所有推断边提供因果证明。

Priors and model approximations limit predictions; inferred edges are not all causally proven.

[Primary source / 原文](https://www.nature.com/articles/s41586-022-05688-9)

### GEARS (2023)

Nature Biotechnology · prediction

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41587-023-01905-6)

**Question / 问题**

能否预测没有直接测过的基因组合干预？

Can we predict gene combinations that were not directly measured?

**Data / 数据**

Perturb-seq 表达、干预标签和基因知识图。

Perturb-seq expression, perturbation labels and a gene knowledge graph.

**Method / 方法**

用图神经网络共享基因关系，预测单/双基因干预。

A graph neural network shares gene relationships to predict single/double perturbations.

**Finding / 结论**

为未见组合提供模型化外推。

Provides model-based extrapolation to unseen combinations.

**Limitation / 局限**

知识先验可能泄漏；必须与线性、无变化、加性基线按同一划分比较。

Priors may leak information; compare linear, no-change and additive baselines on identical splits.

[Primary source / 原文](https://www.nature.com/articles/s41587-023-01905-6)

### Geneformer (2023)

Nature · prediction

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41586-023-06139-9)

**Question / 问题**

从大量细胞学习基因语境，再寻找疾病候选靶点。

Learn gene context from many cells, then identify candidate disease targets.

**Data / 数据**

约 3,000 万细胞预训练；基因表达排序 token。

Approximately 30 million pretraining cells; ranked gene-expression tokens.

**Method / 方法**

Transformer 预训练与任务适配、计算扰动。

Transformer pretraining, task adaptation and computational perturbation.

**Finding / 结论**

支持细胞任务与心脏疾病相关网络候选验证。

Supports cell tasks and selected validation of cardiac disease-network candidates.

**Limitation / 局限**

模型中的删除 token 不等于真实敲除；须做生物实验验证。

Deleting a token is not a biological knockout; experimental validation is necessary.

[Primary source / 原文](https://www.nature.com/articles/s41586-023-06139-9)

### scGPT (2024)

Nature Methods · prediction

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41592-024-02201-0)

**Question / 问题**

把单细胞数据作为可迁移学习的基础。

Use single-cell data as a foundation for transferable learning.

**Data / 数据**

超过 3,300 万细胞；基因与表达信息。

More than 33 million cells with gene and expression information.

**Method / 方法**

生成式预训练，适配注释、整合与扰动任务。

Generative pretraining adapted to annotation, integration and perturbation tasks.

**Finding / 结论**

展示通用单细胞模型在多个任务中的应用。

Demonstrates general single-cell modeling across multiple tasks.

**Limitation / 局限**

不是完整细胞模拟器；扰动泛化优势需按新评测重新确认。

Not a complete cell simulator; perturbation generalization needs renewed benchmarking.

[Primary source / 原文](https://www.nature.com/articles/s41592-024-02201-0)

### Nicheformer (2025)

Nature Methods · prediction

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41592-025-02814-z)

**Question / 问题**

单个细胞处在怎样的组织环境中？

What tissue environment does a cell belong to?

**Data / 数据**

空间与解离单细胞表达数据。

Spatial and dissociated single-cell expression data.

**Method / 方法**

联合预训练学习细胞及组织邻域表示。

Joint pretraining learns cell and tissue-neighborhood representations.

**Finding / 结论**

支持细胞环境与空间任务预测。

Supports cellular-context and spatial prediction tasks.

**Limitation / 局限**

空间表示不是细胞通信机制或因果关系。

Spatial representations do not establish communication mechanisms or causal relationships.

[Primary source / 原文](https://www.nature.com/articles/s41592-025-02814-z)

### scPRINT (2025)

Nature Communications · prediction

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://pmc.ncbi.nlm.nih.gov/articles/PMC12003772/)

**Question / 问题**

能否从大量细胞提取候选基因调控网络？

Can large cell collections reveal candidate regulatory networks?

**Data / 数据**

约 5,000 万细胞的预训练资源。

A pretraining resource of approximately 50 million cells.

**Method / 方法**

表达建模及网络推断。

Expression modeling and regulatory-network inference.

**Finding / 结论**

提供细胞相关调控网络候选。

Provides cell-context-dependent candidate regulatory networks.

**Limitation / 局限**

注意力/预测关系不自动代表因果；干预是重要校验。

Attention or predictive relationships are not automatically causal; interventions provide key checks.

[Primary source / 原文](https://pmc.ncbi.nlm.nih.gov/articles/PMC12003772/)

### Geneformer · Scaling & quantization (2026)

Nature Computational Science · prediction

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s43588-026-00972-4)

**Question / 问题**

更大模型能否在可承受资源下使用？

Can larger cell models be used with manageable resources?

**Data / 数据**

超过 1 亿细胞语料；104M / 316M 参数模型。

A corpus exceeding 100 million cells; 104M/316M-parameter models.

**Method / 方法**

扩展预训练并研究量化效率。

Scale pretraining and investigate quantization efficiency.

**Finding / 结论**

连接模型规模、性能与资源效率。

Connects model scale, performance and resource efficiency.

**Limitation / 局限**

量化省显存不代表生物泛化问题已解决。

Lower memory use does not mean biological generalization is solved.

[Primary source / 原文](https://www.nature.com/articles/s43588-026-00972-4)

### Universal Cell Embeddings · UCE (2026)

Nature · Jul 8 · prediction

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41586-026-10689-z)

**Question / 问题**

把不同物种的细胞放在可比较的表示空间。

Place cells from different species in a comparable representation space.

**Data / 数据**

约 3,600 万细胞、8 个物种。

Approximately 36 million cells across eight species.

**Method / 方法**

通用细胞表示，支持未见细胞状态的零样本分析。

Universal representations support zero-shot analysis of unseen cell states.

**Finding / 结论**

跨物种与细胞类型的表示迁移。

Representation transfer across species and cell types.

**Limitation / 局限**

识别新状态不等于预测任意干预；需确认任务与数据重叠。

Recognizing new states is not arbitrary intervention prediction; check task and data overlap.

[Primary source / 原文](https://www.nature.com/articles/s41586-026-10689-z)

### State (2026)

Cell · Aug 31 online · prediction

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://doi.org/10.1016/j.cell.2026.07.052)

**Question / 问题**

用细胞上下文预测一组细胞的干预响应。

Use cellular context to predict a population’s perturbation response.

**Data / 数据**

大规模单细胞扰动数据与细胞上下文集合。

Large single-cell perturbation datasets and contextual cell sets.

**Method / 方法**

上下文驱动的细胞状态预测；CellEval 评估。

Context-conditioned state prediction evaluated with CellEval.

**Finding / 结论**

面向跨条件响应预测的模型与开放工具。

A model and tools for response prediction across conditions.

**Limitation / 局限**

不是逐个细胞的已观测反事实；代码、权重和输出有非商业使用约束。

Not observed individual-cell counterfactuals; code, weights and outputs have non-commercial restrictions.

[Primary source / 原文](https://doi.org/10.1016/j.cell.2026.07.052)

### ResolVI (2026)

Nature Methods · Sep 24 · prediction

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41592-026-03212-9)

**Question / 问题**

空间测序中，被分错到邻居细胞的分子怎么办？

What if spatial molecules are assigned to the wrong neighboring cell?

**Data / 数据**

空间表达、分子位置和已有细胞分割。

Spatial expression, molecule locations and existing cell segmentation.

**Method / 方法**

概率模型校正分子归属与技术变化。

A probabilistic model corrects molecule assignments and technical variation.

**Finding / 结论**

提高空间数据用于细胞分析的可靠性。

Improves the reliability of spatial data for cell analysis.

**Limitation / 局限**

依赖初始分割和评估代理；输出不是无条件真实标签。

Depends on initial segmentation and evaluation proxies; outputs are not unconditional ground truth.

[Primary source / 原文](https://www.nature.com/articles/s41592-026-03212-9)

### Technical biases in imaging spatial transcriptomics (2026)

bioRxiv · Oct 16 · Preprint · benchmark

Year type / 年份类型: 预印本 / Preprint

[Year source / 年份来源](https://www.biorxiv.org/content/10.64898/2026.10.16.759529v1)

**Question / 问题**

成像空间转录组里的空间图样，哪些可能来自探针和成像流程？

Which spatial patterns in imaging transcriptomics may come from probes and imaging procedures?

**Data / 数据**

公开 CosMx 扁桃体、需登录的 CosMx 肺癌与 Xenium 结直肠癌数据。

Public CosMx tonsil, login-gated CosMx lung-cancer and Xenium colorectal-cancer data.

**Method / 方法**

检查位置、视野、z 层、GC 含量与异构体探针覆盖对检测率的影响。

Audit detection against position, field of view, z-plane, GC content and isoform probe coverage.

**Finding / 结论**

作者报告多种技术结构可形成看似生物学的差异，并公开了分析代码。

The authors report technical structures that can resemble biology and release analysis code.

**Limitation / 局限**

结论依赖所测平台、面板与样本；该研究诊断测量偏差，不证明新的疾病机制。

Findings depend on the tested platforms, panels and samples; this diagnoses measurement bias rather than establishing a disease mechanism.

[Primary source / 原文](https://www.biorxiv.org/content/10.64898/2026.10.16.759529v1)

### CytoVI (2026)

Nature Methods · Sep 30 · prediction

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41592-026-03224-5)

**Question / 问题**

不同蛋白检测面板和批次如何一起分析？

How can different protein panels and batches be analyzed together?

**Data / 数据**

流式/质谱流式及 CITE 蛋白测量。

Flow/mass cytometry and CITE protein measurements.

**Method / 方法**

概率生成模型整合蛋白检测数据。

A probabilistic generative model integrates protein measurements.

**Finding / 结论**

支持蛋白层面的细胞表示与跨数据集分析。

Supports protein-level cell representations and cross-dataset analysis.

**Limitation / 局限**

蛋白强度不是 RNA 计数；潜在不确定性不是自动校准的临床风险。

Protein intensity is not RNA counts; latent uncertainty is not automatically calibrated clinical risk.

[Primary source / 原文](https://www.nature.com/articles/s41592-026-03224-5)

### Do foundation models beat simple baselines? (2025)

Nature Methods · benchmark

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41592-025-02772-6)

**Question / 问题**

大模型是否真的比简单方法更会预测干预？

Do large models really predict perturbations better than simple methods?

**Data / 数据**

多个癌细胞系的遗传扰动数据。

Genetic perturbation datasets from several cancer cell lines.

**Method / 方法**

统一比较深度模型、均值/线性与加性基线。

Compare deep models with mean, linear and additive baselines.

**Finding / 结论**

测试设置中，复杂方法没有稳定胜过简单基线。

Complex methods did not consistently outperform simple baselines in the tested settings.

**Limitation / 局限**

结论限定于该任务、数据和划分；不是“所有 AI 都无效”。

Scoped to these tasks, datasets and splits; not a claim that all AI is ineffective.

[Primary source / 原文](https://www.nature.com/articles/s41592-025-02772-6)

### Calibrated perturbation benchmarking (2026)

Nature Biotechnology · Oct 1 · benchmark

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41587-026-03307-w)

**Question / 问题**

评测分数高，是因为模型好，还是指标太容易？

Is a high score due to a good model or an insensitive metric?

**Data / 数据**

14 个数据集、18 个指标。

14 datasets and 18 metrics.

**Method / 方法**

用阳性对照校准指标，检查无信息基线。

Calibrate metrics using positive controls and examine uninformative baselines.

**Finding / 结论**

常见指标可能掩盖响应差异；需同时检验指标是否有效。

Common metrics can obscure response differences; metric validity itself must be tested.

**Limitation / 局限**

校准后的优势也不自动证明对未见供体/细胞类型的泛化。

Calibrated gains do not automatically establish generalization to unseen donors or cell types.

[Primary source / 原文](https://www.nature.com/articles/s41587-026-03307-w)

### PertEval-scFM (2025)

ICML · benchmark

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://proceedings.mlr.press/v267/wenteler25a.html)

**Question / 问题**

在统一条件下检查单细胞基础模型的扰动能力。

Evaluate perturbation capability under a consistent protocol.

**Data / 数据**

单细胞扰动数据与明确的留出划分。

Single-cell perturbation data with defined holdout splits.

**Method / 方法**

统一微调与比较，评估基础模型优势。

Consistent adaptation and comparison of foundation models.

**Finding / 结论**

强调任务匹配、基线和数据划分的重要性。

Highlights task matching, baselines and data-split design.

**Limitation / 局限**

不能把随机细胞留出称作新患者或新机制泛化。

A random-cell holdout is not new-patient or new-mechanism generalization.

[Primary source / 原文](https://proceedings.mlr.press/v267/wenteler25a.html)

### CausalBench (2025)

Communications Biology · benchmark

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s42003-025-07764-y)

**Question / 问题**

推断出的基因因果网络，经得住干预数据检查吗？

Do inferred causal gene networks survive checks against interventions?

**Data / 数据**

超过 20 万干预数据点，来自两个细胞系。

More than 200,000 interventional observations from two cell lines.

**Method / 方法**

用大规模 Perturb-seq 评测因果网络推断。

Benchmark causal network inference using large-scale Perturb-seq.

**Finding / 结论**

提供更接近干预证据的网络评估框架。

Provides a network-evaluation framework closer to intervention evidence.

**Limitation / 局限**

干预读出不是完整网络真值；不要与同名 LLM 基准混淆。

Intervention readouts are not complete network ground truth; distinct from similarly named LLM benchmarks.

[Primary source / 原文](https://www.nature.com/articles/s42003-025-07764-y)

### Causal active learning (2023)

Nature Machine Intelligence · prediction

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s42256-023-00719-0)

**Question / 问题**

预算有限时，下一个实验应该做什么？

With limited budget, which experiment should be next?

**Data / 数据**

干预实验与可用的因果模型信息。

Intervention experiments and available causal-model information.

**Method / 方法**

基于因果模型选择最有信息的干预。

Select informative interventions using causal models.

**Finding / 结论**

将实验设计与因果学习连接，减少盲目筛选。

Connects experimental design and causal learning to reduce unguided screening.

**Limitation / 局限**

理论结果在已知图、线性结构等条件下成立，不是通用实验最优保证。

Theory relies on conditions such as known graphs and linear structures, not universal optimality.

[Primary source / 原文](https://www.nature.com/articles/s42256-023-00719-0)

### Combinatorial Perturb-seq · Norman (2019)

Science · experiment

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://pmc.ncbi.nlm.nih.gov/articles/6746554/)

**Question / 问题**

两个基因一起改变，会出现单独干预没有的效果吗？

Can two genes together produce effects absent from single perturbations?

**Data / 数据**

K562 细胞、单/双基因干预、单细胞转录组。

K562 cells, single/double genetic perturbations and single-cell transcriptomics.

**Method / 方法**

比较组合与单干预的细胞表型。

Compare combination phenotypes with individual perturbations.

**Finding / 结论**

描述遗传互作结构，是组合预测常用实验基准。

Maps genetic-interaction structure; a widely used combination-prediction dataset.

**Limitation / 局限**

单一细胞系与筛选基因范围限制外推。

A single cell line and selected genes limit extrapolation.

[Primary source / 原文](https://pmc.ncbi.nlm.nih.gov/articles/6746554/)

### Genome-scale Perturb-seq · Replogle (2022)

Cell · experiment

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://pmc.ncbi.nlm.nih.gov/articles/PMC9380471/)

**Question / 问题**

大范围改变基因后，细胞表达如何变化？

How does cell expression change after large-scale gene perturbation?

**Data / 数据**

K562 / RPE1 等细胞系的 CRISPRi 与单细胞表达。

CRISPRi and single-cell expression in cell lines including K562/RPE1.

**Method / 方法**

大规模基因干预，测量多维转录表型。

Large-scale gene interventions with multidimensional transcriptional readouts.

**Finding / 结论**

为基因功能、调控网络与扰动预测提供实验资源。

Provides experimental resources for gene function, networks and response prediction.

**Limitation / 局限**

敲低效率、应激和生长选择会影响读出。

Knockdown efficiency, stress and growth selection affect measured responses.

[Primary source / 原文](https://pmc.ncbi.nlm.nih.gov/articles/PMC9380471/)

### AlphaGenome (2026)

Nature · Jan 28 · prediction

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41586-025-10014-0)

**Question / 问题**

一个非编码 DNA 变异可能影响哪些基因调控过程？

Which regulatory processes might a non-coding DNA variant affect?

**Data / 数据**

约 1 Mb DNA 上下文；表达、剪接与染色质等训练信号。

Approximately 1 Mb DNA context; expression, splicing and chromatin training signals.

**Method / 方法**

多模态序列模型预测调控读出及变异影响。

A multimodal sequence model predicts regulatory readouts and variant effects.

**Finding / 结论**

帮助优先筛选需要实验验证的调控变异。

Helps prioritize regulatory variants for experimental testing.

**Limitation / 局限**

预测变异效应不等于致病结论；组织语境与功能验证不可少。

Predicted variant effects are not pathogenicity conclusions; tissue context and validation matter.

[Primary source / 原文](https://www.nature.com/articles/s41586-025-10014-0)

### Evo 2 (2026)

Nature · Mar 4 · prediction

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41586-026-10176-5)

**Question / 问题**

从大规模 DNA 学习规律，辅助变异分析与设计。

Learn large-scale DNA patterns for variant analysis and design.

**Data / 数据**

约 9 万亿 DNA 碱基；7B / 40B 参数模型。

Approximately nine trillion DNA bases; 7B/40B-parameter models.

**Method / 方法**

长序列生成式基因组建模。

Long-context generative genome modeling.

**Finding / 结论**

扩展序列建模的跨物种与设计能力。

Extends sequence modeling across species and design tasks.

**Limitation / 局限**

序列合理性不代表细胞功能、临床安全或机制已被证明。

Sequence plausibility does not establish cell function, clinical safety or mechanism.

[Primary source / 原文](https://www.nature.com/articles/s41586-026-10176-5)

### AlphaFold 2 (2021)

Nature · prediction

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41586-021-03819-2)

**Question / 问题**

能否从蛋白序列推测三维结构？

Can a protein sequence reveal its three-dimensional structure?

**Data / 数据**

蛋白序列、多序列比对和实验结构。

Protein sequences, multiple-sequence alignments and experimental structures.

**Method / 方法**

深度学习预测结构并给出置信度。

Deep learning predicts structures with confidence estimates.

**Finding / 结论**

改变结构研究的可及性，支持机制假设。

Broadens access to structural analysis and mechanism hypotheses.

**Limitation / 局限**

结构不是动态、结合强度或药效的完整答案。

A structure is not a complete answer about dynamics, affinity or drug efficacy.

[Primary source / 原文](https://www.nature.com/articles/s41586-021-03819-2)

### AlphaFold 3 (2024)

Nature · prediction

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41586-024-07487-w)

**Question / 问题**

蛋白、核酸和小分子一起形成什么结构？

What structures form when proteins, nucleic acids and small molecules interact?

**Data / 数据**

多种生物分子及其复合物结构。

Multiple biomolecular types and complex structures.

**Method / 方法**

扩散模型预测复合物原子结构。

A diffusion model predicts complex atomic structures.

**Finding / 结论**

扩展到蛋白–DNA/RNA–配体等相互作用。

Extends prediction to interactions involving proteins, DNA/RNA and ligands.

**Limitation / 局限**

预测结合姿态不是结合自由能或临床效果；遵守权重许可。

A predicted pose is not binding free energy or clinical efficacy; respect weight licensing.

[Primary source / 原文](https://www.nature.com/articles/s41586-024-07487-w)

### Boltz-2 (2025)

bioRxiv · Preprint · prediction

Year type / 年份类型: 预印本 / Preprint

[Year source / 年份来源](https://doi.org/10.1101/2025.06.14.659707)

**Question / 问题**

同时估计分子复合物结构和结合相关信号。

Estimate complex structure and binding-related signals together.

**Data / 数据**

生物分子序列、SMILES、结构与亲和力训练资源。

Biomolecular sequences, SMILES, structures and affinity training resources.

**Method / 方法**

联合结构与亲和力预测。

Joint structure and affinity prediction.

**Finding / 结论**

开放工具可辅助化合物优先级排序。

Open tooling supports compound prioritization.

**Limitation / 局限**

报告亲和力读出和单位；模型分数不是药物疗效。该条对应预印本。

Report affinity endpoints and units; scores are not therapeutic efficacy. This entry refers to a preprint.

[Primary source / 原文](https://doi.org/10.1101/2025.06.14.659707)

### TxGNN (2024)

Nature Medicine · prediction

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41591-024-03233-x)

**Question / 问题**

数据少的疾病，能否找到已有药物的候选新用途？

Can existing drugs gain candidate uses for data-poor diseases?

**Data / 数据**

药物、疾病、基因等生物医学知识图。

A biomedical knowledge graph linking drugs, diseases and genes.

**Method / 方法**

图模型进行疾病–药物关系预测。

A graph model predicts disease–drug relationships.

**Finding / 结论**

支持低数据疾病的药物再利用候选筛选。

Supports repurposing candidate selection for low-data diseases.

**Limitation / 局限**

候选关系/排名不是临床疗效；训练关系泄漏须检查。

Predicted links or rankings are not clinical efficacy; check relation leakage.

[Primary source / 原文](https://www.nature.com/articles/s41591-024-03233-x)

### UNI (2024)

Nature Medicine · prediction

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41591-024-02857-3)

**Question / 问题**

如何从病理切片提取可复用的组织特征？

How can pathology slides yield reusable tissue features?

**Data / 数据**

全切片图像切出的高分辨率图像块。

High-resolution image patches sampled from whole-slide images.

**Method / 方法**

自监督预训练图像编码器。

A self-supervised image encoder.

**Finding / 结论**

提供病理下游任务的通用图像表示。

Provides reusable representations for downstream pathology tasks.

**Limitation / 局限**

切片特征不是机制解释；按患者划分，并检查中心/扫描仪偏差。

Slide features are not mechanistic explanations; split by patient and test site/scanner bias.

[Primary source / 原文](https://www.nature.com/articles/s41591-024-02857-3)

### CONCH (2024)

Nature Medicine · prediction

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41591-024-02856-4)

**Question / 问题**

让病理图像与文字描述进入同一个空间。

Connect pathology images and textual descriptions.

**Data / 数据**

约 117 万图像–描述配对。

Approximately 1.17 million image–caption pairs.

**Method / 方法**

视觉–语言预训练，支持检索与分类。

Vision–language pretraining for retrieval and classification.

**Finding / 结论**

降低部分病理任务对任务专用标注的依赖。

Reduces dependence on task-specific annotations in selected pathology tasks.

**Limitation / 局限**

图文相似不等于正确诊断；细粒度病理与许可限制需核查。

Image–text similarity is not a correct diagnosis; check fine-grained limitations and licenses.

[Primary source / 原文](https://www.nature.com/articles/s41591-024-02856-4)

### SPARK (2026)

Nature Medicine · Apr 29 · association

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41591-026-04357-y)

**Question / 问题**

把可解释的肿瘤微环境假设变成可测量图像特征。

Turn interpretable tumor-microenvironment hypotheses into measurable image features.

**Data / 数据**

多癌种、多个队列的数字病理与结局信息。

Digital pathology and outcomes across multiple cancer cohorts.

**Method / 方法**

LLM 辅助提出假设，计算组织特征，检验结局关联。

LLM-assisted hypotheses become computable tissue features tested against outcomes.

**Finding / 结论**

连接科学假设、图像分析与预后研究。

Connects scientific hypotheses, image analysis and prognosis research.

**Limitation / 局限**

静态切片不能直接测动态机制；预后关联需要外部/前瞻验证。

Static slides do not directly measure dynamics; prognostic associations need external/prospective validation.

[Primary source / 原文](https://www.nature.com/articles/s41591-026-04357-y)

### AI co-scientist (2026)

Nature · May 19 online · experiment

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41586-026-10644-y)

**Question / 问题**

多个 AI 协作提出并筛选可实验检验的科学假设。

Multiple AI agents propose and refine experimentally testable hypotheses.

**Data / 数据**

文献、研究问题和实验反馈。

Literature, research questions and experimental feedback.

**Method / 方法**

生成、辩论、排序与迭代假设。

Generate, debate, rank and iteratively refine hypotheses.

**Finding / 结论**

选定的药物再利用、靶点与耐药案例获得实验检验。

Selected repurposing, target and resistance cases receive experimental tests.

**Limitation / 局限**

案例成功不等于所有输出可靠；完整系统并非开放源码。

Successful cases do not validate all outputs; the complete system is not open source.

[Primary source / 原文](https://www.nature.com/articles/s41586-026-10644-y)

### Virtual Lab (2025)

Nature · experiment

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41586-025-09442-9)

**Question / 问题**

让 AI 科学家协同设计，再由真实实验检查。

Let AI scientist teams design candidates, then test them experimentally.

**Data / 数据**

科学文献、蛋白建模工具与纳米抗体实验。

Scientific literature, protein-modeling tools and nanobody experiments.

**Method / 方法**

多角色讨论与工具调用生成设计。

Role-based discussions and tool use produce candidate designs.

**Finding / 结论**

展示 AI 设计与湿实验结合的科研工作流。

Demonstrates a workflow combining AI design with wet-lab experiments.

**Limitation / 局限**

需要人类实验团队；不是无需实验即可确认结果的系统。

Requires human experimental teams; not a system that verifies results without experiments.

[Primary source / 原文](https://www.nature.com/articles/s41586-025-09442-9)

### Biomni (2026)

Science · workflow

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.science.org/doi/10.1126/science.adz4351)

**Question / 问题**

让一个助手协调多种生物医学数据分析工具。

Let one assistant coordinate many biomedical analysis tools.

**Data / 数据**

用户问题、领域工具、数据与执行环境。

User questions, domain tools, data and an execution environment.

**Method / 方法**

LLM 规划、检索和执行分析。

LLM planning, retrieval and analysis execution.

**Finding / 结论**

支持跨生物医学任务的通用代理工作流。

Supports general agent workflows across biomedical tasks.

**Limitation / 局限**

代码跑通与科学结论正确是两种验证；敏感数据不能随意发往模型 API。

Successful code execution and scientific validity are separate checks; protect sensitive data from model APIs.

[Primary source / 原文](https://www.science.org/doi/10.1126/science.adz4351)

### CellVoyager (2026)

Nature Methods · workflow

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41592-026-03029-6)

**Question / 问题**

从单细胞数据与问题出发，生成可检查的分析笔记本。

Turn single-cell data and questions into inspectable analysis notebooks.

**Data / 数据**

H5AD、数据介绍、已有分析和研究问题。

H5AD files, dataset context, prior analyses and a research question.

**Method / 方法**

代理生成并执行分析，再整理结果。

An agent generates and executes analyses, then organizes results.

**Finding / 结论**

降低探索单细胞数据的编程负担。

Reduces programming overhead for single-cell exploration.

**Limitation / 局限**

仍须审查统计假设、数据划分和生物解释；不是同名显微镜产品。

Review statistics, splits and biological interpretation; distinct from the similarly named microscope product.

[Primary source / 原文](https://www.nature.com/articles/s41592-026-03029-6)

### BioMedAgent (2026)

Nature Biomedical Engineering · workflow

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41551-026-01634-6)

**Question / 问题**

能否自动完成一组真实生物医学分析任务？

Can agents complete realistic biomedical analysis tasks?

**Data / 数据**

BioMedAQA 的 327 个任务。

327 BioMedAQA tasks.

**Method / 方法**

规划、工具调用和分析执行。

Planning, tool use and analysis execution.

**Finding / 结论**

论文报告约 77% 任务成功率。

The paper reports approximately 77% task success.

**Limitation / 局限**

任务成功率不是临床诊断准确率，也不是全部科学结论正确率。

Task success is not clinical diagnostic accuracy or universal scientific correctness.

[Primary source / 原文](https://www.nature.com/articles/s41551-026-01634-6)

### GENOAR · Omnicell navigation (2026)

bioRxiv · Oct 22 · Preprint · workflow

Year type / 年份类型: 预印本 / Preprint

[Year source / 年份来源](https://www.biorxiv.org/content/10.64898/2026.10.15.759380v1)

**Question / 问题**

如何在数千万个公开单细胞转录组中用自然语言寻找可比较样本？

How can natural language find comparable samples across tens of millions of public single-cell profiles?

**Data / 数据**

约 5,400 万个公开单细胞转录组，来源于 SRA 元数据与表达资源。

Approximately 54 million public single-cell transcriptomes from SRA metadata and expression resources.

**Method / 方法**

两个代理分别标准化非结构化细胞标签并检索数据，结合并行计算支持查询。

Two agents standardize unstructured cell labels and retrieve data, with parallel computing supporting queries.

**Finding / 结论**

作者提供可搜索的 Omnicell 入口，并展示跨数据集检索与下游分析。

The authors provide a searchable Omnicell interface and demonstrate cross-dataset retrieval and downstream analysis.

**Limitation / 局限**

自动标准化的元数据可能有错误；底层数据的许可和质量各异，作者报告的工作流尚未独立复现。

Automated metadata normalization can be wrong; underlying licenses and quality vary, and the author-reported workflow has not been independently reproduced.

[Primary source / 原文](https://www.biorxiv.org/content/10.64898/2026.10.15.759380v1)

### Real PMIDs, Wrong Papers (2026)

AgenticLS @ NeurIPS · Oct 22 · Workshop · benchmark

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://arxiv.org/abs/2610.29812)

**Question / 问题**

科研代理给出的 PMID 存在时，引用真的支持结论吗？

When an agent cites a real PMID, does that paper actually support the claim?

**Data / 数据**

100 条 SciFact 开发集声明、PubMed 实时检索、两个轻量模型和四种检索配置。

100 SciFact development claims, live PubMed retrieval, two efficient models and four retrieval setups.

**Method / 方法**

固定模型与输出格式，对比闭卷、单次检索、可改写查询的 ReAct 代理和金标准摘要。

Hold models and output format fixed while comparing closed book, single retrieval, a query-writing ReAct agent and gold abstracts.

**Finding / 结论**

作者报告代理查询把金标准文献召回率提升约三倍；最佳现实配置准确率 62%，但组间差异在该样本量下不显著。

The authors report about threefold higher gold-paper recall from agent-written queries; the best realistic setup reached 62% accuracy, but differences were not significant at this sample size.

**Limitation / 局限**

仅 100 条声明且依赖两种模型与一个跨模型引用判定器；真实 PMID、任务准确率和临床可靠性是不同概念。

Only 100 claims, two models and a cross-family citation judge were tested; a real PMID, task accuracy and clinical reliability are different claims.

[Primary source / 原文](https://arxiv.org/abs/2610.29812)

### Prospective uncertainty-aware SPMS classification (2026)

medRxiv · Oct 11 · Preprint · prediction

Year type / 年份类型: 预印本 / Preprint

[Year source / 年份来源](https://www.medrxiv.org/content/10.64898/2026.10.07.26364939v1)

**Question / 问题**

能否在后续真实登记数据中同时预测多发性硬化病程并表达个体不确定性？

Can disease course and individual uncertainty be predicted on later real-world multiple-sclerosis registry data?

**Data / 数据**

训练/校准：SMSReg-2022 的 10,787 人、85,461 次就诊；前瞻核查：SMSReg-2025 的 15,719 人、45,077 次就诊。

Training/calibration: 10,787 people and 85,461 visits in SMSReg-2022; prospective check: 15,719 people and 45,077 visits in SMSReg-2025.

**Method / 方法**

随机森林结合保形预测，输出 RRMS、SPMS 或不确定集合，并与 Lorscheider 标准比较。

A random forest with conformal prediction outputs RRMS, SPMS or an uncertain set and is compared with Lorscheider criteria.

**Finding / 结论**

作者报告就诊级 RRMS/SPMS 准确率为 92%/95%，个体级敏感度 98%、特异度 89%。

The authors report visit-level RRMS/SPMS accuracy of 92%/95% and person-level sensitivity of 98% with 89% specificity.

**Limitation / 局限**

目标是复现临床登记标签而非证明改善患者结局；同一国家登记体系的时间外验证不是跨医疗系统临床试验，且论文尚未同行评审。

The target reproduces registry labels rather than patient benefit; temporal validation in one national registry is not a cross-system clinical trial, and the paper is not peer reviewed.

[Primary source / 原文](https://www.medrxiv.org/content/10.64898/2026.10.07.26364939v1)

### Paper2Agent (2026)

Nature · Sep 16 · workflow

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41586-026-11044-y)

**Question / 问题**

把论文、代码和数据变成可以调用的研究工具。

Turn papers, code and data into callable research tools.

**Data / 数据**

论文、关联代码与数据。

Papers with associated code and data.

**Method / 方法**

重建执行环境、测试并包装为 MCP 工具。

Reconstruct execution environments, test and package tools via MCP.

**Finding / 结论**

将静态论文连接到可执行研究流程；2025 年已有预印本。

Connects static papers to executable workflows; a preprint appeared in 2025.

**Limitation / 局限**

需要可访问代码/数据；包装成功不代表所有论文均可完整复现。

Requires accessible code/data; successful packaging does not mean every paper is fully reproducible.

[Primary source / 原文](https://www.nature.com/articles/s41586-026-11044-y)

### ScienceBuddy (2026)

arXiv · Sep 16 · Preprint · workflow

Year type / 年份类型: 预印本 / Preprint

[Year source / 年份来源](https://arxiv.org/abs/2609.17523)

**Question / 问题**

整合科研工具，并研究助手怎样从反馈中改进。

Integrate scientific tools and study how assistants improve from feedback.

**Data / 数据**

报告中的 224 个工具、22 个模块与反馈任务。

224 tools in 22 modules and feedback tasks in the report.

**Method / 方法**

工具工作区与代码/模型分离的递归改进实验。

A tool workspace with separate code- and model-improvement experiments.

**Finding / 结论**

提供科研代理与自改进实验路线。

Provides a scientific-agent and self-improvement research direction.

**Limitation / 局限**

公开的是 SimpleSciBuddy/RSI 实现；完整托管界面并未开源，模拟反馈不等于真实发现验证。

The public release is SimpleSciBuddy/RSI, not the complete hosted frontend; simulated feedback is not validation of real discoveries.

[Primary source / 原文](https://arxiv.org/abs/2609.17523)

## Datasets / 数据集

### ADNI (2004)

DICOM · NIfTI · CSV · controlled

Year type / 年份类型: 项目启动 / Project launch

[Year source / 年份来源](https://adni.loni.usc.edu/about/)

**Purpose / 用途**

追踪认知衰退，连接影像、生物标志物与认知测量。

Follow cognitive decline using imaging, biomarkers and cognition.

**Unit / 记录单位**

人 → 就诊 → 测量/影像。

Participant → visit → measurement/image.

**Join / 连接**

RID、VISCODE、日期、影像 ID；先核对字典。

RID, VISCODE, dates and image IDs; consult dictionaries.

**Caution / 注意**

申请、DUA 与用途限制；不是所有人都有全部模态。

Application, DUA and use restrictions; not everyone has every modality.

[Official data / 官方入口](https://adni.loni.usc.edu/data-samples/adni-data/)

### OASIS-3 (2019)

NIfTI · JSON · CSV · MGZ · controlled

Year type / 年份类型: 资源论文 · 预印本 / Resource paper · preprint

[Year source / 年份来源](https://doi.org/10.1101/2019.12.13.19014902)

**Purpose / 用途**

纵向脑影像与认知数据，适合复现影像分析。

Longitudinal brain imaging and cognition for reproducible imaging studies.

**Unit / 记录单位**

参与者、影像会话和临床访问。

Participants, imaging sessions and clinical visits.

**Join / 连接**

BIDS / XNAT 标识、相对日期；访问与扫描不一定一一对应。

BIDS/XNAT IDs and relative dates; visits and scans need not align one-to-one.

**Caution / 注意**

需申请与遵守数据协议；对齐相对时间，不拼接错误会话。

Apply and follow the agreement; align relative times rather than mismatching sessions.

[Official data / 官方入口](https://www.oasis-brains.org/)

### ROSMAP / AMP-AD (2014)

FASTQ · TSV · multi-omics · controlled

Year type / 年份类型: AMP-AD 启动 / AMP-AD launch

**Year context / 年份说明**

2014 为 AMP-AD 项目启动年，不是 ROSMAP 队列或每个数据文件的发布年。

2014 is the AMP-AD launch year, not the start of the ROSMAP cohorts or the release year of every file.

[Year source / 年份来源](https://www.nia.nih.gov/research/amp-ad)

**Purpose / 用途**

脑尸检组学与临床病理，连接供体、组织和检测。

Postmortem brain omics with clinical pathology, linked across donors, tissue and assays.

**Unit / 记录单位**

供体 → 标本 → 检测。

Donor → specimen → assay.

**Join / 连接**

donorID、specimenID、assay 与 Synapse 文件实体。

donorID, specimenID, assay and Synapse file entities.

**Caution / 注意**

2026 年政策更新后，个体级人类原始/处理/衍生数据通常受控；核对具体实体。

Following 2026 policy changes, individual-level human raw/processed/derived data are generally controlled; check each entity.

[Official data / 官方入口](https://help.adknowledgeportal.org/apd/access-data)

### SEA-AD (2024)

H5AD · XLSX · spatial · mixed

Year type / 年份类型: 图谱论文 / Atlas publication

**Year context / 年份说明**

图谱论文 2024；官方数据页另有 2026 年 6 月的多脑区数据更新。

Atlas publication 2024; the official data page also documents a June 2026 multiregion update.

[Year source / 年份来源](https://www.nature.com/articles/s41593-024-01774-5)

**Purpose / 用途**

AD 脑细胞、空间位置、病理与供体信息。

AD brain cells, spatial context, pathology and donor information.

**Unit / 记录单位**

供体、脑区、细胞及组织切片。

Donors, regions, cells and tissue sections.

**Join / 连接**

donor / region / sample / cell；固定发布版本。

Donor/region/sample/cell IDs; pin a release.

**Caution / 注意**

公开处理资源与受控原始资源分开；不同脑区和版本不要混作同一实验。

Separate public processed and controlled raw resources; distinguish regions and versions.

[Official data / 官方入口](https://brain-map.org/consortia/sea-ad/our-data)

### PsychAD / PASCode resource (2026)

single-nucleus matrices · metadata · mixed

Year type / 年份类型: 资源论文 / Resource publication

[Year source / 年份来源](https://www.nature.com/articles/s41591-025-04128-1)

**Purpose / 用途**

大规模脑细胞与供体表型；按论文数据可用性获取。

Large brain-cell and donor-phenotype resources; follow paper data availability.

**Unit / 记录单位**

细胞嵌套于供体与脑区。

Cells nested within donors and regions.

**Join / 连接**

供体、样本、细胞与诊断/认知标签。

Donor, sample, cell and diagnostic/cognitive labels.

**Caution / 注意**

全资源与论文过滤子集规模不同；标签不可直接复制为细胞病因。

Full-resource and filtered-study sizes differ; labels are not cell-level causal truth.

[Official data / 官方入口](https://www.nature.com/articles/s41591-025-04128-1)

### AD GAGE-seq multiome (2026)

RNA matrix · Hi-C contacts · mixed

Year type / 年份类型: 资源论文 / Resource publication

[Year source / 年份来源](https://pmc.ncbi.nlm.nih.gov/articles/PMC13499675/)

**Purpose / 用途**

同一细胞核的表达与 DNA 三维接触。

Expression and 3D DNA contacts from the same nuclei.

**Unit / 记录单位**

供体、细胞核、染色质接触。

Donors, nuclei and chromatin contacts.

**Join / 连接**

供体/细胞条码、染色体坐标与参考基因组。

Donor/cell barcodes, chromosome coordinates and reference genome.

**Caution / 注意**

配对关系与伪 bulk 汇总层级必须明确；检查仓库数据入口。

Document pairing and pseudobulk aggregation levels; check repository data routes.

[Official data / 官方入口](https://github.com/ma-compbio/AD-multiome)

### CELLxGENE Census (2023)

TileDB-SOMA · source H5AD · open

Year type / 年份类型: Census 发布 / Census launch

[Year source / 年份来源](https://chanzuckerberg.com/about/annual-letter/year-2023/)

**Purpose / 用途**

跨研究查询细胞，不必先下载整个人类图谱。

Query cells across studies without downloading an entire atlas.

**Unit / 记录单位**

细胞 × 基因；研究、组织、供体元数据。

Cells × genes with study, tissue and donor metadata.

**Join / 连接**

soma_joinid、dataset_id、donor_id、is_primary_data。

soma_joinid, dataset_id, donor_id and is_primary_data.

**Caution / 注意**

固定 Census 版本；重复细胞、标准化标签与训练语料重叠需检查。

Pin Census versions; inspect duplicate cells, harmonized labels and pretraining overlap.

[Official data / 官方入口](https://chanzuckerberg.github.io/cellxgene-census/cellxgene_census_aws_open_data.html)

### Human Cell Atlas (2016)

FASTQ · MTX · H5AD · manifests · mixed

Year type / 年份类型: 项目启动 / Project launch

[Year source / 年份来源](https://www.humancellatlas.org/event/human-cell-atlas-launch-meeting/)

**Purpose / 用途**

健康人组织细胞参考，提供原始及处理资源。

Reference cells from human tissues, with raw and processed resources.

**Unit / 记录单位**

项目、供体、组织、样本、细胞。

Project, donor, tissue, sample and cell.

**Join / 连接**

manifest 连接文件和生物样本；记录平台与解剖位置。

Manifests link files to biosamples; retain platform and anatomical site.

**Caution / 注意**

项目格式、许可与模态不统一；“atlas”不是已配对的所有组学。

Formats, permissions and modalities vary; an atlas is not fully paired multi-omics.

[Official data / 官方入口](https://data.humancellatlas.org/)

### scPerturb (2024)

H5AD · open

Year type / 年份类型: 资源论文 / Resource publication

[Year source / 年份来源](https://www.nature.com/articles/s41592-023-02144-y)

**Purpose / 用途**

统一整理的单细胞干预数据，适合从小样本开始。

Harmonized single-cell perturbation data for manageable first experiments.

**Unit / 记录单位**

细胞 × 基因；干预、剂量、时间和批次标签。

Cells × genes with perturbation, dose, time and batch labels.

**Join / 连接**

obs 条件字段与对照；原论文和版本仍需追踪。

obs condition fields and controls; retain original studies and versions.

**Caution / 注意**

44 个数据集是论文整理规模，不是永远不变的当前计数；原始与归一化值分开。

44 datasets describes the published collection, not a permanent live count; distinguish raw and normalized values.

[Official data / 官方入口](https://github.com/sanderlab/scPerturb)

### Replogle Perturb-seq (2022)

expression matrices · guide metadata · open

Year type / 年份类型: 数据论文 / Dataset publication

[Year source / 年份来源](https://pmc.ncbi.nlm.nih.gov/articles/PMC9380471/)

**Purpose / 用途**

用于遗传扰动预测和基因调控网络研究。

For genetic-perturbation prediction and gene-network studies.

**Unit / 记录单位**

细胞、靶基因、guide 与非靶向对照。

Cells, target genes, guides and non-targeting controls.

**Join / 连接**

cell barcode、guide / target、cell line、batch。

Cell barcode, guide/target, cell line and batch.

**Caution / 注意**

敲低并非完全敲除；按基因/条件留出，避免同条件细胞泄漏。

Knockdown is not full knockout; hold out genes/conditions to avoid same-condition leakage.

[Official data / 官方入口](https://pmc.ncbi.nlm.nih.gov/articles/PMC9380471/)

### Norman combination screen (2019)

expression matrices · perturbation labels · open

Year type / 年份类型: 数据论文 / Dataset publication

[Year source / 年份来源](https://pmc.ncbi.nlm.nih.gov/articles/6746554/)

**Purpose / 用途**

比较单基因和双基因改变，测试组合泛化。

Compare single/double gene changes and test combination generalization.

**Unit / 记录单位**

K562 细胞与单/双基因条件。

K562 cells and single/double genetic conditions.

**Join / 连接**

condition / guide pair / control；保存单基因训练关系。

Condition, guide pair and control; document single-gene training availability.

**Caution / 注意**

不同预处理版本分数不可直接比；加性基线很重要。

Scores across preprocessing versions are not directly comparable; additive baselines matter.

[Official data / 官方入口](https://pmc.ncbi.nlm.nih.gov/articles/6746554/)

### Tahoe-100M (2025)

Parquet · Hugging Face · open

Year type / 年份类型: 公开数据发布 / Public dataset release

[Year source / 年份来源](https://huggingface.co/datasets/tahoebio/Tahoe-100M/blame/main/README.md)

**Purpose / 用途**

超过 1 亿细胞、50 个癌细胞系与约 1,100 个小分子。

Over 100 million cells, 50 cancer cell lines and about 1,100 small molecules.

**Unit / 记录单位**

单细胞记录，带细胞系、药物、剂量和实验板信息。

Cell records with cell line, compound, dose and plate information.

**Join / 连接**

行内 genes / counts 对齐；连接 cell line、compound、plate。

Align row-level genes/counts; link cell line, compound and plate.

**Caution / 注意**

Parquet 不是 H5AD；先流式抽子集，细胞系不代表患者人群。

Parquet is not H5AD; stream a subset first. Cell lines do not represent patient populations.

[Official data / 官方入口](https://huggingface.co/datasets/tahoebio/Tahoe-100M)

### LINCS L1000 (2017)

GCT · GCTX / HDF5 · open

Year type / 年份类型: L1000 资源论文 / L1000 resource publication

[Year source / 年份来源](https://pubmed.ncbi.nlm.nih.gov/29195078/)

**Purpose / 用途**

大量药物和基因条件下的表达特征签名。

Expression signatures across many drug and genetic conditions.

**Unit / 记录单位**

基因 × 样本/条件签名。

Genes × samples/condition signatures.

**Join / 连接**

pert_id、cell_id、dose、time 与 signature ID。

pert_id, cell_id, dose, time and signature ID.

**Caution / 注意**

978 个基因为直接测量，其余含推断值；处理层级与重复汇总要分清。

978 genes are directly measured; additional values include inference. Track processing and replicate aggregation.

[Official data / 官方入口](https://clue.io/connectopedia/guide_to_geo_l1000_data)

### JUMP Cell Painting (2023)

multichannel TIFF · CSV · Parquet · open

Year type / 年份类型: 数据论文 · 预印本 / Dataset paper · preprint

[Year source / 年份来源](https://www.biorxiv.org/content/10.1101/2023.03.23.534023v1)

**Purpose / 用途**

从细胞形态判断药物或基因干预造成的改变。

Measure morphological changes after compound or genetic perturbations.

**Unit / 记录单位**

细胞图像、图像特征、孔与实验板。

Cell images, features, wells and plates.

**Join / 连接**

source / batch / plate / well + compound / gene ID。

Source/batch/plate/well with compound/gene IDs.

**Caution / 注意**

同板、同孔与重复药物泄漏；图像 TB 级资源先选子集。

Plate, well and replicate leakage; subset before downloading terabyte-scale images.

[Official data / 官方入口](https://broadinstitute.github.io/jump_hub/explanations/data_description.html)

### TCGA / GDC (2016)

SVS · TSV · VCF/MAF · BAM · JSON · mixed

Year type / 年份类型: GDC 平台启动 / GDC platform launch

**Year context / 年份说明**

2016 指 GDC 平台启动；TCGA 项目及各癌种论文、数据版本有各自年份。

2016 refers to the GDC launch; TCGA, cancer-specific papers and data versions have their own dates.

[Year source / 年份来源](https://www.cancer.gov/news-events/press-releases/2016/genomic-data-commons-launch)

**Purpose / 用途**

连接肿瘤基因组、表达、病理和临床结局。

Connect cancer genomics, expression, pathology and clinical outcomes.

**Unit / 记录单位**

病例 → 样本 → 分装/分析物 → 文件。

Case → sample → aliquot/analyte → file.

**Join / 连接**

case_id、sample_id、file_id 与 TCGA barcode。

case_id, sample_id, file_id and TCGA barcodes.

**Caution / 注意**

公开处理数据与受控数据分开；一个患者多张切片不可跨训练测试。

Separate open processed and controlled files; keep all slides from one patient in one split.

[Official data / 官方入口](https://gdc.cancer.gov/about-data/data-types-and-file-formats)

### DepMap (2017)

CSV · portal tables · open

Year type / 年份类型: 首版依赖图谱论文 / Initial dependency-map publication

[Year source / 年份来源](https://depmap.org/rnai/)

**Purpose / 用途**

找癌细胞依赖哪些基因，再形成靶点假设。

Find genes cancer cells depend on and form target hypotheses.

**Unit / 记录单位**

细胞系 × 基因依赖；配套表达、突变和模型信息。

Cell lines × gene dependencies, with expression, mutation and model information.

**Join / 连接**

ModelID / DepMap_ID、基因 ID 与 release。

ModelID/DepMap_ID, gene IDs and release.

**Caution / 注意**

依赖分数不是临床药物效果；版本、组织来源和培养条件重要。

Dependency scores are not clinical drug effects; version, tissue origin and culture conditions matter.

[Official data / 官方入口](https://depmap.org/portal/)

### GTEx (2010)

GCT · TSV · BED · mixed

Year type / 年份类型: 项目启动 / Project launch

[Year source / 年份来源](https://www.nimh.nih.gov/news/science-updates/2010/nih-launches-genotype-tissue-expression-project)

**Purpose / 用途**

连接不同组织的表达和遗传变异。

Connect gene expression and genetic variation across tissues.

**Unit / 记录单位**

供体、组织样本、基因与 eQTL 关系。

Donors, tissue samples, genes and eQTL relationships.

**Join / 连接**

donor / sample、gene、variant、genome build。

Donor/sample, gene, variant and genome build.

**Caution / 注意**

个体基因型受控；bulk 信号混合多种细胞，eQTL 不直接证明病因。

Individual genotypes are controlled; bulk signals mix cells, and eQTLs do not directly prove disease causation.

[Official data / 官方入口](https://gtexportal.org/home/datasets)

### ENCODE (2003)

FASTQ · BAM · BED · bigWig · open

Year type / 年份类型: 项目启动 / Project launch

[Year source / 年份来源](https://www.genome.gov/12513456/encode-project-background)

**Purpose / 用途**

基因调控的实验轨道：开放染色质、结合与表达。

Experimental regulatory tracks: accessibility, binding and expression.

**Unit / 记录单位**

实验、biosample、replicate、genomic track。

Experiments, biosamples, replicates and genomic tracks.

**Join / 连接**

accession、biosample、assay、assembly、replicate。

Accession, biosample, assay, assembly and replicate.

**Caution / 注意**

参考基因组、坐标约定与实验质量必须一致。

Match reference genome, coordinate conventions and assay quality.

[Official data / 官方入口](https://www.encodeproject.org/help/getting-started/)

### Open Targets (2015)

Parquet · JSON · API · open

Year type / 年份类型: 平台启动 / Platform launch

[Year source / 年份来源](https://opentargets.org/history)

**Purpose / 用途**

汇总疾病–靶点证据，寻找可追溯候选。

Aggregate disease–target evidence to find traceable candidates.

**Unit / 记录单位**

target–disease 关系与分类型证据。

Target–disease relationships with evidence categories.

**Join / 连接**

Ensembl target ID、疾病 ontology ID、datasource。

Ensembl target IDs, disease ontology IDs and datasource.

**Caution / 注意**

汇总分数不是因果概率；查看证据来源与重复证据。

Aggregate scores are not causal probabilities; inspect provenance and duplicate evidence.

[Official data / 官方入口](https://platform.opentargets.org/downloads)

### GWAS Catalog (2008)

TSV · summary statistics · open

Year type / 年份类型: 数据库建立 / Catalog established

[Year source / 年份来源](https://www.ebi.ac.uk/gwas/docs/about/)

**Purpose / 用途**

哪些遗传变异与疾病风险有关？

Which variants are associated with disease risk?

**Unit / 记录单位**

研究、变异、性状与统计效应。

Studies, variants, traits and statistical effects.

**Join / 连接**

variant / allele / build、trait ontology、study ID。

Variant/allele/build, trait ontology and study ID.

**Caution / 注意**

关联位点未必是致病变异；需 LD、精细定位与功能验证。

Associated loci may not be causal variants; use LD, fine-mapping and functional tests.

[Official data / 官方入口](https://www.ebi.ac.uk/gwas/docs/file-downloads)

### RCSB PDB (1971)

mmCIF · PDB · FASTA · open

Year type / 年份类型: PDB 档案建立 / PDB archive established

**Year context / 年份说明**

1971 指 PDB 档案建立，不是当前 RCSB 网站或每条结构的发布年。

1971 refers to the PDB archive, not the current RCSB website or the release year of each structure.

[Year source / 年份来源](https://www4.rcsb.org/pages/about-us/history)

**Purpose / 用途**

实验测得的分子三维结构。

Experimentally measured molecular structures.

**Unit / 记录单位**

entry、链、残基、原子与复合物。

Entries, chains, residues, atoms and complexes.

**Join / 连接**

PDB ID、chain ID、residue 编号与实验方法。

PDB ID, chain ID, residue numbering and experimental method.

**Caution / 注意**

实验结构和预测结构分开；缺失区域与不同构象不可忽略。

Separate experimental from predicted structures; consider missing regions and conformations.

[Official data / 官方入口](https://www.rcsb.org/docs/general-help/file-download-services)

### ChEMBL (2010)

SQLite · SDF · activity tables · open

Year type / 年份类型: 公开发布 / Public launch

[Year source / 年份来源](https://www.ebi.ac.uk/sites/ebi.ac.uk/files/groups/external_relations/Documents/Annual_Scientific_Report_low_res.pdf)

**Purpose / 用途**

化合物、靶点和实验活性，训练或验证药物模型。

Compounds, targets and measured activities for drug modeling.

**Unit / 记录单位**

化合物 → assay → target → activity。

Compound → assay → target → activity.

**Join / 连接**

molecule / assay / target ID、endpoint、unit、relation。

Molecule/assay/target IDs, endpoint, unit and relation.

**Caution / 注意**

IC50、Kd 等不可直接混合；“>”与“<”是删失信息，单位必须统一。

Do not freely mix IC50 and Kd; inequality signs encode censoring, and units must match.

[Official data / 官方入口](https://chembl.gitbook.io/chembl-interface-documentation/downloads)

### MIMIC-IV · v3.1 (2024)

CSV.gz · relational tables · controlled

Year type / 年份类型: v3.1 发布 / v3.1 release

[Year source / 年份来源](https://physionet.org/content/mimiciv/3.1/)

**Purpose / 用途**

真实医院记录，用于临床预测和方法研究。

Real hospital records for clinical prediction and methodological research.

**Unit / 记录单位**

患者 → 住院 → ICU 停留 → 事件。

Patient → admission → ICU stay → event.

**Join / 连接**

subject_id、hadm_id、stay_id、时间与 itemid。

subject_id, hadm_id, stay_id, timestamps and itemid.

**Caution / 注意**

需资质、培训与 DUA；衍生资源仍敏感；医院数据不是随机治疗试验。

Credentialing, training and DUA required; derivatives remain sensitive, and records are not randomized treatment trials.

[Official data / 官方入口](https://physionet.org/content/mimiciv/3.1/)

### 10x spatial demonstration datasets (2026)

H5/MTX · Parquet · Zarr · TIFF · open

Year type / 年份类型: 目录核查 / Catalog reviewed

**Year context / 年份说明**

这是持续更新的示范数据目录，不是一个单独数据集。2026 为核查年；具体数据集的发布日期以各自页面为准。

This is a changing demonstration-data catalog, not a single dataset. 2026 is the review year; individual dataset pages give their release dates.

[Year source / 年份来源](https://www.10xgenomics.com/datasets)

**Purpose / 用途**

用一个可下载样本学习空间分子和细胞的对应。

Use a downloadable sample to learn spatial molecule–cell mapping.

**Unit / 记录单位**

transcript、cell、feature、二维位置与组织图像。

Transcripts, cells, features, coordinates and tissue images.

**Join / 连接**

cell_id、feature_name、x/y、图像坐标变换。

cell_id, feature_name, x/y and image-coordinate transforms.

**Caution / 注意**

输出格式随平台/版本变化；基因 panel、坐标单位和分割质量影响解释。

Formats vary by platform/version; gene panels, units and segmentation affect interpretation.

[Official data / 官方入口](https://www.10xgenomics.com/datasets)

## Formats / 格式

### AnnData / H5AD

**Meaning / 含义**

一份细胞矩阵加上行列说明，常用于 Scanpy / scvi-tools。

A cell matrix with row/column metadata, commonly used by Scanpy/scvi-tools.

```text
adata.X: cells × genes
adata.obs: donor_id, cell_type, condition, batch
adata.var: gene_id, gene_symbol
adata.layers["counts"]: documented raw counts
adata.obsm["spatial"]: coordinates (if present)
```

**Check / 检查**

X 可能归一化；.raw 不一定是原始计数。查 layers、预处理记录与 ID 唯一性。

X may be normalized; .raw is not necessarily raw counts. Check layers, preprocessing and unique IDs.

[Documentation](https://anndata.readthedocs.io/en/stable/generated/anndata.AnnData.html)

### 10x matrix / MTX

**Meaning / 含义**

三个文件共同描述稀疏表达矩阵；导入 AnnData 时通常转成 cells × genes。

Three files describe a sparse matrix; import commonly transposes to cells × genes.

```text
matrix.mtx.gz       # sparse genes × cells
features.tsv.gz     # feature IDs / names
barcodes.tsv.gz     # cell barcodes
```

**Check / 检查**

方向、重复基因名、样本条码前缀和空液滴；不是每个 barcode 都是有效细胞。

Check orientation, duplicate genes, sample prefixes and empty droplets; not every barcode is a valid cell.

[Documentation](https://www.10xgenomics.com/support/software/cell-ranger/latest/analysis/outputs/cr-outputs-mex-matrices)

### FASTQ → BAM → VCF / BED / bigWig

**Meaning / 含义**

从测序原始读段，到比对、变异和连续调控轨道。

From raw reads to alignments, variants and regulatory tracks.

```text
FASTQ: reads + quality
BAM: aligned reads
VCF: variants + alleles
BED: genomic intervals
bigWig: genomic signal tracks
```

**Check / 检查**

参考基因组 hg19/hg38、0/1 起始坐标、链方向、过滤规则必须记录。

Record hg19/hg38, zero/one-based coordinates, strand and filtering rules.

[Documentation](https://www.encodeproject.org/help/getting-started/)

### Spatial matrix + coordinates + image

**Meaning / 含义**

除了表达，还要知道坐标、图像与分割如何对齐。

Expression needs coordinate, image and segmentation alignment.

```text
expression: cells/spots × genes
metadata: cell_id, x, y, sample_id
image: TIFF / pyramidal image
transform: image ↔ assay coordinates
segmentation: polygons / labels
```

**Check / 检查**

spot 不等于单细胞；坐标是像素还是微米？不同切片通常不是同一批细胞。

A spot is not necessarily one cell; are coordinates pixels or micrometers? Different sections usually contain different cells.

[Documentation](https://www.10xgenomics.com/datasets)

### DICOM / NIfTI + BIDS

**Meaning / 含义**

三维医学影像加采集信息。BIDS 是组织规范，不是新的图像文件格式。

3D imaging plus acquisition metadata. BIDS is an organization standard, not a new image format.

```text
sub-001/ses-01/anat/..._T1w.nii.gz
..._T1w.json: scanner / acquisition
participants.tsv
sessions.tsv
```

**Check / 检查**

患者、就诊、扫描日期、方向和体素大小；移除身份信息并遵守授权。

Check participant, visit, scan date, orientation and voxel size; remove identifiers and follow permissions.

[Documentation](https://bids-specification.readthedocs.io/)

### Whole-slide images / SVS

**Meaning / 含义**

一张大切片拆成许多小图块；最终统计单位通常仍是患者。

Large slides are divided into patches; patients usually remain the statistical unit.

```text
slide.svs: multi-resolution image
patch_id → slide_id → patient_id
x, y, magnification, tissue_mask
embedding: patches × features
```

**Check / 检查**

同一个患者的图块不要进入不同划分；保留倍率、颜色处理与坐标。

Keep all patches from a patient in one split; retain magnification, color processing and coordinates.

[Documentation](https://openslide.org/formats/)

### FASTA / SMILES / SDF / mmCIF

**Meaning / 含义**

序列、分子连接关系和三维结构是不同层级的信息。

Sequence, molecular connectivity and 3D structure are different information levels.

```text
FASTA: sequence
SMILES: molecular connectivity
SDF: molecule + properties / coordinates
mmCIF: atoms, chains, residues, structure
```

**Check / 检查**

链和残基编号、立体化学、质子化、单位；实验与预测结构分开。

Check chain/residue numbering, stereochemistry, protonation and units; separate experimental and predicted structures.

[Documentation](https://www.rcsb.org/docs/general-help/file-download-services)

### Clinical / assay relational tables

**Meaning / 含义**

不是一个 CSV 就能直接训练；要按对象、时间和测量类型连接。

A single CSV is not automatically training-ready; join by entity, time and measurement type.

```text
patients(subject_id, ... )
admissions(hadm_id, subject_id, ... )
events(hadm_id, time, itemid, value, unit)
assays(compound_id, target_id, endpoint, unit)
```

**Check / 检查**

时间泄漏、重复事件、缺失不是零、单位和删失符号；先建数据字典。

Check time leakage, duplicate events, missingness versus zero, units and censoring; build a data dictionary first.

[Documentation](https://mimic.mit.edu/docs/iv/)

## Tools & agents / 工具与代理

### ScienceBuddy (2026) · agent

Year type / 年份类型: 预印本 / Preprint

Repository created / 仓库创建: 2026 (not a public-release date / 不等于公开发布年)

[Year source / 年份来源](https://arxiv.org/abs/2609.17523)

**Input / 输入**

研究问题、工具环境与反馈任务。

Research questions, tools and feedback tasks.

**Output / 产出**

工具执行轨迹；递归改进实验。

Tool execution traces and recursive-improvement experiments.

**Availability / 开放范围**

公开 SimpleSciBuddy / RSI；完整托管产品未开源。

SimpleSciBuddy/RSI is public; the complete hosted product is not open.

**Boundary / 边界**

官方 RSI 配置 8×A100；不代表使用托管助手也要 8 卡。检查外部任务模型与资产。

Official RSI uses 8×A100; hosted usage does not imply eight GPUs. Check external task models/assets.

[Official project](https://github.com/Gen-Verse/ScienceBuddy)

### Biomni (2026) · agent

Year type / 年份类型: 论文发表 / Paper publication

Repository created / 仓库创建: 2025 (not a public-release date / 不等于公开发布年)

[Year source / 年份来源](https://www.science.org/doi/10.1126/science.adz4351)

**Input / 输入**

自然语言问题、数据、API 模型与工具环境。

Natural-language questions, data, API model and tools.

**Output / 产出**

分析代码、执行结果与解释。

Analysis code, execution results and explanations.

**Availability / 开放范围**

公开研究实现与工具；外部服务各有条款。

Public research implementation/tools; external services have their own terms.

**Boundary / 边界**

先做小任务；审查代码与证据，不把答案当医疗建议。

Start with a small task; audit code/evidence and do not treat answers as medical advice.

[Official project](https://github.com/snap-stanford/Biomni)

### CellVoyager (2026) · agent

Year type / 年份类型: 论文发表 / Paper publication

Repository created / 仓库创建: 2025 (not a public-release date / 不等于公开发布年)

[Year source / 年份来源](https://www.nature.com/articles/s41592-026-03029-6)

**Input / 输入**

H5AD、数据说明、问题与既有分析。

H5AD, dataset context, question and prior analysis.

**Output / 产出**

可执行单细胞分析笔记本。

Executable single-cell analysis notebooks.

**Availability / 开放范围**

公开代码；模型 API 与数据权限独立。

Public code; model APIs and data permissions are separate.

**Boundary / 边界**

看每一步是否合理，而非仅看最终图是否漂亮。

Inspect each analytical step, not just whether the final plot looks convincing.

[Official project](https://github.com/zou-group/CellVoyager)

### BioMedAgent (2026) · agent

Year type / 年份类型: 论文发表 / Paper publication

Repository created / 仓库创建: 2024 (not a public-release date / 不等于公开发布年)

[Year source / 年份来源](https://www.nature.com/articles/s41551-026-01634-6)

**Input / 输入**

生物医学分析任务与工具。

Biomedical analysis tasks and tools.

**Output / 产出**

分析执行与结构化结果。

Executed analyses and structured results.

**Availability / 开放范围**

公开项目；以仓库说明为准。

Public project; follow repository instructions.

**Boundary / 边界**

BioMedAQA 成功率不是诊断准确率。

BioMedAQA success is not diagnostic accuracy.

[Official project](https://github.com/BOBQWERA/BioMedAgent)

### Paper2Agent (2026) · agent

Year type / 年份类型: 论文发表 / Paper publication

Repository created / 仓库创建: 2025 (not a public-release date / 不等于公开发布年)

[Year source / 年份来源](https://www.nature.com/articles/s41586-026-11044-y)

**Input / 输入**

论文、代码、数据及依赖。

Papers, code, data and dependencies.

**Output / 产出**

带测试的 MCP 工具/可调用研究流程。

Tested MCP tools/callable research workflows.

**Availability / 开放范围**

公开框架；被包装项目的许可单独保留。

Public framework; wrapped projects retain separate licenses.

**Boundary / 边界**

数据不可访问或依赖失效时，论文不能自动完整复现。

Inaccessible data or broken dependencies prevent automatic full reproduction.

[Official project](https://github.com/jmiao24/Paper2Agent)

### AI co-scientist (2026) · agent

Year type / 年份类型: 论文发表 / Paper publication

[Year source / 年份来源](https://www.nature.com/articles/s41586-026-10644-y)

**Input / 输入**

科学目标、文献与反馈。

Scientific objectives, literature and feedback.

**Output / 产出**

经过迭代排序的假设。

Iteratively ranked hypotheses.

**Availability / 开放范围**

论文公开；完整系统不是通用开源下载。

Public paper; full system is not a generally downloadable open-source package.

**Boundary / 边界**

需要领域专家与实验验证；案例结果不可外推到全部假设。

Requires domain expertise and experiments; case results do not validate all hypotheses.

[Official project](https://www.nature.com/articles/s41586-026-10644-y)

### Virtual Lab (2025) · agent

Year type / 年份类型: 论文发表 / Paper publication

Repository created / 仓库创建: 2024 (not a public-release date / 不等于公开发布年)

[Year source / 年份来源](https://www.nature.com/articles/s41586-025-09442-9)

**Input / 输入**

研究目标、角色定义、建模工具。

Goals, agent roles and modeling tools.

**Output / 产出**

团队讨论、设计与实验候选。

Team discussions, designs and experimental candidates.

**Availability / 开放范围**

公开研究代码；所调用工具许可各异。

Public research code; called tools have separate licenses.

**Boundary / 边界**

实验执行不由语言模型独立完成。

Language models do not independently execute the wet-lab experiments.

[Official project](https://github.com/zou-group/virtual-lab)

### BioDiscoveryAgent (2024) · agent

Year type / 年份类型: 仓库创建 / Repository created

[Year source / 年份来源](https://api.github.com/repos/snap-stanford/BioDiscoveryAgent)

**Input / 输入**

已有干预结果与实验目标。

Existing intervention results and experimental goals.

**Output / 产出**

下一批基因实验建议。

Suggested next batches of genetic experiments.

**Availability / 开放范围**

公开代码；需要模型 API 与任务数据。

Public code; requires model APIs and task data.

**Boundary / 边界**

是实验设计助手，不是实验机器人。

An experiment-design assistant, not a laboratory robot.

[Official project](https://github.com/snap-stanford/BioDiscoveryAgent)

### PaperQA / PaperQA2 (2023) · agent

Year type / 年份类型: 仓库创建 / Repository created

[Year source / 年份来源](https://api.github.com/repos/Future-House/paper-qa)

**Input / 输入**

论文文档与研究问题。

Paper documents and research questions.

**Output / 产出**

检索支撑的回答与引用。

Retrieval-supported answers and citations.

**Availability / 开放范围**

公开库；不等于完整 Edison 产品。

Public library; not the complete Edison product.

**Boundary / 边界**

引用存在不代表引用支持结论；核对段落。

An existing citation does not prove support; inspect the cited passage.

[Official project](https://github.com/Future-House/paper-qa)

### TxAgent (2025) · agent

Year type / 年份类型: 仓库创建 / Repository created

[Year source / 年份来源](https://api.github.com/repos/mims-harvard/TxAgent)

**Input / 输入**

药物相关问题与生物医学工具。

Drug-related questions and biomedical tools.

**Output / 产出**

检索、工具推理与有依据的候选回答。

Retrieval, tool reasoning and grounded candidate answers.

**Availability / 开放范围**

公开研究实现；部分数据/服务有独立限制。

Public research implementation; some data/services have separate restrictions.

**Boundary / 边界**

本地推荐 H100 级大显存；不是临床处方系统。

Local setup recommends H100-class large memory; not a clinical prescribing system.

[Official project](https://github.com/mims-harvard/TxAgent)

### ToolUniverse (2025) · registry

Year type / 年份类型: 仓库创建 / Repository created

[Year source / 年份来源](https://api.github.com/repos/mims-harvard/ToolUniverse)

**Input / 输入**

API / Python / MCP 工具请求。

API/Python/MCP tool requests.

**Output / 产出**

可检索和调用的科学工具接口。

Searchable, callable scientific-tool interfaces.

**Availability / 开放范围**

公开工具框架；各服务权限分别配置。

Public tool framework; configure permissions for each service.

**Boundary / 边界**

工具库不是推理模型；记录参数、版本与失败状态。

A tool registry is not a reasoning model; record parameters, versions and failures.

[Official project](https://github.com/mims-harvard/ToolUniverse)

### MedAgentGym (2025) · benchmark

Year type / 年份类型: 仓库创建 / Repository created

[Year source / 年份来源](https://api.github.com/repos/wshi83/MedAgentGym)

**Input / 输入**

代码式生物医学代理任务。

Code-based biomedical agent tasks.

**Output / 产出**

环境执行与任务评分。

Environment execution and task scores.

**Availability / 开放范围**

公开研究环境；依赖与数据许可另查。

Public research environment; check dependency/data licenses.

**Boundary / 边界**

报告 72,413 个实例、129 类任务、12 场景；不是临床诊断评测。

Reports 72,413 instances, 129 categories and 12 scenarios; not clinical diagnosis evaluation.

[Official project](https://github.com/wshi83/MedAgentGym)

### GENOAR (2026) · agent

Year type / 年份类型: 预印本与公开查询入口 / Preprint and public search interface

[Year source / 年份来源](https://www.biorxiv.org/content/10.64898/2026.10.15.759380v1)

**Input / 输入**

自然语言细胞/组织/疾病查询。

Natural-language cell, tissue and disease queries.

**Output / 产出**

标准化样本检索结果及可用于下游分析的数据入口。

Standardized sample-search results and links for downstream analysis.

**Availability / 开放范围**

公开网页可搜索；底层 SRA 记录、原始数据及许可按各项目执行。

A public search interface is available; underlying SRA records, raw data and licenses remain project-specific.

**Boundary / 边界**

约 5,400 万细胞是索引覆盖量，不等于独立供体数或经过统一质控的训练语料；未报告可复现的最低算力。

Approximately 54 million cells is indexed coverage, not independent donors or a uniformly quality-controlled training corpus; no reproducible minimum compute is reported.

[Official project](https://www.genoar.ai/)

### Real PMIDs audit (2026) · benchmark

Year type / 年份类型: 仓库创建 / Repository created

[Year source / 年份来源](https://api.github.com/repos/saqlain2204/real-pmids-wrong-papers)

**Input / 输入**

生物医学声明、PubMed 与可选模型 API。

Biomedical claims, PubMed and optional model APIs.

**Output / 产出**

逐声明判断、检索轨迹、缓存响应与引用审计。

Per-claim verdicts, retrieval traces, cached responses and citation audits.

**Availability / 开放范围**

公开代码、提示、缓存与结果；缓存复算无需 API key，重跑模型需各自密钥。

Public code, prompts, caches and results; cached recomputation needs no API key, while model reruns require provider keys.

**Boundary / 边界**

公开结果支持复算作者表格，不等于独立复现或可推广到全部生物医学问题。

Released results support recomputing author tables, not independent replication or generalization to all biomedical questions.

[Official project](https://github.com/saqlain2204/real-pmids-wrong-papers)

### Scanpy + AnnData (2018) · analysis

Year type / 年份类型: Scanpy 论文 / Scanpy publication

[Year source / 年份来源](https://doi.org/10.1186/s13059-017-1382-0)

**Input / 输入**

单细胞矩阵与元数据。

Single-cell matrices and metadata.

**Output / 产出**

QC、聚类、注释与可追溯 H5AD。

QC, clustering, annotation and traceable H5AD.

**Availability / 开放范围**

开放 Python 工具链。

Open Python toolchain.

**Boundary / 边界**

先学 counts / normalization / obs；默认参数不是统计保证。

Learn counts, normalization and obs first; defaults are not statistical guarantees.

[Official project](https://scanpy.readthedocs.io/)

### scvi-tools (2022) · analysis

Year type / 年份类型: 工具论文 / Toolkit publication

[Year source / 年份来源](https://www.nature.com/articles/s41587-021-01206-w)

**Input / 输入**

计数、批次、空间/蛋白等任务数据。

Counts, batches and task-specific spatial/protein data.

**Output / 产出**

整合表示与概率模型结果。

Integrated representations and probabilistic-model outputs.

**Availability / 开放范围**

开放库；包含 scVI 等多种模型。

Open library with scVI and other models.

**Boundary / 边界**

模型选择须匹配测量分布；不要把归一化值当原始计数。

Match models to measurement distributions; normalized values are not raw counts.

[Official project](https://scvi-tools.org/)

### pertpy (2025) · analysis

Year type / 年份类型: 在线发表 / Online publication

**Year context / 年份说明**

2025 年 12 月 31 日在线发表；期刊卷期为 2026。

Published online 31 December 2025; the journal volume/issue is dated 2026.

[Year source / 年份来源](https://www.nature.com/articles/s41592-025-02909-7)

**Input / 输入**

扰动表达与条件标签。

Perturbation expression and condition labels.

**Output / 产出**

响应分析、距离与建模工作流。

Response analysis, distances and modeling workflows.

**Availability / 开放范围**

开放扰动分析工具。

Open perturbation-analysis toolkit.

**Boundary / 边界**

算法和任务匹配；小样本先跑基线。

Match algorithms to tasks; start with baselines on small samples.

[Official project](https://pertpy.readthedocs.io/)

### State + CellEval (2026) · model

Year type / 年份类型: 论文发表 / Paper publication

Repository created / 仓库创建: 2025 (not a public-release date / 不等于公开发布年)

[Year source / 年份来源](https://doi.org/10.1016/j.cell.2026.07.052)

**Input / 输入**

细胞上下文和干预信息。

Cellular context and perturbation information.

**Output / 产出**

响应预测及评测。

Response predictions and evaluation.

**Availability / 开放范围**

代码 CC BY-NC-SA；权重/输出适用非商业许可与 AUP。

Code CC BY-NC-SA; weights/outputs have non-commercial licensing and an AUP.

**Boundary / 边界**

固定模型与数据版本，检查商业用途；不要默认所有开源都可商用。

Pin model/data versions and check commercial use; public availability does not imply unrestricted use.

[Official project](https://github.com/ArcInstitute/state)

### AlphaGenome (2026) · model

Year type / 年份类型: 论文发表 / Paper publication

Repository created / 仓库创建: 2024 (not a public-release date / 不等于公开发布年)

[Year source / 年份来源](https://www.nature.com/articles/s41586-025-10014-0)

**Input / 输入**

DNA 序列、变异与组织/读出设置。

DNA sequence, variants and tissue/output settings.

**Output / 产出**

调控轨道与变异效应预测。

Regulatory tracks and predicted variant effects.

**Availability / 开放范围**

官方 API / 代码；学术权重使用有条件。

Official API/code; academic weight use is conditional.

**Boundary / 边界**

固定参考基因组与组织，不把模型分数当确诊。

Pin genome build and tissue; model scores are not diagnoses.

[Official project](https://github.com/google-deepmind/alphagenome)

### Evo 2 (2026) · model

Year type / 年份类型: 论文发表 / Paper publication

Repository created / 仓库创建: 2025 (not a public-release date / 不等于公开发布年)

[Year source / 年份来源](https://www.nature.com/articles/s41586-026-10176-5)

**Input / 输入**

DNA 序列与生成/评分请求。

DNA sequences and generation/scoring requests.

**Output / 产出**

序列评分、表示与生成。

Sequence scores, embeddings and generation.

**Availability / 开放范围**

公开代码与模型入口；遵守安全与许可要求。

Public code/model access; follow safety and licensing requirements.

**Boundary / 边界**

7B / 40B 权重与长序列运行开销不同。

7B/40B weights and long-sequence runtime have different resource costs.

[Official project](https://github.com/ArcInstitute/evo2)

### AlphaFold 3 (2024) · model

Year type / 年份类型: 论文发表 / Paper publication

Repository created / 仓库创建: 2024 (not a public-release date / 不等于公开发布年)

[Year source / 年份来源](https://www.nature.com/articles/s41586-024-07487-w)

**Input / 输入**

序列、配体、MSA 与模板等。

Sequences, ligands, MSAs and templates.

**Output / 产出**

复合物结构与置信度。

Complex structures and confidence.

**Availability / 开放范围**

公开代码；模型参数申请与非商业限制独立。

Public code; parameter access and non-commercial restrictions are separate.

**Boundary / 边界**

数据库搜索、预处理与推理分开预算。

Budget database search, preprocessing and inference separately.

[Official project](https://github.com/google-deepmind/alphafold3)

### Boltz (2024) · model

Year type / 年份类型: 仓库创建 / Repository created

[Year source / 年份来源](https://api.github.com/repos/jwohlwend/boltz)

**Input / 输入**

YAML：序列、SMILES 与预测任务。

YAML specifying sequences, SMILES and prediction tasks.

**Output / 产出**

mmCIF、置信度与结合相关读出。

mmCIF, confidence and binding-related outputs.

**Availability / 开放范围**

MIT 代码与权重；核对具体版本。

MIT code and weights; check the selected version.

**Boundary / 边界**

结合概率和 IC50 型预测不是同一种读出。

Binding probability and IC50-type predictions are different endpoints.

[Official project](https://github.com/jwohlwend/boltz)

### MONAI (2020) · analysis

Year type / 年份类型: 公开 alpha 发布 / Public alpha release

[Year source / 年份来源](https://github.com/Project-MONAI/MONAI/blob/dev/CHANGELOG.md)

**Input / 输入**

医学影像与标注。

Medical images and annotations.

**Output / 产出**

预处理、训练与影像评估流程。

Preprocessing, training and imaging-evaluation workflows.

**Availability / 开放范围**

开放医疗影像工程框架。

Open medical-imaging engineering framework.

**Boundary / 边界**

框架不提供临床有效性保证；避免患者泄漏。

The framework does not guarantee clinical validity; prevent patient leakage.

[Official project](https://monai.io/)

### CellProfiler (2006) · analysis

Year type / 年份类型: 工具论文 / Toolkit publication

[Year source / 年份来源](https://cellprofiler.org/citations)

**Input / 输入**

多通道细胞图像与 pipeline。

Multichannel cell images and a pipeline.

**Output / 产出**

分割、形态与强度特征表。

Segmentation, morphology and intensity-feature tables.

**Availability / 开放范围**

开放图像分析工具。

Open image-analysis tool.

**Boundary / 边界**

检查分割质量、通道和批次；形态变化不是机制证明。

Check segmentation, channels and batches; morphological change is not proof of mechanism.

[Official project](https://cellprofiler.org/)

## Compute / 算力

Official test configurations are not minimum requirements. All estimate rows are planning budgets, not guarantees. / 官方测试不是最低要求；估算仅供起步规划。

### 小规模单细胞探索 / Small single-cell exploration

Status: estimate · GPU: 0 · RAM: 32–64 GB · Storage: 100–500 GB

**Conditions / 条件**

8–16 CPU 核；约 1 万–10 万细胞稀疏子集。密集化或大型邻接图可能超出。

8–16 CPU cores; roughly 10k–100k sparse cells. Densification/large graphs may exceed this.

[Source](https://scanpy.readthedocs.io/)

### scVI / 小型扰动模型适配 / scVI / small perturbation-model adaptation

Status: estimate · GPU: 1 × 16–24 GB · RAM: 64–128 GB · Storage: 0.5–2 TB

**Conditions / 条件**

起步预算，不是最低配置；基因数、batch、邻接图与训练设置决定占用。

Starting budget, not a minimum specification; genes, batches, graphs and training settings determine usage.

[Source](https://scvi-tools.org/)

### 百万细胞整合 / 子集查询 / Million-cell integration / subset queries

Status: estimate · GPU: Task-dependent · RAM: 128–256 GB* · Storage: 1–4 TB*

**Conditions / 条件**

优先流式查询与稀疏矩阵；*全量下载不是必需。预训练是另一个量级。

Prefer streaming queries and sparse matrices; *full downloads are optional. Pretraining is a different scale.

[Source](https://chanzuckerberg.github.io/cellxgene-census/)

### 病理切片特征提取 / Pathology slide embedding

Status: estimate · GPU: 1 × 24–48 GB · RAM: 64–128 GB · Storage: 1–5 TB

**Conditions / 条件**

先限定切片数/倍率；NVMe 与读取速度常与 GPU 同样重要。

Limit slide count/magnification first; NVMe and I/O often matter as much as GPU capacity.

[Source](https://github.com/mahmoodlab/UNI)

### Boltz 小型复合物推理 / Boltz modest-complex inference

Status: estimate · GPU: 1 × 24–48 GB · RAM: 32–64 GB · Storage: 100 GB+

**Conditions / 条件**

按序列长度、MSA、回收次数与采样数做小样本测试；不是官方保证。

Pilot by sequence length, MSA, recycling and sample count; not an official guarantee.

[Source](https://github.com/jwohlwend/boltz)

### AlphaFold 3 官方性能测试 / AlphaFold 3 official performance tests

Status: reported · GPU: 1 × A100 / H100 80 GB · RAM: — · Storage: —

**Conditions / 条件**

官方测试硬件，不是最低要求；MSA/数据库流程另计。1,024 token 的纯推理报告约 62s / 34s。

Official test hardware, not a minimum; MSA/database work is separate. Reported 1,024-token inference is about 62s/34s.

[Source](https://github.com/google-deepmind/alphafold3/blob/main/docs/performance.md)

### API 型分析 Agent / API-backed analysis agents

Status: estimate · GPU: 0 (API) · RAM: 16–64 GB · Storage: 10–500 GB

**Conditions / 条件**

模型在外部运行；本地执行工具仍需 CPU/存储。任务数据可能需要更多资源，且要预算 API 调用。

The model runs remotely; local tools still need CPU/storage. Tasks may require more resources; budget API calls.

[Source](https://github.com/snap-stanford/Biomni)

### ScienceBuddy RSI 复现实验 / ScienceBuddy RSI reproduction

Status: reported · GPU: 8 × A100 · RAM: — · Storage: —

**Conditions / 条件**

实验文档：Linux、Python 3.12、CUDA 13、Docker 与 8 卡环境。完整托管助手不是该硬件要求。

Experiment docs: Linux, Python 3.12, CUDA 13, Docker and eight GPUs. This is not a hosted-assistant requirement.

[Source](https://github.com/Gen-Verse/ScienceBuddy/blob/main/docs/experiments.md)

### TxAgent 本地完整设置 / TxAgent complete local setup

Status: reported · GPU: H100-class large memory recommended · RAM: — · Storage: —

**Conditions / 条件**

仓库推荐 H100 / >80GB 显存环境；推荐配置不等于所有 8B 模型的最低要求。

Repository recommends H100/>80GB memory; a recommended configuration is not the minimum for every 8B model.

[Source](https://github.com/mims-harvard/TxAgent)

## Collections / 资源合集

### [OmicsML · Single-cell foundation models (2023)](https://github.com/OmicsML/awesome-foundation-model-single-cell-papers)

Year type / 年份类型: 仓库创建 / Repository created

[Year source / 年份来源](https://api.github.com/repos/OmicsML/awesome-foundation-model-single-cell-papers)

Coverage: papers + data + tools

**Purpose / 用途**

最接近“论文 + 数据 + 工具”的单细胞入口，含扰动、评测与基础设施。

The closest single-cell entry point for papers, data and tools, including perturbations, evaluation and infrastructure.

### [Awesome Virtual Cell (2025)](https://github.com/Boom5426/Awesome-Virtual-Cell)

Year type / 年份类型: 仓库创建 / Repository created

[Year source / 年份来源](https://api.github.com/repos/Boom5426/Awesome-Virtual-Cell)

Coverage: papers + data + benchmarks

**Purpose / 用途**

虚拟细胞方向的模型、数据、基准与社区；不是完整临床数据目录。

Virtual-cell models, data, benchmarks and community; not a complete clinical-data catalog.

### [Awesome AI for Science (2025)](https://github.com/ai4s-research/awesome-ai-for-science)

Year type / 年份类型: 仓库创建 / Repository created

[Year source / 年份来源](https://api.github.com/repos/ai4s-research/awesome-ai-for-science)

Coverage: papers + data + tools

**Purpose / 用途**

跨学科资源，适合拓宽视野；生物医学部分需再按任务筛选。

Cross-disciplinary resources for broader discovery; filter biomedical entries by task.

### [Awesome Science Agents (2024)](https://github.com/zoedsy/awesome-science-agents)

Year type / 年份类型: 仓库创建 / Repository created

[Year source / 年份来源](https://api.github.com/repos/zoedsy/awesome-science-agents)

Coverage: papers + tools

**Purpose / 用途**

科学代理论文、工具与双语导读，适合进一步研究代理机制。

Scientific-agent papers, tools and bilingual guides for deeper agent-mechanism reading.

### [LLMs for Scientific Discovery (2025)](https://github.com/HKUST-KnowComp/Awesome-LLM-Scientific-Discovery)

Year type / 年份类型: 仓库创建 / Repository created

[Year source / 年份来源](https://api.github.com/repos/HKUST-KnowComp/Awesome-LLM-Scientific-Discovery)

Coverage: papers + survey

**Purpose / 用途**

从科研自动化到自主发现的综述组织方式。

A survey-oriented map from research automation to autonomous discovery.

### [Awesome Single Cell (2016)](https://github.com/seandavi/awesome-single-cell)

Year type / 年份类型: 仓库创建 / Repository created

[Year source / 年份来源](https://api.github.com/repos/seandavi/awesome-single-cell)

Coverage: tools + resources

**Purpose / 用途**

单细胞分析的广泛工具与资源导航。

Broad navigation across single-cell tools and resources.

### [scRNA-tools (2018)](https://www.scrna-tools.org/)

Year type / 年份类型: 资源论文 / Resource publication

[Year source / 年份来源](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1006245)

Coverage: tools catalog

**Purpose / 用途**

可按任务查工具；工具收录并不代表最佳性能。

Find tools by task; inclusion is not proof of superior performance.

## Future directions / 未来方向

Editorial synthesis / 编辑综合

### AD 多证据机制发现 / AD mechanism discovery by triangulation

**Gap / 缺口**

表达关联很多，但能直接转化为可验证病因的候选较少。

Expression associations are abundant, but fewer translate into testable causal candidates.

**Design / 设计**

SEA-AD + GWAS/eQTL + 调控预测 → 多供体 CRISPR → 空间/吞噬等功能读出。

SEA-AD + GWAS/eQTL + regulatory prediction → multi-donor CRISPR → spatial/phagocytosis readouts.

**Validation / 验证**

遗传与细胞证据一致性；留出供体；至少一种正交实验。

Genetic/cellular consistency, held-out donors and at least one orthogonal experiment.

### 分布外扰动的可靠性 / Reliability of out-of-distribution perturbations

**Gap / 缺口**

平均分数不能告诉研究者某一次预测是否值得花钱实验。

Average scores do not reveal whether an individual prediction is worth an experiment.

**Design / 设计**

按供体/药物/时间留出，预测分布与不确定性，允许拒答或请求新测量。

Hold out donors/drugs/timepoints; model distributions and uncertainty, allowing abstention or new measurements.

**Validation / 验证**

误差–覆盖率、校准、无变化/线性基线及预算内命中率；检查交换性假设。

Error–coverage, calibration, no-change/linear baselines and budgeted hit rate; check exchangeability assumptions.

### 可验证的空间通信假设 / Verifiable spatial-communication hypotheses

**Gap / 缺口**

邻近与配体–受体共表达容易被误写成已证实的细胞通信。

Proximity and ligand–receptor co-expression are easily overstated as proven communication.

**Design / 设计**

表达 + 空间 + 分割误差 → 候选关系 → 共培养/阻断实验。

Expression + space + segmentation error → candidate relationships → co-culture/blocking experiments.

**Validation / 验证**

跨切片/供体验证、空间空模型、真实干预结果。

Cross-section/donor validation, spatial null models and intervention results.

### 预算驱动的下一实验选择 / Budget-aware next-experiment selection

**Gap / 缺口**

实验是关键瓶颈；重建全部表达并非每个任务的目标。

Experiments are a bottleneck; reconstructing all expression is not every task’s objective.

**Design / 设计**

用不确定性、低可靠性与多样性选择候选，同时建模实验成本。

Select candidates by uncertainty, low reliability and diversity while modeling experimental cost.

**Validation / 验证**

真实序贯实验命中率，而不是只在固定数据上回放。

Real sequential-experiment hit rate, not only replay on a fixed dataset.

### 科研代理的操作级验证 / Action-level verification for scientific agents

**Gap / 缺口**

代码可以运行却科学上错误，引用可以存在却不支持结论。

Code can run but be scientifically wrong; citations can exist without supporting the claim.

**Design / 设计**

每步记录工具参数、数据版本、统计前提；检测静默错误与无依据解释。

Log tool arguments, data versions and statistical assumptions; detect silent errors and unsupported interpretations.

**Validation / 验证**

独立复现、错误注入、证据支持率、敏感数据外传测试。

Independent reproduction, injected faults, evidence-support rates and data-exfiltration tests.

### 从药物候选到患者价值 / From drug candidates to patient value

**Gap / 缺口**

结合与细胞活性距离临床获益仍有很长证据链。

Binding and cellular activity remain far from clinical benefit.

**Design / 设计**

知识图候选 + 结构/活性 + 患者分层；按条件设计功能及前瞻验证。

Knowledge-graph candidates + structure/activity + patient stratification; design functional and prospective validation.

**Validation / 验证**

外部队列、明确终点、毒性与阴性结果；观察研究注明因果假设。

External cohorts, explicit endpoints, toxicity and negative results; state causal assumptions for observational studies.

## Glossary / 术语

### 单细胞 RNA 测序 / Single-cell RNA / scRNA-seq

分别读出细胞正在使用哪些基因；不能直接看到所有蛋白或因果关系。

Measures which genes each cell is using; does not directly measure all proteins or causal relationships.

### 单核测序 / Single-nucleus / snRNA-seq

用细胞核而不是完整细胞，常用于冷冻脑组织；与单细胞测量存在系统差异。

Measures nuclei rather than whole cells, often in frozen brain tissue; differs systematically from whole-cell assays.

### 带干预的单细胞测序 / Perturb-seq

先改变基因，再读出表达。通常不能在干预前后测到同一个活细胞。

Change genes, then measure expression. Typically cannot measure the same living cell before and after treatment.

### 基因抑制 / 激活 / CRISPRi / CRISPRa

让基因表达降低或升高；不总是把基因完全删除。

Reduce or increase gene expression; not always complete gene deletion.

### 基因调控网络 / GRN

哪些基因可能调控另一些基因；推断网络里的边不一定已获因果验证。

A map of possible regulation between genes; inferred edges need not be causally validated.

### 染色质开放性 / ATAC-seq

检测 DNA 哪些区域较开放，为调控关系提供线索。

Measures accessible DNA regions, providing clues about regulation.

### DNA 三维接触 / Hi-C

测量远距离 DNA 区域的空间接近程度；接触不一定发生功能调控。

Measures spatial proximity between DNA regions; contact need not imply functional regulation.

### 空间转录组 / Spatial transcriptomics

把基因表达放回组织位置，连接细胞与邻居。

Places gene expression in tissue coordinates, connecting cells and neighbors.

### 伪时间 / Pseudotime

按状态推测排序，不是真实追踪同一个人或细胞的时间。

An inferred ordering of states, not measured time for the same person or cell.

### 反事实 / Counterfactual

同一对象接受另一种干预会怎样；无法同时观测两种现实。

What the same unit would do under a different intervention; both realities cannot be observed together.

### 批次效应 / Batch effect

实验日期、机器或操作造成的差异，可能被误当疾病差异。

Differences from date, instrument or procedure that can masquerade as disease effects.

### 伪 bulk 汇总 / Pseudobulk

按供体或条件汇总细胞，帮助保持正确统计样本单位。

Aggregate cells by donor or condition to preserve the appropriate statistical unit.

### 基础模型 / Foundation model

先在大数据上学习，再适配多个任务；不自动保证新任务可靠。

Pretrain on large data, then adapt to multiple tasks; reliability on new tasks is not automatic.

### 分布外泛化 / OOD

训练中没见过的供体、细胞、药物或时间，可能更难预测。

Unseen donors, cells, drugs or timepoints may be harder to predict.

### 表达关联 / 全基因组关联 / eQTL / GWAS

连接变异与表达或性状；关联仍需精细定位和实验。

Link variants to expression or traits; associations still require fine-mapping and experiments.

### 诱导干细胞 / 类器官 / iPSC / organoid

实验室中重建人源细胞或部分组织；不能完全替代患者。

Human-derived cells or partial tissues built in the lab; not complete substitutes for patients.

### 全切片图像 / WSI

高分辨率数字病理切片，通常拆成很多图像块处理。

A high-resolution pathology slide, typically processed as many image patches.

### 分子字符串 / 结构文件 / SMILES / mmCIF

SMILES 描述连接关系；mmCIF 记录三维结构与原子信息。

SMILES represents molecular connectivity; mmCIF records 3D structures and atoms.

### 工具接口 / 代理 / MCP / agent

MCP 连接工具；代理规划并调用工具。二者都不保证科学结论正确。

MCP connects tools; agents plan and call them. Neither guarantees scientific correctness.

### 数据使用协议 / DUA

规定谁能用数据、可用于什么、能否分享或发送到外部服务。

Defines who may use data, permitted purposes, sharing and external-service restrictions.

