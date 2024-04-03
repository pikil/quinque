import{s as Te,e as i,t as h,a as m,c as r,b as c,d as u,f as a,g as b,l as je,m as d,i as xe,h as t,o as $e,n as De}from"./scheduler.B-DWYx8-.js";import{S as Fe,i as He,t as O,g as qe,d as ze,b as he,c as Ce,a as Be,m as Oe,e as Re}from"./index.sUnvYLDn.js";import{e as we,I as Ue}from"./Button.CTEps3xO.js";const Ve="M0,23 L20,23 L20,43 L0,43 Z@@fill-rule:evenodd;&&M23,46 L43,46 L43,66 L23,66 Z&&@@fill-rule:evenodd;&&M46,23 L66,23 L66,43 L46,43 Z@@fill-rule:evenodd;&&M23,23 L43,23 L43,43 L23,43 Z@@fill-rule:evenodd;&&M23,0 L43,0 L43,20 L23,20 Z@@fill-rule:evenodd;|0 0 66 66",We="M23,23 L43,23 L43,43 L23,43 Z@@fill-rule:evenodd;|0 0 66 66",Ye="M0,46 L20,46 L20,66 L0,66 Z@@fill-rule:evenodd;&&M46,46 L66,46 L66,66 L46,66 Z@@fill-rule:evenodd;&&M46,0 L66,0 L66,20 L46,20 Z@@fill-rule:evenodd;&&M23,23 L43,23 L43,43 L23,43 Z@@fill-rule:evenodd;&&M0,0 L20,0 L20,20 L0,20 Z@@fill-rule:evenodd;|0 0 66 66",Ae="M0,0 L20,0 L20,20 L0,20 Z@@fill-rule:evenodd;&&M92,92 L112,92 L112,112 L92,112 Z@@fill-rule:evenodd;&&M69,69 L89,69 L89,89 L69,89 Z@@fill-rule:evenodd;&&M46,46 L66,46 L66,66 L46,66 Z@@fill-rule:evenodd;&&M23,23 L43,23 L43,43 L23,43 Z@@fill-rule:evenodd;|0 0 112 112",Ge="M92,0 L112,0 L112,20 L92,20 Z@@fill-rule:evenodd;&&M0,92 L20,92 L20,112 L0,112 Z@@fill-rule:evenodd;&&M23,69 L43,69 L43,89 L23,89 Z@@fill-rule:evenodd;&&M46,46 L66,46 L66,66 L46,66 Z@@fill-rule:evenodd;&&M69,23 L89,23 L89,43 L69,43 Z@@fill-rule:evenodd;|0 0 112 112",Je="M0,0 L20,0 L20,20 L0,20 Z@@fill-rule:evenodd;&&M23,0 L43,0 L43,20 L23,20 Z@@fill-rule:evenodd;&&M46,0 L66,0 L66,20 L46,20 Z@@fill-rule:evenodd;&&M69,0 L89,0 L89,20 L69,20 Z@@fill-rule:evenodd;&&M92,0 L112,0 L112,20 L92,20 Z@@fill-rule:evenodd;|0 0 112 25",Ke="M0,0 L20,0 L20,20 L0,20 Z@@fill-rule:evenodd;&&M0,23 L20,23 L20,43 L0,43 Z@@fill-rule:evenodd;&&M0,46 L20,46 L20,66 L0,66 Z@@fill-rule:evenodd;&&M0,69 L20,69 L20,89 L0,89 Z@@fill-rule:evenodd;&&M0,92 L20,92 L20,112 L0,112 Z@@fill-rule:evenodd;|0 0 25 112";function Ee(_,o,l){const L=_.slice();return L[1]=o[l].icon,L[2]=o[l].pattern,L}function Ie(_){let o,l,L,E=_[2]+"",M,k,y;return l=new Ue({props:{name:_[1],class:Pe}}),{c(){o=i("li"),Ce(l.$$.fragment),L=h("  "),M=h(E),k=h(";"),this.h()},l(v){o=r(v,"LI",{class:!0});var p=c(o);Be(l.$$.fragment,p),L=u(p,"  "),M=u(p,E),k=u(p,";"),p.forEach(a),this.h()},h(){d(o,"class",g)},m(v,p){xe(v,o,p),Oe(l,o,null),t(o,L),t(o,M),t(o,k),y=!0},p:De,i(v){y||(O(l.$$.fragment,v),y=!0)},o(v){he(l.$$.fragment,v),y=!1},d(v){v&&a(o),Re(l)}}}function Ne(_){let o,l,L,E,M,k,y,v,p,R,U,I,V,W,Z,Y,x,A,S,G,J,T,K,N,j,P,Q,$,ue='<p>Score examples:</p> <ul class="pl-6 list-[circle]"><li>Three blocks in a line: 4 + 4 + 4 = 12 points,</li> <li>Three blocks forming a corner: 4 + 3 + 4 = 11 points,</li> <li>Four blocks in a 2x2 square: 3 + 3 + 3 + 3 = 12 points</li></ul>',X,D,ee,te,F,le,oe,H,ne,se,q,ae,ie,z,re,B,w=we(_[0]),n=[];for(let s=0;s<w.length;s+=1)n[s]=Ie(Ee(_,w,s));const Se=s=>he(n[s],1,1,()=>{n[s]=null});return{c(){o=i("div"),l=i("ul"),L=i("li"),E=h("You and your opponent have to fill the grid with your colour;"),M=m(),k=i("li"),y=h("Set your colour on the grid by tapping the square without a colour;"),v=m(),p=i("li"),R=h("The game takes places in turns: First player, then Second player, then First player again and so on;"),U=m(),I=i("li"),V=h("Each turn follows a specific pattern for filling blocks on the grid;"),W=m(),Z=i("li"),Y=h(`The patterns are:
      `),x=i("ul");for(let s=0;s<n.length;s+=1)n[s].c();A=m(),S=i("li"),G=h("Single block selection always starts the game;"),J=m(),T=i("li"),K=h("Each turn (except the very first one) receives the pattern randomly, but players always know the current and the next two patterns (look above the score);"),N=m(),j=i("li"),P=h("Every coloured block is worth 5 points. However, 1 point is deducted if it has horizontally adjacent block(s) (left or right or both) and 1 is deducted if it has vertically adjacent block(s) (top or bottom or both). So, the actual score of a single block could be 3, 4 or 5 points."),Q=m(),$=i("li"),$.innerHTML=ue,X=m(),D=i("li"),ee=h("Once a block is placed, it becomes inactive and it will add up 3, 4 or 5 points (depending on it's neighbours) to the total colour's score at the end of the game;"),te=m(),F=i("li"),le=h("When a colored block is placed, it can change the color of adjacent blocks if it's positioned next to a block of the same color on both sides, effectively 'flipping' them."),oe=m(),H=i("li"),ne=h("The game ends when there are no free blocks left on the grid;"),se=m(),q=i("li"),ae=h("The player with the highest number of points wins."),ie=m(),z=i("li"),re=h("Enjoy the game and good luck outsmarting the opponent!"),this.h()},l(s){o=r(s,"DIV",{class:!0});var f=c(o);l=r(f,"UL",{class:!0});var e=c(l);L=r(e,"LI",{class:!0});var C=c(L);E=u(C,"You and your opponent have to fill the grid with your colour;"),C.forEach(a),M=b(e),k=r(e,"LI",{class:!0});var fe=c(k);y=u(fe,"Set your colour on the grid by tapping the square without a colour;"),fe.forEach(a),v=b(e),p=r(e,"LI",{class:!0});var Le=c(p);R=u(Le,"The game takes places in turns: First player, then Second player, then First player again and so on;"),Le.forEach(a),U=b(e),I=r(e,"LI",{class:!0});var pe=c(I);V=u(pe,"Each turn follows a specific pattern for filling blocks on the grid;"),pe.forEach(a),W=b(e),Z=r(e,"LI",{class:!0});var ce=c(Z);Y=u(ce,`The patterns are:
      `),x=r(ce,"UL",{});var ge=c(x);for(let de=0;de<n.length;de+=1)n[de].l(ge);ge.forEach(a),ce.forEach(a),A=b(e),S=r(e,"LI",{class:!0});var ve=c(S);G=u(ve,"Single block selection always starts the game;"),ve.forEach(a),J=b(e),T=r(e,"LI",{class:!0});var me=c(T);K=u(me,"Each turn (except the very first one) receives the pattern randomly, but players always know the current and the next two patterns (look above the score);"),me.forEach(a),N=b(e),j=r(e,"LI",{class:!0});var be=c(j);P=u(be,"Every coloured block is worth 5 points. However, 1 point is deducted if it has horizontally adjacent block(s) (left or right or both) and 1 is deducted if it has vertically adjacent block(s) (top or bottom or both). So, the actual score of a single block could be 3, 4 or 5 points."),be.forEach(a),Q=b(e),$=r(e,"LI",{"data-svelte-h":!0}),je($)!=="svelte-ba24sm"&&($.innerHTML=ue),X=b(e),D=r(e,"LI",{class:!0});var ke=c(D);ee=u(ke,"Once a block is placed, it becomes inactive and it will add up 3, 4 or 5 points (depending on it's neighbours) to the total colour's score at the end of the game;"),ke.forEach(a),te=b(e),F=r(e,"LI",{class:!0});var _e=c(F);le=u(_e,"When a colored block is placed, it can change the color of adjacent blocks if it's positioned next to a block of the same color on both sides, effectively 'flipping' them."),_e.forEach(a),oe=b(e),H=r(e,"LI",{class:!0});var ye=c(H);ne=u(ye,"The game ends when there are no free blocks left on the grid;"),ye.forEach(a),se=b(e),q=r(e,"LI",{class:!0});var Me=c(q);ae=u(Me,"The player with the highest number of points wins."),Me.forEach(a),ie=b(e),z=r(e,"LI",{class:!0});var Ze=c(z);re=u(Ze,"Enjoy the game and good luck outsmarting the opponent!"),Ze.forEach(a),e.forEach(a),f.forEach(a),this.h()},h(){d(L,"class",g),d(k,"class",g),d(p,"class",g),d(I,"class",g),d(Z,"class",g),d(S,"class",g),d(T,"class",g),d(j,"class",g),d(D,"class",g),d(F,"class",g),d(H,"class",g),d(q,"class",g),d(z,"class",g),d(l,"class","list-disc pl-6 sm:pl-16"),d(o,"class","px-4")},m(s,f){xe(s,o,f),t(o,l),t(l,L),t(L,E),t(l,M),t(l,k),t(k,y),t(l,v),t(l,p),t(p,R),t(l,U),t(l,I),t(I,V),t(l,W),t(l,Z),t(Z,Y),t(Z,x);for(let e=0;e<n.length;e+=1)n[e]&&n[e].m(x,null);t(l,A),t(l,S),t(S,G),t(l,J),t(l,T),t(T,K),t(l,N),t(l,j),t(j,P),t(l,Q),t(l,$),t(l,X),t(l,D),t(D,ee),t(l,te),t(l,F),t(F,le),t(l,oe),t(l,H),t(H,ne),t(l,se),t(l,q),t(q,ae),t(l,ie),t(l,z),t(z,re),B=!0},p(s,[f]){if(f&1){w=we(s[0]);let e;for(e=0;e<w.length;e+=1){const C=Ee(s,w,e);n[e]?(n[e].p(C,f),O(n[e],1)):(n[e]=Ie(C),n[e].c(),O(n[e],1),n[e].m(x,null))}for(qe(),e=w.length;e<n.length;e+=1)Se(e);ze()}},i(s){if(!B){for(let f=0;f<w.length;f+=1)O(n[f]);B=!0}},o(s){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)he(n[f]);B=!1},d(s){s&&a(o),$e(n,s)}}}const g="py-2",Pe="h-4 w-4 text-pink-400";function Qe(_){return[[{icon:We,score:"5 points (One block, no adjacent ones)",pattern:"1 single block selection"},{icon:Ve,score:"15 points (4 have got adjacents in a single axis and 1 has got adjacents in both)",pattern:"5 blocks selection in axes"},{icon:Ye,score:25,pattern:"5 blocks selection in diagonals"},{icon:Ge,score:25,pattern:"5 blocks selection in a rising diagonal"},{icon:Ae,score:25,pattern:"5 blocks selection in a falling diagonal"},{icon:Je,score:20,pattern:"5 blocks selection in horizontal axis"},{icon:Ke,score:20,pattern:"5 blocks selection in vertical axis"}]]}class lt extends Fe{constructor(o){super(),He(this,o,Qe,Ne,Te,{})}}export{lt as R,Ke as a,Je as b,We as c,Ae as d,Ge as e,Ye as f,Ve as g};
