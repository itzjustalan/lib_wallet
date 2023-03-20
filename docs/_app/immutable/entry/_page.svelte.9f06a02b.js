var z=Object.defineProperty;var F=(n,t,l)=>t in n?z(n,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[t]=l;var D=(n,t,l)=>(F(n,typeof t!="symbol"?t+"":t,l),l);import{S as G,i as J,s as Q,k as b,q as x,a as k,l as w,m as N,r as A,h as f,c as E,n as L,b as _,C as V,K as O,D as R,E as $,L as X,M as Y,o as Z,u as g}from"../chunks/index.153d1f44.js";import{b as C}from"../chunks/paths.4123227b.js";import{_ as ee}from"../chunks/preload-helper.41c905a7.js";const q={info:(...n)=>P("info",...n),warn:(...n)=>P("warn",...n),error:(...n)=>P("error",...n),endpoint:(n,t,l,r,...i)=>{r=Math.trunc(r);let a=te()+"[:";n<300?a+="\x1B[32m":n<400?a+="\x1B[33m":n<500?a+="\x1B[31m":a+="\x1B[43m",a+=n+"\x1B[0m] ",a+="\x1B[33m"+t,a+="\x1B[0m \x1B[32m"+l,r>500?a+="\x1B[33m 🦥":r>1e3?a+="\x1B[31m 🐌":a+="\x1B[32m 🚀",a+=` ${r} ms\x1B[0m`,console.log(a)}},P=(n,...t)=>{if(!ne())return console[n](...t)},te=()=>new Date().toLocaleTimeString()+" ",ne=n=>!0;class re{async connect(){const{openDB:t}=await ee(()=>import("../chunks/index.206c2777.js"),[],import.meta.url);return t("lib_wallet",+"1",{upgrade(l,r,i,a,d){l.createObjectStore("accounts",{keyPath:"id",autoIncrement:!0})},blocked(l,r,i){},blocking(l,r,i){},terminated(){}})}}const le=new re,U=le.connect();class oe{constructor(){D(this,"nodb",new Error("could not connect to indexed db"));D(this,"createNew",async t=>{var l;try{return await((l=await U)==null?void 0:l.add("accounts",{name:t}))??this.nodb}catch(r){return q.error(r),new Error("could not create new account")}});D(this,"findAll",async()=>{var t;try{return await((t=await U)==null?void 0:t.getAll("accounts"))??this.nodb}catch(l){return q.error(l),new Error("could not get all accounts")}})}}const j=new oe;function H(n,t,l){const r=n.slice();return r[4]=t[l],r}function K(n){let t,l,r,i=n[4].name+"",a,d;return{c(){t=b("br"),l=k(),r=b("a"),a=x(i),this.h()},l(o){t=w(o,"BR",{}),l=E(o),r=w(o,"A",{href:!0});var m=N(r);a=A(m,i),m.forEach(f),this.h()},h(){L(r,"href",d=C+"/acc/"+n[4].id)},m(o,m){_(o,t,m),_(o,l,m),_(o,r,m),V(r,a)},p(o,m){m&2&&i!==(i=o[4].name+"")&&g(a,i),m&2&&d!==(d=C+"/acc/"+o[4].id)&&L(r,"href",d)},d(o){o&&f(t),o&&f(l),o&&f(r)}}}function ae(n){let t,l,r,i,a,d,o,m,p,S,y,h,T,I,W,B=n[1],u=[];for(let e=0;e<B.length;e+=1)u[e]=K(H(n,B,e));return{c(){t=b("h1"),l=x("Welcome to Lib Wallet"),r=x(`\r
\r
My Accounts:\r
`);for(let e=0;e<u.length;e+=1)u[e].c();i=k(),a=b("br"),d=k(),o=b("input"),m=k(),p=b("button"),S=x("Create new Bank Account"),y=k(),h=b("a"),T=x("test the static adapter"),this.h()},l(e){t=w(e,"H1",{});var s=N(t);l=A(s,"Welcome to Lib Wallet"),s.forEach(f),r=A(e,`\r
\r
My Accounts:\r
`);for(let M=0;M<u.length;M+=1)u[M].l(e);i=E(e),a=w(e,"BR",{}),d=E(e),o=w(e,"INPUT",{placeholder:!0}),m=E(e),p=w(e,"BUTTON",{});var c=N(p);S=A(c,"Create new Bank Account"),c.forEach(f),y=E(e),h=w(e,"A",{href:!0});var v=N(h);T=A(v,"test the static adapter"),v.forEach(f),this.h()},h(){L(o,"placeholder","Account Name"),L(h,"href",C+"/test")},m(e,s){_(e,t,s),V(t,l),_(e,r,s);for(let c=0;c<u.length;c+=1)u[c]&&u[c].m(e,s);_(e,i,s),_(e,a,s),_(e,d,s),_(e,o,s),O(o,n[0]),_(e,m,s),_(e,p,s),V(p,S),_(e,y,s),_(e,h,s),V(h,T),I||(W=[R(o,"input",n[3]),R(p,"click",n[2])],I=!0)},p(e,[s]){if(s&2){B=e[1];let c;for(c=0;c<B.length;c+=1){const v=H(e,B,c);u[c]?u[c].p(v,s):(u[c]=K(v),u[c].c(),u[c].m(i.parentNode,i))}for(;c<u.length;c+=1)u[c].d(1);u.length=B.length}s&1&&o.value!==e[0]&&O(o,e[0])},i:$,o:$,d(e){e&&f(t),e&&f(r),X(u,e),e&&f(i),e&&f(a),e&&f(d),e&&f(o),e&&f(m),e&&f(p),e&&f(y),e&&f(h),I=!1,Y(W)}}}function ce(n,t,l){let r,i=[];const a=()=>{r||alert("enter an account name"),j.createNew(r)};"indexedDB"in window||alert("This browser doesn't support IndexedDB"),Z(async()=>{const o=await j.findAll();o instanceof Error?alert(o.message):l(1,i=o)});function d(){r=this.value,l(0,r)}return[r,i,a,d]}class me extends G{constructor(t){super(),J(this,t,ce,ae,Q,{})}}export{me as default};
