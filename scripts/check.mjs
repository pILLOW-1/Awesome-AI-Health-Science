import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const dir=new URL('../dist/',import.meta.url);
const context=vm.createContext({window:{}});
for(const file of ['data.js','guides.js'])vm.runInContext(await readFile(new URL(file,dir),'utf8'),context,{filename:file});
new vm.Script(await readFile(new URL('app.js',dir),'utf8'));
const A=context.window.ATLAS,G=context.window.GUIDES;
const bilingual=(v,at)=>{if(v&&typeof v==='object'){if('zh'in v||'en'in v)assert.ok(typeof v.zh==='string'&&v.zh.length&&typeof v.en==='string'&&v.en.length,at);for(const [k,x]of Object.entries(v))bilingual(x,at+'.'+k)}};
bilingual(A,'ATLAS');bilingual(G,'GUIDES');
for(const key of ['research','datasets']){const ids=A[key].map(x=>x.id);assert.equal(new Set(ids).size,ids.length,'duplicate IDs: '+key);for(const r of A[key])assert.ok(A.domains[r.domain],'unknown domain '+r.id)}
for(const list of [A.research,A.datasets,A.tools,A.collections,G.compute,G.formats])for(const r of list){const url=r.link||r.url;assert.equal(new URL(url).protocol,'https:');}
for(const r of A.research)assert.ok(r.year<=2026&&r.year>=2010,'invalid year');
for(const group of ['research','datasets','tools','collections'])for(const r of A[group]){assert.ok(Number.isInteger(r.year)&&r.year>=1900&&r.year<=2026,'missing/invalid year: '+r.name);assert.ok(r.yearKind?.zh&&r.yearKind?.en,'missing year type: '+r.name);assert.equal(new URL(r.yearSource).protocol,'https:');}
for(const r of [...G.routes,...G.paths])for(const id of r.ids)assert.ok(A.research.some(x=>x.id===id),'broken research reference '+id);
assert.equal(G.routes.length,8);assert.ok(A.research.length>=40);assert.ok(A.datasets.length>=20);assert.ok(A.tools.length>=20);
for(const file of ['index.html','style.css','favicon.svg'])assert.ok((await readFile(new URL(file,dir),'utf8')).length>0);
console.log(JSON.stringify({status:'passed',research:A.research.length,datasets:A.datasets.length,tools:A.tools.length,collections:A.collections.length,researchRoutes:G.routes.length,glossaryTerms:A.glossary.length,formatGuides:G.formats.length,computeRows:G.compute.length}));
