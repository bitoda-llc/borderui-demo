import{s as T,e as v,c as g,b as E,f as _,m as d,i as b,n as N,o as P,k as j,t as q,a as y,d as O,g as x,h as k,j as R,H as U,p as V}from"./scheduler.DgIkAoNE.js";import{e as A}from"./each.BK6dEu8N.js";import{S as z,i as B}from"./index.cAnTWcVe.js";import{p as D}from"./stores.mMOCR0Bk.js";function S(i,a,l){const e=i.slice();return e[3]=a[l],e[5]=l,e}function I(i,a,l){const e=i.slice();return e[6]=a[l].href,e[7]=a[l].label,e}function C(i){let a,l,e,s,r=i[7]+"",t,h,m;return{c(){a=v("li"),l=v("a"),e=v("span"),s=new U(!1),m=y(),this.h()},l(u){a=g(u,"LI",{});var f=E(a);l=g(f,"A",{href:!0,class:!0,"data-sveltekit-preload-data":!0});var c=E(l);e=g(c,"SPAN",{class:!0});var n=E(e);s=V(n,!1),n.forEach(_),c.forEach(_),m=x(f),f.forEach(_),this.h()},h(){s.a=null,d(e,"class","flex-auto"),d(l,"href",t=i[6]),d(l,"class",h=i[1](i[6])),d(l,"data-sveltekit-preload-data","hover")},m(u,f){b(u,a,f),k(a,l),k(l,e),s.m(r,e),k(a,m)},p(u,f){f&1&&r!==(r=u[7]+"")&&s.p(r),f&1&&t!==(t=u[6])&&d(l,"href",t),f&3&&h!==(h=u[1](u[6]))&&d(l,"class",h)},d(u){u&&_(a)}}}function L(i){let a,l=i[3].title+"",e,s,r,t,h,m,u,f=A(i[3].list),c=[];for(let n=0;n<f.length;n+=1)c[n]=C(I(i,f,n));return{c(){a=v("p"),e=q(l),s=y(),r=v("hr"),t=y(),h=v("nav"),m=v("ul");for(let n=0;n<c.length;n+=1)c[n].c();u=y(),this.h()},l(n){a=g(n,"P",{class:!0});var p=E(a);e=O(p,l),p.forEach(_),s=x(n),r=g(n,"HR",{class:!0}),t=x(n),h=g(n,"NAV",{class:!0});var o=E(h);m=g(o,"UL",{});var w=E(m);for(let H=0;H<c.length;H+=1)c[H].l(w);w.forEach(_),u=x(o),o.forEach(_),this.h()},h(){d(a,"class","pl-4 text-2xl font-bold"),d(r,"class","opacity-50"),d(h,"class","list-nav")},m(n,p){b(n,a,p),k(a,e),b(n,s,p),b(n,r,p),b(n,t,p),b(n,h,p),k(h,m);for(let o=0;o<c.length;o+=1)c[o]&&c[o].m(m,null);k(h,u)},p(n,p){if(p&1&&l!==(l=n[3].title+"")&&R(e,l),p&3){f=A(n[3].list);let o;for(o=0;o<f.length;o+=1){const w=I(n,f,o);c[o]?c[o].p(w,p):(c[o]=C(w),c[o].c(),c[o].m(m,null))}for(;o<c.length;o+=1)c[o].d(1);c.length=f.length}},d(n){n&&(_(a),_(s),_(r),_(t),_(h)),P(c,n)}}}function F(i){let a,l=A(i[0]),e=[];for(let s=0;s<l.length;s+=1)e[s]=L(S(i,l,s));return{c(){a=v("section");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){a=g(s,"SECTION",{class:!0});var r=E(a);for(let t=0;t<e.length;t+=1)e[t].l(r);r.forEach(_),this.h()},h(){d(a,"class","bg-surface flex h-full w-auto min-w-60 flex-col space-y-4 overflow-hidden overflow-y-auto border-2 border-solid p-4 pb-20")},m(s,r){b(s,a,r);for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(a,null)},p(s,[r]){if(r&3){l=A(s[0]);let t;for(t=0;t<l.length;t+=1){const h=S(s,l,t);e[t]?e[t].p(h,r):(e[t]=L(h),e[t].c(),e[t].m(a,null))}for(;t<e.length;t+=1)e[t].d(1);e.length=l.length}},i:N,o:N,d(s){s&&_(a),P(e,s)}}}function G(i,a,l){let e,s,r;return j(i,D,t=>l(2,r=t)),i.$$.update=()=>{i.$$.dirty&4&&l(1,e=t=>{var h;return(h=r.url.pathname)!=null&&h.includes(t)?"bg-primary-active-token":""})},l(0,s=[{title:"Environments",list:[{href:"/dashboard/environment1",label:"Environment 1"},{href:"/dashboard/environment2",label:"Environment 2"}]}]),[s,e,r]}class W extends z{constructor(a){super(),B(this,a,G,F,T,{})}}export{W as E};