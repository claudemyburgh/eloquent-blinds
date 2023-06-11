import{m as p,r as a,i as H}from"./app-f24f09fd.js";import{a as S,e as E,l as w,u as O,s as y,D as x,X as N,o as h,t as R,y as A,T as k}from"./transition-6528a38e.js";var F;let de=(F=p.useId)!=null?F:function(){let e=S(),[t,n]=p.useState(e?()=>E.nextId():null);return w(()=>{t===null&&n(E.nextId())},[t]),t!=null?""+t:void 0};function $(e){return E.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let b=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var U=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(U||{}),_=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(_||{}),G=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(G||{});function K(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(b)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var T=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(T||{});function B(e,t=0){var n;return e===((n=$(e))==null?void 0:n.body)?!1:O(t,{[0](){return e.matches(b)},[1](){let u=e;for(;u!==null;){if(u.matches(b))return!0;u=u.parentElement}return!1}})}var j=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(j||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function fe(e){e==null||e.focus({preventScroll:!0})}let W=["textarea","input"].join(",");function q(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,W))!=null?n:!1}function V(e,t=n=>n){return e.slice().sort((n,u)=>{let i=t(n),l=t(u);if(i===null||l===null)return 0;let r=i.compareDocumentPosition(l);return r&Node.DOCUMENT_POSITION_FOLLOWING?-1:r&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function me(e,t,{sorted:n=!0,relativeTo:u=null,skipElements:i=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,r=Array.isArray(e)?n?V(e):e:K(e);i.length>0&&r.length>1&&(r=r.filter(f=>!i.includes(f))),u=u??l.activeElement;let o=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,r.indexOf(u))-1;if(t&4)return Math.max(0,r.indexOf(u))+1;if(t&8)return r.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),v=t&32?{preventScroll:!0}:{},s=0,d=r.length,m;do{if(s>=d||s+d<=0)return 0;let f=c+s;if(t&16)f=(f+d)%d;else{if(f<0)return 3;if(f>=d)return 1}m=r[f],m==null||m.focus(v),s+=o}while(m!==l.activeElement);return t&6&&q(m)&&m.select(),2}function L(e,t,n){let u=y(t);a.useEffect(()=>{function i(l){u.current(l)}return document.addEventListener(e,i,n),()=>document.removeEventListener(e,i,n)},[e,n])}function M(e,t,n){let u=y(t);a.useEffect(()=>{function i(l){u.current(l)}return window.addEventListener(e,i,n),()=>window.removeEventListener(e,i,n)},[e,n])}function pe(e,t,n=!0){let u=a.useRef(!1);a.useEffect(()=>{requestAnimationFrame(()=>{u.current=n})},[n]);function i(r,o){if(!u.current||r.defaultPrevented)return;let c=o(r);if(c===null||!c.getRootNode().contains(c))return;let v=function s(d){return typeof d=="function"?s(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let s of v){if(s===null)continue;let d=s instanceof HTMLElement?s:s.current;if(d!=null&&d.contains(c)||r.composed&&r.composedPath().includes(d))return}return!B(c,T.Loose)&&c.tabIndex!==-1&&r.preventDefault(),t(r,c)}let l=a.useRef(null);L("mousedown",r=>{var o,c;u.current&&(l.current=((c=(o=r.composedPath)==null?void 0:o.call(r))==null?void 0:c[0])||r.target)},!0),L("click",r=>{l.current&&(i(r,()=>l.current),l.current=null)},!0),M("blur",r=>i(r,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function ve(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let u=(t==null?void 0:t.getAttribute("disabled"))==="";return u&&X(n)?!1:u}function X(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let z="div";var I=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(I||{});function J(e,t){let{features:n=1,...u}=e,i={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return N({ourProps:i,theirProps:u,slot:{},defaultTag:z,name:"Hidden"})}let Q=x(J);var Y=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Y||{}),Z=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Z||{});function Ee(){let e=a.useRef(0);return M("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function P(...e){return a.useMemo(()=>$(...e),[...e])}function he(e,t,n,u){let i=y(n);a.useEffect(()=>{e=e??window;function l(r){i.current(r)}return e.addEventListener(t,l,u),()=>e.removeEventListener(t,l,u)},[e,t,u])}function ee(e){let t=h(e),n=a.useRef(!1);a.useEffect(()=>(n.current=!1,()=>{n.current=!0,R(()=>{n.current&&t()})}),[t])}let D=a.createContext(!1);function te(){return a.useContext(D)}function we(e){return p.createElement(D.Provider,{value:e.force},e.children)}function ne(e){let t=te(),n=a.useContext(C),u=P(e),[i,l]=a.useState(()=>{if(!t&&n!==null||E.isServer)return null;let r=u==null?void 0:u.getElementById("headlessui-portal-root");if(r)return r;if(u===null)return null;let o=u.createElement("div");return o.setAttribute("id","headlessui-portal-root"),u.body.appendChild(o)});return a.useEffect(()=>{i!==null&&(u!=null&&u.body.contains(i)||u==null||u.body.appendChild(i))},[i,u]),a.useEffect(()=>{t||n!==null&&l(n.current)},[n,l,t]),i}let re=a.Fragment;function ue(e,t){let n=e,u=a.useRef(null),i=A(k(s=>{u.current=s}),t),l=P(u),r=ne(u),[o]=a.useState(()=>{var s;return E.isServer?null:(s=l==null?void 0:l.createElement("div"))!=null?s:null}),c=a.useContext(g),v=S();return w(()=>{!r||!o||r.contains(o)||(o.setAttribute("data-headlessui-portal",""),r.appendChild(o))},[r,o]),w(()=>{if(o&&c)return c.register(o)},[c,o]),ee(()=>{var s;!r||!o||(o instanceof Node&&r.contains(o)&&r.removeChild(o),r.childNodes.length<=0&&((s=r.parentElement)==null||s.removeChild(r)))}),v?!r||!o?null:H.createPortal(N({ourProps:{ref:i},theirProps:n,defaultTag:re,name:"Portal"}),o):null}let oe=a.Fragment,C=a.createContext(null);function le(e,t){let{target:n,...u}=e,i={ref:A(t)};return p.createElement(C.Provider,{value:n},N({ourProps:i,theirProps:u,defaultTag:oe,name:"Popover.Group"}))}let g=a.createContext(null);function be(){let e=a.useContext(g),t=a.useRef([]),n=h(l=>(t.current.push(l),e&&e.register(l),()=>u(l))),u=h(l=>{let r=t.current.indexOf(l);r!==-1&&t.current.splice(r,1),e&&e.unregister(l)}),i=a.useMemo(()=>({register:n,unregister:u,portals:t}),[n,u,t]);return[t,a.useMemo(()=>function({children:l}){return p.createElement(g.Provider,{value:i},l)},[i])]}let ie=x(ue),ae=x(le),ge=Object.assign(ie,{Group:ae});function ye({defaultContainers:e=[],portals:t}={}){let n=a.useRef(null),u=P(n),i=h(()=>{var l;let r=[];for(let o of e)o!==null&&(o instanceof HTMLElement?r.push(o):"current"in o&&o.current instanceof HTMLElement&&r.push(o.current));if(t!=null&&t.current)for(let o of t.current)r.push(o);for(let o of(l=u==null?void 0:u.querySelectorAll("html > *, body > *"))!=null?l:[])o!==document.body&&o!==document.head&&o instanceof HTMLElement&&o.id!=="headlessui-portal-root"&&(o.contains(n.current)||r.some(c=>o.contains(c))||r.push(o));return r});return{resolveContainers:i,contains:h(l=>i().some(r=>r.contains(l))),mainTreeNodeRef:n,MainTreeNode:a.useMemo(()=>function(){return p.createElement(Q,{features:I.Hidden,ref:n})},[n])}}export{he as E,pe as H,de as I,U as M,_ as N,me as O,we as P,T,be as a,Ee as b,Q as c,I as d,$ as e,K as f,ee as g,B as h,ge as i,P as n,Y as o,ye as p,ve as r,Z as s,fe as y};
