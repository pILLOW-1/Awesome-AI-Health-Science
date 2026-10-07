import {readFile,writeFile} from 'node:fs/promises';
import vm from 'node:vm';
const base=new URL('../',import.meta.url),context=vm.createContext({window:{}});
for(const file of ['data.js','guides.js'])vm.runInContext(await readFile(new URL('dist/'+file,base),'utf8'),context);
const A=context.window.ATLAS,G=context.window.GUIDES;
let md='# AI Health & Science Atlas / 生物医学 AI 研究地图\n\nVerified snapshot / 核查快照：'+A.updated+'\n\nPublic primary sources only. Not a systematic review or medical advice. / 仅整理公开原始来源；非系统综述或医疗建议。\n\n';
const pair=(name,x)=>{md+='**'+name+'**\n\n'+x.zh+'\n\n'+x.en+'\n\n'};
md+='## Research routes / 研究路线\n\n';
for(const r of G.routes){md+='### '+r.icon+' '+r.title.zh+' / '+r.title.en+'\n\n';pair('Overview / 总览',r.intro);pair('Question / 问题',r.question);pair('Data / 数据',r.data);pair('Challenge / 挑战',r.challenge);pair('Next / 方向',r.next);md+='Studies: '+r.ids.map(id=>A.research.find(x=>x.id===id).name).join('; ')+'\n\n'}
md+='## Papers / 论文\n\n';
for(const r of A.research){md+='### '+r.name+' ('+r.year+')\n\n'+r.venue+' · '+r.evidence+'\n\n';for(const [name,k]of [['Question / 问题','plain'],['Data / 数据','data'],['Method / 方法','method'],['Finding / 结论','result'],['Limitation / 局限','limit']])pair(name,r[k]);md+='[Primary source / 原文]('+r.link+')\n\n'}
md+='## Datasets / 数据集\n\n';
for(const d of A.datasets){md+='### '+d.name+'\n\n'+d.format+' · '+d.access+'\n\n';for(const [name,k]of [['Purpose / 用途','plain'],['Unit / 记录单位','unit'],['Join / 连接','join'],['Caution / 注意','pitfall']])pair(name,d[k]);md+='[Official data / 官方入口]('+d.link+')\n\n'}
md+='## Formats / 格式\n\n';for(const f of G.formats){md+='### '+f.name+'\n\n';pair('Meaning / 含义',f.meaning);md+='```text\n'+f.example+'\n```\n\n';pair('Check / 检查',f.check);md+='[Documentation]('+f.url+')\n\n'}
md+='## Tools & agents / 工具与代理\n\n';for(const t of A.tools){md+='### '+t.name+' · '+t.kind+'\n\n';for(const [name,k]of [['Input / 输入','input'],['Output / 产出','output'],['Availability / 开放范围','open'],['Boundary / 边界','limit']])pair(name,t[k]);md+='[Official project]('+t.link+')\n\n'}
md+='## Compute / 算力\n\nOfficial test configurations are not minimum requirements. All estimate rows are planning budgets, not guarantees. / 官方测试不是最低要求；估算仅供起步规划。\n\n';for(const c of G.compute){md+='### '+c.task.zh+' / '+c.task.en+'\n\nStatus: '+c.mode+' · GPU: '+(typeof c.gpu==='object'?c.gpu.en:c.gpu)+' · RAM: '+c.ram+' · Storage: '+c.disk+'\n\n';pair('Conditions / 条件',c.note);md+='[Source]('+c.url+')\n\n'}
md+='## Collections / 资源合集\n\n';for(const c of A.collections){md+='### ['+c.name+']('+c.url+')\n\nCoverage: '+c.coverage+'\n\n';pair('Purpose / 用途',c.desc)}
md+='## Future directions / 未来方向\n\nEditorial synthesis / 编辑综合\n\n';for(const o of G.opportunities){md+='### '+o.title.zh+' / '+o.title.en+'\n\n';pair('Gap / 缺口',o.why);pair('Design / 设计',o.design);pair('Validation / 验证',o.test)}
md+='## Glossary / 术语\n\n';for(const [en,zh,z,e]of A.glossary)md+='### '+zh+' / '+en+'\n\n'+z+'\n\n'+e+'\n\n';
await writeFile(new URL('CATALOG.md',base),md,'utf8');
await writeFile(new URL('allinone.md',base),'# Research summary\n\nThe full bilingual report follows. Aggregated paper-search execution was unavailable (missing requests in the bundled runtime; alternate execution encountered permission errors). Individual primary-source web searches, papers and official documentation were used instead. No automatic systematic-search completeness claim is made.\n\n'+md,'utf8');
await writeFile(new URL('dist/catalog.json',base),JSON.stringify({updated:A.updated,research:A.research,datasets:A.datasets,tools:A.tools,collections:A.collections,domains:A.domains,glossary:A.glossary,guides:G},null,2),'utf8');
console.log('Exported CATALOG.md, allinone.md and dist/catalog.json');
