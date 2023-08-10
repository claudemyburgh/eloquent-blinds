import{R as h,d as m}from"./index.esm-7e288f01.js";import{e as L,f as p,l as A,u as F,s as g,D as x,X as y}from"./transition-d4d33e78.js";var b;let X=(b=h.useId)!=null?b:function(){let e=L(),[t,r]=h.useState(e?()=>p.nextId():null);return A(()=>{t===null&&r(p.nextId())},[t]),t!=null?""+t:void 0};function S(e){return p.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let w=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var P=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(P||{}),I=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(I||{}),M=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(M||{});function T(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(w)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var N=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(N||{});function D(e,t=0){var r;return e===((r=S(e))==null?void 0:r.body)?!1:F(t,{0(){return e.matches(w)},1(){let o=e;for(;o!==null;){if(o.matches(w))return!0;o=o.parentElement}return!1}})}var O=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(O||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function j(e){e==null||e.focus({preventScroll:!0})}let H=["textarea","input"].join(",");function R(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,H))!=null?r:!1}function U(e,t=r=>r){return e.slice().sort((r,o)=>{let u=t(r),a=t(o);if(u===null||a===null)return 0;let n=u.compareDocumentPosition(a);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function q(e,t,{sorted:r=!0,relativeTo:o=null,skipElements:u=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,n=Array.isArray(e)?r?U(e):e:T(e);u.length>0&&n.length>1&&(n=n.filter(d=>!u.includes(d))),o=o??a.activeElement;let c=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),l=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,n.indexOf(o))-1;if(t&4)return Math.max(0,n.indexOf(o))+1;if(t&8)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),v=t&32?{preventScroll:!0}:{},s=0,i=n.length,f;do{if(s>=i||s+i<=0)return 0;let d=l+s;if(t&16)d=(d+i)%i;else{if(d<0)return 3;if(d>=i)return 1}f=n[d],f==null||f.focus(v),s+=c}while(f!==a.activeElement);return t&6&&R(f)&&f.select(),2}function E(e,t,r){let o=g(t);m.useEffect(()=>{function u(a){o.current(a)}return document.addEventListener(e,u,r),()=>document.removeEventListener(e,u,r)},[e,r])}function _(e,t,r){let o=g(t);m.useEffect(()=>{function u(a){o.current(a)}return window.addEventListener(e,u,r),()=>window.removeEventListener(e,u,r)},[e,r])}function B(e,t,r=!0){let o=m.useRef(!1);m.useEffect(()=>{requestAnimationFrame(()=>{o.current=r})},[r]);function u(n,c){if(!o.current||n.defaultPrevented)return;let l=c(n);if(l===null||!l.getRootNode().contains(l)||!l.isConnected)return;let v=function s(i){return typeof i=="function"?s(i()):Array.isArray(i)||i instanceof Set?i:[i]}(e);for(let s of v){if(s===null)continue;let i=s instanceof HTMLElement?s:s.current;if(i!=null&&i.contains(l)||n.composed&&n.composedPath().includes(i))return}return!D(l,N.Loose)&&l.tabIndex!==-1&&n.preventDefault(),t(n,l)}let a=m.useRef(null);E("pointerdown",n=>{var c,l;o.current&&(a.current=((l=(c=n.composedPath)==null?void 0:c.call(n))==null?void 0:l[0])||n.target)},!0),E("mousedown",n=>{var c,l;o.current&&(a.current=((l=(c=n.composedPath)==null?void 0:c.call(n))==null?void 0:l[0])||n.target)},!0),E("click",n=>{a.current&&(u(n,()=>a.current),a.current=null)},!0),E("touchend",n=>u(n,()=>n.target instanceof HTMLElement?n.target:null),!0),_("blur",n=>u(n,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function z(e){let t=e.parentElement,r=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(r=t),t=t.parentElement;let o=(t==null?void 0:t.getAttribute("disabled"))==="";return o&&k(r)?!1:o}function k(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let $="div";var K=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(K||{});function C(e,t){let{features:r=1,...o}=e,u={ref:t,"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return y({ourProps:u,theirProps:o,slot:{},defaultTag:$,name:"Hidden"})}let J=x(C);var G=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(G||{});export{X as I,P as M,I as N,q as O,N as T,D as a,U as b,J as c,S as e,T as f,B as h,G as o,K as p,z as r,_ as s,j as y};
