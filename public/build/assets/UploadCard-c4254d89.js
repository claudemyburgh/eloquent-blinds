import{i as j,d,j as a,F as p,e as t,k,h as S}from"./index.esm-48297038.js";import{t as I}from"./AuthenticatedLayout-6228af2f.js";import"./prototypes-b1fda430.js";import{b as O}from"./helpers-4e0e4534.js";var C=I,T=0;function z(r){var l=++T;return C(r)+l}var B=z;const E=j(B),A=({model:r,namedRoute:l})=>{const[o,i]=d.useState(!1),[R,c]=d.useState(null),[u,g]=d.useState({loaded:0,total:0,progress:0,bytes:0,rate:0,estimate:0,event:{isTrusted:!0},upload:!1,percentage:0}),f=[];function h(e){e.preventDefault(),i(!0)}function v(e){e.preventDefault(),i(!0)}function x(e){e.preventDefault(),i(!0)}function y(e){e.preventDefault(),i(!1)}function b(e){let s=f.push({id:E(),file:e,progress:0,failed:!1,loadedBytes:0,totalBytes:0,timeStarted:new Date().getTime(),secondsRemaining:0,finished:!1,cancelled:!1,xhr:null})-1;return f[s]}function D(e){e.preventDefault(),i(!1),c(e.dataTransfer.files),m(e.dataTransfer.files)}function w(e){c(e.target.files),m(e.target.files)}function m(e){let s,n;for(s=0;s<e.length;s++)n=e[s],N(n)}function N(e){let s=b(e);const n=new FormData;n.append("id",r.id),n.append("image",s.file),k.post(route(l,r),n,{forceFormData:!1,preserveState:!0,headers:{"content-type":"multipart/form-data"},onProgress:F=>{g({...u,...F})},onSuccess:()=>{setTimeout(()=>{g({loaded:0,total:0,progress:0,bytes:0,rate:0,estimate:0,event:{isTrusted:!0},upload:!1,percentage:0})},1e3)}})}return a(p,{children:t("div",{children:[t("div",{className:`relative transition my-6 border border-dashed border-gray-500 dark:border-gray-200 min-h-[160px] rounded-lg text-gray-700 dark:text-gray-200
                ${o?"opacity-100 border-primary-700 shadow-lg shadow-primary-700/10 cursor-grabbing":"opacity-70 border-gray-500 dark:border-gray-200"}
                `,onDrag:h,onDrop:D,onDragOver:x,onDragLeave:y,onDragEnter:v,children:[t("label",{htmlFor:"image",className:`absolute inset-0 flex items-center justify-center rounded-lg flex-col space-y-2 tracking-wide
                        ${o?" cursor-grabbing":"cursor-pointer"}
                    `,children:[a("span",{children:a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-12 h-12",children:a("path",{fillRule:"evenodd",d:"M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z",clipRule:"evenodd"})})}),t("span",{children:[a("strong",{children:"Drop file to upload"})," or ",a("u",{children:"click to select"})]})]}),a("input",{onChange:w,className:"sr-only",type:"file",multiple:!0,name:"image[]",id:"image"})]}),a(q,{percentage:u.percentage}),(r==null?void 0:r.media)&&a("div",{className:"grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2",children:r.media.map(e=>a(P,{file:e},e.uuid))})]})})},q=({percentage:r})=>a(p,{children:r>0&&t("div",{className:"w-full bg-gray-200 rounded-full dark:bg-gray-700 h-6 my-4 relative overflow-hidden",children:[a("div",{className:"relative bg-primary-500 -left-full transition text-xs font-medium text-primary-100 text-center h-6 leading-none rounded-full",style:{transform:`translateX(${r}%)`}}),t("div",{className:"absolute flex items-center justify-center inset-0 z-10 text-center",children:[r,"%"]})]})}),P=({file:r,...l})=>a("div",{...l,className:"bg-gray-800 border border-gray-700 rounded-xl p-2",children:t("div",{className:"flex space-x-2.5",children:[a("div",{className:"h-14 w-14 rounded bg-black flex-shrink-0",children:a("img",{className:"aspect-square rounded",src:r.original_url,alt:r.name})}),t("div",{className:"flex-shrink flex-col flex items-start justify-center text-xs",children:[a("div",{children:r.name}),t("div",{children:["Size: ",O(r.size)]}),a(S,{as:"button",method:"delete",className:"underline hover:text-white text-primary-500",href:route("dashboard.media.delete",r.uuid),children:"Delete"})]})]})});export{A as I};
