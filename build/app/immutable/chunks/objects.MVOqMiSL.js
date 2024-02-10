import{p}from"./scheduler.sr03XYK9.js";function m(t){const n=t-1;return n*n*n+1}function y(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}function L(t,{delay:n=0,duration:o=400,easing:s=p}={}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:s,css:a=>`opacity: ${a*r}`}}function S(t,{delay:n=0,duration:o=400,easing:s=m,start:r=0,opacity:a=0}={}){const c=getComputedStyle(t),e=+c.opacity,u=c.transform==="none"?"":c.transform,f=1-r,d=e*(1-a);return{delay:n,duration:o,easing:s,css:(I,i)=>`
			transform: ${u} scale(${1-f*i});
			opacity: ${e-d*i}
		`}}const l={SINGLE:0,AXES:1,DIAGONAL:2,HORIZONTAL:3,VERTICAL:4,RISING:5,FALLING:6},N={duration:200,easing:y};export{l as e,L as f,y as q,S as s,N as t};
