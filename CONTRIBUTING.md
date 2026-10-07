# Contribution & verification policy

## Add a resource

1. Provide a primary paper, official dataset documentation or author-maintained repository. Do not use promotional summaries as the only support.
2. Explain the scientific question in ordinary language, followed by data, method, result and scope limits. Keep both Chinese and English versions consistent.
3. Separate cells, donors, full corpora and filtered subsets. Report which experiment a number belongs to.
4. Mark the specific publication as a preprint or journal paper; do not silently assign a preprint’s year to a later journal article.
5. Label association, prediction, experimental support, benchmark or tool workflow. Experimental support must state the tested context; clinical benefit is a separate claim.
6. Record official access and licensing routes. Public code, product availability, weights, outputs and data can have different permissions.
7. For compute, cite reported hardware or label estimates. Include assumptions; do not state guessed minimums or prices.
8. Do not upload private attachments, participant data, credentials, API keys or controlled-data derivatives.
9. Every paper, dataset, tool and collection must carry a year, a bilingual date-type label and a primary-source date URL. Distinguish publication/preprint, dataset-version release, project launch, repository creation and catalog review. Do not treat a repository creation date as a public launch. For changing portals, label the review year explicitly rather than inventing one release year.
10. Keep explanations clear without labeling the audience by experience level. Preserve this neutral wording in both languages.

## Update checklist

- Recheck primary sources and dates; note corrections in CHANGELOG.md.
- Edit `dist/data.js` or `dist/guides.js`, then regenerate `CATALOG.md`, `allinone.md`, `dist/catalog.json`.
- Run `node scripts/check.mjs`.
- Verify language switching, search/reset, filters, glossary, links and mobile layout.
- Source checks do not imply model reproduction. Mark verified results as author-reported unless reproduced.
- Maintain a fixed snapshot date; do not call it real-time monitoring without an actual update mechanism.

## Submit an issue

Include resource name, primary URL, proposed change, supporting evidence and which field is affected. For link failures distinguish a broken URL from login requirements, temporary outages or access restrictions.

中文：请给出资源名称、原始链接、建议修改、支持证据和受影响字段。纠错优先；不以论文数量、模型规模或仓库星数替代证据质量。
