import{S as j,i as K,s as P,k as v,q as J,l as w,m as E,r as L,h as _,n as z,b as Q,C as o,D as Z,u as Y,E as W,F as U,a as k,y as T,c as I,z as O,A as S,g as A,d as V,B as q,G as ee,H as te,I as se,J as ae}from"../chunks/index.8038583f.js";import{t as M,I as F,a as X}from"../chunks/Item.cf5f9aca.js";import"../chunks/paths.a6041369.js";const ne=!1,re=ne;function le(r){let t,e,s,c,i;return{c(){t=v("header"),e=v("button"),s=J(r[0]),this.h()},l(n){t=w(n,"HEADER",{class:!0});var f=E(t);e=w(f,"BUTTON",{});var u=E(e);s=L(u,r[0]),u.forEach(_),f.forEach(_),this.h()},h(){z(t,"class","svelte-kfzmpf")},m(n,f){Q(n,t,f),o(t,e),o(e,s),c||(i=Z(e,"click",M.toggle),c=!0)},p(n,[f]){f&1&&Y(s,n[0])},i:W,o:W,d(n){n&&_(t),c=!1,i()}}}function oe(r,t,e){let s;return U(r,M,c=>e(0,s=c)),[s]}class ie extends j{constructor(t){super(),K(this,t,oe,le,P,{})}}function ce(r){var G;let t,e,s,c,i=((G=r[0].account)==null?void 0:G.name)+"",n,f,u,H,p,D,h,y,g,$,a,d,b,x,N;u=new F({props:{text:"theme: "+r[1],onclick:M.toggle}}),p=new F({props:{text:"Home",onclick:r[2]("home")}}),h=new F({props:{text:"Test",onclick:r[2]("test")}}),g=new F({props:{text:"Dashboard",onclick:r[2]("dash")}}),a=new F({props:{text:"Accounts",onclick:r[2]("accounts")}}),b=new F({props:{text:"New Account",onclick:r[2]("new-account")}});let R=re;return{c(){t=v("aside"),e=v("nav"),s=v("div"),c=J("Drawer "),n=J(i),f=k(),T(u.$$.fragment),H=k(),T(p.$$.fragment),D=k(),T(h.$$.fragment),y=k(),T(g.$$.fragment),$=k(),T(a.$$.fragment),d=k(),T(b.$$.fragment),x=k(),this.h()},l(l){t=w(l,"ASIDE",{});var B=E(t);e=w(B,"NAV",{class:!0});var m=E(e);s=w(m,"DIV",{class:!0});var C=E(s);c=L(C,"Drawer "),n=L(C,i),C.forEach(_),f=I(m),O(u.$$.fragment,m),H=I(m),O(p.$$.fragment,m),D=I(m),O(h.$$.fragment,m),y=I(m),O(g.$$.fragment,m),$=I(m),O(a.$$.fragment,m),d=I(m),O(b.$$.fragment,m),x=I(m),m.forEach(_),B.forEach(_),this.h()},h(){z(s,"class","heading svelte-1w30nro"),z(e,"class","drawer svelte-1w30nro")},m(l,B){Q(l,t,B),o(t,e),o(e,s),o(s,c),o(s,n),o(e,f),S(u,e,null),o(e,H),S(p,e,null),o(e,D),S(h,e,null),o(e,y),S(g,e,null),o(e,$),S(a,e,null),o(e,d),S(b,e,null),o(e,x),N=!0},p(l,[B]){var C;(!N||B&1)&&i!==(i=((C=l[0].account)==null?void 0:C.name)+"")&&Y(n,i);const m={};B&2&&(m.text="theme: "+l[1]),u.$set(m)},i(l){N||(A(u.$$.fragment,l),A(p.$$.fragment,l),A(h.$$.fragment,l),A(g.$$.fragment,l),A(a.$$.fragment,l),A(b.$$.fragment,l),A(R),N=!0)},o(l){V(u.$$.fragment,l),V(p.$$.fragment,l),V(h.$$.fragment,l),V(g.$$.fragment,l),V(a.$$.fragment,l),V(b.$$.fragment,l),V(R),N=!1},d(l){l&&_(t),q(u),q(p),q(h),q(g),q(a),q(b)}}}function fe(r,t,e){let s,c;return U(r,X,n=>e(0,s=n)),U(r,M,n=>e(1,c=n)),[s,c,n=>()=>X.navto(n)]}class me extends j{constructor(t){super(),K(this,t,fe,ce,P,{})}}function $e(r){let t,e,s,c,i,n,f,u,H,p,D,h,y;s=new ie({}),f=new me({});const g=r[1].default,$=ee(g,r,r[0],null);return{c(){t=v("div"),e=v("div"),T(s.$$.fragment),c=k(),i=v("div"),n=v("div"),T(f.$$.fragment),u=k(),H=v("main"),$&&$.c(),p=k(),D=v("footer"),h=J("2022 foss lib_wallet"),this.h()},l(a){t=w(a,"DIV",{class:!0});var d=E(t);e=w(d,"DIV",{class:!0});var b=E(e);O(s.$$.fragment,b),b.forEach(_),c=I(d),i=w(d,"DIV",{class:!0});var x=E(i);n=w(x,"DIV",{class:!0});var N=E(n);O(f.$$.fragment,N),N.forEach(_),u=I(x),H=w(x,"MAIN",{});var R=E(H);$&&$.l(R),R.forEach(_),x.forEach(_),p=I(d),D=w(d,"FOOTER",{class:!0});var G=E(D);h=L(G,"2022 foss lib_wallet"),G.forEach(_),d.forEach(_),this.h()},h(){z(e,"class","header svelte-169e7xd"),z(n,"class","drawer svelte-169e7xd"),z(i,"class","container svelte-169e7xd"),z(D,"class","svelte-169e7xd"),z(t,"class","app")},m(a,d){Q(a,t,d),o(t,e),S(s,e,null),o(t,c),o(t,i),o(i,n),S(f,n,null),o(i,u),o(i,H),$&&$.m(H,null),o(t,p),o(t,D),o(D,h),y=!0},p(a,[d]){$&&$.p&&(!y||d&1)&&te($,g,a,a[0],y?ae(g,a[0],d,null):se(a[0]),null)},i(a){y||(A(s.$$.fragment,a),A(f.$$.fragment,a),A($,a),y=!0)},o(a){V(s.$$.fragment,a),V(f.$$.fragment,a),V($,a),y=!1},d(a){a&&_(t),q(s),q(f),$&&$.d(a)}}}function ue(r,t,e){let{$$slots:s={},$$scope:c}=t;return r.$$set=i=>{"$$scope"in i&&e(0,c=i.$$scope)},[c,s]}class he extends j{constructor(t){super(),K(this,t,ue,$e,P,{})}}export{he as default};