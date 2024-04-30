import{s as Pn,e as B,c as U,b as et,f as S,m as V,i as it,u as un,n as Et,O as Nl,k as le,Q as Ol,q as Ml,z as pe,h as P,o as ps,x as Qr,y as Yr,t as Ve,d as De,a as Y,g as X,l as ie,B as Ll,a6 as Fh,j as _s,p as Zt}from"../chunks/scheduler.Btf-vRGu.js";import{S as bn,i as Vn,t as L,g as Dn,d as q,b as kn,c as at,a as lt,m as ct,e as ut}from"../chunks/index.CcGdqOLA.js";import{I as Ce,e as ke,h as oa}from"../chunks/layout-store.COHUoT5o.js";import{e as dt,c as xh,M as jn,r as Ht,d as Bh,g as Wt,a as Uh,h as Fl,p as Ue}from"../chunks/fontawesome6-icons.Bn73-VjW.js";import{c as $h,a as qh,b as jh,d as zh,e as Kh,f as Gh,g as Hh,R as Wh}from"../chunks/RulesBlock.Be4j0xsi.js";import{w as Zi}from"../chunks/index.NjmGTWo3.js";import{l as Qh,r as Yh,P as xl,B as fn}from"../chunks/dom.CuKMZ9fC.js";import{b as Xh,g as Jh}from"../chunks/entry.BglvYtTI.js";import{r as Zh,h as tf}from"../chunks/strings.CcWzvdCe.js";import{p as Bl}from"../chunks/stores.B65OymIa.js";import{a as to,d as _n}from"../chunks/arrays.BlcEEe38.js";import{c as Ul}from"../chunks/system-store.gywFSGjm.js";const qr=()=>Math.floor(Math.random()*Object.keys(dt).length),ef=n=>!n||!(n%2),jr=n=>{switch(n){case dt.AXES:return Hh;case dt.DIAGONAL:return Gh;case dt.RISING:return Kh;case dt.FALLING:return zh;case dt.HORIZONTAL:return jh;case dt.VERTICAL:return qh;default:return $h}},Xr=(n,t,e,r)=>{if(n[t]===void 0||n[t][e]===void 0)return 0;let s=5;const i=t-1,o=t+1;return(n[i]&&n[i][e]===r||n[o]&&n[o][e]===r)&&s--,(n[t][e+1]===r||n[t][e-1]===r)&&s--,s},$l=n=>{const t=[];t.push(dt.SINGLE);for(let e=1;e<n;e++)t.push(qr());return t},Qn=Zi(dt.SINGLE),$e=Zi(dt.SINGLE),qe=Zi(dt.SINGLE);function aa(n){let t,e,r,s;const i=[rf,nf],o=[];function a(l,c){return l[2]?0:l[1]?1:-1}return~(t=a(n))&&(e=o[t]=i[t](n)),{c(){e&&e.c(),r=pe()},l(l){e&&e.l(l),r=pe()},m(l,c){~t&&o[t].m(l,c),it(l,r,c),s=!0},p(l,c){let u=t;t=a(l),t===u?~t&&o[t].p(l,c):(e&&(Dn(),q(o[u],1,1,()=>{o[u]=null}),kn()),~t?(e=o[t],e?e.p(l,c):(e=o[t]=i[t](l),e.c()),L(e,1),e.m(r.parentNode,r)):e=null)},i(l){s||(L(e),s=!0)},o(l){q(e),s=!1},d(l){l&&S(r),~t&&o[t].d(l)}}}function nf(n){let t,e;return t=new Ce({props:{name:xh,class:n[5]}}),{c(){at(t.$$.fragment)},l(r){lt(t.$$.fragment,r)},m(r,s){ct(t,r,s),e=!0},p(r,s){const i={};s&32&&(i.class=r[5]),t.$set(i)},i(r){e||(L(t.$$.fragment,r),e=!0)},o(r){q(t.$$.fragment,r),e=!1},d(r){ut(t,r)}}}function rf(n){let t,e;return t=new Ce({props:{name:n[3],class:"h-4 w-4 text-black"}}),{c(){at(t.$$.fragment)},l(r){lt(t.$$.fragment,r)},m(r,s){ct(t,r,s),e=!0},p(r,s){const i={};s&8&&(i.name=r[3]),t.$set(i)},i(r){e||(L(t.$$.fragment,r),e=!0)},o(r){q(t.$$.fragment,r),e=!1},d(r){ut(t,r)}}}function sf(n){let t,e,r,s,i=!n[0]&&aa(n);return{c(){t=B("div"),i&&i.c(),this.h()},l(o){t=U(o,"DIV",{role:!0,tabindex:!0,class:!0});var a=et(t);i&&i.l(a),a.forEach(S),this.h()},h(){V(t,"role","button"),V(t,"tabindex","0"),V(t,"class",n[4])},m(o,a){it(o,t,a),i&&i.m(t,null),e=!0,r||(s=[un(t,"click",n[6]),un(t,"mouseenter",n[7]),un(t,"mouseleave",n[8]),un(t,"keypress",Et)],r=!0)},p(o,[a]){o[0]?i&&(Dn(),q(i,1,1,()=>{i=null}),kn()):i?(i.p(o,a),a&1&&L(i,1)):(i=aa(o),i.c(),L(i,1),i.m(t,null)),(!e||a&16)&&V(t,"class",o[4])},i(o){e||(L(i),e=!0)},o(o){q(i),e=!1},d(o){o&&S(t),i&&i.d(),r=!1,Nl(s)}}}function of(n,t,e){let r,s,i,o,a,l,c;le(n,Qn,w=>e(17,c=w));const u=Ol();let h=!1,{hoverCoords:f=null}=t,{disabled:d=!1}=t,{rowIndex:p}=t,{colIndex:v}=t,{selected:m=!1}=t,{selectCandidate:T=!1}=t,{hoverColor:A=""}=t;const k=()=>{e(14,h=!0),setTimeout(()=>{e(14,h=!1)},600)},Q=async()=>{u("click",{rowIndex:p,colIndex:v})},D=()=>{u("enter",{rowIndex:p,colIndex:v})},M=()=>{u("leave",{rowIndex:p,colIndex:v})};return n.$$set=w=>{"hoverCoords"in w&&e(9,f=w.hoverCoords),"disabled"in w&&e(10,d=w.disabled),"rowIndex"in w&&e(11,p=w.rowIndex),"colIndex"in w&&e(12,v=w.colIndex),"selected"in w&&e(0,m=w.selected),"selectCandidate"in w&&e(1,T=w.selectCandidate),"hoverColor"in w&&e(13,A=w.hoverColor)},n.$$.update=()=>{n.$$.dirty&2&&e(5,r="h-3 w-3 opacity-50"+(T==="color1"?" text-color1":" text-color2")),n.$$.dirty&1&&e(15,s=m==="color1"?" bg-color1 sel-color1":m==="color2"?" bg-color2 sel-color2":" bg-gray-600"),n.$$.dirty&8193&&e(16,i=m?"":A==="color1"?" hover:bg-color1":A==="color2"?" hover:bg-color2":" hover:bg-gray-400"),n.$$.dirty&115713&&e(4,o="flex-1 aspect-square text-sm transition-colors duration-300 rounded-sm sm:rounded-md border border-gray-600 bubbly relative cursor-pointer outline-none flex flex-col justify-center items-center bg-opacity-80 hover:bg-opacity-100"+i+s+(m||d?" pointer-events-none":"")+(h?" animate":"")),n.$$.dirty&131072&&e(3,a=jr(c)),n.$$.dirty&6656&&e(2,l=f&&p===f[0]&&v===f[1]),n.$$.dirty&1&&m&&Ml().then(k)},[m,T,l,a,o,r,Q,D,M,f,d,p,v,A,h,s,i,c]}class af extends bn{constructor(t){super(),Vn(this,t,of,sf,Pn,{hoverCoords:9,disabled:10,rowIndex:11,colIndex:12,selected:0,selectCandidate:1,hoverColor:13})}}function la(n,t,e){const r=n.slice();return r[8]=t[e],r}function ca(n,t,e){const r=n.slice();return r[11]=t[e],r[13]=e,r}function ua(n){let t,e;return{c(){t=B("div"),e=Ve(n[13]),this.h()},l(r){t=U(r,"DIV",{class:!0,style:!0});var s=et(t);e=De(s,n[13]),s.forEach(S),this.h()},h(){V(t,"class",cf),V(t,"style",n[2])},m(r,s){it(r,t,s),P(t,e)},p(r,s){s&4&&V(t,"style",r[2])},d(r){r&&S(t)}}}function ha(n){let t,e=ke({length:10}),r=[];for(let s=0;s<e.length;s+=1)r[s]=ua(ca(n,e,s));return{c(){for(let s=0;s<r.length;s+=1)r[s].c();t=pe()},l(s){for(let i=0;i<r.length;i+=1)r[i].l(s);t=pe()},m(s,i){for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(s,i);it(s,t,i)},p(s,i){if(i&4){e=ke({length:10});let o;for(o=0;o<e.length;o+=1){const a=ca(s,e,o);r[o]?r[o].p(a,i):(r[o]=ua(a),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=e.length}},d(s){s&&S(t),ps(r,s)}}}function lf(n){let t,e,r=ke({length:2}),s=[];for(let i=0;i<r.length;i+=1)s[i]=ha(la(n,r,i));return{c(){t=B("div"),e=B("div");for(let i=0;i<s.length;i+=1)s[i].c();this.h()},l(i){t=U(i,"DIV",{class:!0,style:!0});var o=et(t);e=U(o,"DIV",{class:!0,style:!0});var a=et(e);for(let l=0;l<s.length;l+=1)s[l].l(a);a.forEach(S),o.forEach(S),this.h()},h(){V(e,"class","transition-transform duration-500"),V(e,"style",n[0]),V(t,"class",n[1]),V(t,"style",n[2])},m(i,o){it(i,t,o),P(t,e);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(e,null)},p(i,[o]){if(o&4){r=ke({length:2});let a;for(a=0;a<r.length;a+=1){const l=la(i,r,a);s[a]?s[a].p(l,o):(s[a]=ha(l),s[a].c(),s[a].m(e,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=r.length}o&1&&V(e,"style",i[0]),o&2&&V(t,"class",i[1]),o&4&&V(t,"style",i[2])},i:Et,o:Et,d(i){i&&S(t),ps(s,i)}}}const cf="flex flex-col justify-center items-center text-xl";function uf(n,t,e){let r,s,i,{digit:o=0}=t,{height:a=30}=t,{width:l=26}=t,{borderOffset:c=0}=t;return n.$$set=u=>{e(7,t=Qr(Qr({},t),Yr(u))),"digit"in u&&e(3,o=u.digit),"height"in u&&e(4,a=u.height),"width"in u&&e(5,l=u.width),"borderOffset"in u&&e(6,c=u.borderOffset)},n.$$.update=()=>{n.$$.dirty&112&&e(2,r="width: "+(l+c)+"px;height: "+(a+c)+"px"),e(1,s="overflow-hidden"+(t.class?" "+t.class:"")),n.$$.dirty&88&&e(0,i="transform: translateY(-"+o*(a+c)+"px)")},t=Yr(t),[i,s,r,o,a,l,c]}class sn extends bn{constructor(t){super(),Vn(this,t,uf,lf,Pn,{digit:3,height:4,width:5,borderOffset:6})}}function hf(n){let t,e,r,s,i,o,a,l,c,u,h,f,d,p="vs",v,m,T,A,k,Q,D,M,w,mt,Z,$;return r=new sn({props:{digit:n[3][0],class:n[0]}}),a=new sn({props:{digit:n[3][1],class:n[0]}}),h=new sn({props:{digit:n[3][2],class:n[0]}}),T=new sn({props:{digit:n[2][0],class:n[1]}}),D=new sn({props:{digit:n[2][1],class:n[1]}}),Z=new sn({props:{digit:n[2][2],class:n[1]}}),{c(){t=B("div"),e=B("div"),at(r.$$.fragment),s=Y(),i=B("div"),o=Y(),at(a.$$.fragment),l=Y(),c=B("div"),u=Y(),at(h.$$.fragment),f=Y(),d=B("div"),d.textContent=p,v=Y(),m=B("div"),at(T.$$.fragment),A=Y(),k=B("div"),Q=Y(),at(D.$$.fragment),M=Y(),w=B("div"),mt=Y(),at(Z.$$.fragment),this.h()},l(R){t=U(R,"DIV",{class:!0});var F=et(t);e=U(F,"DIV",{class:!0});var K=et(e);lt(r.$$.fragment,K),s=X(K),i=U(K,"DIV",{class:!0}),et(i).forEach(S),o=X(K),lt(a.$$.fragment,K),l=X(K),c=U(K,"DIV",{class:!0}),et(c).forEach(S),u=X(K),lt(h.$$.fragment,K),K.forEach(S),f=X(F),d=U(F,"DIV",{class:!0,"data-svelte-h":!0}),ie(d)!=="svelte-9o293k"&&(d.textContent=p),v=X(F),m=U(F,"DIV",{class:!0});var J=et(m);lt(T.$$.fragment,J),A=X(J),k=U(J,"DIV",{class:!0}),et(k).forEach(S),Q=X(J),lt(D.$$.fragment,J),M=X(J),w=U(J,"DIV",{class:!0}),et(w).forEach(S),mt=X(J),lt(Z.$$.fragment,J),J.forEach(S),F.forEach(S),this.h()},h(){V(i,"class",n[6]),V(c,"class",n[6]),V(e,"class",n[4]),V(d,"class","text-xs text-gray-500"),V(k,"class",n[7]),V(w,"class",n[7]),V(m,"class",n[5]),V(t,"class","flex flex-row gap-3 items-center")},m(R,F){it(R,t,F),P(t,e),ct(r,e,null),P(e,s),P(e,i),P(e,o),ct(a,e,null),P(e,l),P(e,c),P(e,u),ct(h,e,null),P(t,f),P(t,d),P(t,v),P(t,m),ct(T,m,null),P(m,A),P(m,k),P(m,Q),ct(D,m,null),P(m,M),P(m,w),P(m,mt),ct(Z,m,null),$=!0},p(R,[F]){const K={};F&8&&(K.digit=R[3][0]),F&1&&(K.class=R[0]),r.$set(K);const J={};F&8&&(J.digit=R[3][1]),F&1&&(J.class=R[0]),a.$set(J);const It={};F&8&&(It.digit=R[3][2]),F&1&&(It.class=R[0]),h.$set(It);const ht={};F&4&&(ht.digit=R[2][0]),F&2&&(ht.class=R[1]),T.$set(ht);const ne={};F&4&&(ne.digit=R[2][1]),F&2&&(ne.class=R[1]),D.$set(ne);const _={};F&4&&(_.digit=R[2][2]),F&2&&(_.class=R[1]),Z.$set(_)},i(R){$||(L(r.$$.fragment,R),L(a.$$.fragment,R),L(h.$$.fragment,R),L(T.$$.fragment,R),L(D.$$.fragment,R),L(Z.$$.fragment,R),$=!0)},o(R){q(r.$$.fragment,R),q(a.$$.fragment,R),q(h.$$.fragment,R),q(T.$$.fragment,R),q(D.$$.fragment,R),q(Z.$$.fragment,R),$=!1},d(R){R&&S(t),ut(r),ut(a),ut(h),ut(T),ut(D),ut(Z)}}}const fa="border-opacity-30";function ff(n,t,e){let r,s;const i="flex flex-row border-2 rounded-md "+fa,o="border h-[30px] "+fa,a=i+" border-color1",l=i+" border-color2",c=o+" border-color1",u=o+" border-color2";let{score1:h=0}=t,{score2:f=0}=t,{score1Class:d=""}=t,{score2Class:p=""}=t;const v=m=>{if(m<=0)return[0,0,0];if(m>=1e3)return[9,9,9];const T=m%10;m=m/10|0;const A=m%10;return m=m/10|0,[m%10,A,T]};return n.$$set=m=>{"score1"in m&&e(8,h=m.score1),"score2"in m&&e(9,f=m.score2),"score1Class"in m&&e(0,d=m.score1Class),"score2Class"in m&&e(1,p=m.score2Class)},n.$$.update=()=>{n.$$.dirty&256&&e(3,r=v(h)),n.$$.dirty&512&&e(2,s=v(f))},[d,p,s,r,a,l,c,u,h,f]}class ql extends bn{constructor(t){super(),Vn(this,t,ff,hf,Pn,{score1:8,score2:9,score1Class:0,score2Class:1})}}function df(n){let t,e,r="The current sequence is:",s,i,o,a="Current pattern and colour",l,c,u,h,f,d="The pattern to follow",p,v,m,T,A,k="The pattern after that",Q,D,M,w,mt=`<p>* This screen changes with every player&#39;s turn;</p> <p>** Refer to <a href="${Zh}" target="_blank" class="${Qh}">game rules</a> for more details;</p>`,Z;return c=new Ce({props:{name:n[6],class:n[1]}}),v=new Ce({props:{name:n[5],class:n[8]}}),D=new Ce({props:{name:n[4],class:n[8]}}),{c(){t=B("div"),e=B("p"),e.textContent=r,s=Y(),i=B("div"),o=B("p"),o.textContent=a,l=Y(),at(c.$$.fragment),u=Y(),h=B("div"),f=B("p"),f.textContent=d,p=Y(),at(v.$$.fragment),m=Y(),T=B("div"),A=B("p"),A.textContent=k,Q=Y(),at(D.$$.fragment),M=Y(),w=B("div"),w.innerHTML=mt,this.h()},l($){t=U($,"DIV",{class:!0});var R=et(t);e=U(R,"P",{class:!0,"data-svelte-h":!0}),ie(e)!=="svelte-gy8v4h"&&(e.textContent=r),s=X(R),i=U(R,"DIV",{class:!0});var F=et(i);o=U(F,"P",{"data-svelte-h":!0}),ie(o)!=="svelte-1cab0ha"&&(o.textContent=a),l=X(F),lt(c.$$.fragment,F),F.forEach(S),u=X(R),h=U(R,"DIV",{class:!0});var K=et(h);f=U(K,"P",{class:!0,"data-svelte-h":!0}),ie(f)!=="svelte-mtkpbo"&&(f.textContent=d),p=X(K),lt(v.$$.fragment,K),K.forEach(S),m=X(R),T=U(R,"DIV",{class:!0});var J=et(T);A=U(J,"P",{class:!0,"data-svelte-h":!0}),ie(A)!=="svelte-148oewd"&&(A.textContent=k),Q=X(J),lt(D.$$.fragment,J),J.forEach(S),M=X(R),w=U(R,"DIV",{class:!0,"data-svelte-h":!0}),ie(w)!=="svelte-1r8755u"&&(w.innerHTML=mt),R.forEach(S),this.h()},h(){V(e,"class","text-center text-faded"),V(i,"class","flex flex-col items-center justify-center gap-2"),V(f,"class","text-faded"),V(h,"class","flex flex-col items-center justify-center gap-2"),V(A,"class","text-faded"),V(T,"class","flex flex-col items-center justify-center gap-2"),V(w,"class","text-faded text-sm"),V(t,"class","flex flex-col gap-6")},m($,R){it($,t,R),P(t,e),P(t,s),P(t,i),P(i,o),P(i,l),ct(c,i,null),P(t,u),P(t,h),P(h,f),P(h,p),ct(v,h,null),P(t,m),P(t,T),P(T,A),P(T,Q),ct(D,T,null),P(t,M),P(t,w),Z=!0},p($,R){const F={};R&64&&(F.name=$[6]),R&2&&(F.class=$[1]),c.$set(F);const K={};R&32&&(K.name=$[5]),v.$set(K);const J={};R&16&&(J.name=$[4]),D.$set(J)},i($){Z||(L(c.$$.fragment,$),L(v.$$.fragment,$),L(D.$$.fragment,$),Z=!0)},o($){q(c.$$.fragment,$),q(v.$$.fragment,$),q(D.$$.fragment,$),Z=!1},d($){$&&S(t),ut(c),ut(v),ut(D)}}}function mf(n){let t,e,r,s,i,o,a,l,c,u,h;return e=new Ce({props:{name:n[6],class:n[2]}}),s=new Ce({props:{name:n[5],class:n[7]}}),o=new Ce({props:{name:n[4],class:n[7]}}),l=new jn({props:{showing:n[0],hideOk:!0,$$slots:{default:[df]},$$scope:{ctx:n}}}),l.$on("dismiss",n[10]),{c(){t=B("div"),at(e.$$.fragment),r=Y(),at(s.$$.fragment),i=Y(),at(o.$$.fragment),a=Y(),at(l.$$.fragment),this.h()},l(f){t=U(f,"DIV",{role:!0,tabindex:!0,class:!0,title:!0});var d=et(t);lt(e.$$.fragment,d),r=X(d),lt(s.$$.fragment,d),i=X(d),lt(o.$$.fragment,d),d.forEach(S),a=X(f),lt(l.$$.fragment,f),this.h()},h(){V(t,"role","button"),V(t,"tabindex","0"),V(t,"class",n[3]),V(t,"title","Current play sequence")},m(f,d){it(f,t,d),ct(e,t,null),P(t,r),ct(s,t,null),P(t,i),ct(o,t,null),it(f,a,d),ct(l,f,d),c=!0,u||(h=[un(t,"click",n[9]),un(t,"keypress",Et)],u=!0)},p(f,[d]){const p={};d&64&&(p.name=f[6]),d&4&&(p.class=f[2]),e.$set(p);const v={};d&32&&(v.name=f[5]),s.$set(v);const m={};d&16&&(m.name=f[4]),o.$set(m),(!c||d&8)&&V(t,"class",f[3]);const T={};d&1&&(T.showing=f[0]),d&65650&&(T.$$scope={dirty:d,ctx:f}),l.$set(T)},i(f){c||(L(e.$$.fragment,f),L(s.$$.fragment,f),L(o.$$.fragment,f),L(l.$$.fragment,f),c=!0)},o(f){q(e.$$.fragment,f),q(s.$$.fragment,f),q(o.$$.fragment,f),q(l.$$.fragment,f),c=!1},d(f){f&&(S(t),S(a)),ut(e),ut(s),ut(o),ut(l,f),u=!1,Nl(h)}}}const da="h-4 w-4",ma="h-8 w-8";function gf(n,t,e){let r,s,i,o,a,l,c,u,h;le(n,qe,A=>e(12,c=A)),le(n,$e,A=>e(13,u=A)),le(n,Qn,A=>e(14,h=A));const f=da+" text-faded",d=ma+" text-faded";let{color:p}=t,v=!1;const m=()=>{e(0,v=!0)},T=()=>{e(0,v=!1)};return n.$$set=A=>{e(15,t=Qr(Qr({},t),Yr(A))),"color"in A&&e(11,p=A.color)},n.$$.update=()=>{n.$$.dirty&16384&&e(6,r=jr(h)),n.$$.dirty&8192&&e(5,s=jr(u)),n.$$.dirty&4096&&e(4,i=jr(c)),e(3,o="flex flex-row items-center justify-center gap-6"+(t.class?" "+t.class:"")),n.$$.dirty&2048&&e(2,a=da+" "+p),n.$$.dirty&2048&&e(1,l=ma+" "+p)},t=Yr(t),[v,l,a,o,i,s,r,f,d,m,T,p,c,u,h]}class pf extends bn{constructor(t){super(),Vn(this,t,gf,mf,Pn,{color:11})}}let Yn=null;const ga=()=>{Yn||(Yn=(window.navigator.userAgent||window.navigator.vendor||window.opera||"").toLowerCase())},zr={},Nr=(n,t)=>(zr[n]===void 0&&(zr[n]=t()),zr[n]),_f={ua:null,is:{get webMobile(){return Yn===null&&ga(),Nr("webmob",()=>/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|kindle|silk|mobile/i.test(Yn||""))},get webDesktop(){return Yn===null&&ga(),Nr("!webmob",()=>!zr.wm)},get touchAllowed(){return Nr("touch",()=>"ontouchstart"in window)},get mouseAllowed(){return Nr("mouse",()=>matchMedia("(pointer:fine)").matches)}}},pa="color2",yf=(n,t,e,r)=>{let s=Xr(e,n,t,pa);for(let i=0;i<r.length;i++){const[o,a]=r[i];e[o]&&e[o][a]===!1&&(s+=Xr(e,o,a,pa))}return s};class Ef{constructor(t){this.selections=t,this.thinking=!1}cancelActiveActions(){this.requestId=Date.now()}getBenefitSums(t){const e=[];for(let r=0;r<this.selections.length;r++){const s=this.selections[r];for(let i=0;i<s.length;i++)s[i]||e.push([r,i,yf(r,i,this.selections,t(r,i))])}return e.sort(([,,r],[,,s])=>s-r),e}selectSingleBlock(){const t=this.getBenefitSums(()=>[]),e=Math.floor(Math.random()*t.length);return[t[e][0],t[e][1]]}selectInAxes(){const t=this.getBenefitSums((e,r)=>[[e-1,r],[e+1,r],[e,r-1],[e,r+1]]);return[t[0][0],t[0][1]]}selectInDiagonals(){const t=this.getBenefitSums((e,r)=>[[e+1,r+1],[e+1,r-1],[e-1,r-1],[e-1,r+1]]);return[t[0][0],t[0][1]]}selectInHorizontal(){const t=this.getBenefitSums((e,r)=>[[e,r+1],[e,r+2],[e,r-1],[e,r-2]]);return[t[0][0],t[0][1]]}selectInVertical(){const t=this.getBenefitSums((e,r)=>[[e+1,r],[e+2,r],[e-1,r],[e-2,r]]);return[t[0][0],t[0][1]]}selectInRisingDiagonal(){const t=this.getBenefitSums((e,r)=>[[e-1,r+1],[e-2,r+2],[e+1,r-1],[e+2,r-2]]);return[t[0][0],t[0][1]]}selectInFallingDiagonal(){const t=this.getBenefitSums((e,r)=>[[e+1,r+1],[e+2,r+2],[e-1,r-1],[e-2,r-2]]);return[t[0][0],t[0][1]]}selectBlock(t){const e=Date.now();return this.requestId=e,new Promise(r=>{setTimeout(()=>{if(this.requestId!==e){r(null);return}switch(t){case dt.AXES:r(this.selectInAxes());break;case dt.DIAGONAL:r(this.selectInDiagonals());break;case dt.HORIZONTAL:r(this.selectInHorizontal());break;case dt.VERTICAL:r(this.selectInVertical());break;case dt.FALLING:r(this.selectInFallingDiagonal());break;case dt.RISING:r(this.selectInRisingDiagonal());break;default:r(this.selectSingleBlock());break}},1500)})}}const Ti=(...n)=>{console.warn("WARN:",...n)},vf=(...n)=>{console.log("INFO:",...n)};var _a={};/**
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
 */const jl=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Tf=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[e++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[e++],o=n[e++],a=n[e++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[e++],o=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},zl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),r.push(e[u],e[h],e[f],e[d])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(jl(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Tf(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=e[n.charAt(s++)],a=s<n.length?e[n.charAt(s)]:0;++s;const c=s<n.length?e[n.charAt(s)]:64;++s;const h=s<n.length?e[n.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new wf;const f=i<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),h!==64){const p=c<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const If=function(n){const t=jl(n);return zl.encodeByteArray(t,!0)},Jr=function(n){return If(n).replace(/\./g,"")},Af=function(n){try{return zl.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Rf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cf=()=>Rf().__FIREBASE_DEFAULTS__,Sf=()=>{if(typeof process>"u"||typeof _a>"u")return;const n=_a.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Pf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Af(n[1]);return t&&JSON.parse(t)},eo=()=>{try{return Cf()||Sf()||Pf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},bf=n=>{var t,e;return(e=(t=eo())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Vf=n=>{const t=bf(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Kl=()=>{var n;return(n=eo())===null||n===void 0?void 0:n.config};/**
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
 */class Df{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function kf(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Jr(JSON.stringify(e)),Jr(JSON.stringify(o)),""].join(".")}/**
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
 */function Nf(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Of(){var n;const t=(n=eo())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Mf(){return!Of()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Lf(){try{return typeof indexedDB=="object"}catch{return!1}}function Ff(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(e){t(e)}})}/**
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
 */const xf="FirebaseError";class Nn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=xf,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gl.prototype.create)}}class Gl{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Bf(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Nn(s,a,r)}}function Bf(n,t){return n.replace(Uf,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Uf=/\{\$([^}]+)}/g;function Zr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const i=n[s],o=t[s];if(ya(i)&&ya(o)){if(!Zr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function ya(n){return n!==null&&typeof n=="object"}/**
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
 */function Ne(n){return n&&n._delegate?n._delegate:n}class nr{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const je="[DEFAULT]";/**
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
 */class $f{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Df;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jf(t))try{this.getOrInitializeService({instanceIdentifier:je})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=je){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=je){return this.instances.has(t)}getOptions(t=je){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qf(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=je){return this.component?this.component.multipleInstances?t:je:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qf(n){return n===je?void 0:n}function jf(n){return n.instantiationMode==="EAGER"}/**
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
 */class zf{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new $f(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ot;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ot||(ot={}));const Kf={debug:ot.DEBUG,verbose:ot.VERBOSE,info:ot.INFO,warn:ot.WARN,error:ot.ERROR,silent:ot.SILENT},Gf=ot.INFO,Hf={[ot.DEBUG]:"log",[ot.VERBOSE]:"log",[ot.INFO]:"info",[ot.WARN]:"warn",[ot.ERROR]:"error"},Wf=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Hf[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Hl{constructor(t){this.name=t,this._logLevel=Gf,this._logHandler=Wf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ot))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Kf[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ot.DEBUG,...t),this._logHandler(this,ot.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ot.VERBOSE,...t),this._logHandler(this,ot.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ot.INFO,...t),this._logHandler(this,ot.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ot.WARN,...t),this._logHandler(this,ot.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ot.ERROR,...t),this._logHandler(this,ot.ERROR,...t)}}const Qf=(n,t)=>t.some(e=>n instanceof e);let Ea,va;function Yf(){return Ea||(Ea=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xf(){return va||(va=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wl=new WeakMap,wi=new WeakMap,Ql=new WeakMap,ni=new WeakMap,no=new WeakMap;function Jf(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{e(Se(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Wl.set(e,n)}).catch(()=>{}),no.set(t,n),t}function Zf(n){if(wi.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{e(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});wi.set(n,t)}let Ii={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return wi.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ql.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Se(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function td(n){Ii=n(Ii)}function ed(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ri(this),t,...e);return Ql.set(r,t.sort?t.sort():[t]),Se(r)}:Xf().includes(n)?function(...t){return n.apply(ri(this),t),Se(Wl.get(this))}:function(...t){return Se(n.apply(ri(this),t))}}function nd(n){return typeof n=="function"?ed(n):(n instanceof IDBTransaction&&Zf(n),Qf(n,Yf())?new Proxy(n,Ii):n)}function Se(n){if(n instanceof IDBRequest)return Jf(n);if(ni.has(n))return ni.get(n);const t=nd(n);return t!==n&&(ni.set(n,t),no.set(t,n)),t}const ri=n=>no.get(n);function rd(n,t,{blocked:e,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,t),a=Se(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Se(o.result),l.oldVersion,l.newVersion,Se(o.transaction),l)}),e&&o.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const sd=["get","getKey","getAll","getAllKeys","count"],id=["put","add","delete","clear"],si=new Map;function Ta(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(si.get(t))return si.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=id.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||sd.includes(e)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[e](...a),s&&l.done]))[0]};return si.set(t,i),i}td(n=>({...n,get:(t,e,r)=>Ta(t,e)||n.get(t,e,r),has:(t,e)=>!!Ta(t,e)||n.has(t,e)}));/**
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
 */class od{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ad(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function ad(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ai="@firebase/app",wa="0.10.2";/**
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
 */const We=new Hl("@firebase/app"),ld="@firebase/app-compat",cd="@firebase/analytics-compat",ud="@firebase/analytics",hd="@firebase/app-check-compat",fd="@firebase/app-check",dd="@firebase/auth",md="@firebase/auth-compat",gd="@firebase/database",pd="@firebase/database-compat",_d="@firebase/functions",yd="@firebase/functions-compat",Ed="@firebase/installations",vd="@firebase/installations-compat",Td="@firebase/messaging",wd="@firebase/messaging-compat",Id="@firebase/performance",Ad="@firebase/performance-compat",Rd="@firebase/remote-config",Cd="@firebase/remote-config-compat",Sd="@firebase/storage",Pd="@firebase/storage-compat",bd="@firebase/firestore",Vd="@firebase/firestore-compat",Dd="firebase",kd="10.11.1";/**
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
 */const Ri="[DEFAULT]",Nd={[Ai]:"fire-core",[ld]:"fire-core-compat",[ud]:"fire-analytics",[cd]:"fire-analytics-compat",[fd]:"fire-app-check",[hd]:"fire-app-check-compat",[dd]:"fire-auth",[md]:"fire-auth-compat",[gd]:"fire-rtdb",[pd]:"fire-rtdb-compat",[_d]:"fire-fn",[yd]:"fire-fn-compat",[Ed]:"fire-iid",[vd]:"fire-iid-compat",[Td]:"fire-fcm",[wd]:"fire-fcm-compat",[Id]:"fire-perf",[Ad]:"fire-perf-compat",[Rd]:"fire-rc",[Cd]:"fire-rc-compat",[Sd]:"fire-gcs",[Pd]:"fire-gcs-compat",[bd]:"fire-fst",[Vd]:"fire-fst-compat","fire-js":"fire-js",[Dd]:"fire-js-all"};/**
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
 */const ts=new Map,Od=new Map,Ci=new Map;function Ia(n,t){try{n.container.addComponent(t)}catch(e){We.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function es(n){const t=n.name;if(Ci.has(t))return We.debug(`There were multiple attempts to register component ${t}.`),!1;Ci.set(t,n);for(const e of ts.values())Ia(e,n);for(const e of Od.values())Ia(e,n);return!0}function Md(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Ld={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pe=new Gl("app","Firebase",Ld);/**
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
 */class Fd{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pe.create("app-deleted",{appName:this._name})}}/**
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
 */const xd=kd;function Yl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ri,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Pe.create("bad-app-name",{appName:String(s)});if(e||(e=Kl()),!e)throw Pe.create("no-options");const i=ts.get(s);if(i){if(Zr(e,i.options)&&Zr(r,i.config))return i;throw Pe.create("duplicate-app",{appName:s})}const o=new zf(s);for(const l of Ci.values())o.addComponent(l);const a=new Fd(e,r,o);return ts.set(s,a),a}function Bd(n=Ri){const t=ts.get(n);if(!t&&n===Ri&&Kl())return Yl();if(!t)throw Pe.create("no-app",{appName:n});return t}function dn(n,t,e){var r;let s=(r=Nd[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),We.warn(a.join(" "));return}es(new nr(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Ud="firebase-heartbeat-database",$d=1,rr="firebase-heartbeat-store";let ii=null;function Xl(){return ii||(ii=rd(Ud,$d,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(rr)}catch(e){console.warn(e)}}}}).catch(n=>{throw Pe.create("idb-open",{originalErrorMessage:n.message})})),ii}async function qd(n){try{const e=(await Xl()).transaction(rr),r=await e.objectStore(rr).get(Jl(n));return await e.done,r}catch(t){if(t instanceof Nn)We.warn(t.message);else{const e=Pe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});We.warn(e.message)}}}async function Aa(n,t){try{const r=(await Xl()).transaction(rr,"readwrite");await r.objectStore(rr).put(t,Jl(n)),await r.done}catch(e){if(e instanceof Nn)We.warn(e.message);else{const r=Pe.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});We.warn(r.message)}}}function Jl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const jd=1024,zd=30*24*60*60*1e3;class Kd{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Hd(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ra();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=zd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ra(),{heartbeatsToSend:r,unsentEntries:s}=Gd(this._heartbeatsCache.heartbeats),i=Jr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ra(){return new Date().toISOString().substring(0,10)}function Gd(n,t=jd){const e=[];let r=n.slice();for(const s of n){const i=e.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ca(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Ca(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Hd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lf()?Ff().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await qd(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Aa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Aa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ca(n){return Jr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Wd(n){es(new nr("platform-logger",t=>new od(t),"PRIVATE")),es(new nr("heartbeat",t=>new Kd(t),"PRIVATE")),dn(Ai,wa,n),dn(Ai,wa,"esm2017"),dn("fire-js","")}Wd("");var Qd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},C,ro=ro||{},z=Qd||self;function ys(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function Es(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function Yd(n){return Object.prototype.hasOwnProperty.call(n,oi)&&n[oi]||(n[oi]=++Xd)}var oi="closure_uid_"+(1e9*Math.random()>>>0),Xd=0;function Jd(n,t,e){return n.call.apply(n.bind,arguments)}function Zd(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),n.apply(t,s)}}return function(){return n.apply(t,arguments)}}function jt(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?jt=Jd:jt=Zd,jt.apply(null,arguments)}function Or(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function Nt(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Fe(){this.s=this.s,this.o=this.o}var tm=0;Fe.prototype.s=!1;Fe.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),tm!=0)&&Yd(this)};Fe.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Zl=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function so(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function Sa(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(ys(r)){const s=n.length||0,i=r.length||0;n.length=s+i;for(let o=0;o<i;o++)n[s+o]=r[o]}else n.push(r)}}function zt(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}zt.prototype.h=function(){this.defaultPrevented=!0};var em=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const e=()=>{};z.addEventListener("test",e,t),z.removeEventListener("test",e,t)}catch{}return n}();function sr(n){return/^[\s\xa0]*$/.test(n)}function vs(){var n=z.navigator;return n&&(n=n.userAgent)?n:""}function ce(n){return vs().indexOf(n)!=-1}function io(n){return io[" "](n),n}io[" "]=function(){};function nm(n,t){var e=Qm;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var rm=ce("Opera"),yn=ce("Trident")||ce("MSIE"),tc=ce("Edge"),Si=tc||yn,ec=ce("Gecko")&&!(vs().toLowerCase().indexOf("webkit")!=-1&&!ce("Edge"))&&!(ce("Trident")||ce("MSIE"))&&!ce("Edge"),sm=vs().toLowerCase().indexOf("webkit")!=-1&&!ce("Edge");function nc(){var n=z.document;return n?n.documentMode:void 0}var Pi;t:{var ai="",li=function(){var n=vs();if(ec)return/rv:([^\);]+)(\)|;)/.exec(n);if(tc)return/Edge\/([\d\.]+)/.exec(n);if(yn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(sm)return/WebKit\/(\S+)/.exec(n);if(rm)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(li&&(ai=li?li[1]:""),yn){var ci=nc();if(ci!=null&&ci>parseFloat(ai)){Pi=String(ci);break t}}Pi=ai}var bi;if(z.document&&yn){var Pa=nc();bi=Pa||parseInt(Pi,10)||void 0}else bi=void 0;var im=bi;function ir(n,t){if(zt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(ec){t:{try{io(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:om[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&ir.$.h.call(this)}}Nt(ir,zt);var om={2:"touch",3:"pen",4:"mouse"};ir.prototype.h=function(){ir.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Ts="closure_listenable_"+(1e6*Math.random()|0),am=0;function lm(n,t,e,r,s){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=s,this.key=++am,this.fa=this.ia=!1}function ws(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function oo(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function cm(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function rc(n){const t={};for(const e in n)t[e]=n[e];return t}const ba="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sc(n,t){let e,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(e in r)n[e]=r[e];for(let i=0;i<ba.length;i++)e=ba[i],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function Is(n){this.src=n,this.g={},this.h=0}Is.prototype.add=function(n,t,e,r,s){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=Di(n,t,r,s);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new lm(t,this.src,i,!!r,s),t.ia=e,n.push(t)),t};function Vi(n,t){var e=t.type;if(e in n.g){var r=n.g[e],s=Zl(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ws(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function Di(n,t,e,r){for(var s=0;s<n.length;++s){var i=n[s];if(!i.fa&&i.listener==t&&i.capture==!!e&&i.la==r)return s}return-1}var ao="closure_lm_"+(1e6*Math.random()|0),ui={};function ic(n,t,e,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)ic(n,t[i],e,r,s);return null}return e=lc(e),n&&n[Ts]?n.O(t,e,Es(r)?!!r.capture:!!r,s):um(n,t,e,!1,r,s)}function um(n,t,e,r,s,i){if(!t)throw Error("Invalid event type");var o=Es(s)?!!s.capture:!!s,a=co(n);if(a||(n[ao]=a=new Is(n)),e=a.add(t,e,r,o,i),e.proxy)return e;if(r=hm(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)em||(s=o),s===void 0&&(s=!1),n.addEventListener(t.toString(),r,s);else if(n.attachEvent)n.attachEvent(ac(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function hm(){function n(e){return t.call(n.src,n.listener,e)}const t=fm;return n}function oc(n,t,e,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)oc(n,t[i],e,r,s);else r=Es(r)?!!r.capture:!!r,e=lc(e),n&&n[Ts]?(n=n.i,t=String(t).toString(),t in n.g&&(i=n.g[t],e=Di(i,e,r,s),-1<e&&(ws(i[e]),Array.prototype.splice.call(i,e,1),i.length==0&&(delete n.g[t],n.h--)))):n&&(n=co(n))&&(t=n.g[t.toString()],n=-1,t&&(n=Di(t,e,r,s)),(e=-1<n?t[n]:null)&&lo(e))}function lo(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[Ts])Vi(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(ac(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=co(t))?(Vi(e,n),e.h==0&&(e.src=null,t[ao]=null)):ws(n)}}}function ac(n){return n in ui?ui[n]:ui[n]="on"+n}function fm(n,t){if(n.fa)n=!0;else{t=new ir(t,this);var e=n.listener,r=n.la||n.src;n.ia&&lo(n),n=e.call(r,t)}return n}function co(n){return n=n[ao],n instanceof Is?n:null}var hi="__closure_events_fn_"+(1e9*Math.random()>>>0);function lc(n){return typeof n=="function"?n:(n[hi]||(n[hi]=function(t){return n.handleEvent(t)}),n[hi])}function kt(){Fe.call(this),this.i=new Is(this),this.S=this,this.J=null}Nt(kt,Fe);kt.prototype[Ts]=!0;kt.prototype.removeEventListener=function(n,t,e,r){oc(this,n,t,e,r)};function xt(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new zt(t,n);else if(t instanceof zt)t.target=t.target||n;else{var s=t;t=new zt(r,n),sc(t,s)}if(s=!0,e)for(var i=e.length-1;0<=i;i--){var o=t.g=e[i];s=Mr(o,r,!0,t)&&s}if(o=t.g=n,s=Mr(o,r,!0,t)&&s,s=Mr(o,r,!1,t)&&s,e)for(i=0;i<e.length;i++)o=t.g=e[i],s=Mr(o,r,!1,t)&&s}kt.prototype.N=function(){if(kt.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)ws(e[r]);delete n.g[t],n.h--}}this.J=null};kt.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};kt.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function Mr(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==e){var a=o.listener,l=o.la||o.src;o.ia&&Vi(n.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var uo=z.JSON.stringify;class dm{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function mm(){var n=ho;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class gm{constructor(){this.h=this.g=null}add(t,e){const r=cc.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var cc=new dm(()=>new pm,n=>n.reset());class pm{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function _m(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function ym(n){z.setTimeout(()=>{throw n},0)}let or,ar=!1,ho=new gm,uc=()=>{const n=z.Promise.resolve(void 0);or=()=>{n.then(Em)}};var Em=()=>{for(var n;n=mm();){try{n.h.call(n.g)}catch(e){ym(e)}var t=cc;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}ar=!1};function As(n,t){kt.call(this),this.h=n||1,this.g=t||z,this.j=jt(this.qb,this),this.l=Date.now()}Nt(As,kt);C=As.prototype;C.ga=!1;C.T=null;C.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),xt(this,"tick"),this.ga&&(fo(this),this.start()))}};C.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function fo(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}C.N=function(){As.$.N.call(this),fo(this),delete this.g};function mo(n,t,e){if(typeof n=="function")e&&(n=jt(n,e));else if(n&&typeof n.handleEvent=="function")n=jt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:z.setTimeout(n,t||0)}function hc(n){n.g=mo(()=>{n.g=null,n.i&&(n.i=!1,hc(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class vm extends Fe{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:hc(this)}N(){super.N(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function lr(n){Fe.call(this),this.h=n,this.g={}}Nt(lr,Fe);var Va=[];function fc(n,t,e,r){Array.isArray(e)||(e&&(Va[0]=e.toString()),e=Va);for(var s=0;s<e.length;s++){var i=ic(t,e[s],r||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function dc(n){oo(n.g,function(t,e){this.g.hasOwnProperty(e)&&lo(t)},n),n.g={}}lr.prototype.N=function(){lr.$.N.call(this),dc(this)};lr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Rs(){this.g=!0}Rs.prototype.Ea=function(){this.g=!1};function Tm(n,t,e,r,s,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+e+`
`+o})}function wm(n,t,e,r,s,i,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+e+`
`+i+" "+o})}function hn(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+Am(n,e)+(r?" "+r:"")})}function Im(n,t){n.info(function(){return"TIMEOUT: "+t})}Rs.prototype.info=function(){};function Am(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return uo(e)}catch{return t}}var Je={},Da=null;function Cs(){return Da=Da||new kt}Je.Ta="serverreachability";function mc(n){zt.call(this,Je.Ta,n)}Nt(mc,zt);function cr(n){const t=Cs();xt(t,new mc(t))}Je.STAT_EVENT="statevent";function gc(n,t){zt.call(this,Je.STAT_EVENT,n),this.stat=t}Nt(gc,zt);function Qt(n){const t=Cs();xt(t,new gc(t,n))}Je.Ua="timingevent";function pc(n,t){zt.call(this,Je.Ua,n),this.size=t}Nt(pc,zt);function yr(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){n()},t)}var Ss={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},_c={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function go(){}go.prototype.h=null;function ka(n){return n.h||(n.h=n.i())}function yc(){}var Er={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function po(){zt.call(this,"d")}Nt(po,zt);function _o(){zt.call(this,"c")}Nt(_o,zt);var ki;function Ps(){}Nt(Ps,go);Ps.prototype.g=function(){return new XMLHttpRequest};Ps.prototype.i=function(){return{}};ki=new Ps;function vr(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new lr(this),this.P=Rm,n=Si?125:void 0,this.V=new As(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ec}function Ec(){this.i=null,this.g="",this.h=!1}var Rm=45e3,vc={},Ni={};C=vr.prototype;C.setTimeout=function(n){this.P=n};function Oi(n,t,e){n.L=1,n.A=Vs(Te(t)),n.u=e,n.S=!0,Tc(n,null)}function Tc(n,t){n.G=Date.now(),Tr(n),n.B=Te(n.A);var e=n.B,r=n.W;Array.isArray(r)||(r=[String(r)]),bc(e.i,"t",r),n.o=0,e=n.l.J,n.h=new Ec,n.g=Yc(n.l,e?t:null,!n.u),0<n.O&&(n.M=new vm(jt(n.Pa,n,n.g),n.O)),fc(n.U,n.g,"readystatechange",n.nb),t=n.I?rc(n.I):{},n.u?(n.v||(n.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,t)):(n.v="GET",n.g.ha(n.B,n.v,null,t)),cr(),Tm(n.j,n.v,n.B,n.m,n.W,n.u)}C.nb=function(n){n=n.target;const t=this.M;t&&ue(n)==3?t.l():this.Pa(n)};C.Pa=function(n){try{if(n==this.g)t:{const u=ue(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Si||this.g&&(this.h.h||this.g.ja()||La(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?cr(3):cr(2)),bs(this);var e=this.g.da();this.ca=e;e:if(wc(this)){var r=La(this.g);n="";var s=r.length,i=ue(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ze(this),Xn(this);var o="";break e}this.h.i=new z.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=n,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,wm(this.j,this.v,this.B,this.m,this.W,u,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!sr(a)){var c=a;break e}}c=null}if(e=c)hn(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mi(this,e);else{this.i=!1,this.s=3,Qt(12),ze(this),Xn(this);break t}}this.S?(Ic(this,u,o),Si&&this.i&&u==3&&(fc(this.U,this.V,"tick",this.mb),this.V.start())):(hn(this.j,this.m,o,null),Mi(this,o)),u==4&&ze(this),this.i&&!this.J&&(u==4?Gc(this.l,this):(this.i=!1,Tr(this)))}else Gm(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.s=3,Qt(12)):(this.s=0,Qt(13)),ze(this),Xn(this)}}}catch{}finally{}};function wc(n){return n.g?n.v=="GET"&&n.L!=2&&n.l.Ha:!1}function Ic(n,t,e){let r=!0,s;for(;!n.J&&n.o<e.length;)if(s=Cm(n,e),s==Ni){t==4&&(n.s=4,Qt(14),r=!1),hn(n.j,n.m,null,"[Incomplete Response]");break}else if(s==vc){n.s=4,Qt(15),hn(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else hn(n.j,n.m,s,null),Mi(n,s);wc(n)&&n.o!=0&&(n.h.g=n.h.g.slice(n.o),n.o=0),t!=4||e.length!=0||n.h.h||(n.s=1,Qt(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),Io(t),t.M=!0,Qt(11))):(hn(n.j,n.m,e,"[Invalid Chunked Response]"),ze(n),Xn(n))}C.mb=function(){if(this.g){var n=ue(this.g),t=this.g.ja();this.o<t.length&&(bs(this),Ic(this,n,t),this.i&&n!=4&&Tr(this))}};function Cm(n,t){var e=n.o,r=t.indexOf(`
`,e);return r==-1?Ni:(e=Number(t.substring(e,r)),isNaN(e)?vc:(r+=1,r+e>t.length?Ni:(t=t.slice(r,r+e),n.o=r+e,t)))}C.cancel=function(){this.J=!0,ze(this)};function Tr(n){n.Y=Date.now()+n.P,Ac(n,n.P)}function Ac(n,t){if(n.C!=null)throw Error("WatchDog timer not null");n.C=yr(jt(n.lb,n),t)}function bs(n){n.C&&(z.clearTimeout(n.C),n.C=null)}C.lb=function(){this.C=null;const n=Date.now();0<=n-this.Y?(Im(this.j,this.B),this.L!=2&&(cr(),Qt(17)),ze(this),this.s=2,Xn(this)):Ac(this,this.Y-n)};function Xn(n){n.l.H==0||n.J||Gc(n.l,n)}function ze(n){bs(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,fo(n.V),dc(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function Mi(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||Li(e.i,n))){if(!n.K&&Li(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)ss(e),Ns(e);else break t;wo(e),Qt(18)}}else e.Fa=s[1],0<e.Fa-e.V&&37500>s[2]&&e.G&&e.A==0&&!e.v&&(e.v=yr(jt(e.ib,e),6e3));if(1>=kc(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else Ke(e,11)}else if((n.K||e.g==n)&&ss(e),!sr(t))for(s=e.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(e.V=c[0],c=c[1],e.H==2)if(c[0]=="c"){e.K=c[1],e.pa=c[2];const u=c[3];u!=null&&(e.ra=u,e.l.info("VER="+e.ra));const h=c[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const d=n.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=r.i;i.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(yo(i,i.h),i.h=null))}if(r.F){const v=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,yt(r.I,r.F,v))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=Qc(r,r.J?r.pa:null,r.Y),o.K){Nc(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(bs(a),Tr(a)),r.g=o}else zc(r);0<e.j.length&&Os(e)}else c[0]!="stop"&&c[0]!="close"||Ke(e,7);else e.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ke(e,7):To(e):c[0]!="noop"&&e.h&&e.h.Aa(c),e.A=0)}}cr(4)}catch{}}function Sm(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(ys(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function Pm(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(ys(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function Rc(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(ys(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=Pm(n),r=Sm(n),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],e&&e[i],n)}var Cc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bm(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),s=null;if(0<=r){var i=n[e].substring(0,r);s=n[e].substring(r+1)}else i=n[e];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function He(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof He){this.h=n.h,ns(this,n.j),this.s=n.s,this.g=n.g,rs(this,n.m),this.l=n.l;var t=n.i,e=new ur;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),Na(this,e),this.o=n.o}else n&&(t=String(n).match(Cc))?(this.h=!1,ns(this,t[1]||"",!0),this.s=zn(t[2]||""),this.g=zn(t[3]||"",!0),rs(this,t[4]),this.l=zn(t[5]||"",!0),Na(this,t[6]||"",!0),this.o=zn(t[7]||"")):(this.h=!1,this.i=new ur(null,this.h))}He.prototype.toString=function(){var n=[],t=this.j;t&&n.push(Kn(t,Oa,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(Kn(t,Oa,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(Kn(e,e.charAt(0)=="/"?km:Dm,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",Kn(e,Om)),n.join("")};function Te(n){return new He(n)}function ns(n,t,e){n.j=e?zn(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function rs(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function Na(n,t,e){t instanceof ur?(n.i=t,Mm(n.i,n.h)):(e||(t=Kn(t,Nm)),n.i=new ur(t,n.h))}function yt(n,t,e){n.i.set(t,e)}function Vs(n){return yt(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function zn(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Kn(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,Vm),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Vm(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Oa=/[#\/\?@]/g,Dm=/[#\?:]/g,km=/[#\?]/g,Nm=/[#\?@]/g,Om=/#/g;function ur(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function xe(n){n.g||(n.g=new Map,n.h=0,n.i&&bm(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}C=ur.prototype;C.add=function(n,t){xe(this),this.i=null,n=On(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function Sc(n,t){xe(n),t=On(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function Pc(n,t){return xe(n),t=On(n,t),n.g.has(t)}C.forEach=function(n,t){xe(this),this.g.forEach(function(e,r){e.forEach(function(s){n.call(t,s,r,this)},this)},this)};C.ta=function(){xe(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const s=n[r];for(let i=0;i<s.length;i++)e.push(t[r])}return e};C.Z=function(n){xe(this);let t=[];if(typeof n=="string")Pc(this,n)&&(t=t.concat(this.g.get(On(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};C.set=function(n,t){return xe(this),this.i=null,n=On(this,n),Pc(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};C.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function bc(n,t,e){Sc(n,t),0<e.length&&(n.i=null,n.g.set(On(n,t),so(e)),n.h+=e.length)}C.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),n.push(s)}}return this.i=n.join("&")};function On(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function Mm(n,t){t&&!n.j&&(xe(n),n.i=null,n.g.forEach(function(e,r){var s=r.toLowerCase();r!=s&&(Sc(this,r),bc(this,s,e))},n)),n.j=t}var Lm=class{constructor(n,t){this.g=n,this.map=t}};function Vc(n){this.l=n||Fm,z.PerformanceNavigationTiming?(n=z.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(z.g&&z.g.Ka&&z.g.Ka()&&z.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Fm=10;function Dc(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function kc(n){return n.h?1:n.g?n.g.size:0}function Li(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function yo(n,t){n.g?n.g.add(t):n.h=t}function Nc(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}Vc.prototype.cancel=function(){if(this.i=Oc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Oc(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return so(n.i)}var xm=class{stringify(n){return z.JSON.stringify(n,void 0)}parse(n){return z.JSON.parse(n,void 0)}};function Bm(){this.g=new xm}function Um(n,t,e){const r=e||"";try{Rc(n,function(s,i){let o=s;Es(s)&&(o=uo(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function $m(n,t){const e=new Rs;if(z.Image){const r=new Image;r.onload=Or(Lr,e,r,"TestLoadImage: loaded",!0,t),r.onerror=Or(Lr,e,r,"TestLoadImage: error",!1,t),r.onabort=Or(Lr,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=Or(Lr,e,r,"TestLoadImage: timeout",!1,t),z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function Lr(n,t,e,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function wr(n){this.l=n.ec||null,this.j=n.ob||!1}Nt(wr,go);wr.prototype.g=function(){return new Ds(this.l,this.j)};wr.prototype.i=function(n){return function(){return n}}({});function Ds(n,t){kt.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=Eo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Nt(Ds,kt);var Eo=0;C=Ds.prototype;C.open=function(n,t){if(this.readyState!=Eo)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,hr(this)};C.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||z).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};C.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ir(this)),this.readyState=Eo};C.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,hr(this)),this.g&&(this.readyState=3,hr(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Mc(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Mc(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}C.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?Ir(this):hr(this),this.readyState==3&&Mc(this)}};C.Za=function(n){this.g&&(this.response=this.responseText=n,Ir(this))};C.Ya=function(n){this.g&&(this.response=n,Ir(this))};C.ka=function(){this.g&&Ir(this)};function Ir(n){n.readyState=4,n.l=null,n.j=null,n.A=null,hr(n)}C.setRequestHeader=function(n,t){this.v.append(n,t)};C.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};C.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function hr(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Ds.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var qm=z.JSON.parse;function wt(n){kt.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Lc,this.L=this.M=!1}Nt(wt,kt);var Lc="",jm=/^https?$/i,zm=["POST","PUT"];C=wt.prototype;C.Oa=function(n){this.M=n};C.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ki.g(),this.C=this.u?ka(this.u):ka(ki),this.g.onreadystatechange=jt(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(i){Ma(this,i);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)e.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())e.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(i=>i.toLowerCase()=="content-type"),s=z.FormData&&n instanceof z.FormData,!(0<=Zl(zm,t))||r||s||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of e)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Bc(this),0<this.B&&((this.L=Km(this.g))?(this.g.timeout=this.B,this.g.ontimeout=jt(this.ua,this)):this.A=mo(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){Ma(this,i)}};function Km(n){return yn&&typeof n.timeout=="number"&&n.ontimeout!==void 0}C.ua=function(){typeof ro<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xt(this,"timeout"),this.abort(8))};function Ma(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,Fc(n),ks(n)}function Fc(n){n.F||(n.F=!0,xt(n,"complete"),xt(n,"error"))}C.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,xt(this,"complete"),xt(this,"abort"),ks(this))};C.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ks(this,!0)),wt.$.N.call(this)};C.La=function(){this.s||(this.G||this.v||this.l?xc(this):this.kb())};C.kb=function(){xc(this)};function xc(n){if(n.h&&typeof ro<"u"&&(!n.C[1]||ue(n)!=4||n.da()!=2)){if(n.v&&ue(n)==4)mo(n.La,0,n);else if(xt(n,"readystatechange"),ue(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var s=String(n.I).match(Cc)[1]||null;!s&&z.self&&z.self.location&&(s=z.self.location.protocol.slice(0,-1)),r=!jm.test(s?s.toLowerCase():"")}e=r}if(e)xt(n,"complete"),xt(n,"success");else{n.m=6;try{var i=2<ue(n)?n.g.statusText:""}catch{i=""}n.j=i+" ["+n.da()+"]",Fc(n)}}finally{ks(n)}}}}function ks(n,t){if(n.g){Bc(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||xt(n,"ready");try{e.onreadystatechange=r}catch{}}}function Bc(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(z.clearTimeout(n.A),n.A=null)}C.isActive=function(){return!!this.g};function ue(n){return n.g?n.g.readyState:0}C.da=function(){try{return 2<ue(this)?this.g.status:-1}catch{return-1}};C.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};C.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),qm(t)}};function La(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Lc:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Gm(n){const t={};n=(n.g&&2<=ue(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(sr(n[r]))continue;var e=_m(n[r]);const s=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const i=t[s]||[];t[s]=i,i.push(e)}cm(t,function(r){return r.join(", ")})}C.Ia=function(){return this.m};C.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Uc(n){let t="";return oo(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function vo(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=Uc(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):yt(n,t,e))}function Un(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function $c(n){this.Ga=0,this.j=[],this.l=new Rs,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Un("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Un("baseRetryDelayMs",5e3,n),this.hb=Un("retryDelaySeedMs",1e4,n),this.eb=Un("forwardChannelMaxRetries",2,n),this.xa=Un("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Vc(n&&n.concurrentRequestLimit),this.Ja=new Bm,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}C=$c.prototype;C.ra=8;C.H=1;function To(n){if(qc(n),n.H==3){var t=n.W++,e=Te(n.I);if(yt(e,"SID",n.K),yt(e,"RID",t),yt(e,"TYPE","terminate"),Ar(n,e),t=new vr(n,n.l,t),t.L=2,t.A=Vs(Te(e)),e=!1,z.navigator&&z.navigator.sendBeacon)try{e=z.navigator.sendBeacon(t.A.toString(),"")}catch{}!e&&z.Image&&(new Image().src=t.A,e=!0),e||(t.g=Yc(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Tr(t)}Wc(n)}function Ns(n){n.g&&(Io(n),n.g.cancel(),n.g=null)}function qc(n){Ns(n),n.u&&(z.clearTimeout(n.u),n.u=null),ss(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&z.clearTimeout(n.m),n.m=null)}function Os(n){if(!Dc(n.i)&&!n.m){n.m=!0;var t=n.Na;or||uc(),ar||(or(),ar=!0),ho.add(t,n),n.C=0}}function Hm(n,t){return kc(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=yr(jt(n.Na,n,t),Hc(n,n.C)),n.C++,!0)}C.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const s=new vr(this,this.l,n);let i=this.s;if(this.U&&(i?(i=rc(i),sc(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=jc(this,s,t),e=Te(this.I),yt(e,"RID",n),yt(e,"CVER",22),this.F&&yt(e,"X-HTTP-Session-Id",this.F),Ar(this,e),i&&(this.O?t="headers="+encodeURIComponent(String(Uc(i)))+"&"+t:this.o&&vo(e,this.o,i)),yo(this.i,s),this.bb&&yt(e,"TYPE","init"),this.P?(yt(e,"$req",t),yt(e,"SID","null"),s.aa=!0,Oi(s,e,null)):Oi(s,e,t),this.H=2}}else this.H==3&&(n?Fa(this,n):this.j.length==0||Dc(this.i)||Fa(this))};function Fa(n,t){var e;t?e=t.m:e=n.W++;const r=Te(n.I);yt(r,"SID",n.K),yt(r,"RID",e),yt(r,"AID",n.V),Ar(n,r),n.o&&n.s&&vo(r,n.o,n.s),e=new vr(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=jc(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),yo(n.i,e),Oi(e,r,t)}function Ar(n,t){n.na&&oo(n.na,function(e,r){yt(t,r,e)}),n.h&&Rc({},function(e,r){yt(t,r,e)})}function jc(n,t,e){e=Math.min(n.j.length,e);var r=n.h?jt(n.h.Va,n.h,n):null;t:{var s=n.j;let i=-1;for(;;){const o=["count="+e];i==-1?0<e?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<e;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{Um(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function zc(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;or||uc(),ar||(or(),ar=!0),ho.add(t,n),n.A=0}}function wo(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=yr(jt(n.Ma,n),Hc(n,n.A)),n.A++,!0)}C.Ma=function(){if(this.u=null,Kc(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=yr(jt(this.jb,this),n)}};C.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Qt(10),Ns(this),Kc(this))};function Io(n){n.B!=null&&(z.clearTimeout(n.B),n.B=null)}function Kc(n){n.g=new vr(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=Te(n.wa);yt(t,"RID","rpc"),yt(t,"SID",n.K),yt(t,"AID",n.V),yt(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&yt(t,"TO",n.qa),yt(t,"TYPE","xmlhttp"),Ar(n,t),n.o&&n.s&&vo(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.A=Vs(Te(t)),e.u=null,e.S=!0,Tc(e,n)}C.ib=function(){this.v!=null&&(this.v=null,Ns(this),wo(this),Qt(19))};function ss(n){n.v!=null&&(z.clearTimeout(n.v),n.v=null)}function Gc(n,t){var e=null;if(n.g==t){ss(n),Io(n),n.g=null;var r=2}else if(Li(n.i,t))e=t.F,Nc(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.u?t.u.length:0,t=Date.now()-t.G;var s=n.C;r=Cs(),xt(r,new pc(r,e)),Os(n)}else zc(n);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&Hm(n,t)||r==2&&wo(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),s){case 1:Ke(n,5);break;case 4:Ke(n,10);break;case 3:Ke(n,6);break;default:Ke(n,2)}}}function Hc(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function Ke(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=jt(n.pb,n);e||(e=new He("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||ns(e,"https"),Vs(e)),$m(e.toString(),r)}else Qt(2);n.H=0,n.h&&n.h.za(t),Wc(n),qc(n)}C.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Qt(2)):(this.l.info("Failed to ping google.com"),Qt(1))};function Wc(n){if(n.H=0,n.ma=[],n.h){const t=Oc(n.i);(t.length!=0||n.j.length!=0)&&(Sa(n.ma,t),Sa(n.ma,n.j),n.i.i.length=0,so(n.j),n.j.length=0),n.h.ya()}}function Qc(n,t,e){var r=e instanceof He?Te(e):new He(e);if(r.g!="")t&&(r.g=t+"."+r.g),rs(r,r.m);else{var s=z.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new He(null);r&&ns(i,r),t&&(i.g=t),s&&rs(i,s),e&&(i.l=e),r=i}return e=n.F,t=n.Da,e&&t&&yt(r,e,t),yt(r,"VER",n.ra),Ar(n,r),r}function Yc(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n.Ha&&!n.va?new wt(new wr({ob:e})):new wt(n.va),t.Oa(n.J),t}C.isActive=function(){return!!this.h&&this.h.isActive(this)};function Xc(){}C=Xc.prototype;C.Ba=function(){};C.Aa=function(){};C.za=function(){};C.ya=function(){};C.isActive=function(){return!0};C.Va=function(){};function is(){if(yn&&!(10<=Number(im)))throw Error("Environmental error: no available transport.")}is.prototype.g=function(n,t){return new ee(n,t)};function ee(n,t){kt.call(this),this.g=new $c(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!sr(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!sr(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new Mn(this)}Nt(ee,kt);ee.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;Qt(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=Qc(n,null,n.Y),Os(n)};ee.prototype.close=function(){To(this.g)};ee.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=uo(n),n=e);t.j.push(new Lm(t.fb++,n)),t.H==3&&Os(t)};ee.prototype.N=function(){this.g.h=null,delete this.j,To(this.g),delete this.g,ee.$.N.call(this)};function Jc(n){po.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}Nt(Jc,po);function Zc(){_o.call(this),this.status=1}Nt(Zc,_o);function Mn(n){this.g=n}Nt(Mn,Xc);Mn.prototype.Ba=function(){xt(this.g,"a")};Mn.prototype.Aa=function(n){xt(this.g,new Jc(n))};Mn.prototype.za=function(n){xt(this.g,new Zc)};Mn.prototype.ya=function(){xt(this.g,"b")};function Wm(){this.blockSize=-1}function oe(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Nt(oe,Wm);oe.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function fi(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(s=0;16>s;++s)r[s]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],s=n.g[2];var i=n.g[3],o=t+(i^e&(s^i))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[3]+3250441966&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(i^e&(s^i))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[7]+4249261313&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(i^e&(s^i))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[11]+2304563134&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(i^e&(s^i))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[15]+1236535329&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(e^s))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[0]+3921069994&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(e^s))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[4]+3889429448&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(e^s))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[8]+1163531501&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(e^s))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[12]+2368359562&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(e^s^i)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[14]+4259657740&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^i)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[10]+3200236656&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^i)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[6]+76029189&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^i)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[2]+3299628645&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(s^(e|~i))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[5]+4237533241&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~i))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[1]+2240044497&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~i))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[13]+1309151649&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~i))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+s&4294967295,n.g[3]=n.g[3]+i&4294967295}oe.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=e;)fi(this,n,i),i+=this.blockSize;if(typeof n=="string"){for(;i<t;)if(r[s++]=n.charCodeAt(i++),s==this.blockSize){fi(this,r),s=0;break}}else for(;i<t;)if(r[s++]=n[i++],s==this.blockSize){fi(this,r),s=0;break}}this.h=s,this.i+=t};oe.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function gt(n,t){this.h=t;for(var e=[],r=!0,s=n.length-1;0<=s;s--){var i=n[s]|0;r&&i==t||(e[s]=i,r=!1)}this.g=e}var Qm={};function Ao(n){return-128<=n&&128>n?nm(n,function(t){return new gt([t|0],0>t?-1:0)}):new gt([n|0],0>n?-1:0)}function he(n){if(isNaN(n)||!isFinite(n))return mn;if(0>n)return Lt(he(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=Fi;return new gt(t,0)}function tu(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return Lt(tu(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=he(Math.pow(t,8)),r=mn,s=0;s<n.length;s+=8){var i=Math.min(8,n.length-s),o=parseInt(n.substring(s,s+i),t);8>i?(i=he(Math.pow(t,i)),r=r.R(i).add(he(o))):(r=r.R(e),r=r.add(he(o)))}return r}var Fi=4294967296,mn=Ao(0),xi=Ao(1),xa=Ao(16777216);C=gt.prototype;C.ea=function(){if(re(this))return-Lt(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:Fi+r)*t,t*=Fi}return n};C.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(ve(this))return"0";if(re(this))return"-"+Lt(this).toString(n);for(var t=he(Math.pow(n,6)),e=this,r="";;){var s=as(e,t).g;e=os(e,s.R(t));var i=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=s,ve(e))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};C.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function ve(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function re(n){return n.h==-1}C.X=function(n){return n=os(this,n),re(n)?-1:ve(n)?0:1};function Lt(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new gt(e,~n.h).add(xi)}C.abs=function(){return re(this)?Lt(this):this};C.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(n.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(n.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,e[s]=o<<16|i}return new gt(e,e[e.length-1]&-2147483648?-1:0)};function os(n,t){return n.add(Lt(t))}C.R=function(n){if(ve(this)||ve(n))return mn;if(re(this))return re(n)?Lt(this).R(Lt(n)):Lt(Lt(this).R(n));if(re(n))return Lt(this.R(Lt(n)));if(0>this.X(xa)&&0>n.X(xa))return he(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<n.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(s)>>>16,l=n.D(s)&65535;e[2*r+2*s]+=o*l,Fr(e,2*r+2*s),e[2*r+2*s+1]+=i*l,Fr(e,2*r+2*s+1),e[2*r+2*s+1]+=o*a,Fr(e,2*r+2*s+1),e[2*r+2*s+2]+=i*a,Fr(e,2*r+2*s+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new gt(e,0)};function Fr(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function $n(n,t){this.g=n,this.h=t}function as(n,t){if(ve(t))throw Error("division by zero");if(ve(n))return new $n(mn,mn);if(re(n))return t=as(Lt(n),t),new $n(Lt(t.g),Lt(t.h));if(re(t))return t=as(n,Lt(t)),new $n(Lt(t.g),t.h);if(30<n.g.length){if(re(n)||re(t))throw Error("slowDivide_ only works with positive integers.");for(var e=xi,r=t;0>=r.X(n);)e=Ba(e),r=Ba(r);var s=on(e,1),i=on(r,1);for(r=on(r,2),e=on(e,2);!ve(r);){var o=i.add(r);0>=o.X(n)&&(s=s.add(e),i=o),r=on(r,1),e=on(e,1)}return t=os(n,s.R(t)),new $n(s,t)}for(s=mn;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=he(e),o=i.R(t);re(o)||0<o.X(n);)e-=r,i=he(e),o=i.R(t);ve(i)&&(i=xi),s=s.add(i),n=os(n,o)}return new $n(s,n)}C.gb=function(n){return as(this,n).h};C.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new gt(e,this.h&n.h)};C.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new gt(e,this.h|n.h)};C.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new gt(e,this.h^n.h)};function Ba(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new gt(e,n.h)}function on(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,s=[],i=0;i<r;i++)s[i]=0<t?n.D(i+e)>>>t|n.D(i+e+1)<<32-t:n.D(i+e);return new gt(s,n.h)}is.prototype.createWebChannel=is.prototype.g;ee.prototype.send=ee.prototype.u;ee.prototype.open=ee.prototype.m;ee.prototype.close=ee.prototype.close;Ss.NO_ERROR=0;Ss.TIMEOUT=8;Ss.HTTP_ERROR=6;_c.COMPLETE="complete";yc.EventType=Er;Er.OPEN="a";Er.CLOSE="b";Er.ERROR="c";Er.MESSAGE="d";kt.prototype.listen=kt.prototype.O;wt.prototype.listenOnce=wt.prototype.P;wt.prototype.getLastError=wt.prototype.Sa;wt.prototype.getLastErrorCode=wt.prototype.Ia;wt.prototype.getStatus=wt.prototype.da;wt.prototype.getResponseJson=wt.prototype.Wa;wt.prototype.getResponseText=wt.prototype.ja;wt.prototype.send=wt.prototype.ha;wt.prototype.setWithCredentials=wt.prototype.Oa;oe.prototype.digest=oe.prototype.l;oe.prototype.reset=oe.prototype.reset;oe.prototype.update=oe.prototype.j;gt.prototype.add=gt.prototype.add;gt.prototype.multiply=gt.prototype.R;gt.prototype.modulo=gt.prototype.gb;gt.prototype.compare=gt.prototype.X;gt.prototype.toNumber=gt.prototype.ea;gt.prototype.toString=gt.prototype.toString;gt.prototype.getBits=gt.prototype.D;gt.fromNumber=he;gt.fromString=tu;var Ym=function(){return new is},Xm=function(){return Cs()},di=Ss,Jm=_c,Zm=Je,Ua={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},tg=wr,xr=yc,eg=wt,ng=oe,gn=gt;const $a="@firebase/firestore";/**
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
 */let Ln="10.11.1";/**
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
 */const Qe=new Hl("@firebase/firestore");function qn(){return Qe.logLevel}function b(n,...t){if(Qe.logLevel<=ot.DEBUG){const e=t.map(Ro);Qe.debug(`Firestore (${Ln}): ${n}`,...e)}}function we(n,...t){if(Qe.logLevel<=ot.ERROR){const e=t.map(Ro);Qe.error(`Firestore (${Ln}): ${n}`,...e)}}function En(n,...t){if(Qe.logLevel<=ot.WARN){const e=t.map(Ro);Qe.warn(`Firestore (${Ln}): ${n}`,...e)}}function Ro(n){if(typeof n=="string")return n;try{/**
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
 */function j(n="Unexpected state"){const t=`FIRESTORE (${Ln}) INTERNAL ASSERTION FAILED: `+n;throw we(t),new Error(t)}function _t(n,t){n||j()}function W(n,t){return n}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Nn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class be{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class eu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class rg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e($t.UNAUTHENTICATED))}shutdown(){}}class sg{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class ig{constructor(t){this.t=t,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=l=>this.i!==r?(r=this.i,e(l)):Promise.resolve();let i=new be;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new be,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new be)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_t(typeof r.accessToken=="string"),new eu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return _t(t===null||typeof t=="string"),new $t(t)}}class og{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ag{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new og(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lg{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cg{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=i=>{i.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(_t(typeof e.token=="string"),this.R=e.token,new lg(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function ug(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class nu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=ug(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<e&&(r+=t.charAt(s[i]%t.length))}return r}}function ft(n,t){return n<t?-1:n>t?1:0}function vn(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */class Vt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Vt.fromMillis(Date.now())}static fromDate(t){return Vt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new Vt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ft(this.nanoseconds,t.nanoseconds):ft(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class G{constructor(t){this.timestamp=t}static fromTimestamp(t){return new G(t)}static min(){return new G(new Vt(0,0))}static max(){return new G(new Vt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class fr{constructor(t,e,r){e===void 0?e=0:e>t.length&&j(),r===void 0?r=t.length-e:r>t.length-e&&j(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return fr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof fr?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const i=t.get(s),o=e.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Tt extends fr{construct(t,e,r){return new Tt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new Tt(e)}static emptyPath(){return new Tt([])}}const hg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ft extends fr{construct(t,e,r){return new Ft(t,e,r)}static isValidIdentifier(t){return hg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ft.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ft(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const i=()=>{if(r.length===0)throw new N(E.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new N(E.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new N(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new N(E.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ft(e)}static emptyPath(){return new Ft([])}}/**
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
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Tt.fromString(t))}static fromName(t){return new O(Tt.fromString(t).popFirst(5))}static empty(){return new O(Tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Tt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Tt(t.slice()))}}function fg(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=G.fromTimestamp(r===1e9?new Vt(e+1,0):new Vt(e,r));return new Oe(s,O.empty(),t)}function dg(n){return new Oe(n.readTime,n.key,-1)}class Oe{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Oe(G.min(),O.empty(),-1)}static max(){return new Oe(G.max(),O.empty(),-1)}}function mg(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:ft(n.largestBatchId,t.largestBatchId))}/**
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
 */const gg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Rr(n){if(n.code!==E.FAILED_PRECONDITION||n.message!==gg)throw n;b("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class y{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new y((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof y?e:y.resolve(e)}catch(e){return y.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):y.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):y.reject(e)}static resolve(t){return new y((e,r)=>{e(t)})}static reject(t){return new y((e,r)=>{r(t)})}static waitFor(t){return new y((e,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&e()},l=>r(l))}),o=!0,i===s&&e()})}static or(t){let e=y.resolve(!1);for(const r of t)e=e.next(s=>s?y.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,i)=>{r.push(e.call(this,s,i))}),this.waitFor(r)}static mapArray(t,e){return new y((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;e(t[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(t,e){return new y((r,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):r()};i()})}}function _g(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Cr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Co{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Co.oe=-1;function Ms(n){return n==null}function ls(n){return n===0&&1/n==-1/0}function yg(n){return typeof n=="number"&&Number.isInteger(n)&&!ls(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function qa(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ze(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ru(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class vt{constructor(t,e){this.comparator=t,this.root=e||Mt.EMPTY}insert(t,e){return new vt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Mt.BLACK,null,null))}remove(t){return new vt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Mt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Br(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Br(this.root,t,this.comparator,!1)}getReverseIterator(){return new Br(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Br(this.root,t,this.comparator,!0)}}class Br{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?r(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Mt{constructor(t,e,r,s,i){this.key=t,this.value=e,this.color=r??Mt.RED,this.left=s??Mt.EMPTY,this.right=i??Mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,i){return new Mt(t??this.key,e??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,r),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Mt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Mt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const t=this.left.check();if(t!==this.right.check())throw j();return t+(this.isRed()?0:1)}}Mt.EMPTY=null,Mt.RED=!0,Mt.BLACK=!1;Mt.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(t,e,r,s,i){return this}insert(t,e,r){return new Mt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Bt{constructor(t){this.comparator=t,this.data=new vt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ja(this.data.getIterator())}getIteratorFrom(t){return new ja(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Bt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Bt(this.comparator);return e.data=t,e}}class ja{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class te{constructor(t){this.fields=t,t.sort(Ft.comparator)}static empty(){return new te([])}unionWith(t){let e=new Bt(Ft.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new te(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return vn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class su extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Kt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new su("Invalid base64 string: "+i):i}}(t);return new Kt(e)}static fromUint8Array(t){const e=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new Kt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ft(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Kt.EMPTY_BYTE_STRING=new Kt("");const Eg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Me(n){if(_t(!!n),typeof n=="string"){let t=0;const e=Eg.exec(n);if(_t(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Pt(n.seconds),nanos:Pt(n.nanos)}}function Pt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ye(n){return typeof n=="string"?Kt.fromBase64String(n):Kt.fromUint8Array(n)}/**
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
 */function So(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Po(n){const t=n.mapValue.fields.__previous_value__;return So(t)?Po(t):t}function dr(n){const t=Me(n.mapValue.fields.__local_write_time__.timestampValue);return new Vt(t.seconds,t.nanos)}/**
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
 */class vg{constructor(t,e,r,s,i,o,a,l,c){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class mr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new mr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof mr&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Ur={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Xe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?So(n)?4:Tg(n)?9007199254740991:10:j()}function _e(n,t){if(n===t)return!0;const e=Xe(n);if(e!==Xe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return dr(n).isEqual(dr(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Me(s.timestampValue),a=Me(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,i){return Ye(s.bytesValue).isEqual(Ye(i.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,i){return Pt(s.geoPointValue.latitude)===Pt(i.geoPointValue.latitude)&&Pt(s.geoPointValue.longitude)===Pt(i.geoPointValue.longitude)}(n,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Pt(s.integerValue)===Pt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Pt(s.doubleValue),a=Pt(i.doubleValue);return o===a?ls(o)===ls(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return vn(n.arrayValue.values||[],t.arrayValue.values||[],_e);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(qa(o)!==qa(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!_e(o[l],a[l])))return!1;return!0}(n,t);default:return j()}}function gr(n,t){return(n.values||[]).find(e=>_e(e,t))!==void 0}function Tn(n,t){if(n===t)return 0;const e=Xe(n),r=Xe(t);if(e!==r)return ft(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return ft(n.booleanValue,t.booleanValue);case 2:return function(i,o){const a=Pt(i.integerValue||i.doubleValue),l=Pt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,t);case 3:return za(n.timestampValue,t.timestampValue);case 4:return za(dr(n),dr(t));case 5:return ft(n.stringValue,t.stringValue);case 6:return function(i,o){const a=Ye(i),l=Ye(o);return a.compareTo(l)}(n.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ft(a[c],l[c]);if(u!==0)return u}return ft(a.length,l.length)}(n.referenceValue,t.referenceValue);case 8:return function(i,o){const a=ft(Pt(i.latitude),Pt(o.latitude));return a!==0?a:ft(Pt(i.longitude),Pt(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Tn(a[c],l[c]);if(u)return u}return ft(a.length,l.length)}(n.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===Ur.mapValue&&o===Ur.mapValue)return 0;if(i===Ur.mapValue)return 1;if(o===Ur.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const f=ft(l[h],u[h]);if(f!==0)return f;const d=Tn(a[l[h]],c[u[h]]);if(d!==0)return d}return ft(l.length,u.length)}(n.mapValue,t.mapValue);default:throw j()}}function za(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return ft(n,t);const e=Me(n),r=Me(t),s=ft(e.seconds,r.seconds);return s!==0?s:ft(e.nanos,r.nanos)}function wn(n){return Bi(n)}function Bi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Me(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Ye(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const i of e.values||[])s?s=!1:r+=",",r+=Bi(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Bi(e.fields[o])}`;return s+"}"}(n.mapValue):j()}function Ui(n){return!!n&&"integerValue"in n}function bo(n){return!!n&&"arrayValue"in n}function Ka(n){return!!n&&"nullValue"in n}function Ga(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Kr(n){return!!n&&"mapValue"in n}function Jn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ze(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Jn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Jn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Tg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Yt{constructor(t){this.value=t}static empty(){return new Yt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Kr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Jn(e)}setAll(t){let e=Ft.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const l=this.getFieldsMap(e);this.applyChanges(l,r,s),r={},s=[],e=a.popLast()}o?r[a.lastSegment()]=Jn(o):s.push(a.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,r,s)}delete(t){const e=this.field(t.popLast());Kr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return _e(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Kr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Ze(e,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new Yt(Jn(this.value))}}function iu(n){const t=[];return Ze(n.fields,(e,r)=>{const s=new Ft([e]);if(Kr(r)){const i=iu(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new te(t)}/**
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
 */class qt{constructor(t,e,r,s,i,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new qt(t,0,G.min(),G.min(),G.min(),Yt.empty(),0)}static newFoundDocument(t,e,r,s){return new qt(t,1,e,G.min(),r,s,0)}static newNoDocument(t,e){return new qt(t,2,e,G.min(),G.min(),Yt.empty(),0)}static newUnknownDocument(t,e){return new qt(t,3,e,G.min(),G.min(),Yt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Yt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof qt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class cs{constructor(t,e){this.position=t,this.inclusive=e}}function Ha(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const i=t[s],o=n.position[s];if(i.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),e.key):r=Tn(o,e.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wa(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!_e(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class us{constructor(t,e="asc"){this.field=t,this.dir=e}}function wg(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class ou{}class bt extends ou{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Ag(t,e,r):e==="array-contains"?new Sg(t,r):e==="in"?new Pg(t,r):e==="not-in"?new bg(t,r):e==="array-contains-any"?new Vg(t,r):new bt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Rg(t,r):new Cg(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Tn(e,this.value)):e!==null&&Xe(this.value)===Xe(e)&&this.matchesComparison(Tn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return j()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ye extends ou{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new ye(t,e)}matches(t){return au(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function au(n){return n.op==="and"}function lu(n){return Ig(n)&&au(n)}function Ig(n){for(const t of n.filters)if(t instanceof ye)return!1;return!0}function $i(n){if(n instanceof bt)return n.field.canonicalString()+n.op.toString()+wn(n.value);if(lu(n))return n.filters.map(t=>$i(t)).join(",");{const t=n.filters.map(e=>$i(e)).join(",");return`${n.op}(${t})`}}function cu(n,t){return n instanceof bt?function(r,s){return s instanceof bt&&r.op===s.op&&r.field.isEqual(s.field)&&_e(r.value,s.value)}(n,t):n instanceof ye?function(r,s){return s instanceof ye&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&cu(o,s.filters[a]),!0):!1}(n,t):void j()}function uu(n){return n instanceof bt?function(e){return`${e.field.canonicalString()} ${e.op} ${wn(e.value)}`}(n):n instanceof ye?function(e){return e.op.toString()+" {"+e.getFilters().map(uu).join(" ,")+"}"}(n):"Filter"}class Ag extends bt{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Rg extends bt{constructor(t,e){super(t,"in",e),this.keys=hu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Cg extends bt{constructor(t,e){super(t,"not-in",e),this.keys=hu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function hu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class Sg extends bt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return bo(e)&&gr(e.arrayValue,this.value)}}class Pg extends bt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&gr(this.value.arrayValue,e)}}class bg extends bt{constructor(t,e){super(t,"not-in",e)}matches(t){if(gr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!gr(this.value.arrayValue,e)}}class Vg extends bt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!bo(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>gr(this.value.arrayValue,r))}}/**
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
 */class Dg{constructor(t,e=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function Qa(n,t=null,e=[],r=[],s=null,i=null,o=null){return new Dg(n,t,e,r,s,i,o)}function Vo(n){const t=W(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>$i(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ms(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>wn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>wn(r)).join(",")),t.ue=e}return t.ue}function Do(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!wg(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!cu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Wa(n.startAt,t.startAt)&&Wa(n.endAt,t.endAt)}function qi(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ls{constructor(t,e=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function kg(n,t,e,r,s,i,o,a){return new Ls(n,t,e,r,s,i,o,a)}function Fs(n){return new Ls(n)}function Ya(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ng(n){return n.collectionGroup!==null}function Zn(n){const t=W(n);if(t.ce===null){t.ce=[];const e=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),e.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Bt(Ft.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.ce.push(new us(i,r))}),e.has(Ft.keyField().canonicalString())||t.ce.push(new us(Ft.keyField(),r))}return t.ce}function fe(n){const t=W(n);return t.le||(t.le=Og(t,Zn(n))),t.le}function Og(n,t){if(n.limitType==="F")return Qa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new us(s.field,i)});const e=n.endAt?new cs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new cs(n.startAt.position,n.startAt.inclusive):null;return Qa(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ji(n,t,e){return new Ls(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function xs(n,t){return Do(fe(n),fe(t))&&n.limitType===t.limitType}function fu(n){return`${Vo(fe(n))}|lt:${n.limitType}`}function an(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>uu(s)).join(", ")}]`),Ms(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>wn(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>wn(s)).join(",")),`Target(${r})`}(fe(n))}; limitType=${n.limitType})`}function Bs(n,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):O.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,t)&&function(r,s){for(const i of Zn(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=Ha(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Zn(r),s)||r.endAt&&!function(o,a,l){const c=Ha(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Zn(r),s))}(n,t)}function Mg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function du(n){return(t,e)=>{let r=!1;for(const s of Zn(n)){const i=Lg(s,t,e);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Lg(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?Tn(l,c):j()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return j()}}/**
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
 */class Fn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ze(this.inner,(e,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return ru(this.inner)}size(){return this.innerSize}}/**
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
 */const Fg=new vt(O.comparator);function Ie(){return Fg}const mu=new vt(O.comparator);function Gn(...n){let t=mu;for(const e of n)t=t.insert(e.key,e);return t}function gu(n){let t=mu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Ge(){return tr()}function pu(){return tr()}function tr(){return new Fn(n=>n.toString(),(n,t)=>n.isEqual(t))}const xg=new vt(O.comparator),Bg=new Bt(O.comparator);function nt(...n){let t=Bg;for(const e of n)t=t.add(e);return t}const Ug=new Bt(ft);function $g(){return Ug}/**
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
 */function _u(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ls(t)?"-0":t}}function yu(n){return{integerValue:""+n}}function qg(n,t){return yg(t)?yu(t):_u(n,t)}/**
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
 */class Us{constructor(){this._=void 0}}function jg(n,t,e){return n instanceof hs?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&So(i)&&(i=Po(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(e,t):n instanceof In?vu(n,t):n instanceof pr?Tu(n,t):function(s,i){const o=Eu(s,i),a=Xa(o)+Xa(s.Pe);return Ui(o)&&Ui(s.Pe)?yu(a):_u(s.serializer,a)}(n,t)}function zg(n,t,e){return n instanceof In?vu(n,t):n instanceof pr?Tu(n,t):e}function Eu(n,t){return n instanceof fs?function(r){return Ui(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class hs extends Us{}class In extends Us{constructor(t){super(),this.elements=t}}function vu(n,t){const e=wu(t);for(const r of n.elements)e.some(s=>_e(s,r))||e.push(r);return{arrayValue:{values:e}}}class pr extends Us{constructor(t){super(),this.elements=t}}function Tu(n,t){let e=wu(t);for(const r of n.elements)e=e.filter(s=>!_e(s,r));return{arrayValue:{values:e}}}class fs extends Us{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Xa(n){return Pt(n.integerValue||n.doubleValue)}function wu(n){return bo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Kg{constructor(t,e){this.field=t,this.transform=e}}function Gg(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof In&&s instanceof In||r instanceof pr&&s instanceof pr?vn(r.elements,s.elements,_e):r instanceof fs&&s instanceof fs?_e(r.Pe,s.Pe):r instanceof hs&&s instanceof hs}(n.transform,t.transform)}class Hg{constructor(t,e){this.version=t,this.transformResults=e}}class de{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new de}static exists(t){return new de(void 0,t)}static updateTime(t){return new de(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Gr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class $s{}function Iu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ru(n.key,de.none()):new Sr(n.key,n.data,de.none());{const e=n.data,r=Yt.empty();let s=new Bt(Ft.comparator);for(let i of t.fields)if(!s.has(i)){let o=e.field(i);o===null&&i.length>1&&(i=i.popLast(),o=e.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Be(n.key,r,new te(s.toArray()),de.none())}}function Wg(n,t,e){n instanceof Sr?function(s,i,o){const a=s.value.clone(),l=Za(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Be?function(s,i,o){if(!Gr(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Za(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Au(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,t,e):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function er(n,t,e,r){return n instanceof Sr?function(i,o,a,l){if(!Gr(i.precondition,o))return a;const c=i.value.clone(),u=tl(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,t,e,r):n instanceof Be?function(i,o,a,l){if(!Gr(i.precondition,o))return a;const c=tl(i.fieldTransforms,l,o),u=o.data;return u.setAll(Au(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(n,t,e,r):function(i,o,a){return Gr(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function Qg(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),i=Eu(r.transform,s||null);i!=null&&(e===null&&(e=Yt.empty()),e.set(r.field,i))}return e||null}function Ja(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&vn(r,s,(i,o)=>Gg(i,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Sr extends $s{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Be extends $s{constructor(t,e,r,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Au(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Za(n,t,e){const r=new Map;_t(n.length===e.length);for(let s=0;s<e.length;s++){const i=n[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,zg(o,a,e[s]))}return r}function tl(n,t,e){const r=new Map;for(const s of n){const i=s.transform,o=e.data.field(s.field);r.set(s.field,jg(i,o,t))}return r}class Ru extends $s{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Yg extends $s{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Xg{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Wg(i,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=er(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=er(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=pu();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=e.has(s.key)?null:a;const l=Iu(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),nt())}isEqual(t){return this.batchId===t.batchId&&vn(this.mutations,t.mutations,(e,r)=>Ja(e,r))&&vn(this.baseMutations,t.baseMutations,(e,r)=>Ja(e,r))}}class ko{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){_t(t.mutations.length===r.length);let s=function(){return xg}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ko(t,e,r,s)}}/**
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
 */class Jg{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Zg{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var St,st;function tp(n){switch(n){default:return j();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Cu(n){if(n===void 0)return we("GRPC error has no .code"),E.UNKNOWN;switch(n){case St.OK:return E.OK;case St.CANCELLED:return E.CANCELLED;case St.UNKNOWN:return E.UNKNOWN;case St.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case St.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case St.INTERNAL:return E.INTERNAL;case St.UNAVAILABLE:return E.UNAVAILABLE;case St.UNAUTHENTICATED:return E.UNAUTHENTICATED;case St.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case St.NOT_FOUND:return E.NOT_FOUND;case St.ALREADY_EXISTS:return E.ALREADY_EXISTS;case St.PERMISSION_DENIED:return E.PERMISSION_DENIED;case St.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case St.ABORTED:return E.ABORTED;case St.OUT_OF_RANGE:return E.OUT_OF_RANGE;case St.UNIMPLEMENTED:return E.UNIMPLEMENTED;case St.DATA_LOSS:return E.DATA_LOSS;default:return j()}}(st=St||(St={}))[st.OK=0]="OK",st[st.CANCELLED=1]="CANCELLED",st[st.UNKNOWN=2]="UNKNOWN",st[st.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",st[st.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",st[st.NOT_FOUND=5]="NOT_FOUND",st[st.ALREADY_EXISTS=6]="ALREADY_EXISTS",st[st.PERMISSION_DENIED=7]="PERMISSION_DENIED",st[st.UNAUTHENTICATED=16]="UNAUTHENTICATED",st[st.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",st[st.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",st[st.ABORTED=10]="ABORTED",st[st.OUT_OF_RANGE=11]="OUT_OF_RANGE",st[st.UNIMPLEMENTED=12]="UNIMPLEMENTED",st[st.INTERNAL=13]="INTERNAL",st[st.UNAVAILABLE=14]="UNAVAILABLE",st[st.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ep(){return new TextEncoder}/**
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
 */const np=new gn([4294967295,4294967295],0);function el(n){const t=ep().encode(n),e=new ng;return e.update(t),new Uint8Array(e.digest())}function nl(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new gn([e,r],0),new gn([s,i],0)]}class No{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Hn(`Invalid padding: ${e}`);if(r<0)throw new Hn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Hn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Hn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=gn.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(gn.fromNumber(r)));return s.compare(np)===1&&(s=new gn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=el(t),[r,s]=nl(e);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new No(i,s,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Ie===0)return;const e=el(t),[r,s]=nl(e);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Hn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class qs{constructor(t,e,r,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Pr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new qs(G.min(),s,new vt(ft),Ie(),nt())}}class Pr{constructor(t,e,r,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Pr(r,e,nt(),nt(),nt())}}/**
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
 */class Hr{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class Su{constructor(t,e){this.targetId=t,this.me=e}}class Pu{constructor(t,e,r=Kt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class rl{constructor(){this.fe=0,this.ge=il(),this.pe=Kt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=nt(),e=nt(),r=nt();return this.ge.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:j()}}),new Pr(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=il()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,_t(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class rp{constructor(t){this.Le=t,this.Be=new Map,this.ke=Ie(),this.qe=sl(),this.Qe=new vt(ft)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:j()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const i=s.target;if(qi(i))if(r===0){const o=new O(i.path);this.Ue(e,o,qt.newNoDocument(o,G.min()))}else _t(r===1);else{const o=this.Ye(e);if(o!==r){const a=this.Ze(t),l=a?this.Xe(a,t,o):1;if(l!==0){this.je(e);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,c)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=e;let o,a;try{o=Ye(r).toUint8Array()}catch(l){if(l instanceof su)return En("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new No(o,s,i)}catch(l){return En(l instanceof Hn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.Ue(e,i,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&qi(a.target)){const l=new O(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,qt.newNoDocument(l,t))}i.be&&(e.set(o,i.Ce()),i.ve())}});let r=nt();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(t));const s=new qs(t,e,this.Qe,this.ke,r);return this.ke=Ie(),this.qe=sl(),this.Qe=new vt(ft),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new rl,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Bt(ft),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||b("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new rl),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function sl(){return new vt(O.comparator)}function il(){return new vt(O.comparator)}const sp={asc:"ASCENDING",desc:"DESCENDING"},ip={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},op={and:"AND",or:"OR"};class ap{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function zi(n,t){return n.useProto3Json||Ms(t)?t:{value:t}}function ds(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function bu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function lp(n,t){return ds(n,t.toTimestamp())}function me(n){return _t(!!n),G.fromTimestamp(function(e){const r=Me(e);return new Vt(r.seconds,r.nanos)}(n))}function Oo(n,t){return Ki(n,t).canonicalString()}function Ki(n,t){const e=function(s){return new Tt(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Vu(n){const t=Tt.fromString(n);return _t(Mu(t)),t}function Gi(n,t){return Oo(n.databaseId,t.path)}function mi(n,t){const e=Vu(t);if(e.get(1)!==n.databaseId.projectId)throw new N(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(ku(e))}function Du(n,t){return Oo(n.databaseId,t)}function cp(n){const t=Vu(n);return t.length===4?Tt.emptyPath():ku(t)}function Hi(n){return new Tt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ku(n){return _t(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ol(n,t,e){return{name:Gi(n,t),fields:e.value.mapValue.fields}}function up(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:j()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(_t(u===void 0||typeof u=="string"),Kt.fromBase64String(u||"")):(_t(u===void 0||u instanceof Buffer||u instanceof Uint8Array),Kt.fromUint8Array(u||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?E.UNKNOWN:Cu(c.code);return new N(u,c.message||"")}(o);e=new Pu(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=mi(n,r.document.name),i=me(r.document.updateTime),o=r.document.createTime?me(r.document.createTime):G.min(),a=new Yt({mapValue:{fields:r.document.fields}}),l=qt.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];e=new Hr(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=mi(n,r.document),i=r.readTime?me(r.readTime):G.min(),o=qt.newNoDocument(s,i),a=r.removedTargetIds||[];e=new Hr([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=mi(n,r.document),i=r.removedTargetIds||[];e=new Hr([],i,s,null)}else{if(!("filter"in t))return j();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Zg(s,i),a=r.targetId;e=new Su(a,o)}}return e}function hp(n,t){let e;if(t instanceof Sr)e={update:ol(n,t.key,t.value)};else if(t instanceof Ru)e={delete:Gi(n,t.key)};else if(t instanceof Be)e={update:ol(n,t.key,t.data),updateMask:vp(t.fieldMask)};else{if(!(t instanceof Yg))return j();e={verify:Gi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof hs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof In)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof pr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof fs)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw j()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:lp(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:j()}(n,t.precondition)),e}function fp(n,t){return n&&n.length>0?(_t(t!==void 0),n.map(e=>function(s,i){let o=s.updateTime?me(s.updateTime):me(i);return o.isEqual(G.min())&&(o=me(i)),new Hg(o,s.transformResults||[])}(e,t))):[]}function dp(n,t){return{documents:[Du(n,t.path)]}}function mp(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Du(n,s);const i=function(c){if(c.length!==0)return Ou(ye.create(c,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(u=>function(f){return{field:ln(f.field),direction:_p(f.dir)}}(u))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=zi(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{_t:e,parent:s}}function gp(n){let t=cp(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){_t(r===1);const u=e.from[0];u.allDescendants?s=u.collectionId:t=t.child(u.collectionId)}let i=[];e.where&&(i=function(h){const f=Nu(h);return f instanceof ye&&lu(f)?f.getFilters():[f]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(f=>function(p){return new us(cn(p.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(f))}(e.orderBy));let a=null;e.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Ms(f)?null:f}(e.limit));let l=null;e.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new cs(d,f)}(e.startAt));let c=null;return e.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new cs(d,f)}(e.endAt)),kg(t,s,o,i,a,"F",l,c)}function pp(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Nu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=cn(e.unaryFilter.field);return bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=cn(e.unaryFilter.field);return bt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=cn(e.unaryFilter.field);return bt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=cn(e.unaryFilter.field);return bt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return j()}}(n):n.fieldFilter!==void 0?function(e){return bt.create(cn(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ye.create(e.compositeFilter.filters.map(r=>Nu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return j()}}(e.compositeFilter.op))}(n):j()}function _p(n){return sp[n]}function yp(n){return ip[n]}function Ep(n){return op[n]}function ln(n){return{fieldPath:n.canonicalString()}}function cn(n){return Ft.fromServerFormat(n.fieldPath)}function Ou(n){return n instanceof bt?function(e){if(e.op==="=="){if(Ga(e.value))return{unaryFilter:{field:ln(e.field),op:"IS_NAN"}};if(Ka(e.value))return{unaryFilter:{field:ln(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ga(e.value))return{unaryFilter:{field:ln(e.field),op:"IS_NOT_NAN"}};if(Ka(e.value))return{unaryFilter:{field:ln(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ln(e.field),op:yp(e.op),value:e.value}}}(n):n instanceof ye?function(e){const r=e.getFilters().map(s=>Ou(s));return r.length===1?r[0]:{compositeFilter:{op:Ep(e.op),filters:r}}}(n):j()}function vp(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Mu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Re{constructor(t,e,r,s,i=G.min(),o=G.min(),a=Kt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new Re(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Re(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Re(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Re(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Tp{constructor(t){this.ut=t}}function wp(n){const t=gp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ji(t,t.limit,"L"):t}/**
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
 */class Ip{constructor(){this.on=new Ap}addToCollectionParentIndex(t,e){return this.on.add(e),y.resolve()}getCollectionParents(t,e){return y.resolve(this.on.getEntries(e))}addFieldIndex(t,e){return y.resolve()}deleteFieldIndex(t,e){return y.resolve()}deleteAllFieldIndexes(t){return y.resolve()}createTargetIndexes(t,e){return y.resolve()}getDocumentsMatchingTarget(t,e){return y.resolve(null)}getIndexType(t,e){return y.resolve(0)}getFieldIndexes(t,e){return y.resolve([])}getNextCollectionGroupToUpdate(t){return y.resolve(null)}getMinOffset(t,e){return y.resolve(Oe.min())}getMinOffsetFromCollectionGroup(t,e){return y.resolve(Oe.min())}updateCollectionGroup(t,e,r){return y.resolve()}updateIndexEntries(t,e){return y.resolve()}}class Ap{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new Bt(Tt.comparator),i=!s.has(r);return this.index[e]=s.add(r),i}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Bt(Tt.comparator)).toArray()}}/**
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
 */class An{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new An(0)}static Nn(){return new An(-1)}}/**
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
 */class Rp{constructor(){this.changes=new Fn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,qt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?y.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Cp{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Sp{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&er(r.mutation,s,te.empty(),Vt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,nt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=nt()){const s=Ge();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(i=>{let o=Gn();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=Ge();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,nt()))}populateOverlays(t,e,r){const s=[];return r.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,s){let i=Ie();const o=tr(),a=function(){return tr()}();return e.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Be)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),er(u.mutation,c,u.mutation.getFieldMask(),Vt.now())):o.set(c.key,te.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),e.forEach((c,u)=>{var h;return a.set(c,new Cp(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const r=tr();let s=new vt((o,a)=>o-a),i=nt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=e.get(l);if(c===null)return;let u=r.get(l)||te.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||nt()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=pu();u.forEach(f=>{if(!i.has(f)){const d=Iu(e.get(f),r.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return y.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(o){return O.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ng(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-i.size):y.resolve(Ge());let a=-1,l=i;return o.next(c=>y.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?y.resolve():this.remoteDocumentCache.getEntry(t,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,l,c,nt())).next(u=>({batchId:a,changes:gu(u)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let s=Gn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const i=e.collectionGroup;let o=Gn();return this.indexManager.getCollectionParents(t,i).next(a=>y.forEach(a,l=>{const c=function(h,f){return new Ls(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r,s).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,qt.newInvalidDocument(u)))});let a=Gn();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&er(u.mutation,c,te.empty(),Vt.now()),Bs(e,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class Pp{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,e){return y.resolve(this.ur.get(e))}saveBundleMetadata(t,e){return this.ur.set(e.id,function(s){return{id:s.id,version:s.version,createTime:me(s.createTime)}}(e)),y.resolve()}getNamedQuery(t,e){return y.resolve(this.cr.get(e))}saveNamedQuery(t,e){return this.cr.set(e.name,function(s){return{name:s.name,query:wp(s.bundledQuery),readTime:me(s.readTime)}}(e)),y.resolve()}}/**
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
 */class bp{constructor(){this.overlays=new vt(O.comparator),this.lr=new Map}getOverlay(t,e){return y.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Ge();return y.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,i)=>{this.lt(t,e,i)}),y.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),y.resolve()}getOverlaysForCollection(t,e,r){const s=Ge(),i=e.length+1,o=new O(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!e.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return y.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let i=new vt((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===e&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=Ge(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Ge(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return y.resolve(a)}lt(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Jg(e,r));let i=this.lr.get(e);i===void 0&&(i=nt(),this.lr.set(e,i)),this.lr.set(e,i.add(r.key))}}/**
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
 */class Mo{constructor(){this.hr=new Bt(Dt.Pr),this.Ir=new Bt(Dt.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,e){const r=new Dt(t,e);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.dr(new Dt(t,e))}Ar(t,e){t.forEach(r=>this.removeReference(r,e))}Rr(t){const e=new O(new Tt([])),r=new Dt(e,t),s=new Dt(e,t+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const e=new O(new Tt([])),r=new Dt(e,t),s=new Dt(e,t+1);let i=nt();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const e=new Dt(t,0),r=this.hr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Dt{constructor(t,e){this.key=t,this.gr=e}static Pr(t,e){return O.comparator(t.key,e.key)||ft(t.gr,e.gr)}static Tr(t,e){return ft(t.gr,e.gr)||O.comparator(t.key,e.key)}}/**
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
 */class Vp{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.pr=1,this.yr=new Bt(Dt.Pr)}checkEmpty(t){return y.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Xg(i,e,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new Dt(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(t,e){return y.resolve(this.wr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Sr(r),i=s<0?0:s;return y.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Dt(e,0),s=new Dt(e,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),y.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Bt(ft);return e.forEach(s=>{const i=new Dt(s,0),o=new Dt(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),y.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let i=r;O.isDocumentKey(i)||(i=i.child(""));const o=new Dt(new O(i),0);let a=new Bt(ft);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.gr)),!0)},o),y.resolve(this.br(a))}br(t){const e=[];return t.forEach(r=>{const s=this.wr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){_t(this.Dr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return y.forEach(e.mutations,s=>{const i=new Dt(s.key,e.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,e){const r=new Dt(e,0),s=this.yr.firstAfterOrEqual(r);return y.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,y.resolve()}Dr(t,e){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const e=this.Sr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Dp{constructor(t){this.Cr=t,this.docs=function(){return new vt(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return y.resolve(r?r.document.mutableCopy():qt.newInvalidDocument(e))}getEntries(t,e){let r=Ie();return e.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():qt.newInvalidDocument(s))}),y.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let i=Ie();const o=e.path,a=new O(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||mg(dg(u),r)<=0||(s.has(u.key)||Bs(e,u))&&(i=i.insert(u.key,u.mutableCopy()))}return y.resolve(i)}getAllFromCollectionGroup(t,e,r,s){j()}vr(t,e){return y.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new kp(this)}getSize(t){return y.resolve(this.size)}}class kp extends Rp{constructor(t){super(),this._r=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this._r.addEntry(t,s)):this._r.removeEntry(r)}),y.waitFor(e)}getFromCache(t,e){return this._r.getEntry(t,e)}getAllFromCache(t,e){return this._r.getEntries(t,e)}}/**
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
 */class Np{constructor(t){this.persistence=t,this.Fr=new Fn(e=>Vo(e),Do),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Mo,this.targetCount=0,this.Nr=An.On()}forEachTarget(t,e){return this.Fr.forEach((r,s)=>e(s)),y.resolve()}getLastRemoteSnapshotVersion(t){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return y.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Mr&&(this.Mr=e),y.resolve()}kn(t){this.Fr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Nr=new An(e),this.highestTargetId=e),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,e){return this.kn(e),this.targetCount+=1,y.resolve()}updateTargetData(t,e){return this.kn(e),y.resolve()}removeTargetData(t,e){return this.Fr.delete(e.target),this.Or.Rr(e.targetId),this.targetCount-=1,y.resolve()}removeTargets(t,e,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),y.waitFor(i).next(()=>s)}getTargetCount(t){return y.resolve(this.targetCount)}getTargetData(t,e){const r=this.Fr.get(e)||null;return y.resolve(r)}addMatchingKeys(t,e,r){return this.Or.Er(e,r),y.resolve()}removeMatchingKeys(t,e,r){this.Or.Ar(e,r);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),y.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Or.Rr(e),y.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Or.mr(e);return y.resolve(r)}containsKey(t,e){return y.resolve(this.Or.containsKey(e))}}/**
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
 */class Op{constructor(t,e){this.Lr={},this.overlays={},this.Br=new Co(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new Np(this),this.indexManager=new Ip,this.remoteDocumentCache=function(s){return new Dp(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new Tp(e),this.Kr=new Pp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new bp,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Lr[t.toKey()];return r||(r=new Vp(e,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,e,r){b("MemoryPersistence","Starting transaction:",t);const s=new Mp(this.Br.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(t,e){return y.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,e)))}}class Mp extends pg{constructor(t){super(),this.currentSequenceNumber=t}}class Lo{constructor(t){this.persistence=t,this.Gr=new Mo,this.zr=null}static jr(t){return new Lo(t)}get Hr(){if(this.zr)return this.zr;throw j()}addReference(t,e,r){return this.Gr.addReference(r,e),this.Hr.delete(r.toString()),y.resolve()}removeReference(t,e,r){return this.Gr.removeReference(r,e),this.Hr.add(r.toString()),y.resolve()}markPotentiallyOrphaned(t,e){return this.Hr.add(e.toString()),y.resolve()}removeTarget(t,e){this.Gr.Rr(e.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(t,e))}$r(){this.zr=new Set}Ur(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.Hr,r=>{const s=O.fromPath(r);return this.Jr(t,s).next(i=>{i||e.removeEntry(s,G.min())})}).next(()=>(this.zr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Jr(t,e).next(r=>{r?this.Hr.delete(e.toString()):this.Hr.add(e.toString())})}Qr(t){return 0}Jr(t,e){return y.or([()=>y.resolve(this.Gr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Wr(t,e)])}}/**
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
 */class Fo{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.ki=r,this.qi=s}static Qi(t,e){let r=nt(),s=nt();for(const i of e.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Fo(t,e.fromCache,r,s)}}/**
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
 */class Lp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Fp{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=function(){return Mf()?8:_g(Nf())>0?6:4}()}initialize(t,e){this.Gi=t,this.indexManager=e,this.Ki=!0}getDocumentsMatchingQuery(t,e,r,s){const i={result:null};return this.zi(t,e).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(t,e,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Lp;return this.Hi(t,e,o).next(a=>{if(i.result=a,this.$i)return this.Ji(t,e,o,a.size)})}).next(()=>i.result)}Ji(t,e,r,s){return r.documentReadCount<this.Ui?(qn()<=ot.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",an(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),y.resolve()):(qn()<=ot.DEBUG&&b("QueryEngine","Query:",an(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(qn()<=ot.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",an(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,fe(e))):y.resolve())}zi(t,e){if(Ya(e))return y.resolve(null);let r=fe(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=ji(e,null,"F"),r=fe(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=nt(...i);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const c=this.Yi(e,a);return this.Zi(e,c,o,l.readTime)?this.zi(t,ji(e,null,"F")):this.Xi(t,c,e,l)}))})))}ji(t,e,r,s){return Ya(e)||s.isEqual(G.min())?y.resolve(null):this.Gi.getDocuments(t,r).next(i=>{const o=this.Yi(e,i);return this.Zi(e,o,r,s)?y.resolve(null):(qn()<=ot.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),an(e)),this.Xi(t,o,e,fg(s,-1)).next(a=>a))})}Yi(t,e){let r=new Bt(du(t));return e.forEach((s,i)=>{Bs(t,i)&&(r=r.add(i))}),r}Zi(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(t,e,r){return qn()<=ot.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",an(e)),this.Gi.getDocumentsMatchingQuery(t,e,Oe.min(),r)}Xi(t,e,r,s){return this.Gi.getDocumentsMatchingQuery(t,r,s).next(i=>(e.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class xp{constructor(t,e,r,s){this.persistence=t,this.es=e,this.serializer=s,this.ts=new vt(ft),this.ns=new Fn(i=>Vo(i),Do),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Sp(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ts))}}function Bp(n,t,e,r){return new xp(n,t,e,r)}async function Lu(n,t){const e=W(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,e.os(t),e.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=nt();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return e.localDocuments.getDocuments(r,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function Up(n,t){const e=W(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=e.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,f=h.keys();let d=y.resolve();return f.forEach(p=>{d=d.next(()=>u.getEntry(l,p)).next(v=>{const m=c.docVersions.get(p);_t(m!==null),v.version.compareTo(m)<0&&(h.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),u.addEntry(v)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(e,r,t,i).next(()=>i.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=nt();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Fu(n){const t=W(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.qr.getLastRemoteSnapshotVersion(e))}function $p(n,t){const e=W(n),r=t.snapshotVersion;let s=e.ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=e.ss.newChangeBuffer({trackRemovals:!0});s=e.ts;const a=[];t.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(e.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>e.qr.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?d=d.withResumeToken(Kt.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),s=s.insert(h,d),function(v,m,T){return v.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(f,d,u)&&a.push(e.qr.updateTargetData(i,d))});let l=Ie(),c=nt();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(qp(i,o,t.documentUpdates).next(u=>{l=u.us,c=u.cs})),!r.isEqual(G.min())){const u=e.qr.getLastRemoteSnapshotVersion(i).next(h=>e.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return y.waitFor(a).next(()=>o.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(e.ts=s,i))}function qp(n,t,e){let r=nt(),s=nt();return e.forEach(i=>r=r.add(i)),t.getEntries(n,r).next(i=>{let o=Ie();return e.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(G.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):b("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{us:o,cs:s}})}function jp(n,t){const e=W(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function zp(n,t){const e=W(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.qr.getTargetData(r,t).next(i=>i?(s=i,y.resolve(s)):e.qr.allocateTargetId(r).next(o=>(s=new Re(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ts=e.ts.insert(r.targetId,r),e.ns.set(t,r.targetId)),r})}async function Wi(n,t,e){const r=W(n),s=r.ts.get(t),i=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Cr(o))throw o;b("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(s.target)}function al(n,t,e){const r=W(n);let s=G.min(),i=nt();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=W(l),f=h.ns.get(u);return f!==void 0?y.resolve(h.ts.get(f)):h.qr.getTargetData(c,u)}(r,o,fe(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,e?s:G.min(),e?i:nt())).next(a=>(Kp(r,Mg(t),a),{documents:a,ls:i})))}function Kp(n,t,e){let r=n.rs.get(t)||G.min();e.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.rs.set(t,r)}class ll{constructor(){this.activeTargetIds=$g()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Gp{constructor(){this.eo=new ll,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,e,r){this.no[t]=e}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new ll,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Hp{ro(t){}shutdown(){}}/**
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
 */class cl{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $r=null;function gi(){return $r===null?$r=function(){return 268435456+Math.round(2147483648*Math.random())}():$r++,"0x"+$r.toString(16)}/**
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
 */const Wp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Qp{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}Eo(t){this.Ao=t}onMessage(t){this.Ro=t}close(){this.lo()}send(t){this.co(t)}Vo(){this.Po()}mo(){this.To()}fo(t){this.Ao(t)}po(t){this.Ro(t)}}/**
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
 */const Ut="WebChannelConnection";class Yp extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.yo=r+"://"+e.host,this.wo=`projects/${s}/databases/${i}`,this.So=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get bo(){return!1}Do(e,r,s,i,o){const a=gi(),l=this.Co(e,r.toUriEncodedString());b("RestConnection",`Sending RPC '${e}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.wo,"x-goog-request-params":this.So};return this.vo(c,i,o),this.Fo(e,l,c,s).then(u=>(b("RestConnection",`Received RPC '${e}' ${a}: `,u),u),u=>{throw En("RestConnection",`RPC '${e}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}Mo(e,r,s,i,o,a){return this.Do(e,r,s,i,o)}vo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ln}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>e[o]=i),s&&s.headers.forEach((i,o)=>e[o]=i)}Co(e,r){const s=Wp[e];return`${this.yo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Fo(t,e,r,s){const i=gi();return new Promise((o,a)=>{const l=new eg;l.setWithCredentials(!0),l.listenOnce(Jm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case di.NO_ERROR:const u=l.getResponseJson();b(Ut,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(u)),o(u);break;case di.TIMEOUT:b(Ut,`RPC '${t}' ${i} timed out`),a(new N(E.DEADLINE_EXCEEDED,"Request time out"));break;case di.HTTP_ERROR:const h=l.getStatus();if(b(Ut,`RPC '${t}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(m){const T=m.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(T)>=0?T:E.UNKNOWN}(d.status);a(new N(p,d.message))}else a(new N(E.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new N(E.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{b(Ut,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(s);b(Ut,`RPC '${t}' ${i} sending request:`,s),l.send(e,"POST",c,r,15)})}xo(t,e,r){const s=gi(),i=[this.yo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Ym(),a=Xm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new tg({})),this.vo(l.initMessageHeaders,e,r),l.encodeInitMessageHeaders=!0;const u=i.join("");b(Ut,`Creating RPC '${t}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let f=!1,d=!1;const p=new Qp({co:m=>{d?b(Ut,`Not sending because RPC '${t}' stream ${s} is closed:`,m):(f||(b(Ut,`Opening RPC '${t}' stream ${s} transport.`),h.open(),f=!0),b(Ut,`RPC '${t}' stream ${s} sending:`,m),h.send(m))},lo:()=>h.close()}),v=(m,T,A)=>{m.listen(T,k=>{try{A(k)}catch(Q){setTimeout(()=>{throw Q},0)}})};return v(h,xr.EventType.OPEN,()=>{d||(b(Ut,`RPC '${t}' stream ${s} transport opened.`),p.Vo())}),v(h,xr.EventType.CLOSE,()=>{d||(d=!0,b(Ut,`RPC '${t}' stream ${s} transport closed`),p.fo())}),v(h,xr.EventType.ERROR,m=>{d||(d=!0,En(Ut,`RPC '${t}' stream ${s} transport errored:`,m),p.fo(new N(E.UNAVAILABLE,"The operation could not be completed")))}),v(h,xr.EventType.MESSAGE,m=>{var T;if(!d){const A=m.data[0];_t(!!A);const k=A,Q=k.error||((T=k[0])===null||T===void 0?void 0:T.error);if(Q){b(Ut,`RPC '${t}' stream ${s} received error:`,Q);const D=Q.status;let M=function(Z){const $=St[Z];if($!==void 0)return Cu($)}(D),w=Q.message;M===void 0&&(M=E.INTERNAL,w="Unknown error status: "+D+" with message "+Q.message),d=!0,p.fo(new N(M,w)),h.close()}else b(Ut,`RPC '${t}' stream ${s} received:`,A),p.po(A)}}),v(a,Zm.STAT_EVENT,m=>{m.stat===Ua.PROXY?b(Ut,`RPC '${t}' stream ${s} detected buffering proxy`):m.stat===Ua.NOPROXY&&b(Ut,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{p.mo()},0),p}}function pi(){return typeof document<"u"?document:null}/**
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
 */function js(n){return new ap(n,!0)}/**
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
 */class xu{constructor(t,e,r=1e3,s=1.5,i=6e4){this.si=t,this.timerId=e,this.Oo=r,this.No=s,this.Lo=i,this.Bo=0,this.ko=null,this.qo=Date.now(),this.reset()}reset(){this.Bo=0}Qo(){this.Bo=this.Lo}Ko(t){this.cancel();const e=Math.floor(this.Bo+this.$o()),r=Math.max(0,Date.now()-this.qo),s=Math.max(0,e-r);s>0&&b("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.ko=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.qo=Date.now(),t())),this.Bo*=this.No,this.Bo<this.Oo&&(this.Bo=this.Oo),this.Bo>this.Lo&&(this.Bo=this.Lo)}Uo(){this.ko!==null&&(this.ko.skipDelay(),this.ko=null)}cancel(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}$o(){return(Math.random()-.5)*this.Bo}}/**
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
 */class Bu{constructor(t,e,r,s,i,o,a,l){this.si=t,this.Wo=r,this.Go=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.zo=0,this.jo=null,this.Ho=null,this.stream=null,this.Jo=new xu(t,e)}Yo(){return this.state===1||this.state===5||this.Zo()}Zo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Xo()}async stop(){this.Yo()&&await this.close(0)}e_(){this.state=0,this.Jo.reset()}t_(){this.Zo()&&this.jo===null&&(this.jo=this.si.enqueueAfterDelay(this.Wo,6e4,()=>this.n_()))}r_(t){this.i_(),this.stream.send(t)}async n_(){if(this.Zo())return this.close(0)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}async close(t,e){this.i_(),this.s_(),this.Jo.cancel(),this.zo++,t!==4?this.Jo.reset():e&&e.code===E.RESOURCE_EXHAUSTED?(we(e.toString()),we("Using maximum backoff delay to prevent overloading the backend."),this.Jo.Qo()):e&&e.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.o_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Eo(e)}o_(){}auth(){this.state=1;const t=this.__(this.zo),e=this.zo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.zo===e&&this.a_(r,s)},r=>{t(()=>{const s=new N(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.u_(s)})})}a_(t,e){const r=this.__(this.zo);this.stream=this.c_(t,e),this.stream.ho(()=>{r(()=>this.listener.ho())}),this.stream.Io(()=>{r(()=>(this.state=2,this.Ho=this.si.enqueueAfterDelay(this.Go,1e4,()=>(this.Zo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(s=>{r(()=>this.u_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Xo(){this.state=5,this.Jo.Ko(async()=>{this.state=0,this.start()})}u_(t){return b("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}__(t){return e=>{this.si.enqueueAndForget(()=>this.zo===t?e():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Xp extends Bu{constructor(t,e,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,o),this.serializer=i}c_(t,e){return this.connection.xo("Listen",t,e)}onMessage(t){this.Jo.reset();const e=up(this.serializer,t),r=function(i){if(!("targetChange"in i))return G.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?me(o.readTime):G.min()}(t);return this.listener.l_(e,r)}h_(t){const e={};e.database=Hi(this.serializer),e.addTarget=function(i,o){let a;const l=o.target;if(a=qi(l)?{documents:dp(i,l)}:{query:mp(i,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=bu(i,o.resumeToken);const c=zi(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(G.min())>0){a.readTime=ds(i,o.snapshotVersion.toTimestamp());const c=zi(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=pp(this.serializer,t);r&&(e.labels=r),this.r_(e)}P_(t){const e={};e.database=Hi(this.serializer),e.removeTarget=t,this.r_(e)}}class Jp extends Bu{constructor(t,e,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,o),this.serializer=i,this.I_=!1}get T_(){return this.I_}start(){this.I_=!1,this.lastStreamToken=void 0,super.start()}o_(){this.I_&&this.E_([])}c_(t,e){return this.connection.xo("Write",t,e)}onMessage(t){if(_t(!!t.streamToken),this.lastStreamToken=t.streamToken,this.I_){this.Jo.reset();const e=fp(t.writeResults,t.commitTime),r=me(t.commitTime);return this.listener.d_(r,e)}return _t(!t.writeResults||t.writeResults.length===0),this.I_=!0,this.listener.A_()}R_(){const t={};t.database=Hi(this.serializer),this.r_(t)}E_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>hp(this.serializer,r))};this.r_(e)}}/**
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
 */class Zp extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.V_=!1}m_(){if(this.V_)throw new N(E.FAILED_PRECONDITION,"The client has already been terminated.")}Do(t,e,r,s){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Do(t,Ki(e,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(E.UNKNOWN,i.toString())})}Mo(t,e,r,s,i){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,Ki(e,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(E.UNKNOWN,o.toString())})}terminate(){this.V_=!0,this.connection.terminate()}}class t_{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(we(e),this.y_=!1):b("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class e_{constructor(t,e,r,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.ro(o=>{r.enqueueAndForget(async()=>{tn(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=W(l);c.M_.add(4),await br(c),c.N_.set("Unknown"),c.M_.delete(4),await zs(c)}(this))})}),this.N_=new t_(r,s)}}async function zs(n){if(tn(n))for(const t of n.x_)await t(!0)}async function br(n){for(const t of n.x_)await t(!1)}function Uu(n,t){const e=W(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),$o(e)?Uo(e):xn(e).Zo()&&Bo(e,t))}function xo(n,t){const e=W(n),r=xn(e);e.F_.delete(t),r.Zo()&&$u(e,t),e.F_.size===0&&(r.Zo()?r.t_():tn(e)&&e.N_.set("Unknown"))}function Bo(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(G.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}xn(n).h_(t)}function $u(n,t){n.L_.xe(t),xn(n).P_(t)}function Uo(n){n.L_=new rp({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),xn(n).start(),n.N_.w_()}function $o(n){return tn(n)&&!xn(n).Yo()&&n.F_.size>0}function tn(n){return W(n).M_.size===0}function qu(n){n.L_=void 0}async function n_(n){n.N_.set("Online")}async function r_(n){n.F_.forEach((t,e)=>{Bo(n,t)})}async function s_(n,t){qu(n),$o(n)?(n.N_.D_(t),Uo(n)):n.N_.set("Unknown")}async function i_(n,t,e){if(n.N_.set("Online"),t instanceof Pu&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.F_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.F_.delete(a),s.L_.removeTarget(a))}(n,t)}catch(r){b("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ms(n,r)}else if(t instanceof Hr?n.L_.Ke(t):t instanceof Su?n.L_.He(t):n.L_.We(t),!e.isEqual(G.min()))try{const r=await Fu(n.localStore);e.compareTo(r)>=0&&await function(i,o){const a=i.L_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.F_.get(c);u&&i.F_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.F_.get(l);if(!u)return;i.F_.set(l,u.withResumeToken(Kt.EMPTY_BYTE_STRING,u.snapshotVersion)),$u(i,l);const h=new Re(u.target,l,c,u.sequenceNumber);Bo(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){b("RemoteStore","Failed to raise snapshot:",r),await ms(n,r)}}async function ms(n,t,e){if(!Cr(t))throw t;n.M_.add(1),await br(n),n.N_.set("Offline"),e||(e=()=>Fu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await zs(n)})}function ju(n,t){return t().catch(e=>ms(n,e,t))}async function Ks(n){const t=W(n),e=Le(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;o_(t);)try{const s=await jp(t.localStore,r);if(s===null){t.v_.length===0&&e.t_();break}r=s.batchId,a_(t,s)}catch(s){await ms(t,s)}zu(t)&&Ku(t)}function o_(n){return tn(n)&&n.v_.length<10}function a_(n,t){n.v_.push(t);const e=Le(n);e.Zo()&&e.T_&&e.E_(t.mutations)}function zu(n){return tn(n)&&!Le(n).Yo()&&n.v_.length>0}function Ku(n){Le(n).start()}async function l_(n){Le(n).R_()}async function c_(n){const t=Le(n);for(const e of n.v_)t.E_(e.mutations)}async function u_(n,t,e){const r=n.v_.shift(),s=ko.from(r,t,e);await ju(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ks(n)}async function h_(n,t){t&&Le(n).T_&&await async function(r,s){if(function(o){return tp(o)&&o!==E.ABORTED}(s.code)){const i=r.v_.shift();Le(r).e_(),await ju(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ks(r)}}(n,t),zu(n)&&Ku(n)}async function ul(n,t){const e=W(n);e.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const r=tn(e);e.M_.add(3),await br(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await zs(e)}async function f_(n,t){const e=W(n);t?(e.M_.delete(2),await zs(e)):t||(e.M_.add(2),await br(e),e.N_.set("Unknown"))}function xn(n){return n.B_||(n.B_=function(e,r,s){const i=W(e);return i.m_(),new Xp(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ho:n_.bind(null,n),Io:r_.bind(null,n),Eo:s_.bind(null,n),l_:i_.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.e_(),$o(n)?Uo(n):n.N_.set("Unknown")):(await n.B_.stop(),qu(n))})),n.B_}function Le(n){return n.k_||(n.k_=function(e,r,s){const i=W(e);return i.m_(),new Jp(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ho:()=>Promise.resolve(),Io:l_.bind(null,n),Eo:h_.bind(null,n),A_:c_.bind(null,n),d_:u_.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.e_(),await Ks(n)):(await n.k_.stop(),n.v_.length>0&&(b("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
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
 */class qo{constructor(t,e,r,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new be,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,i){const o=Date.now()+r,a=new qo(t,e,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(E.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jo(n,t){if(we("AsyncQueue",`${t}: ${n}`),Cr(n))return new N(E.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class pn{constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=Gn(),this.sortedSet=new vt(this.comparator)}static emptySet(t){return new pn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof pn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new pn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class hl{constructor(){this.q_=new vt(O.comparator)}track(t){const e=t.doc.key,r=this.q_.get(e);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(e,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(e):t.type===1&&r.type===2?this.q_=this.q_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):j():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Rn{constructor(t,e,r,s,i,o,a,l,c){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(t,e,r,s,i){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new Rn(t,e,pn.emptySet(e),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&xs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class d_{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class m_{constructor(){this.queries=new Fn(t=>fu(t),xs),this.onlineState="Unknown",this.z_=new Set}}async function Gu(n,t){const e=W(n);let r=3;const s=t.query;let i=e.queries.get(s);i?!i.W_()&&t.G_()&&(r=2):(i=new d_,r=t.G_()?0:1);try{switch(r){case 0:i.K_=await e.onListen(s,!0);break;case 1:i.K_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(o){const a=jo(o,`Initialization of query '${an(t.query)}' failed`);return void t.onError(a)}e.queries.set(s,i),i.U_.push(t),t.j_(e.onlineState),i.K_&&t.H_(i.K_)&&zo(e)}async function Hu(n,t){const e=W(n),r=t.query;let s=3;const i=e.queries.get(r);if(i){const o=i.U_.indexOf(t);o>=0&&(i.U_.splice(o,1),i.U_.length===0?s=t.G_()?0:1:!i.W_()&&t.G_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function g_(n,t){const e=W(n);let r=!1;for(const s of t){const i=s.query,o=e.queries.get(i);if(o){for(const a of o.U_)a.H_(s)&&(r=!0);o.K_=s}}r&&zo(e)}function p_(n,t,e){const r=W(n),s=r.queries.get(t);if(s)for(const i of s.U_)i.onError(e);r.queries.delete(t)}function zo(n){n.z_.forEach(t=>{t.next()})}var Qi,fl;(fl=Qi||(Qi={})).J_="default",fl.Cache="cache";class Wu{constructor(t,e,r){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Rn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const r=e!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=Rn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==Qi.Cache}}/**
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
 */class Qu{constructor(t){this.key=t}}class Yu{constructor(t){this.key=t}}class __{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=nt(),this.mutatedKeys=nt(),this.Ia=du(t),this.Ta=new pn(this.Ia)}get Ea(){return this.la}da(t,e){const r=e?e.Aa:new hl,s=e?e.Ta:this.Ta;let i=e?e.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((u,h)=>{const f=s.get(u),d=Bs(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),v=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let m=!1;f&&d?f.data.isEqual(d.data)?p!==v&&(r.track({type:3,doc:d}),m=!0):this.Ra(f,d)||(r.track({type:2,doc:d}),m=!0,(l&&this.Ia(d,l)>0||c&&this.Ia(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),m=!0):f&&!d&&(r.track({type:1,doc:f}),m=!0,(l||c)&&(a=!0)),m&&(d?(o=o.add(d),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Ta:o,Aa:r,Zi:a,mutatedKeys:i}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const i=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const o=t.Aa.Q_();o.sort((u,h)=>function(d,p){const v=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return v(d)-v(p)}(u.type,h.type)||this.Ia(u.doc,h.doc)),this.Va(r),s=s!=null&&s;const a=e&&!s?this.ma():[],l=this.Pa.size===0&&this.current&&!s?1:0,c=l!==this.ha;return this.ha=l,o.length!==0||c?{snapshot:new Rn(this.query,t.Ta,i,o,t.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new hl,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=nt(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const e=[];return t.forEach(r=>{this.Pa.has(r)||e.push(new Yu(r))}),this.Pa.forEach(r=>{t.has(r)||e.push(new Qu(r))}),e}pa(t){this.la=t.ls,this.Pa=nt();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return Rn.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class y_{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class E_{constructor(t){this.key=t,this.wa=!1}}class v_{constructor(t,e,r,s,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Fn(a=>fu(a),xs),this.Da=new Map,this.Ca=new Set,this.va=new vt(O.comparator),this.Fa=new Map,this.Ma=new Mo,this.xa={},this.Oa=new Map,this.Na=An.Nn(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function T_(n,t,e=!0){const r=nh(n);let s;const i=r.ba.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await Xu(r,t,e,!0),s}async function w_(n,t){const e=nh(n);await Xu(e,t,!0,!1)}async function Xu(n,t,e,r){const s=await zp(n.localStore,fe(t)),i=s.targetId,o=e?n.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await I_(n,t,i,o==="current",s.resumeToken)),n.isPrimaryClient&&e&&Uu(n.remoteStore,s),a}async function I_(n,t,e,r,s){n.Ba=(h,f,d)=>async function(v,m,T,A){let k=m.view.da(T);k.Zi&&(k=await al(v.localStore,m.query,!1).then(({documents:w})=>m.view.da(w,k)));const Q=A&&A.targetChanges.get(m.targetId),D=A&&A.targetMismatches.get(m.targetId)!=null,M=m.view.applyChanges(k,v.isPrimaryClient,Q,D);return ml(v,m.targetId,M.fa),M.snapshot}(n,h,f,d);const i=await al(n.localStore,t,!0),o=new __(t,i.ls),a=o.da(i.documents),l=Pr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),c=o.applyChanges(a,n.isPrimaryClient,l);ml(n,e,c.fa);const u=new y_(t,e,o);return n.ba.set(t,u),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),c.snapshot}async function A_(n,t,e){const r=W(n),s=r.ba.get(t),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(o=>!xs(o,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Wi(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&xo(r.remoteStore,s.targetId),Yi(r,s.targetId)}).catch(Rr)):(Yi(r,s.targetId),await Wi(r.localStore,s.targetId,!0))}async function R_(n,t){const e=W(n),r=e.ba.get(t),s=e.Da.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),xo(e.remoteStore,r.targetId))}async function C_(n,t,e){const r=N_(n);try{const s=await function(o,a){const l=W(o),c=Vt.now(),u=a.reduce((d,p)=>d.add(p.key),nt());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Ie(),v=nt();return l.ss.getEntries(d,u).next(m=>{p=m,p.forEach((T,A)=>{A.isValidDocument()||(v=v.add(T))})}).next(()=>l.localDocuments.getOverlayedDocuments(d,p)).next(m=>{h=m;const T=[];for(const A of a){const k=Qg(A,h.get(A.key).overlayedDocument);k!=null&&T.push(new Be(A.key,k,iu(k.value.mapValue),de.exists(!0)))}return l.mutationQueue.addMutationBatch(d,c,T,a)}).next(m=>{f=m;const T=m.applyToLocalDocumentSet(h,v);return l.documentOverlayCache.saveOverlays(d,m.batchId,T)})}).then(()=>({batchId:f.batchId,changes:gu(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.xa[o.currentUser.toKey()];c||(c=new vt(ft)),c=c.insert(a,l),o.xa[o.currentUser.toKey()]=c}(r,s.batchId,e),await Vr(r,s.changes),await Ks(r.remoteStore)}catch(s){const i=jo(s,"Failed to persist write");e.reject(i)}}async function Ju(n,t){const e=W(n);try{const r=await $p(e.localStore,t);t.targetChanges.forEach((s,i)=>{const o=e.Fa.get(i);o&&(_t(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.wa=!0:s.modifiedDocuments.size>0?_t(o.wa):s.removedDocuments.size>0&&(_t(o.wa),o.wa=!1))}),await Vr(e,r,t)}catch(r){await Rr(r)}}function dl(n,t,e){const r=W(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ba.forEach((i,o)=>{const a=o.view.j_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=W(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const f of h.U_)f.j_(a)&&(c=!0)}),c&&zo(l)}(r.eventManager,t),s.length&&r.Sa.l_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function S_(n,t,e){const r=W(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Fa.get(t),i=s&&s.key;if(i){let o=new vt(O.comparator);o=o.insert(i,qt.newNoDocument(i,G.min()));const a=nt().add(i),l=new qs(G.min(),new Map,new vt(ft),o,a);await Ju(r,l),r.va=r.va.remove(i),r.Fa.delete(t),Ko(r)}else await Wi(r.localStore,t,!1).then(()=>Yi(r,t,e)).catch(Rr)}async function P_(n,t){const e=W(n),r=t.batch.batchId;try{const s=await Up(e.localStore,t);th(e,r,null),Zu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Vr(e,s)}catch(s){await Rr(s)}}async function b_(n,t,e){const r=W(n);try{const s=await function(o,a){const l=W(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(_t(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,t);th(r,t,e),Zu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Vr(r,s)}catch(s){await Rr(s)}}function Zu(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function th(n,t,e){const r=W(n);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),r.xa[r.currentUser.toKey()]=s}}function Yi(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Da.get(t))n.ba.delete(r),e&&n.Sa.ka(r,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Rr(t).forEach(r=>{n.Ma.containsKey(r)||eh(n,r)})}function eh(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&(xo(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),Ko(n))}function ml(n,t,e){for(const r of e)r instanceof Qu?(n.Ma.addReference(r.key,t),V_(n,r)):r instanceof Yu?(b("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,t),n.Ma.containsKey(r.key)||eh(n,r.key)):j()}function V_(n,t){const e=t.key,r=e.path.canonicalString();n.va.get(e)||n.Ca.has(r)||(b("SyncEngine","New document in limbo: "+e),n.Ca.add(r),Ko(n))}function Ko(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new O(Tt.fromString(t)),r=n.Na.next();n.Fa.set(r,new E_(e)),n.va=n.va.insert(e,r),Uu(n.remoteStore,new Re(fe(Fs(e.path)),r,"TargetPurposeLimboResolution",Co.oe))}}async function Vr(n,t,e){const r=W(n),s=[],i=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,t,e).then(c=>{if((c||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=Fo.Qi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.Sa.l_(s),await async function(l,c){const u=W(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>y.forEach(c,f=>y.forEach(f.ki,d=>u.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>y.forEach(f.qi,d=>u.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!Cr(h))throw h;b("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const d=u.ts.get(f),p=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(p);u.ts=u.ts.insert(f,v)}}}(r.localStore,i))}async function D_(n,t){const e=W(n);if(!e.currentUser.isEqual(t)){b("SyncEngine","User change. New user:",t.toKey());const r=await Lu(e.localStore,t);e.currentUser=t,function(i,o){i.Oa.forEach(a=>{a.forEach(l=>{l.reject(new N(E.CANCELLED,o))})}),i.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Vr(e,r._s)}}function k_(n,t){const e=W(n),r=e.Fa.get(t);if(r&&r.wa)return nt().add(r.key);{let s=nt();const i=e.Da.get(t);if(!i)return s;for(const o of i){const a=e.ba.get(o);s=s.unionWith(a.view.Ea)}return s}}function nh(n){const t=W(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ju.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=k_.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=S_.bind(null,t),t.Sa.l_=g_.bind(null,t.eventManager),t.Sa.ka=p_.bind(null,t.eventManager),t}function N_(n){const t=W(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=P_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=b_.bind(null,t),t}class gl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=js(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Bp(this.persistence,new Fp,t.initialUser,this.serializer)}createPersistence(t){return new Op(Lo.jr,this.serializer)}createSharedClientState(t){return new Gp}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class O_{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=D_.bind(null,this.syncEngine),await f_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new m_}()}createDatastore(t){const e=js(t.databaseInfo.databaseId),r=function(i){return new Yp(i)}(t.databaseInfo);return function(i,o,a,l){return new Zp(i,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,i,o,a){return new e_(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>dl(this.syncEngine,e,0),function(){return cl.D()?new cl:new Hp}())}createSyncEngine(t,e){return function(s,i,o,a,l,c,u){const h=new v_(s,i,o,a,l,c);return u&&(h.La=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const s=W(r);b("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await br(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class rh{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):we("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class M_{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=$t.UNAUTHENTICATED,this.clientId=nu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{b("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(b("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new be;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=jo(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function _i(n,t){n.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Lu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function pl(n,t){n.asyncQueue.verifyOperationInProgress();const e=await F_(n);b("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>ul(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>ul(t.remoteStore,s)),n._onlineComponents=t}function L_(n){return n.name==="FirebaseError"?n.code===E.FAILED_PRECONDITION||n.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function F_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await _i(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!L_(e))throw e;En("Error using user provided cache. Falling back to memory cache: "+e),await _i(n,new gl)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await _i(n,new gl);return n._offlineComponents}async function sh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await pl(n,n._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await pl(n,new O_))),n._onlineComponents}function x_(n){return sh(n).then(t=>t.syncEngine)}async function Xi(n){const t=await sh(n),e=t.eventManager;return e.onListen=T_.bind(null,t.syncEngine),e.onUnlisten=A_.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=w_.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=R_.bind(null,t.syncEngine),e}function B_(n,t,e={}){const r=new be;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new rh({next:f=>{o.enqueueAndForget(()=>Hu(i,h));const d=f.docs.has(a);!d&&f.fromCache?c.reject(new N(E.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&f.fromCache&&l&&l.source==="server"?c.reject(new N(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new Wu(Fs(a.path),u,{includeMetadataChanges:!0,ra:!0});return Gu(i,h)}(await Xi(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function ih(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const _l=new Map;/**
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
 */function U_(n,t,e){if(!e)throw new N(E.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function $_(n,t,e,r){if(t===!0&&r===!0)throw new N(E.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function yl(n){if(!O.isDocumentKey(n))throw new N(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Go(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":j()}function ge(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Go(n);throw new N(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class El{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}$_("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ih((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new N(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new N(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new N(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ho{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new El({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new N(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new El(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new rg;switch(r.type){case"firstParty":return new ag(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=_l.get(e);r&&(b("ComponentProvider","Removing Datastore"),_l.delete(e),r.terminate())}(this),Promise.resolve()}}function q_(n,t,e,r={}){var s;const i=(n=ge(n,Ho))._getSettings(),o=`${t}:${e}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&En("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=$t.MOCK_USER;else{a=kf(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new N(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new $t(c)}n._authCredentials=new sg(new eu(a,l))}}/**
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
 */class Gs{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Gs(this.firestore,t,this._query)}}class Xt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _r(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Xt(this.firestore,t,this._key)}}class _r extends Gs{constructor(t,e,r){super(t,e,Fs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Xt(this.firestore,null,new O(t))}withConverter(t){return new _r(this.firestore,t,this._path)}}function j_(n,t,...e){if(n=Ne(n),arguments.length===1&&(t=nu.newId()),U_("doc","path",t),n instanceof Ho){const r=Tt.fromString(t,...e);return yl(r),new Xt(n,null,new O(r))}{if(!(n instanceof Xt||n instanceof _r))throw new N(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Tt.fromString(t,...e));return yl(r),new Xt(n.firestore,n instanceof _r?n.converter:null,new O(r))}}/**
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
 */class z_{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Jo=new xu(this,"async_queue_retry"),this.hu=()=>{const e=pi();e&&b("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Jo.Uo()};const t=pi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=pi();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new be;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Jo.reset()}catch(t){if(!Cr(t))throw t;b("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Jo.Ko(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw we("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=qo.createAndSchedule(this,t,e,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&j()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}function vl(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Cn extends Ho{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new z_}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||oh(this),this._firestoreClient.terminate()}}function K_(n,t){const e=typeof n=="object"?n:Bd(),r=typeof n=="string"?n:"(default)",s=Md(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Vf("firestore");i&&q_(s,...i)}return s}function Wo(n){return n._firestoreClient||oh(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function oh(n){var t,e,r;const s=n._freezeSettings(),i=function(a,l,c,u){return new vg(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,ih(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new M_(n._authCredentials,n._appCheckCredentials,n._queue,i),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Sn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Sn(Kt.fromBase64String(t))}catch(e){throw new N(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Sn(Kt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Hs{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ft(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Ws{constructor(t){this._methodName=t}}/**
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
 */class Qo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ft(this._lat,t._lat)||ft(this._long,t._long)}}/**
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
 */const G_=/^__.*__$/;class H_{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Be(t,this.data,this.fieldMask,e,this.fieldTransforms):new Sr(t,this.data,e,this.fieldTransforms)}}class ah{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Be(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function lh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class Qs{constructor(t,e,r,s,i,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new Qs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.wu(t),s}Su(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return gs(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(lh(this.fu)&&G_.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class W_{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||js(t)}Fu(t,e,r,s=!1){return new Qs({fu:t,methodName:e,vu:r,path:Ft.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ch(n){const t=n._freezeSettings(),e=js(n._databaseId);return new W_(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Q_(n,t,e,r,s,i={}){const o=n.Fu(i.merge||i.mergeFields?2:0,t,e,s);Xo("Data must be an object, but it was:",o,r);const a=uh(r,o);let l,c;if(i.merge)l=new te(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Ji(t,h,e);if(!o.contains(f))throw new N(E.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);fh(u,f)||u.push(f)}l=new te(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new H_(new Yt(a),l,c)}class Ys extends Ws{_toFieldTransform(t){if(t.fu!==2)throw t.fu===1?t.Du(`${this._methodName}() can only appear at the top level of your update data`):t.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ys}}function Y_(n,t,e){return new Qs({fu:3,vu:t.settings.vu,methodName:n._methodName,yu:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Yo extends Ws{constructor(t,e){super(t),this.Mu=e}_toFieldTransform(t){const e=Y_(this,t,!0),r=this.Mu.map(i=>Dr(i,e)),s=new In(r);return new Kg(t.path,s)}isEqual(t){return t instanceof Yo&&Zr(this.Mu,t.Mu)}}function X_(n,t,e,r){const s=n.Fu(1,t,e);Xo("Data must be an object, but it was:",s,r);const i=[],o=Yt.empty();Ze(r,(l,c)=>{const u=Jo(t,l,e);c=Ne(c);const h=s.Su(u);if(c instanceof Ys)i.push(u);else{const f=Dr(c,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new te(i);return new ah(o,a,s.fieldTransforms)}function J_(n,t,e,r,s,i){const o=n.Fu(1,t,e),a=[Ji(t,r,e)],l=[s];if(i.length%2!=0)throw new N(E.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Ji(t,i[f])),l.push(i[f+1]);const c=[],u=Yt.empty();for(let f=a.length-1;f>=0;--f)if(!fh(c,a[f])){const d=a[f];let p=l[f];p=Ne(p);const v=o.Su(d);if(p instanceof Ys)c.push(d);else{const m=Dr(p,v);m!=null&&(c.push(d),u.set(d,m))}}const h=new te(c);return new ah(u,h,o.fieldTransforms)}function Dr(n,t){if(hh(n=Ne(n)))return Xo("Unsupported field value:",t,n),uh(n,t);if(n instanceof Ws)return function(r,s){if(!lh(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Dr(a,s.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,t)}return function(r,s){if((r=Ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qg(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Vt.fromDate(r);return{timestampValue:ds(s.serializer,i)}}if(r instanceof Vt){const i=new Vt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ds(s.serializer,i)}}if(r instanceof Qo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Sn)return{bytesValue:bu(s.serializer,r._byteString)};if(r instanceof Xt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Oo(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Go(r)}`)}(n,t)}function uh(n,t){const e={};return ru(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ze(n,(r,s)=>{const i=Dr(s,t.pu(r));i!=null&&(e[r]=i)}),{mapValue:{fields:e}}}function hh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Vt||n instanceof Qo||n instanceof Sn||n instanceof Xt||n instanceof Ws)}function Xo(n,t,e){if(!hh(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Go(e);throw r==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+r)}}function Ji(n,t,e){if((t=Ne(t))instanceof Hs)return t._internalPath;if(typeof t=="string")return Jo(n,t);throw gs("Field path arguments must be of type string or ",n,!1,void 0,e)}const Z_=new RegExp("[~\\*/\\[\\]]");function Jo(n,t,e){if(t.search(Z_)>=0)throw gs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Hs(...t.split("."))._internalPath}catch{throw gs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function gs(n,t,e,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new N(E.INVALID_ARGUMENT,a+n+l)}function fh(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class dh{constructor(t,e,r,s,i){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ty(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(mh("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class ty extends dh{data(){return super.data()}}function mh(n,t){return typeof t=="string"?Jo(n,t):t instanceof Hs?t._internalPath:t._delegate._internalPath}/**
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
 */function ey(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ny{convertValue(t,e="none"){switch(Xe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Pt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ye(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw j()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Ze(t,(s,i)=>{r[s]=this.convertValue(i,e)}),r}convertGeoPoint(t){return new Qo(Pt(t.latitude),Pt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Po(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(dr(t));default:return null}}convertTimestamp(t){const e=Me(t);return new Vt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Tt.fromString(t);_t(Mu(r));const s=new mr(r.get(1),r.get(3)),i=new O(r.popFirst(5));return s.isEqual(e)||we(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
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
 */function ry(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
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
 */class Wn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class gh extends dh{constructor(t,e,r,s,i,o){super(t,e,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Wr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(mh("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Wr extends gh{data(t={}){return super.data(t)}}class sy{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Wn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Wr(this._firestore,this._userDataWriter,r.key,r,new Wn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Wr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Wn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Wr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Wn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:iy(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function iy(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}/**
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
 */function oy(n){n=ge(n,Xt);const t=ge(n.firestore,Cn);return B_(Wo(t),n._key).then(e=>yh(t,n,e))}class ph extends ny{constructor(t){super(),this.firestore=t}convertBytes(t){return new Sn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Xt(this.firestore,null,e)}}function Tl(n,t,e){n=ge(n,Xt);const r=ge(n.firestore,Cn),s=ry(n.converter,t);return _h(r,[Q_(ch(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,de.none())])}function ay(n,t,e,...r){n=ge(n,Xt);const s=ge(n.firestore,Cn),i=ch(s);let o;return o=typeof(t=Ne(t))=="string"||t instanceof Hs?J_(i,"updateDoc",n._key,t,e,r):X_(i,"updateDoc",n._key,t),_h(s,[o.toMutation(n._key,de.exists(!0))])}function ly(n,...t){var e,r,s;n=Ne(n);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof t[o]!="object"||vl(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(vl(t[o])){const h=t[o];t[o]=(e=h.next)===null||e===void 0?void 0:e.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(n instanceof Xt)c=ge(n.firestore,Cn),u=Fs(n._key.path),l={next:h=>{t[o]&&t[o](yh(c,n,h))},error:t[o+1],complete:t[o+2]};else{const h=ge(n,Gs);c=ge(h.firestore,Cn),u=h._query;const f=new ph(c);l={next:d=>{t[o]&&t[o](new sy(c,f,h,d))},error:t[o+1],complete:t[o+2]},ey(n._query)}return function(f,d,p,v){const m=new rh(v),T=new Wu(d,m,p);return f.asyncQueue.enqueueAndForget(async()=>Gu(await Xi(f),T)),()=>{m.$a(),f.asyncQueue.enqueueAndForget(async()=>Hu(await Xi(f),T))}}(Wo(c),u,a,l)}function _h(n,t){return function(r,s){const i=new be;return r.asyncQueue.enqueueAndForget(async()=>C_(await x_(r),s,i)),i.promise}(Wo(n),t)}function yh(n,t,e){const r=e.docs.get(t._key),s=new ph(n);return new gh(n,s,t._key,r,new Wn(e.hasPendingWrites,e.fromCache),t.converter)}function cy(...n){return new Yo("arrayUnion",n)}(function(t,e=!0){(function(s){Ln=s})(xd),es(new nr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Cn(new ig(r.getProvider("auth-internal")),new cg(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new N(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mr(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:e},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),dn($a,"4.6.1",t),dn($a,"4.6.1","esm2017")})();var uy="firebase",hy="10.11.1";/**
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
 */dn(uy,hy,"app");let yi=null,Ei=null;const fy=()=>(yi||(yi=Yl({apiKey:"AIzaSyAEkDsTVEbr-spwGn7NP4WVMGjjFvc_Vnk",authDomain:"parrotbeak-2b0ae.firebaseapp.com",projectId:"parrotbeak-2b0ae",storageBucket:"parrotbeak-2b0ae.appspot.com",messagingSenderId:"696191016129",appId:"1:696191016129:web:9086db78bbf9d939e58840"})),yi),dy=()=>(Ei||(Ei=K_(fy())),Ei),wl=n=>{const t=Object.create(null);for(let e=0;e<n.fields.length;e++)t[n.fields[e]]=n[n.fields[e]];return t};class my{constructor(t,e,r){this.id=t,this.collection=e,this.fields=r,this.ignoreAuth=!1}get ref(){return this._ref||(this._ref=j_(dy(),this.collection,this.id)),this._ref}fetch(){return oy(this.ref)}create(){return Tl(this.ref,wl(this))}async save(t=!1,e=Et){try{const r=await this.fetch().catch(Et);if(!t&&r&&r.exists())throw this.id+" already exists in "+this.collection+" ...";return e&&e(r),await Tl(this.ref,wl(this)),!0}catch(r){return Ti(r),!1}}update(t){return ay(this.ref,t).catch(()=>{Ti("Could not update the document...")})}subscribeToData(t){return ly(this.ref,t)}}const Il=n=>n===Ht.OFFER?"offerIceCandidates":"answerIceCandidates",gy=n=>{const t=(n.getMonth()+1)*31,e=n.getDate();return(t+e).toString().padStart(3,"0")+Yh(3)};class Al extends my{constructor(t,e,r,s=_n){const i=new Date;super(t||gy(i),"/quinque-rooms",["created","size","offerIceCandidates","answerIceCandidates","turns","answerPubKey","iv"]),t||(this.created=i,this.size=to.includes(s)?s:_n,this.offerIceCandidates=[],this.answerIceCandidates=[],this.turns=$l(this.size*this.size),this.answerPubKey=e,this.iv=r)}saveOffer(t){this.offer=t,this.update({offer:t})}saveAnswer(t){this.answer=t,this.update({answer:t})}addIceCandidate(t,e){const r=Il(t);this.update({[r]:cy(e)})}clearIceCandidates(t){const e=Il(t);this.update({[e]:[]})}}const Eh=()=>!!(navigator!=null&&navigator.clipboard),py=n=>Eh()?(navigator.clipboard.writeText(n),!0):!1,_y={iceServers:[{urls:"stun:stun.services.mozilla.com"},{urls:"stun:stun.l.google.com:19302"}]};class yy{constructor(){this.onicecandidate=null,this.onstatechange=null,this.onmessage=null,this.dataChannel=null,this.remoteDescriptionApplied=new Promise(t=>{this.applyRemoteDescription=t})}init(){const t=this;this.connection=new RTCPeerConnection(_y),this.connection.onicecandidate=e=>{t.onicecandidate&&t.onicecandidate(e)},this.connection.onconnectionstatechange=e=>{t.onstatechange&&t.onstatechange(e)},this.connection.ondatachannel=e=>{const{channel:r}=e;r&&(r.onopen=()=>{},r.onclose=()=>{},r.onmessage=s=>{this.onmessage&&this.onmessage(s)},this.dataChannel=r)}}close(){var t;(t=this.connection)==null||t.close()}createDatachannel(t="default"){var e;this.dataChannel=((e=this.connection)==null?void 0:e.createDataChannel(t))||null,this.dataChannel&&(this.dataChannel.onopen=()=>{},this.dataChannel.onclose=()=>{},this.dataChannel.onmessage=r=>{this.onmessage&&this.onmessage(r)})}localDescription(){var t,e;return((e=(t=this.connection)==null?void 0:t.localDescription)==null?void 0:e.sdp)||""}createOffer(){var t;return(t=this.connection)==null?void 0:t.createOffer()}createAnswer(){var t;return(t=this.connection)==null?void 0:t.createAnswer()}async setRemoteDescription(t){var e;await((e=this.connection)==null?void 0:e.setRemoteDescription(t)),this.applyRemoteDescription()}setLocalDescription(t){var e;return(e=this.connection)==null?void 0:e.setLocalDescription(t)}addIceCandidate(t){var e;return(e=this.connection)==null?void 0:e.addIceCandidate(t)}sendChannelMessage(t){var e;if(!this.dataChannel||this.dataChannel.readyState!=="open"){(e=this.connection)==null||e.close();return}this.dataChannel.send(t)}}const pt=new yy,vh={name:"ECDH",namedCurve:"P-384"},vi="AES-GCM",Rl=n=>btoa(String.fromCharCode.apply(null,new Uint8Array(n))),Cl=n=>{const t=atob(n),e=new Uint8Array(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e.buffer},Ey=n=>{const t=JSON.parse(n);return crypto.subtle.importKey("jwk",t,vh,!0,[])};class vy{constructor(){this.pubKey=null,this.prKey=null,this.iv=crypto.getRandomValues(new Uint8Array(12)),this.waitingForSharedSecret=new Promise(t=>{this.resolveShareSecret=t})}init(){return new Promise(t=>{crypto.subtle.generateKey(vh,!0,["deriveKey"]).then(async e=>{this.pubKey=e.publicKey,this.prKey=e.privateKey,t()})})}async deriveSharedKey(t){return this.prKey?crypto.subtle.deriveKey({name:"ECDH",public:t},this.prKey,{name:vi,length:256},!0,["encrypt","decrypt"]):null}async exportPublicKeyToJwk(){return this.pubKey?JSON.stringify(await crypto.subtle.exportKey("jwk",this.pubKey)):""}async setSharedKeyFromJwkString(t){this.shared={key:await this.deriveSharedKey(await Ey(t))},this.resolveShareSecret()}setIvFromRemote(t){this.iv=new Uint8Array(Cl(t))}async ecnrypt(t,e,r){var s;if(e||(e=((s=this.shared)==null?void 0:s.key)||void 0),!e)throw"The key is not generated...";return Rl(await crypto.subtle.encrypt({name:vi,iv:r||this.iv},e,new TextEncoder().encode(t)))}async decrypt(t,e,r){var s;if(e||(e=((s=this.shared)==null?void 0:s.key)||void 0),!e)throw"Key is not provided...";return new TextDecoder().decode(await crypto.subtle.decrypt({name:vi,iv:r||this.iv},e,Cl(t)))}ivString(){return Rl(this.iv)}}const Ot=new vy,Sl=()=>{Ul.set({text:"",ok:Et,dismiss:Et})},Th=(n,t="OK",e="Cancel")=>new Promise(r=>{Ul.set({text:n,okLabel:t,dismissLabel:e,ok:()=>{Sl(),r(!0)},dismiss:()=>{Sl(),r(!1)}})});function Ty(n){let t,e;return t=new xl({}),{c(){at(t.$$.fragment)},l(r){lt(t.$$.fragment,r)},m(r,s){ct(t,r,s),e=!0},p:Et,i(r){e||(L(t.$$.fragment,r),e=!0)},o(r){q(t.$$.fragment,r),e=!1},d(r){ut(t,r)}}}function wy(n){var f;let t,e,r,s=((f=n[4])==null?void 0:f.id)+"",i,o,a,l,c,u,h=n[5]&&Cy(n);return{c(){t=B("p"),e=Ve("Room id: "),r=B("span"),i=Ve(s),o=Y(),a=B("input"),l=Y(),h&&h.c(),c=pe(),this.h()},l(d){t=U(d,"P",{class:!0});var p=et(t);e=De(p,"Room id: "),r=U(p,"SPAN",{class:!0});var v=et(r);i=De(v,s),v.forEach(S),p.forEach(S),o=X(d),a=U(d,"INPUT",{class:!0}),l=X(d),h&&h.l(d),c=pe(),this.h()},h(){V(r,"class","text-white"),V(t,"class","pb-4 text-faded"),a.value=n[1],V(a,"class",Py),a.readOnly=!0},m(d,p){it(d,t,p),P(t,e),P(t,r),P(r,i),it(d,o,p),it(d,a,p),it(d,l,p),h&&h.m(d,p),it(d,c,p),u=!0},p(d,p){var v;(!u||p&16)&&s!==(s=((v=d[4])==null?void 0:v.id)+"")&&_s(i,s),(!u||p&2&&a.value!==d[1])&&(a.value=d[1]),d[5]&&h.p(d,p)},i(d){u||(L(h),u=!0)},o(d){q(h),u=!1},d(d){d&&(S(t),S(o),S(a),S(l),S(c)),h&&h.d(d)}}}function Iy(n){let t,e;return{c(){t=B("p"),e=Ve(n[3]),this.h()},l(r){t=U(r,"P",{class:!0});var s=et(t);e=De(s,n[3]),s.forEach(S),this.h()},h(){V(t,"class","text-faded")},m(r,s){it(r,t,s),P(t,e)},p(r,s){s&8&&_s(e,r[3])},i:Et,o:Et,d(r){r&&S(t)}}}function Ay(n){let t,e="Your browser does not support webRTC peer-to-peer connections.. If you see this message, please try to change to a browser which supports webRTC (hint: most of modern web browsers do).";return{c(){t=B("p"),t.textContent=e,this.h()},l(r){t=U(r,"P",{class:!0,"data-svelte-h":!0}),ie(t)!=="svelte-touu31"&&(t.textContent=e),this.h()},h(){V(t,"class","text-faded")},m(r,s){it(r,t,s)},p:Et,i:Et,o:Et,d(r){r&&S(t)}}}function Ry(n){let t,e;return t=new xl({}),{c(){at(t.$$.fragment)},l(r){lt(t.$$.fragment,r)},m(r,s){ct(t,r,s),e=!0},p:Et,i(r){e||(L(t.$$.fragment,r),e=!0)},o(r){q(t.$$.fragment,r),e=!1},d(r){ut(t,r)}}}function Cy(n){let t,e,r,s;e=new fn({props:{label:"Copy link",icon:Bh,class:"text-primary border-2 border-primary px-4"}}),e.$on("click",n[6]);let i=n[2]&&Pl(n);return{c(){t=B("div"),at(e.$$.fragment),r=Y(),i&&i.c(),this.h()},l(o){t=U(o,"DIV",{class:!0});var a=et(t);lt(e.$$.fragment,a),r=X(a),i&&i.l(a),a.forEach(S),this.h()},h(){V(t,"class","flex flex-row items-center gap-4 pt-6")},m(o,a){it(o,t,a),ct(e,t,null),P(t,r),i&&i.m(t,null),s=!0},p(o,a){o[2]?i?i.p(o,a):(i=Pl(o),i.c(),i.m(t,null)):i&&(i.d(1),i=null)},i(o){s||(L(e.$$.fragment,o),s=!0)},o(o){q(e.$$.fragment,o),s=!1},d(o){o&&S(t),ut(e),i&&i.d()}}}function Pl(n){let t,e=n[2].label+"",r,s;return{c(){t=B("p"),r=Ve(e),this.h()},l(i){t=U(i,"P",{class:!0});var o=et(t);r=De(o,e),o.forEach(S),this.h()},h(){V(t,"class",s=n[2].class)},m(i,o){it(i,t,o),P(t,r)},p(i,o){o&4&&e!==(e=i[2].label+"")&&_s(r,e),o&4&&s!==(s=i[2].class)&&V(t,"class",s)},d(i){i&&S(t)}}}function Sy(n){let t,e,r,s;const i=[Ry,Ay,Iy,wy,Ty],o=[];function a(l,c){return l[0]===null?0:l[0]?l[3]?2:l[1]?3:4:1}return t=a(n),e=o[t]=i[t](n),{c(){e.c(),r=pe()},l(l){e.l(l),r=pe()},m(l,c){o[t].m(l,c),it(l,r,c),s=!0},p(l,[c]){let u=t;t=a(l),t===u?o[t].p(l,c):(Dn(),q(o[u],1,1,()=>{o[u]=null}),kn(),e=o[t],e?e.p(l,c):(e=o[t]=i[t](l),e.c()),L(e,1),e.m(r.parentNode,r))},i(l){s||(L(e),s=!0)},o(l){q(e),s=!1},d(l){l&&S(r),o[t].d(l)}}}const Py="p-2 border border-gray-700 rounded-md w-full bg-gray-800";function by(n,t,e){let r;le(n,Bl,M=>e(11,r=M));const s=Eh(),i=Ol(),o={};let a=null,l="",c=null,u="",h=null,f=null;const d={},p=M=>{const w=M.target;w?w.connectionState==="connected"?i("connected",{size:d.size,status:d.type===Ht.OFFER?Wt.CONNECTED_AS_PLAYER1:Wt.CONNECTED_AS_PLAYER2,turns:d.turns}):w.connectionState==="failed"?e(3,u="Negotiation failed. Check your network or VPN..."):w.connectionState==="connecting"?vf("Connecting the peer..."):e(3,u="Unknown network error..."):e(3,u="Could not create a gaming session...")},v=async(M,w)=>{if(!w)return;await Ot.waitingForSharedSecret;const mt={type:"candidate",sdpMid:w.sdpMid,sdpMLineIndex:w.sdpMLineIndex,candidate:w.candidate},Z=await Ot.ecnrypt(JSON.stringify(mt));o[Z]||(h==null||h.addIceCandidate(M,Z),o[Z]=!0)},m=async()=>{if(!h)return;pt.init(),pt.onicecandidate=({candidate:mt})=>{v(Ht.ANSWER,mt)},pt.onstatechange=p,await Ot.setSharedKeyFromJwkString(d.offerPubKey);const M=new RTCSessionDescription({type:Ht.OFFER,sdp:await Ot.decrypt(d.offer)});await pt.setRemoteDescription(M);const w=await pt.createAnswer();if(!w||!w.sdp){e(3,u="Could not verify the peer connection...");return}await pt.setLocalDescription(new RTCSessionDescription(w)),d.answer=w.sdp,h.saveAnswer(await Ot.ecnrypt(w.sdp)),h.saveOffer("-")},T=async()=>{if(!h||d.answer==="-")return;const M=new RTCSessionDescription({type:Ht.ANSWER,sdp:await Ot.decrypt(d.answer)});await pt.setRemoteDescription(M),h.saveAnswer("-")},A=async M=>{const w=M.data()||{};if(!Object.keys(w).length)return;const mt=["size","turns","offerPubKey","iv"];for(let $=0;$<mt.length;$++){const R=mt[$];!d[R]&&w[R]&&(d[R]=w[R])}!d.answerPubKey&&w.answerPubKey&&(d.answerPubKey=w.answerPubKey,d.type===Ht.OFFER&&(Ot.setIvFromRemote(w.iv),await Ot.setSharedKeyFromJwkString(w.answerPubKey),d.type===Ht.OFFER&&(h==null||h.saveOffer(await Ot.ecnrypt(pt.localDescription()))))),!d.offer&&w.offer&&(d.offer=w.offer,d.type===Ht.ANSWER&&m()),!d.answer&&w.answer&&(d.answer=w.answer,T());const Z=async $=>{await pt.remoteDescriptionApplied;for(let R=0;R<$.length;R++){let F=null;try{F=JSON.parse(await Ot.decrypt($[R]))}catch(K){Ti(K)}F&&(o[$[R]]||(await pt.addIceCandidate(F.candidate?F:null),o[$[R]]=!0))}};d.type===Ht.OFFER&&w.answerIceCandidates.length?(await Ot.waitingForSharedSecret,await Z(w.answerIceCandidates),h==null||h.clearIceCandidates(Ht.ANSWER)):d.type===Ht.ANSWER&&w.offerIceCandidates.length&&(await Ot.waitingForSharedSecret,await Z(w.offerIceCandidates),h==null||h.clearIceCandidates(Ht.OFFER))},k=async M=>{await Ot.init(),e(4,h=new Al(M)),f=h.subscribeToData(A),pt.init(),pt.onicecandidate=({candidate:mt})=>{v(Ht.OFFER,mt)},pt.onstatechange=p,pt.createDatachannel();const w=await pt.createOffer();if(!w||!w.sdp){e(3,u="Could not set up a stable connection...");return}d.type=Ht.OFFER,h.update({offerPubKey:await Ot.exportPublicKeyToJwk()}),pt.setLocalDescription(w)},Q=async()=>{await Ot.init();let M=parseInt(r.url.searchParams.get("s")||String(_n));to.includes(M)||(M=_n),e(4,h=new Al("",await Ot.exportPublicKeyToJwk(),Ot.ivString(),M)),await!h.save()&&(await Th("This room ID is already taken. Refresh the page to get a new one."),window.location.reload()),e(1,l=r.url.protocol+"//"+r.url.host+r.url.pathname+"?room="+h.id),h.subscribeToData(A),d.type=Ht.ANSWER},D=()=>{e(2,c=py(l)?{class:"text-green-500",label:"Link copied!"}:{class:"text-red-500",label:"Could not copy..."})};return Ll(()=>{if(e(0,a=!!window.RTCPeerConnection),!a)return;const M=r.url.searchParams.get("room");M?k(M):Q()}),Fh(()=>{f&&f()}),[a,l,c,u,h,s,D]}class Vy extends bn{constructor(t){super(),Vn(this,t,by,Sy,Pn,{})}}function bl(n,t,e){const r=n.slice();return r[64]=t[e],r[66]=e,r}function Vl(n,t,e){const r=n.slice();return r[64]=t[e],r[68]=e,r}function Dl(n){let t,e;return t=new af({props:{rowIndex:n[66],colIndex:n[68],selected:n[0][n[66]][n[68]],selectCandidate:n[3][n[66]][n[68]],hoverColor:n[16],disabled:n[1],hoverCoords:n[6]}}),t.$on("click",n[17]),t.$on("enter",n[20]),t.$on("leave",n[18]),{c(){at(t.$$.fragment)},l(r){lt(t.$$.fragment,r)},m(r,s){ct(t,r,s),e=!0},p(r,s){const i={};s[0]&1&&(i.selected=r[0][r[66]][r[68]]),s[0]&8&&(i.selectCandidate=r[3][r[66]][r[68]]),s[0]&65536&&(i.hoverColor=r[16]),s[0]&2&&(i.disabled=r[1]),s[0]&64&&(i.hoverCoords=r[6]),t.$set(i)},i(r){e||(L(t.$$.fragment,r),e=!0)},o(r){q(t.$$.fragment,r),e=!1},d(r){ut(t,r)}}}function kl(n){let t,e,r,s=ke({length:n[8]}),i=[];for(let a=0;a<s.length;a+=1)i[a]=Dl(Vl(n,s,a));const o=a=>q(i[a],1,1,()=>{i[a]=null});return{c(){t=B("div");for(let a=0;a<i.length;a+=1)i[a].c();e=Y(),this.h()},l(a){t=U(a,"DIV",{class:!0});var l=et(t);for(let c=0;c<i.length;c+=1)i[c].l(l);e=X(l),l.forEach(S),this.h()},h(){V(t,"class","flex flex-row gap-1")},m(a,l){it(a,t,l);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(t,null);P(t,e),r=!0},p(a,l){if(l[0]&1507659){s=ke({length:a[8]});let c;for(c=0;c<s.length;c+=1){const u=Vl(a,s,c);i[c]?(i[c].p(u,l),L(i[c],1)):(i[c]=Dl(u),i[c].c(),L(i[c],1),i[c].m(t,e))}for(Dn(),c=s.length;c<i.length;c+=1)o(c);kn()}},i(a){if(!r){for(let l=0;l<s.length;l+=1)L(i[l]);r=!0}},o(a){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)q(i[l]);r=!1},d(a){a&&S(t),ps(i,a)}}}function Dy(n){let t,e="This will reset the current board and it's progress. Continue?";return{c(){t=B("p"),t.textContent=e},l(r){t=U(r,"P",{"data-svelte-h":!0}),ie(t)!=="svelte-1jpj5pu"&&(t.textContent=e)},m(r,s){it(r,t,s)},p:Et,d(r){r&&S(t)}}}function ky(n){let t,e="A tie!";return{c(){t=B("p"),t.textContent=e,this.h()},l(r){t=U(r,"P",{class:!0,"data-svelte-h":!0}),ie(t)!=="svelte-16n1wz6"&&(t.textContent=e),this.h()},h(){V(t,"class","text-white")},m(r,s){it(r,t,s)},p:Et,d(r){r&&S(t)}}}function Ny(n){let t,e;return{c(){t=B("p"),e=Ve("Player 2 won!"),this.h()},l(r){t=U(r,"P",{class:!0});var s=et(t);e=De(s,"Player 2 won!"),s.forEach(S),this.h()},h(){V(t,"class",Js)},m(r,s){it(r,t,s),P(t,e)},p:Et,d(r){r&&S(t)}}}function Oy(n){let t,e;return{c(){t=B("p"),e=Ve("Player 1 won!"),this.h()},l(r){t=U(r,"P",{class:!0});var s=et(t);e=De(s,"Player 1 won!"),s.forEach(S),this.h()},h(){V(t,"class",Xs)},m(r,s){it(r,t,s),P(t,e)},p:Et,d(r){r&&S(t)}}}function My(n){let t,e="NICE!",r,s,i,o,a,l,c,u,h,f,d;function p(T,A){return T[15][0]>T[15][1]?Oy:T[15][0]<T[15][1]?Ny:ky}let v=p(n),m=v(n);return l=new ql({props:{score1:n[15][0],score2:n[15][1],score1Class:"font-bold "+Xs,score2Class:"font-bold "+Js}}),u=new fn({props:{label:"Play again",icon:Fl,class:"border border-primary text-primary mx-auto mt-10 px-6"}}),u.$on("click",n[22]),f=new fn({props:{label:"Back",class:"text-faded mx-auto mt-4 px-6"}}),f.$on("click",n[24]),{c(){t=B("p"),t.textContent=e,r=Y(),s=B("div"),i=B("div"),o=B("div"),m.c(),a=Y(),at(l.$$.fragment),c=Y(),at(u.$$.fragment),h=Y(),at(f.$$.fragment),this.h()},l(T){t=U(T,"P",{"data-svelte-h":!0}),ie(t)!=="svelte-p3lnqo"&&(t.textContent=e),r=X(T),s=U(T,"DIV",{class:!0});var A=et(s);i=U(A,"DIV",{});var k=et(i);o=U(k,"DIV",{class:!0});var Q=et(o);m.l(Q),a=X(Q),lt(l.$$.fragment,Q),Q.forEach(S),c=X(k),lt(u.$$.fragment,k),h=X(k),lt(f.$$.fragment,k),k.forEach(S),A.forEach(S),this.h()},h(){V(o,"class","text-4xl text-center"),V(s,"class","h-96 max-w-full max-h-full flex flex-col justify-center items-center")},m(T,A){it(T,t,A),it(T,r,A),it(T,s,A),P(s,i),P(i,o),m.m(o,null),P(o,a),ct(l,o,null),P(i,c),ct(u,i,null),P(i,h),ct(f,i,null),d=!0},p(T,A){v===(v=p(T))&&m?m.p(T,A):(m.d(1),m=v(T),m&&(m.c(),m.m(o,a)));const k={};A[0]&32768&&(k.score1=T[15][0]),A[0]&32768&&(k.score2=T[15][1]),l.$set(k)},i(T){d||(L(l.$$.fragment,T),L(u.$$.fragment,T),L(f.$$.fragment,T),d=!0)},o(T){q(l.$$.fragment,T),q(u.$$.fragment,T),q(f.$$.fragment,T),d=!1},d(T){T&&(S(t),S(r),S(s)),m.d(),ut(l),ut(u),ut(f)}}}function Ly(n){let t,e;return t=new Vy({}),t.$on("connected",n[25]),{c(){at(t.$$.fragment)},l(r){lt(t.$$.fragment,r)},m(r,s){ct(t,r,s),e=!0},p:Et,i(r){e||(L(t.$$.fragment,r),e=!0)},o(r){q(t.$$.fragment,r),e=!1},d(r){ut(t,r)}}}function Fy(n){let t,e="Player disconnected... Please start another session.";return{c(){t=B("p"),t.textContent=e},l(r){t=U(r,"P",{"data-svelte-h":!0}),ie(t)!=="svelte-xd9p7l"&&(t.textContent=e)},m(r,s){it(r,t,s)},p:Et,i:Et,o:Et,d(r){r&&S(t)}}}function xy(n){let t,e,r,s;const i=[Fy,Ly],o=[];function a(l,c){return l[9]?0:1}return t=a(n),e=o[t]=i[t](n),{c(){e.c(),r=pe()},l(l){e.l(l),r=pe()},m(l,c){o[t].m(l,c),it(l,r,c),s=!0},p(l,c){let u=t;t=a(l),t===u?o[t].p(l,c):(Dn(),q(o[u],1,1,()=>{o[u]=null}),kn(),e=o[t],e?e.p(l,c):(e=o[t]=i[t](l),e.c()),L(e,1),e.m(r.parentNode,r))},i(l){s||(L(e),s=!0)},o(l){q(e),s=!1},d(l){l&&S(r),o[t].d(l)}}}function By(n){let t,e;return t=new Wh({}),{c(){at(t.$$.fragment)},l(r){lt(t.$$.fragment,r)},m(r,s){ct(t,r,s),e=!0},i(r){e||(L(t.$$.fragment,r),e=!0)},o(r){q(t.$$.fragment,r),e=!1},d(r){ut(t,r)}}}function Uy(n){let t,e,r,s,i,o,a,l,c,u,h,f,d,p,v,m,T,A,k,Q,D,M,w,mt,Z,$,R,F,K,J;s=new fn({props:{icon:Uh,class:"text-primary"}}),s.$on("click",n[21]),l=new ql({props:{score1:n[15][0],score2:n[15][1],score1Class:Xs,score2Class:Js}}),u=new pf({props:{class:n[14],color:n[2]}}),f=new fn({props:{class:"text-primary",icon:Fl}}),f.$on("click",n[22]);let It=ke({length:n[8]}),ht=[];for(let _=0;_<It.length;_+=1)ht[_]=kl(bl(n,It,_));const ne=_=>q(ht[_],1,1,()=>{ht[_]=null});return D=new fn({props:{label:"Rules",class:"text-faded text-sm"}}),D.$on("click",n[26]),w=new jn({props:{showing:n[4],title:"Reset the game?",okLabel:"Reset",$$slots:{default:[Dy]},$$scope:{ctx:n}}}),w.$on("ok",n[37]),w.$on("dismiss",n[23]),Z=new jn({props:{showing:n[5],hideOk:!0,hideCancel:!0,class:"font-bold",$$slots:{default:[My]},$$scope:{ctx:n}}}),Z.$on("dismiss",n[24]),R=new jn({props:{showing:n[10]||n[9],title:"Peer connection",hideOk:!0,$$slots:{default:[xy]},$$scope:{ctx:n}}}),R.$on("dismiss",n[21]),K=new jn({props:{showing:n[7],hideOk:!0,title:"Game rules",$$slots:{default:[By]},$$scope:{ctx:n}}}),K.$on("dismiss",n[27]),{c(){t=B("div"),e=B("div"),r=B("div"),at(s.$$.fragment),i=Y(),o=B("div"),a=B("div"),at(l.$$.fragment),c=Y(),at(u.$$.fragment),h=Y(),at(f.$$.fragment),d=Y(),p=B("div"),v=B("div"),m=B("p"),T=Ve(n[11]),A=Y();for(let _=0;_<ht.length;_+=1)ht[_].c();k=Y(),Q=B("div"),at(D.$$.fragment),M=Y(),at(w.$$.fragment),mt=Y(),at(Z.$$.fragment),$=Y(),at(R.$$.fragment),F=Y(),at(K.$$.fragment),this.h()},l(_){t=U(_,"DIV",{class:!0});var x=et(t);e=U(x,"DIV",{class:!0});var Rt=et(e);r=U(Rt,"DIV",{class:!0});var Jt=et(r);lt(s.$$.fragment,Jt),i=X(Jt),o=U(Jt,"DIV",{class:!0});var Gt=et(o);a=U(Gt,"DIV",{});var ae=et(a);lt(l.$$.fragment,ae),c=X(ae),lt(u.$$.fragment,ae),ae.forEach(S),Gt.forEach(S),h=X(Jt),lt(f.$$.fragment,Jt),Jt.forEach(S),d=X(Rt),p=U(Rt,"DIV",{class:!0});var se=et(p);v=U(se,"DIV",{class:!0});var Ee=et(v);m=U(Ee,"P",{class:!0});var At=et(m);T=De(At,n[11]),At.forEach(S),Ee.forEach(S),A=X(se);for(let en=0;en<ht.length;en+=1)ht[en].l(se);se.forEach(S),k=X(Rt),Q=U(Rt,"DIV",{class:!0});var Ae=et(Q);lt(D.$$.fragment,Ae),Ae.forEach(S),Rt.forEach(S),x.forEach(S),M=X(_),lt(w.$$.fragment,_),mt=X(_),lt(Z.$$.fragment,_),$=X(_),lt(R.$$.fragment,_),F=X(_),lt(K.$$.fragment,_),this.h()},h(){V(o,"class","flex-1 flex flex-row justify-center relative"),V(r,"class","flex flex-row gap-2 pb-2 pt-3 px-2 items-start"),V(m,"class",n[12]),V(v,"class","relative"),V(p,"class","flex-1 flex flex-col justify-center w-full max-w-[600px] mx-auto gap-1 px-3"),V(Q,"class","flex flex-row justify-center pb-2"),V(e,"class",n[13]),V(t,"class","h-device relative")},m(_,x){it(_,t,x),P(t,e),P(e,r),ct(s,r,null),P(r,i),P(r,o),P(o,a),ct(l,a,null),P(a,c),ct(u,a,null),P(r,h),ct(f,r,null),P(e,d),P(e,p),P(p,v),P(v,m),P(m,T),P(p,A);for(let Rt=0;Rt<ht.length;Rt+=1)ht[Rt]&&ht[Rt].m(p,null);P(e,k),P(e,Q),ct(D,Q,null),it(_,M,x),ct(w,_,x),it(_,mt,x),ct(Z,_,x),it(_,$,x),ct(R,_,x),it(_,F,x),ct(K,_,x),J=!0},p(_,x){const Rt={};x[0]&32768&&(Rt.score1=_[15][0]),x[0]&32768&&(Rt.score2=_[15][1]),l.$set(Rt);const Jt={};if(x[0]&16384&&(Jt.class=_[14]),x[0]&4&&(Jt.color=_[2]),u.$set(Jt),(!J||x[0]&2048)&&_s(T,_[11]),(!J||x[0]&4096)&&V(m,"class",_[12]),x[0]&1507659){It=ke({length:_[8]});let At;for(At=0;At<It.length;At+=1){const Ae=bl(_,It,At);ht[At]?(ht[At].p(Ae,x),L(ht[At],1)):(ht[At]=kl(Ae),ht[At].c(),L(ht[At],1),ht[At].m(p,null))}for(Dn(),At=It.length;At<ht.length;At+=1)ne(At);kn()}(!J||x[0]&8192)&&V(e,"class",_[13]);const Gt={};x[0]&16&&(Gt.showing=_[4]),x[2]&128&&(Gt.$$scope={dirty:x,ctx:_}),w.$set(Gt);const ae={};x[0]&32&&(ae.showing=_[5]),x[0]&32768|x[2]&128&&(ae.$$scope={dirty:x,ctx:_}),Z.$set(ae);const se={};x[0]&1536&&(se.showing=_[10]||_[9]),x[0]&512|x[2]&128&&(se.$$scope={dirty:x,ctx:_}),R.$set(se);const Ee={};x[0]&128&&(Ee.showing=_[7]),x[2]&128&&(Ee.$$scope={dirty:x,ctx:_}),K.$set(Ee)},i(_){if(!J){L(s.$$.fragment,_),L(l.$$.fragment,_),L(u.$$.fragment,_),L(f.$$.fragment,_);for(let x=0;x<It.length;x+=1)L(ht[x]);L(D.$$.fragment,_),L(w.$$.fragment,_),L(Z.$$.fragment,_),L(R.$$.fragment,_),L(K.$$.fragment,_),J=!0}},o(_){q(s.$$.fragment,_),q(l.$$.fragment,_),q(u.$$.fragment,_),q(f.$$.fragment,_),ht=ht.filter(Boolean);for(let x=0;x<ht.length;x+=1)q(ht[x]);q(D.$$.fragment,_),q(w.$$.fragment,_),q(Z.$$.fragment,_),q(R.$$.fragment,_),q(K.$$.fragment,_),J=!1},d(_){_&&(S(t),S(M),S(mt),S($),S(F)),ut(s),ut(l),ut(u),ut(f),ps(ht,_),ut(D),ut(w,_),ut(Z,_),ut(R,_),ut(K,_)}}}const Xs="text-color1",Js="text-color2";function $y(n,t,e){let r,s,i,o,a,l,c,u,h,f,d,p,v,m,T,A,k,Q;le(n,Bl,g=>e(42,m=g)),le(n,oa,g=>e(43,T=g)),le(n,qe,g=>e(44,A=g)),le(n,$e,g=>e(45,k=g)),le(n,Qn,g=>e(46,Q=g));let D=[],M=[],w=0,mt=[],Z=!1,$=!1,R=!1,F=!1,K=null,J=null,It=!1,ht=null,ne=Ue.AI,_=null,x=!1;const Rt=g=>pt.sendChannelMessage(JSON.stringify(g)),Jt=parseInt(m.url.searchParams.get("s")||String(_n));let Gt=to.indexOf(Jt)>=0?Jt:_n;const ae=(g,I,H)=>{if(!(!D[g]||D[g][I]!==!1))return e(0,D[g][I]=H,D),[g,I]},se=(g,I)=>[[g,I],[g-1,I],[g+1,I],[g,I-1],[g,I+1]],Ee=(g,I)=>[[g,I],[g-1,I-1],[g-1,I+1],[g+1,I-1],[g+1,I+1]],At=(g,I)=>[[g,I],[g+1,I-1],[g+2,I-2],[g-1,I+1],[g-2,I+2]],Ae=(g,I)=>[[g,I],[g-1,I-1],[g-2,I-2],[g+1,I+1],[g+2,I+2]],en=(g,I)=>[[g,I],[g,I-1],[g,I-2],[g,I+1],[g,I+2]],Zo=(g,I)=>[[g,I],[g-1,I],[g-2,I],[g+1,I],[g+2,I]],wh=(g,I,H)=>{const rt=[];let tt=[];switch(Q){case dt.AXES:tt=se(g,I);break;case dt.DIAGONAL:tt=Ee(g,I);break;case dt.RISING:tt=At(g,I);break;case dt.FALLING:tt=Ae(g,I);break;case dt.HORIZONTAL:tt=en(g,I);break;case dt.VERTICAL:tt=Zo(g,I);break;default:tt=[[g,I]];break}for(let Ct=0;Ct<tt.length;Ct++)rt.push(ae(tt[Ct][0],tt[Ct][1],H));return rt},Ih=(g,I)=>{const H=[];for(let rt=0;rt<g.length;rt++){if(!g[rt])continue;const[tt,Ct]=g[rt],kr=Ct+1,rn=Ct+2,Bn=Ct-1,Lh=Ct-2,na=tt+1,ra=tt+2,sa=tt-1,ia=tt-2;D[tt][rn]===I&&D[tt][kr]!==!1&&H.push([tt,kr]),D[tt][Lh]===I&&D[tt][Bn]!==!1&&H.push([tt,Bn]),D[ra]&&D[ra][Ct]===I&&D[na][Ct]!==!1&&H.push([na,Ct]),D[ia]&&D[ia][Ct]===I&&D[sa][Ct]!==!1&&H.push([sa,Ct])}return H},Ah=(g,I)=>{const H=Ih(g,I);for(let rt=0;rt<H.length;rt++)e(0,D[H[rt][0]][H[rt][1]]=I,D)},Rh=async()=>{e(1,It=!0),J||(J=new Ef(D));const g=await J.selectBlock(Q);e(1,It=!1),g&&Zs(g[0],g[1],!0)},Zs=async(g,I,H)=>{if(F)return;const rt=r?"color1":"color2";if(e(30,K=null),Ah(wh(g,I,rt),rt),!Object.values(D).some(tt=>tt.some(Ct=>!Ct))){c&&Rt({type:"placedBlock",rowIndex:g,colIndex:I}),e(29,F=!0),setTimeout(Dh,500);return}e(28,w++,w),await Ml(),r&&(Zt(Qn,Q=k,Q),Zt($e,k=A,k),Zt(qe,A=c?mt[w+1]:qr(),A)),H!==!0&&(l?Rh():c&&(Rt({type:"placedBlock",rowIndex:g,colIndex:I}),e(1,It=!0)))},Ch=async({detail:{rowIndex:g,colIndex:I}})=>{if(_f.is.webMobile&&(!K||K[0]!==g||K[1]!==I)){e(30,K=[g,I]);return}R=!0,Zs(g,I)},ta=()=>{const g=[];for(let I=0;I<Gt;I++){g[I]=[];for(let H=0;H<Gt;H++)g[I][H]=!1}e(3,M=g),e(6,ht=null),e(30,K=null)},ti=()=>{const g=[];for(let I=0;I<Gt;I++){g[I]=[];for(let H=0;H<Gt;H++)g[I][H]=!1}e(0,D=g),ta()},Sh=g=>{let I=0,H=0;for(let rt=0;rt<g.length;rt++)for(let tt=0;tt<g[rt].length;tt++)g[rt][tt]==="color1"?I+=Xr(g,rt,tt,"color1"):g[rt][tt]==="color2"&&(H+=Xr(g,rt,tt,"color2"));return[I,H]},nn=g=>{ti(),e(28,w=0),Zt(Qn,Q=dt.SINGLE,Q),Zt($e,k=qr(),k),Zt(qe,A=qr(),A),ea(),R=!1,e(29,F=!1),e(1,It=!1),e(30,K=null),J?(J.cancelActiveActions(),J=null):c&&(_===Wt.CONNECTED_AS_PLAYER1&&e(1,It=!0),g||(mt=$l(Gt*Gt),Zt($e,k=mt[1],k),Zt(qe,A=mt[2],A),Rt({type:"resetGame",turns:mt})))},Ph=({detail:{rowIndex:g,colIndex:I}})=>{let H=[];switch(Q){case dt.AXES:H=se(g,I);break;case dt.DIAGONAL:H=Ee(g,I);break;case dt.RISING:H=At(g,I);break;case dt.FALLING:H=Ae(g,I);break;case dt.HORIZONTAL:H=en(g,I);break;case dt.VERTICAL:H=Zo(g,I);break}for(let rt=0;rt<H.length;rt++)M[H[rt][0]]!==void 0&&M[H[rt][0]][H[rt][1]]!==void 0&&e(3,M[H[rt][0]][H[rt][1]]=s,M);e(6,ht=[g,I])},bh=async()=>{R&&!F&&!await Th("Finish the game and go to main menu?")||Jh(tf)},Vh=()=>{if($){ei(),setTimeout(nn,250);return}if(!R||F){nn();return}e(4,Z=!0)},ea=()=>{e(4,Z=!1)},Dh=()=>{e(5,$=!0)},ei=()=>{e(5,$=!1)},kh=({detail:{size:g,status:I,turns:H}})=>{e(8,Gt=g),e(32,_=I),mt=H,ti(),Zt($e,k=H[1],k),Zt(qe,A=H[2],A),pt.onstatechange=rt=>{const tt=rt.target;(!tt||["disconnected","failed"].includes(tt.connectionState))&&e(32,_=Wt.DISCONNECTED)},pt.onmessage=({data:rt})=>{try{const{type:tt,rowIndex:Ct,colIndex:kr,turns:rn}=JSON.parse(rt);switch(tt){case"placedBlock":Zs(Ct,kr,!0),e(1,It=!1);break;case"resetGame":{const Bn=()=>{nn(!0),rn&&(mt=rn,Zt($e,k=rn[1],k),Zt(qe,A=rn[2],A))};$?(ei(),setTimeout(Bn,250)):Bn();break}case"left":pt==null||pt.close(),e(32,_=Wt.DISCONNECTED);break;default:break}}catch{pt==null||pt.close(),e(32,_=Wt.DISCONNECTED)}},_===Wt.CONNECTED_AS_PLAYER1&&e(1,It=!0)},Nh=()=>{e(7,x=!0)},Oh=()=>{e(7,x=!1)};Zt(oa,T=null,T),ti(),Ll(()=>{if(m.url.searchParams.get("room"))e(31,ne=Ue.FRIEND_ONLINE),e(32,_=Wt.CONNECTING);else{const I=parseInt(m.url.searchParams.get("m")||String(Ue.AI));Object.values(Ue).includes(I)&&e(31,ne=I),ne===Ue.FRIEND_ONLINE&&e(32,_=Wt.CONNECTING)}nn()}),Xh(()=>{Rt({type:"left"}),c&&(pt==null||pt.close())});const Mh=()=>{nn()};return n.$$.update=()=>{n.$$.dirty[0]&268435456&&e(35,r=ef(w)),n.$$.dirty[1]&16&&e(16,s=r?"color1":"color2"),n.$$.dirty[1]&16&&e(2,i=r?Xs:Js),n.$$.dirty[0]&1&&e(15,o=Sh(D)),n.$$.dirty[0]&536870912&&e(14,a="pt-3"+(F?" invisible":"")),n.$$.dirty[1]&1&&e(34,l=ne===Ue.AI),n.$$.dirty[1]&9&&e(33,c=!l&&ne===Ue.FRIEND_ONLINE),n.$$.dirty[0]&2&&e(13,u="h-full flex flex-col relative"+(It?" cursor-wait":"")),n.$$.dirty[0]&4|n.$$.dirty[1]&30&&e(36,h=l&&!r||c&&r&&_===Wt.CONNECTED_AS_PLAYER1||c&&!r&&_===Wt.CONNECTED_AS_PLAYER2?" text-faded":" "+i),n.$$.dirty[1]&32&&e(12,f="font-bold text-center text-sm pb-1"+h),n.$$.dirty[0]&1073741824|n.$$.dirty[1]&30&&e(11,d=K?"Confirm selection":r?l||c&&_===Wt.CONNECTED_AS_PLAYER2?"Your turn":"Player's 1 turn...":l?"Computer...":c&&_===Wt.CONNECTED_AS_PLAYER1?"Your turn":"Player's 2 turn..."),n.$$.dirty[1]&2&&e(10,p=_===Wt.CONNECTING),n.$$.dirty[1]&6&&e(9,v=c&&_===Wt.DISCONNECTED)},[D,It,i,M,Z,$,ht,x,Gt,v,p,d,f,u,a,o,s,Ch,ta,nn,Ph,bh,Vh,ea,ei,kh,Nh,Oh,w,F,K,ne,_,c,l,r,h,Mh]}class rE extends bn{constructor(t){super(),Vn(this,t,$y,Uy,Pn,{},null,[-1,-1,-1])}}export{rE as component};
