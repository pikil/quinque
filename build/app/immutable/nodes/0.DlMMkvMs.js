import{b as K,w as Q,t as $,a as v,s as E,h as U,c as X}from"../chunks/CIrY-q_u.js";import{c as l,x as N,r as d,g as i,d as u,s as p,t as C,l as Y,m as Z,p as ee,f as S,a as te,af as ae}from"../chunks/BpJTbl1z.js";import{a as re,i as j}from"../chunks/DGp5DVqz.js";import{c as R,B as se}from"../chunks/Cte8ltrv.js";import{s as H,c as D,h as W,b as oe,m as B}from"../chunks/Dp40FZ_9.js";import{a as ie,M as ne,t as V,b as le,c as q,q as de}from"../chunks/BXsZEuNE.js";import{b as g,a as A,s as ce}from"../chunks/D5tjMft0.js";import{h as me,m as fe}from"../chunks/P_dRBVlT.js";import{o as ve}from"../chunks/DvUrYtOh.js";import{o as ue}from"../chunks/256wIxbu.js";import{c as pe}from"../chunks/5O2C19qV.js";function he(n,t){K(window,["resize"],()=>Q(()=>t(window[n])))}var xe=$('<main class="w-full max-w-[600px] mx-auto flex-1"><!></main>');function we(n,t){var a=xe(),h=l(a);R(h,()=>t.children??N),d(a),v(n,a)}var ge=$('<header class="w-full max-w-[600px] mx-auto flex flex-row items-center py-4 gap-6 px-2"><!> <h2 class="flex-1 text-xl text-white text-center"> </h2> <div></div></header>');function $e(n){const[t,a]=A(),h=()=>g(oe,"$headerHref",t),s=()=>g(W,"$headerTitle",t),T=512;let _=Y(0),x=u(()=>i(_)<T),k=u(()=>h()||me),L=u(()=>i(x)?void 0:"Back"),z=u(()=>i(x)?"w-[32px]":"w-[82px]");var c=ge(),b=l(c);se(b,{get href(){return i(k)},icon:ie,get label(){return i(L)},class:"text-primary"});var w=p(b,2),y=l(w,!0);d(w);var m=p(w,2);d(c),C(()=>{E(y,s()),H(m,D(i(z)))}),he("innerWidth",P=>Z(_,re(P))),v(n,c),a()}var _e=$('<div class="fixed h-device w-full top-0 left-0 z-50 flex flex-col items-center justify-center bg-gray-800"><div class="flex flex-row justify-center animate-bounce"><div></div> <div></div></div></div>'),be=$("<p> </p>"),ye=$('<div class="h-full flex flex-col uppercase"><!> <!></div> <!> <div id="modal" class="fixed z-40"></div> <!>',1);function Be(n,t){ee(t,!0);const[a,h]=A(),s=()=>g(pe,"$confirmData",a),T=()=>g(B,"$mounting",a),_=()=>g(W,"$headerTitle",a),x="h-20 w-20 rounded-md relative flex flex-col justify-center items-center text-white font-bold opacity-95",k=x+" left-5 bg-color1 -rotate-[30deg]",L=x+" -left-5 top-2 bg-color2 -rotate-[8deg]",z={easing:de,duration:300},c=()=>{document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)};let b=u(()=>fe),w=u(()=>{var e;return!!((e=s())!=null&&e.text)});ve(async()=>{c(),window.addEventListener("resize",c),await new Promise(e=>{setTimeout(e,800)}),ce(B,!1)}),ue(e=>{if(document.startViewTransition)return new Promise(o=>{document.startViewTransition(async()=>{o(),await e.complete})})});var y=ye();U(e=>{C(()=>ae.title=i(b))});var m=S(y),P=l(m);{var I=e=>{$e(e)};j(P,e=>{_()&&e(I)})}var O=p(P,2);we(O,{children:(e,o)=>{var r=X(),f=S(r);R(f,()=>t.children??N),v(e,r)}}),d(m);var M=p(m,2);{var F=e=>{var o=_e(),r=l(o),f=l(r);H(f,D(k));var J=p(f,2);H(J,D(L)),d(r),d(o),V(2,o,()=>q,()=>z),v(e,o)};j(M,e=>{T()&&e(F)})}var G=p(M,4);ne(G,{get showing(){return i(w)},title:"Confirm",get okLabel(){return s().okLabel},get dismissLabel(){return s().dismissLabel},get onok(){return s().ok},get ondismiss(){return s().dismiss},children:(e,o)=>{var r=be(),f=l(r,!0);d(r),C(()=>E(f,s().text)),v(e,r)},$$slots:{default:!0}}),V(3,m,()=>q,()=>le),v(n,y),te(),h()}export{Be as component};
