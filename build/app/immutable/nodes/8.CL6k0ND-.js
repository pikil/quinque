import"../chunks/Bzak7iHL.js";import{o as nl,a as ph}from"../chunks/ClkjNZR1.js";import{w as wo,N as rl,p as ri,l as gh,E as sl,d as ft,r as it,t as Te,i as A,O as il,b3 as Ss,a as pt,b as si,h as Io,A as H,u as rt,at as An,f as fe,c as bt,y as Pt,Q as Qe,s as X,n as _h,e as Ps,z as ws,g as oe,b4 as yh}from"../chunks/Dk8wXFmE.js";import{p as ae,i as ve}from"../chunks/lD66Cjkr.js";import{s as Ut,c as jt,a as Ji,I as Oe,e as Fs,i as Bs,d as Li,r as Eh,f as vh,h as Th}from"../chunks/nZZduYxC.js";import{e as lt,M as br,r as Jt,g as Xt,p as vn}from"../chunks/DT1TdMkH.js";import{c as wh,a as Ih,b as Ah,d as Rh,e as Ch,f as bh,g as Sh,R as Ph}from"../chunks/DHuc6sm1.js";import{p as Vh}from"../chunks/CnDmhZTo.js";import{b as La,c as Dh,d as Nh,a as kh,e as Fa}from"../chunks/Cvt30HHx.js";import{l as Oh,n as Fr,r as xh,P as Ba,B as qn}from"../chunks/CtAy_Uys.js";import{b as Mh,g as Lh}from"../chunks/D_1hn2Pd.js";import{r as Fh,h as Bh}from"../chunks/BtE09huP.js";import{p as He}from"../chunks/BPqNSCY2.js";import{d as Jn,a as Ao}from"../chunks/BlcEEe38.js";import{c as ol}from"../chunks/Bv7FpS68.js";const Vs=()=>Math.floor(Math.random()*Object.keys(lt).length),Uh=r=>!r||!(r%2),Ds=r=>{switch(r){case lt.AXES:return Sh;case lt.DIAGONAL:return bh;case lt.RISING:return Ch;case lt.FALLING:return Rh;case lt.HORIZONTAL:return Ah;case lt.VERTICAL:return Ih;default:return wh}},Us=(r,t,e,n)=>{if(r[t]===void 0||r[t][e]===void 0)return 0;let s=5;const o=t-1,a=t+1;return(r[o]&&r[o][e]===n||r[a]&&r[a][e]===n)&&s--,(r[t][e+1]===n||r[t][e-1]===n)&&s--,s},al=r=>{const t=[];t.push(lt.SINGLE);for(let e=1;e<r;e++)t.push(Vs());return t},Nr=wo(lt.SINGLE),Tn=wo(lt.SINGLE),wn=wo(lt.SINGLE);var jh=bt('<div class="pattern-color1 svelte-d05d2i" aria-hidden="true"></div>'),qh=bt('<div class="pattern-color2 svelte-d05d2i" aria-hidden="true"></div>'),zh=bt('<div role="button" tabindex="0"><!></div>');function $h(r,t){ri(t,!0);const e=()=>Qe(Vh,"$preferences",s),n=()=>Qe(Nr,"$enteringMode",s),[s,o]=Io();let a=ae(t,"hoverCoords",3,null),u=ae(t,"disabled",3,!1),h=ae(t,"selected",3,!1),d=ae(t,"selectCandidate",3,!1),g=ae(t,"hoverColor",3,""),E=Pt(!1);const I=()=>{H(E,!0),setTimeout(()=>{H(E,!1)},600)},b=async()=>{t.onclick&&(t.onclick({rowIndex:t.rowIndex,colIndex:t.colIndex}),e().hapticFeedback&&navigator.vibrate&&navigator.vibrate(10))},N=()=>{t.onenter&&t.onenter({rowIndex:t.rowIndex,colIndex:t.colIndex})},x=()=>{t.onleave&&t.onleave({rowIndex:t.rowIndex,colIndex:t.colIndex})},k=m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),b())};let j=rt(()=>"h-3 w-3 opacity-50"+(d()==="color1"?" text-color1":" text-color2")),B=rt(()=>h()==="color1"?" bg-color1 sel-color1":h()==="color2"?" bg-color2 sel-color2":" bg-gray-600"),q=rt(()=>h()?"":g()==="color1"?" hover:bg-color1":g()==="color2"?" hover:bg-color2":" hover:bg-gray-400"),ht=rt(()=>"flex-1 aspect-square text-sm transition-colors duration-300 rounded-xs sm:rounded-md border border-gray-600 bubbly relative cursor-pointer outline-hidden flex flex-col justify-center items-center bg-opacity-80 hover:bg-opacity-100"+A(q)+A(B)+(h()||u()?" pointer-events-none":"")+(A(E)?" animate":"")),Z=rt(()=>Ds(n())),Y=rt(()=>a()&&t.rowIndex===a()[0]&&t.colIndex===a()[1]),w=rt(()=>`Grid cell row ${t.rowIndex+1} column ${t.colIndex+1}${h()?` selected ${h()}`:""}`);gh(()=>{h()&&sl().then(I)});var p=zh(),y=ft(p);{var T=m=>{var K=An(),ot=fe(K);{var It=Et=>{var at=jh();pt(Et,at)};ve(ot,Et=>{e().colorblindMode&&Et(It)})}pt(m,K)},_=m=>{var K=An(),ot=fe(K);{var It=Et=>{var at=qh();pt(Et,at)};ve(ot,Et=>{e().colorblindMode&&Et(It)})}pt(m,K)},v=m=>{var K=An(),ot=fe(K);{var It=at=>{Oe(at,{get name(){return A(Z)},class:"h-4 w-4 text-black"})},Et=at=>{var ct=An(),qt=fe(ct);{var Zt=ne=>{{let re=rt(()=>d()==="color1"?La:Dh);Oe(ne,{get name(){return A(re)},get class(){return A(j)}})}},pe=ne=>{Oe(ne,{get name(){return La},get class(){return A(j)}})};ve(qt,ne=>{e().colorblindMode?ne(Zt):ne(pe,-1)})}pt(at,ct)};ve(ot,at=>{A(Y)?at(It):d()&&at(Et,1)})}pt(m,K)};ve(y,m=>{h()==="color1"?m(T):h()==="color2"?m(_,1):m(v,-1)})}it(p),Te(()=>{Ut(p,1,jt(A(ht)),"svelte-d05d2i"),Ji(p,"aria-label",A(w)),Ji(p,"aria-pressed",h()!==!1)}),il("click",p,b),Ss("mouseenter",p,N),Ss("mouseleave",p,x),Ss("keypress",p,k),pt(r,p),si(),o()}rl(["click"]);var Gh=bt("<div></div>"),Kh=bt('<div><div class="transition-transform duration-500"></div></div>');function jn(r,t){const e="flex flex-col justify-center items-center text-xl";let n=ae(t,"digit",3,0),s=ae(t,"height",3,30),o=ae(t,"width",3,26),a=ae(t,"borderOffset",3,0),u=rt(()=>"width: "+(o()+a())+"px;height: "+(s()+a())+"px"),h=rt(()=>"overflow-hidden"+(t.class?" "+t.class:"")),d=rt(()=>"transform: translateY(-"+n()*(s()+a())+"px)");var g=Kh(),E=ft(g);Fs(E,20,()=>({length:2}),Bs,(I,b)=>{var N=An(),x=fe(N);Fs(x,16,()=>({length:10}),Bs,(k,j,B)=>{var q=Gh();Ut(q,1,jt(e)),q.textContent=B,Te(()=>Li(q,A(u))),pt(k,q)}),pt(I,N)}),it(E),it(g),Te(()=>{Ut(g,1,jt(A(h))),Li(g,A(u)),Li(E,A(d))}),pt(r,g)}var Hh=bt('<div><div><!> <div></div> <!> <div></div> <!></div> <div class="text-xs text-gray-500">vs</div> <div><!> <div></div> <!> <div></div> <!></div></div>');function Ua(r,t){let e=ae(t,"score1",3,0),n=ae(t,"score2",3,0),s=ae(t,"score1Class",3,""),o=ae(t,"score2Class",3,"");const a="border-opacity-30",u="flex flex-row border-2 rounded-md "+a,h="border h-[30px] "+a,d=u+" border-color1",g=u+" border-color2",E=h+" border-color1",I=h+" border-color2",b=K=>{if(K<=0)return[0,0,0];if(K>=1e3)return[9,9,9];const ot=K%10;K=K/10|0;const It=K%10;return K=K/10|0,[K%10,It,ot]};let N=rt(()=>b(e())),x=rt(()=>b(n())),k=rt(()=>"flex flex-row gap-3 items-center justify-center"+(t.class?" "+t.class:""));var j=Hh(),B=ft(j);Ut(B,1,jt(d));var q=ft(B);jn(q,{get digit(){return A(N)[0]},get class(){return s()}});var ht=X(q,2);Ut(ht,1,jt(E));var Z=X(ht,2);jn(Z,{get digit(){return A(N)[1]},get class(){return s()}});var Y=X(Z,2);Ut(Y,1,jt(E));var w=X(Y,2);jn(w,{get digit(){return A(N)[2]},get class(){return s()}}),it(B);var p=X(B,4);Ut(p,1,jt(g));var y=ft(p);jn(y,{get digit(){return A(x)[0]},get class(){return o()}});var T=X(y,2);Ut(T,1,jt(I));var _=X(T,2);jn(_,{get digit(){return A(x)[1]},get class(){return o()}});var v=X(_,2);Ut(v,1,jt(I));var m=X(v,2);jn(m,{get digit(){return A(x)[2]},get class(){return o()}}),it(p),it(j),Te(()=>Ut(j,1,jt(A(k)))),pt(r,j)}var Wh=bt(`<div class="flex flex-col gap-6"><p class="text-center text-faded">The current sequence is:</p> <div class="flex flex-col items-center justify-center gap-2"><p>Current pattern and colour</p> <!></div> <div class="flex flex-col items-center justify-center gap-2"><p class="text-faded">The pattern to follow</p> <!></div> <div class="flex flex-col items-center justify-center gap-2"><p class="text-faded">The pattern after that</p> <!></div> <div class="text-faded text-sm"><p>* This screen changes with every player's turn;</p> <p>** Refer to <a target="_blank">game rules</a> for more details;</p></div></div>`),Qh=bt('<div role="button" tabindex="0" title="Current play sequence"><!> <!> <!></div> <!>',1);function Yh(r,t){ri(t,!0);const e=()=>Qe(Nr,"$enteringMode",o),n=()=>Qe(Tn,"$enteringMode1",o),s=()=>Qe(wn,"$enteringMode2",o),[o,a]=Io(),u="h-4 w-4",h=u+" text-faded",d="h-8 w-8",g=d+" text-faded";let E=Pt(!1);const I=()=>{H(E,!0)},b=()=>{H(E,!1)};let N=rt(()=>Ds(e())),x=rt(()=>Ds(n())),k=rt(()=>Ds(s())),j=rt(()=>"flex flex-row items-center justify-center gap-6"+(t.class?" "+t.class:"")),B=rt(()=>u+" "+t.color),q=rt(()=>d+" "+t.color);var ht=Qh(),Z=fe(ht),Y=ft(Z);Oe(Y,{get name(){return A(N)},get class(){return A(B)}});var w=X(Y,2);Oe(w,{get name(){return A(x)},class:h});var p=X(w,2);Oe(p,{get name(){return A(k)},class:h}),it(Z);var y=X(Z,2);br(y,{get showing(){return A(E)},hideOk:!0,ondismiss:b,children:(T,_)=>{var v=Wh(),m=X(ft(v),2),K=X(ft(m),2);Oe(K,{get name(){return A(N)},get class(){return A(q)}}),it(m);var ot=X(m,2),It=X(ft(ot),2);Oe(It,{get name(){return A(x)},class:g}),it(ot);var Et=X(ot,2),at=X(ft(Et),2);Oe(at,{get name(){return A(k)},class:g}),it(Et);var ct=X(Et,2),qt=X(ft(ct),2),Zt=X(ft(qt));_h(),it(qt),it(ct),it(v),Te(()=>{Ji(Zt,"href",Fh),Ut(Zt,1,jt(Oh))}),pt(T,v)},$$slots:{default:!0}}),Te(()=>Ut(Z,1,jt(A(j)))),il("click",Z,I),Ss("keypress",Z,function(...T){var _;(_=Fr)==null||_.apply(this,T)}),pt(r,ht),si(),a()}rl(["click"]);let js=null;const Jh=()=>{js||(js=(window.navigator.userAgent||window.navigator.vendor||window.opera||"").toLowerCase())},Fi={},Xh=(r,t)=>(Fi[r]===void 0&&(Fi[r]=t()),Fi[r]),Zh={is:{get webMobile(){return js===null&&Jh(),Xh("webmob",()=>/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|kindle|silk|mobile/i.test(js||""))}}},ja="color2",td=(r,t,e,n)=>{let s=Us(e,r,t,ja),o=n.length;for(;o--;){const[a,u]=n[o];e[a]&&e[a][u]===!1&&(s+=Us(e,a,u,ja))}return s};class ed{constructor(t){this.selections=t,this.thinking=!1}cancelActiveActions(){this.requestId=Date.now()}getBenefitSums(t){const e=[];for(let n=0;n<this.selections.length;n++){const s=this.selections[n];for(let o=0;o<s.length;o++)s[o]||e.push([n,o,td(n,o,this.selections,t(n,o))])}return e.sort(([,,n],[,,s])=>s-n),e}selectSingleBlock(){const t=this.getBenefitSums(()=>[]),e=Math.floor(Math.random()*t.length);return[t[e][0],t[e][1]]}selectInAxes(){const t=this.getBenefitSums((e,n)=>[[e-1,n],[e+1,n],[e,n-1],[e,n+1]]);return[t[0][0],t[0][1]]}selectInDiagonals(){const t=this.getBenefitSums((e,n)=>[[e+1,n+1],[e+1,n-1],[e-1,n-1],[e-1,n+1]]);return[t[0][0],t[0][1]]}selectInHorizontal(){const t=this.getBenefitSums((e,n)=>[[e,n+1],[e,n+2],[e,n-1],[e,n-2]]);return[t[0][0],t[0][1]]}selectInVertical(){const t=this.getBenefitSums((e,n)=>[[e+1,n],[e+2,n],[e-1,n],[e-2,n]]);return[t[0][0],t[0][1]]}selectInRisingDiagonal(){const t=this.getBenefitSums((e,n)=>[[e-1,n+1],[e-2,n+2],[e+1,n-1],[e+2,n-2]]);return[t[0][0],t[0][1]]}selectInFallingDiagonal(){const t=this.getBenefitSums((e,n)=>[[e+1,n+1],[e+2,n+2],[e-1,n-1],[e-2,n-2]]);return[t[0][0],t[0][1]]}selectBlock(t){const e=Date.now();return this.requestId=e,new Promise(n=>{setTimeout(()=>{if(this.requestId!==e){n(null);return}switch(t){case lt.AXES:n(this.selectInAxes());break;case lt.DIAGONAL:n(this.selectInDiagonals());break;case lt.HORIZONTAL:n(this.selectInHorizontal());break;case lt.VERTICAL:n(this.selectInVertical());break;case lt.FALLING:n(this.selectInFallingDiagonal());break;case lt.RISING:n(this.selectInRisingDiagonal());break;default:n(this.selectSingleBlock());break}},1500)})}}const Xi=(...r)=>{console.warn("WARN:",...r)},nd=(...r)=>{console.log("INFO:",...r)},rd=()=>{};var qa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},sd=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const s=r[e++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const o=r[e++];t[n++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=r[e++],a=r[e++],u=r[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[n++]=String.fromCharCode(55296+(h>>10)),t[n++]=String.fromCharCode(56320+(h&1023))}else{const o=r[e++],a=r[e++];t[n++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},ll={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const o=r[s],a=s+1<r.length,u=a?r[s+1]:0,h=s+2<r.length,d=h?r[s+2]:0,g=o>>2,E=(o&3)<<4|u>>4;let I=(u&15)<<2|d>>6,b=d&63;h||(b=64,a||(I=64)),n.push(e[g],e[E],e[I],e[b])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(cl(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):sd(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const o=e[r.charAt(s++)],u=s<r.length?e[r.charAt(s)]:0;++s;const d=s<r.length?e[r.charAt(s)]:64;++s;const E=s<r.length?e[r.charAt(s)]:64;if(++s,o==null||u==null||d==null||E==null)throw new id;const I=o<<2|u>>4;if(n.push(I),d!==64){const b=u<<4&240|d>>2;if(n.push(b),E!==64){const N=d<<6&192|E;n.push(N)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class id extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const od=function(r){const t=cl(r);return ll.encodeByteArray(t,!0)},qs=function(r){return od(r).replace(/\./g,"")},ad=function(r){try{return ll.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=()=>cd().__FIREBASE_DEFAULTS__,ud=()=>{if(typeof process>"u"||typeof qa>"u")return;const r=qa.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},hd=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&ad(r[1]);return t&&JSON.parse(t)},Ro=()=>{try{return rd()||ld()||ud()||hd()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},dd=r=>{var t,e;return(e=(t=Ro())==null?void 0:t.emulatorHosts)==null?void 0:e[r]},fd=r=>{const t=dd(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},ul=()=>{var r;return(r=Ro())==null?void 0:r.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function pd(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",s=r.iat||0,o=r.sub||r.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...r};return[qs(JSON.stringify(e)),qs(JSON.stringify(a)),""].join(".")}const kr={};function _d(){const r={prod:[],emulator:[]};for(const t of Object.keys(kr))kr[t]?r.emulator.push(t):r.prod.push(t);return r}function yd(r){let t=document.getElementById(r),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),e=!0),{created:e,element:t}}let za=!1;function Ed(r,t){if(typeof window>"u"||typeof document>"u"||!Co(window.location.host)||kr[r]===t||kr[r]||za)return;kr[r]=t;function e(I){return`__firebase__banner__${I}`}const n="__firebase__banner",o=_d().prod.length>0;function a(){const I=document.getElementById(n);I&&I.remove()}function u(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function h(I,b){I.setAttribute("width","24"),I.setAttribute("id",b),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function d(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{za=!0,a()},I}function g(I,b){I.setAttribute("id",b),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function E(){const I=yd(n),b=e("text"),N=document.getElementById(b)||document.createElement("span"),x=e("learnmore"),k=document.getElementById(x)||document.createElement("a"),j=e("preprendIcon"),B=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const q=I.element;u(q),g(k,x);const ht=d();h(B,j),q.append(B,N,k,ht),document.body.appendChild(q)}o?(N.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Td(){var t;const r=(t=Ro())==null?void 0:t.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wd(){return!Td()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Id(){try{return typeof indexedDB=="object"}catch{return!1}}function Ad(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="FirebaseError";class ir extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Rd,Object.setPrototypeOf(this,ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hl.prototype.create)}}class hl{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Cd(o,n):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new ir(s,u,n)}}function Cd(r,t){return r.replace(bd,(e,n)=>{const s=t[n];return s!=null?String(s):`<${n}?>`})}const bd=/\{\$([^}]+)}/g;function Br(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const s of e){if(!n.includes(s))return!1;const o=r[s],a=t[s];if($a(o)&&$a(a)){if(!Br(o,a))return!1}else if(o!==a)return!1}for(const s of n)if(!e.includes(s))return!1;return!0}function $a(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(r){return r&&r._delegate?r._delegate:r}class Ur{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new md;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),n=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Vd(t))try{this.getOrInitializeService({instanceIdentifier:In})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});n.resolve(o)}catch{}}}}clearInstance(t=In){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=In){return this.instances.has(t)}getOptions(t=In){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);n===u&&a.resolve(s)}return s}onInit(t,e){const n=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(n)??new Set;s.add(t),this.onInitCallbacks.set(n,s);const o=this.instances.get(n);return o&&t(o,n),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Pd(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=In){return this.component?this.component.multipleInstances?t:In:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pd(r){return r===In?void 0:r}function Vd(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Sd(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(st||(st={}));const Nd={debug:st.DEBUG,verbose:st.VERBOSE,info:st.INFO,warn:st.WARN,error:st.ERROR,silent:st.SILENT},kd=st.INFO,Od={[st.DEBUG]:"log",[st.VERBOSE]:"log",[st.INFO]:"info",[st.WARN]:"warn",[st.ERROR]:"error"},xd=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),s=Od[t];if(s)console[s](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class dl{constructor(t){this.name=t,this._logLevel=kd,this._logHandler=xd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in st))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Nd[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,st.DEBUG,...t),this._logHandler(this,st.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,st.VERBOSE,...t),this._logHandler(this,st.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,st.INFO,...t),this._logHandler(this,st.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,st.WARN,...t),this._logHandler(this,st.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,st.ERROR,...t),this._logHandler(this,st.ERROR,...t)}}const Md=(r,t)=>t.some(e=>r instanceof e);let Ga,Ka;function Ld(){return Ga||(Ga=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fd(){return Ka||(Ka=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fl=new WeakMap,Zi=new WeakMap,ml=new WeakMap,Bi=new WeakMap,bo=new WeakMap;function Bd(r){const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("success",o),r.removeEventListener("error",a)},o=()=>{e(Ye(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",o),r.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&fl.set(e,r)}).catch(()=>{}),bo.set(t,r),t}function Ud(r){if(Zi.has(r))return;const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("complete",o),r.removeEventListener("error",a),r.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",o),r.addEventListener("error",a),r.addEventListener("abort",a)});Zi.set(r,t)}let to={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return Zi.get(r);if(t==="objectStoreNames")return r.objectStoreNames||ml.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ye(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function jd(r){to=r(to)}function qd(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(Ui(this),t,...e);return ml.set(n,t.sort?t.sort():[t]),Ye(n)}:Fd().includes(r)?function(...t){return r.apply(Ui(this),t),Ye(fl.get(this))}:function(...t){return Ye(r.apply(Ui(this),t))}}function zd(r){return typeof r=="function"?qd(r):(r instanceof IDBTransaction&&Ud(r),Md(r,Ld())?new Proxy(r,to):r)}function Ye(r){if(r instanceof IDBRequest)return Bd(r);if(Bi.has(r))return Bi.get(r);const t=zd(r);return t!==r&&(Bi.set(r,t),bo.set(t,r)),t}const Ui=r=>bo.get(r);function $d(r,t,{blocked:e,upgrade:n,blocking:s,terminated:o}={}){const a=indexedDB.open(r,t),u=Ye(a);return n&&a.addEventListener("upgradeneeded",h=>{n(Ye(a.result),h.oldVersion,h.newVersion,Ye(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const Gd=["get","getKey","getAll","getAllKeys","count"],Kd=["put","add","delete","clear"],ji=new Map;function Ha(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(ji.get(t))return ji.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,s=Kd.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Gd.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return n&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&h.done]))[0]};return ji.set(t,o),o}jd(r=>({...r,get:(t,e,n)=>Ha(t,e)||r.get(t,e,n),has:(t,e)=>!!Ha(t,e)||r.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Wd(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function Wd(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const eo="@firebase/app",Wa="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=new dl("@firebase/app"),Qd="@firebase/app-compat",Yd="@firebase/analytics-compat",Jd="@firebase/analytics",Xd="@firebase/app-check-compat",Zd="@firebase/app-check",tf="@firebase/auth",ef="@firebase/auth-compat",nf="@firebase/database",rf="@firebase/data-connect",sf="@firebase/database-compat",of="@firebase/functions",af="@firebase/functions-compat",cf="@firebase/installations",lf="@firebase/installations-compat",uf="@firebase/messaging",hf="@firebase/messaging-compat",df="@firebase/performance",ff="@firebase/performance-compat",mf="@firebase/remote-config",pf="@firebase/remote-config-compat",gf="@firebase/storage",_f="@firebase/storage-compat",yf="@firebase/firestore",Ef="@firebase/ai",vf="@firebase/firestore-compat",Tf="firebase",wf="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no="[DEFAULT]",If={[eo]:"fire-core",[Qd]:"fire-core-compat",[Jd]:"fire-analytics",[Yd]:"fire-analytics-compat",[Zd]:"fire-app-check",[Xd]:"fire-app-check-compat",[tf]:"fire-auth",[ef]:"fire-auth-compat",[nf]:"fire-rtdb",[rf]:"fire-data-connect",[sf]:"fire-rtdb-compat",[of]:"fire-fn",[af]:"fire-fn-compat",[cf]:"fire-iid",[lf]:"fire-iid-compat",[uf]:"fire-fcm",[hf]:"fire-fcm-compat",[df]:"fire-perf",[ff]:"fire-perf-compat",[mf]:"fire-rc",[pf]:"fire-rc-compat",[gf]:"fire-gcs",[_f]:"fire-gcs-compat",[yf]:"fire-fst",[vf]:"fire-fst-compat",[Ef]:"fire-vertex","fire-js":"fire-js",[Tf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new Map,Af=new Map,ro=new Map;function Qa(r,t){try{r.container.addComponent(t)}catch(e){xe.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function $s(r){const t=r.name;if(ro.has(t))return xe.debug(`There were multiple attempts to register component ${t}.`),!1;ro.set(t,r);for(const e of zs.values())Qa(e,r);for(const e of Af.values())Qa(e,r);return!0}function Rf(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}function Cf(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Je=new hl("app","Firebase",bf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Je.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=wf;function pl(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n={name:no,automaticDataCollectionEnabled:!0,...t},s=n.name;if(typeof s!="string"||!s)throw Je.create("bad-app-name",{appName:String(s)});if(e||(e=ul()),!e)throw Je.create("no-options");const o=zs.get(s);if(o){if(Br(e,o.options)&&Br(n,o.config))return o;throw Je.create("duplicate-app",{appName:s})}const a=new Dd(s);for(const h of ro.values())a.addComponent(h);const u=new Sf(e,n,a);return zs.set(s,u),u}function Vf(r=no){const t=zs.get(r);if(!t&&r===no&&ul())return pl();if(!t)throw Je.create("no-app",{appName:r});return t}function Hn(r,t,e){let n=If[r]??r;e&&(n+=`-${e}`);const s=n.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${n}" with version "${t}":`];s&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),xe.warn(a.join(" "));return}$s(new Ur(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="firebase-heartbeat-database",Nf=1,jr="firebase-heartbeat-store";let qi=null;function gl(){return qi||(qi=$d(Df,Nf,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(jr)}catch(e){console.warn(e)}}}}).catch(r=>{throw Je.create("idb-open",{originalErrorMessage:r.message})})),qi}async function kf(r){try{const e=(await gl()).transaction(jr),n=await e.objectStore(jr).get(_l(r));return await e.done,n}catch(t){if(t instanceof ir)xe.warn(t.message);else{const e=Je.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});xe.warn(e.message)}}}async function Ya(r,t){try{const n=(await gl()).transaction(jr,"readwrite");await n.objectStore(jr).put(t,_l(r)),await n.done}catch(e){if(e instanceof ir)xe.warn(e.message);else{const n=Je.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});xe.warn(n.message)}}}function _l(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of=1024,xf=30;class Mf{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ff(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ja();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>xf){const a=Bf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){xe.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ja(),{heartbeatsToSend:n,unsentEntries:s}=Lf(this._heartbeatsCache.heartbeats),o=qs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return xe.warn(e),""}}}function Ja(){return new Date().toISOString().substring(0,10)}function Lf(r,t=Of){const e=[];let n=r.slice();for(const s of r){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Xa(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Xa(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class Ff{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Id()?Ad().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await kf(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return Ya(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return Ya(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}else return}}function Xa(r){return qs(JSON.stringify({version:2,heartbeats:r})).length}function Bf(r){if(r.length===0)return-1;let t=0,e=r[0].date;for(let n=1;n<r.length;n++)r[n].date<e&&(e=r[n].date,t=n);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(r){$s(new Ur("platform-logger",t=>new Hd(t),"PRIVATE")),$s(new Ur("heartbeat",t=>new Mf(t),"PRIVATE")),Hn(eo,Wa,r),Hn(eo,Wa,"esm2020"),Hn("fire-js","")}Uf("");var Za=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xe,yl;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,p){function y(){}y.prototype=p.prototype,w.F=p.prototype,w.prototype=new y,w.prototype.constructor=w,w.D=function(T,_,v){for(var m=Array(arguments.length-2),K=2;K<arguments.length;K++)m[K-2]=arguments[K];return p.prototype[_].apply(T,m)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(n,e),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,p,y){y||(y=0);const T=Array(16);if(typeof p=="string")for(var _=0;_<16;++_)T[_]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(_=0;_<16;++_)T[_]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=w.g[0],y=w.g[1],_=w.g[2];let v=w.g[3],m;m=p+(v^y&(_^v))+T[0]+3614090360&4294967295,p=y+(m<<7&4294967295|m>>>25),m=v+(_^p&(y^_))+T[1]+3905402710&4294967295,v=p+(m<<12&4294967295|m>>>20),m=_+(y^v&(p^y))+T[2]+606105819&4294967295,_=v+(m<<17&4294967295|m>>>15),m=y+(p^_&(v^p))+T[3]+3250441966&4294967295,y=_+(m<<22&4294967295|m>>>10),m=p+(v^y&(_^v))+T[4]+4118548399&4294967295,p=y+(m<<7&4294967295|m>>>25),m=v+(_^p&(y^_))+T[5]+1200080426&4294967295,v=p+(m<<12&4294967295|m>>>20),m=_+(y^v&(p^y))+T[6]+2821735955&4294967295,_=v+(m<<17&4294967295|m>>>15),m=y+(p^_&(v^p))+T[7]+4249261313&4294967295,y=_+(m<<22&4294967295|m>>>10),m=p+(v^y&(_^v))+T[8]+1770035416&4294967295,p=y+(m<<7&4294967295|m>>>25),m=v+(_^p&(y^_))+T[9]+2336552879&4294967295,v=p+(m<<12&4294967295|m>>>20),m=_+(y^v&(p^y))+T[10]+4294925233&4294967295,_=v+(m<<17&4294967295|m>>>15),m=y+(p^_&(v^p))+T[11]+2304563134&4294967295,y=_+(m<<22&4294967295|m>>>10),m=p+(v^y&(_^v))+T[12]+1804603682&4294967295,p=y+(m<<7&4294967295|m>>>25),m=v+(_^p&(y^_))+T[13]+4254626195&4294967295,v=p+(m<<12&4294967295|m>>>20),m=_+(y^v&(p^y))+T[14]+2792965006&4294967295,_=v+(m<<17&4294967295|m>>>15),m=y+(p^_&(v^p))+T[15]+1236535329&4294967295,y=_+(m<<22&4294967295|m>>>10),m=p+(_^v&(y^_))+T[1]+4129170786&4294967295,p=y+(m<<5&4294967295|m>>>27),m=v+(y^_&(p^y))+T[6]+3225465664&4294967295,v=p+(m<<9&4294967295|m>>>23),m=_+(p^y&(v^p))+T[11]+643717713&4294967295,_=v+(m<<14&4294967295|m>>>18),m=y+(v^p&(_^v))+T[0]+3921069994&4294967295,y=_+(m<<20&4294967295|m>>>12),m=p+(_^v&(y^_))+T[5]+3593408605&4294967295,p=y+(m<<5&4294967295|m>>>27),m=v+(y^_&(p^y))+T[10]+38016083&4294967295,v=p+(m<<9&4294967295|m>>>23),m=_+(p^y&(v^p))+T[15]+3634488961&4294967295,_=v+(m<<14&4294967295|m>>>18),m=y+(v^p&(_^v))+T[4]+3889429448&4294967295,y=_+(m<<20&4294967295|m>>>12),m=p+(_^v&(y^_))+T[9]+568446438&4294967295,p=y+(m<<5&4294967295|m>>>27),m=v+(y^_&(p^y))+T[14]+3275163606&4294967295,v=p+(m<<9&4294967295|m>>>23),m=_+(p^y&(v^p))+T[3]+4107603335&4294967295,_=v+(m<<14&4294967295|m>>>18),m=y+(v^p&(_^v))+T[8]+1163531501&4294967295,y=_+(m<<20&4294967295|m>>>12),m=p+(_^v&(y^_))+T[13]+2850285829&4294967295,p=y+(m<<5&4294967295|m>>>27),m=v+(y^_&(p^y))+T[2]+4243563512&4294967295,v=p+(m<<9&4294967295|m>>>23),m=_+(p^y&(v^p))+T[7]+1735328473&4294967295,_=v+(m<<14&4294967295|m>>>18),m=y+(v^p&(_^v))+T[12]+2368359562&4294967295,y=_+(m<<20&4294967295|m>>>12),m=p+(y^_^v)+T[5]+4294588738&4294967295,p=y+(m<<4&4294967295|m>>>28),m=v+(p^y^_)+T[8]+2272392833&4294967295,v=p+(m<<11&4294967295|m>>>21),m=_+(v^p^y)+T[11]+1839030562&4294967295,_=v+(m<<16&4294967295|m>>>16),m=y+(_^v^p)+T[14]+4259657740&4294967295,y=_+(m<<23&4294967295|m>>>9),m=p+(y^_^v)+T[1]+2763975236&4294967295,p=y+(m<<4&4294967295|m>>>28),m=v+(p^y^_)+T[4]+1272893353&4294967295,v=p+(m<<11&4294967295|m>>>21),m=_+(v^p^y)+T[7]+4139469664&4294967295,_=v+(m<<16&4294967295|m>>>16),m=y+(_^v^p)+T[10]+3200236656&4294967295,y=_+(m<<23&4294967295|m>>>9),m=p+(y^_^v)+T[13]+681279174&4294967295,p=y+(m<<4&4294967295|m>>>28),m=v+(p^y^_)+T[0]+3936430074&4294967295,v=p+(m<<11&4294967295|m>>>21),m=_+(v^p^y)+T[3]+3572445317&4294967295,_=v+(m<<16&4294967295|m>>>16),m=y+(_^v^p)+T[6]+76029189&4294967295,y=_+(m<<23&4294967295|m>>>9),m=p+(y^_^v)+T[9]+3654602809&4294967295,p=y+(m<<4&4294967295|m>>>28),m=v+(p^y^_)+T[12]+3873151461&4294967295,v=p+(m<<11&4294967295|m>>>21),m=_+(v^p^y)+T[15]+530742520&4294967295,_=v+(m<<16&4294967295|m>>>16),m=y+(_^v^p)+T[2]+3299628645&4294967295,y=_+(m<<23&4294967295|m>>>9),m=p+(_^(y|~v))+T[0]+4096336452&4294967295,p=y+(m<<6&4294967295|m>>>26),m=v+(y^(p|~_))+T[7]+1126891415&4294967295,v=p+(m<<10&4294967295|m>>>22),m=_+(p^(v|~y))+T[14]+2878612391&4294967295,_=v+(m<<15&4294967295|m>>>17),m=y+(v^(_|~p))+T[5]+4237533241&4294967295,y=_+(m<<21&4294967295|m>>>11),m=p+(_^(y|~v))+T[12]+1700485571&4294967295,p=y+(m<<6&4294967295|m>>>26),m=v+(y^(p|~_))+T[3]+2399980690&4294967295,v=p+(m<<10&4294967295|m>>>22),m=_+(p^(v|~y))+T[10]+4293915773&4294967295,_=v+(m<<15&4294967295|m>>>17),m=y+(v^(_|~p))+T[1]+2240044497&4294967295,y=_+(m<<21&4294967295|m>>>11),m=p+(_^(y|~v))+T[8]+1873313359&4294967295,p=y+(m<<6&4294967295|m>>>26),m=v+(y^(p|~_))+T[15]+4264355552&4294967295,v=p+(m<<10&4294967295|m>>>22),m=_+(p^(v|~y))+T[6]+2734768916&4294967295,_=v+(m<<15&4294967295|m>>>17),m=y+(v^(_|~p))+T[13]+1309151649&4294967295,y=_+(m<<21&4294967295|m>>>11),m=p+(_^(y|~v))+T[4]+4149444226&4294967295,p=y+(m<<6&4294967295|m>>>26),m=v+(y^(p|~_))+T[11]+3174756917&4294967295,v=p+(m<<10&4294967295|m>>>22),m=_+(p^(v|~y))+T[2]+718787259&4294967295,_=v+(m<<15&4294967295|m>>>17),m=y+(v^(_|~p))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+p&4294967295,w.g[1]=w.g[1]+(_+(m<<21&4294967295|m>>>11))&4294967295,w.g[2]=w.g[2]+_&4294967295,w.g[3]=w.g[3]+v&4294967295}n.prototype.v=function(w,p){p===void 0&&(p=w.length);const y=p-this.blockSize,T=this.C;let _=this.h,v=0;for(;v<p;){if(_==0)for(;v<=y;)s(this,w,v),v+=this.blockSize;if(typeof w=="string"){for(;v<p;)if(T[_++]=w.charCodeAt(v++),_==this.blockSize){s(this,T),_=0;break}}else for(;v<p;)if(T[_++]=w[v++],_==this.blockSize){s(this,T),_=0;break}}this.h=_,this.o+=p},n.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var p=1;p<w.length-8;++p)w[p]=0;p=this.o*8;for(var y=w.length-8;y<w.length;++y)w[y]=p&255,p/=256;for(this.v(w),w=Array(16),p=0,y=0;y<4;++y)for(let T=0;T<32;T+=8)w[p++]=this.g[y]>>>T&255;return w};function o(w,p){var y=u;return Object.prototype.hasOwnProperty.call(y,w)?y[w]:y[w]=p(w)}function a(w,p){this.h=p;const y=[];let T=!0;for(let _=w.length-1;_>=0;_--){const v=w[_]|0;T&&v==p||(y[_]=v,T=!1)}this.g=y}var u={};function h(w){return-128<=w&&w<128?o(w,function(p){return new a([p|0],p<0?-1:0)}):new a([w|0],w<0?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return E;if(w<0)return k(d(-w));const p=[];let y=1;for(let T=0;w>=y;T++)p[T]=w/y|0,y*=4294967296;return new a(p,0)}function g(w,p){if(w.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(w.charAt(0)=="-")return k(g(w.substring(1),p));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(p,8));let T=E;for(let v=0;v<w.length;v+=8){var _=Math.min(8,w.length-v);const m=parseInt(w.substring(v,v+_),p);_<8?(_=d(Math.pow(p,_)),T=T.j(_).add(d(m))):(T=T.j(y),T=T.add(d(m)))}return T}var E=h(0),I=h(1),b=h(16777216);r=a.prototype,r.m=function(){if(x(this))return-k(this).m();let w=0,p=1;for(let y=0;y<this.g.length;y++){const T=this.i(y);w+=(T>=0?T:4294967296+T)*p,p*=4294967296}return w},r.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(N(this))return"0";if(x(this))return"-"+k(this).toString(w);const p=d(Math.pow(w,6));var y=this;let T="";for(;;){const _=ht(y,p).g;y=j(y,_.j(p));let v=((y.g.length>0?y.g[0]:y.h)>>>0).toString(w);if(y=_,N(y))return v+T;for(;v.length<6;)v="0"+v;T=v+T}},r.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function N(w){if(w.h!=0)return!1;for(let p=0;p<w.g.length;p++)if(w.g[p]!=0)return!1;return!0}function x(w){return w.h==-1}r.l=function(w){return w=j(this,w),x(w)?-1:N(w)?0:1};function k(w){const p=w.g.length,y=[];for(let T=0;T<p;T++)y[T]=~w.g[T];return new a(y,~w.h).add(I)}r.abs=function(){return x(this)?k(this):this},r.add=function(w){const p=Math.max(this.g.length,w.g.length),y=[];let T=0;for(let _=0;_<=p;_++){let v=T+(this.i(_)&65535)+(w.i(_)&65535),m=(v>>>16)+(this.i(_)>>>16)+(w.i(_)>>>16);T=m>>>16,v&=65535,m&=65535,y[_]=m<<16|v}return new a(y,y[y.length-1]&-2147483648?-1:0)};function j(w,p){return w.add(k(p))}r.j=function(w){if(N(this)||N(w))return E;if(x(this))return x(w)?k(this).j(k(w)):k(k(this).j(w));if(x(w))return k(this.j(k(w)));if(this.l(b)<0&&w.l(b)<0)return d(this.m()*w.m());const p=this.g.length+w.g.length,y=[];for(var T=0;T<2*p;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(let _=0;_<w.g.length;_++){const v=this.i(T)>>>16,m=this.i(T)&65535,K=w.i(_)>>>16,ot=w.i(_)&65535;y[2*T+2*_]+=m*ot,B(y,2*T+2*_),y[2*T+2*_+1]+=v*ot,B(y,2*T+2*_+1),y[2*T+2*_+1]+=m*K,B(y,2*T+2*_+1),y[2*T+2*_+2]+=v*K,B(y,2*T+2*_+2)}for(w=0;w<p;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=p;w<2*p;w++)y[w]=0;return new a(y,0)};function B(w,p){for(;(w[p]&65535)!=w[p];)w[p+1]+=w[p]>>>16,w[p]&=65535,p++}function q(w,p){this.g=w,this.h=p}function ht(w,p){if(N(p))throw Error("division by zero");if(N(w))return new q(E,E);if(x(w))return p=ht(k(w),p),new q(k(p.g),k(p.h));if(x(p))return p=ht(w,k(p)),new q(k(p.g),p.h);if(w.g.length>30){if(x(w)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var y=I,T=p;T.l(w)<=0;)y=Z(y),T=Z(T);var _=Y(y,1),v=Y(T,1);for(T=Y(T,2),y=Y(y,2);!N(T);){var m=v.add(T);m.l(w)<=0&&(_=_.add(y),v=m),T=Y(T,1),y=Y(y,1)}return p=j(w,_.j(p)),new q(_,p)}for(_=E;w.l(p)>=0;){for(y=Math.max(1,Math.floor(w.m()/p.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),v=d(y),m=v.j(p);x(m)||m.l(w)>0;)y-=T,v=d(y),m=v.j(p);N(v)&&(v=I),_=_.add(v),w=j(w,m)}return new q(_,w)}r.B=function(w){return ht(this,w).h},r.and=function(w){const p=Math.max(this.g.length,w.g.length),y=[];for(let T=0;T<p;T++)y[T]=this.i(T)&w.i(T);return new a(y,this.h&w.h)},r.or=function(w){const p=Math.max(this.g.length,w.g.length),y=[];for(let T=0;T<p;T++)y[T]=this.i(T)|w.i(T);return new a(y,this.h|w.h)},r.xor=function(w){const p=Math.max(this.g.length,w.g.length),y=[];for(let T=0;T<p;T++)y[T]=this.i(T)^w.i(T);return new a(y,this.h^w.h)};function Z(w){const p=w.g.length+1,y=[];for(let T=0;T<p;T++)y[T]=w.i(T)<<1|w.i(T-1)>>>31;return new a(y,w.h)}function Y(w,p){const y=p>>5;p%=32;const T=w.g.length-y,_=[];for(let v=0;v<T;v++)_[v]=p>0?w.i(v+y)>>>p|w.i(v+y+1)<<32-p:w.i(v+y);return new a(_,w.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,yl=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=g,Xe=a}).apply(typeof Za<"u"?Za:typeof self<"u"?self:typeof window<"u"?window:{});var Is=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var El,Sr,vl,Ns,so,Tl,wl,Il;(function(){var r,t=Object.defineProperty;function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Is=="object"&&Is];for(var c=0;c<i.length;++c){var l=i[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function s(i,c){if(c)t:{var l=n;i=i.split(".");for(var f=0;f<i.length-1;f++){var R=i[f];if(!(R in l))break t;l=l[R]}i=i[i.length-1],f=l[i],c=c(f),c!=f&&c!=null&&t(l,i,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(c){var l=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&l.push([f,c[f]]);return l}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function h(i,c,l){return i.call.apply(i.bind,arguments)}function d(i,c,l){return d=h,d.apply(null,arguments)}function g(i,c){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function E(i,c){function l(){}l.prototype=c.prototype,i.Z=c.prototype,i.prototype=new l,i.prototype.constructor=i,i.Ob=function(f,R,C){for(var O=Array(arguments.length-2),J=2;J<arguments.length;J++)O[J-2]=arguments[J];return c.prototype[R].apply(f,O)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function b(i){const c=i.length;if(c>0){const l=Array(c);for(let f=0;f<c;f++)l[f]=i[f];return l}return[]}function N(i,c){for(let f=1;f<arguments.length;f++){const R=arguments[f];var l=typeof R;if(l=l!="object"?l:R?Array.isArray(R)?"array":l:"null",l=="array"||l=="object"&&typeof R.length=="number"){l=i.length||0;const C=R.length||0;i.length=l+C;for(let O=0;O<C;O++)i[l+O]=R[O]}else i.push(R)}}class x{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function k(i){a.setTimeout(()=>{throw i},0)}function j(){var i=w;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class B{constructor(){this.h=this.g=null}add(c,l){const f=q.get();f.set(c,l),this.h?this.h.next=f:this.g=f,this.h=f}}var q=new x(()=>new ht,i=>i.reset());class ht{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Z,Y=!1,w=new B,p=()=>{const i=Promise.resolve(void 0);Z=()=>{i.then(y)}};function y(){for(var i;i=j();){try{i.h.call(i.g)}catch(l){k(l)}var c=q;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}Y=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var v=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};a.addEventListener("test",l,c),a.removeEventListener("test",l,c)}catch{}return i})();function m(i){return/^[\s\xa0]*$/.test(i)}function K(i,c){_.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}E(K,_),K.prototype.init=function(i,c){const l=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(l=="mouseover"?c=i.fromElement:l=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&K.Z.h.call(this)},K.prototype.h=function(){K.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var ot="closure_listenable_"+(Math.random()*1e6|0),It=0;function Et(i,c,l,f,R){this.listener=i,this.proxy=null,this.src=c,this.type=l,this.capture=!!f,this.ha=R,this.key=++It,this.da=this.fa=!1}function at(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function ct(i,c,l){for(const f in i)c.call(l,i[f],f,i)}function qt(i,c){for(const l in i)c.call(void 0,i[l],l,i)}function Zt(i){const c={};for(const l in i)c[l]=i[l];return c}const pe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ne(i,c){let l,f;for(let R=1;R<arguments.length;R++){f=arguments[R];for(l in f)i[l]=f[l];for(let C=0;C<pe.length;C++)l=pe[C],Object.prototype.hasOwnProperty.call(f,l)&&(i[l]=f[l])}}function re(i){this.src=i,this.g={},this.h=0}re.prototype.add=function(i,c,l,f,R){const C=i.toString();i=this.g[C],i||(i=this.g[C]=[],this.h++);const O=un(i,c,f,R);return O>-1?(c=i[O],l||(c.fa=!1)):(c=new Et(c,this.src,C,!!f,R),c.fa=l,i.push(c)),c};function le(i,c){const l=c.type;if(l in i.g){var f=i.g[l],R=Array.prototype.indexOf.call(f,c,void 0),C;(C=R>=0)&&Array.prototype.splice.call(f,R,1),C&&(at(c),i.g[l].length==0&&(delete i.g[l],i.h--))}}function un(i,c,l,f){for(let R=0;R<i.length;++R){const C=i[R];if(!C.da&&C.listener==c&&C.capture==!!l&&C.ha==f)return R}return-1}var Pe="closure_lm_"+(Math.random()*1e6|0),ur={};function hr(i,c,l,f,R){if(Array.isArray(c)){for(let C=0;C<c.length;C++)hr(i,c[C],l,f,R);return null}return l=fr(l),i&&i[ot]?i.J(c,l,u(f)?!!f.capture:!1,R):es(i,c,l,!1,f,R)}function es(i,c,l,f,R,C){if(!c)throw Error("Invalid event type");const O=u(R)?!!R.capture:!!R;let J=dr(i);if(J||(i[Pe]=J=new re(i)),l=J.add(c,l,f,O,C),l.proxy)return l;if(f=ns(),l.proxy=f,f.src=i,f.listener=l,i.addEventListener)v||(R=O),R===void 0&&(R=!1),i.addEventListener(c.toString(),f,R);else if(i.attachEvent)i.attachEvent(ss(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function ns(){function i(l){return c.call(i.src,i.listener,l)}const c=wi;return i}function rs(i,c,l,f,R){if(Array.isArray(c))for(var C=0;C<c.length;C++)rs(i,c[C],l,f,R);else f=u(f)?!!f.capture:!!f,l=fr(l),i&&i[ot]?(i=i.i,C=String(c).toString(),C in i.g&&(c=i.g[C],l=un(c,l,f,R),l>-1&&(at(c[l]),Array.prototype.splice.call(c,l,1),c.length==0&&(delete i.g[C],i.h--)))):i&&(i=dr(i))&&(c=i.g[c.toString()],i=-1,c&&(i=un(c,l,f,R)),(l=i>-1?c[i]:null)&&Fe(l))}function Fe(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[ot])le(c.i,i);else{var l=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(l,f,i.capture):c.detachEvent?c.detachEvent(ss(l),f):c.addListener&&c.removeListener&&c.removeListener(f),(l=dr(c))?(le(l,i),l.h==0&&(l.src=null,c[Pe]=null)):at(i)}}}function ss(i){return i in ur?ur[i]:ur[i]="on"+i}function wi(i,c){if(i.da)i=!0;else{c=new K(c,this);const l=i.listener,f=i.ha||i.src;i.fa&&Fe(i),i=l.call(f,c)}return i}function dr(i){return i=i[Pe],i instanceof re?i:null}var ue="__closure_events_fn_"+(Math.random()*1e9>>>0);function fr(i){return typeof i=="function"?i:(i[ue]||(i[ue]=function(c){return i.handleEvent(c)}),i[ue])}function Nt(){T.call(this),this.i=new re(this),this.M=this,this.G=null}E(Nt,T),Nt.prototype[ot]=!0,Nt.prototype.removeEventListener=function(i,c,l,f){rs(this,i,c,l,f)};function vt(i,c){var l,f=i.G;if(f)for(l=[];f;f=f.G)l.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new _(c,i);else if(c instanceof _)c.target=c.target||i;else{var R=c;c=new _(f,i),ne(c,R)}R=!0;let C,O;if(l)for(O=l.length-1;O>=0;O--)C=c.g=l[O],R=Nn(C,f,!0,c)&&R;if(C=c.g=i,R=Nn(C,f,!0,c)&&R,R=Nn(C,f,!1,c)&&R,l)for(O=0;O<l.length;O++)C=c.g=l[O],R=Nn(C,f,!1,c)&&R}Nt.prototype.N=function(){if(Nt.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const l=i.g[c];for(let f=0;f<l.length;f++)at(l[f]);delete i.g[c],i.h--}}this.G=null},Nt.prototype.J=function(i,c,l,f){return this.i.add(String(i),c,!1,l,f)},Nt.prototype.K=function(i,c,l,f){return this.i.add(String(i),c,!0,l,f)};function Nn(i,c,l,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let R=!0;for(let C=0;C<c.length;++C){const O=c[C];if(O&&!O.da&&O.capture==l){const J=O.listener,xt=O.ha||O.src;O.fa&&le(i.i,O),R=J.call(xt,f)!==!1&&R}}return R&&!f.defaultPrevented}function hn(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(i,c||0)}function se(i){i.g=hn(()=>{i.g=null,i.i&&(i.i=!1,se(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class Ii extends T{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:se(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dn(i){T.call(this),this.h=i,this.g={}}E(dn,T);var is=[];function os(i){ct(i.g,function(c,l){this.g.hasOwnProperty(l)&&Fe(c)},i),i.g={}}dn.prototype.N=function(){dn.Z.N.call(this),os(this)},dn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mr=a.JSON.stringify,as=a.JSON.parse,cs=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function kn(){}function On(){}var Ve={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function xn(){_.call(this,"d")}E(xn,_);function fn(){_.call(this,"c")}E(fn,_);var ge={},pr=null;function Mn(){return pr=pr||new Nt}ge.Ia="serverreachability";function ls(i){_.call(this,ge.Ia,i)}E(ls,_);function De(i){const c=Mn();vt(c,new ls(c))}ge.STAT_EVENT="statevent";function Ln(i,c){_.call(this,ge.STAT_EVENT,i),this.stat=c}E(Ln,_);function kt(i){const c=Mn();vt(c,new Ln(c,i))}ge.Ja="timingevent";function us(i,c){_.call(this,ge.Ja,i),this.size=c}E(us,_);function mn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},c)}function Be(){this.g=!0}Be.prototype.ua=function(){this.g=!1};function Ai(i,c,l,f,R,C){i.info(function(){if(i.g)if(C){var O="",J=C.split("&");for(let gt=0;gt<J.length;gt++){var xt=J[gt].split("=");if(xt.length>1){const Ft=xt[0];xt=xt[1];const ye=Ft.split("_");O=ye.length>=2&&ye[1]=="type"?O+(Ft+"="+xt+"&"):O+(Ft+"=redacted&")}}}else O=null;else O=C;return"XMLHTTP REQ ("+f+") [attempt "+R+"]: "+c+`
`+l+`
`+O})}function hs(i,c,l,f,R,C,O){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+R+"]: "+c+`
`+l+`
`+C+" "+O})}function Ne(i,c,l,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+Ri(i,l)+(f?" "+f:"")})}function ds(i,c){i.info(function(){return"TIMEOUT: "+c})}Be.prototype.info=function(){};function Ri(i,c){if(!i.g)return c;if(!c)return null;try{const C=JSON.parse(c);if(C){for(i=0;i<C.length;i++)if(Array.isArray(C[i])){var l=C[i];if(!(l.length<2)){var f=l[1];if(Array.isArray(f)&&!(f.length<1)){var R=f[0];if(R!="noop"&&R!="stop"&&R!="close")for(let O=1;O<f.length;O++)f[O]=""}}}}return mr(C)}catch{return c}}var S={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},D={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},F;function z(){}E(z,kn),z.prototype.g=function(){return new XMLHttpRequest},F=new z;function $(i){return encodeURIComponent(String(i))}function dt(i){var c=1;i=i.split(":");const l=[];for(;c>0&&i.length;)l.push(i.shift()),c--;return i.length&&l.push(i.join(":")),l}function At(i,c,l,f){this.j=i,this.i=c,this.l=l,this.S=f||1,this.V=new dn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ot}function Ot(){this.i=null,this.g="",this.h=!1}var he={},pn={};function Ue(i,c,l){i.M=1,i.A=ms(_e(c)),i.u=l,i.R=!0,je(i,null)}function je(i,c){i.F=Date.now(),fs(i),i.B=_e(i.A);var l=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),pa(l.i,"t",f),i.C=0,l=i.j.L,i.h=new Ot,i.g=ka(i.j,l?c:null,!i.u),i.P>0&&(i.O=new Ii(d(i.Y,i,i.g),i.P)),c=i.V,l=i.g,f=i.ba;var R="readystatechange";Array.isArray(R)||(R&&(is[0]=R.toString()),R=is);for(let C=0;C<R.length;C++){const O=hr(l,R[C],f||c.handleEvent,!1,c.h||c);if(!O)break;c.g[O.key]=O}c=i.J?Zt(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),De(),Ai(i.i,i.v,i.B,i.l,i.S,i.u)}At.prototype.ba=function(i){i=i.target;const c=this.O;c&&$e(i)==3?c.j():this.Y(i)},At.prototype.Y=function(i){try{if(i==this.g)t:{const J=$e(this.g),xt=this.g.ya(),gt=this.g.ca();if(!(J<3)&&(J!=3||this.g&&(this.h.h||this.g.la()||wa(this.g)))){this.K||J!=4||xt==7||(xt==8||gt<=0?De(3):De(2)),Ci(this);var c=this.g.ca();this.X=c;var l=Fn(this);if(this.o=c==200,hs(this.i,this.v,this.B,this.l,this.S,J,c),this.o){if(this.U&&!this.L){e:{if(this.g){var f,R=this.g;if((f=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(f)){var C=f;break e}}C=null}if(i=C)Ne(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,bi(this,i);else{this.o=!1,this.m=3,kt(12),gn(this),gr(this);break t}}if(this.R){i=!0;let Ft;for(;!this.K&&this.C<l.length;)if(Ft=ke(this,l),Ft==pn){J==4&&(this.m=4,kt(14),i=!1),Ne(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==he){this.m=4,kt(15),Ne(this.i,this.l,l,"[Invalid Chunk]"),i=!1;break}else Ne(this.i,this.l,Ft,null),bi(this,Ft);if(Yt(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),J!=4||l.length!=0||this.h.h||(this.m=1,kt(16),i=!1),this.o=this.o&&i,!i)Ne(this.i,this.l,l,"[Invalid Chunked Response]"),gn(this),gr(this);else if(l.length>0&&!this.W){this.W=!0;var O=this.j;O.g==this&&O.aa&&!O.P&&(O.j.info("Great, no buffering proxy detected. Bytes received: "+l.length),xi(O),O.P=!0,kt(11))}}else Ne(this.i,this.l,l,null),bi(this,l);J==4&&gn(this),this.o&&!this.K&&(J==4?Pa(this.j,this):(this.o=!1,fs(this)))}else fh(this.g),c==400&&l.indexOf("Unknown SID")>0?(this.m=3,kt(12)):(this.m=0,kt(13)),gn(this),gr(this)}}}catch{}finally{}};function Fn(i){if(!Yt(i))return i.g.la();const c=wa(i.g);if(c==="")return"";let l="";const f=c.length,R=$e(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return gn(i),gr(i),"";i.h.i=new a.TextDecoder}for(let C=0;C<f;C++)i.h.h=!0,l+=i.h.i.decode(c[C],{stream:!(R&&C==f-1)});return c.length=0,i.h.g+=l,i.C=0,i.h.g}function Yt(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function ke(i,c){var l=i.C,f=c.indexOf(`
`,l);return f==-1?pn:(l=Number(c.substring(l,f)),isNaN(l)?he:(f+=1,f+l>c.length?pn:(c=c.slice(f,f+l),i.C=f+l,c)))}At.prototype.cancel=function(){this.K=!0,gn(this)};function fs(i){i.T=Date.now()+i.H,sa(i,i.H)}function sa(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=mn(d(i.aa,i),c)}function Ci(i){i.D&&(a.clearTimeout(i.D),i.D=null)}At.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(ds(this.i,this.B),this.M!=2&&(De(),kt(17)),gn(this),this.m=2,gr(this)):sa(this,this.T-i)};function gr(i){i.j.I==0||i.K||Pa(i.j,i)}function gn(i){Ci(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,os(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function bi(i,c){try{var l=i.j;if(l.I!=0&&(l.g==i||Si(l.h,i))){if(!i.L&&Si(l.h,i)&&l.I==3){try{var f=l.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var R=f;if(R[0]==0){t:if(!l.v){if(l.g)if(l.g.F+3e3<i.F)Es(l),_s(l);else break t;Oi(l),kt(18)}}else l.xa=R[1],0<l.xa-l.K&&R[2]<37500&&l.F&&l.A==0&&!l.C&&(l.C=mn(d(l.Va,l),6e3));aa(l.h)<=1&&l.ta&&(l.ta=void 0)}else yn(l,11)}else if((i.L||l.g==i)&&Es(l),!m(c))for(R=l.Ba.g.parse(c),c=0;c<R.length;c++){let gt=R[c];const Ft=gt[0];if(!(Ft<=l.K))if(l.K=Ft,gt=gt[1],l.I==2)if(gt[0]=="c"){l.M=gt[1],l.ba=gt[2];const ye=gt[3];ye!=null&&(l.ka=ye,l.j.info("VER="+l.ka));const En=gt[4];En!=null&&(l.za=En,l.j.info("SVER="+l.za));const Ge=gt[5];Ge!=null&&typeof Ge=="number"&&Ge>0&&(f=1.5*Ge,l.O=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const Ke=i.g;if(Ke){const Ts=Ke.g?Ke.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ts){var C=f.h;C.g||Ts.indexOf("spdy")==-1&&Ts.indexOf("quic")==-1&&Ts.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Pi(C,C.h),C.h=null))}if(f.G){const Mi=Ke.g?Ke.g.getResponseHeader("X-HTTP-Session-Id"):null;Mi&&(f.wa=Mi,_t(f.J,f.G,Mi))}}l.I=3,l.l&&l.l.ra(),l.aa&&(l.T=Date.now()-i.F,l.j.info("Handshake RTT: "+l.T+"ms")),f=l;var O=i;if(f.na=Na(f,f.L?f.ba:null,f.W),O.L){ca(f.h,O);var J=O,xt=f.O;xt&&(J.H=xt),J.D&&(Ci(J),fs(J)),f.g=O}else ba(f);l.i.length>0&&ys(l)}else gt[0]!="stop"&&gt[0]!="close"||yn(l,7);else l.I==3&&(gt[0]=="stop"||gt[0]=="close"?gt[0]=="stop"?yn(l,7):ki(l):gt[0]!="noop"&&l.l&&l.l.qa(gt),l.A=0)}}De(4)}catch{}}var th=class{constructor(i,c){this.g=i,this.map=c}};function ia(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function oa(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function aa(i){return i.h?1:i.g?i.g.size:0}function Si(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function Pi(i,c){i.g?i.g.add(c):i.h=c}function ca(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}ia.prototype.cancel=function(){if(this.i=la(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function la(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const l of i.g.values())c=c.concat(l.G);return c}return b(i.i)}var ua=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eh(i,c){if(i){i=i.split("&");for(let l=0;l<i.length;l++){const f=i[l].indexOf("=");let R,C=null;f>=0?(R=i[l].substring(0,f),C=i[l].substring(f+1)):R=i[l],c(R,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function qe(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof qe?(this.l=i.l,_r(this,i.j),this.o=i.o,this.g=i.g,yr(this,i.u),this.h=i.h,Vi(this,ga(i.i)),this.m=i.m):i&&(c=String(i).match(ua))?(this.l=!1,_r(this,c[1]||"",!0),this.o=Er(c[2]||""),this.g=Er(c[3]||"",!0),yr(this,c[4]),this.h=Er(c[5]||"",!0),Vi(this,c[6]||"",!0),this.m=Er(c[7]||"")):(this.l=!1,this.i=new Tr(null,this.l))}qe.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(vr(c,ha,!0),":");var l=this.g;return(l||c=="file")&&(i.push("//"),(c=this.o)&&i.push(vr(c,ha,!0),"@"),i.push($(l).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.u,l!=null&&i.push(":",String(l))),(l=this.h)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(vr(l,l.charAt(0)=="/"?sh:rh,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",vr(l,oh)),i.join("")},qe.prototype.resolve=function(i){const c=_e(this);let l=!!i.j;l?_r(c,i.j):l=!!i.o,l?c.o=i.o:l=!!i.g,l?c.g=i.g:l=i.u!=null;var f=i.h;if(l)yr(c,i.u);else if(l=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var R=c.h.lastIndexOf("/");R!=-1&&(f=c.h.slice(0,R+1)+f)}if(R=f,R==".."||R==".")f="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){f=R.lastIndexOf("/",0)==0,R=R.split("/");const C=[];for(let O=0;O<R.length;){const J=R[O++];J=="."?f&&O==R.length&&C.push(""):J==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),f&&O==R.length&&C.push("")):(C.push(J),f=!0)}f=C.join("/")}else f=R}return l?c.h=f:l=i.i.toString()!=="",l?Vi(c,ga(i.i)):l=!!i.m,l&&(c.m=i.m),c};function _e(i){return new qe(i)}function _r(i,c,l){i.j=l?Er(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function yr(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function Vi(i,c,l){c instanceof Tr?(i.i=c,ah(i.i,i.l)):(l||(c=vr(c,ih)),i.i=new Tr(c,i.l))}function _t(i,c,l){i.i.set(c,l)}function ms(i){return _t(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function Er(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function vr(i,c,l){return typeof i=="string"?(i=encodeURI(i).replace(c,nh),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function nh(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var ha=/[#\/\?@]/g,rh=/[#\?:]/g,sh=/[#\?]/g,ih=/[#\?@]/g,oh=/#/g;function Tr(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function _n(i){i.g||(i.g=new Map,i.h=0,i.i&&eh(i.i,function(c,l){i.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}r=Tr.prototype,r.add=function(i,c){_n(this),this.i=null,i=Bn(this,i);let l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(c),this.h+=1,this};function da(i,c){_n(i),c=Bn(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function fa(i,c){return _n(i),c=Bn(i,c),i.g.has(c)}r.forEach=function(i,c){_n(this),this.g.forEach(function(l,f){l.forEach(function(R){i.call(c,R,f,this)},this)},this)};function ma(i,c){_n(i);let l=[];if(typeof c=="string")fa(i,c)&&(l=l.concat(i.g.get(Bn(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)l=l.concat(i[c]);return l}r.set=function(i,c){return _n(this),this.i=null,i=Bn(this,i),fa(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},r.get=function(i,c){return i?(i=ma(this,i),i.length>0?String(i[0]):c):c};function pa(i,c,l){da(i,c),l.length>0&&(i.i=null,i.g.set(Bn(i,c),b(l)),i.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var l=c[f];const R=$(l);l=ma(this,l);for(let C=0;C<l.length;C++){let O=R;l[C]!==""&&(O+="="+$(l[C])),i.push(O)}}return this.i=i.join("&")};function ga(i){const c=new Tr;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function Bn(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function ah(i,c){c&&!i.j&&(_n(i),i.i=null,i.g.forEach(function(l,f){const R=f.toLowerCase();f!=R&&(da(this,f),pa(this,R,l))},i)),i.j=c}function ch(i,c){const l=new Be;if(a.Image){const f=new Image;f.onload=g(ze,l,"TestLoadImage: loaded",!0,c,f),f.onerror=g(ze,l,"TestLoadImage: error",!1,c,f),f.onabort=g(ze,l,"TestLoadImage: abort",!1,c,f),f.ontimeout=g(ze,l,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function lh(i,c){const l=new Be,f=new AbortController,R=setTimeout(()=>{f.abort(),ze(l,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(C=>{clearTimeout(R),C.ok?ze(l,"TestPingServer: ok",!0,c):ze(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),ze(l,"TestPingServer: error",!1,c)})}function ze(i,c,l,f,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),f(l)}catch{}}function uh(){this.g=new cs}function Di(i){this.i=i.Sb||null,this.h=i.ab||!1}E(Di,kn),Di.prototype.g=function(){return new ps(this.i,this.h)};function ps(i,c){Nt.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}E(ps,Nt),r=ps.prototype,r.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,Ir(this)},r.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,wr(this)),this.readyState=0},r.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Ir(this)),this.g&&(this.readyState=3,Ir(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;_a(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function _a(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}r.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?wr(this):Ir(this),this.readyState==3&&_a(this)}},r.Oa=function(i){this.g&&(this.response=this.responseText=i,wr(this))},r.Na=function(i){this.g&&(this.response=i,wr(this))},r.ga=function(){this.g&&wr(this)};function wr(i){i.readyState=4,i.l=null,i.j=null,i.B=null,Ir(i)}r.setRequestHeader=function(i,c){this.A.append(i,c)},r.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=c.next();return i.join(`\r
`)};function Ir(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(ps.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ya(i){let c="";return ct(i,function(l,f){c+=f,c+=":",c+=l,c+=`\r
`}),c}function Ni(i,c,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=ya(l),typeof i=="string"?l!=null&&$(l):_t(i,c,l))}function Rt(i){Nt.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}E(Rt,Nt);var hh=/^https?$/i,dh=["POST","PUT"];r=Rt.prototype,r.Fa=function(i){this.H=i},r.ea=function(i,c,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():F.g(),this.g.onreadystatechange=I(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(C){Ea(this,C);return}if(i=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var R in f)l.set(R,f[R]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const C of f.keys())l.set(C,f.get(C));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(C=>C.toLowerCase()=="content-type"),R=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(dh,c,void 0)>=0)||f||R||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,O]of l)this.g.setRequestHeader(C,O);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(C){Ea(this,C)}};function Ea(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,va(i),gs(i)}function va(i){i.A||(i.A=!0,vt(i,"complete"),vt(i,"error"))}r.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,vt(this,"complete"),vt(this,"abort"),gs(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gs(this,!0)),Rt.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Ta(this):this.Xa())},r.Xa=function(){Ta(this)};function Ta(i){if(i.h&&typeof o<"u"){if(i.v&&$e(i)==4)setTimeout(i.Ca.bind(i),0);else if(vt(i,"readystatechange"),$e(i)==4){i.h=!1;try{const C=i.ca();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var l;if(!(l=c)){var f;if(f=C===0){let O=String(i.D).match(ua)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),f=!hh.test(O?O.toLowerCase():"")}l=f}if(l)vt(i,"complete"),vt(i,"success");else{i.o=6;try{var R=$e(i)>2?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.ca()+"]",va(i)}}finally{gs(i)}}}}function gs(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const l=i.g;i.g=null,c||vt(i,"ready");try{l.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function $e(i){return i.g?i.g.readyState:0}r.ca=function(){try{return $e(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),as(c)}};function wa(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function fh(i){const c={};i=(i.g&&$e(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(m(i[f]))continue;var l=dt(i[f]);const R=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const C=c[R]||[];c[R]=C,C.push(l)}qt(c,function(f){return f.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ar(i,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||c}function Ia(i){this.za=0,this.i=[],this.j=new Be,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ar("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ar("baseRetryDelayMs",5e3,i),this.Za=Ar("retryDelaySeedMs",1e4,i),this.Ta=Ar("forwardChannelMaxRetries",2,i),this.va=Ar("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new ia(i&&i.concurrentRequestLimit),this.Ba=new uh,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Ia.prototype,r.ka=8,r.I=1,r.connect=function(i,c,l,f){kt(0),this.W=i,this.H=c||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.J=Na(this,null,this.W),ys(this)};function ki(i){if(Aa(i),i.I==3){var c=i.V++,l=_e(i.J);if(_t(l,"SID",i.M),_t(l,"RID",c),_t(l,"TYPE","terminate"),Rr(i,l),c=new At(i,i.j,c),c.M=2,c.A=ms(_e(l)),l=!1,a.navigator&&a.navigator.sendBeacon)try{l=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!l&&a.Image&&(new Image().src=c.A,l=!0),l||(c.g=ka(c.j,null),c.g.ea(c.A)),c.F=Date.now(),fs(c)}Da(i)}function _s(i){i.g&&(xi(i),i.g.cancel(),i.g=null)}function Aa(i){_s(i),i.v&&(a.clearTimeout(i.v),i.v=null),Es(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function ys(i){if(!oa(i.h)&&!i.m){i.m=!0;var c=i.Ea;Z||p(),Y||(Z(),Y=!0),w.add(c,i),i.D=0}}function mh(i,c){return aa(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=mn(d(i.Ea,i,c),Va(i,i.D)),i.D++,!0)}r.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const R=new At(this,this.j,i);let C=this.o;if(this.U&&(C?(C=Zt(C),ne(C,this.U)):C=this.U),this.u!==null||this.R||(R.J=C,C=null),this.S)t:{for(var c=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=l;break t}if(c===4096||l===this.i.length-1){c=l+1;break t}}c=1e3}else c=1e3;c=Ca(this,R,c),l=_e(this.J),_t(l,"RID",i),_t(l,"CVER",22),this.G&&_t(l,"X-HTTP-Session-Id",this.G),Rr(this,l),C&&(this.R?c="headers="+$(ya(C))+"&"+c:this.u&&Ni(l,this.u,C)),Pi(this.h,R),this.Ra&&_t(l,"TYPE","init"),this.S?(_t(l,"$req",c),_t(l,"SID","null"),R.U=!0,Ue(R,l,null)):Ue(R,l,c),this.I=2}}else this.I==3&&(i?Ra(this,i):this.i.length==0||oa(this.h)||Ra(this))};function Ra(i,c){var l;c?l=c.l:l=i.V++;const f=_e(i.J);_t(f,"SID",i.M),_t(f,"RID",l),_t(f,"AID",i.K),Rr(i,f),i.u&&i.o&&Ni(f,i.u,i.o),l=new At(i,i.j,l,i.D+1),i.u===null&&(l.J=i.o),c&&(i.i=c.G.concat(i.i)),c=Ca(i,l,1e3),l.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Pi(i.h,l),Ue(l,f,c)}function Rr(i,c){i.H&&ct(i.H,function(l,f){_t(c,f,l)}),i.l&&ct({},function(l,f){_t(c,f,l)})}function Ca(i,c,l){l=Math.min(i.i.length,l);const f=i.l?d(i.l.Ka,i.l,i):null;t:{var R=i.i;let J=-1;for(;;){const xt=["count="+l];J==-1?l>0?(J=R[0].g,xt.push("ofs="+J)):J=0:xt.push("ofs="+J);let gt=!0;for(let Ft=0;Ft<l;Ft++){var C=R[Ft].g;const ye=R[Ft].map;if(C-=J,C<0)J=Math.max(0,R[Ft].g-100),gt=!1;else try{C="req"+C+"_"||"";try{var O=ye instanceof Map?ye:Object.entries(ye);for(const[En,Ge]of O){let Ke=Ge;u(Ge)&&(Ke=mr(Ge)),xt.push(C+En+"="+encodeURIComponent(Ke))}}catch(En){throw xt.push(C+"type="+encodeURIComponent("_badmap")),En}}catch{f&&f(ye)}}if(gt){O=xt.join("&");break t}}O=void 0}return i=i.i.splice(0,l),c.G=i,O}function ba(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;Z||p(),Y||(Z(),Y=!0),w.add(c,i),i.A=0}}function Oi(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=mn(d(i.Da,i),Va(i,i.A)),i.A++,!0)}r.Da=function(){if(this.v=null,Sa(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=mn(d(this.Wa,this),i)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,kt(10),_s(this),Sa(this))};function xi(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function Sa(i){i.g=new At(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=_e(i.na);_t(c,"RID","rpc"),_t(c,"SID",i.M),_t(c,"AID",i.K),_t(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&_t(c,"TO",i.ia),_t(c,"TYPE","xmlhttp"),Rr(i,c),i.u&&i.o&&Ni(c,i.u,i.o),i.O&&(i.g.H=i.O);var l=i.g;i=i.ba,l.M=1,l.A=ms(_e(c)),l.u=null,l.R=!0,je(l,i)}r.Va=function(){this.C!=null&&(this.C=null,_s(this),Oi(this),kt(19))};function Es(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function Pa(i,c){var l=null;if(i.g==c){Es(i),xi(i),i.g=null;var f=2}else if(Si(i.h,c))l=c.G,ca(i.h,c),f=1;else return;if(i.I!=0){if(c.o)if(f==1){l=c.u?c.u.length:0,c=Date.now()-c.F;var R=i.D;f=Mn(),vt(f,new us(f,l)),ys(i)}else ba(i);else if(R=c.m,R==3||R==0&&c.X>0||!(f==1&&mh(i,c)||f==2&&Oi(i)))switch(l&&l.length>0&&(c=i.h,c.i=c.i.concat(l)),R){case 1:yn(i,5);break;case 4:yn(i,10);break;case 3:yn(i,6);break;default:yn(i,2)}}}function Va(i,c){let l=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(l*=2),l*c}function yn(i,c){if(i.j.info("Error code "+c),c==2){var l=d(i.bb,i),f=i.Ua;const R=!f;f=new qe(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||_r(f,"https"),ms(f),R?ch(f.toString(),l):lh(f.toString(),l)}else kt(2);i.I=0,i.l&&i.l.pa(c),Da(i),Aa(i)}r.bb=function(i){i?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function Da(i){if(i.I=0,i.ja=[],i.l){const c=la(i.h);(c.length!=0||i.i.length!=0)&&(N(i.ja,c),N(i.ja,i.i),i.h.i.length=0,b(i.i),i.i.length=0),i.l.oa()}}function Na(i,c,l){var f=l instanceof qe?_e(l):new qe(l);if(f.g!="")c&&(f.g=c+"."+f.g),yr(f,f.u);else{var R=a.location;f=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;const C=new qe(null);f&&_r(C,f),c&&(C.g=c),R&&yr(C,R),l&&(C.h=l),f=C}return l=i.G,c=i.wa,l&&c&&_t(f,l,c),_t(f,"VER",i.ka),Rr(i,f),f}function ka(i,c,l){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new Rt(new Di({ab:l})):new Rt(i.ma),c.Fa(i.L),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Oa(){}r=Oa.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function vs(){}vs.prototype.g=function(i,c){return new ie(i,c)};function ie(i,c){Nt.call(this),this.g=new Ia(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!m(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!m(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new Un(this)}E(ie,Nt),ie.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ie.prototype.close=function(){ki(this.g)},ie.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.v&&(l={},l.__data__=mr(i),i=l);c.i.push(new th(c.Ya++,i)),c.I==3&&ys(c)},ie.prototype.N=function(){this.g.l=null,delete this.j,ki(this.g),delete this.g,ie.Z.N.call(this)};function xa(i){xn.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){t:{for(const l in c){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}E(xa,xn);function Ma(){fn.call(this),this.status=1}E(Ma,fn);function Un(i){this.g=i}E(Un,Oa),Un.prototype.ra=function(){vt(this.g,"a")},Un.prototype.qa=function(i){vt(this.g,new xa(i))},Un.prototype.pa=function(i){vt(this.g,new Ma)},Un.prototype.oa=function(){vt(this.g,"b")},vs.prototype.createWebChannel=vs.prototype.g,ie.prototype.send=ie.prototype.o,ie.prototype.open=ie.prototype.m,ie.prototype.close=ie.prototype.close,Il=function(){return new vs},wl=function(){return Mn()},Tl=ge,so={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},S.NO_ERROR=0,S.TIMEOUT=8,S.HTTP_ERROR=6,Ns=S,D.COMPLETE="complete",vl=D,On.EventType=Ve,Ve.OPEN="a",Ve.CLOSE="b",Ve.ERROR="c",Ve.MESSAGE="d",Nt.prototype.listen=Nt.prototype.J,Sr=On,Rt.prototype.listenOnce=Rt.prototype.K,Rt.prototype.getLastError=Rt.prototype.Ha,Rt.prototype.getLastErrorCode=Rt.prototype.ya,Rt.prototype.getStatus=Rt.prototype.ca,Rt.prototype.getResponseJson=Rt.prototype.La,Rt.prototype.getResponseText=Rt.prototype.la,Rt.prototype.send=Rt.prototype.ea,Rt.prototype.setWithCredentials=Rt.prototype.Fa,El=Rt}).apply(typeof Is<"u"?Is:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Wt.UNAUTHENTICATED=new Wt(null),Wt.GOOGLE_CREDENTIALS=new Wt("google-credentials-uid"),Wt.FIRST_PARTY=new Wt("first-party-uid"),Wt.MOCK_USER=new Wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let or="12.10.0";function jf(r){or=r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new dl("@firebase/firestore");function zn(){return bn.logLevel}function M(r,...t){if(bn.logLevel<=st.DEBUG){const e=t.map(So);bn.debug(`Firestore (${or}): ${r}`,...e)}}function Me(r,...t){if(bn.logLevel<=st.ERROR){const e=t.map(So);bn.error(`Firestore (${or}): ${r}`,...e)}}function Sn(r,...t){if(bn.logLevel<=st.WARN){const e=t.map(So);bn.warn(`Firestore (${or}): ${r}`,...e)}}function So(r){if(typeof r=="string")return r;try{return(function(e){return JSON.stringify(e)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,Al(r,n,e)}function Al(r,t,e){let n=`FIRESTORE (${or}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw Me(n),new Error(n)}function ut(r,t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,r||Al(t,s,n)}function Q(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends ir{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class qf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Wt.UNAUTHENTICATED)))}shutdown(){}}class zf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class $f{constructor(t){this.t=t,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){ut(this.o===void 0,42304);let n=this.i;const s=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new Ze;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ze,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await s(this.currentUser)}))},u=h=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>u(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ze)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((n=>this.i!==t?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(ut(typeof n.accessToken=="string",31837,{l:n}),new Rl(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ut(t===null||typeof t=="string",2055,{h:t}),new Wt(t)}}class Gf{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Kf{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Gf(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(Wt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class tc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hf{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Cf(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){ut(this.o===void 0,3512);const n=o=>{o.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>n(o)))};const s=o=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new tc(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(ut(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new tc(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Wf(40);for(let o=0;o<s.length;++o)n.length<20&&s[o]<e&&(n+=t.charAt(s[o]%62))}return n}}function tt(r,t){return r<t?-1:r>t?1:0}function io(r,t){const e=Math.min(r.length,t.length);for(let n=0;n<e;n++){const s=r.charAt(n),o=t.charAt(n);if(s!==o)return zi(s)===zi(o)?tt(s,o):zi(s)?1:-1}return tt(r.length,t.length)}const Qf=55296,Yf=57343;function zi(r){const t=r.charCodeAt(0);return t>=Qf&&t<=Yf}function Xn(r,t,e){return r.length===t.length&&r.every(((n,s)=>e(n,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec="__name__";class Ee{constructor(t,e,n){e===void 0?e=0:e>t.length&&G(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&G(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Ee.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ee?t.forEach((n=>{e.push(n)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const o=Ee.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return tt(t.length,e.length)}static compareSegments(t,e){const n=Ee.isNumericId(t),s=Ee.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?Ee.extractNumericId(t).compare(Ee.extractNumericId(e)):io(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Xe.fromString(t.substring(4,t.length-2))}}class Tt extends Ee{construct(t,e,n){return new Tt(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new L(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((s=>s.length>0)))}return new Tt(e)}static emptyPath(){return new Tt([])}}const Jf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Gt extends Ee{construct(t,e,n){return new Gt(t,e,n)}static isValidIdentifier(t){return Jf.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Gt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ec}static keyField(){return new Gt([ec])}static fromServerFormat(t){const e=[];let n="",s=0;const o=()=>{if(n.length===0)throw new L(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new L(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new L(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(n+=u,s++):(o(),s++)}if(o(),a)throw new L(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Gt(e)}static emptyPath(){return new Gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.path=t}static fromPath(t){return new U(Tt.fromString(t))}static fromName(t){return new U(Tt.fromString(t).popFirst(5))}static empty(){return new U(Tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Tt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new U(new Tt(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(r,t,e){if(!e)throw new L(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Zf(r,t,e,n){if(t===!0&&n===!0)throw new L(V.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function nc(r){if(!U.isDocumentKey(r))throw new L(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Cl(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Vo(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(n){return n.constructor?n.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":G(12329,{type:typeof r})}function we(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new L(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Vo(r);throw new L(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(r,t){const e={typeString:r};return t&&(e.value=t),e}function Qr(r,t){if(!Cl(r))throw new L(V.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const s=t[n].typeString,o="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const a=r[n];if(s&&typeof a!==s){e=`JSON field '${n}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${n}' field to equal '${o.value}'`;break}}if(e)throw new L(V.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=-62135596800,sc=1e6;class yt{static now(){return yt.fromMillis(Date.now())}static fromDate(t){return yt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*sc);return new yt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new L(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new L(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<rc)throw new L(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/sc}_compareTo(t){return this.seconds===t.seconds?tt(this.nanoseconds,t.nanoseconds):tt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:yt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Qr(t,yt._jsonSchema))return new yt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-rc;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}yt._jsonSchemaVersion="firestore/timestamp/1.0",yt._jsonSchema={type:Vt("string",yt._jsonSchemaVersion),seconds:Vt("number"),nanoseconds:Vt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{static fromTimestamp(t){return new W(t)}static min(){return new W(new yt(0,0))}static max(){return new W(new yt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=-1;function tm(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=W.fromTimestamp(n===1e9?new yt(e+1,0):new yt(e,n));return new en(s,U.empty(),t)}function em(r){return new en(r.readTime,r.key,qr)}class en{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new en(W.min(),U.empty(),qr)}static max(){return new en(W.max(),U.empty(),qr)}}function nm(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=U.comparator(r.documentKey,t.documentKey),e!==0?e:tt(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==rm)throw r;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P(((n,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):P.reject(e)}static resolve(t){return new P(((e,n)=>{e(t)}))}static reject(t){return new P(((e,n)=>{n(t)}))}static waitFor(t){return new P(((e,n)=>{let s=0,o=0,a=!1;t.forEach((u=>{++s,u.next((()=>{++o,a&&o===s&&e()}),(h=>n(h)))})),a=!0,o===s&&e()}))}static or(t){let e=P.resolve(!1);for(const n of t)e=e.next((s=>s?P.resolve(s):n()));return e}static forEach(t,e){const n=[];return t.forEach(((s,o)=>{n.push(e.call(this,s,o))})),this.waitFor(n)}static mapArray(t,e){return new P(((n,s)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next((g=>{a[d]=g,++u,u===o&&n(a)}),(g=>s(g)))}}))}static doWhile(t,e){return new P(((n,s)=>{const o=()=>{t()===!0?e().next((()=>{o()}),s):n()};o()}))}}function im(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function cr(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>e.writeSequenceNumber(n))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}ii.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=-1;function oi(r){return r==null}function Gs(r){return r===0&&1/r==-1/0}function om(r){return typeof r=="number"&&Number.isInteger(r)&&!Gs(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="";function am(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=ic(t)),t=cm(r.get(e),t);return ic(t)}function cm(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const o=r.charAt(s);switch(o){case"\0":e+="";break;case bl:e+="";break;default:e+=o}}return e}function ic(r){return r+bl+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function cn(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Sl(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t,e){this.comparator=t,this.root=e||$t.EMPTY}insert(t,e){return new wt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,$t.BLACK,null,null))}remove(t){return new wt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,$t.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new As(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new As(this.root,t,this.comparator,!1)}getReverseIterator(){return new As(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new As(this.root,t,this.comparator,!0)}}class As{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class $t{constructor(t,e,n,s,o){this.key=t,this.value=e,this.color=n??$t.RED,this.left=s??$t.EMPTY,this.right=o??$t.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,o){return new $t(t??this.key,e??this.value,n??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const o=n(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,n),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return $t.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return $t.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,$t.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,$t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw G(27949);return t+(this.isRed()?0:1)}}$t.EMPTY=null,$t.RED=!0,$t.BLACK=!1;$t.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(t,e,n,s,o){return this}insert(t,e,n){return new $t(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this.comparator=t,this.data=new wt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ac(this.data.getIterator())}getIteratorFrom(t){return new ac(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((n=>{e=e.add(n)})),e}isEqual(t){if(!(t instanceof Lt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Lt(this.comparator);return e.data=t,e}}class ac{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t){this.fields=t,t.sort(Gt.comparator)}static empty(){return new ce([])}unionWith(t){let e=new Lt(Gt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new ce(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Xn(this.fields,t.fields,((e,n)=>e.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Pl("Invalid base64 string: "+o):o}})(t);return new Kt(e)}static fromUint8Array(t){const e=(function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o})(t);return new Kt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return tt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Kt.EMPTY_BYTE_STRING=new Kt("");const lm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nn(r){if(ut(!!r,39018),typeof r=="string"){let t=0;const e=lm.exec(r);if(ut(!!e,46558,{timestamp:r}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Ct(r.seconds),nanos:Ct(r.nanos)}}function Ct(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function rn(r){return typeof r=="string"?Kt.fromBase64String(r):Kt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl="server_timestamp",Dl="__type__",Nl="__previous_value__",kl="__local_write_time__";function No(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[Dl])==null?void 0:n.stringValue)===Vl}function ai(r){const t=r.mapValue.fields[Nl];return No(t)?ai(t):t}function zr(r){const t=nn(r.mapValue.fields[kl].timestampValue);return new yt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(t,e,n,s,o,a,u,h,d,g,E){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=g,this.apiKey=E}}const Ks="(default)";class $r{constructor(t,e){this.projectId=t,this.database=e||Ks}static empty(){return new $r("","")}get isDefaultDatabase(){return this.database===Ks}isEqual(t){return t instanceof $r&&t.projectId===this.projectId&&t.database===this.database}}function hm(r,t){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new L(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $r(r.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol="__type__",dm="__max__",Rs={mapValue:{}},xl="__vector__",Hs="value";function sn(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?No(r)?4:mm(r)?9007199254740991:fm(r)?10:11:G(28295,{value:r})}function be(r,t){if(r===t)return!0;const e=sn(r);if(e!==sn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return zr(r).isEqual(zr(t));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=nn(s.timestampValue),u=nn(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(s,o){return rn(s.bytesValue).isEqual(rn(o.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(s,o){return Ct(s.geoPointValue.latitude)===Ct(o.geoPointValue.latitude)&&Ct(s.geoPointValue.longitude)===Ct(o.geoPointValue.longitude)})(r,t);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return Ct(s.integerValue)===Ct(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=Ct(s.doubleValue),u=Ct(o.doubleValue);return a===u?Gs(a)===Gs(u):isNaN(a)&&isNaN(u)}return!1})(r,t);case 9:return Xn(r.arrayValue.values||[],t.arrayValue.values||[],be);case 10:case 11:return(function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(oc(a)!==oc(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!be(a[h],u[h])))return!1;return!0})(r,t);default:return G(52216,{left:r})}}function Gr(r,t){return(r.values||[]).find((e=>be(e,t)))!==void 0}function Zn(r,t){if(r===t)return 0;const e=sn(r),n=sn(t);if(e!==n)return tt(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return tt(r.booleanValue,t.booleanValue);case 2:return(function(o,a){const u=Ct(o.integerValue||o.doubleValue),h=Ct(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1})(r,t);case 3:return cc(r.timestampValue,t.timestampValue);case 4:return cc(zr(r),zr(t));case 5:return io(r.stringValue,t.stringValue);case 6:return(function(o,a){const u=rn(o),h=rn(a);return u.compareTo(h)})(r.bytesValue,t.bytesValue);case 7:return(function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const g=tt(u[d],h[d]);if(g!==0)return g}return tt(u.length,h.length)})(r.referenceValue,t.referenceValue);case 8:return(function(o,a){const u=tt(Ct(o.latitude),Ct(a.latitude));return u!==0?u:tt(Ct(o.longitude),Ct(a.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return lc(r.arrayValue,t.arrayValue);case 10:return(function(o,a){var I,b,N,x;const u=o.fields||{},h=a.fields||{},d=(I=u[Hs])==null?void 0:I.arrayValue,g=(b=h[Hs])==null?void 0:b.arrayValue,E=tt(((N=d==null?void 0:d.values)==null?void 0:N.length)||0,((x=g==null?void 0:g.values)==null?void 0:x.length)||0);return E!==0?E:lc(d,g)})(r.mapValue,t.mapValue);case 11:return(function(o,a){if(o===Rs.mapValue&&a===Rs.mapValue)return 0;if(o===Rs.mapValue)return 1;if(a===Rs.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},g=Object.keys(d);h.sort(),g.sort();for(let E=0;E<h.length&&E<g.length;++E){const I=io(h[E],g[E]);if(I!==0)return I;const b=Zn(u[h[E]],d[g[E]]);if(b!==0)return b}return tt(h.length,g.length)})(r.mapValue,t.mapValue);default:throw G(23264,{he:e})}}function cc(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return tt(r,t);const e=nn(r),n=nn(t),s=tt(e.seconds,n.seconds);return s!==0?s:tt(e.nanos,n.nanos)}function lc(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const o=Zn(e[s],n[s]);if(o)return o}return tt(e.length,n.length)}function tr(r){return oo(r)}function oo(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(e){const n=nn(e);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(e){return rn(e).toBase64()})(r.bytesValue):"referenceValue"in r?(function(e){return U.fromName(e).toString()})(r.referenceValue):"geoPointValue"in r?(function(e){return`geo(${e.latitude},${e.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(e){let n="[",s=!0;for(const o of e.values||[])s?s=!1:n+=",",n+=oo(o);return n+"]"})(r.arrayValue):"mapValue"in r?(function(e){const n=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of n)o?o=!1:s+=",",s+=`${a}:${oo(e.fields[a])}`;return s+"}"})(r.mapValue):G(61005,{value:r})}function ks(r){switch(sn(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ai(r);return t?16+ks(t):16;case 5:return 2*r.stringValue.length;case 6:return rn(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((s,o)=>s+ks(o)),0)})(r.arrayValue);case 10:case 11:return(function(n){let s=0;return cn(n.fields,((o,a)=>{s+=o.length+ks(a)})),s})(r.mapValue);default:throw G(13486,{value:r})}}function ao(r){return!!r&&"integerValue"in r}function ko(r){return!!r&&"arrayValue"in r}function uc(r){return!!r&&"nullValue"in r}function hc(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Os(r){return!!r&&"mapValue"in r}function fm(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[Ol])==null?void 0:n.stringValue)===xl}function Or(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return cn(r.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Or(n))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Or(r.arrayValue.values[e]);return t}return{...r}}function mm(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===dm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t){this.value=t}static empty(){return new ee({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Os(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Or(e)}setAll(t){let e=Gt.emptyPath(),n={},s=[];t.forEach(((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,n,s),n={},s=[],e=u.popLast()}a?n[u.lastSegment()]=Or(a):s.push(u.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,n,s)}delete(t){const e=this.field(t.popLast());Os(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return be(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Os(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){cn(e,((s,o)=>t[s]=o));for(const s of n)delete t[s]}clone(){return new ee(Or(this.value))}}function Ml(r){const t=[];return cn(r.fields,((e,n)=>{const s=new Gt([e]);if(Os(n)){const o=Ml(n.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)})),new ce(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t,e,n,s,o,a,u){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new Qt(t,0,W.min(),W.min(),W.min(),ee.empty(),0)}static newFoundDocument(t,e,n,s){return new Qt(t,1,e,W.min(),n,s,0)}static newNoDocument(t,e){return new Qt(t,2,e,W.min(),W.min(),ee.empty(),0)}static newUnknownDocument(t,e){return new Qt(t,3,e,W.min(),W.min(),ee.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ee.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ee.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Qt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t,e){this.position=t,this.inclusive=e}}function dc(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const o=t[s],a=r.position[s];if(o.field.isKeyField()?n=U.comparator(U.fromName(a.referenceValue),e.key):n=Zn(a,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function fc(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!be(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t,e="asc"){this.field=t,this.dir=e}}function pm(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{}class Mt extends Ll{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new _m(t,e,n):e==="array-contains"?new vm(t,n):e==="in"?new Tm(t,n):e==="not-in"?new wm(t,n):e==="array-contains-any"?new Im(t,n):new Mt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new ym(t,n):new Em(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Zn(e,this.value)):e!==null&&sn(this.value)===sn(e)&&this.matchesComparison(Zn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Se extends Ll{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Se(t,e)}matches(t){return Fl(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Fl(r){return r.op==="and"}function Bl(r){return gm(r)&&Fl(r)}function gm(r){for(const t of r.filters)if(t instanceof Se)return!1;return!0}function co(r){if(r instanceof Mt)return r.field.canonicalString()+r.op.toString()+tr(r.value);if(Bl(r))return r.filters.map((t=>co(t))).join(",");{const t=r.filters.map((e=>co(e))).join(",");return`${r.op}(${t})`}}function Ul(r,t){return r instanceof Mt?(function(n,s){return s instanceof Mt&&n.op===s.op&&n.field.isEqual(s.field)&&be(n.value,s.value)})(r,t):r instanceof Se?(function(n,s){return s instanceof Se&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce(((o,a,u)=>o&&Ul(a,s.filters[u])),!0):!1})(r,t):void G(19439)}function jl(r){return r instanceof Mt?(function(e){return`${e.field.canonicalString()} ${e.op} ${tr(e.value)}`})(r):r instanceof Se?(function(e){return e.op.toString()+" {"+e.getFilters().map(jl).join(" ,")+"}"})(r):"Filter"}class _m extends Mt{constructor(t,e,n){super(t,e,n),this.key=U.fromName(n.referenceValue)}matches(t){const e=U.comparator(t.key,this.key);return this.matchesComparison(e)}}class ym extends Mt{constructor(t,e){super(t,"in",e),this.keys=ql("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Em extends Mt{constructor(t,e){super(t,"not-in",e),this.keys=ql("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ql(r,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map((n=>U.fromName(n.referenceValue)))}class vm extends Mt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ko(e)&&Gr(e.arrayValue,this.value)}}class Tm extends Mt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Gr(this.value.arrayValue,e)}}class wm extends Mt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Gr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Gr(this.value.arrayValue,e)}}class Im extends Mt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ko(e)||!e.arrayValue.values)&&e.arrayValue.values.some((n=>Gr(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(t,e=null,n=[],s=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.Te=null}}function mc(r,t=null,e=[],n=[],s=null,o=null,a=null){return new Am(r,t,e,n,s,o,a)}function Oo(r){const t=Q(r);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((n=>co(n))).join(","),e+="|ob:",e+=t.orderBy.map((n=>(function(o){return o.field.canonicalString()+o.dir})(n))).join(","),oi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((n=>tr(n))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((n=>tr(n))).join(",")),t.Te=e}return t.Te}function xo(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!pm(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Ul(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!fc(r.startAt,t.startAt)&&fc(r.endAt,t.endAt)}function lo(r){return U.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,e=null,n=[],s=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Rm(r,t,e,n,s,o,a,u){return new ci(r,t,e,n,s,o,a,u)}function li(r){return new ci(r)}function pc(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Cm(r){return U.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function bm(r){return r.collectionGroup!==null}function xr(r){const t=Q(r);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Lt(Gt.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(u=u.add(d.field))}))})),u})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new Qs(o,n))})),e.has(Gt.keyField().canonicalString())||t.Ie.push(new Qs(Gt.keyField(),n))}return t.Ie}function Ie(r){const t=Q(r);return t.Ee||(t.Ee=Sm(t,xr(r))),t.Ee}function Sm(r,t){if(r.limitType==="F")return mc(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new Qs(s.field,o)}));const e=r.endAt?new Ws(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Ws(r.startAt.position,r.startAt.inclusive):null;return mc(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function uo(r,t,e){return new ci(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function ui(r,t){return xo(Ie(r),Ie(t))&&r.limitType===t.limitType}function zl(r){return`${Oo(Ie(r))}|lt:${r.limitType}`}function $n(r){return`Query(target=${(function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map((s=>jl(s))).join(", ")}]`),oi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>tr(s))).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>tr(s))).join(",")),`Target(${n})`})(Ie(r))}; limitType=${r.limitType})`}function hi(r,t){return t.isFoundDocument()&&(function(n,s){const o=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):U.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)})(r,t)&&(function(n,s){for(const o of xr(n))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(r,t)&&(function(n,s){for(const o of n.filters)if(!o.matches(s))return!1;return!0})(r,t)&&(function(n,s){return!(n.startAt&&!(function(a,u,h){const d=dc(a,u,h);return a.inclusive?d<=0:d<0})(n.startAt,xr(n),s)||n.endAt&&!(function(a,u,h){const d=dc(a,u,h);return a.inclusive?d>=0:d>0})(n.endAt,xr(n),s))})(r,t)}function Pm(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function $l(r){return(t,e)=>{let n=!1;for(const s of xr(r)){const o=Vm(s,t,e);if(o!==0)return o;n=n||s.field.isKeyField()}return 0}}function Vm(r,t,e){const n=r.field.isKeyField()?U.comparator(t.key,e.key):(function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?Zn(h,d):G(42886)})(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return G(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,o]of n)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){cn(this.inner,((e,n)=>{for(const[s,o]of n)t(s,o)}))}isEmpty(){return Sl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=new wt(U.comparator);function Le(){return Dm}const Gl=new wt(U.comparator);function Pr(...r){let t=Gl;for(const e of r)t=t.insert(e.key,e);return t}function Kl(r){let t=Gl;return r.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Rn(){return Mr()}function Hl(){return Mr()}function Mr(){return new Vn((r=>r.toString()),((r,t)=>r.isEqual(t)))}const Nm=new wt(U.comparator),km=new Lt(U.comparator);function et(...r){let t=km;for(const e of r)t=t.add(e);return t}const Om=new Lt(tt);function xm(){return Om}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gs(t)?"-0":t}}function Wl(r){return{integerValue:""+r}}function Mm(r,t){return om(t)?Wl(t):Mo(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(){this._=void 0}}function Lm(r,t,e){return r instanceof Ys?(function(s,o){const a={fields:{[Dl]:{stringValue:Vl},[kl]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&No(o)&&(o=ai(o)),o&&(a.fields[Nl]=o),{mapValue:a}})(e,t):r instanceof er?Yl(r,t):r instanceof Kr?Jl(r,t):(function(s,o){const a=Ql(s,o),u=gc(a)+gc(s.Ae);return ao(a)&&ao(s.Ae)?Wl(u):Mo(s.serializer,u)})(r,t)}function Fm(r,t,e){return r instanceof er?Yl(r,t):r instanceof Kr?Jl(r,t):e}function Ql(r,t){return r instanceof Js?(function(n){return ao(n)||(function(o){return!!o&&"doubleValue"in o})(n)})(t)?t:{integerValue:0}:null}class Ys extends di{}class er extends di{constructor(t){super(),this.elements=t}}function Yl(r,t){const e=Xl(t);for(const n of r.elements)e.some((s=>be(s,n)))||e.push(n);return{arrayValue:{values:e}}}class Kr extends di{constructor(t){super(),this.elements=t}}function Jl(r,t){let e=Xl(t);for(const n of r.elements)e=e.filter((s=>!be(s,n)));return{arrayValue:{values:e}}}class Js extends di{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function gc(r){return Ct(r.integerValue||r.doubleValue)}function Xl(r){return ko(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(t,e){this.field=t,this.transform=e}}function Um(r,t){return r.field.isEqual(t.field)&&(function(n,s){return n instanceof er&&s instanceof er||n instanceof Kr&&s instanceof Kr?Xn(n.elements,s.elements,be):n instanceof Js&&s instanceof Js?be(n.Ae,s.Ae):n instanceof Ys&&s instanceof Ys})(r.transform,t.transform)}class jm{constructor(t,e){this.version=t,this.transformResults=e}}class Ae{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ae}static exists(t){return new Ae(void 0,t)}static updateTime(t){return new Ae(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function xs(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class fi{}function Zl(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new eu(r.key,Ae.none()):new Yr(r.key,r.data,Ae.none());{const e=r.data,n=ee.empty();let s=new Lt(Gt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?n.delete(o):n.set(o,a),s=s.add(o)}return new ln(r.key,n,new ce(s.toArray()),Ae.none())}}function qm(r,t,e){r instanceof Yr?(function(s,o,a){const u=s.value.clone(),h=yc(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(r,t,e):r instanceof ln?(function(s,o,a){if(!xs(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=yc(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(tu(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(r,t,e):(function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function Lr(r,t,e,n){return r instanceof Yr?(function(o,a,u,h){if(!xs(o.precondition,a))return u;const d=o.value.clone(),g=Ec(o.fieldTransforms,h,a);return d.setAll(g),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(r,t,e,n):r instanceof ln?(function(o,a,u,h){if(!xs(o.precondition,a))return u;const d=Ec(o.fieldTransforms,h,a),g=a.data;return g.setAll(tu(o)),g.setAll(d),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((E=>E.field)))})(r,t,e,n):(function(o,a,u){return xs(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u})(r,t,e)}function zm(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),o=Ql(n.transform,s||null);o!=null&&(e===null&&(e=ee.empty()),e.set(n.field,o))}return e||null}function _c(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Xn(n,s,((o,a)=>Um(o,a)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Yr extends fi{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ln extends fi{constructor(t,e,n,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function tu(r){const t=new Map;return r.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}})),t}function yc(r,t,e){const n=new Map;ut(r.length===e.length,32656,{Ve:e.length,de:r.length});for(let s=0;s<e.length;s++){const o=r[s],a=o.transform,u=t.data.field(o.field);n.set(o.field,Fm(a,u,e[s]))}return n}function Ec(r,t,e){const n=new Map;for(const s of r){const o=s.transform,a=e.data.field(s.field);n.set(s.field,Lm(o,a,t))}return n}class eu extends fi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $m extends fi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&qm(o,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Lr(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Lr(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Hl();return this.mutations.forEach((s=>{const o=t.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(s.key)?null:u;const h=Zl(a,u);h!==null&&n.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(W.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),et())}isEqual(t){return this.batchId===t.batchId&&Xn(this.mutations,t.mutations,((e,n)=>_c(e,n)))&&Xn(this.baseMutations,t.baseMutations,((e,n)=>_c(e,n)))}}class Lo{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){ut(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let s=(function(){return Nm})();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,n[a].version);return new Lo(t,e,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St,nt;function Wm(r){switch(r){case V.OK:return G(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return G(15467,{code:r})}}function nu(r){if(r===void 0)return Me("GRPC error has no .code"),V.UNKNOWN;switch(r){case St.OK:return V.OK;case St.CANCELLED:return V.CANCELLED;case St.UNKNOWN:return V.UNKNOWN;case St.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case St.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case St.INTERNAL:return V.INTERNAL;case St.UNAVAILABLE:return V.UNAVAILABLE;case St.UNAUTHENTICATED:return V.UNAUTHENTICATED;case St.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case St.NOT_FOUND:return V.NOT_FOUND;case St.ALREADY_EXISTS:return V.ALREADY_EXISTS;case St.PERMISSION_DENIED:return V.PERMISSION_DENIED;case St.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case St.ABORTED:return V.ABORTED;case St.OUT_OF_RANGE:return V.OUT_OF_RANGE;case St.UNIMPLEMENTED:return V.UNIMPLEMENTED;case St.DATA_LOSS:return V.DATA_LOSS;default:return G(39323,{code:r})}}(nt=St||(St={}))[nt.OK=0]="OK",nt[nt.CANCELLED=1]="CANCELLED",nt[nt.UNKNOWN=2]="UNKNOWN",nt[nt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",nt[nt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",nt[nt.NOT_FOUND=5]="NOT_FOUND",nt[nt.ALREADY_EXISTS=6]="ALREADY_EXISTS",nt[nt.PERMISSION_DENIED=7]="PERMISSION_DENIED",nt[nt.UNAUTHENTICATED=16]="UNAUTHENTICATED",nt[nt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",nt[nt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",nt[nt.ABORTED=10]="ABORTED",nt[nt.OUT_OF_RANGE=11]="OUT_OF_RANGE",nt[nt.UNIMPLEMENTED=12]="UNIMPLEMENTED",nt[nt.INTERNAL=13]="INTERNAL",nt[nt.UNAVAILABLE=14]="UNAVAILABLE",nt[nt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=new Xe([4294967295,4294967295],0);function vc(r){const t=Qm().encode(r),e=new yl;return e.update(t),new Uint8Array(e.digest())}function Tc(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Xe([e,n],0),new Xe([s,o],0)]}class Fo{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Vr(`Invalid padding: ${e}`);if(n<0)throw new Vr(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Vr(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Vr(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Xe.fromNumber(this.ge)}ye(t,e,n){let s=t.add(e.multiply(Xe.fromNumber(n)));return s.compare(Ym)===1&&(s=new Xe([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=vc(t),[n,s]=Tc(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(n,s,o);if(!this.we(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Fo(o,s,e);return n.forEach((u=>a.insert(u))),a}insert(t){if(this.ge===0)return;const e=vc(t),[n,s]=Tc(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(n,s,o);this.be(a)}}be(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Vr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t,e,n,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Jr.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new mi(W.min(),s,new wt(tt),Le(),et())}}class Jr{constructor(t,e,n,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Jr(n,e,et(),et(),et())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t,e,n,s){this.Se=t,this.removedTargetIds=e,this.key=n,this.De=s}}class ru{constructor(t,e){this.targetId=t,this.Ce=e}}class su{constructor(t,e,n=Kt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class wc{constructor(){this.ve=0,this.Fe=Ic(),this.Me=Kt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=et(),e=et(),n=et();return this.Fe.forEach(((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:G(38017,{changeType:o})}})),new Jr(this.Me,this.xe,t,e,n)}Ke(){this.Oe=!1,this.Fe=Ic()}qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,ut(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Jm{constructor(t){this.Ge=t,this.ze=new Map,this.je=Le(),this.He=Cs(),this.Je=Cs(),this.Ze=new wt(tt)}Xe(t){for(const e of t.Se)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.We(),n.Ne||n.Ke(),n.Le(t.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.Qe(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:G(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((n,s)=>{this.rt(s)&&e(s)}))}st(t){const e=t.targetId,n=t.Ce.count,s=this.ot(e);if(s){const o=s.target;if(lo(o))if(n===0){const a=new U(o.path);this.et(e,a,Qt.newNoDocument(a,W.min()))}else ut(n===1,20013,{expectedCount:n});else{const a=this._t(e);if(a!==n){const u=this.ut(t),h=u?this.ct(u,t,a):1;if(h!==0){this.it(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:o=0}=e;let a,u;try{a=rn(n).toUint8Array()}catch(h){if(h instanceof Pl)return Sn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Fo(a,s,o)}catch(h){return Sn(h instanceof Vr?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.ge===0?null:u}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let s=0;return n.forEach((o=>{const a=this.Ge.ht(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.et(e,o,null),s++)})),s}Tt(t){const e=new Map;this.ze.forEach(((o,a)=>{const u=this.ot(a);if(u){if(o.current&&lo(u.target)){const h=new U(u.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,Qt.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.Ke())}}));let n=et();this.Je.forEach(((o,a)=>{let u=!0;a.forEachWhile((h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)})),u&&(n=n.add(o))})),this.je.forEach(((o,a)=>a.setReadTime(t)));const s=new mi(t,e,this.Ze,this.je,n);return this.je=Le(),this.He=Cs(),this.Je=Cs(),this.Ze=new wt(tt),s}Ye(t,e){if(!this.rt(t))return;const n=this.Et(t,e.key)?2:0;this.nt(t).qe(e.key,n),this.je=this.je.insert(e.key,e),this.He=this.He.insert(e.key,this.It(e.key).add(t)),this.Je=this.Je.insert(e.key,this.Rt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.qe(e,1):s.Ue(e),this.Je=this.Je.insert(e,this.Rt(e).delete(t)),this.Je=this.Je.insert(e,this.Rt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new wc,this.ze.set(t,e)),e}Rt(t){let e=this.Je.get(t);return e||(e=new Lt(tt),this.Je=this.Je.insert(t,e)),e}It(t){let e=this.He.get(t);return e||(e=new Lt(tt),this.He=this.He.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||M("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new wc),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Cs(){return new wt(U.comparator)}function Ic(){return new wt(U.comparator)}const Xm={asc:"ASCENDING",desc:"DESCENDING"},Zm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tp={and:"AND",or:"OR"};class ep{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ho(r,t){return r.useProto3Json||oi(t)?t:{value:t}}function Xs(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function iu(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function np(r,t){return Xs(r,t.toTimestamp())}function Re(r){return ut(!!r,49232),W.fromTimestamp((function(e){const n=nn(e);return new yt(n.seconds,n.nanos)})(r))}function Bo(r,t){return fo(r,t).canonicalString()}function fo(r,t){const e=(function(s){return new Tt(["projects",s.projectId,"databases",s.database])})(r).child("documents");return t===void 0?e:e.child(t)}function ou(r){const t=Tt.fromString(r);return ut(hu(t),10190,{key:t.toString()}),t}function mo(r,t){return Bo(r.databaseId,t.path)}function $i(r,t){const e=ou(t);if(e.get(1)!==r.databaseId.projectId)throw new L(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new L(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new U(cu(e))}function au(r,t){return Bo(r.databaseId,t)}function rp(r){const t=ou(r);return t.length===4?Tt.emptyPath():cu(t)}function po(r){return new Tt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function cu(r){return ut(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Ac(r,t,e){return{name:mo(r,t),fields:e.value.mapValue.fields}}function sp(r,t){let e;if("targetChange"in t){t.targetChange;const n=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:G(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=(function(d,g){return d.useProto3Json?(ut(g===void 0||typeof g=="string",58123),Kt.fromBase64String(g||"")):(ut(g===void 0||g instanceof Buffer||g instanceof Uint8Array,16193),Kt.fromUint8Array(g||new Uint8Array))})(r,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&(function(d){const g=d.code===void 0?V.UNKNOWN:nu(d.code);return new L(g,d.message||"")})(a);e=new su(n,s,o,u||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=$i(r,n.document.name),o=Re(n.document.updateTime),a=n.document.createTime?Re(n.document.createTime):W.min(),u=new ee({mapValue:{fields:n.document.fields}}),h=Qt.newFoundDocument(s,o,a,u),d=n.targetIds||[],g=n.removedTargetIds||[];e=new Ms(d,g,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=$i(r,n.document),o=n.readTime?Re(n.readTime):W.min(),a=Qt.newNoDocument(s,o),u=n.removedTargetIds||[];e=new Ms([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=$i(r,n.document),o=n.removedTargetIds||[];e=new Ms([],o,s,null)}else{if(!("filter"in t))return G(11601,{Vt:t});{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:o}=n,a=new Hm(s,o),u=n.targetId;e=new ru(u,a)}}return e}function ip(r,t){let e;if(t instanceof Yr)e={update:Ac(r,t.key,t.value)};else if(t instanceof eu)e={delete:mo(r,t.key)};else if(t instanceof ln)e={update:Ac(r,t.key,t.data),updateMask:mp(t.fieldMask)};else{if(!(t instanceof $m))return G(16599,{dt:t.type});e={verify:mo(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((n=>(function(o,a){const u=a.transform;if(u instanceof Ys)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof er)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Kr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Js)return{fieldPath:a.field.canonicalString(),increment:u.Ae};throw G(20930,{transform:a.transform})})(0,n)))),t.precondition.isNone||(e.currentDocument=(function(s,o){return o.updateTime!==void 0?{updateTime:np(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:G(27497)})(r,t.precondition)),e}function op(r,t){return r&&r.length>0?(ut(t!==void 0,14353),r.map((e=>(function(s,o){let a=s.updateTime?Re(s.updateTime):Re(o);return a.isEqual(W.min())&&(a=Re(o)),new jm(a,s.transformResults||[])})(e,t)))):[]}function ap(r,t){return{documents:[au(r,t.path)]}}function cp(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=au(r,s);const o=(function(d){if(d.length!==0)return uu(Se.create(d,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const a=(function(d){if(d.length!==0)return d.map((g=>(function(I){return{field:Gn(I.field),direction:hp(I.dir)}})(g)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=ho(r,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{ft:e,parent:s}}function lp(r){let t=rp(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){ut(n===1,65062);const g=e.from[0];g.allDescendants?s=g.collectionId:t=t.child(g.collectionId)}let o=[];e.where&&(o=(function(E){const I=lu(E);return I instanceof Se&&Bl(I)?I.getFilters():[I]})(e.where));let a=[];e.orderBy&&(a=(function(E){return E.map((I=>(function(N){return new Qs(Kn(N.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(I)))})(e.orderBy));let u=null;e.limit&&(u=(function(E){let I;return I=typeof E=="object"?E.value:E,oi(I)?null:I})(e.limit));let h=null;e.startAt&&(h=(function(E){const I=!!E.before,b=E.values||[];return new Ws(b,I)})(e.startAt));let d=null;return e.endAt&&(d=(function(E){const I=!E.before,b=E.values||[];return new Ws(b,I)})(e.endAt)),Rm(t,s,a,o,u,"F",h,d)}function up(r,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function lu(r){return r.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Kn(e.unaryFilter.field);return Mt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Kn(e.unaryFilter.field);return Mt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Kn(e.unaryFilter.field);return Mt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Kn(e.unaryFilter.field);return Mt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}})(r):r.fieldFilter!==void 0?(function(e){return Mt.create(Kn(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(e){return Se.create(e.compositeFilter.filters.map((n=>lu(n))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G(1026)}})(e.compositeFilter.op))})(r):G(30097,{filter:r})}function hp(r){return Xm[r]}function dp(r){return Zm[r]}function fp(r){return tp[r]}function Gn(r){return{fieldPath:r.canonicalString()}}function Kn(r){return Gt.fromServerFormat(r.fieldPath)}function uu(r){return r instanceof Mt?(function(e){if(e.op==="=="){if(hc(e.value))return{unaryFilter:{field:Gn(e.field),op:"IS_NAN"}};if(uc(e.value))return{unaryFilter:{field:Gn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(hc(e.value))return{unaryFilter:{field:Gn(e.field),op:"IS_NOT_NAN"}};if(uc(e.value))return{unaryFilter:{field:Gn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gn(e.field),op:dp(e.op),value:e.value}}})(r):r instanceof Se?(function(e){const n=e.getFilters().map((s=>uu(s)));return n.length===1?n[0]:{compositeFilter:{op:fp(e.op),filters:n}}})(r):G(54877,{filter:r})}function mp(r){const t=[];return r.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function hu(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function du(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t,e,n,s,o=W.min(),a=W.min(),u=Kt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new We(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new We(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new We(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new We(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(t){this.yt=t}}function gp(r){const t=lp({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?uo(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(){this.Sn=new yp}addToCollectionParentIndex(t,e){return this.Sn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.Sn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(en.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(en.min())}updateCollectionGroup(t,e,n){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class yp{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Lt(Tt.comparator),o=!s.has(n);return this.index[e]=s.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Lt(Tt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},fu=41943040;class te{static withCacheSize(t){return new te(t,te.DEFAULT_COLLECTION_PERCENTILE,te.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */te.DEFAULT_COLLECTION_PERCENTILE=10,te.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,te.DEFAULT=new te(fu,te.DEFAULT_COLLECTION_PERCENTILE,te.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),te.DISABLED=new te(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new nr(0)}static ar(){return new nr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="LruGarbageCollector",Ep=1048576;function bc([r,t],[e,n]){const s=tt(r,e);return s===0?tt(t,n):s}class vp{constructor(t){this.Pr=t,this.buffer=new Lt(bc),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();bc(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Tp{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){M(Cc,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){cr(e)?M(Cc,"Ignoring IndexedDB error during garbage collection: ",e):await ar(e)}await this.Ar(3e5)}))}}class wp{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next((n=>Math.floor(e/100*n)))}nthSequenceNumber(t,e){if(e===0)return P.resolve(ii.ce);const n=new vp(e);return this.Vr.forEachTarget(t,(s=>n.Er(s.sequenceNumber))).next((()=>this.Vr.mr(t,(s=>n.Er(s))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.Vr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Rc)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Rc):this.gr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let n,s,o,a,u,h,d;const g=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,a=Date.now(),this.nthSequenceNumber(t,s)))).next((E=>(n=E,u=Date.now(),this.removeTargets(t,n,e)))).next((E=>(o=E,h=Date.now(),this.removeOrphanedDocuments(t,n)))).next((E=>(d=Date.now(),zn()<=st.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-g}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${E} documents in `+(d-h)+`ms
Total Duration: ${d-g}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:E}))))}}function Ip(r,t){return new wp(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(){this.changes=new Vn((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Qt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?P.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(n!==null&&Lr(n.mutation,s,ce.empty(),yt.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.getLocalViewOfDocuments(t,n,et()).next((()=>n))))}getLocalViewOfDocuments(t,e,n=et()){const s=Rn();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((o=>{let a=Pr();return o.forEach(((u,h)=>{a=a.insert(u,h.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const n=Rn();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,et())))}populateOverlays(t,e,n){const s=[];return n.forEach((o=>{e.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(t,s).next((o=>{o.forEach(((a,u)=>{e.set(a,u)}))}))}computeViews(t,e,n,s){let o=Le();const a=Mr(),u=(function(){return Mr()})();return e.forEach(((h,d)=>{const g=n.get(d.key);s.has(d.key)&&(g===void 0||g.mutation instanceof ln)?o=o.insert(d.key,d):g!==void 0?(a.set(d.key,g.mutation.getFieldMask()),Lr(g.mutation,d,g.mutation.getFieldMask(),yt.now())):a.set(d.key,ce.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((d,g)=>a.set(d,g))),e.forEach(((d,g)=>u.set(d,new Rp(g,a.get(d)??null)))),u)))}recalculateAndSaveOverlays(t,e){const n=Mr();let s=new wt(((a,u)=>a-u)),o=et();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const u of a)u.keys().forEach((h=>{const d=e.get(h);if(d===null)return;let g=n.get(h)||ce.empty();g=u.applyToLocalView(d,g),n.set(h,g);const E=(s.get(u.batchId)||et()).add(h);s=s.insert(u.batchId,E)}))})).next((()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,g=h.value,E=Hl();g.forEach((I=>{if(!o.has(I)){const b=Zl(e.get(I),n.get(I));b!==null&&E.set(I,b),o=o.add(I)}})),a.push(this.documentOverlayCache.saveOverlays(t,d,E))}return P.waitFor(a)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.recalculateAndSaveOverlays(t,n)))}getDocumentsMatchingQuery(t,e,n,s){return Cm(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):bm(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-o.size):P.resolve(Rn());let u=qr,h=o;return a.next((d=>P.forEach(d,((g,E)=>(u<E.largestBatchId&&(u=E.largestBatchId),o.get(g)?P.resolve():this.remoteDocumentCache.getEntry(t,g).next((I=>{h=h.insert(g,I)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,h,d,et()))).next((g=>({batchId:u,changes:Kl(g)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new U(e)).next((n=>{let s=Pr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const o=e.collectionGroup;let a=Pr();return this.indexManager.getCollectionParents(t,o).next((u=>P.forEach(u,(h=>{const d=(function(E,I){return new ci(I,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,n,s).next((g=>{g.forEach(((E,I)=>{a=a.insert(E,I)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,n,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,s)))).next((a=>{o.forEach(((h,d)=>{const g=d.getKey();a.get(g)===null&&(a=a.insert(g,Qt.newInvalidDocument(g)))}));let u=Pr();return a.forEach(((h,d)=>{const g=o.get(h);g!==void 0&&Lr(g.mutation,d,ce.empty(),yt.now()),hi(e,d)&&(u=u.insert(h,d))})),u}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return P.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:Re(s.createTime)}})(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,(function(s){return{name:s.name,query:gp(s.bundledQuery),readTime:Re(s.readTime)}})(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(){this.overlays=new wt(U.comparator),this.Lr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Rn();return P.forEach(e,(s=>this.getOverlay(t,s).next((o=>{o!==null&&n.set(s,o)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((s,o)=>{this.bt(t,e,o)})),P.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Lr.get(n);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.Lr.delete(n)),P.resolve()}getOverlaysForCollection(t,e,n){const s=Rn(),o=e.length+1,a=new U(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>n&&s.set(h.getKey(),h)}return P.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let o=new wt(((d,g)=>d-g));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let g=o.get(d.largestBatchId);g===null&&(g=Rn(),o=o.insert(d.largestBatchId,g)),g.set(d.getKey(),d)}}const u=Rn(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,g)=>u.set(d,g))),!(u.size()>=s)););return P.resolve(u)}bt(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(n.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Km(e,n));let o=this.Lr.get(e);o===void 0&&(o=et(),this.Lr.set(e,o)),this.Lr.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(){this.sessionToken=Kt.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this.kr=new Lt(Bt.Kr),this.qr=new Lt(Bt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const n=new Bt(t,e);this.kr=this.kr.add(n),this.qr=this.qr.add(n)}$r(t,e){t.forEach((n=>this.addReference(n,e)))}removeReference(t,e){this.Wr(new Bt(t,e))}Qr(t,e){t.forEach((n=>this.removeReference(n,e)))}Gr(t){const e=new U(new Tt([])),n=new Bt(e,t),s=new Bt(e,t+1),o=[];return this.qr.forEachInRange([n,s],(a=>{this.Wr(a),o.push(a.key)})),o}zr(){this.kr.forEach((t=>this.Wr(t)))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new U(new Tt([])),n=new Bt(e,t),s=new Bt(e,t+1);let o=et();return this.qr.forEachInRange([n,s],(a=>{o=o.add(a.key)})),o}containsKey(t){const e=new Bt(t,0),n=this.kr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class Bt{constructor(t,e){this.key=t,this.Hr=e}static Kr(t,e){return U.comparator(t.key,e.key)||tt(t.Hr,e.Hr)}static Ur(t,e){return tt(t.Hr,e.Hr)||U.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Jr=new Lt(Bt.Kr)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Gm(o,e,n,s);this.mutationQueue.push(a);for(const u of s)this.Jr=this.Jr.add(new Bt(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.Xr(n),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Do:this.Yn-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Bt(e,0),s=new Bt(e,Number.POSITIVE_INFINITY),o=[];return this.Jr.forEachInRange([n,s],(a=>{const u=this.Zr(a.Hr);o.push(u)})),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Lt(tt);return e.forEach((s=>{const o=new Bt(s,0),a=new Bt(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([o,a],(u=>{n=n.add(u.Hr)}))})),P.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let o=n;U.isDocumentKey(o)||(o=o.child(""));const a=new Bt(new U(o),0);let u=new Lt(tt);return this.Jr.forEachWhile((h=>{const d=h.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.Hr)),!0)}),a),P.resolve(this.Yr(u))}Yr(t){const e=[];return t.forEach((n=>{const s=this.Zr(n);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){ut(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Jr;return P.forEach(e.mutations,(s=>{const o=new Bt(s.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Jr=n}))}nr(t){}containsKey(t,e){const n=new Bt(e,0),s=this.Jr.firstAfterOrEqual(n);return P.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(t){this.ti=t,this.docs=(function(){return new wt(U.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),o=s?s.size:0,a=this.ti(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return P.resolve(n?n.document.mutableCopy():Qt.newInvalidDocument(e))}getEntries(t,e){let n=Le();return e.forEach((s=>{const o=this.docs.get(s);n=n.insert(s,o?o.document.mutableCopy():Qt.newInvalidDocument(s))})),P.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let o=Le();const a=e.path,u=new U(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:g}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||nm(em(g),n)<=0||(s.has(g.key)||hi(e,g))&&(o=o.insert(g.key,g.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,n,s){G(9500)}ni(t,e){return P.forEach(this.docs,(n=>e(n)))}newChangeBuffer(t){return new Np(this)}getSize(t){return P.resolve(this.size)}}class Np extends Ap{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(n)})),P.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(t){this.persistence=t,this.ri=new Vn((e=>Oo(e)),xo),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.ii=0,this.si=new Uo,this.targetCount=0,this.oi=nr._r()}forEachTarget(t,e){return this.ri.forEach(((n,s)=>e(s))),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ii&&(this.ii=e),P.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new nr(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.lr(e),P.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,n){let s=0;const o=[];return this.ri.forEach(((a,u)=>{u.sequenceNumber<=e&&n.get(u.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)})),P.waitFor(o).next((()=>s))}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const n=this.ri.get(e)||null;return P.resolve(n)}addMatchingKeys(t,e,n){return this.si.$r(e,n),P.resolve()}removeMatchingKeys(t,e,n){this.si.Qr(e,n);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach((a=>{o.push(s.markPotentiallyOrphaned(t,a))})),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const n=this.si.jr(e);return P.resolve(n)}containsKey(t,e){return P.resolve(this.si.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t,e){this._i={},this.overlays={},this.ai=new ii(0),this.ui=!1,this.ui=!0,this.ci=new Pp,this.referenceDelegate=t(this),this.li=new kp(this),this.indexManager=new _p,this.remoteDocumentCache=(function(s){return new Dp(s)})((n=>this.referenceDelegate.hi(n))),this.serializer=new pp(e),this.Pi=new bp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Sp,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this._i[t.toKey()];return n||(n=new Vp(e,this.referenceDelegate),this._i[t.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,n){M("MemoryPersistence","Starting transaction:",t);const s=new Op(this.ai.next());return this.referenceDelegate.Ti(),n(s).next((o=>this.referenceDelegate.Ii(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ei(t,e){return P.or(Object.values(this._i).map((n=>()=>n.containsKey(t,e))))}}class Op extends sm{constructor(t){super(),this.currentSequenceNumber=t}}class jo{constructor(t){this.persistence=t,this.Ri=new Uo,this.Ai=null}static Vi(t){return new jo(t)}get di(){if(this.Ai)return this.Ai;throw G(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.di.delete(n.toString()),P.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.di.add(n.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),P.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach((s=>this.di.add(s.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((o=>this.di.add(o.toString())))})).next((()=>n.removeTargetData(t,e)))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.di,(n=>{const s=U.fromPath(n);return this.mi(t,s).next((o=>{o||e.removeEntry(s,W.min())}))})).next((()=>(this.Ai=null,e.apply(t))))}updateLimboDocument(t,e){return this.mi(t,e).next((n=>{n?this.di.delete(e.toString()):this.di.add(e.toString())}))}hi(t){return 0}mi(t,e){return P.or([()=>P.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Zs{constructor(t,e){this.persistence=t,this.fi=new Vn((n=>am(n.path)),((n,s)=>n.isEqual(s))),this.garbageCollector=Ip(this,e)}static Vi(t,e){return new Zs(t,e)}Ti(){}Ii(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next((n=>e.next((s=>n+s))))}pr(t){let e=0;return this.mr(t,(n=>{e++})).next((()=>e))}mr(t,e){return P.forEach(this.fi,((n,s)=>this.wr(t,n,s).next((o=>o?P.resolve():e(s)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ni(t,(a=>this.wr(t,a,e).next((u=>{u||(n++,o.removeEntry(a,W.min()))})))).next((()=>o.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),P.resolve()}removeReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),P.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=ks(t.data.value)),e}wr(t,e,n){return P.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.fi.get(e);return P.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Ts=n,this.Is=s}static Es(t,e){let n=et(),s=et();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new qo(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return wd()?8:im(vd())>0?6:4})()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,s){const o={result:null};return this.gs(t,e).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ps(t,e,s,n).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new xp;return this.ys(t,e,a).next((u=>{if(o.result=u,this.As)return this.ws(t,e,a,u.size)}))})).next((()=>o.result))}ws(t,e,n,s){return n.documentReadCount<this.Vs?(zn()<=st.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",$n(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(zn()<=st.DEBUG&&M("QueryEngine","Query:",$n(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ds*s?(zn()<=st.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",$n(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ie(e))):P.resolve())}gs(t,e){if(pc(e))return P.resolve(null);let n=Ie(e);return this.indexManager.getIndexType(t,n).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=uo(e,null,"F"),n=Ie(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((o=>{const a=et(...o);return this.fs.getDocuments(t,a).next((u=>this.indexManager.getMinOffset(t,n).next((h=>{const d=this.bs(e,u);return this.Ss(e,d,a,h.readTime)?this.gs(t,uo(e,null,"F")):this.Ds(t,d,e,h)}))))})))))}ps(t,e,n,s){return pc(e)||s.isEqual(W.min())?P.resolve(null):this.fs.getDocuments(t,n).next((o=>{const a=this.bs(e,o);return this.Ss(e,a,n,s)?P.resolve(null):(zn()<=st.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),$n(e)),this.Ds(t,a,e,tm(s,qr)).next((u=>u)))}))}bs(t,e){let n=new Lt($l(t));return e.forEach(((s,o)=>{hi(t,o)&&(n=n.add(o))})),n}Ss(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ys(t,e,n){return zn()<=st.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",$n(e)),this.fs.getDocumentsMatchingQuery(t,e,en.min(),n)}Ds(t,e,n,s){return this.fs.getDocumentsMatchingQuery(t,n,s).next((o=>(e.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo="LocalStore",Lp=3e8;class Fp{constructor(t,e,n,s){this.persistence=t,this.Cs=e,this.serializer=s,this.vs=new wt(tt),this.Fs=new Vn((o=>Oo(o)),xo),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(n)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Cp(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.vs)))}}function Bp(r,t,e,n){return new Fp(r,t,e,n)}async function pu(r,t){const e=Q(r);return await e.persistence.runTransaction("Handle user change","readonly",(n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next((o=>(s=o,e.Os(t),e.mutationQueue.getAllMutationBatches(n)))).next((o=>{const a=[],u=[];let h=et();for(const d of s){a.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}for(const d of o){u.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}return e.localDocuments.getDocuments(n,h).next((d=>({Ns:d,removedBatchIds:a,addedBatchIds:u})))}))}))}function Up(r,t){const e=Q(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const s=t.batch.keys(),o=e.xs.newChangeBuffer({trackRemovals:!0});return(function(u,h,d,g){const E=d.batch,I=E.keys();let b=P.resolve();return I.forEach((N=>{b=b.next((()=>g.getEntry(h,N))).next((x=>{const k=d.docVersions.get(N);ut(k!==null,48541),x.version.compareTo(k)<0&&(E.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),g.addEntry(x)))}))})),b.next((()=>u.mutationQueue.removeMutationBatch(h,E)))})(e,n,t,o).next((()=>o.apply(n))).next((()=>e.mutationQueue.performConsistencyCheck(n))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(u){let h=et();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h})(t)))).next((()=>e.localDocuments.getDocuments(n,s)))}))}function gu(r){const t=Q(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.li.getLastRemoteSnapshotVersion(e)))}function jp(r,t){const e=Q(r),n=t.snapshotVersion;let s=e.vs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=e.xs.newChangeBuffer({trackRemovals:!0});s=e.vs;const u=[];t.targetChanges.forEach(((g,E)=>{const I=s.get(E);if(!I)return;u.push(e.li.removeMatchingKeys(o,g.removedDocuments,E).next((()=>e.li.addMatchingKeys(o,g.addedDocuments,E))));let b=I.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(E)!==null?b=b.withResumeToken(Kt.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):g.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(g.resumeToken,n)),s=s.insert(E,b),(function(x,k,j){return x.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=Lp?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0})(I,b,g)&&u.push(e.li.updateTargetData(o,b))}));let h=Le(),d=et();if(t.documentUpdates.forEach((g=>{t.resolvedLimboDocuments.has(g)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,g))})),u.push(qp(o,a,t.documentUpdates).next((g=>{h=g.Bs,d=g.Ls}))),!n.isEqual(W.min())){const g=e.li.getLastRemoteSnapshotVersion(o).next((E=>e.li.setTargetsMetadata(o,o.currentSequenceNumber,n)));u.push(g)}return P.waitFor(u).next((()=>a.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,d))).next((()=>h))})).then((o=>(e.vs=s,o)))}function qp(r,t,e){let n=et(),s=et();return e.forEach((o=>n=n.add(o))),t.getEntries(r,n).next((o=>{let a=Le();return e.forEach(((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(W.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):M(zo,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)})),{Bs:a,Ls:s}}))}function zp(r,t){const e=Q(r);return e.persistence.runTransaction("Get next mutation batch","readonly",(n=>(t===void 0&&(t=Do),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t))))}function $p(r,t){const e=Q(r);return e.persistence.runTransaction("Allocate target","readwrite",(n=>{let s;return e.li.getTargetData(n,t).next((o=>o?(s=o,P.resolve(s)):e.li.allocateTargetId(n).next((a=>(s=new We(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.li.addTargetData(n,s).next((()=>s)))))))})).then((n=>{const s=e.vs.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.vs=e.vs.insert(n.targetId,n),e.Fs.set(t,n.targetId)),n}))}async function go(r,t,e){const n=Q(r),s=n.vs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,(a=>n.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!cr(a))throw a;M(zo,`Failed to update sequence numbers for target ${t}: ${a}`)}n.vs=n.vs.remove(t),n.Fs.delete(s.target)}function Sc(r,t,e){const n=Q(r);let s=W.min(),o=et();return n.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,d,g){const E=Q(h),I=E.Fs.get(g);return I!==void 0?P.resolve(E.vs.get(I)):E.li.getTargetData(d,g)})(n,a,Ie(t)).next((u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.li.getMatchingKeysForTargetId(a,u.targetId).next((h=>{o=h}))})).next((()=>n.Cs.getDocumentsMatchingQuery(a,t,e?s:W.min(),e?o:et()))).next((u=>(Gp(n,Pm(t),u),{documents:u,ks:o})))))}function Gp(r,t,e){let n=r.Ms.get(t)||W.min();e.forEach(((s,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)})),r.Ms.set(t,n)}class Pc{constructor(){this.activeTargetIds=xm()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Kp{constructor(){this.vo=new Pc,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,n){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new Pc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{Mo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="ConnectivityMonitor";class Dc{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){M(Vc,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){M(Vc,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bs=null;function _o(){return bs===null?bs=(function(){return 268435456+Math.round(2147483648*Math.random())})():bs++,"0x"+bs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi="RestConnection",Wp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Qp{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${n}/databases/${s}`,this.$o=this.databaseId.database===Ks?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Wo(t,e,n,s,o){const a=_o(),u=this.Qo(t,e.toUriEncodedString());M(Gi,`Sending RPC '${t}' ${a}:`,u,n);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(h,s,o);const{host:d}=new URL(u),g=Co(d);return this.zo(t,u,h,n,g).then((E=>(M(Gi,`Received RPC '${t}' ${a}: `,E),E)),(E=>{throw Sn(Gi,`RPC '${t}' ${a} failed with error: `,E,"url: ",u,"request:",n),E}))}jo(t,e,n,s,o,a){return this.Wo(t,e,n,s,o)}Go(t,e,n){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+or})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,o)=>t[o]=s)),n&&n.headers.forEach(((s,o)=>t[o]=s))}Qo(t,e){const n=Wp[t];let s=`${this.qo}/v1/${e}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(t){this.Ho=t.Ho,this.Jo=t.Jo}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Jo()}send(t){this.Ho(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="WebChannelConnection",Cr=(r,t,e)=>{r.listen(t,(n=>{try{e(n)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Wn extends Qp{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!Wn.c_){const t=wl();Cr(t,Tl.STAT_EVENT,(e=>{e.stat===so.PROXY?M(Ht,"STAT_EVENT: detected buffering proxy"):e.stat===so.NOPROXY&&M(Ht,"STAT_EVENT: detected no buffering proxy")})),Wn.c_=!0}}zo(t,e,n,s,o){const a=_o();return new Promise(((u,h)=>{const d=new El;d.setWithCredentials(!0),d.listenOnce(vl.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Ns.NO_ERROR:const E=d.getResponseJson();M(Ht,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(E)),u(E);break;case Ns.TIMEOUT:M(Ht,`RPC '${t}' ${a} timed out`),h(new L(V.DEADLINE_EXCEEDED,"Request time out"));break;case Ns.HTTP_ERROR:const I=d.getStatus();if(M(Ht,`RPC '${t}' ${a} failed with status:`,I,"response text:",d.getResponseText()),I>0){let b=d.getResponseJson();Array.isArray(b)&&(b=b[0]);const N=b==null?void 0:b.error;if(N&&N.status&&N.message){const x=(function(j){const B=j.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(B)>=0?B:V.UNKNOWN})(N.status);h(new L(x,N.message))}else h(new L(V.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new L(V.UNAVAILABLE,"Connection failed."));break;default:G(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{M(Ht,`RPC '${t}' ${a} completed.`)}}));const g=JSON.stringify(s);M(Ht,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",g,n,15)}))}T_(t,e,n){const s=_o(),o=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=this.createWebChannelTransport(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Go(u.initMessageHeaders,e,n),u.encodeInitMessageHeaders=!0;const d=o.join("");M(Ht,`Creating RPC '${t}' stream ${s}: ${d}`,u);const g=a.createWebChannel(d,u);this.I_(g);let E=!1,I=!1;const b=new Yp({Ho:N=>{I?M(Ht,`Not sending because RPC '${t}' stream ${s} is closed:`,N):(E||(M(Ht,`Opening RPC '${t}' stream ${s} transport.`),g.open(),E=!0),M(Ht,`RPC '${t}' stream ${s} sending:`,N),g.send(N))},Jo:()=>g.close()});return Cr(g,Sr.EventType.OPEN,(()=>{I||(M(Ht,`RPC '${t}' stream ${s} transport opened.`),b.i_())})),Cr(g,Sr.EventType.CLOSE,(()=>{I||(I=!0,M(Ht,`RPC '${t}' stream ${s} transport closed`),b.o_(),this.E_(g))})),Cr(g,Sr.EventType.ERROR,(N=>{I||(I=!0,Sn(Ht,`RPC '${t}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),b.o_(new L(V.UNAVAILABLE,"The operation could not be completed")))})),Cr(g,Sr.EventType.MESSAGE,(N=>{var x;if(!I){const k=N.data[0];ut(!!k,16349);const j=k,B=(j==null?void 0:j.error)||((x=j[0])==null?void 0:x.error);if(B){M(Ht,`RPC '${t}' stream ${s} received error:`,B);const q=B.status;let ht=(function(w){const p=St[w];if(p!==void 0)return nu(p)})(q),Z=B.message;q==="NOT_FOUND"&&Z.includes("database")&&Z.includes("does not exist")&&Z.includes(this.databaseId.database)&&Sn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ht===void 0&&(ht=V.INTERNAL,Z="Unknown error status: "+q+" with message "+B.message),I=!0,b.o_(new L(ht,Z)),g.close()}else M(Ht,`RPC '${t}' stream ${s} received:`,k),b.__(k)}})),Wn.u_(),setTimeout((()=>{b.s_()}),0),b}terminate(){this.a_.forEach((t=>t.close())),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter((e=>e===t))}Go(t,e,n){super.Go(t,e,n),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Il()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(r){return new Wn(r)}function Ki(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(r){return new ep(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wn.c_=!1;class _u{constructor(t,e,n=1e3,s=1.5,o=6e4){this.Ci=t,this.timerId=e,this.R_=n,this.A_=s,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-n);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),t()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="PersistentStream";class yu{constructor(t,e,n,s,o,a,u,h){this.Ci=t,this.b_=n,this.S_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new _u(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(Me(e.toString()),Me("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,s])=>{this.D_===e&&this.G_(n,s)}),(n=>{t((()=>{const s=new L(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)}))}))}G_(t,e){const n=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.Yo((()=>{n((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{n((()=>this.z_(s)))})),this.stream.onMessage((s=>{n((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return M(Nc,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget((()=>this.D_===t?e():(M(Nc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Xp extends yu{constructor(t,e,n,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}H_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=sp(this.serializer,t),n=(function(o){if(!("targetChange"in o))return W.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?W.min():a.readTime?Re(a.readTime):W.min()})(t);return this.listener.J_(e,n)}Z_(t){const e={};e.database=po(this.serializer),e.addTarget=(function(o,a){let u;const h=a.target;if(u=lo(h)?{documents:ap(o,h)}:{query:cp(o,h).ft},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=iu(o,a.resumeToken);const d=ho(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(W.min())>0){u.readTime=Xs(o,a.snapshotVersion.toTimestamp());const d=ho(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u})(this.serializer,t);const n=up(this.serializer,t);n&&(e.labels=n),this.K_(e)}X_(t){const e={};e.database=po(this.serializer),e.removeTarget=t,this.K_(e)}}class Zp extends yu{constructor(t,e,n,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}H_(t){return ut(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,ut(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){ut(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=op(t.writeResults,t.commitTime),n=Re(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=po(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((n=>ip(this.serializer,n)))};this.K_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{}class eg extends tg{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new L(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Wo(t,fo(e,n),s,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(V.UNKNOWN,o.toString())}))}jo(t,e,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.jo(t,fo(e,n),s,a,u,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(V.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function ng(r,t,e,n){return new eg(r,t,e,n)}class rg{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Me(e),this.aa=!1):M("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn="RemoteStore";class sg{constructor(t,e,n,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo((a=>{n.enqueueAndForget((async()=>{Dn(this)&&(M(Pn,"Restarting streams for network reachability change."),await(async function(h){const d=Q(h);d.Ea.add(4),await Xr(d),d.Va.set("Unknown"),d.Ea.delete(4),await gi(d)})(this))}))})),this.Va=new rg(n,s)}}async function gi(r){if(Dn(r))for(const t of r.Ra)await t(!0)}async function Xr(r){for(const t of r.Ra)await t(!1)}function Eu(r,t){const e=Q(r);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),Ho(e)?Ko(e):lr(e).O_()&&Go(e,t))}function $o(r,t){const e=Q(r),n=lr(e);e.Ia.delete(t),n.O_()&&vu(e,t),e.Ia.size===0&&(n.O_()?n.L_():Dn(e)&&e.Va.set("Unknown"))}function Go(r,t){if(r.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(W.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}lr(r).Z_(t)}function vu(r,t){r.da.$e(t),lr(r).X_(t)}function Ko(r){r.da=new Jm({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),lr(r).start(),r.Va.ua()}function Ho(r){return Dn(r)&&!lr(r).x_()&&r.Ia.size>0}function Dn(r){return Q(r).Ea.size===0}function Tu(r){r.da=void 0}async function ig(r){r.Va.set("Online")}async function og(r){r.Ia.forEach(((t,e)=>{Go(r,t)}))}async function ag(r,t){Tu(r),Ho(r)?(r.Va.ha(t),Ko(r)):r.Va.set("Unknown")}async function cg(r,t,e){if(r.Va.set("Online"),t instanceof su&&t.state===2&&t.cause)try{await(async function(s,o){const a=o.cause;for(const u of o.targetIds)s.Ia.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ia.delete(u),s.da.removeTarget(u))})(r,t)}catch(n){M(Pn,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ti(r,n)}else if(t instanceof Ms?r.da.Xe(t):t instanceof ru?r.da.st(t):r.da.tt(t),!e.isEqual(W.min()))try{const n=await gu(r.localStore);e.compareTo(n)>=0&&await(function(o,a){const u=o.da.Tt(a);return u.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const g=o.Ia.get(d);g&&o.Ia.set(d,g.withResumeToken(h.resumeToken,a))}})),u.targetMismatches.forEach(((h,d)=>{const g=o.Ia.get(h);if(!g)return;o.Ia.set(h,g.withResumeToken(Kt.EMPTY_BYTE_STRING,g.snapshotVersion)),vu(o,h);const E=new We(g.target,h,d,g.sequenceNumber);Go(o,E)})),o.remoteSyncer.applyRemoteEvent(u)})(r,e)}catch(n){M(Pn,"Failed to raise snapshot:",n),await ti(r,n)}}async function ti(r,t,e){if(!cr(t))throw t;r.Ea.add(1),await Xr(r),r.Va.set("Offline"),e||(e=()=>gu(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{M(Pn,"Retrying IndexedDB access"),await e(),r.Ea.delete(1),await gi(r)}))}function wu(r,t){return t().catch((e=>ti(r,e,t)))}async function _i(r){const t=Q(r),e=on(t);let n=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Do;for(;lg(t);)try{const s=await zp(t.localStore,n);if(s===null){t.Ta.length===0&&e.L_();break}n=s.batchId,ug(t,s)}catch(s){await ti(t,s)}Iu(t)&&Au(t)}function lg(r){return Dn(r)&&r.Ta.length<10}function ug(r,t){r.Ta.push(t);const e=on(r);e.O_()&&e.Y_&&e.ea(t.mutations)}function Iu(r){return Dn(r)&&!on(r).x_()&&r.Ta.length>0}function Au(r){on(r).start()}async function hg(r){on(r).ra()}async function dg(r){const t=on(r);for(const e of r.Ta)t.ea(e.mutations)}async function fg(r,t,e){const n=r.Ta.shift(),s=Lo.from(n,t,e);await wu(r,(()=>r.remoteSyncer.applySuccessfulWrite(s))),await _i(r)}async function mg(r,t){t&&on(r).Y_&&await(async function(n,s){if((function(a){return Wm(a)&&a!==V.ABORTED})(s.code)){const o=n.Ta.shift();on(n).B_(),await wu(n,(()=>n.remoteSyncer.rejectFailedWrite(o.batchId,s))),await _i(n)}})(r,t),Iu(r)&&Au(r)}async function kc(r,t){const e=Q(r);e.asyncQueue.verifyOperationInProgress(),M(Pn,"RemoteStore received new credentials");const n=Dn(e);e.Ea.add(3),await Xr(e),n&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await gi(e)}async function pg(r,t){const e=Q(r);t?(e.Ea.delete(2),await gi(e)):t||(e.Ea.add(2),await Xr(e),e.Va.set("Unknown"))}function lr(r){return r.ma||(r.ma=(function(e,n,s){const o=Q(e);return o.sa(),new Xp(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(r.datastore,r.asyncQueue,{Zo:ig.bind(null,r),Yo:og.bind(null,r),t_:ag.bind(null,r),J_:cg.bind(null,r)}),r.Ra.push((async t=>{t?(r.ma.B_(),Ho(r)?Ko(r):r.Va.set("Unknown")):(await r.ma.stop(),Tu(r))}))),r.ma}function on(r){return r.fa||(r.fa=(function(e,n,s){const o=Q(e);return o.sa(),new Zp(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:hg.bind(null,r),t_:mg.bind(null,r),ta:dg.bind(null,r),na:fg.bind(null,r)}),r.Ra.push((async t=>{t?(r.fa.B_(),await _i(r)):(await r.fa.stop(),r.Ta.length>0&&(M(Pn,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(t,e,n,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=o,this.deferred=new Ze,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,o){const a=Date.now()+n,u=new Wo(t,e,a,s,o);return u.start(n),u}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qo(r,t){if(Me("AsyncQueue",`${t}: ${r}`),cr(r))return new L(V.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{static emptySet(t){return new Qn(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||U.comparator(e.key,n.key):(e,n)=>U.comparator(e.key,n.key),this.keyedMap=Pr(),this.sortedSet=new wt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Qn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Qn;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(){this.ga=new wt(U.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?t.type!==0&&n.type===3?this.ga=this.ga.insert(e,t):t.type===3&&n.type!==1?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.ga=this.ga.remove(e):t.type===1&&n.type===2?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):G(63341,{Vt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,n)=>{t.push(n)})),t}}class rr{constructor(t,e,n,s,o,a,u,h,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,s,o){const a=[];return e.forEach((u=>{a.push({type:0,doc:u})})),new rr(t,e,Qn.emptySet(e),a,n,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ui(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((t=>t.Da()))}}class _g{constructor(){this.queries=xc(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,n){const s=Q(e),o=s.queries;s.queries=xc(),o.forEach(((a,u)=>{for(const h of u.ba)h.onError(n)}))})(this,new L(V.ABORTED,"Firestore shutting down"))}}function xc(){return new Vn((r=>zl(r)),ui)}async function Ru(r,t){const e=Q(r);let n=3;const s=t.query;let o=e.queries.get(s);o?!o.Sa()&&t.Da()&&(n=2):(o=new gg,n=t.Da()?0:1);try{switch(n){case 0:o.wa=await e.onListen(s,!0);break;case 1:o.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=Qo(a,`Initialization of query '${$n(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,o),o.ba.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&Yo(e)}async function Cu(r,t){const e=Q(r),n=t.query;let s=3;const o=e.queries.get(n);if(o){const a=o.ba.indexOf(t);a>=0&&(o.ba.splice(a,1),o.ba.length===0?s=t.Da()?0:1:!o.Sa()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function yg(r,t){const e=Q(r);let n=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const u of a.ba)u.Fa(s)&&(n=!0);a.wa=s}}n&&Yo(e)}function Eg(r,t,e){const n=Q(r),s=n.queries.get(t);if(s)for(const o of s.ba)o.onError(e);n.queries.delete(t)}function Yo(r){r.Ca.forEach((t=>{t.next()}))}var yo,Mc;(Mc=yo||(yo={})).Ma="default",Mc.Cache="cache";class bu{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new rr(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const n=e!=="Offline";return(!this.options.Ka||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=rr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==yo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(t){this.key=t}}class Pu{constructor(t){this.key=t}}class vg{constructor(t,e){this.query=t,this.Za=e,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=et(),this.mutatedKeys=et(),this.eu=$l(t),this.tu=new Qn(this.eu)}get nu(){return this.Za}ru(t,e){const n=e?e.iu:new Oc,s=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((g,E)=>{const I=s.get(g),b=hi(this.query,E)?E:null,N=!!I&&this.mutatedKeys.has(I.key),x=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let k=!1;I&&b?I.data.isEqual(b.data)?N!==x&&(n.track({type:3,doc:b}),k=!0):this.su(I,b)||(n.track({type:2,doc:b}),k=!0,(h&&this.eu(b,h)>0||d&&this.eu(b,d)<0)&&(u=!0)):!I&&b?(n.track({type:0,doc:b}),k=!0):I&&!b&&(n.track({type:1,doc:I}),k=!0,(h||d)&&(u=!0)),k&&(b?(a=a.add(b),o=x?o.add(g):o.delete(g)):(a=a.delete(g),o=o.delete(g)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const g=this.query.limitType==="F"?a.last():a.first();a=a.delete(g.key),o=o.delete(g.key),n.track({type:1,doc:g})}return{tu:a,iu:n,Ss:u,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort(((g,E)=>(function(b,N){const x=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{Vt:k})}};return x(b)-x(N)})(g.type,E.type)||this.eu(g.doc,E.doc))),this.ou(n),s=s??!1;const u=e&&!s?this._u():[],h=this.Ya.size===0&&this.current&&!s?1:0,d=h!==this.Xa;return this.Xa=h,a.length!==0||d?{snapshot:new rr(this.query,t.tu,o,a,t.mutatedKeys,h===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Oc,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Za=this.Za.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Za=this.Za.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=et(),this.tu.forEach((n=>{this.uu(n.key)&&(this.Ya=this.Ya.add(n.key))}));const e=[];return t.forEach((n=>{this.Ya.has(n)||e.push(new Pu(n))})),this.Ya.forEach((n=>{t.has(n)||e.push(new Su(n))})),e}cu(t){this.Za=t.ks,this.Ya=et();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return rr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Jo="SyncEngine";class Tg{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class wg{constructor(t){this.key=t,this.hu=!1}}class Ig{constructor(t,e,n,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Vn((u=>zl(u)),ui),this.Iu=new Map,this.Eu=new Set,this.Ru=new wt(U.comparator),this.Au=new Map,this.Vu=new Uo,this.du={},this.mu=new Map,this.fu=nr.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Ag(r,t,e=!0){const n=xu(r);let s;const o=n.Tu.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await Vu(n,t,e,!0),s}async function Rg(r,t){const e=xu(r);await Vu(e,t,!0,!1)}async function Vu(r,t,e,n){const s=await $p(r.localStore,Ie(t)),o=s.targetId,a=r.sharedClientState.addLocalQueryTarget(o,e);let u;return n&&(u=await Cg(r,t,o,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&Eu(r.remoteStore,s),u}async function Cg(r,t,e,n,s){r.pu=(E,I,b)=>(async function(x,k,j,B){let q=k.view.ru(j);q.Ss&&(q=await Sc(x.localStore,k.query,!1).then((({documents:w})=>k.view.ru(w,q))));const ht=B&&B.targetChanges.get(k.targetId),Z=B&&B.targetMismatches.get(k.targetId)!=null,Y=k.view.applyChanges(q,x.isPrimaryClient,ht,Z);return Fc(x,k.targetId,Y.au),Y.snapshot})(r,E,I,b);const o=await Sc(r.localStore,t,!0),a=new vg(t,o.ks),u=a.ru(o.documents),h=Jr.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),d=a.applyChanges(u,r.isPrimaryClient,h);Fc(r,e,d.au);const g=new Tg(t,e,a);return r.Tu.set(t,g),r.Iu.has(e)?r.Iu.get(e).push(t):r.Iu.set(e,[t]),d.snapshot}async function bg(r,t,e){const n=Q(r),s=n.Tu.get(t),o=n.Iu.get(s.targetId);if(o.length>1)return n.Iu.set(s.targetId,o.filter((a=>!ui(a,t)))),void n.Tu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await go(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),e&&$o(n.remoteStore,s.targetId),Eo(n,s.targetId)})).catch(ar)):(Eo(n,s.targetId),await go(n.localStore,s.targetId,!0))}async function Sg(r,t){const e=Q(r),n=e.Tu.get(t),s=e.Iu.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),$o(e.remoteStore,n.targetId))}async function Pg(r,t,e){const n=Mg(r);try{const s=await(function(a,u){const h=Q(a),d=yt.now(),g=u.reduce(((b,N)=>b.add(N.key)),et());let E,I;return h.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let N=Le(),x=et();return h.xs.getEntries(b,g).next((k=>{N=k,N.forEach(((j,B)=>{B.isValidDocument()||(x=x.add(j))}))})).next((()=>h.localDocuments.getOverlayedDocuments(b,N))).next((k=>{E=k;const j=[];for(const B of u){const q=zm(B,E.get(B.key).overlayedDocument);q!=null&&j.push(new ln(B.key,q,Ml(q.value.mapValue),Ae.exists(!0)))}return h.mutationQueue.addMutationBatch(b,d,j,u)})).next((k=>{I=k;const j=k.applyToLocalDocumentSet(E,x);return h.documentOverlayCache.saveOverlays(b,k.batchId,j)}))})).then((()=>({batchId:I.batchId,changes:Kl(E)})))})(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),(function(a,u,h){let d=a.du[a.currentUser.toKey()];d||(d=new wt(tt)),d=d.insert(u,h),a.du[a.currentUser.toKey()]=d})(n,s.batchId,e),await Zr(n,s.changes),await _i(n.remoteStore)}catch(s){const o=Qo(s,"Failed to persist write");e.reject(o)}}async function Du(r,t){const e=Q(r);try{const n=await jp(e.localStore,t);t.targetChanges.forEach(((s,o)=>{const a=e.Au.get(o);a&&(ut(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?ut(a.hu,14607):s.removedDocuments.size>0&&(ut(a.hu,42227),a.hu=!1))})),await Zr(e,n,t)}catch(n){await ar(n)}}function Lc(r,t,e){const n=Q(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Tu.forEach(((o,a)=>{const u=a.view.va(t);u.snapshot&&s.push(u.snapshot)})),(function(a,u){const h=Q(a);h.onlineState=u;let d=!1;h.queries.forEach(((g,E)=>{for(const I of E.ba)I.va(u)&&(d=!0)})),d&&Yo(h)})(n.eventManager,t),s.length&&n.Pu.J_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Vg(r,t,e){const n=Q(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Au.get(t),o=s&&s.key;if(o){let a=new wt(U.comparator);a=a.insert(o,Qt.newNoDocument(o,W.min()));const u=et().add(o),h=new mi(W.min(),new Map,new wt(tt),a,u);await Du(n,h),n.Ru=n.Ru.remove(o),n.Au.delete(t),Xo(n)}else await go(n.localStore,t,!1).then((()=>Eo(n,t,e))).catch(ar)}async function Dg(r,t){const e=Q(r),n=t.batch.batchId;try{const s=await Up(e.localStore,t);ku(e,n,null),Nu(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Zr(e,s)}catch(s){await ar(s)}}async function Ng(r,t,e){const n=Q(r);try{const s=await(function(a,u){const h=Q(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let g;return h.mutationQueue.lookupMutationBatch(d,u).next((E=>(ut(E!==null,37113),g=E.keys(),h.mutationQueue.removeMutationBatch(d,E)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,g,u))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,g))).next((()=>h.localDocuments.getDocuments(d,g)))}))})(n.localStore,t);ku(n,t,e),Nu(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Zr(n,s)}catch(s){await ar(s)}}function Nu(r,t){(r.mu.get(t)||[]).forEach((e=>{e.resolve()})),r.mu.delete(t)}function ku(r,t,e){const n=Q(r);let s=n.du[n.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),n.du[n.currentUser.toKey()]=s}}function Eo(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Iu.get(t))r.Tu.delete(n),e&&r.Pu.yu(n,e);r.Iu.delete(t),r.isPrimaryClient&&r.Vu.Gr(t).forEach((n=>{r.Vu.containsKey(n)||Ou(r,n)}))}function Ou(r,t){r.Eu.delete(t.path.canonicalString());const e=r.Ru.get(t);e!==null&&($o(r.remoteStore,e),r.Ru=r.Ru.remove(t),r.Au.delete(e),Xo(r))}function Fc(r,t,e){for(const n of e)n instanceof Su?(r.Vu.addReference(n.key,t),kg(r,n)):n instanceof Pu?(M(Jo,"Document no longer in limbo: "+n.key),r.Vu.removeReference(n.key,t),r.Vu.containsKey(n.key)||Ou(r,n.key)):G(19791,{wu:n})}function kg(r,t){const e=t.key,n=e.path.canonicalString();r.Ru.get(e)||r.Eu.has(n)||(M(Jo,"New document in limbo: "+e),r.Eu.add(n),Xo(r))}function Xo(r){for(;r.Eu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const e=new U(Tt.fromString(t)),n=r.fu.next();r.Au.set(n,new wg(e)),r.Ru=r.Ru.insert(e,n),Eu(r.remoteStore,new We(Ie(li(e.path)),n,"TargetPurposeLimboResolution",ii.ce))}}async function Zr(r,t,e){const n=Q(r),s=[],o=[],a=[];n.Tu.isEmpty()||(n.Tu.forEach(((u,h)=>{a.push(n.pu(h,t,e).then((d=>{var g;if((d||e)&&n.isPrimaryClient){const E=d?!d.fromCache:(g=e==null?void 0:e.targetChanges.get(h.targetId))==null?void 0:g.current;n.sharedClientState.updateQueryState(h.targetId,E?"current":"not-current")}if(d){s.push(d);const E=qo.Es(h.targetId,d);o.push(E)}})))})),await Promise.all(a),n.Pu.J_(s),await(async function(h,d){const g=Q(h);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>P.forEach(d,(I=>P.forEach(I.Ts,(b=>g.persistence.referenceDelegate.addReference(E,I.targetId,b))).next((()=>P.forEach(I.Is,(b=>g.persistence.referenceDelegate.removeReference(E,I.targetId,b)))))))))}catch(E){if(!cr(E))throw E;M(zo,"Failed to update sequence numbers: "+E)}for(const E of d){const I=E.targetId;if(!E.fromCache){const b=g.vs.get(I),N=b.snapshotVersion,x=b.withLastLimboFreeSnapshotVersion(N);g.vs=g.vs.insert(I,x)}}})(n.localStore,o))}async function Og(r,t){const e=Q(r);if(!e.currentUser.isEqual(t)){M(Jo,"User change. New user:",t.toKey());const n=await pu(e.localStore,t);e.currentUser=t,(function(o,a){o.mu.forEach((u=>{u.forEach((h=>{h.reject(new L(V.CANCELLED,a))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Zr(e,n.Ns)}}function xg(r,t){const e=Q(r),n=e.Au.get(t);if(n&&n.hu)return et().add(n.key);{let s=et();const o=e.Iu.get(t);if(!o)return s;for(const a of o){const u=e.Tu.get(a);s=s.unionWith(u.view.nu)}return s}}function xu(r){const t=Q(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Du.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=xg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Vg.bind(null,t),t.Pu.J_=yg.bind(null,t.eventManager),t.Pu.yu=Eg.bind(null,t.eventManager),t}function Mg(r){const t=Q(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Dg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ng.bind(null,t),t}class ei{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=pi(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Bp(this.persistence,new Mp,t.initialUser,this.serializer)}Cu(t){return new mu(jo.Vi,this.serializer)}Du(t){return new Kp}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ei.provider={build:()=>new ei};class Lg extends ei{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){ut(this.persistence.referenceDelegate instanceof Zs,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Tp(n,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?te.withCacheSize(this.cacheSizeBytes):te.DEFAULT;return new mu((n=>Zs.Vi(n,e)),this.serializer)}}class vo{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Lc(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Og.bind(null,this.syncEngine),await pg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new _g})()}createDatastore(t){const e=pi(t.databaseInfo.databaseId),n=Jp(t.databaseInfo);return ng(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return(function(n,s,o,a,u){return new sg(n,s,o,a,u)})(this.localStore,this.datastore,t.asyncQueue,(e=>Lc(this.syncEngine,e,0)),(function(){return Dc.v()?new Dc:new Hp})())}createSyncEngine(t,e){return(function(s,o,a,u,h,d,g){const E=new Ig(s,o,a,u,h,d);return g&&(E.gu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const o=Q(s);M(Pn,"RemoteStore shutting down."),o.Ea.add(5),await Xr(o),o.Aa.shutdown(),o.Va.set("Unknown")})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}vo.provider={build:()=>new vo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Me("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="FirestoreClient";class Fg{constructor(t,e,n,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this._databaseInfo=s,this.user=Wt.UNAUTHENTICATED,this.clientId=Po.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,(async a=>{M(an,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(n,(a=>(M(an,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ze;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Qo(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Hi(r,t){r.asyncQueue.verifyOperationInProgress(),M(an,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener((async s=>{n.isEqual(s)||(await pu(t.localStore,s),n=s)})),t.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=t}async function Bc(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Bg(r);M(an,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener((n=>kc(t.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,s)=>kc(t.remoteStore,s))),r._onlineComponents=t}async function Bg(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){M(an,"Using user provided OfflineComponentProvider");try{await Hi(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;Sn("Error using user provided cache. Falling back to memory cache: "+e),await Hi(r,new ei)}}else M(an,"Using default OfflineComponentProvider"),await Hi(r,new Lg(void 0));return r._offlineComponents}async function Lu(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(M(an,"Using user provided OnlineComponentProvider"),await Bc(r,r._uninitializedComponentsProvider._online)):(M(an,"Using default OnlineComponentProvider"),await Bc(r,new vo))),r._onlineComponents}function Ug(r){return Lu(r).then((t=>t.syncEngine))}async function To(r){const t=await Lu(r),e=t.eventManager;return e.onListen=Ag.bind(null,t.syncEngine),e.onUnlisten=bg.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Rg.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Sg.bind(null,t.syncEngine),e}function jg(r,t,e,n){const s=new Mu(n),o=new bu(t,s,e);return r.asyncQueue.enqueueAndForget((async()=>Ru(await To(r),o))),()=>{s.Nu(),r.asyncQueue.enqueueAndForget((async()=>Cu(await To(r),o)))}}function qg(r,t,e={}){const n=new Ze;return r.asyncQueue.enqueueAndForget((async()=>(function(o,a,u,h,d){const g=new Mu({next:I=>{g.Nu(),a.enqueueAndForget((()=>Cu(o,E)));const b=I.docs.has(u);!b&&I.fromCache?d.reject(new L(V.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&I.fromCache&&h&&h.source==="server"?d.reject(new L(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(I)},error:I=>d.reject(I)}),E=new bu(li(u.path),g,{includeMetadataChanges:!0,Ka:!0});return Ru(o,E)})(await To(r),r.asyncQueue,t,e,n))),n.promise}function zg(r,t){const e=new Ze;return r.asyncQueue.enqueueAndForget((async()=>Pg(await Ug(r),t,e))),e.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g="ComponentProvider",Uc=new Map;function Gg(r,t,e,n,s){return new um(r,t,e,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Fu(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu="firestore.googleapis.com",jc=!0;class qc{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new L(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Bu,this.ssl=jc}else this.host=t.host,this.ssl=t.ssl??jc;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=fu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Ep)throw new L(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Zf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fu(t.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new L(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new L(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new L(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Zo{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new L(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qc(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new qf;switch(n.type){case"firstParty":return new Kf(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const n=Uc.get(e);n&&(M($g,"Removing Datastore"),Uc.delete(e),n.terminate())})(this),Promise.resolve()}}function Kg(r,t,e,n={}){var d;r=we(r,Zo);const s=Co(t),o=r._getSettings(),a={...o,emulatorOptions:r._getEmulatorOptions()},u=`${t}:${e}`;s&&(pd(`https://${u}`),Ed("Firestore",!0)),o.host!==Bu&&o.host!==u&&Sn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:u,ssl:s,emulatorOptions:n};if(!Br(h,a)&&(r._setSettings(h),n.mockUserToken)){let g,E;if(typeof n.mockUserToken=="string")g=n.mockUserToken,E=Wt.MOCK_USER;else{g=gd(n.mockUserToken,(d=r._app)==null?void 0:d.options.projectId);const I=n.mockUserToken.sub||n.mockUserToken.user_id;if(!I)throw new L(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Wt(I)}r._authCredentials=new zf(new Rl(g,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new yi(this.firestore,t,this._query)}}class Dt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Dt(this.firestore,t,this._key)}toJSON(){return{type:Dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(Qr(e,Dt._jsonSchema))return new Dt(t,n||null,new U(Tt.fromString(e.referencePath)))}}Dt._jsonSchemaVersion="firestore/documentReference/1.0",Dt._jsonSchema={type:Vt("string",Dt._jsonSchemaVersion),referencePath:Vt("string")};class Hr extends yi{constructor(t,e,n){super(t,e,li(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Dt(this.firestore,null,new U(t))}withConverter(t){return new Hr(this.firestore,t,this._path)}}function Hg(r,t,...e){if(r=tn(r),arguments.length===1&&(t=Po.newId()),Xf("doc","path",t),r instanceof Zo){const n=Tt.fromString(t,...e);return nc(n),new Dt(r,null,new U(n))}{if(!(r instanceof Dt||r instanceof Hr))throw new L(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Tt.fromString(t,...e));return nc(n),new Dt(r.firestore,r instanceof Hr?r.converter:null,new U(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc="AsyncQueue";class $c{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new _u(this,"async_queue_retry"),this._c=()=>{const n=Ki();n&&M(zc,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=t;const e=Ki();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Ki();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new Ze;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Yu.push(t),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!cr(t))throw t;M(zc,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((n=>{throw this.nc=n,this.rc=!1,Me("INTERNAL UNHANDLED ERROR: ",Gc(n)),n})).then((n=>(this.rc=!1,n))))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=Wo.createAndSchedule(this,t,e,n,(o=>this.hc(o)));return this.tc.push(s),s}uc(){this.nc&&G(47125,{Pc:Gc(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,n)=>e.targetTimeMs-n.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Gc(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class sr extends Zo{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new $c,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new $c(t),this._firestoreClient=void 0,await t}}}function Wg(r,t){const e=typeof r=="object"?r:Vf(),n=typeof r=="string"?r:Ks,s=Rf(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const o=fd("firestore");o&&Kg(s,...o)}return s}function ta(r){if(r._terminated)throw new L(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Qg(r),r._firestoreClient}function Qg(r){var n,s,o,a;const t=r._freezeSettings(),e=Gg(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,(s=r._app)==null?void 0:s.options.apiKey,t);r._componentsProvider||(o=t.localCache)!=null&&o._offlineComponentProvider&&((a=t.localCache)!=null&&a._onlineComponentProvider)&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new Fg(r._authCredentials,r._appCheckCredentials,r._queue,e,r._componentsProvider&&(function(h){const d=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(d),_online:d}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t){this._byteString=t}static fromBase64String(t){try{return new de(Kt.fromBase64String(t))}catch(e){throw new L(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new de(Kt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:de._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Qr(t,de._jsonSchema))return de.fromBase64String(t.bytes)}}de._jsonSchemaVersion="firestore/bytes/1.0",de._jsonSchema={type:Vt("string",de._jsonSchemaVersion),bytes:Vt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new L(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Gt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new L(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new L(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return tt(this._lat,t._lat)||tt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ce._jsonSchemaVersion}}static fromJSON(t){if(Qr(t,Ce._jsonSchema))return new Ce(t.latitude,t.longitude)}}Ce._jsonSchemaVersion="firestore/geoPoint/1.0",Ce._jsonSchema={type:Vt("string",Ce._jsonSchemaVersion),latitude:Vt("number"),longitude:Vt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(n,s){if(n.length!==s.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==s[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:me._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Qr(t,me._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new me(t.vectorValues);throw new L(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}me._jsonSchemaVersion="firestore/vectorValue/1.0",me._jsonSchema={type:Vt("string",me._jsonSchemaVersion),vectorValues:Vt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=/^__.*__$/;class Jg{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new ln(t,this.data,this.fieldMask,e,this.fieldTransforms):new Yr(t,this.data,e,this.fieldTransforms)}}class Uu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ln(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function ju(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{dataSource:r})}}class vi{constructor(t,e,n,s,o,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,o===void 0&&this.validatePath(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new vi({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){var s;const e=(s=this.path)==null?void 0:s.child(t),n=this.contextWith({path:e,arrayElement:!1});return n.validatePathSegment(t),n}childContextForFieldPath(t){var s;const e=(s=this.path)==null?void 0:s.child(t),n=this.contextWith({path:e,arrayElement:!1});return n.validatePath(),n}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return ni(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(ju(this.dataSource)&&Yg.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class Xg{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||pi(t)}createContext(t,e,n,s=!1){return new vi({dataSource:t,methodName:e,targetDoc:n,path:Gt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qu(r){const t=r._freezeSettings(),e=pi(r._databaseId);return new Xg(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Zg(r,t,e,n,s,o={}){const a=r.createContext(o.merge||o.mergeFields?2:0,t,e,s);ra("Data must be an object, but it was:",a,n);const u=zu(n,a);let h,d;if(o.merge)h=new ce(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const g=[];for(const E of o.mergeFields){const I=Wr(t,E,e);if(!a.contains(I))throw new L(V.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Ku(g,I)||g.push(I)}h=new ce(g),d=a.fieldTransforms.filter((E=>h.covers(E.field)))}else h=null,d=a.fieldTransforms;return new Jg(new ee(u),h,d)}class Ti extends Ei{_toFieldTransform(t){if(t.dataSource!==2)throw t.dataSource===1?t.createError(`${this._methodName}() can only appear at the top level of your update data`):t.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ti}}function t_(r,t,e){return new vi({dataSource:3,targetDoc:t.settings.targetDoc,methodName:r._methodName,arrayElement:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class na extends Ei{constructor(t,e){super(t),this.Ac=e}_toFieldTransform(t){const e=t_(this,t,!0),n=this.Ac.map((o=>ts(o,e))),s=new er(n);return new Bm(t.path,s)}isEqual(t){return t instanceof na&&Br(this.Ac,t.Ac)}}function e_(r,t,e,n){const s=r.createContext(1,t,e);ra("Data must be an object, but it was:",s,n);const o=[],a=ee.empty();cn(n,((h,d)=>{const g=Gu(t,h,e);d=tn(d);const E=s.childContextForFieldPath(g);if(d instanceof Ti)o.push(g);else{const I=ts(d,E);I!=null&&(o.push(g),a.set(g,I))}}));const u=new ce(o);return new Uu(a,u,s.fieldTransforms)}function n_(r,t,e,n,s,o){const a=r.createContext(1,t,e),u=[Wr(t,n,e)],h=[s];if(o.length%2!=0)throw new L(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<o.length;I+=2)u.push(Wr(t,o[I])),h.push(o[I+1]);const d=[],g=ee.empty();for(let I=u.length-1;I>=0;--I)if(!Ku(d,u[I])){const b=u[I];let N=h[I];N=tn(N);const x=a.childContextForFieldPath(b);if(N instanceof Ti)d.push(b);else{const k=ts(N,x);k!=null&&(d.push(b),g.set(b,k))}}const E=new ce(d);return new Uu(g,E,a.fieldTransforms)}function ts(r,t){if($u(r=tn(r)))return ra("Unsupported field value:",t,r),zu(r,t);if(r instanceof Ei)return(function(n,s){if(!ju(s.dataSource))throw s.createError(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return(function(n,s){const o=[];let a=0;for(const u of n){let h=ts(u,s.childContextForArray(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(r,t)}return(function(n,s){if((n=tn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Mm(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=yt.fromDate(n);return{timestampValue:Xs(s.serializer,o)}}if(n instanceof yt){const o=new yt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Xs(s.serializer,o)}}if(n instanceof Ce)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof de)return{bytesValue:iu(s.serializer,n._byteString)};if(n instanceof Dt){const o=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(o))throw s.createError(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Bo(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof me)return(function(a,u){const h=a instanceof me?a.toArray():a;return{mapValue:{fields:{[Ol]:{stringValue:xl},[Hs]:{arrayValue:{values:h.map((g=>{if(typeof g!="number")throw u.createError("VectorValues must only contain numeric values.");return Mo(u.serializer,g)}))}}}}}})(n,s);if(du(n))return n._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Vo(n)}`)})(r,t)}function zu(r,t){const e={};return Sl(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):cn(r,((n,s)=>{const o=ts(s,t.childContextForField(n));o!=null&&(e[n]=o)})),{mapValue:{fields:e}}}function $u(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof yt||r instanceof Ce||r instanceof de||r instanceof Dt||r instanceof Ei||r instanceof me||du(r))}function ra(r,t,e){if(!$u(e)||!Cl(e)){const n=Vo(e);throw n==="an object"?t.createError(r+" a custom object"):t.createError(r+" "+n)}}function Wr(r,t,e){if((t=tn(t))instanceof ea)return t._internalPath;if(typeof t=="string")return Gu(r,t);throw ni("Field path arguments must be of type string or ",r,!1,void 0,e)}const r_=new RegExp("[~\\*/\\[\\]]");function Gu(r,t,e){if(t.search(r_)>=0)throw ni(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new ea(...t.split("."))._internalPath}catch{throw ni(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function ni(r,t,e,n,s){const o=n&&!n.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${n}`),a&&(h+=` in document ${s}`),h+=")"),new L(V.INVALID_ARGUMENT,u+r+h)}function Ku(r,t){return r.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{convertValue(t,e="none"){switch(sn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ct(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(rn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw G(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return cn(t,((s,o)=>{n[s]=this.convertValue(o,e)})),n}convertVectorValue(t){var n,s,o;const e=(o=(s=(n=t.fields)==null?void 0:n[Hs].arrayValue)==null?void 0:s.values)==null?void 0:o.map((a=>Ct(a.doubleValue)));return new me(e)}convertGeoPoint(t){return new Ce(Ct(t.latitude),Ct(t.longitude))}convertArray(t,e){return(t.values||[]).map((n=>this.convertValue(n,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ai(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(zr(t));default:return null}}convertTimestamp(t){const e=nn(t);return new yt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Tt.fromString(t);ut(hu(n),9688,{name:t});const s=new $r(n.get(1),n.get(3)),o=new U(n.popFirst(5));return s.isEqual(e)||Me(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu extends s_{constructor(t){super(),this.firestore=t}convertBytes(t){return new de(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Dt(this.firestore,null,e)}}function i_(...r){return new na("arrayUnion",r)}const Kc="@firebase/firestore",Hc="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(r){return(function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of n)if(o in s&&typeof s[o]=="function")return!0;return!1})(r,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(t,e,n,s,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new o_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(Wr("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class o_ extends Wu{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new L(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function c_(r,t,e){let n;return n=r?r.toFirestore(t):t,n}class Dr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Cn extends Wu{constructor(t,e,n,s,o,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ls(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Wr("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Cn._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Cn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Cn._jsonSchema={type:Vt("string",Cn._jsonSchemaVersion),bundleSource:Vt("string","DocumentSnapshot"),bundleName:Vt("string"),bundle:Vt("string")};class Ls extends Cn{data(t={}){return super.data(t)}}class Yn{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Dr(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Ls(this._firestore,this._userDataWriter,n.key,n,new Dr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new L(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((u=>{const h=new Ls(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Dr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((u=>o||u.type!==3)).map((u=>{const h=new Ls(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Dr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,g=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),g=a.indexOf(u.doc.key)),{type:l_(u.type),doc:h,oldIndex:d,newIndex:g}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Yn._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Po.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),n.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function l_(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:r})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yn._jsonSchemaVersion="firestore/querySnapshot/1.0",Yn._jsonSchema={type:Vt("string",Yn._jsonSchemaVersion),bundleSource:Vt("string","QuerySnapshot"),bundleName:Vt("string"),bundle:Vt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(r){r=we(r,Dt);const t=we(r.firestore,sr),e=ta(t);return qg(e,r._key).then((n=>Yu(t,r,n)))}function Qc(r,t,e){r=we(r,Dt);const n=we(r.firestore,sr),s=c_(r.converter,t),o=qu(n);return Qu(n,[Zg(o,"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,Ae.none())])}function h_(r,t,e,...n){r=we(r,Dt);const s=we(r.firestore,sr),o=qu(s);let a;return a=typeof(t=tn(t))=="string"||t instanceof ea?n_(o,"updateDoc",r._key,t,e,n):e_(o,"updateDoc",r._key,t),Qu(s,[a.toMutation(r._key,Ae.exists(!0))])}function d_(r,...t){var d,g,E;r=tn(r);let e={includeMetadataChanges:!1,source:"default"},n=0;typeof t[n]!="object"||Wc(t[n])||(e=t[n++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(Wc(t[n])){const I=t[n];t[n]=(d=I.next)==null?void 0:d.bind(I),t[n+1]=(g=I.error)==null?void 0:g.bind(I),t[n+2]=(E=I.complete)==null?void 0:E.bind(I)}let o,a,u;if(r instanceof Dt)a=we(r.firestore,sr),u=li(r._key.path),o={next:I=>{t[n]&&t[n](Yu(a,r,I))},error:t[n+1],complete:t[n+2]};else{const I=we(r,yi);a=we(I.firestore,sr),u=I._query;const b=new Hu(a);o={next:N=>{t[n]&&t[n](new Yn(a,b,I,N))},error:t[n+1],complete:t[n+2]},a_(r._query)}const h=ta(a);return jg(h,u,s,o)}function Qu(r,t){const e=ta(r);return zg(e,t)}function Yu(r,t,e){const n=e.docs.get(t._key),s=new Hu(r);return new Cn(r,s,t._key,n,new Dr(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){jf(Pf),$s(new Ur("firestore",((n,{instanceIdentifier:s,options:o})=>{const a=n.getProvider("app").getImmediate(),u=new sr(new $f(n.getProvider("auth-internal")),new Hf(a,n.getProvider("app-check-internal")),hm(a,s),a);return o={useFetchStreams:e,...o},u._setSettings(o),u}),"PUBLIC").setMultipleInstances(!0)),Hn(Kc,Hc,t),Hn(Kc,Hc,"esm2020")})();var f_="firebase",m_="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hn(f_,m_,"app");let Wi=null,Qi=null;const p_=()=>(Wi||(Wi=pl({apiKey:"AIzaSyAEkDsTVEbr-spwGn7NP4WVMGjjFvc_Vnk",authDomain:"parrotbeak-2b0ae.firebaseapp.com",projectId:"parrotbeak-2b0ae",storageBucket:"parrotbeak-2b0ae.appspot.com",messagingSenderId:"696191016129",appId:"1:696191016129:web:9086db78bbf9d939e58840"})),Wi),g_=()=>(Qi||(Qi=Wg(p_())),Qi),Yc=r=>{const t=Object.create(null);for(let e=0;e<r.fields.length;e++)t[r.fields[e]]=r[r.fields[e]];return t};class __{constructor(t,e,n){this.id=t,this.collection=e,this.fields=n,this.ignoreAuth=!1}get ref(){return this._ref||(this._ref=Hg(g_(),this.collection,this.id)),this._ref}fetch(){return u_(this.ref)}create(){return Qc(this.ref,Yc(this))}async save(t=!1,e=Fr){try{const n=await this.fetch().catch(Fr);if(!t&&n&&n.exists())throw this.id+" already exists in "+this.collection+" ...";return e&&e(n),await Qc(this.ref,Yc(this)),!0}catch(n){return Xi(n),!1}}update(t){return h_(this.ref,t).catch(()=>{Xi("Could not update the document...")})}subscribeToData(t){return d_(this.ref,t)}}const Jc=r=>r===Jt.OFFER?"offerIceCandidates":"answerIceCandidates",y_=r=>{const t=(r.getMonth()+1)*31,e=r.getDate();return(t+e).toString().padStart(3,"0")+xh(3)};class Xc extends __{constructor(t,e,n,s=Jn){const o=new Date;super(t||y_(o),"/quinque-rooms",["created","size","offerIceCandidates","answerIceCandidates","turns","answerPubKey","iv"]),t||(this.created=o,this.size=Ao.includes(s)?s:Jn,this.offerIceCandidates=[],this.answerIceCandidates=[],this.turns=al(this.size*this.size),this.answerPubKey=e,this.iv=n)}saveOffer(t){this.offer=t,this.update({offer:t})}saveAnswer(t){this.answer=t,this.update({answer:t})}addIceCandidate(t,e){const n=Jc(t);this.update({[n]:i_(e)})}clearIceCandidates(t){const e=Jc(t);this.update({[e]:[]})}}const Ju=()=>!!(navigator!=null&&navigator.clipboard),E_=r=>Ju()?(navigator.clipboard.writeText(r),!0):!1,v_={iceServers:[{urls:"stun:stun.services.mozilla.com"},{urls:"stun:stun.l.google.com:19302"}]};class T_{constructor(){this.onicecandidate=null,this.onstatechange=null,this.onmessage=null,this.dataChannel=null,this.remoteDescriptionApplied=new Promise(t=>{this.applyRemoteDescription=t})}init(){const t=this;this.connection=new RTCPeerConnection(v_),this.connection.onicecandidate=e=>{t.onicecandidate&&t.onicecandidate(e)},this.connection.onconnectionstatechange=e=>{t.onstatechange&&t.onstatechange(e)},this.connection.ondatachannel=e=>{const{channel:n}=e;n&&(n.onopen=()=>{},n.onclose=()=>{},n.onmessage=s=>{this.onmessage&&this.onmessage(s)},this.dataChannel=n)}}close(){var t;(t=this.connection)==null||t.close()}createDatachannel(t="default"){var e;this.dataChannel=((e=this.connection)==null?void 0:e.createDataChannel(t))||null,this.dataChannel&&(this.dataChannel.onopen=()=>{},this.dataChannel.onclose=()=>{},this.dataChannel.onmessage=n=>{this.onmessage&&this.onmessage(n)})}localDescription(){var t,e;return((e=(t=this.connection)==null?void 0:t.localDescription)==null?void 0:e.sdp)||""}createOffer(){var t;return(t=this.connection)==null?void 0:t.createOffer()}createAnswer(){var t;return(t=this.connection)==null?void 0:t.createAnswer()}async setRemoteDescription(t){var e;await((e=this.connection)==null?void 0:e.setRemoteDescription(t)),this.applyRemoteDescription()}setLocalDescription(t){var e;return(e=this.connection)==null?void 0:e.setLocalDescription(t)}addIceCandidate(t){var e;return(e=this.connection)==null?void 0:e.addIceCandidate(t)}sendChannelMessage(t){var e;if(!this.dataChannel||this.dataChannel.readyState!=="open"){(e=this.connection)==null||e.close();return}this.dataChannel.send(t)}}const mt=new T_,Xu={name:"ECDH",namedCurve:"P-384"},Yi="AES-GCM",Zc=r=>btoa(String.fromCharCode.apply(null,new Uint8Array(r))),tl=r=>{const t=atob(r),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e.buffer},w_=r=>{const t=JSON.parse(r);return crypto.subtle.importKey("jwk",t,Xu,!0,[])};class I_{constructor(){this.pubKey=null,this.prKey=null,this.iv=crypto.getRandomValues(new Uint8Array(12)),this.waitingForSharedSecret=new Promise(t=>{this.resolveShareSecret=t})}init(){return new Promise(t=>{crypto.subtle.generateKey(Xu,!0,["deriveKey"]).then(async e=>{this.pubKey=e.publicKey,this.prKey=e.privateKey,t()})})}async deriveSharedKey(t){return this.prKey?crypto.subtle.deriveKey({name:"ECDH",public:t},this.prKey,{name:Yi,length:256},!0,["encrypt","decrypt"]):null}async exportPublicKeyToJwk(){return this.pubKey?JSON.stringify(await crypto.subtle.exportKey("jwk",this.pubKey)):""}async setSharedKeyFromJwkString(t){this.shared={key:await this.deriveSharedKey(await w_(t))},this.resolveShareSecret()}setIvFromRemote(t){this.iv=new Uint8Array(tl(t))}async ecnrypt(t,e,n){var s;if(e||(e=((s=this.shared)==null?void 0:s.key)||void 0),!e)throw"The key is not generated...";return Zc(await crypto.subtle.encrypt({name:Yi,iv:n||this.iv},e,new TextEncoder().encode(t)))}async decrypt(t,e,n){var s;if(e||(e=((s=this.shared)==null?void 0:s.key)||void 0),!e)throw"Key is not provided...";return new TextDecoder().decode(await crypto.subtle.decrypt({name:Yi,iv:n||this.iv},e,tl(t)))}ivString(){return Zc(this.iv.buffer)}}const zt=new I_,el=()=>{ol.set({text:"",ok:Fr,dismiss:Fr})},Zu=(r,t="OK",e="Cancel")=>new Promise(n=>{ol.set({text:r,okLabel:t,dismissLabel:e,ok:()=>{el(),n(!0)},dismiss:()=>{el(),n(!1)}})});var A_=bt('<p class="text-faded">Your browser does not support webRTC peer-to-peer connections.. If you see this message, please try to change to a browser which supports webRTC (hint: most of modern web browsers do).</p>'),R_=bt('<p class="text-faded"> </p>'),C_=bt("<p> </p>"),b_=bt('<div class="flex flex-row items-center gap-4 pt-6"><!> <!></div>'),S_=bt('<p class="pb-4 text-faded">Room id:&ensp;<span class="text-white"> </span></p> <input readonly=""/> <!>',1);function P_(r,t){ri(t,!0);const e="p-2 border border-gray-700 rounded-md w-full bg-gray-800",n=Ju(),s={};let o=Pt(null),a=Pt(""),u=Pt(null),h=Pt(""),d=Pt(null),g=null;const E={},I=_=>{const v=_.target;v?v.connectionState==="connected"?t.onconnected({size:E.size,status:E.type===Jt.OFFER?Xt.CONNECTED_AS_PLAYER1:Xt.CONNECTED_AS_PLAYER2,turns:E.turns}):v.connectionState==="failed"?H(h,"Negotiation failed. Check your network or VPN..."):v.connectionState==="connecting"?nd("Connecting the peer..."):H(h,"Unknown network error..."):H(h,"Could not create a gaming session...")},b=async(_,v)=>{var ot;if(!v)return;await zt.waitingForSharedSecret;const m={type:"candidate",sdpMid:v.sdpMid,sdpMLineIndex:v.sdpMLineIndex,candidate:v.candidate},K=await zt.ecnrypt(JSON.stringify(m));s[K]||((ot=A(d))==null||ot.addIceCandidate(_,K),s[K]=!0)},N=async()=>{if(!A(d))return;mt.init(),mt.onicecandidate=({candidate:m})=>{b(Jt.ANSWER,m)},mt.onstatechange=I,await zt.setSharedKeyFromJwkString(E.offerPubKey);const _=new RTCSessionDescription({type:Jt.OFFER,sdp:await zt.decrypt(E.offer)});await mt.setRemoteDescription(_);const v=await mt.createAnswer();if(!v||!v.sdp){H(h,"Could not verify the peer connection...");return}await mt.setLocalDescription(new RTCSessionDescription(v)),E.answer=v.sdp,A(d).saveAnswer(await zt.ecnrypt(v.sdp)),A(d).saveOffer("-")},x=async()=>{if(!A(d)||E.answer==="-")return;const _=new RTCSessionDescription({type:Jt.ANSWER,sdp:await zt.decrypt(E.answer)});await mt.setRemoteDescription(_),A(d).saveAnswer("-")},k=async _=>{var ot,It,Et;const v=_.data()||{};if(!Object.keys(v).length)return;const m=["size","turns","offerPubKey","iv"];for(let at=0;at<m.length;at++){const ct=m[at];!E[ct]&&v[ct]&&(E[ct]=v[ct])}!E.answerPubKey&&v.answerPubKey&&(E.answerPubKey=v.answerPubKey,E.type===Jt.OFFER&&(zt.setIvFromRemote(v.iv),await zt.setSharedKeyFromJwkString(v.answerPubKey),E.type===Jt.OFFER&&((ot=A(d))==null||ot.saveOffer(await zt.ecnrypt(mt.localDescription()))))),!E.offer&&v.offer&&(E.offer=v.offer,E.type===Jt.ANSWER&&N()),!E.answer&&v.answer&&(E.answer=v.answer,x());const K=async at=>{await mt.remoteDescriptionApplied;for(let ct=0;ct<at.length;ct++){let qt=null;try{qt=JSON.parse(await zt.decrypt(at[ct]))}catch(Zt){Xi(Zt)}qt&&(s[at[ct]]||(await mt.addIceCandidate(qt.candidate?qt:null),s[at[ct]]=!0))}};E.type===Jt.OFFER&&v.answerIceCandidates.length?(await zt.waitingForSharedSecret,await K(v.answerIceCandidates),(It=A(d))==null||It.clearIceCandidates(Jt.ANSWER)):E.type===Jt.ANSWER&&v.offerIceCandidates.length&&(await zt.waitingForSharedSecret,await K(v.offerIceCandidates),(Et=A(d))==null||Et.clearIceCandidates(Jt.OFFER))},j=async _=>{await zt.init(),H(d,new Xc(_),!0),g=A(d).subscribeToData(k),mt.init(),mt.onicecandidate=({candidate:m})=>{b(Jt.OFFER,m)},mt.onstatechange=I,mt.createDatachannel();const v=await mt.createOffer();if(!v||!v.sdp){H(h,"Could not set up a stable connection...");return}E.type=Jt.OFFER,A(d).update({offerPubKey:await zt.exportPublicKeyToJwk()}),mt.setLocalDescription(v)},B=async()=>{await zt.init();let _=parseInt(He.url.searchParams.get("s")||String(Jn));Ao.includes(_)||(_=Jn),H(d,new Xc("",await zt.exportPublicKeyToJwk(),zt.ivString(),_),!0),await!A(d).save()&&(await Zu("This room ID is already taken. Refresh the page to get a new one."),window.location.reload()),H(a,He.url.protocol+"//"+He.url.host+He.url.pathname+"?room="+A(d).id),A(d).subscribeToData(k),E.type=Jt.ANSWER},q=()=>{H(u,E_(A(a))?{class:"text-green-500",label:"Link copied!"}:{class:"text-red-500",label:"Could not copy..."},!0)};nl(()=>{if(H(o,!!window.RTCPeerConnection),!A(o))return;const _=He.url.searchParams.get("room");_?j(_):B()}),ph(()=>{g&&g()});var ht=An(),Z=fe(ht);{var Y=_=>{Ba(_,{})},w=_=>{var v=A_();pt(_,v)},p=_=>{var v=R_(),m=ft(v,!0);it(v),Te(()=>Ps(m,A(h))),pt(_,v)},y=_=>{var v=S_(),m=fe(v),K=X(ft(m)),ot=ft(K,!0);it(K),it(m);var It=X(m,2);Eh(It),Ut(It,1,jt(e));var Et=X(It,2);{var at=ct=>{var qt=b_(),Zt=ft(qt);qn(Zt,{label:"Copy link",get icon(){return Nh},class:"text-primary border-2 border-primary px-4",onclick:q});var pe=X(Zt,2);{var ne=re=>{var le=C_(),un=ft(le,!0);it(le),Te(()=>{Ut(le,1,jt(A(u).class)),Ps(un,A(u).label)}),pt(re,le)};ve(pe,re=>{A(u)&&re(ne)})}it(qt),pt(ct,qt)};ve(Et,ct=>{n&&ct(at)})}Te(()=>{var ct;Ps(ot,(ct=A(d))==null?void 0:ct.id),vh(It,A(a))}),pt(_,v)},T=_=>{Ba(_,{})};ve(Z,_=>{A(o)===null?_(Y):A(o)?A(h)?_(p,2):A(a)?_(y,3):_(T,-1):_(w,1)})}pt(r,ht),si()}var V_=bt('<div class="flex flex-row gap-1"></div>'),D_=bt("<p>This will reset the current board and it's progress. Continue?</p>"),N_=bt("<p>Player 1 won!</p>"),k_=bt("<p>Player 2 won!</p>"),O_=bt('<p class="text-white">A tie!</p>'),x_=bt('<p>NICE!</p> <div class="h-96 max-w-full max-h-full flex flex-col justify-center items-center"><div><div class="text-4xl text-center"><!> <!></div> <!> <!></div></div>',1),M_=bt("<p>Player disconnected... Please start another session.</p>"),L_=bt('<div class="h-device relative"><div><div class="flex flex-row gap-2 pb-2 pt-3 px-2 items-start"><!> <div class="flex-1 flex flex-row justify-center relative"><div><!> <!></div></div> <!></div> <div class="flex-1 flex flex-col justify-center w-full max-w-150 mx-auto gap-1 px-3"><div class="relative"><p> </p></div> <!></div> <div class="flex flex-row justify-center pb-2"><!></div></div></div> <!> <!> <!> <!>',1);function ty(r,t){ri(t,!0);const e=()=>Qe(Nr,"$enteringMode",o),n=()=>Qe(Tn,"$enteringMode1",o),s=()=>Qe(wn,"$enteringMode2",o),[o,a]=Io(),u="text-color1",h="text-color2";let d=Pt(ws([])),g=Pt(ws([])),E=Pt(0),I=[],b=Pt(!1),N=Pt(!1),x=!1,k=Pt(!1),j=Pt(null),B=null,q=Pt(!1),ht=Pt(null),Z=Pt(ws(vn.AI)),Y=Pt(null),w=Pt(!1);const p=S=>mt.sendChannelMessage(JSON.stringify(S)),y=parseInt(He.url.searchParams.get("s")||String(Jn));let T=Pt(ws(Ao.indexOf(y)>=0?y:Jn));const _=(S,D,F)=>{if(!(!A(d)[S]||A(d)[S][D]!==!1))return A(d)[S][D]=F,[S,D]},v=(S,D)=>[[S,D],[S-1,D],[S+1,D],[S,D-1],[S,D+1]],m=(S,D)=>[[S,D],[S-1,D-1],[S-1,D+1],[S+1,D-1],[S+1,D+1]],K=(S,D)=>[[S,D],[S+1,D-1],[S+2,D-2],[S-1,D+1],[S-2,D+2]],ot=(S,D)=>[[S,D],[S-1,D-1],[S-2,D-2],[S+1,D+1],[S+2,D+2]],It=(S,D)=>[[S,D],[S,D-1],[S,D-2],[S,D+1],[S,D+2]],Et=(S,D)=>[[S,D],[S-1,D],[S-2,D],[S+1,D],[S+2,D]],at=(S,D,F)=>{const z=[];let $=[];switch(e()){case lt.AXES:$=v(S,D);break;case lt.DIAGONAL:$=m(S,D);break;case lt.RISING:$=K(S,D);break;case lt.FALLING:$=ot(S,D);break;case lt.HORIZONTAL:$=It(S,D);break;case lt.VERTICAL:$=Et(S,D);break;default:$=[[S,D]];break}for(let dt=0;dt<$.length;dt++)z.push(_($[dt][0],$[dt][1],F));return z},ct=(S,D)=>{const F=[];for(let z=0;z<S.length;z++){if(!S[z])continue;const[$,dt]=S[z],At=dt+1,Ot=dt+2,he=dt-1,pn=dt-2,Ue=$+1,je=$+2,Fn=$-1,Yt=$-2;A(d)[$][Ot]===D&&A(d)[$][At]!==!1&&F.push([$,At]),A(d)[$][pn]===D&&A(d)[$][he]!==!1&&F.push([$,he]),A(d)[je]&&A(d)[je][dt]===D&&A(d)[Ue][dt]!==!1&&F.push([Ue,dt]),A(d)[Yt]&&A(d)[Yt][dt]===D&&A(d)[Fn][dt]!==!1&&F.push([Fn,dt])}return F},qt=(S,D)=>{const F=ct(S,D);for(let z=0;z<F.length;z++)A(d)[F[z][0]][F[z][1]]=D},Zt=async()=>{H(q,!0),B||(B=new ed(A(d)));const S=await B.selectBlock(e());H(q,!1),S&&pe(S[0],S[1],!0)},pe=async(S,D,F)=>{if(A(k))return;const z=A(ue)?"color1":"color2";if(H(j,null),qt(at(S,D,z),z),!Object.values(A(d)).some($=>$.some(dt=>!dt))){A(se)&&p({type:"placedBlock",rowIndex:S,colIndex:D}),H(k,!0),setTimeout(rs,500);return}yh(E),await sl(),A(ue)&&(oe(Nr,n()),oe(Tn,s()),oe(wn,A(se)?I[A(E)+1]:Vs())),F!==!0&&(A(hn)?Zt():A(se)&&(p({type:"placedBlock",rowIndex:S,colIndex:D}),H(q,!0)))},ne=async({rowIndex:S,colIndex:D})=>{if(Zh.is.webMobile&&(!A(j)||A(j)[0]!==S||A(j)[1]!==D)){H(j,[S,D],!0);return}x=!0,pe(S,D)},re=()=>{const S=[];for(let D=0;D<A(T);D++){S[D]=[];for(let F=0;F<A(T);F++)S[D][F]=!1}H(g,S,!0),H(ht,null),H(j,null)},le=()=>{const S=[];for(let D=0;D<A(T);D++){S[D]=[];for(let F=0;F<A(T);F++)S[D][F]=!1}H(d,S,!0),re()},un=S=>{let D=0,F=0;for(let z=0;z<S.length;z++)for(let $=0;$<S[z].length;$++)S[z][$]==="color1"?D+=Us(S,z,$,"color1"):S[z][$]==="color2"&&(F+=Us(S,z,$,"color2"));return[D,F]},Pe=S=>{le(),H(E,0),oe(Nr,lt.SINGLE),oe(Tn,Vs()),oe(wn,Vs()),ns(),x=!1,H(k,!1),H(q,!1),H(j,null),B?(B.cancelActiveActions(),B=null):A(se)&&(A(Y)===Xt.CONNECTED_AS_PLAYER1&&H(q,!0),S||(I=al(A(T)*A(T)),oe(Tn,I[1]),oe(wn,I[2]),p({type:"resetGame",turns:I})))},ur=({rowIndex:S,colIndex:D})=>{let F=[];switch(e()){case lt.AXES:F=v(S,D);break;case lt.DIAGONAL:F=m(S,D);break;case lt.RISING:F=K(S,D);break;case lt.FALLING:F=ot(S,D);break;case lt.HORIZONTAL:F=It(S,D);break;case lt.VERTICAL:F=Et(S,D);break}for(let z=0;z<F.length;z++)A(g)[F[z][0]]!==void 0&&A(g)[F[z][0]][F[z][1]]!==void 0&&(A(g)[F[z][0]][F[z][1]]=A(fr));H(ht,[S,D],!0)},hr=async()=>{x&&!A(k)&&!await Zu("Finish the game and go to main menu?")||Lh(Bh)},es=()=>{if(A(N)){Fe(),setTimeout(Pe,250);return}if(!x||A(k)){Pe();return}H(b,!0)},ns=()=>{H(b,!1)},rs=()=>{H(N,!0)},Fe=()=>{H(N,!1)},ss=({size:S,status:D,turns:F})=>{H(T,S,!0),H(Y,D,!0),I=F,le(),oe(Tn,F[1]),oe(wn,F[2]),mt.onstatechange=z=>{const $=z.target;(!$||["disconnected","failed"].includes($.connectionState))&&H(Y,Xt.DISCONNECTED,!0)},mt.onmessage=({data:z})=>{try{const{type:$,rowIndex:dt,colIndex:At,turns:Ot}=JSON.parse(z);switch($){case"placedBlock":pe(dt,At,!0),H(q,!1);break;case"resetGame":{const he=()=>{Pe(!0),Ot&&(I=Ot,oe(Tn,Ot[1]),oe(wn,Ot[2]))};A(N)?(Fe(),setTimeout(he,250)):he();break}case"left":mt==null||mt.close(),H(Y,Xt.DISCONNECTED,!0);break;default:break}}catch{mt==null||mt.close(),H(Y,Xt.DISCONNECTED,!0)}},A(Y)===Xt.CONNECTED_AS_PLAYER1&&H(q,!0)},wi=()=>{H(w,!0)},dr=()=>{H(w,!1)};let ue=rt(()=>Uh(A(E))),fr=rt(()=>A(ue)?"color1":"color2"),Nt=rt(()=>A(ue)?u:h),vt=rt(()=>un(A(d))),Nn=rt(()=>"pt-3"+(A(k)?" invisible":"")),hn=rt(()=>A(Z)===vn.AI),se=rt(()=>!A(hn)&&A(Z)===vn.FRIEND_ONLINE),Ii=rt(()=>"h-full flex flex-col relative"+(A(q)?" cursor-wait":"")),dn=rt(()=>A(hn)&&!A(ue)||A(se)&&A(ue)&&A(Y)===Xt.CONNECTED_AS_PLAYER1||A(se)&&!A(ue)&&A(Y)===Xt.CONNECTED_AS_PLAYER2?" text-faded":" "+A(Nt)),is=rt(()=>"font-bold text-center text-sm py-1 rounded-lg mb-2"+A(dn)+(!A(k)&&!A(q)?" pulse-glow":"")),os=rt(()=>A(j)?"Confirm selection":A(ue)?A(hn)||A(se)&&A(Y)===Xt.CONNECTED_AS_PLAYER2?"Your turn":"Player's 1 turn...":A(hn)?"Computer...":A(se)&&A(Y)===Xt.CONNECTED_AS_PLAYER1?"Your turn":"Player's 2 turn..."),mr=rt(()=>A(Y)===Xt.CONNECTING),as=rt(()=>A(se)&&A(Y)===Xt.DISCONNECTED);oe(Th,null),le(),nl(()=>{if(He.url.searchParams.get("room"))H(Z,vn.FRIEND_ONLINE,!0),H(Y,Xt.CONNECTING,!0);else{const D=parseInt(He.url.searchParams.get("m")||String(vn.AI));Object.values(vn).includes(D)&&H(Z,D,!0),A(Z)===vn.FRIEND_ONLINE&&H(Y,Xt.CONNECTING,!0)}Pe()}),Mh(()=>{p({type:"left"}),A(se)&&(mt==null||mt.close())});var cs=L_(),kn=fe(cs),On=ft(kn),Ve=ft(On),xn=ft(Ve);qn(xn,{get icon(){return kh},class:"text-primary",onclick:hr});var fn=X(xn,2),ge=ft(fn),pr=ft(ge);Ua(pr,{get score1(){return A(vt)[0]},get score2(){return A(vt)[1]},score1Class:u,score2Class:h});var Mn=X(pr,2);Yh(Mn,{get class(){return A(Nn)},get color(){return A(Nt)}}),it(ge),it(fn);var ls=X(fn,2);qn(ls,{class:"text-primary",get icon(){return Fa},onclick:es}),it(Ve);var De=X(Ve,2),Ln=ft(De),kt=ft(Ln),us=ft(kt,!0);it(kt),it(Ln);var mn=X(Ln,2);Fs(mn,17,()=>({length:A(T)}),Bs,(S,D,F)=>{var z=V_();Fs(z,21,()=>({length:A(T)}),Bs,($,dt,At,Ot)=>{$h($,{rowIndex:F,colIndex:At,get selected(){return A(d)[F][At]},get selectCandidate(){return A(g)[F][At]},get hoverColor(){return A(fr)},get disabled(){return A(q)},get hoverCoords(){return A(ht)},onclick:ne,onenter:ur,onleave:re})}),it(z),pt(S,z)}),it(De);var Be=X(De,2),Ai=ft(Be);qn(Ai,{label:"Rules",class:"text-faded text-sm",onclick:wi}),it(Be),it(On),it(kn);var hs=X(kn,2);br(hs,{get showing(){return A(b)},title:"Reset the game?",okLabel:"Reset",onok:()=>{Pe()},ondismiss:ns,children:(S,D)=>{var F=D_();pt(S,F)},$$slots:{default:!0}});var Ne=X(hs,2);br(Ne,{get showing(){return A(N)},hideOk:!0,hideCancel:!0,class:"font-bold",ondismiss:Fe,children:(S,D)=>{var F=x_(),z=X(fe(F),2),$=ft(z),dt=ft($),At=ft(dt);{var Ot=Yt=>{var ke=N_();Ut(ke,1,jt(u)),pt(Yt,ke)},he=Yt=>{var ke=k_();Ut(ke,1,jt(h)),pt(Yt,ke)},pn=Yt=>{var ke=O_();pt(Yt,ke)};ve(At,Yt=>{A(vt)[0]>A(vt)[1]?Yt(Ot):A(vt)[0]<A(vt)[1]?Yt(he,1):Yt(pn,-1)})}var Ue=X(At,2);Ua(Ue,{get score1(){return A(vt)[0]},get score2(){return A(vt)[1]},score1Class:"font-bold "+u,score2Class:"font-bold "+h,class:"pt-6 pb-8"}),it(dt);var je=X(dt,2);qn(je,{label:"Play again",get icon(){return Fa},class:"border border-primary text-primary mx-auto px-6",onclick:es});var Fn=X(je,2);qn(Fn,{label:"Back",class:"text-faded mx-auto mt-4 px-6",onclick:Fe}),it($),it(z),pt(S,F)},$$slots:{default:!0}});var ds=X(Ne,2);{let S=rt(()=>A(mr)||A(as));br(ds,{get showing(){return A(S)},title:"Peer connection",hideOk:!0,ondismiss:hr,children:(D,F)=>{var z=An(),$=fe(z);{var dt=Ot=>{var he=M_();pt(Ot,he)},At=Ot=>{P_(Ot,{onconnected:ss})};ve($,Ot=>{A(as)?Ot(dt):Ot(At,-1)})}pt(D,z)},$$slots:{default:!0}})}var Ri=X(ds,2);br(Ri,{get showing(){return A(w)},hideOk:!0,title:"Game rules",ondismiss:dr,children:(S,D)=>{Ph(S)},$$slots:{default:!0}}),Te(()=>{Ut(On,1,jt(A(Ii))),Ut(kt,1,jt(A(is))),Ps(us,A(os))}),pt(r,cs),si(),a()}export{ty as component};
