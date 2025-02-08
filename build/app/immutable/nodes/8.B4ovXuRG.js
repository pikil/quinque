import{g as Tl,t as Pt,j as Ts,a as dt,c as xe,s as ws}from"../chunks/CIrY-q_u.js";import{w as eo,p as Hs,e as Ru,E as wl,c as ct,r as ot,t as Me,g as A,d as st,a as Qs,m as K,l as Rt,f as le,s as X,n as Cu,aR as bu}from"../chunks/BpJTbl1z.js";import{p as ce,i as pe,a as rt}from"../chunks/DGp5DVqz.js";import{s as Nt,c as Ot,I as $e,e as Ds,i as ks,a as Is,r as Su,d as Pu,h as Vu}from"../chunks/Dp40FZ_9.js";import{a as no,b as yn,s as ae}from"../chunks/D5tjMft0.js";import{e as at,d as Du,M as br,r as Xt,g as Jt,h as ku,a as Nu,i as _a,p as fn}from"../chunks/BXsZEuNE.js";import{c as Ou,a as xu,b as Mu,d as Lu,e as Fu,f as Bu,g as Uu,R as ju}from"../chunks/DDv59JQ-.js";import{n as zn,l as qu,r as zu,P as ya,B as Ln}from"../chunks/Cte8ltrv.js";import{o as Il,a as Ku}from"../chunks/DvUrYtOh.js";import{b as $u,g as Gu}from"../chunks/256wIxbu.js";import{r as Wu,h as Hu}from"../chunks/P_dRBVlT.js";import{p as Ge}from"../chunks/D5jTv5GX.js";import{d as Kn,a as ro}from"../chunks/BlcEEe38.js";import{c as Al}from"../chunks/5O2C19qV.js";const As=()=>Math.floor(Math.random()*Object.keys(at).length),Qu=n=>!n||!(n%2),Rs=n=>{switch(n){case at.AXES:return Uu;case at.DIAGONAL:return Bu;case at.RISING:return Fu;case at.FALLING:return Lu;case at.HORIZONTAL:return Mu;case at.VERTICAL:return xu;default:return Ou}},Ns=(n,t,e,r)=>{if(n[t]===void 0||n[t][e]===void 0)return 0;let i=5;const o=t-1,a=t+1;return(n[o]&&n[o][e]===r||n[a]&&n[a][e]===r)&&i--,(n[t][e+1]===r||n[t][e-1]===r)&&i--,i},Rl=n=>{const t=[];t.push(at.SINGLE);for(let e=1;e<n;e++)t.push(As());return t},kr=eo(at.SINGLE),pn=eo(at.SINGLE),mn=eo(at.SINGLE),Yu=async(n,t)=>{t.onclick&&t.onclick({rowIndex:t.rowIndex,colIndex:t.colIndex})};var Xu=Pt('<div role="button" tabindex="0"><!></div>');function Ju(n,t){Hs(t,!0);const[e,r]=no(),i=()=>yn(kr,"$enteringMode",e);let o=ce(t,"hoverCoords",3,null),a=ce(t,"disabled",3,!1),c=ce(t,"selected",3,!1),h=ce(t,"selectCandidate",3,!1),d=ce(t,"hoverColor",3,""),g=Rt(!1);const v=()=>{K(g,!0),setTimeout(()=>{K(g,!1)},600)},R=()=>{t.onenter&&t.onenter({rowIndex:t.rowIndex,colIndex:t.colIndex})},b=()=>{t.onleave&&t.onleave({rowIndex:t.rowIndex,colIndex:t.colIndex})};let N=st(()=>"h-3 w-3 opacity-50"+(h()==="color1"?" text-color1":" text-color2")),x=st(()=>c()==="color1"?" bg-color1 sel-color1":c()==="color2"?" bg-color2 sel-color2":" bg-gray-600"),k=st(()=>c()?"":d()==="color1"?" hover:bg-color1":d()==="color2"?" hover:bg-color2":" hover:bg-gray-400"),B=st(()=>"flex-1 aspect-square text-sm transition-colors duration-300 rounded-xs sm:rounded-md border border-gray-600 bubbly relative cursor-pointer outline-hidden flex flex-col justify-center items-center bg-opacity-80 hover:bg-opacity-100"+A(k)+A(x)+(c()||a()?" pointer-events-none":"")+(A(g)?" animate":"")),z=st(()=>Rs(i())),U=st(()=>o()&&t.rowIndex===o()[0]&&t.colIndex===o()[1]);Ru(()=>{c()&&wl().then(v)});var W=Xu();W.__click=[Yu,t];var mt=ct(W);{var Y=T=>{var p=xe(),m=le(p);{var y=w=>{$e(w,{get name(){return A(z)},class:"h-4 w-4 text-black"})},E=w=>{var _=xe(),J=le(_);{var gt=ft=>{$e(ft,{name:Du,get class(){return A(N)}})};pe(J,ft=>{h()&&ft(gt)},!0)}dt(w,_)};pe(m,w=>{A(U)?w(y):w(E,!1)})}dt(T,p)};pe(mt,T=>{c()||T(Y)})}ot(W),Me(()=>Nt(W,Ot(A(B)))),Ts("mouseenter",W,R),Ts("mouseleave",W,b),Ts("keypress",W,function(...T){var p;(p=zn)==null||p.apply(this,T)}),dt(n,W),Qs(),r()}Tl(["click"]);var Zu=Pt("<div></div>"),th=Pt('<div><div class="transition-transform duration-500"></div></div>');function Mn(n,t){const e="flex flex-col justify-center items-center text-xl";let r=ce(t,"digit",3,0),i=ce(t,"height",3,30),o=ce(t,"width",3,26),a=ce(t,"borderOffset",3,0),c=st(()=>"width: "+(o()+a())+"px;height: "+(i()+a())+"px"),h=st(()=>"overflow-hidden"+(t.class?" "+t.class:"")),d=st(()=>"transform: translateY(-"+r()*(i()+a())+"px)");var g=th(),v=ct(g);Ds(v,20,()=>({length:2}),ks,(R,b)=>{var N=xe(),x=le(N);Ds(x,16,()=>({length:10}),ks,(k,B,z)=>{var U=Zu();Nt(U,Ot(e)),U.textContent=z,Me(()=>Is(U,"style",A(c))),dt(k,U)}),dt(R,N)}),ot(v),ot(g),Me(()=>{Nt(g,Ot(A(h))),Is(g,"style",A(c)),Is(v,"style",A(d))}),dt(n,g)}var eh=Pt('<div><div><!> <div></div> <!> <div></div> <!></div> <div class="text-xs text-gray-500">vs</div> <div><!> <div></div> <!> <div></div> <!></div></div>');function va(n,t){let e=ce(t,"score1",3,0),r=ce(t,"score2",3,0),i=ce(t,"score1Class",3,""),o=ce(t,"score2Class",3,"");const a="border-opacity-30",c="flex flex-row border-2 rounded-md "+a,h="border h-[30px] "+a,d=c+" border-color1",g=c+" border-color2",v=h+" border-color1",R=h+" border-color2",b=J=>{if(J<=0)return[0,0,0];if(J>=1e3)return[9,9,9];const gt=J%10;J=J/10|0;const ft=J%10;return J=J/10|0,[J%10,ft,gt]};let N=st(()=>b(e())),x=st(()=>b(r())),k=st(()=>"flex flex-row gap-3 items-center"+(t.class?" "+t.class:""));var B=eh(),z=ct(B);Nt(z,Ot(d));var U=ct(z);Mn(U,{get digit(){return A(N)[0]},get class(){return i()}});var W=X(U,2);Nt(W,Ot(v));var mt=X(W,2);Mn(mt,{get digit(){return A(N)[1]},get class(){return i()}});var Y=X(mt,2);Nt(Y,Ot(v));var T=X(Y,2);Mn(T,{get digit(){return A(N)[2]},get class(){return i()}}),ot(z);var p=X(z,4);Nt(p,Ot(g));var m=ct(p);Mn(m,{get digit(){return A(x)[0]},get class(){return o()}});var y=X(m,2);Nt(y,Ot(R));var E=X(y,2);Mn(E,{get digit(){return A(x)[1]},get class(){return o()}});var w=X(E,2);Nt(w,Ot(R));var _=X(w,2);Mn(_,{get digit(){return A(x)[2]},get class(){return o()}}),ot(p),ot(B),Me(()=>Nt(B,Ot(A(k)))),dt(n,B)}const nh=(n,t)=>{K(t,!0)};var rh=Pt(`<div class="flex flex-col gap-6"><p class="text-center text-faded">The current sequence is:</p> <div class="flex flex-col items-center justify-center gap-2"><p>Current pattern and colour</p> <!></div> <div class="flex flex-col items-center justify-center gap-2"><p class="text-faded">The pattern to follow</p> <!></div> <div class="flex flex-col items-center justify-center gap-2"><p class="text-faded">The pattern after that</p> <!></div> <div class="text-faded text-sm"><p>* This screen changes with every player's turn;</p> <p>** Refer to <a target="_blank">game rules</a> for more details;</p></div></div>`),sh=Pt('<div role="button" tabindex="0" title="Current play sequence"><!> <!> <!></div> <!>',1);function ih(n,t){Hs(t,!0);const[e,r]=no(),i=()=>yn(kr,"$enteringMode",e),o=()=>yn(pn,"$enteringMode1",e),a=()=>yn(mn,"$enteringMode2",e),c="h-4 w-4",h=c+" text-faded",d="h-8 w-8",g=d+" text-faded";let v=Rt(!1);const R=()=>{K(v,!1)};let b=st(()=>Rs(i())),N=st(()=>Rs(o())),x=st(()=>Rs(a())),k=st(()=>"flex flex-row items-center justify-center gap-6"+(t.class?" "+t.class:"")),B=st(()=>c+" "+t.color),z=st(()=>d+" "+t.color);var U=sh(),W=le(U);W.__click=[nh,v];var mt=ct(W);$e(mt,{get name(){return A(b)},get class(){return A(B)}});var Y=X(mt,2);$e(Y,{get name(){return A(N)},class:h});var T=X(Y,2);$e(T,{get name(){return A(x)},class:h}),ot(W);var p=X(W,2);br(p,{get showing(){return A(v)},hideOk:!0,ondismiss:R,children:(m,y)=>{var E=rh(),w=X(ct(E),2),_=X(ct(w),2);$e(_,{get name(){return A(b)},get class(){return A(z)}}),ot(w);var J=X(w,2),gt=X(ct(J),2);$e(gt,{get name(){return A(N)},class:g}),ot(J);var ft=X(J,2),Vt=X(ct(ft),2);$e(Vt,{get name(){return A(x)},class:g}),ot(ft);var Ct=X(ft,2),Qt=X(ct(Ct),2),me=X(ct(Qt));Is(me,"href",Wu),Nt(me,Ot(qu)),Cu(),ot(Qt),ot(Ct),ot(E),dt(m,E)},$$slots:{default:!0}}),Me(()=>Nt(W,Ot(A(k)))),Ts("keypress",W,function(...m){var y;(y=zn)==null||y.apply(this,m)}),dt(n,U),Qs(),r()}Tl(["click"]);let Os=null;const oh=()=>{Os||(Os=(window.navigator.userAgent||window.navigator.vendor||window.opera||"").toLowerCase())},Ti={},ah=(n,t)=>(Ti[n]===void 0&&(Ti[n]=t()),Ti[n]),lh={is:{get webMobile(){return Os===null&&oh(),ah("webmob",()=>/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|kindle|silk|mobile/i.test(Os||""))}}},Ea="color2",ch=(n,t,e,r)=>{let i=Ns(e,n,t,Ea),o=r.length;for(;o--;){const[a,c]=r[o];e[a]&&e[a][c]===!1&&(i+=Ns(e,a,c,Ea))}return i};class uh{constructor(t){this.selections=t,this.thinking=!1}cancelActiveActions(){this.requestId=Date.now()}getBenefitSums(t){const e=[];for(let r=0;r<this.selections.length;r++){const i=this.selections[r];for(let o=0;o<i.length;o++)i[o]||e.push([r,o,ch(r,o,this.selections,t(r,o))])}return e.sort(([,,r],[,,i])=>i-r),e}selectSingleBlock(){const t=this.getBenefitSums(()=>[]),e=Math.floor(Math.random()*t.length);return[t[e][0],t[e][1]]}selectInAxes(){const t=this.getBenefitSums((e,r)=>[[e-1,r],[e+1,r],[e,r-1],[e,r+1]]);return[t[0][0],t[0][1]]}selectInDiagonals(){const t=this.getBenefitSums((e,r)=>[[e+1,r+1],[e+1,r-1],[e-1,r-1],[e-1,r+1]]);return[t[0][0],t[0][1]]}selectInHorizontal(){const t=this.getBenefitSums((e,r)=>[[e,r+1],[e,r+2],[e,r-1],[e,r-2]]);return[t[0][0],t[0][1]]}selectInVertical(){const t=this.getBenefitSums((e,r)=>[[e+1,r],[e+2,r],[e-1,r],[e-2,r]]);return[t[0][0],t[0][1]]}selectInRisingDiagonal(){const t=this.getBenefitSums((e,r)=>[[e-1,r+1],[e-2,r+2],[e+1,r-1],[e+2,r-2]]);return[t[0][0],t[0][1]]}selectInFallingDiagonal(){const t=this.getBenefitSums((e,r)=>[[e+1,r+1],[e+2,r+2],[e-1,r-1],[e-2,r-2]]);return[t[0][0],t[0][1]]}selectBlock(t){const e=Date.now();return this.requestId=e,new Promise(r=>{setTimeout(()=>{if(this.requestId!==e){r(null);return}switch(t){case at.AXES:r(this.selectInAxes());break;case at.DIAGONAL:r(this.selectInDiagonals());break;case at.HORIZONTAL:r(this.selectInHorizontal());break;case at.VERTICAL:r(this.selectInVertical());break;case at.FALLING:r(this.selectInFallingDiagonal());break;case at.RISING:r(this.selectInRisingDiagonal());break;default:r(this.selectSingleBlock());break}},1500)})}}const Ni=(...n)=>{console.warn("WARN:",...n)},hh=(...n)=>{console.log("INFO:",...n)};var Ta={};/**
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
 */const Cl=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},dh=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],a=n[e++],c=n[e++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},bl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,c=a?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,g=o>>2,v=(o&3)<<4|c>>4;let R=(c&15)<<2|d>>6,b=d&63;h||(b=64,a||(R=64)),r.push(e[g],e[v],e[R],e[b])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Cl(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):dh(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],c=i<n.length?e[n.charAt(i)]:0;++i;const d=i<n.length?e[n.charAt(i)]:64;++i;const v=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||c==null||d==null||v==null)throw new fh;const R=o<<2|c>>4;if(r.push(R),d!==64){const b=c<<4&240|d>>2;if(r.push(b),v!==64){const N=d<<6&192|v;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class fh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ph=function(n){const t=Cl(n);return bl.encodeByteArray(t,!0)},xs=function(n){return ph(n).replace(/\./g,"")},mh=function(n){try{return bl.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function gh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _h=()=>gh().__FIREBASE_DEFAULTS__,yh=()=>{if(typeof process>"u"||typeof Ta>"u")return;const n=Ta.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},vh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&mh(n[1]);return t&&JSON.parse(t)},so=()=>{try{return _h()||yh()||vh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Eh=n=>{var t,e;return(e=(t=so())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Th=n=>{const t=Eh(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Sl=()=>{var n;return(n=so())===null||n===void 0?void 0:n.config};/**
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
 */class wh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Ih(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[xs(JSON.stringify(e)),xs(JSON.stringify(a)),""].join(".")}/**
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
 */function Ah(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rh(){var n;const t=(n=so())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ch(){return!Rh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bh(){try{return typeof indexedDB=="object"}catch{return!1}}function Sh(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const Ph="FirebaseError";class tr extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Ph,Object.setPrototypeOf(this,tr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pl.prototype.create)}}class Pl{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?Vh(o,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new tr(i,c,r)}}function Vh(n,t){return n.replace(Dh,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Dh=/\{\$([^}]+)}/g;function Ms(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],a=t[i];if(wa(o)&&wa(a)){if(!Ms(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function wa(n){return n!==null&&typeof n=="object"}/**
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
 */function Xe(n){return n&&n._delegate?n._delegate:n}class Lr{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const gn="[DEFAULT]";/**
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
 */class kh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new wh;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Oh(t))try{this.getOrInitializeService({instanceIdentifier:gn})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=gn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=gn){return this.instances.has(t)}getOptions(t=gn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Nh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=gn){return this.component?this.component.multipleInstances?t:gn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nh(n){return n===gn?void 0:n}function Oh(n){return n.instantiationMode==="EAGER"}/**
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
 */class xh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new kh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var et;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(et||(et={}));const Mh={debug:et.DEBUG,verbose:et.VERBOSE,info:et.INFO,warn:et.WARN,error:et.ERROR,silent:et.SILENT},Lh=et.INFO,Fh={[et.DEBUG]:"log",[et.VERBOSE]:"log",[et.INFO]:"info",[et.WARN]:"warn",[et.ERROR]:"error"},Bh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Fh[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Vl{constructor(t){this.name=t,this._logLevel=Lh,this._logHandler=Bh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in et))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Mh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,et.DEBUG,...t),this._logHandler(this,et.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,et.VERBOSE,...t),this._logHandler(this,et.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,et.INFO,...t),this._logHandler(this,et.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,et.WARN,...t),this._logHandler(this,et.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,et.ERROR,...t),this._logHandler(this,et.ERROR,...t)}}const Uh=(n,t)=>t.some(e=>n instanceof e);let Ia,Aa;function jh(){return Ia||(Ia=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qh(){return Aa||(Aa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dl=new WeakMap,Oi=new WeakMap,kl=new WeakMap,wi=new WeakMap,io=new WeakMap;function zh(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(He(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Dl.set(e,n)}).catch(()=>{}),io.set(t,n),t}function Kh(n){if(Oi.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Oi.set(n,t)}let xi={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Oi.get(n);if(t==="objectStoreNames")return n.objectStoreNames||kl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return He(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function $h(n){xi=n(xi)}function Gh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Ii(this),t,...e);return kl.set(r,t.sort?t.sort():[t]),He(r)}:qh().includes(n)?function(...t){return n.apply(Ii(this),t),He(Dl.get(this))}:function(...t){return He(n.apply(Ii(this),t))}}function Wh(n){return typeof n=="function"?Gh(n):(n instanceof IDBTransaction&&Kh(n),Uh(n,jh())?new Proxy(n,xi):n)}function He(n){if(n instanceof IDBRequest)return zh(n);if(wi.has(n))return wi.get(n);const t=Wh(n);return t!==n&&(wi.set(n,t),io.set(t,n)),t}const Ii=n=>io.get(n);function Hh(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,t),c=He(a);return r&&a.addEventListener("upgradeneeded",h=>{r(He(a.result),h.oldVersion,h.newVersion,He(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Qh=["get","getKey","getAll","getAllKeys","count"],Yh=["put","add","delete","clear"],Ai=new Map;function Ra(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ai.get(t))return Ai.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Yh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Qh.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,i?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),i&&h.done]))[0]};return Ai.set(t,o),o}$h(n=>({...n,get:(t,e,r)=>Ra(t,e)||n.get(t,e,r),has:(t,e)=>!!Ra(t,e)||n.has(t,e)}));/**
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
 */class Xh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Jh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Jh(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Mi="@firebase/app",Ca="0.10.13";/**
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
 */const Le=new Vl("@firebase/app"),Zh="@firebase/app-compat",td="@firebase/analytics-compat",ed="@firebase/analytics",nd="@firebase/app-check-compat",rd="@firebase/app-check",sd="@firebase/auth",id="@firebase/auth-compat",od="@firebase/database",ad="@firebase/data-connect",ld="@firebase/database-compat",cd="@firebase/functions",ud="@firebase/functions-compat",hd="@firebase/installations",dd="@firebase/installations-compat",fd="@firebase/messaging",pd="@firebase/messaging-compat",md="@firebase/performance",gd="@firebase/performance-compat",_d="@firebase/remote-config",yd="@firebase/remote-config-compat",vd="@firebase/storage",Ed="@firebase/storage-compat",Td="@firebase/firestore",wd="@firebase/vertexai-preview",Id="@firebase/firestore-compat",Ad="firebase",Rd="10.14.1";/**
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
 */const Li="[DEFAULT]",Cd={[Mi]:"fire-core",[Zh]:"fire-core-compat",[ed]:"fire-analytics",[td]:"fire-analytics-compat",[rd]:"fire-app-check",[nd]:"fire-app-check-compat",[sd]:"fire-auth",[id]:"fire-auth-compat",[od]:"fire-rtdb",[ad]:"fire-data-connect",[ld]:"fire-rtdb-compat",[cd]:"fire-fn",[ud]:"fire-fn-compat",[hd]:"fire-iid",[dd]:"fire-iid-compat",[fd]:"fire-fcm",[pd]:"fire-fcm-compat",[md]:"fire-perf",[gd]:"fire-perf-compat",[_d]:"fire-rc",[yd]:"fire-rc-compat",[vd]:"fire-gcs",[Ed]:"fire-gcs-compat",[Td]:"fire-fst",[Id]:"fire-fst-compat",[wd]:"fire-vertex","fire-js":"fire-js",[Ad]:"fire-js-all"};/**
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
 */const Ls=new Map,bd=new Map,Fi=new Map;function ba(n,t){try{n.container.addComponent(t)}catch(e){Le.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Fs(n){const t=n.name;if(Fi.has(t))return Le.debug(`There were multiple attempts to register component ${t}.`),!1;Fi.set(t,n);for(const e of Ls.values())ba(e,n);for(const e of bd.values())ba(e,n);return!0}function Sd(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Pd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qe=new Pl("app","Firebase",Pd);/**
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
 */class Vd{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Qe.create("app-deleted",{appName:this._name})}}/**
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
 */const Dd=Rd;function Nl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Li,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Qe.create("bad-app-name",{appName:String(i)});if(e||(e=Sl()),!e)throw Qe.create("no-options");const o=Ls.get(i);if(o){if(Ms(e,o.options)&&Ms(r,o.config))return o;throw Qe.create("duplicate-app",{appName:i})}const a=new xh(i);for(const h of Fi.values())a.addComponent(h);const c=new Vd(e,r,a);return Ls.set(i,c),c}function kd(n=Li){const t=Ls.get(n);if(!t&&n===Li&&Sl())return Nl();if(!t)throw Qe.create("no-app",{appName:n});return t}function jn(n,t,e){var r;let i=(r=Cd[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${i}" with version "${t}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Le.warn(c.join(" "));return}Fs(new Lr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Nd="firebase-heartbeat-database",Od=1,Fr="firebase-heartbeat-store";let Ri=null;function Ol(){return Ri||(Ri=Hh(Nd,Od,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Fr)}catch(e){console.warn(e)}}}}).catch(n=>{throw Qe.create("idb-open",{originalErrorMessage:n.message})})),Ri}async function xd(n){try{const e=(await Ol()).transaction(Fr),r=await e.objectStore(Fr).get(xl(n));return await e.done,r}catch(t){if(t instanceof tr)Le.warn(t.message);else{const e=Qe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Le.warn(e.message)}}}async function Sa(n,t){try{const r=(await Ol()).transaction(Fr,"readwrite");await r.objectStore(Fr).put(t,xl(n)),await r.done}catch(e){if(e instanceof tr)Le.warn(e.message);else{const r=Qe.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Le.warn(r.message)}}}function xl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Md=1024,Ld=30*24*60*60*1e3;class Fd{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ud(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Pa();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Ld}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Le.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Pa(),{heartbeatsToSend:r,unsentEntries:i}=Bd(this._heartbeatsCache.heartbeats),o=xs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Le.warn(e),""}}}function Pa(){return new Date().toISOString().substring(0,10)}function Bd(n,t=Md){const e=[];let r=n.slice();for(const i of n){const o=e.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Va(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Va(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Ud{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bh()?Sh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await xd(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Va(n){return xs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function jd(n){Fs(new Lr("platform-logger",t=>new Xh(t),"PRIVATE")),Fs(new Lr("heartbeat",t=>new Fd(t),"PRIVATE")),jn(Mi,Ca,n),jn(Mi,Ca,"esm2017"),jn("fire-js","")}jd("");var Da=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vn,Ml;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,p){function m(){}m.prototype=p.prototype,T.D=p.prototype,T.prototype=new m,T.prototype.constructor=T,T.C=function(y,E,w){for(var _=Array(arguments.length-2),J=2;J<arguments.length;J++)_[J-2]=arguments[J];return p.prototype[E].apply(y,_)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,p,m){m||(m=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(m++)|p.charCodeAt(m++)<<8|p.charCodeAt(m++)<<16|p.charCodeAt(m++)<<24;else for(E=0;16>E;++E)y[E]=p[m++]|p[m++]<<8|p[m++]<<16|p[m++]<<24;p=T.g[0],m=T.g[1],E=T.g[2];var w=T.g[3],_=p+(w^m&(E^w))+y[0]+3614090360&4294967295;p=m+(_<<7&4294967295|_>>>25),_=w+(E^p&(m^E))+y[1]+3905402710&4294967295,w=p+(_<<12&4294967295|_>>>20),_=E+(m^w&(p^m))+y[2]+606105819&4294967295,E=w+(_<<17&4294967295|_>>>15),_=m+(p^E&(w^p))+y[3]+3250441966&4294967295,m=E+(_<<22&4294967295|_>>>10),_=p+(w^m&(E^w))+y[4]+4118548399&4294967295,p=m+(_<<7&4294967295|_>>>25),_=w+(E^p&(m^E))+y[5]+1200080426&4294967295,w=p+(_<<12&4294967295|_>>>20),_=E+(m^w&(p^m))+y[6]+2821735955&4294967295,E=w+(_<<17&4294967295|_>>>15),_=m+(p^E&(w^p))+y[7]+4249261313&4294967295,m=E+(_<<22&4294967295|_>>>10),_=p+(w^m&(E^w))+y[8]+1770035416&4294967295,p=m+(_<<7&4294967295|_>>>25),_=w+(E^p&(m^E))+y[9]+2336552879&4294967295,w=p+(_<<12&4294967295|_>>>20),_=E+(m^w&(p^m))+y[10]+4294925233&4294967295,E=w+(_<<17&4294967295|_>>>15),_=m+(p^E&(w^p))+y[11]+2304563134&4294967295,m=E+(_<<22&4294967295|_>>>10),_=p+(w^m&(E^w))+y[12]+1804603682&4294967295,p=m+(_<<7&4294967295|_>>>25),_=w+(E^p&(m^E))+y[13]+4254626195&4294967295,w=p+(_<<12&4294967295|_>>>20),_=E+(m^w&(p^m))+y[14]+2792965006&4294967295,E=w+(_<<17&4294967295|_>>>15),_=m+(p^E&(w^p))+y[15]+1236535329&4294967295,m=E+(_<<22&4294967295|_>>>10),_=p+(E^w&(m^E))+y[1]+4129170786&4294967295,p=m+(_<<5&4294967295|_>>>27),_=w+(m^E&(p^m))+y[6]+3225465664&4294967295,w=p+(_<<9&4294967295|_>>>23),_=E+(p^m&(w^p))+y[11]+643717713&4294967295,E=w+(_<<14&4294967295|_>>>18),_=m+(w^p&(E^w))+y[0]+3921069994&4294967295,m=E+(_<<20&4294967295|_>>>12),_=p+(E^w&(m^E))+y[5]+3593408605&4294967295,p=m+(_<<5&4294967295|_>>>27),_=w+(m^E&(p^m))+y[10]+38016083&4294967295,w=p+(_<<9&4294967295|_>>>23),_=E+(p^m&(w^p))+y[15]+3634488961&4294967295,E=w+(_<<14&4294967295|_>>>18),_=m+(w^p&(E^w))+y[4]+3889429448&4294967295,m=E+(_<<20&4294967295|_>>>12),_=p+(E^w&(m^E))+y[9]+568446438&4294967295,p=m+(_<<5&4294967295|_>>>27),_=w+(m^E&(p^m))+y[14]+3275163606&4294967295,w=p+(_<<9&4294967295|_>>>23),_=E+(p^m&(w^p))+y[3]+4107603335&4294967295,E=w+(_<<14&4294967295|_>>>18),_=m+(w^p&(E^w))+y[8]+1163531501&4294967295,m=E+(_<<20&4294967295|_>>>12),_=p+(E^w&(m^E))+y[13]+2850285829&4294967295,p=m+(_<<5&4294967295|_>>>27),_=w+(m^E&(p^m))+y[2]+4243563512&4294967295,w=p+(_<<9&4294967295|_>>>23),_=E+(p^m&(w^p))+y[7]+1735328473&4294967295,E=w+(_<<14&4294967295|_>>>18),_=m+(w^p&(E^w))+y[12]+2368359562&4294967295,m=E+(_<<20&4294967295|_>>>12),_=p+(m^E^w)+y[5]+4294588738&4294967295,p=m+(_<<4&4294967295|_>>>28),_=w+(p^m^E)+y[8]+2272392833&4294967295,w=p+(_<<11&4294967295|_>>>21),_=E+(w^p^m)+y[11]+1839030562&4294967295,E=w+(_<<16&4294967295|_>>>16),_=m+(E^w^p)+y[14]+4259657740&4294967295,m=E+(_<<23&4294967295|_>>>9),_=p+(m^E^w)+y[1]+2763975236&4294967295,p=m+(_<<4&4294967295|_>>>28),_=w+(p^m^E)+y[4]+1272893353&4294967295,w=p+(_<<11&4294967295|_>>>21),_=E+(w^p^m)+y[7]+4139469664&4294967295,E=w+(_<<16&4294967295|_>>>16),_=m+(E^w^p)+y[10]+3200236656&4294967295,m=E+(_<<23&4294967295|_>>>9),_=p+(m^E^w)+y[13]+681279174&4294967295,p=m+(_<<4&4294967295|_>>>28),_=w+(p^m^E)+y[0]+3936430074&4294967295,w=p+(_<<11&4294967295|_>>>21),_=E+(w^p^m)+y[3]+3572445317&4294967295,E=w+(_<<16&4294967295|_>>>16),_=m+(E^w^p)+y[6]+76029189&4294967295,m=E+(_<<23&4294967295|_>>>9),_=p+(m^E^w)+y[9]+3654602809&4294967295,p=m+(_<<4&4294967295|_>>>28),_=w+(p^m^E)+y[12]+3873151461&4294967295,w=p+(_<<11&4294967295|_>>>21),_=E+(w^p^m)+y[15]+530742520&4294967295,E=w+(_<<16&4294967295|_>>>16),_=m+(E^w^p)+y[2]+3299628645&4294967295,m=E+(_<<23&4294967295|_>>>9),_=p+(E^(m|~w))+y[0]+4096336452&4294967295,p=m+(_<<6&4294967295|_>>>26),_=w+(m^(p|~E))+y[7]+1126891415&4294967295,w=p+(_<<10&4294967295|_>>>22),_=E+(p^(w|~m))+y[14]+2878612391&4294967295,E=w+(_<<15&4294967295|_>>>17),_=m+(w^(E|~p))+y[5]+4237533241&4294967295,m=E+(_<<21&4294967295|_>>>11),_=p+(E^(m|~w))+y[12]+1700485571&4294967295,p=m+(_<<6&4294967295|_>>>26),_=w+(m^(p|~E))+y[3]+2399980690&4294967295,w=p+(_<<10&4294967295|_>>>22),_=E+(p^(w|~m))+y[10]+4293915773&4294967295,E=w+(_<<15&4294967295|_>>>17),_=m+(w^(E|~p))+y[1]+2240044497&4294967295,m=E+(_<<21&4294967295|_>>>11),_=p+(E^(m|~w))+y[8]+1873313359&4294967295,p=m+(_<<6&4294967295|_>>>26),_=w+(m^(p|~E))+y[15]+4264355552&4294967295,w=p+(_<<10&4294967295|_>>>22),_=E+(p^(w|~m))+y[6]+2734768916&4294967295,E=w+(_<<15&4294967295|_>>>17),_=m+(w^(E|~p))+y[13]+1309151649&4294967295,m=E+(_<<21&4294967295|_>>>11),_=p+(E^(m|~w))+y[4]+4149444226&4294967295,p=m+(_<<6&4294967295|_>>>26),_=w+(m^(p|~E))+y[11]+3174756917&4294967295,w=p+(_<<10&4294967295|_>>>22),_=E+(p^(w|~m))+y[2]+718787259&4294967295,E=w+(_<<15&4294967295|_>>>17),_=m+(w^(E|~p))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+w&4294967295}r.prototype.u=function(T,p){p===void 0&&(p=T.length);for(var m=p-this.blockSize,y=this.B,E=this.h,w=0;w<p;){if(E==0)for(;w<=m;)i(this,T,w),w+=this.blockSize;if(typeof T=="string"){for(;w<p;)if(y[E++]=T.charCodeAt(w++),E==this.blockSize){i(this,y),E=0;break}}else for(;w<p;)if(y[E++]=T[w++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=p},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;var m=8*this.o;for(p=T.length-8;p<T.length;++p)T[p]=m&255,m/=256;for(this.u(T),T=Array(16),p=m=0;4>p;++p)for(var y=0;32>y;y+=8)T[m++]=this.g[p]>>>y&255;return T};function o(T,p){var m=c;return Object.prototype.hasOwnProperty.call(m,T)?m[T]:m[T]=p(T)}function a(T,p){this.h=p;for(var m=[],y=!0,E=T.length-1;0<=E;E--){var w=T[E]|0;y&&w==p||(m[E]=w,y=!1)}this.g=m}var c={};function h(T){return-128<=T&&128>T?o(T,function(p){return new a([p|0],0>p?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return v;if(0>T)return k(d(-T));for(var p=[],m=1,y=0;T>=m;y++)p[y]=T/m|0,m*=4294967296;return new a(p,0)}function g(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return k(g(T.substring(1),p));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=d(Math.pow(p,8)),y=v,E=0;E<T.length;E+=8){var w=Math.min(8,T.length-E),_=parseInt(T.substring(E,E+w),p);8>w?(w=d(Math.pow(p,w)),y=y.j(w).add(d(_))):(y=y.j(m),y=y.add(d(_)))}return y}var v=h(0),R=h(1),b=h(16777216);n=a.prototype,n.m=function(){if(x(this))return-k(this).m();for(var T=0,p=1,m=0;m<this.g.length;m++){var y=this.i(m);T+=(0<=y?y:4294967296+y)*p,p*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(N(this))return"0";if(x(this))return"-"+k(this).toString(T);for(var p=d(Math.pow(T,6)),m=this,y="";;){var E=W(m,p).g;m=B(m,E.j(p));var w=((0<m.g.length?m.g[0]:m.h)>>>0).toString(T);if(m=E,N(m))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function N(T){if(T.h!=0)return!1;for(var p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function x(T){return T.h==-1}n.l=function(T){return T=B(this,T),x(T)?-1:N(T)?0:1};function k(T){for(var p=T.g.length,m=[],y=0;y<p;y++)m[y]=~T.g[y];return new a(m,~T.h).add(R)}n.abs=function(){return x(this)?k(this):this},n.add=function(T){for(var p=Math.max(this.g.length,T.g.length),m=[],y=0,E=0;E<=p;E++){var w=y+(this.i(E)&65535)+(T.i(E)&65535),_=(w>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);y=_>>>16,w&=65535,_&=65535,m[E]=_<<16|w}return new a(m,m[m.length-1]&-2147483648?-1:0)};function B(T,p){return T.add(k(p))}n.j=function(T){if(N(this)||N(T))return v;if(x(this))return x(T)?k(this).j(k(T)):k(k(this).j(T));if(x(T))return k(this.j(k(T)));if(0>this.l(b)&&0>T.l(b))return d(this.m()*T.m());for(var p=this.g.length+T.g.length,m=[],y=0;y<2*p;y++)m[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<T.g.length;E++){var w=this.i(y)>>>16,_=this.i(y)&65535,J=T.i(E)>>>16,gt=T.i(E)&65535;m[2*y+2*E]+=_*gt,z(m,2*y+2*E),m[2*y+2*E+1]+=w*gt,z(m,2*y+2*E+1),m[2*y+2*E+1]+=_*J,z(m,2*y+2*E+1),m[2*y+2*E+2]+=w*J,z(m,2*y+2*E+2)}for(y=0;y<p;y++)m[y]=m[2*y+1]<<16|m[2*y];for(y=p;y<2*p;y++)m[y]=0;return new a(m,0)};function z(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function U(T,p){this.g=T,this.h=p}function W(T,p){if(N(p))throw Error("division by zero");if(N(T))return new U(v,v);if(x(T))return p=W(k(T),p),new U(k(p.g),k(p.h));if(x(p))return p=W(T,k(p)),new U(k(p.g),p.h);if(30<T.g.length){if(x(T)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var m=R,y=p;0>=y.l(T);)m=mt(m),y=mt(y);var E=Y(m,1),w=Y(y,1);for(y=Y(y,2),m=Y(m,2);!N(y);){var _=w.add(y);0>=_.l(T)&&(E=E.add(m),w=_),y=Y(y,1),m=Y(m,1)}return p=B(T,E.j(p)),new U(E,p)}for(E=v;0<=T.l(p);){for(m=Math.max(1,Math.floor(T.m()/p.m())),y=Math.ceil(Math.log(m)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=d(m),_=w.j(p);x(_)||0<_.l(T);)m-=y,w=d(m),_=w.j(p);N(w)&&(w=R),E=E.add(w),T=B(T,_)}return new U(E,T)}n.A=function(T){return W(this,T).h},n.and=function(T){for(var p=Math.max(this.g.length,T.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)&T.i(y);return new a(m,this.h&T.h)},n.or=function(T){for(var p=Math.max(this.g.length,T.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)|T.i(y);return new a(m,this.h|T.h)},n.xor=function(T){for(var p=Math.max(this.g.length,T.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)^T.i(y);return new a(m,this.h^T.h)};function mt(T){for(var p=T.g.length+1,m=[],y=0;y<p;y++)m[y]=T.i(y)<<1|T.i(y-1)>>>31;return new a(m,T.h)}function Y(T,p){var m=p>>5;p%=32;for(var y=T.g.length-m,E=[],w=0;w<y;w++)E[w]=0<p?T.i(w+m)>>>p|T.i(w+m+1)<<32-p:T.i(w+m);return new a(E,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ml=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=g,vn=a}).apply(typeof Da<"u"?Da:typeof self<"u"?self:typeof window<"u"?window:{});var _s=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ll,Sr,Fl,Cs,Bi,Bl,Ul,jl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,l,u){return s==Array.prototype||s==Object.prototype||(s[l]=u.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof _s=="object"&&_s];for(var l=0;l<s.length;++l){var u=s[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function i(s,l){if(l)t:{var u=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var I=s[f];if(!(I in u))break t;u=u[I]}s=s[s.length-1],f=u[s],l=l(f),l!=f&&l!=null&&t(u,s,{configurable:!0,writable:!0,value:l})}}function o(s,l){s instanceof String&&(s+="");var u=0,f=!1,I={next:function(){if(!f&&u<s.length){var C=u++;return{value:l(C,s[C]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(s){var l=typeof s;return l=l!="object"?l:s?Array.isArray(s)?"array":l:"null",l=="array"||l=="object"&&typeof s.length=="number"}function d(s){var l=typeof s;return l=="object"&&s!=null||l=="function"}function g(s,l,u){return s.call.apply(s.bind,arguments)}function v(s,l,u){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),s.apply(l,I)}}return function(){return s.apply(l,arguments)}}function R(s,l,u){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:v,R.apply(null,arguments)}function b(s,l){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function N(s,l){function u(){}u.prototype=l.prototype,s.aa=l.prototype,s.prototype=new u,s.prototype.constructor=s,s.Qb=function(f,I,C){for(var O=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)O[pt-2]=arguments[pt];return l.prototype[I].apply(f,O)}}function x(s){const l=s.length;if(0<l){const u=Array(l);for(let f=0;f<l;f++)u[f]=s[f];return u}return[]}function k(s,l){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const I=s.length||0,C=f.length||0;s.length=I+C;for(let O=0;O<C;O++)s[I+O]=f[O]}else s.push(f)}}class B{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function z(s){return/^[\s\xa0]*$/.test(s)}function U(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function W(s){return W[" "](s),s}W[" "]=function(){};var mt=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function Y(s,l,u){for(const f in s)l.call(u,s[f],f,s)}function T(s,l){for(const u in s)l.call(void 0,s[u],u,s)}function p(s){const l={};for(const u in s)l[u]=s[u];return l}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,l){let u,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(u in f)s[u]=f[u];for(let C=0;C<m.length;C++)u=m[C],Object.prototype.hasOwnProperty.call(f,u)&&(s[u]=f[u])}}function E(s){var l=1;s=s.split(":");const u=[];for(;0<l&&s.length;)u.push(s.shift()),l--;return s.length&&u.push(s.join(":")),u}function w(s){c.setTimeout(()=>{throw s},0)}function _(){var s=Qt;let l=null;return s.g&&(l=s.g,s.g=s.g.next,s.g||(s.h=null),l.next=null),l}class J{constructor(){this.h=this.g=null}add(l,u){const f=gt.get();f.set(l,u),this.h?this.h.next=f:this.g=f,this.h=f}}var gt=new B(()=>new ft,s=>s.reset());class ft{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Vt,Ct=!1,Qt=new J,me=()=>{const s=c.Promise.resolve(void 0);Vt=()=>{s.then(sr)}};var sr=()=>{for(var s;s=_();){try{s.h.call(s.g)}catch(u){w(u)}var l=gt;l.j(s),100>l.h&&(l.h++,s.next=l.g,l.g=s)}Ct=!1};function Zt(){this.s=this.s,this.C=this.C}Zt.prototype.s=!1,Zt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Zt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _t(s,l){this.type=s,this.g=this.target=l,this.defaultPrevented=!1}_t.prototype.h=function(){this.defaultPrevented=!0};var nn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,l=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};c.addEventListener("test",u,l),c.removeEventListener("test",u,l)}catch{}return s}();function se(s,l){if(_t.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var u=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=l,l=s.relatedTarget){if(mt){t:{try{W(l.nodeName);var I=!0;break t}catch{}I=!1}I||(l=null)}}else u=="mouseover"?l=s.fromElement:u=="mouseout"&&(l=s.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Rn[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&se.aa.h.call(this)}}N(se,_t);var Rn={2:"touch",3:"pen",4:"mouse"};se.prototype.h=function(){se.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var he="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function Cn(s,l,u,f,I){this.listener=s,this.proxy=null,this.src=l,this.type=u,this.capture=!!f,this.ha=I,this.key=++Ue,this.da=this.fa=!1}function be(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function te(s){this.src=s,this.g={},this.h=0}te.prototype.add=function(s,l,u,f,I){var C=s.toString();s=this.g[C],s||(s=this.g[C]=[],this.h++);var O=ge(s,l,f,I);return-1<O?(l=s[O],u||(l.fa=!1)):(l=new Cn(l,this.src,C,!!f,I),l.fa=u,s.push(l)),l};function Se(s,l){var u=l.type;if(u in s.g){var f=s.g[u],I=Array.prototype.indexOf.call(f,l,void 0),C;(C=0<=I)&&Array.prototype.splice.call(f,I,1),C&&(be(l),s.g[u].length==0&&(delete s.g[u],s.h--))}}function ge(s,l,u,f){for(var I=0;I<s.length;++I){var C=s[I];if(!C.da&&C.listener==l&&C.capture==!!u&&C.ha==f)return I}return-1}var rn="closure_lm_"+(1e6*Math.random()|0),sn={};function je(s,l,u,f,I){if(Array.isArray(l)){for(var C=0;C<l.length;C++)je(s,l[C],u,f,I);return null}return u=Zr(u),s&&s[he]?s.K(l,u,d(f)?!!f.capture:!1,I):Yt(s,l,u,!1,f,I)}function Yt(s,l,u,f,I,C){if(!l)throw Error("Invalid event type");var O=d(I)?!!I.capture:!!I,pt=ee(s);if(pt||(s[rn]=pt=new te(s)),u=pt.add(l,u,f,O,C),u.proxy)return u;if(f=bn(),u.proxy=f,f.src=s,f.listener=u,s.addEventListener)nn||(I=O),I===void 0&&(I=!1),s.addEventListener(l.toString(),f,I);else if(s.attachEvent)s.attachEvent(Jr(l.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function bn(){function s(u){return l.call(s.src,s.listener,u)}const l=on;return s}function ir(s,l,u,f,I){if(Array.isArray(l))for(var C=0;C<l.length;C++)ir(s,l[C],u,f,I);else f=d(f)?!!f.capture:!!f,u=Zr(u),s&&s[he]?(s=s.i,l=String(l).toString(),l in s.g&&(C=s.g[l],u=ge(C,u,f,I),-1<u&&(be(C[u]),Array.prototype.splice.call(C,u,1),C.length==0&&(delete s.g[l],s.h--)))):s&&(s=ee(s))&&(l=s.g[l.toString()],s=-1,l&&(s=ge(l,u,f,I)),(u=-1<s?l[s]:null)&&de(u))}function de(s){if(typeof s!="number"&&s&&!s.da){var l=s.src;if(l&&l[he])Se(l.i,s);else{var u=s.type,f=s.proxy;l.removeEventListener?l.removeEventListener(u,f,s.capture):l.detachEvent?l.detachEvent(Jr(u),f):l.addListener&&l.removeListener&&l.removeListener(f),(u=ee(l))?(Se(u,s),u.h==0&&(u.src=null,l[rn]=null)):be(s)}}}function Jr(s){return s in sn?sn[s]:sn[s]="on"+s}function on(s,l){if(s.da)s=!0;else{l=new se(l,this);var u=s.listener,f=s.ha||s.src;s.fa&&de(s),s=u.call(f,l)}return s}function ee(s){return s=s[rn],s instanceof te?s:null}var or="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zr(s){return typeof s=="function"?s:(s[or]||(s[or]=function(l){return s.handleEvent(l)}),s[or])}function Dt(){Zt.call(this),this.i=new te(this),this.M=this,this.F=null}N(Dt,Zt),Dt.prototype[he]=!0,Dt.prototype.removeEventListener=function(s,l,u,f){ir(this,s,l,u,f)};function xt(s,l){var u,f=s.F;if(f)for(u=[];f;f=f.F)u.push(f);if(s=s.M,f=l.type||l,typeof l=="string")l=new _t(l,s);else if(l instanceof _t)l.target=l.target||s;else{var I=l;l=new _t(f,s),y(l,I)}if(I=!0,u)for(var C=u.length-1;0<=C;C--){var O=l.g=u[C];I=Sn(O,f,!0,l)&&I}if(O=l.g=s,I=Sn(O,f,!0,l)&&I,I=Sn(O,f,!1,l)&&I,u)for(C=0;C<u.length;C++)O=l.g=u[C],I=Sn(O,f,!1,l)&&I}Dt.prototype.N=function(){if(Dt.aa.N.call(this),this.i){var s=this.i,l;for(l in s.g){for(var u=s.g[l],f=0;f<u.length;f++)be(u[f]);delete s.g[l],s.h--}}this.F=null},Dt.prototype.K=function(s,l,u,f){return this.i.add(String(s),l,!1,u,f)},Dt.prototype.L=function(s,l,u,f){return this.i.add(String(s),l,!0,u,f)};function Sn(s,l,u,f){if(l=s.i.g[String(l)],!l)return!0;l=l.concat();for(var I=!0,C=0;C<l.length;++C){var O=l[C];if(O&&!O.da&&O.capture==u){var pt=O.listener,Lt=O.ha||O.src;O.fa&&Se(s.i,O),I=pt.call(Lt,f)!==!1&&I}}return I&&!f.defaultPrevented}function ar(s,l,u){if(typeof s=="function")u&&(s=R(s,u));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(s,l||0)}function lr(s){s.g=ar(()=>{s.g=null,s.i&&(s.i=!1,lr(s))},s.l);const l=s.h;s.h=null,s.m.apply(null,l)}class cr extends Zt{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:lr(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pe(s){Zt.call(this),this.h=s,this.g={}}N(Pe,Zt);var Pn=[];function ur(s){Y(s.g,function(l,u){this.g.hasOwnProperty(u)&&de(l)},s),s.g={}}Pe.prototype.N=function(){Pe.aa.N.call(this),ur(this)},Pe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var an=c.JSON.stringify,ts=c.JSON.parse,es=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function hr(){}hr.prototype.h=null;function ns(s){return s.h||(s.h=s.i())}function Vn(){}var Ve={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ln(){_t.call(this,"d")}N(ln,_t);function dr(){_t.call(this,"c")}N(dr,_t);var De={},fr=null;function Dn(){return fr=fr||new Dt}De.La="serverreachability";function pr(s){_t.call(this,De.La,s)}N(pr,_t);function qe(s){const l=Dn();xt(l,new pr(l))}De.STAT_EVENT="statevent";function mr(s,l){_t.call(this,De.STAT_EVENT,s),this.stat=l}N(mr,_t);function Mt(s){const l=Dn();xt(l,new mr(l,s))}De.Ma="timingevent";function rs(s,l){_t.call(this,De.Ma,s),this.size=l}N(rs,_t);function S(s,l){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},l)}function P(){this.g=!0}P.prototype.xa=function(){this.g=!1};function L(s,l,u,f,I,C){s.info(function(){if(s.g)if(C)for(var O="",pt=C.split("&"),Lt=0;Lt<pt.length;Lt++){var nt=pt[Lt].split("=");if(1<nt.length){var Kt=nt[0];nt=nt[1];var $t=Kt.split("_");O=2<=$t.length&&$t[1]=="type"?O+(Kt+"="+nt+"&"):O+(Kt+"=redacted&")}}else O=null;else O=C;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+l+`
`+u+`
`+O})}function $(s,l,u,f,I,C,O){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+l+`
`+u+`
`+C+" "+O})}function q(s,l,u,f){s.info(function(){return"XMLHTTP TEXT ("+l+"): "+It(s,u)+(f?" "+f:"")})}function lt(s,l){s.info(function(){return"TIMEOUT: "+l})}P.prototype.info=function(){};function It(s,l){if(!s.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(s=0;s<u.length;s++)if(Array.isArray(u[s])){var f=u[s];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var C=I[0];if(C!="noop"&&C!="stop"&&C!="close")for(var O=1;O<I.length;O++)I[O]=""}}}}return an(u)}catch{return l}}var zt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ve={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},cn;function Ee(){}N(Ee,hr),Ee.prototype.g=function(){return new XMLHttpRequest},Ee.prototype.i=function(){return{}},cn=new Ee;function ie(s,l,u,f){this.j=s,this.i=l,this.l=u,this.R=f||1,this.U=new Pe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fe}function fe(){this.i=null,this.g="",this.h=!1}var _e={},gr={};function _r(s,l,u){s.L=1,s.v=ls(Ne(l)),s.m=u,s.P=!0,ss(s,null)}function ss(s,l){s.F=Date.now(),is(s),s.A=Ne(s.v);var u=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),Qo(u.i,"t",f),s.C=0,u=s.j.J,s.h=new fe,s.g=fa(s.j,u?l:null,!s.m),0<s.O&&(s.M=new cr(R(s.Y,s,s.g),s.O)),l=s.U,u=s.g,f=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(Pn[0]=I.toString()),I=Pn);for(var C=0;C<I.length;C++){var O=je(u,I[C],f||l.handleEvent,!1,l.h||l);if(!O)break;l.g[O.key]=O}l=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,l)):(s.u="GET",s.g.ea(s.A,s.u,null,l)),qe(),L(s.i,s.u,s.A,s.l,s.R,s.m)}ie.prototype.ca=function(s){s=s.target;const l=this.M;l&&Oe(s)==3?l.j():this.Y(s)},ie.prototype.Y=function(s){try{if(s==this.g)t:{const $t=Oe(this.g);var l=this.g.Ba();const xn=this.g.Z();if(!(3>$t)&&($t!=3||this.g&&(this.h.h||this.g.oa()||na(this.g)))){this.J||$t!=4||l==7||(l==8||0>=xn?qe(3):qe(2)),di(this);var u=this.g.Z();this.X=u;e:if(ke(this)){var f=na(this.g);s="";var I=f.length,C=Oe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),yr(this);var O="";break e}this.h.i=new c.TextDecoder}for(l=0;l<I;l++)this.h.h=!0,s+=this.h.i.decode(f[l],{stream:!(C&&l==I-1)});f.length=0,this.h.g+=s,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=u==200,$(this.i,this.u,this.A,this.l,this.R,$t,u),this.o){if(this.T&&!this.K){e:{if(this.g){var pt,Lt=this.g;if((pt=Lt.g?Lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(pt)){var nt=pt;break e}}nt=null}if(u=nt)q(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fi(this,u);else{this.o=!1,this.s=3,Mt(12),un(this),yr(this);break t}}if(this.P){u=!0;let ye;for(;!this.J&&this.C<O.length;)if(ye=kn(this,O),ye==gr){$t==4&&(this.s=4,Mt(14),u=!1),q(this.i,this.l,null,"[Incomplete Response]");break}else if(ye==_e){this.s=4,Mt(15),q(this.i,this.l,O,"[Invalid Chunk]"),u=!1;break}else q(this.i,this.l,ye,null),fi(this,ye);if(ke(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$t!=4||O.length!=0||this.h.h||(this.s=1,Mt(16),u=!1),this.o=this.o&&u,!u)q(this.i,this.l,O,"[Invalid Chunked Response]"),un(this),yr(this);else if(0<O.length&&!this.W){this.W=!0;var Kt=this.j;Kt.g==this&&Kt.ba&&!Kt.M&&(Kt.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),vi(Kt),Kt.M=!0,Mt(11))}}else q(this.i,this.l,O,null),fi(this,O);$t==4&&un(this),this.o&&!this.J&&($t==4?ca(this.j,this):(this.o=!1,is(this)))}else Iu(this.g),u==400&&0<O.indexOf("Unknown SID")?(this.s=3,Mt(12)):(this.s=0,Mt(13)),un(this),yr(this)}}}catch{}finally{}};function ke(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function kn(s,l){var u=s.C,f=l.indexOf(`
`,u);return f==-1?gr:(u=Number(l.substring(u,f)),isNaN(u)?_e:(f+=1,f+u>l.length?gr:(l=l.slice(f,f+u),s.C=f+u,l)))}ie.prototype.cancel=function(){this.J=!0,un(this)};function is(s){s.S=Date.now()+s.I,Lo(s,s.I)}function Lo(s,l){if(s.B!=null)throw Error("WatchDog timer not null");s.B=S(R(s.ba,s),l)}function di(s){s.B&&(c.clearTimeout(s.B),s.B=null)}ie.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(lt(this.i,this.A),this.L!=2&&(qe(),Mt(17)),un(this),this.s=2,yr(this)):Lo(this,this.S-s)};function yr(s){s.j.G==0||s.J||ca(s.j,s)}function un(s){di(s);var l=s.M;l&&typeof l.ma=="function"&&l.ma(),s.M=null,ur(s.U),s.g&&(l=s.g,s.g=null,l.abort(),l.ma())}function fi(s,l){try{var u=s.j;if(u.G!=0&&(u.g==s||pi(u.h,s))){if(!s.K&&pi(u.h,s)&&u.G==3){try{var f=u.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<s.F)ps(u),ds(u);else break t;yi(u),Mt(18)}}else u.za=I[1],0<u.za-u.T&&37500>I[2]&&u.F&&u.v==0&&!u.C&&(u.C=S(R(u.Za,u),6e3));if(1>=Uo(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else dn(u,11)}else if((s.K||u.g==s)&&ps(u),!z(l))for(I=u.Da.g.parse(l),l=0;l<I.length;l++){let nt=I[l];if(u.T=nt[0],nt=nt[1],u.G==2)if(nt[0]=="c"){u.K=nt[1],u.ia=nt[2];const Kt=nt[3];Kt!=null&&(u.la=Kt,u.j.info("VER="+u.la));const $t=nt[4];$t!=null&&(u.Aa=$t,u.j.info("SVER="+u.Aa));const xn=nt[5];xn!=null&&typeof xn=="number"&&0<xn&&(f=1.5*xn,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const ye=s.g;if(ye){const gs=ye.g?ye.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(gs){var C=f.h;C.g||gs.indexOf("spdy")==-1&&gs.indexOf("quic")==-1&&gs.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(mi(C,C.h),C.h=null))}if(f.D){const Ei=ye.g?ye.g.getResponseHeader("X-HTTP-Session-Id"):null;Ei&&(f.ya=Ei,yt(f.I,f.D,Ei))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-s.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var O=s;if(f.qa=da(f,f.J?f.ia:null,f.W),O.K){jo(f.h,O);var pt=O,Lt=f.L;Lt&&(pt.I=Lt),pt.B&&(di(pt),is(pt)),f.g=O}else aa(f);0<u.i.length&&fs(u)}else nt[0]!="stop"&&nt[0]!="close"||dn(u,7);else u.G==3&&(nt[0]=="stop"||nt[0]=="close"?nt[0]=="stop"?dn(u,7):_i(u):nt[0]!="noop"&&u.l&&u.l.ta(nt),u.v=0)}}qe(4)}catch{}}var au=class{constructor(s,l){this.g=s,this.map=l}};function Fo(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Bo(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Uo(s){return s.h?1:s.g?s.g.size:0}function pi(s,l){return s.h?s.h==l:s.g?s.g.has(l):!1}function mi(s,l){s.g?s.g.add(l):s.h=l}function jo(s,l){s.h&&s.h==l?s.h=null:s.g&&s.g.has(l)&&s.g.delete(l)}Fo.prototype.cancel=function(){if(this.i=qo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function qo(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let l=s.i;for(const u of s.g.values())l=l.concat(u.D);return l}return x(s.i)}function lu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var l=[],u=s.length,f=0;f<u;f++)l.push(s[f]);return l}l=[],u=0;for(f in s)l[u++]=s[f];return l}function cu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var l=[];s=s.length;for(var u=0;u<s;u++)l.push(u);return l}l=[],u=0;for(const f in s)l[u++]=f;return l}}}function zo(s,l){if(s.forEach&&typeof s.forEach=="function")s.forEach(l,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,l,void 0);else for(var u=cu(s),f=lu(s),I=f.length,C=0;C<I;C++)l.call(void 0,f[C],u&&u[C],s)}var Ko=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uu(s,l){if(s){s=s.split("&");for(var u=0;u<s.length;u++){var f=s[u].indexOf("="),I=null;if(0<=f){var C=s[u].substring(0,f);I=s[u].substring(f+1)}else C=s[u];l(C,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function hn(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof hn){this.h=s.h,os(this,s.j),this.o=s.o,this.g=s.g,as(this,s.s),this.l=s.l;var l=s.i,u=new Tr;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),$o(this,u),this.m=s.m}else s&&(l=String(s).match(Ko))?(this.h=!1,os(this,l[1]||"",!0),this.o=vr(l[2]||""),this.g=vr(l[3]||"",!0),as(this,l[4]),this.l=vr(l[5]||"",!0),$o(this,l[6]||"",!0),this.m=vr(l[7]||"")):(this.h=!1,this.i=new Tr(null,this.h))}hn.prototype.toString=function(){var s=[],l=this.j;l&&s.push(Er(l,Go,!0),":");var u=this.g;return(u||l=="file")&&(s.push("//"),(l=this.o)&&s.push(Er(l,Go,!0),"@"),s.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&s.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(Er(u,u.charAt(0)=="/"?fu:du,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",Er(u,mu)),s.join("")};function Ne(s){return new hn(s)}function os(s,l,u){s.j=u?vr(l,!0):l,s.j&&(s.j=s.j.replace(/:$/,""))}function as(s,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);s.s=l}else s.s=null}function $o(s,l,u){l instanceof Tr?(s.i=l,gu(s.i,s.h)):(u||(l=Er(l,pu)),s.i=new Tr(l,s.h))}function yt(s,l,u){s.i.set(l,u)}function ls(s){return yt(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function vr(s,l){return s?l?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Er(s,l,u){return typeof s=="string"?(s=encodeURI(s).replace(l,hu),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function hu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Go=/[#\/\?@]/g,du=/[#\?:]/g,fu=/[#\?]/g,pu=/[#\?@]/g,mu=/#/g;function Tr(s,l){this.h=this.g=null,this.i=s||null,this.j=!!l}function ze(s){s.g||(s.g=new Map,s.h=0,s.i&&uu(s.i,function(l,u){s.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}n=Tr.prototype,n.add=function(s,l){ze(this),this.i=null,s=Nn(this,s);var u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(l),this.h+=1,this};function Wo(s,l){ze(s),l=Nn(s,l),s.g.has(l)&&(s.i=null,s.h-=s.g.get(l).length,s.g.delete(l))}function Ho(s,l){return ze(s),l=Nn(s,l),s.g.has(l)}n.forEach=function(s,l){ze(this),this.g.forEach(function(u,f){u.forEach(function(I){s.call(l,I,f,this)},this)},this)},n.na=function(){ze(this);const s=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let f=0;f<l.length;f++){const I=s[f];for(let C=0;C<I.length;C++)u.push(l[f])}return u},n.V=function(s){ze(this);let l=[];if(typeof s=="string")Ho(this,s)&&(l=l.concat(this.g.get(Nn(this,s))));else{s=Array.from(this.g.values());for(let u=0;u<s.length;u++)l=l.concat(s[u])}return l},n.set=function(s,l){return ze(this),this.i=null,s=Nn(this,s),Ho(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[l]),this.h+=1,this},n.get=function(s,l){return s?(s=this.V(s),0<s.length?String(s[0]):l):l};function Qo(s,l,u){Wo(s,l),0<u.length&&(s.i=null,s.g.set(Nn(s,l),x(u)),s.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var f=l[u];const C=encodeURIComponent(String(f)),O=this.V(f);for(f=0;f<O.length;f++){var I=C;O[f]!==""&&(I+="="+encodeURIComponent(String(O[f]))),s.push(I)}}return this.i=s.join("&")};function Nn(s,l){return l=String(l),s.j&&(l=l.toLowerCase()),l}function gu(s,l){l&&!s.j&&(ze(s),s.i=null,s.g.forEach(function(u,f){var I=f.toLowerCase();f!=I&&(Wo(this,f),Qo(this,I,u))},s)),s.j=l}function _u(s,l){const u=new P;if(c.Image){const f=new Image;f.onload=b(Ke,u,"TestLoadImage: loaded",!0,l,f),f.onerror=b(Ke,u,"TestLoadImage: error",!1,l,f),f.onabort=b(Ke,u,"TestLoadImage: abort",!1,l,f),f.ontimeout=b(Ke,u,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else l(!1)}function yu(s,l){const u=new P,f=new AbortController,I=setTimeout(()=>{f.abort(),Ke(u,"TestPingServer: timeout",!1,l)},1e4);fetch(s,{signal:f.signal}).then(C=>{clearTimeout(I),C.ok?Ke(u,"TestPingServer: ok",!0,l):Ke(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(I),Ke(u,"TestPingServer: error",!1,l)})}function Ke(s,l,u,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(u)}catch{}}function vu(){this.g=new es}function Eu(s,l,u){const f=u||"";try{zo(s,function(I,C){let O=I;d(I)&&(O=an(I)),l.push(f+C+"="+encodeURIComponent(O))})}catch(I){throw l.push(f+"type="+encodeURIComponent("_badmap")),I}}function cs(s){this.l=s.Ub||null,this.j=s.eb||!1}N(cs,hr),cs.prototype.g=function(){return new us(this.l,this.j)},cs.prototype.i=function(s){return function(){return s}}({});function us(s,l){Dt.call(this),this.D=s,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(us,Dt),n=us.prototype,n.open=function(s,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=l,this.readyState=1,Ir(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(l.body=s),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wr(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Ir(this)),this.g&&(this.readyState=3,Ir(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yo(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yo(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var l=s.value?s.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!s.done}))&&(this.response=this.responseText+=l)}s.done?wr(this):Ir(this),this.readyState==3&&Yo(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,wr(this))},n.Qa=function(s){this.g&&(this.response=s,wr(this))},n.ga=function(){this.g&&wr(this)};function wr(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Ir(s)}n.setRequestHeader=function(s,l){this.u.append(s,l)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=l.next();return s.join(`\r
`)};function Ir(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(us.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Xo(s){let l="";return Y(s,function(u,f){l+=f,l+=":",l+=u,l+=`\r
`}),l}function gi(s,l,u){t:{for(f in u){var f=!1;break t}f=!0}f||(u=Xo(u),typeof s=="string"?u!=null&&encodeURIComponent(String(u)):yt(s,l,u))}function Et(s){Dt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Et,Dt);var Tu=/^https?$/i,wu=["POST","PUT"];n=Et.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,l,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);l=l?l.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():cn.g(),this.v=this.o?ns(this.o):ns(cn),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(l,String(s),!0),this.B=!1}catch(C){Jo(this,C);return}if(s=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)u.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const C of f.keys())u.set(C,f.get(C));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(C=>C.toLowerCase()=="content-type"),I=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(wu,l,void 0))||f||I||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,O]of u)this.g.setRequestHeader(C,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ea(this),this.u=!0,this.g.send(s),this.u=!1}catch(C){Jo(this,C)}};function Jo(s,l){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=l,s.m=5,Zo(s),hs(s)}function Zo(s){s.A||(s.A=!0,xt(s,"complete"),xt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,xt(this,"complete"),xt(this,"abort"),hs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hs(this,!0)),Et.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ta(this):this.bb())},n.bb=function(){ta(this)};function ta(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Oe(s)!=4||s.Z()!=2)){if(s.u&&Oe(s)==4)ar(s.Ea,0,s);else if(xt(s,"readystatechange"),Oe(s)==4){s.h=!1;try{const O=s.Z();t:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var u;if(!(u=l)){var f;if(f=O===0){var I=String(s.D).match(Ko)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),f=!Tu.test(I?I.toLowerCase():"")}u=f}if(u)xt(s,"complete"),xt(s,"success");else{s.m=6;try{var C=2<Oe(s)?s.g.statusText:""}catch{C=""}s.l=C+" ["+s.Z()+"]",Zo(s)}}finally{hs(s)}}}}function hs(s,l){if(s.g){ea(s);const u=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,l||xt(s,"ready");try{u.onreadystatechange=f}catch{}}}function ea(s){s.I&&(c.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Oe(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Oe(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var l=this.g.responseText;return s&&l.indexOf(s)==0&&(l=l.substring(s.length)),ts(l)}};function na(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Iu(s){const l={};s=(s.g&&2<=Oe(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(z(s[f]))continue;var u=E(s[f]);const I=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const C=l[I]||[];l[I]=C,C.push(u)}T(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ar(s,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||l}function ra(s){this.Aa=0,this.i=[],this.j=new P,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ar("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ar("baseRetryDelayMs",5e3,s),this.cb=Ar("retryDelaySeedMs",1e4,s),this.Wa=Ar("forwardChannelMaxRetries",2,s),this.wa=Ar("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Fo(s&&s.concurrentRequestLimit),this.Da=new vu,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ra.prototype,n.la=8,n.G=1,n.connect=function(s,l,u,f){Mt(0),this.W=s,this.H=l||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=da(this,null,this.W),fs(this)};function _i(s){if(sa(s),s.G==3){var l=s.U++,u=Ne(s.I);if(yt(u,"SID",s.K),yt(u,"RID",l),yt(u,"TYPE","terminate"),Rr(s,u),l=new ie(s,s.j,l),l.L=2,l.v=ls(Ne(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=l.v,u=!0),u||(l.g=fa(l.j,null),l.g.ea(l.v)),l.F=Date.now(),is(l)}ha(s)}function ds(s){s.g&&(vi(s),s.g.cancel(),s.g=null)}function sa(s){ds(s),s.u&&(c.clearTimeout(s.u),s.u=null),ps(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function fs(s){if(!Bo(s.h)&&!s.s){s.s=!0;var l=s.Ga;Vt||me(),Ct||(Vt(),Ct=!0),Qt.add(l,s),s.B=0}}function Au(s,l){return Uo(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=l.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=S(R(s.Ga,s,l),ua(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new ie(this,this.j,s);let C=this.o;if(this.S&&(C?(C=p(C),y(C,this.S)):C=this.S),this.m!==null||this.O||(I.H=C,C=null),this.P)t:{for(var l=0,u=0;u<this.i.length;u++){e:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=u;break t}if(l===4096||u===this.i.length-1){l=u+1;break t}}l=1e3}else l=1e3;l=oa(this,I,l),u=Ne(this.I),yt(u,"RID",s),yt(u,"CVER",22),this.D&&yt(u,"X-HTTP-Session-Id",this.D),Rr(this,u),C&&(this.O?l="headers="+encodeURIComponent(String(Xo(C)))+"&"+l:this.m&&gi(u,this.m,C)),mi(this.h,I),this.Ua&&yt(u,"TYPE","init"),this.P?(yt(u,"$req",l),yt(u,"SID","null"),I.T=!0,_r(I,u,null)):_r(I,u,l),this.G=2}}else this.G==3&&(s?ia(this,s):this.i.length==0||Bo(this.h)||ia(this))};function ia(s,l){var u;l?u=l.l:u=s.U++;const f=Ne(s.I);yt(f,"SID",s.K),yt(f,"RID",u),yt(f,"AID",s.T),Rr(s,f),s.m&&s.o&&gi(f,s.m,s.o),u=new ie(s,s.j,u,s.B+1),s.m===null&&(u.H=s.o),l&&(s.i=l.D.concat(s.i)),l=oa(s,u,1e3),u.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),mi(s.h,u),_r(u,f,l)}function Rr(s,l){s.H&&Y(s.H,function(u,f){yt(l,f,u)}),s.l&&zo({},function(u,f){yt(l,f,u)})}function oa(s,l,u){u=Math.min(s.i.length,u);var f=s.l?R(s.l.Na,s.l,s):null;t:{var I=s.i;let C=-1;for(;;){const O=["count="+u];C==-1?0<u?(C=I[0].g,O.push("ofs="+C)):C=0:O.push("ofs="+C);let pt=!0;for(let Lt=0;Lt<u;Lt++){let nt=I[Lt].g;const Kt=I[Lt].map;if(nt-=C,0>nt)C=Math.max(0,I[Lt].g-100),pt=!1;else try{Eu(Kt,O,"req"+nt+"_")}catch{f&&f(Kt)}}if(pt){f=O.join("&");break t}}}return s=s.i.splice(0,u),l.D=s,f}function aa(s){if(!s.g&&!s.u){s.Y=1;var l=s.Fa;Vt||me(),Ct||(Vt(),Ct=!0),Qt.add(l,s),s.v=0}}function yi(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=S(R(s.Fa,s),ua(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,la(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=S(R(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Mt(10),ds(this),la(this))};function vi(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function la(s){s.g=new ie(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var l=Ne(s.qa);yt(l,"RID","rpc"),yt(l,"SID",s.K),yt(l,"AID",s.T),yt(l,"CI",s.F?"0":"1"),!s.F&&s.ja&&yt(l,"TO",s.ja),yt(l,"TYPE","xmlhttp"),Rr(s,l),s.m&&s.o&&gi(l,s.m,s.o),s.L&&(s.g.I=s.L);var u=s.g;s=s.ia,u.L=1,u.v=ls(Ne(l)),u.m=null,u.P=!0,ss(u,s)}n.Za=function(){this.C!=null&&(this.C=null,ds(this),yi(this),Mt(19))};function ps(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function ca(s,l){var u=null;if(s.g==l){ps(s),vi(s),s.g=null;var f=2}else if(pi(s.h,l))u=l.D,jo(s.h,l),f=1;else return;if(s.G!=0){if(l.o)if(f==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var I=s.B;f=Dn(),xt(f,new rs(f,u)),fs(s)}else aa(s);else if(I=l.s,I==3||I==0&&0<l.X||!(f==1&&Au(s,l)||f==2&&yi(s)))switch(u&&0<u.length&&(l=s.h,l.i=l.i.concat(u)),I){case 1:dn(s,5);break;case 4:dn(s,10);break;case 3:dn(s,6);break;default:dn(s,2)}}}function ua(s,l){let u=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(u*=2),u*l}function dn(s,l){if(s.j.info("Error code "+l),l==2){var u=R(s.fb,s),f=s.Xa;const I=!f;f=new hn(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||os(f,"https"),ls(f),I?_u(f.toString(),u):yu(f.toString(),u)}else Mt(2);s.G=0,s.l&&s.l.sa(l),ha(s),sa(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))};function ha(s){if(s.G=0,s.ka=[],s.l){const l=qo(s.h);(l.length!=0||s.i.length!=0)&&(k(s.ka,l),k(s.ka,s.i),s.h.i.length=0,x(s.i),s.i.length=0),s.l.ra()}}function da(s,l,u){var f=u instanceof hn?Ne(u):new hn(u);if(f.g!="")l&&(f.g=l+"."+f.g),as(f,f.s);else{var I=c.location;f=I.protocol,l=l?l+"."+I.hostname:I.hostname,I=+I.port;var C=new hn(null);f&&os(C,f),l&&(C.g=l),I&&as(C,I),u&&(C.l=u),f=C}return u=s.D,l=s.ya,u&&l&&yt(f,u,l),yt(f,"VER",s.la),Rr(s,f),f}function fa(s,l,u){if(l&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=s.Ca&&!s.pa?new Et(new cs({eb:u})):new Et(s.pa),l.Ha(s.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function pa(){}n=pa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ms(){}ms.prototype.g=function(s,l){return new oe(s,l)};function oe(s,l){Dt.call(this),this.g=new ra(l),this.l=s,this.h=l&&l.messageUrlParams||null,s=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(s?s["X-WebChannel-Content-Type"]=l.messageContentType:s={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(s?s["X-WebChannel-Client-Profile"]=l.va:s={"X-WebChannel-Client-Profile":l.va}),this.g.S=s,(s=l&&l.Sb)&&!z(s)&&(this.g.m=s),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!z(l)&&(this.g.D=l,s=this.h,s!==null&&l in s&&(s=this.h,l in s&&delete s[l])),this.j=new On(this)}N(oe,Dt),oe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},oe.prototype.close=function(){_i(this.g)},oe.prototype.o=function(s){var l=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.u&&(u={},u.__data__=an(s),s=u);l.i.push(new au(l.Ya++,s)),l.G==3&&fs(l)},oe.prototype.N=function(){this.g.l=null,delete this.j,_i(this.g),delete this.g,oe.aa.N.call(this)};function ma(s){ln.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var l=s.__sm__;if(l){t:{for(const u in l){s=u;break t}s=void 0}(this.i=s)&&(s=this.i,l=l!==null&&s in l?l[s]:void 0),this.data=l}else this.data=s}N(ma,ln);function ga(){dr.call(this),this.status=1}N(ga,dr);function On(s){this.g=s}N(On,pa),On.prototype.ua=function(){xt(this.g,"a")},On.prototype.ta=function(s){xt(this.g,new ma(s))},On.prototype.sa=function(s){xt(this.g,new ga)},On.prototype.ra=function(){xt(this.g,"b")},ms.prototype.createWebChannel=ms.prototype.g,oe.prototype.send=oe.prototype.o,oe.prototype.open=oe.prototype.m,oe.prototype.close=oe.prototype.close,jl=function(){return new ms},Ul=function(){return Dn()},Bl=De,Bi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},zt.NO_ERROR=0,zt.TIMEOUT=8,zt.HTTP_ERROR=6,Cs=zt,ve.COMPLETE="complete",Fl=ve,Vn.EventType=Ve,Ve.OPEN="a",Ve.CLOSE="b",Ve.ERROR="c",Ve.MESSAGE="d",Dt.prototype.listen=Dt.prototype.K,Sr=Vn,Et.prototype.listenOnce=Et.prototype.L,Et.prototype.getLastError=Et.prototype.Ka,Et.prototype.getLastErrorCode=Et.prototype.Ba,Et.prototype.getStatus=Et.prototype.Z,Et.prototype.getResponseJson=Et.prototype.Oa,Et.prototype.getResponseText=Et.prototype.oa,Et.prototype.send=Et.prototype.ea,Et.prototype.setWithCredentials=Et.prototype.Ha,Ll=Et}).apply(typeof _s<"u"?_s:typeof self<"u"?self:typeof window<"u"?window:{});const ka="@firebase/firestore";/**
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
 */let er="10.14.0";/**
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
 */const En=new Vl("@firebase/firestore");function Cr(){return En.logLevel}function M(n,...t){if(En.logLevel<=et.DEBUG){const e=t.map(oo);En.debug(`Firestore (${er}): ${n}`,...e)}}function Fe(n,...t){if(En.logLevel<=et.ERROR){const e=t.map(oo);En.error(`Firestore (${er}): ${n}`,...e)}}function $n(n,...t){if(En.logLevel<=et.WARN){const e=t.map(oo);En.warn(`Firestore (${er}): ${n}`,...e)}}function oo(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function G(n="Unexpected state"){const t=`FIRESTORE (${er}) INTERNAL ASSERTION FAILED: `+n;throw Fe(t),new Error(t)}function ut(n,t){n||G()}function Q(n,t){return n}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends tr{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ye{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class ql{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class qd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Wt.UNAUTHENTICATED))}shutdown(){}}class zd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Kd{constructor(t){this.t=t,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){ut(this.o===void 0);let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Ye;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ye,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ye)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ut(typeof r.accessToken=="string"),new ql(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ut(t===null||typeof t=="string"),new Wt(t)}}class $d{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Gd{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new $d(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wd{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hd{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){ut(this.o===void 0);const r=o=>{o.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(ut(typeof e.token=="string"),this.R=e.token,new Wd(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Qd(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class zl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Qd(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function it(n,t){return n<t?-1:n>t?1:0}function Gn(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
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
 */class St{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new F(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new F(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new F(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new F(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return St.fromMillis(Date.now())}static fromDate(t){return St.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new St(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?it(this.nanoseconds,t.nanoseconds):it(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class H{constructor(t){this.timestamp=t}static fromTimestamp(t){return new H(t)}static min(){return new H(new St(0,0))}static max(){return new H(new St(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Br{constructor(t,e,r){e===void 0?e=0:e>t.length&&G(),r===void 0?r=t.length-e:r>t.length-e&&G(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Br.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Br?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=t.get(i),a=e.get(i);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Tt extends Br{construct(t,e,r){return new Tt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new F(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new Tt(e)}static emptyPath(){return new Tt([])}}const Yd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ut extends Br{construct(t,e,r){return new Ut(t,e,r)}static isValidIdentifier(t){return Yd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ut(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new F(D.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new F(D.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new F(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(o(),i++)}if(o(),a)throw new F(D.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ut(e)}static emptyPath(){return new Ut([])}}/**
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
 */class j{constructor(t){this.path=t}static fromPath(t){return new j(Tt.fromString(t))}static fromName(t){return new j(Tt.fromString(t).popFirst(5))}static empty(){return new j(Tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Tt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new j(new Tt(t.slice()))}}function Xd(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=H.fromTimestamp(r===1e9?new St(e+1,0):new St(e,r));return new Je(i,j.empty(),t)}function Jd(n){return new Je(n.readTime,n.key,-1)}class Je{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Je(H.min(),j.empty(),-1)}static max(){return new Je(H.max(),j.empty(),-1)}}function Zd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=j.comparator(n.documentKey,t.documentKey),e!==0?e:it(n.largestBatchId,t.largestBatchId))}/**
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
 */const tf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ef{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function $r(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==tf)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,r)=>{e(t)})}static reject(t){return new V((e,r)=>{r(t)})}static waitFor(t){return new V((e,r)=>{let i=0,o=0,a=!1;t.forEach(c=>{++i,c.next(()=>{++o,a&&o===i&&e()},h=>r(h))}),a=!0,o===i&&e()})}static or(t){let e=V.resolve(!1);for(const r of t)e=e.next(i=>i?V.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new V((r,i)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(g=>{a[d]=g,++c,c===o&&r(a)},g=>i(g))}})}static doWhile(t,e){return new V((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function nf(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Gr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ao{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ao.oe=-1;function Ys(n){return n==null}function Bs(n){return n===0&&1/n==-1/0}function rf(n){return typeof n=="number"&&Number.isInteger(n)&&!Bs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Na(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function In(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Kl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class vt{constructor(t,e){this.comparator=t,this.root=e||Bt.EMPTY}insert(t,e){return new vt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(t){return new vt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ys(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ys(this.root,t,this.comparator,!1)}getReverseIterator(){return new ys(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ys(this.root,t,this.comparator,!0)}}class ys{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Bt{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??Bt.RED,this.left=i??Bt.EMPTY,this.right=o??Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new Bt(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return Bt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const t=this.left.check();if(t!==this.right.check())throw G();return t+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1;Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,r,i,o){return this}insert(t,e,r){return new Bt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class jt{constructor(t){this.comparator=t,this.data=new vt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Oa(this.data.getIterator())}getIteratorFrom(t){return new Oa(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof jt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new jt(this.comparator);return e.data=t,e}}class Oa{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ue{constructor(t){this.fields=t,t.sort(Ut.comparator)}static empty(){return new ue([])}unionWith(t){let e=new jt(Ut.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new ue(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Gn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class $l extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class qt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new $l("Invalid base64 string: "+o):o}}(t);return new qt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new qt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return it(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}qt.EMPTY_BYTE_STRING=new qt("");const sf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ze(n){if(ut(!!n),typeof n=="string"){let t=0;const e=sf.exec(n);if(ut(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:wt(n.seconds),nanos:wt(n.nanos)}}function wt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Tn(n){return typeof n=="string"?qt.fromBase64String(n):qt.fromUint8Array(n)}/**
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
 */function lo(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function co(n){const t=n.mapValue.fields.__previous_value__;return lo(t)?co(t):t}function Ur(n){const t=Ze(n.mapValue.fields.__local_write_time__.timestampValue);return new St(t.seconds,t.nanos)}/**
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
 */class of{constructor(t,e,r,i,o,a,c,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d}}class jr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new jr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof jr&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const vs={mapValue:{}};function wn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?lo(n)?4:lf(n)?9007199254740991:af(n)?10:11:G()}function Re(n,t){if(n===t)return!0;const e=wn(n);if(e!==wn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Ur(n).isEqual(Ur(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Ze(i.timestampValue),c=Ze(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return Tn(i.bytesValue).isEqual(Tn(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return wt(i.geoPointValue.latitude)===wt(o.geoPointValue.latitude)&&wt(i.geoPointValue.longitude)===wt(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return wt(i.integerValue)===wt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=wt(i.doubleValue),c=wt(o.doubleValue);return a===c?Bs(a)===Bs(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return Gn(n.arrayValue.values||[],t.arrayValue.values||[],Re);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},c=o.mapValue.fields||{};if(Na(a)!==Na(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Re(a[h],c[h])))return!1;return!0}(n,t);default:return G()}}function qr(n,t){return(n.values||[]).find(e=>Re(e,t))!==void 0}function Wn(n,t){if(n===t)return 0;const e=wn(n),r=wn(t);if(e!==r)return it(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return it(n.booleanValue,t.booleanValue);case 2:return function(o,a){const c=wt(o.integerValue||o.doubleValue),h=wt(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return xa(n.timestampValue,t.timestampValue);case 4:return xa(Ur(n),Ur(t));case 5:return it(n.stringValue,t.stringValue);case 6:return function(o,a){const c=Tn(o),h=Tn(a);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const g=it(c[d],h[d]);if(g!==0)return g}return it(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const c=it(wt(o.latitude),wt(a.latitude));return c!==0?c:it(wt(o.longitude),wt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Ma(n.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,d,g;const v=o.fields||{},R=a.fields||{},b=(c=v.value)===null||c===void 0?void 0:c.arrayValue,N=(h=R.value)===null||h===void 0?void 0:h.arrayValue,x=it(((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0,((g=N==null?void 0:N.values)===null||g===void 0?void 0:g.length)||0);return x!==0?x:Ma(b,N)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===vs.mapValue&&a===vs.mapValue)return 0;if(o===vs.mapValue)return 1;if(a===vs.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},g=Object.keys(d);h.sort(),g.sort();for(let v=0;v<h.length&&v<g.length;++v){const R=it(h[v],g[v]);if(R!==0)return R;const b=Wn(c[h[v]],d[g[v]]);if(b!==0)return b}return it(h.length,g.length)}(n.mapValue,t.mapValue);default:throw G()}}function xa(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return it(n,t);const e=Ze(n),r=Ze(t),i=it(e.seconds,r.seconds);return i!==0?i:it(e.nanos,r.nanos)}function Ma(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Wn(e[i],r[i]);if(o)return o}return it(e.length,r.length)}function Hn(n){return Ui(n)}function Ui(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Ze(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Tn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return j.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=Ui(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ui(e.fields[a])}`;return i+"}"}(n.mapValue):G()}function ji(n){return!!n&&"integerValue"in n}function uo(n){return!!n&&"arrayValue"in n}function La(n){return!!n&&"nullValue"in n}function Fa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function bs(n){return!!n&&"mapValue"in n}function af(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Nr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return In(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Nr(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Nr(n.arrayValue.values[e]);return t}return Object.assign({},n)}function lf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ne{constructor(t){this.value=t}static empty(){return new ne({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!bs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Nr(e)}setAll(t){let e=Ut.emptyPath(),r={},i=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=c.popLast()}a?r[c.lastSegment()]=Nr(a):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());bs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Re(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];bs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){In(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new ne(Nr(this.value))}}function Gl(n){const t=[];return In(n.fields,(e,r)=>{const i=new Ut([e]);if(bs(r)){const o=Gl(r.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new ue(t)}/**
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
 */class Ht{constructor(t,e,r,i,o,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new Ht(t,0,H.min(),H.min(),H.min(),ne.empty(),0)}static newFoundDocument(t,e,r,i){return new Ht(t,1,e,H.min(),r,i,0)}static newNoDocument(t,e){return new Ht(t,2,e,H.min(),H.min(),ne.empty(),0)}static newUnknownDocument(t,e){return new Ht(t,3,e,H.min(),H.min(),ne.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ne.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ht&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Us{constructor(t,e){this.position=t,this.inclusive=e}}function Ba(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?r=j.comparator(j.fromName(a.referenceValue),e.key):r=Wn(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ua(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Re(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class js{constructor(t,e="asc"){this.field=t,this.dir=e}}function cf(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Wl{}class bt extends Wl{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new hf(t,e,r):e==="array-contains"?new pf(t,r):e==="in"?new mf(t,r):e==="not-in"?new gf(t,r):e==="array-contains-any"?new _f(t,r):new bt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new df(t,r):new ff(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Wn(e,this.value)):e!==null&&wn(this.value)===wn(e)&&this.matchesComparison(Wn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ce extends Wl{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ce(t,e)}matches(t){return Hl(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Hl(n){return n.op==="and"}function Ql(n){return uf(n)&&Hl(n)}function uf(n){for(const t of n.filters)if(t instanceof Ce)return!1;return!0}function qi(n){if(n instanceof bt)return n.field.canonicalString()+n.op.toString()+Hn(n.value);if(Ql(n))return n.filters.map(t=>qi(t)).join(",");{const t=n.filters.map(e=>qi(e)).join(",");return`${n.op}(${t})`}}function Yl(n,t){return n instanceof bt?function(r,i){return i instanceof bt&&r.op===i.op&&r.field.isEqual(i.field)&&Re(r.value,i.value)}(n,t):n instanceof Ce?function(r,i){return i instanceof Ce&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,c)=>o&&Yl(a,i.filters[c]),!0):!1}(n,t):void G()}function Xl(n){return n instanceof bt?function(e){return`${e.field.canonicalString()} ${e.op} ${Hn(e.value)}`}(n):n instanceof Ce?function(e){return e.op.toString()+" {"+e.getFilters().map(Xl).join(" ,")+"}"}(n):"Filter"}class hf extends bt{constructor(t,e,r){super(t,e,r),this.key=j.fromName(r.referenceValue)}matches(t){const e=j.comparator(t.key,this.key);return this.matchesComparison(e)}}class df extends bt{constructor(t,e){super(t,"in",e),this.keys=Jl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class ff extends bt{constructor(t,e){super(t,"not-in",e),this.keys=Jl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Jl(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>j.fromName(r.referenceValue))}class pf extends bt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return uo(e)&&qr(e.arrayValue,this.value)}}class mf extends bt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&qr(this.value.arrayValue,e)}}class gf extends bt{constructor(t,e){super(t,"not-in",e)}matches(t){if(qr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!qr(this.value.arrayValue,e)}}class _f extends bt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!uo(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>qr(this.value.arrayValue,r))}}/**
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
 */class yf{constructor(t,e=null,r=[],i=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function ja(n,t=null,e=[],r=[],i=null,o=null,a=null){return new yf(n,t,e,r,i,o,a)}function ho(n){const t=Q(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>qi(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Ys(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Hn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Hn(r)).join(",")),t.ue=e}return t.ue}function fo(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!cf(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Yl(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ua(n.startAt,t.startAt)&&Ua(n.endAt,t.endAt)}function zi(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Xs{constructor(t,e=null,r=[],i=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function vf(n,t,e,r,i,o,a,c){return new Xs(n,t,e,r,i,o,a,c)}function Js(n){return new Xs(n)}function qa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ef(n){return n.collectionGroup!==null}function Or(n){const t=Q(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new jt(Ut.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new js(o,r))}),e.has(Ut.keyField().canonicalString())||t.ce.push(new js(Ut.keyField(),r))}return t.ce}function Te(n){const t=Q(n);return t.le||(t.le=Tf(t,Or(n))),t.le}function Tf(n,t){if(n.limitType==="F")return ja(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new js(i.field,o)});const e=n.endAt?new Us(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Us(n.startAt.position,n.startAt.inclusive):null;return ja(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ki(n,t,e){return new Xs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Zs(n,t){return fo(Te(n),Te(t))&&n.limitType===t.limitType}function Zl(n){return`${ho(Te(n))}|lt:${n.limitType}`}function Fn(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>Xl(i)).join(", ")}]`),Ys(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Hn(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Hn(i)).join(",")),`Target(${r})`}(Te(n))}; limitType=${n.limitType})`}function ti(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):j.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of Or(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,c,h){const d=Ba(a,c,h);return a.inclusive?d<=0:d<0}(r.startAt,Or(r),i)||r.endAt&&!function(a,c,h){const d=Ba(a,c,h);return a.inclusive?d>=0:d>0}(r.endAt,Or(r),i))}(n,t)}function wf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function tc(n){return(t,e)=>{let r=!1;for(const i of Or(n)){const o=If(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function If(n,t,e){const r=n.field.isKeyField()?j.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?Wn(h,d):G()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */class nr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){In(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return Kl(this.inner)}size(){return this.innerSize}}/**
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
 */const Af=new vt(j.comparator);function Be(){return Af}const ec=new vt(j.comparator);function Pr(...n){let t=ec;for(const e of n)t=t.insert(e.key,e);return t}function nc(n){let t=ec;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function _n(){return xr()}function rc(){return xr()}function xr(){return new nr(n=>n.toString(),(n,t)=>n.isEqual(t))}const Rf=new vt(j.comparator),Cf=new jt(j.comparator);function Z(...n){let t=Cf;for(const e of n)t=t.add(e);return t}const bf=new jt(it);function Sf(){return bf}/**
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
 */function po(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bs(t)?"-0":t}}function sc(n){return{integerValue:""+n}}function Pf(n,t){return rf(t)?sc(t):po(n,t)}/**
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
 */class ei{constructor(){this._=void 0}}function Vf(n,t,e){return n instanceof qs?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&lo(o)&&(o=co(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof Qn?oc(n,t):n instanceof zr?ac(n,t):function(i,o){const a=ic(i,o),c=za(a)+za(i.Pe);return ji(a)&&ji(i.Pe)?sc(c):po(i.serializer,c)}(n,t)}function Df(n,t,e){return n instanceof Qn?oc(n,t):n instanceof zr?ac(n,t):e}function ic(n,t){return n instanceof zs?function(r){return ji(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class qs extends ei{}class Qn extends ei{constructor(t){super(),this.elements=t}}function oc(n,t){const e=lc(t);for(const r of n.elements)e.some(i=>Re(i,r))||e.push(r);return{arrayValue:{values:e}}}class zr extends ei{constructor(t){super(),this.elements=t}}function ac(n,t){let e=lc(t);for(const r of n.elements)e=e.filter(i=>!Re(i,r));return{arrayValue:{values:e}}}class zs extends ei{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function za(n){return wt(n.integerValue||n.doubleValue)}function lc(n){return uo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class kf{constructor(t,e){this.field=t,this.transform=e}}function Nf(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Qn&&i instanceof Qn||r instanceof zr&&i instanceof zr?Gn(r.elements,i.elements,Re):r instanceof zs&&i instanceof zs?Re(r.Pe,i.Pe):r instanceof qs&&i instanceof qs}(n.transform,t.transform)}class Of{constructor(t,e){this.version=t,this.transformResults=e}}class we{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new we}static exists(t){return new we(void 0,t)}static updateTime(t){return new we(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ss(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ni{}function cc(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new hc(n.key,we.none()):new Wr(n.key,n.data,we.none());{const e=n.data,r=ne.empty();let i=new jt(Ut.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new en(n.key,r,new ue(i.toArray()),we.none())}}function xf(n,t,e){n instanceof Wr?function(i,o,a){const c=i.value.clone(),h=$a(i.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof en?function(i,o,a){if(!Ss(i.precondition,o))return void o.convertToUnknownDocument(a.version);const c=$a(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(uc(i)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Mr(n,t,e,r){return n instanceof Wr?function(o,a,c,h){if(!Ss(o.precondition,a))return c;const d=o.value.clone(),g=Ga(o.fieldTransforms,h,a);return d.setAll(g),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof en?function(o,a,c,h){if(!Ss(o.precondition,a))return c;const d=Ga(o.fieldTransforms,h,a),g=a.data;return g.setAll(uc(o)),g.setAll(d),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,t,e,r):function(o,a,c){return Ss(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function Mf(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=ic(r.transform,i||null);o!=null&&(e===null&&(e=ne.empty()),e.set(r.field,o))}return e||null}function Ka(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Gn(r,i,(o,a)=>Nf(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Wr extends ni{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class en extends ni{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function uc(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function $a(n,t,e){const r=new Map;ut(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,c=t.data.field(o.field);r.set(o.field,Df(a,c,e[i]))}return r}function Ga(n,t,e){const r=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);r.set(i.field,Vf(o,a,t))}return r}class hc extends ni{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Lf extends ni{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ff{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&xf(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Mr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Mr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=rc();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(i.key)?null:c;const h=cc(a,c);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Z())}isEqual(t){return this.batchId===t.batchId&&Gn(this.mutations,t.mutations,(e,r)=>Ka(e,r))&&Gn(this.baseMutations,t.baseMutations,(e,r)=>Ka(e,r))}}class mo{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){ut(t.mutations.length===r.length);let i=function(){return Rf}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new mo(t,e,r,i)}}/**
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
 */class Bf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Uf{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var At,tt;function jf(n){switch(n){default:return G();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function dc(n){if(n===void 0)return Fe("GRPC error has no .code"),D.UNKNOWN;switch(n){case At.OK:return D.OK;case At.CANCELLED:return D.CANCELLED;case At.UNKNOWN:return D.UNKNOWN;case At.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case At.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case At.INTERNAL:return D.INTERNAL;case At.UNAVAILABLE:return D.UNAVAILABLE;case At.UNAUTHENTICATED:return D.UNAUTHENTICATED;case At.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case At.NOT_FOUND:return D.NOT_FOUND;case At.ALREADY_EXISTS:return D.ALREADY_EXISTS;case At.PERMISSION_DENIED:return D.PERMISSION_DENIED;case At.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case At.ABORTED:return D.ABORTED;case At.OUT_OF_RANGE:return D.OUT_OF_RANGE;case At.UNIMPLEMENTED:return D.UNIMPLEMENTED;case At.DATA_LOSS:return D.DATA_LOSS;default:return G()}}(tt=At||(At={}))[tt.OK=0]="OK",tt[tt.CANCELLED=1]="CANCELLED",tt[tt.UNKNOWN=2]="UNKNOWN",tt[tt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tt[tt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tt[tt.NOT_FOUND=5]="NOT_FOUND",tt[tt.ALREADY_EXISTS=6]="ALREADY_EXISTS",tt[tt.PERMISSION_DENIED=7]="PERMISSION_DENIED",tt[tt.UNAUTHENTICATED=16]="UNAUTHENTICATED",tt[tt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tt[tt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tt[tt.ABORTED=10]="ABORTED",tt[tt.OUT_OF_RANGE=11]="OUT_OF_RANGE",tt[tt.UNIMPLEMENTED=12]="UNIMPLEMENTED",tt[tt.INTERNAL=13]="INTERNAL",tt[tt.UNAVAILABLE=14]="UNAVAILABLE",tt[tt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function qf(){return new TextEncoder}/**
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
 */const zf=new vn([4294967295,4294967295],0);function Wa(n){const t=qf().encode(n),e=new Ml;return e.update(t),new Uint8Array(e.digest())}function Ha(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new vn([e,r],0),new vn([i,o],0)]}class go{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Vr(`Invalid padding: ${e}`);if(r<0)throw new Vr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Vr(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Vr(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=vn.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(vn.fromNumber(r)));return i.compare(zf)===1&&(i=new vn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Wa(t),[r,i]=Ha(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new go(o,i,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.Ie===0)return;const e=Wa(t),[r,i]=Ha(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Vr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ri{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Hr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new ri(H.min(),i,new vt(it),Be(),Z())}}class Hr{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Hr(r,e,Z(),Z(),Z())}}/**
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
 */class Ps{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class fc{constructor(t,e){this.targetId=t,this.me=e}}class pc{constructor(t,e,r=qt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Qa{constructor(){this.fe=0,this.ge=Xa(),this.pe=qt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=Z(),e=Z(),r=Z();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:G()}}),new Hr(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=Xa()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,ut(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Kf{constructor(t){this.Le=t,this.Be=new Map,this.ke=Be(),this.qe=Ya(),this.Qe=new vt(it)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:G()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const o=i.target;if(zi(o))if(r===0){const a=new j(o.path);this.Ue(e,a,Ht.newNoDocument(a,H.min()))}else ut(r===1);else{const a=this.Ye(e);if(a!==r){const c=this.Ze(t),h=c?this.Xe(c,t,a):1;if(h!==0){this.je(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let a,c;try{a=Tn(r).toUint8Array()}catch(h){if(h instanceof $l)return $n("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new go(a,i,o)}catch(h){return $n(h instanceof Vr?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const c=this.Je(a);if(c){if(o.current&&zi(c.target)){const h=new j(c.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,Ht.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=Z();this.qe.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const i=new ri(t,e,this.Qe,this.ke,r);return this.ke=Be(),this.qe=Ya(),this.Qe=new vt(it),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Qa,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new jt(it),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||M("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Qa),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Ya(){return new vt(j.comparator)}function Xa(){return new vt(j.comparator)}const $f={asc:"ASCENDING",desc:"DESCENDING"},Gf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Wf={and:"AND",or:"OR"};class Hf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function $i(n,t){return n.useProto3Json||Ys(t)?t:{value:t}}function Ks(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function mc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Qf(n,t){return Ks(n,t.toTimestamp())}function Ie(n){return ut(!!n),H.fromTimestamp(function(e){const r=Ze(e);return new St(r.seconds,r.nanos)}(n))}function _o(n,t){return Gi(n,t).canonicalString()}function Gi(n,t){const e=function(i){return new Tt(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function gc(n){const t=Tt.fromString(n);return ut(Tc(t)),t}function Wi(n,t){return _o(n.databaseId,t.path)}function Ci(n,t){const e=gc(t);if(e.get(1)!==n.databaseId.projectId)throw new F(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new F(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new j(yc(e))}function _c(n,t){return _o(n.databaseId,t)}function Yf(n){const t=gc(n);return t.length===4?Tt.emptyPath():yc(t)}function Hi(n){return new Tt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function yc(n){return ut(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ja(n,t,e){return{name:Wi(n,t),fields:e.value.mapValue.fields}}function Xf(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:G()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(d,g){return d.useProto3Json?(ut(g===void 0||typeof g=="string"),qt.fromBase64String(g||"")):(ut(g===void 0||g instanceof Buffer||g instanceof Uint8Array),qt.fromUint8Array(g||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(d){const g=d.code===void 0?D.UNKNOWN:dc(d.code);return new F(g,d.message||"")}(a);e=new pc(r,i,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ci(n,r.document.name),o=Ie(r.document.updateTime),a=r.document.createTime?Ie(r.document.createTime):H.min(),c=new ne({mapValue:{fields:r.document.fields}}),h=Ht.newFoundDocument(i,o,a,c),d=r.targetIds||[],g=r.removedTargetIds||[];e=new Ps(d,g,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Ci(n,r.document),o=r.readTime?Ie(r.readTime):H.min(),a=Ht.newNoDocument(i,o),c=r.removedTargetIds||[];e=new Ps([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Ci(n,r.document),o=r.removedTargetIds||[];e=new Ps([],o,i,null)}else{if(!("filter"in t))return G();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new Uf(i,o),c=r.targetId;e=new fc(c,a)}}return e}function Jf(n,t){let e;if(t instanceof Wr)e={update:Ja(n,t.key,t.value)};else if(t instanceof hc)e={delete:Wi(n,t.key)};else if(t instanceof en)e={update:Ja(n,t.key,t.data),updateMask:ap(t.fieldMask)};else{if(!(t instanceof Lf))return G();e={verify:Wi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof qs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Qn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof zr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof zs)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw G()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Qf(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:G()}(n,t.precondition)),e}function Zf(n,t){return n&&n.length>0?(ut(t!==void 0),n.map(e=>function(i,o){let a=i.updateTime?Ie(i.updateTime):Ie(o);return a.isEqual(H.min())&&(a=Ie(o)),new Of(a,i.transformResults||[])}(e,t))):[]}function tp(n,t){return{documents:[_c(n,t.path)]}}function ep(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=_c(n,i);const o=function(d){if(d.length!==0)return Ec(Ce.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(g=>function(R){return{field:Bn(R.field),direction:sp(R.dir)}}(g))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=$i(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:i}}function np(n){let t=Yf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){ut(r===1);const g=e.from[0];g.allDescendants?i=g.collectionId:t=t.child(g.collectionId)}let o=[];e.where&&(o=function(v){const R=vc(v);return R instanceof Ce&&Ql(R)?R.getFilters():[R]}(e.where));let a=[];e.orderBy&&(a=function(v){return v.map(R=>function(N){return new js(Un(N.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(v){let R;return R=typeof v=="object"?v.value:v,Ys(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(v){const R=!!v.before,b=v.values||[];return new Us(b,R)}(e.startAt));let d=null;return e.endAt&&(d=function(v){const R=!v.before,b=v.values||[];return new Us(b,R)}(e.endAt)),vf(t,i,a,o,c,"F",h,d)}function rp(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function vc(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Un(e.unaryFilter.field);return bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Un(e.unaryFilter.field);return bt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Un(e.unaryFilter.field);return bt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Un(e.unaryFilter.field);return bt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(n):n.fieldFilter!==void 0?function(e){return bt.create(Un(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ce.create(e.compositeFilter.filters.map(r=>vc(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(n):G()}function sp(n){return $f[n]}function ip(n){return Gf[n]}function op(n){return Wf[n]}function Bn(n){return{fieldPath:n.canonicalString()}}function Un(n){return Ut.fromServerFormat(n.fieldPath)}function Ec(n){return n instanceof bt?function(e){if(e.op==="=="){if(Fa(e.value))return{unaryFilter:{field:Bn(e.field),op:"IS_NAN"}};if(La(e.value))return{unaryFilter:{field:Bn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Fa(e.value))return{unaryFilter:{field:Bn(e.field),op:"IS_NOT_NAN"}};if(La(e.value))return{unaryFilter:{field:Bn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bn(e.field),op:ip(e.op),value:e.value}}}(n):n instanceof Ce?function(e){const r=e.getFilters().map(i=>Ec(i));return r.length===1?r[0]:{compositeFilter:{op:op(e.op),filters:r}}}(n):G()}function ap(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Tc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class We{constructor(t,e,r,i,o=H.min(),a=H.min(),c=qt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new We(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new We(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new We(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new We(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class lp{constructor(t){this.ct=t}}function cp(n){const t=np({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ki(t,t.limit,"L"):t}/**
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
 */class up{constructor(){this.un=new hp}addToCollectionParentIndex(t,e){return this.un.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(Je.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(Je.min())}updateCollectionGroup(t,e,r){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class hp{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new jt(Tt.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new jt(Tt.comparator)).toArray()}}/**
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
 */class Yn{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Yn(0)}static kn(){return new Yn(-1)}}/**
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
 */class dp{constructor(){this.changes=new nr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ht.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?V.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class fp{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class pp{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Mr(r.mutation,i,ue.empty(),St.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,Z()).next(()=>r))}getLocalViewOfDocuments(t,e,r=Z()){const i=_n();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let a=Pr();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=_n();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,Z()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,i){let o=Be();const a=xr(),c=function(){return xr()}();return e.forEach((h,d)=>{const g=r.get(d.key);i.has(d.key)&&(g===void 0||g.mutation instanceof en)?o=o.insert(d.key,d):g!==void 0?(a.set(d.key,g.mutation.getFieldMask()),Mr(g.mutation,d,g.mutation.getFieldMask(),St.now())):a.set(d.key,ue.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,g)=>a.set(d,g)),e.forEach((d,g)=>{var v;return c.set(d,new fp(g,(v=a.get(d))!==null&&v!==void 0?v:null))}),c))}recalculateAndSaveOverlays(t,e){const r=xr();let i=new vt((a,c)=>a-c),o=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let g=r.get(h)||ue.empty();g=c.applyToLocalView(d,g),r.set(h,g);const v=(i.get(c.batchId)||Z()).add(h);i=i.insert(c.batchId,v)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,g=h.value,v=rc();g.forEach(R=>{if(!o.has(R)){const b=cc(e.get(R),r.get(R));b!==null&&v.set(R,b),o=o.add(R)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,v))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(a){return j.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ef(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):V.resolve(_n());let c=-1,h=o;return a.next(d=>V.forEach(d,(g,v)=>(c<v.largestBatchId&&(c=v.largestBatchId),o.get(g)?V.resolve():this.remoteDocumentCache.getEntry(t,g).next(R=>{h=h.insert(g,R)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,Z())).next(g=>({batchId:c,changes:nc(g)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new j(e)).next(r=>{let i=Pr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let a=Pr();return this.indexManager.getCollectionParents(t,o).next(c=>V.forEach(c,h=>{const d=function(v,R){return new Xs(R,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,i).next(g=>{g.forEach((v,R)=>{a=a.insert(v,R)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(a=>{o.forEach((h,d)=>{const g=d.getKey();a.get(g)===null&&(a=a.insert(g,Ht.newInvalidDocument(g)))});let c=Pr();return a.forEach((h,d)=>{const g=o.get(h);g!==void 0&&Mr(g.mutation,d,ue.empty(),St.now()),ti(e,d)&&(c=c.insert(h,d))}),c})}}/**
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
 */class mp{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return V.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Ie(i.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:cp(i.bundledQuery),readTime:Ie(i.readTime)}}(e)),V.resolve()}}/**
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
 */class gp{constructor(){this.overlays=new vt(j.comparator),this.Ir=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const r=_n();return V.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.ht(t,e,o)}),V.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(t,e,r){const i=_n(),o=e.length+1,a=new j(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return V.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new vt((d,g)=>d-g);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let g=o.get(d.largestBatchId);g===null&&(g=_n(),o=o.insert(d.largestBatchId,g)),g.set(d.getKey(),d)}}const c=_n(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,g)=>c.set(d,g)),!(c.size()>=i)););return V.resolve(c)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Bf(e,r));let o=this.Ir.get(e);o===void 0&&(o=Z(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
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
 */class _p{constructor(){this.sessionToken=qt.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
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
 */class yo{constructor(){this.Tr=new jt(kt.Er),this.dr=new jt(kt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new kt(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new kt(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new j(new Tt([])),r=new kt(e,t),i=new kt(e,t+1),o=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new j(new Tt([])),r=new kt(e,t),i=new kt(e,t+1);let o=Z();return this.dr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new kt(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class kt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return j.comparator(t.key,e.key)||it(t.wr,e.wr)}static Ar(t,e){return it(t.wr,e.wr)||j.comparator(t.key,e.key)}}/**
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
 */class yp{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new jt(kt.Er)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Ff(o,e,r,i);this.mutationQueue.push(a);for(const c of i)this.br=this.br.add(new kt(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return V.resolve(a)}lookupMutationBatch(t,e){return V.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.vr(r),o=i<0?0:i;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new kt(e,0),i=new kt(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],a=>{const c=this.Dr(a.wr);o.push(c)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new jt(it);return e.forEach(i=>{const o=new kt(i,0),a=new kt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],c=>{r=r.add(c.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;j.isDocumentKey(o)||(o=o.child(""));const a=new kt(new j(o),0);let c=new jt(it);return this.br.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(h.wr)),!0)},a),V.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(r=>{const i=this.Dr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){ut(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(e.mutations,i=>{const o=new kt(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new kt(e,0),i=this.br.firstAfterOrEqual(r);return V.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class vp{constructor(t){this.Mr=t,this.docs=function(){return new vt(j.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return V.resolve(r?r.document.mutableCopy():Ht.newInvalidDocument(e))}getEntries(t,e){let r=Be();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Ht.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Be();const a=e.path,c=new j(a.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:g}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Zd(Jd(g),r)<=0||(i.has(g.key)||ti(e,g))&&(o=o.insert(g.key,g.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(t,e,r,i){G()}Or(t,e){return V.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Ep(this)}getSize(t){return V.resolve(this.size)}}class Ep extends dp{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(r)}),V.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class Tp{constructor(t){this.persistence=t,this.Nr=new nr(e=>ho(e),fo),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Lr=0,this.Br=new yo,this.targetCount=0,this.kr=Yn.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,i)=>e(i)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),V.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Yn(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.Kn(e),V.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),V.waitFor(o).next(()=>i)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return V.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),V.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),V.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return V.resolve(r)}containsKey(t,e){return V.resolve(this.Br.containsKey(e))}}/**
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
 */class wp{constructor(t,e){this.qr={},this.overlays={},this.Qr=new ao(0),this.Kr=!1,this.Kr=!0,this.$r=new _p,this.referenceDelegate=t(this),this.Ur=new Tp(this),this.indexManager=new up,this.remoteDocumentCache=function(i){return new vp(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new lp(e),this.Gr=new mp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new gp,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new yp(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){M("MemoryPersistence","Starting transaction:",t);const i=new Ip(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(t,e){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class Ip extends ef{constructor(t){super(),this.currentSequenceNumber=t}}class vo{constructor(t){this.persistence=t,this.Jr=new yo,this.Yr=null}static Zr(t){return new vo(t)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),V.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),V.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const i=j.fromPath(r);return this.ei(t,i).next(o=>{o||e.removeEntry(i,H.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return V.or([()=>V.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class Eo{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=i}static Wi(t,e){let r=Z(),i=Z();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Eo(t,e.fromCache,r,i)}}/**
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
 */class Ap{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Rp{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Ch()?8:nf(Ah())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Ap;return this.Xi(t,e,a).next(c=>{if(o.result=c,this.zi)return this.es(t,e,a,c.size)})}).next(()=>o.result)}es(t,e,r,i){return r.documentReadCount<this.ji?(Cr()<=et.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Fn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(Cr()<=et.DEBUG&&M("QueryEngine","Query:",Fn(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Cr()<=et.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Fn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Te(e))):V.resolve())}Yi(t,e){if(qa(e))return V.resolve(null);let r=Te(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Ki(e,null,"F"),r=Te(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=Z(...o);return this.Ji.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.ts(e,c);return this.ns(e,d,a,h.readTime)?this.Yi(t,Ki(e,null,"F")):this.rs(t,d,e,h)}))})))}Zi(t,e,r,i){return qa(e)||i.isEqual(H.min())?V.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const a=this.ts(e,o);return this.ns(e,a,r,i)?V.resolve(null):(Cr()<=et.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Fn(e)),this.rs(t,a,e,Xd(i,-1)).next(c=>c))})}ts(t,e){let r=new jt(tc(t));return e.forEach((i,o)=>{ti(t,o)&&(r=r.add(o))}),r}ns(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(t,e,r){return Cr()<=et.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Fn(e)),this.Ji.getDocumentsMatchingQuery(t,e,Je.min(),r)}rs(t,e,r,i){return this.Ji.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class Cp{constructor(t,e,r,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new vt(it),this._s=new nr(o=>ho(o),fo),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new pp(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function bp(n,t,e,r){return new Cp(n,t,e,r)}async function wc(n,t){const e=Q(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=Z();for(const d of i){a.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}for(const d of o){c.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}return e.localDocuments.getDocuments(r,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:c}))})})}function Sp(n,t){const e=Q(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(c,h,d,g){const v=d.batch,R=v.keys();let b=V.resolve();return R.forEach(N=>{b=b.next(()=>g.getEntry(h,N)).next(x=>{const k=d.docVersions.get(N);ut(k!==null),x.version.compareTo(k)<0&&(v.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),g.addEntry(x)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(h,v))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=Z();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Ic(n){const t=Q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Pp(n,t){const e=Q(n),r=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const c=[];t.targetChanges.forEach((g,v)=>{const R=i.get(v);if(!R)return;c.push(e.Ur.removeMatchingKeys(o,g.removedDocuments,v).next(()=>e.Ur.addMatchingKeys(o,g.addedDocuments,v)));let b=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(v)!==null?b=b.withResumeToken(qt.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):g.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(g.resumeToken,r)),i=i.insert(v,b),function(x,k,B){return x.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(R,b,g)&&c.push(e.Ur.updateTargetData(o,b))});let h=Be(),d=Z();if(t.documentUpdates.forEach(g=>{t.resolvedLimboDocuments.has(g)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,g))}),c.push(Vp(o,a,t.documentUpdates).next(g=>{h=g.Ps,d=g.Is})),!r.isEqual(H.min())){const g=e.Ur.getLastRemoteSnapshotVersion(o).next(v=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(g)}return V.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.os=i,o))}function Vp(n,t,e){let r=Z(),i=Z();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Be();return e.forEach((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(H.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):M("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{Ps:a,Is:i}})}function Dp(n,t){const e=Q(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function kp(n,t){const e=Q(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Ur.getTargetData(r,t).next(o=>o?(i=o,V.resolve(i)):e.Ur.allocateTargetId(r).next(a=>(i=new We(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function Qi(n,t,e){const r=Q(n),i=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Gr(a))throw a;M("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(i.target)}function Za(n,t,e){const r=Q(n);let i=H.min(),o=Z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,g){const v=Q(h),R=v._s.get(g);return R!==void 0?V.resolve(v.os.get(R)):v.Ur.getTargetData(d,g)}(r,a,Te(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?i:H.min(),e?o:Z())).next(c=>(Np(r,wf(t),c),{documents:c,Ts:o})))}function Np(n,t,e){let r=n.us.get(t)||H.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(t,r)}class tl{constructor(){this.activeTargetIds=Sf()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Op{constructor(){this.so=new tl,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new tl,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class xp{_o(t){}shutdown(){}}/**
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
 */class el{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Es=null;function bi(){return Es===null?Es=function(){return 268435456+Math.round(2147483648*Math.random())}():Es++,"0x"+Es.toString(16)}/**
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
 */const Mp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Lp{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const Gt="WebChannelConnection";class Fp extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(e,r,i,o,a){const c=bi(),h=this.xo(e,r.toUriEncodedString());M("RestConnection",`Sending RPC '${e}' ${c}:`,h,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(e,h,d,i).then(g=>(M("RestConnection",`Received RPC '${e}' ${c}: `,g),g),g=>{throw $n("RestConnection",`RPC '${e}' ${c} failed with error: `,g,"url: ",h,"request:",i),g})}Lo(e,r,i,o,a,c){return this.Mo(e,r,i,o,a)}Oo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+er}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),i&&i.headers.forEach((o,a)=>e[a]=o)}xo(e,r){const i=Mp[e];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,i){const o=bi();return new Promise((a,c)=>{const h=new Ll;h.setWithCredentials(!0),h.listenOnce(Fl.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Cs.NO_ERROR:const g=h.getResponseJson();M(Gt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(g)),a(g);break;case Cs.TIMEOUT:M(Gt,`RPC '${t}' ${o} timed out`),c(new F(D.DEADLINE_EXCEEDED,"Request time out"));break;case Cs.HTTP_ERROR:const v=h.getStatus();if(M(Gt,`RPC '${t}' ${o} failed with status:`,v,"response text:",h.getResponseText()),v>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const b=R==null?void 0:R.error;if(b&&b.status&&b.message){const N=function(k){const B=k.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(B)>=0?B:D.UNKNOWN}(b.status);c(new F(N,b.message))}else c(new F(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new F(D.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{M(Gt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(i);M(Gt,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",d,r,15)})}Bo(t,e,r){const i=bi(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=jl(),c=Ul(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const g=o.join("");M(Gt,`Creating RPC '${t}' stream ${i}: ${g}`,h);const v=a.createWebChannel(g,h);let R=!1,b=!1;const N=new Lp({Io:k=>{b?M(Gt,`Not sending because RPC '${t}' stream ${i} is closed:`,k):(R||(M(Gt,`Opening RPC '${t}' stream ${i} transport.`),v.open(),R=!0),M(Gt,`RPC '${t}' stream ${i} sending:`,k),v.send(k))},To:()=>v.close()}),x=(k,B,z)=>{k.listen(B,U=>{try{z(U)}catch(W){setTimeout(()=>{throw W},0)}})};return x(v,Sr.EventType.OPEN,()=>{b||(M(Gt,`RPC '${t}' stream ${i} transport opened.`),N.yo())}),x(v,Sr.EventType.CLOSE,()=>{b||(b=!0,M(Gt,`RPC '${t}' stream ${i} transport closed`),N.So())}),x(v,Sr.EventType.ERROR,k=>{b||(b=!0,$n(Gt,`RPC '${t}' stream ${i} transport errored:`,k),N.So(new F(D.UNAVAILABLE,"The operation could not be completed")))}),x(v,Sr.EventType.MESSAGE,k=>{var B;if(!b){const z=k.data[0];ut(!!z);const U=z,W=U.error||((B=U[0])===null||B===void 0?void 0:B.error);if(W){M(Gt,`RPC '${t}' stream ${i} received error:`,W);const mt=W.status;let Y=function(m){const y=At[m];if(y!==void 0)return dc(y)}(mt),T=W.message;Y===void 0&&(Y=D.INTERNAL,T="Unknown error status: "+mt+" with message "+W.message),b=!0,N.So(new F(Y,T)),v.close()}else M(Gt,`RPC '${t}' stream ${i} received:`,z),N.bo(z)}}),x(c,Bl.STAT_EVENT,k=>{k.stat===Bi.PROXY?M(Gt,`RPC '${t}' stream ${i} detected buffering proxy`):k.stat===Bi.NOPROXY&&M(Gt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}}function Si(){return typeof document<"u"?document:null}/**
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
 */function si(n){return new Hf(n,!0)}/**
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
 */class Ac{constructor(t,e,r=1e3,i=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-r);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Rc{constructor(t,e,r,i,o,a,c,h){this.ui=t,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ac(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===D.RESOURCE_EXHAUSTED?(Fe(e.toString()),Fe("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===e&&this.P_(r,i)},r=>{t(()=>{const i=new F(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return M("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Bp extends Rc{constructor(t,e,r,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Xf(this.serializer,t),r=function(o){if(!("targetChange"in o))return H.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?Ie(a.readTime):H.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=Hi(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=zi(h)?{documents:tp(o,h)}:{query:ep(o,h)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=mc(o,a.resumeToken);const d=$i(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(H.min())>0){c.readTime=Ks(o,a.snapshotVersion.toTimestamp());const d=$i(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const r=rp(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=Hi(this.serializer),e.removeTarget=t,this.a_(e)}}class Up extends Rc{constructor(t,e,r,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return ut(!!t.streamToken),this.lastStreamToken=t.streamToken,ut(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){ut(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Zf(t.writeResults,t.commitTime),r=Ie(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=Hi(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Jf(this.serializer,r))};this.a_(e)}}/**
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
 */class jp extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new F(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,Gi(e,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(D.UNKNOWN,o.toString())})}Lo(t,e,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(t,Gi(e,r),i,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(D.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class qp{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Fe(e),this.D_=!1):M("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class zp{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{An(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=Q(h);d.L_.add(4),await Qr(d),d.q_.set("Unknown"),d.L_.delete(4),await ii(d)}(this))})}),this.q_=new qp(r,i)}}async function ii(n){if(An(n))for(const t of n.B_)await t(!0)}async function Qr(n){for(const t of n.B_)await t(!1)}function Cc(n,t){const e=Q(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Ao(e)?Io(e):rr(e).r_()&&wo(e,t))}function To(n,t){const e=Q(n),r=rr(e);e.N_.delete(t),r.r_()&&bc(e,t),e.N_.size===0&&(r.r_()?r.o_():An(e)&&e.q_.set("Unknown"))}function wo(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(H.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}rr(n).A_(t)}function bc(n,t){n.Q_.xe(t),rr(n).R_(t)}function Io(n){n.Q_=new Kf({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),rr(n).start(),n.q_.v_()}function Ao(n){return An(n)&&!rr(n).n_()&&n.N_.size>0}function An(n){return Q(n).L_.size===0}function Sc(n){n.Q_=void 0}async function Kp(n){n.q_.set("Online")}async function $p(n){n.N_.forEach((t,e)=>{wo(n,t)})}async function Gp(n,t){Sc(n),Ao(n)?(n.q_.M_(t),Io(n)):n.q_.set("Unknown")}async function Wp(n,t,e){if(n.q_.set("Online"),t instanceof pc&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const c of o.targetIds)i.N_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.N_.delete(c),i.Q_.removeTarget(c))}(n,t)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await $s(n,r)}else if(t instanceof Ps?n.Q_.Ke(t):t instanceof fc?n.Q_.He(t):n.Q_.We(t),!e.isEqual(H.min()))try{const r=await Ic(n.localStore);e.compareTo(r)>=0&&await function(o,a){const c=o.Q_.rt(a);return c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const g=o.N_.get(d);g&&o.N_.set(d,g.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const g=o.N_.get(h);if(!g)return;o.N_.set(h,g.withResumeToken(qt.EMPTY_BYTE_STRING,g.snapshotVersion)),bc(o,h);const v=new We(g.target,h,d,g.sequenceNumber);wo(o,v)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await $s(n,r)}}async function $s(n,t,e){if(!Gr(t))throw t;n.L_.add(1),await Qr(n),n.q_.set("Offline"),e||(e=()=>Ic(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await ii(n)})}function Pc(n,t){return t().catch(e=>$s(n,e,t))}async function oi(n){const t=Q(n),e=tn(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Hp(t);)try{const i=await Dp(t.localStore,r);if(i===null){t.O_.length===0&&e.o_();break}r=i.batchId,Qp(t,i)}catch(i){await $s(t,i)}Vc(t)&&Dc(t)}function Hp(n){return An(n)&&n.O_.length<10}function Qp(n,t){n.O_.push(t);const e=tn(n);e.r_()&&e.V_&&e.m_(t.mutations)}function Vc(n){return An(n)&&!tn(n).n_()&&n.O_.length>0}function Dc(n){tn(n).start()}async function Yp(n){tn(n).p_()}async function Xp(n){const t=tn(n);for(const e of n.O_)t.m_(e.mutations)}async function Jp(n,t,e){const r=n.O_.shift(),i=mo.from(r,t,e);await Pc(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await oi(n)}async function Zp(n,t){t&&tn(n).V_&&await async function(r,i){if(function(a){return jf(a)&&a!==D.ABORTED}(i.code)){const o=r.O_.shift();tn(r).s_(),await Pc(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await oi(r)}}(n,t),Vc(n)&&Dc(n)}async function nl(n,t){const e=Q(n);e.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=An(e);e.L_.add(3),await Qr(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await ii(e)}async function tm(n,t){const e=Q(n);t?(e.L_.delete(2),await ii(e)):t||(e.L_.add(2),await Qr(e),e.q_.set("Unknown"))}function rr(n){return n.K_||(n.K_=function(e,r,i){const o=Q(e);return o.w_(),new Bp(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:Kp.bind(null,n),Ro:$p.bind(null,n),mo:Gp.bind(null,n),d_:Wp.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),Ao(n)?Io(n):n.q_.set("Unknown")):(await n.K_.stop(),Sc(n))})),n.K_}function tn(n){return n.U_||(n.U_=function(e,r,i){const o=Q(e);return o.w_(),new Up(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Yp.bind(null,n),mo:Zp.bind(null,n),f_:Xp.bind(null,n),g_:Jp.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await oi(n)):(await n.U_.stop(),n.O_.length>0&&(M("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Ro{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Ye,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const a=Date.now()+r,c=new Ro(t,e,a,i,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(D.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Co(n,t){if(Fe("AsyncQueue",`${t}: ${n}`),Gr(n))return new F(D.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class qn{constructor(t){this.comparator=t?(e,r)=>t(e,r)||j.comparator(e.key,r.key):(e,r)=>j.comparator(e.key,r.key),this.keyedMap=Pr(),this.sortedSet=new vt(this.comparator)}static emptySet(t){return new qn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof qn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new qn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class rl{constructor(){this.W_=new vt(j.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):G():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Xn{constructor(t,e,r,i,o,a,c,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,i,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new Xn(t,e,qn.emptySet(e),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Zs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class em{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class nm{constructor(){this.queries=sl(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const i=Q(e),o=i.queries;i.queries=sl(),o.forEach((a,c)=>{for(const h of c.j_)h.onError(r)})})(this,new F(D.ABORTED,"Firestore shutting down"))}}function sl(){return new nr(n=>Zl(n),Zs)}async function kc(n,t){const e=Q(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.H_()&&t.J_()&&(r=2):(o=new em,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(i,!0);break;case 1:o.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const c=Co(a,`Initialization of query '${Fn(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&bo(e)}async function Nc(n,t){const e=Q(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?i=t.J_()?0:1:!o.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function rm(n,t){const e=Q(n);let r=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const c of a.j_)c.X_(i)&&(r=!0);a.z_=i}}r&&bo(e)}function sm(n,t,e){const r=Q(n),i=r.queries.get(t);if(i)for(const o of i.j_)o.onError(e);r.queries.delete(t)}function bo(n){n.Y_.forEach(t=>{t.next()})}var Yi,il;(il=Yi||(Yi={})).ea="default",il.Cache="cache";class Oc{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Xn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Xn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Yi.Cache}}/**
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
 */class xc{constructor(t){this.key=t}}class Mc{constructor(t){this.key=t}}class im{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Z(),this.mutatedKeys=Z(),this.Aa=tc(t),this.Ra=new qn(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new rl,i=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((g,v)=>{const R=i.get(g),b=ti(this.query,v)?v:null,N=!!R&&this.mutatedKeys.has(R.key),x=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let k=!1;R&&b?R.data.isEqual(b.data)?N!==x&&(r.track({type:3,doc:b}),k=!0):this.ga(R,b)||(r.track({type:2,doc:b}),k=!0,(h&&this.Aa(b,h)>0||d&&this.Aa(b,d)<0)&&(c=!0)):!R&&b?(r.track({type:0,doc:b}),k=!0):R&&!b&&(r.track({type:1,doc:R}),k=!0,(h||d)&&(c=!0)),k&&(b?(a=a.add(b),o=x?o.add(g):o.delete(g)):(a=a.delete(g),o=o.delete(g)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const g=this.query.limitType==="F"?a.last():a.first();a=a.delete(g.key),o=o.delete(g.key),r.track({type:1,doc:g})}return{Ra:a,fa:r,ns:c,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((g,v)=>function(b,N){const x=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return x(b)-x(N)}(g.type,v.type)||this.Aa(g.doc,v.doc)),this.pa(r),i=i!=null&&i;const c=e&&!i?this.ya():[],h=this.da.size===0&&this.current&&!i?1:0,d=h!==this.Ea;return this.Ea=h,a.length!==0||d?{snapshot:new Xn(this.query,t.Ra,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new rl,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=Z(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new Mc(r))}),this.da.forEach(r=>{t.has(r)||e.push(new xc(r))}),e}ba(t){this.Ta=t.Ts,this.da=Z();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Xn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class om{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class am{constructor(t){this.key=t,this.va=!1}}class lm{constructor(t,e,r,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new nr(c=>Zl(c),Zs),this.Ma=new Map,this.xa=new Set,this.Oa=new vt(j.comparator),this.Na=new Map,this.La=new yo,this.Ba={},this.ka=new Map,this.qa=Yn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function cm(n,t,e=!0){const r=qc(n);let i;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await Lc(r,t,e,!0),i}async function um(n,t){const e=qc(n);await Lc(e,t,!0,!1)}async function Lc(n,t,e,r){const i=await kp(n.localStore,Te(t)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await hm(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&Cc(n.remoteStore,i),c}async function hm(n,t,e,r,i){n.Ka=(v,R,b)=>async function(x,k,B,z){let U=k.view.ma(B);U.ns&&(U=await Za(x.localStore,k.query,!1).then(({documents:T})=>k.view.ma(T,U)));const W=z&&z.targetChanges.get(k.targetId),mt=z&&z.targetMismatches.get(k.targetId)!=null,Y=k.view.applyChanges(U,x.isPrimaryClient,W,mt);return al(x,k.targetId,Y.wa),Y.snapshot}(n,v,R,b);const o=await Za(n.localStore,t,!0),a=new im(t,o.Ts),c=a.ma(o.documents),h=Hr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),d=a.applyChanges(c,n.isPrimaryClient,h);al(n,e,d.wa);const g=new om(t,e,a);return n.Fa.set(t,g),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),d.snapshot}async function dm(n,t,e){const r=Q(n),i=r.Fa.get(t),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(a=>!Zs(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Qi(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&To(r.remoteStore,i.targetId),Xi(r,i.targetId)}).catch($r)):(Xi(r,i.targetId),await Qi(r.localStore,i.targetId,!0))}async function fm(n,t){const e=Q(n),r=e.Fa.get(t),i=e.Ma.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),To(e.remoteStore,r.targetId))}async function pm(n,t,e){const r=Tm(n);try{const i=await function(a,c){const h=Q(a),d=St.now(),g=c.reduce((b,N)=>b.add(N.key),Z());let v,R;return h.persistence.runTransaction("Locally write mutations","readwrite",b=>{let N=Be(),x=Z();return h.cs.getEntries(b,g).next(k=>{N=k,N.forEach((B,z)=>{z.isValidDocument()||(x=x.add(B))})}).next(()=>h.localDocuments.getOverlayedDocuments(b,N)).next(k=>{v=k;const B=[];for(const z of c){const U=Mf(z,v.get(z.key).overlayedDocument);U!=null&&B.push(new en(z.key,U,Gl(U.value.mapValue),we.exists(!0)))}return h.mutationQueue.addMutationBatch(b,d,B,c)}).next(k=>{R=k;const B=k.applyToLocalDocumentSet(v,x);return h.documentOverlayCache.saveOverlays(b,k.batchId,B)})}).then(()=>({batchId:R.batchId,changes:nc(v)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,h){let d=a.Ba[a.currentUser.toKey()];d||(d=new vt(it)),d=d.insert(c,h),a.Ba[a.currentUser.toKey()]=d}(r,i.batchId,e),await Yr(r,i.changes),await oi(r.remoteStore)}catch(i){const o=Co(i,"Failed to persist write");e.reject(o)}}async function Fc(n,t){const e=Q(n);try{const r=await Pp(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Na.get(o);a&&(ut(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?ut(a.va):i.removedDocuments.size>0&&(ut(a.va),a.va=!1))}),await Yr(e,r,t)}catch(r){await $r(r)}}function ol(n,t,e){const r=Q(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Fa.forEach((o,a)=>{const c=a.view.Z_(t);c.snapshot&&i.push(c.snapshot)}),function(a,c){const h=Q(a);h.onlineState=c;let d=!1;h.queries.forEach((g,v)=>{for(const R of v.j_)R.Z_(c)&&(d=!0)}),d&&bo(h)}(r.eventManager,t),i.length&&r.Ca.d_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function mm(n,t,e){const r=Q(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Na.get(t),o=i&&i.key;if(o){let a=new vt(j.comparator);a=a.insert(o,Ht.newNoDocument(o,H.min()));const c=Z().add(o),h=new ri(H.min(),new Map,new vt(it),a,c);await Fc(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(t),So(r)}else await Qi(r.localStore,t,!1).then(()=>Xi(r,t,e)).catch($r)}async function gm(n,t){const e=Q(n),r=t.batch.batchId;try{const i=await Sp(e.localStore,t);Uc(e,r,null),Bc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Yr(e,i)}catch(i){await $r(i)}}async function _m(n,t,e){const r=Q(n);try{const i=await function(a,c){const h=Q(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let g;return h.mutationQueue.lookupMutationBatch(d,c).next(v=>(ut(v!==null),g=v.keys(),h.mutationQueue.removeMutationBatch(d,v))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,g,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,g)).next(()=>h.localDocuments.getDocuments(d,g))})}(r.localStore,t);Uc(r,t,e),Bc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Yr(r,i)}catch(i){await $r(i)}}function Bc(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function Uc(n,t,e){const r=Q(n);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Ba[r.currentUser.toKey()]=i}}function Xi(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||jc(n,r)})}function jc(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(To(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),So(n))}function al(n,t,e){for(const r of e)r instanceof xc?(n.La.addReference(r.key,t),ym(n,r)):r instanceof Mc?(M("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||jc(n,r.key)):G()}function ym(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(M("SyncEngine","New document in limbo: "+e),n.xa.add(r),So(n))}function So(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new j(Tt.fromString(t)),r=n.qa.next();n.Na.set(r,new am(e)),n.Oa=n.Oa.insert(e,r),Cc(n.remoteStore,new We(Te(Js(e.path)),r,"TargetPurposeLimboResolution",ao.oe))}}async function Yr(n,t,e){const r=Q(n),i=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,h)=>{a.push(r.Ka(h,t,e).then(d=>{var g;if((d||e)&&r.isPrimaryClient){const v=d?!d.fromCache:(g=e==null?void 0:e.targetChanges.get(h.targetId))===null||g===void 0?void 0:g.current;r.sharedClientState.updateQueryState(h.targetId,v?"current":"not-current")}if(d){i.push(d);const v=Eo.Wi(h.targetId,d);o.push(v)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(h,d){const g=Q(h);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>V.forEach(d,R=>V.forEach(R.$i,b=>g.persistence.referenceDelegate.addReference(v,R.targetId,b)).next(()=>V.forEach(R.Ui,b=>g.persistence.referenceDelegate.removeReference(v,R.targetId,b)))))}catch(v){if(!Gr(v))throw v;M("LocalStore","Failed to update sequence numbers: "+v)}for(const v of d){const R=v.targetId;if(!v.fromCache){const b=g.os.get(R),N=b.snapshotVersion,x=b.withLastLimboFreeSnapshotVersion(N);g.os=g.os.insert(R,x)}}}(r.localStore,o))}async function vm(n,t){const e=Q(n);if(!e.currentUser.isEqual(t)){M("SyncEngine","User change. New user:",t.toKey());const r=await wc(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(c=>{c.forEach(h=>{h.reject(new F(D.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Yr(e,r.hs)}}function Em(n,t){const e=Q(n),r=e.Na.get(t);if(r&&r.va)return Z().add(r.key);{let i=Z();const o=e.Ma.get(t);if(!o)return i;for(const a of o){const c=e.Fa.get(a);i=i.unionWith(c.view.Va)}return i}}function qc(n){const t=Q(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Fc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Em.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=mm.bind(null,t),t.Ca.d_=rm.bind(null,t.eventManager),t.Ca.$a=sm.bind(null,t.eventManager),t}function Tm(n){const t=Q(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=gm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=_m.bind(null,t),t}class Gs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=si(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return bp(this.persistence,new Rp,t.initialUser,this.serializer)}Ga(t){return new wp(vo.Zr,this.serializer)}Wa(t){return new Op}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gs.provider={build:()=>new Gs};class Ji{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ol(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vm.bind(null,this.syncEngine),await tm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new nm}()}createDatastore(t){const e=si(t.databaseInfo.databaseId),r=function(o){return new Fp(o)}(t.databaseInfo);return function(o,a,c,h){return new jp(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,a,c){return new zp(r,i,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>ol(this.syncEngine,e,0),function(){return el.D()?new el:new xp}())}createSyncEngine(t,e){return function(i,o,a,c,h,d,g){const v=new lm(i,o,a,c,h,d);return g&&(v.Qa=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=Q(i);M("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Qr(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ji.provider={build:()=>new Ji};/**
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
 */class zc{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Fe("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class wm{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=Wt.UNAUTHENTICATED,this.clientId=zl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{M("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(M("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ye;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Co(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Pi(n,t){n.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await wc(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ll(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Im(n);M("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>nl(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>nl(t.remoteStore,i)),n._onlineComponents=t}async function Im(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await Pi(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===D.FAILED_PRECONDITION||i.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;$n("Error using user provided cache. Falling back to memory cache: "+e),await Pi(n,new Gs)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await Pi(n,new Gs);return n._offlineComponents}async function Kc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await ll(n,n._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await ll(n,new Ji))),n._onlineComponents}function Am(n){return Kc(n).then(t=>t.syncEngine)}async function Zi(n){const t=await Kc(n),e=t.eventManager;return e.onListen=cm.bind(null,t.syncEngine),e.onUnlisten=dm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=um.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=fm.bind(null,t.syncEngine),e}function Rm(n,t,e={}){const r=new Ye;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const g=new zc({next:R=>{g.Za(),a.enqueueAndForget(()=>Nc(o,v));const b=R.docs.has(c);!b&&R.fromCache?d.reject(new F(D.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&R.fromCache&&h&&h.source==="server"?d.reject(new F(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(R)},error:R=>d.reject(R)}),v=new Oc(Js(c.path),g,{includeMetadataChanges:!0,_a:!0});return kc(o,v)}(await Zi(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function $c(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const cl=new Map;/**
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
 */function Cm(n,t,e){if(!e)throw new F(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function bm(n,t,e,r){if(t===!0&&r===!0)throw new F(D.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ul(n){if(!j.isDocumentKey(n))throw new F(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Po(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":G()}function Ae(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new F(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Po(n);throw new F(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class hl{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new F(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new F(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}bm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$c((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Vo{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hl({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new F(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hl(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new qd;switch(r.type){case"firstParty":return new Gd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=cl.get(e);r&&(M("ComponentProvider","Removing Datastore"),cl.delete(e),r.terminate())}(this),Promise.resolve()}}function Sm(n,t,e,r={}){var i;const o=(n=Ae(n,Vo))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&$n("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=Wt.MOCK_USER;else{c=Ih(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new F(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Wt(d)}n._authCredentials=new zd(new ql(c,h))}}/**
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
 */class ai{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ai(this.firestore,t,this._query)}}class re{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new re(this.firestore,t,this._key)}}class Kr extends ai{constructor(t,e,r){super(t,e,Js(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new re(this.firestore,null,new j(t))}withConverter(t){return new Kr(this.firestore,t,this._path)}}function Pm(n,t,...e){if(n=Xe(n),arguments.length===1&&(t=zl.newId()),Cm("doc","path",t),n instanceof Vo){const r=Tt.fromString(t,...e);return ul(r),new re(n,null,new j(r))}{if(!(n instanceof re||n instanceof Kr))throw new F(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Tt.fromString(t,...e));return ul(r),new re(n.firestore,n instanceof Kr?n.converter:null,new j(r))}}/**
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
 */class dl{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ac(this,"async_queue_retry"),this.Vu=()=>{const r=Si();r&&M("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=Si();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Si();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Ye;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Gr(t))throw t;M("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw Fe("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=Ro.createAndSchedule(this,t,e,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function fl(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(n,["next","error","complete"])}class Jn extends Vo{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new dl,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new dl(t),this._firestoreClient=void 0,await t}}}function Vm(n,t){const e=typeof n=="object"?n:kd(),r=typeof n=="string"?n:"(default)",i=Sd(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Th("firestore");o&&Sm(i,...o)}return i}function Do(n){if(n._terminated)throw new F(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Dm(n),n._firestoreClient}function Dm(n){var t,e,r;const i=n._freezeSettings(),o=function(c,h,d,g){return new of(c,h,d,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,$c(g.experimentalLongPollingOptions),g.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new wm(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class Zn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Zn(qt.fromBase64String(t))}catch(e){throw new F(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Zn(qt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class li{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new F(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ci{constructor(t){this._methodName=t}}/**
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
 */class ko{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new F(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new F(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return it(this._lat,t._lat)||it(this._long,t._long)}}/**
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
 */class No{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const km=/^__.*__$/;class Nm{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new en(t,this.data,this.fieldMask,e,this.fieldTransforms):new Wr(t,this.data,e,this.fieldTransforms)}}class Gc{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new en(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Wc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class ui{constructor(t,e,r,i,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new ui(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:r,xu:!1});return i.Ou(t),i}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Ws(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Wc(this.Cu)&&km.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Om{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||si(t)}Qu(t,e,r,i=!1){return new ui({Cu:t,methodName:e,qu:r,path:Ut.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hc(n){const t=n._freezeSettings(),e=si(n._databaseId);return new Om(n._databaseId,!!t.ignoreUndefinedProperties,e)}function xm(n,t,e,r,i,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,t,e,i);xo("Data must be an object, but it was:",a,r);const c=Qc(r,a);let h,d;if(o.merge)h=new ue(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const g=[];for(const v of o.mergeFields){const R=to(t,v,e);if(!a.contains(R))throw new F(D.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Xc(g,R)||g.push(R)}h=new ue(g),d=a.fieldTransforms.filter(v=>h.covers(v.field))}else h=null,d=a.fieldTransforms;return new Nm(new ne(c),h,d)}class hi extends ci{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof hi}}function Mm(n,t,e){return new ui({Cu:3,qu:t.settings.qu,methodName:n._methodName,xu:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Oo extends ci{constructor(t,e){super(t),this.Ku=e}_toFieldTransform(t){const e=Mm(this,t,!0),r=this.Ku.map(o=>Xr(o,e)),i=new Qn(r);return new kf(t.path,i)}isEqual(t){return t instanceof Oo&&Ms(this.Ku,t.Ku)}}function Lm(n,t,e,r){const i=n.Qu(1,t,e);xo("Data must be an object, but it was:",i,r);const o=[],a=ne.empty();In(r,(h,d)=>{const g=Mo(t,h,e);d=Xe(d);const v=i.Nu(g);if(d instanceof hi)o.push(g);else{const R=Xr(d,v);R!=null&&(o.push(g),a.set(g,R))}});const c=new ue(o);return new Gc(a,c,i.fieldTransforms)}function Fm(n,t,e,r,i,o){const a=n.Qu(1,t,e),c=[to(t,r,e)],h=[i];if(o.length%2!=0)throw new F(D.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<o.length;R+=2)c.push(to(t,o[R])),h.push(o[R+1]);const d=[],g=ne.empty();for(let R=c.length-1;R>=0;--R)if(!Xc(d,c[R])){const b=c[R];let N=h[R];N=Xe(N);const x=a.Nu(b);if(N instanceof hi)d.push(b);else{const k=Xr(N,x);k!=null&&(d.push(b),g.set(b,k))}}const v=new ue(d);return new Gc(g,v,a.fieldTransforms)}function Xr(n,t){if(Yc(n=Xe(n)))return xo("Unsupported field value:",t,n),Qc(n,t);if(n instanceof ci)return function(r,i){if(!Wc(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const c of r){let h=Xr(c,i.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=Xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Pf(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=St.fromDate(r);return{timestampValue:Ks(i.serializer,o)}}if(r instanceof St){const o=new St(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ks(i.serializer,o)}}if(r instanceof ko)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zn)return{bytesValue:mc(i.serializer,r._byteString)};if(r instanceof re){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:_o(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof No)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Bu("VectorValues must only contain numeric values.");return po(c.serializer,h)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Po(r)}`)}(n,t)}function Qc(n,t){const e={};return Kl(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):In(n,(r,i)=>{const o=Xr(i,t.Mu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Yc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof St||n instanceof ko||n instanceof Zn||n instanceof re||n instanceof ci||n instanceof No)}function xo(n,t,e){if(!Yc(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=Po(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function to(n,t,e){if((t=Xe(t))instanceof li)return t._internalPath;if(typeof t=="string")return Mo(n,t);throw Ws("Field path arguments must be of type string or ",n,!1,void 0,e)}const Bm=new RegExp("[~\\*/\\[\\]]");function Mo(n,t,e){if(t.search(Bm)>=0)throw Ws(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new li(...t.split("."))._internalPath}catch{throw Ws(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Ws(n,t,e,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new F(D.INVALID_ARGUMENT,c+n+h)}function Xc(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Jc{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Um(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Zc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Um extends Jc{data(){return super.data()}}function Zc(n,t){return typeof t=="string"?Mo(n,t):t instanceof li?t._internalPath:t._delegate._internalPath}/**
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
 */function jm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qm{convertValue(t,e="none"){switch(wn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return wt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Tn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw G()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return In(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,i;const o=(i=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>wt(a.doubleValue));return new No(o)}convertGeoPoint(t){return new ko(wt(t.latitude),wt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=co(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Ur(t));default:return null}}convertTimestamp(t){const e=Ze(t);return new St(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Tt.fromString(t);ut(Tc(r));const i=new jr(r.get(1),r.get(3)),o=new j(r.popFirst(5));return i.isEqual(e)||Fe(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function zm(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
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
 */class Dr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class tu extends Jc{constructor(t,e,r,i,o,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Vs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Zc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Vs extends tu{data(t={}){return super.data(t)}}class Km{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Dr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Vs(this._firestore,this._userDataWriter,r.key,r,new Dr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new F(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const h=new Vs(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Dr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new Vs(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Dr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,g=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),g=a.indexOf(c.doc.key)),{type:$m(c.type),doc:h,oldIndex:d,newIndex:g}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function $m(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
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
 */function Gm(n){n=Ae(n,re);const t=Ae(n.firestore,Jn);return Rm(Do(t),n._key).then(e=>ru(t,n,e))}class eu extends qm{constructor(t){super(),this.firestore=t}convertBytes(t){return new Zn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new re(this.firestore,null,e)}}function pl(n,t,e){n=Ae(n,re);const r=Ae(n.firestore,Jn),i=zm(n.converter,t);return nu(r,[xm(Hc(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,we.none())])}function Wm(n,t,e,...r){n=Ae(n,re);const i=Ae(n.firestore,Jn),o=Hc(i);let a;return a=typeof(t=Xe(t))=="string"||t instanceof li?Fm(o,"updateDoc",n._key,t,e,r):Lm(o,"updateDoc",n._key,t),nu(i,[a.toMutation(n._key,we.exists(!0))])}function Hm(n,...t){var e,r,i;n=Xe(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||fl(t[a])||(o=t[a],a++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(fl(t[a])){const v=t[a];t[a]=(e=v.next)===null||e===void 0?void 0:e.bind(v),t[a+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),t[a+2]=(i=v.complete)===null||i===void 0?void 0:i.bind(v)}let h,d,g;if(n instanceof re)d=Ae(n.firestore,Jn),g=Js(n._key.path),h={next:v=>{t[a]&&t[a](ru(d,n,v))},error:t[a+1],complete:t[a+2]};else{const v=Ae(n,ai);d=Ae(v.firestore,Jn),g=v._query;const R=new eu(d);h={next:b=>{t[a]&&t[a](new Km(d,R,v,b))},error:t[a+1],complete:t[a+2]},jm(n._query)}return function(R,b,N,x){const k=new zc(x),B=new Oc(b,k,N);return R.asyncQueue.enqueueAndForget(async()=>kc(await Zi(R),B)),()=>{k.Za(),R.asyncQueue.enqueueAndForget(async()=>Nc(await Zi(R),B))}}(Do(d),g,c,h)}function nu(n,t){return function(r,i){const o=new Ye;return r.asyncQueue.enqueueAndForget(async()=>pm(await Am(r),i,o)),o.promise}(Do(n),t)}function ru(n,t,e){const r=e.docs.get(t._key),i=new eu(n);return new tu(n,i,t._key,r,new Dr(e.hasPendingWrites,e.fromCache),t.converter)}function Qm(...n){return new Oo("arrayUnion",n)}(function(t,e=!0){(function(i){er=i})(Dd),Fs(new Lr("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new Jn(new Kd(r.getProvider("auth-internal")),new Hd(r.getProvider("app-check-internal")),function(d,g){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new F(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jr(d.options.projectId,g)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),jn(ka,"4.7.3",t),jn(ka,"4.7.3","esm2017")})();var Ym="firebase",Xm="10.14.1";/**
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
 */jn(Ym,Xm,"app");let Vi=null,Di=null;const Jm=()=>(Vi||(Vi=Nl({apiKey:"AIzaSyAEkDsTVEbr-spwGn7NP4WVMGjjFvc_Vnk",authDomain:"parrotbeak-2b0ae.firebaseapp.com",projectId:"parrotbeak-2b0ae",storageBucket:"parrotbeak-2b0ae.appspot.com",messagingSenderId:"696191016129",appId:"1:696191016129:web:9086db78bbf9d939e58840"})),Vi),Zm=()=>(Di||(Di=Vm(Jm())),Di),ml=n=>{const t=Object.create(null);for(let e=0;e<n.fields.length;e++)t[n.fields[e]]=n[n.fields[e]];return t};class tg{constructor(t,e,r){this.id=t,this.collection=e,this.fields=r,this.ignoreAuth=!1}get ref(){return this._ref||(this._ref=Pm(Zm(),this.collection,this.id)),this._ref}fetch(){return Gm(this.ref)}create(){return pl(this.ref,ml(this))}async save(t=!1,e=zn){try{const r=await this.fetch().catch(zn);if(!t&&r&&r.exists())throw this.id+" already exists in "+this.collection+" ...";return e&&e(r),await pl(this.ref,ml(this)),!0}catch(r){return Ni(r),!1}}update(t){return Wm(this.ref,t).catch(()=>{Ni("Could not update the document...")})}subscribeToData(t){return Hm(this.ref,t)}}const gl=n=>n===Xt.OFFER?"offerIceCandidates":"answerIceCandidates",eg=n=>{const t=(n.getMonth()+1)*31,e=n.getDate();return(t+e).toString().padStart(3,"0")+zu(3)};class _l extends tg{constructor(t,e,r,i=Kn){const o=new Date;super(t||eg(o),"/quinque-rooms",["created","size","offerIceCandidates","answerIceCandidates","turns","answerPubKey","iv"]),t||(this.created=o,this.size=ro.includes(i)?i:Kn,this.offerIceCandidates=[],this.answerIceCandidates=[],this.turns=Rl(this.size*this.size),this.answerPubKey=e,this.iv=r)}saveOffer(t){this.offer=t,this.update({offer:t})}saveAnswer(t){this.answer=t,this.update({answer:t})}addIceCandidate(t,e){const r=gl(t);this.update({[r]:Qm(e)})}clearIceCandidates(t){const e=gl(t);this.update({[e]:[]})}}const su=()=>!!(navigator!=null&&navigator.clipboard),ng=n=>su()?(navigator.clipboard.writeText(n),!0):!1,rg={iceServers:[{urls:"stun:stun.services.mozilla.com"},{urls:"stun:stun.l.google.com:19302"}]};class sg{constructor(){this.onicecandidate=null,this.onstatechange=null,this.onmessage=null,this.dataChannel=null,this.remoteDescriptionApplied=new Promise(t=>{this.applyRemoteDescription=t})}init(){const t=this;this.connection=new RTCPeerConnection(rg),this.connection.onicecandidate=e=>{t.onicecandidate&&t.onicecandidate(e)},this.connection.onconnectionstatechange=e=>{t.onstatechange&&t.onstatechange(e)},this.connection.ondatachannel=e=>{const{channel:r}=e;r&&(r.onopen=()=>{},r.onclose=()=>{},r.onmessage=i=>{this.onmessage&&this.onmessage(i)},this.dataChannel=r)}}close(){var t;(t=this.connection)==null||t.close()}createDatachannel(t="default"){var e;this.dataChannel=((e=this.connection)==null?void 0:e.createDataChannel(t))||null,this.dataChannel&&(this.dataChannel.onopen=()=>{},this.dataChannel.onclose=()=>{},this.dataChannel.onmessage=r=>{this.onmessage&&this.onmessage(r)})}localDescription(){var t,e;return((e=(t=this.connection)==null?void 0:t.localDescription)==null?void 0:e.sdp)||""}createOffer(){var t;return(t=this.connection)==null?void 0:t.createOffer()}createAnswer(){var t;return(t=this.connection)==null?void 0:t.createAnswer()}async setRemoteDescription(t){var e;await((e=this.connection)==null?void 0:e.setRemoteDescription(t)),this.applyRemoteDescription()}setLocalDescription(t){var e;return(e=this.connection)==null?void 0:e.setLocalDescription(t)}addIceCandidate(t){var e;return(e=this.connection)==null?void 0:e.addIceCandidate(t)}sendChannelMessage(t){var e;if(!this.dataChannel||this.dataChannel.readyState!=="open"){(e=this.connection)==null||e.close();return}this.dataChannel.send(t)}}const ht=new sg,iu={name:"ECDH",namedCurve:"P-384"},ki="AES-GCM",yl=n=>btoa(String.fromCharCode.apply(null,new Uint8Array(n))),vl=n=>{const t=atob(n),e=new Uint8Array(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e.buffer},ig=n=>{const t=JSON.parse(n);return crypto.subtle.importKey("jwk",t,iu,!0,[])};class og{constructor(){this.pubKey=null,this.prKey=null,this.iv=crypto.getRandomValues(new Uint8Array(12)),this.waitingForSharedSecret=new Promise(t=>{this.resolveShareSecret=t})}init(){return new Promise(t=>{crypto.subtle.generateKey(iu,!0,["deriveKey"]).then(async e=>{this.pubKey=e.publicKey,this.prKey=e.privateKey,t()})})}async deriveSharedKey(t){return this.prKey?crypto.subtle.deriveKey({name:"ECDH",public:t},this.prKey,{name:ki,length:256},!0,["encrypt","decrypt"]):null}async exportPublicKeyToJwk(){return this.pubKey?JSON.stringify(await crypto.subtle.exportKey("jwk",this.pubKey)):""}async setSharedKeyFromJwkString(t){this.shared={key:await this.deriveSharedKey(await ig(t))},this.resolveShareSecret()}setIvFromRemote(t){this.iv=new Uint8Array(vl(t))}async ecnrypt(t,e,r){var i;if(e||(e=((i=this.shared)==null?void 0:i.key)||void 0),!e)throw"The key is not generated...";return yl(await crypto.subtle.encrypt({name:ki,iv:r||this.iv},e,new TextEncoder().encode(t)))}async decrypt(t,e,r){var i;if(e||(e=((i=this.shared)==null?void 0:i.key)||void 0),!e)throw"Key is not provided...";return new TextDecoder().decode(await crypto.subtle.decrypt({name:ki,iv:r||this.iv},e,vl(t)))}ivString(){return yl(this.iv.buffer)}}const Ft=new og,El=()=>{Al.set({text:"",ok:zn,dismiss:zn})},ou=(n,t="OK",e="Cancel")=>new Promise(r=>{Al.set({text:n,okLabel:t,dismissLabel:e,ok:()=>{El(),r(!0)},dismiss:()=>{El(),r(!1)}})});var ag=Pt('<p class="text-faded">Your browser does not support webRTC peer-to-peer connections.. If you see this message, please try to change to a browser which supports webRTC (hint: most of modern web browsers do).</p>'),lg=Pt('<p class="text-faded"> </p>'),cg=Pt("<p> </p>"),ug=Pt('<div class="flex flex-row items-center gap-4 pt-6"><!> <!></div>'),hg=Pt('<p class="pb-4 text-faded">Room id:&ensp;<span class="text-white"> </span></p> <input readonly=""> <!>',1);function dg(n,t){Hs(t,!0);const e="p-2 border border-gray-700 rounded-md w-full bg-gray-800",r=su(),i={};let o=Rt(null),a=Rt(""),c=Rt(null),h=Rt(""),d=Rt(null),g=null;const v={},R=p=>{const m=p.target;m?m.connectionState==="connected"?t.onconnected({size:v.size,status:v.type===Xt.OFFER?Jt.CONNECTED_AS_PLAYER1:Jt.CONNECTED_AS_PLAYER2,turns:v.turns}):m.connectionState==="failed"?K(h,"Negotiation failed. Check your network or VPN..."):m.connectionState==="connecting"?hh("Connecting the peer..."):K(h,"Unknown network error..."):K(h,"Could not create a gaming session...")},b=async(p,m)=>{var w;if(!m)return;await Ft.waitingForSharedSecret;const y={type:"candidate",sdpMid:m.sdpMid,sdpMLineIndex:m.sdpMLineIndex,candidate:m.candidate},E=await Ft.ecnrypt(JSON.stringify(y));i[E]||((w=A(d))==null||w.addIceCandidate(p,E),i[E]=!0)},N=async()=>{if(!A(d))return;ht.init(),ht.onicecandidate=({candidate:y})=>{b(Xt.ANSWER,y)},ht.onstatechange=R,await Ft.setSharedKeyFromJwkString(v.offerPubKey);const p=new RTCSessionDescription({type:Xt.OFFER,sdp:await Ft.decrypt(v.offer)});await ht.setRemoteDescription(p);const m=await ht.createAnswer();if(!m||!m.sdp){K(h,"Could not verify the peer connection...");return}await ht.setLocalDescription(new RTCSessionDescription(m)),v.answer=m.sdp,A(d).saveAnswer(await Ft.ecnrypt(m.sdp)),A(d).saveOffer("-")},x=async()=>{if(!A(d)||v.answer==="-")return;const p=new RTCSessionDescription({type:Xt.ANSWER,sdp:await Ft.decrypt(v.answer)});await ht.setRemoteDescription(p),A(d).saveAnswer("-")},k=async p=>{var w,_,J;const m=p.data()||{};if(!Object.keys(m).length)return;const y=["size","turns","offerPubKey","iv"];for(let gt=0;gt<y.length;gt++){const ft=y[gt];!v[ft]&&m[ft]&&(v[ft]=m[ft])}!v.answerPubKey&&m.answerPubKey&&(v.answerPubKey=m.answerPubKey,v.type===Xt.OFFER&&(Ft.setIvFromRemote(m.iv),await Ft.setSharedKeyFromJwkString(m.answerPubKey),v.type===Xt.OFFER&&((w=A(d))==null||w.saveOffer(await Ft.ecnrypt(ht.localDescription()))))),!v.offer&&m.offer&&(v.offer=m.offer,v.type===Xt.ANSWER&&N()),!v.answer&&m.answer&&(v.answer=m.answer,x());const E=async gt=>{await ht.remoteDescriptionApplied;for(let ft=0;ft<gt.length;ft++){let Vt=null;try{Vt=JSON.parse(await Ft.decrypt(gt[ft]))}catch(Ct){Ni(Ct)}Vt&&(i[gt[ft]]||(await ht.addIceCandidate(Vt.candidate?Vt:null),i[gt[ft]]=!0))}};v.type===Xt.OFFER&&m.answerIceCandidates.length?(await Ft.waitingForSharedSecret,await E(m.answerIceCandidates),(_=A(d))==null||_.clearIceCandidates(Xt.ANSWER)):v.type===Xt.ANSWER&&m.offerIceCandidates.length&&(await Ft.waitingForSharedSecret,await E(m.offerIceCandidates),(J=A(d))==null||J.clearIceCandidates(Xt.OFFER))},B=async p=>{await Ft.init(),K(d,rt(new _l(p))),g=A(d).subscribeToData(k),ht.init(),ht.onicecandidate=({candidate:y})=>{b(Xt.OFFER,y)},ht.onstatechange=R,ht.createDatachannel();const m=await ht.createOffer();if(!m||!m.sdp){K(h,"Could not set up a stable connection...");return}v.type=Xt.OFFER,A(d).update({offerPubKey:await Ft.exportPublicKeyToJwk()}),ht.setLocalDescription(m)},z=async()=>{await Ft.init();let p=parseInt(Ge.url.searchParams.get("s")||String(Kn));ro.includes(p)||(p=Kn),K(d,rt(new _l("",await Ft.exportPublicKeyToJwk(),Ft.ivString(),p))),await!A(d).save()&&(await ou("This room ID is already taken. Refresh the page to get a new one."),window.location.reload()),K(a,Ge.url.protocol+"//"+Ge.url.host+Ge.url.pathname+"?room="+A(d).id),A(d).subscribeToData(k),v.type=Xt.ANSWER},U=()=>{K(c,rt(ng(A(a))?{class:"text-green-500",label:"Link copied!"}:{class:"text-red-500",label:"Could not copy..."}))};Il(()=>{if(K(o,!!window.RTCPeerConnection),!A(o))return;const p=Ge.url.searchParams.get("room");p?B(p):z()}),Ku(()=>{g&&g()});var W=xe(),mt=le(W);{var Y=p=>{ya(p,{})},T=p=>{var m=xe(),y=le(m);{var E=_=>{var J=ag();dt(_,J)},w=_=>{var J=xe(),gt=le(J);{var ft=Ct=>{var Qt=lg(),me=ct(Qt,!0);ot(Qt),Me(()=>ws(me,A(h))),dt(Ct,Qt)},Vt=Ct=>{var Qt=xe(),me=le(Qt);{var sr=_t=>{var nn=hg(),se=le(nn),Rn=X(ct(se)),he=ct(Rn,!0);ot(Rn),ot(se);var Ue=X(se,2);Su(Ue),Nt(Ue,Ot(e));var Cn=X(Ue,2);{var be=te=>{var Se=ug(),ge=ct(Se);Ln(ge,{label:"Copy link",icon:ku,class:"text-primary border-2 border-primary px-4",onclick:U});var rn=X(ge,2);{var sn=je=>{var Yt=cg(),bn=ct(Yt,!0);ot(Yt),Me(()=>{Nt(Yt,Ot(A(c).class)),ws(bn,A(c).label)}),dt(je,Yt)};pe(rn,je=>{A(c)&&je(sn)})}ot(Se),dt(te,Se)};pe(Cn,te=>{r&&te(be)})}Me(()=>{var te;ws(he,(te=A(d))==null?void 0:te.id),Pu(Ue,A(a))}),dt(_t,nn)},Zt=_t=>{ya(_t,{})};pe(me,_t=>{A(a)?_t(sr):_t(Zt,!1)},!0)}dt(Ct,Qt)};pe(gt,Ct=>{A(h)?Ct(ft):Ct(Vt,!1)},!0)}dt(_,J)};pe(y,_=>{A(o)?_(w,!1):_(E)},!0)}dt(p,m)};pe(mt,p=>{A(o)===null?p(Y):p(T,!1)})}dt(n,W),Qs()}var fg=Pt('<div class="flex flex-row gap-1"></div>'),pg=Pt("<p>This will reset the current board and it's progress. Continue?</p>"),mg=Pt("<p>Player 1 won!</p>"),gg=Pt("<p>Player 2 won!</p>"),_g=Pt('<p class="text-white">A tie!</p>'),yg=Pt('<p>NICE!</p> <div class="h-96 max-w-full max-h-full flex flex-col justify-center items-center"><div><div class="text-4xl text-center"><!> <!></div> <!> <!></div></div>',1),vg=Pt("<p>Player disconnected... Please start another session.</p>"),Eg=Pt('<div class="h-device relative"><div><div class="flex flex-row gap-2 pb-2 pt-3 px-2 items-start"><!> <div class="flex-1 flex flex-row justify-center relative"><div><!> <!></div></div> <!></div> <div class="flex-1 flex flex-col justify-center w-full max-w-[600px] mx-auto gap-1 px-3"><div class="relative"><p> </p></div> <!></div> <div class="flex flex-row justify-center pb-2"><!></div></div></div> <!> <!> <!> <!>',1);function Fg(n,t){Hs(t,!0);const[e,r]=no(),i=()=>yn(kr,"$enteringMode",e),o=()=>yn(pn,"$enteringMode1",e),a=()=>yn(mn,"$enteringMode2",e),c="text-color1",h="text-color2";let d=Rt(rt([])),g=Rt(rt([])),v=Rt(0),R=[],b=Rt(!1),N=Rt(!1),x=!1,k=Rt(!1),B=Rt(null),z=null,U=Rt(!1),W=Rt(null),mt=Rt(rt(fn.AI)),Y=Rt(null),T=Rt(!1);const p=S=>ht.sendChannelMessage(JSON.stringify(S)),m=parseInt(Ge.url.searchParams.get("s")||String(Kn));let y=Rt(rt(ro.indexOf(m)>=0?m:Kn));const E=(S,P,L)=>{if(!(!A(d)[S]||A(d)[S][P]!==!1))return A(d)[S][P]=L,[S,P]},w=(S,P)=>[[S,P],[S-1,P],[S+1,P],[S,P-1],[S,P+1]],_=(S,P)=>[[S,P],[S-1,P-1],[S-1,P+1],[S+1,P-1],[S+1,P+1]],J=(S,P)=>[[S,P],[S+1,P-1],[S+2,P-2],[S-1,P+1],[S-2,P+2]],gt=(S,P)=>[[S,P],[S-1,P-1],[S-2,P-2],[S+1,P+1],[S+2,P+2]],ft=(S,P)=>[[S,P],[S,P-1],[S,P-2],[S,P+1],[S,P+2]],Vt=(S,P)=>[[S,P],[S-1,P],[S-2,P],[S+1,P],[S+2,P]],Ct=(S,P,L)=>{const $=[];let q=[];switch(i()){case at.AXES:q=w(S,P);break;case at.DIAGONAL:q=_(S,P);break;case at.RISING:q=J(S,P);break;case at.FALLING:q=gt(S,P);break;case at.HORIZONTAL:q=ft(S,P);break;case at.VERTICAL:q=Vt(S,P);break;default:q=[[S,P]];break}for(let lt=0;lt<q.length;lt++)$.push(E(q[lt][0],q[lt][1],L));return $},Qt=(S,P)=>{const L=[];for(let $=0;$<S.length;$++){if(!S[$])continue;const[q,lt]=S[$],It=lt+1,zt=lt+2,ve=lt-1,cn=lt-2,Ee=q+1,ie=q+2,fe=q-1,_e=q-2;A(d)[q][zt]===P&&A(d)[q][It]!==!1&&L.push([q,It]),A(d)[q][cn]===P&&A(d)[q][ve]!==!1&&L.push([q,ve]),A(d)[ie]&&A(d)[ie][lt]===P&&A(d)[Ee][lt]!==!1&&L.push([Ee,lt]),A(d)[_e]&&A(d)[_e][lt]===P&&A(d)[fe][lt]!==!1&&L.push([fe,lt])}return L},me=(S,P)=>{const L=Qt(S,P);for(let $=0;$<L.length;$++)A(d)[L[$][0]][L[$][1]]=P},sr=async()=>{K(U,!0),z||(z=new uh(A(d)));const S=await z.selectBlock(i());K(U,!1),S&&Zt(S[0],S[1],!0)},Zt=async(S,P,L)=>{if(A(k))return;const $=A(Yt)?"color1":"color2";if(K(B,null),me(Ct(S,P,$),$),!Object.values(A(d)).some(q=>q.some(lt=>!lt))){A(ee)&&p({type:"placedBlock",rowIndex:S,colIndex:P}),K(k,!0),setTimeout(Se,500);return}bu(v),await wl(),A(Yt)&&(ae(kr,rt(o())),ae(pn,rt(a())),ae(mn,rt(A(ee)?R[A(v)+1]:As()))),L!==!0&&(A(on)?sr():A(ee)&&(p({type:"placedBlock",rowIndex:S,colIndex:P}),K(U,!0)))},_t=async({rowIndex:S,colIndex:P})=>{if(lh.is.webMobile&&(!A(B)||A(B)[0]!==S||A(B)[1]!==P)){K(B,rt([S,P]));return}x=!0,Zt(S,P)},nn=()=>{const S=[];for(let P=0;P<A(y);P++){S[P]=[];for(let L=0;L<A(y);L++)S[P][L]=!1}K(g,rt(S)),K(W,null),K(B,null)},se=()=>{const S=[];for(let P=0;P<A(y);P++){S[P]=[];for(let L=0;L<A(y);L++)S[P][L]=!1}K(d,rt(S)),nn()},Rn=S=>{let P=0,L=0;for(let $=0;$<S.length;$++)for(let q=0;q<S[$].length;q++)S[$][q]==="color1"?P+=Ns(S,$,q,"color1"):S[$][q]==="color2"&&(L+=Ns(S,$,q,"color2"));return[P,L]},he=S=>{se(),K(v,0),ae(kr,rt(at.SINGLE)),ae(pn,rt(As())),ae(mn,rt(As())),te(),x=!1,K(k,!1),K(U,!1),K(B,null),z?(z.cancelActiveActions(),z=null):A(ee)&&(A(Y)===Jt.CONNECTED_AS_PLAYER1&&K(U,!0),S||(R=Rl(A(y)*A(y)),ae(pn,rt(R[1])),ae(mn,rt(R[2])),p({type:"resetGame",turns:R})))},Ue=({rowIndex:S,colIndex:P})=>{let L=[];switch(i()){case at.AXES:L=w(S,P);break;case at.DIAGONAL:L=_(S,P);break;case at.RISING:L=J(S,P);break;case at.FALLING:L=gt(S,P);break;case at.HORIZONTAL:L=ft(S,P);break;case at.VERTICAL:L=Vt(S,P);break}for(let $=0;$<L.length;$++)A(g)[L[$][0]]!==void 0&&A(g)[L[$][0]][L[$][1]]!==void 0&&(A(g)[L[$][0]][L[$][1]]=A(bn));K(W,rt([S,P]))},Cn=async()=>{x&&!A(k)&&!await ou("Finish the game and go to main menu?")||Gu(Hu)},be=()=>{if(A(N)){ge(),setTimeout(he,250);return}if(!x||A(k)){he();return}K(b,!0)},te=()=>{K(b,!1)},Se=()=>{K(N,!0)},ge=()=>{K(N,!1)},rn=({size:S,status:P,turns:L})=>{K(y,rt(S)),K(Y,rt(P)),R=L,se(),ae(pn,rt(L[1])),ae(mn,rt(L[2])),ht.onstatechange=$=>{const q=$.target;(!q||["disconnected","failed"].includes(q.connectionState))&&K(Y,rt(Jt.DISCONNECTED))},ht.onmessage=({data:$})=>{try{const{type:q,rowIndex:lt,colIndex:It,turns:zt}=JSON.parse($);switch(q){case"placedBlock":Zt(lt,It,!0),K(U,!1);break;case"resetGame":{const ve=()=>{he(!0),zt&&(R=zt,ae(pn,rt(zt[1])),ae(mn,rt(zt[2])))};A(N)?(ge(),setTimeout(ve,250)):ve();break}case"left":ht==null||ht.close(),K(Y,rt(Jt.DISCONNECTED));break;default:break}}catch{ht==null||ht.close(),K(Y,rt(Jt.DISCONNECTED))}},A(Y)===Jt.CONNECTED_AS_PLAYER1&&K(U,!0)},sn=()=>{K(T,!0)},je=()=>{K(T,!1)};let Yt=st(()=>Qu(A(v))),bn=st(()=>A(Yt)?"color1":"color2"),ir=st(()=>A(Yt)?c:h),de=st(()=>Rn(A(d))),Jr=st(()=>"pt-3"+(A(k)?" invisible":"")),on=st(()=>A(mt)===fn.AI),ee=st(()=>!A(on)&&A(mt)===fn.FRIEND_ONLINE),or=st(()=>"h-full flex flex-col relative"+(A(U)?" cursor-wait":"")),Zr=st(()=>A(on)&&!A(Yt)||A(ee)&&A(Yt)&&A(Y)===Jt.CONNECTED_AS_PLAYER1||A(ee)&&!A(Yt)&&A(Y)===Jt.CONNECTED_AS_PLAYER2?" text-faded":" "+A(ir)),Dt=st(()=>"font-bold text-center text-sm pb-1"+A(Zr)),xt=st(()=>A(B)?"Confirm selection":A(Yt)?A(on)||A(ee)&&A(Y)===Jt.CONNECTED_AS_PLAYER2?"Your turn":"Player's 1 turn...":A(on)?"Computer...":A(ee)&&A(Y)===Jt.CONNECTED_AS_PLAYER1?"Your turn":"Player's 2 turn..."),Sn=st(()=>A(Y)===Jt.CONNECTING),ar=st(()=>A(ee)&&A(Y)===Jt.DISCONNECTED);ae(Vu,null),se(),Il(()=>{if(Ge.url.searchParams.get("room"))K(mt,rt(fn.FRIEND_ONLINE)),K(Y,rt(Jt.CONNECTING));else{const P=parseInt(Ge.url.searchParams.get("m")||String(fn.AI));Object.values(fn).includes(P)&&K(mt,rt(P)),A(mt)===fn.FRIEND_ONLINE&&K(Y,rt(Jt.CONNECTING))}he()}),$u(()=>{p({type:"left"}),A(ee)&&(ht==null||ht.close())});var lr=Eg(),cr=le(lr),Pe=ct(cr),Pn=ct(Pe),ur=ct(Pn);Ln(ur,{icon:Nu,class:"text-primary",onclick:Cn});var an=X(ur,2),ts=ct(an),es=ct(ts);va(es,{get score1(){return A(de)[0]},get score2(){return A(de)[1]},score1Class:c,score2Class:h});var hr=X(es,2);ih(hr,{get class(){return A(Jr)},get color(){return A(ir)}}),ot(ts),ot(an);var ns=X(an,2);Ln(ns,{class:"text-primary",icon:_a,onclick:be}),ot(Pn);var Vn=X(Pn,2),Ve=ct(Vn),ln=ct(Ve),dr=ct(ln,!0);ot(ln),ot(Ve);var De=X(Ve,2);Ds(De,17,()=>({length:A(y)}),ks,(S,P,L)=>{var $=fg();Ds($,21,()=>({length:A(y)}),ks,(q,lt,It,zt)=>{Ju(q,{rowIndex:L,colIndex:It,get selected(){return A(d)[L][It]},get selectCandidate(){return A(g)[L][It]},get hoverColor(){return A(bn)},get disabled(){return A(U)},get hoverCoords(){return A(W)},onclick:_t,onenter:Ue,onleave:nn})}),ot($),dt(S,$)}),ot(Vn);var fr=X(Vn,2),Dn=ct(fr);Ln(Dn,{label:"Rules",class:"text-faded text-sm",onclick:sn}),ot(fr),ot(Pe),ot(cr);var pr=X(cr,2);br(pr,{get showing(){return A(b)},title:"Reset the game?",okLabel:"Reset",onok:()=>{he()},ondismiss:te,children:(S,P)=>{var L=pg();dt(S,L)},$$slots:{default:!0}});var qe=X(pr,2);br(qe,{get showing(){return A(N)},hideOk:!0,hideCancel:!0,class:"font-bold",ondismiss:ge,children:(S,P)=>{var L=yg(),$=X(le(L),2),q=ct($),lt=ct(q),It=ct(lt);{var zt=fe=>{var _e=mg();Nt(_e,Ot(c)),dt(fe,_e)},ve=fe=>{var _e=xe(),gr=le(_e);{var _r=ke=>{var kn=gg();Nt(kn,Ot(h)),dt(ke,kn)},ss=ke=>{var kn=_g();dt(ke,kn)};pe(gr,ke=>{A(de)[0]<A(de)[1]?ke(_r):ke(ss,!1)},!0)}dt(fe,_e)};pe(It,fe=>{A(de)[0]>A(de)[1]?fe(zt):fe(ve,!1)})}var cn=X(It,2);va(cn,{get score1(){return A(de)[0]},get score2(){return A(de)[1]},score1Class:"font-bold "+c,score2Class:"font-bold "+h,class:"pt-6 pb-8"}),ot(lt);var Ee=X(lt,2);Ln(Ee,{label:"Play again",icon:_a,class:"border border-primary text-primary mx-auto px-6",onclick:be});var ie=X(Ee,2);Ln(ie,{label:"Back",class:"text-faded mx-auto mt-4 px-6",onclick:ge}),ot(q),ot($),dt(S,L)},$$slots:{default:!0}});var mr=X(qe,2);const Mt=st(()=>A(Sn)||A(ar));br(mr,{get showing(){return A(Mt)},title:"Peer connection",hideOk:!0,ondismiss:Cn,children:(S,P)=>{var L=xe(),$=le(L);{var q=It=>{var zt=vg();dt(It,zt)},lt=It=>{dg(It,{onconnected:rn})};pe($,It=>{A(ar)?It(q):It(lt,!1)})}dt(S,L)},$$slots:{default:!0}});var rs=X(mr,2);br(rs,{get showing(){return A(T)},hideOk:!0,title:"Game rules",ondismiss:je,children:(S,P)=>{ju(S)},$$slots:{default:!0}}),Me(()=>{Nt(Pe,Ot(A(or))),Nt(ln,Ot(A(Dt))),ws(dr,A(xt))}),dt(n,lr),Qs(),r()}export{Fg as component};
