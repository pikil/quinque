import{q as c,v as o,x as a,y as b,z as l,A as d,g as p,m as _}from"./BpJTbl1z.js";let s=!1,i=Symbol();function v(e,n,r){const u=r[n]??(r[n]={store:null,source:b(void 0),unsubscribe:a});if(u.store!==e&&!(i in r))if(u.unsubscribe(),u.store=e??null,e==null)u.source.v=void 0,u.unsubscribe=a;else{var t=!0;u.unsubscribe=l(e,f=>{t?u.source.v=f:_(u.source,f)}),t=!1}return e&&i in r?d(e):p(u.source)}function y(e,n){return e.set(n),n}function m(){const e={};function n(){c(()=>{for(var r in e)e[r].unsubscribe();o(e,i,{enumerable:!1,value:!0})})}return[e,n]}function x(e){var n=s;try{return s=!1,[e(),s]}finally{s=n}}export{m as a,v as b,x as c,y as s};
