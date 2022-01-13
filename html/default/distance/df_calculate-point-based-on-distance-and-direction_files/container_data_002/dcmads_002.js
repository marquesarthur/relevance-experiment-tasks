(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},ba=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");},e=ba(this),l=function(a,b){if(b)a:{var c=e;a=a.split(".");for(var d=0;d<a.length-
1;d++){var f=a[d];if(!(f in c))break a;c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}},ca="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},m;
if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var da={a:!0},p={};try{p.__proto__=da;n=p.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var q=m;l("globalThis",function(a){return a||e});
l("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(k){return k};var f=[],g="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof g){b=g.call(b);for(var h=0;!(g=b.next()).done;)f.push(c.call(d,g.value,h++))}else for(g=b.length,h=0;h<g;h++)f.push(c.call(d,b[h],h));return f}});var r=this||self,t=function(a){return a};var ea=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,f=0;f<c;f++)if(f in d&&b.call(void 0,d[f],f,a))return!0;return!1};var u={},v=null;var fa="function"===typeof Uint8Array;var w="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function x(a){Object.isFrozen(a)||(w?a[w]|=1:void 0!==a.g?a.g|=1:Object.defineProperties(a,{g:{value:1,configurable:!0,writable:!0,enumerable:!1}}));return a};function ha(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}var y;function ia(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)&&fa&&null!=a&&a instanceof Uint8Array){var b;void 0===b&&(b=0);if(!v){v={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=c.concat(d[f].split(""));u[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===v[k]&&(v[k]=h)}}}b=u[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(f=g=0;g<a.length-2;g+=3){var z=
a[g],A=a[g+1];k=a[g+2];h=b[z>>2];z=b[(z&3)<<4|A>>4];A=b[(A&15)<<2|k>>6];k=b[k&63];c[f++]=h+z+A+k}h=0;k=d;switch(a.length-g){case 2:h=a[g+1],k=b[(h&15)<<2]||d;case 1:a=a[g],c[f]=b[a>>2]+b[(a&3)<<4|h>>4]+k+d}return c.join("")}}return a};function ja(a,b){if(null!=a){if(Array.isArray(a))a=B(a,b);else if(ha(a)){var c={},d;for(d in a)c[d]=ja(a[d],b);a=c}else a=b(a);return a}}function B(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=ja(c[d],b);if(b=Array.isArray(a)){var f;w?f=a[w]:f=a.g;b=(null==f?0:f)&1}b&&x(c);return c}function ka(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=ia(a);return Array.isArray(a)?B(a,ka):a};var la;var C=function(a,b,c){var d=la;la=null;a||(a=d);d=this.constructor.B;a||(a=d?[d]:[]);this.h=(d?0:-1)-(this.constructor.A||0);this.g=a;a:{d=this.g.length;a=d-1;if(d&&(d=this.g[a],ha(d))){this.i=a-this.h;this.j=d;break a}void 0!==b&&-1<b?(this.i=Math.max(b,a+1-this.h),this.j=void 0):this.i=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.i)a+=this.h,(d=this.g[a])?Array.isArray(d)&&x(d):this.g[a]=ma;else{d=this.j||(this.j=this.g[this.i+this.h]={});var f=d[a];f?Array.isArray(f)&&x(f):d[a]=
ma}},ma=Object.freeze(x([])),D=function(a,b,c){var d;b<a.i&&(void 0===d||!d)?a.g[b+a.h]=c:(a.j||(a.j=a.g[a.i+a.h]={}))[b]=c;return a};C.prototype.toJSON=function(){var a=this.g;return y?a:B(a,ka)};function na(a,b){return ia(b)}C.prototype.toString=function(){return this.g.toString()};var E=function(a){C.call(this,a,-1,oa)};E.prototype=ca(C.prototype);E.prototype.constructor=E;if(q)q(E,C);else for(var F in C)if("prototype"!=F)if(Object.defineProperties){var pa=Object.getOwnPropertyDescriptor(C,F);pa&&Object.defineProperty(E,F,pa)}else E[F]=C[F];var oa=[6];var G,qa=function(){if(void 0===G){var a=null,b=r.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:t,createScript:t,createScriptURL:t})}catch(c){r.console&&r.console.error(c.message)}G=a}else G=a}return G};var H=function(a,b){this.g=b===ra?a:""};H.prototype.toString=function(){return this.g+""};var ra={};var sa={},I=function(a,b,c){this.g=c===sa?a:""};I.prototype.toString=function(){return this.g.toString()};/*

 SPDX-License-Identifier: Apache-2.0
*/
var va=function(a,b){if(!ta()){var c=Math.random();if(c<b)return c=ua(),a[Math.floor(c*a.length)]}return null},ua=function(){if(!globalThis.crypto)return Math.random();try{var a=new Uint32Array(1);globalThis.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},ta=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return ea(["Google Web Preview","Mediapartners-Google","Google-Read-Aloud","Google-Adwords"],wa)||1E-4>Math.random()}),wa=function(a){var b;
a:{if(b=r.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};var xa="platform platformVersion architecture model uaFullVersion bitness".split(" ");function ya(){var a,b;return"function"!==typeof(null===(b=null===(a=null===r||void 0===r?void 0:r.navigator)||void 0===a?void 0:a.userAgentData)||void 0===b?void 0:b.getHighEntropyValues)?null:r.navigator.userAgentData.getHighEntropyValues(xa).then(function(c){var d=new E;d=D(d,1,c.platform);d=D(d,2,c.platformVersion);d=D(d,3,c.architecture);d=D(d,4,c.model);d=D(d,5,c.uaFullVersion);return D(d,9,c.bitness)})};var za=function(a,b){b=void 0===b?!0:b;try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return b;case "http:":return!1}}catch(d){}return!0}(r,!1)?"https:":"http:",Aa={},Ba=(Aa[1]="A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
Aa);var Ca={v:1,o:4,s:5,u:12},J={m:"40004006",l:"40004007"};function Da(){return{1:.5,4:.02,5:.001,12:.001}}function Ea(){var a=Fa,b=typeof a;if(("object"!=b||null==a)&&"function"!=b)return!1;for(var c in Ca)if(b=a[Ca[c]],"number"!==typeof b||0>b||1<b)return!1;return!0};function Ga(){var a=r.dcmads;if(null!=a.eids)return a.eids;var b=r.navigator;return b.connection&&b.connection.saveData?(a=va([J.m,J.l],a.expts[4]))?"4|"+a:"":""}function Ha(){if(!r.dcmads.uach){var a=ya();a&&a.then(function(b){var c=r.dcmads;a:{y=!0;try{var d=JSON.stringify(b.toJSON(),na);break a}finally{y=!1}d=void 0}c.uach=d})}};try{r.dcmads=r.dcmads||{};r.dcmads.startTime=(new Date).getTime();var Ia=r.dcmads,K=r.dcmads.version,L={loader:239};if(K)if(L.experiment=K.experiment,82==K.number||"p"==K.number)L.number=82;else if(82==K.number||"c"==K.number)L.number=82;if(!L.number){var Ja=va([82,82],0);L.experiment=!!Ja;L.number=Ja||82}Ia.version=L;var Ka=r.dcmads,La,Fa=r.dcmads.expts,M;M=void 0===M?Da:M;La=Ea()?Fa:M();Ka.expts=La;r.dcmads.eids=Ga();r.dcmads.ots=Ba;Ha();var Ma="4|"+J.l,Na=r.dcmads.version,Oa=Na.number,Pa="";Na.experiment&&
82==Oa&&(Pa="?rxp=82x82");var Qa="impl_v"+Oa+".js"+Pa,Ra=r.document,Sa=Ra.currentScript||Array.from(Ra.getElementsByTagName("script")).pop(),N=(0==(Sa&&Sa.src||"").indexOf("http:")?"http:":"https:")+"//www.googletagservices.com/dcm/"+Qa;if(r.dcmads.eids===Ma){var Ta=r.document,O,Ua=qa(),Va=Ua?Ua.createScriptURL(N):N;O=new H(Va,ra);var P,Q=Ta;Q=void 0===Q?document:Q;P=Q.createElement("script");P.src=O instanceof H&&O.constructor===H?O.g:"type_error:TrustedResourceUrl";var Wa,R,Xa=(P.ownerDocument&&
P.ownerDocument.defaultView||window).document,S=null===(R=Xa.querySelector)||void 0===R?void 0:R.call(Xa,"script[nonce]");(Wa=S?S.nonce||S.getAttribute("nonce")||"":"")&&P.setAttribute("nonce",Wa);var T=Ta.getElementsByTagName("script")[0];T&&T.parentNode&&T.parentNode.insertBefore(P,T)}else{var Ya=r.document,U,Za='<script src="'+N+'">\x3c/script>',$a=qa(),ab=$a?$a.createHTML(Za):Za;U=new I(ab,null,sa);Ya.write(U instanceof I&&U.constructor===I?U.g:"type_error:SafeHtml")}}catch(a){if(.01>Math.random()){var V=
"";try{var W,X=a.toString();a.name&&-1==X.indexOf(a.name)&&(X+=": "+a.name);a.message&&-1==X.indexOf(a.message)&&(X+=": "+a.message);if(a.stack){var Y=a.stack,Z=X;try{-1==Y.indexOf(Z)&&(Y=Z+"\n"+Y);for(var bb;Y!=bb;)bb=Y,Y=Y.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");X=Y.replace(/\n */g,"\n")}catch(b){X=Z}}W=X;W=W.substring(0,1024);V=encodeURIComponent(W)}catch(b){V="extr"}var cb=r.dcmads.eids,db=document.createElement("img");db.src=za+"//pagead2.googlesyndication.com/pagead/gen_204?id=dcmads-err&ver=239&context=554"+
((cb?"&eids="+cb:"")+"&msg="+V);(r.google_image_requests=r.google_image_requests||[]).push(db)}};}).call(this);
