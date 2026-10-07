# Awesome AI Health & Science

An evidence-first, bilingual atlas for people entering biomedical AI research.

面向非领域读者的中英双语研究地图：把疾病问题、数据、方法、证据和资源连接起来。

**[Open the interactive atlas / 打开网站](https://ai-health-science-atlas.saxoe.chatgpt.site)** · **[Read the full catalog / 完整目录](CATALOG.md)** · [Structured data](dist/catalog.json)

Snapshot: **2026-10-08**. This is a curated research snapshot, not an exhaustive systematic review or clinical advice. Dates distinguish preprints from journal publication. Original resources retain their licenses. No original private attachments or patient data are hosted.

## What you will find / 包含什么

| Area | Coverage |
| --- | --- |
| Disease & mechanism / 疾病与机制 | Alzheimer’s, neurodegeneration, immune disease, kidney disease, cancer |
| Cellular modeling / 细胞建模 | Foundation models, perturbation prediction, causal networks, spatial tissues |
| Molecular science / 分子研究 | Regulatory variants, protein complexes, drug repurposing |
| Data / 数据 | Formats, observation units, join fields, access and leakage risks |
| Tools & agents / 工具代理 | ScienceBuddy, Biomni, CellVoyager, Paper2Agent and complementary toolchains |
| Compute / 算力 | Official reports separated from starting-budget estimates |
| Starting routes / 入门 | Plain-language explanations, glossary and reading paths |

The website has bilingual switching, keyword search, domain/access/evidence filters, expandable technical detail and a dense-matrix memory calculator. All editorial content is local; there is no analytics, tracking, login or external model call.

## Evidence rules / 证据规则

- Cells are not independent patients. / 细胞不是独立患者。
- Association and attribution are not causal mechanism. / 关联与归因不是因果机制。
- Intervention prediction is not observed individual-cell counterfactual truth. / 干预预测不是已观测的单细胞反事实。
- Drug or structure predictions are not clinical efficacy. / 药物与结构预测不是临床疗效。
- Agent task success is not scientific or medical accuracy. / 代理任务成功率不是科学或医疗准确率。
- Official hardware tests are not minimum requirements. / 官方硬件测试不是最低要求。

## Run locally / 本地运行

No install or build step. Requires Node.js 18+ for the preview and maintenance scripts.

```sh
node scripts/check.mjs
node scripts/export-catalog.mjs
node scripts/preview.mjs
```

Open `http://127.0.0.1:4173/`. Stop with Ctrl+C. Any static web host can serve `dist/`.

## Maintain / 维护

- `dist/data.js`: bilingual papers, datasets, tools and collections.
- `dist/guides.js`: reading paths, schemas, compute, opportunities and checklist.
- `dist/app.js` / `style.css`: interface.
- `scripts/check.mjs`: syntax, bilingual fields, IDs, source URL schemes and cross-references.
- `scripts/export-catalog.mjs`: regenerates readable reports and JSON from the same content.
- [CONTRIBUTING.md](CONTRIBUTING.md): verification and update policy.
- [CHANGELOG.md](CHANGELOG.md): snapshot history.

Updates are manual unless a separate recurring workflow is explicitly configured. Do not claim that links, licenses or model outputs are permanently current. Add primary citations and preserve caveats when editing.

## Licensing

Original interface code and editorial descriptions: MIT, see [LICENSE](LICENSE). This does **not** relicense linked papers, datasets, model weights or tools. In particular, State and AlphaFold 3 have separate restrictions. Controlled resources must remain in authorized environments.
