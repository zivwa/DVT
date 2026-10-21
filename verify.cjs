const fs=require('fs'),assert=require('assert'),vm=require('vm');
require('./check.cjs');
const inventory=JSON.parse(fs.readFileSync('page-inventory.json'));
assert.equal(inventory.length,25);
// Datalist options in this site use the HTML-permitted omitted end tag.
const voids=new Set('area base br col embed hr img input link meta param source track wbr option'.split(' '));
for(const {file} of inventory){
 const html=fs.readFileSync('dist/'+file,'utf8');
 const stack=[];
 for(const [tag,closing,name] of html.matchAll(/<(\/?)([a-z][a-z0-9-]*)\b[^>]*>/gi)){
  if(voids.has(name.toLowerCase())||tag.endsWith('/>'))continue;
  if(closing)assert.equal(stack.pop(),name,file+': unbalanced '+tag);else stack.push(name);
 }
 assert.equal(stack.length,0,file+': unclosed tags');
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,file+': one primary heading');
 assert(html.includes('assets/logo.png'),file+': logo included');
 assert(!html.includes('Castlesky'),file+': DVT identity');
}
const contact=fs.readFileSync('dist/contact.html','utf8');
for(const name of ['firstName','lastName','email','enquiryType','description','consent'])assert(contact.includes('name="'+name+'"'),name+' field');
const elements=new Map();
const el=(name)=>{if(!elements.has(name))elements.set(name,{listeners:{},addEventListener(k,f){this.listeners[k]=f;},setAttribute(){},classList:{contains(){return false},remove(){},toggle(){}}});return elements.get(name);};
const form=el('#enquiry-form');form.reportValidity=()=>true;
el('.links').querySelectorAll=()=>[];
const payload={firstName:'A & B',lastName:'Example',email:'person@example.com',enquiryType:'Web & App',description:'Hello + world\nSecond line: #1',consent:'on'};
const context={document:{querySelector:el,querySelectorAll(){return[]},addEventListener(){}},location:{pathname:'/contact.html',href:''},FormData:class{get(k){return payload[k]}},encodeURIComponent};
vm.runInNewContext(fs.readFileSync('dist/site-complete.js','utf8'),context);
let prevented=false;form.listeners.submit({preventDefault(){prevented=true}});
assert(prevented);assert(context.location.href.startsWith('mailto:careers@dvtworld.com?'));
const params=new URLSearchParams(context.location.href.split('?')[1]);
assert.equal(params.get('subject'),'DVT enquiry: Web & App');
assert(params.get('body').includes(payload.description));
assert(params.get('body').includes('A & B Example'));
assert.equal(el('#email-fallback').hidden,false);
context.location.href='';form.reportValidity=()=>false;form.listeners.submit({preventDefault(){}});assert.equal(context.location.href,'');
console.log('Verified 25 page structures, branding, contact fields, email encoding, fallback, and validation guard.');
