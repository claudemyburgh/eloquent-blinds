import{a as c,d as ie,e as K,c as k,R as D,r as vr,q as hr,j as p}from"./app-b46587ef.js";import{A as gr}from"./ApplicationLogo-ecd934d7.js";import{D as N}from"./Dropdown-00a83457.js";import{I as pr}from"./index-ce1d5e95.js";function w({active:e=!1,className:r="",children:a,...t}){return c(ie,{...t,className:"inline-flex items-center relative px-5 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(e?"border-primary-400 dark:border-primary-600 text-gray-900 dark:text-gray-100 focus:border-primary-700 ":"border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 ")+r,children:a})}function T({active:e=!1,className:r="",children:a,...t}){return c(ie,{...t,className:`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${e?"border-primary-400 dark:border-primary-600 text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/50 focus:text-primary-800 dark:focus:text-primary-200 focus:bg-primary-100 dark:focus:bg-primary-900 focus:border-primary-700 dark:focus:border-primary-300":"border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${r}`,children:a})}function yr(e,r){for(var a=-1,t=e==null?0:e.length,s=Array(t);++a<t;)s[a]=r(e[a],a,e);return s}var qe=yr;function br(){this.__data__=[],this.size=0}var _r=br;function $r(e,r){return e===r||e!==e&&r!==r}var We=$r,mr=We;function Ar(e,r){for(var a=e.length;a--;)if(mr(e[a][0],r))return a;return-1}var q=Ar,xr=q,Tr=Array.prototype,Sr=Tr.splice;function wr(e){var r=this.__data__,a=xr(r,e);if(a<0)return!1;var t=r.length-1;return a==t?r.pop():Sr.call(r,a,1),--this.size,!0}var Cr=wr,Or=q;function Pr(e){var r=this.__data__,a=Or(r,e);return a<0?void 0:r[a][1]}var Ir=Pr,Mr=q;function Er(e){return Mr(this.__data__,e)>-1}var Dr=Er,Nr=q;function Lr(e,r){var a=this.__data__,t=Nr(a,e);return t<0?(++this.size,a.push([e,r])):a[t][1]=r,this}var jr=Lr,kr=_r,Gr=Cr,Rr=Ir,Fr=Dr,Hr=jr;function C(e){var r=-1,a=e==null?0:e.length;for(this.clear();++r<a;){var t=e[r];this.set(t[0],t[1])}}C.prototype.clear=kr;C.prototype.delete=Gr;C.prototype.get=Rr;C.prototype.has=Fr;C.prototype.set=Hr;var W=C,Kr=W;function Br(){this.__data__=new Kr,this.size=0}var Ur=Br;function zr(e){var r=this.__data__,a=r.delete(e);return this.size=r.size,a}var qr=zr;function Wr(e){return this.__data__.get(e)}var Xr=Wr;function Jr(e){return this.__data__.has(e)}var Yr=Jr,Zr=typeof K=="object"&&K&&K.Object===Object&&K,Xe=Zr,Qr=Xe,Vr=typeof self=="object"&&self&&self.Object===Object&&self,ea=Qr||Vr||Function("return this")(),_=ea,ra=_,aa=ra.Symbol,X=aa,ye=X,Je=Object.prototype,ta=Je.hasOwnProperty,na=Je.toString,L=ye?ye.toStringTag:void 0;function sa(e){var r=ta.call(e,L),a=e[L];try{e[L]=void 0;var t=!0}catch{}var s=na.call(e);return t&&(r?e[L]=a:delete e[L]),s}var ia=sa,oa=Object.prototype,ca=oa.toString;function ua(e){return ca.call(e)}var da=ua,be=X,la=ia,fa=da,va="[object Null]",ha="[object Undefined]",_e=be?be.toStringTag:void 0;function ga(e){return e==null?e===void 0?ha:va:_e&&_e in Object(e)?la(e):fa(e)}var G=ga;function pa(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var oe=pa,ya=G,ba=oe,_a="[object AsyncFunction]",$a="[object Function]",ma="[object GeneratorFunction]",Aa="[object Proxy]";function xa(e){if(!ba(e))return!1;var r=ya(e);return r==$a||r==ma||r==_a||r==Aa}var Ye=xa,Ta=_,Sa=Ta["__core-js_shared__"],wa=Sa,Q=wa,$e=function(){var e=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Ca(e){return!!$e&&$e in e}var Oa=Ca,Pa=Function.prototype,Ia=Pa.toString;function Ma(e){if(e!=null){try{return Ia.call(e)}catch{}try{return e+""}catch{}}return""}var Ze=Ma,Ea=Ye,Da=Oa,Na=oe,La=Ze,ja=/[\\^$.*+?()[\]{}|]/g,ka=/^\[object .+?Constructor\]$/,Ga=Function.prototype,Ra=Object.prototype,Fa=Ga.toString,Ha=Ra.hasOwnProperty,Ka=RegExp("^"+Fa.call(Ha).replace(ja,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ba(e){if(!Na(e)||Da(e))return!1;var r=Ea(e)?Ka:ka;return r.test(La(e))}var Ua=Ba;function za(e,r){return e==null?void 0:e[r]}var qa=za,Wa=Ua,Xa=qa;function Ja(e,r){var a=Xa(e,r);return Wa(a)?a:void 0}var O=Ja,Ya=O,Za=_,Qa=Ya(Za,"Map"),ce=Qa,Va=O,et=Va(Object,"create"),J=et,me=J;function rt(){this.__data__=me?me(null):{},this.size=0}var at=rt;function tt(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var nt=tt,st=J,it="__lodash_hash_undefined__",ot=Object.prototype,ct=ot.hasOwnProperty;function ut(e){var r=this.__data__;if(st){var a=r[e];return a===it?void 0:a}return ct.call(r,e)?r[e]:void 0}var dt=ut,lt=J,ft=Object.prototype,vt=ft.hasOwnProperty;function ht(e){var r=this.__data__;return lt?r[e]!==void 0:vt.call(r,e)}var gt=ht,pt=J,yt="__lodash_hash_undefined__";function bt(e,r){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=pt&&r===void 0?yt:r,this}var _t=bt,$t=at,mt=nt,At=dt,xt=gt,Tt=_t;function P(e){var r=-1,a=e==null?0:e.length;for(this.clear();++r<a;){var t=e[r];this.set(t[0],t[1])}}P.prototype.clear=$t;P.prototype.delete=mt;P.prototype.get=At;P.prototype.has=xt;P.prototype.set=Tt;var St=P,Ae=St,wt=W,Ct=ce;function Ot(){this.size=0,this.__data__={hash:new Ae,map:new(Ct||wt),string:new Ae}}var Pt=Ot;function It(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}var Mt=It,Et=Mt;function Dt(e,r){var a=e.__data__;return Et(r)?a[typeof r=="string"?"string":"hash"]:a.map}var Y=Dt,Nt=Y;function Lt(e){var r=Nt(this,e).delete(e);return this.size-=r?1:0,r}var jt=Lt,kt=Y;function Gt(e){return kt(this,e).get(e)}var Rt=Gt,Ft=Y;function Ht(e){return Ft(this,e).has(e)}var Kt=Ht,Bt=Y;function Ut(e,r){var a=Bt(this,e),t=a.size;return a.set(e,r),this.size+=a.size==t?0:1,this}var zt=Ut,qt=Pt,Wt=jt,Xt=Rt,Jt=Kt,Yt=zt;function I(e){var r=-1,a=e==null?0:e.length;for(this.clear();++r<a;){var t=e[r];this.set(t[0],t[1])}}I.prototype.clear=qt;I.prototype.delete=Wt;I.prototype.get=Xt;I.prototype.has=Jt;I.prototype.set=Yt;var ue=I,Zt=W,Qt=ce,Vt=ue,en=200;function rn(e,r){var a=this.__data__;if(a instanceof Zt){var t=a.__data__;if(!Qt||t.length<en-1)return t.push([e,r]),this.size=++a.size,this;a=this.__data__=new Vt(t)}return a.set(e,r),this.size=a.size,this}var an=rn,tn=W,nn=Ur,sn=qr,on=Xr,cn=Yr,un=an;function M(e){var r=this.__data__=new tn(e);this.size=r.size}M.prototype.clear=nn;M.prototype.delete=sn;M.prototype.get=on;M.prototype.has=cn;M.prototype.set=un;var Qe=M,dn="__lodash_hash_undefined__";function ln(e){return this.__data__.set(e,dn),this}var fn=ln;function vn(e){return this.__data__.has(e)}var hn=vn,gn=ue,pn=fn,yn=hn;function U(e){var r=-1,a=e==null?0:e.length;for(this.__data__=new gn;++r<a;)this.add(e[r])}U.prototype.add=U.prototype.push=pn;U.prototype.has=yn;var bn=U;function _n(e,r){for(var a=-1,t=e==null?0:e.length;++a<t;)if(r(e[a],a,e))return!0;return!1}var $n=_n;function mn(e,r){return e.has(r)}var An=mn,xn=bn,Tn=$n,Sn=An,wn=1,Cn=2;function On(e,r,a,t,s,n){var i=a&wn,o=e.length,d=r.length;if(o!=d&&!(i&&d>o))return!1;var u=n.get(e),y=n.get(r);if(u&&y)return u==r&&y==e;var h=-1,f=!0,v=a&Cn?new xn:void 0;for(n.set(e,r),n.set(r,e);++h<o;){var g=e[h],b=r[h];if(t)var m=i?t(b,g,h,r,e,n):t(g,b,h,e,r,n);if(m!==void 0){if(m)continue;f=!1;break}if(v){if(!Tn(r,function(A,x){if(!Sn(v,x)&&(g===A||s(g,A,a,t,n)))return v.push(x)})){f=!1;break}}else if(!(g===b||s(g,b,a,t,n))){f=!1;break}}return n.delete(e),n.delete(r),f}var Ve=On,Pn=_,In=Pn.Uint8Array,Mn=In;function En(e){var r=-1,a=Array(e.size);return e.forEach(function(t,s){a[++r]=[s,t]}),a}var Dn=En;function Nn(e){var r=-1,a=Array(e.size);return e.forEach(function(t){a[++r]=t}),a}var Ln=Nn,xe=X,Te=Mn,jn=We,kn=Ve,Gn=Dn,Rn=Ln,Fn=1,Hn=2,Kn="[object Boolean]",Bn="[object Date]",Un="[object Error]",zn="[object Map]",qn="[object Number]",Wn="[object RegExp]",Xn="[object Set]",Jn="[object String]",Yn="[object Symbol]",Zn="[object ArrayBuffer]",Qn="[object DataView]",Se=xe?xe.prototype:void 0,V=Se?Se.valueOf:void 0;function Vn(e,r,a,t,s,n,i){switch(a){case Qn:if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case Zn:return!(e.byteLength!=r.byteLength||!n(new Te(e),new Te(r)));case Kn:case Bn:case qn:return jn(+e,+r);case Un:return e.name==r.name&&e.message==r.message;case Wn:case Jn:return e==r+"";case zn:var o=Gn;case Xn:var d=t&Fn;if(o||(o=Rn),e.size!=r.size&&!d)return!1;var u=i.get(e);if(u)return u==r;t|=Hn,i.set(e,r);var y=kn(o(e),o(r),t,s,n,i);return i.delete(e),y;case Yn:if(V)return V.call(e)==V.call(r)}return!1}var es=Vn;function rs(e,r){for(var a=-1,t=r.length,s=e.length;++a<t;)e[s+a]=r[a];return e}var as=rs,ts=Array.isArray,$=ts,ns=as,ss=$;function is(e,r,a){var t=r(e);return ss(e)?t:ns(t,a(e))}var os=is;function cs(e,r){for(var a=-1,t=e==null?0:e.length,s=0,n=[];++a<t;){var i=e[a];r(i,a,e)&&(n[s++]=i)}return n}var us=cs;function ds(){return[]}var ls=ds,fs=us,vs=ls,hs=Object.prototype,gs=hs.propertyIsEnumerable,we=Object.getOwnPropertySymbols,ps=we?function(e){return e==null?[]:(e=Object(e),fs(we(e),function(r){return gs.call(e,r)}))}:vs,ys=ps;function bs(e,r){for(var a=-1,t=Array(e);++a<e;)t[a]=r(a);return t}var _s=bs;function $s(e){return e!=null&&typeof e=="object"}var R=$s,ms=G,As=R,xs="[object Arguments]";function Ts(e){return As(e)&&ms(e)==xs}var Ss=Ts,Ce=Ss,ws=R,er=Object.prototype,Cs=er.hasOwnProperty,Os=er.propertyIsEnumerable,Ps=Ce(function(){return arguments}())?Ce:function(e){return ws(e)&&Cs.call(e,"callee")&&!Os.call(e,"callee")},rr=Ps,j={},Is={get exports(){return j},set exports(e){j=e}};function Ms(){return!1}var Es=Ms;(function(e,r){var a=_,t=Es,s=r&&!r.nodeType&&r,n=s&&!0&&e&&!e.nodeType&&e,i=n&&n.exports===s,o=i?a.Buffer:void 0,d=o?o.isBuffer:void 0,u=d||t;e.exports=u})(Is,j);var Ds=9007199254740991,Ns=/^(?:0|[1-9]\d*)$/;function Ls(e,r){var a=typeof e;return r=r??Ds,!!r&&(a=="number"||a!="symbol"&&Ns.test(e))&&e>-1&&e%1==0&&e<r}var ar=Ls,js=9007199254740991;function ks(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=js}var de=ks,Gs=G,Rs=de,Fs=R,Hs="[object Arguments]",Ks="[object Array]",Bs="[object Boolean]",Us="[object Date]",zs="[object Error]",qs="[object Function]",Ws="[object Map]",Xs="[object Number]",Js="[object Object]",Ys="[object RegExp]",Zs="[object Set]",Qs="[object String]",Vs="[object WeakMap]",ei="[object ArrayBuffer]",ri="[object DataView]",ai="[object Float32Array]",ti="[object Float64Array]",ni="[object Int8Array]",si="[object Int16Array]",ii="[object Int32Array]",oi="[object Uint8Array]",ci="[object Uint8ClampedArray]",ui="[object Uint16Array]",di="[object Uint32Array]",l={};l[ai]=l[ti]=l[ni]=l[si]=l[ii]=l[oi]=l[ci]=l[ui]=l[di]=!0;l[Hs]=l[Ks]=l[ei]=l[Bs]=l[ri]=l[Us]=l[zs]=l[qs]=l[Ws]=l[Xs]=l[Js]=l[Ys]=l[Zs]=l[Qs]=l[Vs]=!1;function li(e){return Fs(e)&&Rs(e.length)&&!!l[Gs(e)]}var fi=li;function vi(e){return function(r){return e(r)}}var hi=vi,z={},gi={get exports(){return z},set exports(e){z=e}};(function(e,r){var a=Xe,t=r&&!r.nodeType&&r,s=t&&!0&&e&&!e.nodeType&&e,n=s&&s.exports===t,i=n&&a.process,o=function(){try{var d=s&&s.require&&s.require("util").types;return d||i&&i.binding&&i.binding("util")}catch{}}();e.exports=o})(gi,z);var pi=fi,yi=hi,Oe=z,Pe=Oe&&Oe.isTypedArray,bi=Pe?yi(Pe):pi,tr=bi,_i=_s,$i=rr,mi=$,Ai=j,xi=ar,Ti=tr,Si=Object.prototype,wi=Si.hasOwnProperty;function Ci(e,r){var a=mi(e),t=!a&&$i(e),s=!a&&!t&&Ai(e),n=!a&&!t&&!s&&Ti(e),i=a||t||s||n,o=i?_i(e.length,String):[],d=o.length;for(var u in e)(r||wi.call(e,u))&&!(i&&(u=="length"||s&&(u=="offset"||u=="parent")||n&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||xi(u,d)))&&o.push(u);return o}var Oi=Ci,Pi=Object.prototype;function Ii(e){var r=e&&e.constructor,a=typeof r=="function"&&r.prototype||Pi;return e===a}var Mi=Ii;function Ei(e,r){return function(a){return e(r(a))}}var Di=Ei,Ni=Di,Li=Ni(Object.keys,Object),ji=Li,ki=Mi,Gi=ji,Ri=Object.prototype,Fi=Ri.hasOwnProperty;function Hi(e){if(!ki(e))return Gi(e);var r=[];for(var a in Object(e))Fi.call(e,a)&&a!="constructor"&&r.push(a);return r}var Ki=Hi,Bi=Ye,Ui=de;function zi(e){return e!=null&&Ui(e.length)&&!Bi(e)}var le=zi,qi=Oi,Wi=Ki,Xi=le;function Ji(e){return Xi(e)?qi(e):Wi(e)}var fe=Ji,Yi=os,Zi=ys,Qi=fe;function Vi(e){return Yi(e,Qi,Zi)}var eo=Vi,Ie=eo,ro=1,ao=Object.prototype,to=ao.hasOwnProperty;function no(e,r,a,t,s,n){var i=a&ro,o=Ie(e),d=o.length,u=Ie(r),y=u.length;if(d!=y&&!i)return!1;for(var h=d;h--;){var f=o[h];if(!(i?f in r:to.call(r,f)))return!1}var v=n.get(e),g=n.get(r);if(v&&g)return v==r&&g==e;var b=!0;n.set(e,r),n.set(r,e);for(var m=i;++h<d;){f=o[h];var A=e[f],x=r[f];if(t)var pe=i?t(x,A,f,r,e,n):t(A,x,f,e,r,n);if(!(pe===void 0?A===x||s(A,x,a,t,n):pe)){b=!1;break}m||(m=f=="constructor")}if(b&&!m){var F=e.constructor,H=r.constructor;F!=H&&"constructor"in e&&"constructor"in r&&!(typeof F=="function"&&F instanceof F&&typeof H=="function"&&H instanceof H)&&(b=!1)}return n.delete(e),n.delete(r),b}var so=no,io=O,oo=_,co=io(oo,"DataView"),uo=co,lo=O,fo=_,vo=lo(fo,"Promise"),ho=vo,go=O,po=_,yo=go(po,"Set"),bo=yo,_o=O,$o=_,mo=_o($o,"WeakMap"),Ao=mo,re=uo,ae=ce,te=ho,ne=bo,se=Ao,nr=G,E=Ze,Me="[object Map]",xo="[object Object]",Ee="[object Promise]",De="[object Set]",Ne="[object WeakMap]",Le="[object DataView]",To=E(re),So=E(ae),wo=E(te),Co=E(ne),Oo=E(se),S=nr;(re&&S(new re(new ArrayBuffer(1)))!=Le||ae&&S(new ae)!=Me||te&&S(te.resolve())!=Ee||ne&&S(new ne)!=De||se&&S(new se)!=Ne)&&(S=function(e){var r=nr(e),a=r==xo?e.constructor:void 0,t=a?E(a):"";if(t)switch(t){case To:return Le;case So:return Me;case wo:return Ee;case Co:return De;case Oo:return Ne}return r});var Po=S,ee=Qe,Io=Ve,Mo=es,Eo=so,je=Po,ke=$,Ge=j,Do=tr,No=1,Re="[object Arguments]",Fe="[object Array]",B="[object Object]",Lo=Object.prototype,He=Lo.hasOwnProperty;function jo(e,r,a,t,s,n){var i=ke(e),o=ke(r),d=i?Fe:je(e),u=o?Fe:je(r);d=d==Re?B:d,u=u==Re?B:u;var y=d==B,h=u==B,f=d==u;if(f&&Ge(e)){if(!Ge(r))return!1;i=!0,y=!1}if(f&&!y)return n||(n=new ee),i||Do(e)?Io(e,r,a,t,s,n):Mo(e,r,d,a,t,s,n);if(!(a&No)){var v=y&&He.call(e,"__wrapped__"),g=h&&He.call(r,"__wrapped__");if(v||g){var b=v?e.value():e,m=g?r.value():r;return n||(n=new ee),s(b,m,a,t,n)}}return f?(n||(n=new ee),Eo(e,r,a,t,s,n)):!1}var ko=jo,Go=ko,Ke=R;function sr(e,r,a,t,s){return e===r?!0:e==null||r==null||!Ke(e)&&!Ke(r)?e!==e&&r!==r:Go(e,r,a,t,sr,s)}var ir=sr,Ro=Qe,Fo=ir,Ho=1,Ko=2;function Bo(e,r,a,t){var s=a.length,n=s,i=!t;if(e==null)return!n;for(e=Object(e);s--;){var o=a[s];if(i&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++s<n;){o=a[s];var d=o[0],u=e[d],y=o[1];if(i&&o[2]){if(u===void 0&&!(d in e))return!1}else{var h=new Ro;if(t)var f=t(u,y,d,e,r,h);if(!(f===void 0?Fo(y,u,Ho|Ko,t,h):f))return!1}}return!0}var Uo=Bo,zo=oe;function qo(e){return e===e&&!zo(e)}var or=qo,Wo=or,Xo=fe;function Jo(e){for(var r=Xo(e),a=r.length;a--;){var t=r[a],s=e[t];r[a]=[t,s,Wo(s)]}return r}var Yo=Jo;function Zo(e,r){return function(a){return a==null?!1:a[e]===r&&(r!==void 0||e in Object(a))}}var cr=Zo,Qo=Uo,Vo=Yo,ec=cr;function rc(e){var r=Vo(e);return r.length==1&&r[0][2]?ec(r[0][0],r[0][1]):function(a){return a===e||Qo(a,e,r)}}var ac=rc,tc=G,nc=R,sc="[object Symbol]";function ic(e){return typeof e=="symbol"||nc(e)&&tc(e)==sc}var ve=ic,oc=$,cc=ve,uc=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,dc=/^\w*$/;function lc(e,r){if(oc(e))return!1;var a=typeof e;return a=="number"||a=="symbol"||a=="boolean"||e==null||cc(e)?!0:dc.test(e)||!uc.test(e)||r!=null&&e in Object(r)}var he=lc,ur=ue,fc="Expected a function";function ge(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(fc);var a=function(){var t=arguments,s=r?r.apply(this,t):t[0],n=a.cache;if(n.has(s))return n.get(s);var i=e.apply(this,t);return a.cache=n.set(s,i)||n,i};return a.cache=new(ge.Cache||ur),a}ge.Cache=ur;var vc=ge,hc=vc,gc=500;function pc(e){var r=hc(e,function(t){return a.size===gc&&a.clear(),t}),a=r.cache;return r}var yc=pc,bc=yc,_c=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$c=/\\(\\)?/g,mc=bc(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(_c,function(a,t,s,n){r.push(s?n.replace($c,"$1"):t||a)}),r}),Ac=mc,Be=X,xc=qe,Tc=$,Sc=ve,wc=1/0,Ue=Be?Be.prototype:void 0,ze=Ue?Ue.toString:void 0;function dr(e){if(typeof e=="string")return e;if(Tc(e))return xc(e,dr)+"";if(Sc(e))return ze?ze.call(e):"";var r=e+"";return r=="0"&&1/e==-wc?"-0":r}var Cc=dr,Oc=Cc;function Pc(e){return e==null?"":Oc(e)}var Ic=Pc,Mc=$,Ec=he,Dc=Ac,Nc=Ic;function Lc(e,r){return Mc(e)?e:Ec(e,r)?[e]:Dc(Nc(e))}var lr=Lc,jc=ve,kc=1/0;function Gc(e){if(typeof e=="string"||jc(e))return e;var r=e+"";return r=="0"&&1/e==-kc?"-0":r}var Z=Gc,Rc=lr,Fc=Z;function Hc(e,r){r=Rc(r,e);for(var a=0,t=r.length;e!=null&&a<t;)e=e[Fc(r[a++])];return a&&a==t?e:void 0}var fr=Hc,Kc=fr;function Bc(e,r,a){var t=e==null?void 0:Kc(e,r);return t===void 0?a:t}var Uc=Bc;function zc(e,r){return e!=null&&r in Object(e)}var qc=zc,Wc=lr,Xc=rr,Jc=$,Yc=ar,Zc=de,Qc=Z;function Vc(e,r,a){r=Wc(r,e);for(var t=-1,s=r.length,n=!1;++t<s;){var i=Qc(r[t]);if(!(n=e!=null&&a(e,i)))break;e=e[i]}return n||++t!=s?n:(s=e==null?0:e.length,!!s&&Zc(s)&&Yc(i,s)&&(Jc(e)||Xc(e)))}var eu=Vc,ru=qc,au=eu;function tu(e,r){return e!=null&&au(e,r,ru)}var nu=tu,su=ir,iu=Uc,ou=nu,cu=he,uu=or,du=cr,lu=Z,fu=1,vu=2;function hu(e,r){return cu(e)&&uu(r)?du(lu(e),r):function(a){var t=iu(a,e);return t===void 0&&t===r?ou(a,e):su(r,t,fu|vu)}}var gu=hu;function pu(e){return e}var yu=pu;function bu(e){return function(r){return r==null?void 0:r[e]}}var _u=bu,$u=fr;function mu(e){return function(r){return $u(r,e)}}var Au=mu,xu=_u,Tu=Au,Su=he,wu=Z;function Cu(e){return Su(e)?xu(wu(e)):Tu(e)}var Ou=Cu,Pu=ac,Iu=gu,Mu=yu,Eu=$,Du=Ou;function Nu(e){return typeof e=="function"?e:e==null?Mu:typeof e=="object"?Eu(e)?Iu(e[0],e[1]):Pu(e):Du(e)}var Lu=Nu;function ju(e){return function(r,a,t){for(var s=-1,n=Object(r),i=t(r),o=i.length;o--;){var d=i[e?o:++s];if(a(n[d],d,n)===!1)break}return r}}var ku=ju,Gu=ku,Ru=Gu(),Fu=Ru,Hu=Fu,Ku=fe;function Bu(e,r){return e&&Hu(e,r,Ku)}var Uu=Bu,zu=le;function qu(e,r){return function(a,t){if(a==null)return a;if(!zu(a))return e(a,t);for(var s=a.length,n=r?s:-1,i=Object(a);(r?n--:++n<s)&&t(i[n],n,i)!==!1;);return a}}var Wu=qu,Xu=Uu,Ju=Wu,Yu=Ju(Xu),Zu=Yu,Qu=Zu,Vu=le;function ed(e,r){var a=-1,t=Vu(e)?Array(e.length):[];return Qu(e,function(s,n,i){t[++a]=r(s,n,i)}),t}var rd=ed,ad=qe,td=Lu,nd=rd,sd=$;function id(e,r){var a=sd(e)?ad:nd;return a(e,td(r))}var od=id;const cd=k({key:"datatable_order_column",default:{key:"id",order:"desc"}}),ud=k({key:"datatable_quick_search",default:""}),dd=k({key:"datatable_filtered_data",default:[]}),ld=k({key:"datatable_limit",default:25}),fd=k({key:"datatable_selected",default:[]});function vd(){const[e,r]=D(cd),[a,t]=D(ud),[s,n]=D(ld),[i,o]=D(dd),[d,u]=D(fd);return{order:e,setOrder:r,filteredData:i,setFilteredData:o,quickSearch:a,setQuickSearch:t,handleColumnOrder:v=>{r({...e,key:v,order:e.order==="asc"&&e.key===v?"desc":"asc"})},limit:s,setLimit:n,selected:d,setSelected:u,handleSelected:v=>{v.target.checked?u([...d,parseInt(v.target.value)]):u(d.filter(g=>g!=v.target.value))},handleToggleSelectedAll:(v,g)=>{v.target.checked?u([...d,...od(g,"id")]):u([])}}}function bd({user:e,header:r,children:a}){const[t,s]=vr.useState(!1),{limit:n}=vd(),{emails:{unread:i}}=hr().props;return p("div",{className:"min-h-screen bg-gray-100 dark:bg-gray-900 relative md:pt-[100px]",children:[p("nav",{className:"bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 md:fixed top-0 inset-x-0 z-40",children:[c("div",{className:"wrapper",children:p("div",{className:"flex justify-between h-16",children:[p("div",{className:"flex",children:[c("div",{className:"shrink-0 flex items-center",children:c(ie,{href:"/",children:c(gr,{className:"block h-9 w-auto fill-current text-gray-800 dark:text-gray-200"})})}),p("div",{className:"hidden sm:-my-px sm:ml-10 sm:flex",children:[c(w,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"}),p(w,{href:route("dashboard.messages.index"),active:route().current("dashboard.messages.*"),children:["Message",i>0&&c("span",{className:"bg-red-500 text-white px-2 absolute top-3 -right-0 rounded-lg text-xs",children:i})]}),c(w,{data:{limit:n},href:route("dashboard.users.index"),active:route().current("dashboard.users.index"),children:"Users"}),c(w,{data:{limit:n},href:route("dashboard.posts.index"),active:route().current("dashboard.posts.*"),children:"Posts"}),c(w,{href:route("dashboard.categories.index"),active:route().current("dashboard.categories.*"),children:"Categories"}),c(w,{href:route("dashboard.products.index"),active:route().current("dashboard.products.*"),children:"Products"})]})]}),c("div",{className:"hidden sm:flex sm:items-center sm:ml-6",children:c("div",{className:"ml-3 relative",children:p(N,{children:[c(N.Trigger,{children:c("span",{className:"inline-flex rounded-md",children:p("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150",children:[e.name,c("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:c("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),p(N.Content,{children:[c(N.Link,{href:route("profile.edit"),children:"Profile"}),c(N.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),c("div",{className:"-mr-2 flex items-center sm:hidden",children:c("button",{onClick:()=>s(o=>!o),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",children:p("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[c("path",{className:t?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),c("path",{className:t?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),p("div",{className:(t?"block":"hidden")+" sm:hidden",children:[p("div",{className:"pt-2 pb-3 space-y-1",children:[c(T,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"}),c(T,{href:route("dashboard.messages.index"),active:route().current("dashboard.messages.*"),children:"Messages"}),c(T,{href:route("dashboard.users.index"),active:route().current("dashboard.users.*"),children:"Users"}),c(T,{href:route("dashboard.posts.index"),active:route().current("dashboard.posts.*"),children:"Posts"}),c(T,{href:route("dashboard.categories.index"),active:route().current("dashboard.categories.*"),children:"Categories"})]}),p("div",{className:"pt-4 pb-1 border-t border-gray-200 dark:border-gray-600",children:[p("div",{className:"px-4",children:[c("div",{className:"font-medium text-base text-gray-800 dark:text-gray-200",children:e.name}),c("div",{className:"font-medium text-sm text-gray-500",children:e.email})]}),p("div",{className:"mt-3 space-y-1",children:[c(T,{href:route("profile.edit"),children:"Profile"}),c(T,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]}),r&&c("header",{className:"bg-white dark:bg-gray-800 shadow relative border-t border-gray-700/50",children:c("div",{className:"wrapper py-4",children:c("div",{className:"flex justify-between",children:r})})})]}),c("main",{children:a}),c(pr,{position:"top-right",toastOptions:{duration:2200}})]})}export{bd as A,qe as _,fr as a,rd as b,hi as c,yu as d,$ as e,Lu as f,ve as i,Ic as t,vd as u};
