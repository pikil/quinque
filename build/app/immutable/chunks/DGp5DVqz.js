import{S as A,G as V,H as z,I as o,J,g as R,U as h,m as P,K as N,L as C,M as Q,N as W,O as X,P as k,C as x,Q as p,R as ee,T as ae,V as re,W as te,X as B,Y as M,Z as U,_ as G,$ as ne,a0 as fe,D as ie,i as F,a1 as se,a2 as ue,a3 as le,a4 as _e,a5 as ve,a6 as de,a7 as ce,F as he,a8 as be,a9 as ge,aa as ye,ab as H,ac as Pe,d as K,y as Re,ad as oe,ae as Ee}from"./BpJTbl1z.js";import{c as Ie}from"./D5tjMft0.js";function w(a,s=null,d){if(typeof a!="object"||a===null||A in a)return a;const v=W(a);if(v!==V&&v!==z)return a;var n=new Map,u=X(a),b=o(0);u&&n.set("length",o(a.length));var y;return new Proxy(a,{defineProperty(i,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&Q();var f=n.get(e);return f===void 0?(f=o(r.value),n.set(e,f)):P(f,w(r.value,y)),!0},deleteProperty(i,e){var r=n.get(e);if(r===void 0)e in i&&n.set(e,o(h));else{if(u&&typeof e=="string"){var f=n.get("length"),t=Number(e);Number.isInteger(t)&&t<f.v&&P(f,t)}P(r,h),Z(b)}return!0},get(i,e,r){var c;if(e===A)return a;var f=n.get(e),t=e in i;if(f===void 0&&(!t||(c=N(i,e))!=null&&c.writable)&&(f=o(w(t?i[e]:h,y)),n.set(e,f)),f!==void 0){var l=R(f);return l===h?void 0:l}return Reflect.get(i,e,r)},getOwnPropertyDescriptor(i,e){var r=Reflect.getOwnPropertyDescriptor(i,e);if(r&&"value"in r){var f=n.get(e);f&&(r.value=R(f))}else if(r===void 0){var t=n.get(e),l=t==null?void 0:t.v;if(t!==void 0&&l!==h)return{enumerable:!0,configurable:!0,value:l,writable:!0}}return r},has(i,e){var l;if(e===A)return!0;var r=n.get(e),f=r!==void 0&&r.v!==h||Reflect.has(i,e);if(r!==void 0||C!==null&&(!f||(l=N(i,e))!=null&&l.writable)){r===void 0&&(r=o(f?w(i[e],y):h),n.set(e,r));var t=R(r);if(t===h)return!1}return f},set(i,e,r,f){var I;var t=n.get(e),l=e in i;if(u&&e==="length")for(var c=r;c<t.v;c+=1){var E=n.get(c+"");E!==void 0?P(E,h):c in i&&(E=o(h),n.set(c+"",E))}t===void 0?(!l||(I=N(i,e))!=null&&I.writable)&&(t=o(void 0),P(t,w(r,y)),n.set(e,t)):(l=t.v!==h,P(t,w(r,y)));var g=Reflect.getOwnPropertyDescriptor(i,e);if(g!=null&&g.set&&g.set.call(f,r),!l){if(u&&typeof e=="string"){var O=n.get("length"),T=Number(e);Number.isInteger(T)&&T>=O.v&&P(O,T+1)}Z(b)}return!0},ownKeys(i){R(b);var e=Reflect.ownKeys(i).filter(t=>{var l=n.get(t);return l===void 0||l.v!==h});for(var[r,f]of n)f.v!==h&&!(r in i)&&e.push(r);return e},setPrototypeOf(){J()}})}function Z(a,s=1){P(a,a.v+s)}function Oe(a,s,d=!1){x&&p();var v=a,n=null,u=null,b=h,y=d?ee:0,i=!1;const e=(f,t=!0)=>{i=!0,r(t,f)},r=(f,t)=>{if(b===(b=f))return;let l=!1;if(x){const c=v.data===ae;!!b===c&&(v=re(),te(v),B(!1),l=!0)}b?(n?M(n):t&&(n=U(()=>t(v))),u&&G(u,()=>{u=null})):(u?M(u):t&&(u=U(()=>t(v))),n&&G(n,()=>{n=null})),l&&B(!0)};k(()=>{i=!1,s(e),i||r(null,null)},y),x&&(v=ne)}function $(a,s){return a===s||(a==null?void 0:a[A])===s}function Te(a={},s,d,v){return fe(()=>{var n,u;return ie(()=>{n=u,u=[],F(()=>{a!==d(...u)&&(s(a,...u),n&&$(d(...n),a)&&s(null,...n))})}),()=>{se(()=>{u&&$(d(...u),a)&&s(null,...u)})}}),a}function j(a){for(var s=C,d=C;s!==null&&!(s.f&(ge|ye));)s=s.parent;try{return H(s),a()}finally{H(d)}}function me(a,s,d,v){var Y;var n=(d&Pe)!==0,u=!he||(d&be)!==0,b=(d&de)!==0,y=(d&oe)!==0,i=!1,e;b?[e,i]=Ie(()=>a[s]):e=a[s];var r=A in a||ce in a,f=b&&(((Y=N(a,s))==null?void 0:Y.set)??(r&&s in a&&(_=>a[s]=_)))||void 0,t=v,l=!0,c=!1,E=()=>(c=!0,l&&(l=!1,y?t=F(v):t=v),t);e===void 0&&v!==void 0&&(f&&u&&ue(),e=E(),f&&f(e));var g;if(u)g=()=>{var _=a[s];return _===void 0?E():(l=!0,c=!1,_)};else{var O=j(()=>(n?K:Ee)(()=>a[s]));O.f|=le,g=()=>{var _=R(O);return _!==void 0&&(t=void 0),_===void 0?t:_}}if(!(d&_e))return g;if(f){var T=a.$$legacy;return function(_,S){return arguments.length>0?((!u||!S||T||i)&&f(S?g():_),_):g()}}var I=!1,q=!1,D=Re(e),m=j(()=>K(()=>{var _=g(),S=R(D);return I?(I=!1,q=!0,S):(q=!1,D.v=_)}));return n||(m.equals=ve),function(_,S){if(arguments.length>0){const L=S?R(m):u&&b?w(_):_;return m.equals(L)||(I=!0,P(D,L),c&&t!==void 0&&(t=L),F(()=>R(m))),_}return R(m)}}export{w as a,Te as b,Oe as i,me as p};
