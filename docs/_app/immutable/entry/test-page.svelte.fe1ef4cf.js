import{S as G,i as Q,s as W,k as b,q as E,a as B,l as g,m as I,r as D,h as v,c as A,n as M,b as T,C as u,L as V,D as P,E as K,K as X,M as Y,o as Z,u as F}from"../chunks/index.8038583f.js";import{b as $}from"../chunks/paths.362d6e94.js";import{a as L}from"../chunks/account.service.18352c75.js";function O(i,e,a){const l=i.slice();return l[8]=e[a],l}function j(i){let e,a=i[1].name+"",l,r;return{c(){e=E("selected account: "),l=E(a),r=b("br")},l(t){e=D(t,"selected account: "),l=D(t,a),r=g(t,"BR",{})},m(t,h){T(t,e,h),T(t,l,h),T(t,r,h)},p(t,h){h&2&&a!==(a=t[1].name+"")&&F(l,a)},d(t){t&&v(e),t&&v(l),t&&v(r)}}}function z(i){let e,a=i[8].name+"",l,r,t;function h(){return i[5](i[8])}return{c(){e=b("div"),l=E(a)},l(p){e=g(p,"DIV",{});var m=I(e);l=D(m,a),m.forEach(v)},m(p,m){T(p,e,m),u(e,l),r||(t=P(e,"click",h),r=!0)},p(p,m){i=p,m&4&&a!==(a=i[8].name+"")&&F(l,a)},d(p){p&&v(e),r=!1,t()}}}function x(i){let e,a,l,r,t,h,p,m,_,N,d,y,H,k,S,q,R,f=i[1]&&j(i),w=i[2],o=[];for(let n=0;n<w.length;n+=1)o[n]=z(O(i,w,n));return{c(){e=b("div"),a=b("h1"),l=E("Just a simple page to test svelte kit static adapter for gh pages"),r=B(),f&&f.c(),t=B();for(let n=0;n<o.length;n+=1)o[n].c();h=B(),p=b("br"),m=B(),_=b("input"),N=B(),d=b("button"),y=E("Create new Bank Account"),H=B(),k=b("a"),S=E("Home"),this.h()},l(n){e=g(n,"DIV",{class:!0});var s=I(e);a=g(s,"H1",{});var c=I(a);l=D(c,"Just a simple page to test svelte kit static adapter for gh pages"),c.forEach(v),r=A(s),f&&f.l(s),t=A(s);for(let J=0;J<o.length;J+=1)o[J].l(s);h=A(s),p=g(s,"BR",{}),m=A(s),_=g(s,"INPUT",{placeholder:!0}),N=A(s),d=g(s,"BUTTON",{});var C=I(d);y=D(C,"Create new Bank Account"),C.forEach(v),H=A(s),k=g(s,"A",{href:!0});var U=I(k);S=D(U,"Home"),U.forEach(v),s.forEach(v),this.h()},h(){M(_,"placeholder","Account Name"),M(k,"href",$+"/"),M(e,"class","page")},m(n,s){T(n,e,s),u(e,a),u(a,l),u(e,r),f&&f.m(e,null),u(e,t);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(e,null);u(e,h),u(e,p),u(e,m),u(e,_),V(_,i[0]),u(e,N),u(e,d),u(d,y),u(e,H),u(e,k),u(k,S),q||(R=[P(_,"input",i[6]),P(d,"click",i[3])],q=!0)},p(n,[s]){if(n[1]?f?f.p(n,s):(f=j(n),f.c(),f.m(e,t)):f&&(f.d(1),f=null),s&20){w=n[2];let c;for(c=0;c<w.length;c+=1){const C=O(n,w,c);o[c]?o[c].p(C,s):(o[c]=z(C),o[c].c(),o[c].m(e,h))}for(;c<o.length;c+=1)o[c].d(1);o.length=w.length}s&1&&_.value!==n[0]&&V(_,n[0])},i:K,o:K,d(n){n&&v(e),f&&f.d(),X(o,n),q=!1,Y(R)}}}function ee(i,e,a){let l,r,t=[];const h=async()=>{l||alert("enter an account name"),await L.createNew(l),await m()};"indexedDB"in window||alert("This browser doesn't support IndexedDB"),Z(async()=>{await m()});const p=d=>a(1,r=d),m=async()=>{const d=await L.findAll();d instanceof Error?alert(d.message):a(2,t=d),t.length&&a(1,r=t[0])},_=d=>p(d);function N(){l=this.value,a(0,l)}return[l,r,t,h,p,_,N]}class ne extends G{constructor(e){super(),Q(this,e,ee,x,W,{})}}export{ne as default};
