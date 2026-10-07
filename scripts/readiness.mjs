const response=await fetch('http://127.0.0.1:4173/');
const html=await response.text();
if(!response.ok||!html.includes('AI Health & Science Atlas'))throw new Error('Preview not ready');
console.log(JSON.stringify({status:response.status,bytes:html.length,url:'http://127.0.0.1:4173/'}));
