import{s as Dn,e as K,c as G,b as ct,f as S,m as k,i as tt,u as fn,n as yt,O as Uc,k as ae,Q as $c,q as jc,z as ge,h as b,o as Ts,x as Zr,y as ts,t as De,d as Ve,a as X,g as Z,l as se,B as qc,a6 as Gh,j as ws,p as Zt}from"../chunks/scheduler.mMwpMo5e.js";import{S as Vn,i as kn,t as M,g as Nn,d as F,b as On,c as nt,a as rt,m as st,e as it}from"../chunks/index.BZb_-nxa.js";import{I as Se,e as ke,h as da}from"../chunks/layout-store.CAirz7S_.js";import{e as at,c as Hh,M as Kn,r as Ht,d as Wh,g as Wt,a as Qh,h as zc,p as Ue}from"../chunks/fontawesome6-icons.CDxRpMWc.js";import{c as Yh,a as Jh,b as Xh,d as Zh,e as tf,f as ef,g as nf,R as rf}from"../chunks/RulesBlock.BIQNO0zr.js";import{w as ro}from"../chunks/index.C4IcocY9.js";import{l as sf,r as of,P as Kc,B as mn}from"../chunks/dom.HBLi8492.js";import{b as af,g as cf}from"../chunks/entry.Dbw-1pyR.js";import{r as lf,h as uf}from"../chunks/strings.DSLOuTFr.js";import{p as Gc}from"../chunks/stores.Ba29rrlS.js";import{a as so,d as En}from"../chunks/arrays.BlcEEe38.js";import{c as Hc}from"../chunks/system-store.CStlKkKm.js";const Gr=()=>Math.floor(Math.random()*Object.keys(at).length),hf=n=>!n||!(n%2),Hr=n=>{switch(n){case at.AXES:return nf;case at.DIAGONAL:return ef;case at.RISING:return tf;case at.FALLING:return Zh;case at.HORIZONTAL:return Xh;case at.VERTICAL:return Jh;default:return Yh}},es=(n,t,e,r)=>{if(n[t]===void 0||n[t][e]===void 0)return 0;let s=5;const i=t-1,o=t+1;return(n[i]&&n[i][e]===r||n[o]&&n[o][e]===r)&&s--,(n[t][e+1]===r||n[t][e-1]===r)&&s--,s},Wc=n=>{const t=[];t.push(at.SINGLE);for(let e=1;e<n;e++)t.push(Gr());return t},Jn=ro(at.SINGLE),$e=ro(at.SINGLE),je=ro(at.SINGLE);function ma(n){let t,e,r,s;const i=[df,ff],o=[];function a(c,l){return c[2]?0:c[1]?1:-1}return~(t=a(n))&&(e=o[t]=i[t](n)),{c(){e&&e.c(),r=ge()},l(c){e&&e.l(c),r=ge()},m(c,l){~t&&o[t].m(c,l),tt(c,r,l),s=!0},p(c,l){let u=t;t=a(c),t===u?~t&&o[t].p(c,l):(e&&(Nn(),F(o[u],1,1,()=>{o[u]=null}),On()),~t?(e=o[t],e?e.p(c,l):(e=o[t]=i[t](c),e.c()),M(e,1),e.m(r.parentNode,r)):e=null)},i(c){s||(M(e),s=!0)},o(c){F(e),s=!1},d(c){c&&S(r),~t&&o[t].d(c)}}}function ff(n){let t,e;return t=new Se({props:{name:Hh,class:n[5]}}),{c(){nt(t.$$.fragment)},l(r){rt(t.$$.fragment,r)},m(r,s){st(t,r,s),e=!0},p(r,s){const i={};s&32&&(i.class=r[5]),t.$set(i)},i(r){e||(M(t.$$.fragment,r),e=!0)},o(r){F(t.$$.fragment,r),e=!1},d(r){it(t,r)}}}function df(n){let t,e;return t=new Se({props:{name:n[3],class:"h-4 w-4 text-black"}}),{c(){nt(t.$$.fragment)},l(r){rt(t.$$.fragment,r)},m(r,s){st(t,r,s),e=!0},p(r,s){const i={};s&8&&(i.name=r[3]),t.$set(i)},i(r){e||(M(t.$$.fragment,r),e=!0)},o(r){F(t.$$.fragment,r),e=!1},d(r){it(t,r)}}}function mf(n){let t,e,r,s,i=!n[0]&&ma(n);return{c(){t=K("div"),i&&i.c(),this.h()},l(o){t=G(o,"DIV",{role:!0,tabindex:!0,class:!0});var a=ct(t);i&&i.l(a),a.forEach(S),this.h()},h(){k(t,"role","button"),k(t,"tabindex","0"),k(t,"class",n[4])},m(o,a){tt(o,t,a),i&&i.m(t,null),e=!0,r||(s=[fn(t,"click",n[6]),fn(t,"mouseenter",n[7]),fn(t,"mouseleave",n[8]),fn(t,"keypress",yt)],r=!0)},p(o,[a]){o[0]?i&&(Nn(),F(i,1,1,()=>{i=null}),On()):i?(i.p(o,a),a&1&&M(i,1)):(i=ma(o),i.c(),M(i,1),i.m(t,null)),(!e||a&16)&&k(t,"class",o[4])},i(o){e||(M(i),e=!0)},o(o){F(i),e=!1},d(o){o&&S(t),i&&i.d(),r=!1,Uc(s)}}}function gf(n,t,e){let r,s,i,o,a,c,l;ae(n,Jn,A=>e(17,l=A));const u=$c();let h=!1,{hoverCoords:f=null}=t,{disabled:d=!1}=t,{rowIndex:y}=t,{colIndex:T}=t,{selected:E=!1}=t,{selectCandidate:m=!1}=t,{hoverColor:_=""}=t;const D=()=>{e(14,h=!0),setTimeout(()=>{e(14,h=!1)},600)},z=async()=>{u("click",{rowIndex:y,colIndex:T})},V=()=>{u("enter",{rowIndex:y,colIndex:T})},O=()=>{u("leave",{rowIndex:y,colIndex:T})};return n.$$set=A=>{"hoverCoords"in A&&e(9,f=A.hoverCoords),"disabled"in A&&e(10,d=A.disabled),"rowIndex"in A&&e(11,y=A.rowIndex),"colIndex"in A&&e(12,T=A.colIndex),"selected"in A&&e(0,E=A.selected),"selectCandidate"in A&&e(1,m=A.selectCandidate),"hoverColor"in A&&e(13,_=A.hoverColor)},n.$$.update=()=>{n.$$.dirty&2&&e(5,r="h-3 w-3 opacity-50"+(m==="color1"?" text-color1":" text-color2")),n.$$.dirty&1&&e(15,s=E==="color1"?" bg-color1 sel-color1":E==="color2"?" bg-color2 sel-color2":" bg-gray-600"),n.$$.dirty&8193&&e(16,i=E?"":_==="color1"?" hover:bg-color1":_==="color2"?" hover:bg-color2":" hover:bg-gray-400"),n.$$.dirty&115713&&e(4,o="flex-1 aspect-square text-sm transition-colors duration-300 rounded-sm sm:rounded-md border border-gray-600 bubbly relative cursor-pointer outline-none flex flex-col justify-center items-center bg-opacity-80 hover:bg-opacity-100"+i+s+(E||d?" pointer-events-none":"")+(h?" animate":"")),n.$$.dirty&131072&&e(3,a=Hr(l)),n.$$.dirty&6656&&e(2,c=f&&y===f[0]&&T===f[1]),n.$$.dirty&1&&E&&jc().then(D)},[E,m,c,a,o,r,z,V,O,f,d,y,T,_,h,s,i,l]}class pf extends Vn{constructor(t){super(),kn(this,t,gf,mf,Dn,{hoverCoords:9,disabled:10,rowIndex:11,colIndex:12,selected:0,selectCandidate:1,hoverColor:13})}}function ga(n,t,e){const r=n.slice();return r[7]=t[e],r}function pa(n,t,e){const r=n.slice();return r[10]=t[e],r[12]=e,r}function _a(n){let t,e;return{c(){t=K("div"),e=De(n[12]),this.h()},l(r){t=G(r,"DIV",{class:!0,style:!0});var s=ct(t);e=Ve(s,n[12]),s.forEach(S),this.h()},h(){k(t,"class",yf),k(t,"style",n[2])},m(r,s){tt(r,t,s),b(t,e)},p(r,s){s&4&&k(t,"style",r[2])},d(r){r&&S(t)}}}function ya(n){let t,e=ke({length:10}),r=[];for(let s=0;s<e.length;s+=1)r[s]=_a(pa(n,e,s));return{c(){for(let s=0;s<r.length;s+=1)r[s].c();t=ge()},l(s){for(let i=0;i<r.length;i+=1)r[i].l(s);t=ge()},m(s,i){for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(s,i);tt(s,t,i)},p(s,i){if(i&4){e=ke({length:10});let o;for(o=0;o<e.length;o+=1){const a=pa(s,e,o);r[o]?r[o].p(a,i):(r[o]=_a(a),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=e.length}},d(s){s&&S(t),Ts(r,s)}}}function _f(n){let t,e,r=ke({length:2}),s=[];for(let i=0;i<r.length;i+=1)s[i]=ya(ga(n,r,i));return{c(){t=K("div"),e=K("div");for(let i=0;i<s.length;i+=1)s[i].c();this.h()},l(i){t=G(i,"DIV",{class:!0,style:!0});var o=ct(t);e=G(o,"DIV",{class:!0,style:!0});var a=ct(e);for(let c=0;c<s.length;c+=1)s[c].l(a);a.forEach(S),o.forEach(S),this.h()},h(){k(e,"class","transition-transform duration-500"),k(e,"style",n[0]),k(t,"class",n[1]),k(t,"style",n[2])},m(i,o){tt(i,t,o),b(t,e);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(e,null)},p(i,[o]){if(o&4){r=ke({length:2});let a;for(a=0;a<r.length;a+=1){const c=ga(i,r,a);s[a]?s[a].p(c,o):(s[a]=ya(c),s[a].c(),s[a].m(e,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=r.length}o&1&&k(e,"style",i[0]),o&2&&k(t,"class",i[1]),o&4&&k(t,"style",i[2])},i:yt,o:yt,d(i){i&&S(t),Ts(s,i)}}}const yf="flex flex-col justify-center items-center text-xl";function Ef(n,t,e){let r,s,i,{digit:o=0}=t,{height:a=30}=t,{width:c=15}=t;return n.$$set=l=>{e(6,t=Zr(Zr({},t),ts(l))),"digit"in l&&e(3,o=l.digit),"height"in l&&e(4,a=l.height),"width"in l&&e(5,c=l.width)},n.$$.update=()=>{n.$$.dirty&48&&e(2,r="width: "+c+"px;height: "+a+"px"),e(1,s="overflow-hidden"+(t.class?" "+t.class:"")),n.$$.dirty&24&&e(0,i="transform: translateY(-"+o*a+"px)")},t=ts(t),[i,s,r,o,a,c]}class an extends Vn{constructor(t){super(),kn(this,t,Ef,_f,Dn,{digit:3,height:4,width:5})}}function vf(n){let t,e,r,s,i,o,a,c,l="-",u,h,f,d,y,T,E;return e=new an({props:{digit:n[3][0],class:n[0]}}),s=new an({props:{digit:n[3][1],class:n[0]}}),o=new an({props:{digit:n[3][2],class:n[0]}}),h=new an({props:{digit:n[2][0],class:n[1]}}),d=new an({props:{digit:n[2][1],class:n[1]}}),T=new an({props:{digit:n[2][2],class:n[1]}}),{c(){t=K("div"),nt(e.$$.fragment),r=X(),nt(s.$$.fragment),i=X(),nt(o.$$.fragment),a=X(),c=K("div"),c.textContent=l,u=X(),nt(h.$$.fragment),f=X(),nt(d.$$.fragment),y=X(),nt(T.$$.fragment),this.h()},l(m){t=G(m,"DIV",{class:!0});var _=ct(t);rt(e.$$.fragment,_),r=Z(_),rt(s.$$.fragment,_),i=Z(_),rt(o.$$.fragment,_),a=Z(_),c=G(_,"DIV",{class:!0,"data-svelte-h":!0}),se(c)!=="svelte-6le5gp"&&(c.textContent=l),u=Z(_),rt(h.$$.fragment,_),f=Z(_),rt(d.$$.fragment,_),y=Z(_),rt(T.$$.fragment,_),_.forEach(S),this.h()},h(){k(c,"class","text-primary px-2"),k(t,"class","flex flex-row items-center justify-center")},m(m,_){tt(m,t,_),st(e,t,null),b(t,r),st(s,t,null),b(t,i),st(o,t,null),b(t,a),b(t,c),b(t,u),st(h,t,null),b(t,f),st(d,t,null),b(t,y),st(T,t,null),E=!0},p(m,[_]){const D={};_&8&&(D.digit=m[3][0]),_&1&&(D.class=m[0]),e.$set(D);const z={};_&8&&(z.digit=m[3][1]),_&1&&(z.class=m[0]),s.$set(z);const V={};_&8&&(V.digit=m[3][2]),_&1&&(V.class=m[0]),o.$set(V);const O={};_&4&&(O.digit=m[2][0]),_&2&&(O.class=m[1]),h.$set(O);const A={};_&4&&(A.digit=m[2][1]),_&2&&(A.class=m[1]),d.$set(A);const lt={};_&4&&(lt.digit=m[2][2]),_&2&&(lt.class=m[1]),T.$set(lt)},i(m){E||(M(e.$$.fragment,m),M(s.$$.fragment,m),M(o.$$.fragment,m),M(h.$$.fragment,m),M(d.$$.fragment,m),M(T.$$.fragment,m),E=!0)},o(m){F(e.$$.fragment,m),F(s.$$.fragment,m),F(o.$$.fragment,m),F(h.$$.fragment,m),F(d.$$.fragment,m),F(T.$$.fragment,m),E=!1},d(m){m&&S(t),it(e),it(s),it(o),it(h),it(d),it(T)}}}function Tf(n,t,e){let r,s,{score1:i=0}=t,{score2:o=0}=t,{score1Class:a=""}=t,{score2Class:c=""}=t;const l=u=>{if(u<=0)return[0,0,0];if(u>=1e3)return[9,9,9];const h=u%10;u=u/10|0;const f=u%10;return u=u/10|0,[u%10,f,h]};return n.$$set=u=>{"score1"in u&&e(4,i=u.score1),"score2"in u&&e(5,o=u.score2),"score1Class"in u&&e(0,a=u.score1Class),"score2Class"in u&&e(1,c=u.score2Class)},n.$$.update=()=>{n.$$.dirty&16&&e(3,r=l(i)),n.$$.dirty&32&&e(2,s=l(o))},[a,c,s,r,i,o]}class Qc extends Vn{constructor(t){super(),kn(this,t,Tf,vf,Dn,{score1:4,score2:5,score1Class:0,score2Class:1})}}function wf(n){let t,e,r="The current sequence is:",s,i,o,a="Pattern/color to play",c,l,u,h,f,d="The pattern to follow",y,T,E,m,_,D="The pattern after that",z,V,O,A,lt=`<p>* This screen changes with every player&#39;s turn;</p> <p>** Refer to <a href="${lf}" target="_blank" class="${sf}">game rules</a> for more details;</p>`,mt;return l=new Se({props:{name:n[6],class:n[1]}}),T=new Se({props:{name:n[5],class:n[8]}}),V=new Se({props:{name:n[4],class:n[8]}}),{c(){t=K("div"),e=K("p"),e.textContent=r,s=X(),i=K("div"),o=K("p"),o.textContent=a,c=X(),nt(l.$$.fragment),u=X(),h=K("div"),f=K("p"),f.textContent=d,y=X(),nt(T.$$.fragment),E=X(),m=K("div"),_=K("p"),_.textContent=D,z=X(),nt(V.$$.fragment),O=X(),A=K("div"),A.innerHTML=lt,this.h()},l(H){t=G(H,"DIV",{class:!0});var $=ct(t);e=G($,"P",{class:!0,"data-svelte-h":!0}),se(e)!=="svelte-gy8v4h"&&(e.textContent=r),s=Z($),i=G($,"DIV",{class:!0});var gt=ct(i);o=G(gt,"P",{"data-svelte-h":!0}),se(o)!=="svelte-1otncfj"&&(o.textContent=a),c=Z(gt),rt(l.$$.fragment,gt),gt.forEach(S),u=Z($),h=G($,"DIV",{class:!0});var ut=ct(h);f=G(ut,"P",{class:!0,"data-svelte-h":!0}),se(f)!=="svelte-mtkpbo"&&(f.textContent=d),y=Z(ut),rt(T.$$.fragment,ut),ut.forEach(S),E=Z($),m=G($,"DIV",{class:!0});var vt=ct(m);_=G(vt,"P",{class:!0,"data-svelte-h":!0}),se(_)!=="svelte-148oewd"&&(_.textContent=D),z=Z(vt),rt(V.$$.fragment,vt),vt.forEach(S),O=Z($),A=G($,"DIV",{class:!0,"data-svelte-h":!0}),se(A)!=="svelte-1r8755u"&&(A.innerHTML=lt),$.forEach(S),this.h()},h(){k(e,"class","text-center text-faded"),k(i,"class","flex flex-col items-center justify-center gap-2"),k(f,"class","text-faded"),k(h,"class","flex flex-col items-center justify-center gap-2"),k(_,"class","text-faded"),k(m,"class","flex flex-col items-center justify-center gap-2"),k(A,"class","text-faded text-sm"),k(t,"class","flex flex-col gap-6")},m(H,$){tt(H,t,$),b(t,e),b(t,s),b(t,i),b(i,o),b(i,c),st(l,i,null),b(t,u),b(t,h),b(h,f),b(h,y),st(T,h,null),b(t,E),b(t,m),b(m,_),b(m,z),st(V,m,null),b(t,O),b(t,A),mt=!0},p(H,$){const gt={};$&64&&(gt.name=H[6]),$&2&&(gt.class=H[1]),l.$set(gt);const ut={};$&32&&(ut.name=H[5]),T.$set(ut);const vt={};$&16&&(vt.name=H[4]),V.$set(vt)},i(H){mt||(M(l.$$.fragment,H),M(T.$$.fragment,H),M(V.$$.fragment,H),mt=!0)},o(H){F(l.$$.fragment,H),F(T.$$.fragment,H),F(V.$$.fragment,H),mt=!1},d(H){H&&S(t),it(l),it(T),it(V)}}}function If(n){let t,e,r,s,i,o,a,c,l,u,h;return e=new Se({props:{name:n[6],class:n[2]}}),s=new Se({props:{name:n[5],class:n[7]}}),o=new Se({props:{name:n[4],class:n[7]}}),c=new Kn({props:{showing:n[0],hideOk:!0,$$slots:{default:[wf]},$$scope:{ctx:n}}}),c.$on("dismiss",n[10]),{c(){t=K("div"),nt(e.$$.fragment),r=X(),nt(s.$$.fragment),i=X(),nt(o.$$.fragment),a=X(),nt(c.$$.fragment),this.h()},l(f){t=G(f,"DIV",{role:!0,tabindex:!0,class:!0});var d=ct(t);rt(e.$$.fragment,d),r=Z(d),rt(s.$$.fragment,d),i=Z(d),rt(o.$$.fragment,d),d.forEach(S),a=Z(f),rt(c.$$.fragment,f),this.h()},h(){k(t,"role","button"),k(t,"tabindex","0"),k(t,"class",n[3])},m(f,d){tt(f,t,d),st(e,t,null),b(t,r),st(s,t,null),b(t,i),st(o,t,null),tt(f,a,d),st(c,f,d),l=!0,u||(h=[fn(t,"click",n[9]),fn(t,"keypress",yt)],u=!0)},p(f,[d]){const y={};d&64&&(y.name=f[6]),d&4&&(y.class=f[2]),e.$set(y);const T={};d&32&&(T.name=f[5]),s.$set(T);const E={};d&16&&(E.name=f[4]),o.$set(E),(!l||d&8)&&k(t,"class",f[3]);const m={};d&1&&(m.showing=f[0]),d&65650&&(m.$$scope={dirty:d,ctx:f}),c.$set(m)},i(f){l||(M(e.$$.fragment,f),M(s.$$.fragment,f),M(o.$$.fragment,f),M(c.$$.fragment,f),l=!0)},o(f){F(e.$$.fragment,f),F(s.$$.fragment,f),F(o.$$.fragment,f),F(c.$$.fragment,f),l=!1},d(f){f&&(S(t),S(a)),it(e),it(s),it(o),it(c,f),u=!1,Uc(h)}}}const Ea="h-4 w-4",va="h-8 w-8";function Af(n,t,e){let r,s,i,o,a,c,l,u,h;ae(n,je,_=>e(12,l=_)),ae(n,$e,_=>e(13,u=_)),ae(n,Jn,_=>e(14,h=_));const f=Ea+" text-faded",d=va+" text-faded";let{color:y}=t,T=!1;const E=()=>{e(0,T=!0)},m=()=>{e(0,T=!1)};return n.$$set=_=>{e(15,t=Zr(Zr({},t),ts(_))),"color"in _&&e(11,y=_.color)},n.$$.update=()=>{n.$$.dirty&16384&&e(6,r=Hr(h)),n.$$.dirty&8192&&e(5,s=Hr(u)),n.$$.dirty&4096&&e(4,i=Hr(l)),e(3,o="flex flex-row items-center justify-center gap-4"+(t.class?" "+t.class:"")),n.$$.dirty&2048&&e(2,a=Ea+" "+y),n.$$.dirty&2048&&e(1,c=va+" "+y)},t=ts(t),[T,c,a,o,i,s,r,f,d,E,m,y,l,u,h]}class Rf extends Vn{constructor(t){super(),kn(this,t,Af,If,Dn,{color:11})}}let Xn=null;const Ta=()=>{Xn||(Xn=(window.navigator.userAgent||window.navigator.vendor||window.opera||"").toLowerCase())},Wr={},Fr=(n,t)=>(Wr[n]===void 0&&(Wr[n]=t()),Wr[n]),Cf={ua:null,is:{get webMobile(){return Xn===null&&Ta(),Fr("webmob",()=>/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|kindle|silk|mobile/i.test(Xn||""))},get webDesktop(){return Xn===null&&Ta(),Fr("!webmob",()=>!Wr.wm)},get touchAllowed(){return Fr("touch",()=>"ontouchstart"in window)},get mouseAllowed(){return Fr("mouse",()=>matchMedia("(pointer:fine)").matches)}}},wa="color2",Sf=(n,t,e,r)=>{let s=es(e,n,t,wa);for(let i=0;i<r.length;i++){const[o,a]=r[i];e[o]&&e[o][a]===!1&&(s+=es(e,o,a,wa))}return s};class Pf{constructor(t){this.selections=t,this.thinking=!1}cancelActiveActions(){this.requestId=Date.now()}getBenefitSums(t){const e=[];for(let r=0;r<this.selections.length;r++){const s=this.selections[r];for(let i=0;i<s.length;i++)s[i]||e.push([r,i,Sf(r,i,this.selections,t(r,i))])}return e.sort(([,,r],[,,s])=>s-r),e}selectSingleBlock(){const t=this.getBenefitSums(()=>[]),e=Math.floor(Math.random()*t.length);return[t[e][0],t[e][1]]}selectInAxes(){const t=this.getBenefitSums((e,r)=>[[e-1,r],[e+1,r],[e,r-1],[e,r+1]]);return[t[0][0],t[0][1]]}selectInDiagonals(){const t=this.getBenefitSums((e,r)=>[[e+1,r+1],[e+1,r-1],[e-1,r-1],[e-1,r+1]]);return[t[0][0],t[0][1]]}selectInHorizontal(){const t=this.getBenefitSums((e,r)=>[[e,r+1],[e,r+2],[e,r-1],[e,r-2]]);return[t[0][0],t[0][1]]}selectInVertical(){const t=this.getBenefitSums((e,r)=>[[e+1,r],[e+2,r],[e-1,r],[e-2,r]]);return[t[0][0],t[0][1]]}selectInRisingDiagonal(){const t=this.getBenefitSums((e,r)=>[[e-1,r+1],[e-2,r+2],[e+1,r-1],[e+2,r-2]]);return[t[0][0],t[0][1]]}selectInFallingDiagonal(){const t=this.getBenefitSums((e,r)=>[[e+1,r+1],[e+2,r+2],[e-1,r-1],[e-2,r-2]]);return[t[0][0],t[0][1]]}selectBlock(t){const e=Date.now();return this.requestId=e,new Promise(r=>{setTimeout(()=>{if(this.requestId!==e){r(null);return}switch(t){case at.AXES:r(this.selectInAxes());break;case at.DIAGONAL:r(this.selectInDiagonals());break;case at.HORIZONTAL:r(this.selectInHorizontal());break;case at.VERTICAL:r(this.selectInVertical());break;case at.FALLING:r(this.selectInFallingDiagonal());break;case at.RISING:r(this.selectInRisingDiagonal());break;default:r(this.selectSingleBlock());break}},1500)})}}const Ri=(...n)=>{console.warn("WARN:",...n)},bf=(...n)=>{console.log("INFO:",...n)};var Ia={};/**
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
 */const Yc=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Df=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[e++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[e++],o=n[e++],a=n[e++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[e++],o=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Jc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(f=64)),r.push(e[u],e[h],e[f],e[d])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Yc(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Df(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=e[n.charAt(s++)],a=s<n.length?e[n.charAt(s)]:0;++s;const l=s<n.length?e[n.charAt(s)]:64;++s;const h=s<n.length?e[n.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new Vf;const f=i<<2|a>>4;if(r.push(f),l!==64){const d=a<<4&240|l>>2;if(r.push(d),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Vf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kf=function(n){const t=Yc(n);return Jc.encodeByteArray(t,!0)},ns=function(n){return kf(n).replace(/\./g,"")},Nf=function(n){try{return Jc.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Of(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Mf=()=>Of().__FIREBASE_DEFAULTS__,Lf=()=>{if(typeof process>"u"||typeof Ia>"u")return;const n=Ia.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ff=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Nf(n[1]);return t&&JSON.parse(t)},io=()=>{try{return Mf()||Lf()||Ff()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xf=n=>{var t,e;return(e=(t=io())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Bf=n=>{const t=xf(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Xc=()=>{var n;return(n=io())===null||n===void 0?void 0:n.config};/**
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
 */class Uf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function $f(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ns(JSON.stringify(e)),ns(JSON.stringify(o)),""].join(".")}/**
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
 */function rs(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jf(){var n;const t=(n=io())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qf(){return!jf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zc(){try{return typeof indexedDB=="object"}catch{return!1}}function zf(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(e){t(e)}})}/**
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
 */const Kf="FirebaseError";class Mn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Kf,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tl.prototype.create)}}class tl{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Gf(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Mn(s,a,r)}}function Gf(n,t){return n.replace(Hf,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Hf=/\{\$([^}]+)}/g;function ss(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const i=n[s],o=t[s];if(Aa(i)&&Aa(o)){if(!ss(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Aa(n){return n!==null&&typeof n=="object"}/**
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
 */function Ne(n){return n&&n._delegate?n._delegate:n}class ir{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const qe="[DEFAULT]";/**
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
 */class Wf{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Uf;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Yf(t))try{this.getOrInitializeService({instanceIdentifier:qe})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=qe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=qe){return this.instances.has(t)}getOptions(t=qe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Qf(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=qe){return this.component?this.component.multipleInstances?t:qe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qf(n){return n===qe?void 0:n}function Yf(n){return n.instantiationMode==="EAGER"}/**
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
 */class Jf{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Wf(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var et;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(et||(et={}));const Xf={debug:et.DEBUG,verbose:et.VERBOSE,info:et.INFO,warn:et.WARN,error:et.ERROR,silent:et.SILENT},Zf=et.INFO,td={[et.DEBUG]:"log",[et.VERBOSE]:"log",[et.INFO]:"info",[et.WARN]:"warn",[et.ERROR]:"error"},ed=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=td[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class el{constructor(t){this.name=t,this._logLevel=Zf,this._logHandler=ed,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in et))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Xf[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,et.DEBUG,...t),this._logHandler(this,et.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,et.VERBOSE,...t),this._logHandler(this,et.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,et.INFO,...t),this._logHandler(this,et.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,et.WARN,...t),this._logHandler(this,et.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,et.ERROR,...t),this._logHandler(this,et.ERROR,...t)}}const nd=(n,t)=>t.some(e=>n instanceof e);let Ra,Ca;function rd(){return Ra||(Ra=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sd(){return Ca||(Ca=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nl=new WeakMap,Ci=new WeakMap,rl=new WeakMap,oi=new WeakMap,oo=new WeakMap;function id(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{e(Pe(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&nl.set(e,n)}).catch(()=>{}),oo.set(t,n),t}function od(n){if(Ci.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{e(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Ci.set(n,t)}let Si={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Ci.get(n);if(t==="objectStoreNames")return n.objectStoreNames||rl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Pe(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function ad(n){Si=n(Si)}function cd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ai(this),t,...e);return rl.set(r,t.sort?t.sort():[t]),Pe(r)}:sd().includes(n)?function(...t){return n.apply(ai(this),t),Pe(nl.get(this))}:function(...t){return Pe(n.apply(ai(this),t))}}function ld(n){return typeof n=="function"?cd(n):(n instanceof IDBTransaction&&od(n),nd(n,rd())?new Proxy(n,Si):n)}function Pe(n){if(n instanceof IDBRequest)return id(n);if(oi.has(n))return oi.get(n);const t=ld(n);return t!==n&&(oi.set(n,t),oo.set(t,n)),t}const ai=n=>oo.get(n);function ud(n,t,{blocked:e,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,t),a=Pe(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Pe(o.result),c.oldVersion,c.newVersion,Pe(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const hd=["get","getKey","getAll","getAllKeys","count"],fd=["put","add","delete","clear"],ci=new Map;function Sa(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ci.get(t))return ci.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=fd.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||hd.includes(e)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[e](...a),s&&c.done]))[0]};return ci.set(t,i),i}ad(n=>({...n,get:(t,e,r)=>Sa(t,e)||n.get(t,e,r),has:(t,e)=>!!Sa(t,e)||n.has(t,e)}));/**
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
 */class dd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(md(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function md(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Pi="@firebase/app",Pa="0.10.1";/**
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
 */const Ye=new el("@firebase/app"),gd="@firebase/app-compat",pd="@firebase/analytics-compat",_d="@firebase/analytics",yd="@firebase/app-check-compat",Ed="@firebase/app-check",vd="@firebase/auth",Td="@firebase/auth-compat",wd="@firebase/database",Id="@firebase/database-compat",Ad="@firebase/functions",Rd="@firebase/functions-compat",Cd="@firebase/installations",Sd="@firebase/installations-compat",Pd="@firebase/messaging",bd="@firebase/messaging-compat",Dd="@firebase/performance",Vd="@firebase/performance-compat",kd="@firebase/remote-config",Nd="@firebase/remote-config-compat",Od="@firebase/storage",Md="@firebase/storage-compat",Ld="@firebase/firestore",Fd="@firebase/firestore-compat",xd="firebase",Bd="10.11.0";/**
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
 */const bi="[DEFAULT]",Ud={[Pi]:"fire-core",[gd]:"fire-core-compat",[_d]:"fire-analytics",[pd]:"fire-analytics-compat",[Ed]:"fire-app-check",[yd]:"fire-app-check-compat",[vd]:"fire-auth",[Td]:"fire-auth-compat",[wd]:"fire-rtdb",[Id]:"fire-rtdb-compat",[Ad]:"fire-fn",[Rd]:"fire-fn-compat",[Cd]:"fire-iid",[Sd]:"fire-iid-compat",[Pd]:"fire-fcm",[bd]:"fire-fcm-compat",[Dd]:"fire-perf",[Vd]:"fire-perf-compat",[kd]:"fire-rc",[Nd]:"fire-rc-compat",[Od]:"fire-gcs",[Md]:"fire-gcs-compat",[Ld]:"fire-fst",[Fd]:"fire-fst-compat","fire-js":"fire-js",[xd]:"fire-js-all"};/**
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
 */const is=new Map,$d=new Map,Di=new Map;function ba(n,t){try{n.container.addComponent(t)}catch(e){Ye.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function os(n){const t=n.name;if(Di.has(t))return Ye.debug(`There were multiple attempts to register component ${t}.`),!1;Di.set(t,n);for(const e of is.values())ba(e,n);for(const e of $d.values())ba(e,n);return!0}function jd(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const qd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},be=new tl("app","Firebase",qd);/**
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
 */class zd{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw be.create("app-deleted",{appName:this._name})}}/**
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
 */const Kd=Bd;function sl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:bi,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw be.create("bad-app-name",{appName:String(s)});if(e||(e=Xc()),!e)throw be.create("no-options");const i=is.get(s);if(i){if(ss(e,i.options)&&ss(r,i.config))return i;throw be.create("duplicate-app",{appName:s})}const o=new Jf(s);for(const c of Di.values())o.addComponent(c);const a=new zd(e,r,o);return is.set(s,a),a}function Gd(n=bi){const t=is.get(n);if(!t&&n===bi&&Xc())return sl();if(!t)throw be.create("no-app",{appName:n});return t}function gn(n,t,e){var r;let s=(r=Ud[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ye.warn(a.join(" "));return}os(new ir(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Hd="firebase-heartbeat-database",Wd=1,or="firebase-heartbeat-store";let li=null;function il(){return li||(li=ud(Hd,Wd,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(or)}catch(e){console.warn(e)}}}}).catch(n=>{throw be.create("idb-open",{originalErrorMessage:n.message})})),li}async function Qd(n){try{const e=(await il()).transaction(or),r=await e.objectStore(or).get(ol(n));return await e.done,r}catch(t){if(t instanceof Mn)Ye.warn(t.message);else{const e=be.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ye.warn(e.message)}}}async function Da(n,t){try{const r=(await il()).transaction(or,"readwrite");await r.objectStore(or).put(t,ol(n)),await r.done}catch(e){if(e instanceof Mn)Ye.warn(e.message);else{const r=be.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ye.warn(r.message)}}}function ol(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Yd=1024,Jd=30*24*60*60*1e3;class Xd{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new tm(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Va();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Jd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Va(),{heartbeatsToSend:r,unsentEntries:s}=Zd(this._heartbeatsCache.heartbeats),i=ns(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Va(){return new Date().toISOString().substring(0,10)}function Zd(n,t=Yd){const e=[];let r=n.slice();for(const s of n){const i=e.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ka(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),ka(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class tm{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zc()?zf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Qd(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Da(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Da(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ka(n){return ns(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function em(n){os(new ir("platform-logger",t=>new dd(t),"PRIVATE")),os(new ir("heartbeat",t=>new Xd(t),"PRIVATE")),gn(Pi,Pa,n),gn(Pi,Pa,"esm2017"),gn("fire-js","")}em("");var nm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},C,ao=ao||{},B=nm||self;function Is(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function Tr(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function rm(n){return Object.prototype.hasOwnProperty.call(n,ui)&&n[ui]||(n[ui]=++sm)}var ui="closure_uid_"+(1e9*Math.random()>>>0),sm=0;function im(n,t,e){return n.call.apply(n.bind,arguments)}function om(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),n.apply(t,s)}}return function(){return n.apply(t,arguments)}}function qt(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?qt=im:qt=om,qt.apply(null,arguments)}function xr(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function kt(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Fe(){this.s=this.s,this.o=this.o}var am=0;Fe.prototype.s=!1;Fe.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),am!=0)&&rm(this)};Fe.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const al=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function co(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function Na(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(Is(r)){const s=n.length||0,i=r.length||0;n.length=s+i;for(let o=0;o<i;o++)n[s+o]=r[o]}else n.push(r)}}function zt(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}zt.prototype.h=function(){this.defaultPrevented=!0};var cm=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const e=()=>{};B.addEventListener("test",e,t),B.removeEventListener("test",e,t)}catch{}return n}();function ar(n){return/^[\s\xa0]*$/.test(n)}function As(){var n=B.navigator;return n&&(n=n.userAgent)?n:""}function ce(n){return As().indexOf(n)!=-1}function lo(n){return lo[" "](n),n}lo[" "]=function(){};function lm(n,t){var e=eg;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var um=ce("Opera"),vn=ce("Trident")||ce("MSIE"),cl=ce("Edge"),Vi=cl||vn,ll=ce("Gecko")&&!(As().toLowerCase().indexOf("webkit")!=-1&&!ce("Edge"))&&!(ce("Trident")||ce("MSIE"))&&!ce("Edge"),hm=As().toLowerCase().indexOf("webkit")!=-1&&!ce("Edge");function ul(){var n=B.document;return n?n.documentMode:void 0}var ki;t:{var hi="",fi=function(){var n=As();if(ll)return/rv:([^\);]+)(\)|;)/.exec(n);if(cl)return/Edge\/([\d\.]+)/.exec(n);if(vn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(hm)return/WebKit\/(\S+)/.exec(n);if(um)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(fi&&(hi=fi?fi[1]:""),vn){var di=ul();if(di!=null&&di>parseFloat(hi)){ki=String(di);break t}}ki=hi}var Ni;if(B.document&&vn){var Oa=ul();Ni=Oa||parseInt(ki,10)||void 0}else Ni=void 0;var fm=Ni;function cr(n,t){if(zt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(ll){t:{try{lo(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:dm[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&cr.$.h.call(this)}}kt(cr,zt);var dm={2:"touch",3:"pen",4:"mouse"};cr.prototype.h=function(){cr.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var wr="closure_listenable_"+(1e6*Math.random()|0),mm=0;function gm(n,t,e,r,s){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=s,this.key=++mm,this.fa=this.ia=!1}function Rs(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function uo(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function pm(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function hl(n){const t={};for(const e in n)t[e]=n[e];return t}const Ma="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fl(n,t){let e,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(e in r)n[e]=r[e];for(let i=0;i<Ma.length;i++)e=Ma[i],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function Cs(n){this.src=n,this.g={},this.h=0}Cs.prototype.add=function(n,t,e,r,s){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=Mi(n,t,r,s);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new gm(t,this.src,i,!!r,s),t.ia=e,n.push(t)),t};function Oi(n,t){var e=t.type;if(e in n.g){var r=n.g[e],s=al(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Rs(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function Mi(n,t,e,r){for(var s=0;s<n.length;++s){var i=n[s];if(!i.fa&&i.listener==t&&i.capture==!!e&&i.la==r)return s}return-1}var ho="closure_lm_"+(1e6*Math.random()|0),mi={};function dl(n,t,e,r,s){if(r&&r.once)return gl(n,t,e,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)dl(n,t[i],e,r,s);return null}return e=go(e),n&&n[wr]?n.O(t,e,Tr(r)?!!r.capture:!!r,s):ml(n,t,e,!1,r,s)}function ml(n,t,e,r,s,i){if(!t)throw Error("Invalid event type");var o=Tr(s)?!!s.capture:!!s,a=mo(n);if(a||(n[ho]=a=new Cs(n)),e=a.add(t,e,r,o,i),e.proxy)return e;if(r=_m(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)cm||(s=o),s===void 0&&(s=!1),n.addEventListener(t.toString(),r,s);else if(n.attachEvent)n.attachEvent(_l(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function _m(){function n(e){return t.call(n.src,n.listener,e)}const t=ym;return n}function gl(n,t,e,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)gl(n,t[i],e,r,s);return null}return e=go(e),n&&n[wr]?n.P(t,e,Tr(r)?!!r.capture:!!r,s):ml(n,t,e,!0,r,s)}function pl(n,t,e,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)pl(n,t[i],e,r,s);else r=Tr(r)?!!r.capture:!!r,e=go(e),n&&n[wr]?(n=n.i,t=String(t).toString(),t in n.g&&(i=n.g[t],e=Mi(i,e,r,s),-1<e&&(Rs(i[e]),Array.prototype.splice.call(i,e,1),i.length==0&&(delete n.g[t],n.h--)))):n&&(n=mo(n))&&(t=n.g[t.toString()],n=-1,t&&(n=Mi(t,e,r,s)),(e=-1<n?t[n]:null)&&fo(e))}function fo(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[wr])Oi(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(_l(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=mo(t))?(Oi(e,n),e.h==0&&(e.src=null,t[ho]=null)):Rs(n)}}}function _l(n){return n in mi?mi[n]:mi[n]="on"+n}function ym(n,t){if(n.fa)n=!0;else{t=new cr(t,this);var e=n.listener,r=n.la||n.src;n.ia&&fo(n),n=e.call(r,t)}return n}function mo(n){return n=n[ho],n instanceof Cs?n:null}var gi="__closure_events_fn_"+(1e9*Math.random()>>>0);function go(n){return typeof n=="function"?n:(n[gi]||(n[gi]=function(t){return n.handleEvent(t)}),n[gi])}function Vt(){Fe.call(this),this.i=new Cs(this),this.S=this,this.J=null}kt(Vt,Fe);Vt.prototype[wr]=!0;Vt.prototype.removeEventListener=function(n,t,e,r){pl(this,n,t,e,r)};function xt(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new zt(t,n);else if(t instanceof zt)t.target=t.target||n;else{var s=t;t=new zt(r,n),fl(t,s)}if(s=!0,e)for(var i=e.length-1;0<=i;i--){var o=t.g=e[i];s=Br(o,r,!0,t)&&s}if(o=t.g=n,s=Br(o,r,!0,t)&&s,s=Br(o,r,!1,t)&&s,e)for(i=0;i<e.length;i++)o=t.g=e[i],s=Br(o,r,!1,t)&&s}Vt.prototype.N=function(){if(Vt.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)Rs(e[r]);delete n.g[t],n.h--}}this.J=null};Vt.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};Vt.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function Br(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==e){var a=o.listener,c=o.la||o.src;o.ia&&Oi(n.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var po=B.JSON.stringify;class Em{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function vm(){var n=_o;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class Tm{constructor(){this.h=this.g=null}add(t,e){const r=yl.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var yl=new Em(()=>new wm,n=>n.reset());class wm{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Im(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function Am(n){B.setTimeout(()=>{throw n},0)}let lr,ur=!1,_o=new Tm,El=()=>{const n=B.Promise.resolve(void 0);lr=()=>{n.then(Rm)}};var Rm=()=>{for(var n;n=vm();){try{n.h.call(n.g)}catch(e){Am(e)}var t=yl;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}ur=!1};function Ss(n,t){Vt.call(this),this.h=n||1,this.g=t||B,this.j=qt(this.qb,this),this.l=Date.now()}kt(Ss,Vt);C=Ss.prototype;C.ga=!1;C.T=null;C.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),xt(this,"tick"),this.ga&&(yo(this),this.start()))}};C.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function yo(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}C.N=function(){Ss.$.N.call(this),yo(this),delete this.g};function Eo(n,t,e){if(typeof n=="function")e&&(n=qt(n,e));else if(n&&typeof n.handleEvent=="function")n=qt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:B.setTimeout(n,t||0)}function vl(n){n.g=Eo(()=>{n.g=null,n.i&&(n.i=!1,vl(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class Cm extends Fe{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:vl(this)}N(){super.N(),this.g&&(B.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hr(n){Fe.call(this),this.h=n,this.g={}}kt(hr,Fe);var La=[];function Tl(n,t,e,r){Array.isArray(e)||(e&&(La[0]=e.toString()),e=La);for(var s=0;s<e.length;s++){var i=dl(t,e[s],r||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function wl(n){uo(n.g,function(t,e){this.g.hasOwnProperty(e)&&fo(t)},n),n.g={}}hr.prototype.N=function(){hr.$.N.call(this),wl(this)};hr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ps(){this.g=!0}Ps.prototype.Ea=function(){this.g=!1};function Sm(n,t,e,r,s,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+e+`
`+o})}function Pm(n,t,e,r,s,i,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+e+`
`+i+" "+o})}function dn(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+Dm(n,e)+(r?" "+r:"")})}function bm(n,t){n.info(function(){return"TIMEOUT: "+t})}Ps.prototype.info=function(){};function Dm(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return po(e)}catch{return t}}var tn={},Fa=null;function bs(){return Fa=Fa||new Vt}tn.Ta="serverreachability";function Il(n){zt.call(this,tn.Ta,n)}kt(Il,zt);function fr(n){const t=bs();xt(t,new Il(t))}tn.STAT_EVENT="statevent";function Al(n,t){zt.call(this,tn.STAT_EVENT,n),this.stat=t}kt(Al,zt);function Qt(n){const t=bs();xt(t,new Al(t,n))}tn.Ua="timingevent";function Rl(n,t){zt.call(this,tn.Ua,n),this.size=t}kt(Rl,zt);function Ir(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return B.setTimeout(function(){n()},t)}var Ds={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Cl={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function vo(){}vo.prototype.h=null;function xa(n){return n.h||(n.h=n.i())}function Sl(){}var Ar={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function To(){zt.call(this,"d")}kt(To,zt);function wo(){zt.call(this,"c")}kt(wo,zt);var Li;function Vs(){}kt(Vs,vo);Vs.prototype.g=function(){return new XMLHttpRequest};Vs.prototype.i=function(){return{}};Li=new Vs;function Rr(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new hr(this),this.P=Vm,n=Vi?125:void 0,this.V=new Ss(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Pl}function Pl(){this.i=null,this.g="",this.h=!1}var Vm=45e3,bl={},Fi={};C=Rr.prototype;C.setTimeout=function(n){this.P=n};function xi(n,t,e){n.L=1,n.A=Ns(we(t)),n.u=e,n.S=!0,Dl(n,null)}function Dl(n,t){n.G=Date.now(),Cr(n),n.B=we(n.A);var e=n.B,r=n.W;Array.isArray(r)||(r=[String(r)]),xl(e.i,"t",r),n.o=0,e=n.l.J,n.h=new Pl,n.g=iu(n.l,e?t:null,!n.u),0<n.O&&(n.M=new Cm(qt(n.Pa,n,n.g),n.O)),Tl(n.U,n.g,"readystatechange",n.nb),t=n.I?hl(n.I):{},n.u?(n.v||(n.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,t)):(n.v="GET",n.g.ha(n.B,n.v,null,t)),fr(),Sm(n.j,n.v,n.B,n.m,n.W,n.u)}C.nb=function(n){n=n.target;const t=this.M;t&&le(n)==3?t.l():this.Pa(n)};C.Pa=function(n){try{if(n==this.g)t:{const u=le(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Vi||this.g&&(this.h.h||this.g.ja()||ja(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?fr(3):fr(2)),ks(this);var e=this.g.da();this.ca=e;e:if(Vl(this)){var r=ja(this.g);n="";var s=r.length,i=le(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ke(this),Zn(this);var o="";break e}this.h.i=new B.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=n,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,Pm(this.j,this.v,this.B,this.m,this.W,u,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ar(a)){var l=a;break e}}l=null}if(e=l)dn(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bi(this,e);else{this.i=!1,this.s=3,Qt(12),Ke(this),Zn(this);break t}}this.S?(kl(this,u,o),Vi&&this.i&&u==3&&(Tl(this.U,this.V,"tick",this.mb),this.V.start())):(dn(this.j,this.m,o,null),Bi(this,o)),u==4&&Ke(this),this.i&&!this.J&&(u==4?eu(this.l,this):(this.i=!1,Cr(this)))}else Xm(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.s=3,Qt(12)):(this.s=0,Qt(13)),Ke(this),Zn(this)}}}catch{}finally{}};function Vl(n){return n.g?n.v=="GET"&&n.L!=2&&n.l.Ha:!1}function kl(n,t,e){let r=!0,s;for(;!n.J&&n.o<e.length;)if(s=km(n,e),s==Fi){t==4&&(n.s=4,Qt(14),r=!1),dn(n.j,n.m,null,"[Incomplete Response]");break}else if(s==bl){n.s=4,Qt(15),dn(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else dn(n.j,n.m,s,null),Bi(n,s);Vl(n)&&n.o!=0&&(n.h.g=n.h.g.slice(n.o),n.o=0),t!=4||e.length!=0||n.h.h||(n.s=1,Qt(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),Po(t),t.M=!0,Qt(11))):(dn(n.j,n.m,e,"[Invalid Chunked Response]"),Ke(n),Zn(n))}C.mb=function(){if(this.g){var n=le(this.g),t=this.g.ja();this.o<t.length&&(ks(this),kl(this,n,t),this.i&&n!=4&&Cr(this))}};function km(n,t){var e=n.o,r=t.indexOf(`
`,e);return r==-1?Fi:(e=Number(t.substring(e,r)),isNaN(e)?bl:(r+=1,r+e>t.length?Fi:(t=t.slice(r,r+e),n.o=r+e,t)))}C.cancel=function(){this.J=!0,Ke(this)};function Cr(n){n.Y=Date.now()+n.P,Nl(n,n.P)}function Nl(n,t){if(n.C!=null)throw Error("WatchDog timer not null");n.C=Ir(qt(n.lb,n),t)}function ks(n){n.C&&(B.clearTimeout(n.C),n.C=null)}C.lb=function(){this.C=null;const n=Date.now();0<=n-this.Y?(bm(this.j,this.B),this.L!=2&&(fr(),Qt(17)),Ke(this),this.s=2,Zn(this)):Nl(this,this.Y-n)};function Zn(n){n.l.H==0||n.J||eu(n.l,n)}function Ke(n){ks(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,yo(n.V),wl(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function Bi(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||Ui(e.i,n))){if(!n.K&&Ui(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)ls(e),Fs(e);else break t;So(e),Qt(18)}}else e.Fa=s[1],0<e.Fa-e.V&&37500>s[2]&&e.G&&e.A==0&&!e.v&&(e.v=Ir(qt(e.ib,e),6e3));if(1>=$l(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else Ge(e,11)}else if((n.K||e.g==n)&&ls(e),!ar(t))for(s=e.Ja.g.parse(t),t=0;t<s.length;t++){let l=s[t];if(e.V=l[0],l=l[1],e.H==2)if(l[0]=="c"){e.K=l[1],e.pa=l[2];const u=l[3];u!=null&&(e.ra=u,e.l.info("VER="+e.ra));const h=l[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const d=n.g;if(d){const y=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Io(i,i.h),i.h=null))}if(r.F){const T=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,_t(r.I,r.F,T))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=su(r,r.J?r.pa:null,r.Y),o.K){jl(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(ks(a),Cr(a)),r.g=o}else Zl(r);0<e.j.length&&xs(e)}else l[0]!="stop"&&l[0]!="close"||Ge(e,7);else e.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ge(e,7):Co(e):l[0]!="noop"&&e.h&&e.h.Aa(l),e.A=0)}}fr(4)}catch{}}function Nm(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Is(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function Om(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Is(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function Ol(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(Is(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=Om(n),r=Nm(n),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],e&&e[i],n)}var Ml=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mm(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),s=null;if(0<=r){var i=n[e].substring(0,r);s=n[e].substring(r+1)}else i=n[e];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Qe(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Qe){this.h=n.h,as(this,n.j),this.s=n.s,this.g=n.g,cs(this,n.m),this.l=n.l;var t=n.i,e=new dr;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),Ba(this,e),this.o=n.o}else n&&(t=String(n).match(Ml))?(this.h=!1,as(this,t[1]||"",!0),this.s=Gn(t[2]||""),this.g=Gn(t[3]||"",!0),cs(this,t[4]),this.l=Gn(t[5]||"",!0),Ba(this,t[6]||"",!0),this.o=Gn(t[7]||"")):(this.h=!1,this.i=new dr(null,this.h))}Qe.prototype.toString=function(){var n=[],t=this.j;t&&n.push(Hn(t,Ua,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(Hn(t,Ua,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(Hn(e,e.charAt(0)=="/"?xm:Fm,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",Hn(e,Um)),n.join("")};function we(n){return new Qe(n)}function as(n,t,e){n.j=e?Gn(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function cs(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function Ba(n,t,e){t instanceof dr?(n.i=t,$m(n.i,n.h)):(e||(t=Hn(t,Bm)),n.i=new dr(t,n.h))}function _t(n,t,e){n.i.set(t,e)}function Ns(n){return _t(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Gn(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Hn(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,Lm),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Lm(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Ua=/[#\/\?@]/g,Fm=/[#\?:]/g,xm=/[#\?]/g,Bm=/[#\?@]/g,Um=/#/g;function dr(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function xe(n){n.g||(n.g=new Map,n.h=0,n.i&&Mm(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}C=dr.prototype;C.add=function(n,t){xe(this),this.i=null,n=Ln(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function Ll(n,t){xe(n),t=Ln(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function Fl(n,t){return xe(n),t=Ln(n,t),n.g.has(t)}C.forEach=function(n,t){xe(this),this.g.forEach(function(e,r){e.forEach(function(s){n.call(t,s,r,this)},this)},this)};C.ta=function(){xe(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const s=n[r];for(let i=0;i<s.length;i++)e.push(t[r])}return e};C.Z=function(n){xe(this);let t=[];if(typeof n=="string")Fl(this,n)&&(t=t.concat(this.g.get(Ln(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};C.set=function(n,t){return xe(this),this.i=null,n=Ln(this,n),Fl(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};C.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function xl(n,t,e){Ll(n,t),0<e.length&&(n.i=null,n.g.set(Ln(n,t),co(e)),n.h+=e.length)}C.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),n.push(s)}}return this.i=n.join("&")};function Ln(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function $m(n,t){t&&!n.j&&(xe(n),n.i=null,n.g.forEach(function(e,r){var s=r.toLowerCase();r!=s&&(Ll(this,r),xl(this,s,e))},n)),n.j=t}var jm=class{constructor(n,t){this.g=n,this.map=t}};function Bl(n){this.l=n||qm,B.PerformanceNavigationTiming?(n=B.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(B.g&&B.g.Ka&&B.g.Ka()&&B.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var qm=10;function Ul(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function $l(n){return n.h?1:n.g?n.g.size:0}function Ui(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function Io(n,t){n.g?n.g.add(t):n.h=t}function jl(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}Bl.prototype.cancel=function(){if(this.i=ql(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function ql(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return co(n.i)}var zm=class{stringify(n){return B.JSON.stringify(n,void 0)}parse(n){return B.JSON.parse(n,void 0)}};function Km(){this.g=new zm}function Gm(n,t,e){const r=e||"";try{Ol(n,function(s,i){let o=s;Tr(s)&&(o=po(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function Hm(n,t){const e=new Ps;if(B.Image){const r=new Image;r.onload=xr(Ur,e,r,"TestLoadImage: loaded",!0,t),r.onerror=xr(Ur,e,r,"TestLoadImage: error",!1,t),r.onabort=xr(Ur,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=xr(Ur,e,r,"TestLoadImage: timeout",!1,t),B.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function Ur(n,t,e,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function Os(n){this.l=n.ec||null,this.j=n.ob||!1}kt(Os,vo);Os.prototype.g=function(){return new Ms(this.l,this.j)};Os.prototype.i=function(n){return function(){return n}}({});function Ms(n,t){Vt.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=Ao,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}kt(Ms,Vt);var Ao=0;C=Ms.prototype;C.open=function(n,t){if(this.readyState!=Ao)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,mr(this)};C.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||B).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};C.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sr(this)),this.readyState=Ao};C.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,mr(this)),this.g&&(this.readyState=3,mr(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof B.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;zl(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function zl(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}C.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?Sr(this):mr(this),this.readyState==3&&zl(this)}};C.Za=function(n){this.g&&(this.response=this.responseText=n,Sr(this))};C.Ya=function(n){this.g&&(this.response=n,Sr(this))};C.ka=function(){this.g&&Sr(this)};function Sr(n){n.readyState=4,n.l=null,n.j=null,n.A=null,mr(n)}C.setRequestHeader=function(n,t){this.v.append(n,t)};C.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};C.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function mr(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Ms.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Wm=B.JSON.parse;function wt(n){Vt.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Kl,this.L=this.M=!1}kt(wt,Vt);var Kl="",Qm=/^https?$/i,Ym=["POST","PUT"];C=wt.prototype;C.Oa=function(n){this.M=n};C.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Li.g(),this.C=this.u?xa(this.u):xa(Li),this.g.onreadystatechange=qt(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(i){$a(this,i);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)e.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())e.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(i=>i.toLowerCase()=="content-type"),s=B.FormData&&n instanceof B.FormData,!(0<=al(Ym,t))||r||s||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of e)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Wl(this),0<this.B&&((this.L=Jm(this.g))?(this.g.timeout=this.B,this.g.ontimeout=qt(this.ua,this)):this.A=Eo(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){$a(this,i)}};function Jm(n){return vn&&typeof n.timeout=="number"&&n.ontimeout!==void 0}C.ua=function(){typeof ao<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xt(this,"timeout"),this.abort(8))};function $a(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,Gl(n),Ls(n)}function Gl(n){n.F||(n.F=!0,xt(n,"complete"),xt(n,"error"))}C.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,xt(this,"complete"),xt(this,"abort"),Ls(this))};C.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ls(this,!0)),wt.$.N.call(this)};C.La=function(){this.s||(this.G||this.v||this.l?Hl(this):this.kb())};C.kb=function(){Hl(this)};function Hl(n){if(n.h&&typeof ao<"u"&&(!n.C[1]||le(n)!=4||n.da()!=2)){if(n.v&&le(n)==4)Eo(n.La,0,n);else if(xt(n,"readystatechange"),le(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var s=String(n.I).match(Ml)[1]||null;!s&&B.self&&B.self.location&&(s=B.self.location.protocol.slice(0,-1)),r=!Qm.test(s?s.toLowerCase():"")}e=r}if(e)xt(n,"complete"),xt(n,"success");else{n.m=6;try{var i=2<le(n)?n.g.statusText:""}catch{i=""}n.j=i+" ["+n.da()+"]",Gl(n)}}finally{Ls(n)}}}}function Ls(n,t){if(n.g){Wl(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||xt(n,"ready");try{e.onreadystatechange=r}catch{}}}function Wl(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(B.clearTimeout(n.A),n.A=null)}C.isActive=function(){return!!this.g};function le(n){return n.g?n.g.readyState:0}C.da=function(){try{return 2<le(this)?this.g.status:-1}catch{return-1}};C.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};C.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),Wm(t)}};function ja(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Kl:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Xm(n){const t={};n=(n.g&&2<=le(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(ar(n[r]))continue;var e=Im(n[r]);const s=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const i=t[s]||[];t[s]=i,i.push(e)}pm(t,function(r){return r.join(", ")})}C.Ia=function(){return this.m};C.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ql(n){let t="";return uo(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function Ro(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=Ql(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):_t(n,t,e))}function jn(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function Yl(n){this.Ga=0,this.j=[],this.l=new Ps,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=jn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=jn("baseRetryDelayMs",5e3,n),this.hb=jn("retryDelaySeedMs",1e4,n),this.eb=jn("forwardChannelMaxRetries",2,n),this.xa=jn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Bl(n&&n.concurrentRequestLimit),this.Ja=new Km,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}C=Yl.prototype;C.ra=8;C.H=1;function Co(n){if(Jl(n),n.H==3){var t=n.W++,e=we(n.I);if(_t(e,"SID",n.K),_t(e,"RID",t),_t(e,"TYPE","terminate"),Pr(n,e),t=new Rr(n,n.l,t),t.L=2,t.A=Ns(we(e)),e=!1,B.navigator&&B.navigator.sendBeacon)try{e=B.navigator.sendBeacon(t.A.toString(),"")}catch{}!e&&B.Image&&(new Image().src=t.A,e=!0),e||(t.g=iu(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Cr(t)}ru(n)}function Fs(n){n.g&&(Po(n),n.g.cancel(),n.g=null)}function Jl(n){Fs(n),n.u&&(B.clearTimeout(n.u),n.u=null),ls(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&B.clearTimeout(n.m),n.m=null)}function xs(n){if(!Ul(n.i)&&!n.m){n.m=!0;var t=n.Na;lr||El(),ur||(lr(),ur=!0),_o.add(t,n),n.C=0}}function Zm(n,t){return $l(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Ir(qt(n.Na,n,t),nu(n,n.C)),n.C++,!0)}C.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const s=new Rr(this,this.l,n);let i=this.s;if(this.U&&(i?(i=hl(i),fl(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=Xl(this,s,t),e=we(this.I),_t(e,"RID",n),_t(e,"CVER",22),this.F&&_t(e,"X-HTTP-Session-Id",this.F),Pr(this,e),i&&(this.O?t="headers="+encodeURIComponent(String(Ql(i)))+"&"+t:this.o&&Ro(e,this.o,i)),Io(this.i,s),this.bb&&_t(e,"TYPE","init"),this.P?(_t(e,"$req",t),_t(e,"SID","null"),s.aa=!0,xi(s,e,null)):xi(s,e,t),this.H=2}}else this.H==3&&(n?qa(this,n):this.j.length==0||Ul(this.i)||qa(this))};function qa(n,t){var e;t?e=t.m:e=n.W++;const r=we(n.I);_t(r,"SID",n.K),_t(r,"RID",e),_t(r,"AID",n.V),Pr(n,r),n.o&&n.s&&Ro(r,n.o,n.s),e=new Rr(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=Xl(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Io(n.i,e),xi(e,r,t)}function Pr(n,t){n.na&&uo(n.na,function(e,r){_t(t,r,e)}),n.h&&Ol({},function(e,r){_t(t,r,e)})}function Xl(n,t,e){e=Math.min(n.j.length,e);var r=n.h?qt(n.h.Va,n.h,n):null;t:{var s=n.j;let i=-1;for(;;){const o=["count="+e];i==-1?0<e?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<e;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{Gm(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function Zl(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;lr||El(),ur||(lr(),ur=!0),_o.add(t,n),n.A=0}}function So(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Ir(qt(n.Ma,n),nu(n,n.A)),n.A++,!0)}C.Ma=function(){if(this.u=null,tu(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Ir(qt(this.jb,this),n)}};C.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Qt(10),Fs(this),tu(this))};function Po(n){n.B!=null&&(B.clearTimeout(n.B),n.B=null)}function tu(n){n.g=new Rr(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=we(n.wa);_t(t,"RID","rpc"),_t(t,"SID",n.K),_t(t,"AID",n.V),_t(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&_t(t,"TO",n.qa),_t(t,"TYPE","xmlhttp"),Pr(n,t),n.o&&n.s&&Ro(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.A=Ns(we(t)),e.u=null,e.S=!0,Dl(e,n)}C.ib=function(){this.v!=null&&(this.v=null,Fs(this),So(this),Qt(19))};function ls(n){n.v!=null&&(B.clearTimeout(n.v),n.v=null)}function eu(n,t){var e=null;if(n.g==t){ls(n),Po(n),n.g=null;var r=2}else if(Ui(n.i,t))e=t.F,jl(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.u?t.u.length:0,t=Date.now()-t.G;var s=n.C;r=bs(),xt(r,new Rl(r,e)),xs(n)}else Zl(n);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&Zm(n,t)||r==2&&So(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),s){case 1:Ge(n,5);break;case 4:Ge(n,10);break;case 3:Ge(n,6);break;default:Ge(n,2)}}}function nu(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function Ge(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=qt(n.pb,n);e||(e=new Qe("//www.google.com/images/cleardot.gif"),B.location&&B.location.protocol=="http"||as(e,"https"),Ns(e)),Hm(e.toString(),r)}else Qt(2);n.H=0,n.h&&n.h.za(t),ru(n),Jl(n)}C.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Qt(2)):(this.l.info("Failed to ping google.com"),Qt(1))};function ru(n){if(n.H=0,n.ma=[],n.h){const t=ql(n.i);(t.length!=0||n.j.length!=0)&&(Na(n.ma,t),Na(n.ma,n.j),n.i.i.length=0,co(n.j),n.j.length=0),n.h.ya()}}function su(n,t,e){var r=e instanceof Qe?we(e):new Qe(e);if(r.g!="")t&&(r.g=t+"."+r.g),cs(r,r.m);else{var s=B.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new Qe(null);r&&as(i,r),t&&(i.g=t),s&&cs(i,s),e&&(i.l=e),r=i}return e=n.F,t=n.Da,e&&t&&_t(r,e,t),_t(r,"VER",n.ra),Pr(n,r),r}function iu(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n.Ha&&!n.va?new wt(new Os({ob:e})):new wt(n.va),t.Oa(n.J),t}C.isActive=function(){return!!this.h&&this.h.isActive(this)};function ou(){}C=ou.prototype;C.Ba=function(){};C.Aa=function(){};C.za=function(){};C.ya=function(){};C.isActive=function(){return!0};C.Va=function(){};function us(){if(vn&&!(10<=Number(fm)))throw Error("Environmental error: no available transport.")}us.prototype.g=function(n,t){return new ee(n,t)};function ee(n,t){Vt.call(this),this.g=new Yl(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!ar(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ar(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new Fn(this)}kt(ee,Vt);ee.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;Qt(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=su(n,null,n.Y),xs(n)};ee.prototype.close=function(){Co(this.g)};ee.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=po(n),n=e);t.j.push(new jm(t.fb++,n)),t.H==3&&xs(t)};ee.prototype.N=function(){this.g.h=null,delete this.j,Co(this.g),delete this.g,ee.$.N.call(this)};function au(n){To.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}kt(au,To);function cu(){wo.call(this),this.status=1}kt(cu,wo);function Fn(n){this.g=n}kt(Fn,ou);Fn.prototype.Ba=function(){xt(this.g,"a")};Fn.prototype.Aa=function(n){xt(this.g,new au(n))};Fn.prototype.za=function(n){xt(this.g,new cu)};Fn.prototype.ya=function(){xt(this.g,"b")};function tg(){this.blockSize=-1}function ie(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}kt(ie,tg);ie.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function pi(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(s=0;16>s;++s)r[s]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],s=n.g[2];var i=n.g[3],o=t+(i^e&(s^i))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[3]+3250441966&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(i^e&(s^i))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[7]+4249261313&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(i^e&(s^i))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[11]+2304563134&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(i^e&(s^i))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[15]+1236535329&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(e^s))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[0]+3921069994&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(e^s))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[4]+3889429448&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(e^s))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[8]+1163531501&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(e^s))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[12]+2368359562&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(e^s^i)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[14]+4259657740&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^i)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[10]+3200236656&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^i)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[6]+76029189&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^i)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[2]+3299628645&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(s^(e|~i))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[5]+4237533241&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~i))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[1]+2240044497&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~i))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[13]+1309151649&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~i))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+s&4294967295,n.g[3]=n.g[3]+i&4294967295}ie.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=e;)pi(this,n,i),i+=this.blockSize;if(typeof n=="string"){for(;i<t;)if(r[s++]=n.charCodeAt(i++),s==this.blockSize){pi(this,r),s=0;break}}else for(;i<t;)if(r[s++]=n[i++],s==this.blockSize){pi(this,r),s=0;break}}this.h=s,this.i+=t};ie.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function ht(n,t){this.h=t;for(var e=[],r=!0,s=n.length-1;0<=s;s--){var i=n[s]|0;r&&i==t||(e[s]=i,r=!1)}this.g=e}var eg={};function bo(n){return-128<=n&&128>n?lm(n,function(t){return new ht([t|0],0>t?-1:0)}):new ht([n|0],0>n?-1:0)}function ue(n){if(isNaN(n)||!isFinite(n))return pn;if(0>n)return Lt(ue(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=$i;return new ht(t,0)}function lu(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return Lt(lu(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=ue(Math.pow(t,8)),r=pn,s=0;s<n.length;s+=8){var i=Math.min(8,n.length-s),o=parseInt(n.substring(s,s+i),t);8>i?(i=ue(Math.pow(t,i)),r=r.R(i).add(ue(o))):(r=r.R(e),r=r.add(ue(o)))}return r}var $i=4294967296,pn=bo(0),ji=bo(1),za=bo(16777216);C=ht.prototype;C.ea=function(){if(ne(this))return-Lt(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:$i+r)*t,t*=$i}return n};C.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(ve(this))return"0";if(ne(this))return"-"+Lt(this).toString(n);for(var t=ue(Math.pow(n,6)),e=this,r="";;){var s=fs(e,t).g;e=hs(e,s.R(t));var i=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=s,ve(e))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};C.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function ve(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function ne(n){return n.h==-1}C.X=function(n){return n=hs(this,n),ne(n)?-1:ve(n)?0:1};function Lt(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new ht(e,~n.h).add(ji)}C.abs=function(){return ne(this)?Lt(this):this};C.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(n.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(n.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,e[s]=o<<16|i}return new ht(e,e[e.length-1]&-2147483648?-1:0)};function hs(n,t){return n.add(Lt(t))}C.R=function(n){if(ve(this)||ve(n))return pn;if(ne(this))return ne(n)?Lt(this).R(Lt(n)):Lt(Lt(this).R(n));if(ne(n))return Lt(this.R(Lt(n)));if(0>this.X(za)&&0>n.X(za))return ue(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<n.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(s)>>>16,c=n.D(s)&65535;e[2*r+2*s]+=o*c,$r(e,2*r+2*s),e[2*r+2*s+1]+=i*c,$r(e,2*r+2*s+1),e[2*r+2*s+1]+=o*a,$r(e,2*r+2*s+1),e[2*r+2*s+2]+=i*a,$r(e,2*r+2*s+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new ht(e,0)};function $r(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function qn(n,t){this.g=n,this.h=t}function fs(n,t){if(ve(t))throw Error("division by zero");if(ve(n))return new qn(pn,pn);if(ne(n))return t=fs(Lt(n),t),new qn(Lt(t.g),Lt(t.h));if(ne(t))return t=fs(n,Lt(t)),new qn(Lt(t.g),t.h);if(30<n.g.length){if(ne(n)||ne(t))throw Error("slowDivide_ only works with positive integers.");for(var e=ji,r=t;0>=r.X(n);)e=Ka(e),r=Ka(r);var s=cn(e,1),i=cn(r,1);for(r=cn(r,2),e=cn(e,2);!ve(r);){var o=i.add(r);0>=o.X(n)&&(s=s.add(e),i=o),r=cn(r,1),e=cn(e,1)}return t=hs(n,s.R(t)),new qn(s,t)}for(s=pn;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=ue(e),o=i.R(t);ne(o)||0<o.X(n);)e-=r,i=ue(e),o=i.R(t);ve(i)&&(i=ji),s=s.add(i),n=hs(n,o)}return new qn(s,n)}C.gb=function(n){return fs(this,n).h};C.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new ht(e,this.h&n.h)};C.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new ht(e,this.h|n.h)};C.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new ht(e,this.h^n.h)};function Ka(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new ht(e,n.h)}function cn(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,s=[],i=0;i<r;i++)s[i]=0<t?n.D(i+e)>>>t|n.D(i+e+1)<<32-t:n.D(i+e);return new ht(s,n.h)}us.prototype.createWebChannel=us.prototype.g;ee.prototype.send=ee.prototype.u;ee.prototype.open=ee.prototype.m;ee.prototype.close=ee.prototype.close;Ds.NO_ERROR=0;Ds.TIMEOUT=8;Ds.HTTP_ERROR=6;Cl.COMPLETE="complete";Sl.EventType=Ar;Ar.OPEN="a";Ar.CLOSE="b";Ar.ERROR="c";Ar.MESSAGE="d";Vt.prototype.listen=Vt.prototype.O;wt.prototype.listenOnce=wt.prototype.P;wt.prototype.getLastError=wt.prototype.Sa;wt.prototype.getLastErrorCode=wt.prototype.Ia;wt.prototype.getStatus=wt.prototype.da;wt.prototype.getResponseJson=wt.prototype.Wa;wt.prototype.getResponseText=wt.prototype.ja;wt.prototype.send=wt.prototype.ha;wt.prototype.setWithCredentials=wt.prototype.Oa;ie.prototype.digest=ie.prototype.l;ie.prototype.reset=ie.prototype.reset;ie.prototype.update=ie.prototype.j;ht.prototype.add=ht.prototype.add;ht.prototype.multiply=ht.prototype.R;ht.prototype.modulo=ht.prototype.gb;ht.prototype.compare=ht.prototype.X;ht.prototype.toNumber=ht.prototype.ea;ht.prototype.toString=ht.prototype.toString;ht.prototype.getBits=ht.prototype.D;ht.fromNumber=ue;ht.fromString=lu;var ng=function(){return new us},rg=function(){return bs()},_i=Ds,sg=Cl,ig=tn,Ga={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},jr=Sl,og=wt,ag=ie,_n=ht;const Ha="@firebase/firestore";/**
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
 */class $t{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
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
 */let xn="10.11.0";/**
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
 */const Je=new el("@firebase/firestore");function zn(){return Je.logLevel}function R(n,...t){if(Je.logLevel<=et.DEBUG){const e=t.map(Do);Je.debug(`Firestore (${xn}): ${n}`,...e)}}function pe(n,...t){if(Je.logLevel<=et.ERROR){const e=t.map(Do);Je.error(`Firestore (${xn}): ${n}`,...e)}}function Tn(n,...t){if(Je.logLevel<=et.WARN){const e=t.map(Do);Je.warn(`Firestore (${xn}): ${n}`,...e)}}function Do(n){if(typeof n=="string")return n;try{/**
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
 */function x(n="Unexpected state"){const t=`FIRESTORE (${xn}) INTERNAL ASSERTION FAILED: `+n;throw pe(t),new Error(t)}function pt(n,t){n||x()}function q(n,t){return n}/**
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
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends Mn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Te{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class uu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class cg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e($t.UNAUTHENTICATED))}shutdown(){}}class lg{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class ug{constructor(t){this.t=t,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=c=>this.i!==r?(r=this.i,e(c)):Promise.resolve();let i=new Te;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Te,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Te)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pt(typeof r.accessToken=="string"),new uu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return pt(t===null||typeof t=="string"),new $t(t)}}class hg{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class fg{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new hg(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dg{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mg{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=i=>{i.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(pt(typeof e.token=="string"),this.R=e.token,new dg(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function gg(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class hu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=gg(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<e&&(r+=t.charAt(s[i]%t.length))}return r}}function ot(n,t){return n<t?-1:n>t?1:0}function wn(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */class bt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new P(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new P(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new P(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new P(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return bt.fromMillis(Date.now())}static fromDate(t){return bt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new bt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ot(this.nanoseconds,t.nanoseconds):ot(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class U{constructor(t){this.timestamp=t}static fromTimestamp(t){return new U(t)}static min(){return new U(new bt(0,0))}static max(){return new U(new bt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class gr{constructor(t,e,r){e===void 0?e=0:e>t.length&&x(),r===void 0?r=t.length-e:r>t.length-e&&x(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return gr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof gr?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const i=t.get(s),o=e.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Tt extends gr{construct(t,e,r){return new Tt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new P(v.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new Tt(e)}static emptyPath(){return new Tt([])}}const pg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ft extends gr{construct(t,e,r){return new Ft(t,e,r)}static isValidIdentifier(t){return pg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ft.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ft(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const i=()=>{if(r.length===0)throw new P(v.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new P(v.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new P(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new P(v.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ft(e)}static emptyPath(){return new Ft([])}}/**
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
 */class N{constructor(t){this.path=t}static fromPath(t){return new N(Tt.fromString(t))}static fromName(t){return new N(Tt.fromString(t).popFirst(5))}static empty(){return new N(Tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Tt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new N(new Tt(t.slice()))}}function _g(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=U.fromTimestamp(r===1e9?new bt(e+1,0):new bt(e,r));return new Oe(s,N.empty(),t)}function yg(n){return new Oe(n.readTime,n.key,-1)}class Oe{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Oe(U.min(),N.empty(),-1)}static max(){return new Oe(U.max(),N.empty(),-1)}}function Eg(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=N.comparator(n.documentKey,t.documentKey),e!==0?e:ot(n.largestBatchId,t.largestBatchId))}/**
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
 */const vg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Tg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function br(n){if(n.code!==v.FAILED_PRECONDITION||n.message!==vg)throw n;R("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new p((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof p?e:p.resolve(e)}catch(e){return p.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):p.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):p.reject(e)}static resolve(t){return new p((e,r)=>{e(t)})}static reject(t){return new p((e,r)=>{r(t)})}static waitFor(t){return new p((e,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&e()},c=>r(c))}),o=!0,i===s&&e()})}static or(t){let e=p.resolve(!1);for(const r of t)e=e.next(s=>s?p.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,i)=>{r.push(e.call(this,s,i))}),this.waitFor(r)}static mapArray(t,e){return new p((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;e(t[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(t,e){return new p((r,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):r()};i()})}}/**
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
 */class Vo{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new Te,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new tr(t,e.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=ko(r.target.error);this.V.reject(new tr(t,s))}}static open(t,e,r,s){try{return new Vo(e,t.transaction(s,r))}catch(i){throw new tr(e,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(R("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Ig(e)}}class He{constructor(t,e,r){this.name=t,this.version=e,this.p=r,He.S(rs())===12.2&&pe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return R("SimpleDb","Removing database:",t),ze(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Zc())return!1;if(He.C())return!0;const t=rs(),e=He.S(t),r=0<e&&e<10,s=He.v(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||i)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const e=t.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(R("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;e(o)},s.onblocked=()=>{r(new tr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new P(v.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new P(v.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new tr(t,o))},s.onupgradeneeded=i=>{R("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{R("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}B(t){this.L=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,r,s){const i=e==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=Vo.open(this.db,t,i?"readonly":"readwrite",r),c=s(a).next(l=>(a.g(),l)).catch(l=>(a.abort(l),p.reject(l))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(R("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class wg{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return ze(this.k.delete())}}class tr extends P{constructor(t,e){super(v.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Dr(n){return n.name==="IndexedDbTransactionError"}class Ig{constructor(t){this.store=t}put(t,e){let r;return e!==void 0?(R("SimpleDb","PUT",this.store.name,t,e),r=this.store.put(e,t)):(R("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),ze(r)}add(t){return R("SimpleDb","ADD",this.store.name,t,t),ze(this.store.add(t))}get(t){return ze(this.store.get(t)).next(e=>(e===void 0&&(e=null),R("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return R("SimpleDb","DELETE",this.store.name,t),ze(this.store.delete(t))}count(){return R("SimpleDb","COUNT",this.store.name),ze(this.store.count())}W(t,e){const r=this.options(t,e),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new p((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(t,e){const r=this.store.getAll(t,e===null?void 0:e);return new p((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(t,e){R("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,e);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(t,e){let r;e?r=t:(r={},e=t);const s=this.cursor(r);return this.G(s,e)}Z(t){const e=this.cursor({});return new p((r,s)=>{e.onerror=i=>{const o=ko(i.target.error);s(o)},e.onsuccess=i=>{const o=i.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,e){const r=[];return new p((s,i)=>{t.onerror=o=>{i(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new wg(a),l=e(a.primaryKey,a.value,c);if(l instanceof p){const u=l.catch(h=>(c.done(),p.reject(h)));r.push(u)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>p.waitFor(r))}options(t,e){let r;return t!==void 0&&(typeof t=="string"?r=t:e=t),{index:r,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,e):r.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function ze(n){return new p((t,e)=>{n.onsuccess=r=>{const s=r.target.result;t(s)},n.onerror=r=>{const s=ko(r.target.error);e(s)}})}let Wa=!1;function ko(n){const t=He.S(rs());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(e)>=0){const r=new P("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Wa||(Wa=!0,setTimeout(()=>{throw r},0)),r}}return n}/**
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
 */class No{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.se(r),this.oe=r=>e.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}No._e=-1;function Bs(n){return n==null}function ds(n){return n===0&&1/n==-1/0}function Ag(n){return typeof n=="number"&&Number.isInteger(n)&&!ds(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Qa(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function en(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function fu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Et{constructor(t,e){this.comparator=t,this.root=e||Mt.EMPTY}insert(t,e){return new Et(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Mt.BLACK,null,null))}remove(t){return new Et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Mt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new qr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new qr(this.root,t,this.comparator,!1)}getReverseIterator(){return new qr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new qr(this.root,t,this.comparator,!0)}}class qr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?r(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Mt{constructor(t,e,r,s,i){this.key=t,this.value=e,this.color=r??Mt.RED,this.left=s??Mt.EMPTY,this.right=i??Mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,i){return new Mt(t??this.key,e??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,r),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Mt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Mt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const t=this.left.check();if(t!==this.right.check())throw x();return t+(this.isRed()?0:1)}}Mt.EMPTY=null,Mt.RED=!0,Mt.BLACK=!1;Mt.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(t,e,r,s,i){return this}insert(t,e,r){return new Mt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Bt{constructor(t){this.comparator=t,this.data=new Et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ya(this.data.getIterator())}getIteratorFrom(t){return new Ya(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Bt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Bt(this.comparator);return e.data=t,e}}class Ya{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class te{constructor(t){this.fields=t,t.sort(Ft.comparator)}static empty(){return new te([])}unionWith(t){let e=new Bt(Ft.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new te(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return wn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class du extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Kt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new du("Invalid base64 string: "+i):i}}(t);return new Kt(e)}static fromUint8Array(t){const e=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new Kt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ot(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Kt.EMPTY_BYTE_STRING=new Kt("");const Rg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Me(n){if(pt(!!n),typeof n=="string"){let t=0;const e=Rg.exec(n);if(pt(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:St(n.seconds),nanos:St(n.nanos)}}function St(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Xe(n){return typeof n=="string"?Kt.fromBase64String(n):Kt.fromUint8Array(n)}/**
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
 */function Oo(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Mo(n){const t=n.mapValue.fields.__previous_value__;return Oo(t)?Mo(t):t}function pr(n){const t=Me(n.mapValue.fields.__local_write_time__.timestampValue);return new bt(t.seconds,t.nanos)}/**
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
 */class Cg{constructor(t,e,r,s,i,o,a,c,l){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class _r{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new _r("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof _r&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const zr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ze(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Oo(n)?4:Sg(n)?9007199254740991:10:x()}function _e(n,t){if(n===t)return!0;const e=Ze(n);if(e!==Ze(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return pr(n).isEqual(pr(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Me(s.timestampValue),a=Me(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,i){return Xe(s.bytesValue).isEqual(Xe(i.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,i){return St(s.geoPointValue.latitude)===St(i.geoPointValue.latitude)&&St(s.geoPointValue.longitude)===St(i.geoPointValue.longitude)}(n,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return St(s.integerValue)===St(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=St(s.doubleValue),a=St(i.doubleValue);return o===a?ds(o)===ds(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return wn(n.arrayValue.values||[],t.arrayValue.values||[],_e);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Qa(o)!==Qa(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!_e(o[c],a[c])))return!1;return!0}(n,t);default:return x()}}function yr(n,t){return(n.values||[]).find(e=>_e(e,t))!==void 0}function In(n,t){if(n===t)return 0;const e=Ze(n),r=Ze(t);if(e!==r)return ot(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return ot(n.booleanValue,t.booleanValue);case 2:return function(i,o){const a=St(i.integerValue||i.doubleValue),c=St(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,t);case 3:return Ja(n.timestampValue,t.timestampValue);case 4:return Ja(pr(n),pr(t));case 5:return ot(n.stringValue,t.stringValue);case 6:return function(i,o){const a=Xe(i),c=Xe(o);return a.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ot(a[l],c[l]);if(u!==0)return u}return ot(a.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(i,o){const a=ot(St(i.latitude),St(o.latitude));return a!==0?a:ot(St(i.longitude),St(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=In(a[l],c[l]);if(u)return u}return ot(a.length,c.length)}(n.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===zr.mapValue&&o===zr.mapValue)return 0;if(i===zr.mapValue)return 1;if(o===zr.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=ot(c[h],u[h]);if(f!==0)return f;const d=In(a[c[h]],l[u[h]]);if(d!==0)return d}return ot(c.length,u.length)}(n.mapValue,t.mapValue);default:throw x()}}function Ja(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return ot(n,t);const e=Me(n),r=Me(t),s=ot(e.seconds,r.seconds);return s!==0?s:ot(e.nanos,r.nanos)}function An(n){return qi(n)}function qi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Me(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Xe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return N.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const i of e.values||[])s?s=!1:r+=",",r+=qi(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${qi(e.fields[o])}`;return s+"}"}(n.mapValue):x()}function zi(n){return!!n&&"integerValue"in n}function Lo(n){return!!n&&"arrayValue"in n}function Xa(n){return!!n&&"nullValue"in n}function Za(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Qr(n){return!!n&&"mapValue"in n}function er(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return en(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=er(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=er(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Sg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Yt{constructor(t){this.value=t}static empty(){return new Yt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Qr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=er(e)}setAll(t){let e=Ft.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,r,s),r={},s=[],e=a.popLast()}o?r[a.lastSegment()]=er(o):s.push(a.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,r,s)}delete(t){const e=this.field(t.popLast());Qr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return _e(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Qr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){en(e,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new Yt(er(this.value))}}function mu(n){const t=[];return en(n.fields,(e,r)=>{const s=new Ft([e]);if(Qr(r)){const i=mu(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new te(t)}/**
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
 */class jt{constructor(t,e,r,s,i,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new jt(t,0,U.min(),U.min(),U.min(),Yt.empty(),0)}static newFoundDocument(t,e,r,s){return new jt(t,1,e,U.min(),r,s,0)}static newNoDocument(t,e){return new jt(t,2,e,U.min(),U.min(),Yt.empty(),0)}static newUnknownDocument(t,e){return new jt(t,3,e,U.min(),U.min(),Yt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Yt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof jt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ms{constructor(t,e){this.position=t,this.inclusive=e}}function tc(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const i=t[s],o=n.position[s];if(i.field.isKeyField()?r=N.comparator(N.fromName(o.referenceValue),e.key):r=In(o,e.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ec(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!_e(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class gs{constructor(t,e="asc"){this.field=t,this.dir=e}}function Pg(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class gu{}class Pt extends gu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Dg(t,e,r):e==="array-contains"?new Ng(t,r):e==="in"?new Og(t,r):e==="not-in"?new Mg(t,r):e==="array-contains-any"?new Lg(t,r):new Pt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Vg(t,r):new kg(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(In(e,this.value)):e!==null&&Ze(this.value)===Ze(e)&&this.matchesComparison(In(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ye extends gu{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new ye(t,e)}matches(t){return pu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function pu(n){return n.op==="and"}function _u(n){return bg(n)&&pu(n)}function bg(n){for(const t of n.filters)if(t instanceof ye)return!1;return!0}function Ki(n){if(n instanceof Pt)return n.field.canonicalString()+n.op.toString()+An(n.value);if(_u(n))return n.filters.map(t=>Ki(t)).join(",");{const t=n.filters.map(e=>Ki(e)).join(",");return`${n.op}(${t})`}}function yu(n,t){return n instanceof Pt?function(r,s){return s instanceof Pt&&r.op===s.op&&r.field.isEqual(s.field)&&_e(r.value,s.value)}(n,t):n instanceof ye?function(r,s){return s instanceof ye&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&yu(o,s.filters[a]),!0):!1}(n,t):void x()}function Eu(n){return n instanceof Pt?function(e){return`${e.field.canonicalString()} ${e.op} ${An(e.value)}`}(n):n instanceof ye?function(e){return e.op.toString()+" {"+e.getFilters().map(Eu).join(" ,")+"}"}(n):"Filter"}class Dg extends Pt{constructor(t,e,r){super(t,e,r),this.key=N.fromName(r.referenceValue)}matches(t){const e=N.comparator(t.key,this.key);return this.matchesComparison(e)}}class Vg extends Pt{constructor(t,e){super(t,"in",e),this.keys=vu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class kg extends Pt{constructor(t,e){super(t,"not-in",e),this.keys=vu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function vu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>N.fromName(r.referenceValue))}class Ng extends Pt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Lo(e)&&yr(e.arrayValue,this.value)}}class Og extends Pt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&yr(this.value.arrayValue,e)}}class Mg extends Pt{constructor(t,e){super(t,"not-in",e)}matches(t){if(yr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!yr(this.value.arrayValue,e)}}class Lg extends Pt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Lo(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>yr(this.value.arrayValue,r))}}/**
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
 */class Fg{constructor(t,e=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function nc(n,t=null,e=[],r=[],s=null,i=null,o=null){return new Fg(n,t,e,r,s,i,o)}function Fo(n){const t=q(n);if(t.ce===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ki(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Bs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>An(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>An(r)).join(",")),t.ce=e}return t.ce}function xo(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Pg(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!yu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ec(n.startAt,t.startAt)&&ec(n.endAt,t.endAt)}function Gi(n){return N.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Us{constructor(t,e=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function xg(n,t,e,r,s,i,o,a){return new Us(n,t,e,r,s,i,o,a)}function $s(n){return new Us(n)}function rc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Bg(n){return n.collectionGroup!==null}function nr(n){const t=q(n);if(t.le===null){t.le=[];const e=new Set;for(const i of t.explicitOrderBy)t.le.push(i),e.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Bt(Ft.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.le.push(new gs(i,r))}),e.has(Ft.keyField().canonicalString())||t.le.push(new gs(Ft.keyField(),r))}return t.le}function he(n){const t=q(n);return t.he||(t.he=Ug(t,nr(n))),t.he}function Ug(n,t){if(n.limitType==="F")return nc(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new gs(s.field,i)});const e=n.endAt?new ms(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ms(n.startAt.position,n.startAt.inclusive):null;return nc(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Hi(n,t,e){return new Us(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function js(n,t){return xo(he(n),he(t))&&n.limitType===t.limitType}function Tu(n){return`${Fo(he(n))}|lt:${n.limitType}`}function ln(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Eu(s)).join(", ")}]`),Bs(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>An(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>An(s)).join(",")),`Target(${r})`}(he(n))}; limitType=${n.limitType})`}function qs(n,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):N.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,t)&&function(r,s){for(const i of nr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=tc(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,nr(r),s)||r.endAt&&!function(o,a,c){const l=tc(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,nr(r),s))}(n,t)}function $g(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function wu(n){return(t,e)=>{let r=!1;for(const s of nr(n)){const i=jg(s,t,e);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function jg(n,t,e){const r=n.field.isKeyField()?N.comparator(t.key,e.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?In(c,l):x()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x()}}/**
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
 */class Bn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){en(this.inner,(e,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return fu(this.inner)}size(){return this.innerSize}}/**
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
 */const qg=new Et(N.comparator);function Ie(){return qg}const Iu=new Et(N.comparator);function Wn(...n){let t=Iu;for(const e of n)t=t.insert(e.key,e);return t}function Au(n){let t=Iu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function We(){return rr()}function Ru(){return rr()}function rr(){return new Bn(n=>n.toString(),(n,t)=>n.isEqual(t))}const zg=new Et(N.comparator),Kg=new Bt(N.comparator);function Q(...n){let t=Kg;for(const e of n)t=t.add(e);return t}const Gg=new Bt(ot);function Hg(){return Gg}/**
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
 */function Cu(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ds(t)?"-0":t}}function Su(n){return{integerValue:""+n}}function Wg(n,t){return Ag(t)?Su(t):Cu(n,t)}/**
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
 */class zs{constructor(){this._=void 0}}function Qg(n,t,e){return n instanceof ps?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Oo(i)&&(i=Mo(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(e,t):n instanceof Rn?bu(n,t):n instanceof Er?Du(n,t):function(s,i){const o=Pu(s,i),a=sc(o)+sc(s.Ie);return zi(o)&&zi(s.Ie)?Su(a):Cu(s.serializer,a)}(n,t)}function Yg(n,t,e){return n instanceof Rn?bu(n,t):n instanceof Er?Du(n,t):e}function Pu(n,t){return n instanceof _s?function(r){return zi(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class ps extends zs{}class Rn extends zs{constructor(t){super(),this.elements=t}}function bu(n,t){const e=Vu(t);for(const r of n.elements)e.some(s=>_e(s,r))||e.push(r);return{arrayValue:{values:e}}}class Er extends zs{constructor(t){super(),this.elements=t}}function Du(n,t){let e=Vu(t);for(const r of n.elements)e=e.filter(s=>!_e(s,r));return{arrayValue:{values:e}}}class _s extends zs{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function sc(n){return St(n.integerValue||n.doubleValue)}function Vu(n){return Lo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Jg{constructor(t,e){this.field=t,this.transform=e}}function Xg(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Rn&&s instanceof Rn||r instanceof Er&&s instanceof Er?wn(r.elements,s.elements,_e):r instanceof _s&&s instanceof _s?_e(r.Ie,s.Ie):r instanceof ps&&s instanceof ps}(n.transform,t.transform)}class Zg{constructor(t,e){this.version=t,this.transformResults=e}}class fe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new fe}static exists(t){return new fe(void 0,t)}static updateTime(t){return new fe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Yr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Ks{}function ku(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ou(n.key,fe.none()):new Vr(n.key,n.data,fe.none());{const e=n.data,r=Yt.empty();let s=new Bt(Ft.comparator);for(let i of t.fields)if(!s.has(i)){let o=e.field(i);o===null&&i.length>1&&(i=i.popLast(),o=e.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Be(n.key,r,new te(s.toArray()),fe.none())}}function tp(n,t,e){n instanceof Vr?function(s,i,o){const a=s.value.clone(),c=oc(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Be?function(s,i,o){if(!Yr(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=oc(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Nu(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,t,e):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function sr(n,t,e,r){return n instanceof Vr?function(i,o,a,c){if(!Yr(i.precondition,o))return a;const l=i.value.clone(),u=ac(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(n,t,e,r):n instanceof Be?function(i,o,a,c){if(!Yr(i.precondition,o))return a;const l=ac(i.fieldTransforms,c,o),u=o.data;return u.setAll(Nu(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(n,t,e,r):function(i,o,a){return Yr(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function ep(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),i=Pu(r.transform,s||null);i!=null&&(e===null&&(e=Yt.empty()),e.set(r.field,i))}return e||null}function ic(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&wn(r,s,(i,o)=>Xg(i,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Vr extends Ks{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Be extends Ks{constructor(t,e,r,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Nu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function oc(n,t,e){const r=new Map;pt(n.length===e.length);for(let s=0;s<e.length;s++){const i=n[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,Yg(o,a,e[s]))}return r}function ac(n,t,e){const r=new Map;for(const s of n){const i=s.transform,o=e.data.field(s.field);r.set(s.field,Qg(i,o,t))}return r}class Ou extends Ks{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class np extends Ks{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class rp{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&tp(i,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=sr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=sr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ru();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=e.has(s.key)?null:a;const c=ku(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Q())}isEqual(t){return this.batchId===t.batchId&&wn(this.mutations,t.mutations,(e,r)=>ic(e,r))&&wn(this.baseMutations,t.baseMutations,(e,r)=>ic(e,r))}}class Bo{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){pt(t.mutations.length===r.length);let s=function(){return zg}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Bo(t,e,r,s)}}/**
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
 */class sp{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class ip{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Ct,J;function op(n){switch(n){default:return x();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function Mu(n){if(n===void 0)return pe("GRPC error has no .code"),v.UNKNOWN;switch(n){case Ct.OK:return v.OK;case Ct.CANCELLED:return v.CANCELLED;case Ct.UNKNOWN:return v.UNKNOWN;case Ct.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case Ct.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case Ct.INTERNAL:return v.INTERNAL;case Ct.UNAVAILABLE:return v.UNAVAILABLE;case Ct.UNAUTHENTICATED:return v.UNAUTHENTICATED;case Ct.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case Ct.NOT_FOUND:return v.NOT_FOUND;case Ct.ALREADY_EXISTS:return v.ALREADY_EXISTS;case Ct.PERMISSION_DENIED:return v.PERMISSION_DENIED;case Ct.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case Ct.ABORTED:return v.ABORTED;case Ct.OUT_OF_RANGE:return v.OUT_OF_RANGE;case Ct.UNIMPLEMENTED:return v.UNIMPLEMENTED;case Ct.DATA_LOSS:return v.DATA_LOSS;default:return x()}}(J=Ct||(Ct={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ap(){return new TextEncoder}/**
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
 */const cp=new _n([4294967295,4294967295],0);function cc(n){const t=ap().encode(n),e=new ag;return e.update(t),new Uint8Array(e.digest())}function lc(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new _n([e,r],0),new _n([s,i],0)]}class Uo{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Qn(`Invalid padding: ${e}`);if(r<0)throw new Qn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Qn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Qn(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=_n.fromNumber(this.Te)}de(t,e,r){let s=t.add(e.multiply(_n.fromNumber(r)));return s.compare(cp)===1&&(s=new _n([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=cc(t),[r,s]=lc(e);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new Uo(i,s,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const e=cc(t),[r,s]=lc(e);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Qn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Gs{constructor(t,e,r,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,kr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Gs(U.min(),s,new Et(ot),Ie(),Q())}}class kr{constructor(t,e,r,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new kr(r,e,Q(),Q(),Q())}}/**
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
 */class Jr{constructor(t,e,r,s){this.Ve=t,this.removedTargetIds=e,this.key=r,this.me=s}}class Lu{constructor(t,e){this.targetId=t,this.fe=e}}class Fu{constructor(t,e,r=Kt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class uc{constructor(){this.ge=0,this.pe=fc(),this.ye=Kt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=Q(),e=Q(),r=Q();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:x()}}),new kr(this.ye,this.we,t,e,r)}Fe(){this.Se=!1,this.pe=fc()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,pt(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class lp{constructor(t){this.Be=t,this.ke=new Map,this.qe=Ie(),this.Qe=hc(),this.Ke=new Et(ot)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(e);break;case 3:this.je(e)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.Ce(t.resumeToken));break;default:x()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach((r,s)=>{this.je(s)&&e(s)})}Je(t){const e=t.targetId,r=t.fe.count,s=this.Ye(e);if(s){const i=s.target;if(Gi(i))if(r===0){const o=new N(i.path);this.We(e,o,jt.newNoDocument(o,U.min()))}else pt(r===1);else{const o=this.Ze(e);if(o!==r){const a=this.Xe(t),c=a?this.et(a,t,o):1;if(c!==0){this.He(e);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,l)}}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=e;let o,a;try{o=Xe(r).toUint8Array()}catch(c){if(c instanceof du)return Tn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Uo(o,s,i)}catch(c){return Tn(c instanceof Qn?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(t,e,r){return e.fe.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Be.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(e,i,null),s++)}),s}it(t){const e=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Gi(a.target)){const c=new N(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,jt.newNoDocument(c,t))}i.De&&(e.set(o,i.ve()),i.Fe())}});let r=Q();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new Gs(t,e,this.Ke,this.qe,r);return this.qe=Ie(),this.Qe=hc(),this.Ke=new Et(ot),s}Ue(t,e){if(!this.je(t))return;const r=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,r),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,e)?s.Me(e,1):s.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),r&&(this.qe=this.qe.insert(e,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Be.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new uc,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new Bt(ot),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||R("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Be._t(t)}He(t){this.ke.set(t,new uc),this.Be.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}st(t,e){return this.Be.getRemoteKeysForTarget(t).has(e)}}function hc(){return new Et(N.comparator)}function fc(){return new Et(N.comparator)}const up={asc:"ASCENDING",desc:"DESCENDING"},hp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fp={and:"AND",or:"OR"};class dp{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Wi(n,t){return n.useProto3Json||Bs(t)?t:{value:t}}function ys(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function xu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function mp(n,t){return ys(n,t.toTimestamp())}function de(n){return pt(!!n),U.fromTimestamp(function(e){const r=Me(e);return new bt(r.seconds,r.nanos)}(n))}function $o(n,t){return Qi(n,t).canonicalString()}function Qi(n,t){const e=function(s){return new Tt(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Bu(n){const t=Tt.fromString(n);return pt(zu(t)),t}function Yi(n,t){return $o(n.databaseId,t.path)}function yi(n,t){const e=Bu(t);if(e.get(1)!==n.databaseId.projectId)throw new P(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new P(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new N($u(e))}function Uu(n,t){return $o(n.databaseId,t)}function gp(n){const t=Bu(n);return t.length===4?Tt.emptyPath():$u(t)}function Ji(n){return new Tt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function $u(n){return pt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function dc(n,t,e){return{name:Yi(n,t),fields:e.value.mapValue.fields}}function pp(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:x()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(pt(u===void 0||typeof u=="string"),Kt.fromBase64String(u||"")):(pt(u===void 0||u instanceof Buffer||u instanceof Uint8Array),Kt.fromUint8Array(u||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const u=l.code===void 0?v.UNKNOWN:Mu(l.code);return new P(u,l.message||"")}(o);e=new Fu(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=yi(n,r.document.name),i=de(r.document.updateTime),o=r.document.createTime?de(r.document.createTime):U.min(),a=new Yt({mapValue:{fields:r.document.fields}}),c=jt.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];e=new Jr(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=yi(n,r.document),i=r.readTime?de(r.readTime):U.min(),o=jt.newNoDocument(s,i),a=r.removedTargetIds||[];e=new Jr([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=yi(n,r.document),i=r.removedTargetIds||[];e=new Jr([],i,s,null)}else{if(!("filter"in t))return x();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new ip(s,i),a=r.targetId;e=new Lu(a,o)}}return e}function _p(n,t){let e;if(t instanceof Vr)e={update:dc(n,t.key,t.value)};else if(t instanceof Ou)e={delete:Yi(n,t.key)};else if(t instanceof Be)e={update:dc(n,t.key,t.data),updateMask:Cp(t.fieldMask)};else{if(!(t instanceof np))return x();e={verify:Yi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ps)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Rn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Er)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof _s)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw x()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:mp(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:x()}(n,t.precondition)),e}function yp(n,t){return n&&n.length>0?(pt(t!==void 0),n.map(e=>function(s,i){let o=s.updateTime?de(s.updateTime):de(i);return o.isEqual(U.min())&&(o=de(i)),new Zg(o,s.transformResults||[])}(e,t))):[]}function Ep(n,t){return{documents:[Uu(n,t.path)]}}function vp(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Uu(n,s);const i=function(l){if(l.length!==0)return qu(ye.create(l,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:un(f.field),direction:Ip(f.dir)}}(u))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=Wi(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),{ut:e,parent:s}}function Tp(n){let t=gp(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){pt(r===1);const u=e.from[0];u.allDescendants?s=u.collectionId:t=t.child(u.collectionId)}let i=[];e.where&&(i=function(h){const f=ju(h);return f instanceof ye&&_u(f)?f.getFilters():[f]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(f=>function(y){return new gs(hn(y.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(f))}(e.orderBy));let a=null;e.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Bs(f)?null:f}(e.limit));let c=null;e.startAt&&(c=function(h){const f=!!h.before,d=h.values||[];return new ms(d,f)}(e.startAt));let l=null;return e.endAt&&(l=function(h){const f=!h.before,d=h.values||[];return new ms(d,f)}(e.endAt)),xg(t,s,o,i,a,"F",c,l)}function wp(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function ju(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=hn(e.unaryFilter.field);return Pt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=hn(e.unaryFilter.field);return Pt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hn(e.unaryFilter.field);return Pt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hn(e.unaryFilter.field);return Pt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(n):n.fieldFilter!==void 0?function(e){return Pt.create(hn(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ye.create(e.compositeFilter.filters.map(r=>ju(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x()}}(e.compositeFilter.op))}(n):x()}function Ip(n){return up[n]}function Ap(n){return hp[n]}function Rp(n){return fp[n]}function un(n){return{fieldPath:n.canonicalString()}}function hn(n){return Ft.fromServerFormat(n.fieldPath)}function qu(n){return n instanceof Pt?function(e){if(e.op==="=="){if(Za(e.value))return{unaryFilter:{field:un(e.field),op:"IS_NAN"}};if(Xa(e.value))return{unaryFilter:{field:un(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Za(e.value))return{unaryFilter:{field:un(e.field),op:"IS_NOT_NAN"}};if(Xa(e.value))return{unaryFilter:{field:un(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:un(e.field),op:Ap(e.op),value:e.value}}}(n):n instanceof ye?function(e){const r=e.getFilters().map(s=>qu(s));return r.length===1?r[0]:{compositeFilter:{op:Rp(e.op),filters:r}}}(n):x()}function Cp(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function zu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ce{constructor(t,e,r,s,i=U.min(),o=U.min(),a=Kt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new Ce(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ce(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ce(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ce(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Sp{constructor(t){this.ct=t}}function Pp(n){const t=Tp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Hi(t,t.limit,"L"):t}/**
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
 */class bp{constructor(){this._n=new Dp}addToCollectionParentIndex(t,e){return this._n.add(e),p.resolve()}getCollectionParents(t,e){return p.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return p.resolve()}deleteFieldIndex(t,e){return p.resolve()}deleteAllFieldIndexes(t){return p.resolve()}createTargetIndexes(t,e){return p.resolve()}getDocumentsMatchingTarget(t,e){return p.resolve(null)}getIndexType(t,e){return p.resolve(0)}getFieldIndexes(t,e){return p.resolve([])}getNextCollectionGroupToUpdate(t){return p.resolve(null)}getMinOffset(t,e){return p.resolve(Oe.min())}getMinOffsetFromCollectionGroup(t,e){return p.resolve(Oe.min())}updateCollectionGroup(t,e,r){return p.resolve()}updateIndexEntries(t,e){return p.resolve()}}class Dp{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new Bt(Tt.comparator),i=!s.has(r);return this.index[e]=s.add(r),i}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Bt(Tt.comparator)).toArray()}}/**
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
 */class Cn{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Cn(0)}static Ln(){return new Cn(-1)}}/**
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
 */class Vp{constructor(){this.changes=new Bn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,jt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?p.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class kp{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Np{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&sr(r.mutation,s,te.empty(),bt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,Q()).next(()=>r))}getLocalViewOfDocuments(t,e,r=Q()){const s=We();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(i=>{let o=Wn();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=We();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,Q()))}populateOverlays(t,e,r){const s=[];return r.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,s){let i=Ie();const o=rr(),a=function(){return rr()}();return e.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Be)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),sr(u.mutation,l,u.mutation.getFieldMask(),bt.now())):o.set(l.key,te.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),e.forEach((l,u)=>{var h;return a.set(l,new kp(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const r=rr();let s=new Et((o,a)=>o-a),i=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=e.get(c);if(l===null)return;let u=r.get(c)||te.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||Q()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Ru();u.forEach(f=>{if(!i.has(f)){const d=ku(e.get(f),r.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return p.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(o){return N.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Bg(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-i.size):p.resolve(We());let a=-1,c=i;return o.next(l=>p.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?p.resolve():this.remoteDocumentCache.getEntry(t,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(t,l,i)).next(()=>this.computeViews(t,c,l,Q())).next(u=>({batchId:a,changes:Au(u)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new N(e)).next(r=>{let s=Wn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const i=e.collectionGroup;let o=Wn();return this.indexManager.getCollectionParents(t,i).next(a=>p.forEach(a,c=>{const l=function(h,f){return new Us(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,r,s).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,jt.newInvalidDocument(u)))});let a=Wn();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&sr(u.mutation,l,te.empty(),bt.now()),qs(e,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class Op{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return p.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:de(s.createTime)}}(e)),p.resolve()}getNamedQuery(t,e){return p.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:Pp(s.bundledQuery),readTime:de(s.readTime)}}(e)),p.resolve()}}/**
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
 */class Mp{constructor(){this.overlays=new Et(N.comparator),this.hr=new Map}getOverlay(t,e){return p.resolve(this.overlays.get(e))}getOverlays(t,e){const r=We();return p.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,i)=>{this.ht(t,e,i)}),p.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),p.resolve()}getOverlaysForCollection(t,e,r){const s=We(),i=e.length+1,o=new N(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!e.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return p.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let i=new Et((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===e&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=We(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=We(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return p.resolve(a)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new sp(e,r));let i=this.hr.get(e);i===void 0&&(i=Q(),this.hr.set(e,i)),this.hr.set(e,i.add(r.key))}}/**
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
 */class jo{constructor(){this.Pr=new Bt(Dt.Ir),this.Tr=new Bt(Dt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new Dt(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new Dt(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new N(new Tt([])),r=new Dt(e,t),s=new Dt(e,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new N(new Tt([])),r=new Dt(e,t),s=new Dt(e,t+1);let i=Q();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const e=new Dt(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Dt{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return N.comparator(t.key,e.key)||ot(t.pr,e.pr)}static Er(t,e){return ot(t.pr,e.pr)||N.comparator(t.key,e.key)}}/**
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
 */class Lp{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new Bt(Dt.Ir)}checkEmpty(t){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rp(i,e,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new Dt(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,e){return p.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.br(r),i=s<0?0:s;return p.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Dt(e,0),s=new Dt(e,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),p.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Bt(ot);return e.forEach(s=>{const i=new Dt(s,0),o=new Dt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),p.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let i=r;N.isDocumentKey(i)||(i=i.child(""));const o=new Dt(new N(i),0);let a=new Bt(ot);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.pr)),!0)},o),p.resolve(this.Dr(a))}Dr(t){const e=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){pt(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return p.forEach(e.mutations,s=>{const i=new Dt(s.key,e.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new Dt(e,0),s=this.wr.firstAfterOrEqual(r);return p.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,p.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Fp{constructor(t){this.vr=t,this.docs=function(){return new Et(N.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return p.resolve(r?r.document.mutableCopy():jt.newInvalidDocument(e))}getEntries(t,e){let r=Ie();return e.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():jt.newInvalidDocument(s))}),p.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let i=Ie();const o=e.path,a=new N(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Eg(yg(u),r)<=0||(s.has(u.key)||qs(e,u))&&(i=i.insert(u.key,u.mutableCopy()))}return p.resolve(i)}getAllFromCollectionGroup(t,e,r,s){x()}Fr(t,e){return p.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new xp(this)}getSize(t){return p.resolve(this.size)}}class xp extends Vp{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),p.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
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
 */class Bp{constructor(t){this.persistence=t,this.Mr=new Bn(e=>Fo(e),xo),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Or=0,this.Nr=new jo,this.targetCount=0,this.Lr=Cn.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,s)=>e(s)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),p.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Cn(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,p.resolve()}updateTargetData(t,e){return this.qn(e),p.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,e,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),p.waitFor(i).next(()=>s)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return p.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),p.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),p.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),p.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return p.resolve(r)}containsKey(t,e){return p.resolve(this.Nr.containsKey(e))}}/**
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
 */class Up{constructor(t,e){this.Br={},this.overlays={},this.kr=new No(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Bp(this),this.indexManager=new bp,this.remoteDocumentCache=function(s){return new Fp(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Sp(e),this.$r=new Op(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Mp,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new Lp(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){R("MemoryPersistence","Starting transaction:",t);const s=new $p(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,e){return p.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class $p extends Tg{constructor(t){super(),this.currentSequenceNumber=t}}class qo{constructor(t){this.persistence=t,this.zr=new jo,this.jr=null}static Hr(t){return new qo(t)}get Jr(){if(this.jr)return this.jr;throw x()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),p.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),p.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),p.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Jr,r=>{const s=N.fromPath(r);return this.Yr(t,s).next(i=>{i||e.removeEntry(s,U.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return p.or([()=>p.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
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
 */class zo{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=s}static Ki(t,e){let r=Q(),s=Q();for(const i of e.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new zo(t,e.fromCache,r,s)}}/**
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
 */class jp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class qp{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return qf()?8:He.v(rs())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,s){const i={result:null};return this.ji(t,e).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(t,e,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new jp;return this.Ji(t,e,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(t,e,o,a.size)})}).next(()=>i.result)}Yi(t,e,r,s){return r.documentReadCount<this.Wi?(zn()<=et.DEBUG&&R("QueryEngine","SDK will not create cache indexes for query:",ln(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),p.resolve()):(zn()<=et.DEBUG&&R("QueryEngine","Query:",ln(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(zn()<=et.DEBUG&&R("QueryEngine","The SDK decides to create cache indexes for query:",ln(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,he(e))):p.resolve())}ji(t,e){if(rc(e))return p.resolve(null);let r=he(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Hi(e,null,"F"),r=he(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=Q(...i);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const l=this.Zi(e,a);return this.Xi(e,l,o,c.readTime)?this.ji(t,Hi(e,null,"F")):this.es(t,l,e,c)}))})))}Hi(t,e,r,s){return rc(e)||s.isEqual(U.min())?p.resolve(null):this.zi.getDocuments(t,r).next(i=>{const o=this.Zi(e,i);return this.Xi(e,o,r,s)?p.resolve(null):(zn()<=et.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ln(e)),this.es(t,o,e,_g(s,-1)).next(a=>a))})}Zi(t,e){let r=new Bt(wu(t));return e.forEach((s,i)=>{qs(t,i)&&(r=r.add(i))}),r}Xi(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,e,r){return zn()<=et.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",ln(e)),this.zi.getDocumentsMatchingQuery(t,e,Oe.min(),r)}es(t,e,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(i=>(e.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class zp{constructor(t,e,r,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new Et(ot),this.rs=new Bn(i=>Fo(i),xo),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Np(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function Kp(n,t,e,r){return new zp(n,t,e,r)}async function Ku(n,t){const e=q(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Q();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return e.localDocuments.getDocuments(r,c).next(l=>({us:l,removedBatchIds:o,addedBatchIds:a}))})})}function Gp(n,t){const e=q(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=e.os.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let d=p.resolve();return f.forEach(y=>{d=d.next(()=>u.getEntry(c,y)).next(T=>{const E=l.docVersions.get(y);pt(E!==null),T.version.compareTo(E)<0&&(h.applyToRemoteDocument(T,l),T.isValidDocument()&&(T.setReadTime(l.commitVersion),u.addEntry(T)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(e,r,t,i).next(()=>i.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Q();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Gu(n){const t=q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Hp(n,t){const e=q(n),r=t.snapshotVersion;let s=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=e.os.newChangeBuffer({trackRemovals:!0});s=e.ns;const a=[];t.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(e.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>e.Qr.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?d=d.withResumeToken(Kt.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),s=s.insert(h,d),function(T,E,m){return T.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(f,d,u)&&a.push(e.Qr.updateTargetData(i,d))});let c=Ie(),l=Q();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Wp(i,o,t.documentUpdates).next(u=>{c=u.cs,l=u.ls})),!r.isEqual(U.min())){const u=e.Qr.getLastRemoteSnapshotVersion(i).next(h=>e.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return p.waitFor(a).next(()=>o.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(e.ns=s,i))}function Wp(n,t,e){let r=Q(),s=Q();return e.forEach(i=>r=r.add(i)),t.getEntries(n,r).next(i=>{let o=Ie();return e.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(U.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{cs:o,ls:s}})}function Qp(n,t){const e=q(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Yp(n,t){const e=q(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Qr.getTargetData(r,t).next(i=>i?(s=i,p.resolve(s)):e.Qr.allocateTargetId(r).next(o=>(s=new Ce(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function Xi(n,t,e){const r=q(n),s=r.ns.get(t),i=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Dr(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function mc(n,t,e){const r=q(n);let s=U.min(),i=Q();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=q(c),f=h.rs.get(u);return f!==void 0?p.resolve(h.ns.get(f)):h.Qr.getTargetData(l,u)}(r,o,he(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,e?s:U.min(),e?i:Q())).next(a=>(Jp(r,$g(t),a),{documents:a,hs:i})))}function Jp(n,t,e){let r=n.ss.get(t)||U.min();e.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.ss.set(t,r)}class gc{constructor(){this.activeTargetIds=Hg()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Xp{constructor(){this.no=new gc,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new gc,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Zp{io(t){}shutdown(){}}/**
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
 */class pc{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Kr=null;function Ei(){return Kr===null?Kr=function(){return 268435456+Math.round(2147483648*Math.random())}():Kr++,"0x"+Kr.toString(16)}/**
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
 */const t_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class e_{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
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
 */const Ut="WebChannelConnection";class n_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+e.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(e,r,s,i,o){const a=Ei(),c=this.bo(e,r.toUriEncodedString());R("RestConnection",`Sending RPC '${e}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(l,i,o),this.Co(e,c,l,s).then(u=>(R("RestConnection",`Received RPC '${e}' ${a}: `,u),u),u=>{throw Tn("RestConnection",`RPC '${e}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}vo(e,r,s,i,o,a){return this.So(e,r,s,i,o)}Do(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>e[o]=i),s&&s.headers.forEach((i,o)=>e[o]=i)}bo(e,r){const s=t_[e];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,e,r,s){const i=Ei();return new Promise((o,a)=>{const c=new og;c.setWithCredentials(!0),c.listenOnce(sg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case _i.NO_ERROR:const u=c.getResponseJson();R(Ut,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(u)),o(u);break;case _i.TIMEOUT:R(Ut,`RPC '${t}' ${i} timed out`),a(new P(v.DEADLINE_EXCEEDED,"Request time out"));break;case _i.HTTP_ERROR:const h=c.getStatus();if(R(Ut,`RPC '${t}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const y=function(E){const m=E.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(m)>=0?m:v.UNKNOWN}(d.status);a(new P(y,d.message))}else a(new P(v.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new P(v.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{R(Ut,`RPC '${t}' ${i} completed.`)}});const l=JSON.stringify(s);R(Ut,`RPC '${t}' ${i} sending request:`,s),c.send(e,"POST",l,r,15)})}Fo(t,e,r){const s=Ei(),i=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=ng(),a=rg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,e,r),c.encodeInitMessageHeaders=!0;const u=i.join("");R(Ut,`Creating RPC '${t}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,d=!1;const y=new e_({lo:E=>{d?R(Ut,`Not sending because RPC '${t}' stream ${s} is closed:`,E):(f||(R(Ut,`Opening RPC '${t}' stream ${s} transport.`),h.open(),f=!0),R(Ut,`RPC '${t}' stream ${s} sending:`,E),h.send(E))},ho:()=>h.close()}),T=(E,m,_)=>{E.listen(m,D=>{try{_(D)}catch(z){setTimeout(()=>{throw z},0)}})};return T(h,jr.EventType.OPEN,()=>{d||R(Ut,`RPC '${t}' stream ${s} transport opened.`)}),T(h,jr.EventType.CLOSE,()=>{d||(d=!0,R(Ut,`RPC '${t}' stream ${s} transport closed`),y.Vo())}),T(h,jr.EventType.ERROR,E=>{d||(d=!0,Tn(Ut,`RPC '${t}' stream ${s} transport errored:`,E),y.Vo(new P(v.UNAVAILABLE,"The operation could not be completed")))}),T(h,jr.EventType.MESSAGE,E=>{var m;if(!d){const _=E.data[0];pt(!!_);const D=_,z=D.error||((m=D[0])===null||m===void 0?void 0:m.error);if(z){R(Ut,`RPC '${t}' stream ${s} received error:`,z);const V=z.status;let O=function(mt){const H=Ct[mt];if(H!==void 0)return Mu(H)}(V),A=z.message;O===void 0&&(O=v.INTERNAL,A="Unknown error status: "+V+" with message "+z.message),d=!0,y.Vo(new P(O,A)),h.close()}else R(Ut,`RPC '${t}' stream ${s} received:`,_),y.mo(_)}}),T(a,ig.STAT_EVENT,E=>{E.stat===Ga.PROXY?R(Ut,`RPC '${t}' stream ${s} detected buffering proxy`):E.stat===Ga.NOPROXY&&R(Ut,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.Ro()},0),y}}function vi(){return typeof document<"u"?document:null}/**
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
 */function Hs(n){return new dp(n,!0)}/**
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
 */class Hu{constructor(t,e,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=e,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const e=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,e-r);s>0&&R("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class Wu{constructor(t,e,r,s,i,o,a,c){this.oi=t,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Hu(t,e)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,e){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():e&&e.code===v.RESOURCE_EXHAUSTED?(pe(e.toString()),pe("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):e&&e.code===v.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(e)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),e=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===e&&this.o_(r,s)},r=>{t(()=>{const s=new P(v.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(t,e){const r=this.s_(this.Wo);this.stream=this.a_(t,e),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return R("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return e=>{this.oi.enqueueAndForget(()=>this.Wo===t?e():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class r_ extends Wu{constructor(t,e,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,o),this.serializer=i}a_(t,e){return this.connection.Fo("Listen",t,e)}onMessage(t){this.jo.reset();const e=pp(this.serializer,t),r=function(i){if(!("targetChange"in i))return U.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?U.min():o.readTime?de(o.readTime):U.min()}(t);return this.listener.u_(e,r)}c_(t){const e={};e.database=Ji(this.serializer),e.addTarget=function(i,o){let a;const c=o.target;if(a=Gi(c)?{documents:Ep(i,c)}:{query:vp(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=xu(i,o.resumeToken);const l=Wi(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(U.min())>0){a.readTime=ys(i,o.snapshotVersion.toTimestamp());const l=Wi(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const r=wp(this.serializer,t);r&&(e.labels=r),this.t_(e)}l_(t){const e={};e.database=Ji(this.serializer),e.removeTarget=t,this.t_(e)}}class s_ extends Wu{constructor(t,e,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,e){return this.connection.Fo("Write",t,e)}onMessage(t){if(pt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const e=yp(t.writeResults,t.commitTime),r=de(t.commitTime);return this.listener.T_(r,e)}return pt(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=Ji(this.serializer),this.t_(t)}I_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>_p(this.serializer,r))};this.t_(e)}}/**
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
 */class i_ extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new P(v.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,Qi(e,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(v.UNKNOWN,i.toString())})}vo(t,e,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,Qi(e,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new P(v.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class o_{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(pe(e),this.g_=!1):R("OnlineStateTracker",e)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class a_{constructor(t,e,r,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{nn(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=q(c);l.v_.add(4),await Nr(l),l.x_.set("Unknown"),l.v_.delete(4),await Ws(l)}(this))})}),this.x_=new o_(r,s)}}async function Ws(n){if(nn(n))for(const t of n.F_)await t(!0)}async function Nr(n){for(const t of n.F_)await t(!1)}function Qu(n,t){const e=q(n);e.C_.has(t.targetId)||(e.C_.set(t.targetId,t),Wo(e)?Ho(e):Un(e).Jo()&&Go(e,t))}function Ko(n,t){const e=q(n),r=Un(e);e.C_.delete(t),r.Jo()&&Yu(e,t),e.C_.size===0&&(r.Jo()?r.Xo():nn(e)&&e.x_.set("Unknown"))}function Go(n,t){if(n.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Un(n).c_(t)}function Yu(n,t){n.O_.Oe(t),Un(n).l_(t)}function Ho(n){n.O_=new lp({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>n.C_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),Un(n).start(),n.x_.p_()}function Wo(n){return nn(n)&&!Un(n).Ho()&&n.C_.size>0}function nn(n){return q(n).v_.size===0}function Ju(n){n.O_=void 0}async function c_(n){n.C_.forEach((t,e)=>{Go(n,t)})}async function l_(n,t){Ju(n),Wo(n)?(n.x_.S_(t),Ho(n)):n.x_.set("Unknown")}async function u_(n,t,e){if(n.x_.set("Online"),t instanceof Fu&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(n,t)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Es(n,r)}else if(t instanceof Jr?n.O_.$e(t):t instanceof Lu?n.O_.Je(t):n.O_.Ge(t),!e.isEqual(U.min()))try{const r=await Gu(n.localStore);e.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.C_.get(l);u&&i.C_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.C_.get(c);if(!u)return;i.C_.set(c,u.withResumeToken(Kt.EMPTY_BYTE_STRING,u.snapshotVersion)),Yu(i,c);const h=new Ce(u.target,c,l,u.sequenceNumber);Go(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await Es(n,r)}}async function Es(n,t,e){if(!Dr(t))throw t;n.v_.add(1),await Nr(n),n.x_.set("Offline"),e||(e=()=>Gu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await e(),n.v_.delete(1),await Ws(n)})}function Xu(n,t){return t().catch(e=>Es(n,e,t))}async function Qs(n){const t=q(n),e=Le(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;h_(t);)try{const s=await Qp(t.localStore,r);if(s===null){t.D_.length===0&&e.Xo();break}r=s.batchId,f_(t,s)}catch(s){await Es(t,s)}Zu(t)&&th(t)}function h_(n){return nn(n)&&n.D_.length<10}function f_(n,t){n.D_.push(t);const e=Le(n);e.Jo()&&e.P_&&e.I_(t.mutations)}function Zu(n){return nn(n)&&!Le(n).Ho()&&n.D_.length>0}function th(n){Le(n).start()}async function d_(n){Le(n).d_()}async function m_(n){const t=Le(n);for(const e of n.D_)t.I_(e.mutations)}async function g_(n,t,e){const r=n.D_.shift(),s=Bo.from(r,t,e);await Xu(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Qs(n)}async function p_(n,t){t&&Le(n).P_&&await async function(r,s){if(function(o){return op(o)&&o!==v.ABORTED}(s.code)){const i=r.D_.shift();Le(r).Zo(),await Xu(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Qs(r)}}(n,t),Zu(n)&&th(n)}async function _c(n,t){const e=q(n);e.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=nn(e);e.v_.add(3),await Nr(e),r&&e.x_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.v_.delete(3),await Ws(e)}async function __(n,t){const e=q(n);t?(e.v_.delete(2),await Ws(e)):t||(e.v_.add(2),await Nr(e),e.x_.set("Unknown"))}function Un(n){return n.N_||(n.N_=function(e,r,s){const i=q(e);return i.R_(),new r_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:c_.bind(null,n),To:l_.bind(null,n),u_:u_.bind(null,n)}),n.F_.push(async t=>{t?(n.N_.Zo(),Wo(n)?Ho(n):n.x_.set("Unknown")):(await n.N_.stop(),Ju(n))})),n.N_}function Le(n){return n.L_||(n.L_=function(e,r,s){const i=q(e);return i.R_(),new s_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:d_.bind(null,n),To:p_.bind(null,n),E_:m_.bind(null,n),T_:g_.bind(null,n)}),n.F_.push(async t=>{t?(n.L_.Zo(),await Qs(n)):(await n.L_.stop(),n.D_.length>0&&(R("RemoteStore",`Stopping write stream with ${n.D_.length} pending writes`),n.D_=[]))})),n.L_}/**
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
 */class Qo{constructor(t,e,r,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Te,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,i){const o=Date.now()+r,a=new Qo(t,e,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(v.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yo(n,t){if(pe("AsyncQueue",`${t}: ${n}`),Dr(n))return new P(v.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class yn{constructor(t){this.comparator=t?(e,r)=>t(e,r)||N.comparator(e.key,r.key):(e,r)=>N.comparator(e.key,r.key),this.keyedMap=Wn(),this.sortedSet=new Et(this.comparator)}static emptySet(t){return new yn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof yn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new yn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class yc{constructor(){this.B_=new Et(N.comparator)}track(t){const e=t.doc.key,r=this.B_.get(e);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(e,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(e):t.type===1&&r.type===2?this.B_=this.B_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):x():this.B_=this.B_.insert(e,t)}k_(){const t=[];return this.B_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Sn{constructor(t,e,r,s,i,o,a,c,l){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,e,r,s,i){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new Sn(t,e,yn.emptySet(e),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&js(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class y_{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(t=>t.U_())}}class E_{constructor(){this.queries=new Bn(t=>Tu(t),js),this.onlineState="Unknown",this.W_=new Set}}async function eh(n,t){const e=q(n);let r=3;const s=t.query;let i=e.queries.get(s);i?!i.K_()&&t.U_()&&(r=2):(i=new y_,r=t.U_()?0:1);try{switch(r){case 0:i.q_=await e.onListen(s,!0);break;case 1:i.q_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(o){const a=Yo(o,`Initialization of query '${ln(t.query)}' failed`);return void t.onError(a)}e.queries.set(s,i),i.Q_.push(t),t.G_(e.onlineState),i.q_&&t.z_(i.q_)&&Jo(e)}async function nh(n,t){const e=q(n),r=t.query;let s=3;const i=e.queries.get(r);if(i){const o=i.Q_.indexOf(t);o>=0&&(i.Q_.splice(o,1),i.Q_.length===0?s=t.U_()?0:1:!i.K_()&&t.U_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function v_(n,t){const e=q(n);let r=!1;for(const s of t){const i=s.query,o=e.queries.get(i);if(o){for(const a of o.Q_)a.z_(s)&&(r=!0);o.q_=s}}r&&Jo(e)}function T_(n,t,e){const r=q(n),s=r.queries.get(t);if(s)for(const i of s.Q_)i.onError(e);r.queries.delete(t)}function Jo(n){n.W_.forEach(t=>{t.next()})}var Zi,Ec;(Ec=Zi||(Zi={})).j_="default",Ec.Cache="cache";class rh{constructor(t,e,r){this.query=t,this.H_=e,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Sn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.J_?this.Z_(t)&&(this.H_.next(t),e=!0):this.X_(t,this.onlineState)&&(this.ea(t),e=!0),this.Y_=t,e}onError(t){this.H_.error(t)}G_(t){this.onlineState=t;let e=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,t)&&(this.ea(this.Y_),e=!0),e}X_(t,e){if(!t.fromCache||!this.U_())return!0;const r=e!=="Offline";return(!this.options.ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Z_(t){if(t.docChanges.length>0)return!0;const e=this.Y_&&this.Y_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ea(t){t=Sn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.J_=!0,this.H_.next(t)}U_(){return this.options.source!==Zi.Cache}}/**
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
 */class sh{constructor(t){this.key=t}}class ih{constructor(t){this.key=t}}class w_{constructor(t,e){this.query=t,this.ua=e,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=Q(),this.mutatedKeys=Q(),this.ha=wu(t),this.Pa=new yn(this.ha)}get Ia(){return this.ua}Ta(t,e){const r=e?e.Ea:new yc,s=e?e.Pa:this.Pa;let i=e?e.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((u,h)=>{const f=s.get(u),d=qs(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),T=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let E=!1;f&&d?f.data.isEqual(d.data)?y!==T&&(r.track({type:3,doc:d}),E=!0):this.da(f,d)||(r.track({type:2,doc:d}),E=!0,(c&&this.ha(d,c)>0||l&&this.ha(d,l)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),E=!0):f&&!d&&(r.track({type:1,doc:f}),E=!0,(c||l)&&(a=!0)),E&&(d?(o=o.add(d),i=T?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:i}}da(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const i=this.Pa;this.Pa=t.Pa,this.mutatedKeys=t.mutatedKeys;const o=t.Ea.k_();o.sort((u,h)=>function(d,y){const T=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return T(d)-T(y)}(u.type,h.type)||this.ha(u.doc,h.doc)),this.Aa(r),s=s!=null&&s;const a=e&&!s?this.Ra():[],c=this.la.size===0&&this.current&&!s?1:0,l=c!==this.ca;return this.ca=c,o.length!==0||l?{snapshot:new Sn(this.query,t.Pa,i,o,t.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new yc,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(t){return!this.ua.has(t)&&!!this.Pa.has(t)&&!this.Pa.get(t).hasLocalMutations}Aa(t){t&&(t.addedDocuments.forEach(e=>this.ua=this.ua.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.ua=this.ua.delete(e)),this.current=t.current)}Ra(){if(!this.current)return[];const t=this.la;this.la=Q(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const e=[];return t.forEach(r=>{this.la.has(r)||e.push(new ih(r))}),this.la.forEach(r=>{t.has(r)||e.push(new sh(r))}),e}fa(t){this.ua=t.hs,this.la=Q();const e=this.Ta(t.documents);return this.applyChanges(e,!0)}ga(){return Sn.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class I_{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class A_{constructor(t){this.key=t,this.pa=!1}}class R_{constructor(t,e,r,s,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new Bn(a=>Tu(a),js),this.Sa=new Map,this.ba=new Set,this.Da=new Et(N.comparator),this.Ca=new Map,this.va=new jo,this.Fa={},this.Ma=new Map,this.xa=Cn.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function C_(n,t,e=!0){const r=hh(n);let s;const i=r.wa.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ga()):s=await oh(r,t,e,!0),s}async function S_(n,t){const e=hh(n);await oh(e,t,!0,!1)}async function oh(n,t,e,r){const s=await Yp(n.localStore,he(t)),i=s.targetId,o=e?n.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await P_(n,t,i,o==="current",s.resumeToken)),n.isPrimaryClient&&e&&Qu(n.remoteStore,s),a}async function P_(n,t,e,r,s){n.Na=(h,f,d)=>async function(T,E,m,_){let D=E.view.Ta(m);D.Xi&&(D=await mc(T.localStore,E.query,!1).then(({documents:A})=>E.view.Ta(A,D)));const z=_&&_.targetChanges.get(E.targetId),V=_&&_.targetMismatches.get(E.targetId)!=null,O=E.view.applyChanges(D,T.isPrimaryClient,z,V);return Tc(T,E.targetId,O.Va),O.snapshot}(n,h,f,d);const i=await mc(n.localStore,t,!0),o=new w_(t,i.hs),a=o.Ta(i.documents),c=kr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),l=o.applyChanges(a,n.isPrimaryClient,c);Tc(n,e,l.Va);const u=new I_(t,e,o);return n.wa.set(t,u),n.Sa.has(e)?n.Sa.get(e).push(t):n.Sa.set(e,[t]),l.snapshot}async function b_(n,t,e){const r=q(n),s=r.wa.get(t),i=r.Sa.get(s.targetId);if(i.length>1)return r.Sa.set(s.targetId,i.filter(o=>!js(o,t))),void r.wa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Xi(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Ko(r.remoteStore,s.targetId),to(r,s.targetId)}).catch(br)):(to(r,s.targetId),await Xi(r.localStore,s.targetId,!0))}async function D_(n,t){const e=q(n),r=e.wa.get(t),s=e.Sa.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Ko(e.remoteStore,r.targetId))}async function V_(n,t,e){const r=x_(n);try{const s=await function(o,a){const c=q(o),l=bt.now(),u=a.reduce((d,y)=>d.add(y.key),Q());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",d=>{let y=Ie(),T=Q();return c.os.getEntries(d,u).next(E=>{y=E,y.forEach((m,_)=>{_.isValidDocument()||(T=T.add(m))})}).next(()=>c.localDocuments.getOverlayedDocuments(d,y)).next(E=>{h=E;const m=[];for(const _ of a){const D=ep(_,h.get(_.key).overlayedDocument);D!=null&&m.push(new Be(_.key,D,mu(D.value.mapValue),fe.exists(!0)))}return c.mutationQueue.addMutationBatch(d,l,m,a)}).next(E=>{f=E;const m=E.applyToLocalDocumentSet(h,T);return c.documentOverlayCache.saveOverlays(d,E.batchId,m)})}).then(()=>({batchId:f.batchId,changes:Au(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Fa[o.currentUser.toKey()];l||(l=new Et(ot)),l=l.insert(a,c),o.Fa[o.currentUser.toKey()]=l}(r,s.batchId,e),await Or(r,s.changes),await Qs(r.remoteStore)}catch(s){const i=Yo(s,"Failed to persist write");e.reject(i)}}async function ah(n,t){const e=q(n);try{const r=await Hp(e.localStore,t);t.targetChanges.forEach((s,i)=>{const o=e.Ca.get(i);o&&(pt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?pt(o.pa):s.removedDocuments.size>0&&(pt(o.pa),o.pa=!1))}),await Or(e,r,t)}catch(r){await br(r)}}function vc(n,t,e){const r=q(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.wa.forEach((i,o)=>{const a=o.view.G_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=q(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.Q_)f.G_(a)&&(l=!0)}),l&&Jo(c)}(r.eventManager,t),s.length&&r.ya.u_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function k_(n,t,e){const r=q(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Ca.get(t),i=s&&s.key;if(i){let o=new Et(N.comparator);o=o.insert(i,jt.newNoDocument(i,U.min()));const a=Q().add(i),c=new Gs(U.min(),new Map,new Et(ot),o,a);await ah(r,c),r.Da=r.Da.remove(i),r.Ca.delete(t),Xo(r)}else await Xi(r.localStore,t,!1).then(()=>to(r,t,e)).catch(br)}async function N_(n,t){const e=q(n),r=t.batch.batchId;try{const s=await Gp(e.localStore,t);lh(e,r,null),ch(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Or(e,s)}catch(s){await br(s)}}async function O_(n,t,e){const r=q(n);try{const s=await function(o,a){const c=q(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(pt(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,t);lh(r,t,e),ch(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Or(r,s)}catch(s){await br(s)}}function ch(n,t){(n.Ma.get(t)||[]).forEach(e=>{e.resolve()}),n.Ma.delete(t)}function lh(n,t,e){const r=q(n);let s=r.Fa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),r.Fa[r.currentUser.toKey()]=s}}function to(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Sa.get(t))n.wa.delete(r),e&&n.ya.La(r,e);n.Sa.delete(t),n.isPrimaryClient&&n.va.Vr(t).forEach(r=>{n.va.containsKey(r)||uh(n,r)})}function uh(n,t){n.ba.delete(t.path.canonicalString());const e=n.Da.get(t);e!==null&&(Ko(n.remoteStore,e),n.Da=n.Da.remove(t),n.Ca.delete(e),Xo(n))}function Tc(n,t,e){for(const r of e)r instanceof sh?(n.va.addReference(r.key,t),M_(n,r)):r instanceof ih?(R("SyncEngine","Document no longer in limbo: "+r.key),n.va.removeReference(r.key,t),n.va.containsKey(r.key)||uh(n,r.key)):x()}function M_(n,t){const e=t.key,r=e.path.canonicalString();n.Da.get(e)||n.ba.has(r)||(R("SyncEngine","New document in limbo: "+e),n.ba.add(r),Xo(n))}function Xo(n){for(;n.ba.size>0&&n.Da.size<n.maxConcurrentLimboResolutions;){const t=n.ba.values().next().value;n.ba.delete(t);const e=new N(Tt.fromString(t)),r=n.xa.next();n.Ca.set(r,new A_(e)),n.Da=n.Da.insert(e,r),Qu(n.remoteStore,new Ce(he($s(e.path)),r,"TargetPurposeLimboResolution",No._e))}}async function Or(n,t,e){const r=q(n),s=[],i=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,c)=>{o.push(r.Na(c,t,e).then(l=>{if((l||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=zo.Ki(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.ya.u_(s),await async function(c,l){const u=q(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>p.forEach(l,f=>p.forEach(f.qi,d=>u.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>p.forEach(f.Qi,d=>u.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!Dr(h))throw h;R("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const d=u.ns.get(f),y=d.snapshotVersion,T=d.withLastLimboFreeSnapshotVersion(y);u.ns=u.ns.insert(f,T)}}}(r.localStore,i))}async function L_(n,t){const e=q(n);if(!e.currentUser.isEqual(t)){R("SyncEngine","User change. New user:",t.toKey());const r=await Ku(e.localStore,t);e.currentUser=t,function(i,o){i.Ma.forEach(a=>{a.forEach(c=>{c.reject(new P(v.CANCELLED,o))})}),i.Ma.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Or(e,r.us)}}function F_(n,t){const e=q(n),r=e.Ca.get(t);if(r&&r.pa)return Q().add(r.key);{let s=Q();const i=e.Sa.get(t);if(!i)return s;for(const o of i){const a=e.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function hh(n){const t=q(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=ah.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=F_.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=k_.bind(null,t),t.ya.u_=v_.bind(null,t.eventManager),t.ya.La=T_.bind(null,t.eventManager),t}function x_(n){const t=q(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=N_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=O_.bind(null,t),t}class wc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Hs(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Kp(this.persistence,new qp,t.initialUser,this.serializer)}createPersistence(t){return new Up(qo.Hr,this.serializer)}createSharedClientState(t){return new Xp}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class B_{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=L_.bind(null,this.syncEngine),await __(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new E_}()}createDatastore(t){const e=Hs(t.databaseInfo.databaseId),r=function(i){return new n_(i)}(t.databaseInfo);return function(i,o,a,c){return new i_(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,i,o,a){return new a_(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>vc(this.syncEngine,e,0),function(){return pc.D()?new pc:new Zp}())}createSyncEngine(t,e){return function(s,i,o,a,c,l,u){const h=new R_(s,i,o,a,c,l);return u&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const s=q(r);R("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await Nr(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class fh{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.qa(this.observer.next,t)}error(t){this.observer.error?this.qa(this.observer.error,t):pe("Uncaught Error in snapshot listener:",t.toString())}Qa(){this.muted=!0}qa(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class U_{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=$t.UNAUTHENTICATED,this.clientId=hu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{R("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(R("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Te;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Yo(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ti(n,t){n.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ku(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ic(n,t){n.asyncQueue.verifyOperationInProgress();const e=await j_(n);R("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>_c(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>_c(t.remoteStore,s)),n._onlineComponents=t}function $_(n){return n.name==="FirebaseError"?n.code===v.FAILED_PRECONDITION||n.code===v.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function j_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){R("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ti(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!$_(e))throw e;Tn("Error using user provided cache. Falling back to memory cache: "+e),await Ti(n,new wc)}}else R("FirestoreClient","Using default OfflineComponentProvider"),await Ti(n,new wc);return n._offlineComponents}async function dh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(R("FirestoreClient","Using user provided OnlineComponentProvider"),await Ic(n,n._uninitializedComponentsProvider._online)):(R("FirestoreClient","Using default OnlineComponentProvider"),await Ic(n,new B_))),n._onlineComponents}function q_(n){return dh(n).then(t=>t.syncEngine)}async function eo(n){const t=await dh(n),e=t.eventManager;return e.onListen=C_.bind(null,t.syncEngine),e.onUnlisten=b_.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=S_.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=D_.bind(null,t.syncEngine),e}function z_(n,t,e={}){const r=new Te;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new fh({next:f=>{o.enqueueAndForget(()=>nh(i,h));const d=f.docs.has(a);!d&&f.fromCache?l.reject(new P(v.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&f.fromCache&&c&&c.source==="server"?l.reject(new P(v.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new rh($s(a.path),u,{includeMetadataChanges:!0,ta:!0});return eh(i,h)}(await eo(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function mh(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Ac=new Map;/**
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
 */function K_(n,t,e){if(!e)throw new P(v.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function G_(n,t,e,r){if(t===!0&&r===!0)throw new P(v.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Rc(n){if(!N.isDocumentKey(n))throw new P(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Zo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":x()}function me(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new P(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Zo(n);throw new P(v.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class Cc{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new P(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new P(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}G_("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mh((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new P(v.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new P(v.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new P(v.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ta{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new P(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cc(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cg;switch(r.type){case"firstParty":return new fg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new P(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Ac.get(e);r&&(R("ComponentProvider","Removing Datastore"),Ac.delete(e),r.terminate())}(this),Promise.resolve()}}function H_(n,t,e,r={}){var s;const i=(n=me(n,ta))._getSettings(),o=`${t}:${e}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Tn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=$t.MOCK_USER;else{a=$f(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new P(v.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new $t(l)}n._authCredentials=new lg(new uu(a,c))}}/**
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
 */class Ys{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ys(this.firestore,t,this._query)}}class Jt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Jt(this.firestore,t,this._key)}}class vr extends Ys{constructor(t,e,r){super(t,e,$s(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Jt(this.firestore,null,new N(t))}withConverter(t){return new vr(this.firestore,t,this._path)}}function W_(n,t,...e){if(n=Ne(n),arguments.length===1&&(t=hu.newId()),K_("doc","path",t),n instanceof ta){const r=Tt.fromString(t,...e);return Rc(r),new Jt(n,null,new N(r))}{if(!(n instanceof Jt||n instanceof vr))throw new P(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Tt.fromString(t,...e));return Rc(r),new Jt(n.firestore,n instanceof vr?n.converter:null,new N(r))}}/**
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
 */class Q_{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new Hu(this,"async_queue_retry"),this.cu=()=>{const e=vi();e&&R("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};const t=vi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.lu(),this.hu(t)}enterRestrictedMode(t){if(!this.iu){this.iu=!0,this.au=t||!1;const e=vi();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.cu)}}enqueue(t){if(this.lu(),this.iu)return new Promise(()=>{});const e=new Te;return this.hu(()=>this.iu&&this.au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ru.push(t),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(t){if(!Dr(t))throw t;R("AsyncQueue","Operation failed with retryable error: "+t)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(t){const e=this.nu.then(()=>(this._u=!0,t().catch(r=>{this.ou=r,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw pe("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this._u=!1,r))));return this.nu=e,e}enqueueAfterDelay(t,e,r){this.lu(),this.uu.indexOf(t)>-1&&(e=0);const s=Qo.createAndSchedule(this,t,e,r,i=>this.Iu(i));return this.su.push(s),s}lu(){this.ou&&x()}verifyOperationInProgress(){}async Tu(){let t;do t=this.nu,await t;while(t!==this.nu)}Eu(t){for(const e of this.su)if(e.timerId===t)return!0;return!1}du(t){return this.Tu().then(()=>{this.su.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.su)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tu()})}Au(t){this.uu.push(t)}Iu(t){const e=this.su.indexOf(t);this.su.splice(e,1)}}function Sc(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Pn extends ta{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new Q_}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||gh(this),this._firestoreClient.terminate()}}function Y_(n,t){const e=typeof n=="object"?n:Gd(),r=typeof n=="string"?n:t||"(default)",s=jd(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Bf("firestore");i&&H_(s,...i)}return s}function ea(n){return n._firestoreClient||gh(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function gh(n){var t,e,r;const s=n._freezeSettings(),i=function(a,c,l,u){return new Cg(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,mh(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new U_(n._authCredentials,n._appCheckCredentials,n._queue,i),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class bn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new bn(Kt.fromBase64String(t))}catch(e){throw new P(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new bn(Kt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Js{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new P(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ft(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Xs{constructor(t){this._methodName=t}}/**
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
 */class na{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new P(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new P(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ot(this._lat,t._lat)||ot(this._long,t._long)}}/**
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
 */const J_=/^__.*__$/;class X_{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Be(t,this.data,this.fieldMask,e,this.fieldTransforms):new Vr(t,this.data,e,this.fieldTransforms)}}class ph{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Be(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function _h(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class Zs{constructor(t,e,r,s,i,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ru(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(t){return new Zs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.mu({path:r,gu:!1});return s.pu(t),s}yu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.mu({path:r,gu:!1});return s.Ru(),s}wu(t){return this.mu({path:void 0,gu:!0})}Su(t){return vs(t,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ru(){if(this.path)for(let t=0;t<this.path.length;t++)this.pu(this.path.get(t))}pu(t){if(t.length===0)throw this.Su("Document fields must not be empty");if(_h(this.Vu)&&J_.test(t))throw this.Su('Document fields cannot begin and end with "__"')}}class Z_{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Hs(t)}Cu(t,e,r,s=!1){return new Zs({Vu:t,methodName:e,Du:r,path:Ft.emptyPath(),gu:!1,bu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yh(n){const t=n._freezeSettings(),e=Hs(n._databaseId);return new Z_(n._databaseId,!!t.ignoreUndefinedProperties,e)}function ty(n,t,e,r,s,i={}){const o=n.Cu(i.merge||i.mergeFields?2:0,t,e,s);sa("Data must be an object, but it was:",o,r);const a=Eh(r,o);let c,l;if(i.merge)c=new te(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=no(t,h,e);if(!o.contains(f))throw new P(v.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Th(u,f)||u.push(f)}c=new te(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new X_(new Yt(a),c,l)}class ti extends Xs{_toFieldTransform(t){if(t.Vu!==2)throw t.Vu===1?t.Su(`${this._methodName}() can only appear at the top level of your update data`):t.Su(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ti}}function ey(n,t,e){return new Zs({Vu:3,Du:t.settings.Du,methodName:n._methodName,gu:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class ra extends Xs{constructor(t,e){super(t),this.vu=e}_toFieldTransform(t){const e=ey(this,t,!0),r=this.vu.map(i=>Mr(i,e)),s=new Rn(r);return new Jg(t.path,s)}isEqual(t){return t instanceof ra&&ss(this.vu,t.vu)}}function ny(n,t,e,r){const s=n.Cu(1,t,e);sa("Data must be an object, but it was:",s,r);const i=[],o=Yt.empty();en(r,(c,l)=>{const u=ia(t,c,e);l=Ne(l);const h=s.yu(u);if(l instanceof ti)i.push(u);else{const f=Mr(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new te(i);return new ph(o,a,s.fieldTransforms)}function ry(n,t,e,r,s,i){const o=n.Cu(1,t,e),a=[no(t,r,e)],c=[s];if(i.length%2!=0)throw new P(v.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(no(t,i[f])),c.push(i[f+1]);const l=[],u=Yt.empty();for(let f=a.length-1;f>=0;--f)if(!Th(l,a[f])){const d=a[f];let y=c[f];y=Ne(y);const T=o.yu(d);if(y instanceof ti)l.push(d);else{const E=Mr(y,T);E!=null&&(l.push(d),u.set(d,E))}}const h=new te(l);return new ph(u,h,o.fieldTransforms)}function Mr(n,t){if(vh(n=Ne(n)))return sa("Unsupported field value:",t,n),Eh(n,t);if(n instanceof Xs)return function(r,s){if(!_h(s.Vu))throw s.Su(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Su(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.gu&&t.Vu!==4)throw t.Su("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Mr(a,s.wu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,t)}return function(r,s){if((r=Ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Wg(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=bt.fromDate(r);return{timestampValue:ys(s.serializer,i)}}if(r instanceof bt){const i=new bt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ys(s.serializer,i)}}if(r instanceof na)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bn)return{bytesValue:xu(s.serializer,r._byteString)};if(r instanceof Jt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$o(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Su(`Unsupported field value: ${Zo(r)}`)}(n,t)}function Eh(n,t){const e={};return fu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):en(n,(r,s)=>{const i=Mr(s,t.fu(r));i!=null&&(e[r]=i)}),{mapValue:{fields:e}}}function vh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof bt||n instanceof na||n instanceof bn||n instanceof Jt||n instanceof Xs)}function sa(n,t,e){if(!vh(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Zo(e);throw r==="an object"?t.Su(n+" a custom object"):t.Su(n+" "+r)}}function no(n,t,e){if((t=Ne(t))instanceof Js)return t._internalPath;if(typeof t=="string")return ia(n,t);throw vs("Field path arguments must be of type string or ",n,!1,void 0,e)}const sy=new RegExp("[~\\*/\\[\\]]");function ia(n,t,e){if(t.search(sy)>=0)throw vs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Js(...t.split("."))._internalPath}catch{throw vs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function vs(n,t,e,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new P(v.INVALID_ARGUMENT,a+n+c)}function Th(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class wh{constructor(t,e,r,s,i){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new iy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ih("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class iy extends wh{data(){return super.data()}}function Ih(n,t){return typeof t=="string"?ia(n,t):t instanceof Js?t._internalPath:t._delegate._internalPath}/**
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
 */function oy(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new P(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ay{convertValue(t,e="none"){switch(Ze(t)){case 0:return null;case 1:return t.booleanValue;case 2:return St(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Xe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw x()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return en(t,(s,i)=>{r[s]=this.convertValue(i,e)}),r}convertGeoPoint(t){return new na(St(t.latitude),St(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Mo(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(pr(t));default:return null}}convertTimestamp(t){const e=Me(t);return new bt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Tt.fromString(t);pt(zu(r));const s=new _r(r.get(1),r.get(3)),i=new N(r.popFirst(5));return s.isEqual(e)||pe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
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
 */function cy(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
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
 */class Yn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ah extends wh{constructor(t,e,r,s,i,o){super(t,e,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Xr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Ih("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Xr extends Ah{data(t={}){return super.data(t)}}class ly{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Yn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Xr(this._firestore,this._userDataWriter,r.key,r,new Yn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new P(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Xr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Yn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Xr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Yn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:uy(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function uy(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x()}}/**
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
 */function hy(n){n=me(n,Jt);const t=me(n.firestore,Pn);return z_(ea(t),n._key).then(e=>Sh(t,n,e))}class Rh extends ay{constructor(t){super(),this.firestore=t}convertBytes(t){return new bn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Jt(this.firestore,null,e)}}function Pc(n,t,e){n=me(n,Jt);const r=me(n.firestore,Pn),s=cy(n.converter,t,e);return Ch(r,[ty(yh(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,fe.none())])}function fy(n,t,e,...r){n=me(n,Jt);const s=me(n.firestore,Pn),i=yh(s);let o;return o=typeof(t=Ne(t))=="string"||t instanceof Js?ry(i,"updateDoc",n._key,t,e,r):ny(i,"updateDoc",n._key,t),Ch(s,[o.toMutation(n._key,fe.exists(!0))])}function dy(n,...t){var e,r,s;n=Ne(n);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof t[o]!="object"||Sc(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Sc(t[o])){const h=t[o];t[o]=(e=h.next)===null||e===void 0?void 0:e.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(n instanceof Jt)l=me(n.firestore,Pn),u=$s(n._key.path),c={next:h=>{t[o]&&t[o](Sh(l,n,h))},error:t[o+1],complete:t[o+2]};else{const h=me(n,Ys);l=me(h.firestore,Pn),u=h._query;const f=new Rh(l);c={next:d=>{t[o]&&t[o](new ly(l,f,h,d))},error:t[o+1],complete:t[o+2]},oy(n._query)}return function(f,d,y,T){const E=new fh(T),m=new rh(d,E,y);return f.asyncQueue.enqueueAndForget(async()=>eh(await eo(f),m)),()=>{E.Qa(),f.asyncQueue.enqueueAndForget(async()=>nh(await eo(f),m))}}(ea(l),u,a,c)}function Ch(n,t){return function(r,s){const i=new Te;return r.asyncQueue.enqueueAndForget(async()=>V_(await q_(r),s,i)),i.promise}(ea(n),t)}function Sh(n,t,e){const r=e.docs.get(t._key),s=new Rh(n);return new Ah(n,s,t._key,r,new Yn(e.hasPendingWrites,e.fromCache),t.converter)}function my(...n){return new ra("arrayUnion",n)}(function(t,e=!0){(function(s){xn=s})(Kd),os(new ir("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Pn(new ug(r.getProvider("auth-internal")),new mg(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new P(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _r(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:e},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),gn(Ha,"4.6.0",t),gn(Ha,"4.6.0","esm2017")})();var gy="firebase",py="10.11.0";/**
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
 */gn(gy,py,"app");let wi=null,Ii=null;const _y=()=>(wi||(wi=sl({apiKey:"AIzaSyAEkDsTVEbr-spwGn7NP4WVMGjjFvc_Vnk",authDomain:"parrotbeak-2b0ae.firebaseapp.com",projectId:"parrotbeak-2b0ae",storageBucket:"parrotbeak-2b0ae.appspot.com",messagingSenderId:"696191016129",appId:"1:696191016129:web:9086db78bbf9d939e58840"})),wi),yy=()=>(Ii||(Ii=Y_(_y())),Ii),bc=n=>{const t=Object.create(null);for(let e=0;e<n.fields.length;e++)t[n.fields[e]]=n[n.fields[e]];return t};class Ey{constructor(t,e,r){this.id=t,this.collection=e,this.fields=r,this.ignoreAuth=!1}get ref(){return this._ref||(this._ref=W_(yy(),this.collection,this.id)),this._ref}fetch(){return hy(this.ref)}create(){return Pc(this.ref,bc(this))}async save(t=!1,e=yt){try{const r=await this.fetch().catch(yt);if(!t&&r&&r.exists())throw this.id+" already exists in "+this.collection+" ...";return e&&e(r),await Pc(this.ref,bc(this)),!0}catch(r){return Ri(r),!1}}update(t){return fy(this.ref,t).catch(()=>{Ri("Could not update the document...")})}subscribeToData(t){return dy(this.ref,t)}}const Dc=n=>n===Ht.OFFER?"offerIceCandidates":"answerIceCandidates",vy=n=>{const t=(n.getMonth()+1)*31,e=n.getDate();return(t+e).toString().padStart(3,"0")+of(3)};class Vc extends Ey{constructor(t,e,r,s=En){const i=new Date;super(t||vy(i),"/quinque-rooms",["created","size","offerIceCandidates","answerIceCandidates","turns","answerPubKey","iv"]),t||(this.created=i,this.size=so.includes(s)?s:En,this.offerIceCandidates=[],this.answerIceCandidates=[],this.turns=Wc(this.size*this.size),this.answerPubKey=e,this.iv=r)}saveOffer(t){this.offer=t,this.update({offer:t})}saveAnswer(t){this.answer=t,this.update({answer:t})}addIceCandidate(t,e){const r=Dc(t);this.update({[r]:my(e)})}clearIceCandidates(t){const e=Dc(t);this.update({[e]:[]})}}const Ph=()=>!!(navigator!=null&&navigator.clipboard),Ty=n=>Ph()?(navigator.clipboard.writeText(n),!0):!1,wy={iceServers:[{urls:"stun:stun.services.mozilla.com"},{urls:"stun:stun.l.google.com:19302"}]};class Iy{constructor(){this.onicecandidate=null,this.onstatechange=null,this.onmessage=null,this.dataChannel=null,this.remoteDescriptionApplied=new Promise(t=>{this.applyRemoteDescription=t})}init(){const t=this;this.connection=new RTCPeerConnection(wy),this.connection.onicecandidate=e=>{t.onicecandidate&&t.onicecandidate(e)},this.connection.onconnectionstatechange=e=>{t.onstatechange&&t.onstatechange(e)},this.connection.ondatachannel=e=>{const{channel:r}=e;r&&(r.onopen=()=>{},r.onclose=()=>{},r.onmessage=s=>{this.onmessage&&this.onmessage(s)},this.dataChannel=r)}}close(){var t;(t=this.connection)==null||t.close()}createDatachannel(t="default"){var e;this.dataChannel=((e=this.connection)==null?void 0:e.createDataChannel(t))||null,this.dataChannel&&(this.dataChannel.onopen=()=>{},this.dataChannel.onclose=()=>{},this.dataChannel.onmessage=r=>{this.onmessage&&this.onmessage(r)})}localDescription(){var t,e;return((e=(t=this.connection)==null?void 0:t.localDescription)==null?void 0:e.sdp)||""}createOffer(){var t;return(t=this.connection)==null?void 0:t.createOffer()}createAnswer(){var t;return(t=this.connection)==null?void 0:t.createAnswer()}async setRemoteDescription(t){var e;await((e=this.connection)==null?void 0:e.setRemoteDescription(t)),this.applyRemoteDescription()}setLocalDescription(t){var e;return(e=this.connection)==null?void 0:e.setLocalDescription(t)}addIceCandidate(t){var e;return(e=this.connection)==null?void 0:e.addIceCandidate(t)}sendChannelMessage(t){var e;if(!this.dataChannel||this.dataChannel.readyState!=="open"){(e=this.connection)==null||e.close();return}this.dataChannel.send(t)}}const dt=new Iy,bh={name:"ECDH",namedCurve:"P-384"},Ai="AES-GCM",kc=n=>btoa(String.fromCharCode.apply(null,new Uint8Array(n))),Nc=n=>{const t=atob(n),e=new Uint8Array(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e.buffer},Ay=n=>{const t=JSON.parse(n);return crypto.subtle.importKey("jwk",t,bh,!0,[])};class Ry{constructor(){this.pubKey=null,this.prKey=null,this.iv=crypto.getRandomValues(new Uint8Array(12)),this.waitingForSharedSecret=new Promise(t=>{this.resolveShareSecret=t})}init(){return new Promise(t=>{crypto.subtle.generateKey(bh,!0,["deriveKey"]).then(async e=>{this.pubKey=e.publicKey,this.prKey=e.privateKey,t()})})}async deriveSharedKey(t){return this.prKey?crypto.subtle.deriveKey({name:"ECDH",public:t},this.prKey,{name:Ai,length:256},!0,["encrypt","decrypt"]):null}async exportPublicKeyToJwk(){return this.pubKey?JSON.stringify(await crypto.subtle.exportKey("jwk",this.pubKey)):""}async setSharedKeyFromJwkString(t){this.shared={key:await this.deriveSharedKey(await Ay(t))},this.resolveShareSecret()}setIvFromRemote(t){this.iv=new Uint8Array(Nc(t))}async ecnrypt(t,e,r){var s;if(e||(e=((s=this.shared)==null?void 0:s.key)||void 0),!e)throw"The key is not generated...";return kc(await crypto.subtle.encrypt({name:Ai,iv:r||this.iv},e,new TextEncoder().encode(t)))}async decrypt(t,e,r){var s;if(e||(e=((s=this.shared)==null?void 0:s.key)||void 0),!e)throw"Key is not provided...";return new TextDecoder().decode(await crypto.subtle.decrypt({name:Ai,iv:r||this.iv},e,Nc(t)))}ivString(){return kc(this.iv)}}const Ot=new Ry,Oc=()=>{Hc.set({text:"",ok:yt,dismiss:yt})},Dh=n=>new Promise(t=>{Hc.set({text:n,ok:()=>{Oc(),t(!0)},dismiss:()=>{Oc(),t(!1)}})});function Cy(n){let t,e;return t=new Kc({}),{c(){nt(t.$$.fragment)},l(r){rt(t.$$.fragment,r)},m(r,s){st(t,r,s),e=!0},p:yt,i(r){e||(M(t.$$.fragment,r),e=!0)},o(r){F(t.$$.fragment,r),e=!1},d(r){it(t,r)}}}function Sy(n){var f;let t,e,r,s=((f=n[4])==null?void 0:f.id)+"",i,o,a,c,l,u,h=n[5]&&Vy(n);return{c(){t=K("p"),e=De("Room id: "),r=K("span"),i=De(s),o=X(),a=K("input"),c=X(),h&&h.c(),l=ge(),this.h()},l(d){t=G(d,"P",{class:!0});var y=ct(t);e=Ve(y,"Room id: "),r=G(y,"SPAN",{class:!0});var T=ct(r);i=Ve(T,s),T.forEach(S),y.forEach(S),o=Z(d),a=G(d,"INPUT",{class:!0}),c=Z(d),h&&h.l(d),l=ge(),this.h()},h(){k(r,"class","text-white"),k(t,"class","pb-4 text-faded"),a.value=n[1],k(a,"class",Ny),a.readOnly=!0},m(d,y){tt(d,t,y),b(t,e),b(t,r),b(r,i),tt(d,o,y),tt(d,a,y),tt(d,c,y),h&&h.m(d,y),tt(d,l,y),u=!0},p(d,y){var T;(!u||y&16)&&s!==(s=((T=d[4])==null?void 0:T.id)+"")&&ws(i,s),(!u||y&2&&a.value!==d[1])&&(a.value=d[1]),d[5]&&h.p(d,y)},i(d){u||(M(h),u=!0)},o(d){F(h),u=!1},d(d){d&&(S(t),S(o),S(a),S(c),S(l)),h&&h.d(d)}}}function Py(n){let t,e;return{c(){t=K("p"),e=De(n[3]),this.h()},l(r){t=G(r,"P",{class:!0});var s=ct(t);e=Ve(s,n[3]),s.forEach(S),this.h()},h(){k(t,"class","text-faded")},m(r,s){tt(r,t,s),b(t,e)},p(r,s){s&8&&ws(e,r[3])},i:yt,o:yt,d(r){r&&S(t)}}}function by(n){let t,e="Your browser does not support webRTC peer-to-peer connections.. If you see this message, please try to change to a browser which supports webRTC (hint: most of modern web browsers do).";return{c(){t=K("p"),t.textContent=e,this.h()},l(r){t=G(r,"P",{class:!0,"data-svelte-h":!0}),se(t)!=="svelte-touu31"&&(t.textContent=e),this.h()},h(){k(t,"class","text-faded")},m(r,s){tt(r,t,s)},p:yt,i:yt,o:yt,d(r){r&&S(t)}}}function Dy(n){let t,e;return t=new Kc({}),{c(){nt(t.$$.fragment)},l(r){rt(t.$$.fragment,r)},m(r,s){st(t,r,s),e=!0},p:yt,i(r){e||(M(t.$$.fragment,r),e=!0)},o(r){F(t.$$.fragment,r),e=!1},d(r){it(t,r)}}}function Vy(n){let t,e,r,s;e=new mn({props:{label:"Copy link",icon:Wh,class:"text-primary border-2 border-primary px-4"}}),e.$on("click",n[6]);let i=n[2]&&Mc(n);return{c(){t=K("div"),nt(e.$$.fragment),r=X(),i&&i.c(),this.h()},l(o){t=G(o,"DIV",{class:!0});var a=ct(t);rt(e.$$.fragment,a),r=Z(a),i&&i.l(a),a.forEach(S),this.h()},h(){k(t,"class","flex flex-row items-center gap-4 pt-6")},m(o,a){tt(o,t,a),st(e,t,null),b(t,r),i&&i.m(t,null),s=!0},p(o,a){o[2]?i?i.p(o,a):(i=Mc(o),i.c(),i.m(t,null)):i&&(i.d(1),i=null)},i(o){s||(M(e.$$.fragment,o),s=!0)},o(o){F(e.$$.fragment,o),s=!1},d(o){o&&S(t),it(e),i&&i.d()}}}function Mc(n){let t,e=n[2].label+"",r,s;return{c(){t=K("p"),r=De(e),this.h()},l(i){t=G(i,"P",{class:!0});var o=ct(t);r=Ve(o,e),o.forEach(S),this.h()},h(){k(t,"class",s=n[2].class)},m(i,o){tt(i,t,o),b(t,r)},p(i,o){o&4&&e!==(e=i[2].label+"")&&ws(r,e),o&4&&s!==(s=i[2].class)&&k(t,"class",s)},d(i){i&&S(t)}}}function ky(n){let t,e,r,s;const i=[Dy,by,Py,Sy,Cy],o=[];function a(c,l){return c[0]===null?0:c[0]?c[3]?2:c[1]?3:4:1}return t=a(n),e=o[t]=i[t](n),{c(){e.c(),r=ge()},l(c){e.l(c),r=ge()},m(c,l){o[t].m(c,l),tt(c,r,l),s=!0},p(c,[l]){let u=t;t=a(c),t===u?o[t].p(c,l):(Nn(),F(o[u],1,1,()=>{o[u]=null}),On(),e=o[t],e?e.p(c,l):(e=o[t]=i[t](c),e.c()),M(e,1),e.m(r.parentNode,r))},i(c){s||(M(e),s=!0)},o(c){F(e),s=!1},d(c){c&&S(r),o[t].d(c)}}}const Ny="p-2 border border-gray-700 rounded-md w-full bg-gray-800";function Oy(n,t,e){let r;ae(n,Gc,O=>e(11,r=O));const s=Ph(),i=$c(),o={};let a=null,c="",l=null,u="",h=null,f=null;const d={},y=O=>{const A=O.target;A?A.connectionState==="connected"?i("connected",{size:d.size,status:d.type===Ht.OFFER?Wt.CONNECTED_AS_PLAYER1:Wt.CONNECTED_AS_PLAYER2,turns:d.turns}):A.connectionState==="failed"?e(3,u="Negotiation failed. Check your network or VPN..."):A.connectionState==="connecting"?bf("Connecting the peer..."):e(3,u="Unknown network error..."):e(3,u="Could not create a gaming session...")},T=async(O,A)=>{if(!A)return;await Ot.waitingForSharedSecret;const lt={type:"candidate",sdpMid:A.sdpMid,sdpMLineIndex:A.sdpMLineIndex,candidate:A.candidate},mt=await Ot.ecnrypt(JSON.stringify(lt));o[mt]||(h==null||h.addIceCandidate(O,mt),o[mt]=!0)},E=async()=>{if(!h)return;dt.init(),dt.onicecandidate=({candidate:lt})=>{T(Ht.ANSWER,lt)},dt.onstatechange=y,await Ot.setSharedKeyFromJwkString(d.offerPubKey);const O=new RTCSessionDescription({type:Ht.OFFER,sdp:await Ot.decrypt(d.offer)});await dt.setRemoteDescription(O);const A=await dt.createAnswer();if(!A||!A.sdp){e(3,u="Could not verify the peer connection...");return}await dt.setLocalDescription(new RTCSessionDescription(A)),d.answer=A.sdp,h.saveAnswer(await Ot.ecnrypt(A.sdp)),h.saveOffer("-")},m=async()=>{if(!h||d.answer==="-")return;const O=new RTCSessionDescription({type:Ht.ANSWER,sdp:await Ot.decrypt(d.answer)});await dt.setRemoteDescription(O),h.saveAnswer("-")},_=async O=>{const A=O.data()||{};if(!Object.keys(A).length)return;const lt=["size","turns","offerPubKey","iv"];for(let H=0;H<lt.length;H++){const $=lt[H];!d[$]&&A[$]&&(d[$]=A[$])}!d.answerPubKey&&A.answerPubKey&&(d.answerPubKey=A.answerPubKey,d.type===Ht.OFFER&&(Ot.setIvFromRemote(A.iv),await Ot.setSharedKeyFromJwkString(A.answerPubKey),d.type===Ht.OFFER&&(h==null||h.saveOffer(await Ot.ecnrypt(dt.localDescription()))))),!d.offer&&A.offer&&(d.offer=A.offer,d.type===Ht.ANSWER&&E()),!d.answer&&A.answer&&(d.answer=A.answer,m());const mt=async H=>{await dt.remoteDescriptionApplied;for(let $=0;$<H.length;$++){let gt=null;try{gt=JSON.parse(await Ot.decrypt(H[$]))}catch(ut){Ri(ut)}gt&&(o[H[$]]||(await dt.addIceCandidate(gt.candidate?gt:null),o[H[$]]=!0))}};d.type===Ht.OFFER&&A.answerIceCandidates.length?(await Ot.waitingForSharedSecret,await mt(A.answerIceCandidates),h==null||h.clearIceCandidates(Ht.ANSWER)):d.type===Ht.ANSWER&&A.offerIceCandidates.length&&(await Ot.waitingForSharedSecret,await mt(A.offerIceCandidates),h==null||h.clearIceCandidates(Ht.OFFER))},D=async O=>{await Ot.init(),e(4,h=new Vc(O)),f=h.subscribeToData(_),dt.init(),dt.onicecandidate=({candidate:lt})=>{T(Ht.OFFER,lt)},dt.onstatechange=y,dt.createDatachannel();const A=await dt.createOffer();if(!A||!A.sdp){e(3,u="Could not set up a stable connection...");return}d.type=Ht.OFFER,h.update({offerPubKey:await Ot.exportPublicKeyToJwk()}),dt.setLocalDescription(A)},z=async()=>{await Ot.init();let O=parseInt(r.url.searchParams.get("s")||String(En));so.includes(O)||(O=En),e(4,h=new Vc("",await Ot.exportPublicKeyToJwk(),Ot.ivString(),O)),await!h.save()&&(await Dh("This room ID is already taken. Refresh the page to get a new one."),window.location.reload()),e(1,c=r.url.protocol+"//"+r.url.host+r.url.pathname+"?room="+h.id),h.subscribeToData(_),d.type=Ht.ANSWER},V=()=>{e(2,l=Ty(c)?{class:"text-green-500",label:"Link copied!"}:{class:"text-red-500",label:"Could not copy..."})};return qc(()=>{if(e(0,a=!!window.RTCPeerConnection),!a)return;const O=r.url.searchParams.get("room");O?D(O):z()}),Gh(()=>{f&&f()}),[a,c,l,u,h,s,V]}class My extends Vn{constructor(t){super(),kn(this,t,Oy,ky,Dn,{})}}function Lc(n,t,e){const r=n.slice();return r[64]=t[e],r[66]=e,r}function Fc(n,t,e){const r=n.slice();return r[64]=t[e],r[68]=e,r}function xc(n){let t,e;return t=new pf({props:{rowIndex:n[66],colIndex:n[68],selected:n[0][n[66]][n[68]],selectCandidate:n[3][n[66]][n[68]],hoverColor:n[16],disabled:n[1],hoverCoords:n[6]}}),t.$on("click",n[17]),t.$on("enter",n[20]),t.$on("leave",n[18]),{c(){nt(t.$$.fragment)},l(r){rt(t.$$.fragment,r)},m(r,s){st(t,r,s),e=!0},p(r,s){const i={};s[0]&1&&(i.selected=r[0][r[66]][r[68]]),s[0]&8&&(i.selectCandidate=r[3][r[66]][r[68]]),s[0]&65536&&(i.hoverColor=r[16]),s[0]&2&&(i.disabled=r[1]),s[0]&64&&(i.hoverCoords=r[6]),t.$set(i)},i(r){e||(M(t.$$.fragment,r),e=!0)},o(r){F(t.$$.fragment,r),e=!1},d(r){it(t,r)}}}function Bc(n){let t,e,r,s=ke({length:n[8]}),i=[];for(let a=0;a<s.length;a+=1)i[a]=xc(Fc(n,s,a));const o=a=>F(i[a],1,1,()=>{i[a]=null});return{c(){t=K("div");for(let a=0;a<i.length;a+=1)i[a].c();e=X(),this.h()},l(a){t=G(a,"DIV",{class:!0});var c=ct(t);for(let l=0;l<i.length;l+=1)i[l].l(c);e=Z(c),c.forEach(S),this.h()},h(){k(t,"class","flex flex-row gap-1")},m(a,c){tt(a,t,c);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(t,null);b(t,e),r=!0},p(a,c){if(c[0]&1507659){s=ke({length:a[8]});let l;for(l=0;l<s.length;l+=1){const u=Fc(a,s,l);i[l]?(i[l].p(u,c),M(i[l],1)):(i[l]=xc(u),i[l].c(),M(i[l],1),i[l].m(t,e))}for(Nn(),l=s.length;l<i.length;l+=1)o(l);On()}},i(a){if(!r){for(let c=0;c<s.length;c+=1)M(i[c]);r=!0}},o(a){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)F(i[c]);r=!1},d(a){a&&S(t),Ts(i,a)}}}function Ly(n){let t,e="This will reset the current board and it's progress. Continue?";return{c(){t=K("p"),t.textContent=e},l(r){t=G(r,"P",{"data-svelte-h":!0}),se(t)!=="svelte-1jpj5pu"&&(t.textContent=e)},m(r,s){tt(r,t,s)},p:yt,d(r){r&&S(t)}}}function Fy(n){let t,e="A tie!";return{c(){t=K("p"),t.textContent=e,this.h()},l(r){t=G(r,"P",{class:!0,"data-svelte-h":!0}),se(t)!=="svelte-16n1wz6"&&(t.textContent=e),this.h()},h(){k(t,"class","text-white")},m(r,s){tt(r,t,s)},p:yt,d(r){r&&S(t)}}}function xy(n){let t,e;return{c(){t=K("p"),e=De("Player 2 won!"),this.h()},l(r){t=G(r,"P",{class:!0});var s=ct(t);e=Ve(s,"Player 2 won!"),s.forEach(S),this.h()},h(){k(t,"class",ni)},m(r,s){tt(r,t,s),b(t,e)},p:yt,d(r){r&&S(t)}}}function By(n){let t,e;return{c(){t=K("p"),e=De("Player 1 won!"),this.h()},l(r){t=G(r,"P",{class:!0});var s=ct(t);e=Ve(s,"Player 1 won!"),s.forEach(S),this.h()},h(){k(t,"class",ei)},m(r,s){tt(r,t,s),b(t,e)},p:yt,d(r){r&&S(t)}}}function Uy(n){let t,e="NICE!",r,s,i,o,a,c,l,u,h,f,d;function y(m,_){return m[15][0]>m[15][1]?By:m[15][0]<m[15][1]?xy:Fy}let T=y(n),E=T(n);return c=new Qc({props:{score1:n[15][0],score2:n[15][1],score1Class:"font-bold "+ei,score2Class:"font-bold "+ni}}),u=new mn({props:{label:"Play again",icon:zc,class:"border border-primary text-primary mx-auto mt-10 px-6"}}),u.$on("click",n[22]),f=new mn({props:{label:"Back",class:"text-faded mx-auto mt-4 px-6"}}),f.$on("click",n[24]),{c(){t=K("p"),t.textContent=e,r=X(),s=K("div"),i=K("div"),o=K("div"),E.c(),a=X(),nt(c.$$.fragment),l=X(),nt(u.$$.fragment),h=X(),nt(f.$$.fragment),this.h()},l(m){t=G(m,"P",{"data-svelte-h":!0}),se(t)!=="svelte-p3lnqo"&&(t.textContent=e),r=Z(m),s=G(m,"DIV",{class:!0});var _=ct(s);i=G(_,"DIV",{});var D=ct(i);o=G(D,"DIV",{class:!0});var z=ct(o);E.l(z),a=Z(z),rt(c.$$.fragment,z),z.forEach(S),l=Z(D),rt(u.$$.fragment,D),h=Z(D),rt(f.$$.fragment,D),D.forEach(S),_.forEach(S),this.h()},h(){k(o,"class","text-4xl text-center"),k(s,"class","h-96 max-w-full max-h-full flex flex-col justify-center items-center")},m(m,_){tt(m,t,_),tt(m,r,_),tt(m,s,_),b(s,i),b(i,o),E.m(o,null),b(o,a),st(c,o,null),b(i,l),st(u,i,null),b(i,h),st(f,i,null),d=!0},p(m,_){T===(T=y(m))&&E?E.p(m,_):(E.d(1),E=T(m),E&&(E.c(),E.m(o,a)));const D={};_[0]&32768&&(D.score1=m[15][0]),_[0]&32768&&(D.score2=m[15][1]),c.$set(D)},i(m){d||(M(c.$$.fragment,m),M(u.$$.fragment,m),M(f.$$.fragment,m),d=!0)},o(m){F(c.$$.fragment,m),F(u.$$.fragment,m),F(f.$$.fragment,m),d=!1},d(m){m&&(S(t),S(r),S(s)),E.d(),it(c),it(u),it(f)}}}function $y(n){let t,e;return t=new My({}),t.$on("connected",n[25]),{c(){nt(t.$$.fragment)},l(r){rt(t.$$.fragment,r)},m(r,s){st(t,r,s),e=!0},p:yt,i(r){e||(M(t.$$.fragment,r),e=!0)},o(r){F(t.$$.fragment,r),e=!1},d(r){it(t,r)}}}function jy(n){let t,e="Player disconnected... Please start another session.";return{c(){t=K("p"),t.textContent=e},l(r){t=G(r,"P",{"data-svelte-h":!0}),se(t)!=="svelte-xd9p7l"&&(t.textContent=e)},m(r,s){tt(r,t,s)},p:yt,i:yt,o:yt,d(r){r&&S(t)}}}function qy(n){let t,e,r,s;const i=[jy,$y],o=[];function a(c,l){return c[9]?0:1}return t=a(n),e=o[t]=i[t](n),{c(){e.c(),r=ge()},l(c){e.l(c),r=ge()},m(c,l){o[t].m(c,l),tt(c,r,l),s=!0},p(c,l){let u=t;t=a(c),t===u?o[t].p(c,l):(Nn(),F(o[u],1,1,()=>{o[u]=null}),On(),e=o[t],e?e.p(c,l):(e=o[t]=i[t](c),e.c()),M(e,1),e.m(r.parentNode,r))},i(c){s||(M(e),s=!0)},o(c){F(e),s=!1},d(c){c&&S(r),o[t].d(c)}}}function zy(n){let t,e;return t=new rf({}),{c(){nt(t.$$.fragment)},l(r){rt(t.$$.fragment,r)},m(r,s){st(t,r,s),e=!0},i(r){e||(M(t.$$.fragment,r),e=!0)},o(r){F(t.$$.fragment,r),e=!1},d(r){it(t,r)}}}function Ky(n){let t,e,r,s,i,o,a,c,l,u,h,f,d,y,T,E,m,_,D,z,V,O,A,lt,mt,H,$,gt,ut,vt;s=new mn({props:{icon:Qh,class:"text-primary"}}),s.$on("click",n[21]),c=new Qc({props:{score1:n[15][0],score2:n[15][1],score1Class:"font-bold "+ei,score2Class:"font-bold "+ni}}),u=new Rf({props:{class:n[14],color:n[2]}}),f=new mn({props:{class:"text-primary",icon:zc}}),f.$on("click",n[22]);let Nt=ke({length:n[8]}),ft=[];for(let w=0;w<Nt.length;w+=1)ft[w]=Bc(Lc(n,Nt,w));const Ae=w=>F(ft[w],1,1,()=>{ft[w]=null});return V=new mn({props:{label:"Rules",class:"text-faded text-sm"}}),V.$on("click",n[26]),A=new Kn({props:{showing:n[4],title:"Reset the game?",okLabel:"Reset",$$slots:{default:[Ly]},$$scope:{ctx:n}}}),A.$on("ok",n[37]),A.$on("dismiss",n[23]),mt=new Kn({props:{showing:n[5],hideOk:!0,hideCancel:!0,class:"font-bold",$$slots:{default:[Uy]},$$scope:{ctx:n}}}),mt.$on("dismiss",n[24]),$=new Kn({props:{showing:n[10]||n[9],title:"Peer connection",hideOk:!0,$$slots:{default:[qy]},$$scope:{ctx:n}}}),$.$on("dismiss",n[21]),ut=new Kn({props:{showing:n[7],hideOk:!0,title:"Game rules",$$slots:{default:[zy]},$$scope:{ctx:n}}}),ut.$on("dismiss",n[27]),{c(){t=K("div"),e=K("div"),r=K("div"),nt(s.$$.fragment),i=X(),o=K("div"),a=K("div"),nt(c.$$.fragment),l=X(),nt(u.$$.fragment),h=X(),nt(f.$$.fragment),d=X(),y=K("div"),T=K("div"),E=K("p"),m=De(n[11]),_=X();for(let w=0;w<ft.length;w+=1)ft[w].c();D=X(),z=K("div"),nt(V.$$.fragment),O=X(),nt(A.$$.fragment),lt=X(),nt(mt.$$.fragment),H=X(),nt($.$$.fragment),gt=X(),nt(ut.$$.fragment),this.h()},l(w){t=G(w,"DIV",{class:!0});var L=ct(t);e=G(L,"DIV",{class:!0});var At=ct(e);r=G(At,"DIV",{class:!0});var Xt=ct(r);rt(s.$$.fragment,Xt),i=Z(Xt),o=G(Xt,"DIV",{class:!0});var Gt=ct(o);a=G(Gt,"DIV",{});var oe=ct(a);rt(c.$$.fragment,oe),l=Z(oe),rt(u.$$.fragment,oe),oe.forEach(S),Gt.forEach(S),h=Z(Xt),rt(f.$$.fragment,Xt),Xt.forEach(S),d=Z(At),y=G(At,"DIV",{class:!0});var re=ct(y);T=G(re,"DIV",{class:!0});var Ee=ct(T);E=G(Ee,"P",{class:!0});var It=ct(E);m=Ve(It,n[11]),It.forEach(S),Ee.forEach(S),_=Z(re);for(let rn=0;rn<ft.length;rn+=1)ft[rn].l(re);re.forEach(S),D=Z(At),z=G(At,"DIV",{class:!0});var Re=ct(z);rt(V.$$.fragment,Re),Re.forEach(S),At.forEach(S),L.forEach(S),O=Z(w),rt(A.$$.fragment,w),lt=Z(w),rt(mt.$$.fragment,w),H=Z(w),rt($.$$.fragment,w),gt=Z(w),rt(ut.$$.fragment,w),this.h()},h(){k(o,"class","flex-1 flex flex-row justify-center relative"),k(r,"class","flex flex-row gap-2 pb-2 pt-3 px-2 items-start"),k(E,"class",n[12]),k(T,"class","relative"),k(y,"class","flex-1 flex flex-col justify-center w-full max-w-[600px] mx-auto gap-1 px-3"),k(z,"class","flex flex-row justify-center pb-2"),k(e,"class",n[13]),k(t,"class","h-device relative")},m(w,L){tt(w,t,L),b(t,e),b(e,r),st(s,r,null),b(r,i),b(r,o),b(o,a),st(c,a,null),b(a,l),st(u,a,null),b(r,h),st(f,r,null),b(e,d),b(e,y),b(y,T),b(T,E),b(E,m),b(y,_);for(let At=0;At<ft.length;At+=1)ft[At]&&ft[At].m(y,null);b(e,D),b(e,z),st(V,z,null),tt(w,O,L),st(A,w,L),tt(w,lt,L),st(mt,w,L),tt(w,H,L),st($,w,L),tt(w,gt,L),st(ut,w,L),vt=!0},p(w,L){const At={};L[0]&32768&&(At.score1=w[15][0]),L[0]&32768&&(At.score2=w[15][1]),c.$set(At);const Xt={};if(L[0]&16384&&(Xt.class=w[14]),L[0]&4&&(Xt.color=w[2]),u.$set(Xt),(!vt||L[0]&2048)&&ws(m,w[11]),(!vt||L[0]&4096)&&k(E,"class",w[12]),L[0]&1507659){Nt=ke({length:w[8]});let It;for(It=0;It<Nt.length;It+=1){const Re=Lc(w,Nt,It);ft[It]?(ft[It].p(Re,L),M(ft[It],1)):(ft[It]=Bc(Re),ft[It].c(),M(ft[It],1),ft[It].m(y,null))}for(Nn(),It=Nt.length;It<ft.length;It+=1)Ae(It);On()}(!vt||L[0]&8192)&&k(e,"class",w[13]);const Gt={};L[0]&16&&(Gt.showing=w[4]),L[2]&128&&(Gt.$$scope={dirty:L,ctx:w}),A.$set(Gt);const oe={};L[0]&32&&(oe.showing=w[5]),L[0]&32768|L[2]&128&&(oe.$$scope={dirty:L,ctx:w}),mt.$set(oe);const re={};L[0]&1536&&(re.showing=w[10]||w[9]),L[0]&512|L[2]&128&&(re.$$scope={dirty:L,ctx:w}),$.$set(re);const Ee={};L[0]&128&&(Ee.showing=w[7]),L[2]&128&&(Ee.$$scope={dirty:L,ctx:w}),ut.$set(Ee)},i(w){if(!vt){M(s.$$.fragment,w),M(c.$$.fragment,w),M(u.$$.fragment,w),M(f.$$.fragment,w);for(let L=0;L<Nt.length;L+=1)M(ft[L]);M(V.$$.fragment,w),M(A.$$.fragment,w),M(mt.$$.fragment,w),M($.$$.fragment,w),M(ut.$$.fragment,w),vt=!0}},o(w){F(s.$$.fragment,w),F(c.$$.fragment,w),F(u.$$.fragment,w),F(f.$$.fragment,w),ft=ft.filter(Boolean);for(let L=0;L<ft.length;L+=1)F(ft[L]);F(V.$$.fragment,w),F(A.$$.fragment,w),F(mt.$$.fragment,w),F($.$$.fragment,w),F(ut.$$.fragment,w),vt=!1},d(w){w&&(S(t),S(O),S(lt),S(H),S(gt)),it(s),it(c),it(u),it(f),Ts(ft,w),it(V),it(A,w),it(mt,w),it($,w),it(ut,w)}}}const ei="text-color1",ni="text-color2";function Gy(n,t,e){let r,s,i,o,a,c,l,u,h,f,d,y,T,E,m,_,D,z;ae(n,Gc,g=>e(42,E=g)),ae(n,da,g=>e(43,m=g)),ae(n,je,g=>e(44,_=g)),ae(n,$e,g=>e(45,D=g)),ae(n,Jn,g=>e(46,z=g));let V=[],O=[],A=0,lt=[],mt=!1,H=!1,$=!1,gt=!1,ut=null,vt=null,Nt=!1,ft=null,Ae=Ue.AI,w=null,L=!1;const At=g=>dt.sendChannelMessage(JSON.stringify(g)),Xt=parseInt(E.url.searchParams.get("s")||String(En));let Gt=so.indexOf(Xt)>=0?Xt:En;const oe=(g,I,j)=>{if(!(!V[g]||V[g][I]!==!1))return e(0,V[g][I]=j,V),[g,I]},re=(g,I)=>[[g,I],[g-1,I],[g+1,I],[g,I-1],[g,I+1]],Ee=(g,I)=>[[g,I],[g-1,I-1],[g-1,I+1],[g+1,I-1],[g+1,I+1]],It=(g,I)=>[[g,I],[g+1,I-1],[g+2,I-2],[g-1,I+1],[g-2,I+2]],Re=(g,I)=>[[g,I],[g-1,I-1],[g-2,I-2],[g+1,I+1],[g+2,I+2]],rn=(g,I)=>[[g,I],[g,I-1],[g,I-2],[g,I+1],[g,I+2]],oa=(g,I)=>[[g,I],[g-1,I],[g-2,I],[g+1,I],[g+2,I]],Vh=(g,I,j)=>{const Y=[];let W=[];switch(z){case at.AXES:W=re(g,I);break;case at.DIAGONAL:W=Ee(g,I);break;case at.RISING:W=It(g,I);break;case at.FALLING:W=Re(g,I);break;case at.HORIZONTAL:W=rn(g,I);break;case at.VERTICAL:W=oa(g,I);break;default:W=[[g,I]];break}for(let Rt=0;Rt<W.length;Rt++)Y.push(oe(W[Rt][0],W[Rt][1],j));return Y},kh=(g,I)=>{const j=[];for(let Y=0;Y<g.length;Y++){if(!g[Y])continue;const[W,Rt]=g[Y],Lr=Rt+1,on=Rt+2,$n=Rt-1,Kh=Rt-2,la=W+1,ua=W+2,ha=W-1,fa=W-2;V[W][on]===I&&V[W][Lr]!==!1&&j.push([W,Lr]),V[W][Kh]===I&&V[W][$n]!==!1&&j.push([W,$n]),V[ua]&&V[ua][Rt]===I&&V[la][Rt]!==!1&&j.push([la,Rt]),V[fa]&&V[fa][Rt]===I&&V[ha][Rt]!==!1&&j.push([ha,Rt])}return j},Nh=(g,I)=>{const j=kh(g,I);for(let Y=0;Y<j.length;Y++)e(0,V[j[Y][0]][j[Y][1]]=I,V)},Oh=async()=>{e(1,Nt=!0),vt||(vt=new Pf(V));const g=await vt.selectBlock(z);e(1,Nt=!1),g&&ri(g[0],g[1],!0)},ri=async(g,I,j)=>{if(gt)return;const Y=r?"color1":"color2";if(e(30,ut=null),Nh(Vh(g,I,Y),Y),!Object.values(V).some(W=>W.some(Rt=>!Rt))){l&&At({type:"placedBlock",rowIndex:g,colIndex:I}),e(29,gt=!0),setTimeout(Uh,500);return}e(28,A++,A),await jc(),r&&(Zt(Jn,z=D,z),Zt($e,D=_,D),Zt(je,_=l?lt[A+1]:Gr(),_)),j!==!0&&(c?Oh():l&&(At({type:"placedBlock",rowIndex:g,colIndex:I}),e(1,Nt=!0)))},Mh=async({detail:{rowIndex:g,colIndex:I}})=>{if(Cf.is.webMobile&&(!ut||ut[0]!==g||ut[1]!==I)){e(30,ut=[g,I]);return}$=!0,ri(g,I)},aa=()=>{const g=[];for(let I=0;I<Gt;I++){g[I]=[];for(let j=0;j<Gt;j++)g[I][j]=!1}e(3,O=g),e(6,ft=null),e(30,ut=null)},si=()=>{const g=[];for(let I=0;I<Gt;I++){g[I]=[];for(let j=0;j<Gt;j++)g[I][j]=!1}e(0,V=g),aa()},Lh=g=>{let I=0,j=0;for(let Y=0;Y<g.length;Y++)for(let W=0;W<g[Y].length;W++)g[Y][W]==="color1"?I+=es(g,Y,W,"color1"):g[Y][W]==="color2"&&(j+=es(g,Y,W,"color2"));return[I,j]},sn=g=>{si(),e(28,A=0),Zt(Jn,z=at.SINGLE,z),Zt($e,D=Gr(),D),Zt(je,_=Gr(),_),ca(),$=!1,e(29,gt=!1),e(1,Nt=!1),e(30,ut=null),vt?(vt.cancelActiveActions(),vt=null):l&&(w===Wt.CONNECTED_AS_PLAYER1&&e(1,Nt=!0),g||(lt=Wc(Gt*Gt),Zt($e,D=lt[1],D),Zt(je,_=lt[2],_),At({type:"resetGame",turns:lt})))},Fh=({detail:{rowIndex:g,colIndex:I}})=>{let j=[];switch(z){case at.AXES:j=re(g,I);break;case at.DIAGONAL:j=Ee(g,I);break;case at.RISING:j=It(g,I);break;case at.FALLING:j=Re(g,I);break;case at.HORIZONTAL:j=rn(g,I);break;case at.VERTICAL:j=oa(g,I);break}for(let Y=0;Y<j.length;Y++)O[j[Y][0]]!==void 0&&O[j[Y][0]][j[Y][1]]!==void 0&&e(3,O[j[Y][0]][j[Y][1]]=s,O);e(6,ft=[g,I])},xh=async()=>{$&&!gt&&!await Dh("Do you want end the game?")||cf(uf)},Bh=()=>{if(H){ii(),setTimeout(sn,250);return}if(!$||gt){sn();return}e(4,mt=!0)},ca=()=>{e(4,mt=!1)},Uh=()=>{e(5,H=!0)},ii=()=>{e(5,H=!1)},$h=({detail:{size:g,status:I,turns:j}})=>{e(8,Gt=g),e(32,w=I),lt=j,si(),Zt($e,D=j[1],D),Zt(je,_=j[2],_),dt.onstatechange=Y=>{const W=Y.target;(!W||["disconnected","failed"].includes(W.connectionState))&&e(32,w=Wt.DISCONNECTED)},dt.onmessage=({data:Y})=>{try{const{type:W,rowIndex:Rt,colIndex:Lr,turns:on}=JSON.parse(Y);switch(W){case"placedBlock":ri(Rt,Lr,!0),e(1,Nt=!1);break;case"resetGame":{const $n=()=>{sn(!0),on&&(lt=on,Zt($e,D=on[1],D),Zt(je,_=on[2],_))};H?(ii(),setTimeout($n,250)):$n();break}case"left":dt==null||dt.close(),e(32,w=Wt.DISCONNECTED);break;default:break}}catch{dt==null||dt.close(),e(32,w=Wt.DISCONNECTED)}},w===Wt.CONNECTED_AS_PLAYER1&&e(1,Nt=!0)},jh=()=>{e(7,L=!0)},qh=()=>{e(7,L=!1)};Zt(da,m=null,m),si(),qc(()=>{if(E.url.searchParams.get("room"))e(31,Ae=Ue.FRIEND_ONLINE),e(32,w=Wt.CONNECTING);else{const I=parseInt(E.url.searchParams.get("m")||String(Ue.AI));Object.values(Ue).includes(I)&&e(31,Ae=I),Ae===Ue.FRIEND_ONLINE&&e(32,w=Wt.CONNECTING)}sn()}),af(()=>{At({type:"left"}),l&&(dt==null||dt.close())});const zh=()=>{sn()};return n.$$.update=()=>{n.$$.dirty[0]&268435456&&e(35,r=hf(A)),n.$$.dirty[1]&16&&e(16,s=r?"color1":"color2"),n.$$.dirty[1]&16&&e(2,i=r?ei:ni),n.$$.dirty[0]&1&&e(15,o=Lh(V)),n.$$.dirty[0]&536870912&&e(14,a="pt-4"+(gt?" invisible":"")),n.$$.dirty[1]&1&&e(34,c=Ae===Ue.AI),n.$$.dirty[1]&9&&e(33,l=!c&&Ae===Ue.FRIEND_ONLINE),n.$$.dirty[0]&2&&e(13,u="h-full flex flex-col relative"+(Nt?" cursor-wait":"")),n.$$.dirty[0]&4|n.$$.dirty[1]&30&&e(36,h=c&&!r||l&&r&&w===Wt.CONNECTED_AS_PLAYER1||l&&!r&&w===Wt.CONNECTED_AS_PLAYER2?" text-faded":" "+i),n.$$.dirty[1]&32&&e(12,f="font-bold text-center text-sm pb-1"+h),n.$$.dirty[0]&1073741824|n.$$.dirty[1]&30&&e(11,d=ut?"Confirm selection":r?c||l&&w===Wt.CONNECTED_AS_PLAYER2?"Your turn":"Player's 1 turn...":c?"Computer...":l&&w===Wt.CONNECTED_AS_PLAYER1?"Your turn":"Player's 2 turn..."),n.$$.dirty[1]&2&&e(10,y=w===Wt.CONNECTING),n.$$.dirty[1]&6&&e(9,T=l&&w===Wt.DISCONNECTED)},[V,Nt,i,O,mt,H,ft,L,Gt,T,y,d,f,u,a,o,s,Mh,aa,sn,Fh,xh,Bh,ca,ii,$h,jh,qh,A,gt,ut,Ae,w,l,c,r,h,zh]}class cE extends Vn{constructor(t){super(),kn(this,t,Gy,Ky,Dn,{},null,[-1,-1,-1])}}export{cE as component};
