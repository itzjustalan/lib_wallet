import{S as w,i as C,s as A,k as p,q as D,l as h,m as _,r as H,h as f,b as I,C as d,D as q,u as B,E as v,F,G as M,y as R,a as k,z as V,c as y,n as z,A as G,H as J,I as L,J as U,g as S,d as T,B as j}from"../chunks/index.04f6a83f.js";import{w as x}from"../chunks/index.b63eacf5.js";const K=(t,e)=>{var a;return((a=e==null?void 0:e.match("(^|;)\\s*"+t+"\\s*=\\s*([^;]+)"))==null?void 0:a.pop())||null},P="SameSite=Strict;max-age=31536000;path=/",N="app-theme";function Q(){let t="light";{const s=K(N,document.cookie);s?t=s:window.matchMedia("(prefers-color-scheme: dark)").matches&&(t="dark"),g(t)}const{subscribe:e,set:a,update:o}=x(t);return{subscribe:e,set:s=>{g(s),a(s)},toggle:()=>o(s=>g(s==="dark"?"light":"dark"))}}function g(t){return document.documentElement.dataset.theme=t,document.cookie=`${N}=${t};${P}`,t}const O=Q();function W(t){let e,a,o,s,u;return{c(){e=p("header"),a=p("button"),o=D(t[0])},l(r){e=h(r,"HEADER",{});var c=_(e);a=h(c,"BUTTON",{});var m=_(a);o=H(m,t[0]),m.forEach(f),c.forEach(f)},m(r,c){I(r,e,c),d(e,a),d(a,o),s||(u=q(a,"click",O.toggle),s=!0)},p(r,[c]){c&1&&B(o,r[0])},i:v,o:v,d(r){r&&f(e),s=!1,u()}}}function X(t,e,a){let o;return F(t,O,s=>a(0,o=s)),[o]}class Y extends w{constructor(e){super(),C(this,e,X,W,A,{})}}function Z(t){let e,a,o,s,u,r,c,m;a=new Y({});const $=t[1].default,l=M($,t,t[0],null);return{c(){e=p("div"),R(a.$$.fragment),o=k(),s=p("main"),l&&l.c(),u=k(),r=p("footer"),c=D("sett aano"),this.h()},l(n){e=h(n,"DIV",{class:!0});var i=_(e);V(a.$$.fragment,i),o=y(i),s=h(i,"MAIN",{});var b=_(s);l&&l.l(b),b.forEach(f),u=y(i),r=h(i,"FOOTER",{});var E=_(r);c=H(E,"sett aano"),E.forEach(f),i.forEach(f),this.h()},h(){z(e,"class","app")},m(n,i){I(n,e,i),G(a,e,null),d(e,o),d(e,s),l&&l.m(s,null),d(e,u),d(e,r),d(r,c),m=!0},p(n,[i]){l&&l.p&&(!m||i&1)&&J(l,$,n,n[0],m?U($,n[0],i,null):L(n[0]),null)},i(n){m||(S(a.$$.fragment,n),S(l,n),m=!0)},o(n){T(a.$$.fragment,n),T(l,n),m=!1},d(n){n&&f(e),j(a),l&&l.d(n)}}}function ee(t,e,a){let{$$slots:o={},$$scope:s}=e;return t.$$set=u=>{"$$scope"in u&&a(0,s=u.$$scope)},[s,o]}class se extends w{constructor(e){super(),C(this,e,ee,Z,A,{})}}export{se as default};
