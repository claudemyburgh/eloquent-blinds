import{r as u,f as c,i as K,a as k,j as je}from"./app-d6834cdf.js";import{o as w,D,y as L,e as me,u as N,p as We,X as P,f as ge,g as ve,l as X,a as Ye,S as se,C as _e,d as _,$ as J}from"./tw-merge-a3538b4c.js";import{O as U,M,c as ce,p as de,y as x,N as Ve,I as R,H as Ue,o as qe,r as Xe}from"./keyboard-f904375b.js";import{n as he,b as ze,s as V,c as Ge,E as we,a as Je,p as Qe,P as ee,d as te}from"./use-root-containers-e123f2ea.js";function re(e,t){let n=u.useRef([]),r=w(e);u.useEffect(()=>{let o=[...n.current];for(let[a,l]of t.entries())if(n.current[a]!==l){let i=r(t,o);return n.current=t,i}},[r,...t])}function Ze(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Ke(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function ye(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let et="div";var Ee=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ee||{});function tt(e,t){let n=u.useRef(null),r=L(n,t),{initialFocus:o,containers:a,features:l=30,...i}=e;me()||(l=1);let s=he(n);ot({ownerDocument:s},!!(l&16));let d=at({ownerDocument:s,container:n,initialFocus:o},!!(l&2));lt({ownerDocument:s,container:n,containers:a,previousActiveElement:d},!!(l&8));let m=ze(),F=w(f=>{let y=n.current;y&&(b=>b())(()=>{N(m.current,{[V.Forwards]:()=>{U(y,M.First,{skipElements:[f.relatedTarget]})},[V.Backwards]:()=>{U(y,M.Last,{skipElements:[f.relatedTarget]})}})})}),T=We(),g=u.useRef(!1),z={ref:r,onKeyDown(f){f.key=="Tab"&&(g.current=!0,T.requestAnimationFrame(()=>{g.current=!1}))},onBlur(f){let y=ye(a);n.current instanceof HTMLElement&&y.add(n.current);let b=f.relatedTarget;b instanceof HTMLElement&&b.dataset.headlessuiFocusGuard!=="true"&&(be(y,b)||(g.current?U(n.current,N(m.current,{[V.Forwards]:()=>M.Next,[V.Backwards]:()=>M.Previous})|M.WrapAround,{relativeTo:f.target}):f.target instanceof HTMLElement&&x(f.target)))}};return c.createElement(c.Fragment,null,!!(l&4)&&c.createElement(ce,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:F,features:de.Focusable}),P({ourProps:z,theirProps:i,defaultTag:et,name:"FocusTrap"}),!!(l&4)&&c.createElement(ce,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:F,features:de.Focusable}))}let nt=D(tt),O=Object.assign(nt,{features:Ee}),$=[];Ke(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&$[0]!==t.target&&($.unshift(t.target),$=$.filter(n=>n!=null&&n.isConnected),$.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function rt(e=!0){let t=u.useRef($.slice());return re(([n],[r])=>{r===!0&&n===!1&&ve(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=$.slice())},[e,$,t]),w(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function ot({ownerDocument:e},t){let n=rt(t);re(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&x(n())},[t]),Ge(()=>{t&&x(n())})}function at({ownerDocument:e,container:t,initialFocus:n},r){let o=u.useRef(null),a=ge();return re(()=>{if(!r)return;let l=t.current;l&&ve(()=>{if(!a.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){o.current=i;return}}else if(l.contains(i)){o.current=i;return}n!=null&&n.current?x(n.current):U(l,M.First)===Ve.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=e==null?void 0:e.activeElement})},[r]),o}function lt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let a=ge();we(e==null?void 0:e.defaultView,"focus",l=>{if(!o||!a.current)return;let i=ye(n);t.current instanceof HTMLElement&&i.add(t.current);let s=r.current;if(!s)return;let d=l.target;d&&d instanceof HTMLElement?be(i,d)?(r.current=d,x(d)):(l.preventDefault(),l.stopPropagation(),x(s)):x(r.current)},!0)}function be(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let $e=u.createContext(null);function Te(){let e=u.useContext($e);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Te),t}return e}function it(){let[e,t]=u.useState([]);return[e.length>0?e.join(" "):void 0,u.useMemo(()=>function(n){let r=w(a=>(t(l=>[...l,a]),()=>t(l=>{let i=l.slice(),s=i.indexOf(a);return s!==-1&&i.splice(s,1),i}))),o=u.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return c.createElement($e.Provider,{value:o},n.children)},[t])]}let ut="p";function st(e,t){let n=R(),{id:r=`headlessui-description-${n}`,...o}=e,a=Te(),l=L(t);X(()=>a.register(r),[r,a.register]);let i={ref:l,...a.props,id:r};return P({ourProps:i,theirProps:o,slot:a.slot||{},defaultTag:ut,name:a.name||"Description"})}let ct=D(st),dt=Object.assign(ct,{}),oe=u.createContext(()=>{});oe.displayName="StackContext";var ne=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ne||{});function ft(){return u.useContext(oe)}function pt({children:e,onUpdate:t,type:n,element:r,enabled:o}){let a=ft(),l=w((...i)=>{t==null||t(...i),a(...i)});return X(()=>{let i=o===void 0||o===!0;return i&&l(0,n,r),()=>{i&&l(1,n,r)}},[l,n,r,o]),c.createElement(oe.Provider,{value:l},e)}function mt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const gt=typeof Object.is=="function"?Object.is:mt,{useState:vt,useEffect:ht,useLayoutEffect:wt,useDebugValue:yt}=K;function Et(e,t,n){const r=t(),[{inst:o},a]=vt({inst:{value:r,getSnapshot:t}});return wt(()=>{o.value=r,o.getSnapshot=t,Q(o)&&a({inst:o})},[e,r,t]),ht(()=>(Q(o)&&a({inst:o}),e(()=>{Q(o)&&a({inst:o})})),[e]),yt(r),r}function Q(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!gt(n,r)}catch{return!0}}function bt(e,t,n){return t()}const $t=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Tt=!$t,St=Tt?bt:Et,xt="useSyncExternalStore"in K?(e=>e.useSyncExternalStore)(K):St;function Dt(e){return xt(e.subscribe,e.getSnapshot,e.getSnapshot)}function Lt(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...a){let l=t[o].call(n,...a);l&&(n=l,r.forEach(i=>i()))}}}function Pt(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,o=r.clientWidth-r.offsetWidth,a=e-o;n.style(r,"paddingRight",`${a}px`)}}}function Ct(){if(!Ze())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function o(l){return r.containers.flatMap(i=>i()).some(i=>i.contains(l))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let a=null;n.addEventListener(t,"click",l=>{if(l.target instanceof HTMLElement)try{let i=l.target.closest("a");if(!i)return;let{hash:s}=new URL(i.href),d=t.querySelector(s);d&&!o(d)&&(a=d)}catch{}},!0),n.addEventListener(t,"touchmove",l=>{l.target instanceof HTMLElement&&!o(l.target)&&l.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),a&&a.isConnected&&(a.scrollIntoView({block:"nearest"}),a=null)})}}}function kt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Mt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let S=Lt(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:Ye(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Mt(n)},o=[Ct(),Pt(),kt()];o.forEach(({before:a})=>a==null?void 0:a(r)),o.forEach(({after:a})=>a==null?void 0:a(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});S.subscribe(()=>{let e=S.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&S.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&S.dispatch("TEARDOWN",n)}});function Rt(e,t,n){let r=Dt(S),o=e?r.get(e):void 0,a=o?o.count>0:!1;return X(()=>{if(!(!e||!t))return S.dispatch("PUSH",e,n),()=>S.dispatch("POP",e,n)},[t,e]),a}let Z=new Map,A=new Map;function fe(e,t=!0){X(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function o(){var l;if(!r)return;let i=(l=A.get(r))!=null?l:1;if(i===1?A.delete(r):A.set(r,i-1),i!==1)return;let s=Z.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,Z.delete(r))}let a=(n=A.get(r))!=null?n:0;return A.set(r,a+1),a!==0||(Z.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),o},[e,t])}var Ft=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ft||{}),Ot=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Ot||{});let At={[0](e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},q=u.createContext(null);q.displayName="DialogContext";function I(e){let t=u.useContext(q);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,I),n}return t}function Nt(e,t,n=()=>[document.body]){Rt(e,t,r=>{var o;return{containers:[...(o=r.containers)!=null?o:[],n]}})}function It(e,t){return N(t.type,At,e,t)}let Bt="div",Ht=se.RenderStrategy|se.Static;function jt(e,t){var n;let r=R(),{id:o=`headlessui-dialog-${r}`,open:a,onClose:l,initialFocus:i,__demoMode:s=!1,...d}=e,[m,F]=u.useState(0),T=_e();a===void 0&&T!==null&&(a=(T&_.Open)===_.Open);let g=u.useRef(null),z=L(g,t),f=he(g),y=e.hasOwnProperty("open")||T!==null,b=e.hasOwnProperty("onClose");if(!y&&!b)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!y)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!b)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof a!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${a}`);if(typeof l!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l}`);let v=a?0:1,[B,Se]=u.useReducer(It,{titleId:null,descriptionId:null,panelRef:u.createRef()}),C=w(()=>l(!1)),ae=w(p=>Se({type:0,id:p})),H=me()?s?!1:v===0:!1,j=m>1,le=u.useContext(q)!==null,[xe,De]=Je(),{resolveContainers:G,mainTreeNodeRef:W,MainTreeNode:Le}=Qe({portals:xe,defaultContainers:[(n=B.panelRef.current)!=null?n:g.current]}),Pe=j?"parent":"leaf",ie=T!==null?(T&_.Closing)===_.Closing:!1,Ce=(()=>le||ie?!1:H)(),ke=u.useCallback(()=>{var p,E;return(E=Array.from((p=f==null?void 0:f.querySelectorAll("body > *"))!=null?p:[]).find(h=>h.id==="headlessui-portal-root"?!1:h.contains(W.current)&&h instanceof HTMLElement))!=null?E:null},[W]);fe(ke,Ce);let Me=(()=>j?!0:H)(),Re=u.useCallback(()=>{var p,E;return(E=Array.from((p=f==null?void 0:f.querySelectorAll("[data-headlessui-portal]"))!=null?p:[]).find(h=>h.contains(W.current)&&h instanceof HTMLElement))!=null?E:null},[W]);fe(Re,Me);let Fe=(()=>!(!H||j))();Ue(G,C,Fe);let Oe=(()=>!(j||v!==0))();we(f==null?void 0:f.defaultView,"keydown",p=>{Oe&&(p.defaultPrevented||p.key===qe.Escape&&(p.preventDefault(),p.stopPropagation(),C()))});let Ae=(()=>!(ie||v!==0||le))();Nt(f,Ae,G),u.useEffect(()=>{if(v!==0||!g.current)return;let p=new ResizeObserver(E=>{for(let h of E){let Y=h.target.getBoundingClientRect();Y.x===0&&Y.y===0&&Y.width===0&&Y.height===0&&C()}});return p.observe(g.current),()=>p.disconnect()},[v,g,C]);let[Ne,Ie]=it(),Be=u.useMemo(()=>[{dialogState:v,close:C,setTitleId:ae},B],[v,B,C,ae]),ue=u.useMemo(()=>({open:v===0}),[v]),He={ref:z,id:o,role:"dialog","aria-modal":v===0?!0:void 0,"aria-labelledby":B.titleId,"aria-describedby":Ne};return c.createElement(pt,{type:"Dialog",enabled:v===0,element:g,onUpdate:w((p,E)=>{E==="Dialog"&&N(p,{[ne.Add]:()=>F(h=>h+1),[ne.Remove]:()=>F(h=>h-1)})})},c.createElement(ee,{force:!0},c.createElement(te,null,c.createElement(q.Provider,{value:Be},c.createElement(te.Group,{target:g},c.createElement(ee,{force:!1},c.createElement(Ie,{slot:ue,name:"Dialog.Description"},c.createElement(O,{initialFocus:i,containers:G,features:H?N(Pe,{parent:O.features.RestoreFocus,leaf:O.features.All&~O.features.FocusLock}):O.features.None},c.createElement(De,null,P({ourProps:He,theirProps:d,slot:ue,defaultTag:Bt,features:Ht,visible:v===0,name:"Dialog"}))))))))),c.createElement(Le,null))}let Wt="div";function Yt(e,t){let n=R(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:a,close:l}]=I("Dialog.Overlay"),i=L(t),s=w(m=>{if(m.target===m.currentTarget){if(Xe(m.currentTarget))return m.preventDefault();m.preventDefault(),m.stopPropagation(),l()}}),d=u.useMemo(()=>({open:a===0}),[a]);return P({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:s},theirProps:o,slot:d,defaultTag:Wt,name:"Dialog.Overlay"})}let _t="div";function Vt(e,t){let n=R(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:a},l]=I("Dialog.Backdrop"),i=L(t);u.useEffect(()=>{if(l.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[l.panelRef]);let s=u.useMemo(()=>({open:a===0}),[a]);return c.createElement(ee,{force:!0},c.createElement(te,null,P({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:o,slot:s,defaultTag:_t,name:"Dialog.Backdrop"})))}let Ut="div";function qt(e,t){let n=R(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:a},l]=I("Dialog.Panel"),i=L(t,l.panelRef),s=u.useMemo(()=>({open:a===0}),[a]),d=w(m=>{m.stopPropagation()});return P({ourProps:{ref:i,id:r,onClick:d},theirProps:o,slot:s,defaultTag:Ut,name:"Dialog.Panel"})}let Xt="h2";function zt(e,t){let n=R(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:a,setTitleId:l}]=I("Dialog.Title"),i=L(t);u.useEffect(()=>(l(r),()=>l(null)),[r,l]);let s=u.useMemo(()=>({open:a===0}),[a]);return P({ourProps:{ref:i,id:r},theirProps:o,slot:s,defaultTag:Xt,name:"Dialog.Title"})}let Gt=D(jt),Jt=D(Vt),Qt=D(qt),Zt=D(Yt),Kt=D(zt),pe=Object.assign(Gt,{Backdrop:Jt,Panel:Qt,Overlay:Zt,Title:Kt,Description:dt});function on({type:e="button",className:t="",disabled:n,children:r,...o}){return k("button",{...o,type:e,className:`inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function an({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:o=()=>{}}){const a=()=>{r&&o()},l={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return k(J,{show:t,as:u.Fragment,leave:"duration-200",children:je(pe,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:a,children:[k(J.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:k("div",{className:"absolute inset-0 bg-gray-500/75 dark:bg-gray-900/75"})}),k(J.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:k(pe.Panel,{className:`mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${l}`,children:e})})]})})}export{an as M,on as S};
