import{E as c,s as h}from"./index.8038583f.js";const e=[];function d(o,a=c){let i;const n=new Set;function r(t){if(h(o,t)&&(o=t,i)){const b=!e.length;for(const s of n)s[1](),e.push(s,o);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function l(t){r(t(o))}function _(t,b=c){const s=[t,b];return n.add(s),n.size===1&&(i=a(r)||c),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:l,subscribe:_}}var f;const p=((f=globalThis.__sveltekit_1jbyos9)==null?void 0:f.base)??"";var u;const q=((u=globalThis.__sveltekit_1jbyos9)==null?void 0:u.assets)??p;export{q as a,p as b,d as w};
