import{s as ut,e as l,a as c,t as h,c as s,b as n,g as d,l as ft,d as u,f as o,m as r,i as mt,h as e,n as pt}from"../chunks/scheduler.tTzP0KDC.js";import{S as gt,i as $t,c as b,a as v,m as k,t as w,d as y,e as _}from"../chunks/index._Y5kTMN9.js";import{P as bt}from"../chunks/PageHeader.FOaFllYE.js";import{I as W}from"../chunks/Button.zycOLzZ9.js";import{c as vt,a as kt,b as wt,d as yt,e as _t,f as Et,g as It}from"../chunks/custom-icons.SKl5Bn_o.js";function xt(dt){let g,E,se,$,I,Xe="Please see the rules below:",oe,t,A,ne,re,B,ie,ce,G,he,de,J,ue,fe,x,me,m,L,S,pe,ge,j,D,$e,be,T,C,ve,ke,z,F,we,ye,P,H,_e,Ee,q,V,Ie,xe,O,U,Le,Se,K,je,De,M,Te,Ce,N,ze,Fe,Q,Pe,He,R,qe,Ve,X,Oe,Ue,Z,We,Ye,ee,Ae,ae;return E=new bt({props:{title:Lt}}),S=new W({props:{name:vt,class:Y}}),D=new W({props:{name:kt,class:Y}}),C=new W({props:{name:wt,class:Y}}),F=new W({props:{name:yt,class:Y}}),H=new W({props:{name:_t,class:Y}}),V=new W({props:{name:Et,class:Y}}),U=new W({props:{name:It,class:Y}}),{c(){g=l("div"),b(E.$$.fragment),se=c(),$=l("div"),I=l("p"),I.textContent=Xe,oe=c(),t=l("ul"),A=l("li"),ne=h("You and your opponent have to fill the grid with your colour;"),re=c(),B=l("li"),ie=h("Set your colour on the grid by tapping the square without a colour;"),ce=c(),G=l("li"),he=h("The game takes places in turns: First player, then Second player, then First player again and so on;"),de=c(),J=l("li"),ue=h("Each turn has got a pattern the blocks will be filled on the grid;"),fe=c(),x=l("li"),me=h(`The patterns are:
        `),m=l("ul"),L=l("li"),b(S.$$.fragment),pe=h("  1 single block selection;"),ge=c(),j=l("li"),b(D.$$.fragment),$e=h("  5 blocks selection in axes;"),be=c(),T=l("li"),b(C.$$.fragment),ve=h("  5 blocks selection in diagonals;"),ke=c(),z=l("li"),b(F.$$.fragment),we=h("  5 blocks selection in a rising diagonal;"),ye=c(),P=l("li"),b(H.$$.fragment),_e=h("  5 blocks selection in a falling diagonal;"),Ee=c(),q=l("li"),b(V.$$.fragment),Ie=h("  5 blocks selection in horizontal axis;"),xe=c(),O=l("li"),b(U.$$.fragment),Le=h("  5 blocks selection in vertical axis;"),Se=c(),K=l("li"),je=h("Single block selection always starts first;"),De=c(),M=l("li"),Te=h("Each turn (except the very first one) receives the pattern randomly, but players always know the current and the next two patterns;"),Ce=c(),N=l("li"),ze=h("Each colored block on the grid gives the player 5 points. However, if the block is adjacent to a block with the same colour, one point is deducted from that score (once per axis). So, two adjacent blocks will give 8 instead of 10 (4 + 4), and three adjacent blocks horizontally and vertically wil give 9 instead of 15. So be mindful of where you place your blocks."),Fe=c(),Q=l("li"),Pe=h("Once the block is in place, it becomes inactive and it stores the score value for the given colour;"),He=c(),R=l("li"),qe=h("When a coloured block is placed, it can flip the colour of any adjacent block(s) if it jams a separate colored block between itself and the old block of the same colour."),Ve=c(),X=l("li"),Oe=h("The game ends when there are no free blocks are left on the grid;"),Ue=c(),Z=l("li"),We=h("The player with the highest number of points wins."),Ye=c(),ee=l("li"),Ae=h("Enjoy the game and good luck outsmarting the opponent!"),this.h()},l(i){g=s(i,"DIV",{class:!0});var te=n(g);v(E.$$.fragment,te),se=d(te),$=s(te,"DIV",{class:!0});var le=n($);I=s(le,"P",{class:!0,"data-svelte-h":!0}),ft(I)!=="svelte-17phr1o"&&(I.textContent=Xe),oe=d(le),t=s(le,"UL",{class:!0});var a=n(t);A=s(a,"LI",{class:!0});var Ze=n(A);ne=u(Ze,"You and your opponent have to fill the grid with your colour;"),Ze.forEach(o),re=d(a),B=s(a,"LI",{class:!0});var et=n(B);ie=u(et,"Set your colour on the grid by tapping the square without a colour;"),et.forEach(o),ce=d(a),G=s(a,"LI",{class:!0});var tt=n(G);he=u(tt,"The game takes places in turns: First player, then Second player, then First player again and so on;"),tt.forEach(o),de=d(a),J=s(a,"LI",{class:!0});var at=n(J);ue=u(at,"Each turn has got a pattern the blocks will be filled on the grid;"),at.forEach(o),fe=d(a),x=s(a,"LI",{class:!0});var Be=n(x);me=u(Be,`The patterns are:
        `),m=s(Be,"UL",{});var p=n(m);L=s(p,"LI",{class:!0});var Ge=n(L);v(S.$$.fragment,Ge),pe=u(Ge,"  1 single block selection;"),Ge.forEach(o),ge=d(p),j=s(p,"LI",{class:!0});var Je=n(j);v(D.$$.fragment,Je),$e=u(Je,"  5 blocks selection in axes;"),Je.forEach(o),be=d(p),T=s(p,"LI",{class:!0});var Ke=n(T);v(C.$$.fragment,Ke),ve=u(Ke,"  5 blocks selection in diagonals;"),Ke.forEach(o),ke=d(p),z=s(p,"LI",{class:!0});var Me=n(z);v(F.$$.fragment,Me),we=u(Me,"  5 blocks selection in a rising diagonal;"),Me.forEach(o),ye=d(p),P=s(p,"LI",{class:!0});var Ne=n(P);v(H.$$.fragment,Ne),_e=u(Ne,"  5 blocks selection in a falling diagonal;"),Ne.forEach(o),Ee=d(p),q=s(p,"LI",{class:!0});var Qe=n(q);v(V.$$.fragment,Qe),Ie=u(Qe,"  5 blocks selection in horizontal axis;"),Qe.forEach(o),xe=d(p),O=s(p,"LI",{class:!0});var Re=n(O);v(U.$$.fragment,Re),Le=u(Re,"  5 blocks selection in vertical axis;"),Re.forEach(o),p.forEach(o),Be.forEach(o),Se=d(a),K=s(a,"LI",{class:!0});var lt=n(K);je=u(lt,"Single block selection always starts first;"),lt.forEach(o),De=d(a),M=s(a,"LI",{class:!0});var st=n(M);Te=u(st,"Each turn (except the very first one) receives the pattern randomly, but players always know the current and the next two patterns;"),st.forEach(o),Ce=d(a),N=s(a,"LI",{class:!0});var ot=n(N);ze=u(ot,"Each colored block on the grid gives the player 5 points. However, if the block is adjacent to a block with the same colour, one point is deducted from that score (once per axis). So, two adjacent blocks will give 8 instead of 10 (4 + 4), and three adjacent blocks horizontally and vertically wil give 9 instead of 15. So be mindful of where you place your blocks."),ot.forEach(o),Fe=d(a),Q=s(a,"LI",{class:!0});var nt=n(Q);Pe=u(nt,"Once the block is in place, it becomes inactive and it stores the score value for the given colour;"),nt.forEach(o),He=d(a),R=s(a,"LI",{class:!0});var rt=n(R);qe=u(rt,"When a coloured block is placed, it can flip the colour of any adjacent block(s) if it jams a separate colored block between itself and the old block of the same colour."),rt.forEach(o),Ve=d(a),X=s(a,"LI",{class:!0});var it=n(X);Oe=u(it,"The game ends when there are no free blocks are left on the grid;"),it.forEach(o),Ue=d(a),Z=s(a,"LI",{class:!0});var ct=n(Z);We=u(ct,"The player with the highest number of points wins."),ct.forEach(o),Ye=d(a),ee=s(a,"LI",{class:!0});var ht=n(ee);Ae=u(ht,"Enjoy the game and good luck outsmarting the opponent!"),ht.forEach(o),a.forEach(o),le.forEach(o),te.forEach(o),this.h()},h(){r(I,"class","pb-4 text-faded"),r(A,"class",f),r(B,"class",f),r(G,"class",f),r(J,"class",f),r(L,"class",f),r(j,"class",f),r(T,"class",f),r(z,"class",f),r(P,"class",f),r(q,"class",f),r(O,"class",f),r(x,"class",f),r(K,"class",f),r(M,"class",f),r(N,"class",f),r(Q,"class",f),r(R,"class",f),r(X,"class",f),r(Z,"class",f),r(ee,"class",f),r(t,"class","list-disc pl-6"),r($,"class","px-4"),r(g,"class","max-w-[600px] max-auto text-white px-2")},m(i,te){mt(i,g,te),k(E,g,null),e(g,se),e(g,$),e($,I),e($,oe),e($,t),e(t,A),e(A,ne),e(t,re),e(t,B),e(B,ie),e(t,ce),e(t,G),e(G,he),e(t,de),e(t,J),e(J,ue),e(t,fe),e(t,x),e(x,me),e(x,m),e(m,L),k(S,L,null),e(L,pe),e(m,ge),e(m,j),k(D,j,null),e(j,$e),e(m,be),e(m,T),k(C,T,null),e(T,ve),e(m,ke),e(m,z),k(F,z,null),e(z,we),e(m,ye),e(m,P),k(H,P,null),e(P,_e),e(m,Ee),e(m,q),k(V,q,null),e(q,Ie),e(m,xe),e(m,O),k(U,O,null),e(O,Le),e(t,Se),e(t,K),e(K,je),e(t,De),e(t,M),e(M,Te),e(t,Ce),e(t,N),e(N,ze),e(t,Fe),e(t,Q),e(Q,Pe),e(t,He),e(t,R),e(R,qe),e(t,Ve),e(t,X),e(X,Oe),e(t,Ue),e(t,Z),e(Z,We),e(t,Ye),e(t,ee),e(ee,Ae),ae=!0},p:pt,i(i){ae||(w(E.$$.fragment,i),w(S.$$.fragment,i),w(D.$$.fragment,i),w(C.$$.fragment,i),w(F.$$.fragment,i),w(H.$$.fragment,i),w(V.$$.fragment,i),w(U.$$.fragment,i),ae=!0)},o(i){y(E.$$.fragment,i),y(S.$$.fragment,i),y(D.$$.fragment,i),y(C.$$.fragment,i),y(F.$$.fragment,i),y(H.$$.fragment,i),y(V.$$.fragment,i),y(U.$$.fragment,i),ae=!1},d(i){i&&o(g),_(E),_(S),_(D),_(C),_(F),_(H),_(V),_(U)}}}const Lt="Game rules",f="py-2",Y="h-4 w-4 text-pink-400";class zt extends gt{constructor(g){super(),$t(this,g,null,xt,ut,{})}}export{zt as component};
