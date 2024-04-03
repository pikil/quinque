import{s as De,e as L,c as F,b as W,f as R,m as D,i as Q,r as he,n as It,P as Is,k as we,a1 as As,B as Jl,v as ne,h as V,o as Rs,J as An,K as Rn,t as Ce,d as Se,a as Y,g as J,l as le,a2 as Xl,p as Zl,M as ga,C as tc,D as ec,E as nc,F as rc,z as cf,a3 as uf,a4 as pa,j as Ir,x as sc,a5 as hf,a6 as te}from"../chunks/scheduler.B-DWYx8-.js";import{S as Ve,i as ke,t as b,g as re,b as k,d as se,c as X,a as Z,m as tt,e as et,f as ns,h as ff}from"../chunks/index.sUnvYLDn.js";import{I as Le,e as Be,B as Ae,P as ic}from"../chunks/Button.CTEps3xO.js";import{e as ct,t as _a,f as ya,s as Ea,q as df,r as Ht,a as Wt,p as He}from"../chunks/objects.BqUMn-5_.js";import{c as mf,a as gf,b as pf,d as _f,e as yf,f as Ef,g as vf,R as Tf}from"../chunks/RulesBlock.D2e8MnDM.js";import{w as oo,o as wf,b as If,g as Af}from"../chunks/entry.9nlmztu_.js";import{a as Rf,b as Cf,f as Sf,c as oc}from"../chunks/fontawesome6-icons.DqdKzoTH.js";import{d as bf,c as ao,e as Cn}from"../chunks/bootstrap-icons.cKNla1Tb.js";import{r as Pf}from"../chunks/strings.U8-O1d44.js";import{p as ac}from"../chunks/stores.BgTfPxv-.js";import{r as Df,g as Vf}from"../chunks/generators.DQl_b8YR.js";const Qr=()=>Math.floor(Math.random()*Object.keys(ct).length),kf=n=>!n||!(n%2),Yr=n=>{switch(n){case ct.AXES:return vf;case ct.DIAGONAL:return Ef;case ct.RISING:return yf;case ct.FALLING:return _f;case ct.HORIZONTAL:return pf;case ct.VERTICAL:return gf;default:return mf}},rs=(n,t,e,r)=>{if(n[t]===void 0||n[t][e]===void 0)return 0;let s=5;const i=t-1,o=t+1;return(n[i]&&n[i][e]===r||n[o]&&n[o][e]===r)&&s--,(n[t][e+1]===r||n[t][e-1]===r)&&s--,s},lc=n=>{const t=[];t.push(ct.SINGLE);for(let e=1;e<n;e++)t.push(Qr());return t},Zn=oo(ct.SINGLE),We=oo(ct.SINGLE),Qe=oo(ct.SINGLE);function va(n){let t,e,r,s;const i=[Of,Nf],o=[];function a(l,c){return l[2]?0:l[1]?1:-1}return~(t=a(n))&&(e=o[t]=i[t](n)),{c(){e&&e.c(),r=ne()},l(l){e&&e.l(l),r=ne()},m(l,c){~t&&o[t].m(l,c),Q(l,r,c),s=!0},p(l,c){let u=t;t=a(l),t===u?~t&&o[t].p(l,c):(e&&(re(),k(o[u],1,1,()=>{o[u]=null}),se()),~t?(e=o[t],e?e.p(l,c):(e=o[t]=i[t](l),e.c()),b(e,1),e.m(r.parentNode,r)):e=null)},i(l){s||(b(e),s=!0)},o(l){k(e),s=!1},d(l){l&&R(r),~t&&o[t].d(l)}}}function Nf(n){let t,e;return t=new Le({props:{name:Rf,class:n[5]}}),{c(){X(t.$$.fragment)},l(r){Z(t.$$.fragment,r)},m(r,s){tt(t,r,s),e=!0},p(r,s){const i={};s&32&&(i.class=r[5]),t.$set(i)},i(r){e||(b(t.$$.fragment,r),e=!0)},o(r){k(t.$$.fragment,r),e=!1},d(r){et(t,r)}}}function Of(n){let t,e;return t=new Le({props:{name:n[3],class:"h-4 w-4 text-black"}}),{c(){X(t.$$.fragment)},l(r){Z(t.$$.fragment,r)},m(r,s){tt(t,r,s),e=!0},p(r,s){const i={};s&8&&(i.name=r[3]),t.$set(i)},i(r){e||(b(t.$$.fragment,r),e=!0)},o(r){k(t.$$.fragment,r),e=!1},d(r){et(t,r)}}}function Mf(n){let t,e,r,s,i=!n[0]&&va(n);return{c(){t=L("div"),i&&i.c(),this.h()},l(o){t=F(o,"DIV",{role:!0,tabindex:!0,class:!0});var a=W(t);i&&i.l(a),a.forEach(R),this.h()},h(){D(t,"role","button"),D(t,"tabindex","0"),D(t,"class",n[4])},m(o,a){Q(o,t,a),i&&i.m(t,null),e=!0,r||(s=[he(t,"click",n[6]),he(t,"mouseenter",n[7]),he(t,"mouseleave",n[8]),he(t,"keypress",It)],r=!0)},p(o,[a]){o[0]?i&&(re(),k(i,1,1,()=>{i=null}),se()):i?(i.p(o,a),a&1&&b(i,1)):(i=va(o),i.c(),b(i,1),i.m(t,null)),(!e||a&16)&&D(t,"class",o[4])},i(o){e||(b(i),e=!0)},o(o){k(i),e=!1},d(o){o&&R(t),i&&i.d(),r=!1,Is(s)}}}function Lf(n,t,e){let r,s,i,o,a,l,c;we(n,Zn,w=>e(17,c=w));const u=As();let h=!1,{hoverCoords:d=null}=t,{disabled:f=!1}=t,{rowIndex:y}=t,{colIndex:_}=t,{selected:g=!1}=t,{selectCandidate:m=!1}=t,{hoverColor:p=""}=t;const P=()=>{e(14,h=!0),setTimeout(()=>{e(14,h=!1)},600)},N=async()=>{u("click",{rowIndex:y,colIndex:_})},G=()=>{u("enter",{rowIndex:y,colIndex:_})},M=()=>{u("leave",{rowIndex:y,colIndex:_})};return n.$$set=w=>{"hoverCoords"in w&&e(9,d=w.hoverCoords),"disabled"in w&&e(10,f=w.disabled),"rowIndex"in w&&e(11,y=w.rowIndex),"colIndex"in w&&e(12,_=w.colIndex),"selected"in w&&e(0,g=w.selected),"selectCandidate"in w&&e(1,m=w.selectCandidate),"hoverColor"in w&&e(13,p=w.hoverColor)},n.$$.update=()=>{n.$$.dirty&2&&e(5,r="h-3 w-3 opacity-50"+(m==="color1"?" text-indigo-400":" text-rose-400")),n.$$.dirty&1&&e(15,s=g==="color1"?" bg-indigo-400 sel-color1":g==="color2"?" bg-pink-400 sel-color2":" bg-gray-600"),n.$$.dirty&8193&&e(16,i=g?"":p==="color1"?" hover:bg-indigo-400":p==="color2"?" hover:bg-rose-400":" hover:bg-gray-400"),n.$$.dirty&115713&&e(4,o="flex-1 aspect-square text-sm transition-colors duration-300 rounded-sm sm:rounded-md border border-gray-600 bubbly relative cursor-pointer outline-none flex flex-col justify-center items-center bg-opacity-80 hover:bg-opacity-100"+i+s+(g||f?" pointer-events-none":"")+(h?" animate":"")),n.$$.dirty&131072&&e(3,a=Yr(c)),n.$$.dirty&6656&&e(2,l=d&&y===d[0]&&_===d[1]),n.$$.dirty&1&&g&&Jl().then(P)},[g,m,l,a,o,r,N,G,M,d,f,y,_,p,h,s,i,c]}class Ff extends Ve{constructor(t){super(),ke(this,t,Lf,Mf,De,{hoverCoords:9,disabled:10,rowIndex:11,colIndex:12,selected:0,selectCandidate:1,hoverColor:13})}}function Ta(n,t,e){const r=n.slice();return r[7]=t[e],r}function wa(n,t,e){const r=n.slice();return r[10]=t[e],r[12]=e,r}function Ia(n){let t,e;return{c(){t=L("div"),e=Ce(n[12]),this.h()},l(r){t=F(r,"DIV",{class:!0,style:!0});var s=W(t);e=Se(s,n[12]),s.forEach(R),this.h()},h(){D(t,"class",Bf),D(t,"style",n[2])},m(r,s){Q(r,t,s),V(t,e)},p(r,s){s&4&&D(t,"style",r[2])},d(r){r&&R(t)}}}function Aa(n){let t,e=Be({length:10}),r=[];for(let s=0;s<e.length;s+=1)r[s]=Ia(wa(n,e,s));return{c(){for(let s=0;s<r.length;s+=1)r[s].c();t=ne()},l(s){for(let i=0;i<r.length;i+=1)r[i].l(s);t=ne()},m(s,i){for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(s,i);Q(s,t,i)},p(s,i){if(i&4){e=Be({length:10});let o;for(o=0;o<e.length;o+=1){const a=wa(s,e,o);r[o]?r[o].p(a,i):(r[o]=Ia(a),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=e.length}},d(s){s&&R(t),Rs(r,s)}}}function xf(n){let t,e,r=Be({length:2}),s=[];for(let i=0;i<r.length;i+=1)s[i]=Aa(Ta(n,r,i));return{c(){t=L("div"),e=L("div");for(let i=0;i<s.length;i+=1)s[i].c();this.h()},l(i){t=F(i,"DIV",{class:!0,style:!0});var o=W(t);e=F(o,"DIV",{class:!0,style:!0});var a=W(e);for(let l=0;l<s.length;l+=1)s[l].l(a);a.forEach(R),o.forEach(R),this.h()},h(){D(e,"class","transition-transform duration-500"),D(e,"style",n[0]),D(t,"class",n[1]),D(t,"style",n[2])},m(i,o){Q(i,t,o),V(t,e);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(e,null)},p(i,[o]){if(o&4){r=Be({length:2});let a;for(a=0;a<r.length;a+=1){const l=Ta(i,r,a);s[a]?s[a].p(l,o):(s[a]=Aa(l),s[a].c(),s[a].m(e,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=r.length}o&1&&D(e,"style",i[0]),o&2&&D(t,"class",i[1]),o&4&&D(t,"style",i[2])},i:It,o:It,d(i){i&&R(t),Rs(s,i)}}}const Bf="flex flex-col justify-center items-center text-xl";function Uf(n,t,e){let r,s,i,{digit:o=0}=t,{height:a=30}=t,{width:l=15}=t;return n.$$set=c=>{e(6,t=An(An({},t),Rn(c))),"digit"in c&&e(3,o=c.digit),"height"in c&&e(4,a=c.height),"width"in c&&e(5,l=c.width)},n.$$.update=()=>{n.$$.dirty&48&&e(2,r="width: "+l+"px;height: "+a+"px"),e(1,s="overflow-hidden"+(t.class?" "+t.class:"")),n.$$.dirty&24&&e(0,i="transform: translateY(-"+o*a+"px)")},t=Rn(t),[i,s,r,o,a,l]}class mn extends Ve{constructor(t){super(),ke(this,t,Uf,xf,De,{digit:3,height:4,width:5})}}function $f(n){let t,e,r,s,i,o,a,l,c="-",u,h,d,f,y,_,g;return e=new mn({props:{digit:n[3][0],class:n[0]}}),s=new mn({props:{digit:n[3][1],class:n[0]}}),o=new mn({props:{digit:n[3][2],class:n[0]}}),h=new mn({props:{digit:n[2][0],class:n[1]}}),f=new mn({props:{digit:n[2][1],class:n[1]}}),_=new mn({props:{digit:n[2][2],class:n[1]}}),{c(){t=L("div"),X(e.$$.fragment),r=Y(),X(s.$$.fragment),i=Y(),X(o.$$.fragment),a=Y(),l=L("div"),l.textContent=c,u=Y(),X(h.$$.fragment),d=Y(),X(f.$$.fragment),y=Y(),X(_.$$.fragment),this.h()},l(m){t=F(m,"DIV",{class:!0});var p=W(t);Z(e.$$.fragment,p),r=J(p),Z(s.$$.fragment,p),i=J(p),Z(o.$$.fragment,p),a=J(p),l=F(p,"DIV",{class:!0,"data-svelte-h":!0}),le(l)!=="svelte-1r1kxhl"&&(l.textContent=c),u=J(p),Z(h.$$.fragment,p),d=J(p),Z(f.$$.fragment,p),y=J(p),Z(_.$$.fragment,p),p.forEach(R),this.h()},h(){D(l,"class","text-faded px-2"),D(t,"class","flex flex-row items-center justify-center py-2")},m(m,p){Q(m,t,p),tt(e,t,null),V(t,r),tt(s,t,null),V(t,i),tt(o,t,null),V(t,a),V(t,l),V(t,u),tt(h,t,null),V(t,d),tt(f,t,null),V(t,y),tt(_,t,null),g=!0},p(m,[p]){const P={};p&8&&(P.digit=m[3][0]),p&1&&(P.class=m[0]),e.$set(P);const N={};p&8&&(N.digit=m[3][1]),p&1&&(N.class=m[0]),s.$set(N);const G={};p&8&&(G.digit=m[3][2]),p&1&&(G.class=m[0]),o.$set(G);const M={};p&4&&(M.digit=m[2][0]),p&2&&(M.class=m[1]),h.$set(M);const w={};p&4&&(w.digit=m[2][1]),p&2&&(w.class=m[1]),f.$set(w);const pt={};p&4&&(pt.digit=m[2][2]),p&2&&(pt.class=m[1]),_.$set(pt)},i(m){g||(b(e.$$.fragment,m),b(s.$$.fragment,m),b(o.$$.fragment,m),b(h.$$.fragment,m),b(f.$$.fragment,m),b(_.$$.fragment,m),g=!0)},o(m){k(e.$$.fragment,m),k(s.$$.fragment,m),k(o.$$.fragment,m),k(h.$$.fragment,m),k(f.$$.fragment,m),k(_.$$.fragment,m),g=!1},d(m){m&&R(t),et(e),et(s),et(o),et(h),et(f),et(_)}}}function jf(n,t,e){let r,s,{score1:i=0}=t,{score2:o=0}=t,{score1Class:a=""}=t,{score2Class:l=""}=t;const c=u=>{if(u<=0)return[0,0,0];if(u>=1e3)return[9,9,9];const h=u%10;u=u/10|0;const d=u%10;return u=u/10|0,[u%10,d,h]};return n.$$set=u=>{"score1"in u&&e(4,i=u.score1),"score2"in u&&e(5,o=u.score2),"score1Class"in u&&e(0,a=u.score1Class),"score2Class"in u&&e(1,l=u.score2Class)},n.$$.update=()=>{n.$$.dirty&16&&e(3,r=c(i)),n.$$.dirty&32&&e(2,s=c(o))},[a,l,s,r,i,o]}class cc extends Ve{constructor(t){super(),ke(this,t,jf,$f,De,{score1:4,score2:5,score1Class:0,score2Class:1})}}const uc=["overflow-hidden","scroll-blocked"],qf=()=>{document.body.classList.add(...uc),document.documentElement.classList.add("overflow-hidden")},zf=()=>{document.body.classList.remove(...uc),document.documentElement.classList.remove("overflow-hidden")},ci={},Kf=n=>(ci[n]||(ci[n]=document.getElementById(n)),ci[n]),hc=(n,t="modal")=>{const e=Kf(t);e&&(e.appendChild(n),e.focus())};function Ra(n){let t,e,r,s,i;return{c(){t=L("div"),this.h()},l(o){t=F(o,"DIV",{role:!0,tabindex:!0,class:!0}),W(t).forEach(R),this.h()},h(){D(t,"role","button"),D(t,"tabindex","0"),D(t,"class","fixed z-[35] inset-0 backdrop-brightness-75 backdrop-blur")},m(o,a){Q(o,t,a),r=!0,s||(i=[Xl(hc.call(null,t,"backdrop")),he(t,"click",n[1]),he(t,"keypress",n[2])],s=!0)},i(o){r||(Zl(()=>{r&&(e||(e=ns(t,ya,_a,!0)),e.run(1))}),r=!0)},o(o){e||(e=ns(t,ya,_a,!1)),e.run(0),r=!1},d(o){o&&R(t),o&&e&&e.end(),s=!1,Is(i)}}}function Gf(n){let t,e,r=n[0]&&Ra(n);return{c(){r&&r.c(),t=ne()},l(s){r&&r.l(s),t=ne()},m(s,i){r&&r.m(s,i),Q(s,t,i),e=!0},p(s,[i]){s[0]?r?i&1&&b(r,1):(r=Ra(s),r.c(),b(r,1),r.m(t.parentNode,t)):r&&(re(),k(r,1,1,()=>{r=null}),se())},i(s){e||(b(r),e=!0)},o(s){k(r),e=!1},d(s){s&&R(t),r&&r.d(s)}}}function Hf(n,t,e){let{showing:r=!1}=t;function s(o){ga.call(this,n,o)}function i(o){ga.call(this,n,o)}return n.$$set=o=>{"showing"in o&&e(0,r=o.showing)},[r,s,i]}class Wf extends Ve{constructor(t){super(),ke(this,t,Hf,Gf,De,{showing:0})}}function Ca(n){let t;const e=n[4].default,r=tc(e,n,n[3],null);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,i){r&&r.m(s,i),t=!0},p(s,i){r&&r.p&&(!t||i&8)&&ec(r,e,s,s[3],t?rc(e,s[3],i,null):nc(s[3]),null)},i(s){t||(b(r,s),t=!0)},o(s){k(r,s),t=!1},d(s){r&&r.d(s)}}}function Qf(n){let t,e,r,s=n[0]&&Ca(n);return e=new Wf({props:{showing:n[0]}}),e.$on("click",n[1]),e.$on("keypress",n[1]),{c(){s&&s.c(),t=Y(),X(e.$$.fragment)},l(i){s&&s.l(i),t=J(i),Z(e.$$.fragment,i)},m(i,o){s&&s.m(i,o),Q(i,t,o),tt(e,i,o),r=!0},p(i,[o]){i[0]?s?(s.p(i,o),o&1&&b(s,1)):(s=Ca(i),s.c(),b(s,1),s.m(t.parentNode,t)):s&&(re(),k(s,1,1,()=>{s=null}),se());const a={};o&1&&(a.showing=i[0]),e.$set(a)},i(i){r||(b(s),b(e.$$.fragment,i),r=!0)},o(i){k(s),k(e.$$.fragment,i),r=!1},d(i){i&&R(t),s&&s.d(i),et(e,i)}}}function Yf(n,t,e){let{$$slots:r={},$$scope:s}=t;const i=As();let{showing:o=!1}=t,{disabled:a=!1}=t;const l=()=>{i("dismiss")};return wf(()=>{e(0,o=!1)}),n.$$set=c=>{"showing"in c&&e(0,o=c.showing),"disabled"in c&&e(2,a=c.disabled),"$$scope"in c&&e(3,s=c.$$scope)},n.$$.update=()=>{if(n.$$.dirty&5){const c=u=>{var d;if(["input","textarea"].indexOf((d=u.target)==null?void 0:d.type)>=0)return;let h=!1;switch(u.key){case"Escape":l(),h=!0;break;case"Enter":a||i("ok"),h=!0;break}h&&(u.preventDefault(),u.stopPropagation())};o?(document.addEventListener("keydown",c),qf()):(document.removeEventListener("keydown",c),zf())}},[o,l,a,s,r]}class Jf extends Ve{constructor(t){super(),ke(this,t,Yf,Qf,De,{showing:0,disabled:2})}}function Sa(n){let t,e,r,s,i,o;return i=new Ae({props:{round:!0,icon:bf,iconClass:"h-6 w-6 text-faded"}}),i.$on("click",n[11]),{c(){t=L("div"),e=L("div"),r=Ce(n[1]),s=Y(),X(i.$$.fragment),this.h()},l(a){t=F(a,"DIV",{id:!0,class:!0});var l=W(t);e=F(l,"DIV",{class:!0});var c=W(e);r=Se(c,n[1]),c.forEach(R),s=J(l),Z(i.$$.fragment,l),l.forEach(R),this.h()},h(){D(e,"class","flex-grow min-w-0 ellipsis text-gray-300 select-none"),D(t,"id","modal-title"),D(t,"class","flex flex-row gap-3 items-center pl-4 pr-2 pb-3")},m(a,l){Q(a,t,l),V(t,e),V(e,r),V(t,s),tt(i,t,null),o=!0},p(a,l){(!o||l&2)&&Ir(r,a[1])},i(a){o||(b(i.$$.fragment,a),o=!0)},o(a){k(i.$$.fragment,a),o=!1},d(a){a&&R(t),et(i)}}}function ba(n){let t,e,r,s=!n[7]&&Pa(n),i=!n[6]&&Da(n);return{c(){t=L("div"),s&&s.c(),e=Y(),i&&i.c(),this.h()},l(o){t=F(o,"DIV",{class:!0});var a=W(t);s&&s.l(a),e=J(a),i&&i.l(a),a.forEach(R),this.h()},h(){D(t,"class","flex flex-col-reverse gap-3 bg-gray-700 p-3 sm:flex-row")},m(o,a){Q(o,t,a),s&&s.m(t,null),V(t,e),i&&i.m(t,null),r=!0},p(o,a){o[7]?s&&(re(),k(s,1,1,()=>{s=null}),se()):s?(s.p(o,a),a&128&&b(s,1)):(s=Pa(o),s.c(),b(s,1),s.m(t,e)),o[6]?i&&(re(),k(i,1,1,()=>{i=null}),se()):i?(i.p(o,a),a&64&&b(i,1)):(i=Da(o),i.c(),b(i,1),i.m(t,null))},i(o){r||(b(s),b(i),r=!0)},o(o){k(s),k(i),r=!1},d(o){o&&R(t),s&&s.d(),i&&i.d()}}}function Pa(n){let t,e;return t=new Ae({props:{label:n[3],class:"w-full text-faded",disabled:n[5]}}),t.$on("click",n[11]),{c(){X(t.$$.fragment)},l(r){Z(t.$$.fragment,r)},m(r,s){tt(t,r,s),e=!0},p(r,s){const i={};s&8&&(i.label=r[3]),s&32&&(i.disabled=r[5]),t.$set(i)},i(r){e||(b(t.$$.fragment,r),e=!0)},o(r){k(t.$$.fragment,r),e=!1},d(r){et(t,r)}}}function Da(n){let t,e;return t=new Ae({props:{label:n[2],class:"w-full text-primary border-2 border-primary",disabled:n[4],loading:n[5]}}),t.$on("click",n[10]),{c(){X(t.$$.fragment)},l(r){Z(t.$$.fragment,r)},m(r,s){tt(t,r,s),e=!0},p(r,s){const i={};s&4&&(i.label=r[2]),s&16&&(i.disabled=r[4]),s&32&&(i.loading=r[5]),t.$set(i)},i(r){e||(b(t.$$.fragment,r),e=!0)},o(r){k(t.$$.fragment,r),e=!1},d(r){et(t,r)}}}function Xf(n){let t,e,r,s,i,o,a,l,c,u,h,d,f=n[1]&&Sa(n);const y=n[12].default,_=tc(y,n,n[14],null);let g=(!n[6]||!n[7])&&ba(n);return{c(){t=L("div"),e=L("div"),r=L("div"),s=L("div"),i=L("div"),f&&f.c(),o=Y(),a=L("div"),_&&_.c(),l=Y(),g&&g.c(),this.h()},l(m){t=F(m,"DIV",{class:!0,"aria-labelledby":!0,role:!0,"aria-modal":!0});var p=W(t);e=F(p,"DIV",{class:!0});var P=W(e);r=F(P,"DIV",{role:!0,tabindex:!0,class:!0});var N=W(r);s=F(N,"DIV",{class:!0});var G=W(s);i=F(G,"DIV",{class:!0});var M=W(i);f&&f.l(M),o=J(M),a=F(M,"DIV",{class:!0});var w=W(a);_&&_.l(w),w.forEach(R),M.forEach(R),l=J(G),g&&g.l(G),G.forEach(R),N.forEach(R),P.forEach(R),p.forEach(R),this.h()},h(){D(a,"class","px-4"),D(i,"class","bg-gray-600 py-4"),D(s,"class","relative transform overflow-hidden rounded-lg shadow-lg shadow-gray-800 text-white text-left sm:my-8 w-full max-w-[600px]"),D(r,"role","button"),D(r,"tabindex","0"),D(r,"class","flex min-h-full justify-center p-4 text-center items-center sm:p-0 "),D(e,"class","fixed inset-0 z-10 overflow-y-auto"),D(t,"class",n[8]),D(t,"aria-labelledby","modal-title"),D(t,"role","dialog"),D(t,"aria-modal","true")},m(m,p){Q(m,t,p),V(t,e),V(e,r),V(r,s),V(s,i),f&&f.m(i,null),V(i,o),V(i,a),_&&_.m(a,null),V(s,l),g&&g.m(s,null),u=!0,h||(d=[he(r,"click",pa(n[11])),he(r,"keypress",pa(n[11])),Xl(hc.call(null,t))],h=!0)},p(m,p){n=m,n[1]?f?(f.p(n,p),p&2&&b(f,1)):(f=Sa(n),f.c(),b(f,1),f.m(i,o)):f&&(re(),k(f,1,1,()=>{f=null}),se()),_&&_.p&&(!u||p&16384)&&ec(_,y,n,n[14],u?rc(y,n[14],p,null):nc(n[14]),null),!n[6]||!n[7]?g?(g.p(n,p),p&192&&b(g,1)):(g=ba(n),g.c(),b(g,1),g.m(s,null)):g&&(re(),k(g,1,1,()=>{g=null}),se()),(!u||p&256)&&D(t,"class",n[8])},i(m){u||(b(f),b(_,m),b(g),Zl(()=>{u&&(c||(c=ns(e,Ea,n[9],!0)),c.run(1))}),u=!0)},o(m){k(f),k(_,m),k(g),c||(c=ns(e,Ea,n[9],!1)),c.run(0),u=!1},d(m){m&&R(t),f&&f.d(),_&&_.d(m),g&&g.d(),m&&c&&c.end(),h=!1,Is(d)}}}function Zf(n){let t,e,r;function s(o){n[13](o)}let i={disabled:n[4],$$slots:{default:[Xf]},$$scope:{ctx:n}};return n[0]!==void 0&&(i.showing=n[0]),t=new Jf({props:i}),cf.push(()=>ff(t,"showing",s)),t.$on("ok",n[10]),t.$on("dismiss",n[11]),{c(){X(t.$$.fragment)},l(o){Z(t.$$.fragment,o)},m(o,a){tt(t,o,a),r=!0},p(o,[a]){const l={};a&16&&(l.disabled=o[4]),a&16894&&(l.$$scope={dirty:a,ctx:o}),!e&&a&1&&(e=!0,l.showing=o[0],uf(()=>e=!1)),t.$set(l)},i(o){r||(b(t.$$.fragment,o),r=!0)},o(o){k(t.$$.fragment,o),r=!1},d(o){et(t,o)}}}function td(n,t,e){let r,{$$slots:s={},$$scope:i}=t;const o=As(),a={duration:200,easing:df};let{showing:l=!1}=t,{title:c=""}=t,{okLabel:u="OK"}=t,{dismissLabel:h="Back"}=t,{disabled:d=!1}=t,{loading:f=!1}=t,{hideOk:y=!1}=t,{hideCancel:_=!1}=t;const g=()=>{o("ok")},m=()=>{o("dismiss")};function p(P){l=P,e(0,l)}return n.$$set=P=>{e(16,t=An(An({},t),Rn(P))),"showing"in P&&e(0,l=P.showing),"title"in P&&e(1,c=P.title),"okLabel"in P&&e(2,u=P.okLabel),"dismissLabel"in P&&e(3,h=P.dismissLabel),"disabled"in P&&e(4,d=P.disabled),"loading"in P&&e(5,f=P.loading),"hideOk"in P&&e(6,y=P.hideOk),"hideCancel"in P&&e(7,_=P.hideCancel),"$$scope"in P&&e(14,i=P.$$scope)},n.$$.update=()=>{e(8,r="relative z-40 p-4"+(t.class?" "+t.class:""))},t=Rn(t),[l,c,u,h,d,f,y,_,r,a,g,m,s,p,i]}class Hn extends Ve{constructor(t){super(),ke(this,t,td,Zf,De,{showing:0,title:1,okLabel:2,dismissLabel:3,disabled:4,loading:5,hideOk:6,hideCancel:7})}}function ed(n){let t,e,r="The current sequence is:",s,i,o,a="Pattern/color to play",l,c,u,h,d,f="The pattern to follow",y,_,g,m,p,P="The pattern after that",N,G,M,w,pt=`<p>* This screen changes with every player&#39;s turn;</p> <p>** Refer to <a href="${Pf}" target="_blank" class="text-primary hover:underline">game rules</a> for more details;</p>`,ut;return c=new Le({props:{name:n[6],class:n[1]}}),_=new Le({props:{name:n[5],class:n[8]}}),G=new Le({props:{name:n[4],class:n[8]}}),{c(){t=L("div"),e=L("p"),e.textContent=r,s=Y(),i=L("div"),o=L("p"),o.textContent=a,l=Y(),X(c.$$.fragment),u=Y(),h=L("div"),d=L("p"),d.textContent=f,y=Y(),X(_.$$.fragment),g=Y(),m=L("div"),p=L("p"),p.textContent=P,N=Y(),X(G.$$.fragment),M=Y(),w=L("div"),w.innerHTML=pt,this.h()},l(H){t=F(H,"DIV",{class:!0});var U=W(t);e=F(U,"P",{class:!0,"data-svelte-h":!0}),le(e)!=="svelte-gy8v4h"&&(e.textContent=r),s=J(U),i=F(U,"DIV",{class:!0});var ft=W(i);o=F(ft,"P",{"data-svelte-h":!0}),le(o)!=="svelte-1otncfj"&&(o.textContent=a),l=J(ft),Z(c.$$.fragment,ft),ft.forEach(R),u=J(U),h=F(U,"DIV",{class:!0});var mt=W(h);d=F(mt,"P",{class:!0,"data-svelte-h":!0}),le(d)!=="svelte-mtkpbo"&&(d.textContent=f),y=J(mt),Z(_.$$.fragment,mt),mt.forEach(R),g=J(U),m=F(U,"DIV",{class:!0});var _t=W(m);p=F(_t,"P",{class:!0,"data-svelte-h":!0}),le(p)!=="svelte-148oewd"&&(p.textContent=P),N=J(_t),Z(G.$$.fragment,_t),_t.forEach(R),M=J(U),w=F(U,"DIV",{class:!0,"data-svelte-h":!0}),le(w)!=="svelte-154dz7w"&&(w.innerHTML=pt),U.forEach(R),this.h()},h(){D(e,"class","text-center text-faded"),D(i,"class","flex flex-col items-center justify-center gap-2"),D(d,"class","text-faded"),D(h,"class","flex flex-col items-center justify-center gap-2"),D(p,"class","text-faded"),D(m,"class","flex flex-col items-center justify-center gap-2"),D(w,"class","text-faded text-sm"),D(t,"class","flex flex-col gap-6")},m(H,U){Q(H,t,U),V(t,e),V(t,s),V(t,i),V(i,o),V(i,l),tt(c,i,null),V(t,u),V(t,h),V(h,d),V(h,y),tt(_,h,null),V(t,g),V(t,m),V(m,p),V(m,N),tt(G,m,null),V(t,M),V(t,w),ut=!0},p(H,U){const ft={};U&64&&(ft.name=H[6]),U&2&&(ft.class=H[1]),c.$set(ft);const mt={};U&32&&(mt.name=H[5]),_.$set(mt);const _t={};U&16&&(_t.name=H[4]),G.$set(_t)},i(H){ut||(b(c.$$.fragment,H),b(_.$$.fragment,H),b(G.$$.fragment,H),ut=!0)},o(H){k(c.$$.fragment,H),k(_.$$.fragment,H),k(G.$$.fragment,H),ut=!1},d(H){H&&R(t),et(c),et(_),et(G)}}}function nd(n){let t,e,r,s,i,o,a,l,c,u,h;return e=new Le({props:{name:n[6],class:n[2]}}),s=new Le({props:{name:n[5],class:n[7]}}),o=new Le({props:{name:n[4],class:n[7]}}),l=new Hn({props:{showing:n[0],hideOk:!0,$$slots:{default:[ed]},$$scope:{ctx:n}}}),l.$on("dismiss",n[10]),{c(){t=L("div"),X(e.$$.fragment),r=Y(),X(s.$$.fragment),i=Y(),X(o.$$.fragment),a=Y(),X(l.$$.fragment),this.h()},l(d){t=F(d,"DIV",{role:!0,tabindex:!0,class:!0});var f=W(t);Z(e.$$.fragment,f),r=J(f),Z(s.$$.fragment,f),i=J(f),Z(o.$$.fragment,f),f.forEach(R),a=J(d),Z(l.$$.fragment,d),this.h()},h(){D(t,"role","button"),D(t,"tabindex","0"),D(t,"class",n[3])},m(d,f){Q(d,t,f),tt(e,t,null),V(t,r),tt(s,t,null),V(t,i),tt(o,t,null),Q(d,a,f),tt(l,d,f),c=!0,u||(h=[he(t,"click",n[9]),he(t,"keypress",It)],u=!0)},p(d,[f]){const y={};f&64&&(y.name=d[6]),f&4&&(y.class=d[2]),e.$set(y);const _={};f&32&&(_.name=d[5]),s.$set(_);const g={};f&16&&(g.name=d[4]),o.$set(g),(!c||f&8)&&D(t,"class",d[3]);const m={};f&1&&(m.showing=d[0]),f&65650&&(m.$$scope={dirty:f,ctx:d}),l.$set(m)},i(d){c||(b(e.$$.fragment,d),b(s.$$.fragment,d),b(o.$$.fragment,d),b(l.$$.fragment,d),c=!0)},o(d){k(e.$$.fragment,d),k(s.$$.fragment,d),k(o.$$.fragment,d),k(l.$$.fragment,d),c=!1},d(d){d&&(R(t),R(a)),et(e),et(s),et(o),et(l,d),u=!1,Is(h)}}}const Va="h-4 w-4",ka="h-8 w-8";function rd(n,t,e){let r,s,i,o,a,l,c,u,h;we(n,Qe,p=>e(12,c=p)),we(n,We,p=>e(13,u=p)),we(n,Zn,p=>e(14,h=p));const d=Va+" text-faded",f=ka+" text-faded";let{color:y}=t,_=!1;const g=()=>{e(0,_=!0)},m=()=>{e(0,_=!1)};return n.$$set=p=>{e(15,t=An(An({},t),Rn(p))),"color"in p&&e(11,y=p.color)},n.$$.update=()=>{n.$$.dirty&16384&&e(6,r=Yr(h)),n.$$.dirty&8192&&e(5,s=Yr(u)),n.$$.dirty&4096&&e(4,i=Yr(c)),e(3,o="flex flex-row items-center justify-center gap-4"+(t.class?" "+t.class:"")),n.$$.dirty&2048&&e(2,a=Va+" "+y),n.$$.dirty&2048&&e(1,l=ka+" "+y)},t=Rn(t),[_,l,a,o,i,s,r,d,f,g,m,y,c,u,h]}class sd extends Ve{constructor(t){super(),ke(this,t,rd,nd,De,{color:11})}}let tr=null;const Na=()=>{tr||(tr=(window.navigator.userAgent||window.navigator.vendor||window.opera||"").toLowerCase())},Jr={},Ur=(n,t)=>(Jr[n]===void 0&&(Jr[n]=t()),Jr[n]),id={ua:null,is:{get webMobile(){return tr===null&&Na(),Ur("webmob",()=>/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|kindle|silk|mobile/i.test(tr||""))},get webDesktop(){return tr===null&&Na(),Ur("!webmob",()=>!Jr.wm)},get touchAllowed(){return Ur("touch",()=>"ontouchstart"in window)},get mouseAllowed(){return Ur("mouse",()=>matchMedia("(pointer:fine)").matches)}}},Oa="color2",od=(n,t,e,r)=>{let s=rs(e,n,t,Oa);for(let i=0;i<r.length;i++){const[o,a]=r[i];e[o]&&e[o][a]===!1&&(s+=rs(e,o,a,Oa))}return s};class ad{constructor(t){this.selections=t,this.thinking=!1}cancelActiveActions(){this.requestId=Date.now()}getBenefitSums(t){const e=[];for(let r=0;r<this.selections.length;r++){const s=this.selections[r];for(let i=0;i<s.length;i++)s[i]||e.push([r,i,od(r,i,this.selections,t(r,i))])}return e.sort(([,,r],[,,s])=>s-r),e}selectSingleBlock(){const t=this.getBenefitSums(()=>[]),e=Math.floor(Math.random()*t.length);return[t[e][0],t[e][1]]}selectInAxes(){const t=this.getBenefitSums((e,r)=>[[e-1,r],[e+1,r],[e,r-1],[e,r+1]]);return[t[0][0],t[0][1]]}selectInDiagonals(){const t=this.getBenefitSums((e,r)=>[[e+1,r+1],[e+1,r-1],[e-1,r-1],[e-1,r+1]]);return[t[0][0],t[0][1]]}selectInHorizontal(){const t=this.getBenefitSums((e,r)=>[[e,r+1],[e,r+2],[e,r-1],[e,r-2]]);return[t[0][0],t[0][1]]}selectInVertical(){const t=this.getBenefitSums((e,r)=>[[e+1,r],[e+2,r],[e-1,r],[e-2,r]]);return[t[0][0],t[0][1]]}selectInRisingDiagonal(){const t=this.getBenefitSums((e,r)=>[[e-1,r+1],[e-2,r+2],[e+1,r-1],[e+2,r-2]]);return[t[0][0],t[0][1]]}selectInFallingDiagonal(){const t=this.getBenefitSums((e,r)=>[[e+1,r+1],[e+2,r+2],[e-1,r-1],[e-2,r-2]]);return[t[0][0],t[0][1]]}selectBlock(t){const e=Date.now();return this.requestId=e,new Promise(r=>{setTimeout(()=>{if(this.requestId!==e){r(null);return}switch(t){case ct.AXES:r(this.selectInAxes());break;case ct.DIAGONAL:r(this.selectInDiagonals());break;case ct.HORIZONTAL:r(this.selectInHorizontal());break;case ct.VERTICAL:r(this.selectInVertical());break;case ct.FALLING:r(this.selectInFallingDiagonal());break;case ct.RISING:r(this.selectInRisingDiagonal());break;default:r(this.selectSingleBlock());break}},1500)})}}const fc=(...n)=>{console.warn(n)};var Ma={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},ld=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[e++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[e++],o=n[e++],a=n[e++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[e++],o=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},mc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),r.push(e[u],e[h],e[d],e[f])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(dc(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):ld(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=e[n.charAt(s++)],a=s<n.length?e[n.charAt(s)]:0;++s;const c=s<n.length?e[n.charAt(s)]:64;++s;const h=s<n.length?e[n.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new cd;const d=i<<2|a>>4;if(r.push(d),c!==64){const f=a<<4&240|c>>2;if(r.push(f),h!==64){const y=c<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class cd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ud=function(n){const t=dc(n);return mc.encodeByteArray(t,!0)},ss=function(n){return ud(n).replace(/\./g,"")},hd=function(n){try{return mc.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function fd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dd=()=>fd().__FIREBASE_DEFAULTS__,md=()=>{if(typeof process>"u"||typeof Ma>"u")return;const n=Ma.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},gd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&hd(n[1]);return t&&JSON.parse(t)},lo=()=>{try{return dd()||md()||gd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},pd=n=>{var t,e;return(e=(t=lo())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},_d=n=>{const t=pd(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},gc=()=>{var n;return(n=lo())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Ed(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ss(JSON.stringify(e)),ss(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vd(){var n;const t=(n=lo())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Td(){return!vd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pc(){try{return typeof indexedDB=="object"}catch{return!1}}function wd(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="FirebaseError";class Fn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Id,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_c.prototype.create)}}class _c{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Ad(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Fn(s,a,r)}}function Ad(n,t){return n.replace(Rd,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Rd=/\{\$([^}]+)}/g;function os(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const i=n[s],o=t[s];if(La(i)&&La(o)){if(!os(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function La(n){return n!==null&&typeof n=="object"}/**
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
 */function Ue(n){return n&&n._delegate?n._delegate:n}class ar{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ye="[DEFAULT]";/**
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
 */class Cd{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new yd;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(bd(t))try{this.getOrInitializeService({instanceIdentifier:Ye})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Ye){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ye){return this.instances.has(t)}getOptions(t=Ye){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sd(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ye){return this.component?this.component.multipleInstances?t:Ye:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sd(n){return n===Ye?void 0:n}function bd(n){return n.instantiationMode==="EAGER"}/**
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
 */class Pd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Cd(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ot||(ot={}));const Dd={debug:ot.DEBUG,verbose:ot.VERBOSE,info:ot.INFO,warn:ot.WARN,error:ot.ERROR,silent:ot.SILENT},Vd=ot.INFO,kd={[ot.DEBUG]:"log",[ot.VERBOSE]:"log",[ot.INFO]:"info",[ot.WARN]:"warn",[ot.ERROR]:"error"},Nd=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=kd[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class yc{constructor(t){this.name=t,this._logLevel=Vd,this._logHandler=Nd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ot))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Dd[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ot.DEBUG,...t),this._logHandler(this,ot.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ot.VERBOSE,...t),this._logHandler(this,ot.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ot.INFO,...t),this._logHandler(this,ot.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ot.WARN,...t),this._logHandler(this,ot.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ot.ERROR,...t),this._logHandler(this,ot.ERROR,...t)}}const Od=(n,t)=>t.some(e=>n instanceof e);let Fa,xa;function Md(){return Fa||(Fa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ld(){return xa||(xa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ec=new WeakMap,Pi=new WeakMap,vc=new WeakMap,ui=new WeakMap,co=new WeakMap;function Fd(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{e(Fe(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Ec.set(e,n)}).catch(()=>{}),co.set(t,n),t}function xd(n){if(Pi.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{e(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Pi.set(n,t)}let Di={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Pi.get(n);if(t==="objectStoreNames")return n.objectStoreNames||vc.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Fe(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Bd(n){Di=n(Di)}function Ud(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(hi(this),t,...e);return vc.set(r,t.sort?t.sort():[t]),Fe(r)}:Ld().includes(n)?function(...t){return n.apply(hi(this),t),Fe(Ec.get(this))}:function(...t){return Fe(n.apply(hi(this),t))}}function $d(n){return typeof n=="function"?Ud(n):(n instanceof IDBTransaction&&xd(n),Od(n,Md())?new Proxy(n,Di):n)}function Fe(n){if(n instanceof IDBRequest)return Fd(n);if(ui.has(n))return ui.get(n);const t=$d(n);return t!==n&&(ui.set(n,t),co.set(t,n)),t}const hi=n=>co.get(n);function jd(n,t,{blocked:e,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,t),a=Fe(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Fe(o.result),l.oldVersion,l.newVersion,Fe(o.transaction),l)}),e&&o.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const qd=["get","getKey","getAll","getAllKeys","count"],zd=["put","add","delete","clear"],fi=new Map;function Ba(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(fi.get(t))return fi.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=zd.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qd.includes(e)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[e](...a),s&&l.done]))[0]};return fi.set(t,i),i}Bd(n=>({...n,get:(t,e,r)=>Ba(t,e)||n.get(t,e,r),has:(t,e)=>!!Ba(t,e)||n.has(t,e)}));/**
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
 */class Kd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Gd(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Gd(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Vi="@firebase/app",Ua="0.10.0";/**
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
 */const rn=new yc("@firebase/app"),Hd="@firebase/app-compat",Wd="@firebase/analytics-compat",Qd="@firebase/analytics",Yd="@firebase/app-check-compat",Jd="@firebase/app-check",Xd="@firebase/auth",Zd="@firebase/auth-compat",tm="@firebase/database",em="@firebase/database-compat",nm="@firebase/functions",rm="@firebase/functions-compat",sm="@firebase/installations",im="@firebase/installations-compat",om="@firebase/messaging",am="@firebase/messaging-compat",lm="@firebase/performance",cm="@firebase/performance-compat",um="@firebase/remote-config",hm="@firebase/remote-config-compat",fm="@firebase/storage",dm="@firebase/storage-compat",mm="@firebase/firestore",gm="@firebase/firestore-compat",pm="firebase",_m="10.10.0";/**
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
 */const ki="[DEFAULT]",ym={[Vi]:"fire-core",[Hd]:"fire-core-compat",[Qd]:"fire-analytics",[Wd]:"fire-analytics-compat",[Jd]:"fire-app-check",[Yd]:"fire-app-check-compat",[Xd]:"fire-auth",[Zd]:"fire-auth-compat",[tm]:"fire-rtdb",[em]:"fire-rtdb-compat",[nm]:"fire-fn",[rm]:"fire-fn-compat",[sm]:"fire-iid",[im]:"fire-iid-compat",[om]:"fire-fcm",[am]:"fire-fcm-compat",[lm]:"fire-perf",[cm]:"fire-perf-compat",[um]:"fire-rc",[hm]:"fire-rc-compat",[fm]:"fire-gcs",[dm]:"fire-gcs-compat",[mm]:"fire-fst",[gm]:"fire-fst-compat","fire-js":"fire-js",[pm]:"fire-js-all"};/**
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
 */const as=new Map,Em=new Map,Ni=new Map;function $a(n,t){try{n.container.addComponent(t)}catch(e){rn.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function ls(n){const t=n.name;if(Ni.has(t))return rn.debug(`There were multiple attempts to register component ${t}.`),!1;Ni.set(t,n);for(const e of as.values())$a(e,n);for(const e of Em.values())$a(e,n);return!0}function vm(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Tm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xe=new _c("app","Firebase",Tm);/**
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
 */class wm{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw xe.create("app-deleted",{appName:this._name})}}/**
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
 */const Im=_m;function Tc(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ki,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw xe.create("bad-app-name",{appName:String(s)});if(e||(e=gc()),!e)throw xe.create("no-options");const i=as.get(s);if(i){if(os(e,i.options)&&os(r,i.config))return i;throw xe.create("duplicate-app",{appName:s})}const o=new Pd(s);for(const l of Ni.values())o.addComponent(l);const a=new wm(e,r,o);return as.set(s,a),a}function Am(n=ki){const t=as.get(n);if(!t&&n===ki&&gc())return Tc();if(!t)throw xe.create("no-app",{appName:n});return t}function vn(n,t,e){var r;let s=(r=ym[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),rn.warn(a.join(" "));return}ls(new ar(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Rm="firebase-heartbeat-database",Cm=1,lr="firebase-heartbeat-store";let di=null;function wc(){return di||(di=jd(Rm,Cm,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(lr)}catch(e){console.warn(e)}}}}).catch(n=>{throw xe.create("idb-open",{originalErrorMessage:n.message})})),di}async function Sm(n){try{const e=(await wc()).transaction(lr),r=await e.objectStore(lr).get(Ic(n));return await e.done,r}catch(t){if(t instanceof Fn)rn.warn(t.message);else{const e=xe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});rn.warn(e.message)}}}async function ja(n,t){try{const r=(await wc()).transaction(lr,"readwrite");await r.objectStore(lr).put(t,Ic(n)),await r.done}catch(e){if(e instanceof Fn)rn.warn(e.message);else{const r=xe.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});rn.warn(r.message)}}}function Ic(n){return`${n.name}!${n.options.appId}`}/**
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
 */const bm=1024,Pm=30*24*60*60*1e3;class Dm{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new km(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=qa();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Pm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qa(),{heartbeatsToSend:r,unsentEntries:s}=Vm(this._heartbeatsCache.heartbeats),i=ss(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function qa(){return new Date().toISOString().substring(0,10)}function Vm(n,t=bm){const e=[];let r=n.slice();for(const s of n){const i=e.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),za(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),za(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class km{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pc()?wd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Sm(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return ja(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return ja(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function za(n){return ss(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Nm(n){ls(new ar("platform-logger",t=>new Kd(t),"PRIVATE")),ls(new ar("heartbeat",t=>new Dm(t),"PRIVATE")),vn(Vi,Ua,n),vn(Vi,Ua,"esm2017"),vn("fire-js","")}Nm("");var Om=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},S,uo=uo||{},j=Om||self;function Cs(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function Ar(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function Mm(n){return Object.prototype.hasOwnProperty.call(n,mi)&&n[mi]||(n[mi]=++Lm)}var mi="closure_uid_"+(1e9*Math.random()>>>0),Lm=0;function Fm(n,t,e){return n.call.apply(n.bind,arguments)}function xm(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),n.apply(t,s)}}return function(){return n.apply(t,arguments)}}function zt(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?zt=Fm:zt=xm,zt.apply(null,arguments)}function $r(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function Nt(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function ze(){this.s=this.s,this.o=this.o}var Bm=0;ze.prototype.s=!1;ze.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Bm!=0)&&Mm(this)};ze.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ac=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function ho(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function Ka(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(Cs(r)){const s=n.length||0,i=r.length||0;n.length=s+i;for(let o=0;o<i;o++)n[s+o]=r[o]}else n.push(r)}}function Kt(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}Kt.prototype.h=function(){this.defaultPrevented=!0};var Um=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const e=()=>{};j.addEventListener("test",e,t),j.removeEventListener("test",e,t)}catch{}return n}();function cr(n){return/^[\s\xa0]*$/.test(n)}function Ss(){var n=j.navigator;return n&&(n=n.userAgent)?n:""}function ue(n){return Ss().indexOf(n)!=-1}function fo(n){return fo[" "](n),n}fo[" "]=function(){};function $m(n,t){var e=Ng;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var jm=ue("Opera"),Sn=ue("Trident")||ue("MSIE"),Rc=ue("Edge"),Oi=Rc||Sn,Cc=ue("Gecko")&&!(Ss().toLowerCase().indexOf("webkit")!=-1&&!ue("Edge"))&&!(ue("Trident")||ue("MSIE"))&&!ue("Edge"),qm=Ss().toLowerCase().indexOf("webkit")!=-1&&!ue("Edge");function Sc(){var n=j.document;return n?n.documentMode:void 0}var Mi;t:{var gi="",pi=function(){var n=Ss();if(Cc)return/rv:([^\);]+)(\)|;)/.exec(n);if(Rc)return/Edge\/([\d\.]+)/.exec(n);if(Sn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(qm)return/WebKit\/(\S+)/.exec(n);if(jm)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(pi&&(gi=pi?pi[1]:""),Sn){var _i=Sc();if(_i!=null&&_i>parseFloat(gi)){Mi=String(_i);break t}}Mi=gi}var Li;if(j.document&&Sn){var Ga=Sc();Li=Ga||parseInt(Mi,10)||void 0}else Li=void 0;var zm=Li;function ur(n,t){if(Kt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(Cc){t:{try{fo(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Km[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&ur.$.h.call(this)}}Nt(ur,Kt);var Km={2:"touch",3:"pen",4:"mouse"};ur.prototype.h=function(){ur.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Rr="closure_listenable_"+(1e6*Math.random()|0),Gm=0;function Hm(n,t,e,r,s){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=s,this.key=++Gm,this.fa=this.ia=!1}function bs(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function mo(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function Wm(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function bc(n){const t={};for(const e in n)t[e]=n[e];return t}const Ha="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pc(n,t){let e,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(e in r)n[e]=r[e];for(let i=0;i<Ha.length;i++)e=Ha[i],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function Ps(n){this.src=n,this.g={},this.h=0}Ps.prototype.add=function(n,t,e,r,s){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=xi(n,t,r,s);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new Hm(t,this.src,i,!!r,s),t.ia=e,n.push(t)),t};function Fi(n,t){var e=t.type;if(e in n.g){var r=n.g[e],s=Ac(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(bs(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function xi(n,t,e,r){for(var s=0;s<n.length;++s){var i=n[s];if(!i.fa&&i.listener==t&&i.capture==!!e&&i.la==r)return s}return-1}var go="closure_lm_"+(1e6*Math.random()|0),yi={};function Dc(n,t,e,r,s){if(r&&r.once)return kc(n,t,e,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Dc(n,t[i],e,r,s);return null}return e=yo(e),n&&n[Rr]?n.O(t,e,Ar(r)?!!r.capture:!!r,s):Vc(n,t,e,!1,r,s)}function Vc(n,t,e,r,s,i){if(!t)throw Error("Invalid event type");var o=Ar(s)?!!s.capture:!!s,a=_o(n);if(a||(n[go]=a=new Ps(n)),e=a.add(t,e,r,o,i),e.proxy)return e;if(r=Qm(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)Um||(s=o),s===void 0&&(s=!1),n.addEventListener(t.toString(),r,s);else if(n.attachEvent)n.attachEvent(Oc(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function Qm(){function n(e){return t.call(n.src,n.listener,e)}const t=Ym;return n}function kc(n,t,e,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)kc(n,t[i],e,r,s);return null}return e=yo(e),n&&n[Rr]?n.P(t,e,Ar(r)?!!r.capture:!!r,s):Vc(n,t,e,!0,r,s)}function Nc(n,t,e,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Nc(n,t[i],e,r,s);else r=Ar(r)?!!r.capture:!!r,e=yo(e),n&&n[Rr]?(n=n.i,t=String(t).toString(),t in n.g&&(i=n.g[t],e=xi(i,e,r,s),-1<e&&(bs(i[e]),Array.prototype.splice.call(i,e,1),i.length==0&&(delete n.g[t],n.h--)))):n&&(n=_o(n))&&(t=n.g[t.toString()],n=-1,t&&(n=xi(t,e,r,s)),(e=-1<n?t[n]:null)&&po(e))}function po(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[Rr])Fi(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(Oc(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=_o(t))?(Fi(e,n),e.h==0&&(e.src=null,t[go]=null)):bs(n)}}}function Oc(n){return n in yi?yi[n]:yi[n]="on"+n}function Ym(n,t){if(n.fa)n=!0;else{t=new ur(t,this);var e=n.listener,r=n.la||n.src;n.ia&&po(n),n=e.call(r,t)}return n}function _o(n){return n=n[go],n instanceof Ps?n:null}var Ei="__closure_events_fn_"+(1e9*Math.random()>>>0);function yo(n){return typeof n=="function"?n:(n[Ei]||(n[Ei]=function(t){return n.handleEvent(t)}),n[Ei])}function kt(){ze.call(this),this.i=new Ps(this),this.S=this,this.J=null}Nt(kt,ze);kt.prototype[Rr]=!0;kt.prototype.removeEventListener=function(n,t,e,r){Nc(this,n,t,e,r)};function Bt(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new Kt(t,n);else if(t instanceof Kt)t.target=t.target||n;else{var s=t;t=new Kt(r,n),Pc(t,s)}if(s=!0,e)for(var i=e.length-1;0<=i;i--){var o=t.g=e[i];s=jr(o,r,!0,t)&&s}if(o=t.g=n,s=jr(o,r,!0,t)&&s,s=jr(o,r,!1,t)&&s,e)for(i=0;i<e.length;i++)o=t.g=e[i],s=jr(o,r,!1,t)&&s}kt.prototype.N=function(){if(kt.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)bs(e[r]);delete n.g[t],n.h--}}this.J=null};kt.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};kt.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function jr(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==e){var a=o.listener,l=o.la||o.src;o.ia&&Fi(n.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Eo=j.JSON.stringify;class Jm{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Xm(){var n=vo;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class Zm{constructor(){this.h=this.g=null}add(t,e){const r=Mc.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var Mc=new Jm(()=>new tg,n=>n.reset());class tg{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function eg(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function ng(n){j.setTimeout(()=>{throw n},0)}let hr,fr=!1,vo=new Zm,Lc=()=>{const n=j.Promise.resolve(void 0);hr=()=>{n.then(rg)}};var rg=()=>{for(var n;n=Xm();){try{n.h.call(n.g)}catch(e){ng(e)}var t=Mc;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}fr=!1};function Ds(n,t){kt.call(this),this.h=n||1,this.g=t||j,this.j=zt(this.qb,this),this.l=Date.now()}Nt(Ds,kt);S=Ds.prototype;S.ga=!1;S.T=null;S.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Bt(this,"tick"),this.ga&&(To(this),this.start()))}};S.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function To(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}S.N=function(){Ds.$.N.call(this),To(this),delete this.g};function wo(n,t,e){if(typeof n=="function")e&&(n=zt(n,e));else if(n&&typeof n.handleEvent=="function")n=zt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:j.setTimeout(n,t||0)}function Fc(n){n.g=wo(()=>{n.g=null,n.i&&(n.i=!1,Fc(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class sg extends ze{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Fc(this)}N(){super.N(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dr(n){ze.call(this),this.h=n,this.g={}}Nt(dr,ze);var Wa=[];function xc(n,t,e,r){Array.isArray(e)||(e&&(Wa[0]=e.toString()),e=Wa);for(var s=0;s<e.length;s++){var i=Dc(t,e[s],r||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function Bc(n){mo(n.g,function(t,e){this.g.hasOwnProperty(e)&&po(t)},n),n.g={}}dr.prototype.N=function(){dr.$.N.call(this),Bc(this)};dr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Vs(){this.g=!0}Vs.prototype.Ea=function(){this.g=!1};function ig(n,t,e,r,s,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+e+`
`+o})}function og(n,t,e,r,s,i,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+e+`
`+i+" "+o})}function En(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+lg(n,e)+(r?" "+r:"")})}function ag(n,t){n.info(function(){return"TIMEOUT: "+t})}Vs.prototype.info=function(){};function lg(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Eo(e)}catch{return t}}var ln={},Qa=null;function ks(){return Qa=Qa||new kt}ln.Ta="serverreachability";function Uc(n){Kt.call(this,ln.Ta,n)}Nt(Uc,Kt);function mr(n){const t=ks();Bt(t,new Uc(t))}ln.STAT_EVENT="statevent";function $c(n,t){Kt.call(this,ln.STAT_EVENT,n),this.stat=t}Nt($c,Kt);function Qt(n){const t=ks();Bt(t,new $c(t,n))}ln.Ua="timingevent";function jc(n,t){Kt.call(this,ln.Ua,n),this.size=t}Nt(jc,Kt);function Cr(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){n()},t)}var Ns={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},qc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Io(){}Io.prototype.h=null;function Ya(n){return n.h||(n.h=n.i())}function zc(){}var Sr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ao(){Kt.call(this,"d")}Nt(Ao,Kt);function Ro(){Kt.call(this,"c")}Nt(Ro,Kt);var Bi;function Os(){}Nt(Os,Io);Os.prototype.g=function(){return new XMLHttpRequest};Os.prototype.i=function(){return{}};Bi=new Os;function br(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new dr(this),this.P=cg,n=Oi?125:void 0,this.V=new Ds(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Kc}function Kc(){this.i=null,this.g="",this.h=!1}var cg=45e3,Gc={},Ui={};S=br.prototype;S.setTimeout=function(n){this.P=n};function $i(n,t,e){n.L=1,n.A=Ls(be(t)),n.u=e,n.S=!0,Hc(n,null)}function Hc(n,t){n.G=Date.now(),Pr(n),n.B=be(n.A);var e=n.B,r=n.W;Array.isArray(r)||(r=[String(r)]),eu(e.i,"t",r),n.o=0,e=n.l.J,n.h=new Kc,n.g=wu(n.l,e?t:null,!n.u),0<n.O&&(n.M=new sg(zt(n.Pa,n,n.g),n.O)),xc(n.U,n.g,"readystatechange",n.nb),t=n.I?bc(n.I):{},n.u?(n.v||(n.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,t)):(n.v="GET",n.g.ha(n.B,n.v,null,t)),mr(),ig(n.j,n.v,n.B,n.m,n.W,n.u)}S.nb=function(n){n=n.target;const t=this.M;t&&fe(n)==3?t.l():this.Pa(n)};S.Pa=function(n){try{if(n==this.g)t:{const u=fe(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Oi||this.g&&(this.h.h||this.g.ja()||tl(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?mr(3):mr(2)),Ms(this);var e=this.g.da();this.ca=e;e:if(Wc(this)){var r=tl(this.g);n="";var s=r.length,i=fe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xe(this),er(this);var o="";break e}this.h.i=new j.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=n,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,og(this.j,this.v,this.B,this.m,this.W,u,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!cr(a)){var c=a;break e}}c=null}if(e=c)En(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ji(this,e);else{this.i=!1,this.s=3,Qt(12),Xe(this),er(this);break t}}this.S?(Qc(this,u,o),Oi&&this.i&&u==3&&(xc(this.U,this.V,"tick",this.mb),this.V.start())):(En(this.j,this.m,o,null),ji(this,o)),u==4&&Xe(this),this.i&&!this.J&&(u==4?yu(this.l,this):(this.i=!1,Pr(this)))}else Dg(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.s=3,Qt(12)):(this.s=0,Qt(13)),Xe(this),er(this)}}}catch{}finally{}};function Wc(n){return n.g?n.v=="GET"&&n.L!=2&&n.l.Ha:!1}function Qc(n,t,e){let r=!0,s;for(;!n.J&&n.o<e.length;)if(s=ug(n,e),s==Ui){t==4&&(n.s=4,Qt(14),r=!1),En(n.j,n.m,null,"[Incomplete Response]");break}else if(s==Gc){n.s=4,Qt(15),En(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else En(n.j,n.m,s,null),ji(n,s);Wc(n)&&n.o!=0&&(n.h.g=n.h.g.slice(n.o),n.o=0),t!=4||e.length!=0||n.h.h||(n.s=1,Qt(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),Vo(t),t.M=!0,Qt(11))):(En(n.j,n.m,e,"[Invalid Chunked Response]"),Xe(n),er(n))}S.mb=function(){if(this.g){var n=fe(this.g),t=this.g.ja();this.o<t.length&&(Ms(this),Qc(this,n,t),this.i&&n!=4&&Pr(this))}};function ug(n,t){var e=n.o,r=t.indexOf(`
`,e);return r==-1?Ui:(e=Number(t.substring(e,r)),isNaN(e)?Gc:(r+=1,r+e>t.length?Ui:(t=t.slice(r,r+e),n.o=r+e,t)))}S.cancel=function(){this.J=!0,Xe(this)};function Pr(n){n.Y=Date.now()+n.P,Yc(n,n.P)}function Yc(n,t){if(n.C!=null)throw Error("WatchDog timer not null");n.C=Cr(zt(n.lb,n),t)}function Ms(n){n.C&&(j.clearTimeout(n.C),n.C=null)}S.lb=function(){this.C=null;const n=Date.now();0<=n-this.Y?(ag(this.j,this.B),this.L!=2&&(mr(),Qt(17)),Xe(this),this.s=2,er(this)):Yc(this,this.Y-n)};function er(n){n.l.H==0||n.J||yu(n.l,n)}function Xe(n){Ms(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,To(n.V),Bc(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function ji(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||qi(e.i,n))){if(!n.K&&qi(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)hs(e),Us(e);else break t;Do(e),Qt(18)}}else e.Fa=s[1],0<e.Fa-e.V&&37500>s[2]&&e.G&&e.A==0&&!e.v&&(e.v=Cr(zt(e.ib,e),6e3));if(1>=su(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else Ze(e,11)}else if((n.K||e.g==n)&&hs(e),!cr(t))for(s=e.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(e.V=c[0],c=c[1],e.H==2)if(c[0]=="c"){e.K=c[1],e.pa=c[2];const u=c[3];u!=null&&(e.ra=u,e.l.info("VER="+e.ra));const h=c[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const f=n.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Co(i,i.h),i.h=null))}if(r.F){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,yt(r.I,r.F,_))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=Tu(r,r.J?r.pa:null,r.Y),o.K){iu(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Ms(a),Pr(a)),r.g=o}else pu(r);0<e.j.length&&$s(e)}else c[0]!="stop"&&c[0]!="close"||Ze(e,7);else e.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ze(e,7):Po(e):c[0]!="noop"&&e.h&&e.h.Aa(c),e.A=0)}}mr(4)}catch{}}function hg(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Cs(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function fg(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Cs(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function Jc(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(Cs(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=fg(n),r=hg(n),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],e&&e[i],n)}var Xc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dg(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),s=null;if(0<=r){var i=n[e].substring(0,r);s=n[e].substring(r+1)}else i=n[e];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function nn(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof nn){this.h=n.h,cs(this,n.j),this.s=n.s,this.g=n.g,us(this,n.m),this.l=n.l;var t=n.i,e=new gr;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),Ja(this,e),this.o=n.o}else n&&(t=String(n).match(Xc))?(this.h=!1,cs(this,t[1]||"",!0),this.s=Wn(t[2]||""),this.g=Wn(t[3]||"",!0),us(this,t[4]),this.l=Wn(t[5]||"",!0),Ja(this,t[6]||"",!0),this.o=Wn(t[7]||"")):(this.h=!1,this.i=new gr(null,this.h))}nn.prototype.toString=function(){var n=[],t=this.j;t&&n.push(Qn(t,Xa,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(Qn(t,Xa,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(Qn(e,e.charAt(0)=="/"?pg:gg,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",Qn(e,yg)),n.join("")};function be(n){return new nn(n)}function cs(n,t,e){n.j=e?Wn(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function us(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function Ja(n,t,e){t instanceof gr?(n.i=t,Eg(n.i,n.h)):(e||(t=Qn(t,_g)),n.i=new gr(t,n.h))}function yt(n,t,e){n.i.set(t,e)}function Ls(n){return yt(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Wn(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Qn(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,mg),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function mg(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Xa=/[#\/\?@]/g,gg=/[#\?:]/g,pg=/[#\?]/g,_g=/[#\?@]/g,yg=/#/g;function gr(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function Ke(n){n.g||(n.g=new Map,n.h=0,n.i&&dg(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}S=gr.prototype;S.add=function(n,t){Ke(this),this.i=null,n=xn(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function Zc(n,t){Ke(n),t=xn(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function tu(n,t){return Ke(n),t=xn(n,t),n.g.has(t)}S.forEach=function(n,t){Ke(this),this.g.forEach(function(e,r){e.forEach(function(s){n.call(t,s,r,this)},this)},this)};S.ta=function(){Ke(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const s=n[r];for(let i=0;i<s.length;i++)e.push(t[r])}return e};S.Z=function(n){Ke(this);let t=[];if(typeof n=="string")tu(this,n)&&(t=t.concat(this.g.get(xn(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};S.set=function(n,t){return Ke(this),this.i=null,n=xn(this,n),tu(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};S.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function eu(n,t,e){Zc(n,t),0<e.length&&(n.i=null,n.g.set(xn(n,t),ho(e)),n.h+=e.length)}S.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),n.push(s)}}return this.i=n.join("&")};function xn(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function Eg(n,t){t&&!n.j&&(Ke(n),n.i=null,n.g.forEach(function(e,r){var s=r.toLowerCase();r!=s&&(Zc(this,r),eu(this,s,e))},n)),n.j=t}var vg=class{constructor(n,t){this.g=n,this.map=t}};function nu(n){this.l=n||Tg,j.PerformanceNavigationTiming?(n=j.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(j.g&&j.g.Ka&&j.g.Ka()&&j.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Tg=10;function ru(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function su(n){return n.h?1:n.g?n.g.size:0}function qi(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function Co(n,t){n.g?n.g.add(t):n.h=t}function iu(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}nu.prototype.cancel=function(){if(this.i=ou(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function ou(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return ho(n.i)}var wg=class{stringify(n){return j.JSON.stringify(n,void 0)}parse(n){return j.JSON.parse(n,void 0)}};function Ig(){this.g=new wg}function Ag(n,t,e){const r=e||"";try{Jc(n,function(s,i){let o=s;Ar(s)&&(o=Eo(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function Rg(n,t){const e=new Vs;if(j.Image){const r=new Image;r.onload=$r(qr,e,r,"TestLoadImage: loaded",!0,t),r.onerror=$r(qr,e,r,"TestLoadImage: error",!1,t),r.onabort=$r(qr,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=$r(qr,e,r,"TestLoadImage: timeout",!1,t),j.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function qr(n,t,e,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function Fs(n){this.l=n.ec||null,this.j=n.ob||!1}Nt(Fs,Io);Fs.prototype.g=function(){return new xs(this.l,this.j)};Fs.prototype.i=function(n){return function(){return n}}({});function xs(n,t){kt.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=So,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Nt(xs,kt);var So=0;S=xs.prototype;S.open=function(n,t){if(this.readyState!=So)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,pr(this)};S.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||j).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};S.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dr(this)),this.readyState=So};S.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,pr(this)),this.g&&(this.readyState=3,pr(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;au(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function au(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}S.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?Dr(this):pr(this),this.readyState==3&&au(this)}};S.Za=function(n){this.g&&(this.response=this.responseText=n,Dr(this))};S.Ya=function(n){this.g&&(this.response=n,Dr(this))};S.ka=function(){this.g&&Dr(this)};function Dr(n){n.readyState=4,n.l=null,n.j=null,n.A=null,pr(n)}S.setRequestHeader=function(n,t){this.v.append(n,t)};S.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};S.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function pr(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(xs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Cg=j.JSON.parse;function Tt(n){kt.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=lu,this.L=this.M=!1}Nt(Tt,kt);var lu="",Sg=/^https?$/i,bg=["POST","PUT"];S=Tt.prototype;S.Oa=function(n){this.M=n};S.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Bi.g(),this.C=this.u?Ya(this.u):Ya(Bi),this.g.onreadystatechange=zt(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(i){Za(this,i);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)e.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())e.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(i=>i.toLowerCase()=="content-type"),s=j.FormData&&n instanceof j.FormData,!(0<=Ac(bg,t))||r||s||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of e)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{hu(this),0<this.B&&((this.L=Pg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=zt(this.ua,this)):this.A=wo(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){Za(this,i)}};function Pg(n){return Sn&&typeof n.timeout=="number"&&n.ontimeout!==void 0}S.ua=function(){typeof uo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Bt(this,"timeout"),this.abort(8))};function Za(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,cu(n),Bs(n)}function cu(n){n.F||(n.F=!0,Bt(n,"complete"),Bt(n,"error"))}S.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Bt(this,"complete"),Bt(this,"abort"),Bs(this))};S.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Bs(this,!0)),Tt.$.N.call(this)};S.La=function(){this.s||(this.G||this.v||this.l?uu(this):this.kb())};S.kb=function(){uu(this)};function uu(n){if(n.h&&typeof uo<"u"&&(!n.C[1]||fe(n)!=4||n.da()!=2)){if(n.v&&fe(n)==4)wo(n.La,0,n);else if(Bt(n,"readystatechange"),fe(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var s=String(n.I).match(Xc)[1]||null;!s&&j.self&&j.self.location&&(s=j.self.location.protocol.slice(0,-1)),r=!Sg.test(s?s.toLowerCase():"")}e=r}if(e)Bt(n,"complete"),Bt(n,"success");else{n.m=6;try{var i=2<fe(n)?n.g.statusText:""}catch{i=""}n.j=i+" ["+n.da()+"]",cu(n)}}finally{Bs(n)}}}}function Bs(n,t){if(n.g){hu(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||Bt(n,"ready");try{e.onreadystatechange=r}catch{}}}function hu(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(j.clearTimeout(n.A),n.A=null)}S.isActive=function(){return!!this.g};function fe(n){return n.g?n.g.readyState:0}S.da=function(){try{return 2<fe(this)?this.g.status:-1}catch{return-1}};S.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};S.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),Cg(t)}};function tl(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case lu:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Dg(n){const t={};n=(n.g&&2<=fe(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(cr(n[r]))continue;var e=eg(n[r]);const s=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const i=t[s]||[];t[s]=i,i.push(e)}Wm(t,function(r){return r.join(", ")})}S.Ia=function(){return this.m};S.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function fu(n){let t="";return mo(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function bo(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=fu(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):yt(n,t,e))}function zn(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function du(n){this.Ga=0,this.j=[],this.l=new Vs,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=zn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=zn("baseRetryDelayMs",5e3,n),this.hb=zn("retryDelaySeedMs",1e4,n),this.eb=zn("forwardChannelMaxRetries",2,n),this.xa=zn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new nu(n&&n.concurrentRequestLimit),this.Ja=new Ig,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}S=du.prototype;S.ra=8;S.H=1;function Po(n){if(mu(n),n.H==3){var t=n.W++,e=be(n.I);if(yt(e,"SID",n.K),yt(e,"RID",t),yt(e,"TYPE","terminate"),Vr(n,e),t=new br(n,n.l,t),t.L=2,t.A=Ls(be(e)),e=!1,j.navigator&&j.navigator.sendBeacon)try{e=j.navigator.sendBeacon(t.A.toString(),"")}catch{}!e&&j.Image&&(new Image().src=t.A,e=!0),e||(t.g=wu(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Pr(t)}vu(n)}function Us(n){n.g&&(Vo(n),n.g.cancel(),n.g=null)}function mu(n){Us(n),n.u&&(j.clearTimeout(n.u),n.u=null),hs(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&j.clearTimeout(n.m),n.m=null)}function $s(n){if(!ru(n.i)&&!n.m){n.m=!0;var t=n.Na;hr||Lc(),fr||(hr(),fr=!0),vo.add(t,n),n.C=0}}function Vg(n,t){return su(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Cr(zt(n.Na,n,t),Eu(n,n.C)),n.C++,!0)}S.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const s=new br(this,this.l,n);let i=this.s;if(this.U&&(i?(i=bc(i),Pc(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=gu(this,s,t),e=be(this.I),yt(e,"RID",n),yt(e,"CVER",22),this.F&&yt(e,"X-HTTP-Session-Id",this.F),Vr(this,e),i&&(this.O?t="headers="+encodeURIComponent(String(fu(i)))+"&"+t:this.o&&bo(e,this.o,i)),Co(this.i,s),this.bb&&yt(e,"TYPE","init"),this.P?(yt(e,"$req",t),yt(e,"SID","null"),s.aa=!0,$i(s,e,null)):$i(s,e,t),this.H=2}}else this.H==3&&(n?el(this,n):this.j.length==0||ru(this.i)||el(this))};function el(n,t){var e;t?e=t.m:e=n.W++;const r=be(n.I);yt(r,"SID",n.K),yt(r,"RID",e),yt(r,"AID",n.V),Vr(n,r),n.o&&n.s&&bo(r,n.o,n.s),e=new br(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=gu(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Co(n.i,e),$i(e,r,t)}function Vr(n,t){n.na&&mo(n.na,function(e,r){yt(t,r,e)}),n.h&&Jc({},function(e,r){yt(t,r,e)})}function gu(n,t,e){e=Math.min(n.j.length,e);var r=n.h?zt(n.h.Va,n.h,n):null;t:{var s=n.j;let i=-1;for(;;){const o=["count="+e];i==-1?0<e?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<e;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{Ag(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function pu(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;hr||Lc(),fr||(hr(),fr=!0),vo.add(t,n),n.A=0}}function Do(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Cr(zt(n.Ma,n),Eu(n,n.A)),n.A++,!0)}S.Ma=function(){if(this.u=null,_u(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Cr(zt(this.jb,this),n)}};S.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Qt(10),Us(this),_u(this))};function Vo(n){n.B!=null&&(j.clearTimeout(n.B),n.B=null)}function _u(n){n.g=new br(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=be(n.wa);yt(t,"RID","rpc"),yt(t,"SID",n.K),yt(t,"AID",n.V),yt(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&yt(t,"TO",n.qa),yt(t,"TYPE","xmlhttp"),Vr(n,t),n.o&&n.s&&bo(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.A=Ls(be(t)),e.u=null,e.S=!0,Hc(e,n)}S.ib=function(){this.v!=null&&(this.v=null,Us(this),Do(this),Qt(19))};function hs(n){n.v!=null&&(j.clearTimeout(n.v),n.v=null)}function yu(n,t){var e=null;if(n.g==t){hs(n),Vo(n),n.g=null;var r=2}else if(qi(n.i,t))e=t.F,iu(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.u?t.u.length:0,t=Date.now()-t.G;var s=n.C;r=ks(),Bt(r,new jc(r,e)),$s(n)}else pu(n);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&Vg(n,t)||r==2&&Do(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),s){case 1:Ze(n,5);break;case 4:Ze(n,10);break;case 3:Ze(n,6);break;default:Ze(n,2)}}}function Eu(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function Ze(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=zt(n.pb,n);e||(e=new nn("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||cs(e,"https"),Ls(e)),Rg(e.toString(),r)}else Qt(2);n.H=0,n.h&&n.h.za(t),vu(n),mu(n)}S.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Qt(2)):(this.l.info("Failed to ping google.com"),Qt(1))};function vu(n){if(n.H=0,n.ma=[],n.h){const t=ou(n.i);(t.length!=0||n.j.length!=0)&&(Ka(n.ma,t),Ka(n.ma,n.j),n.i.i.length=0,ho(n.j),n.j.length=0),n.h.ya()}}function Tu(n,t,e){var r=e instanceof nn?be(e):new nn(e);if(r.g!="")t&&(r.g=t+"."+r.g),us(r,r.m);else{var s=j.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new nn(null);r&&cs(i,r),t&&(i.g=t),s&&us(i,s),e&&(i.l=e),r=i}return e=n.F,t=n.Da,e&&t&&yt(r,e,t),yt(r,"VER",n.ra),Vr(n,r),r}function wu(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n.Ha&&!n.va?new Tt(new Fs({ob:e})):new Tt(n.va),t.Oa(n.J),t}S.isActive=function(){return!!this.h&&this.h.isActive(this)};function Iu(){}S=Iu.prototype;S.Ba=function(){};S.Aa=function(){};S.za=function(){};S.ya=function(){};S.isActive=function(){return!0};S.Va=function(){};function fs(){if(Sn&&!(10<=Number(zm)))throw Error("Environmental error: no available transport.")}fs.prototype.g=function(n,t){return new Zt(n,t)};function Zt(n,t){kt.call(this),this.g=new du(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!cr(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!cr(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new Bn(this)}Nt(Zt,kt);Zt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;Qt(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=Tu(n,null,n.Y),$s(n)};Zt.prototype.close=function(){Po(this.g)};Zt.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=Eo(n),n=e);t.j.push(new vg(t.fb++,n)),t.H==3&&$s(t)};Zt.prototype.N=function(){this.g.h=null,delete this.j,Po(this.g),delete this.g,Zt.$.N.call(this)};function Au(n){Ao.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}Nt(Au,Ao);function Ru(){Ro.call(this),this.status=1}Nt(Ru,Ro);function Bn(n){this.g=n}Nt(Bn,Iu);Bn.prototype.Ba=function(){Bt(this.g,"a")};Bn.prototype.Aa=function(n){Bt(this.g,new Au(n))};Bn.prototype.za=function(n){Bt(this.g,new Ru)};Bn.prototype.ya=function(){Bt(this.g,"b")};function kg(){this.blockSize=-1}function ce(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Nt(ce,kg);ce.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function vi(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(s=0;16>s;++s)r[s]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],s=n.g[2];var i=n.g[3],o=t+(i^e&(s^i))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[3]+3250441966&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(i^e&(s^i))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[7]+4249261313&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(i^e&(s^i))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[11]+2304563134&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(i^e&(s^i))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[15]+1236535329&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(e^s))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[0]+3921069994&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(e^s))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[4]+3889429448&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(e^s))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[8]+1163531501&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(e^s))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[12]+2368359562&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(e^s^i)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[14]+4259657740&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^i)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[10]+3200236656&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^i)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[6]+76029189&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^i)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[2]+3299628645&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(s^(e|~i))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[5]+4237533241&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~i))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[1]+2240044497&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~i))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[13]+1309151649&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~i))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+s&4294967295,n.g[3]=n.g[3]+i&4294967295}ce.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=e;)vi(this,n,i),i+=this.blockSize;if(typeof n=="string"){for(;i<t;)if(r[s++]=n.charCodeAt(i++),s==this.blockSize){vi(this,r),s=0;break}}else for(;i<t;)if(r[s++]=n[i++],s==this.blockSize){vi(this,r),s=0;break}}this.h=s,this.i+=t};ce.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function ht(n,t){this.h=t;for(var e=[],r=!0,s=n.length-1;0<=s;s--){var i=n[s]|0;r&&i==t||(e[s]=i,r=!1)}this.g=e}var Ng={};function ko(n){return-128<=n&&128>n?$m(n,function(t){return new ht([t|0],0>t?-1:0)}):new ht([n|0],0>n?-1:0)}function de(n){if(isNaN(n)||!isFinite(n))return Tn;if(0>n)return Ft(de(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=zi;return new ht(t,0)}function Cu(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return Ft(Cu(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=de(Math.pow(t,8)),r=Tn,s=0;s<n.length;s+=8){var i=Math.min(8,n.length-s),o=parseInt(n.substring(s,s+i),t);8>i?(i=de(Math.pow(t,i)),r=r.R(i).add(de(o))):(r=r.R(e),r=r.add(de(o)))}return r}var zi=4294967296,Tn=ko(0),Ki=ko(1),nl=ko(16777216);S=ht.prototype;S.ea=function(){if(ee(this))return-Ft(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:zi+r)*t,t*=zi}return n};S.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Ie(this))return"0";if(ee(this))return"-"+Ft(this).toString(n);for(var t=de(Math.pow(n,6)),e=this,r="";;){var s=ms(e,t).g;e=ds(e,s.R(t));var i=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=s,Ie(e))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};S.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Ie(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function ee(n){return n.h==-1}S.X=function(n){return n=ds(this,n),ee(n)?-1:Ie(n)?0:1};function Ft(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new ht(e,~n.h).add(Ki)}S.abs=function(){return ee(this)?Ft(this):this};S.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(n.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(n.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,e[s]=o<<16|i}return new ht(e,e[e.length-1]&-2147483648?-1:0)};function ds(n,t){return n.add(Ft(t))}S.R=function(n){if(Ie(this)||Ie(n))return Tn;if(ee(this))return ee(n)?Ft(this).R(Ft(n)):Ft(Ft(this).R(n));if(ee(n))return Ft(this.R(Ft(n)));if(0>this.X(nl)&&0>n.X(nl))return de(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<n.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(s)>>>16,l=n.D(s)&65535;e[2*r+2*s]+=o*l,zr(e,2*r+2*s),e[2*r+2*s+1]+=i*l,zr(e,2*r+2*s+1),e[2*r+2*s+1]+=o*a,zr(e,2*r+2*s+1),e[2*r+2*s+2]+=i*a,zr(e,2*r+2*s+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new ht(e,0)};function zr(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function Kn(n,t){this.g=n,this.h=t}function ms(n,t){if(Ie(t))throw Error("division by zero");if(Ie(n))return new Kn(Tn,Tn);if(ee(n))return t=ms(Ft(n),t),new Kn(Ft(t.g),Ft(t.h));if(ee(t))return t=ms(n,Ft(t)),new Kn(Ft(t.g),t.h);if(30<n.g.length){if(ee(n)||ee(t))throw Error("slowDivide_ only works with positive integers.");for(var e=Ki,r=t;0>=r.X(n);)e=rl(e),r=rl(r);var s=gn(e,1),i=gn(r,1);for(r=gn(r,2),e=gn(e,2);!Ie(r);){var o=i.add(r);0>=o.X(n)&&(s=s.add(e),i=o),r=gn(r,1),e=gn(e,1)}return t=ds(n,s.R(t)),new Kn(s,t)}for(s=Tn;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=de(e),o=i.R(t);ee(o)||0<o.X(n);)e-=r,i=de(e),o=i.R(t);Ie(i)&&(i=Ki),s=s.add(i),n=ds(n,o)}return new Kn(s,n)}S.gb=function(n){return ms(this,n).h};S.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new ht(e,this.h&n.h)};S.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new ht(e,this.h|n.h)};S.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new ht(e,this.h^n.h)};function rl(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new ht(e,n.h)}function gn(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,s=[],i=0;i<r;i++)s[i]=0<t?n.D(i+e)>>>t|n.D(i+e+1)<<32-t:n.D(i+e);return new ht(s,n.h)}fs.prototype.createWebChannel=fs.prototype.g;Zt.prototype.send=Zt.prototype.u;Zt.prototype.open=Zt.prototype.m;Zt.prototype.close=Zt.prototype.close;Ns.NO_ERROR=0;Ns.TIMEOUT=8;Ns.HTTP_ERROR=6;qc.COMPLETE="complete";zc.EventType=Sr;Sr.OPEN="a";Sr.CLOSE="b";Sr.ERROR="c";Sr.MESSAGE="d";kt.prototype.listen=kt.prototype.O;Tt.prototype.listenOnce=Tt.prototype.P;Tt.prototype.getLastError=Tt.prototype.Sa;Tt.prototype.getLastErrorCode=Tt.prototype.Ia;Tt.prototype.getStatus=Tt.prototype.da;Tt.prototype.getResponseJson=Tt.prototype.Wa;Tt.prototype.getResponseText=Tt.prototype.ja;Tt.prototype.send=Tt.prototype.ha;Tt.prototype.setWithCredentials=Tt.prototype.Oa;ce.prototype.digest=ce.prototype.l;ce.prototype.reset=ce.prototype.reset;ce.prototype.update=ce.prototype.j;ht.prototype.add=ht.prototype.add;ht.prototype.multiply=ht.prototype.R;ht.prototype.modulo=ht.prototype.gb;ht.prototype.compare=ht.prototype.X;ht.prototype.toNumber=ht.prototype.ea;ht.prototype.toString=ht.prototype.toString;ht.prototype.getBits=ht.prototype.D;ht.fromNumber=de;ht.fromString=Cu;var Og=function(){return new fs},Mg=function(){return ks()},Ti=Ns,Lg=qc,Fg=ln,sl={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Kr=zc,xg=Tt,Bg=ce,wn=ht;const il="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}jt.UNAUTHENTICATED=new jt(null),jt.GOOGLE_CREDENTIALS=new jt("google-credentials-uid"),jt.FIRST_PARTY=new jt("first-party-uid"),jt.MOCK_USER=new jt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Un="10.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new yc("@firebase/firestore");function Gn(){return sn.logLevel}function C(n,...t){if(sn.logLevel<=ot.DEBUG){const e=t.map(No);sn.debug(`Firestore (${Un}): ${n}`,...e)}}function ye(n,...t){if(sn.logLevel<=ot.ERROR){const e=t.map(No);sn.error(`Firestore (${Un}): ${n}`,...e)}}function bn(n,...t){if(sn.logLevel<=ot.WARN){const e=t.map(No);sn.warn(`Firestore (${Un}): ${n}`,...e)}}function No(n){if(typeof n=="string")return n;try{/**
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
 */function $(n="Unexpected state"){const t=`FIRESTORE (${Un}) INTERNAL ASSERTION FAILED: `+n;throw ye(t),new Error(t)}function gt(n,t){n||$()}function K(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Fn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ug{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(jt.UNAUTHENTICATED))}shutdown(){}}class $g{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class jg{constructor(t){this.t=t,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=l=>this.i!==r?(r=this.i,e(l)):Promise.resolve();let i=new Re;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Re,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Re)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(gt(typeof r.accessToken=="string"),new Su(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return gt(t===null||typeof t=="string"),new jt(t)}}class qg{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class zg{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new qg(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(jt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Kg{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Gg{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=i=>{i.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,C("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(gt(typeof e.token=="string"),this.R=e.token,new Kg(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Hg(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Hg(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<e&&(r+=t.charAt(s[i]%t.length))}return r}}function lt(n,t){return n<t?-1:n>t?1:0}function Pn(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new O(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Pt.fromMillis(Date.now())}static fromDate(t){return Pt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new Pt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?lt(this.nanoseconds,t.nanoseconds):lt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t){this.timestamp=t}static fromTimestamp(t){return new q(t)}static min(){return new q(new Pt(0,0))}static max(){return new q(new Pt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e,r){e===void 0?e=0:e>t.length&&$(),r===void 0?r=t.length-e:r>t.length-e&&$(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return _r.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof _r?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const i=t.get(s),o=e.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class vt extends _r{construct(t,e,r){return new vt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new vt(e)}static emptyPath(){return new vt([])}}const Wg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends _r{construct(t,e,r){return new xt(t,e,r)}static isValidIdentifier(t){return Wg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xt(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const i=()=>{if(r.length===0)throw new O(T.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new O(T.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new O(T.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new xt(e)}static emptyPath(){return new xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(vt.fromString(t))}static fromName(t){return new x(vt.fromString(t).popFirst(5))}static empty(){return new x(vt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&vt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return vt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new vt(t.slice()))}}function Qg(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=q.fromTimestamp(r===1e9?new Pt(e+1,0):new Pt(e,r));return new $e(s,x.empty(),t)}function Yg(n){return new $e(n.readTime,n.key,-1)}class $e{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new $e(q.min(),x.empty(),-1)}static max(){return new $e(q.max(),x.empty(),-1)}}function Jg(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(n.documentKey,t.documentKey),e!==0?e:lt(n.largestBatchId,t.largestBatchId))}/**
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
 */const Xg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kr(n){if(n.code!==T.FAILED_PRECONDITION||n.message!==Xg)throw n;C("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new E((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof E?e:E.resolve(e)}catch(e){return E.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):E.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):E.reject(e)}static resolve(t){return new E((e,r)=>{e(t)})}static reject(t){return new E((e,r)=>{r(t)})}static waitFor(t){return new E((e,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&e()},l=>r(l))}),o=!0,i===s&&e()})}static or(t){let e=E.resolve(!1);for(const r of t)e=e.next(s=>s?E.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,i)=>{r.push(e.call(this,s,i))}),this.waitFor(r)}static mapArray(t,e){return new E((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;e(t[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(t,e){return new E((r,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new Re,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new nr(t,e.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Mo(r.target.error);this.V.reject(new nr(t,s))}}static open(t,e,r,s){try{return new Oo(e,t.transaction(s,r))}catch(i){throw new nr(e,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(C("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new ep(e)}}class tn{constructor(t,e,r){this.name=t,this.version=e,this.p=r,tn.S(is())===12.2&&ye("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return C("SimpleDb","Removing database:",t),Je(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!pc())return!1;if(tn.C())return!0;const t=is(),e=tn.S(t),r=0<e&&e<10,s=tn.v(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||i)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const e=t.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(C("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;e(o)},s.onblocked=()=>{r(new nr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new O(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new O(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new nr(t,o))},s.onupgradeneeded=i=>{C("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{C("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}B(t){this.L=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,r,s){const i=e==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=Oo.open(this.db,t,i?"readonly":"readwrite",r),l=s(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),E.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(C("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class tp{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Je(this.k.delete())}}class nr extends O{constructor(t,e){super(T.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Nr(n){return n.name==="IndexedDbTransactionError"}class ep{constructor(t){this.store=t}put(t,e){let r;return e!==void 0?(C("SimpleDb","PUT",this.store.name,t,e),r=this.store.put(e,t)):(C("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Je(r)}add(t){return C("SimpleDb","ADD",this.store.name,t,t),Je(this.store.add(t))}get(t){return Je(this.store.get(t)).next(e=>(e===void 0&&(e=null),C("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return C("SimpleDb","DELETE",this.store.name,t),Je(this.store.delete(t))}count(){return C("SimpleDb","COUNT",this.store.name),Je(this.store.count())}W(t,e){const r=this.options(t,e),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new E((o,a)=>{i.onerror=l=>{a(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,l)=>{o.push(l)}).next(()=>o)}}j(t,e){const r=this.store.getAll(t,e===null?void 0:e);return new E((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(t,e){C("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,e);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(t,e){let r;e?r=t:(r={},e=t);const s=this.cursor(r);return this.G(s,e)}Z(t){const e=this.cursor({});return new E((r,s)=>{e.onerror=i=>{const o=Mo(i.target.error);s(o)},e.onsuccess=i=>{const o=i.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,e){const r=[];return new E((s,i)=>{t.onerror=o=>{i(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const l=new tp(a),c=e(a.primaryKey,a.value,l);if(c instanceof E){const u=c.catch(h=>(l.done(),E.reject(h)));r.push(u)}l.isDone?s():l.$===null?a.continue():a.continue(l.$)}}).next(()=>E.waitFor(r))}options(t,e){let r;return t!==void 0&&(typeof t=="string"?r=t:e=t),{index:r,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,e):r.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Je(n){return new E((t,e)=>{n.onsuccess=r=>{const s=r.target.result;t(s)},n.onerror=r=>{const s=Mo(r.target.error);e(s)}})}let ol=!1;function Mo(n){const t=tn.S(is());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(e)>=0){const r=new O("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ol||(ol=!0,setTimeout(()=>{throw r},0)),r}}return n}/**
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
 */class Lo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.se(r),this.oe=r=>e.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}Lo._e=-1;function js(n){return n==null}function gs(n){return n===0&&1/n==-1/0}function np(n){return typeof n=="number"&&Number.isInteger(n)&&!gs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function cn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Pu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,e){this.comparator=t,this.root=e||Lt.EMPTY}insert(t,e){return new Et(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(t){return new Et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Gr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Gr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Gr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Gr(this.root,t,this.comparator,!0)}}class Gr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?r(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Lt{constructor(t,e,r,s,i){this.key=t,this.value=e,this.color=r??Lt.RED,this.left=s??Lt.EMPTY,this.right=i??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,i){return new Lt(t??this.key,e??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,r),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const t=this.left.check();if(t!==this.right.check())throw $();return t+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,r,s,i){return this}insert(t,e,r){return new Lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t){this.comparator=t,this.data=new Et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ll(this.data.getIterator())}getIteratorFrom(t){return new ll(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Ut)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ut(this.comparator);return e.data=t,e}}class ll{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Xt{constructor(t){this.fields=t,t.sort(xt.comparator)}static empty(){return new Xt([])}unionWith(t){let e=new Ut(xt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Xt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Pn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Du extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Gt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Du("Invalid base64 string: "+i):i}}(t);return new Gt(e)}static fromUint8Array(t){const e=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new Gt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return lt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Gt.EMPTY_BYTE_STRING=new Gt("");const rp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function je(n){if(gt(!!n),typeof n=="string"){let t=0;const e=rp.exec(n);if(gt(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ct(n.seconds),nanos:Ct(n.nanos)}}function Ct(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function on(n){return typeof n=="string"?Gt.fromBase64String(n):Gt.fromUint8Array(n)}/**
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
 */function Fo(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function xo(n){const t=n.mapValue.fields.__previous_value__;return Fo(t)?xo(t):t}function yr(n){const t=je(n.mapValue.fields.__local_write_time__.timestampValue);return new Pt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(t,e,r,s,i,o,a,l,c){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Er{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Er("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Er&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Hr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function an(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Fo(n)?4:ip(n)?9007199254740991:10:$()}function Ee(n,t){if(n===t)return!0;const e=an(n);if(e!==an(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return yr(n).isEqual(yr(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=je(s.timestampValue),a=je(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,i){return on(s.bytesValue).isEqual(on(i.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,i){return Ct(s.geoPointValue.latitude)===Ct(i.geoPointValue.latitude)&&Ct(s.geoPointValue.longitude)===Ct(i.geoPointValue.longitude)}(n,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ct(s.integerValue)===Ct(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ct(s.doubleValue),a=Ct(i.doubleValue);return o===a?gs(o)===gs(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return Pn(n.arrayValue.values||[],t.arrayValue.values||[],Ee);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(al(o)!==al(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ee(o[l],a[l])))return!1;return!0}(n,t);default:return $()}}function vr(n,t){return(n.values||[]).find(e=>Ee(e,t))!==void 0}function Dn(n,t){if(n===t)return 0;const e=an(n),r=an(t);if(e!==r)return lt(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return lt(n.booleanValue,t.booleanValue);case 2:return function(i,o){const a=Ct(i.integerValue||i.doubleValue),l=Ct(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,t);case 3:return cl(n.timestampValue,t.timestampValue);case 4:return cl(yr(n),yr(t));case 5:return lt(n.stringValue,t.stringValue);case 6:return function(i,o){const a=on(i),l=on(o);return a.compareTo(l)}(n.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=lt(a[c],l[c]);if(u!==0)return u}return lt(a.length,l.length)}(n.referenceValue,t.referenceValue);case 8:return function(i,o){const a=lt(Ct(i.latitude),Ct(o.latitude));return a!==0?a:lt(Ct(i.longitude),Ct(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Dn(a[c],l[c]);if(u)return u}return lt(a.length,l.length)}(n.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===Hr.mapValue&&o===Hr.mapValue)return 0;if(i===Hr.mapValue)return 1;if(o===Hr.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=lt(l[h],u[h]);if(d!==0)return d;const f=Dn(a[l[h]],c[u[h]]);if(f!==0)return f}return lt(l.length,u.length)}(n.mapValue,t.mapValue);default:throw $()}}function cl(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return lt(n,t);const e=je(n),r=je(t),s=lt(e.seconds,r.seconds);return s!==0?s:lt(e.nanos,r.nanos)}function Vn(n){return Gi(n)}function Gi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=je(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return on(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return x.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const i of e.values||[])s?s=!1:r+=",",r+=Gi(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Gi(e.fields[o])}`;return s+"}"}(n.mapValue):$()}function Hi(n){return!!n&&"integerValue"in n}function Bo(n){return!!n&&"arrayValue"in n}function ul(n){return!!n&&"nullValue"in n}function hl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Xr(n){return!!n&&"mapValue"in n}function rr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return cn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=rr(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=rr(n.arrayValue.values[e]);return t}return Object.assign({},n)}function ip(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t){this.value=t}static empty(){return new Yt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Xr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=rr(e)}setAll(t){let e=xt.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const l=this.getFieldsMap(e);this.applyChanges(l,r,s),r={},s=[],e=a.popLast()}o?r[a.lastSegment()]=rr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,r,s)}delete(t){const e=this.field(t.popLast());Xr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ee(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Xr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){cn(e,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new Yt(rr(this.value))}}function Vu(n){const t=[];return cn(n.fields,(e,r)=>{const s=new xt([e]);if(Xr(r)){const i=Vu(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new Xt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t,e,r,s,i,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new qt(t,0,q.min(),q.min(),q.min(),Yt.empty(),0)}static newFoundDocument(t,e,r,s){return new qt(t,1,e,q.min(),r,s,0)}static newNoDocument(t,e){return new qt(t,2,e,q.min(),q.min(),Yt.empty(),0)}static newUnknownDocument(t,e){return new qt(t,3,e,q.min(),q.min(),Yt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Yt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof qt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ps{constructor(t,e){this.position=t,this.inclusive=e}}function fl(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const i=t[s],o=n.position[s];if(i.field.isKeyField()?r=x.comparator(x.fromName(o.referenceValue),e.key):r=Dn(o,e.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function dl(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ee(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class _s{constructor(t,e="asc"){this.field=t,this.dir=e}}function op(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class ku{}class bt extends ku{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new lp(t,e,r):e==="array-contains"?new hp(t,r):e==="in"?new fp(t,r):e==="not-in"?new dp(t,r):e==="array-contains-any"?new mp(t,r):new bt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new cp(t,r):new up(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Dn(e,this.value)):e!==null&&an(this.value)===an(e)&&this.matchesComparison(Dn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ve extends ku{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new ve(t,e)}matches(t){return Nu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Nu(n){return n.op==="and"}function Ou(n){return ap(n)&&Nu(n)}function ap(n){for(const t of n.filters)if(t instanceof ve)return!1;return!0}function Wi(n){if(n instanceof bt)return n.field.canonicalString()+n.op.toString()+Vn(n.value);if(Ou(n))return n.filters.map(t=>Wi(t)).join(",");{const t=n.filters.map(e=>Wi(e)).join(",");return`${n.op}(${t})`}}function Mu(n,t){return n instanceof bt?function(r,s){return s instanceof bt&&r.op===s.op&&r.field.isEqual(s.field)&&Ee(r.value,s.value)}(n,t):n instanceof ve?function(r,s){return s instanceof ve&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Mu(o,s.filters[a]),!0):!1}(n,t):void $()}function Lu(n){return n instanceof bt?function(e){return`${e.field.canonicalString()} ${e.op} ${Vn(e.value)}`}(n):n instanceof ve?function(e){return e.op.toString()+" {"+e.getFilters().map(Lu).join(" ,")+"}"}(n):"Filter"}class lp extends bt{constructor(t,e,r){super(t,e,r),this.key=x.fromName(r.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class cp extends bt{constructor(t,e){super(t,"in",e),this.keys=Fu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class up extends bt{constructor(t,e){super(t,"not-in",e),this.keys=Fu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Fu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>x.fromName(r.referenceValue))}class hp extends bt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Bo(e)&&vr(e.arrayValue,this.value)}}class fp extends bt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&vr(this.value.arrayValue,e)}}class dp extends bt{constructor(t,e){super(t,"not-in",e)}matches(t){if(vr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!vr(this.value.arrayValue,e)}}class mp extends bt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Bo(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>vr(this.value.arrayValue,r))}}/**
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
 */class gp{constructor(t,e=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function ml(n,t=null,e=[],r=[],s=null,i=null,o=null){return new gp(n,t,e,r,s,i,o)}function Uo(n){const t=K(n);if(t.ce===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Wi(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),js(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Vn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Vn(r)).join(",")),t.ce=e}return t.ce}function $o(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!op(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Mu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!dl(n.startAt,t.startAt)&&dl(n.endAt,t.endAt)}function Qi(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(t,e=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function pp(n,t,e,r,s,i,o,a){return new qs(n,t,e,r,s,i,o,a)}function zs(n){return new qs(n)}function gl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function _p(n){return n.collectionGroup!==null}function sr(n){const t=K(n);if(t.le===null){t.le=[];const e=new Set;for(const i of t.explicitOrderBy)t.le.push(i),e.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ut(xt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.le.push(new _s(i,r))}),e.has(xt.keyField().canonicalString())||t.le.push(new _s(xt.keyField(),r))}return t.le}function me(n){const t=K(n);return t.he||(t.he=yp(t,sr(n))),t.he}function yp(n,t){if(n.limitType==="F")return ml(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new _s(s.field,i)});const e=n.endAt?new ps(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ps(n.startAt.position,n.startAt.inclusive):null;return ml(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Yi(n,t,e){return new qs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ks(n,t){return $o(me(n),me(t))&&n.limitType===t.limitType}function xu(n){return`${Uo(me(n))}|lt:${n.limitType}`}function pn(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Lu(s)).join(", ")}]`),js(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Vn(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Vn(s)).join(",")),`Target(${r})`}(me(n))}; limitType=${n.limitType})`}function Gs(n,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):x.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,t)&&function(r,s){for(const i of sr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=fl(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,sr(r),s)||r.endAt&&!function(o,a,l){const c=fl(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,sr(r),s))}(n,t)}function Ep(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Bu(n){return(t,e)=>{let r=!1;for(const s of sr(n)){const i=vp(s,t,e);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function vp(n,t,e){const r=n.field.isKeyField()?x.comparator(t.key,e.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?Dn(l,c):$()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){cn(this.inner,(e,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Pu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp=new Et(x.comparator);function Pe(){return Tp}const Uu=new Et(x.comparator);function Yn(...n){let t=Uu;for(const e of n)t=t.insert(e.key,e);return t}function $u(n){let t=Uu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function en(){return ir()}function ju(){return ir()}function ir(){return new $n(n=>n.toString(),(n,t)=>n.isEqual(t))}const wp=new Et(x.comparator),Ip=new Ut(x.comparator);function rt(...n){let t=Ip;for(const e of n)t=t.add(e);return t}const Ap=new Ut(lt);function Rp(){return Ap}/**
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
 */function qu(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gs(t)?"-0":t}}function zu(n){return{integerValue:""+n}}function Cp(n,t){return np(t)?zu(t):qu(n,t)}/**
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
 */class Hs{constructor(){this._=void 0}}function Sp(n,t,e){return n instanceof ys?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Fo(i)&&(i=xo(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(e,t):n instanceof kn?Gu(n,t):n instanceof Tr?Hu(n,t):function(s,i){const o=Ku(s,i),a=pl(o)+pl(s.Ie);return Hi(o)&&Hi(s.Ie)?zu(a):qu(s.serializer,a)}(n,t)}function bp(n,t,e){return n instanceof kn?Gu(n,t):n instanceof Tr?Hu(n,t):e}function Ku(n,t){return n instanceof Es?function(r){return Hi(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class ys extends Hs{}class kn extends Hs{constructor(t){super(),this.elements=t}}function Gu(n,t){const e=Wu(t);for(const r of n.elements)e.some(s=>Ee(s,r))||e.push(r);return{arrayValue:{values:e}}}class Tr extends Hs{constructor(t){super(),this.elements=t}}function Hu(n,t){let e=Wu(t);for(const r of n.elements)e=e.filter(s=>!Ee(s,r));return{arrayValue:{values:e}}}class Es extends Hs{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function pl(n){return Ct(n.integerValue||n.doubleValue)}function Wu(n){return Bo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(t,e){this.field=t,this.transform=e}}function Dp(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof kn&&s instanceof kn||r instanceof Tr&&s instanceof Tr?Pn(r.elements,s.elements,Ee):r instanceof Es&&s instanceof Es?Ee(r.Ie,s.Ie):r instanceof ys&&s instanceof ys}(n.transform,t.transform)}class Vp{constructor(t,e){this.version=t,this.transformResults=e}}class ge{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ge}static exists(t){return new ge(void 0,t)}static updateTime(t){return new ge(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Zr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Ws{}function Qu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ju(n.key,ge.none()):new Or(n.key,n.data,ge.none());{const e=n.data,r=Yt.empty();let s=new Ut(xt.comparator);for(let i of t.fields)if(!s.has(i)){let o=e.field(i);o===null&&i.length>1&&(i=i.popLast(),o=e.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ge(n.key,r,new Xt(s.toArray()),ge.none())}}function kp(n,t,e){n instanceof Or?function(s,i,o){const a=s.value.clone(),l=yl(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Ge?function(s,i,o){if(!Zr(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=yl(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Yu(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,t,e):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function or(n,t,e,r){return n instanceof Or?function(i,o,a,l){if(!Zr(i.precondition,o))return a;const c=i.value.clone(),u=El(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ge?function(i,o,a,l){if(!Zr(i.precondition,o))return a;const c=El(i.fieldTransforms,l,o),u=o.data;return u.setAll(Yu(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(n,t,e,r):function(i,o,a){return Zr(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function Np(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),i=Ku(r.transform,s||null);i!=null&&(e===null&&(e=Yt.empty()),e.set(r.field,i))}return e||null}function _l(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Pn(r,s,(i,o)=>Dp(i,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Or extends Ws{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ge extends Ws{constructor(t,e,r,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Yu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function yl(n,t,e){const r=new Map;gt(n.length===e.length);for(let s=0;s<e.length;s++){const i=n[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,bp(o,a,e[s]))}return r}function El(n,t,e){const r=new Map;for(const s of n){const i=s.transform,o=e.data.field(s.field);r.set(s.field,Sp(i,o,t))}return r}class Ju extends Ws{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Op extends Ws{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&kp(i,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=or(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=or(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=ju();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=e.has(s.key)?null:a;const l=Qu(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),rt())}isEqual(t){return this.batchId===t.batchId&&Pn(this.mutations,t.mutations,(e,r)=>_l(e,r))&&Pn(this.baseMutations,t.baseMutations,(e,r)=>_l(e,r))}}class jo{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){gt(t.mutations.length===r.length);let s=function(){return wp}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new jo(t,e,r,s)}}/**
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
 */class Lp{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Fp{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rt,it;function xp(n){switch(n){default:return $();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Xu(n){if(n===void 0)return ye("GRPC error has no .code"),T.UNKNOWN;switch(n){case Rt.OK:return T.OK;case Rt.CANCELLED:return T.CANCELLED;case Rt.UNKNOWN:return T.UNKNOWN;case Rt.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Rt.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Rt.INTERNAL:return T.INTERNAL;case Rt.UNAVAILABLE:return T.UNAVAILABLE;case Rt.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Rt.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Rt.NOT_FOUND:return T.NOT_FOUND;case Rt.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Rt.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Rt.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Rt.ABORTED:return T.ABORTED;case Rt.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Rt.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Rt.DATA_LOSS:return T.DATA_LOSS;default:return $()}}(it=Rt||(Rt={}))[it.OK=0]="OK",it[it.CANCELLED=1]="CANCELLED",it[it.UNKNOWN=2]="UNKNOWN",it[it.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",it[it.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",it[it.NOT_FOUND=5]="NOT_FOUND",it[it.ALREADY_EXISTS=6]="ALREADY_EXISTS",it[it.PERMISSION_DENIED=7]="PERMISSION_DENIED",it[it.UNAUTHENTICATED=16]="UNAUTHENTICATED",it[it.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",it[it.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",it[it.ABORTED=10]="ABORTED",it[it.OUT_OF_RANGE=11]="OUT_OF_RANGE",it[it.UNIMPLEMENTED=12]="UNIMPLEMENTED",it[it.INTERNAL=13]="INTERNAL",it[it.UNAVAILABLE=14]="UNAVAILABLE",it[it.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Bp(){return new TextEncoder}/**
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
 */const Up=new wn([4294967295,4294967295],0);function vl(n){const t=Bp().encode(n),e=new Bg;return e.update(t),new Uint8Array(e.digest())}function Tl(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new wn([e,r],0),new wn([s,i],0)]}class qo{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Jn(`Invalid padding: ${e}`);if(r<0)throw new Jn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Jn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Jn(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=wn.fromNumber(this.Te)}de(t,e,r){let s=t.add(e.multiply(wn.fromNumber(r)));return s.compare(Up)===1&&(s=new wn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=vl(t),[r,s]=Tl(e);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new qo(i,s,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const e=vl(t),[r,s]=Tl(e);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Jn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t,e,r,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Mr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Qs(q.min(),s,new Et(lt),Pe(),rt())}}class Mr{constructor(t,e,r,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Mr(r,e,rt(),rt(),rt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t,e,r,s){this.Ve=t,this.removedTargetIds=e,this.key=r,this.me=s}}class Zu{constructor(t,e){this.targetId=t,this.fe=e}}class th{constructor(t,e,r=Gt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class wl{constructor(){this.ge=0,this.pe=Al(),this.ye=Gt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=rt(),e=rt(),r=rt();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:$()}}),new Mr(this.ye,this.we,t,e,r)}Fe(){this.Se=!1,this.pe=Al()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,gt(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class $p{constructor(t){this.Be=t,this.ke=new Map,this.qe=Pe(),this.Qe=Il(),this.Ke=new Et(lt)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(e);break;case 3:this.je(e)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.Ce(t.resumeToken));break;default:$()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach((r,s)=>{this.je(s)&&e(s)})}Je(t){const e=t.targetId,r=t.fe.count,s=this.Ye(e);if(s){const i=s.target;if(Qi(i))if(r===0){const o=new x(i.path);this.We(e,o,qt.newNoDocument(o,q.min()))}else gt(r===1);else{const o=this.Ze(e);if(o!==r){const a=this.Xe(t),l=a?this.et(a,t,o):1;if(l!==0){this.He(e);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,c)}}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=e;let o,a;try{o=on(r).toUint8Array()}catch(l){if(l instanceof Du)return bn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new qo(o,s,i)}catch(l){return bn(l instanceof Jn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(t,e,r){return e.fe.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Be.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(e,i,null),s++)}),s}it(t){const e=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Qi(a.target)){const l=new x(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,qt.newNoDocument(l,t))}i.De&&(e.set(o,i.ve()),i.Fe())}});let r=rt();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new Qs(t,e,this.Ke,this.qe,r);return this.qe=Pe(),this.Qe=Il(),this.Ke=new Et(lt),s}Ue(t,e){if(!this.je(t))return;const r=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,r),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,e)?s.Me(e,1):s.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),r&&(this.qe=this.qe.insert(e,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Be.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new wl,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new Ut(lt),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||C("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Be._t(t)}He(t){this.ke.set(t,new wl),this.Be.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}st(t,e){return this.Be.getRemoteKeysForTarget(t).has(e)}}function Il(){return new Et(x.comparator)}function Al(){return new Et(x.comparator)}const jp={asc:"ASCENDING",desc:"DESCENDING"},qp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zp={and:"AND",or:"OR"};class Kp{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ji(n,t){return n.useProto3Json||js(t)?t:{value:t}}function vs(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function eh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Gp(n,t){return vs(n,t.toTimestamp())}function pe(n){return gt(!!n),q.fromTimestamp(function(e){const r=je(e);return new Pt(r.seconds,r.nanos)}(n))}function zo(n,t){return Xi(n,t).canonicalString()}function Xi(n,t){const e=function(s){return new vt(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function nh(n){const t=vt.fromString(n);return gt(ah(t)),t}function Zi(n,t){return zo(n.databaseId,t.path)}function wi(n,t){const e=nh(t);if(e.get(1)!==n.databaseId.projectId)throw new O(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new O(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new x(sh(e))}function rh(n,t){return zo(n.databaseId,t)}function Hp(n){const t=nh(n);return t.length===4?vt.emptyPath():sh(t)}function to(n){return new vt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function sh(n){return gt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Rl(n,t,e){return{name:Zi(n,t),fields:e.value.mapValue.fields}}function Wp(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:$()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(gt(u===void 0||typeof u=="string"),Gt.fromBase64String(u||"")):(gt(u===void 0||u instanceof Uint8Array),Gt.fromUint8Array(u||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?T.UNKNOWN:Xu(c.code);return new O(u,c.message||"")}(o);e=new th(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=wi(n,r.document.name),i=pe(r.document.updateTime),o=r.document.createTime?pe(r.document.createTime):q.min(),a=new Yt({mapValue:{fields:r.document.fields}}),l=qt.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];e=new ts(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=wi(n,r.document),i=r.readTime?pe(r.readTime):q.min(),o=qt.newNoDocument(s,i),a=r.removedTargetIds||[];e=new ts([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=wi(n,r.document),i=r.removedTargetIds||[];e=new ts([],i,s,null)}else{if(!("filter"in t))return $();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Fp(s,i),a=r.targetId;e=new Zu(a,o)}}return e}function Qp(n,t){let e;if(t instanceof Or)e={update:Rl(n,t.key,t.value)};else if(t instanceof Ju)e={delete:Zi(n,t.key)};else if(t instanceof Ge)e={update:Rl(n,t.key,t.data),updateMask:s_(t.fieldMask)};else{if(!(t instanceof Op))return $();e={verify:Zi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ys)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof kn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Tr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Es)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw $()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Gp(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$()}(n,t.precondition)),e}function Yp(n,t){return n&&n.length>0?(gt(t!==void 0),n.map(e=>function(s,i){let o=s.updateTime?pe(s.updateTime):pe(i);return o.isEqual(q.min())&&(o=pe(i)),new Vp(o,s.transformResults||[])}(e,t))):[]}function Jp(n,t){return{documents:[rh(n,t.path)]}}function Xp(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=rh(n,s);const i=function(c){if(c.length!==0)return oh(ve.create(c,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(u=>function(d){return{field:_n(d.field),direction:e_(d.dir)}}(u))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=Ji(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{ut:e,parent:s}}function Zp(n){let t=Hp(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){gt(r===1);const u=e.from[0];u.allDescendants?s=u.collectionId:t=t.child(u.collectionId)}let i=[];e.where&&(i=function(h){const d=ih(h);return d instanceof ve&&Ou(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(d=>function(y){return new _s(yn(y.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,js(d)?null:d}(e.limit));let l=null;e.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new ps(f,d)}(e.startAt));let c=null;return e.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new ps(f,d)}(e.endAt)),pp(t,s,o,i,a,"F",l,c)}function t_(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function ih(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=yn(e.unaryFilter.field);return bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=yn(e.unaryFilter.field);return bt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=yn(e.unaryFilter.field);return bt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=yn(e.unaryFilter.field);return bt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(n):n.fieldFilter!==void 0?function(e){return bt.create(yn(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ve.create(e.compositeFilter.filters.map(r=>ih(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return $()}}(e.compositeFilter.op))}(n):$()}function e_(n){return jp[n]}function n_(n){return qp[n]}function r_(n){return zp[n]}function _n(n){return{fieldPath:n.canonicalString()}}function yn(n){return xt.fromServerFormat(n.fieldPath)}function oh(n){return n instanceof bt?function(e){if(e.op==="=="){if(hl(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NAN"}};if(ul(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(hl(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NOT_NAN"}};if(ul(e.value))return{unaryFilter:{field:_n(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_n(e.field),op:n_(e.op),value:e.value}}}(n):n instanceof ve?function(e){const r=e.getFilters().map(s=>oh(s));return r.length===1?r[0]:{compositeFilter:{op:r_(e.op),filters:r}}}(n):$()}function s_(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ah(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t,e,r,s,i=q.min(),o=q.min(),a=Gt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new Me(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Me(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Me(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Me(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(t){this.ct=t}}function o_(n){const t=Zp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Yi(t,t.limit,"L"):t}/**
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
 */class a_{constructor(){this._n=new l_}addToCollectionParentIndex(t,e){return this._n.add(e),E.resolve()}getCollectionParents(t,e){return E.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return E.resolve()}deleteFieldIndex(t,e){return E.resolve()}deleteAllFieldIndexes(t){return E.resolve()}createTargetIndexes(t,e){return E.resolve()}getDocumentsMatchingTarget(t,e){return E.resolve(null)}getIndexType(t,e){return E.resolve(0)}getFieldIndexes(t,e){return E.resolve([])}getNextCollectionGroupToUpdate(t){return E.resolve(null)}getMinOffset(t,e){return E.resolve($e.min())}getMinOffsetFromCollectionGroup(t,e){return E.resolve($e.min())}updateCollectionGroup(t,e,r){return E.resolve()}updateIndexEntries(t,e){return E.resolve()}}class l_{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new Ut(vt.comparator),i=!s.has(r);return this.index[e]=s.add(r),i}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Ut(vt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Nn(0)}static Ln(){return new Nn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(){this.changes=new $n(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,qt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?E.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class u_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&or(r.mutation,s,Xt.empty(),Pt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,rt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=rt()){const s=en();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(i=>{let o=Yn();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=en();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,rt()))}populateOverlays(t,e,r){const s=[];return r.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,s){let i=Pe();const o=ir(),a=function(){return ir()}();return e.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Ge)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),or(u.mutation,c,u.mutation.getFieldMask(),Pt.now())):o.set(c.key,Xt.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),e.forEach((c,u)=>{var h;return a.set(c,new u_(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const r=ir();let s=new Et((o,a)=>o-a),i=rt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=e.get(l);if(c===null)return;let u=r.get(l)||Xt.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||rt()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=ju();u.forEach(d=>{if(!i.has(d)){const f=Qu(e.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(o){return x.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):_p(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-i.size):E.resolve(en());let a=-1,l=i;return o.next(c=>E.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?E.resolve():this.remoteDocumentCache.getEntry(t,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,l,c,rt())).next(u=>({batchId:a,changes:$u(u)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(r=>{let s=Yn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const i=e.collectionGroup;let o=Yn();return this.indexManager.getCollectionParents(t,i).next(a=>E.forEach(a,l=>{const c=function(h,d){return new qs(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,qt.newInvalidDocument(u)))});let a=Yn();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&or(u.mutation,c,Xt.empty(),Pt.now()),Gs(e,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class f_{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return E.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:pe(s.createTime)}}(e)),E.resolve()}getNamedQuery(t,e){return E.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:o_(s.bundledQuery),readTime:pe(s.readTime)}}(e)),E.resolve()}}/**
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
 */class d_{constructor(){this.overlays=new Et(x.comparator),this.hr=new Map}getOverlay(t,e){return E.resolve(this.overlays.get(e))}getOverlays(t,e){const r=en();return E.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,i)=>{this.ht(t,e,i)}),E.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),E.resolve()}getOverlaysForCollection(t,e,r){const s=en(),i=e.length+1,o=new x(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!e.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return E.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let i=new Et((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===e&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=en(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=en(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return E.resolve(a)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Lp(e,r));let i=this.hr.get(e);i===void 0&&(i=rt(),this.hr.set(e,i)),this.hr.set(e,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(){this.Pr=new Ut(Vt.Ir),this.Tr=new Ut(Vt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new Vt(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new Vt(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new x(new vt([])),r=new Vt(e,t),s=new Vt(e,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new x(new vt([])),r=new Vt(e,t),s=new Vt(e,t+1);let i=rt();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const e=new Vt(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Vt{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return x.comparator(t.key,e.key)||lt(t.pr,e.pr)}static Er(t,e){return lt(t.pr,e.pr)||x.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new Ut(Vt.Ir)}checkEmpty(t){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Mp(i,e,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new Vt(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(t,e){return E.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.br(r),i=s<0?0:s;return E.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Vt(e,0),s=new Vt(e,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),E.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Ut(lt);return e.forEach(s=>{const i=new Vt(s,0),o=new Vt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),E.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let i=r;x.isDocumentKey(i)||(i=i.child(""));const o=new Vt(new x(i),0);let a=new Ut(lt);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.pr)),!0)},o),E.resolve(this.Dr(a))}Dr(t){const e=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){gt(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return E.forEach(e.mutations,s=>{const i=new Vt(s.key,e.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new Vt(e,0),s=this.wr.firstAfterOrEqual(r);return E.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,E.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(t){this.vr=t,this.docs=function(){return new Et(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return E.resolve(r?r.document.mutableCopy():qt.newInvalidDocument(e))}getEntries(t,e){let r=Pe();return e.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():qt.newInvalidDocument(s))}),E.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let i=Pe();const o=e.path,a=new x(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Jg(Yg(u),r)<=0||(s.has(u.key)||Gs(e,u))&&(i=i.insert(u.key,u.mutableCopy()))}return E.resolve(i)}getAllFromCollectionGroup(t,e,r,s){$()}Fr(t,e){return E.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new p_(this)}getSize(t){return E.resolve(this.size)}}class p_ extends c_{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),E.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(t){this.persistence=t,this.Mr=new $n(e=>Uo(e),$o),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Ko,this.targetCount=0,this.Lr=Nn.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,s)=>e(s)),E.resolve()}getLastRemoteSnapshotVersion(t){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return E.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),E.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Nn(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,E.resolve()}updateTargetData(t,e){return this.qn(e),E.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,E.resolve()}removeTargets(t,e,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),E.waitFor(i).next(()=>s)}getTargetCount(t){return E.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return E.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),E.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),E.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),E.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return E.resolve(r)}containsKey(t,e){return E.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(t,e){this.Br={},this.overlays={},this.kr=new Lo(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new __(this),this.indexManager=new a_,this.remoteDocumentCache=function(s){return new g_(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new i_(e),this.$r=new f_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new d_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new m_(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){C("MemoryPersistence","Starting transaction:",t);const s=new E_(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,e){return E.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class E_ extends Zg{constructor(t){super(),this.currentSequenceNumber=t}}class Go{constructor(t){this.persistence=t,this.zr=new Ko,this.jr=null}static Hr(t){return new Go(t)}get Jr(){if(this.jr)return this.jr;throw $()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),E.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),E.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),E.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Jr,r=>{const s=x.fromPath(r);return this.Yr(t,s).next(i=>{i||e.removeEntry(s,q.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return E.or([()=>E.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=s}static Ki(t,e){let r=rt(),s=rt();for(const i of e.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ho(t,e.fromCache,r,s)}}/**
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
 */class v_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class T_{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Td()?8:tn.v(is())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,s){const i={result:null};return this.ji(t,e).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(t,e,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new v_;return this.Ji(t,e,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(t,e,o,a.size)})}).next(()=>i.result)}Yi(t,e,r,s){return r.documentReadCount<this.Wi?(Gn()<=ot.DEBUG&&C("QueryEngine","SDK will not create cache indexes for query:",pn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),E.resolve()):(Gn()<=ot.DEBUG&&C("QueryEngine","Query:",pn(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Gn()<=ot.DEBUG&&C("QueryEngine","The SDK decides to create cache indexes for query:",pn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,me(e))):E.resolve())}ji(t,e){if(gl(e))return E.resolve(null);let r=me(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Yi(e,null,"F"),r=me(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=rt(...i);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const c=this.Zi(e,a);return this.Xi(e,c,o,l.readTime)?this.ji(t,Yi(e,null,"F")):this.es(t,c,e,l)}))})))}Hi(t,e,r,s){return gl(e)||s.isEqual(q.min())?E.resolve(null):this.zi.getDocuments(t,r).next(i=>{const o=this.Zi(e,i);return this.Xi(e,o,r,s)?E.resolve(null):(Gn()<=ot.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),pn(e)),this.es(t,o,e,Qg(s,-1)).next(a=>a))})}Zi(t,e){let r=new Ut(Bu(t));return e.forEach((s,i)=>{Gs(t,i)&&(r=r.add(i))}),r}Xi(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,e,r){return Gn()<=ot.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",pn(e)),this.zi.getDocumentsMatchingQuery(t,e,$e.min(),r)}es(t,e,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(i=>(e.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class w_{constructor(t,e,r,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new Et(lt),this.rs=new $n(i=>Uo(i),$o),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new h_(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function I_(n,t,e,r){return new w_(n,t,e,r)}async function lh(n,t){const e=K(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=rt();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return e.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function A_(n,t){const e=K(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=e.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=E.resolve();return d.forEach(y=>{f=f.next(()=>u.getEntry(l,y)).next(_=>{const g=c.docVersions.get(y);gt(g!==null),_.version.compareTo(g)<0&&(h.applyToRemoteDocument(_,c),_.isValidDocument()&&(_.setReadTime(c.commitVersion),u.addEntry(_)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(e,r,t,i).next(()=>i.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=rt();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function ch(n){const t=K(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function R_(n,t){const e=K(n),r=t.snapshotVersion;let s=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=e.os.newChangeBuffer({trackRemovals:!0});s=e.ns;const a=[];t.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(e.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>e.Qr.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(Gt.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(h,f),function(_,g,m){return _.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,f,u)&&a.push(e.Qr.updateTargetData(i,f))});let l=Pe(),c=rt();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(C_(i,o,t.documentUpdates).next(u=>{l=u.cs,c=u.ls})),!r.isEqual(q.min())){const u=e.Qr.getLastRemoteSnapshotVersion(i).next(h=>e.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return E.waitFor(a).next(()=>o.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(e.ns=s,i))}function C_(n,t,e){let r=rt(),s=rt();return e.forEach(i=>r=r.add(i)),t.getEntries(n,r).next(i=>{let o=Pe();return e.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(q.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):C("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:s}})}function S_(n,t){const e=K(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function b_(n,t){const e=K(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Qr.getTargetData(r,t).next(i=>i?(s=i,E.resolve(s)):e.Qr.allocateTargetId(r).next(o=>(s=new Me(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function eo(n,t,e){const r=K(n),s=r.ns.get(t),i=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Nr(o))throw o;C("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function Cl(n,t,e){const r=K(n);let s=q.min(),i=rt();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=K(l),d=h.rs.get(u);return d!==void 0?E.resolve(h.ns.get(d)):h.Qr.getTargetData(c,u)}(r,o,me(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,e?s:q.min(),e?i:rt())).next(a=>(P_(r,Ep(t),a),{documents:a,hs:i})))}function P_(n,t,e){let r=n.ss.get(t)||q.min();e.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.ss.set(t,r)}class Sl{constructor(){this.activeTargetIds=Rp()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class D_{constructor(){this.no=new Sl,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Sl,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class V_{io(t){}shutdown(){}}/**
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
 */class bl{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Wr=null;function Ii(){return Wr===null?Wr=function(){return 268435456+Math.round(2147483648*Math.random())}():Wr++,"0x"+Wr.toString(16)}/**
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
 */const k_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="WebChannelConnection";class O_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+e.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(e,r,s,i,o){const a=Ii(),l=this.bo(e,r.toUriEncodedString());C("RestConnection",`Sending RPC '${e}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,i,o),this.Co(e,l,c,s).then(u=>(C("RestConnection",`Received RPC '${e}' ${a}: `,u),u),u=>{throw bn("RestConnection",`RPC '${e}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}vo(e,r,s,i,o,a){return this.So(e,r,s,i,o)}Do(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Un}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>e[o]=i),s&&s.headers.forEach((i,o)=>e[o]=i)}bo(e,r){const s=k_[e];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,e,r,s){const i=Ii();return new Promise((o,a)=>{const l=new xg;l.setWithCredentials(!0),l.listenOnce(Lg.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ti.NO_ERROR:const u=l.getResponseJson();C($t,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(u)),o(u);break;case Ti.TIMEOUT:C($t,`RPC '${t}' ${i} timed out`),a(new O(T.DEADLINE_EXCEEDED,"Request time out"));break;case Ti.HTTP_ERROR:const h=l.getStatus();if(C($t,`RPC '${t}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const y=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(m)>=0?m:T.UNKNOWN}(f.status);a(new O(y,f.message))}else a(new O(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new O(T.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{C($t,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(s);C($t,`RPC '${t}' ${i} sending request:`,s),l.send(e,"POST",c,r,15)})}Fo(t,e,r){const s=Ii(),i=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Og(),a=Mg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,e,r),l.encodeInitMessageHeaders=!0;const u=i.join("");C($t,`Creating RPC '${t}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const y=new N_({lo:g=>{f?C($t,`Not sending because RPC '${t}' stream ${s} is closed:`,g):(d||(C($t,`Opening RPC '${t}' stream ${s} transport.`),h.open(),d=!0),C($t,`RPC '${t}' stream ${s} sending:`,g),h.send(g))},ho:()=>h.close()}),_=(g,m,p)=>{g.listen(m,P=>{try{p(P)}catch(N){setTimeout(()=>{throw N},0)}})};return _(h,Kr.EventType.OPEN,()=>{f||C($t,`RPC '${t}' stream ${s} transport opened.`)}),_(h,Kr.EventType.CLOSE,()=>{f||(f=!0,C($t,`RPC '${t}' stream ${s} transport closed`),y.Vo())}),_(h,Kr.EventType.ERROR,g=>{f||(f=!0,bn($t,`RPC '${t}' stream ${s} transport errored:`,g),y.Vo(new O(T.UNAVAILABLE,"The operation could not be completed")))}),_(h,Kr.EventType.MESSAGE,g=>{var m;if(!f){const p=g.data[0];gt(!!p);const P=p,N=P.error||((m=P[0])===null||m===void 0?void 0:m.error);if(N){C($t,`RPC '${t}' stream ${s} received error:`,N);const G=N.status;let M=function(ut){const H=Rt[ut];if(H!==void 0)return Xu(H)}(G),w=N.message;M===void 0&&(M=T.INTERNAL,w="Unknown error status: "+G+" with message "+N.message),f=!0,y.Vo(new O(M,w)),h.close()}else C($t,`RPC '${t}' stream ${s} received:`,p),y.mo(p)}}),_(a,Fg.STAT_EVENT,g=>{g.stat===sl.PROXY?C($t,`RPC '${t}' stream ${s} detected buffering proxy`):g.stat===sl.NOPROXY&&C($t,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.Ro()},0),y}}function Ai(){return typeof document<"u"?document:null}/**
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
 */function Ys(n){return new Kp(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t,e,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=e,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const e=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,e-r);s>0&&C("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t,e,r,s,i,o,a,l){this.oi=t,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new uh(t,e)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,e){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():e&&e.code===T.RESOURCE_EXHAUSTED?(ye(e.toString()),ye("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):e&&e.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(e)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),e=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===e&&this.o_(r,s)},r=>{t(()=>{const s=new O(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(t,e){const r=this.s_(this.Wo);this.stream=this.a_(t,e),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return C("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return e=>{this.oi.enqueueAndForget(()=>this.Wo===t?e():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class M_ extends hh{constructor(t,e,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,o),this.serializer=i}a_(t,e){return this.connection.Fo("Listen",t,e)}onMessage(t){this.jo.reset();const e=Wp(this.serializer,t),r=function(i){if(!("targetChange"in i))return q.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?pe(o.readTime):q.min()}(t);return this.listener.u_(e,r)}c_(t){const e={};e.database=to(this.serializer),e.addTarget=function(i,o){let a;const l=o.target;if(a=Qi(l)?{documents:Jp(i,l)}:{query:Xp(i,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=eh(i,o.resumeToken);const c=Ji(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(q.min())>0){a.readTime=vs(i,o.snapshotVersion.toTimestamp());const c=Ji(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=t_(this.serializer,t);r&&(e.labels=r),this.t_(e)}l_(t){const e={};e.database=to(this.serializer),e.removeTarget=t,this.t_(e)}}class L_ extends hh{constructor(t,e,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,e){return this.connection.Fo("Write",t,e)}onMessage(t){if(gt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const e=Yp(t.writeResults,t.commitTime),r=pe(t.commitTime);return this.listener.T_(r,e)}return gt(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=to(this.serializer),this.t_(t)}I_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Qp(this.serializer,r))};this.t_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_ extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new O(T.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,Xi(e,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(T.UNKNOWN,i.toString())})}vo(t,e,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,Xi(e,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(T.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class x_{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(ye(e),this.g_=!1):C("OnlineStateTracker",e)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(t,e,r,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{un(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=K(l);c.v_.add(4),await Lr(c),c.x_.set("Unknown"),c.v_.delete(4),await Js(c)}(this))})}),this.x_=new x_(r,s)}}async function Js(n){if(un(n))for(const t of n.F_)await t(!0)}async function Lr(n){for(const t of n.F_)await t(!1)}function fh(n,t){const e=K(n);e.C_.has(t.targetId)||(e.C_.set(t.targetId,t),Jo(e)?Yo(e):jn(e).Jo()&&Qo(e,t))}function Wo(n,t){const e=K(n),r=jn(e);e.C_.delete(t),r.Jo()&&dh(e,t),e.C_.size===0&&(r.Jo()?r.Xo():un(e)&&e.x_.set("Unknown"))}function Qo(n,t){if(n.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(q.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}jn(n).c_(t)}function dh(n,t){n.O_.Oe(t),jn(n).l_(t)}function Yo(n){n.O_=new $p({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>n.C_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),jn(n).start(),n.x_.p_()}function Jo(n){return un(n)&&!jn(n).Ho()&&n.C_.size>0}function un(n){return K(n).v_.size===0}function mh(n){n.O_=void 0}async function U_(n){n.C_.forEach((t,e)=>{Qo(n,t)})}async function $_(n,t){mh(n),Jo(n)?(n.x_.S_(t),Yo(n)):n.x_.set("Unknown")}async function j_(n,t,e){if(n.x_.set("Online"),t instanceof th&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(n,t)}catch(r){C("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ts(n,r)}else if(t instanceof ts?n.O_.$e(t):t instanceof Zu?n.O_.Je(t):n.O_.Ge(t),!e.isEqual(q.min()))try{const r=await ch(n.localStore);e.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.C_.get(c);u&&i.C_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.C_.get(l);if(!u)return;i.C_.set(l,u.withResumeToken(Gt.EMPTY_BYTE_STRING,u.snapshotVersion)),dh(i,l);const h=new Me(u.target,l,c,u.sequenceNumber);Qo(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){C("RemoteStore","Failed to raise snapshot:",r),await Ts(n,r)}}async function Ts(n,t,e){if(!Nr(t))throw t;n.v_.add(1),await Lr(n),n.x_.set("Offline"),e||(e=()=>ch(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await e(),n.v_.delete(1),await Js(n)})}function gh(n,t){return t().catch(e=>Ts(n,e,t))}async function Xs(n){const t=K(n),e=qe(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;q_(t);)try{const s=await S_(t.localStore,r);if(s===null){t.D_.length===0&&e.Xo();break}r=s.batchId,z_(t,s)}catch(s){await Ts(t,s)}ph(t)&&_h(t)}function q_(n){return un(n)&&n.D_.length<10}function z_(n,t){n.D_.push(t);const e=qe(n);e.Jo()&&e.P_&&e.I_(t.mutations)}function ph(n){return un(n)&&!qe(n).Ho()&&n.D_.length>0}function _h(n){qe(n).start()}async function K_(n){qe(n).d_()}async function G_(n){const t=qe(n);for(const e of n.D_)t.I_(e.mutations)}async function H_(n,t,e){const r=n.D_.shift(),s=jo.from(r,t,e);await gh(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Xs(n)}async function W_(n,t){t&&qe(n).P_&&await async function(r,s){if(function(o){return xp(o)&&o!==T.ABORTED}(s.code)){const i=r.D_.shift();qe(r).Zo(),await gh(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Xs(r)}}(n,t),ph(n)&&_h(n)}async function Pl(n,t){const e=K(n);e.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const r=un(e);e.v_.add(3),await Lr(e),r&&e.x_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.v_.delete(3),await Js(e)}async function Q_(n,t){const e=K(n);t?(e.v_.delete(2),await Js(e)):t||(e.v_.add(2),await Lr(e),e.x_.set("Unknown"))}function jn(n){return n.N_||(n.N_=function(e,r,s){const i=K(e);return i.R_(),new M_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:U_.bind(null,n),To:$_.bind(null,n),u_:j_.bind(null,n)}),n.F_.push(async t=>{t?(n.N_.Zo(),Jo(n)?Yo(n):n.x_.set("Unknown")):(await n.N_.stop(),mh(n))})),n.N_}function qe(n){return n.L_||(n.L_=function(e,r,s){const i=K(e);return i.R_(),new L_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:K_.bind(null,n),To:W_.bind(null,n),E_:G_.bind(null,n),T_:H_.bind(null,n)}),n.F_.push(async t=>{t?(n.L_.Zo(),await Xs(n)):(await n.L_.stop(),n.D_.length>0&&(C("RemoteStore",`Stopping write stream with ${n.D_.length} pending writes`),n.D_=[]))})),n.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(t,e,r,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Re,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,i){const o=Date.now()+r,a=new Xo(t,e,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(T.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zo(n,t){if(ye("AsyncQueue",`${t}: ${n}`),Nr(n))return new O(T.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t){this.comparator=t?(e,r)=>t(e,r)||x.comparator(e.key,r.key):(e,r)=>x.comparator(e.key,r.key),this.keyedMap=Yn(),this.sortedSet=new Et(this.comparator)}static emptySet(t){return new In(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof In)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new In;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(){this.B_=new Et(x.comparator)}track(t){const e=t.doc.key,r=this.B_.get(e);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(e,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(e):t.type===1&&r.type===2?this.B_=this.B_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):$():this.B_=this.B_.insert(e,t)}k_(){const t=[];return this.B_.inorderTraversal((e,r)=>{t.push(r)}),t}}class On{constructor(t,e,r,s,i,o,a,l,c){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(t,e,r,s,i){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new On(t,e,In.emptySet(e),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ks(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(t=>t.U_())}}class J_{constructor(){this.queries=new $n(t=>xu(t),Ks),this.onlineState="Unknown",this.W_=new Set}}async function yh(n,t){const e=K(n);let r=3;const s=t.query;let i=e.queries.get(s);i?!i.K_()&&t.U_()&&(r=2):(i=new Y_,r=t.U_()?0:1);try{switch(r){case 0:i.q_=await e.onListen(s,!0);break;case 1:i.q_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(o){const a=Zo(o,`Initialization of query '${pn(t.query)}' failed`);return void t.onError(a)}e.queries.set(s,i),i.Q_.push(t),t.G_(e.onlineState),i.q_&&t.z_(i.q_)&&ta(e)}async function Eh(n,t){const e=K(n),r=t.query;let s=3;const i=e.queries.get(r);if(i){const o=i.Q_.indexOf(t);o>=0&&(i.Q_.splice(o,1),i.Q_.length===0?s=t.U_()?0:1:!i.K_()&&t.U_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function X_(n,t){const e=K(n);let r=!1;for(const s of t){const i=s.query,o=e.queries.get(i);if(o){for(const a of o.Q_)a.z_(s)&&(r=!0);o.q_=s}}r&&ta(e)}function Z_(n,t,e){const r=K(n),s=r.queries.get(t);if(s)for(const i of s.Q_)i.onError(e);r.queries.delete(t)}function ta(n){n.W_.forEach(t=>{t.next()})}var no,Vl;(Vl=no||(no={})).j_="default",Vl.Cache="cache";class vh{constructor(t,e,r){this.query=t,this.H_=e,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new On(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.J_?this.Z_(t)&&(this.H_.next(t),e=!0):this.X_(t,this.onlineState)&&(this.ea(t),e=!0),this.Y_=t,e}onError(t){this.H_.error(t)}G_(t){this.onlineState=t;let e=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,t)&&(this.ea(this.Y_),e=!0),e}X_(t,e){if(!t.fromCache||!this.U_())return!0;const r=e!=="Offline";return(!this.options.ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Z_(t){if(t.docChanges.length>0)return!0;const e=this.Y_&&this.Y_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ea(t){t=On.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.J_=!0,this.H_.next(t)}U_(){return this.options.source!==no.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t){this.key=t}}class wh{constructor(t){this.key=t}}class ty{constructor(t,e){this.query=t,this.ua=e,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=rt(),this.mutatedKeys=rt(),this.ha=Bu(t),this.Pa=new In(this.ha)}get Ia(){return this.ua}Ta(t,e){const r=e?e.Ea:new Dl,s=e?e.Pa:this.Pa;let i=e?e.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((u,h)=>{const d=s.get(u),f=Gs(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let g=!1;d&&f?d.data.isEqual(f.data)?y!==_&&(r.track({type:3,doc:f}),g=!0):this.da(d,f)||(r.track({type:2,doc:f}),g=!0,(l&&this.ha(f,l)>0||c&&this.ha(f,c)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),g=!0):d&&!f&&(r.track({type:1,doc:d}),g=!0,(l||c)&&(a=!0)),g&&(f?(o=o.add(f),i=_?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:i}}da(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const i=this.Pa;this.Pa=t.Pa,this.mutatedKeys=t.mutatedKeys;const o=t.Ea.k_();o.sort((u,h)=>function(f,y){const _=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return _(f)-_(y)}(u.type,h.type)||this.ha(u.doc,h.doc)),this.Aa(r),s=s!=null&&s;const a=e&&!s?this.Ra():[],l=this.la.size===0&&this.current&&!s?1:0,c=l!==this.ca;return this.ca=l,o.length!==0||c?{snapshot:new On(this.query,t.Pa,i,o,t.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new Dl,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(t){return!this.ua.has(t)&&!!this.Pa.has(t)&&!this.Pa.get(t).hasLocalMutations}Aa(t){t&&(t.addedDocuments.forEach(e=>this.ua=this.ua.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.ua=this.ua.delete(e)),this.current=t.current)}Ra(){if(!this.current)return[];const t=this.la;this.la=rt(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const e=[];return t.forEach(r=>{this.la.has(r)||e.push(new wh(r))}),this.la.forEach(r=>{t.has(r)||e.push(new Th(r))}),e}fa(t){this.ua=t.hs,this.la=rt();const e=this.Ta(t.documents);return this.applyChanges(e,!0)}ga(){return On.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class ey{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class ny{constructor(t){this.key=t,this.pa=!1}}class ry{constructor(t,e,r,s,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new $n(a=>xu(a),Ks),this.Sa=new Map,this.ba=new Set,this.Da=new Et(x.comparator),this.Ca=new Map,this.va=new Ko,this.Fa={},this.Ma=new Map,this.xa=Nn.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function sy(n,t,e=!0){const r=bh(n);let s;const i=r.wa.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ga()):s=await Ih(r,t,e,!0),s}async function iy(n,t){const e=bh(n);await Ih(e,t,!0,!1)}async function Ih(n,t,e,r){const s=await b_(n.localStore,me(t)),i=s.targetId,o=e?n.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await oy(n,t,i,o==="current",s.resumeToken)),n.isPrimaryClient&&e&&fh(n.remoteStore,s),a}async function oy(n,t,e,r,s){n.Na=(h,d,f)=>async function(_,g,m,p){let P=g.view.Ta(m);P.Xi&&(P=await Cl(_.localStore,g.query,!1).then(({documents:w})=>g.view.Ta(w,P)));const N=p&&p.targetChanges.get(g.targetId),G=p&&p.targetMismatches.get(g.targetId)!=null,M=g.view.applyChanges(P,_.isPrimaryClient,N,G);return Nl(_,g.targetId,M.Va),M.snapshot}(n,h,d,f);const i=await Cl(n.localStore,t,!0),o=new ty(t,i.hs),a=o.Ta(i.documents),l=Mr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),c=o.applyChanges(a,n.isPrimaryClient,l);Nl(n,e,c.Va);const u=new ey(t,e,o);return n.wa.set(t,u),n.Sa.has(e)?n.Sa.get(e).push(t):n.Sa.set(e,[t]),c.snapshot}async function ay(n,t,e){const r=K(n),s=r.wa.get(t),i=r.Sa.get(s.targetId);if(i.length>1)return r.Sa.set(s.targetId,i.filter(o=>!Ks(o,t))),void r.wa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await eo(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Wo(r.remoteStore,s.targetId),ro(r,s.targetId)}).catch(kr)):(ro(r,s.targetId),await eo(r.localStore,s.targetId,!0))}async function ly(n,t){const e=K(n),r=e.wa.get(t),s=e.Sa.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Wo(e.remoteStore,r.targetId))}async function cy(n,t,e){const r=py(n);try{const s=await function(o,a){const l=K(o),c=Pt.now(),u=a.reduce((f,y)=>f.add(y.key),rt());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let y=Pe(),_=rt();return l.os.getEntries(f,u).next(g=>{y=g,y.forEach((m,p)=>{p.isValidDocument()||(_=_.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,y)).next(g=>{h=g;const m=[];for(const p of a){const P=Np(p,h.get(p.key).overlayedDocument);P!=null&&m.push(new Ge(p.key,P,Vu(P.value.mapValue),ge.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,m,a)}).next(g=>{d=g;const m=g.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(f,g.batchId,m)})}).then(()=>({batchId:d.batchId,changes:$u(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.Fa[o.currentUser.toKey()];c||(c=new Et(lt)),c=c.insert(a,l),o.Fa[o.currentUser.toKey()]=c}(r,s.batchId,e),await Fr(r,s.changes),await Xs(r.remoteStore)}catch(s){const i=Zo(s,"Failed to persist write");e.reject(i)}}async function Ah(n,t){const e=K(n);try{const r=await R_(e.localStore,t);t.targetChanges.forEach((s,i)=>{const o=e.Ca.get(i);o&&(gt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?gt(o.pa):s.removedDocuments.size>0&&(gt(o.pa),o.pa=!1))}),await Fr(e,r,t)}catch(r){await kr(r)}}function kl(n,t,e){const r=K(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.wa.forEach((i,o)=>{const a=o.view.G_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=K(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.Q_)d.G_(a)&&(c=!0)}),c&&ta(l)}(r.eventManager,t),s.length&&r.ya.u_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function uy(n,t,e){const r=K(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Ca.get(t),i=s&&s.key;if(i){let o=new Et(x.comparator);o=o.insert(i,qt.newNoDocument(i,q.min()));const a=rt().add(i),l=new Qs(q.min(),new Map,new Et(lt),o,a);await Ah(r,l),r.Da=r.Da.remove(i),r.Ca.delete(t),ea(r)}else await eo(r.localStore,t,!1).then(()=>ro(r,t,e)).catch(kr)}async function hy(n,t){const e=K(n),r=t.batch.batchId;try{const s=await A_(e.localStore,t);Ch(e,r,null),Rh(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Fr(e,s)}catch(s){await kr(s)}}async function fy(n,t,e){const r=K(n);try{const s=await function(o,a){const l=K(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(gt(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,t);Ch(r,t,e),Rh(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Fr(r,s)}catch(s){await kr(s)}}function Rh(n,t){(n.Ma.get(t)||[]).forEach(e=>{e.resolve()}),n.Ma.delete(t)}function Ch(n,t,e){const r=K(n);let s=r.Fa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),r.Fa[r.currentUser.toKey()]=s}}function ro(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Sa.get(t))n.wa.delete(r),e&&n.ya.La(r,e);n.Sa.delete(t),n.isPrimaryClient&&n.va.Vr(t).forEach(r=>{n.va.containsKey(r)||Sh(n,r)})}function Sh(n,t){n.ba.delete(t.path.canonicalString());const e=n.Da.get(t);e!==null&&(Wo(n.remoteStore,e),n.Da=n.Da.remove(t),n.Ca.delete(e),ea(n))}function Nl(n,t,e){for(const r of e)r instanceof Th?(n.va.addReference(r.key,t),dy(n,r)):r instanceof wh?(C("SyncEngine","Document no longer in limbo: "+r.key),n.va.removeReference(r.key,t),n.va.containsKey(r.key)||Sh(n,r.key)):$()}function dy(n,t){const e=t.key,r=e.path.canonicalString();n.Da.get(e)||n.ba.has(r)||(C("SyncEngine","New document in limbo: "+e),n.ba.add(r),ea(n))}function ea(n){for(;n.ba.size>0&&n.Da.size<n.maxConcurrentLimboResolutions;){const t=n.ba.values().next().value;n.ba.delete(t);const e=new x(vt.fromString(t)),r=n.xa.next();n.Ca.set(r,new ny(e)),n.Da=n.Da.insert(e,r),fh(n.remoteStore,new Me(me(zs(e.path)),r,"TargetPurposeLimboResolution",Lo._e))}}async function Fr(n,t,e){const r=K(n),s=[],i=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,l)=>{o.push(r.Na(l,t,e).then(c=>{if((c||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=Ho.Ki(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.ya.u_(s),await async function(l,c){const u=K(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>E.forEach(c,d=>E.forEach(d.qi,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>E.forEach(d.Qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Nr(h))throw h;C("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.ns.get(d),y=f.snapshotVersion,_=f.withLastLimboFreeSnapshotVersion(y);u.ns=u.ns.insert(d,_)}}}(r.localStore,i))}async function my(n,t){const e=K(n);if(!e.currentUser.isEqual(t)){C("SyncEngine","User change. New user:",t.toKey());const r=await lh(e.localStore,t);e.currentUser=t,function(i,o){i.Ma.forEach(a=>{a.forEach(l=>{l.reject(new O(T.CANCELLED,o))})}),i.Ma.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Fr(e,r.us)}}function gy(n,t){const e=K(n),r=e.Ca.get(t);if(r&&r.pa)return rt().add(r.key);{let s=rt();const i=e.Sa.get(t);if(!i)return s;for(const o of i){const a=e.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function bh(n){const t=K(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ah.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=gy.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=uy.bind(null,t),t.ya.u_=X_.bind(null,t.eventManager),t.ya.La=Z_.bind(null,t.eventManager),t}function py(n){const t=K(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=hy.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=fy.bind(null,t),t}class Ol{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ys(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return I_(this.persistence,new T_,t.initialUser,this.serializer)}createPersistence(t){return new y_(Go.Hr,this.serializer)}createSharedClientState(t){return new D_}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _y{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>kl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=my.bind(null,this.syncEngine),await Q_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new J_}()}createDatastore(t){const e=Ys(t.databaseInfo.databaseId),r=function(i){return new O_(i)}(t.databaseInfo);return function(i,o,a,l){return new F_(i,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,i,o,a){return new B_(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>kl(this.syncEngine,e,0),function(){return bl.D()?new bl:new V_}())}createSyncEngine(t,e){return function(s,i,o,a,l,c,u){const h=new ry(s,i,o,a,l,c);return u&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const s=K(r);C("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await Lr(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class Ph{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.qa(this.observer.next,t)}error(t){this.observer.error?this.qa(this.observer.error,t):ye("Uncaught Error in snapshot listener:",t.toString())}Qa(){this.muted=!0}qa(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=jt.UNAUTHENTICATED,this.clientId=bu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{C("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(C("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Re;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Zo(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ri(n,t){n.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await lh(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ml(n,t){n.asyncQueue.verifyOperationInProgress();const e=await vy(n);C("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Pl(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Pl(t.remoteStore,s)),n._onlineComponents=t}function Ey(n){return n.name==="FirebaseError"?n.code===T.FAILED_PRECONDITION||n.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function vy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){C("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ri(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Ey(e))throw e;bn("Error using user provided cache. Falling back to memory cache: "+e),await Ri(n,new Ol)}}else C("FirestoreClient","Using default OfflineComponentProvider"),await Ri(n,new Ol);return n._offlineComponents}async function Dh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(C("FirestoreClient","Using user provided OnlineComponentProvider"),await Ml(n,n._uninitializedComponentsProvider._online)):(C("FirestoreClient","Using default OnlineComponentProvider"),await Ml(n,new _y))),n._onlineComponents}function Ty(n){return Dh(n).then(t=>t.syncEngine)}async function so(n){const t=await Dh(n),e=t.eventManager;return e.onListen=sy.bind(null,t.syncEngine),e.onUnlisten=ay.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=iy.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=ly.bind(null,t.syncEngine),e}function wy(n,t,e={}){const r=new Re;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new Ph({next:d=>{o.enqueueAndForget(()=>Eh(i,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new O(T.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new O(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new vh(zs(a.path),u,{includeMetadataChanges:!0,ta:!0});return yh(i,h)}(await so(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function Vh(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Ll=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(n,t,e){if(!e)throw new O(T.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Ay(n,t,e,r){if(t===!0&&r===!0)throw new O(T.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Fl(n){if(!x.isDocumentKey(n))throw new O(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function na(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":$()}function _e(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=na(n);throw new O(T.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class xl{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new O(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new O(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ay("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vh((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new O(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new O(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new O(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ra{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new O(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xl(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ug;switch(r.type){case"firstParty":return new zg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Ll.get(e);r&&(C("ComponentProvider","Removing Datastore"),Ll.delete(e),r.terminate())}(this),Promise.resolve()}}function Ry(n,t,e,r={}){var s;const i=(n=_e(n,ra))._getSettings(),o=`${t}:${e}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&bn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=jt.MOCK_USER;else{a=Ed(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new O(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new jt(c)}n._authCredentials=new $g(new Su(a,l))}}/**
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
 */class Zs{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Zs(this.firestore,t,this._query)}}class Jt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Jt(this.firestore,t,this._key)}}class wr extends Zs{constructor(t,e,r){super(t,e,zs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Jt(this.firestore,null,new x(t))}withConverter(t){return new wr(this.firestore,t,this._path)}}function Cy(n,t,...e){if(n=Ue(n),arguments.length===1&&(t=bu.newId()),Iy("doc","path",t),n instanceof ra){const r=vt.fromString(t,...e);return Fl(r),new Jt(n,null,new x(r))}{if(!(n instanceof Jt||n instanceof wr))throw new O(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(vt.fromString(t,...e));return Fl(r),new Jt(n.firestore,n instanceof wr?n.converter:null,new x(r))}}/**
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
 */class Sy{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new uh(this,"async_queue_retry"),this.cu=()=>{const e=Ai();e&&C("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};const t=Ai();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.lu(),this.hu(t)}enterRestrictedMode(t){if(!this.iu){this.iu=!0,this.au=t||!1;const e=Ai();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.cu)}}enqueue(t){if(this.lu(),this.iu)return new Promise(()=>{});const e=new Re;return this.hu(()=>this.iu&&this.au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ru.push(t),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(t){if(!Nr(t))throw t;C("AsyncQueue","Operation failed with retryable error: "+t)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(t){const e=this.nu.then(()=>(this._u=!0,t().catch(r=>{this.ou=r,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ye("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this._u=!1,r))));return this.nu=e,e}enqueueAfterDelay(t,e,r){this.lu(),this.uu.indexOf(t)>-1&&(e=0);const s=Xo.createAndSchedule(this,t,e,r,i=>this.Iu(i));return this.su.push(s),s}lu(){this.ou&&$()}verifyOperationInProgress(){}async Tu(){let t;do t=this.nu,await t;while(t!==this.nu)}Eu(t){for(const e of this.su)if(e.timerId===t)return!0;return!1}du(t){return this.Tu().then(()=>{this.su.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.su)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tu()})}Au(t){this.uu.push(t)}Iu(t){const e=this.su.indexOf(t);this.su.splice(e,1)}}function Bl(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Mn extends ra{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new Sy}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kh(this),this._firestoreClient.terminate()}}function by(n,t){const e=typeof n=="object"?n:Am(),r=typeof n=="string"?n:t||"(default)",s=vm(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=_d("firestore");i&&Ry(s,...i)}return s}function sa(n){return n._firestoreClient||kh(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function kh(n){var t,e,r;const s=n._freezeSettings(),i=function(a,l,c,u){return new sp(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Vh(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new yy(n._authCredentials,n._appCheckCredentials,n._queue,i),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Ln{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ln(Gt.fromBase64String(t))}catch(e){throw new O(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ln(Gt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class ti{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ei{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return lt(this._lat,t._lat)||lt(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py=/^__.*__$/;class Dy{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ge(t,this.data,this.fieldMask,e,this.fieldTransforms):new Or(t,this.data,e,this.fieldTransforms)}}class Nh{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Ge(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Oh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class ni{constructor(t,e,r,s,i,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ru(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(t){return new ni(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.mu({path:r,gu:!1});return s.pu(t),s}yu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.mu({path:r,gu:!1});return s.Ru(),s}wu(t){return this.mu({path:void 0,gu:!0})}Su(t){return ws(t,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ru(){if(this.path)for(let t=0;t<this.path.length;t++)this.pu(this.path.get(t))}pu(t){if(t.length===0)throw this.Su("Document fields must not be empty");if(Oh(this.Vu)&&Py.test(t))throw this.Su('Document fields cannot begin and end with "__"')}}class Vy{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Ys(t)}Cu(t,e,r,s=!1){return new ni({Vu:t,methodName:e,Du:r,path:xt.emptyPath(),gu:!1,bu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mh(n){const t=n._freezeSettings(),e=Ys(n._databaseId);return new Vy(n._databaseId,!!t.ignoreUndefinedProperties,e)}function ky(n,t,e,r,s,i={}){const o=n.Cu(i.merge||i.mergeFields?2:0,t,e,s);aa("Data must be an object, but it was:",o,r);const a=Lh(r,o);let l,c;if(i.merge)l=new Xt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=io(t,h,e);if(!o.contains(d))throw new O(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);xh(u,d)||u.push(d)}l=new Xt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new Dy(new Yt(a),l,c)}class ri extends ei{_toFieldTransform(t){if(t.Vu!==2)throw t.Vu===1?t.Su(`${this._methodName}() can only appear at the top level of your update data`):t.Su(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ri}}function Ny(n,t,e){return new ni({Vu:3,Du:t.settings.Du,methodName:n._methodName,gu:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class oa extends ei{constructor(t,e){super(t),this.vu=e}_toFieldTransform(t){const e=Ny(this,t,!0),r=this.vu.map(i=>xr(i,e)),s=new kn(r);return new Pp(t.path,s)}isEqual(t){return t instanceof oa&&os(this.vu,t.vu)}}function Oy(n,t,e,r){const s=n.Cu(1,t,e);aa("Data must be an object, but it was:",s,r);const i=[],o=Yt.empty();cn(r,(l,c)=>{const u=la(t,l,e);c=Ue(c);const h=s.yu(u);if(c instanceof ri)i.push(u);else{const d=xr(c,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Xt(i);return new Nh(o,a,s.fieldTransforms)}function My(n,t,e,r,s,i){const o=n.Cu(1,t,e),a=[io(t,r,e)],l=[s];if(i.length%2!=0)throw new O(T.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(io(t,i[d])),l.push(i[d+1]);const c=[],u=Yt.empty();for(let d=a.length-1;d>=0;--d)if(!xh(c,a[d])){const f=a[d];let y=l[d];y=Ue(y);const _=o.yu(f);if(y instanceof ri)c.push(f);else{const g=xr(y,_);g!=null&&(c.push(f),u.set(f,g))}}const h=new Xt(c);return new Nh(u,h,o.fieldTransforms)}function xr(n,t){if(Fh(n=Ue(n)))return aa("Unsupported field value:",t,n),Lh(n,t);if(n instanceof ei)return function(r,s){if(!Oh(s.Vu))throw s.Su(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Su(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.gu&&t.Vu!==4)throw t.Su("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=xr(a,s.wu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,t)}return function(r,s){if((r=Ue(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Cp(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Pt.fromDate(r);return{timestampValue:vs(s.serializer,i)}}if(r instanceof Pt){const i=new Pt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vs(s.serializer,i)}}if(r instanceof ia)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ln)return{bytesValue:eh(s.serializer,r._byteString)};if(r instanceof Jt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:zo(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Su(`Unsupported field value: ${na(r)}`)}(n,t)}function Lh(n,t){const e={};return Pu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):cn(n,(r,s)=>{const i=xr(s,t.fu(r));i!=null&&(e[r]=i)}),{mapValue:{fields:e}}}function Fh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Pt||n instanceof ia||n instanceof Ln||n instanceof Jt||n instanceof ei)}function aa(n,t,e){if(!Fh(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=na(e);throw r==="an object"?t.Su(n+" a custom object"):t.Su(n+" "+r)}}function io(n,t,e){if((t=Ue(t))instanceof ti)return t._internalPath;if(typeof t=="string")return la(n,t);throw ws("Field path arguments must be of type string or ",n,!1,void 0,e)}const Ly=new RegExp("[~\\*/\\[\\]]");function la(n,t,e){if(t.search(Ly)>=0)throw ws(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ti(...t.split("."))._internalPath}catch{throw ws(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ws(n,t,e,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new O(T.INVALID_ARGUMENT,a+n+l)}function xh(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Bh{constructor(t,e,r,s,i){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Fy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Uh("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Fy extends Bh{data(){return super.data()}}function Uh(n,t){return typeof t=="string"?la(n,t):t instanceof ti?t._internalPath:t._delegate._internalPath}/**
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
 */function xy(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class By{convertValue(t,e="none"){switch(an(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ct(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(on(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw $()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return cn(t,(s,i)=>{r[s]=this.convertValue(i,e)}),r}convertGeoPoint(t){return new ia(Ct(t.latitude),Ct(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=xo(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(yr(t));default:return null}}convertTimestamp(t){const e=je(t);return new Pt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=vt.fromString(t);gt(ah(r));const s=new Er(r.get(1),r.get(3)),i=new x(r.popFirst(5));return s.isEqual(e)||ye(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
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
 */function Uy(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
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
 */class Xn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class $h extends Bh{constructor(t,e,r,s,i,o){super(t,e,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new es(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Uh("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class es extends $h{data(t={}){return super.data(t)}}class $y{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Xn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new es(this._firestore,this._userDataWriter,r.key,r,new Xn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new es(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Xn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new es(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Xn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:jy(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function jy(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}/**
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
 */function qy(n){n=_e(n,Jt);const t=_e(n.firestore,Mn);return wy(sa(t),n._key).then(e=>zh(t,n,e))}class jh extends By{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ln(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Jt(this.firestore,null,e)}}function Ul(n,t,e){n=_e(n,Jt);const r=_e(n.firestore,Mn),s=Uy(n.converter,t,e);return qh(r,[ky(Mh(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,ge.none())])}function zy(n,t,e,...r){n=_e(n,Jt);const s=_e(n.firestore,Mn),i=Mh(s);let o;return o=typeof(t=Ue(t))=="string"||t instanceof ti?My(i,"updateDoc",n._key,t,e,r):Oy(i,"updateDoc",n._key,t),qh(s,[o.toMutation(n._key,ge.exists(!0))])}function Ky(n,...t){var e,r,s;n=Ue(n);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof t[o]!="object"||Bl(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Bl(t[o])){const h=t[o];t[o]=(e=h.next)===null||e===void 0?void 0:e.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(n instanceof Jt)c=_e(n.firestore,Mn),u=zs(n._key.path),l={next:h=>{t[o]&&t[o](zh(c,n,h))},error:t[o+1],complete:t[o+2]};else{const h=_e(n,Zs);c=_e(h.firestore,Mn),u=h._query;const d=new jh(c);l={next:f=>{t[o]&&t[o](new $y(c,d,h,f))},error:t[o+1],complete:t[o+2]},xy(n._query)}return function(d,f,y,_){const g=new Ph(_),m=new vh(f,g,y);return d.asyncQueue.enqueueAndForget(async()=>yh(await so(d),m)),()=>{g.Qa(),d.asyncQueue.enqueueAndForget(async()=>Eh(await so(d),m))}}(sa(c),u,a,l)}function qh(n,t){return function(r,s){const i=new Re;return r.asyncQueue.enqueueAndForget(async()=>cy(await Ty(r),s,i)),i.promise}(sa(n),t)}function zh(n,t,e){const r=e.docs.get(t._key),s=new jh(n);return new $h(n,s,t._key,r,new Xn(e.hasPendingWrites,e.fromCache),t.converter)}function Gy(...n){return new oa("arrayUnion",n)}(function(t,e=!0){(function(s){Un=s})(Im),ls(new ar("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Mn(new jg(r.getProvider("auth-internal")),new Gg(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new O(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Er(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:e},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),vn(il,"4.5.1",t),vn(il,"4.5.1","esm2017")})();var Hy="firebase",Wy="10.10.0";/**
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
 */vn(Hy,Wy,"app");let Ci=null,Si=null;const Qy=()=>(Ci||(Ci=Tc({apiKey:"AIzaSyAEkDsTVEbr-spwGn7NP4WVMGjjFvc_Vnk",authDomain:"parrotbeak-2b0ae.firebaseapp.com",projectId:"parrotbeak-2b0ae",storageBucket:"parrotbeak-2b0ae.appspot.com",messagingSenderId:"696191016129",appId:"1:696191016129:web:9086db78bbf9d939e58840"})),Ci),Yy=()=>(Si||(Si=by(Qy())),Si),$l=n=>{const t=Object.create(null);for(let e=0;e<n.fields.length;e++)t[n.fields[e]]=n[n.fields[e]];return t};class Jy{constructor(t,e,r){this.id=t,this.collection=e,this.fields=r,this.ignoreAuth=!1}get ref(){return this._ref||(this._ref=Cy(Yy(),this.collection,this.id)),this._ref}fetch(){return qy(this.ref)}create(){return Ul(this.ref,$l(this))}async save(t=!1,e=It){try{const r=await this.fetch().catch(It);if(!t&&r&&r.exists())throw this.id+" already exists in "+this.collection+" ...";return e&&e(r),await Ul(this.ref,$l(this)),!0}catch(r){return fc(r),!1}}update(t){return zy(this.ref,t)}subscribeToData(t){return Ky(this.ref,t)}}const jl=n=>n===Ht.OFFER?"offerIceCandidates":"answerIceCandidates",Xy=n=>{const t=(n.getMonth()+1)*31,e=n.getDate();return(t+e).toString().padStart(3,"0")+Df(3)};class ql extends Jy{constructor(t,e,r,s=Cn){const i=new Date;super(t||Xy(i),"/quinque-rooms",["created","size","offerIceCandidates","answerIceCandidates","turns","answerPubKey","iv"]),t||(this.created=i,this.size=ao.includes(s)?s:Cn,this.offerIceCandidates=[],this.answerIceCandidates=[],this.turns=lc(this.size*this.size),this.answerPubKey=e,this.iv=r)}saveOffer(t){this.offer=t,this.update({offer:t})}saveAnswer(t){this.answer=t,this.update({answer:t})}addIceCandidate(t,e){const r=jl(t);this.update({[r]:Gy(e)})}clearIceCandidates(t){const e=jl(t);this.update({[e]:[]})}}const Kh=()=>!!(navigator!=null&&navigator.clipboard),Zy=n=>Kh()?(navigator.clipboard.writeText(n),!0):!1,tE={iceServers:[{urls:"stun:stun.services.mozilla.com"},{urls:"stun:stun.l.google.com:19302"}]};class eE{constructor(){this.onicecandidate=null,this.onstatechange=null,this.onmessage=null,this.dataChannel=null,this.remoteDescriptionApplied=new Promise(t=>{this.applyRemoteDescription=t})}init(){const t=this;this.connection=new RTCPeerConnection(tE),this.connection.onicecandidate=e=>{t.onicecandidate&&t.onicecandidate(e)},this.connection.onconnectionstatechange=e=>{t.onstatechange&&t.onstatechange(e)},this.connection.ondatachannel=e=>{const{channel:r}=e;r&&(r.onopen=()=>{},r.onclose=()=>{},r.onmessage=s=>{this.onmessage&&this.onmessage(s)},this.dataChannel=r)}}close(){var t;(t=this.connection)==null||t.close()}createDatachannel(t="default"){var e;this.dataChannel=((e=this.connection)==null?void 0:e.createDataChannel(t))||null,this.dataChannel&&(this.dataChannel.onopen=()=>{},this.dataChannel.onclose=()=>{},this.dataChannel.onmessage=r=>{this.onmessage&&this.onmessage(r)})}localDescription(){var t,e;return((e=(t=this.connection)==null?void 0:t.localDescription)==null?void 0:e.sdp)||""}createOffer(){var t;return(t=this.connection)==null?void 0:t.createOffer()}createAnswer(){var t;return(t=this.connection)==null?void 0:t.createAnswer()}async setRemoteDescription(t){var e;await((e=this.connection)==null?void 0:e.setRemoteDescription(t)),this.applyRemoteDescription()}setLocalDescription(t){var e;return(e=this.connection)==null?void 0:e.setLocalDescription(t)}addIceCandidate(t){var e;return(e=this.connection)==null?void 0:e.addIceCandidate(t)}sendChannelMessage(t){var e;if(!this.dataChannel||this.dataChannel.readyState!=="open"){(e=this.connection)==null||e.close();return}this.dataChannel.send(t)}}const dt=new eE,Gh={name:"ECDH",namedCurve:"P-384"},bi="AES-GCM",zl=n=>btoa(String.fromCharCode.apply(null,new Uint8Array(n))),Kl=n=>{const t=atob(n),e=new Uint8Array(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e.buffer},nE=n=>{const t=JSON.parse(n);return crypto.subtle.importKey("jwk",t,Gh,!0,[])};class rE{constructor(){this.pubKey=null,this.prKey=null,this.iv=crypto.getRandomValues(new Uint8Array(12)),this.waitingForSharedSecret=new Promise(t=>{this.resolveShareSecret=t})}init(){return new Promise(t=>{crypto.subtle.generateKey(Gh,!0,["deriveKey"]).then(async e=>{this.pubKey=e.publicKey,this.prKey=e.privateKey,t()})})}async deriveSharedKey(t){return this.prKey?crypto.subtle.deriveKey({name:"ECDH",public:t},this.prKey,{name:bi,length:256},!0,["encrypt","decrypt"]):null}async exportPublicKeyToJwk(){return this.pubKey?JSON.stringify(await crypto.subtle.exportKey("jwk",this.pubKey)):""}async setSharedKeyFromJwkString(t){this.shared={key:await this.deriveSharedKey(await nE(t))},this.resolveShareSecret()}setIvFromRemote(t){this.iv=new Uint8Array(Kl(t))}async ecnrypt(t,e,r){var s;if(e||(e=((s=this.shared)==null?void 0:s.key)||void 0),!e)throw"The key is not generated...";return zl(await crypto.subtle.encrypt({name:bi,iv:r||this.iv},e,new TextEncoder().encode(t)))}async decrypt(t,e,r){var s;if(e||(e=((s=this.shared)==null?void 0:s.key)||void 0),!e)throw"Key is not provided...";return new TextDecoder().decode(await crypto.subtle.decrypt({name:bi,iv:r||this.iv},e,Kl(t)))}ivString(){return zl(this.iv)}}const Mt=new rE;function sE(n){let t,e;return t=new ic({}),{c(){X(t.$$.fragment)},l(r){Z(t.$$.fragment,r)},m(r,s){tt(t,r,s),e=!0},p:It,i(r){e||(b(t.$$.fragment,r),e=!0)},o(r){k(t.$$.fragment,r),e=!1},d(r){et(t,r)}}}function iE(n){var d;let t,e,r,s=((d=n[4])==null?void 0:d.id)+"",i,o,a,l,c,u,h=n[5]&&cE(n);return{c(){t=L("p"),e=Ce("Room id: "),r=L("span"),i=Ce(s),o=Y(),a=L("input"),l=Y(),h&&h.c(),c=ne(),this.h()},l(f){t=F(f,"P",{class:!0});var y=W(t);e=Se(y,"Room id: "),r=F(y,"SPAN",{class:!0});var _=W(r);i=Se(_,s),_.forEach(R),y.forEach(R),o=J(f),a=F(f,"INPUT",{class:!0}),l=J(f),h&&h.l(f),c=ne(),this.h()},h(){D(r,"class","font-bold"),D(t,"class","pb-2"),a.value=n[1],D(a,"class",hE),a.readOnly=!0},m(f,y){Q(f,t,y),V(t,e),V(t,r),V(r,i),Q(f,o,y),Q(f,a,y),Q(f,l,y),h&&h.m(f,y),Q(f,c,y),u=!0},p(f,y){var _;(!u||y&16)&&s!==(s=((_=f[4])==null?void 0:_.id)+"")&&Ir(i,s),(!u||y&2&&a.value!==f[1])&&(a.value=f[1]),f[5]&&h.p(f,y)},i(f){u||(b(h),u=!0)},o(f){k(h),u=!1},d(f){f&&(R(t),R(o),R(a),R(l),R(c)),h&&h.d(f)}}}function oE(n){let t,e;return{c(){t=L("p"),e=Ce(n[3]),this.h()},l(r){t=F(r,"P",{class:!0});var s=W(t);e=Se(s,n[3]),s.forEach(R),this.h()},h(){D(t,"class","text-faded")},m(r,s){Q(r,t,s),V(t,e)},p(r,s){s&8&&Ir(e,r[3])},i:It,o:It,d(r){r&&R(t)}}}function aE(n){let t,e="Your browser does not support webRTC peer-to-peer connections.. If you see this message, please try to change to a browser which supports webRTC (hint: most of modern web browsers do).";return{c(){t=L("p"),t.textContent=e,this.h()},l(r){t=F(r,"P",{class:!0,"data-svelte-h":!0}),le(t)!=="svelte-touu31"&&(t.textContent=e),this.h()},h(){D(t,"class","text-faded")},m(r,s){Q(r,t,s)},p:It,i:It,o:It,d(r){r&&R(t)}}}function lE(n){let t,e;return t=new ic({}),{c(){X(t.$$.fragment)},l(r){Z(t.$$.fragment,r)},m(r,s){tt(t,r,s),e=!0},p:It,i(r){e||(b(t.$$.fragment,r),e=!0)},o(r){k(t.$$.fragment,r),e=!1},d(r){et(t,r)}}}function cE(n){let t,e,r,s;e=new Ae({props:{label:"Copy link",icon:Cf,class:"text-primary border-2 border-primary px-4"}}),e.$on("click",n[6]);let i=n[2]&&Gl(n);return{c(){t=L("div"),X(e.$$.fragment),r=Y(),i&&i.c(),this.h()},l(o){t=F(o,"DIV",{class:!0});var a=W(t);Z(e.$$.fragment,a),r=J(a),i&&i.l(a),a.forEach(R),this.h()},h(){D(t,"class","flex flex-row items-center gap-4 pt-6")},m(o,a){Q(o,t,a),tt(e,t,null),V(t,r),i&&i.m(t,null),s=!0},p(o,a){o[2]?i?i.p(o,a):(i=Gl(o),i.c(),i.m(t,null)):i&&(i.d(1),i=null)},i(o){s||(b(e.$$.fragment,o),s=!0)},o(o){k(e.$$.fragment,o),s=!1},d(o){o&&R(t),et(e),i&&i.d()}}}function Gl(n){let t,e=n[2].label+"",r,s;return{c(){t=L("p"),r=Ce(e),this.h()},l(i){t=F(i,"P",{class:!0});var o=W(t);r=Se(o,e),o.forEach(R),this.h()},h(){D(t,"class",s=n[2].class)},m(i,o){Q(i,t,o),V(t,r)},p(i,o){o&4&&e!==(e=i[2].label+"")&&Ir(r,e),o&4&&s!==(s=i[2].class)&&D(t,"class",s)},d(i){i&&R(t)}}}function uE(n){let t,e,r,s;const i=[lE,aE,oE,iE,sE],o=[];function a(l,c){return l[0]===null?0:l[0]?l[3]?2:l[1]?3:4:1}return t=a(n),e=o[t]=i[t](n),{c(){e.c(),r=ne()},l(l){e.l(l),r=ne()},m(l,c){o[t].m(l,c),Q(l,r,c),s=!0},p(l,[c]){let u=t;t=a(l),t===u?o[t].p(l,c):(re(),k(o[u],1,1,()=>{o[u]=null}),se(),e=o[t],e?e.p(l,c):(e=o[t]=i[t](l),e.c()),b(e,1),e.m(r.parentNode,r))},i(l){s||(b(e),s=!0)},o(l){k(e),s=!1},d(l){l&&R(r),o[t].d(l)}}}const hE="p-2 border border-gray-700 rounded-md w-full bg-gray-800";function fE(n,t,e){let r;we(n,ac,M=>e(11,r=M));const s=Kh(),i=As(),o={};let a=null,l="",c=null,u="",h=null,d=null;const f={},y=M=>{const w=M.target;w||e(3,u="Could not create a gaming session..."),w.connectionState==="connected"?i("connected",{size:f.size,status:f.type===Ht.OFFER?Wt.CONNECTED_AS_PLAYER1:Wt.CONNECTED_AS_PLAYER2,turns:f.turns}):w.connectionState==="failed"&&e(3,u="Negotiation failed. Check your network or disable VPN if you use one...")},_=async(M,w)=>{if(!w)return;await Mt.waitingForSharedSecret;const pt={type:"candidate",sdpMid:w.sdpMid,sdpMLineIndex:w.sdpMLineIndex,candidate:w.candidate},ut=await Mt.ecnrypt(JSON.stringify(pt));o[ut]||(h==null||h.addIceCandidate(M,ut),o[ut]=!0)},g=async()=>{if(!h)return;dt.init(),dt.onicecandidate=({candidate:pt})=>{_(Ht.ANSWER,pt)},dt.onstatechange=y,await Mt.setSharedKeyFromJwkString(f.offerPubKey);const M=new RTCSessionDescription({type:Ht.OFFER,sdp:await Mt.decrypt(f.offer)});await dt.setRemoteDescription(M);const w=await dt.createAnswer();if(!w||!w.sdp){e(3,u="Could not verify the peer connection...");return}await dt.setLocalDescription(new RTCSessionDescription(w)),f.answer=w.sdp,h.saveAnswer(await Mt.ecnrypt(w.sdp)),h.saveOffer("-")},m=async()=>{if(!h)return;const M=new RTCSessionDescription({type:Ht.ANSWER,sdp:await Mt.decrypt(f.answer)});await dt.setRemoteDescription(M),h.saveAnswer("-")},p=async M=>{const w=M.data()||{};if(!Object.keys(w).length)return;const pt=["size","turns","offerPubKey","iv"];for(let H=0;H<pt.length;H++){const U=pt[H];!f[U]&&w[U]&&(f[U]=w[U])}!f.answerPubKey&&w.answerPubKey&&(f.answerPubKey=w.answerPubKey,f.type===Ht.OFFER&&(Mt.setIvFromRemote(w.iv),await Mt.setSharedKeyFromJwkString(w.answerPubKey),f.type===Ht.OFFER&&(h==null||h.saveOffer(await Mt.ecnrypt(dt.localDescription()))))),!f.offer&&w.offer&&(f.offer=w.offer,f.type===Ht.ANSWER&&g()),!f.answer&&w.answer&&(f.answer=w.answer,m());const ut=async H=>{await dt.remoteDescriptionApplied;for(let U=0;U<H.length;U++){let ft=null;try{ft=JSON.parse(await Mt.decrypt(H[U]))}catch(mt){fc(mt)}ft&&(o[H[U]]||(await dt.addIceCandidate(ft.candidate?ft:null),o[H[U]]=!0))}};f.type===Ht.OFFER&&w.answerIceCandidates.length?(await Mt.waitingForSharedSecret,await ut(w.answerIceCandidates),h==null||h.clearIceCandidates(Ht.ANSWER)):f.type===Ht.ANSWER&&w.offerIceCandidates.length&&(await Mt.waitingForSharedSecret,await ut(w.offerIceCandidates),h==null||h.clearIceCandidates(Ht.OFFER))},P=async M=>{await Mt.init(),e(4,h=new ql(M)),d=h.subscribeToData(p),dt.init(),dt.onicecandidate=({candidate:pt})=>{_(Ht.OFFER,pt)},dt.onstatechange=y,dt.createDatachannel();const w=await dt.createOffer();if(!w||!w.sdp){e(3,u="Could not set up a stable connection...");return}f.type=Ht.OFFER,h.update({offerPubKey:await Mt.exportPublicKeyToJwk()}),dt.setLocalDescription(w)},N=async()=>{await Mt.init();let M=parseInt(r.url.searchParams.get("s")||String(Cn));ao.includes(M)||(M=Cn),e(4,h=new ql("",await Mt.exportPublicKeyToJwk(),Mt.ivString(),M)),await!h.save()&&confirm("This room ID is already taken. Refresh the page to get a new one.")&&window.location.reload(),e(1,l=r.url.protocol+"//"+r.url.host+r.url.pathname+"?room="+h.id),h.subscribeToData(p),f.type=Ht.ANSWER},G=()=>{e(2,c=Zy(l)?{class:"text-green-500",label:"Link copied!"}:{class:"text-red-500",label:"Could not copy..."})};return sc(()=>{if(e(0,a=!!window.RTCPeerConnection),!a)return;const M=r.url.searchParams.get("room");M?P(M):N()}),hf(()=>{d&&d()}),[a,l,c,u,h,s,G]}class dE extends Ve{constructor(t){super(),ke(this,t,fE,uE,De,{})}}function Hl(n,t,e){const r=n.slice();return r[63]=t[e],r[65]=e,r}function Wl(n,t,e){const r=n.slice();return r[63]=t[e],r[67]=e,r}function Ql(n){let t,e;return t=new Ff({props:{rowIndex:n[65],colIndex:n[67],selected:n[0][n[65]][n[67]],selectCandidate:n[3][n[65]][n[67]],hoverColor:n[16],disabled:n[1],hoverCoords:n[6]}}),t.$on("click",n[17]),t.$on("enter",n[20]),t.$on("leave",n[18]),{c(){X(t.$$.fragment)},l(r){Z(t.$$.fragment,r)},m(r,s){tt(t,r,s),e=!0},p(r,s){const i={};s[0]&1&&(i.selected=r[0][r[65]][r[67]]),s[0]&8&&(i.selectCandidate=r[3][r[65]][r[67]]),s[0]&65536&&(i.hoverColor=r[16]),s[0]&2&&(i.disabled=r[1]),s[0]&64&&(i.hoverCoords=r[6]),t.$set(i)},i(r){e||(b(t.$$.fragment,r),e=!0)},o(r){k(t.$$.fragment,r),e=!1},d(r){et(t,r)}}}function Yl(n){let t,e,r,s=Be({length:n[8]}),i=[];for(let a=0;a<s.length;a+=1)i[a]=Ql(Wl(n,s,a));const o=a=>k(i[a],1,1,()=>{i[a]=null});return{c(){t=L("div");for(let a=0;a<i.length;a+=1)i[a].c();e=Y(),this.h()},l(a){t=F(a,"DIV",{class:!0});var l=W(t);for(let c=0;c<i.length;c+=1)i[c].l(l);e=J(l),l.forEach(R),this.h()},h(){D(t,"class","flex flex-row gap-1")},m(a,l){Q(a,t,l);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(t,null);V(t,e),r=!0},p(a,l){if(l[0]&1507659){s=Be({length:a[8]});let c;for(c=0;c<s.length;c+=1){const u=Wl(a,s,c);i[c]?(i[c].p(u,l),b(i[c],1)):(i[c]=Ql(u),i[c].c(),b(i[c],1),i[c].m(t,e))}for(re(),c=s.length;c<i.length;c+=1)o(c);se()}},i(a){if(!r){for(let l=0;l<s.length;l+=1)b(i[l]);r=!0}},o(a){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)k(i[l]);r=!1},d(a){a&&R(t),Rs(i,a)}}}function mE(n){let t,e="This will reset the current board and it's progress. Continue?";return{c(){t=L("p"),t.textContent=e},l(r){t=F(r,"P",{"data-svelte-h":!0}),le(t)!=="svelte-1jpj5pu"&&(t.textContent=e)},m(r,s){Q(r,t,s)},p:It,d(r){r&&R(t)}}}function gE(n){let t,e="A tie!";return{c(){t=L("p"),t.textContent=e,this.h()},l(r){t=F(r,"P",{class:!0,"data-svelte-h":!0}),le(t)!=="svelte-16n1wz6"&&(t.textContent=e),this.h()},h(){D(t,"class","text-white")},m(r,s){Q(r,t,s)},p:It,d(r){r&&R(t)}}}function pE(n){let t,e;return{c(){t=L("p"),e=Ce("Player 2 won!"),this.h()},l(r){t=F(r,"P",{class:!0});var s=W(t);e=Se(s,"Player 2 won!"),s.forEach(R),this.h()},h(){D(t,"class",ii)},m(r,s){Q(r,t,s),V(t,e)},p:It,d(r){r&&R(t)}}}function _E(n){let t,e;return{c(){t=L("p"),e=Ce("Player 1 won!"),this.h()},l(r){t=F(r,"P",{class:!0});var s=W(t);e=Se(s,"Player 1 won!"),s.forEach(R),this.h()},h(){D(t,"class",si)},m(r,s){Q(r,t,s),V(t,e)},p:It,d(r){r&&R(t)}}}function yE(n){let t,e="NICE!",r,s,i,o,a,l,c,u,h,d,f;function y(m,p){return m[15][0]>m[15][1]?_E:m[15][0]<m[15][1]?pE:gE}let _=y(n),g=_(n);return l=new cc({props:{score1:n[15][0],score2:n[15][1],score1Class:"font-bold "+si,score2Class:"font-bold "+ii}}),u=new Ae({props:{label:"Play again",icon:oc,class:"border border-indigo-300 text-indigo-300 mx-auto mt-10 px-6"}}),u.$on("click",n[22]),d=new Ae({props:{label:"Back",class:"text-faded mx-auto mt-4 px-6"}}),d.$on("click",n[24]),{c(){t=L("p"),t.textContent=e,r=Y(),s=L("div"),i=L("div"),o=L("div"),g.c(),a=Y(),X(l.$$.fragment),c=Y(),X(u.$$.fragment),h=Y(),X(d.$$.fragment),this.h()},l(m){t=F(m,"P",{"data-svelte-h":!0}),le(t)!=="svelte-p3lnqo"&&(t.textContent=e),r=J(m),s=F(m,"DIV",{class:!0});var p=W(s);i=F(p,"DIV",{});var P=W(i);o=F(P,"DIV",{class:!0});var N=W(o);g.l(N),a=J(N),Z(l.$$.fragment,N),N.forEach(R),c=J(P),Z(u.$$.fragment,P),h=J(P),Z(d.$$.fragment,P),P.forEach(R),p.forEach(R),this.h()},h(){D(o,"class","text-4xl text-center"),D(s,"class","h-96 max-w-full max-h-full flex flex-col justify-center items-center")},m(m,p){Q(m,t,p),Q(m,r,p),Q(m,s,p),V(s,i),V(i,o),g.m(o,null),V(o,a),tt(l,o,null),V(i,c),tt(u,i,null),V(i,h),tt(d,i,null),f=!0},p(m,p){_===(_=y(m))&&g?g.p(m,p):(g.d(1),g=_(m),g&&(g.c(),g.m(o,a)));const P={};p[0]&32768&&(P.score1=m[15][0]),p[0]&32768&&(P.score2=m[15][1]),l.$set(P)},i(m){f||(b(l.$$.fragment,m),b(u.$$.fragment,m),b(d.$$.fragment,m),f=!0)},o(m){k(l.$$.fragment,m),k(u.$$.fragment,m),k(d.$$.fragment,m),f=!1},d(m){m&&(R(t),R(r),R(s)),g.d(),et(l),et(u),et(d)}}}function EE(n){let t,e;return t=new dE({}),t.$on("connected",n[25]),{c(){X(t.$$.fragment)},l(r){Z(t.$$.fragment,r)},m(r,s){tt(t,r,s),e=!0},p:It,i(r){e||(b(t.$$.fragment,r),e=!0)},o(r){k(t.$$.fragment,r),e=!1},d(r){et(t,r)}}}function vE(n){let t,e="Player disconnected... Please start another session.";return{c(){t=L("p"),t.textContent=e},l(r){t=F(r,"P",{"data-svelte-h":!0}),le(t)!=="svelte-xd9p7l"&&(t.textContent=e)},m(r,s){Q(r,t,s)},p:It,i:It,o:It,d(r){r&&R(t)}}}function TE(n){let t,e,r,s;const i=[vE,EE],o=[];function a(l,c){return l[9]?0:1}return t=a(n),e=o[t]=i[t](n),{c(){e.c(),r=ne()},l(l){e.l(l),r=ne()},m(l,c){o[t].m(l,c),Q(l,r,c),s=!0},p(l,c){let u=t;t=a(l),t===u?o[t].p(l,c):(re(),k(o[u],1,1,()=>{o[u]=null}),se(),e=o[t],e?e.p(l,c):(e=o[t]=i[t](l),e.c()),b(e,1),e.m(r.parentNode,r))},i(l){s||(b(e),s=!0)},o(l){k(e),s=!1},d(l){l&&R(r),o[t].d(l)}}}function wE(n){let t,e;return t=new Tf({}),{c(){X(t.$$.fragment)},l(r){Z(t.$$.fragment,r)},m(r,s){tt(t,r,s),e=!0},i(r){e||(b(t.$$.fragment,r),e=!0)},o(r){k(t.$$.fragment,r),e=!1},d(r){et(t,r)}}}function IE(n){let t,e,r,s,i,o,a,l,c,u,h,d,f,y,_,g,m,p,P,N,G,M,w,pt,ut,H,U,ft,mt,_t;s=new Ae({props:{icon:Sf,class:"text-primary"}}),s.$on("click",n[21]),l=new sd({props:{class:n[14],color:n[2]}}),u=new cc({props:{score1:n[15][0],score2:n[15][1],score1Class:"font-bold "+si,score2Class:"font-bold "+ii}}),d=new Ae({props:{class:"text-primary",icon:oc}}),d.$on("click",n[22]);let ie=Be({length:n[8]}),at=[];for(let A=0;A<ie.length;A+=1)at[A]=Yl(Hl(n,ie,A));const Ot=A=>k(at[A],1,1,()=>{at[A]=null});return G=new Ae({props:{label:"Rules",class:"text-faded text-sm"}}),G.$on("click",n[26]),w=new Hn({props:{showing:n[4],title:"Reset the game?",okLabel:"Reset",$$slots:{default:[mE]},$$scope:{ctx:n}}}),w.$on("ok",n[37]),w.$on("dismiss",n[23]),ut=new Hn({props:{showing:n[5],hideOk:!0,hideCancel:!0,class:"font-bold",$$slots:{default:[yE]},$$scope:{ctx:n}}}),ut.$on("dismiss",n[24]),U=new Hn({props:{showing:n[10]||n[9],title:"Waiting for peer to accept",hideOk:!0,$$slots:{default:[TE]},$$scope:{ctx:n}}}),U.$on("dismiss",n[21]),mt=new Hn({props:{showing:n[7],hideOk:!0,title:"Game rules",$$slots:{default:[wE]},$$scope:{ctx:n}}}),mt.$on("dismiss",n[27]),{c(){t=L("div"),e=L("div"),r=L("div"),X(s.$$.fragment),i=Y(),o=L("div"),a=L("div"),X(l.$$.fragment),c=Y(),X(u.$$.fragment),h=Y(),X(d.$$.fragment),f=Y(),y=L("div"),_=L("div"),g=L("p"),m=Ce(n[11]),p=Y();for(let A=0;A<at.length;A+=1)at[A].c();P=Y(),N=L("div"),X(G.$$.fragment),M=Y(),X(w.$$.fragment),pt=Y(),X(ut.$$.fragment),H=Y(),X(U.$$.fragment),ft=Y(),X(mt.$$.fragment),this.h()},l(A){t=F(A,"DIV",{class:!0});var B=W(t);e=F(B,"DIV",{class:!0});var Dt=W(e);r=F(Dt,"DIV",{class:!0});var St=W(r);Z(s.$$.fragment,St),i=J(St),o=F(St,"DIV",{class:!0});var Ne=W(o);a=F(Ne,"DIV",{});var oe=W(a);Z(l.$$.fragment,oe),c=J(oe),Z(u.$$.fragment,oe),oe.forEach(R),Ne.forEach(R),h=J(St),Z(d.$$.fragment,St),St.forEach(R),f=J(Dt),y=F(Dt,"DIV",{class:!0});var ae=W(y);_=F(ae,"DIV",{class:!0});var Te=W(_);g=F(Te,"P",{class:!0});var wt=W(g);m=Se(wt,n[11]),wt.forEach(R),Te.forEach(R),p=J(ae);for(let hn=0;hn<at.length;hn+=1)at[hn].l(ae);ae.forEach(R),P=J(Dt),N=F(Dt,"DIV",{class:!0});var Oe=W(N);Z(G.$$.fragment,Oe),Oe.forEach(R),Dt.forEach(R),B.forEach(R),M=J(A),Z(w.$$.fragment,A),pt=J(A),Z(ut.$$.fragment,A),H=J(A),Z(U.$$.fragment,A),ft=J(A),Z(mt.$$.fragment,A),this.h()},h(){D(o,"class","flex-1 flex flex-row justify-center relative"),D(r,"class","flex flex-row gap-2 pb-2 pt-3 px-2 items-start"),D(g,"class",n[12]),D(_,"class","relative"),D(y,"class","flex-1 flex flex-col justify-center w-full max-w-[600px] mx-auto gap-1 px-3"),D(N,"class","flex flex-row justify-center pb-2"),D(e,"class",n[13]),D(t,"class","h-device relative")},m(A,B){Q(A,t,B),V(t,e),V(e,r),tt(s,r,null),V(r,i),V(r,o),V(o,a),tt(l,a,null),V(a,c),tt(u,a,null),V(r,h),tt(d,r,null),V(e,f),V(e,y),V(y,_),V(_,g),V(g,m),V(y,p);for(let Dt=0;Dt<at.length;Dt+=1)at[Dt]&&at[Dt].m(y,null);V(e,P),V(e,N),tt(G,N,null),Q(A,M,B),tt(w,A,B),Q(A,pt,B),tt(ut,A,B),Q(A,H,B),tt(U,A,B),Q(A,ft,B),tt(mt,A,B),_t=!0},p(A,B){const Dt={};B[0]&16384&&(Dt.class=A[14]),B[0]&4&&(Dt.color=A[2]),l.$set(Dt);const St={};if(B[0]&32768&&(St.score1=A[15][0]),B[0]&32768&&(St.score2=A[15][1]),u.$set(St),(!_t||B[0]&2048)&&Ir(m,A[11]),(!_t||B[0]&4096)&&D(g,"class",A[12]),B[0]&1507659){ie=Be({length:A[8]});let wt;for(wt=0;wt<ie.length;wt+=1){const Oe=Hl(A,ie,wt);at[wt]?(at[wt].p(Oe,B),b(at[wt],1)):(at[wt]=Yl(Oe),at[wt].c(),b(at[wt],1),at[wt].m(y,null))}for(re(),wt=ie.length;wt<at.length;wt+=1)Ot(wt);se()}(!_t||B[0]&8192)&&D(e,"class",A[13]);const Ne={};B[0]&16&&(Ne.showing=A[4]),B[2]&64&&(Ne.$$scope={dirty:B,ctx:A}),w.$set(Ne);const oe={};B[0]&32&&(oe.showing=A[5]),B[0]&32768|B[2]&64&&(oe.$$scope={dirty:B,ctx:A}),ut.$set(oe);const ae={};B[0]&1536&&(ae.showing=A[10]||A[9]),B[0]&512|B[2]&64&&(ae.$$scope={dirty:B,ctx:A}),U.$set(ae);const Te={};B[0]&128&&(Te.showing=A[7]),B[2]&64&&(Te.$$scope={dirty:B,ctx:A}),mt.$set(Te)},i(A){if(!_t){b(s.$$.fragment,A),b(l.$$.fragment,A),b(u.$$.fragment,A),b(d.$$.fragment,A);for(let B=0;B<ie.length;B+=1)b(at[B]);b(G.$$.fragment,A),b(w.$$.fragment,A),b(ut.$$.fragment,A),b(U.$$.fragment,A),b(mt.$$.fragment,A),_t=!0}},o(A){k(s.$$.fragment,A),k(l.$$.fragment,A),k(u.$$.fragment,A),k(d.$$.fragment,A),at=at.filter(Boolean);for(let B=0;B<at.length;B+=1)k(at[B]);k(G.$$.fragment,A),k(w.$$.fragment,A),k(ut.$$.fragment,A),k(U.$$.fragment,A),k(mt.$$.fragment,A),_t=!1},d(A){A&&(R(t),R(M),R(pt),R(H),R(ft)),et(s),et(l),et(u),et(d),Rs(at,A),et(G),et(w,A),et(ut,A),et(U,A),et(mt,A)}}}const si="text-blue-300",ii="text-pink-300";function AE(n,t,e){let r,s,i,o,a,l,c,u,h,d,f,y,_,g,m,p,P;we(n,ac,v=>e(42,g=v)),we(n,Qe,v=>e(43,m=v)),we(n,We,v=>e(44,p=v)),we(n,Zn,v=>e(45,P=v));let N=[],G=[],M=0,w=[],pt=!1,ut=!1,H=!1,U=!1,ft=null,mt=null,_t=!1,ie=null,at=He.AI,Ot=null,A=!1;const B=v=>dt.sendChannelMessage(JSON.stringify(v)),Dt=parseInt(g.url.searchParams.get("s")||String(Cn));let St=ao.indexOf(Dt)>=0?Dt:Cn;const Ne=(v,I,z)=>{if(!(!N[v]||N[v][I]!==!1))return e(0,N[v][I]=z,N),[v,I]},oe=(v,I)=>[[v,I],[v-1,I],[v+1,I],[v,I-1],[v,I+1]],ae=(v,I)=>[[v,I],[v-1,I-1],[v-1,I+1],[v+1,I-1],[v+1,I+1]],Te=(v,I)=>[[v,I],[v+1,I-1],[v+2,I-2],[v-1,I+1],[v-2,I+2]],wt=(v,I)=>[[v,I],[v-1,I-1],[v-2,I-2],[v+1,I+1],[v+2,I+2]],Oe=(v,I)=>[[v,I],[v,I-1],[v,I-2],[v,I+1],[v,I+2]],hn=(v,I)=>[[v,I],[v-1,I],[v-2,I],[v+1,I],[v+2,I]],Hh=(v,I,z)=>{const st=[];let nt=[];switch(P){case ct.AXES:nt=oe(v,I);break;case ct.DIAGONAL:nt=ae(v,I);break;case ct.RISING:nt=Te(v,I);break;case ct.FALLING:nt=wt(v,I);break;case ct.HORIZONTAL:nt=Oe(v,I);break;case ct.VERTICAL:nt=hn(v,I);break;default:nt=[[v,I]];break}for(let At=0;At<nt.length;At++)st.push(Ne(nt[At][0],nt[At][1],z));return st},Wh=(v,I)=>{const z=[];for(let st=0;st<v.length;st++){if(!v[st])continue;const[nt,At]=v[st],Br=At+1,dn=At+2,qn=At-1,lf=At-2,ha=nt+1,fa=nt+2,da=nt-1,ma=nt-2;N[nt][dn]===I&&N[nt][Br]!==!1&&z.push([nt,Br]),N[nt][lf]===I&&N[nt][qn]!==!1&&z.push([nt,qn]),N[fa]&&N[fa][At]===I&&N[ha][At]!==!1&&z.push([ha,At]),N[ma]&&N[ma][At]===I&&N[da][At]!==!1&&z.push([da,At])}return z},Qh=(v,I)=>{const z=Wh(v,I);for(let st=0;st<z.length;st++)e(0,N[z[st][0]][z[st][1]]=I,N)},Yh=async()=>{e(1,_t=!0),mt||(mt=new ad(N));const v=await mt.selectBlock(P);e(1,_t=!1),v&&oi(v[0],v[1],!0)},oi=async(v,I,z)=>{if(U)return;const st=r?"color1":"color2";if(e(30,ft=null),Qh(Hh(v,I,st),st),!Object.values(N).some(nt=>nt.some(At=>!At))){c&&B({type:"placedBlock",rowIndex:v,colIndex:I}),e(29,U=!0),setTimeout(nf,500);return}e(28,M++,M),await Jl(),r&&(te(Zn,P=p,P),te(We,p=m,p),te(Qe,m=c?w[M+1]:Qr(),m)),z!==!0&&(l?Yh():c&&(B({type:"placedBlock",rowIndex:v,colIndex:I}),e(1,_t=!0)))},Jh=async({detail:{rowIndex:v,colIndex:I}})=>{if(id.is.webMobile&&(!ft||ft[0]!==v||ft[1]!==I)){e(30,ft=[v,I]);return}H=!0,oi(v,I)},ca=()=>{const v=[];for(let I=0;I<St;I++){v[I]=[];for(let z=0;z<St;z++)v[I][z]=!1}e(3,G=v),e(6,ie=null),e(30,ft=null)},ai=()=>{const v=[];for(let I=0;I<St;I++){v[I]=[];for(let z=0;z<St;z++)v[I][z]=!1}e(0,N=v),ca()},Xh=v=>{let I=0,z=0;for(let st=0;st<v.length;st++)for(let nt=0;nt<v[st].length;nt++)v[st][nt]==="color1"?I+=rs(v,st,nt,"color1"):v[st][nt]==="color2"&&(z+=rs(v,st,nt,"color2"));return[I,z]},fn=v=>{ai(),e(28,M=0),te(Zn,P=ct.SINGLE,P),te(We,p=Qr(),p),te(Qe,m=Qr(),m),ua(),H=!1,e(29,U=!1),e(1,_t=!1),e(30,ft=null),mt?(mt.cancelActiveActions(),mt=null):c&&(Ot===Wt.CONNECTED_AS_PLAYER1&&e(1,_t=!0),v||(w=lc(St*St),te(We,p=w[1],p),te(Qe,m=w[2],m),B({type:"resetGame",turns:w})))},Zh=({detail:{rowIndex:v,colIndex:I}})=>{let z=[];switch(P){case ct.AXES:z=oe(v,I);break;case ct.DIAGONAL:z=ae(v,I);break;case ct.RISING:z=Te(v,I);break;case ct.FALLING:z=wt(v,I);break;case ct.HORIZONTAL:z=Oe(v,I);break;case ct.VERTICAL:z=hn(v,I);break}for(let st=0;st<z.length;st++)G[z[st][0]]!==void 0&&G[z[st][0]][z[st][1]]!==void 0&&e(3,G[z[st][0]][z[st][1]]=s,G);e(6,ie=[v,I])},tf=()=>{H&&!U&&!confirm("Do you want to leave this page now?")||Af(Vf("/"))},ef=()=>{if(ut){li(),setTimeout(fn,250);return}if(!H||U){fn();return}e(4,pt=!0)},ua=()=>{e(4,pt=!1)},nf=()=>{e(5,ut=!0)},li=()=>{e(5,ut=!1)},rf=({detail:{size:v,status:I,turns:z}})=>{e(8,St=v),e(32,Ot=I),w=z,ai(),te(We,p=z[1],p),te(Qe,m=z[2],m),dt.onstatechange=st=>{const nt=st.target;(!nt||["disconnected","failed"].includes(nt.connectionState))&&e(32,Ot=Wt.DISCONNECTED)},dt.onmessage=({data:st})=>{try{const{type:nt,rowIndex:At,colIndex:Br,turns:dn}=JSON.parse(st);switch(nt){case"placedBlock":oi(At,Br,!0),e(1,_t=!1);break;case"resetGame":{const qn=()=>{fn(!0),dn&&(w=dn,te(We,p=dn[1],p),te(Qe,m=dn[2],m))};ut?(li(),setTimeout(qn,250)):qn();break}case"left":dt==null||dt.close(),e(32,Ot=Wt.DISCONNECTED);break;default:break}}catch{dt==null||dt.close(),e(32,Ot=Wt.DISCONNECTED)}},Ot===Wt.CONNECTED_AS_PLAYER1&&e(1,_t=!0)},sf=()=>{e(7,A=!0)},of=()=>{e(7,A=!1)};ai(),sc(()=>{if(g.url.searchParams.get("room"))e(31,at=He.FRIEND_ONLINE),e(32,Ot=Wt.CONNECTING);else{const I=parseInt(g.url.searchParams.get("m")||String(He.AI));Object.values(He).includes(I)&&e(31,at=I),at===He.FRIEND_ONLINE&&e(32,Ot=Wt.CONNECTING)}fn()}),If(()=>{B({type:"left"}),c&&(dt==null||dt.close())});const af=()=>{fn()};return n.$$.update=()=>{n.$$.dirty[0]&268435456&&e(35,r=kf(M)),n.$$.dirty[1]&16&&e(16,s=r?"color1":"color2"),n.$$.dirty[1]&16&&e(2,i=r?si:ii),n.$$.dirty[0]&1&&e(15,o=Xh(N)),n.$$.dirty[0]&536870912&&e(14,a="pb-2"+(U?" invisible":"")),n.$$.dirty[1]&1&&e(34,l=at===He.AI),n.$$.dirty[1]&9&&e(33,c=!l&&at===He.FRIEND_ONLINE),n.$$.dirty[0]&2&&e(13,u="h-full flex flex-col relative"+(_t?" cursor-wait":"")),n.$$.dirty[0]&4|n.$$.dirty[1]&30&&e(36,h=l&&!r||c&&r&&Ot===Wt.CONNECTED_AS_PLAYER1||c&&!r&&Ot===Wt.CONNECTED_AS_PLAYER2?" text-faded":" "+i),n.$$.dirty[1]&32&&e(12,d="font-bold text-center text-sm pb-1"+h),n.$$.dirty[0]&1073741824|n.$$.dirty[1]&30&&e(11,f=ft?"Confirm selection":r?l||c&&Ot===Wt.CONNECTED_AS_PLAYER2?"Your turn":"Player's 1 turn...":l?"Computer...":c&&Ot===Wt.CONNECTED_AS_PLAYER1?"Your turn":"Player's 2 turn..."),n.$$.dirty[1]&2&&e(10,y=Ot===Wt.CONNECTING),n.$$.dirty[1]&6&&e(9,_=c&&Ot===Wt.DISCONNECTED)},[N,_t,i,G,pt,ut,ie,A,St,_,y,f,d,u,a,o,s,Jh,ca,fn,Zh,tf,ef,ua,li,rf,sf,of,M,U,ft,at,Ot,c,l,r,h,af]}class BE extends Ve{constructor(t){super(),ke(this,t,AE,IE,De,{},null,[-1,-1,-1])}}export{BE as component};
