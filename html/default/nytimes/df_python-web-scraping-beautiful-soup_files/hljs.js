/*!
  Highlight.js v11.4.0 (git: 2d0e7c1094)
  (c) 2006-2022 Ivan Sagalaev and other contributors
  License: BSD-3-Clause
 */
var hljs=function(){"use strict";var e={exports:{}};function t(e){
return e instanceof Map?e.clear=e.delete=e.set=()=>{
throw Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=()=>{
throw Error("set is read-only")
}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((n=>{var i=e[n]
;"object"!=typeof i||Object.isFrozen(i)||t(i)})),e}
e.exports=t,e.exports.default=t;var n=e.exports;class i{constructor(e){
void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}
ignoreMatch(){this.isMatchIgnored=!0}}function r(e){
return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")
}function s(e,...t){const n=Object.create(null);for(const t in e)n[t]=e[t]
;return t.forEach((e=>{for(const t in e)n[t]=e[t]})),n}const o=e=>!!e.kind
;class a{constructor(e,t){
this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){
this.buffer+=r(e)}openNode(e){if(!o(e))return;let t=e.kind
;t=e.sublanguage?"language-"+t:((e,{prefix:t})=>{if(e.includes(".")){
const n=e.split(".")
;return[`${t}${n.shift()}`,...n.map(((e,t)=>`${e}${"_".repeat(t+1)}`))].join(" ")
}return`${t}${e}`})(t,{prefix:this.classPrefix}),this.span(t)}closeNode(e){
o(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){
this.buffer+=`<span class="${e}">`}}class c{constructor(){this.rootNode={
children:[]},this.stack=[this.rootNode]}get top(){
return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){
this.top.children.push(e)}openNode(e){const t={kind:e,children:[]}
;this.add(t),this.stack.push(t)}closeNode(){
if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){
for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}
walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){
return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),
t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){
"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{
c._collapse(e)})))}}class l extends c{constructor(e){super(),this.options=e}
addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}
addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const n=e.root
;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){
return new a(this,this.options).value()}finalize(){return!0}}function g(e){
return e?"string"==typeof e?e:e.source:null}function d(e){return f("(?=",e,")")}
function u(e){return f("(?:",e,")*")}function h(e){return f("(?:",e,")?")}
function f(...e){return e.map((e=>g(e))).join("")}function p(...e){const t=(e=>{
const t=e[e.length-1]
;return"object"==typeof t&&t.constructor===Object?(e.splice(e.length-1,1),t):{}
})(e);return"("+(t.capture?"":"?:")+e.map((e=>g(e))).join("|")+")"}
function b(e){return RegExp(e.toString()+"|").exec("").length-1}
const m=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./
;function E(e,{joinWith:t}){let n=0;return e.map((e=>{n+=1;const t=n
;let i=g(e),r="";for(;i.length>0;){const e=m.exec(i);if(!e){r+=i;break}
r+=i.substring(0,e.index),
i=i.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?r+="\\"+(Number(e[1])+t):(r+=e[0],
"("===e[0]&&n++)}return r})).map((e=>`(${e})`)).join(t)}
const x="[a-zA-Z]\\w*",w="[a-zA-Z_]\\w*",y="\\b\\d+(\\.\\d+)?",_="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",v="\\b(0b[01]+)",k={
begin:"\\\\[\\s\\S]",relevance:0},O={scope:"string",begin:"'",end:"'",
illegal:"\\n",contains:[k]},N={scope:"string",begin:'"',end:'"',illegal:"\\n",
contains:[k]},M=(e,t,n={})=>{const i=s({scope:"comment",begin:e,end:t,
contains:[]},n);i.contains.push({scope:"doctag",
begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0})
;const r=p("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/)
;return i.contains.push({begin:f(/[ ]+/,"(",r,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i
},S=M("//","$"),R=M("/\\*","\\*/"),j=M("#","$");var A=Object.freeze({
__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:x,UNDERSCORE_IDENT_RE:w,
NUMBER_RE:y,C_NUMBER_RE:_,BINARY_NUMBER_RE:v,
RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
SHEBANG:(e={})=>{const t=/^#![ ]*\//
;return e.binary&&(e.begin=f(t,/.*\b/,e.binary,/\b.*/)),s({scope:"meta",begin:t,
end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},
BACKSLASH_ESCAPE:k,APOS_STRING_MODE:O,QUOTE_STRING_MODE:N,PHRASAL_WORDS_MODE:{
begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
},COMMENT:M,C_LINE_COMMENT_MODE:S,C_BLOCK_COMMENT_MODE:R,HASH_COMMENT_MODE:j,
NUMBER_MODE:{scope:"number",begin:y,relevance:0},C_NUMBER_MODE:{scope:"number",
begin:_,relevance:0},BINARY_NUMBER_MODE:{scope:"number",begin:v,relevance:0},
REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,
end:/\/[gimuy]*/,illegal:/\n/,contains:[k,{begin:/\[/,end:/\]/,relevance:0,
contains:[k]}]}]},TITLE_MODE:{scope:"title",begin:x,relevance:0},
UNDERSCORE_TITLE_MODE:{scope:"title",begin:w,relevance:0},METHOD_GUARD:{
begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:e=>Object.assign(e,{
"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{
t.data._beginMatch!==e[1]&&t.ignoreMatch()}})});function I(e,t){
"."===e.input[e.index-1]&&t.ignoreMatch()}function T(e,t){
void 0!==e.className&&(e.scope=e.className,delete e.className)}function L(e,t){
t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",
e.__beforeBegin=I,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,
void 0===e.relevance&&(e.relevance=0))}function B(e,t){
Array.isArray(e.illegal)&&(e.illegal=p(...e.illegal))}function D(e,t){
if(e.match){
if(e.begin||e.end)throw Error("begin & end are not supported with match")
;e.begin=e.match,delete e.match}}function H(e,t){
void 0===e.relevance&&(e.relevance=1)}const P=(e,t)=>{if(!e.beforeMatch)return
;if(e.starts)throw Error("beforeMatch cannot be used with starts")
;const n=Object.assign({},e);Object.keys(e).forEach((t=>{delete e[t]
})),e.keywords=n.keywords,e.begin=f(n.beforeMatch,d(n.begin)),e.starts={
relevance:0,contains:[Object.assign(n,{endsParent:!0})]
},e.relevance=0,delete n.beforeMatch
},C=["of","and","for","in","not","or","if","then","parent","list","value"]
;function $(e,t,n="keyword"){const i=Object.create(null)
;return"string"==typeof e?r(n,e.split(" ")):Array.isArray(e)?r(n,e):Object.keys(e).forEach((n=>{
Object.assign(i,$(e[n],t,n))})),i;function r(e,n){
t&&(n=n.map((e=>e.toLowerCase()))),n.forEach((t=>{const n=t.split("|")
;i[n[0]]=[e,U(n[0],n[1])]}))}}function U(e,t){
return t?Number(t):(e=>C.includes(e.toLowerCase()))(e)?0:1}const z={},K=e=>{
console.error(e)},W=(e,...t)=>{console.log("WARN: "+e,...t)},X=(e,t)=>{
z[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),z[`${e}/${t}`]=!0)
},G=Error();function Z(e,t,{key:n}){let i=0;const r=e[n],s={},o={}
;for(let e=1;e<=t.length;e++)o[e+i]=r[e],s[e+i]=!0,i+=b(t[e-1])
;e[n]=o,e[n]._emit=s,e[n]._multi=!0}function F(e){(e=>{
e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,
delete e.scope)})(e),"string"==typeof e.beginScope&&(e.beginScope={
_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope
}),(e=>{if(Array.isArray(e.begin)){
if(e.skip||e.excludeBegin||e.returnBegin)throw K("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),
G
;if("object"!=typeof e.beginScope||null===e.beginScope)throw K("beginScope must be object"),
G;Z(e,e.begin,{key:"beginScope"}),e.begin=E(e.begin,{joinWith:""})}})(e),(e=>{
if(Array.isArray(e.end)){
if(e.skip||e.excludeEnd||e.returnEnd)throw K("skip, excludeEnd, returnEnd not compatible with endScope: {}"),
G
;if("object"!=typeof e.endScope||null===e.endScope)throw K("endScope must be object"),
G;Z(e,e.end,{key:"endScope"}),e.end=E(e.end,{joinWith:""})}})(e)}function V(e){
function t(t,n){
return RegExp(g(t),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(n?"g":""))
}class n{constructor(){
this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}
addRule(e,t){
t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),
this.matchAt+=b(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null)
;const e=this.regexes.map((e=>e[1]));this.matcherRe=t(E(e,{joinWith:"|"
}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex
;const t=this.matcherRe.exec(e);if(!t)return null
;const n=t.findIndex(((e,t)=>t>0&&void 0!==e)),i=this.matchIndexes[n]
;return t.splice(0,n),Object.assign(t,i)}}class i{constructor(){
this.rules=[],this.multiRegexes=[],
this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){
if(this.multiRegexes[e])return this.multiRegexes[e];const t=new n
;return this.rules.slice(e).forEach((([e,n])=>t.addRule(e,n))),
t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){
return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){
this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){
const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex
;let n=t.exec(e)
;if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{
const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}
return n&&(this.regexIndex+=n.position+1,
this.regexIndex===this.count&&this.considerAll()),n}}
if(e.compilerExtensions||(e.compilerExtensions=[]),
e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
;return e.classNameAliases=s(e.classNameAliases||{}),function n(r,o){const a=r
;if(r.isCompiled)return a
;[T,D,F,P].forEach((e=>e(r,o))),e.compilerExtensions.forEach((e=>e(r,o))),
r.__beforeBegin=null,[L,B,H].forEach((e=>e(r,o))),r.isCompiled=!0;let c=null
;return"object"==typeof r.keywords&&r.keywords.$pattern&&(r.keywords=Object.assign({},r.keywords),
c=r.keywords.$pattern,
delete r.keywords.$pattern),c=c||/\w+/,r.keywords&&(r.keywords=$(r.keywords,e.case_insensitive)),
a.keywordPatternRe=t(c,!0),
o&&(r.begin||(r.begin=/\B|\b/),a.beginRe=t(a.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),
r.end&&(a.endRe=t(a.end)),
a.terminatorEnd=g(a.end)||"",r.endsWithParent&&o.terminatorEnd&&(a.terminatorEnd+=(r.end?"|":"")+o.terminatorEnd)),
r.illegal&&(a.illegalRe=t(r.illegal)),
r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map((e=>(e=>(e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((t=>s(e,{
variants:null},t)))),e.cachedVariants?e.cachedVariants:q(e)?s(e,{
starts:e.starts?s(e.starts):null
}):Object.isFrozen(e)?s(e):e))("self"===e?r:e)))),r.contains.forEach((e=>{n(e,a)
})),r.starts&&n(r.starts,o),a.matcher=(e=>{const t=new i
;return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"
}))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"
}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t})(a),a}(e)}function q(e){
return!!e&&(e.endsWithParent||q(e.starts))}class J extends Error{
constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}
const Y=r,Q=s,ee=Symbol("nomatch");var te=(e=>{
const t=Object.create(null),r=Object.create(null),s=[];let o=!0
;const a="Could not find the language '{}', did you forget to load/include a language module?",c={
disableAutodetect:!0,name:"Plain text",contains:[]};let g={
ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,
languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",
cssSelector:"pre code",languages:null,__emitter:l};function b(e){
return g.noHighlightRe.test(e)}function m(e,t,n){let i="",r=""
;"object"==typeof t?(i=e,
n=t.ignoreIllegals,r=t.language):(X("10.7.0","highlight(lang, code, ...args) has been deprecated."),
X("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),
r=e,i=t),void 0===n&&(n=!0);const s={code:i,language:r};N("before:highlight",s)
;const o=s.result?s.result:E(s.language,s.code,n)
;return o.code=s.code,N("after:highlight",o),o}function E(e,n,r,s){
const c=Object.create(null);function l(){if(!O.keywords)return void M.addText(S)
;let e=0;O.keywordPatternRe.lastIndex=0;let t=O.keywordPatternRe.exec(S),n=""
;for(;t;){n+=S.substring(e,t.index)
;const r=y.case_insensitive?t[0].toLowerCase():t[0],s=(i=r,O.keywords[i]);if(s){
const[e,i]=s
;if(M.addText(n),n="",c[r]=(c[r]||0)+1,c[r]<=7&&(R+=i),e.startsWith("_"))n+=t[0];else{
const n=y.classNameAliases[e]||e;M.addKeyword(t[0],n)}}else n+=t[0]
;e=O.keywordPatternRe.lastIndex,t=O.keywordPatternRe.exec(S)}var i
;n+=S.substr(e),M.addText(n)}function d(){null!=O.subLanguage?(()=>{
if(""===S)return;let e=null;if("string"==typeof O.subLanguage){
if(!t[O.subLanguage])return void M.addText(S)
;e=E(O.subLanguage,S,!0,N[O.subLanguage]),N[O.subLanguage]=e._top
}else e=x(S,O.subLanguage.length?O.subLanguage:null)
;O.relevance>0&&(R+=e.relevance),M.addSublanguage(e._emitter,e.language)
})():l(),S=""}function u(e,t){let n=1;for(;void 0!==t[n];){if(!e._emit[n]){n++
;continue}const i=y.classNameAliases[e[n]]||e[n],r=t[n]
;i?M.addKeyword(r,i):(S=r,l(),S=""),n++}}function h(e,t){
return e.scope&&"string"==typeof e.scope&&M.openNode(y.classNameAliases[e.scope]||e.scope),
e.beginScope&&(e.beginScope._wrap?(M.addKeyword(S,y.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),
S=""):e.beginScope._multi&&(u(e.beginScope,t),S="")),O=Object.create(e,{parent:{
value:O}}),O}function f(e,t,n){let r=((e,t)=>{const n=e&&e.exec(t)
;return n&&0===n.index})(e.endRe,n);if(r){if(e["on:end"]){const n=new i(e)
;e["on:end"](t,n),n.isMatchIgnored&&(r=!1)}if(r){
for(;e.endsParent&&e.parent;)e=e.parent;return e}}
if(e.endsWithParent)return f(e.parent,t,n)}function p(e){
return 0===O.matcher.regexIndex?(S+=e[0],1):(I=!0,0)}function b(e){
const t=e[0],i=n.substr(e.index),r=f(O,e,i);if(!r)return ee;const s=O
;O.endScope&&O.endScope._wrap?(d(),
M.addKeyword(t,O.endScope._wrap)):O.endScope&&O.endScope._multi?(d(),
u(O.endScope,e)):s.skip?S+=t:(s.returnEnd||s.excludeEnd||(S+=t),
d(),s.excludeEnd&&(S=t));do{
O.scope&&M.closeNode(),O.skip||O.subLanguage||(R+=O.relevance),O=O.parent
}while(O!==r.parent);return r.starts&&h(r.starts,e),s.returnEnd?0:t.length}
let m={};function w(t,s){const a=s&&s[0];if(S+=t,null==a)return d(),0
;if("begin"===m.type&&"end"===s.type&&m.index===s.index&&""===a){
if(S+=n.slice(s.index,s.index+1),!o){const t=Error(`0 width match regex (${e})`)
;throw t.languageName=e,t.badRule=m.rule,t}return 1}
if(m=s,"begin"===s.type)return(e=>{
const t=e[0],n=e.rule,r=new i(n),s=[n.__beforeBegin,n["on:begin"]]
;for(const n of s)if(n&&(n(e,r),r.isMatchIgnored))return p(t)
;return n.skip?S+=t:(n.excludeBegin&&(S+=t),
d(),n.returnBegin||n.excludeBegin||(S=t)),h(n,e),n.returnBegin?0:t.length})(s)
;if("illegal"===s.type&&!r){
const e=Error('Illegal lexeme "'+a+'" for mode "'+(O.scope||"<unnamed>")+'"')
;throw e.mode=O,e}if("end"===s.type){const e=b(s);if(e!==ee)return e}
if("illegal"===s.type&&""===a)return 1
;if(A>1e5&&A>3*s.index)throw Error("potential infinite loop, way more iterations than matches")
;return S+=a,a.length}const y=v(e)
;if(!y)throw K(a.replace("{}",e)),Error('Unknown language: "'+e+'"')
;const _=V(y);let k="",O=s||_;const N={},M=new g.__emitter(g);(()=>{const e=[]
;for(let t=O;t!==y;t=t.parent)t.scope&&e.unshift(t.scope)
;e.forEach((e=>M.openNode(e)))})();let S="",R=0,j=0,A=0,I=!1;try{
for(O.matcher.considerAll();;){
A++,I?I=!1:O.matcher.considerAll(),O.matcher.lastIndex=j
;const e=O.matcher.exec(n);if(!e)break;const t=w(n.substring(j,e.index),e)
;j=e.index+t}return w(n.substr(j)),M.closeAllNodes(),M.finalize(),k=M.toHTML(),{
language:e,value:k,relevance:R,illegal:!1,_emitter:M,_top:O}}catch(t){
if(t.message&&t.message.includes("Illegal"))return{language:e,value:Y(n),
illegal:!0,relevance:0,_illegalBy:{message:t.message,index:j,
context:n.slice(j-100,j+100),mode:t.mode,resultSoFar:k},_emitter:M};if(o)return{
language:e,value:Y(n),illegal:!1,relevance:0,errorRaised:t,_emitter:M,_top:O}
;throw t}}function x(e,n){n=n||g.languages||Object.keys(t);const i=(e=>{
const t={value:Y(e),illegal:!1,relevance:0,_top:c,_emitter:new g.__emitter(g)}
;return t._emitter.addText(e),t})(e),r=n.filter(v).filter(O).map((t=>E(t,e,!1)))
;r.unshift(i);const s=r.sort(((e,t)=>{
if(e.relevance!==t.relevance)return t.relevance-e.relevance
;if(e.language&&t.language){if(v(e.language).supersetOf===t.language)return 1
;if(v(t.language).supersetOf===e.language)return-1}return 0})),[o,a]=s,l=o
;return l.secondBest=a,l}function w(e){let t=null;const n=(e=>{
let t=e.className+" ";t+=e.parentNode?e.parentNode.className:""
;const n=g.languageDetectRe.exec(t);if(n){const t=v(n[1])
;return t||(W(a.replace("{}",n[1])),
W("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}
return t.split(/\s+/).find((e=>b(e)||v(e)))})(e);if(b(n))return
;if(N("before:highlightElement",{el:e,language:n
}),e.children.length>0&&(g.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),
console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),
console.warn("The element with unescaped HTML:"),
console.warn(e)),g.throwUnescapedHTML))throw new J("One of your code blocks includes unescaped HTML.",e.innerHTML)
;t=e;const i=t.textContent,s=n?m(i,{language:n,ignoreIllegals:!0}):x(i)
;e.innerHTML=s.value,((e,t,n)=>{const i=t&&r[t]||n
;e.classList.add("hljs"),e.classList.add("language-"+i)
})(e,n,s.language),e.result={language:s.language,re:s.relevance,
relevance:s.relevance},s.secondBest&&(e.secondBest={
language:s.secondBest.language,relevance:s.secondBest.relevance
}),N("after:highlightElement",{el:e,result:s,text:i})}let y=!1;function _(){
"loading"!==document.readyState?document.querySelectorAll(g.cssSelector).forEach(w):y=!0
}function v(e){return e=(e||"").toLowerCase(),t[e]||t[r[e]]}
function k(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach((e=>{
r[e.toLowerCase()]=t}))}function O(e){const t=v(e)
;return t&&!t.disableAutodetect}function N(e,t){const n=e;s.forEach((e=>{
e[n]&&e[n](t)}))}
"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(()=>{
y&&_()}),!1),Object.assign(e,{highlight:m,highlightAuto:x,highlightAll:_,
highlightElement:w,
highlightBlock:e=>(X("10.7.0","highlightBlock will be removed entirely in v12.0"),
X("10.7.0","Please use highlightElement now."),w(e)),configure:e=>{g=Q(g,e)},
initHighlighting:()=>{
_(),X("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},
initHighlightingOnLoad:()=>{
_(),X("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
},registerLanguage:(n,i)=>{let r=null;try{r=i(e)}catch(e){
if(K("Language definition for '{}' could not be registered.".replace("{}",n)),
!o)throw e;K(e),r=c}
r.name||(r.name=n),t[n]=r,r.rawDefinition=i.bind(null,e),r.aliases&&k(r.aliases,{
languageName:n})},unregisterLanguage:e=>{delete t[e]
;for(const t of Object.keys(r))r[t]===e&&delete r[t]},
listLanguages:()=>Object.keys(t),getLanguage:v,registerAliases:k,
autoDetection:O,inherit:Q,addPlugin:e=>{(e=>{
e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{
e["before:highlightBlock"](Object.assign({block:t.el},t))
}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{
e["after:highlightBlock"](Object.assign({block:t.el},t))})})(e),s.push(e)}
}),e.debugMode=()=>{o=!1},e.safeMode=()=>{o=!0
},e.versionString="11.4.0",e.regex={concat:f,lookahead:d,either:p,optional:h,
anyNumberOfTimes:u};for(const e in A)"object"==typeof A[e]&&n(A[e])
;return Object.assign(e,A),e})({});return te}()
;"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs);/*! `xml` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const a=e.regex,n=a.concat(/[A-Z_]/,a.optional(/[A-Z0-9_.-]*:/),/[A-Z0-9_.-]*/),s={
className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},t={begin:/\s/,
contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]
},i=e.inherit(t,{begin:/\(/,end:/\)/}),c=e.inherit(e.APOS_STRING_MODE,{
className:"string"}),l=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),r={
endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",
begin:/[A-Za-z0-9._:-]+/,relevance:0},{begin:/=\s*/,relevance:0,contains:[{
className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[s]},{
begin:/'/,end:/'/,contains:[s]},{begin:/[^\s"'=<>`]+/}]}]}]};return{
name:"HTML, XML",
aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],
case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,
relevance:10,contains:[t,l,c,i,{begin:/\[/,end:/\]/,contains:[{className:"meta",
begin:/<![a-z]/,end:/>/,contains:[t,i,l,c]}]}]},e.COMMENT(/<!--/,/-->/,{
relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},s,{
className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",
begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[r],starts:{
end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",
begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[r],starts:{
end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{
className:"tag",begin:/<>|<\/>/},{className:"tag",
begin:a.concat(/</,a.lookahead(a.concat(n,a.either(/\/>/,/>/,/\s/)))),
end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:r}]},{
className:"tag",begin:a.concat(/<\//,a.lookahead(a.concat(n,/>/))),contains:[{
className:"name",begin:n,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}
})();hljs.registerLanguage("xml",e)})();/*! `r` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const a=e.regex,n=/(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,i=a.either(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,/0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,/(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/),s=/[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,t=a.either(/[()]/,/[{}]/,/\[\[/,/[[\]]/,/\\/,/,/)
;return{name:"R",keywords:{$pattern:n,
keyword:"function if in break next repeat else for while",
literal:"NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
built_in:"LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
},contains:[e.COMMENT(/#'/,/$/,{contains:[{scope:"doctag",match:/@examples/,
starts:{end:a.lookahead(a.either(/\n^#'\s*(?=@[a-zA-Z]+)/,/\n^(?!#')/)),
endsParent:!0}},{scope:"doctag",begin:"@param",end:/$/,contains:[{
scope:"variable",variants:[{match:n},{match:/`(?:\\.|[^`\\])+`/}],endsParent:!0
}]},{scope:"doctag",match:/@[a-zA-Z]+/},{scope:"keyword",match:/\\[a-zA-Z]+/}]
}),e.HASH_COMMENT_MODE,{scope:"string",contains:[e.BACKSLASH_ESCAPE],
variants:[e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\(/,end:/\)(-*)"/
}),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\{/,end:/\}(-*)"/
}),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\[/,end:/\](-*)"/
}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\(/,end:/\)(-*)'/
}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\{/,end:/\}(-*)'/
}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\[/,end:/\](-*)'/}),{begin:'"',end:'"',
relevance:0},{begin:"'",end:"'",relevance:0}]},{relevance:0,variants:[{scope:{
1:"operator",2:"number"},match:[s,i]},{scope:{1:"operator",2:"number"},
match:[/%[^%]*%/,i]},{scope:{1:"punctuation",2:"number"},match:[t,i]},{scope:{
2:"number"},match:[/[^a-zA-Z0-9._]|^/,i]}]},{scope:{3:"operator"},
match:[n,/\s+/,/<-/,/\s+/]},{scope:"operator",relevance:0,variants:[{match:s},{
match:/%[^%]*%/}]},{scope:"punctuation",relevance:0,match:t},{begin:"`",end:"`",
contains:[{begin:/\\./}]}]}}})();hljs.registerLanguage("r",e)})();/*! `json` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>({name:"JSON",contains:[{
className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},{
match:/[{}[\],:]/,className:"punctuation",relevance:0},e.QUOTE_STRING_MODE,{
beginKeywords:"true false null"
},e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"})
})();hljs.registerLanguage("json",e)})();/*! `javascript` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict"
;const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],t=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],s=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],r=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],c=["arguments","this","super","console","window","document","localStorage","module","global"],i=[].concat(r,t,s)
;return o=>{const l=o.regex,b=e,d={begin:/<[A-Za-z0-9\\._:-]+/,
end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{
const a=e[0].length+e.index,t=e.input[a]
;if("<"===t||","===t)return void n.ignoreMatch();let s
;">"===t&&(((e,{after:n})=>{const a="</"+e[0].slice(1)
;return-1!==e.input.indexOf(a,n)})(e,{after:a
})||n.ignoreMatch()),(s=e.input.substr(a).match(/^\s+extends\s+/))&&0===s.index&&n.ignoreMatch()
}},g={$pattern:e,keyword:n,literal:a,built_in:i,"variable.language":c
},u="\\.([0-9](_?[0-9])*)",m="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",E={
className:"number",variants:[{
begin:`(\\b(${m})((${u})|\\.)?|(${u}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{
begin:`\\b(${m})\\b((${u})\\b|\\.)?|(${u})\\b`},{
begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{
begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{
begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{
begin:"\\b0[0-7]+n?\\b"}],relevance:0},A={className:"subst",begin:"\\$\\{",
end:"\\}",keywords:g,contains:[]},y={begin:"html`",end:"",starts:{end:"`",
returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,A],subLanguage:"xml"}},N={
begin:"css`",end:"",starts:{end:"`",returnEnd:!1,
contains:[o.BACKSLASH_ESCAPE,A],subLanguage:"css"}},_={className:"string",
begin:"`",end:"`",contains:[o.BACKSLASH_ESCAPE,A]},f={className:"comment",
variants:[o.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{
begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",
begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,
excludeBegin:!0,relevance:0},{className:"variable",begin:b+"(?=\\s*(-)|$)",
endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]
}),o.C_BLOCK_COMMENT_MODE,o.C_LINE_COMMENT_MODE]
},h=[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,y,N,_,E];A.contains=h.concat({
begin:/\{/,end:/\}/,keywords:g,contains:["self"].concat(h)})
;const v=[].concat(f,A.contains),p=v.concat([{begin:/\(/,end:/\)/,keywords:g,
contains:["self"].concat(v)}]),S={className:"params",begin:/\(/,end:/\)/,
excludeBegin:!0,excludeEnd:!0,keywords:g,contains:p},w={variants:[{
match:[/class/,/\s+/,b,/\s+/,/extends/,/\s+/,l.concat(b,"(",l.concat(/\./,b),")*")],
scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{
match:[/class/,/\s+/,b],scope:{1:"keyword",3:"title.class"}}]},R={relevance:0,
match:l.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
className:"title.class",keywords:{_:[...t,...s]}},O={variants:[{
match:[/function/,/\s+/,b,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],
className:{1:"keyword",3:"title.function"},label:"func.def",contains:[S],
illegal:/%/},k={
match:l.concat(/\b/,(I=[...r,"super"],l.concat("(?!",I.join("|"),")")),b,l.lookahead(/\(/)),
className:"title.function",relevance:0};var I;const x={
begin:l.concat(/\./,l.lookahead(l.concat(b,/(?![0-9A-Za-z$_(])/))),end:b,
excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},T={
match:[/get|set/,/\s+/,b,/(?=\()/],className:{1:"keyword",3:"title.function"},
contains:[{begin:/\(\)/},S]
},C="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+o.UNDERSCORE_IDENT_RE+")\\s*=>",M={
match:[/const|var|let/,/\s+/,b,/\s*/,/=\s*/,/(async\s*)?/,l.lookahead(C)],
keywords:"async",className:{1:"keyword",3:"title.function"},contains:[S]}
;return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:g,exports:{
PARAMS_CONTAINS:p,CLASS_REFERENCE:R},illegal:/#(?![$_A-z])/,
contains:[o.SHEBANG({label:"shebang",binary:"node",relevance:5}),{
label:"use_strict",className:"meta",relevance:10,
begin:/^\s*['"]use (strict|asm)['"]/
},o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,y,N,_,f,E,R,{className:"attr",
begin:b+l.lookahead(":"),relevance:0},M,{
begin:"("+o.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",
keywords:"return throw case",relevance:0,contains:[f,o.REGEXP_MODE,{
className:"function",begin:C,returnBegin:!0,end:"\\s*=>",contains:[{
className:"params",variants:[{begin:o.UNDERSCORE_IDENT_RE,relevance:0},{
className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,
excludeEnd:!0,keywords:g,contains:p}]}]},{begin:/,/,relevance:0},{match:/\s+/,
relevance:0},{variants:[{begin:"<>",end:"</>"},{
match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:d.begin,
"on:begin":d.isTrulyOpeningTag,end:d.end}],subLanguage:"xml",contains:[{
begin:d.begin,end:d.end,skip:!0,contains:["self"]}]}]},O,{
beginKeywords:"while if switch catch for"},{
begin:"\\b(?!function)"+o.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
returnBegin:!0,label:"func.def",contains:[S,o.inherit(o.TITLE_MODE,{begin:b,
className:"title.function"})]},{match:/\.\.\./,relevance:0},x,{match:"\\$"+b,
relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},
contains:[S]},k,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,
className:"variable.constant"},w,T,{match:/\$[(.]/}]}}})()
;hljs.registerLanguage("javascript",e)})();/*! `python` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const n=e.regex,a=/[\p{XID_Start}_]\p{XID_Continue}*/u,i=["and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],s={
$pattern:/[A-Za-z]\w+|__\w+__/,keyword:i,
built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],
literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],
type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]
},t={className:"meta",begin:/^(>>>|\.\.\.) /},r={className:"subst",begin:/\{/,
end:/\}/,keywords:s,illegal:/#/},l={begin:/\{\{/,relevance:0},b={
className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{
begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,
contains:[e.BACKSLASH_ESCAPE,t],relevance:10},{
begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,
contains:[e.BACKSLASH_ESCAPE,t],relevance:10},{
begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,
contains:[e.BACKSLASH_ESCAPE,t,l,r]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,
end:/"""/,contains:[e.BACKSLASH_ESCAPE,t,l,r]},{begin:/([uU]|[rR])'/,end:/'/,
relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{
begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,
end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,
contains:[e.BACKSLASH_ESCAPE,l,r]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,
contains:[e.BACKSLASH_ESCAPE,l,r]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]
},o="[0-9](_?[0-9])*",c=`(\\b(${o}))?\\.(${o})|\\b(${o})\\.`,d="\\b|"+i.join("|"),g={
className:"number",relevance:0,variants:[{
begin:`(\\b(${o})|(${c}))[eE][+-]?(${o})[jJ]?(?=${d})`},{begin:`(${c})[jJ]?`},{
begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${d})`},{
begin:`\\b0[bB](_?[01])+[lL]?(?=${d})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${d})`
},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${d})`},{begin:`\\b(${o})[jJ](?=${d})`
}]},p={className:"comment",begin:n.lookahead(/# type:/),end:/$/,keywords:s,
contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},m={
className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,
end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,
contains:["self",t,g,b,e.HASH_COMMENT_MODE]}]};return r.contains=[b,g,t],{
name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:s,
illegal:/(<\/|->|\?)|=>/,contains:[t,g,{begin:/\bself\b/},{beginKeywords:"if",
relevance:0},b,p,e.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,a],scope:{
1:"keyword",3:"title.function"},contains:[m]},{variants:[{
match:[/\bclass/,/\s+/,a,/\s*/,/\(\s*/,a,/\s*\)/]},{match:[/\bclass/,/\s+/,a]}],
scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{
className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[g,m,b]}]}}})()
;hljs.registerLanguage("python",e)})();/*! `php` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const t=e.regex,r="[a-zA-Z0-9_\x7f-\xff]*(?![A-Za-z0-9])(?![$]))",a=t.concat("([a-zA-Z_\\x7f-\\xff]",r),n=t.concat("([A-Z]",r),o={
scope:"variable",match:"\\$+"+a},c={scope:"subst",variants:[{begin:/\$\w+/},{
begin:/\{\$/,end:/\}/}]},i=e.inherit(e.APOS_STRING_MODE,{illegal:null
}),l="[ \t\n]",s={scope:"string",variants:[e.inherit(e.QUOTE_STRING_MODE,{
illegal:null,contains:e.QUOTE_STRING_MODE.contains.concat(c)
}),i,e.END_SAME_AS_BEGIN({begin:/<<<[ \t]*(\w+)\n/,end:/[ \t]*(\w+)\b/,
contains:e.QUOTE_STRING_MODE.contains.concat(c)})]},p={scope:"number",
variants:[{begin:"\\b0[bB][01]+(?:_[01]+)*\\b"},{
begin:"\\b0[oO][0-7]+(?:_[0-7]+)*\\b"},{
begin:"\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"},{
begin:"(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"
}],relevance:0
},_=["__CLASS__","__DIR__","__FILE__","__FUNCTION__","__COMPILER_HALT_OFFSET__","__LINE__","__METHOD__","__NAMESPACE__","__TRAIT__","die","echo","exit","include","include_once","print","require","require_once","array","abstract","and","as","binary","bool","boolean","break","callable","case","catch","class","clone","const","continue","declare","default","do","double","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","enum","eval","extends","final","finally","float","for","foreach","from","global","goto","if","implements","instanceof","insteadof","int","integer","interface","isset","iterable","list","match|0","mixed","new","never","object","or","private","protected","public","readonly","real","return","string","switch","throw","trait","try","unset","use","var","void","while","xor","yield"],d=["Error|0","AppendIterator","ArgumentCountError","ArithmeticError","ArrayIterator","ArrayObject","AssertionError","BadFunctionCallException","BadMethodCallException","CachingIterator","CallbackFilterIterator","CompileError","Countable","DirectoryIterator","DivisionByZeroError","DomainException","EmptyIterator","ErrorException","Exception","FilesystemIterator","FilterIterator","GlobIterator","InfiniteIterator","InvalidArgumentException","IteratorIterator","LengthException","LimitIterator","LogicException","MultipleIterator","NoRewindIterator","OutOfBoundsException","OutOfRangeException","OuterIterator","OverflowException","ParentIterator","ParseError","RangeException","RecursiveArrayIterator","RecursiveCachingIterator","RecursiveCallbackFilterIterator","RecursiveDirectoryIterator","RecursiveFilterIterator","RecursiveIterator","RecursiveIteratorIterator","RecursiveRegexIterator","RecursiveTreeIterator","RegexIterator","RuntimeException","SeekableIterator","SplDoublyLinkedList","SplFileInfo","SplFileObject","SplFixedArray","SplHeap","SplMaxHeap","SplMinHeap","SplObjectStorage","SplObserver","SplPriorityQueue","SplQueue","SplStack","SplSubject","SplTempFileObject","TypeError","UnderflowException","UnexpectedValueException","UnhandledMatchError","ArrayAccess","BackedEnum","Closure","Fiber","Generator","Iterator","IteratorAggregate","Serializable","Stringable","Throwable","Traversable","UnitEnum","WeakReference","WeakMap","Directory","__PHP_Incomplete_Class","parent","php_user_filter","self","static","stdClass"],b={
keyword:_,literal:(e=>{const t=[];return["false","null","true"].forEach((e=>{
t.push(e),e.toLowerCase()===e?t.push(e.toUpperCase()):t.push(e.toLowerCase())
})),t})(),built_in:d},u=e=>e.map((e=>e.replace(/\|\d+$/,""))),E={variants:[{
match:[/new/,t.concat(l,"+"),t.concat("(?!",u(d).join("\\b|"),"\\b)"),t.concat(/\\?/,a),t.concat(l,"*",/\(/)],
scope:{1:"keyword",4:"title.class"}}]},g={relevance:0,
match:[/\b/,t.concat("(?!fn\\b|function\\b|",u(_).join("\\b|"),"|",u(d).join("\\b|"),"\\b)"),a,t.concat(l,"*"),t.lookahead(/(?=\()/)],
scope:{3:"title.function.invoke"}},I=t.concat(a,"\\b(?!\\()"),h={variants:[{
match:[t.concat(/::/,t.lookahead(/(?!class\b)/)),I],scope:{2:"variable.constant"
}},{match:[/::/,/class/],scope:{2:"variable.language"}},{
match:[n,t.concat("::",t.lookahead(/(?!class\b)/))],scope:{1:"title.class"}},{
match:[n,/::/,/class/],scope:{1:"title.class",3:"variable.language"}}]};return{
case_insensitive:!1,keywords:b,
contains:[e.HASH_COMMENT_MODE,e.COMMENT("//","$"),e.COMMENT("/\\*","\\*/",{
contains:[{scope:"doctag",match:"@[A-Za-z]+"}]}),{match:/__halt_compiler\(\);/,
keywords:"__halt_compiler",starts:{scope:"comment",end:e.MATCH_NOTHING_RE,
contains:[{match:/\?>/,scope:"meta",endsParent:!0}]}},{scope:"meta",variants:[{
begin:/<\?php/,relevance:10},{begin:/<\?[=]?/},{begin:/\?>/}]},{
scope:"variable.language",match:/\$this\b/},o,g,h,{
match:[/const/,/\s/,a,/\s*=/],scope:{1:"keyword",3:"variable.constant"}},E,{
scope:"function",relevance:0,beginKeywords:"fn function",end:/[;{]/,
excludeEnd:!0,illegal:"[$%\\[]",contains:[{beginKeywords:"use"
},e.UNDERSCORE_TITLE_MODE,{begin:"=>",endsParent:!0},{scope:"params",
begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,keywords:b,
contains:["self",o,h,e.C_BLOCK_COMMENT_MODE,s,p]}]},{scope:"class",variants:[{
beginKeywords:"enum",illegal:/[($"]/},{beginKeywords:"class interface trait",
illegal:/[:($"]/}],relevance:0,end:/\{/,excludeEnd:!0,contains:[{
beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{
beginKeywords:"namespace",relevance:0,end:";",illegal:/[.']/,
contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{scope:"title.class"})]},{
beginKeywords:"use",relevance:0,end:";",contains:[{
match:/\b(as|const|function)\b/,scope:"keyword"},e.UNDERSCORE_TITLE_MODE]},s,p]}
}})();hljs.registerLanguage("php",e)})();/*! `ruby` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const n=e.regex,a="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",i={
keyword:"and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor __FILE__",
built_in:"proc lambda",literal:"true false nil"},s={className:"doctag",
begin:"@[A-Za-z]+"},b={begin:"#<",end:">"},r=[e.COMMENT("#","$",{contains:[s]
}),e.COMMENT("^=begin","^=end",{contains:[s],relevance:10
}),e.COMMENT("^__END__","\\n$")],c={className:"subst",begin:/#\{/,end:/\}/,
keywords:i},t={className:"string",contains:[e.BACKSLASH_ESCAPE,c],variants:[{
begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,
end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{
begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,
end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{
begin:/\B\?(\\\d{1,3})/},{begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{
begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{
begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{
begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{
begin:n.concat(/<<[-~]?'?/,n.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),
contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,
contains:[e.BACKSLASH_ESCAPE,c]})]}]},d="[0-9](_?[0-9])*",g={className:"number",
relevance:0,variants:[{
begin:`\\b([1-9](_?[0-9])*|0)(\\.(${d}))?([eE][+-]?(${d})|r)?i?\\b`},{
begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"
},{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{
begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{
begin:"\\b0(_?[0-7])+r?i?\\b"}]},l={className:"params",begin:"\\(",end:"\\)",
endsParent:!0,keywords:i},o=[t,{className:"class",beginKeywords:"class module",
end:"$|;",illegal:/=/,contains:[e.inherit(e.TITLE_MODE,{
begin:"[A-Za-z_]\\w*(::\\w+)*(\\?|!)?"}),{begin:"<\\s*",contains:[{
begin:"("+e.IDENT_RE+"::)?"+e.IDENT_RE,relevance:0}]}].concat(r)},{
className:"function",begin:n.concat(/def\s+/,n.lookahead(a+"\\s*(\\(|;|$)")),
relevance:0,keywords:"def",end:"$|;",contains:[e.inherit(e.TITLE_MODE,{begin:a
}),l].concat(r)},{begin:e.IDENT_RE+"::"},{className:"symbol",
begin:e.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",
begin:":(?!\\s)",contains:[t,{begin:a}],relevance:0},g,{className:"variable",
begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{
className:"params",begin:/\|/,end:/\|/,relevance:0,keywords:i},{
begin:"("+e.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[{
className:"regexp",contains:[e.BACKSLASH_ESCAPE,c],illegal:/\n/,variants:[{
begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{begin:"%r\\(",
end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]
}].concat(b,r),relevance:0}].concat(b,r);c.contains=o,l.contains=o;const _=[{
begin:/^\s*=>/,starts:{end:"$",contains:o}},{className:"meta",
begin:"^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
starts:{end:"$",contains:o}}];return r.unshift(b),{name:"Ruby",
aliases:["rb","gemspec","podspec","thor","irb"],keywords:i,illegal:/\/\*/,
contains:[e.SHEBANG({binary:"ruby"})].concat(_).concat(r).concat(o)}}})()
;hljs.registerLanguage("ruby",e)})();/*! `bash` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{const s=e.regex,t={},n={begin:/\$\{/,
end:/\}/,contains:["self",{begin:/:-/,contains:[t]}]};Object.assign(t,{
className:"variable",variants:[{
begin:s.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},n]});const a={
className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},i={
begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,
end:/(\w+)/,className:"string"})]}},c={className:"string",begin:/"/,end:/"/,
contains:[e.BACKSLASH_ESCAPE,t,a]};a.contains.push(c);const o={begin:/\$\(\(/,
end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,t]
},r=e.SHEBANG({binary:"(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)",relevance:10
}),l={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,
contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{
name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z._-]+\b/,
keyword:["if","then","else","elif","fi","for","while","in","do","done","case","esac","function"],
literal:["true","false"],
built_in:["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset","alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","type","typeset","ulimit","unalias","set","shopt","autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp","chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"]
},contains:[r,e.SHEBANG(),l,o,e.HASH_COMMENT_MODE,i,{match:/(\/[a-z._-]+)+/},c,{
className:"",begin:/\\"/},{className:"string",begin:/'/,end:/'/},t]}}})()
;hljs.registerLanguage("bash",e)})();/*! `java` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict"
;var e="\\.([0-9](_*[0-9])*)",a="[0-9a-fA-F](_*[0-9a-fA-F])*",n={
className:"number",variants:[{
begin:`(\\b([0-9](_*[0-9])*)((${e})|\\.)?|(${e}))[eE][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`
},{begin:`\\b([0-9](_*[0-9])*)((${e})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{
begin:`(${e})[fFdD]?\\b`},{begin:"\\b([0-9](_*[0-9])*)[fFdD]\\b"},{
begin:`\\b0[xX]((${a})\\.?|(${a})?\\.(${a}))[pP][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`
},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${a})[lL]?\\b`},{
begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],
relevance:0};function s(e,a,n){return-1===n?"":e.replace(a,(t=>s(e,a,n-1)))}
return e=>{e.regex
;const a="[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*",t=a+s("(?:<"+a+"~~~(?:\\s*,\\s*"+a+"~~~)*>)?",/~~~/g,2),i={
keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed"],
literal:["false","true","null"],
type:["char","boolean","long","float","int","byte","short","double"],
built_in:["super","this"]},r={className:"meta",begin:"@"+a,contains:[{
begin:/\(/,end:/\)/,contains:["self"]}]},l={className:"params",begin:/\(/,
end:/\)/,keywords:i,relevance:0,contains:[e.C_BLOCK_COMMENT_MODE],endsParent:!0}
;return{name:"Java",aliases:["jsp"],keywords:i,illegal:/<\/|#/,
contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,
relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{
begin:/import java\.[a-z]+\./,keywords:"import",relevance:2
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,
className:"string",contains:[e.BACKSLASH_ESCAPE]
},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{
match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,a],className:{
1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{
begin:[a,/\s+/,a,/\s+/,/=/],className:{1:"type",3:"variable",5:"operator"}},{
begin:[/record/,/\s+/,a],className:{1:"keyword",3:"title.class"},
contains:[l,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{
beginKeywords:"new throw return else",relevance:0},{
begin:["(?:"+t+"\\s+)",e.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{
2:"title.function"},keywords:i,contains:[{className:"params",begin:/\(/,
end:/\)/,keywords:i,relevance:0,
contains:[r,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,n,e.C_BLOCK_COMMENT_MODE]
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},n,r]}}})()
;hljs.registerLanguage("java",e)})();/*! `go` grammar compiled for Highlight.js 11.4.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n={
keyword:["break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var"],
type:["bool","byte","complex64","complex128","error","float32","float64","int8","int16","int32","int64","string","uint8","uint16","uint32","uint64","int","uint","uintptr","rune"],
literal:["true","false","iota","nil"],
built_in:["append","cap","close","complex","copy","imag","len","make","new","panic","print","println","real","recover","delete"]
};return{name:"Go",aliases:["golang"],keywords:n,illegal:"</",
contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",
variants:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:"`",end:"`"}]},{
className:"number",variants:[{begin:e.C_NUMBER_RE+"[i]",relevance:1
},e.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",
end:"\\s*(\\{|$)",excludeEnd:!0,contains:[e.TITLE_MODE,{className:"params",
begin:/\(/,end:/\)/,endsParent:!0,keywords:n,illegal:/["']/}]}]}}})()
;hljs.registerLanguage("go",e)})();;
