import{r as d,a,F as p,j as n,g as F,d as S}from"./app-a5de80e5.js";import{t as I}from"./AuthenticatedLayout-976a1be3.js";import"./prototypes-fee88381.js";var O=I,k=0;function T(r){var l=++k;return O(r)+l}var C=T;const _=({model:r,namedRoute:l})=>{const[o,i]=d.useState(!1),[z,c]=d.useState(null),[u,g]=d.useState({loaded:0,total:0,progress:0,bytes:0,rate:0,estimate:0,event:{isTrusted:!0},upload:!1,percentage:0}),f=[];function h(e){e.preventDefault(),i(!0)}function v(e){e.preventDefault(),i(!0)}function x(e){e.preventDefault(),i(!0)}function y(e){e.preventDefault(),i(!1)}function b(e){let t=f.push({id:C(),file:e,progress:0,failed:!1,loadedBytes:0,totalBytes:0,timeStarted:new Date().getTime(),secondsRemaining:0,finished:!1,cancelled:!1,xhr:null})-1;return f[t]}function D(e){e.preventDefault(),i(!1),c(e.dataTransfer.files),m(e.dataTransfer.files)}function w(e){c(e.target.files),m(e.target.files)}function m(e){let t,s;for(t=0;t<e.length;t++)s=e[t],N(s)}function N(e){let t=b(e);const s=new FormData;s.append("id",r.id),s.append("image",t.file),F.post(route(l,r),s,{forceFormData:!1,preserveState:!0,headers:{"content-type":"multipart/form-data"},onProgress:j=>{g({...u,...j})},onSuccess:()=>{setTimeout(()=>{g({loaded:0,total:0,progress:0,bytes:0,rate:0,estimate:0,event:{isTrusted:!0},upload:!1,percentage:0})},1e3)}})}return a(p,{children:n("div",{children:[n("div",{className:`relative transition my-6 border border-dashed border-gray-200 min-h-[160px] rounded-lg text-gray-200
                ${o?"opacity-100 border-primary-500 shadow-lg shadow-primary-700/10 cursor-grabbing":"opacity-70 border-gray-200"}
                `,onDrag:h,onDrop:D,onDragOver:x,onDragLeave:y,onDragEnter:v,children:[n("label",{htmlFor:"image",className:`absolute inset-0 flex items-center justify-center rounded-lg flex-col space-y-2 tracking-wide
                        ${o?" cursor-grabbing":"cursor-pointer"}
                    `,children:[a("span",{children:a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-12 h-12",children:a("path",{fillRule:"evenodd",d:"M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z",clipRule:"evenodd"})})}),n("span",{children:[a("strong",{children:"Drop file to upload"})," or"," ",a("u",{children:"click to select"})]})]}),a("input",{onChange:w,className:"sr-only",type:"file",multiple:!0,name:"image[]",id:"image"})]}),a(B,{percentage:u.percentage}),(r==null?void 0:r.media)&&a("div",{className:"grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2",children:r.media.map(e=>a(q,{file:e},e.uuid))})]})})},B=({percentage:r})=>a(p,{children:r>0&&n("div",{className:"w-full bg-gray-200 rounded-full dark:bg-gray-700 h-6 my-4 relative overflow-hidden",children:[a("div",{className:"relative bg-primary-500 -left-full transition text-xs font-medium text-primary-100 text-center h-6 leading-none rounded-full",style:{transform:`translateX(${r}%)`}}),n("div",{className:"absolute flex items-center justify-center inset-0 z-10 text-center",children:[r,"%"]})]})}),q=({file:r,...l})=>a("div",{...l,className:"bg-gray-800 border border-gray-700 rounded-xl p-2",children:n("div",{className:"flex space-x-2.5",children:[a("div",{className:"h-14 w-14 rounded bg-black flex-shrink-0",children:a("img",{className:"aspect-square rounded",src:r.original_url,alt:r.name})}),n("div",{className:"flex-shrink flex-col flex items-start justify-center text-xs",children:[a("div",{children:r.name}),a(S,{as:"button",method:"delete",className:"underline hover:text-white text-primary-500",href:route("dashboard.media.delete",r.uuid),children:"Delete"})]})]})});export{_ as I};