import{w as m}from"./index.0c76574b.js";import{S as h,i as d,s as p,k as f,q as _,l as g,m as k,r as S,h as r,n as b,b as y,C as v,F as x,u as I,G as l}from"./index.0c9607c5.js";function w(){const t=localStorage.getItem("app"),{subscribe:s,set:n,update:o}=m(t===null?{page:"home",history:["home"]}:JSON.parse(t));return{subscribe:s,setAccount:e=>o(a=>({...a,account:e})),navpop:()=>o(e=>({...e,page:e.history.pop()??"home"})),navto:e=>o(a=>({...a,page:e,history:[...a.history??[],e]}))}}const C=w();C.subscribe(t=>localStorage.setItem("app",JSON.stringify(t)));const N=(t,s)=>{var n;return((n=s==null?void 0:s.match("(^|;)\\s*"+t+"\\s*=\\s*([^;]+)"))==null?void 0:n.pop())||null},T="SameSite=Strict;max-age=31536000;path=/",u="app-theme";function q(){let t="light";{const e=N(u,document.cookie);e?t=e:window.matchMedia("(prefers-color-scheme: dark)").matches&&(t="dark"),c(t)}const{subscribe:s,set:n,update:o}=m(t);return{subscribe:s,set:e=>{c(e),n(e)},toggle:()=>o(e=>c(e==="dark"?"light":"dark"))}}function c(t){return document.documentElement.dataset.theme=t,document.cookie=`${u}=${t};${T}`,t}const O=q();function A(t){let s,n,o,e;return{c(){s=f("div"),n=_(t[0]),this.h()},l(a){s=g(a,"DIV",{class:!0});var i=k(s);n=S(i,t[0]),i.forEach(r),this.h()},h(){b(s,"class","item svelte-1561wu9")},m(a,i){y(a,s,i),v(s,n),o||(e=x(s,"click",t[2]),o=!0)},p(a,[i]){i&1&&I(n,a[0])},i:l,o:l,d(a){a&&r(s),o=!1,e()}}}function D(t,s,n){let{text:o}=s,{onclick:e}=s;const a=()=>e();return t.$$set=i=>{"text"in i&&n(0,o=i.text),"onclick"in i&&n(1,e=i.onclick)},[o,e,a]}class V extends h{constructor(s){super(),d(this,s,D,A,p,{text:0,onclick:1})}}export{V as I,C as a,O as t};
