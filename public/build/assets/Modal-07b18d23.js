import{e as u,R as f,g as qe,m as ee,b as k,f as Ge}from"./index.esm-7a096b41.js";import{o as g,s as Xe,f as ie,D as b,y as $,g as ue,u as H,p as ze,X as T,h as ye,T as Je,i as we,l as R,a as Ee,S as ge,C as Ke,d as q,j as K}from"./Dropdown-4011b9d6.js";import{e as Qe,s as Ze,O as G,M,c as te,p as ne,y as L,N as et,I as F,h as tt,o as nt,r as rt}from"./keyboard-653d5b71.js";function se(e,t){let n=u.useRef([]),r=g(e);u.useEffect(()=>{let l=[...n.current];for(let[o,a]of t.entries())if(n.current[o]!==a){let i=r(t,l);return n.current=t,i}},[r,...t])}function ot(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function I(...e){return u.useMemo(()=>Qe(...e),[...e])}var B=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(B||{});function at(){let e=u.useRef(0);return Ze("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function be(e,t,n,r){let l=Xe(n);u.useEffect(()=>{e=e??window;function o(a){l.current(a)}return e.addEventListener(t,o,r),()=>e.removeEventListener(t,o,r)},[e,t,r])}function lt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function $e(e){let t=g(e),n=u.useRef(!1);u.useEffect(()=>(n.current=!1,()=>{n.current=!0,ie(()=>{n.current&&t()})}),[t])}function Te(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let it="div";var Se=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Se||{});function ut(e,t){let n=u.useRef(null),r=$(n,t),{initialFocus:l,containers:o,features:a=30,...i}=e;ue()||(a=1);let s=I(n);dt({ownerDocument:s},!!(a&16));let c=ft({ownerDocument:s,container:n,initialFocus:l},!!(a&2));pt({ownerDocument:s,container:n,containers:o,previousActiveElement:c},!!(a&8));let d=at(),O=g(p=>{let w=n.current;w&&(S=>S())(()=>{H(d.current,{[B.Forwards]:()=>{G(w,M.First,{skipElements:[p.relatedTarget]})},[B.Backwards]:()=>{G(w,M.Last,{skipElements:[p.relatedTarget]})}})})}),x=ze(),v=u.useRef(!1),z={ref:r,onKeyDown(p){p.key=="Tab"&&(v.current=!0,x.requestAnimationFrame(()=>{v.current=!1}))},onBlur(p){let w=Te(o);n.current instanceof HTMLElement&&w.add(n.current);let S=p.relatedTarget;S instanceof HTMLElement&&S.dataset.headlessuiFocusGuard!=="true"&&(Ce(w,S)||(v.current?G(n.current,H(d.current,{[B.Forwards]:()=>M.Next,[B.Backwards]:()=>M.Previous})|M.WrapAround,{relativeTo:p.target}):p.target instanceof HTMLElement&&L(p.target)))}};return f.createElement(f.Fragment,null,!!(a&4)&&f.createElement(te,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:O,features:ne.Focusable}),T({ourProps:z,theirProps:i,defaultTag:it,name:"FocusTrap"}),!!(a&4)&&f.createElement(te,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:O,features:ne.Focusable}))}let st=b(ut),A=Object.assign(st,{features:Se}),C=[];lt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&C[0]!==t.target&&(C.unshift(t.target),C=C.filter(n=>n!=null&&n.isConnected),C.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function ct(e=!0){let t=u.useRef(C.slice());return se(([n],[r])=>{r===!0&&n===!1&&ie(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=C.slice())},[e,C,t]),g(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function dt({ownerDocument:e},t){let n=ct(t);se(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&L(n())},[t]),$e(()=>{t&&L(n())})}function ft({ownerDocument:e,container:t,initialFocus:n},r){let l=u.useRef(null),o=ye();return se(()=>{if(!r)return;let a=t.current;a&&ie(()=>{if(!o.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){l.current=i;return}}else if(a.contains(i)){l.current=i;return}n!=null&&n.current?L(n.current):G(a,M.First)===et.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.current=e==null?void 0:e.activeElement})},[r]),l}function pt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},l){let o=ye();be(e==null?void 0:e.defaultView,"focus",a=>{if(!l||!o.current)return;let i=Te(n);t.current instanceof HTMLElement&&i.add(t.current);let s=r.current;if(!s)return;let c=a.target;c&&c instanceof HTMLElement?Ce(i,c)?(r.current=c,L(c)):(a.preventDefault(),a.stopPropagation(),L(s)):L(r.current)},!0)}function Ce(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let xe=u.createContext(!1);function mt(){return u.useContext(xe)}function re(e){return f.createElement(xe.Provider,{value:e.force},e.children)}function gt(e){let t=mt(),n=u.useContext(Pe),r=I(e),[l,o]=u.useState(()=>{if(!t&&n!==null||we.isServer)return null;let a=r==null?void 0:r.getElementById("headlessui-portal-root");if(a)return a;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return u.useEffect(()=>{l!==null&&(r!=null&&r.body.contains(l)||r==null||r.body.appendChild(l))},[l,r]),u.useEffect(()=>{t||n!==null&&o(n.current)},[n,o,t]),l}let vt=u.Fragment;function ht(e,t){let n=e,r=u.useRef(null),l=$(Je(d=>{r.current=d}),t),o=I(r),a=gt(r),[i]=u.useState(()=>{var d;return we.isServer?null:(d=o==null?void 0:o.createElement("div"))!=null?d:null}),s=u.useContext(oe),c=ue();return R(()=>{!a||!i||a.contains(i)||(i.setAttribute("data-headlessui-portal",""),a.appendChild(i))},[a,i]),R(()=>{if(i&&s)return s.register(i)},[s,i]),$e(()=>{var d;!a||!i||(i instanceof Node&&a.contains(i)&&a.removeChild(i),a.childNodes.length<=0&&((d=a.parentElement)==null||d.removeChild(a)))}),c?!a||!i?null:qe.createPortal(T({ourProps:{ref:l},theirProps:n,defaultTag:vt,name:"Portal"}),i):null}let yt=u.Fragment,Pe=u.createContext(null);function wt(e,t){let{target:n,...r}=e,l={ref:$(t)};return f.createElement(Pe.Provider,{value:n},T({ourProps:l,theirProps:r,defaultTag:yt,name:"Popover.Group"}))}let oe=u.createContext(null);function Et(){let e=u.useContext(oe),t=u.useRef([]),n=g(o=>(t.current.push(o),e&&e.register(o),()=>r(o))),r=g(o=>{let a=t.current.indexOf(o);a!==-1&&t.current.splice(a,1),e&&e.unregister(o)}),l=u.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,u.useMemo(()=>function({children:o}){return f.createElement(oe.Provider,{value:l},o)},[l])]}let bt=b(ht),$t=b(wt),ae=Object.assign(bt,{Group:$t}),Le=u.createContext(null);function De(){let e=u.useContext(Le);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,De),t}return e}function Tt(){let[e,t]=u.useState([]);return[e.length>0?e.join(" "):void 0,u.useMemo(()=>function(n){let r=g(o=>(t(a=>[...a,o]),()=>t(a=>{let i=a.slice(),s=i.indexOf(o);return s!==-1&&i.splice(s,1),i}))),l=u.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return f.createElement(Le.Provider,{value:l},n.children)},[t])]}let St="p";function Ct(e,t){let n=F(),{id:r=`headlessui-description-${n}`,...l}=e,o=De(),a=$(t);R(()=>o.register(r),[r,o.register]);let i={ref:a,...o.props,id:r};return T({ourProps:i,theirProps:l,slot:o.slot||{},defaultTag:St,name:o.name||"Description"})}let xt=b(Ct),Pt=Object.assign(xt,{}),ce=u.createContext(()=>{});ce.displayName="StackContext";var le=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(le||{});function Lt(){return u.useContext(ce)}function Dt({children:e,onUpdate:t,type:n,element:r,enabled:l}){let o=Lt(),a=g((...i)=>{t==null||t(...i),o(...i)});return R(()=>{let i=l===void 0||l===!0;return i&&a(0,n,r),()=>{i&&a(1,n,r)}},[a,n,r,l]),f.createElement(ce.Provider,{value:a},e)}function kt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Mt=typeof Object.is=="function"?Object.is:kt,{useState:Rt,useEffect:Ft,useLayoutEffect:Ot,useDebugValue:At}=ee;function Nt(e,t,n){const r=t(),[{inst:l},o]=Rt({inst:{value:r,getSnapshot:t}});return Ot(()=>{l.value=r,l.getSnapshot=t,Q(l)&&o({inst:l})},[e,r,t]),Ft(()=>(Q(l)&&o({inst:l}),e(()=>{Q(l)&&o({inst:l})})),[e]),At(r),r}function Q(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Mt(n,r)}catch{return!0}}function Bt(e,t,n){return t()}const Ht=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",It=!Ht,jt=It?Bt:Nt,Wt="useSyncExternalStore"in ee?(e=>e.useSyncExternalStore)(ee):jt;function Yt(e){return Wt(e.subscribe,e.getSnapshot,e.getSnapshot)}function _t(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(l){return r.add(l),()=>r.delete(l)},dispatch(l,...o){let a=t[l].call(n,...o);a&&(n=a,r.forEach(i=>i()))}}}function Ut(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,l=r.clientWidth-r.offsetWidth,o=e-l;n.style(r,"paddingRight",`${o}px`)}}}function Vt(){if(!ot())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function l(o){return r.containers.flatMap(a=>a()).some(a=>a.contains(o))}n.microTask(()=>{if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let a=Ee();a.style(t.documentElement,"scroll-behavior","auto"),n.add(()=>n.microTask(()=>a.dispose()))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let o=null;n.addEventListener(t,"click",a=>{if(a.target instanceof HTMLElement)try{let i=a.target.closest("a");if(!i)return;let{hash:s}=new URL(i.href),c=t.querySelector(s);c&&!l(c)&&(o=c)}catch{}},!0),n.addEventListener(t,"touchmove",a=>{a.target instanceof HTMLElement&&!l(a.target)&&a.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})})}}}function qt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Gt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let P=_t(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:Ee(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Gt(n)},l=[Vt(),Ut(),qt()];l.forEach(({before:o})=>o==null?void 0:o(r)),l.forEach(({after:o})=>o==null?void 0:o(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});P.subscribe(()=>{let e=P.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",l=n.count!==0;(l&&!r||!l&&r)&&P.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&P.dispatch("TEARDOWN",n)}});function Xt(e,t,n){let r=Yt(P),l=e?r.get(e):void 0,o=l?l.count>0:!1;return R(()=>{if(!(!e||!t))return P.dispatch("PUSH",e,n),()=>P.dispatch("POP",e,n)},[t,e]),o}let Z=new Map,N=new Map;function ve(e,t=!0){R(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function l(){var a;if(!r)return;let i=(a=N.get(r))!=null?a:1;if(i===1?N.delete(r):N.set(r,i-1),i!==1)return;let s=Z.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,Z.delete(r))}let o=(n=N.get(r))!=null?n:0;return N.set(r,o+1),o!==0||(Z.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),l},[e,t])}function zt({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let l=u.useRef((r=n==null?void 0:n.current)!=null?r:null),o=I(l),a=g(()=>{var i;let s=[];for(let c of e)c!==null&&(c instanceof HTMLElement?s.push(c):"current"in c&&c.current instanceof HTMLElement&&s.push(c.current));if(t!=null&&t.current)for(let c of t.current)s.push(c);for(let c of(i=o==null?void 0:o.querySelectorAll("html > *, body > *"))!=null?i:[])c!==document.body&&c!==document.head&&c instanceof HTMLElement&&c.id!=="headlessui-portal-root"&&(c.contains(l.current)||s.some(d=>c.contains(d))||s.push(c));return s});return{resolveContainers:a,contains:g(i=>a().some(s=>s.contains(i))),mainTreeNodeRef:l,MainTreeNode:u.useMemo(()=>function(){return n!=null?null:f.createElement(te,{features:ne.Hidden,ref:l})},[l,n])}}var Jt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Jt||{}),Kt=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Kt||{});let Qt={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},X=u.createContext(null);X.displayName="DialogContext";function j(e){let t=u.useContext(X);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,j),n}return t}function Zt(e,t,n=()=>[document.body]){Xt(e,t,r=>{var l;return{containers:[...(l=r.containers)!=null?l:[],n]}})}function en(e,t){return H(t.type,Qt,e,t)}let tn="div",nn=ge.RenderStrategy|ge.Static;function rn(e,t){var n;let r=F(),{id:l=`headlessui-dialog-${r}`,open:o,onClose:a,initialFocus:i,__demoMode:s=!1,...c}=e,[d,O]=u.useState(0),x=Ke();o===void 0&&x!==null&&(o=(x&q.Open)===q.Open);let v=u.useRef(null),z=$(v,t),p=I(v),w=e.hasOwnProperty("open")||x!==null,S=e.hasOwnProperty("onClose");if(!w&&!S)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!w)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!S)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof o!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if(typeof a!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let h=o?0:1,[W,ke]=u.useReducer(en,{titleId:null,descriptionId:null,panelRef:u.createRef()}),D=g(()=>a(!1)),de=g(m=>ke({type:0,id:m})),Y=ue()?s?!1:h===0:!1,_=d>1,fe=u.useContext(X)!==null,[Me,Re]=Et(),{resolveContainers:J,mainTreeNodeRef:U,MainTreeNode:Fe}=zt({portals:Me,defaultContainers:[(n=W.panelRef.current)!=null?n:v.current]}),Oe=_?"parent":"leaf",pe=x!==null?(x&q.Closing)===q.Closing:!1,Ae=(()=>fe||pe?!1:Y)(),Ne=u.useCallback(()=>{var m,E;return(E=Array.from((m=p==null?void 0:p.querySelectorAll("body > *"))!=null?m:[]).find(y=>y.id==="headlessui-portal-root"?!1:y.contains(U.current)&&y instanceof HTMLElement))!=null?E:null},[U]);ve(Ne,Ae);let Be=(()=>_?!0:Y)(),He=u.useCallback(()=>{var m,E;return(E=Array.from((m=p==null?void 0:p.querySelectorAll("[data-headlessui-portal]"))!=null?m:[]).find(y=>y.contains(U.current)&&y instanceof HTMLElement))!=null?E:null},[U]);ve(He,Be);let Ie=(()=>!(!Y||_))();tt(J,D,Ie);let je=(()=>!(_||h!==0))();be(p==null?void 0:p.defaultView,"keydown",m=>{je&&(m.defaultPrevented||m.key===nt.Escape&&(m.preventDefault(),m.stopPropagation(),D()))});let We=(()=>!(pe||h!==0||fe))();Zt(p,We,J),u.useEffect(()=>{if(h!==0||!v.current)return;let m=new ResizeObserver(E=>{for(let y of E){let V=y.target.getBoundingClientRect();V.x===0&&V.y===0&&V.width===0&&V.height===0&&D()}});return m.observe(v.current),()=>m.disconnect()},[h,v,D]);let[Ye,_e]=Tt(),Ue=u.useMemo(()=>[{dialogState:h,close:D,setTitleId:de},W],[h,W,D,de]),me=u.useMemo(()=>({open:h===0}),[h]),Ve={ref:z,id:l,role:"dialog","aria-modal":h===0?!0:void 0,"aria-labelledby":W.titleId,"aria-describedby":Ye};return f.createElement(Dt,{type:"Dialog",enabled:h===0,element:v,onUpdate:g((m,E)=>{E==="Dialog"&&H(m,{[le.Add]:()=>O(y=>y+1),[le.Remove]:()=>O(y=>y-1)})})},f.createElement(re,{force:!0},f.createElement(ae,null,f.createElement(X.Provider,{value:Ue},f.createElement(ae.Group,{target:v},f.createElement(re,{force:!1},f.createElement(_e,{slot:me,name:"Dialog.Description"},f.createElement(A,{initialFocus:i,containers:J,features:Y?H(Oe,{parent:A.features.RestoreFocus,leaf:A.features.All&~A.features.FocusLock}):A.features.None},f.createElement(Re,null,T({ourProps:Ve,theirProps:c,slot:me,defaultTag:tn,features:nn,visible:h===0,name:"Dialog"}))))))))),f.createElement(Fe,null))}let on="div";function an(e,t){let n=F(),{id:r=`headlessui-dialog-overlay-${n}`,...l}=e,[{dialogState:o,close:a}]=j("Dialog.Overlay"),i=$(t),s=g(d=>{if(d.target===d.currentTarget){if(rt(d.currentTarget))return d.preventDefault();d.preventDefault(),d.stopPropagation(),a()}}),c=u.useMemo(()=>({open:o===0}),[o]);return T({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:s},theirProps:l,slot:c,defaultTag:on,name:"Dialog.Overlay"})}let ln="div";function un(e,t){let n=F(),{id:r=`headlessui-dialog-backdrop-${n}`,...l}=e,[{dialogState:o},a]=j("Dialog.Backdrop"),i=$(t);u.useEffect(()=>{if(a.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[a.panelRef]);let s=u.useMemo(()=>({open:o===0}),[o]);return f.createElement(re,{force:!0},f.createElement(ae,null,T({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:l,slot:s,defaultTag:ln,name:"Dialog.Backdrop"})))}let sn="div";function cn(e,t){let n=F(),{id:r=`headlessui-dialog-panel-${n}`,...l}=e,[{dialogState:o},a]=j("Dialog.Panel"),i=$(t,a.panelRef),s=u.useMemo(()=>({open:o===0}),[o]),c=g(d=>{d.stopPropagation()});return T({ourProps:{ref:i,id:r,onClick:c},theirProps:l,slot:s,defaultTag:sn,name:"Dialog.Panel"})}let dn="h2";function fn(e,t){let n=F(),{id:r=`headlessui-dialog-title-${n}`,...l}=e,[{dialogState:o,setTitleId:a}]=j("Dialog.Title"),i=$(t);u.useEffect(()=>(a(r),()=>a(null)),[r,a]);let s=u.useMemo(()=>({open:o===0}),[o]);return T({ourProps:{ref:i,id:r},theirProps:l,slot:s,defaultTag:dn,name:"Dialog.Title"})}let pn=b(rn),mn=b(un),gn=b(cn),vn=b(an),hn=b(fn),he=Object.assign(pn,{Backdrop:mn,Panel:gn,Overlay:vn,Title:hn,Description:Pt});function bn({type:e="button",className:t="",disabled:n,children:r,...l}){return k("button",{...l,type:e,className:`inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function $n({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:l=()=>{}}){const o=()=>{r&&l()},a={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return k(K,{show:t,as:u.Fragment,leave:"duration-200",children:Ge(he,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:o,children:[k(K.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:k("div",{className:"absolute inset-0 bg-gray-500/75 dark:bg-gray-900/75"})}),k(K.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:k(he.Panel,{className:`mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${a}`,children:e})})]})})}export{$n as M,bn as S};