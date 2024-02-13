import{s as pe,e as q,c as z,b as Q,f as S,m as D,i as $,q as Je,P as ro,k as ve,a1 as vs,A as Ql,u as fe,a as it,g as ot,h as M,n as Rt,o as Yr,J as ke,K as Ne,t as Ie,d as Ae,l as Vn,B as so,C as io,D as oo,E as ao,M as Ci,a2 as $l,G as Xl,y as Zh,a3 as tf,a4 as _a,j as Ts,w as Jl,a5 as ef,a6 as Yt}from"../chunks/scheduler.tTzP0KDC.js";import{S as _e,i as ye,t as b,g as te,d as V,b as ee,c as Z,a as tt,m as et,e as nt,f as Zr,h as nf}from"../chunks/index._Y5kTMN9.js";import{I as $n,e as be,B as Oe,P as Yl}from"../chunks/Button.zycOLzZ9.js";import{e as st,t as ya,q as rf,r as Gt,a as ne,p as qe}from"../chunks/objects.iCGkf26S.js";import{c as sf,g as of,f as af,e as lf,d as cf,b as uf,a as hf}from"../chunks/custom-icons.SKl5Bn_o.js";import{w as lo,o as ff,b as df,g as mf}from"../chunks/entry.2SJpBMgW.js";import{a as gf,b as pf,f as _f,c as Zl}from"../chunks/fontawesome6-icons.i7C6zE8k.js";import{f as Ea,s as va}from"../chunks/index.RjVmj6EO.js";import{c as yf,a as co,d as vn}from"../chunks/bootstrap-icons.p0hXF6yK.js";import{p as tc}from"../chunks/stores.0fiwSX5G.js";const Gr=()=>Math.floor(Math.random()*Object.keys(st).length),Ef=n=>!n||!(n%2),Hr=n=>{switch(n){case st.AXES:return hf;case st.DIAGONAL:return uf;case st.RISING:return cf;case st.FALLING:return lf;case st.HORIZONTAL:return af;case st.VERTICAL:return of;default:return sf}},ts=(n,t,e,r)=>{if(n[t]===void 0||n[t][e]===void 0)return 0;let s=5;const i=t-1,o=t+1;return(n[i]&&n[i][e]===r||n[o]&&n[o][e]===r)&&s--,(n[t][e+1]===r||n[t][e-1]===r)&&s--,s},ec=n=>{const t=[];t.push(st.SINGLE);for(let e=1;e<n;e++)t.push(Gr());return t},Xn=lo(st.SINGLE),ze=lo(st.SINGLE),Ke=lo(st.SINGLE);function Ta(n){let t,e,r,s;const i=[Tf,vf],o=[];function a(l,c){return l[2]?0:l[1]?1:-1}return~(t=a(n))&&(e=o[t]=i[t](n)),{c(){e&&e.c(),r=fe()},l(l){e&&e.l(l),r=fe()},m(l,c){~t&&o[t].m(l,c),$(l,r,c),s=!0},p(l,c){let u=t;t=a(l),t===u?~t&&o[t].p(l,c):(e&&(te(),V(o[u],1,1,()=>{o[u]=null}),ee()),~t?(e=o[t],e?e.p(l,c):(e=o[t]=i[t](l),e.c()),b(e,1),e.m(r.parentNode,r)):e=null)},i(l){s||(b(e),s=!0)},o(l){V(e),s=!1},d(l){l&&S(r),~t&&o[t].d(l)}}}function vf(n){let t,e;return t=new $n({props:{name:gf,class:n[5]}}),{c(){Z(t.$$.fragment)},l(r){tt(t.$$.fragment,r)},m(r,s){et(t,r,s),e=!0},p(r,s){const i={};s&32&&(i.class=r[5]),t.$set(i)},i(r){e||(b(t.$$.fragment,r),e=!0)},o(r){V(t.$$.fragment,r),e=!1},d(r){nt(t,r)}}}function Tf(n){let t,e;return t=new $n({props:{name:n[3],class:"h-4 w-4 text-black"}}),{c(){Z(t.$$.fragment)},l(r){tt(t.$$.fragment,r)},m(r,s){et(t,r,s),e=!0},p(r,s){const i={};s&8&&(i.name=r[3]),t.$set(i)},i(r){e||(b(t.$$.fragment,r),e=!0)},o(r){V(t.$$.fragment,r),e=!1},d(r){nt(t,r)}}}function wf(n){let t,e,r,s,i=!n[0]&&Ta(n);return{c(){t=q("div"),i&&i.c(),this.h()},l(o){t=z(o,"DIV",{role:!0,tabindex:!0,class:!0});var a=Q(t);i&&i.l(a),a.forEach(S),this.h()},h(){D(t,"role","button"),D(t,"tabindex","0"),D(t,"class",n[4])},m(o,a){$(o,t,a),i&&i.m(t,null),e=!0,r||(s=[Je(t,"pointerdown",n[6]),Je(t,"mouseenter",n[7]),Je(t,"mouseleave",n[8])],r=!0)},p(o,[a]){o[0]?i&&(te(),V(i,1,1,()=>{i=null}),ee()):i?(i.p(o,a),a&1&&b(i,1)):(i=Ta(o),i.c(),b(i,1),i.m(t,null)),(!e||a&16)&&D(t,"class",o[4])},i(o){e||(b(i),e=!0)},o(o){V(i),e=!1},d(o){o&&S(t),i&&i.d(),r=!1,ro(s)}}}function If(n,t,e){let r,s,i,o,a,l,c;ve(n,Xn,w=>e(17,c=w));const u=vs();let h=!1,{hoverCoords:f=null}=t,{disabled:d=!1}=t,{rowIndex:I}=t,{colIndex:v}=t,{selected:p=!1}=t,{selectCandidate:m=!1}=t,{hoverColor:g=""}=t;const P=()=>{e(14,h=!0),setTimeout(()=>{e(14,h=!1)},600)},N=async()=>{u("click",{rowIndex:I,colIndex:v})},lt=()=>{u("enter",{rowIndex:I,colIndex:v})},F=()=>{u("leave",{rowIndex:I,colIndex:v})};return n.$$set=w=>{"hoverCoords"in w&&e(9,f=w.hoverCoords),"disabled"in w&&e(10,d=w.disabled),"rowIndex"in w&&e(11,I=w.rowIndex),"colIndex"in w&&e(12,v=w.colIndex),"selected"in w&&e(0,p=w.selected),"selectCandidate"in w&&e(1,m=w.selectCandidate),"hoverColor"in w&&e(13,g=w.hoverColor)},n.$$.update=()=>{n.$$.dirty&2&&e(5,r="h-3 w-3 opacity-50"+(m==="color1"?" text-indigo-400":" text-rose-400")),n.$$.dirty&1&&e(15,s=p==="color1"?" bg-indigo-400 sel-color1":p==="color2"?" bg-pink-400 sel-color2":" bg-gray-600"),n.$$.dirty&8193&&e(16,i=p?"":g==="color1"?" hover:bg-indigo-400":g==="color2"?" hover:bg-rose-400":" hover:bg-gray-400"),n.$$.dirty&115713&&e(4,o="flex-1 aspect-square text-sm transition-colors duration-300 rounded-md border border-gray-600 bubbly relative cursor-pointer outline-none flex flex-col justify-center items-center bg-opacity-80 hover:bg-opacity-100"+i+s+(p||d?" pointer-events-none":"")+(h?" animate":"")),n.$$.dirty&131072&&e(3,a=Hr(c)),n.$$.dirty&6656&&e(2,l=f&&I===f[0]&&v===f[1]),n.$$.dirty&1&&p&&Ql().then(P)},[p,m,l,a,o,r,N,lt,F,f,d,I,v,g,h,s,i,c]}class Af extends _e{constructor(t){super(),ye(this,t,If,wf,pe,{hoverCoords:9,disabled:10,rowIndex:11,colIndex:12,selected:0,selectCandidate:1,hoverColor:13})}}function wa(n,t,e){const r=n.slice();return r[7]=t[e],r[9]=e,r}function Ia(n,t,e){const r=n.slice();return r[7]=t[e],r[9]=e,r}function Aa(n){let t,e;return{c(){t=q("div"),e=Ie(n[9]),this.h()},l(r){t=z(r,"DIV",{class:!0,style:!0});var s=Q(t);e=Ae(s,n[9]),s.forEach(S),this.h()},h(){D(t,"class",nc),D(t,"style",n[2])},m(r,s){$(r,t,s),M(t,e)},p(r,s){s&4&&D(t,"style",r[2])},d(r){r&&S(t)}}}function Ra(n){let t,e;return{c(){t=q("div"),e=Ie(n[9]),this.h()},l(r){t=z(r,"DIV",{class:!0,style:!0});var s=Q(t);e=Ae(s,n[9]),s.forEach(S),this.h()},h(){D(t,"class",nc),D(t,"style",n[2])},m(r,s){$(r,t,s),M(t,e)},p(r,s){s&4&&D(t,"style",r[2])},d(r){r&&S(t)}}}function Rf(n){let t,e,r,s=be({length:10}),i=[];for(let l=0;l<s.length;l+=1)i[l]=Aa(Ia(n,s,l));let o=be({length:10}),a=[];for(let l=0;l<o.length;l+=1)a[l]=Ra(wa(n,o,l));return{c(){t=q("div"),e=q("div");for(let l=0;l<i.length;l+=1)i[l].c();r=it();for(let l=0;l<a.length;l+=1)a[l].c();this.h()},l(l){t=z(l,"DIV",{class:!0,style:!0});var c=Q(t);e=z(c,"DIV",{class:!0,style:!0});var u=Q(e);for(let h=0;h<i.length;h+=1)i[h].l(u);r=ot(u);for(let h=0;h<a.length;h+=1)a[h].l(u);u.forEach(S),c.forEach(S),this.h()},h(){D(e,"class","transition-transform duration-500"),D(e,"style",n[0]),D(t,"class",n[1]),D(t,"style",n[2])},m(l,c){$(l,t,c),M(t,e);for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(e,null);M(e,r);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(e,null)},p(l,[c]){if(c&4){s=be({length:10});let u;for(u=0;u<s.length;u+=1){const h=Ia(l,s,u);i[u]?i[u].p(h,c):(i[u]=Aa(h),i[u].c(),i[u].m(e,r))}for(;u<i.length;u+=1)i[u].d(1);i.length=s.length}if(c&4){o=be({length:10});let u;for(u=0;u<o.length;u+=1){const h=wa(l,o,u);a[u]?a[u].p(h,c):(a[u]=Ra(h),a[u].c(),a[u].m(e,null))}for(;u<a.length;u+=1)a[u].d(1);a.length=o.length}c&1&&D(e,"style",l[0]),c&2&&D(t,"class",l[1]),c&4&&D(t,"style",l[2])},i:Rt,o:Rt,d(l){l&&S(t),Yr(i,l),Yr(a,l)}}}const nc="flex flex-col justify-center items-center text-xl";function Cf(n,t,e){let r,s,i,{digit:o=0}=t,{height:a=30}=t,{width:l=15}=t;return n.$$set=c=>{e(6,t=ke(ke({},t),Ne(c))),"digit"in c&&e(3,o=c.digit),"height"in c&&e(4,a=c.height),"width"in c&&e(5,l=c.width)},n.$$.update=()=>{n.$$.dirty&48&&e(2,r="width: "+l+"px;height: "+a+"px"),e(1,s="overflow-hidden"+(t.class?" "+t.class:"")),n.$$.dirty&24&&e(0,i="transform: translateY(-"+o*a+"px)")},t=Ne(t),[i,s,r,o,a,l]}class un extends _e{constructor(t){super(),ye(this,t,Cf,Rf,pe,{digit:3,height:4,width:5})}}function Sf(n){let t,e,r,s,i,o,a,l,c="-",u,h,f,d,I,v,p;return e=new un({props:{digit:n[3][0],class:n[0]}}),s=new un({props:{digit:n[3][1],class:n[0]}}),o=new un({props:{digit:n[3][2],class:n[0]}}),h=new un({props:{digit:n[2][0],class:n[1]}}),d=new un({props:{digit:n[2][1],class:n[1]}}),v=new un({props:{digit:n[2][2],class:n[1]}}),{c(){t=q("div"),Z(e.$$.fragment),r=it(),Z(s.$$.fragment),i=it(),Z(o.$$.fragment),a=it(),l=q("div"),l.textContent=c,u=it(),Z(h.$$.fragment),f=it(),Z(d.$$.fragment),I=it(),Z(v.$$.fragment),this.h()},l(m){t=z(m,"DIV",{class:!0});var g=Q(t);tt(e.$$.fragment,g),r=ot(g),tt(s.$$.fragment,g),i=ot(g),tt(o.$$.fragment,g),a=ot(g),l=z(g,"DIV",{class:!0,"data-svelte-h":!0}),Vn(l)!=="svelte-1r1kxhl"&&(l.textContent=c),u=ot(g),tt(h.$$.fragment,g),f=ot(g),tt(d.$$.fragment,g),I=ot(g),tt(v.$$.fragment,g),g.forEach(S),this.h()},h(){D(l,"class","text-faded px-2"),D(t,"class","flex flex-row items-center justify-center py-2")},m(m,g){$(m,t,g),et(e,t,null),M(t,r),et(s,t,null),M(t,i),et(o,t,null),M(t,a),M(t,l),M(t,u),et(h,t,null),M(t,f),et(d,t,null),M(t,I),et(v,t,null),p=!0},p(m,[g]){const P={};g&8&&(P.digit=m[3][0]),g&1&&(P.class=m[0]),e.$set(P);const N={};g&8&&(N.digit=m[3][1]),g&1&&(N.class=m[0]),s.$set(N);const lt={};g&8&&(lt.digit=m[3][2]),g&1&&(lt.class=m[0]),o.$set(lt);const F={};g&4&&(F.digit=m[2][0]),g&2&&(F.class=m[1]),h.$set(F);const w={};g&4&&(w.digit=m[2][1]),g&2&&(w.class=m[1]),d.$set(w);const gt={};g&4&&(gt.digit=m[2][2]),g&2&&(gt.class=m[1]),v.$set(gt)},i(m){p||(b(e.$$.fragment,m),b(s.$$.fragment,m),b(o.$$.fragment,m),b(h.$$.fragment,m),b(d.$$.fragment,m),b(v.$$.fragment,m),p=!0)},o(m){V(e.$$.fragment,m),V(s.$$.fragment,m),V(o.$$.fragment,m),V(h.$$.fragment,m),V(d.$$.fragment,m),V(v.$$.fragment,m),p=!1},d(m){m&&S(t),nt(e),nt(s),nt(o),nt(h),nt(d),nt(v)}}}function bf(n,t,e){let r,s,{score1:i=0}=t,{score2:o=0}=t,{score1Class:a=""}=t,{score2Class:l=""}=t;const c=u=>{if(u<=0)return[0,0,0];if(u>=1e3)return[9,9,9];const h=u%10;u=u/10|0;const f=u%10;return u=u/10|0,[u%10,f,h]};return n.$$set=u=>{"score1"in u&&e(4,i=u.score1),"score2"in u&&e(5,o=u.score2),"score1Class"in u&&e(0,a=u.score1Class),"score2Class"in u&&e(1,l=u.score2Class)},n.$$.update=()=>{n.$$.dirty&16&&e(3,r=c(i)),n.$$.dirty&32&&e(2,s=c(o))},[a,l,s,r,i,o]}class rc extends _e{constructor(t){super(),ye(this,t,bf,Sf,pe,{score1:4,score2:5,score1Class:0,score2Class:1})}}function Pf(n){let t;const e=n[12].default,r=so(e,n,n[14],null);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,i){r&&r.m(s,i),t=!0},p(s,i){r&&r.p&&(!t||i&16384)&&io(r,e,s,s[14],t?ao(e,s[14],i,null):oo(s[14]),null)},i(s){t||(b(r,s),t=!0)},o(s){V(r,s),t=!1},d(s){r&&r.d(s)}}}function Df(n){let t,e;return t=new Oe({props:{class:n[11],type:n[0],label:n[1],href:n[2],title:n[9],icon:n[3],iconClass:n[5],iconRight:n[4],dense:n[6],disabled:n[7],loading:n[8],target:n[10],$$slots:{default:[Pf]},$$scope:{ctx:n}}}),t.$on("click",n[13]),{c(){Z(t.$$.fragment)},l(r){tt(t.$$.fragment,r)},m(r,s){et(t,r,s),e=!0},p(r,[s]){const i={};s&2048&&(i.class=r[11]),s&1&&(i.type=r[0]),s&2&&(i.label=r[1]),s&4&&(i.href=r[2]),s&512&&(i.title=r[9]),s&8&&(i.icon=r[3]),s&32&&(i.iconClass=r[5]),s&16&&(i.iconRight=r[4]),s&64&&(i.dense=r[6]),s&128&&(i.disabled=r[7]),s&256&&(i.loading=r[8]),s&1024&&(i.target=r[10]),s&16384&&(i.$$scope={dirty:s,ctx:r}),t.$set(i)},i(r){e||(b(t.$$.fragment,r),e=!0)},o(r){V(t.$$.fragment,r),e=!1},d(r){nt(t,r)}}}function Vf(n,t,e){let r,{$$slots:s={},$$scope:i}=t,{type:o=void 0}=t,{label:a=void 0}=t,{href:l=void 0}=t,{icon:c=void 0}=t,{iconRight:u=void 0}=t,{iconClass:h=void 0}=t,{dense:f=void 0}=t,{disabled:d=void 0}=t,{loading:I=void 0}=t,{title:v=void 0}=t,{target:p=void 0}=t;function m(g){Ci.call(this,n,g)}return n.$$set=g=>{e(15,t=ke(ke({},t),Ne(g))),"type"in g&&e(0,o=g.type),"label"in g&&e(1,a=g.label),"href"in g&&e(2,l=g.href),"icon"in g&&e(3,c=g.icon),"iconRight"in g&&e(4,u=g.iconRight),"iconClass"in g&&e(5,h=g.iconClass),"dense"in g&&e(6,f=g.dense),"disabled"in g&&e(7,d=g.disabled),"loading"in g&&e(8,I=g.loading),"title"in g&&e(9,v=g.title),"target"in g&&e(10,p=g.target),"$$scope"in g&&e(14,i=g.$$scope)},n.$$.update=()=>{e(11,r=" bg-primary text-white"+(t.class?" "+t.class:""))},t=Ne(t),[o,a,l,c,u,h,f,d,I,v,p,r,s,m,i]}class kf extends _e{constructor(t){super(),ye(this,t,Vf,Df,pe,{type:0,label:1,href:2,icon:3,iconRight:4,iconClass:5,dense:6,disabled:7,loading:8,title:9,target:10})}}const sc=["overflow-hidden","scroll-blocked"],Nf=()=>{document.body.classList.add(...sc),document.documentElement.classList.add("overflow-hidden")},Of=()=>{document.body.classList.remove(...sc),document.documentElement.classList.remove("overflow-hidden")},ii={},Mf=n=>(ii[n]||(ii[n]=document.getElementById(n)),ii[n]),ic=(n,t="modal")=>{const e=Mf(t);e&&(e.appendChild(n),e.focus())};function Ca(n){let t,e,r,s,i;return{c(){t=q("div"),this.h()},l(o){t=z(o,"DIV",{role:!0,tabindex:!0,class:!0}),Q(t).forEach(S),this.h()},h(){D(t,"role","button"),D(t,"tabindex","0"),D(t,"class","fixed z-[35] inset-0 backdrop-brightness-75 backdrop-blur")},m(o,a){$(o,t,a),r=!0,s||(i=[$l(ic.call(null,t,"backdrop")),Je(t,"click",n[1]),Je(t,"keypress",n[2])],s=!0)},i(o){r||(Xl(()=>{r&&(e||(e=Zr(t,Ea,ya,!0)),e.run(1))}),r=!0)},o(o){e||(e=Zr(t,Ea,ya,!1)),e.run(0),r=!1},d(o){o&&S(t),o&&e&&e.end(),s=!1,ro(i)}}}function Lf(n){let t,e,r=n[0]&&Ca(n);return{c(){r&&r.c(),t=fe()},l(s){r&&r.l(s),t=fe()},m(s,i){r&&r.m(s,i),$(s,t,i),e=!0},p(s,[i]){s[0]?r?i&1&&b(r,1):(r=Ca(s),r.c(),b(r,1),r.m(t.parentNode,t)):r&&(te(),V(r,1,1,()=>{r=null}),ee())},i(s){e||(b(r),e=!0)},o(s){V(r),e=!1},d(s){s&&S(t),r&&r.d(s)}}}function Ff(n,t,e){let{showing:r=!1}=t;function s(o){Ci.call(this,n,o)}function i(o){Ci.call(this,n,o)}return n.$$set=o=>{"showing"in o&&e(0,r=o.showing)},[r,s,i]}class xf extends _e{constructor(t){super(),ye(this,t,Ff,Lf,pe,{showing:0})}}function Sa(n){let t;const e=n[4].default,r=so(e,n,n[3],null);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,i){r&&r.m(s,i),t=!0},p(s,i){r&&r.p&&(!t||i&8)&&io(r,e,s,s[3],t?ao(e,s[3],i,null):oo(s[3]),null)},i(s){t||(b(r,s),t=!0)},o(s){V(r,s),t=!1},d(s){r&&r.d(s)}}}function Bf(n){let t,e,r,s=n[0]&&Sa(n);return e=new xf({props:{showing:n[0]}}),e.$on("click",n[1]),e.$on("keypress",n[1]),{c(){s&&s.c(),t=it(),Z(e.$$.fragment)},l(i){s&&s.l(i),t=ot(i),tt(e.$$.fragment,i)},m(i,o){s&&s.m(i,o),$(i,t,o),et(e,i,o),r=!0},p(i,[o]){i[0]?s?(s.p(i,o),o&1&&b(s,1)):(s=Sa(i),s.c(),b(s,1),s.m(t.parentNode,t)):s&&(te(),V(s,1,1,()=>{s=null}),ee());const a={};o&1&&(a.showing=i[0]),e.$set(a)},i(i){r||(b(s),b(e.$$.fragment,i),r=!0)},o(i){V(s),V(e.$$.fragment,i),r=!1},d(i){i&&S(t),s&&s.d(i),nt(e,i)}}}function Uf(n,t,e){let{$$slots:r={},$$scope:s}=t;const i=vs();let{showing:o=!1}=t,{disabled:a=!1}=t;const l=()=>{i("dismiss")};return ff(()=>{e(0,o=!1)}),n.$$set=c=>{"showing"in c&&e(0,o=c.showing),"disabled"in c&&e(2,a=c.disabled),"$$scope"in c&&e(3,s=c.$$scope)},n.$$.update=()=>{if(n.$$.dirty&5){const c=u=>{var f;if(["input","textarea"].indexOf((f=u.target)==null?void 0:f.type)>=0)return;let h=!1;switch(u.key){case"Escape":l(),h=!0;break;case"Enter":a||i("ok"),h=!0;break}h&&(u.preventDefault(),u.stopPropagation())};o?(document.addEventListener("keydown",c),Nf()):(document.removeEventListener("keydown",c),Of())}},[o,l,a,s,r]}class jf extends _e{constructor(t){super(),ye(this,t,Uf,Bf,pe,{showing:0,disabled:2})}}function ba(n){let t,e,r,s,i,o;return i=new Oe({props:{round:!0,icon:yf,iconClass:"h-6 w-6 text-faded"}}),i.$on("click",n[11]),{c(){t=q("div"),e=q("div"),r=Ie(n[1]),s=it(),Z(i.$$.fragment),this.h()},l(a){t=z(a,"DIV",{id:!0,class:!0});var l=Q(t);e=z(l,"DIV",{class:!0});var c=Q(e);r=Ae(c,n[1]),c.forEach(S),s=ot(l),tt(i.$$.fragment,l),l.forEach(S),this.h()},h(){D(e,"class","flex-grow min-w-0 ellipsis text-gray-300 select-none"),D(t,"id","modal-title"),D(t,"class","flex flex-row gap-3 items-center pl-4 pr-2 pb-3")},m(a,l){$(a,t,l),M(t,e),M(e,r),M(t,s),et(i,t,null),o=!0},p(a,l){(!o||l&2)&&Ts(r,a[1])},i(a){o||(b(i.$$.fragment,a),o=!0)},o(a){V(i.$$.fragment,a),o=!1},d(a){a&&S(t),nt(i)}}}function Pa(n){let t,e,r,s=!n[7]&&Da(n),i=!n[6]&&Va(n);return{c(){t=q("div"),s&&s.c(),e=it(),i&&i.c(),this.h()},l(o){t=z(o,"DIV",{class:!0});var a=Q(t);s&&s.l(a),e=ot(a),i&&i.l(a),a.forEach(S),this.h()},h(){D(t,"class","flex flex-col-reverse gap-3 bg-gray-700 p-3 sm:flex-row")},m(o,a){$(o,t,a),s&&s.m(t,null),M(t,e),i&&i.m(t,null),r=!0},p(o,a){o[7]?s&&(te(),V(s,1,1,()=>{s=null}),ee()):s?(s.p(o,a),a&128&&b(s,1)):(s=Da(o),s.c(),b(s,1),s.m(t,e)),o[6]?i&&(te(),V(i,1,1,()=>{i=null}),ee()):i?(i.p(o,a),a&64&&b(i,1)):(i=Va(o),i.c(),b(i,1),i.m(t,null))},i(o){r||(b(s),b(i),r=!0)},o(o){V(s),V(i),r=!1},d(o){o&&S(t),s&&s.d(),i&&i.d()}}}function Da(n){let t,e;return t=new Oe({props:{label:n[3],class:"w-full text-faded",disabled:n[5]}}),t.$on("click",n[11]),{c(){Z(t.$$.fragment)},l(r){tt(t.$$.fragment,r)},m(r,s){et(t,r,s),e=!0},p(r,s){const i={};s&8&&(i.label=r[3]),s&32&&(i.disabled=r[5]),t.$set(i)},i(r){e||(b(t.$$.fragment,r),e=!0)},o(r){V(t.$$.fragment,r),e=!1},d(r){nt(t,r)}}}function Va(n){let t,e;return t=new kf({props:{label:n[2],class:"w-full",disabled:n[4],loading:n[5]}}),t.$on("click",n[10]),{c(){Z(t.$$.fragment)},l(r){tt(t.$$.fragment,r)},m(r,s){et(t,r,s),e=!0},p(r,s){const i={};s&4&&(i.label=r[2]),s&16&&(i.disabled=r[4]),s&32&&(i.loading=r[5]),t.$set(i)},i(r){e||(b(t.$$.fragment,r),e=!0)},o(r){V(t.$$.fragment,r),e=!1},d(r){nt(t,r)}}}function qf(n){let t,e,r,s,i,o,a,l,c,u,h,f,d=n[1]&&ba(n);const I=n[12].default,v=so(I,n,n[14],null);let p=(!n[6]||!n[7])&&Pa(n);return{c(){t=q("div"),e=q("div"),r=q("div"),s=q("div"),i=q("div"),d&&d.c(),o=it(),a=q("div"),v&&v.c(),l=it(),p&&p.c(),this.h()},l(m){t=z(m,"DIV",{class:!0,"aria-labelledby":!0,role:!0,"aria-modal":!0});var g=Q(t);e=z(g,"DIV",{class:!0});var P=Q(e);r=z(P,"DIV",{role:!0,tabindex:!0,class:!0});var N=Q(r);s=z(N,"DIV",{class:!0});var lt=Q(s);i=z(lt,"DIV",{class:!0});var F=Q(i);d&&d.l(F),o=ot(F),a=z(F,"DIV",{class:!0});var w=Q(a);v&&v.l(w),w.forEach(S),F.forEach(S),l=ot(lt),p&&p.l(lt),lt.forEach(S),N.forEach(S),P.forEach(S),g.forEach(S),this.h()},h(){D(a,"class","px-4"),D(i,"class","bg-gray-600 py-4"),D(s,"class","relative transform overflow-hidden rounded-lg shadow-lg shadow-gray-800 text-white text-left sm:my-8 w-full max-w-[600px]"),D(r,"role","button"),D(r,"tabindex","0"),D(r,"class","flex min-h-full justify-center p-4 text-center items-center sm:p-0 "),D(e,"class","fixed inset-0 z-10 overflow-y-auto"),D(t,"class",n[8]),D(t,"aria-labelledby","modal-title"),D(t,"role","dialog"),D(t,"aria-modal","true")},m(m,g){$(m,t,g),M(t,e),M(e,r),M(r,s),M(s,i),d&&d.m(i,null),M(i,o),M(i,a),v&&v.m(a,null),M(s,l),p&&p.m(s,null),u=!0,h||(f=[Je(r,"click",_a(n[11])),Je(r,"keypress",_a(n[11])),$l(ic.call(null,t))],h=!0)},p(m,g){n=m,n[1]?d?(d.p(n,g),g&2&&b(d,1)):(d=ba(n),d.c(),b(d,1),d.m(i,o)):d&&(te(),V(d,1,1,()=>{d=null}),ee()),v&&v.p&&(!u||g&16384)&&io(v,I,n,n[14],u?ao(I,n[14],g,null):oo(n[14]),null),!n[6]||!n[7]?p?(p.p(n,g),g&192&&b(p,1)):(p=Pa(n),p.c(),b(p,1),p.m(s,null)):p&&(te(),V(p,1,1,()=>{p=null}),ee()),(!u||g&256)&&D(t,"class",n[8])},i(m){u||(b(d),b(v,m),b(p),Xl(()=>{u&&(c||(c=Zr(e,va,n[9],!0)),c.run(1))}),u=!0)},o(m){V(d),V(v,m),V(p),c||(c=Zr(e,va,n[9],!1)),c.run(0),u=!1},d(m){m&&S(t),d&&d.d(),v&&v.d(m),p&&p.d(),m&&c&&c.end(),h=!1,ro(f)}}}function zf(n){let t,e,r;function s(o){n[13](o)}let i={disabled:n[4],$$slots:{default:[qf]},$$scope:{ctx:n}};return n[0]!==void 0&&(i.showing=n[0]),t=new jf({props:i}),Zh.push(()=>nf(t,"showing",s)),t.$on("ok",n[10]),t.$on("dismiss",n[11]),{c(){Z(t.$$.fragment)},l(o){tt(t.$$.fragment,o)},m(o,a){et(t,o,a),r=!0},p(o,[a]){const l={};a&16&&(l.disabled=o[4]),a&16894&&(l.$$scope={dirty:a,ctx:o}),!e&&a&1&&(e=!0,l.showing=o[0],tf(()=>e=!1)),t.$set(l)},i(o){r||(b(t.$$.fragment,o),r=!0)},o(o){V(t.$$.fragment,o),r=!1},d(o){nt(t,o)}}}function Kf(n,t,e){let r,{$$slots:s={},$$scope:i}=t;const o=vs(),a={duration:200,easing:rf};let{showing:l=!1}=t,{title:c=""}=t,{okLabel:u="OK"}=t,{dismissLabel:h="Back"}=t,{disabled:f=!1}=t,{loading:d=!1}=t,{hideOk:I=!1}=t,{hideCancel:v=!1}=t;const p=()=>{o("ok")},m=()=>{o("dismiss")};function g(P){l=P,e(0,l)}return n.$$set=P=>{e(16,t=ke(ke({},t),Ne(P))),"showing"in P&&e(0,l=P.showing),"title"in P&&e(1,c=P.title),"okLabel"in P&&e(2,u=P.okLabel),"dismissLabel"in P&&e(3,h=P.dismissLabel),"disabled"in P&&e(4,f=P.disabled),"loading"in P&&e(5,d=P.loading),"hideOk"in P&&e(6,I=P.hideOk),"hideCancel"in P&&e(7,v=P.hideCancel),"$$scope"in P&&e(14,i=P.$$scope)},n.$$.update=()=>{e(8,r="relative z-40 p-4"+(t.class?" "+t.class:""))},t=Ne(t),[l,c,u,h,f,d,I,v,r,a,p,m,s,g,i]}class oi extends _e{constructor(t){super(),ye(this,t,Kf,zf,pe,{showing:0,title:1,okLabel:2,dismissLabel:3,disabled:4,loading:5,hideOk:6,hideCancel:7})}}function Gf(n){let t,e,r,s,i,o,a;return e=new $n({props:{name:n[4],class:n[0]}}),s=new $n({props:{name:n[3],class:"h-4 w-4 text-faded"}}),o=new $n({props:{name:n[2],class:"h-4 w-4 text-faded"}}),{c(){t=q("div"),Z(e.$$.fragment),r=it(),Z(s.$$.fragment),i=it(),Z(o.$$.fragment),this.h()},l(l){t=z(l,"DIV",{class:!0});var c=Q(t);tt(e.$$.fragment,c),r=ot(c),tt(s.$$.fragment,c),i=ot(c),tt(o.$$.fragment,c),c.forEach(S),this.h()},h(){D(t,"class",n[1])},m(l,c){$(l,t,c),et(e,t,null),M(t,r),et(s,t,null),M(t,i),et(o,t,null),a=!0},p(l,[c]){const u={};c&16&&(u.name=l[4]),c&1&&(u.class=l[0]),e.$set(u);const h={};c&8&&(h.name=l[3]),s.$set(h);const f={};c&4&&(f.name=l[2]),o.$set(f),(!a||c&2)&&D(t,"class",l[1])},i(l){a||(b(e.$$.fragment,l),b(s.$$.fragment,l),b(o.$$.fragment,l),a=!0)},o(l){V(e.$$.fragment,l),V(s.$$.fragment,l),V(o.$$.fragment,l),a=!1},d(l){l&&S(t),nt(e),nt(s),nt(o)}}}function Hf(n,t,e){let r,s,i,o,a,l,c,u;ve(n,Ke,f=>e(6,l=f)),ve(n,ze,f=>e(7,c=f)),ve(n,Xn,f=>e(8,u=f));let{color:h}=t;return n.$$set=f=>{e(9,t=ke(ke({},t),Ne(f))),"color"in f&&e(5,h=f.color)},n.$$.update=()=>{n.$$.dirty&256&&e(4,r=Hr(u)),n.$$.dirty&128&&e(3,s=Hr(c)),n.$$.dirty&64&&e(2,i=Hr(l)),e(1,o="flex flex-row items-center justify-center gap-4"+(t.class?" "+t.class:"")),n.$$.dirty&32&&e(0,a="h-4 w-4 "+h)},t=Ne(t),[a,o,i,s,r,h,l,c,u]}class Wf extends _e{constructor(t){super(),ye(this,t,Hf,Gf,pe,{color:5})}}let Jn=null;const ka=()=>{Jn||(Jn=(window.navigator.userAgent||window.navigator.vendor||window.opera||"").toLowerCase())},Wr={},Lr=(n,t)=>(Wr[n]===void 0&&(Wr[n]=t()),Wr[n]),Qf={ua:null,is:{get webMobile(){return Jn===null&&ka(),Lr("webmob",()=>/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|kindle|silk|mobile/i.test(Jn||""))},get webDesktop(){return Jn===null&&ka(),Lr("!webmob",()=>!Wr.wm)},get touchAllowed(){return Lr("touch",()=>"ontouchstart"in window)},get mouseAllowed(){return Lr("mouse",()=>matchMedia("(pointer:fine)").matches)}}},Na="color2",$f=(n,t,e,r)=>{let s=ts(e,n,t,Na);for(let i=0;i<r.length;i++){const[o,a]=r[i];e[o]&&e[o][a]===!1&&(s+=ts(e,o,a,Na))}return s};class Xf{constructor(t){this.selections=t,this.thinking=!1}cancelActiveActions(){this.requestId=Date.now()}getBenefitSums(t){const e=[];for(let r=0;r<this.selections.length;r++){const s=this.selections[r];for(let i=0;i<s.length;i++)s[i]||e.push([r,i,$f(r,i,this.selections,t(r,i))])}return e.sort(([,,r],[,,s])=>s-r),e}selectSingleBlock(){const t=this.getBenefitSums(()=>[]),e=Math.floor(Math.random()*t.length);return[t[e][0],t[e][1]]}selectInAxes(){const t=this.getBenefitSums((e,r)=>[[e-1,r],[e+1,r],[e,r-1],[e,r+1]]);return[t[0][0],t[0][1]]}selectInDiagonals(){const t=this.getBenefitSums((e,r)=>[[e+1,r+1],[e+1,r-1],[e-1,r-1],[e-1,r+1]]);return[t[0][0],t[0][1]]}selectInHorizontal(){const t=this.getBenefitSums((e,r)=>[[e,r+1],[e,r+2],[e,r-1],[e,r-2]]);return[t[0][0],t[0][1]]}selectInVertical(){const t=this.getBenefitSums((e,r)=>[[e+1,r],[e+2,r],[e-1,r],[e-2,r]]);return[t[0][0],t[0][1]]}selectInRisingDiagonal(){const t=this.getBenefitSums((e,r)=>[[e-1,r+1],[e-2,r+2],[e+1,r-1],[e+2,r-2]]);return[t[0][0],t[0][1]]}selectInFallingDiagonal(){const t=this.getBenefitSums((e,r)=>[[e+1,r+1],[e+2,r+2],[e-1,r-1],[e-2,r-2]]);return[t[0][0],t[0][1]]}selectBlock(t){const e=Date.now();return this.requestId=e,new Promise(r=>{setTimeout(()=>{if(this.requestId!==e){r(null);return}switch(t){case st.AXES:r(this.selectInAxes());break;case st.DIAGONAL:r(this.selectInDiagonals());break;case st.HORIZONTAL:r(this.selectInHorizontal());break;case st.VERTICAL:r(this.selectInVertical());break;case st.FALLING:r(this.selectInFallingDiagonal());break;case st.RISING:r(this.selectInRisingDiagonal());break;default:r(this.selectSingleBlock());break}},1500)})}}const Jf=(n=20)=>{let t="";const e="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",r=e.length;for(var s=0;s<n;s++)t+=e.charAt(Math.floor(Math.random()*r));return t},oc=(...n)=>{console.warn(n)};var Oa={};/**
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
 */const ac=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Yf=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[e++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[e++],o=n[e++],a=n[e++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[e++],o=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},lc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),r.push(e[u],e[h],e[f],e[d])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(ac(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Yf(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=e[n.charAt(s++)],a=s<n.length?e[n.charAt(s)]:0;++s;const c=s<n.length?e[n.charAt(s)]:64;++s;const h=s<n.length?e[n.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new Zf;const f=i<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),h!==64){const I=c<<6&192|h;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Zf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const td=function(n){const t=ac(n);return lc.encodeByteArray(t,!0)},es=function(n){return td(n).replace(/\./g,"")},ed=function(n){try{return lc.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function nd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rd=()=>nd().__FIREBASE_DEFAULTS__,sd=()=>{if(typeof process>"u"||typeof Oa>"u")return;const n=Oa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},id=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&ed(n[1]);return t&&JSON.parse(t)},uo=()=>{try{return rd()||sd()||id()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},od=n=>{var t,e;return(e=(t=uo())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},ad=n=>{const t=od(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},cc=()=>{var n;return(n=uo())===null||n===void 0?void 0:n.config};/**
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
 */class ld{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function cd(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[es(JSON.stringify(e)),es(JSON.stringify(o)),""].join(".")}/**
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
 */function ns(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ud(){var n;const t=(n=uo())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hd(){return!ud()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function uc(){try{return typeof indexedDB=="object"}catch{return!1}}function fd(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(e){t(e)}})}/**
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
 */const dd="FirebaseError";class kn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=dd,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hc.prototype.create)}}class hc{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?md(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new kn(s,a,r)}}function md(n,t){return n.replace(gd,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const gd=/\{\$([^}]+)}/g;function rs(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const i=n[s],o=t[s];if(Ma(i)&&Ma(o)){if(!rs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Ma(n){return n!==null&&typeof n=="object"}/**
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
 */function Me(n){return n&&n._delegate?n._delegate:n}class sr{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ge="[DEFAULT]";/**
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
 */class pd{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new ld;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(yd(t))try{this.getOrInitializeService({instanceIdentifier:Ge})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Ge){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ge){return this.instances.has(t)}getOptions(t=Ge){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_d(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ge){return this.component?this.component.multipleInstances?t:Ge:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _d(n){return n===Ge?void 0:n}function yd(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ed{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new pd(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const vd={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Td=Y.INFO,wd={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Id=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=wd[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class fc{constructor(t){this.name=t,this._logLevel=Td,this._logHandler=Id,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?vd[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const Ad=(n,t)=>t.some(e=>n instanceof e);let La,Fa;function Rd(){return La||(La=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cd(){return Fa||(Fa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dc=new WeakMap,Si=new WeakMap,mc=new WeakMap,ai=new WeakMap,ho=new WeakMap;function Sd(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{e(De(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&dc.set(e,n)}).catch(()=>{}),ho.set(t,n),t}function bd(n){if(Si.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{e(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Si.set(n,t)}let bi={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Si.get(n);if(t==="objectStoreNames")return n.objectStoreNames||mc.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return De(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Pd(n){bi=n(bi)}function Dd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(li(this),t,...e);return mc.set(r,t.sort?t.sort():[t]),De(r)}:Cd().includes(n)?function(...t){return n.apply(li(this),t),De(dc.get(this))}:function(...t){return De(n.apply(li(this),t))}}function Vd(n){return typeof n=="function"?Dd(n):(n instanceof IDBTransaction&&bd(n),Ad(n,Rd())?new Proxy(n,bi):n)}function De(n){if(n instanceof IDBRequest)return Sd(n);if(ai.has(n))return ai.get(n);const t=Vd(n);return t!==n&&(ai.set(n,t),ho.set(t,n)),t}const li=n=>ho.get(n);function kd(n,t,{blocked:e,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,t),a=De(o);return r&&o.addEventListener("upgradeneeded",l=>{r(De(o.result),l.oldVersion,l.newVersion,De(o.transaction),l)}),e&&o.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Nd=["get","getKey","getAll","getAllKeys","count"],Od=["put","add","delete","clear"],ci=new Map;function xa(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ci.get(t))return ci.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Od.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Nd.includes(e)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[e](...a),s&&l.done]))[0]};return ci.set(t,i),i}Pd(n=>({...n,get:(t,e,r)=>xa(t,e)||n.get(t,e,r),has:(t,e)=>!!xa(t,e)||n.has(t,e)}));/**
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
 */class Md{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Ld(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Ld(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Pi="@firebase/app",Ba="0.9.27";/**
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
 */const Ze=new fc("@firebase/app"),Fd="@firebase/app-compat",xd="@firebase/analytics-compat",Bd="@firebase/analytics",Ud="@firebase/app-check-compat",jd="@firebase/app-check",qd="@firebase/auth",zd="@firebase/auth-compat",Kd="@firebase/database",Gd="@firebase/database-compat",Hd="@firebase/functions",Wd="@firebase/functions-compat",Qd="@firebase/installations",$d="@firebase/installations-compat",Xd="@firebase/messaging",Jd="@firebase/messaging-compat",Yd="@firebase/performance",Zd="@firebase/performance-compat",tm="@firebase/remote-config",em="@firebase/remote-config-compat",nm="@firebase/storage",rm="@firebase/storage-compat",sm="@firebase/firestore",im="@firebase/firestore-compat",om="firebase",am="10.8.0";/**
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
 */const Di="[DEFAULT]",lm={[Pi]:"fire-core",[Fd]:"fire-core-compat",[Bd]:"fire-analytics",[xd]:"fire-analytics-compat",[jd]:"fire-app-check",[Ud]:"fire-app-check-compat",[qd]:"fire-auth",[zd]:"fire-auth-compat",[Kd]:"fire-rtdb",[Gd]:"fire-rtdb-compat",[Hd]:"fire-fn",[Wd]:"fire-fn-compat",[Qd]:"fire-iid",[$d]:"fire-iid-compat",[Xd]:"fire-fcm",[Jd]:"fire-fcm-compat",[Yd]:"fire-perf",[Zd]:"fire-perf-compat",[tm]:"fire-rc",[em]:"fire-rc-compat",[nm]:"fire-gcs",[rm]:"fire-gcs-compat",[sm]:"fire-fst",[im]:"fire-fst-compat","fire-js":"fire-js",[om]:"fire-js-all"};/**
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
 */const ss=new Map,Vi=new Map;function cm(n,t){try{n.container.addComponent(t)}catch(e){Ze.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function is(n){const t=n.name;if(Vi.has(t))return Ze.debug(`There were multiple attempts to register component ${t}.`),!1;Vi.set(t,n);for(const e of ss.values())cm(e,n);return!0}function um(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const hm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ve=new hc("app","Firebase",hm);/**
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
 */class fm{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ve.create("app-deleted",{appName:this._name})}}/**
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
 */const dm=am;function gc(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Di,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Ve.create("bad-app-name",{appName:String(s)});if(e||(e=cc()),!e)throw Ve.create("no-options");const i=ss.get(s);if(i){if(rs(e,i.options)&&rs(r,i.config))return i;throw Ve.create("duplicate-app",{appName:s})}const o=new Ed(s);for(const l of Vi.values())o.addComponent(l);const a=new fm(e,r,o);return ss.set(s,a),a}function mm(n=Di){const t=ss.get(n);if(!t&&n===Di&&cc())return gc();if(!t)throw Ve.create("no-app",{appName:n});return t}function pn(n,t,e){var r;let s=(r=lm[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ze.warn(a.join(" "));return}is(new sr(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const gm="firebase-heartbeat-database",pm=1,ir="firebase-heartbeat-store";let ui=null;function pc(){return ui||(ui=kd(gm,pm,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(ir)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ve.create("idb-open",{originalErrorMessage:n.message})})),ui}async function _m(n){try{const e=(await pc()).transaction(ir),r=await e.objectStore(ir).get(_c(n));return await e.done,r}catch(t){if(t instanceof kn)Ze.warn(t.message);else{const e=Ve.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ze.warn(e.message)}}}async function Ua(n,t){try{const r=(await pc()).transaction(ir,"readwrite");await r.objectStore(ir).put(t,_c(n)),await r.done}catch(e){if(e instanceof kn)Ze.warn(e.message);else{const r=Ve.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ze.warn(r.message)}}}function _c(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ym=1024,Em=30*24*60*60*1e3;class vm{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new wm(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ja();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Em}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ja(),{heartbeatsToSend:r,unsentEntries:s}=Tm(this._heartbeatsCache.heartbeats),i=es(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ja(){return new Date().toISOString().substring(0,10)}function Tm(n,t=ym){const e=[];let r=n.slice();for(const s of n){const i=e.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),qa(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),qa(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class wm{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uc()?fd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await _m(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ua(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ua(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function qa(n){return es(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Im(n){is(new sr("platform-logger",t=>new Md(t),"PRIVATE")),is(new sr("heartbeat",t=>new vm(t),"PRIVATE")),pn(Pi,Ba,n),pn(Pi,Ba,"esm2017"),pn("fire-js","")}Im("");var Am=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,fo=fo||{},B=Am||self;function ws(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function vr(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function Rm(n){return Object.prototype.hasOwnProperty.call(n,hi)&&n[hi]||(n[hi]=++Cm)}var hi="closure_uid_"+(1e9*Math.random()>>>0),Cm=0;function Sm(n,t,e){return n.call.apply(n.bind,arguments)}function bm(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),n.apply(t,s)}}return function(){return n.apply(t,arguments)}}function qt(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?qt=Sm:qt=bm,qt.apply(null,arguments)}function Fr(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function Dt(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Be(){this.s=this.s,this.o=this.o}var Pm=0;Be.prototype.s=!1;Be.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Pm!=0)&&Rm(this)};Be.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const yc=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function mo(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function za(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(ws(r)){const s=n.length||0,i=r.length||0;n.length=s+i;for(let o=0;o<i;o++)n[s+o]=r[o]}else n.push(r)}}function zt(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}zt.prototype.h=function(){this.defaultPrevented=!0};var Dm=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const e=()=>{};B.addEventListener("test",e,t),B.removeEventListener("test",e,t)}catch{}return n}();function or(n){return/^[\s\xa0]*$/.test(n)}function Is(){var n=B.navigator;return n&&(n=n.userAgent)?n:""}function ie(n){return Is().indexOf(n)!=-1}function go(n){return go[" "](n),n}go[" "]=function(){};function Vm(n,t){var e=Ig;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var km=ie("Opera"),Tn=ie("Trident")||ie("MSIE"),Ec=ie("Edge"),ki=Ec||Tn,vc=ie("Gecko")&&!(Is().toLowerCase().indexOf("webkit")!=-1&&!ie("Edge"))&&!(ie("Trident")||ie("MSIE"))&&!ie("Edge"),Nm=Is().toLowerCase().indexOf("webkit")!=-1&&!ie("Edge");function Tc(){var n=B.document;return n?n.documentMode:void 0}var Ni;t:{var fi="",di=function(){var n=Is();if(vc)return/rv:([^\);]+)(\)|;)/.exec(n);if(Ec)return/Edge\/([\d\.]+)/.exec(n);if(Tn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Nm)return/WebKit\/(\S+)/.exec(n);if(km)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(di&&(fi=di?di[1]:""),Tn){var mi=Tc();if(mi!=null&&mi>parseFloat(fi)){Ni=String(mi);break t}}Ni=fi}var Oi;if(B.document&&Tn){var Ka=Tc();Oi=Ka||parseInt(Ni,10)||void 0}else Oi=void 0;var Om=Oi;function ar(n,t){if(zt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(vc){t:{try{go(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Mm[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&ar.$.h.call(this)}}Dt(ar,zt);var Mm={2:"touch",3:"pen",4:"mouse"};ar.prototype.h=function(){ar.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Tr="closure_listenable_"+(1e6*Math.random()|0),Lm=0;function Fm(n,t,e,r,s){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=s,this.key=++Lm,this.fa=this.ia=!1}function As(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function po(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function xm(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function wc(n){const t={};for(const e in n)t[e]=n[e];return t}const Ga="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ic(n,t){let e,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(e in r)n[e]=r[e];for(let i=0;i<Ga.length;i++)e=Ga[i],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function Rs(n){this.src=n,this.g={},this.h=0}Rs.prototype.add=function(n,t,e,r,s){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=Li(n,t,r,s);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new Fm(t,this.src,i,!!r,s),t.ia=e,n.push(t)),t};function Mi(n,t){var e=t.type;if(e in n.g){var r=n.g[e],s=yc(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(As(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function Li(n,t,e,r){for(var s=0;s<n.length;++s){var i=n[s];if(!i.fa&&i.listener==t&&i.capture==!!e&&i.la==r)return s}return-1}var _o="closure_lm_"+(1e6*Math.random()|0),gi={};function Ac(n,t,e,r,s){if(r&&r.once)return Cc(n,t,e,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Ac(n,t[i],e,r,s);return null}return e=vo(e),n&&n[Tr]?n.O(t,e,vr(r)?!!r.capture:!!r,s):Rc(n,t,e,!1,r,s)}function Rc(n,t,e,r,s,i){if(!t)throw Error("Invalid event type");var o=vr(s)?!!s.capture:!!s,a=Eo(n);if(a||(n[_o]=a=new Rs(n)),e=a.add(t,e,r,o,i),e.proxy)return e;if(r=Bm(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)Dm||(s=o),s===void 0&&(s=!1),n.addEventListener(t.toString(),r,s);else if(n.attachEvent)n.attachEvent(bc(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function Bm(){function n(e){return t.call(n.src,n.listener,e)}const t=Um;return n}function Cc(n,t,e,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Cc(n,t[i],e,r,s);return null}return e=vo(e),n&&n[Tr]?n.P(t,e,vr(r)?!!r.capture:!!r,s):Rc(n,t,e,!0,r,s)}function Sc(n,t,e,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Sc(n,t[i],e,r,s);else r=vr(r)?!!r.capture:!!r,e=vo(e),n&&n[Tr]?(n=n.i,t=String(t).toString(),t in n.g&&(i=n.g[t],e=Li(i,e,r,s),-1<e&&(As(i[e]),Array.prototype.splice.call(i,e,1),i.length==0&&(delete n.g[t],n.h--)))):n&&(n=Eo(n))&&(t=n.g[t.toString()],n=-1,t&&(n=Li(t,e,r,s)),(e=-1<n?t[n]:null)&&yo(e))}function yo(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[Tr])Mi(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(bc(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=Eo(t))?(Mi(e,n),e.h==0&&(e.src=null,t[_o]=null)):As(n)}}}function bc(n){return n in gi?gi[n]:gi[n]="on"+n}function Um(n,t){if(n.fa)n=!0;else{t=new ar(t,this);var e=n.listener,r=n.la||n.src;n.ia&&yo(n),n=e.call(r,t)}return n}function Eo(n){return n=n[_o],n instanceof Rs?n:null}var pi="__closure_events_fn_"+(1e9*Math.random()>>>0);function vo(n){return typeof n=="function"?n:(n[pi]||(n[pi]=function(t){return n.handleEvent(t)}),n[pi])}function Pt(){Be.call(this),this.i=new Rs(this),this.S=this,this.J=null}Dt(Pt,Be);Pt.prototype[Tr]=!0;Pt.prototype.removeEventListener=function(n,t,e,r){Sc(this,n,t,e,r)};function Lt(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new zt(t,n);else if(t instanceof zt)t.target=t.target||n;else{var s=t;t=new zt(r,n),Ic(t,s)}if(s=!0,e)for(var i=e.length-1;0<=i;i--){var o=t.g=e[i];s=xr(o,r,!0,t)&&s}if(o=t.g=n,s=xr(o,r,!0,t)&&s,s=xr(o,r,!1,t)&&s,e)for(i=0;i<e.length;i++)o=t.g=e[i],s=xr(o,r,!1,t)&&s}Pt.prototype.N=function(){if(Pt.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)As(e[r]);delete n.g[t],n.h--}}this.J=null};Pt.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};Pt.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function xr(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==e){var a=o.listener,l=o.la||o.src;o.ia&&Mi(n.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var To=B.JSON.stringify;class jm{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function qm(){var n=wo;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class zm{constructor(){this.h=this.g=null}add(t,e){const r=Pc.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var Pc=new jm(()=>new Km,n=>n.reset());class Km{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Gm(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function Hm(n){B.setTimeout(()=>{throw n},0)}let lr,cr=!1,wo=new zm,Dc=()=>{const n=B.Promise.resolve(void 0);lr=()=>{n.then(Wm)}};var Wm=()=>{for(var n;n=qm();){try{n.h.call(n.g)}catch(e){Hm(e)}var t=Pc;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}cr=!1};function Cs(n,t){Pt.call(this),this.h=n||1,this.g=t||B,this.j=qt(this.qb,this),this.l=Date.now()}Dt(Cs,Pt);R=Cs.prototype;R.ga=!1;R.T=null;R.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Lt(this,"tick"),this.ga&&(Io(this),this.start()))}};R.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Io(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}R.N=function(){Cs.$.N.call(this),Io(this),delete this.g};function Ao(n,t,e){if(typeof n=="function")e&&(n=qt(n,e));else if(n&&typeof n.handleEvent=="function")n=qt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:B.setTimeout(n,t||0)}function Vc(n){n.g=Ao(()=>{n.g=null,n.i&&(n.i=!1,Vc(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class Qm extends Be{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Vc(this)}N(){super.N(),this.g&&(B.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ur(n){Be.call(this),this.h=n,this.g={}}Dt(ur,Be);var Ha=[];function kc(n,t,e,r){Array.isArray(e)||(e&&(Ha[0]=e.toString()),e=Ha);for(var s=0;s<e.length;s++){var i=Ac(t,e[s],r||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function Nc(n){po(n.g,function(t,e){this.g.hasOwnProperty(e)&&yo(t)},n),n.g={}}ur.prototype.N=function(){ur.$.N.call(this),Nc(this)};ur.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ss(){this.g=!0}Ss.prototype.Ea=function(){this.g=!1};function $m(n,t,e,r,s,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+e+`
`+o})}function Xm(n,t,e,r,s,i,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+e+`
`+i+" "+o})}function gn(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+Ym(n,e)+(r?" "+r:"")})}function Jm(n,t){n.info(function(){return"TIMEOUT: "+t})}Ss.prototype.info=function(){};function Ym(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return To(e)}catch{return t}}var rn={},Wa=null;function bs(){return Wa=Wa||new Pt}rn.Ta="serverreachability";function Oc(n){zt.call(this,rn.Ta,n)}Dt(Oc,zt);function hr(n){const t=bs();Lt(t,new Oc(t))}rn.STAT_EVENT="statevent";function Mc(n,t){zt.call(this,rn.STAT_EVENT,n),this.stat=t}Dt(Mc,zt);function Ht(n){const t=bs();Lt(t,new Mc(t,n))}rn.Ua="timingevent";function Lc(n,t){zt.call(this,rn.Ua,n),this.size=t}Dt(Lc,zt);function wr(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return B.setTimeout(function(){n()},t)}var Ps={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Fc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ro(){}Ro.prototype.h=null;function Qa(n){return n.h||(n.h=n.i())}function xc(){}var Ir={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Co(){zt.call(this,"d")}Dt(Co,zt);function So(){zt.call(this,"c")}Dt(So,zt);var Fi;function Ds(){}Dt(Ds,Ro);Ds.prototype.g=function(){return new XMLHttpRequest};Ds.prototype.i=function(){return{}};Fi=new Ds;function Ar(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new ur(this),this.P=Zm,n=ki?125:void 0,this.V=new Cs(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Bc}function Bc(){this.i=null,this.g="",this.h=!1}var Zm=45e3,Uc={},xi={};R=Ar.prototype;R.setTimeout=function(n){this.P=n};function Bi(n,t,e){n.L=1,n.A=ks(Re(t)),n.u=e,n.S=!0,jc(n,null)}function jc(n,t){n.G=Date.now(),Rr(n),n.B=Re(n.A);var e=n.B,r=n.W;Array.isArray(r)||(r=[String(r)]),$c(e.i,"t",r),n.o=0,e=n.l.J,n.h=new Bc,n.g=pu(n.l,e?t:null,!n.u),0<n.O&&(n.M=new Qm(qt(n.Pa,n,n.g),n.O)),kc(n.U,n.g,"readystatechange",n.nb),t=n.I?wc(n.I):{},n.u?(n.v||(n.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,t)):(n.v="GET",n.g.ha(n.B,n.v,null,t)),hr(),$m(n.j,n.v,n.B,n.m,n.W,n.u)}R.nb=function(n){n=n.target;const t=this.M;t&&oe(n)==3?t.l():this.Pa(n)};R.Pa=function(n){try{if(n==this.g)t:{const u=oe(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ki||this.g&&(this.h.h||this.g.ja()||Ya(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?hr(3):hr(2)),Vs(this);var e=this.g.da();this.ca=e;e:if(qc(this)){var r=Ya(this.g);n="";var s=r.length,i=oe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){We(this),Yn(this);var o="";break e}this.h.i=new B.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=n,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,Xm(this.j,this.v,this.B,this.m,this.W,u,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!or(a)){var c=a;break e}}c=null}if(e=c)gn(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ui(this,e);else{this.i=!1,this.s=3,Ht(12),We(this),Yn(this);break t}}this.S?(zc(this,u,o),ki&&this.i&&u==3&&(kc(this.U,this.V,"tick",this.mb),this.V.start())):(gn(this.j,this.m,o,null),Ui(this,o)),u==4&&We(this),this.i&&!this.J&&(u==4?fu(this.l,this):(this.i=!1,Rr(this)))}else vg(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.s=3,Ht(12)):(this.s=0,Ht(13)),We(this),Yn(this)}}}catch{}finally{}};function qc(n){return n.g?n.v=="GET"&&n.L!=2&&n.l.Ha:!1}function zc(n,t,e){let r=!0,s;for(;!n.J&&n.o<e.length;)if(s=tg(n,e),s==xi){t==4&&(n.s=4,Ht(14),r=!1),gn(n.j,n.m,null,"[Incomplete Response]");break}else if(s==Uc){n.s=4,Ht(15),gn(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else gn(n.j,n.m,s,null),Ui(n,s);qc(n)&&n.o!=0&&(n.h.g=n.h.g.slice(n.o),n.o=0),t!=4||e.length!=0||n.h.h||(n.s=1,Ht(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),No(t),t.M=!0,Ht(11))):(gn(n.j,n.m,e,"[Invalid Chunked Response]"),We(n),Yn(n))}R.mb=function(){if(this.g){var n=oe(this.g),t=this.g.ja();this.o<t.length&&(Vs(this),zc(this,n,t),this.i&&n!=4&&Rr(this))}};function tg(n,t){var e=n.o,r=t.indexOf(`
`,e);return r==-1?xi:(e=Number(t.substring(e,r)),isNaN(e)?Uc:(r+=1,r+e>t.length?xi:(t=t.slice(r,r+e),n.o=r+e,t)))}R.cancel=function(){this.J=!0,We(this)};function Rr(n){n.Y=Date.now()+n.P,Kc(n,n.P)}function Kc(n,t){if(n.C!=null)throw Error("WatchDog timer not null");n.C=wr(qt(n.lb,n),t)}function Vs(n){n.C&&(B.clearTimeout(n.C),n.C=null)}R.lb=function(){this.C=null;const n=Date.now();0<=n-this.Y?(Jm(this.j,this.B),this.L!=2&&(hr(),Ht(17)),We(this),this.s=2,Yn(this)):Kc(this,this.Y-n)};function Yn(n){n.l.H==0||n.J||fu(n.l,n)}function We(n){Vs(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,Io(n.V),Nc(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function Ui(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||ji(e.i,n))){if(!n.K&&ji(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)ls(e),Ls(e);else break t;ko(e),Ht(18)}}else e.Fa=s[1],0<e.Fa-e.V&&37500>s[2]&&e.G&&e.A==0&&!e.v&&(e.v=wr(qt(e.ib,e),6e3));if(1>=Yc(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else Qe(e,11)}else if((n.K||e.g==n)&&ls(e),!or(t))for(s=e.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(e.V=c[0],c=c[1],e.H==2)if(c[0]=="c"){e.K=c[1],e.pa=c[2];const u=c[3];u!=null&&(e.ra=u,e.l.info("VER="+e.ra));const h=c[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const d=n.g;if(d){const I=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var i=r.i;i.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(bo(i,i.h),i.h=null))}if(r.F){const v=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,ft(r.I,r.F,v))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=gu(r,r.J?r.pa:null,r.Y),o.K){Zc(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Vs(a),Rr(a)),r.g=o}else uu(r);0<e.j.length&&Fs(e)}else c[0]!="stop"&&c[0]!="close"||Qe(e,7);else e.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Qe(e,7):Vo(e):c[0]!="noop"&&e.h&&e.h.Aa(c),e.A=0)}}hr(4)}catch{}}function eg(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(ws(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function ng(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(ws(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function Gc(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(ws(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=ng(n),r=eg(n),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],e&&e[i],n)}var Hc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rg(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),s=null;if(0<=r){var i=n[e].substring(0,r);s=n[e].substring(r+1)}else i=n[e];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ye(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Ye){this.h=n.h,os(this,n.j),this.s=n.s,this.g=n.g,as(this,n.m),this.l=n.l;var t=n.i,e=new fr;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),$a(this,e),this.o=n.o}else n&&(t=String(n).match(Hc))?(this.h=!1,os(this,t[1]||"",!0),this.s=Kn(t[2]||""),this.g=Kn(t[3]||"",!0),as(this,t[4]),this.l=Kn(t[5]||"",!0),$a(this,t[6]||"",!0),this.o=Kn(t[7]||"")):(this.h=!1,this.i=new fr(null,this.h))}Ye.prototype.toString=function(){var n=[],t=this.j;t&&n.push(Gn(t,Xa,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(Gn(t,Xa,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(Gn(e,e.charAt(0)=="/"?og:ig,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",Gn(e,lg)),n.join("")};function Re(n){return new Ye(n)}function os(n,t,e){n.j=e?Kn(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function as(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function $a(n,t,e){t instanceof fr?(n.i=t,cg(n.i,n.h)):(e||(t=Gn(t,ag)),n.i=new fr(t,n.h))}function ft(n,t,e){n.i.set(t,e)}function ks(n){return ft(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Kn(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Gn(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,sg),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function sg(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Xa=/[#\/\?@]/g,ig=/[#\?:]/g,og=/[#\?]/g,ag=/[#\?@]/g,lg=/#/g;function fr(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function Ue(n){n.g||(n.g=new Map,n.h=0,n.i&&rg(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}R=fr.prototype;R.add=function(n,t){Ue(this),this.i=null,n=Nn(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function Wc(n,t){Ue(n),t=Nn(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function Qc(n,t){return Ue(n),t=Nn(n,t),n.g.has(t)}R.forEach=function(n,t){Ue(this),this.g.forEach(function(e,r){e.forEach(function(s){n.call(t,s,r,this)},this)},this)};R.ta=function(){Ue(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const s=n[r];for(let i=0;i<s.length;i++)e.push(t[r])}return e};R.Z=function(n){Ue(this);let t=[];if(typeof n=="string")Qc(this,n)&&(t=t.concat(this.g.get(Nn(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};R.set=function(n,t){return Ue(this),this.i=null,n=Nn(this,n),Qc(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};R.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function $c(n,t,e){Wc(n,t),0<e.length&&(n.i=null,n.g.set(Nn(n,t),mo(e)),n.h+=e.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),n.push(s)}}return this.i=n.join("&")};function Nn(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function cg(n,t){t&&!n.j&&(Ue(n),n.i=null,n.g.forEach(function(e,r){var s=r.toLowerCase();r!=s&&(Wc(this,r),$c(this,s,e))},n)),n.j=t}var ug=class{constructor(n,t){this.g=n,this.map=t}};function Xc(n){this.l=n||hg,B.PerformanceNavigationTiming?(n=B.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(B.g&&B.g.Ka&&B.g.Ka()&&B.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hg=10;function Jc(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Yc(n){return n.h?1:n.g?n.g.size:0}function ji(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function bo(n,t){n.g?n.g.add(t):n.h=t}function Zc(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}Xc.prototype.cancel=function(){if(this.i=tu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function tu(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return mo(n.i)}var fg=class{stringify(n){return B.JSON.stringify(n,void 0)}parse(n){return B.JSON.parse(n,void 0)}};function dg(){this.g=new fg}function mg(n,t,e){const r=e||"";try{Gc(n,function(s,i){let o=s;vr(s)&&(o=To(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function gg(n,t){const e=new Ss;if(B.Image){const r=new Image;r.onload=Fr(Br,e,r,"TestLoadImage: loaded",!0,t),r.onerror=Fr(Br,e,r,"TestLoadImage: error",!1,t),r.onabort=Fr(Br,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=Fr(Br,e,r,"TestLoadImage: timeout",!1,t),B.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function Br(n,t,e,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function Ns(n){this.l=n.ec||null,this.j=n.ob||!1}Dt(Ns,Ro);Ns.prototype.g=function(){return new Os(this.l,this.j)};Ns.prototype.i=function(n){return function(){return n}}({});function Os(n,t){Pt.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=Po,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Dt(Os,Pt);var Po=0;R=Os.prototype;R.open=function(n,t){if(this.readyState!=Po)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,dr(this)};R.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||B).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cr(this)),this.readyState=Po};R.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,dr(this)),this.g&&(this.readyState=3,dr(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof B.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;eu(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function eu(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}R.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?Cr(this):dr(this),this.readyState==3&&eu(this)}};R.Za=function(n){this.g&&(this.response=this.responseText=n,Cr(this))};R.Ya=function(n){this.g&&(this.response=n,Cr(this))};R.ka=function(){this.g&&Cr(this)};function Cr(n){n.readyState=4,n.l=null,n.j=null,n.A=null,dr(n)}R.setRequestHeader=function(n,t){this.v.append(n,t)};R.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function dr(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Os.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var pg=B.JSON.parse;function _t(n){Pt.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=nu,this.L=this.M=!1}Dt(_t,Pt);var nu="",_g=/^https?$/i,yg=["POST","PUT"];R=_t.prototype;R.Oa=function(n){this.M=n};R.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Fi.g(),this.C=this.u?Qa(this.u):Qa(Fi),this.g.onreadystatechange=qt(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(i){Ja(this,i);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)e.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())e.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(i=>i.toLowerCase()=="content-type"),s=B.FormData&&n instanceof B.FormData,!(0<=yc(yg,t))||r||s||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of e)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{iu(this),0<this.B&&((this.L=Eg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=qt(this.ua,this)):this.A=Ao(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){Ja(this,i)}};function Eg(n){return Tn&&typeof n.timeout=="number"&&n.ontimeout!==void 0}R.ua=function(){typeof fo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Lt(this,"timeout"),this.abort(8))};function Ja(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,ru(n),Ms(n)}function ru(n){n.F||(n.F=!0,Lt(n,"complete"),Lt(n,"error"))}R.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Lt(this,"complete"),Lt(this,"abort"),Ms(this))};R.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ms(this,!0)),_t.$.N.call(this)};R.La=function(){this.s||(this.G||this.v||this.l?su(this):this.kb())};R.kb=function(){su(this)};function su(n){if(n.h&&typeof fo<"u"&&(!n.C[1]||oe(n)!=4||n.da()!=2)){if(n.v&&oe(n)==4)Ao(n.La,0,n);else if(Lt(n,"readystatechange"),oe(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var s=String(n.I).match(Hc)[1]||null;!s&&B.self&&B.self.location&&(s=B.self.location.protocol.slice(0,-1)),r=!_g.test(s?s.toLowerCase():"")}e=r}if(e)Lt(n,"complete"),Lt(n,"success");else{n.m=6;try{var i=2<oe(n)?n.g.statusText:""}catch{i=""}n.j=i+" ["+n.da()+"]",ru(n)}}finally{Ms(n)}}}}function Ms(n,t){if(n.g){iu(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||Lt(n,"ready");try{e.onreadystatechange=r}catch{}}}function iu(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(B.clearTimeout(n.A),n.A=null)}R.isActive=function(){return!!this.g};function oe(n){return n.g?n.g.readyState:0}R.da=function(){try{return 2<oe(this)?this.g.status:-1}catch{return-1}};R.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),pg(t)}};function Ya(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case nu:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function vg(n){const t={};n=(n.g&&2<=oe(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(or(n[r]))continue;var e=Gm(n[r]);const s=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const i=t[s]||[];t[s]=i,i.push(e)}xm(t,function(r){return r.join(", ")})}R.Ia=function(){return this.m};R.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ou(n){let t="";return po(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function Do(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=ou(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):ft(n,t,e))}function jn(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function au(n){this.Ga=0,this.j=[],this.l=new Ss,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=jn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=jn("baseRetryDelayMs",5e3,n),this.hb=jn("retryDelaySeedMs",1e4,n),this.eb=jn("forwardChannelMaxRetries",2,n),this.xa=jn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Xc(n&&n.concurrentRequestLimit),this.Ja=new dg,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}R=au.prototype;R.ra=8;R.H=1;function Vo(n){if(lu(n),n.H==3){var t=n.W++,e=Re(n.I);if(ft(e,"SID",n.K),ft(e,"RID",t),ft(e,"TYPE","terminate"),Sr(n,e),t=new Ar(n,n.l,t),t.L=2,t.A=ks(Re(e)),e=!1,B.navigator&&B.navigator.sendBeacon)try{e=B.navigator.sendBeacon(t.A.toString(),"")}catch{}!e&&B.Image&&(new Image().src=t.A,e=!0),e||(t.g=pu(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Rr(t)}mu(n)}function Ls(n){n.g&&(No(n),n.g.cancel(),n.g=null)}function lu(n){Ls(n),n.u&&(B.clearTimeout(n.u),n.u=null),ls(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&B.clearTimeout(n.m),n.m=null)}function Fs(n){if(!Jc(n.i)&&!n.m){n.m=!0;var t=n.Na;lr||Dc(),cr||(lr(),cr=!0),wo.add(t,n),n.C=0}}function Tg(n,t){return Yc(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=wr(qt(n.Na,n,t),du(n,n.C)),n.C++,!0)}R.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const s=new Ar(this,this.l,n);let i=this.s;if(this.U&&(i?(i=wc(i),Ic(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=cu(this,s,t),e=Re(this.I),ft(e,"RID",n),ft(e,"CVER",22),this.F&&ft(e,"X-HTTP-Session-Id",this.F),Sr(this,e),i&&(this.O?t="headers="+encodeURIComponent(String(ou(i)))+"&"+t:this.o&&Do(e,this.o,i)),bo(this.i,s),this.bb&&ft(e,"TYPE","init"),this.P?(ft(e,"$req",t),ft(e,"SID","null"),s.aa=!0,Bi(s,e,null)):Bi(s,e,t),this.H=2}}else this.H==3&&(n?Za(this,n):this.j.length==0||Jc(this.i)||Za(this))};function Za(n,t){var e;t?e=t.m:e=n.W++;const r=Re(n.I);ft(r,"SID",n.K),ft(r,"RID",e),ft(r,"AID",n.V),Sr(n,r),n.o&&n.s&&Do(r,n.o,n.s),e=new Ar(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=cu(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),bo(n.i,e),Bi(e,r,t)}function Sr(n,t){n.na&&po(n.na,function(e,r){ft(t,r,e)}),n.h&&Gc({},function(e,r){ft(t,r,e)})}function cu(n,t,e){e=Math.min(n.j.length,e);var r=n.h?qt(n.h.Va,n.h,n):null;t:{var s=n.j;let i=-1;for(;;){const o=["count="+e];i==-1?0<e?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<e;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{mg(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function uu(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;lr||Dc(),cr||(lr(),cr=!0),wo.add(t,n),n.A=0}}function ko(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=wr(qt(n.Ma,n),du(n,n.A)),n.A++,!0)}R.Ma=function(){if(this.u=null,hu(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=wr(qt(this.jb,this),n)}};R.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ht(10),Ls(this),hu(this))};function No(n){n.B!=null&&(B.clearTimeout(n.B),n.B=null)}function hu(n){n.g=new Ar(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=Re(n.wa);ft(t,"RID","rpc"),ft(t,"SID",n.K),ft(t,"AID",n.V),ft(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&ft(t,"TO",n.qa),ft(t,"TYPE","xmlhttp"),Sr(n,t),n.o&&n.s&&Do(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.A=ks(Re(t)),e.u=null,e.S=!0,jc(e,n)}R.ib=function(){this.v!=null&&(this.v=null,Ls(this),ko(this),Ht(19))};function ls(n){n.v!=null&&(B.clearTimeout(n.v),n.v=null)}function fu(n,t){var e=null;if(n.g==t){ls(n),No(n),n.g=null;var r=2}else if(ji(n.i,t))e=t.F,Zc(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.u?t.u.length:0,t=Date.now()-t.G;var s=n.C;r=bs(),Lt(r,new Lc(r,e)),Fs(n)}else uu(n);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&Tg(n,t)||r==2&&ko(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),s){case 1:Qe(n,5);break;case 4:Qe(n,10);break;case 3:Qe(n,6);break;default:Qe(n,2)}}}function du(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function Qe(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=qt(n.pb,n);e||(e=new Ye("//www.google.com/images/cleardot.gif"),B.location&&B.location.protocol=="http"||os(e,"https"),ks(e)),gg(e.toString(),r)}else Ht(2);n.H=0,n.h&&n.h.za(t),mu(n),lu(n)}R.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Ht(2)):(this.l.info("Failed to ping google.com"),Ht(1))};function mu(n){if(n.H=0,n.ma=[],n.h){const t=tu(n.i);(t.length!=0||n.j.length!=0)&&(za(n.ma,t),za(n.ma,n.j),n.i.i.length=0,mo(n.j),n.j.length=0),n.h.ya()}}function gu(n,t,e){var r=e instanceof Ye?Re(e):new Ye(e);if(r.g!="")t&&(r.g=t+"."+r.g),as(r,r.m);else{var s=B.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new Ye(null);r&&os(i,r),t&&(i.g=t),s&&as(i,s),e&&(i.l=e),r=i}return e=n.F,t=n.Da,e&&t&&ft(r,e,t),ft(r,"VER",n.ra),Sr(n,r),r}function pu(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n.Ha&&!n.va?new _t(new Ns({ob:e})):new _t(n.va),t.Oa(n.J),t}R.isActive=function(){return!!this.h&&this.h.isActive(this)};function _u(){}R=_u.prototype;R.Ba=function(){};R.Aa=function(){};R.za=function(){};R.ya=function(){};R.isActive=function(){return!0};R.Va=function(){};function cs(){if(Tn&&!(10<=Number(Om)))throw Error("Environmental error: no available transport.")}cs.prototype.g=function(n,t){return new Jt(n,t)};function Jt(n,t){Pt.call(this),this.g=new au(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!or(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!or(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new On(this)}Dt(Jt,Pt);Jt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;Ht(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=gu(n,null,n.Y),Fs(n)};Jt.prototype.close=function(){Vo(this.g)};Jt.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=To(n),n=e);t.j.push(new ug(t.fb++,n)),t.H==3&&Fs(t)};Jt.prototype.N=function(){this.g.h=null,delete this.j,Vo(this.g),delete this.g,Jt.$.N.call(this)};function yu(n){Co.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}Dt(yu,Co);function Eu(){So.call(this),this.status=1}Dt(Eu,So);function On(n){this.g=n}Dt(On,_u);On.prototype.Ba=function(){Lt(this.g,"a")};On.prototype.Aa=function(n){Lt(this.g,new yu(n))};On.prototype.za=function(n){Lt(this.g,new Eu)};On.prototype.ya=function(){Lt(this.g,"b")};function wg(){this.blockSize=-1}function re(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Dt(re,wg);re.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function _i(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(s=0;16>s;++s)r[s]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],s=n.g[2];var i=n.g[3],o=t+(i^e&(s^i))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[3]+3250441966&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(i^e&(s^i))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[7]+4249261313&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(i^e&(s^i))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[11]+2304563134&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(i^e&(s^i))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[15]+1236535329&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(e^s))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[0]+3921069994&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(e^s))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[4]+3889429448&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(e^s))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[8]+1163531501&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(e^s))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[12]+2368359562&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(e^s^i)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[14]+4259657740&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^i)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[10]+3200236656&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^i)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[6]+76029189&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^i)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[2]+3299628645&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(s^(e|~i))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[5]+4237533241&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~i))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[1]+2240044497&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~i))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[13]+1309151649&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~i))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+s&4294967295,n.g[3]=n.g[3]+i&4294967295}re.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=e;)_i(this,n,i),i+=this.blockSize;if(typeof n=="string"){for(;i<t;)if(r[s++]=n.charCodeAt(i++),s==this.blockSize){_i(this,r),s=0;break}}else for(;i<t;)if(r[s++]=n[i++],s==this.blockSize){_i(this,r),s=0;break}}this.h=s,this.i+=t};re.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function at(n,t){this.h=t;for(var e=[],r=!0,s=n.length-1;0<=s;s--){var i=n[s]|0;r&&i==t||(e[s]=i,r=!1)}this.g=e}var Ig={};function Oo(n){return-128<=n&&128>n?Vm(n,function(t){return new at([t|0],0>t?-1:0)}):new at([n|0],0>n?-1:0)}function ae(n){if(isNaN(n)||!isFinite(n))return _n;if(0>n)return Ot(ae(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=qi;return new at(t,0)}function vu(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return Ot(vu(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=ae(Math.pow(t,8)),r=_n,s=0;s<n.length;s+=8){var i=Math.min(8,n.length-s),o=parseInt(n.substring(s,s+i),t);8>i?(i=ae(Math.pow(t,i)),r=r.R(i).add(ae(o))):(r=r.R(e),r=r.add(ae(o)))}return r}var qi=4294967296,_n=Oo(0),zi=Oo(1),tl=Oo(16777216);R=at.prototype;R.ea=function(){if(Zt(this))return-Ot(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:qi+r)*t,t*=qi}return n};R.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Te(this))return"0";if(Zt(this))return"-"+Ot(this).toString(n);for(var t=ae(Math.pow(n,6)),e=this,r="";;){var s=hs(e,t).g;e=us(e,s.R(t));var i=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=s,Te(e))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};R.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Te(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function Zt(n){return n.h==-1}R.X=function(n){return n=us(this,n),Zt(n)?-1:Te(n)?0:1};function Ot(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new at(e,~n.h).add(zi)}R.abs=function(){return Zt(this)?Ot(this):this};R.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(n.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(n.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,e[s]=o<<16|i}return new at(e,e[e.length-1]&-2147483648?-1:0)};function us(n,t){return n.add(Ot(t))}R.R=function(n){if(Te(this)||Te(n))return _n;if(Zt(this))return Zt(n)?Ot(this).R(Ot(n)):Ot(Ot(this).R(n));if(Zt(n))return Ot(this.R(Ot(n)));if(0>this.X(tl)&&0>n.X(tl))return ae(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<n.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(s)>>>16,l=n.D(s)&65535;e[2*r+2*s]+=o*l,Ur(e,2*r+2*s),e[2*r+2*s+1]+=i*l,Ur(e,2*r+2*s+1),e[2*r+2*s+1]+=o*a,Ur(e,2*r+2*s+1),e[2*r+2*s+2]+=i*a,Ur(e,2*r+2*s+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new at(e,0)};function Ur(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function qn(n,t){this.g=n,this.h=t}function hs(n,t){if(Te(t))throw Error("division by zero");if(Te(n))return new qn(_n,_n);if(Zt(n))return t=hs(Ot(n),t),new qn(Ot(t.g),Ot(t.h));if(Zt(t))return t=hs(n,Ot(t)),new qn(Ot(t.g),t.h);if(30<n.g.length){if(Zt(n)||Zt(t))throw Error("slowDivide_ only works with positive integers.");for(var e=zi,r=t;0>=r.X(n);)e=el(e),r=el(r);var s=hn(e,1),i=hn(r,1);for(r=hn(r,2),e=hn(e,2);!Te(r);){var o=i.add(r);0>=o.X(n)&&(s=s.add(e),i=o),r=hn(r,1),e=hn(e,1)}return t=us(n,s.R(t)),new qn(s,t)}for(s=_n;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=ae(e),o=i.R(t);Zt(o)||0<o.X(n);)e-=r,i=ae(e),o=i.R(t);Te(i)&&(i=zi),s=s.add(i),n=us(n,o)}return new qn(s,n)}R.gb=function(n){return hs(this,n).h};R.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new at(e,this.h&n.h)};R.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new at(e,this.h|n.h)};R.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new at(e,this.h^n.h)};function el(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new at(e,n.h)}function hn(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,s=[],i=0;i<r;i++)s[i]=0<t?n.D(i+e)>>>t|n.D(i+e+1)<<32-t:n.D(i+e);return new at(s,n.h)}cs.prototype.createWebChannel=cs.prototype.g;Jt.prototype.send=Jt.prototype.u;Jt.prototype.open=Jt.prototype.m;Jt.prototype.close=Jt.prototype.close;Ps.NO_ERROR=0;Ps.TIMEOUT=8;Ps.HTTP_ERROR=6;Fc.COMPLETE="complete";xc.EventType=Ir;Ir.OPEN="a";Ir.CLOSE="b";Ir.ERROR="c";Ir.MESSAGE="d";Pt.prototype.listen=Pt.prototype.O;_t.prototype.listenOnce=_t.prototype.P;_t.prototype.getLastError=_t.prototype.Sa;_t.prototype.getLastErrorCode=_t.prototype.Ia;_t.prototype.getStatus=_t.prototype.da;_t.prototype.getResponseJson=_t.prototype.Wa;_t.prototype.getResponseText=_t.prototype.ja;_t.prototype.send=_t.prototype.ha;_t.prototype.setWithCredentials=_t.prototype.Oa;re.prototype.digest=re.prototype.l;re.prototype.reset=re.prototype.reset;re.prototype.update=re.prototype.j;at.prototype.add=at.prototype.add;at.prototype.multiply=at.prototype.R;at.prototype.modulo=at.prototype.gb;at.prototype.compare=at.prototype.X;at.prototype.toNumber=at.prototype.ea;at.prototype.toString=at.prototype.toString;at.prototype.getBits=at.prototype.D;at.fromNumber=ae;at.fromString=vu;var Ag=function(){return new cs},Rg=function(){return bs()},yi=Ps,Cg=Fc,Sg=rn,nl={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},jr=xc,bg=_t,Pg=re,yn=at;const rl="@firebase/firestore";/**
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
 */class Ut{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
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
 */let Mn="10.8.0";/**
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
 */const tn=new fc("@firebase/firestore");function zn(){return tn.logLevel}function A(n,...t){if(tn.logLevel<=Y.DEBUG){const e=t.map(Mo);tn.debug(`Firestore (${Mn}): ${n}`,...e)}}function de(n,...t){if(tn.logLevel<=Y.ERROR){const e=t.map(Mo);tn.error(`Firestore (${Mn}): ${n}`,...e)}}function wn(n,...t){if(tn.logLevel<=Y.WARN){const e=t.map(Mo);tn.warn(`Firestore (${Mn}): ${n}`,...e)}}function Mo(n){if(typeof n=="string")return n;try{/**
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
 */function x(n="Unexpected state"){const t=`FIRESTORE (${Mn}) INTERNAL ASSERTION FAILED: `+n;throw de(t),new Error(t)}function ht(n,t){n||x()}function K(n,t){return n}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends kn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class we{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Tu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Dg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Ut.UNAUTHENTICATED))}shutdown(){}}class Vg{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class kg{constructor(t){this.t=t,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=l=>this.i!==r?(r=this.i,e(l)):Promise.resolve();let i=new we;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new we,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new we)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ht(typeof r.accessToken=="string"),new Tu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ht(t===null||typeof t=="string"),new Ut(t)}}class Ng{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Og{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Ng(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Mg{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lg{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=i=>{i.error!=null&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,A("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(ht(typeof e.token=="string"),this.R=e.token,new Mg(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Fg(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class wu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Fg(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<e&&(r+=t.charAt(s[i]%t.length))}return r}}function rt(n,t){return n<t?-1:n>t?1:0}function In(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */class Ct{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new k(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ct.fromMillis(Date.now())}static fromDate(t){return Ct.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new Ct(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?rt(this.nanoseconds,t.nanoseconds):rt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class U{constructor(t){this.timestamp=t}static fromTimestamp(t){return new U(t)}static min(){return new U(new Ct(0,0))}static max(){return new U(new Ct(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class mr{constructor(t,e,r){e===void 0?e=0:e>t.length&&x(),r===void 0?r=t.length-e:r>t.length-e&&x(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return mr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof mr?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const i=t.get(s),o=e.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class pt extends mr{construct(t,e,r){return new pt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new k(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new pt(e)}static emptyPath(){return new pt([])}}const xg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Mt extends mr{construct(t,e,r){return new Mt(t,e,r)}static isValidIdentifier(t){return xg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Mt(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const i=()=>{if(r.length===0)throw new k(E.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new k(E.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new k(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new k(E.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Mt(e)}static emptyPath(){return new Mt([])}}/**
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
 */class L{constructor(t){this.path=t}static fromPath(t){return new L(pt.fromString(t))}static fromName(t){return new L(pt.fromString(t).popFirst(5))}static empty(){return new L(pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&pt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return pt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new L(new pt(t.slice()))}}function Bg(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=U.fromTimestamp(r===1e9?new Ct(e+1,0):new Ct(e,r));return new Le(s,L.empty(),t)}function Ug(n){return new Le(n.readTime,n.key,-1)}class Le{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Le(U.min(),L.empty(),-1)}static max(){return new Le(U.max(),L.empty(),-1)}}function jg(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=L.comparator(n.documentKey,t.documentKey),e!==0?e:rt(n.largestBatchId,t.largestBatchId))}/**
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
 */const qg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function br(n){if(n.code!==E.FAILED_PRECONDITION||n.message!==qg)throw n;A("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class _{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new _((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof _?e:_.resolve(e)}catch(e){return _.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):_.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):_.reject(e)}static resolve(t){return new _((e,r)=>{e(t)})}static reject(t){return new _((e,r)=>{r(t)})}static waitFor(t){return new _((e,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&e()},l=>r(l))}),o=!0,i===s&&e()})}static or(t){let e=_.resolve(!1);for(const r of t)e=e.next(s=>s?_.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,i)=>{r.push(e.call(this,s,i))}),this.waitFor(r)}static mapArray(t,e){return new _((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;e(t[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(t,e){return new _((r,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):r()};i()})}}/**
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
 */class Lo{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new we,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new Zn(t,e.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Fo(r.target.error);this.V.reject(new Zn(t,s))}}static open(t,e,r,s){try{return new Lo(e,t.transaction(s,r))}catch(i){throw new Zn(e,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(A("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Gg(e)}}class $e{constructor(t,e,r){this.name=t,this.version=e,this.p=r,$e.S(ns())===12.2&&de("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return A("SimpleDb","Removing database:",t),He(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!uc())return!1;if($e.C())return!0;const t=ns(),e=$e.S(t),r=0<e&&e<10,s=$e.v(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||i)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const e=t.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(A("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;e(o)},s.onblocked=()=>{r(new Zn(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new k(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new k(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Zn(t,o))},s.onupgradeneeded=i=>{A("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{A("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,r,s){const i=e==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=Lo.open(this.db,t,i?"readonly":"readwrite",r),l=s(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),_.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(A("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Kg{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return He(this.k.delete())}}class Zn extends k{constructor(t,e){super(E.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Pr(n){return n.name==="IndexedDbTransactionError"}class Gg{constructor(t){this.store=t}put(t,e){let r;return e!==void 0?(A("SimpleDb","PUT",this.store.name,t,e),r=this.store.put(e,t)):(A("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),He(r)}add(t){return A("SimpleDb","ADD",this.store.name,t,t),He(this.store.add(t))}get(t){return He(this.store.get(t)).next(e=>(e===void 0&&(e=null),A("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return A("SimpleDb","DELETE",this.store.name,t),He(this.store.delete(t))}count(){return A("SimpleDb","COUNT",this.store.name),He(this.store.count())}W(t,e){const r=this.options(t,e),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new _((o,a)=>{i.onerror=l=>{a(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,l)=>{o.push(l)}).next(()=>o)}}j(t,e){const r=this.store.getAll(t,e===null?void 0:e);return new _((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(t,e){A("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,e);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(t,e){let r;e?r=t:(r={},e=t);const s=this.cursor(r);return this.G(s,e)}Z(t){const e=this.cursor({});return new _((r,s)=>{e.onerror=i=>{const o=Fo(i.target.error);s(o)},e.onsuccess=i=>{const o=i.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,e){const r=[];return new _((s,i)=>{t.onerror=o=>{i(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const l=new Kg(a),c=e(a.primaryKey,a.value,l);if(c instanceof _){const u=c.catch(h=>(l.done(),_.reject(h)));r.push(u)}l.isDone?s():l.$===null?a.continue():a.continue(l.$)}}).next(()=>_.waitFor(r))}options(t,e){let r;return t!==void 0&&(typeof t=="string"?r=t:e=t),{index:r,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,e):r.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function He(n){return new _((t,e)=>{n.onsuccess=r=>{const s=r.target.result;t(s)},n.onerror=r=>{const s=Fo(r.target.error);e(s)}})}let sl=!1;function Fo(n){const t=$e.S(ns());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(e)>=0){const r=new k("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return sl||(sl=!0,setTimeout(()=>{throw r},0)),r}}return n}/**
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
 */class xo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.se(r),this.oe=r=>e.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}xo._e=-1;function xs(n){return n==null}function fs(n){return n===0&&1/n==-1/0}function Hg(n){return typeof n=="number"&&Number.isInteger(n)&&!fs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function il(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function sn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Iu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class mt{constructor(t,e){this.comparator=t,this.root=e||Nt.EMPTY}insert(t,e){return new mt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(t){return new mt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new qr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new qr(this.root,t,this.comparator,!1)}getReverseIterator(){return new qr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new qr(this.root,t,this.comparator,!0)}}class qr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?r(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Nt{constructor(t,e,r,s,i){this.key=t,this.value=e,this.color=r??Nt.RED,this.left=s??Nt.EMPTY,this.right=i??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,i){return new Nt(t??this.key,e??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,r),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Nt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const t=this.left.check();if(t!==this.right.check())throw x();return t+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(t,e,r,s,i){return this}insert(t,e,r){return new Nt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ft{constructor(t){this.comparator=t,this.data=new mt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ol(this.data.getIterator())}getIteratorFrom(t){return new ol(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Ft)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ft(this.comparator);return e.data=t,e}}class ol{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Xt{constructor(t){this.fields=t,t.sort(Mt.comparator)}static empty(){return new Xt([])}unionWith(t){let e=new Ft(Mt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Xt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return In(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Au extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Kt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Au("Invalid base64 string: "+i):i}}(t);return new Kt(e)}static fromUint8Array(t){const e=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new Kt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return rt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Kt.EMPTY_BYTE_STRING=new Kt("");const Wg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fe(n){if(ht(!!n),typeof n=="string"){let t=0;const e=Wg.exec(n);if(ht(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:It(n.seconds),nanos:It(n.nanos)}}function It(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function en(n){return typeof n=="string"?Kt.fromBase64String(n):Kt.fromUint8Array(n)}/**
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
 */function Bo(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Uo(n){const t=n.mapValue.fields.__previous_value__;return Bo(t)?Uo(t):t}function gr(n){const t=Fe(n.mapValue.fields.__local_write_time__.timestampValue);return new Ct(t.seconds,t.nanos)}/**
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
 */class Qg{constructor(t,e,r,s,i,o,a,l,c){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class pr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new pr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof pr&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const zr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function nn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Bo(n)?4:$g(n)?9007199254740991:10:x()}function me(n,t){if(n===t)return!0;const e=nn(n);if(e!==nn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return gr(n).isEqual(gr(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Fe(s.timestampValue),a=Fe(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,i){return en(s.bytesValue).isEqual(en(i.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,i){return It(s.geoPointValue.latitude)===It(i.geoPointValue.latitude)&&It(s.geoPointValue.longitude)===It(i.geoPointValue.longitude)}(n,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return It(s.integerValue)===It(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=It(s.doubleValue),a=It(i.doubleValue);return o===a?fs(o)===fs(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return In(n.arrayValue.values||[],t.arrayValue.values||[],me);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(il(o)!==il(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!me(o[l],a[l])))return!1;return!0}(n,t);default:return x()}}function _r(n,t){return(n.values||[]).find(e=>me(e,t))!==void 0}function An(n,t){if(n===t)return 0;const e=nn(n),r=nn(t);if(e!==r)return rt(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return rt(n.booleanValue,t.booleanValue);case 2:return function(i,o){const a=It(i.integerValue||i.doubleValue),l=It(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,t);case 3:return al(n.timestampValue,t.timestampValue);case 4:return al(gr(n),gr(t));case 5:return rt(n.stringValue,t.stringValue);case 6:return function(i,o){const a=en(i),l=en(o);return a.compareTo(l)}(n.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=rt(a[c],l[c]);if(u!==0)return u}return rt(a.length,l.length)}(n.referenceValue,t.referenceValue);case 8:return function(i,o){const a=rt(It(i.latitude),It(o.latitude));return a!==0?a:rt(It(i.longitude),It(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=An(a[c],l[c]);if(u)return u}return rt(a.length,l.length)}(n.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===zr.mapValue&&o===zr.mapValue)return 0;if(i===zr.mapValue)return 1;if(o===zr.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const f=rt(l[h],u[h]);if(f!==0)return f;const d=An(a[l[h]],c[u[h]]);if(d!==0)return d}return rt(l.length,u.length)}(n.mapValue,t.mapValue);default:throw x()}}function al(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return rt(n,t);const e=Fe(n),r=Fe(t),s=rt(e.seconds,r.seconds);return s!==0?s:rt(e.nanos,r.nanos)}function Rn(n){return Ki(n)}function Ki(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Fe(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return en(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return L.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const i of e.values||[])s?s=!1:r+=",",r+=Ki(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ki(e.fields[o])}`;return s+"}"}(n.mapValue):x()}function Gi(n){return!!n&&"integerValue"in n}function jo(n){return!!n&&"arrayValue"in n}function ll(n){return!!n&&"nullValue"in n}function cl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Qr(n){return!!n&&"mapValue"in n}function tr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return sn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=tr(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=tr(n.arrayValue.values[e]);return t}return Object.assign({},n)}function $g(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Wt{constructor(t){this.value=t}static empty(){return new Wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Qr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=tr(e)}setAll(t){let e=Mt.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const l=this.getFieldsMap(e);this.applyChanges(l,r,s),r={},s=[],e=a.popLast()}o?r[a.lastSegment()]=tr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,r,s)}delete(t){const e=this.field(t.popLast());Qr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return me(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Qr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){sn(e,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new Wt(tr(this.value))}}function Ru(n){const t=[];return sn(n.fields,(e,r)=>{const s=new Mt([e]);if(Qr(r)){const i=Ru(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new Xt(t)}/**
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
 */class jt{constructor(t,e,r,s,i,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new jt(t,0,U.min(),U.min(),U.min(),Wt.empty(),0)}static newFoundDocument(t,e,r,s){return new jt(t,1,e,U.min(),r,s,0)}static newNoDocument(t,e){return new jt(t,2,e,U.min(),U.min(),Wt.empty(),0)}static newUnknownDocument(t,e){return new jt(t,3,e,U.min(),U.min(),Wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof jt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ds{constructor(t,e){this.position=t,this.inclusive=e}}function ul(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const i=t[s],o=n.position[s];if(i.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),e.key):r=An(o,e.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function hl(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!me(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class ms{constructor(t,e="asc"){this.field=t,this.dir=e}}function Xg(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Cu{}class At extends Cu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Yg(t,e,r):e==="array-contains"?new ep(t,r):e==="in"?new np(t,r):e==="not-in"?new rp(t,r):e==="array-contains-any"?new sp(t,r):new At(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Zg(t,r):new tp(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(An(e,this.value)):e!==null&&nn(this.value)===nn(e)&&this.matchesComparison(An(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ge extends Cu{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new ge(t,e)}matches(t){return Su(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Su(n){return n.op==="and"}function bu(n){return Jg(n)&&Su(n)}function Jg(n){for(const t of n.filters)if(t instanceof ge)return!1;return!0}function Hi(n){if(n instanceof At)return n.field.canonicalString()+n.op.toString()+Rn(n.value);if(bu(n))return n.filters.map(t=>Hi(t)).join(",");{const t=n.filters.map(e=>Hi(e)).join(",");return`${n.op}(${t})`}}function Pu(n,t){return n instanceof At?function(r,s){return s instanceof At&&r.op===s.op&&r.field.isEqual(s.field)&&me(r.value,s.value)}(n,t):n instanceof ge?function(r,s){return s instanceof ge&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Pu(o,s.filters[a]),!0):!1}(n,t):void x()}function Du(n){return n instanceof At?function(e){return`${e.field.canonicalString()} ${e.op} ${Rn(e.value)}`}(n):n instanceof ge?function(e){return e.op.toString()+" {"+e.getFilters().map(Du).join(" ,")+"}"}(n):"Filter"}class Yg extends At{constructor(t,e,r){super(t,e,r),this.key=L.fromName(r.referenceValue)}matches(t){const e=L.comparator(t.key,this.key);return this.matchesComparison(e)}}class Zg extends At{constructor(t,e){super(t,"in",e),this.keys=Vu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class tp extends At{constructor(t,e){super(t,"not-in",e),this.keys=Vu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Vu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>L.fromName(r.referenceValue))}class ep extends At{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return jo(e)&&_r(e.arrayValue,this.value)}}class np extends At{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&_r(this.value.arrayValue,e)}}class rp extends At{constructor(t,e){super(t,"not-in",e)}matches(t){if(_r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!_r(this.value.arrayValue,e)}}class sp extends At{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!jo(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>_r(this.value.arrayValue,r))}}/**
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
 */class ip{constructor(t,e=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function fl(n,t=null,e=[],r=[],s=null,i=null,o=null){return new ip(n,t,e,r,s,i,o)}function qo(n){const t=K(n);if(t.ce===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Hi(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),xs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Rn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Rn(r)).join(",")),t.ce=e}return t.ce}function zo(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Xg(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Pu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!hl(n.startAt,t.startAt)&&hl(n.endAt,t.endAt)}function Wi(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Bs{constructor(t,e=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function op(n,t,e,r,s,i,o,a){return new Bs(n,t,e,r,s,i,o,a)}function Us(n){return new Bs(n)}function dl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ap(n){return n.collectionGroup!==null}function er(n){const t=K(n);if(t.le===null){t.le=[];const e=new Set;for(const i of t.explicitOrderBy)t.le.push(i),e.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ft(Mt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.le.push(new ms(i,r))}),e.has(Mt.keyField().canonicalString())||t.le.push(new ms(Mt.keyField(),r))}return t.le}function le(n){const t=K(n);return t.he||(t.he=lp(t,er(n))),t.he}function lp(n,t){if(n.limitType==="F")return fl(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ms(s.field,i)});const e=n.endAt?new ds(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ds(n.startAt.position,n.startAt.inclusive):null;return fl(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Qi(n,t,e){return new Bs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function js(n,t){return zo(le(n),le(t))&&n.limitType===t.limitType}function ku(n){return`${qo(le(n))}|lt:${n.limitType}`}function fn(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Du(s)).join(", ")}]`),xs(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Rn(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Rn(s)).join(",")),`Target(${r})`}(le(n))}; limitType=${n.limitType})`}function qs(n,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):L.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,t)&&function(r,s){for(const i of er(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=ul(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,er(r),s)||r.endAt&&!function(o,a,l){const c=ul(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,er(r),s))}(n,t)}function cp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Nu(n){return(t,e)=>{let r=!1;for(const s of er(n)){const i=up(s,t,e);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function up(n,t,e){const r=n.field.isKeyField()?L.comparator(t.key,e.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?An(l,c):x()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x()}}/**
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
 */class Ln{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){sn(this.inner,(e,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Iu(this.inner)}size(){return this.innerSize}}/**
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
 */const hp=new mt(L.comparator);function Ce(){return hp}const Ou=new mt(L.comparator);function Hn(...n){let t=Ou;for(const e of n)t=t.insert(e.key,e);return t}function Mu(n){let t=Ou;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Xe(){return nr()}function Lu(){return nr()}function nr(){return new Ln(n=>n.toString(),(n,t)=>n.isEqual(t))}const fp=new mt(L.comparator),dp=new Ft(L.comparator);function H(...n){let t=dp;for(const e of n)t=t.add(e);return t}const mp=new Ft(rt);function gp(){return mp}/**
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
 */function Fu(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fs(t)?"-0":t}}function xu(n){return{integerValue:""+n}}function pp(n,t){return Hg(t)?xu(t):Fu(n,t)}/**
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
 */class zs{constructor(){this._=void 0}}function _p(n,t,e){return n instanceof gs?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Bo(i)&&(i=Uo(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(e,t):n instanceof Cn?Uu(n,t):n instanceof yr?ju(n,t):function(s,i){const o=Bu(s,i),a=ml(o)+ml(s.Ie);return Gi(o)&&Gi(s.Ie)?xu(a):Fu(s.serializer,a)}(n,t)}function yp(n,t,e){return n instanceof Cn?Uu(n,t):n instanceof yr?ju(n,t):e}function Bu(n,t){return n instanceof ps?function(r){return Gi(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class gs extends zs{}class Cn extends zs{constructor(t){super(),this.elements=t}}function Uu(n,t){const e=qu(t);for(const r of n.elements)e.some(s=>me(s,r))||e.push(r);return{arrayValue:{values:e}}}class yr extends zs{constructor(t){super(),this.elements=t}}function ju(n,t){let e=qu(t);for(const r of n.elements)e=e.filter(s=>!me(s,r));return{arrayValue:{values:e}}}class ps extends zs{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function ml(n){return It(n.integerValue||n.doubleValue)}function qu(n){return jo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Ep{constructor(t,e){this.field=t,this.transform=e}}function vp(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Cn&&s instanceof Cn||r instanceof yr&&s instanceof yr?In(r.elements,s.elements,me):r instanceof ps&&s instanceof ps?me(r.Ie,s.Ie):r instanceof gs&&s instanceof gs}(n.transform,t.transform)}class Tp{constructor(t,e){this.version=t,this.transformResults=e}}class ce{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ce}static exists(t){return new ce(void 0,t)}static updateTime(t){return new ce(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function $r(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Ks{}function zu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Gu(n.key,ce.none()):new Dr(n.key,n.data,ce.none());{const e=n.data,r=Wt.empty();let s=new Ft(Mt.comparator);for(let i of t.fields)if(!s.has(i)){let o=e.field(i);o===null&&i.length>1&&(i=i.popLast(),o=e.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new je(n.key,r,new Xt(s.toArray()),ce.none())}}function wp(n,t,e){n instanceof Dr?function(s,i,o){const a=s.value.clone(),l=pl(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof je?function(s,i,o){if(!$r(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=pl(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Ku(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,t,e):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function rr(n,t,e,r){return n instanceof Dr?function(i,o,a,l){if(!$r(i.precondition,o))return a;const c=i.value.clone(),u=_l(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,t,e,r):n instanceof je?function(i,o,a,l){if(!$r(i.precondition,o))return a;const c=_l(i.fieldTransforms,l,o),u=o.data;return u.setAll(Ku(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(n,t,e,r):function(i,o,a){return $r(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function Ip(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),i=Bu(r.transform,s||null);i!=null&&(e===null&&(e=Wt.empty()),e.set(r.field,i))}return e||null}function gl(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&In(r,s,(i,o)=>vp(i,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Dr extends Ks{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class je extends Ks{constructor(t,e,r,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ku(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function pl(n,t,e){const r=new Map;ht(n.length===e.length);for(let s=0;s<e.length;s++){const i=n[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,yp(o,a,e[s]))}return r}function _l(n,t,e){const r=new Map;for(const s of n){const i=s.transform,o=e.data.field(s.field);r.set(s.field,_p(i,o,t))}return r}class Gu extends Ks{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ap extends Ks{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Rp{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&wp(i,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=rr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=rr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Lu();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=e.has(s.key)?null:a;const l=zu(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),H())}isEqual(t){return this.batchId===t.batchId&&In(this.mutations,t.mutations,(e,r)=>gl(e,r))&&In(this.baseMutations,t.baseMutations,(e,r)=>gl(e,r))}}class Ko{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){ht(t.mutations.length===r.length);let s=function(){return fp}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ko(t,e,r,s)}}/**
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
 */class Cp{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Sp{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var wt,J;function bp(n){switch(n){default:return x();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Hu(n){if(n===void 0)return de("GRPC error has no .code"),E.UNKNOWN;switch(n){case wt.OK:return E.OK;case wt.CANCELLED:return E.CANCELLED;case wt.UNKNOWN:return E.UNKNOWN;case wt.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case wt.INTERNAL:return E.INTERNAL;case wt.UNAVAILABLE:return E.UNAVAILABLE;case wt.UNAUTHENTICATED:return E.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case wt.NOT_FOUND:return E.NOT_FOUND;case wt.ALREADY_EXISTS:return E.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return E.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case wt.ABORTED:return E.ABORTED;case wt.OUT_OF_RANGE:return E.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return E.UNIMPLEMENTED;case wt.DATA_LOSS:return E.DATA_LOSS;default:return x()}}(J=wt||(wt={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Pp(){return new TextEncoder}/**
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
 */const Dp=new yn([4294967295,4294967295],0);function yl(n){const t=Pp().encode(n),e=new Pg;return e.update(t),new Uint8Array(e.digest())}function El(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new yn([e,r],0),new yn([s,i],0)]}class Go{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Wn(`Invalid padding: ${e}`);if(r<0)throw new Wn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Wn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Wn(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=yn.fromNumber(this.Te)}de(t,e,r){let s=t.add(e.multiply(yn.fromNumber(r)));return s.compare(Dp)===1&&(s=new yn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=yl(t),[r,s]=El(e);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new Go(i,s,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const e=yl(t),[r,s]=El(e);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Wn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Gs{constructor(t,e,r,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Vr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Gs(U.min(),s,new mt(rt),Ce(),H())}}class Vr{constructor(t,e,r,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Vr(r,e,H(),H(),H())}}/**
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
 */class Xr{constructor(t,e,r,s){this.Ve=t,this.removedTargetIds=e,this.key=r,this.me=s}}class Wu{constructor(t,e){this.targetId=t,this.fe=e}}class Qu{constructor(t,e,r=Kt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class vl{constructor(){this.ge=0,this.pe=wl(),this.ye=Kt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=H(),e=H(),r=H();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:x()}}),new Vr(this.ye,this.we,t,e,r)}Fe(){this.Se=!1,this.pe=wl()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,ht(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class Vp{constructor(t){this.Le=t,this.ke=new Map,this.qe=Ce(),this.Qe=Tl(),this.Ke=new mt(rt)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(e);break;case 3:this.je(e)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.Ce(t.resumeToken));break;default:x()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach((r,s)=>{this.je(s)&&e(s)})}Je(t){const e=t.targetId,r=t.fe.count,s=this.Ye(e);if(s){const i=s.target;if(Wi(i))if(r===0){const o=new L(i.path);this.We(e,o,jt.newNoDocument(o,U.min()))}else ht(r===1);else{const o=this.Ze(e);if(o!==r){const a=this.Xe(t),l=a?this.et(a,t,o):1;if(l!==0){this.He(e);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,c)}}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=e;let o,a;try{o=en(r).toUint8Array()}catch(l){if(l instanceof Au)return wn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Go(o,s,i)}catch(l){return wn(l instanceof Wn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(t,e,r){return e.fe.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(e,i,null),s++)}),s}it(t){const e=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Wi(a.target)){const l=new L(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,jt.newNoDocument(l,t))}i.De&&(e.set(o,i.ve()),i.Fe())}});let r=H();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new Gs(t,e,this.Ke,this.qe,r);return this.qe=Ce(),this.Qe=Tl(),this.Ke=new mt(rt),s}Ue(t,e){if(!this.je(t))return;const r=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,r),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,e)?s.Me(e,1):s.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),r&&(this.qe=this.qe.insert(e,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new vl,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new Ft(rt),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||A("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new vl),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Tl(){return new mt(L.comparator)}function wl(){return new mt(L.comparator)}const kp={asc:"ASCENDING",desc:"DESCENDING"},Np={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Op={and:"AND",or:"OR"};class Mp{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function $i(n,t){return n.useProto3Json||xs(t)?t:{value:t}}function _s(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function $u(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Lp(n,t){return _s(n,t.toTimestamp())}function ue(n){return ht(!!n),U.fromTimestamp(function(e){const r=Fe(e);return new Ct(r.seconds,r.nanos)}(n))}function Ho(n,t){return Xi(n,t).canonicalString()}function Xi(n,t){const e=function(s){return new pt(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Xu(n){const t=pt.fromString(n);return ht(eh(t)),t}function Ji(n,t){return Ho(n.databaseId,t.path)}function Ei(n,t){const e=Xu(t);if(e.get(1)!==n.databaseId.projectId)throw new k(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new k(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new L(Yu(e))}function Ju(n,t){return Ho(n.databaseId,t)}function Fp(n){const t=Xu(n);return t.length===4?pt.emptyPath():Yu(t)}function Yi(n){return new pt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Yu(n){return ht(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Il(n,t,e){return{name:Ji(n,t),fields:e.value.mapValue.fields}}function xp(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:x()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(ht(u===void 0||typeof u=="string"),Kt.fromBase64String(u||"")):(ht(u===void 0||u instanceof Uint8Array),Kt.fromUint8Array(u||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?E.UNKNOWN:Hu(c.code);return new k(u,c.message||"")}(o);e=new Qu(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ei(n,r.document.name),i=ue(r.document.updateTime),o=r.document.createTime?ue(r.document.createTime):U.min(),a=new Wt({mapValue:{fields:r.document.fields}}),l=jt.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];e=new Xr(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Ei(n,r.document),i=r.readTime?ue(r.readTime):U.min(),o=jt.newNoDocument(s,i),a=r.removedTargetIds||[];e=new Xr([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Ei(n,r.document),i=r.removedTargetIds||[];e=new Xr([],i,s,null)}else{if(!("filter"in t))return x();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Sp(s,i),a=r.targetId;e=new Wu(a,o)}}return e}function Bp(n,t){let e;if(t instanceof Dr)e={update:Il(n,t.key,t.value)};else if(t instanceof Gu)e={delete:Ji(n,t.key)};else if(t instanceof je)e={update:Il(n,t.key,t.data),updateMask:Qp(t.fieldMask)};else{if(!(t instanceof Ap))return x();e={verify:Ji(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof gs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Cn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof yr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ps)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw x()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Lp(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:x()}(n,t.precondition)),e}function Up(n,t){return n&&n.length>0?(ht(t!==void 0),n.map(e=>function(s,i){let o=s.updateTime?ue(s.updateTime):ue(i);return o.isEqual(U.min())&&(o=ue(i)),new Tp(o,s.transformResults||[])}(e,t))):[]}function jp(n,t){return{documents:[Ju(n,t.path)]}}function qp(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Ju(n,s);const i=function(c){if(c.length!==0)return th(ge.create(c,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(u=>function(f){return{field:dn(f.field),direction:Gp(f.dir)}}(u))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=$i(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{ut:e,parent:s}}function zp(n){let t=Fp(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){ht(r===1);const u=e.from[0];u.allDescendants?s=u.collectionId:t=t.child(u.collectionId)}let i=[];e.where&&(i=function(h){const f=Zu(h);return f instanceof ge&&bu(f)?f.getFilters():[f]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(f=>function(I){return new ms(mn(I.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(f))}(e.orderBy));let a=null;e.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,xs(f)?null:f}(e.limit));let l=null;e.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new ds(d,f)}(e.startAt));let c=null;return e.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new ds(d,f)}(e.endAt)),op(t,s,o,i,a,"F",l,c)}function Kp(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Zu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=mn(e.unaryFilter.field);return At.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=mn(e.unaryFilter.field);return At.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=mn(e.unaryFilter.field);return At.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=mn(e.unaryFilter.field);return At.create(o,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(n):n.fieldFilter!==void 0?function(e){return At.create(mn(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ge.create(e.compositeFilter.filters.map(r=>Zu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x()}}(e.compositeFilter.op))}(n):x()}function Gp(n){return kp[n]}function Hp(n){return Np[n]}function Wp(n){return Op[n]}function dn(n){return{fieldPath:n.canonicalString()}}function mn(n){return Mt.fromServerFormat(n.fieldPath)}function th(n){return n instanceof At?function(e){if(e.op==="=="){if(cl(e.value))return{unaryFilter:{field:dn(e.field),op:"IS_NAN"}};if(ll(e.value))return{unaryFilter:{field:dn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(cl(e.value))return{unaryFilter:{field:dn(e.field),op:"IS_NOT_NAN"}};if(ll(e.value))return{unaryFilter:{field:dn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dn(e.field),op:Hp(e.op),value:e.value}}}(n):n instanceof ge?function(e){const r=e.getFilters().map(s=>th(s));return r.length===1?r[0]:{compositeFilter:{op:Wp(e.op),filters:r}}}(n):x()}function Qp(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function eh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Pe{constructor(t,e,r,s,i=U.min(),o=U.min(),a=Kt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new Pe(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Pe(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Pe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Pe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class $p{constructor(t){this.ct=t}}function Xp(n){const t=zp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Qi(t,t.limit,"L"):t}/**
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
 */class Jp{constructor(){this._n=new Yp}addToCollectionParentIndex(t,e){return this._n.add(e),_.resolve()}getCollectionParents(t,e){return _.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return _.resolve()}deleteFieldIndex(t,e){return _.resolve()}deleteAllFieldIndexes(t){return _.resolve()}createTargetIndexes(t,e){return _.resolve()}getDocumentsMatchingTarget(t,e){return _.resolve(null)}getIndexType(t,e){return _.resolve(0)}getFieldIndexes(t,e){return _.resolve([])}getNextCollectionGroupToUpdate(t){return _.resolve(null)}getMinOffset(t,e){return _.resolve(Le.min())}getMinOffsetFromCollectionGroup(t,e){return _.resolve(Le.min())}updateCollectionGroup(t,e,r){return _.resolve()}updateIndexEntries(t,e){return _.resolve()}}class Yp{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new Ft(pt.comparator),i=!s.has(r);return this.index[e]=s.add(r),i}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Ft(pt.comparator)).toArray()}}/**
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
 */class Sn{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Sn(0)}static Bn(){return new Sn(-1)}}/**
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
 */class Zp{constructor(){this.changes=new Ln(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,jt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?_.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class t_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class e_{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&rr(r.mutation,s,Xt.empty(),Ct.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,H()).next(()=>r))}getLocalViewOfDocuments(t,e,r=H()){const s=Xe();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(i=>{let o=Hn();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=Xe();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,H()))}populateOverlays(t,e,r){const s=[];return r.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,s){let i=Ce();const o=nr(),a=function(){return nr()}();return e.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof je)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),rr(u.mutation,c,u.mutation.getFieldMask(),Ct.now())):o.set(c.key,Xt.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),e.forEach((c,u)=>{var h;return a.set(c,new t_(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const r=nr();let s=new mt((o,a)=>o-a),i=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=e.get(l);if(c===null)return;let u=r.get(l)||Xt.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||H()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Lu();u.forEach(f=>{if(!i.has(f)){const d=zu(e.get(f),r.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(o){return L.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ap(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-i.size):_.resolve(Xe());let a=-1,l=i;return o.next(c=>_.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?_.resolve():this.remoteDocumentCache.getEntry(t,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,l,c,H())).next(u=>({batchId:a,changes:Mu(u)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new L(e)).next(r=>{let s=Hn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const i=e.collectionGroup;let o=Hn();return this.indexManager.getCollectionParents(t,i).next(a=>_.forEach(a,l=>{const c=function(h,f){return new Bs(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r,s).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,jt.newInvalidDocument(u)))});let a=Hn();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&rr(u.mutation,c,Xt.empty(),Ct.now()),qs(e,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class n_{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return _.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:ue(s.createTime)}}(e)),_.resolve()}getNamedQuery(t,e){return _.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:Xp(s.bundledQuery),readTime:ue(s.readTime)}}(e)),_.resolve()}}/**
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
 */class r_{constructor(){this.overlays=new mt(L.comparator),this.hr=new Map}getOverlay(t,e){return _.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Xe();return _.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,i)=>{this.ht(t,e,i)}),_.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),_.resolve()}getOverlaysForCollection(t,e,r){const s=Xe(),i=e.length+1,o=new L(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!e.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return _.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let i=new mt((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===e&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=Xe(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Xe(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return _.resolve(a)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Cp(e,r));let i=this.hr.get(e);i===void 0&&(i=H(),this.hr.set(e,i)),this.hr.set(e,i.add(r.key))}}/**
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
 */class Wo{constructor(){this.Pr=new Ft(bt.Ir),this.Tr=new Ft(bt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new bt(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new bt(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new L(new pt([])),r=new bt(e,t),s=new bt(e,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new L(new pt([])),r=new bt(e,t),s=new bt(e,t+1);let i=H();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const e=new bt(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class bt{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return L.comparator(t.key,e.key)||rt(t.pr,e.pr)}static Er(t,e){return rt(t.pr,e.pr)||L.comparator(t.key,e.key)}}/**
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
 */class s_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new Ft(bt.Ir)}checkEmpty(t){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Rp(i,e,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new bt(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(t,e){return _.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.br(r),i=s<0?0:s;return _.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new bt(e,0),s=new bt(e,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),_.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Ft(rt);return e.forEach(s=>{const i=new bt(s,0),o=new bt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),_.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let i=r;L.isDocumentKey(i)||(i=i.child(""));const o=new bt(new L(i),0);let a=new Ft(rt);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.pr)),!0)},o),_.resolve(this.Dr(a))}Dr(t){const e=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){ht(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return _.forEach(e.mutations,s=>{const i=new bt(s.key,e.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new bt(e,0),s=this.wr.firstAfterOrEqual(r);return _.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,_.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class i_{constructor(t){this.vr=t,this.docs=function(){return new mt(L.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return _.resolve(r?r.document.mutableCopy():jt.newInvalidDocument(e))}getEntries(t,e){let r=Ce();return e.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():jt.newInvalidDocument(s))}),_.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let i=Ce();const o=e.path,a=new L(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||jg(Ug(u),r)<=0||(s.has(u.key)||qs(e,u))&&(i=i.insert(u.key,u.mutableCopy()))}return _.resolve(i)}getAllFromCollectionGroup(t,e,r,s){x()}Fr(t,e){return _.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new o_(this)}getSize(t){return _.resolve(this.size)}}class o_ extends Zp{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),_.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
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
 */class a_{constructor(t){this.persistence=t,this.Mr=new Ln(e=>qo(e),zo),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Wo,this.targetCount=0,this.Br=Sn.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,s)=>e(s)),_.resolve()}getLastRemoteSnapshotVersion(t){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return _.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),_.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new Sn(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,_.resolve()}updateTargetData(t,e){return this.qn(e),_.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,_.resolve()}removeTargets(t,e,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),_.waitFor(i).next(()=>s)}getTargetCount(t){return _.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return _.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),_.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),_.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),_.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return _.resolve(r)}containsKey(t,e){return _.resolve(this.Nr.containsKey(e))}}/**
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
 */class l_{constructor(t,e){this.Lr={},this.overlays={},this.kr=new xo(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new a_(this),this.indexManager=new Jp,this.remoteDocumentCache=function(s){return new i_(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new $p(e),this.$r=new n_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new r_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Lr[t.toKey()];return r||(r=new s_(e,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){A("MemoryPersistence","Starting transaction:",t);const s=new c_(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,e){return _.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,e)))}}class c_ extends zg{constructor(t){super(),this.currentSequenceNumber=t}}class Qo{constructor(t){this.persistence=t,this.zr=new Wo,this.jr=null}static Hr(t){return new Qo(t)}get Jr(){if(this.jr)return this.jr;throw x()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),_.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),_.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),_.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Jr,r=>{const s=L.fromPath(r);return this.Yr(t,s).next(i=>{i||e.removeEntry(s,U.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return _.or([()=>_.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
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
 */class $o{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=s}static Ki(t,e){let r=H(),s=H();for(const i of e.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new $o(t,e.fromCache,r,s)}}/**
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
 */class u_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class h_{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return hd()?8:$e.v(ns())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,s){const i={result:null};return this.ji(t,e).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(t,e,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new u_;return this.Ji(t,e,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(t,e,o,a.size)})}).next(()=>i.result)}Yi(t,e,r,s){return r.documentReadCount<this.Wi?(zn()<=Y.DEBUG&&A("QueryEngine","SDK will not create cache indexes for query:",fn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),_.resolve()):(zn()<=Y.DEBUG&&A("QueryEngine","Query:",fn(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(zn()<=Y.DEBUG&&A("QueryEngine","The SDK decides to create cache indexes for query:",fn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,le(e))):_.resolve())}ji(t,e){if(dl(e))return _.resolve(null);let r=le(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Qi(e,null,"F"),r=le(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=H(...i);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const c=this.Zi(e,a);return this.Xi(e,c,o,l.readTime)?this.ji(t,Qi(e,null,"F")):this.es(t,c,e,l)}))})))}Hi(t,e,r,s){return dl(e)||s.isEqual(U.min())?_.resolve(null):this.zi.getDocuments(t,r).next(i=>{const o=this.Zi(e,i);return this.Xi(e,o,r,s)?_.resolve(null):(zn()<=Y.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),fn(e)),this.es(t,o,e,Bg(s,-1)).next(a=>a))})}Zi(t,e){let r=new Ft(Nu(t));return e.forEach((s,i)=>{qs(t,i)&&(r=r.add(i))}),r}Xi(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,e,r){return zn()<=Y.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",fn(e)),this.zi.getDocumentsMatchingQuery(t,e,Le.min(),r)}es(t,e,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(i=>(e.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class f_{constructor(t,e,r,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new mt(rt),this.rs=new Ln(i=>qo(i),zo),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new e_(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function d_(n,t,e,r){return new f_(n,t,e,r)}async function nh(n,t){const e=K(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=H();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return e.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function m_(n,t){const e=K(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=e.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,f=h.keys();let d=_.resolve();return f.forEach(I=>{d=d.next(()=>u.getEntry(l,I)).next(v=>{const p=c.docVersions.get(I);ht(p!==null),v.version.compareTo(p)<0&&(h.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),u.addEntry(v)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(e,r,t,i).next(()=>i.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=H();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function rh(n){const t=K(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function g_(n,t){const e=K(n),r=t.snapshotVersion;let s=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=e.os.newChangeBuffer({trackRemovals:!0});s=e.ns;const a=[];t.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(e.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>e.Qr.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?d=d.withResumeToken(Kt.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),s=s.insert(h,d),function(v,p,m){return v.resumeToken.approximateByteSize()===0||p.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(f,d,u)&&a.push(e.Qr.updateTargetData(i,d))});let l=Ce(),c=H();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(p_(i,o,t.documentUpdates).next(u=>{l=u.cs,c=u.ls})),!r.isEqual(U.min())){const u=e.Qr.getLastRemoteSnapshotVersion(i).next(h=>e.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return _.waitFor(a).next(()=>o.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(e.ns=s,i))}function p_(n,t,e){let r=H(),s=H();return e.forEach(i=>r=r.add(i)),t.getEntries(n,r).next(i=>{let o=Ce();return e.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(U.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):A("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:s}})}function __(n,t){const e=K(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function y_(n,t){const e=K(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Qr.getTargetData(r,t).next(i=>i?(s=i,_.resolve(s)):e.Qr.allocateTargetId(r).next(o=>(s=new Pe(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function Zi(n,t,e){const r=K(n),s=r.ns.get(t),i=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Pr(o))throw o;A("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function Al(n,t,e){const r=K(n);let s=U.min(),i=H();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=K(l),f=h.rs.get(u);return f!==void 0?_.resolve(h.ns.get(f)):h.Qr.getTargetData(c,u)}(r,o,le(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,e?s:U.min(),e?i:H())).next(a=>(E_(r,cp(t),a),{documents:a,hs:i})))}function E_(n,t,e){let r=n.ss.get(t)||U.min();e.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.ss.set(t,r)}class Rl{constructor(){this.activeTargetIds=gp()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class v_{constructor(){this.no=new Rl,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Rl,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class T_{io(t){}shutdown(){}}/**
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
 */class Cl{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Kr=null;function vi(){return Kr===null?Kr=function(){return 268435456+Math.round(2147483648*Math.random())}():Kr++,"0x"+Kr.toString(16)}/**
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
 */const w_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class I_{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
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
 */const Bt="WebChannelConnection";class A_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+e.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(e,r,s,i,o){const a=vi(),l=this.bo(e,r.toUriEncodedString());A("RestConnection",`Sending RPC '${e}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,i,o),this.Co(e,l,c,s).then(u=>(A("RestConnection",`Received RPC '${e}' ${a}: `,u),u),u=>{throw wn("RestConnection",`RPC '${e}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}vo(e,r,s,i,o,a){return this.So(e,r,s,i,o)}Do(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>e[o]=i),s&&s.headers.forEach((i,o)=>e[o]=i)}bo(e,r){const s=w_[e];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,e,r,s){const i=vi();return new Promise((o,a)=>{const l=new bg;l.setWithCredentials(!0),l.listenOnce(Cg.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case yi.NO_ERROR:const u=l.getResponseJson();A(Bt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(u)),o(u);break;case yi.TIMEOUT:A(Bt,`RPC '${t}' ${i} timed out`),a(new k(E.DEADLINE_EXCEEDED,"Request time out"));break;case yi.HTTP_ERROR:const h=l.getStatus();if(A(Bt,`RPC '${t}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const I=function(p){const m=p.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(m)>=0?m:E.UNKNOWN}(d.status);a(new k(I,d.message))}else a(new k(E.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new k(E.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{A(Bt,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(s);A(Bt,`RPC '${t}' ${i} sending request:`,s),l.send(e,"POST",c,r,15)})}Fo(t,e,r){const s=vi(),i=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Ag(),a=Rg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,e,r),l.encodeInitMessageHeaders=!0;const u=i.join("");A(Bt,`Creating RPC '${t}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let f=!1,d=!1;const I=new I_({lo:p=>{d?A(Bt,`Not sending because RPC '${t}' stream ${s} is closed:`,p):(f||(A(Bt,`Opening RPC '${t}' stream ${s} transport.`),h.open(),f=!0),A(Bt,`RPC '${t}' stream ${s} sending:`,p),h.send(p))},ho:()=>h.close()}),v=(p,m,g)=>{p.listen(m,P=>{try{g(P)}catch(N){setTimeout(()=>{throw N},0)}})};return v(h,jr.EventType.OPEN,()=>{d||A(Bt,`RPC '${t}' stream ${s} transport opened.`)}),v(h,jr.EventType.CLOSE,()=>{d||(d=!0,A(Bt,`RPC '${t}' stream ${s} transport closed`),I.Vo())}),v(h,jr.EventType.ERROR,p=>{d||(d=!0,wn(Bt,`RPC '${t}' stream ${s} transport errored:`,p),I.Vo(new k(E.UNAVAILABLE,"The operation could not be completed")))}),v(h,jr.EventType.MESSAGE,p=>{var m;if(!d){const g=p.data[0];ht(!!g);const P=g,N=P.error||((m=P[0])===null||m===void 0?void 0:m.error);if(N){A(Bt,`RPC '${t}' stream ${s} received error:`,N);const lt=N.status;let F=function(dt){const yt=wt[dt];if(yt!==void 0)return Hu(yt)}(lt),w=N.message;F===void 0&&(F=E.INTERNAL,w="Unknown error status: "+lt+" with message "+N.message),d=!0,I.Vo(new k(F,w)),h.close()}else A(Bt,`RPC '${t}' stream ${s} received:`,g),I.mo(g)}}),v(a,Sg.STAT_EVENT,p=>{p.stat===nl.PROXY?A(Bt,`RPC '${t}' stream ${s} detected buffering proxy`):p.stat===nl.NOPROXY&&A(Bt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{I.Ro()},0),I}}function Ti(){return typeof document<"u"?document:null}/**
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
 */function Hs(n){return new Mp(n,!0)}/**
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
 */class sh{constructor(t,e,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=e,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const e=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),s=Math.max(0,e-r);s>0&&A("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class ih{constructor(t,e,r,s,i,o,a,l){this.oi=t,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new sh(t,e)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,e){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():e&&e.code===E.RESOURCE_EXHAUSTED?(de(e.toString()),de("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):e&&e.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(e)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),e=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===e&&this.o_(r,s)},r=>{t(()=>{const s=new k(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(t,e){const r=this.s_(this.Wo);this.stream=this.a_(t,e),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return A("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return e=>{this.oi.enqueueAndForget(()=>this.Wo===t?e():(A("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class R_ extends ih{constructor(t,e,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,o),this.serializer=i}a_(t,e){return this.connection.Fo("Listen",t,e)}onMessage(t){this.jo.reset();const e=xp(this.serializer,t),r=function(i){if(!("targetChange"in i))return U.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?U.min():o.readTime?ue(o.readTime):U.min()}(t);return this.listener.u_(e,r)}c_(t){const e={};e.database=Yi(this.serializer),e.addTarget=function(i,o){let a;const l=o.target;if(a=Wi(l)?{documents:jp(i,l)}:{query:qp(i,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=$u(i,o.resumeToken);const c=$i(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(U.min())>0){a.readTime=_s(i,o.snapshotVersion.toTimestamp());const c=$i(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=Kp(this.serializer,t);r&&(e.labels=r),this.t_(e)}l_(t){const e={};e.database=Yi(this.serializer),e.removeTarget=t,this.t_(e)}}class C_ extends ih{constructor(t,e,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,e){return this.connection.Fo("Write",t,e)}onMessage(t){if(ht(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const e=Up(t.writeResults,t.commitTime),r=ue(t.commitTime);return this.listener.T_(r,e)}return ht(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=Yi(this.serializer),this.t_(t)}I_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Bp(this.serializer,r))};this.t_(e)}}/**
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
 */class S_ extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new k(E.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,Xi(e,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new k(E.UNKNOWN,i.toString())})}vo(t,e,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,Xi(e,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(E.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class b_{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(de(e),this.g_=!1):A("OnlineStateTracker",e)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class P_{constructor(t,e,r,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{on(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=K(l);c.v_.add(4),await kr(c),c.x_.set("Unknown"),c.v_.delete(4),await Ws(c)}(this))})}),this.x_=new b_(r,s)}}async function Ws(n){if(on(n))for(const t of n.F_)await t(!0)}async function kr(n){for(const t of n.F_)await t(!1)}function oh(n,t){const e=K(n);e.C_.has(t.targetId)||(e.C_.set(t.targetId,t),Yo(e)?Jo(e):Fn(e).Jo()&&Xo(e,t))}function ah(n,t){const e=K(n),r=Fn(e);e.C_.delete(t),r.Jo()&&lh(e,t),e.C_.size===0&&(r.Jo()?r.Xo():on(e)&&e.x_.set("Unknown"))}function Xo(n,t){if(n.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Fn(n).c_(t)}function lh(n,t){n.O_.Oe(t),Fn(n).l_(t)}function Jo(n){n.O_=new Vp({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>n.C_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),Fn(n).start(),n.x_.p_()}function Yo(n){return on(n)&&!Fn(n).Ho()&&n.C_.size>0}function on(n){return K(n).v_.size===0}function ch(n){n.O_=void 0}async function D_(n){n.C_.forEach((t,e)=>{Xo(n,t)})}async function V_(n,t){ch(n),Yo(n)?(n.x_.S_(t),Jo(n)):n.x_.set("Unknown")}async function k_(n,t,e){if(n.x_.set("Online"),t instanceof Qu&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(n,t)}catch(r){A("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ys(n,r)}else if(t instanceof Xr?n.O_.$e(t):t instanceof Wu?n.O_.Je(t):n.O_.Ge(t),!e.isEqual(U.min()))try{const r=await rh(n.localStore);e.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.C_.get(c);u&&i.C_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.C_.get(l);if(!u)return;i.C_.set(l,u.withResumeToken(Kt.EMPTY_BYTE_STRING,u.snapshotVersion)),lh(i,l);const h=new Pe(u.target,l,c,u.sequenceNumber);Xo(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){A("RemoteStore","Failed to raise snapshot:",r),await ys(n,r)}}async function ys(n,t,e){if(!Pr(t))throw t;n.v_.add(1),await kr(n),n.x_.set("Offline"),e||(e=()=>rh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{A("RemoteStore","Retrying IndexedDB access"),await e(),n.v_.delete(1),await Ws(n)})}function uh(n,t){return t().catch(e=>ys(n,e,t))}async function Qs(n){const t=K(n),e=xe(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;N_(t);)try{const s=await __(t.localStore,r);if(s===null){t.D_.length===0&&e.Xo();break}r=s.batchId,O_(t,s)}catch(s){await ys(t,s)}hh(t)&&fh(t)}function N_(n){return on(n)&&n.D_.length<10}function O_(n,t){n.D_.push(t);const e=xe(n);e.Jo()&&e.P_&&e.I_(t.mutations)}function hh(n){return on(n)&&!xe(n).Ho()&&n.D_.length>0}function fh(n){xe(n).start()}async function M_(n){xe(n).d_()}async function L_(n){const t=xe(n);for(const e of n.D_)t.I_(e.mutations)}async function F_(n,t,e){const r=n.D_.shift(),s=Ko.from(r,t,e);await uh(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Qs(n)}async function x_(n,t){t&&xe(n).P_&&await async function(r,s){if(function(o){return bp(o)&&o!==E.ABORTED}(s.code)){const i=r.D_.shift();xe(r).Zo(),await uh(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Qs(r)}}(n,t),hh(n)&&fh(n)}async function Sl(n,t){const e=K(n);e.asyncQueue.verifyOperationInProgress(),A("RemoteStore","RemoteStore received new credentials");const r=on(e);e.v_.add(3),await kr(e),r&&e.x_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.v_.delete(3),await Ws(e)}async function B_(n,t){const e=K(n);t?(e.v_.delete(2),await Ws(e)):t||(e.v_.add(2),await kr(e),e.x_.set("Unknown"))}function Fn(n){return n.N_||(n.N_=function(e,r,s){const i=K(e);return i.R_(),new R_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:D_.bind(null,n),To:V_.bind(null,n),u_:k_.bind(null,n)}),n.F_.push(async t=>{t?(n.N_.Zo(),Yo(n)?Jo(n):n.x_.set("Unknown")):(await n.N_.stop(),ch(n))})),n.N_}function xe(n){return n.B_||(n.B_=function(e,r,s){const i=K(e);return i.R_(),new C_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:M_.bind(null,n),To:x_.bind(null,n),E_:L_.bind(null,n),T_:F_.bind(null,n)}),n.F_.push(async t=>{t?(n.B_.Zo(),await Qs(n)):(await n.B_.stop(),n.D_.length>0&&(A("RemoteStore",`Stopping write stream with ${n.D_.length} pending writes`),n.D_=[]))})),n.B_}/**
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
 */class Zo{constructor(t,e,r,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new we,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,i){const o=Date.now()+r,a=new Zo(t,e,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(E.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ta(n,t){if(de("AsyncQueue",`${t}: ${n}`),Pr(n))return new k(E.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class En{constructor(t){this.comparator=t?(e,r)=>t(e,r)||L.comparator(e.key,r.key):(e,r)=>L.comparator(e.key,r.key),this.keyedMap=Hn(),this.sortedSet=new mt(this.comparator)}static emptySet(t){return new En(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof En)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new En;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class bl{constructor(){this.L_=new mt(L.comparator)}track(t){const e=t.doc.key,r=this.L_.get(e);r?t.type!==0&&r.type===3?this.L_=this.L_.insert(e,t):t.type===3&&r.type!==1?this.L_=this.L_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.L_=this.L_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.L_=this.L_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.L_=this.L_.remove(e):t.type===1&&r.type===2?this.L_=this.L_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.L_=this.L_.insert(e,{type:2,doc:t.doc}):x():this.L_=this.L_.insert(e,t)}k_(){const t=[];return this.L_.inorderTraversal((e,r)=>{t.push(r)}),t}}class bn{constructor(t,e,r,s,i,o,a,l,c){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(t,e,r,s,i){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new bn(t,e,En.emptySet(e),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&js(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class U_{constructor(){this.q_=void 0,this.Q_=[]}}class j_{constructor(){this.queries=new Ln(t=>ku(t),js),this.onlineState="Unknown",this.K_=new Set}}async function dh(n,t){const e=K(n),r=t.query;let s=!1,i=e.queries.get(r);if(i||(s=!0,i=new U_),s)try{i.q_=await e.onListen(r)}catch(o){const a=ta(o,`Initialization of query '${fn(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,i),i.Q_.push(t),t.U_(e.onlineState),i.q_&&t.W_(i.q_)&&ea(e)}async function mh(n,t){const e=K(n),r=t.query;let s=!1;const i=e.queries.get(r);if(i){const o=i.Q_.indexOf(t);o>=0&&(i.Q_.splice(o,1),s=i.Q_.length===0)}if(s)return e.queries.delete(r),e.onUnlisten(r)}function q_(n,t){const e=K(n);let r=!1;for(const s of t){const i=s.query,o=e.queries.get(i);if(o){for(const a of o.Q_)a.W_(s)&&(r=!0);o.q_=s}}r&&ea(e)}function z_(n,t,e){const r=K(n),s=r.queries.get(t);if(s)for(const i of s.Q_)i.onError(e);r.queries.delete(t)}function ea(n){n.K_.forEach(t=>{t.next()})}class gh{constructor(t,e,r){this.query=t,this.G_=e,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new bn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.z_?this.H_(t)&&(this.G_.next(t),e=!0):this.J_(t,this.onlineState)&&(this.Y_(t),e=!0),this.j_=t,e}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let e=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),e=!0),e}J_(t,e){if(!t.fromCache)return!0;const r=e!=="Offline";return(!this.options.Z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const e=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Y_(t){t=bn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
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
 */class ph{constructor(t){this.key=t}}class _h{constructor(t){this.key=t}}class K_{constructor(t,e){this.query=t,this.oa=e,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=H(),this.mutatedKeys=H(),this.ua=Nu(t),this.ca=new En(this.ua)}get la(){return this.oa}ha(t,e){const r=e?e.Pa:new bl,s=e?e.ca:this.ca;let i=e?e.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((u,h)=>{const f=s.get(u),d=qs(this.query,h)?h:null,I=!!f&&this.mutatedKeys.has(f.key),v=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let p=!1;f&&d?f.data.isEqual(d.data)?I!==v&&(r.track({type:3,doc:d}),p=!0):this.Ia(f,d)||(r.track({type:2,doc:d}),p=!0,(l&&this.ua(d,l)>0||c&&this.ua(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),p=!0):f&&!d&&(r.track({type:1,doc:f}),p=!0,(l||c)&&(a=!0)),p&&(d?(o=o.add(d),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,Xi:a,mutatedKeys:i}}Ia(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const i=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const o=t.Pa.k_();o.sort((u,h)=>function(d,I){const v=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return v(d)-v(I)}(u.type,h.type)||this.ua(u.doc,h.doc)),this.Ta(r),s=s!=null&&s;const a=e&&!s?this.Ea():[],l=this.aa.size===0&&this.current&&!s?1:0,c=l!==this._a;return this._a=l,o.length!==0||c?{snapshot:new bn(this.query,t.ca,i,o,t.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new bl,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach(e=>this.oa=this.oa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.oa=this.oa.delete(e)),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=H(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const e=[];return t.forEach(r=>{this.aa.has(r)||e.push(new _h(r))}),this.aa.forEach(r=>{t.has(r)||e.push(new ph(r))}),e}Ra(t){this.oa=t.hs,this.aa=H();const e=this.ha(t.documents);return this.applyChanges(e,!0)}Va(){return bn.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class G_{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class H_{constructor(t){this.key=t,this.ma=!1}}class W_{constructor(t,e,r,s,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Ln(a=>ku(a),js),this.pa=new Map,this.ya=new Set,this.wa=new mt(L.comparator),this.Sa=new Map,this.ba=new Wo,this.Da={},this.Ca=new Map,this.va=Sn.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function Q_(n,t){const e=sy(n);let r,s;const i=e.ga.get(t);if(i)r=i.targetId,e.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await y_(e.localStore,le(t)),a=e.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await $_(e,t,r,a==="current",o.resumeToken),e.isPrimaryClient&&oh(e.remoteStore,o)}return s}async function $_(n,t,e,r,s){n.Ma=(h,f,d)=>async function(v,p,m,g){let P=p.view.ha(m);P.Xi&&(P=await Al(v.localStore,p.query,!1).then(({documents:w})=>p.view.ha(w,P)));const N=g&&g.targetChanges.get(p.targetId),lt=g&&g.targetMismatches.get(p.targetId)!=null,F=p.view.applyChanges(P,v.isPrimaryClient,N,lt);return Dl(v,p.targetId,F.da),F.snapshot}(n,h,f,d);const i=await Al(n.localStore,t,!0),o=new K_(t,i.hs),a=o.ha(i.documents),l=Vr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),c=o.applyChanges(a,n.isPrimaryClient,l);Dl(n,e,c.da);const u=new G_(t,e,o);return n.ga.set(t,u),n.pa.has(e)?n.pa.get(e).push(t):n.pa.set(e,[t]),c.snapshot}async function X_(n,t){const e=K(n),r=e.ga.get(t),s=e.pa.get(r.targetId);if(s.length>1)return e.pa.set(r.targetId,s.filter(i=>!js(i,t))),void e.ga.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await Zi(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),ah(e.remoteStore,r.targetId),to(e,r.targetId)}).catch(br)):(to(e,r.targetId),await Zi(e.localStore,r.targetId,!0))}async function J_(n,t,e){const r=iy(n);try{const s=await function(o,a){const l=K(o),c=Ct.now(),u=a.reduce((d,I)=>d.add(I.key),H());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",d=>{let I=Ce(),v=H();return l.os.getEntries(d,u).next(p=>{I=p,I.forEach((m,g)=>{g.isValidDocument()||(v=v.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(d,I)).next(p=>{h=p;const m=[];for(const g of a){const P=Ip(g,h.get(g.key).overlayedDocument);P!=null&&m.push(new je(g.key,P,Ru(P.value.mapValue),ce.exists(!0)))}return l.mutationQueue.addMutationBatch(d,c,m,a)}).next(p=>{f=p;const m=p.applyToLocalDocumentSet(h,v);return l.documentOverlayCache.saveOverlays(d,p.batchId,m)})}).then(()=>({batchId:f.batchId,changes:Mu(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.Da[o.currentUser.toKey()];c||(c=new mt(rt)),c=c.insert(a,l),o.Da[o.currentUser.toKey()]=c}(r,s.batchId,e),await Nr(r,s.changes),await Qs(r.remoteStore)}catch(s){const i=ta(s,"Failed to persist write");e.reject(i)}}async function yh(n,t){const e=K(n);try{const r=await g_(e.localStore,t);t.targetChanges.forEach((s,i)=>{const o=e.Sa.get(i);o&&(ht(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?ht(o.ma):s.removedDocuments.size>0&&(ht(o.ma),o.ma=!1))}),await Nr(e,r,t)}catch(r){await br(r)}}function Pl(n,t,e){const r=K(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=K(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const f of h.Q_)f.U_(a)&&(c=!0)}),c&&ea(l)}(r.eventManager,t),s.length&&r.fa.u_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Y_(n,t,e){const r=K(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Sa.get(t),i=s&&s.key;if(i){let o=new mt(L.comparator);o=o.insert(i,jt.newNoDocument(i,U.min()));const a=H().add(i),l=new Gs(U.min(),new Map,new mt(rt),o,a);await yh(r,l),r.wa=r.wa.remove(i),r.Sa.delete(t),na(r)}else await Zi(r.localStore,t,!1).then(()=>to(r,t,e)).catch(br)}async function Z_(n,t){const e=K(n),r=t.batch.batchId;try{const s=await m_(e.localStore,t);vh(e,r,null),Eh(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Nr(e,s)}catch(s){await br(s)}}async function ty(n,t,e){const r=K(n);try{const s=await function(o,a){const l=K(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(ht(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,t);vh(r,t,e),Eh(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Nr(r,s)}catch(s){await br(s)}}function Eh(n,t){(n.Ca.get(t)||[]).forEach(e=>{e.resolve()}),n.Ca.delete(t)}function vh(n,t,e){const r=K(n);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),r.Da[r.currentUser.toKey()]=s}}function to(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.pa.get(t))n.ga.delete(r),e&&n.fa.xa(r,e);n.pa.delete(t),n.isPrimaryClient&&n.ba.Vr(t).forEach(r=>{n.ba.containsKey(r)||Th(n,r)})}function Th(n,t){n.ya.delete(t.path.canonicalString());const e=n.wa.get(t);e!==null&&(ah(n.remoteStore,e),n.wa=n.wa.remove(t),n.Sa.delete(e),na(n))}function Dl(n,t,e){for(const r of e)r instanceof ph?(n.ba.addReference(r.key,t),ey(n,r)):r instanceof _h?(A("SyncEngine","Document no longer in limbo: "+r.key),n.ba.removeReference(r.key,t),n.ba.containsKey(r.key)||Th(n,r.key)):x()}function ey(n,t){const e=t.key,r=e.path.canonicalString();n.wa.get(e)||n.ya.has(r)||(A("SyncEngine","New document in limbo: "+e),n.ya.add(r),na(n))}function na(n){for(;n.ya.size>0&&n.wa.size<n.maxConcurrentLimboResolutions;){const t=n.ya.values().next().value;n.ya.delete(t);const e=new L(pt.fromString(t)),r=n.va.next();n.Sa.set(r,new H_(e)),n.wa=n.wa.insert(e,r),oh(n.remoteStore,new Pe(le(Us(e.path)),r,"TargetPurposeLimboResolution",xo._e))}}async function Nr(n,t,e){const r=K(n),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,t,e).then(c=>{if((c||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=$o.Ki(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.fa.u_(s),await async function(l,c){const u=K(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>_.forEach(c,f=>_.forEach(f.qi,d=>u.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>_.forEach(f.Qi,d=>u.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!Pr(h))throw h;A("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const d=u.ns.get(f),I=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(I);u.ns=u.ns.insert(f,v)}}}(r.localStore,i))}async function ny(n,t){const e=K(n);if(!e.currentUser.isEqual(t)){A("SyncEngine","User change. New user:",t.toKey());const r=await nh(e.localStore,t);e.currentUser=t,function(i,o){i.Ca.forEach(a=>{a.forEach(l=>{l.reject(new k(E.CANCELLED,o))})}),i.Ca.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Nr(e,r.us)}}function ry(n,t){const e=K(n),r=e.Sa.get(t);if(r&&r.ma)return H().add(r.key);{let s=H();const i=e.pa.get(t);if(!i)return s;for(const o of i){const a=e.ga.get(o);s=s.unionWith(a.view.la)}return s}}function sy(n){const t=K(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=yh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ry.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Y_.bind(null,t),t.fa.u_=q_.bind(null,t.eventManager),t.fa.xa=z_.bind(null,t.eventManager),t}function iy(n){const t=K(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Z_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ty.bind(null,t),t}class Vl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Hs(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return d_(this.persistence,new h_,t.initialUser,this.serializer)}createPersistence(t){return new l_(Qo.Hr,this.serializer)}createSharedClientState(t){return new v_}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class oy{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ny.bind(null,this.syncEngine),await B_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new j_}()}createDatastore(t){const e=Hs(t.databaseInfo.databaseId),r=function(i){return new A_(i)}(t.databaseInfo);return function(i,o,a,l){return new S_(i,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,i,o,a){return new P_(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>Pl(this.syncEngine,e,0),function(){return Cl.D()?new Cl:new T_}())}createSyncEngine(t,e){return function(s,i,o,a,l,c,u){const h=new W_(s,i,o,a,l,c);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const s=K(r);A("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await kr(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class wh{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):de("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class ay{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Ut.UNAUTHENTICATED,this.clientId=wu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{A("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(A("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new k(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new we;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ta(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function wi(n,t){n.asyncQueue.verifyOperationInProgress(),A("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await nh(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function kl(n,t){n.asyncQueue.verifyOperationInProgress();const e=await cy(n);A("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Sl(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Sl(t.remoteStore,s)),n._onlineComponents=t}function ly(n){return n.name==="FirebaseError"?n.code===E.FAILED_PRECONDITION||n.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function cy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){A("FirestoreClient","Using user provided OfflineComponentProvider");try{await wi(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!ly(e))throw e;wn("Error using user provided cache. Falling back to memory cache: "+e),await wi(n,new Vl)}}else A("FirestoreClient","Using default OfflineComponentProvider"),await wi(n,new Vl);return n._offlineComponents}async function Ih(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(A("FirestoreClient","Using user provided OnlineComponentProvider"),await kl(n,n._uninitializedComponentsProvider._online)):(A("FirestoreClient","Using default OnlineComponentProvider"),await kl(n,new oy))),n._onlineComponents}function uy(n){return Ih(n).then(t=>t.syncEngine)}async function eo(n){const t=await Ih(n),e=t.eventManager;return e.onListen=Q_.bind(null,t.syncEngine),e.onUnlisten=X_.bind(null,t.syncEngine),e}function hy(n,t,e={}){const r=new we;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new wh({next:f=>{o.enqueueAndForget(()=>mh(i,h));const d=f.docs.has(a);!d&&f.fromCache?c.reject(new k(E.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&f.fromCache&&l&&l.source==="server"?c.reject(new k(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new gh(Us(a.path),u,{includeMetadataChanges:!0,Z_:!0});return dh(i,h)}(await eo(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function Ah(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Nl=new Map;/**
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
 */function fy(n,t,e){if(!e)throw new k(E.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function dy(n,t,e,r){if(t===!0&&r===!0)throw new k(E.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ol(n){if(!L.isDocumentKey(n))throw new k(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ra(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":x()}function he(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new k(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ra(n);throw new k(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class Ml{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new k(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new k(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}dy("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ah((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new k(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new k(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new k(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class sa{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ml({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new k(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new k(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ml(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Dg;switch(r.type){case"firstParty":return new Og(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new k(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Nl.get(e);r&&(A("ComponentProvider","Removing Datastore"),Nl.delete(e),r.terminate())}(this),Promise.resolve()}}function my(n,t,e,r={}){var s;const i=(n=he(n,sa))._getSettings(),o=`${t}:${e}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ut.MOCK_USER;else{a=cd(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new k(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ut(c)}n._authCredentials=new Vg(new Tu(a,l))}}/**
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
 */class $s{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new $s(this.firestore,t,this._query)}}class Qt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Er(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Qt(this.firestore,t,this._key)}}class Er extends $s{constructor(t,e,r){super(t,e,Us(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Qt(this.firestore,null,new L(t))}withConverter(t){return new Er(this.firestore,t,this._path)}}function gy(n,t,...e){if(n=Me(n),arguments.length===1&&(t=wu.newId()),fy("doc","path",t),n instanceof sa){const r=pt.fromString(t,...e);return Ol(r),new Qt(n,null,new L(r))}{if(!(n instanceof Qt||n instanceof Er))throw new k(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pt.fromString(t,...e));return Ol(r),new Qt(n.firestore,n instanceof Er?n.converter:null,new L(r))}}/**
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
 */class py{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new sh(this,"async_queue_retry"),this._u=()=>{const e=Ti();e&&A("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};const t=Ti();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const e=Ti();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const e=new we;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!Pr(t))throw t;A("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const e=this.Xa.then(()=>(this.iu=!0,t().catch(r=>{this.ru=r,this.iu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw de("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.iu=!1,r))));return this.Xa=e,e}enqueueAfterDelay(t,e,r){this.au(),this.ou.indexOf(t)>-1&&(e=0);const s=Zo.createAndSchedule(this,t,e,r,i=>this.lu(i));return this.nu.push(s),s}au(){this.ru&&x()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const e of this.nu)if(e.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.nu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const e=this.nu.indexOf(t);this.nu.splice(e,1)}}function Ll(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Pn extends sa{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new py}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Rh(this),this._firestoreClient.terminate()}}function _y(n,t){const e=typeof n=="object"?n:mm(),r=typeof n=="string"?n:t||"(default)",s=um(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ad("firestore");i&&my(s,...i)}return s}function ia(n){return n._firestoreClient||Rh(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Rh(n){var t,e,r;const s=n._freezeSettings(),i=function(a,l,c,u){return new Qg(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Ah(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new ay(n._authCredentials,n._appCheckCredentials,n._queue,i),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Dn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Dn(Kt.fromBase64String(t))}catch(e){throw new k(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Dn(Kt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Xs{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Mt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Js{constructor(t){this._methodName=t}}/**
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
 */class oa{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return rt(this._lat,t._lat)||rt(this._long,t._long)}}/**
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
 */const yy=/^__.*__$/;class Ey{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new je(t,this.data,this.fieldMask,e,this.fieldTransforms):new Dr(t,this.data,e,this.fieldTransforms)}}class Ch{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new je(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Sh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class Ys{constructor(t,e,r,s,i,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Eu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(t){return new Ys(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Au({path:r,Vu:!1});return s.mu(t),s}fu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Au({path:r,Vu:!1});return s.Eu(),s}gu(t){return this.Au({path:void 0,Vu:!0})}pu(t){return Es(t,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Eu(){if(this.path)for(let t=0;t<this.path.length;t++)this.mu(this.path.get(t))}mu(t){if(t.length===0)throw this.pu("Document fields must not be empty");if(Sh(this.du)&&yy.test(t))throw this.pu('Document fields cannot begin and end with "__"')}}class vy{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Hs(t)}Su(t,e,r,s=!1){return new Ys({du:t,methodName:e,wu:r,path:Mt.emptyPath(),Vu:!1,yu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bh(n){const t=n._freezeSettings(),e=Hs(n._databaseId);return new vy(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Ty(n,t,e,r,s,i={}){const o=n.Su(i.merge||i.mergeFields?2:0,t,e,s);la("Data must be an object, but it was:",o,r);const a=Ph(r,o);let l,c;if(i.merge)l=new Xt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=no(t,h,e);if(!o.contains(f))throw new k(E.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Vh(u,f)||u.push(f)}l=new Xt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new Ey(new Wt(a),l,c)}class Zs extends Js{_toFieldTransform(t){if(t.du!==2)throw t.du===1?t.pu(`${this._methodName}() can only appear at the top level of your update data`):t.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Zs}}function wy(n,t,e){return new Ys({du:3,wu:t.settings.wu,methodName:n._methodName,Vu:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class aa extends Js{constructor(t,e){super(t),this.bu=e}_toFieldTransform(t){const e=wy(this,t,!0),r=this.bu.map(i=>Or(i,e)),s=new Cn(r);return new Ep(t.path,s)}isEqual(t){return t instanceof aa&&rs(this.bu,t.bu)}}function Iy(n,t,e,r){const s=n.Su(1,t,e);la("Data must be an object, but it was:",s,r);const i=[],o=Wt.empty();sn(r,(l,c)=>{const u=ca(t,l,e);c=Me(c);const h=s.fu(u);if(c instanceof Zs)i.push(u);else{const f=Or(c,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new Xt(i);return new Ch(o,a,s.fieldTransforms)}function Ay(n,t,e,r,s,i){const o=n.Su(1,t,e),a=[no(t,r,e)],l=[s];if(i.length%2!=0)throw new k(E.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(no(t,i[f])),l.push(i[f+1]);const c=[],u=Wt.empty();for(let f=a.length-1;f>=0;--f)if(!Vh(c,a[f])){const d=a[f];let I=l[f];I=Me(I);const v=o.fu(d);if(I instanceof Zs)c.push(d);else{const p=Or(I,v);p!=null&&(c.push(d),u.set(d,p))}}const h=new Xt(c);return new Ch(u,h,o.fieldTransforms)}function Or(n,t){if(Dh(n=Me(n)))return la("Unsupported field value:",t,n),Ph(n,t);if(n instanceof Js)return function(r,s){if(!Sh(s.du))throw s.pu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.pu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Vu&&t.du!==4)throw t.pu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Or(a,s.gu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,t)}return function(r,s){if((r=Me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pp(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ct.fromDate(r);return{timestampValue:_s(s.serializer,i)}}if(r instanceof Ct){const i=new Ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_s(s.serializer,i)}}if(r instanceof oa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Dn)return{bytesValue:$u(s.serializer,r._byteString)};if(r instanceof Qt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ho(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.pu(`Unsupported field value: ${ra(r)}`)}(n,t)}function Ph(n,t){const e={};return Iu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):sn(n,(r,s)=>{const i=Or(s,t.Ru(r));i!=null&&(e[r]=i)}),{mapValue:{fields:e}}}function Dh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ct||n instanceof oa||n instanceof Dn||n instanceof Qt||n instanceof Js)}function la(n,t,e){if(!Dh(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=ra(e);throw r==="an object"?t.pu(n+" a custom object"):t.pu(n+" "+r)}}function no(n,t,e){if((t=Me(t))instanceof Xs)return t._internalPath;if(typeof t=="string")return ca(n,t);throw Es("Field path arguments must be of type string or ",n,!1,void 0,e)}const Ry=new RegExp("[~\\*/\\[\\]]");function ca(n,t,e){if(t.search(Ry)>=0)throw Es(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Xs(...t.split("."))._internalPath}catch{throw Es(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Es(n,t,e,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new k(E.INVALID_ARGUMENT,a+n+l)}function Vh(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class kh{constructor(t,e,r,s,i){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Cy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Nh("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Cy extends kh{data(){return super.data()}}function Nh(n,t){return typeof t=="string"?ca(n,t):t instanceof Xs?t._internalPath:t._delegate._internalPath}/**
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
 */function Sy(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new k(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class by{convertValue(t,e="none"){switch(nn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return It(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(en(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw x()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return sn(t,(s,i)=>{r[s]=this.convertValue(i,e)}),r}convertGeoPoint(t){return new oa(It(t.latitude),It(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Uo(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(gr(t));default:return null}}convertTimestamp(t){const e=Fe(t);return new Ct(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=pt.fromString(t);ht(eh(r));const s=new pr(r.get(1),r.get(3)),i=new L(r.popFirst(5));return s.isEqual(e)||de(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
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
 */function Py(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
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
 */class Qn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Oh extends kh{constructor(t,e,r,s,i,o){super(t,e,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Jr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Nh("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Jr extends Oh{data(t={}){return super.data(t)}}class Dy{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Qn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Jr(this._firestore,this._userDataWriter,r.key,r,new Qn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Jr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Qn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Jr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Qn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:Vy(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Vy(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x()}}/**
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
 */function ky(n){n=he(n,Qt);const t=he(n.firestore,Pn);return hy(ia(t),n._key).then(e=>Fh(t,n,e))}class Mh extends by{constructor(t){super(),this.firestore=t}convertBytes(t){return new Dn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Qt(this.firestore,null,e)}}function Fl(n,t,e){n=he(n,Qt);const r=he(n.firestore,Pn),s=Py(n.converter,t,e);return Lh(r,[Ty(bh(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,ce.none())])}function Ny(n,t,e,...r){n=he(n,Qt);const s=he(n.firestore,Pn),i=bh(s);let o;return o=typeof(t=Me(t))=="string"||t instanceof Xs?Ay(i,"updateDoc",n._key,t,e,r):Iy(i,"updateDoc",n._key,t),Lh(s,[o.toMutation(n._key,ce.exists(!0))])}function Oy(n,...t){var e,r,s;n=Me(n);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Ll(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Ll(t[o])){const h=t[o];t[o]=(e=h.next)===null||e===void 0?void 0:e.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(n instanceof Qt)c=he(n.firestore,Pn),u=Us(n._key.path),l={next:h=>{t[o]&&t[o](Fh(c,n,h))},error:t[o+1],complete:t[o+2]};else{const h=he(n,$s);c=he(h.firestore,Pn),u=h._query;const f=new Mh(c);l={next:d=>{t[o]&&t[o](new Dy(c,f,h,d))},error:t[o+1],complete:t[o+2]},Sy(n._query)}return function(f,d,I,v){const p=new wh(v),m=new gh(d,p,I);return f.asyncQueue.enqueueAndForget(async()=>dh(await eo(f),m)),()=>{p.La(),f.asyncQueue.enqueueAndForget(async()=>mh(await eo(f),m))}}(ia(c),u,a,l)}function Lh(n,t){return function(r,s){const i=new we;return r.asyncQueue.enqueueAndForget(async()=>J_(await uy(r),s,i)),i.promise}(ia(n),t)}function Fh(n,t,e){const r=e.docs.get(t._key),s=new Mh(n);return new Oh(n,s,t._key,r,new Qn(e.hasPendingWrites,e.fromCache),t.converter)}function My(...n){return new aa("arrayUnion",n)}(function(t,e=!0){(function(s){Mn=s})(dm),is(new sr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Pn(new kg(r.getProvider("auth-internal")),new Lg(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new k(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pr(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:e},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),pn(rl,"4.4.2",t),pn(rl,"4.4.2","esm2017")})();var Ly="firebase",Fy="10.8.0";/**
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
 */pn(Ly,Fy,"app");let Ii=null,Ai=null;const xy=()=>(Ii||(Ii=gc({apiKey:"AIzaSyAEkDsTVEbr-spwGn7NP4WVMGjjFvc_Vnk",authDomain:"parrotbeak-2b0ae.firebaseapp.com",projectId:"parrotbeak-2b0ae",storageBucket:"parrotbeak-2b0ae.appspot.com",messagingSenderId:"696191016129",appId:"1:696191016129:web:9086db78bbf9d939e58840"})),Ii),By=()=>(Ai||(Ai=_y(xy())),Ai),xl=n=>{const t=Object.create(null);for(let e=0;e<n.fields.length;e++)t[n.fields[e]]=n[n.fields[e]];return t};class Uy{constructor(t,e,r){this.id=t,this.collection=e,this.fields=r,this.ignoreAuth=!1}get ref(){return this._ref||(this._ref=gy(By(),this.collection,this.id)),this._ref}fetch(){return ky(this.ref)}create(){return Fl(this.ref,xl(this))}async save(t=!1,e=Rt){try{const r=await this.fetch().catch(Rt);if(!t&&r&&r.exists())throw this.id+" already exists in "+this.collection+" ...";return e&&e(r),await Fl(this.ref,xl(this)),!0}catch(r){return oc(r),!1}}update(t){return Ny(this.ref,t)}subscribeToData(t){return Oy(this.ref,t)}}const Bl=n=>n===Gt.OFFER?"offerIceCandidates":"answerIceCandidates",jy=n=>{const t=(n.getMonth()+1)*31,e=n.getDate();return(t+e).toString().padStart(3,"0")+Jf(3)};class Ul extends Uy{constructor(t,e,r,s=vn){const i=new Date;super(t||jy(i),"/quinque-rooms",["created","size","offerIceCandidates","answerIceCandidates","turns","answerPubKey","iv"]),t||(this.created=i,this.size=co.includes(s)?s:vn,this.offerIceCandidates=[],this.answerIceCandidates=[],this.turns=ec(this.size*this.size),this.answerPubKey=e,this.iv=r)}saveOffer(t){this.offer=t,this.update({offer:t})}saveAnswer(t){this.answer=t,this.update({answer:t})}addIceCandidate(t,e){const r=Bl(t);this.update({[r]:My(e)})}clearIceCandidates(t){const e=Bl(t);this.update({[e]:[]})}}const xh=()=>!!(navigator!=null&&navigator.clipboard),qy=n=>xh()?(navigator.clipboard.writeText(n),!0):!1,zy={iceServers:[{urls:"stun:stun.services.mozilla.com"},{urls:"stun:stun.l.google.com:19302"}]};class Ky{constructor(){this.onicecandidate=null,this.onstatechange=null,this.onmessage=null,this.dataChannel=null,this.remoteDescriptionApplied=new Promise(t=>{this.applyRemoteDescription=t})}init(){const t=this;this.connection=new RTCPeerConnection(zy),this.connection.onicecandidate=e=>{t.onicecandidate&&t.onicecandidate(e)},this.connection.onconnectionstatechange=e=>{t.onstatechange&&t.onstatechange(e)},this.connection.ondatachannel=e=>{const{channel:r}=e;r&&(r.onopen=()=>{},r.onclose=()=>{},r.onmessage=s=>{this.onmessage&&this.onmessage(s)},this.dataChannel=r)}}close(){var t;(t=this.connection)==null||t.close()}createDatachannel(t="default"){var e;this.dataChannel=((e=this.connection)==null?void 0:e.createDataChannel(t))||null,this.dataChannel&&(this.dataChannel.onopen=()=>{},this.dataChannel.onclose=()=>{},this.dataChannel.onmessage=r=>{this.onmessage&&this.onmessage(r)})}localDescription(){var t,e;return((e=(t=this.connection)==null?void 0:t.localDescription)==null?void 0:e.sdp)||""}createOffer(){var t;return(t=this.connection)==null?void 0:t.createOffer()}createAnswer(){var t;return(t=this.connection)==null?void 0:t.createAnswer()}async setRemoteDescription(t){var e;await((e=this.connection)==null?void 0:e.setRemoteDescription(t)),this.applyRemoteDescription()}setLocalDescription(t){var e;return(e=this.connection)==null?void 0:e.setLocalDescription(t)}addIceCandidate(t){var e;return(e=this.connection)==null?void 0:e.addIceCandidate(t)}sendChannelMessage(t){var e;if(!this.dataChannel||this.dataChannel.readyState!=="open"){(e=this.connection)==null||e.close();return}this.dataChannel.send(t)}}const ut=new Ky,Bh={name:"ECDH",namedCurve:"P-384"},Ri="AES-GCM",jl=n=>btoa(String.fromCharCode.apply(null,new Uint8Array(n))),ql=n=>{const t=atob(n),e=new Uint8Array(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e.buffer},Gy=n=>{const t=JSON.parse(n);return crypto.subtle.importKey("jwk",t,Bh,!0,[])};class Hy{constructor(){this.pubKey=null,this.prKey=null,this.iv=crypto.getRandomValues(new Uint8Array(12)),this.waitingForSharedSecret=new Promise(t=>{this.resolveShareSecret=t})}init(){return new Promise(t=>{crypto.subtle.generateKey(Bh,!0,["deriveKey"]).then(async e=>{this.pubKey=e.publicKey,this.prKey=e.privateKey,t()})})}async deriveSharedKey(t){return this.prKey?crypto.subtle.deriveKey({name:"ECDH",public:t},this.prKey,{name:Ri,length:256},!0,["encrypt","decrypt"]):null}async exportPublicKeyToJwk(){return this.pubKey?JSON.stringify(await crypto.subtle.exportKey("jwk",this.pubKey)):""}async setSharedKeyFromJwkString(t){this.shared={key:await this.deriveSharedKey(await Gy(t))},this.resolveShareSecret()}setIvFromRemote(t){this.iv=new Uint8Array(ql(t))}async ecnrypt(t,e,r){var s;if(e||(e=((s=this.shared)==null?void 0:s.key)||void 0),!e)throw"The key is not generated...";return jl(await crypto.subtle.encrypt({name:Ri,iv:r||this.iv},e,new TextEncoder().encode(t)))}async decrypt(t,e,r){var s;if(e||(e=((s=this.shared)==null?void 0:s.key)||void 0),!e)throw"Key is not provided...";return new TextDecoder().decode(await crypto.subtle.decrypt({name:Ri,iv:r||this.iv},e,ql(t)))}ivString(){return jl(this.iv)}}const kt=new Hy;function Wy(n){let t,e;return t=new Yl({}),{c(){Z(t.$$.fragment)},l(r){tt(t.$$.fragment,r)},m(r,s){et(t,r,s),e=!0},p:Rt,i(r){e||(b(t.$$.fragment,r),e=!0)},o(r){V(t.$$.fragment,r),e=!1},d(r){nt(t,r)}}}function Qy(n){let t,e,r,s,i=n[4]&&Yy(n);return{c(){t=q("input"),e=it(),i&&i.c(),r=fe(),this.h()},l(o){t=z(o,"INPUT",{class:!0}),e=ot(o),i&&i.l(o),r=fe(),this.h()},h(){t.value=n[1],D(t,"class",tE),t.readOnly=!0},m(o,a){$(o,t,a),$(o,e,a),i&&i.m(o,a),$(o,r,a),s=!0},p(o,a){(!s||a&2&&t.value!==o[1])&&(t.value=o[1]),o[4]&&i.p(o,a)},i(o){s||(b(i),s=!0)},o(o){V(i),s=!1},d(o){o&&(S(t),S(e),S(r)),i&&i.d(o)}}}function $y(n){let t,e;return{c(){t=q("p"),e=Ie(n[3]),this.h()},l(r){t=z(r,"P",{class:!0});var s=Q(t);e=Ae(s,n[3]),s.forEach(S),this.h()},h(){D(t,"class","text-faded")},m(r,s){$(r,t,s),M(t,e)},p(r,s){s&8&&Ts(e,r[3])},i:Rt,o:Rt,d(r){r&&S(t)}}}function Xy(n){let t,e="Your browser does not support webRTC peer-to-peer connections.. If you see this message, please try to change to a browser which supports webRTC (hint: most of modern web browsers do).";return{c(){t=q("p"),t.textContent=e,this.h()},l(r){t=z(r,"P",{class:!0,"data-svelte-h":!0}),Vn(t)!=="svelte-touu31"&&(t.textContent=e),this.h()},h(){D(t,"class","text-faded")},m(r,s){$(r,t,s)},p:Rt,i:Rt,o:Rt,d(r){r&&S(t)}}}function Jy(n){let t,e;return t=new Yl({}),{c(){Z(t.$$.fragment)},l(r){tt(t.$$.fragment,r)},m(r,s){et(t,r,s),e=!0},p:Rt,i(r){e||(b(t.$$.fragment,r),e=!0)},o(r){V(t.$$.fragment,r),e=!1},d(r){nt(t,r)}}}function Yy(n){let t,e,r,s;e=new Oe({props:{label:"Copy link",icon:pf,class:"bg-primary text-white px-4"}}),e.$on("click",n[5]);let i=n[2]&&zl(n);return{c(){t=q("div"),Z(e.$$.fragment),r=it(),i&&i.c(),this.h()},l(o){t=z(o,"DIV",{class:!0});var a=Q(t);tt(e.$$.fragment,a),r=ot(a),i&&i.l(a),a.forEach(S),this.h()},h(){D(t,"class","flex flex-row items-center gap-4 pt-6")},m(o,a){$(o,t,a),et(e,t,null),M(t,r),i&&i.m(t,null),s=!0},p(o,a){o[2]?i?i.p(o,a):(i=zl(o),i.c(),i.m(t,null)):i&&(i.d(1),i=null)},i(o){s||(b(e.$$.fragment,o),s=!0)},o(o){V(e.$$.fragment,o),s=!1},d(o){o&&S(t),nt(e),i&&i.d()}}}function zl(n){let t,e=n[2].label+"",r,s;return{c(){t=q("p"),r=Ie(e),this.h()},l(i){t=z(i,"P",{class:!0});var o=Q(t);r=Ae(o,e),o.forEach(S),this.h()},h(){D(t,"class",s=n[2].class)},m(i,o){$(i,t,o),M(t,r)},p(i,o){o&4&&e!==(e=i[2].label+"")&&Ts(r,e),o&4&&s!==(s=i[2].class)&&D(t,"class",s)},d(i){i&&S(t)}}}function Zy(n){let t,e,r,s;const i=[Jy,Xy,$y,Qy,Wy],o=[];function a(l,c){return l[0]===null?0:l[0]?l[3]?2:l[1]?3:4:1}return t=a(n),e=o[t]=i[t](n),{c(){e.c(),r=fe()},l(l){e.l(l),r=fe()},m(l,c){o[t].m(l,c),$(l,r,c),s=!0},p(l,[c]){let u=t;t=a(l),t===u?o[t].p(l,c):(te(),V(o[u],1,1,()=>{o[u]=null}),ee(),e=o[t],e?e.p(l,c):(e=o[t]=i[t](l),e.c()),b(e,1),e.m(r.parentNode,r))},i(l){s||(b(e),s=!0)},o(l){V(e),s=!1},d(l){l&&S(r),o[t].d(l)}}}const tE="p-2 border border-gray-700 rounded-md w-full bg-gray-800";function eE(n,t,e){let r;ve(n,tc,F=>e(11,r=F));const s=xh(),i=vs(),o={};let a=null,l="",c=null,u="",h=null,f=null;const d={},I=F=>{const w=F.target;w||e(3,u="Could not create a gaming session..."),w.connectionState==="connected"?i("connected",{size:d.size,status:d.type===Gt.OFFER?ne.CONNECTED_AS_PLAYER1:ne.CONNECTED_AS_PLAYER2,turns:d.turns}):w.connectionState==="failed"&&e(3,u="Negotiation failed. Check your network or disable VPN if you use one...")},v=async(F,w)=>{if(!w)return;await kt.waitingForSharedSecret;const gt={type:"candidate",sdpMid:w.sdpMid,sdpMLineIndex:w.sdpMLineIndex,candidate:w.candidate},dt=await kt.ecnrypt(JSON.stringify(gt));o[dt]||(h==null||h.addIceCandidate(F,dt),o[dt]=!0)},p=async()=>{if(!h)return;ut.init(),ut.onicecandidate=({candidate:gt})=>{v(Gt.ANSWER,gt)},ut.onstatechange=I,await kt.setSharedKeyFromJwkString(d.offerPubKey);const F=new RTCSessionDescription({type:Gt.OFFER,sdp:await kt.decrypt(d.offer)});await ut.setRemoteDescription(F);const w=await ut.createAnswer();if(!w||!w.sdp){e(3,u="Could not verify the peer connection...");return}await ut.setLocalDescription(new RTCSessionDescription(w)),d.answer=w.sdp,h.saveAnswer(await kt.ecnrypt(w.sdp)),h.saveOffer("-")},m=async()=>{if(!h)return;const F=new RTCSessionDescription({type:Gt.ANSWER,sdp:await kt.decrypt(d.answer)});await ut.setRemoteDescription(F),h.saveAnswer("-")},g=async F=>{const w=F.data()||{};if(!Object.keys(w).length)return;const gt=["size","turns","offerPubKey","iv"];for(let yt=0;yt<gt.length;yt++){const ct=gt[yt];!d[ct]&&w[ct]&&(d[ct]=w[ct])}!d.answerPubKey&&w.answerPubKey&&(d.answerPubKey=w.answerPubKey,d.type===Gt.OFFER&&(kt.setIvFromRemote(w.iv),await kt.setSharedKeyFromJwkString(w.answerPubKey),d.type===Gt.OFFER&&(h==null||h.saveOffer(await kt.ecnrypt(ut.localDescription()))))),!d.offer&&w.offer&&(d.offer=w.offer,d.type===Gt.ANSWER&&p()),!d.answer&&w.answer&&(d.answer=w.answer,m());const dt=async yt=>{await ut.remoteDescriptionApplied;for(let ct=0;ct<yt.length;ct++){let St=null;try{St=JSON.parse(await kt.decrypt(yt[ct]))}catch(xt){oc(xt)}St&&(o[yt[ct]]||(await ut.addIceCandidate(St.candidate?St:null),o[yt[ct]]=!0))}};d.type===Gt.OFFER&&w.answerIceCandidates.length?(await kt.waitingForSharedSecret,await dt(w.answerIceCandidates),h==null||h.clearIceCandidates(Gt.ANSWER)):d.type===Gt.ANSWER&&w.offerIceCandidates.length&&(await kt.waitingForSharedSecret,await dt(w.offerIceCandidates),h==null||h.clearIceCandidates(Gt.OFFER))},P=async F=>{await kt.init(),h=new Ul(F),f=h.subscribeToData(g),ut.init(),ut.onicecandidate=({candidate:gt})=>{v(Gt.OFFER,gt)},ut.onstatechange=I,ut.createDatachannel();const w=await ut.createOffer();if(!w||!w.sdp){e(3,u="Could not set up a stable connection...");return}d.type=Gt.OFFER,h.update({offerPubKey:await kt.exportPublicKeyToJwk()}),ut.setLocalDescription(w)},N=async()=>{await kt.init();let F=parseInt(r.url.searchParams.get("s")||String(vn));co.includes(F)||(F=vn),h=new Ul("",await kt.exportPublicKeyToJwk(),kt.ivString(),F),await!h.save()&&confirm("This room ID is already taken. Refresh the page to get a new one.")&&window.location.reload(),e(1,l=r.url.protocol+"//"+r.url.host+r.url.pathname+"?room="+h.id),h.subscribeToData(g),d.type=Gt.ANSWER},lt=()=>{e(2,c=qy(l)?{class:"text-green-500",label:"Values copied!"}:{class:"text-red-500",label:"Could not copy..."})};return Jl(()=>{if(e(0,a=!!window.RTCPeerConnection),!a)return;const F=r.url.searchParams.get("room");F?P(F):N()}),ef(()=>{f&&f()}),[a,l,c,u,s,lt]}class nE extends _e{constructor(t){super(),ye(this,t,eE,Zy,pe,{})}}function Kl(n,t,e){const r=n.slice();return r[60]=t[e],r[62]=e,r}function Gl(n,t,e){const r=n.slice();return r[60]=t[e],r[64]=e,r}function Hl(n){let t,e;return t=new Af({props:{rowIndex:n[62],colIndex:n[64],selected:n[0][n[62]][n[64]],selectCandidate:n[3][n[62]][n[64]],hoverColor:n[15],disabled:n[1],hoverCoords:n[6]}}),t.$on("click",n[17]),t.$on("enter",n[20]),t.$on("leave",n[18]),{c(){Z(t.$$.fragment)},l(r){tt(t.$$.fragment,r)},m(r,s){et(t,r,s),e=!0},p(r,s){const i={};s[0]&1&&(i.selected=r[0][r[62]][r[64]]),s[0]&8&&(i.selectCandidate=r[3][r[62]][r[64]]),s[0]&32768&&(i.hoverColor=r[15]),s[0]&2&&(i.disabled=r[1]),s[0]&64&&(i.hoverCoords=r[6]),t.$set(i)},i(r){e||(b(t.$$.fragment,r),e=!0)},o(r){V(t.$$.fragment,r),e=!1},d(r){nt(t,r)}}}function Wl(n){let t,e,r,s=be({length:n[7]}),i=[];for(let a=0;a<s.length;a+=1)i[a]=Hl(Gl(n,s,a));const o=a=>V(i[a],1,1,()=>{i[a]=null});return{c(){t=q("div");for(let a=0;a<i.length;a+=1)i[a].c();e=it(),this.h()},l(a){t=z(a,"DIV",{class:!0});var l=Q(t);for(let c=0;c<i.length;c+=1)i[c].l(l);e=ot(l),l.forEach(S),this.h()},h(){D(t,"class","flex flex-row gap-1")},m(a,l){$(a,t,l);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(t,null);M(t,e),r=!0},p(a,l){if(l[0]&1474763){s=be({length:a[7]});let c;for(c=0;c<s.length;c+=1){const u=Gl(a,s,c);i[c]?(i[c].p(u,l),b(i[c],1)):(i[c]=Hl(u),i[c].c(),b(i[c],1),i[c].m(t,e))}for(te(),c=s.length;c<i.length;c+=1)o(c);ee()}},i(a){if(!r){for(let l=0;l<s.length;l+=1)b(i[l]);r=!0}},o(a){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)V(i[l]);r=!1},d(a){a&&S(t),Yr(i,a)}}}function rE(n){let t,e="This will reset the current board and it's progress. Continue?";return{c(){t=q("p"),t.textContent=e},l(r){t=z(r,"P",{"data-svelte-h":!0}),Vn(t)!=="svelte-1jpj5pu"&&(t.textContent=e)},m(r,s){$(r,t,s)},p:Rt,d(r){r&&S(t)}}}function sE(n){let t,e="A tie!";return{c(){t=q("p"),t.textContent=e,this.h()},l(r){t=z(r,"P",{class:!0,"data-svelte-h":!0}),Vn(t)!=="svelte-16n1wz6"&&(t.textContent=e),this.h()},h(){D(t,"class","text-white")},m(r,s){$(r,t,s)},p:Rt,d(r){r&&S(t)}}}function iE(n){let t,e;return{c(){t=q("p"),e=Ie("Player 2 won!"),this.h()},l(r){t=z(r,"P",{class:!0});var s=Q(t);e=Ae(s,"Player 2 won!"),s.forEach(S),this.h()},h(){D(t,"class",ei)},m(r,s){$(r,t,s),M(t,e)},p:Rt,d(r){r&&S(t)}}}function oE(n){let t,e;return{c(){t=q("p"),e=Ie("Player 1 won!"),this.h()},l(r){t=z(r,"P",{class:!0});var s=Q(t);e=Ae(s,"Player 1 won!"),s.forEach(S),this.h()},h(){D(t,"class",ti)},m(r,s){$(r,t,s),M(t,e)},p:Rt,d(r){r&&S(t)}}}function aE(n){let t,e="NICE!",r,s,i,o,a,l,c,u,h,f,d;function I(m,g){return m[14][0]>m[14][1]?oE:m[14][0]<m[14][1]?iE:sE}let v=I(n),p=v(n);return l=new rc({props:{score1:n[14][0],score2:n[14][1],score1Class:"font-bold "+ti,score2Class:"font-bold "+ei}}),u=new Oe({props:{label:"Play again",icon:Zl,class:"border border-indigo-300 text-indigo-300 mx-auto mt-10 px-6"}}),u.$on("click",n[22]),f=new Oe({props:{label:"Back",class:"text-faded mx-auto mt-4 px-6"}}),f.$on("click",n[24]),{c(){t=q("p"),t.textContent=e,r=it(),s=q("div"),i=q("div"),o=q("div"),p.c(),a=it(),Z(l.$$.fragment),c=it(),Z(u.$$.fragment),h=it(),Z(f.$$.fragment),this.h()},l(m){t=z(m,"P",{"data-svelte-h":!0}),Vn(t)!=="svelte-p3lnqo"&&(t.textContent=e),r=ot(m),s=z(m,"DIV",{class:!0});var g=Q(s);i=z(g,"DIV",{});var P=Q(i);o=z(P,"DIV",{class:!0});var N=Q(o);p.l(N),a=ot(N),tt(l.$$.fragment,N),N.forEach(S),c=ot(P),tt(u.$$.fragment,P),h=ot(P),tt(f.$$.fragment,P),P.forEach(S),g.forEach(S),this.h()},h(){D(o,"class","text-4xl text-center"),D(s,"class","h-96 max-w-full max-h-full flex flex-col justify-center items-center")},m(m,g){$(m,t,g),$(m,r,g),$(m,s,g),M(s,i),M(i,o),p.m(o,null),M(o,a),et(l,o,null),M(i,c),et(u,i,null),M(i,h),et(f,i,null),d=!0},p(m,g){v===(v=I(m))&&p?p.p(m,g):(p.d(1),p=v(m),p&&(p.c(),p.m(o,a)));const P={};g[0]&16384&&(P.score1=m[14][0]),g[0]&16384&&(P.score2=m[14][1]),l.$set(P)},i(m){d||(b(l.$$.fragment,m),b(u.$$.fragment,m),b(f.$$.fragment,m),d=!0)},o(m){V(l.$$.fragment,m),V(u.$$.fragment,m),V(f.$$.fragment,m),d=!1},d(m){m&&(S(t),S(r),S(s)),p.d(),nt(l),nt(u),nt(f)}}}function lE(n){let t,e;return t=new nE({}),t.$on("connected",n[25]),{c(){Z(t.$$.fragment)},l(r){tt(t.$$.fragment,r)},m(r,s){et(t,r,s),e=!0},p:Rt,i(r){e||(b(t.$$.fragment,r),e=!0)},o(r){V(t.$$.fragment,r),e=!1},d(r){nt(t,r)}}}function cE(n){let t,e="Player is disconnected... Please start another session.";return{c(){t=q("p"),t.textContent=e},l(r){t=z(r,"P",{"data-svelte-h":!0}),Vn(t)!=="svelte-16jcgil"&&(t.textContent=e)},m(r,s){$(r,t,s)},p:Rt,i:Rt,o:Rt,d(r){r&&S(t)}}}function uE(n){let t,e,r,s;const i=[cE,lE],o=[];function a(l,c){return l[8]?0:1}return t=a(n),e=o[t]=i[t](n),{c(){e.c(),r=fe()},l(l){e.l(l),r=fe()},m(l,c){o[t].m(l,c),$(l,r,c),s=!0},p(l,c){let u=t;t=a(l),t===u?o[t].p(l,c):(te(),V(o[u],1,1,()=>{o[u]=null}),ee(),e=o[t],e?e.p(l,c):(e=o[t]=i[t](l),e.c()),b(e,1),e.m(r.parentNode,r))},i(l){s||(b(e),s=!0)},o(l){V(e),s=!1},d(l){l&&S(r),o[t].d(l)}}}function hE(n){let t,e,r,s,i,o,a,l,c,u,h,f,d,I,v,p,m,g,P,N,lt,F,w,gt,dt,yt,ct,St;s=new Oe({props:{icon:_f,class:"text-purple-400"}}),s.$on("click",n[21]),l=new Wf({props:{class:n[13],color:n[2]}}),u=new rc({props:{score1:n[14][0],score2:n[14][1],score1Class:"font-bold "+ti,score2Class:"font-bold "+ei}}),v=new Oe({props:{class:"text-purple-400",icon:Zl}}),v.$on("click",n[22]);let xt=be({length:n[7]}),X=[];for(let C=0;C<xt.length;C+=1)X[C]=Wl(Kl(n,xt,C));const xn=C=>V(X[C],1,1,()=>{X[C]=null});return w=new oi({props:{showing:n[4],title:"Reset the game?",okLabel:"Reset",$$slots:{default:[rE]},$$scope:{ctx:n}}}),w.$on("ok",n[33]),w.$on("dismiss",n[23]),dt=new oi({props:{showing:n[5],hideOk:!0,hideCancel:!0,class:"font-bold",$$slots:{default:[aE]},$$scope:{ctx:n}}}),dt.$on("dismiss",n[24]),ct=new oi({props:{showing:n[9]||n[8],title:"Play with friend online",hideOk:!0,$$slots:{default:[uE]},$$scope:{ctx:n}}}),ct.$on("dismiss",n[21]),{c(){t=q("div"),e=q("div"),r=q("div"),Z(s.$$.fragment),i=it(),o=q("div"),a=q("div"),Z(l.$$.fragment),c=it(),Z(u.$$.fragment),h=it(),f=q("p"),d=Ie(n[10]),I=it(),Z(v.$$.fragment),p=it(),m=q("div");for(let C=0;C<X.length;C+=1)X[C].c();g=it(),P=q("div"),N=q("a"),lt=Ie("Rules"),F=it(),Z(w.$$.fragment),gt=it(),Z(dt.$$.fragment),yt=it(),Z(ct.$$.fragment),this.h()},l(C){t=z(C,"DIV",{class:!0});var O=Q(t);e=z(O,"DIV",{class:!0});var vt=Q(e);r=z(vt,"DIV",{class:!0});var $t=Q(r);tt(s.$$.fragment,$t),i=ot($t),o=z($t,"DIV",{class:!0});var Vt=Q(o);a=z(Vt,"DIV",{});var se=Q(a);tt(l.$$.fragment,se),c=ot(se),tt(u.$$.fragment,se),se.forEach(S),h=ot(Vt),f=z(Vt,"P",{class:!0});var Ee=Q(f);d=Ae(Ee,n[10]),Ee.forEach(S),Vt.forEach(S),I=ot($t),tt(v.$$.fragment,$t),$t.forEach(S),p=ot(vt),m=z(vt,"DIV",{class:!0});var Et=Q(m);for(let an=0;an<X.length;an+=1)X[an].l(Et);Et.forEach(S),g=ot(vt),P=z(vt,"DIV",{class:!0});var Se=Q(P);N=z(Se,"A",{href:!0,target:!0,class:!0});var Bn=Q(N);lt=Ae(Bn,"Rules"),Bn.forEach(S),Se.forEach(S),vt.forEach(S),O.forEach(S),F=ot(C),tt(w.$$.fragment,C),gt=ot(C),tt(dt.$$.fragment,C),yt=ot(C),tt(ct.$$.fragment,C),this.h()},h(){D(f,"class",n[11]),D(o,"class","flex-1 flex flex-row justify-center relative"),D(r,"class","flex flex-row gap-2 pb-2 pt-3 px-2 items-start"),D(m,"class","flex-1 flex flex-col justify-center w-full max-w-[600px] mx-auto gap-1 px-3"),D(N,"href",n[16]),D(N,"target","_blank"),D(N,"class","text-faded"),D(P,"class","text-center pb-2"),D(e,"class",n[12]),D(t,"class","h-device relative")},m(C,O){$(C,t,O),M(t,e),M(e,r),et(s,r,null),M(r,i),M(r,o),M(o,a),et(l,a,null),M(a,c),et(u,a,null),M(o,h),M(o,f),M(f,d),M(r,I),et(v,r,null),M(e,p),M(e,m);for(let vt=0;vt<X.length;vt+=1)X[vt]&&X[vt].m(m,null);M(e,g),M(e,P),M(P,N),M(N,lt),$(C,F,O),et(w,C,O),$(C,gt,O),et(dt,C,O),$(C,yt,O),et(ct,C,O),St=!0},p(C,O){const vt={};O[0]&8192&&(vt.class=C[13]),O[0]&4&&(vt.color=C[2]),l.$set(vt);const $t={};if(O[0]&16384&&($t.score1=C[14][0]),O[0]&16384&&($t.score2=C[14][1]),u.$set($t),(!St||O[0]&1024)&&Ts(d,C[10]),(!St||O[0]&2048)&&D(f,"class",C[11]),O[0]&1474763){xt=be({length:C[7]});let Et;for(Et=0;Et<xt.length;Et+=1){const Se=Kl(C,xt,Et);X[Et]?(X[Et].p(Se,O),b(X[Et],1)):(X[Et]=Wl(Se),X[Et].c(),b(X[Et],1),X[Et].m(m,null))}for(te(),Et=xt.length;Et<X.length;Et+=1)xn(Et);ee()}(!St||O[0]&4096)&&D(e,"class",C[12]);const Vt={};O[0]&16&&(Vt.showing=C[4]),O[2]&8&&(Vt.$$scope={dirty:O,ctx:C}),w.$set(Vt);const se={};O[0]&32&&(se.showing=C[5]),O[0]&16384|O[2]&8&&(se.$$scope={dirty:O,ctx:C}),dt.$set(se);const Ee={};O[0]&768&&(Ee.showing=C[9]||C[8]),O[0]&256|O[2]&8&&(Ee.$$scope={dirty:O,ctx:C}),ct.$set(Ee)},i(C){if(!St){b(s.$$.fragment,C),b(l.$$.fragment,C),b(u.$$.fragment,C),b(v.$$.fragment,C);for(let O=0;O<xt.length;O+=1)b(X[O]);b(w.$$.fragment,C),b(dt.$$.fragment,C),b(ct.$$.fragment,C),St=!0}},o(C){V(s.$$.fragment,C),V(l.$$.fragment,C),V(u.$$.fragment,C),V(v.$$.fragment,C),X=X.filter(Boolean);for(let O=0;O<X.length;O+=1)V(X[O]);V(w.$$.fragment,C),V(dt.$$.fragment,C),V(ct.$$.fragment,C),St=!1},d(C){C&&(S(t),S(F),S(gt),S(yt)),nt(s),nt(l),nt(u),nt(v),Yr(X,C),nt(w,C),nt(dt,C),nt(ct,C)}}}const ti="text-blue-300",ei="text-pink-300";function fE(n,t,e){let r,s,i,o,a,l,c,u,h,f,d,I,v,p,m,g;ve(n,tc,y=>e(39,v=y)),ve(n,Ke,y=>e(40,p=y)),ve(n,ze,y=>e(41,m=y)),ve(n,Xn,y=>e(42,g=y));const P=".//page/rules";let N=[],lt=[],F=0,w=[],gt=!1,dt=!1,yt=!1,ct=!1,St=null,xt=null,X=!1,xn=null,C=qe.AI,O=null;const vt=y=>ut.sendChannelMessage(JSON.stringify(y)),$t=parseInt(v.url.searchParams.get("s")||String(vn));let Vt=co.indexOf($t)>=0?$t:vn;const se=(y,T,j)=>{if(!(!N[y]||N[y][T]!==!1))return e(0,N[y][T]=j,N),[y,T]},Ee=(y,T)=>[[y,T],[y-1,T],[y+1,T],[y,T-1],[y,T+1]],Et=(y,T)=>[[y,T],[y-1,T-1],[y-1,T+1],[y+1,T-1],[y+1,T+1]],Se=(y,T)=>[[y,T],[y+1,T-1],[y+2,T-2],[y-1,T+1],[y-2,T+2]],Bn=(y,T)=>[[y,T],[y-1,T-1],[y-2,T-2],[y+1,T+1],[y+2,T+2]],an=(y,T)=>[[y,T],[y,T-1],[y,T-2],[y,T+1],[y,T+2]],ua=(y,T)=>[[y,T],[y-1,T],[y-2,T],[y+1,T],[y+2,T]],Uh=(y,T,j)=>{const W=[];let G=[];switch(g){case st.AXES:G=Ee(y,T);break;case st.DIAGONAL:G=Et(y,T);break;case st.RISING:G=Se(y,T);break;case st.FALLING:G=Bn(y,T);break;case st.HORIZONTAL:G=an(y,T);break;case st.VERTICAL:G=ua(y,T);break;default:G=[[y,T]];break}for(let Tt=0;Tt<G.length;Tt++)W.push(se(G[Tt][0],G[Tt][1],j));return W},jh=(y,T)=>{const j=[];for(let W=0;W<y.length;W++){if(!y[W])continue;const[G,Tt]=y[W],Mr=Tt+1,cn=Tt+2,Un=Tt-1,Yh=Tt-2,da=G+1,ma=G+2,ga=G-1,pa=G-2;N[G][cn]===T&&N[G][Mr]!==!1&&j.push([G,Mr]),N[G][Yh]===T&&N[G][Un]!==!1&&j.push([G,Un]),N[ma]&&N[ma][Tt]===T&&N[da][Tt]!==!1&&j.push([da,Tt]),N[pa]&&N[pa][Tt]===T&&N[ga][Tt]!==!1&&j.push([ga,Tt])}return j},qh=(y,T)=>{const j=jh(y,T);for(let W=0;W<j.length;W++)e(0,N[j[W][0]][j[W][1]]=T,N)},zh=async()=>{e(1,X=!0),xt||(xt=new Xf(N));const y=await xt.selectBlock(g);e(1,X=!1),y&&ni(y[0],y[1],!0)},ni=async(y,T,j)=>{if(ct)return;const W=r?"color1":"color2";if(qh(Uh(y,T,W),W),!Object.values(N).some(G=>G.some(Tt=>!Tt))){c&&vt({type:"placedBlock",rowIndex:y,colIndex:T}),e(27,ct=!0),setTimeout($h,500);return}e(26,F++,F),await Ql(),r&&(Yt(Xn,g=m,g),Yt(ze,m=p,m),Yt(Ke,p=c?w[F+1]:Gr(),p)),j!==!0&&(l?zh():c&&(vt({type:"placedBlock",rowIndex:y,colIndex:T}),e(1,X=!0)))},Kh=async({detail:{rowIndex:y,colIndex:T}})=>{if(Qf.is.webMobile&&(!St||St[0]!==y||St[1]!==T)){St=[y,T];return}yt=!0,ni(y,T)},ha=()=>{const y=[];for(let T=0;T<Vt;T++){y[T]=[];for(let j=0;j<Vt;j++)y[T][j]=!1}e(3,lt=y),e(6,xn=null),St=null},ri=()=>{const y=[];for(let T=0;T<Vt;T++){y[T]=[];for(let j=0;j<Vt;j++)y[T][j]=!1}e(0,N=y),ha()},Gh=y=>{let T=0,j=0;for(let W=0;W<y.length;W++)for(let G=0;G<y[W].length;G++)y[W][G]==="color1"?T+=ts(y,W,G,"color1"):y[W][G]==="color2"&&(j+=ts(y,W,G,"color2"));return[T,j]},ln=y=>{ri(),e(26,F=0),Yt(Xn,g=st.SINGLE,g),Yt(ze,m=Gr(),m),Yt(Ke,p=Gr(),p),fa(),yt=!1,e(27,ct=!1),e(1,X=!1),xt?(xt.cancelActiveActions(),xt=null):c&&(O===ne.CONNECTED_AS_PLAYER1&&e(1,X=!0),y||(w=ec(Vt*Vt),Yt(ze,m=w[1],m),Yt(Ke,p=w[2],p),vt({type:"resetGame",turns:w})))},Hh=({detail:{rowIndex:y,colIndex:T}})=>{let j=[];switch(g){case st.AXES:j=Ee(y,T);break;case st.DIAGONAL:j=Et(y,T);break;case st.RISING:j=Se(y,T);break;case st.FALLING:j=Bn(y,T);break;case st.HORIZONTAL:j=an(y,T);break;case st.VERTICAL:j=ua(y,T);break}for(let W=0;W<j.length;W++)lt[j[W][0]]!==void 0&&lt[j[W][0]][j[W][1]]!==void 0&&e(3,lt[j[W][0]][j[W][1]]=s,lt);e(6,xn=[y,T])},Wh=()=>{yt&&!ct&&!confirm("Do you want to leave this page now?")||mf("./")},Qh=()=>{if(dt){si(),setTimeout(ln,250);return}if(!yt||ct){ln();return}e(4,gt=!0)},fa=()=>{e(4,gt=!1)},$h=()=>{e(5,dt=!0)},si=()=>{e(5,dt=!1)},Xh=({detail:{size:y,status:T,turns:j}})=>{e(7,Vt=y),e(29,O=T),w=j,ri(),Yt(ze,m=j[1],m),Yt(Ke,p=j[2],p),ut.onstatechange=W=>{const G=W.target;(!G||["disconnected","failed"].includes(G.connectionState))&&e(29,O=ne.DISCONNECTED)},ut.onmessage=({data:W})=>{try{const{type:G,rowIndex:Tt,colIndex:Mr,turns:cn}=JSON.parse(W);switch(G){case"placedBlock":ni(Tt,Mr,!0),e(1,X=!1);break;case"resetGame":{const Un=()=>{ln(!0),cn&&(w=cn,Yt(ze,m=cn[1],m),Yt(Ke,p=cn[2],p))};dt?(si(),setTimeout(Un,250)):Un();break}case"left":ut==null||ut.close(),e(29,O=ne.DISCONNECTED);break;default:break}}catch{ut==null||ut.close(),e(29,O=ne.DISCONNECTED)}},O===ne.CONNECTED_AS_PLAYER1&&e(1,X=!0)};ri(),Jl(()=>{if(v.url.searchParams.get("room"))e(28,C=qe.FRIEND_ONLINE),e(29,O=ne.CONNECTING);else{const T=parseInt(v.url.searchParams.get("m")||String(qe.AI));Object.values(qe).includes(T)&&e(28,C=T),C===qe.FRIEND_ONLINE&&e(29,O=ne.CONNECTING)}ln()}),df(()=>{vt({type:"left"}),c&&(ut==null||ut.close())});const Jh=()=>{ln()};return n.$$.update=()=>{n.$$.dirty[0]&67108864&&e(32,r=Ef(F)),n.$$.dirty[1]&2&&e(15,s=r?"color1":"color2"),n.$$.dirty[1]&2&&e(2,i=r?ti:ei),n.$$.dirty[0]&1&&e(14,o=Gh(N)),n.$$.dirty[0]&134217728&&e(13,a="pb-2"+(ct?" invisible":"")),n.$$.dirty[0]&268435456&&e(31,l=C===qe.AI),n.$$.dirty[0]&268435456|n.$$.dirty[1]&1&&e(30,c=!l&&C===qe.FRIEND_ONLINE),n.$$.dirty[0]&2&&e(12,u="h-full flex flex-col relative"+(X?" cursor-wait":"")),n.$$.dirty[0]&4|n.$$.dirty[1]&1&&e(11,h="absolute -bottom-4 w-full text-center"+(l?" text-faded":" "+i)),n.$$.dirty[1]&3&&e(10,f=r?"Player 1":l?"Computer...":"Player 2"),n.$$.dirty[0]&536870912&&e(9,d=O===ne.CONNECTING),n.$$.dirty[0]&1610612736&&e(8,I=c&&O===ne.DISCONNECTED)},[N,X,i,lt,gt,dt,xn,Vt,I,d,f,h,u,a,o,s,P,Kh,ha,ln,Hh,Wh,Qh,fa,si,Xh,F,ct,C,O,c,l,r,Jh]}class CE extends _e{constructor(t){super(),ye(this,t,fE,hE,pe,{},null,[-1,-1,-1])}}export{CE as component};
