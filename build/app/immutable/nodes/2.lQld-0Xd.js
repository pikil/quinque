import{s as Ne,e as _,t as Y,a as N,c as b,b as w,d as Z,f as $,g as D,l as we,m as u,i as xe,h as r,o as De,n as Re,p as ge,q as Ae}from"../chunks/scheduler.tTzP0KDC.js";import{S as Le,i as Oe,c as q,a as G,m as H,t as I,b as _e,d as A,e as W,g as be}from"../chunks/index._Y5kTMN9.js";import{B as z,e as $e}from"../chunks/Button.zycOLzZ9.js";import{a as Be,g as ve}from"../chunks/entry.MA6lZaI-.js";import{b as je,a as Fe}from"../chunks/bootstrap-icons.p0hXF6yK.js";import{p as E}from"../chunks/objects.iCGkf26S.js";import{r as Pe,m as Ee,d as Se}from"../chunks/strings.kOqpECw8.js";function Ie(o,e,s){const l=o.slice();return l[13]=e[s].label,l[14]=e[s].onclick,l}function ye(o){let e,s;return e=new z({props:{label:o[13],dense:!0,rounded:!1,class:Ue}}),e.$on("click",o[14]),{c(){q(e.$$.fragment)},l(l){G(e.$$.fragment,l)},m(l,m){H(e,l,m),s=!0},p:Re,i(l){s||(I(e.$$.fragment,l),s=!0)},o(l){A(e.$$.fragment,l),s=!1},d(l){W(e,l)}}}function ke(o){let e,s,l,m,y,k,p;return m=new z({props:{label:"Join",class:"font-bold text-primary",disabled:o[1]}}),m.$on("click",o[8]),{c(){e=_("div"),s=_("input"),l=N(),q(m.$$.fragment),this.h()},l(n){e=b(n,"DIV",{class:!0});var c=w(e);s=b(c,"INPUT",{class:!0,placeholder:!0,maxlength:!0}),l=D(c),G(m.$$.fragment,c),c.forEach($),this.h()},h(){u(s,"class","w-24 p-2 bg-gray-600 rounded-md text-gray-300 uppercase"),u(s,"placeholder","Room ID"),u(s,"maxlength","6"),u(e,"class","flex flex-row items-center justify-center")},m(n,c){xe(n,e,c),r(e,s),ge(s,o[0]),r(e,l),H(m,e,null),y=!0,k||(p=Ae(s,"input",o[10]),k=!0)},p(n,c){c&1&&s.value!==n[0]&&ge(s,n[0]);const h={};c&2&&(h.disabled=n[1]),m.$set(h)},i(n){y||(I(m.$$.fragment,n),y=!0)},o(n){A(m.$$.fragment,n),y=!1},d(n){n&&$(e),W(m),k=!1,p()}}}function Ve(o){let e,s,l,m,y,k,p,n,c,h,J,x,K,C,Q,g,L="Play",le,te,se,S,V,R,j,ne,re,F,oe,ce,B,ie,ae;p=new z({props:{href:Pe,icon:je,class:"mx-auto text-faded mt-2",iconClass:"h-5 h-5",target:"_blank"}}),h=new z({props:{rounded:!1,label:"1 player",class:o[3][0]}}),h.$on("click",o[5]),x=new z({props:{rounded:!1,label:"2 players",class:o[3][1]}}),x.$on("click",o[6]),C=new z({props:{rounded:!1,label:"Online",class:o[3][2]}}),C.$on("click",o[7]);let P=$e(o[4]),i=[];for(let t=0;t<P.length;t+=1)i[t]=ye(Ie(o,P,t));const Ce=t=>A(i[t],1,1,()=>{i[t]=null});let f=o[2]&&ke(o);return{c(){e=_("div"),s=_("header"),l=_("h1"),m=Y("Welcome to "),y=Y(Ee),k=N(),q(p.$$.fragment),n=N(),c=_("div"),q(h.$$.fragment),J=N(),q(x.$$.fragment),K=N(),q(C.$$.fragment),Q=N(),g=_("p"),g.textContent=L,le=N();for(let t=0;t<i.length;t+=1)i[t].c();te=N(),f&&f.c(),se=N(),S=_("div"),V=_("footer"),R=_("div"),j=_("a"),ne=Y("About"),re=N(),F=_("a"),oe=Y("Rules"),ce=N(),B=_("a"),ie=Y("Contacts"),this.h()},l(t){e=b(t,"DIV",{class:!0});var a=w(e);s=b(a,"HEADER",{class:!0});var v=w(s);l=b(v,"H1",{class:!0});var M=w(l);m=Z(M,"Welcome to "),y=Z(M,Ee),M.forEach($),k=D(v),G(p.$$.fragment,v),v.forEach($),n=D(a),c=b(a,"DIV",{class:!0});var O=w(c);G(h.$$.fragment,O),J=D(O),G(x.$$.fragment,O),K=D(O),G(C.$$.fragment,O),O.forEach($),Q=D(a),g=b(a,"P",{class:!0,"data-svelte-h":!0}),we(g)!=="svelte-1vcwj8a"&&(g.textContent=L),le=D(a);for(let fe=0;fe<i.length;fe+=1)i[fe].l(a);te=D(a),f&&f.l(a),se=D(a),S=b(a,"DIV",{class:!0});var d=w(S);V=b(d,"FOOTER",{class:!0});var X=w(V);R=b(X,"DIV",{class:!0});var T=w(R);j=b(T,"A",{href:!0,class:!0});var de=w(j);ne=Z(de,"About"),de.forEach($),re=D(T),F=b(T,"A",{href:!0,class:!0});var pe=w(F);oe=Z(pe,"Rules"),pe.forEach($),ce=D(T),B=b(T,"A",{href:!0,class:!0,target:!0});var he=w(B);ie=Z(he,"Contacts"),he.forEach($),T.forEach($),X.forEach($),d.forEach($),a.forEach($),this.h()},h(){u(l,"class","text-white font-bold text-center text-3xl"),u(s,"class","pt-12 pb-6"),u(c,"class","flex flex-row items-center justify-center"),u(g,"class","text-faded text-center text-xl"),u(j,"href",Me),u(j,"class",me),u(F,"href",Te),u(F,"class",me),u(B,"href",Se),u(B,"class",me),u(B,"target","_blank"),u(R,"class","flex flex-row justify-center text-faded items-center gap-6"),u(V,"class","py-4"),u(S,"class","flex-1 flex flex-col justify-end"),u(e,"class","h-full flex flex-col justify-center gap-8")},m(t,a){xe(t,e,a),r(e,s),r(s,l),r(l,m),r(l,y),r(s,k),H(p,s,null),r(e,n),r(e,c),H(h,c,null),r(c,J),H(x,c,null),r(c,K),H(C,c,null),r(e,Q),r(e,g),r(e,le);for(let v=0;v<i.length;v+=1)i[v]&&i[v].m(e,null);r(e,te),f&&f.m(e,null),r(e,se),r(e,S),r(S,V),r(V,R),r(R,j),r(j,ne),r(R,re),r(R,F),r(F,oe),r(R,ce),r(R,B),r(B,ie),ae=!0},p(t,[a]){const v={};a&8&&(v.class=t[3][0]),h.$set(v);const M={};a&8&&(M.class=t[3][1]),x.$set(M);const O={};if(a&8&&(O.class=t[3][2]),C.$set(O),a&16){P=$e(t[4]);let d;for(d=0;d<P.length;d+=1){const X=Ie(t,P,d);i[d]?(i[d].p(X,a),I(i[d],1)):(i[d]=ye(X),i[d].c(),I(i[d],1),i[d].m(e,te))}for(be(),d=P.length;d<i.length;d+=1)Ce(d);_e()}t[2]?f?(f.p(t,a),a&4&&I(f,1)):(f=ke(t),f.c(),I(f,1),f.m(e,se)):f&&(be(),A(f,1,1,()=>{f=null}),_e())},i(t){if(!ae){I(p.$$.fragment,t),I(h.$$.fragment,t),I(x.$$.fragment,t),I(C.$$.fragment,t);for(let a=0;a<P.length;a+=1)I(i[a]);I(f),ae=!0}},o(t){A(p.$$.fragment,t),A(h.$$.fragment,t),A(x.$$.fragment,t),A(C.$$.fragment,t),i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)A(i[a]);A(f),ae=!1},d(t){t&&$(e),W(p),W(h),W(x),W(C),De(i,t),f&&f.d()}}}const Me="page/about",Te="page/rules",Ue="bg-pink-400 hover:bg-pink-500 w-72 mx-auto text-2xl px-20 py-4 text-black rounded-xl transition-colors",ue=" border-b-2 border-primary text-white",U=" text-gray-500",ee="py-1.5",me="hover:underline";function qe(o,e,s){let l,m,y;const k=ee,p=ee;let n=E.AI,c="";const h=Fe.map(g=>({label:g+" blocks",onclick:()=>{let L="play?s="+g;n===E.FRIEND_ONLINE?L+="&m="+E.FRIEND_ONLINE:n===E.FRIEND_LOCAL&&(L+="&m="+E.FRIEND_LOCAL),ve(L)}})),J=()=>{s(9,n=E.AI)},x=()=>{s(9,n=E.FRIEND_LOCAL)},K=()=>{s(9,n=E.FRIEND_ONLINE)},C=()=>{ve(".//play?room="+encodeURIComponent(c))};Be(({from:g})=>{const L=parseInt((g==null?void 0:g.url.searchParams.get("m"))||String(E.AI));s(9,n=Object.values(E).includes(L)?L:E.AI)});function Q(){c=this.value,s(0,c)}return o.$$.update=()=>{o.$$.dirty&512&&s(3,l=n?n===1?[k+" "+U,ee+ue,p+" "+U]:[k+" "+U,ee+U,p+" "+ue]:[k+" "+ue,ee+U,p+" "+U]),o.$$.dirty&512&&s(2,m=n===E.FRIEND_ONLINE),o.$$.dirty&1&&s(1,y=c.length!==6)},[c,y,m,l,h,J,x,K,C,n,Q]}class Xe extends Le{constructor(e){super(),Oe(this,e,qe,Ve,Ne,{})}}export{Xe as component};
