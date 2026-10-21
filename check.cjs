const fs=require('fs');
let count=0;
for(const file of fs.readdirSync('dist').filter(x=>x.endsWith('.html'))){
 const html=fs.readFileSync('dist/'+file,'utf8');
 for(const [,url] of html.matchAll(/href="([^"]+)"/g)){
  if(!/^(mailto:|https?:|#)/.test(url)&&!fs.existsSync('dist/'+url))throw Error(file+': broken link '+url);
 }
 if(!html.includes('careers@dvtworld.com'))throw Error('Contact email missing');
 count++;
}
console.log(count+' pages checked: all internal links resolve and contact email is present.');
