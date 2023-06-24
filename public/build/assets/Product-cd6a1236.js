import{r as a,j as i,a as t,q as N,b as y}from"./app-d6834cdf.js";import{A as $}from"./AppLayout-3a403a2b.js";import{R as j,r as k}from"./react-markdown-5d07bfe5.js";import{a as g}from"./helpers-d43862fc.js";import{C as E}from"./ContactForm-4dfc0926.js";import"./ThemeSelector-1add900e.js";import"./tw-merge-a3538b4c.js";import"./keyboard-f904375b.js";import"./use-root-containers-e123f2ea.js";import"./index-1f588ca9.js";import"./theme-script-be5e800f.js";import"./slugify-f02ce444.js";import"./Panel-6eefd81f.js";import"./Dropdown-a2a06479.js";import"./InputError-a2d8dbf4.js";import"./SaveSubmitButton-ef80a674.js";import"./PrimaryButton-0c842d5b.js";import"./InputLabel-201a0123.js";import"./ToastItem-d90f5388.js";function S({title:s,titleId:e,...l},o){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":e},l),s?a.createElement("title",{id:e},s):null,a.createElement("path",{d:"M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z"}))}const M=a.forwardRef(S),R=M;function C({title:s,titleId:e,...l},o){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":e},l),s?a.createElement("title",{id:e},s):null,a.createElement("path",{d:"M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"}))}const z=a.forwardRef(C),A=z,P=({src:s})=>{var p,w,v;const[e,l]=a.useState(!1),[o,n]=a.useState(0),[d,m]=a.useState(0),r=a.useRef();function f(c=0){const h=Math.floor(c%3600/60),u=c%60;h<10?`${h}`:h.toString();const x=u<10?`0${u}`:u.toString();return isNaN(c)?"0 : 00":`${h} : ${x}`}a.useEffect(()=>{var c;n(Math.floor(r.current.duration)),m(Math.floor((c=r==null?void 0:r.current)==null?void 0:c.currentTime))},[(p=r==null?void 0:r.current)==null?void 0:p.loadedmetadata,(w=r==null?void 0:r.current)==null?void 0:w.readyState,(v=r==null?void 0:r.current)==null?void 0:v.currentTime]);function b(){const c=e;l(!c),c?r.current.pause():r.current.play()}return i("div",{className:"my-6",children:[t("audio",{ref:r,controls:!1,className:"h-20 w-full max-w-2xl",children:t("source",{src:s,type:"audio/wav"})}),i("div",{className:"flex items-center w-full max-w-2xl border border-primary-500 rounded-lg",children:[t("button",{type:"button",onClick:b,className:"p-2.5  rounded-lg bg-primary-500 text-white",children:e?t(R,{className:"h-4 w-4 "}):t(A,{className:"h-4 w-4 "})}),i("div",{className:"flex flex-1 justify-between px-4",children:[t("div",{children:f(d)}),t("div",{children:f(o)})]})]})]})},I="/build/assets/Essential 3000 1 2-743b0a49.wav",ee=()=>{var o,n,d,m;const{ziggy:s,product:e,category:l}=N().props;return i($,{children:[t(y,{title:`${e.title} ${l.title}`,children:t("link",{rel:"canonical",href:s.location})}),i("div",{className:"wrapper my-24 relative z-10",children:[i("div",{className:"mt-6 lg:grid lg:grid-cols-3 lg:gap-x-8",children:[t("div",{className:"aspect-w-3 aspect-h-4 rounded-lg overflow-hidden md:block",children:t("img",{width:388,height:641,src:g((o=e==null?void 0:e.media[0])==null?void 0:o.original_url,"tail"),alt:`${e.title} ${l.title} product `,className:"w-full h-full object-center object-cover"})}),i("div",{className:"hidden lg:grid lg:grid-cols-1 lg:gap-y-8",children:[t("div",{className:"aspect-[3/2]  rounded-lg overflow-hidden",children:t("img",{width:390,height:258,src:g((n=e==null?void 0:e.media[1])==null?void 0:n.original_url,"medium"),alt:`${e.title} ${l.title} materials `,className:"w-full h-full object-center object-cover"})}),t("div",{className:"aspect-[3/2]  rounded-lg overflow-hidden",children:t("img",{width:390,height:258,src:g((d=e==null?void 0:e.media[2])==null?void 0:d.original_url,"medium"),alt:`${e.title} ${l.title} materials `,className:"w-full h-full object-center object-cover"})})]}),t("div",{className:"hidden lg:block aspect-w-4 aspect-h-5 rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4",children:t("img",{width:388,height:641,src:g((m=e==null?void 0:e.media[2])==null?void 0:m.original_url,"tail"),alt:`${e.title} ${l.title} materials `,className:"w-full h-full object-center object-cover"})})]}),i("div",{className:"border-t mt-12 border-gray-200 grid lg:grid-cols-2 gap-6 dark:border-gray-800",children:[i("div",{children:[i("h1",{className:"mt-5 text-4xl font-black tracking-tight text-gray-800 dark:text-white sm:text-6xl text-shadow-lg",children:[e.title," ",l.title]}),t(P,{src:I}),t(j,{className:"prose prose-lg dark:prose-invert my-8 ",children:e.body,remarkPlugins:[k]})]}),t("div",{className:"relative",children:t(E,{className:"sticky top-32",subject:`Please give me a quote for ${e.title} ${l.title}`})})]})]})]})};export{ee as default};
