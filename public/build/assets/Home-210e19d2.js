import{a as o,W as Q,j as p,r as d,q as Y,f as te,b as ae}from"./app-a81a65d6.js";import{P as H}from"./Panel-57b292f2.js";import{t as Z}from"./Dropdown-b7279464.js";import{T as I,a as re,b as se}from"./SaveSubmitButton-e665c512.js";import{I as k}from"./InputLabel-72222f3d.js";import{P as oe}from"./PrimaryButton-ca1cfc11.js";import{I as j}from"./InputError-24bf9b60.js";function ne({children:e}){return o("div",{className:"wrapper",children:o("div",{className:"w-full text-white",children:e})})}const ie=()=>{const{data:e,setData:t,errors:a,reset:s,clearErrors:n,post:r}=Q({email:""});function l(c){c.preventDefault(),n(),r(route("newsletter"),{onSuccess:()=>{s()}})}function i(c){c.preventDefault(),t({...e,[c.target.name]:c.target.value})}return o(H,{styles:"primary",children:o("div",{className:"py-12",children:p("div",{className:"lg:flex lg:items-center",children:[p("div",{className:"lg:w-0 lg:flex-1",children:[o("h2",{className:"text-3xl font-extrabold tracking-tight text-white",children:"Sign up for our newsletter"}),o("p",{className:"mt-4 max-w-3xl text-lg text-primary-100",children:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat."})]}),p("div",{className:"mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1",children:[o("pre",{children:JSON.stringify(a,null,2)}),p("form",{className:"sm:flex",onSubmit:l,children:[o(k,{htmlFor:"email",className:"sr-only",children:"Email address"}),o(I,{id:"email",name:"email",type:"email",autoComplete:"email",value:e.email,onChange:i,placeholder:"Enter your email",className:"mr-4 flex-1 dark:bg-white dark:text-black"}),o(oe,{type:"submit",children:"Subscribe"})]}),p("p",{className:"mt-3 text-sm text-primary-100",children:["We care about the protection of your data. Read our"," ",o("a",{href:"#",className:"text-white font-medium underline",children:"Privacy Policy."})]})]})]})})})};let le={data:""},ce=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||le,de=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,me=/\/\*[^]*?\*\/|  +/g,q=/\n+/g,x=(e,t)=>{let a="",s="",n="";for(let r in e){let l=e[r];r[0]=="@"?r[1]=="i"?a=r+" "+l+";":s+=r[1]=="f"?x(l,r):r+"{"+x(l,r[1]=="k"?"":t)+"}":typeof l=="object"?s+=x(l,t?t.replace(/([^,])+/g,i=>r.replace(/(^:.*)|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,i):i?i+" "+c:c)):r):l!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=x.p?x.p(r,l):r+":"+l+";")}return a+(t&&n?t+"{"+n+"}":n)+s},v={},G=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+G(e[a]);return t}return e},ue=(e,t,a,s,n)=>{let r=G(e),l=v[r]||(v[r]=(c=>{let m=0,u=11;for(;m<c.length;)u=101*u+c.charCodeAt(m++)>>>0;return"go"+u})(r));if(!v[l]){let c=r!==e?e:(m=>{let u,f,h=[{}];for(;u=de.exec(m.replace(me,""));)u[4]?h.shift():u[3]?(f=u[3].replace(q," ").trim(),h.unshift(h[0][f]=h[0][f]||{})):h[0][u[1]]=u[2].replace(q," ").trim();return h[0]})(e);v[l]=x(n?{["@keyframes "+l]:c}:c,a?"":"."+l)}let i=a&&v.g?v.g:null;return a&&(v.g=v[l]),((c,m,u,f)=>{f?m.data=m.data.replace(f,c):m.data.indexOf(c)===-1&&(m.data=u?c+m.data:m.data+c)})(v[l],t,s,i),l},pe=(e,t,a)=>e.reduce((s,n,r)=>{let l=t[r];if(l&&l.call){let i=l(a),c=i&&i.props&&i.props.className||/^go/.test(i)&&i;l=c?"."+c:i&&typeof i=="object"?i.props?"":x(i,""):i===!1?"":i}return s+n+(l??"")},"");function P(e){let t=this||{},a=e.call?e(t.p):e;return ue(a.unshift?a.raw?pe(a,[].slice.call(arguments,1),t.p):a.reduce((s,n)=>Object.assign(s,n&&n.call?n(t.p):n),{}):a,ce(t.target),t.g,t.o,t.k)}let K,_,U;P.bind({g:1});let b=P.bind({k:1});function fe(e,t,a,s){x.p=t,K=e,_=a,U=s}function w(e,t){let a=this||{};return function(){let s=arguments;function n(r,l){let i=Object.assign({},r),c=i.className||n.className;a.p=Object.assign({theme:_&&_()},i),a.o=/ *go\d+/.test(c),i.className=P.apply(a,s)+(c?" "+c:""),t&&(i.ref=l);let m=e;return e[0]&&(m=i.as||e,delete i.as),U&&m[0]&&U(i),K(m,i)}return t?t(n):n}}var he=e=>typeof e=="function",D=(e,t)=>he(e)?e(t):e,ge=(()=>{let e=0;return()=>(++e).toString()})(),ee=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ye=20,F=new Map,ve=1e3,V=e=>{if(F.has(e))return;let t=setTimeout(()=>{F.delete(e),E({type:4,toastId:e})},ve);F.set(e,t)},be=e=>{let t=F.get(e);t&&clearTimeout(t)},W=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,ye)};case 1:return t.toast.id&&be(t.toast.id),{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:a}=t;return e.toasts.find(r=>r.id===a.id)?W(e,{type:1,toast:a}):W(e,{type:0,toast:a});case 3:let{toastId:s}=t;return s?V(s):e.toasts.forEach(r=>{V(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===s||s===void 0?{...r,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+n}))}}},M=[],O={toasts:[],pausedAt:void 0},E=e=>{O=W(O,e),M.forEach(t=>{t(O)})},xe={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},we=(e={})=>{let[t,a]=d.useState(O);d.useEffect(()=>(M.push(a),()=>{let n=M.indexOf(a);n>-1&&M.splice(n,1)}),[t]);let s=t.toasts.map(n=>{var r,l;return{...e,...e[n.type],...n,duration:n.duration||((r=e[n.type])==null?void 0:r.duration)||(e==null?void 0:e.duration)||xe[n.type],style:{...e.style,...(l=e[n.type])==null?void 0:l.style,...n.style}}});return{...t,toasts:s}},Ne=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(a==null?void 0:a.id)||ge()}),S=e=>(t,a)=>{let s=Ne(t,e,a);return E({type:2,toast:s}),s.id},g=(e,t)=>S("blank")(e,t);g.error=S("error");g.success=S("success");g.loading=S("loading");g.custom=S("custom");g.dismiss=e=>{E({type:3,toastId:e})};g.remove=e=>E({type:4,toastId:e});g.promise=(e,t,a)=>{let s=g.loading(t.loading,{...a,...a==null?void 0:a.loading});return e.then(n=>(g.success(D(t.success,n),{id:s,...a,...a==null?void 0:a.success}),n)).catch(n=>{g.error(D(t.error,n),{id:s,...a,...a==null?void 0:a.error})}),e};var Ee=(e,t)=>{E({type:1,toast:{id:e,height:t}})},ke=()=>{E({type:5,time:Date.now()})},Ce=e=>{let{toasts:t,pausedAt:a}=we(e);d.useEffect(()=>{if(a)return;let r=Date.now(),l=t.map(i=>{if(i.duration===1/0)return;let c=(i.duration||0)+i.pauseDuration-(r-i.createdAt);if(c<0){i.visible&&g.dismiss(i.id);return}return setTimeout(()=>g.dismiss(i.id),c)});return()=>{l.forEach(i=>i&&clearTimeout(i))}},[t,a]);let s=d.useCallback(()=>{a&&E({type:6,time:Date.now()})},[a]),n=d.useCallback((r,l)=>{let{reverseOrder:i=!1,gutter:c=8,defaultPosition:m}=l||{},u=t.filter(y=>(y.position||m)===(r.position||m)&&y.height),f=u.findIndex(y=>y.id===r.id),h=u.filter((y,C)=>C<f&&y.visible).length;return u.filter(y=>y.visible).slice(...i?[h+1]:[0,h]).reduce((y,C)=>y+(C.height||0)+c,0)},[t]);return{toasts:t,handlers:{updateHeight:Ee,startPause:ke,endPause:s,calculateOffset:n}}},je=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Ie=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Se=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,$e=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${je} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Ie} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Se} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Fe=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Me=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Fe} 1s linear infinite;
`,Oe=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Te=b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Le=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Oe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Te} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Ae=w("div")`
  position: absolute;
`,ze=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Re=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,De=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Re} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Pe=({toast:e})=>{let{icon:t,type:a,iconTheme:s}=e;return t!==void 0?typeof t=="string"?d.createElement(De,null,t):t:a==="blank"?null:d.createElement(ze,null,d.createElement(Me,{...s}),a!=="loading"&&d.createElement(Ae,null,a==="error"?d.createElement($e,{...s}):d.createElement(Le,{...s})))},Be=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,He=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,_e="0%{opacity:0;} 100%{opacity:1;}",Ue="0%{opacity:1;} 100%{opacity:0;}",We=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Xe=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,qe=(e,t)=>{let a=e.includes("top")?1:-1,[s,n]=ee()?[_e,Ue]:[Be(a),He(a)];return{animation:t?`${b(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ve=d.memo(({toast:e,position:t,style:a,children:s})=>{let n=e.height?qe(e.position||t||"top-center",e.visible):{opacity:0},r=d.createElement(Pe,{toast:e}),l=d.createElement(Xe,{...e.ariaProps},D(e.message,e));return d.createElement(We,{className:e.className,style:{...n,...a,...e.style}},typeof s=="function"?s({icon:r,message:l}):d.createElement(d.Fragment,null,r,l))});fe(d.createElement);var Je=({id:e,className:t,style:a,onHeightUpdate:s,children:n})=>{let r=d.useCallback(l=>{if(l){let i=()=>{let c=l.getBoundingClientRect().height;s(e,c)};i(),new MutationObserver(i).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return d.createElement("div",{ref:r,className:t,style:a},n)},Qe=(e,t)=>{let a=e.includes("top"),s=a?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:ee()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...s,...n}},Ye=P`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,$=16,Ze=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:s,children:n,containerStyle:r,containerClassName:l})=>{let{toasts:i,handlers:c}=Ce(a);return d.createElement("div",{style:{position:"fixed",zIndex:9999,top:$,left:$,right:$,bottom:$,pointerEvents:"none",...r},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},i.map(m=>{let u=m.position||t,f=c.calculateOffset(m,{reverseOrder:e,gutter:s,defaultPosition:t}),h=Qe(u,f);return d.createElement(Je,{id:m.id,key:m.id,onHeightUpdate:c.updateHeight,className:m.visible?Ye:"",style:h},m.type==="custom"?D(m.message,m):n?n(m):d.createElement(Ve,{toast:m,position:u}))}))},X=g;const T=d;function Ge({title:e,titleId:t,...a},s){return T.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},a),e?T.createElement("title",{id:t},e):null,T.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"}))}const Ke=T.forwardRef(Ge);var et=Ke;const L=d;function tt({title:e,titleId:t,...a},s){return L.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},a),e?L.createElement("title",{id:t},e):null,L.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"}))}const at=L.forwardRef(tt);var rt=at;const A=d;function st({title:e,titleId:t,...a},s){return A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},a),e?A.createElement("title",{id:t},e):null,A.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))}const ot=A.forwardRef(st);var nt=ot,it=et,lt=rt,ct=nt;const J=({t:e,type:t="default",title:a,message:s,icon:n})=>{const r={check:o(it,{className:"h-6 w-6 text-emerald-600"}),cross:o(ct,{className:"h-6 w-6 text-red-500"}),info:o(lt,{className:"h-6 w-6 text-primary-500"})},l={default:"text-gray-900",success:"text-emerald-600",error:"text-red-500",info:"text-primary-500"};return o(Z,{show:e.visible,as:d.Fragment,enter:"transform ease-out duration-300 transition",enterFrom:"translate-y-4 opacity-0 sm:translate-y-0 sm:translate-x-4",enterTo:"translate-y-0 opacity-100 sm:translate-x-0",leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:o("div",{className:"max-w-sm w-full bg-gray-950 shadow-xl rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden",children:o("div",{className:"p-4",children:p("div",{className:"flex items-start",children:[o("div",{className:"flex-shrink-0 pt-1",children:r[n]}),p("div",{className:"ml-3 w-0 flex-1 pt-0.5",children:[a&&o("p",{className:`text-lg font-bold ${l[t]}`,children:a}),s&&o("p",{className:"mt-1 text-sm text-gray-200",children:s})]}),o("div",{className:"ml-4 flex-shrink-0 flex",children:p("button",{className:"bg-gray-900 rounded-md inline-flex text-gray-400 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",onClick:()=>{X.dismiss(e.id)},children:[o("span",{className:"sr-only",children:"Close"}),o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:o("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})]})})]})})})})},z=d;function dt({title:e,titleId:t,...a},s){return z.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},a),e?z.createElement("title",{id:t},e):null,z.createElement("path",{d:"M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z"}))}const mt=z.forwardRef(dt);var ut=mt;const R=d;function pt({title:e,titleId:t,...a},s){return R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},a),e?R.createElement("title",{id:t},e):null,R.createElement("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"}))}const ft=R.forwardRef(pt);var ht=ft,gt=ut,yt=ht;const vt=({message:e})=>{const[t,a]=d.useState(!0);return o(Z,{show:t,enter:"transition-opacity duration-75",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:o("div",{className:"p-2 rounded-lg bg-emerald-600 shadow-lg sm:p-3 mb-4",children:p("div",{className:"flex items-center justify-between flex-wrap",children:[p("div",{className:"w-0 flex-1 flex items-center",children:[o("span",{className:"flex p-2 rounded-lg bg-emerald-800",children:o(gt,{className:"h-6 w-6 text-white","aria-hidden":"true"})}),o("p",{className:"ml-3 font-medium text-white truncate",children:e})]}),o("div",{className:"order-2 flex-shrink-0 sm:order-3 sm:ml-2",children:p("button",{type:"button",onClick:()=>a(!1),className:"-mr-1 flex p-2 rounded-md hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-white",children:[o("span",{className:"sr-only",children:"Dismiss"}),o(yt,{className:"h-6 w-6 text-white","aria-hidden":"true"})]})})]})})})},bt=()=>{const{auth:e,flash:t}=Y().props,[a,s]=d.useState();async function n(){const{data:N}=await te.get(route("dashboard.contacts"));s(N)}d.useEffect(()=>{(async function(){await n()})()},[]);function r(N){N.preventDefault(),c({...i,[N.target.name]:N.target.value})}function l(N){N.preventDefault(),h(),C(route("contact.form"),{onSuccess:()=>{y(),X.custom(B=>o(J,{t:B,type:"success",title:"Success",message:"Message successfully send",icon:"check"}))},onError:()=>{X.custom(B=>o(J,{t:B,icon:"cross",type:"error",title:"Error",message:"Something went wrong"}))},preserveState:!0,preserveScroll:!0})}const{data:i,setData:c,processing:m,recentlySuccessful:u,errors:f,clearErrors:h,reset:y,post:C,get:xt}=Q({name:"",email:"",phone:"",message:"",subject:""});return p(H,{className:"my-4 md:my-6 lg:my-8 space-y-4",children:[o(H.Header,{heading:"Contact Us"}),t&&o(vt,{message:t}),p("form",{onSubmit:l,method:"POST",className:"space-y-6",children:[p("div",{className:"grid md:grid-cols-2 gap-6",children:[p("div",{children:[o(k,{htmlFor:"name",value:"Name"}),o(I,{name:"name",id:"name",value:i.name,onChange:r,className:"w-full mt-2"}),o(j,{className:"mt-2",message:f.name})]}),p("div",{children:[o(k,{htmlFor:"email",value:"Email"}),o(I,{name:"email",id:"email",type:"email",value:i.email,onChange:r,className:"w-full mt-2"}),o(j,{className:"mt-2",message:f.email})]})]}),p("div",{children:[o(k,{htmlFor:"phone",value:"Phone"}),o(I,{name:"phone",id:"phone",type:"tel",value:i.phone,onChange:r,className:"w-full mt-2"}),o(j,{className:"mt-2",message:f.phone})]}),p("div",{children:[o(k,{htmlFor:"subject",value:"Subject"}),o(I,{name:"subject",id:"subject",type:"text",value:i.subject,onChange:r,className:"w-full mt-2"}),o(j,{className:"mt-2",message:f.subject})]}),p("div",{children:[o(k,{htmlFor:"message",value:"Message"}),o(re,{name:"message",id:"message",value:i.message,onChange:r,className:"w-full mt-2 min-h-[175px]"}),o(j,{className:"mt-2",message:f.message})]}),o("div",{children:o(se,{type:"submit",processing:m,recentlySuccessful:u,buttonText:"Send email"})})]})]})},St=()=>{const{ziggy:e}=Y().props;return p(ne,{children:[o(ae,{title:"Home",children:o("link",{rel:"canonical",href:e.location})}),o(Ze,{position:"top-right",toastOptions:{duration:2200}}),o(bt,{}),o(ie,{}),o("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6"})]})};export{St as default};
