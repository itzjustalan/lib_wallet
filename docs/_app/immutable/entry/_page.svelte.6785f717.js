var ke=Object.defineProperty;var Be=(c,e,n)=>e in c?ke(c,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):c[e]=n;var H=(c,e,n)=>(Be(c,typeof e!="symbol"?e+"":e,n),n);import{S as M,i as q,s as J,k as w,q as A,a as I,l as b,m as k,r as y,h as $,c as E,n as V,b as D,C as h,g as N,v as ne,f as re,d as T,M as ae,D as F,o as Y,u as Z,G as j,H as W,y as P,z as C,A as U,B as R,N as z,O as ce,e as le}from"../chunks/index.251bf8d3.js";import{_ as ge}from"../chunks/preload-helper.41c905a7.js";import{a as L,I as x,t as ve}from"../chunks/Item.b425d7df.js";import"../chunks/paths.af218031.js";const Q={info:(...c)=>te("info",...c),warn:(...c)=>te("warn",...c),error:(...c)=>te("error",...c),endpoint:(c,e,n,t,...a)=>{t=Math.trunc(t);let r=De()+"[:";c<300?r+="\x1B[32m":c<400?r+="\x1B[33m":c<500?r+="\x1B[31m":r+="\x1B[43m",r+=c+"\x1B[0m] ",r+="\x1B[33m"+e,r+="\x1B[0m \x1B[32m"+n,t>500?r+="\x1B[33m 🦥":t>1e3?r+="\x1B[31m 🐌":r+="\x1B[32m 🚀",r+=` ${t} ms\x1B[0m`,console.log(r)}},te=(c,...e)=>{if(!Ae())return console[c](...e)},De=()=>new Date().toLocaleTimeString()+" ",Ae=c=>!0;class ye{async connect(){const{openDB:e}=await ge(()=>import("../chunks/index.206c2777.js"),[],import.meta.url);return e("lib_wallet",+"1",{upgrade(n,t,a,r,l){n.createObjectStore("accounts",{keyPath:"id",autoIncrement:!0}),n.createObjectStore("transactions",{keyPath:"id",autoIncrement:!0}),n.createObjectStore("categories",{keyPath:"id",autoIncrement:!0})},blocked(n,t,a){},blocking(n,t,a){},terminated(){}})}}const Ie=new ye,X=Ie.connect();class we{constructor(){H(this,"nodb",new Error("could not connect to indexed db"))}async _createNew(e,n){var t;try{return await((t=await X)==null?void 0:t.add(e,n))??this.nodb}catch(a){return Q.error(a),new Error("could not create "+e)}}async _findOne(e,n){var t;try{return await((t=await X)==null?void 0:t.get(e,n))??this.nodb}catch(a){return Q.error(a),new Error("could not find "+n)}}async _updateOne(e,n,t){var a;try{return await((a=await X)==null?void 0:a.put(e,t,n))??this.nodb}catch(r){return Q.error(r),new Error("could not update "+n)}}async _deleteOne(e,n){var t;try{return await((t=await X)==null?void 0:t.delete(e,n))??this.nodb}catch(a){return Q.error(a),new Error("could not delete "+n)}}async _findAll(e){var n;try{return await((n=await X)==null?void 0:n.getAll(e))??this.nodb}catch(t){return Q.error(t),new Error("could not find all "+e)}}}class Ee extends we{constructor(){super(...arguments);H(this,"createNew",async n=>super._createNew("accounts",n));H(this,"findOne",async n=>super._findOne("accounts",n));H(this,"updateOne",async(n,t)=>super._updateOne("accounts",n,t));H(this,"deleteOne",async n=>super._deleteOne("accounts",n));H(this,"findAll",async()=>super._findAll("accounts"))}}const G=new Ee;function se(c,e,n){const t=c.slice();return t[7]=e[n],t}function ie(c){let e,n=c[1].account.name+"",t,a,r;return{c(){e=A("selected account: "),t=A(n),a=A(" Account"),r=w("br")},l(l){e=y(l,"selected account: "),t=y(l,n),a=y(l," Account"),r=b(l,"BR",{})},m(l,s){D(l,e,s),D(l,t,s),D(l,a,s),D(l,r,s)},p(l,s){s&2&&n!==(n=l[1].account.name+"")&&Z(t,n)},d(l){l&&$(e),l&&$(t),l&&$(a),l&&$(r)}}}function oe(c){let e,n,t,a,r;return{c(){e=w("div"),n=w("u"),t=A("create new bank account!!"),this.h()},l(l){e=b(l,"DIV",{class:!0});var s=k(e);n=b(s,"U",{});var i=k(n);t=y(i,"create new bank account!!"),i.forEach($),s.forEach($),this.h()},h(){V(e,"class","link svelte-9sd5ha")},m(l,s){D(l,e,s),h(e,n),h(n,t),a||(r=j(e,"click",c[2]),a=!0)},p:W,d(l){l&&$(e),a=!1,r()}}}function ue(c){let e,n;function t(){return c[3](c[7])}return e=new x({props:{text:c[7].name,onclick:t}}),{c(){P(e.$$.fragment)},l(a){C(e.$$.fragment,a)},m(a,r){U(e,a,r),n=!0},p(a,r){c=a;const l={};r&1&&(l.text=c[7].name),r&1&&(l.onclick=t),e.$set(l)},i(a){n||(N(e.$$.fragment,a),n=!0)},o(a){T(e.$$.fragment,a),n=!1},d(a){R(e,a)}}}function Ne(c){let e,n,t,a,r,l,s,i,m,p=c[1].account&&ie(c),o=!c[0].length&&oe(c),g=c[0],f=[];for(let u=0;u<g.length;u+=1)f[u]=ue(se(c,g,u));const B=u=>T(f[u],1,1,()=>{f[u]=null});return{c(){e=w("div"),n=w("div"),t=A("Accounts"),a=I(),p&&p.c(),r=I(),o&&o.c(),l=I();for(let u=0;u<f.length;u+=1)f[u].c();s=I(),i=w("br"),this.h()},l(u){e=b(u,"DIV",{class:!0});var _=k(e);n=b(_,"DIV",{class:!0});var d=k(n);t=y(d,"Accounts"),d.forEach($),a=E(_),p&&p.l(_),r=E(_),o&&o.l(_),l=E(_);for(let v=0;v<f.length;v+=1)f[v].l(_);s=E(_),i=b(_,"BR",{}),_.forEach($),this.h()},h(){V(n,"class","page-title"),V(e,"class","page")},m(u,_){D(u,e,_),h(e,n),h(n,t),h(e,a),p&&p.m(e,null),h(e,r),o&&o.m(e,null),h(e,l);for(let d=0;d<f.length;d+=1)f[d]&&f[d].m(e,null);h(e,s),h(e,i),m=!0},p(u,[_]){if(u[1].account?p?p.p(u,_):(p=ie(u),p.c(),p.m(e,r)):p&&(p.d(1),p=null),u[0].length?o&&(o.d(1),o=null):o?o.p(u,_):(o=oe(u),o.c(),o.m(e,l)),_&1){g=u[0];let d;for(d=0;d<g.length;d+=1){const v=se(u,g,d);f[d]?(f[d].p(v,_),N(f[d],1)):(f[d]=ue(v),f[d].c(),N(f[d],1),f[d].m(e,s))}for(ne(),d=g.length;d<f.length;d+=1)B(d);re()}},i(u){if(!m){for(let _=0;_<g.length;_+=1)N(f[_]);m=!0}},o(u){f=f.filter(Boolean);for(let _=0;_<f.length;_+=1)T(f[_]);m=!1},d(u){u&&$(e),p&&p.d(),o&&o.d(),ae(f,u)}}}function Ve(c,e,n){let t;F(c,L,i=>n(1,t=i));let a=[];"indexedDB"in window||alert("This browser doesn't support IndexedDB"),Y(async()=>{await r()});const r=async()=>{const i=await G.findAll();i instanceof Error?alert(i.message):n(0,a=i),a.length&&L.setAccount(a[0])};return[a,t,()=>L.navto("new-account"),i=>L.setAccount(i)]}class Oe extends M{constructor(e){super(),q(this,e,Ve,Ne,J,{})}}function Te(c){var s;let e,n,t,a,r,l;return r=new x({props:{text:"Account: "+((s=c[0].account)==null?void 0:s.name),onclick:c[1]}}),{c(){e=w("div"),n=w("div"),t=A("Dashboard"),a=I(),P(r.$$.fragment),this.h()},l(i){e=b(i,"DIV",{class:!0});var m=k(e);n=b(m,"DIV",{class:!0});var p=k(n);t=y(p,"Dashboard"),p.forEach($),a=E(m),C(r.$$.fragment,m),m.forEach($),this.h()},h(){V(n,"class","page-title"),V(e,"class","page")},m(i,m){D(i,e,m),h(e,n),h(n,t),h(e,a),U(r,e,null),l=!0},p(i,[m]){var o;const p={};m&1&&(p.text="Account: "+((o=i[0].account)==null?void 0:o.name)),r.$set(p)},i(i){l||(N(r.$$.fragment,i),l=!0)},o(i){T(r.$$.fragment,i),l=!1},d(i){i&&$(e),R(r)}}}function Se(c,e,n){let t;return F(c,L,r=>n(0,t=r)),"indexedDB"in window||alert("This browser doesn't support IndexedDB"),Y(async()=>{if(!t.account){const r=await G.findAll();r instanceof Error?alert(r.message):r.length&&!t.account&&L.setAccount(r[0])}}),[t,()=>L.navto("accounts")]}class Pe extends M{constructor(e){super(),q(this,e,Se,Te,J,{})}}function Ce(c){let e,n,t,a,r,l,s,i,m,p;return r=new x({props:{text:"theme: "+c[0],onclick:ve.toggle}}),s=new x({props:{text:"delete index db",onclick:c[1]}}),m=new x({props:{text:"populate index db",onclick:c[2]}}),{c(){e=w("div"),n=w("div"),t=A("Developer Settings"),a=I(),P(r.$$.fragment),l=I(),P(s.$$.fragment),i=I(),P(m.$$.fragment),this.h()},l(o){e=b(o,"DIV",{class:!0});var g=k(e);n=b(g,"DIV",{class:!0});var f=k(n);t=y(f,"Developer Settings"),f.forEach($),a=E(g),C(r.$$.fragment,g),l=E(g),C(s.$$.fragment,g),i=E(g),C(m.$$.fragment,g),g.forEach($),this.h()},h(){V(n,"class","page-title"),V(e,"class","page")},m(o,g){D(o,e,g),h(e,n),h(n,t),h(e,a),U(r,e,null),h(e,l),U(s,e,null),h(e,i),U(m,e,null),p=!0},p(o,[g]){const f={};g&1&&(f.text="theme: "+o[0]),r.$set(f)},i(o){p||(N(r.$$.fragment,o),N(s.$$.fragment,o),N(m.$$.fragment,o),p=!0)},o(o){T(r.$$.fragment,o),T(s.$$.fragment,o),T(m.$$.fragment,o),p=!1},d(o){o&&$(e),R(r),R(s),R(m)}}}function Ue(c,e,n){let t;return F(c,ve,l=>n(0,t=l)),[t,async()=>{const{deleteDB:l}=await ge(()=>import("../chunks/index.206c2777.js"),[],import.meta.url);await l("lib_wallet")},async()=>{const l=[];l.push(G.createNew("primary")),l.push(G.createNew("savings")),l.push(G.createNew("stocks")),await Promise.all(l),alert("done")}]}class Re extends M{constructor(e){super(),q(this,e,Ue,Ce,J,{})}}function Le(c){let e,n,t,a;return{c(){e=w("div"),n=w("div"),t=A("Home"),a=A(`
    Welcome to Lib Wallet`),this.h()},l(r){e=b(r,"DIV",{class:!0});var l=k(e);n=b(l,"DIV",{class:!0});var s=k(n);t=y(s,"Home"),s.forEach($),a=y(l,`
    Welcome to Lib Wallet`),l.forEach($),this.h()},h(){V(n,"class","page-title"),V(e,"class","page")},m(r,l){D(r,e,l),h(e,n),h(n,t),h(e,a)},p:W,i:W,o:W,d(r){r&&$(e)}}}class He extends M{constructor(e){super(),q(this,e,null,Le,J,{})}}function We(c){let e,n,t,a,r,l,s,i,m,p;return{c(){e=w("div"),n=w("div"),t=A("Create New Bank Account"),a=I(),r=w("input"),l=I(),s=w("button"),i=A("Create new Bank Account"),this.h()},l(o){e=b(o,"DIV",{class:!0});var g=k(e);n=b(g,"DIV",{class:!0});var f=k(n);t=y(f,"Create New Bank Account"),f.forEach($),a=E(g),r=b(g,"INPUT",{placeholder:!0}),l=E(g),s=b(g,"BUTTON",{});var B=k(s);i=y(B,"Create new Bank Account"),B.forEach($),g.forEach($),this.h()},h(){V(n,"class","page-title"),V(r,"placeholder","Account Name"),V(e,"class","page")},m(o,g){D(o,e,g),h(e,n),h(n,t),h(e,a),h(e,r),z(r,c[0]),h(e,l),h(e,s),h(s,i),m||(p=[j(r,"input",c[2]),j(s,"click",c[1])],m=!0)},p(o,[g]){g&1&&r.value!==o[0]&&z(r,o[0])},i:W,o:W,d(o){o&&$(e),m=!1,ce(p)}}}function je(c,e,n){let t;const a=async()=>{t||alert("enter an account name"),await G.createNew(t),L.navto("dash")};function r(){t=this.value,n(0,t)}return[t,a,r]}class Me extends M{constructor(e){super(),q(this,e,je,We,J,{})}}class qe extends we{constructor(){super(...arguments);H(this,"createNew",async n=>super._createNew("transactions",n));H(this,"findOne",async n=>super._findOne("transactions",n));H(this,"updateOne",async(n,t)=>super._updateOne("transactions",n,t));H(this,"deleteOne",async n=>super._deleteOne("transactions",n));H(this,"findAll",async()=>super._findAll("transactions"))}}const be=new qe;function Je(c){let e,n,t,a,r,l,s,i,m,p,o,g;return{c(){e=w("div"),n=w("div"),t=A("Create New Bank Account"),a=I(),r=w("input"),l=I(),s=w("input"),i=I(),m=w("button"),p=A("Submit"),this.h()},l(f){e=b(f,"DIV",{class:!0});var B=k(e);n=b(B,"DIV",{class:!0});var u=k(n);t=y(u,"Create New Bank Account"),u.forEach($),a=E(B),r=b(B,"INPUT",{placeholder:!0}),l=E(B),s=b(B,"INPUT",{placeholder:!0}),i=E(B),m=b(B,"BUTTON",{});var _=k(m);p=y(_,"Submit"),_.forEach($),B.forEach($),this.h()},h(){V(n,"class","page-title"),V(r,"placeholder","Amount"),V(s,"placeholder","Description"),V(e,"class","page")},m(f,B){D(f,e,B),h(e,n),h(n,t),h(e,a),h(e,r),z(r,c[0]),h(e,l),h(e,s),z(s,c[1]),h(e,i),h(e,m),h(m,p),o||(g=[j(r,"input",c[3]),j(s,"input",c[4]),j(m,"click",c[2])],o=!0)},p(f,[B]){B&1&&r.value!==f[0]&&z(r,f[0]),B&2&&s.value!==f[1]&&z(s,f[1])},i:W,o:W,d(f){f&&$(e),o=!1,ce(g)}}}function ze(c,e,n){let t;F(c,L,m=>n(5,t=m));let a,r;const l=async()=>{var m;if(!((m=t.account)!=null&&m.id))return alert("no acc selected");be.createNew(a,r,t.account.id).then(p=>L.navpop())};function s(){a=this.value,n(0,a)}function i(){r=this.value,n(1,r)}return[a,r,l,s,i]}class Ge extends M{constructor(e){super(),q(this,e,ze,Je,J,{})}}function fe(c,e,n){const t=c.slice();return t[8]=e[n],t}function de(c){let e,n=c[1].name+"",t,a;return{c(){e=A("selected account: "),t=A(n),a=w("br")},l(r){e=y(r,"selected account: "),t=y(r,n),a=b(r,"BR",{})},m(r,l){D(r,e,l),D(r,t,l),D(r,a,l)},p(r,l){l&2&&n!==(n=r[1].name+"")&&Z(t,n)},d(r){r&&$(e),r&&$(t),r&&$(a)}}}function pe(c){let e,n=c[8].name+"",t,a,r;function l(){return c[5](c[8])}return{c(){e=w("div"),t=A(n)},l(s){e=b(s,"DIV",{});var i=k(e);t=y(i,n),i.forEach($)},m(s,i){D(s,e,i),h(e,t),a||(r=j(e,"click",l),a=!0)},p(s,i){c=s,i&4&&n!==(n=c[8].name+"")&&Z(t,n)},d(s){s&&$(e),a=!1,r()}}}function xe(c){let e,n,t,a,r,l,s,i,m,p,o,g,f,B,u=c[1]&&de(c),_=c[2],d=[];for(let v=0;v<_.length;v+=1)d[v]=pe(fe(c,_,v));return{c(){e=w("div"),n=w("h1"),t=A("Just a simple page to test svelte kit static adapter for gh pages"),a=I(),u&&u.c(),r=I();for(let v=0;v<d.length;v+=1)d[v].c();l=I(),s=w("br"),i=I(),m=w("input"),p=I(),o=w("button"),g=A("Create new Bank Account"),this.h()},l(v){e=b(v,"DIV",{class:!0});var S=k(e);n=b(S,"H1",{});var O=k(n);t=y(O,"Just a simple page to test svelte kit static adapter for gh pages"),O.forEach($),a=E(S),u&&u.l(S),r=E(S);for(let ee=0;ee<d.length;ee+=1)d[ee].l(S);l=E(S),s=b(S,"BR",{}),i=E(S),m=b(S,"INPUT",{placeholder:!0}),p=E(S),o=b(S,"BUTTON",{});var K=k(o);g=y(K,"Create new Bank Account"),K.forEach($),S.forEach($),this.h()},h(){V(m,"placeholder","Account Name"),V(e,"class","page")},m(v,S){D(v,e,S),h(e,n),h(n,t),h(e,a),u&&u.m(e,null),h(e,r);for(let O=0;O<d.length;O+=1)d[O]&&d[O].m(e,null);h(e,l),h(e,s),h(e,i),h(e,m),z(m,c[0]),h(e,p),h(e,o),h(o,g),f||(B=[j(m,"input",c[6]),j(o,"click",c[3])],f=!0)},p(v,[S]){if(v[1]?u?u.p(v,S):(u=de(v),u.c(),u.m(e,r)):u&&(u.d(1),u=null),S&20){_=v[2];let O;for(O=0;O<_.length;O+=1){const K=fe(v,_,O);d[O]?d[O].p(K,S):(d[O]=pe(K),d[O].c(),d[O].m(e,l))}for(;O<d.length;O+=1)d[O].d(1);d.length=_.length}S&1&&m.value!==v[0]&&z(m,v[0])},i:W,o:W,d(v){v&&$(e),u&&u.d(),ae(d,v),f=!1,ce(B)}}}function Fe(c,e,n){let t,a,r=[];const l=async()=>{t||alert("enter an account name"),await G.createNew({name:t}),await i()};"indexedDB"in window||alert("This browser doesn't support IndexedDB"),Y(async()=>{await i()});const s=o=>n(1,a=o),i=async()=>{const o=await G.findAll();o instanceof Error?alert(o.message):n(2,r=o),r.length&&n(1,a=r[0])},m=o=>s(o);function p(){t=this.value,n(0,t)}return[t,a,r,l,s,m,p]}class Ke extends M{constructor(e){super(),q(this,e,Fe,xe,J,{})}}function me(c,e,n){const t=c.slice();return t[4]=e[n],t}function _e(c){let e,n=c[1].account.name+"",t,a,r;return{c(){e=A("selected account: "),t=A(n),a=A(" Account"),r=w("br")},l(l){e=y(l,"selected account: "),t=y(l,n),a=y(l," Account"),r=b(l,"BR",{})},m(l,s){D(l,e,s),D(l,t,s),D(l,a,s),D(l,r,s)},p(l,s){s&2&&n!==(n=l[1].account.name+"")&&Z(t,n)},d(l){l&&$(e),l&&$(t),l&&$(a),l&&$(r)}}}function he(c){let e,n,t,a,r;return{c(){e=w("div"),n=w("u"),t=A("add new transaction!!"),this.h()},l(l){e=b(l,"DIV",{class:!0});var s=k(e);n=b(s,"U",{});var i=k(n);t=y(i,"add new transaction!!"),i.forEach($),s.forEach($),this.h()},h(){V(e,"class","link svelte-1ht9oce")},m(l,s){D(l,e,s),h(e,n),h(n,t),a||(r=j(e,"click",c[2]),a=!0)},p:W,d(l){l&&$(e),a=!1,r()}}}function $e(c){let e,n;return e=new x({props:{text:`${c[4].amount} - ${c[4].description}`,onclick:Xe}}),{c(){P(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,a){U(e,t,a),n=!0},p(t,a){const r={};a&1&&(r.text=`${t[4].amount} - ${t[4].description}`),e.$set(r)},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){T(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Qe(c){let e,n,t,a,r,l,s,i,m,p=c[1].account&&_e(c),o=!c[0].length&&he(c),g=c[0],f=[];for(let u=0;u<g.length;u+=1)f[u]=$e(me(c,g,u));const B=u=>T(f[u],1,1,()=>{f[u]=null});return{c(){e=w("div"),n=w("div"),t=A("Transactions"),a=I(),p&&p.c(),r=I(),o&&o.c(),l=I();for(let u=0;u<f.length;u+=1)f[u].c();s=I(),i=w("br"),this.h()},l(u){e=b(u,"DIV",{class:!0});var _=k(e);n=b(_,"DIV",{class:!0});var d=k(n);t=y(d,"Transactions"),d.forEach($),a=E(_),p&&p.l(_),r=E(_),o&&o.l(_),l=E(_);for(let v=0;v<f.length;v+=1)f[v].l(_);s=E(_),i=b(_,"BR",{}),_.forEach($),this.h()},h(){V(n,"class","page-title"),V(e,"class","page")},m(u,_){D(u,e,_),h(e,n),h(n,t),h(e,a),p&&p.m(e,null),h(e,r),o&&o.m(e,null),h(e,l);for(let d=0;d<f.length;d+=1)f[d]&&f[d].m(e,null);h(e,s),h(e,i),m=!0},p(u,[_]){if(u[1].account?p?p.p(u,_):(p=_e(u),p.c(),p.m(e,r)):p&&(p.d(1),p=null),u[0].length?o&&(o.d(1),o=null):o?o.p(u,_):(o=he(u),o.c(),o.m(e,l)),_&1){g=u[0];let d;for(d=0;d<g.length;d+=1){const v=me(u,g,d);f[d]?(f[d].p(v,_),N(f[d],1)):(f[d]=$e(v),f[d].c(),N(f[d],1),f[d].m(e,s))}for(ne(),d=g.length;d<f.length;d+=1)B(d);re()}},i(u){if(!m){for(let _=0;_<g.length;_+=1)N(f[_]);m=!0}},o(u){f=f.filter(Boolean);for(let _=0;_<f.length;_+=1)T(f[_]);m=!1},d(u){u&&$(e),p&&p.d(),o&&o.d(),ae(f,u)}}}const Xe=()=>{};function Ye(c,e,n){let t;F(c,L,s=>n(1,t=s));let a=[];Y(async()=>{await r()});const r=async()=>{const s=await be.findAll();s instanceof Error?alert(s.message):n(0,a=s),n(0,a=a.filter(i=>{var m;return i.accountID===((m=t.account)==null?void 0:m.id)}))};return[a,t,()=>L.navto("new-transaction")]}class Ze extends M{constructor(e){super(),q(this,e,Ye,Qe,J,{})}}function et(c){let e,n;return e=new Ge({}),{c(){P(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,a){U(e,t,a),n=!0},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){T(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function tt(c){let e,n;return e=new Ze({}),{c(){P(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,a){U(e,t,a),n=!0},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){T(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function nt(c){let e,n;return e=new Me({}),{c(){P(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,a){U(e,t,a),n=!0},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){T(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function rt(c){let e,n;return e=new Oe({}),{c(){P(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,a){U(e,t,a),n=!0},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){T(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function at(c){let e,n;return e=new Re({}),{c(){P(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,a){U(e,t,a),n=!0},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){T(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function ct(c){let e,n;return e=new Ke({}),{c(){P(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,a){U(e,t,a),n=!0},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){T(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function lt(c){let e,n;return e=new Pe({}),{c(){P(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,a){U(e,t,a),n=!0},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){T(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function st(c){let e,n;return e=new He({}),{c(){P(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,a){U(e,t,a),n=!0},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){T(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function it(c){let e,n,t,a;const r=[st,lt,ct,at,rt,nt,tt,et],l=[];function s(i,m){return i[0].page==="home"?0:i[0].page==="dash"?1:i[0].page==="test"?2:i[0].page==="debug"?3:i[0].page==="accounts"?4:i[0].page==="new-account"?5:i[0].page==="transactions"?6:i[0].page==="new-transaction"?7:-1}return~(e=s(c))&&(n=l[e]=r[e](c)),{c(){n&&n.c(),t=le()},l(i){n&&n.l(i),t=le()},m(i,m){~e&&l[e].m(i,m),D(i,t,m),a=!0},p(i,[m]){let p=e;e=s(i),e!==p&&(n&&(ne(),T(l[p],1,1,()=>{l[p]=null}),re()),~e?(n=l[e],n||(n=l[e]=r[e](i),n.c()),N(n,1),n.m(t.parentNode,t)):n=null)},i(i){a||(N(n),a=!0)},o(i){T(n),a=!1},d(i){~e&&l[e].d(i),i&&$(t)}}}function ot(c,e,n){let t;return F(c,L,a=>n(0,t=a)),[t]}class _t extends M{constructor(e){super(),q(this,e,ot,it,J,{})}}export{_t as default};
