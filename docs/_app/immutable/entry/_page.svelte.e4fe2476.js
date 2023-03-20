import{S,i as q,s as A,k as l,q as i,a as B,l as o,m as _,r as c,h as d,c as C,n as w,b as L,C as s,E as v,o as R}from"../chunks/index.8038583f.js";import{b as W}from"../chunks/paths.362d6e94.js";import{a as $}from"../chunks/account.service.18352c75.js";function k(y){let e,t,h,f,r,m,p,u,b,g;return{c(){e=l("div"),t=l("h1"),h=i("Welcome to Lib Wallet"),f=B(),r=l("a"),m=i("test the static adapter"),p=l("br"),u=i(`\r
\r
you're already logged in? => dashboard `),b=l("br"),g=i(`\r
else => pls sign in`),this.h()},l(n){e=o(n,"DIV",{class:!0});var a=_(e);t=o(a,"H1",{});var x=_(t);h=c(x,"Welcome to Lib Wallet"),x.forEach(d),f=C(a),r=o(a,"A",{href:!0});var E=_(r);m=c(E,"test the static adapter"),E.forEach(d),p=o(a,"BR",{}),u=c(a,`\r
\r
you're already logged in? => dashboard `),b=o(a,"BR",{}),g=c(a,`\r
else => pls sign in`),a.forEach(d),this.h()},h(){w(r,"href",W+"/test"),w(e,"class","page")},m(n,a){L(n,e,a),s(e,t),s(t,h),s(e,f),s(e,r),s(r,m),s(e,p),s(e,u),s(e,b),s(e,g)},p:v,i:v,o:v,d(n){n&&d(e)}}}function D(y){R(async()=>{await e()});const e=async()=>{const t=await $.findAll();t instanceof Error?alert(t.message):t.length&&window.location.replace(W+"/dash")};return[]}class P extends S{constructor(e){super(),q(this,e,D,k,A,{})}}export{P as default};
