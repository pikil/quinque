function k(){}const X=t=>t;function T(t,e){for(const n in e)t[n]=e[n];return t}function H(t){return t()}function Y(){return Object.create(null)}function P(t){t.forEach(H)}function B(t){return typeof t=="function"}function Z(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function $(t){return Object.keys(t).length===0}function M(t,...e){if(t==null){for(const i of e)i(void 0);return k}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function tt(t,e,n){t.$$.on_destroy.push(M(e,n))}function et(t,e,n,i){if(t){const r=N(t,e,n,i);return t[0](r)}}function N(t,e,n,i){return t[1]&&i?T(n.ctx.slice(),t[1](i(e))):n.ctx}function nt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let s=0;s<c;s+=1)o[s]=e.dirty[s]|r[s];return o}return e.dirty|r}return e.dirty}function it(t,e,n,i,r,o){if(r){const c=N(e,n,i,o);t.p(c,r)}}function rt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ct(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function lt(t){return t??""}function st(t,e,n){return t.set(n),e}function ot(t){return t&&B(t.destroy)?t.destroy:k}let m=!1;function ut(){m=!0}function at(){m=!1}function O(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:O(1,r,S=>e[n[S]].claim_order,u))-1;i[l]=n[a]+1;const w=a+1;n[w]=l,r=Math.max(w,r)}const o=[],c=[];let s=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);s>=l;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);o.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<o.length&&c[l].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(c[l],a)}}function q(t,e){t.appendChild(e)}function L(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ft(t){const e=A("style");return e.textContent="/* empty */",z(L(t),e),e.sheet}function z(t,e){return q(t.head||t,e),e.sheet}function F(t,e){if(m){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function _t(t,e,n){m&&!n?F(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function dt(t){t.parentNode&&t.parentNode.removeChild(t)}function ht(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function A(t){return document.createElement(t)}function I(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function x(t){return document.createTextNode(t)}function mt(){return x(" ")}function pt(){return x("")}function yt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function bt(t){return function(e){e.target===this&&t.call(this,e)}}function gt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function xt(t){return t.dataset.svelteH}function vt(t){return Array.from(t.childNodes)}function U(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function j(t,e,n,i,r=!1){U(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function C(t,e,n,i){return j(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];n[s.name]||o.push(s.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function wt(t,e,n){return C(t,e,n,A)}function Et(t,e,n){return C(t,e,n,I)}function W(t,e){return j(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(e),!0)}function kt(t){return W(t," ")}function Nt(t,e){e=""+e,t.data!==e&&(t.data=e)}function At(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function G(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function jt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Ct(t,e){return new t(e)}let h;function p(t){h=t}function v(){if(!h)throw new Error("Function called outside component initialization");return h}function Dt(t){v().$$.on_mount.push(t)}function St(t){v().$$.after_update.push(t)}function Tt(){const t=v();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=G(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function Ht(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const d=[],E=[];let _=[];const b=[],D=Promise.resolve();let g=!1;function J(){g||(g=!0,D.then(Q))}function Pt(){return J(),D}function K(t){_.push(t)}function Bt(t){b.push(t)}const y=new Set;let f=0;function Q(){if(f!==0)return;const t=h;do{try{for(;f<d.length;){const e=d[f];f++,p(e),V(e.$$)}}catch(e){throw d.length=0,f=0,e}for(p(null),d.length=0,f=0;E.length;)E.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];y.has(n)||(y.add(n),n())}_.length=0}while(d.length);for(;b.length;)b.pop()();g=!1,y.clear(),p(t)}function V(t){if(t.fragment!==null){t.update(),P(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}function Mt(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{at as $,it as A,rt as B,nt as C,jt as D,K as E,I as F,Et as G,T as H,ct as I,lt as J,Ht as K,yt as L,L as M,ft as N,P as O,B as P,G as Q,Y as R,Q as S,$ as T,Mt as U,h as V,p as W,H as X,d as Y,J as Z,ut as _,mt as a,Tt as a0,ot as a1,Bt as a2,bt as a3,st as a4,vt as b,wt as c,W as d,A as e,dt as f,kt as g,F as h,_t as i,Nt as j,tt as k,xt as l,gt as m,k as n,ht as o,X as p,pt as q,St as r,Z as s,x as t,Dt as u,At as v,E as w,Ct as x,Pt as y,et as z};
