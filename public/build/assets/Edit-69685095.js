import{f as r,F as a,b as e,k as o}from"./index.esm-b13dcf95.js";import{A as m}from"./AuthenticatedLayout-ed05ca9c.js";import{P as s}from"./Panel-e9a8434b.js";import{L as l}from"./LiveLabel-0c9f0b62.js";import{I as p}from"./UploadCard-4bcd4ef3.js";import"./prototypes-b1fda430.js";import"./slugify-86247c2b.js";import d from"./EditCategoriesForm-c3ded791.js";import"./theme-script-67e57b59.js";import"./Dropdown-d41c8316.js";import"./app-6a3af164.js";import"./index-e928716d.js";import"./keyboard-0a8fc431.js";import"./helpers-4e9f6025.js";import"./InputError-30a1abf3.js";import"./Textarea-3ee37b1a.js";import"./InputLabel-698c3925.js";import"./SaveSubmitButton-a5bab951.js";import"./PrimaryButton-6ae253e3.js";import"./CharCounter-af676958.js";import"./ToastItem-da39be71.js";const D=({auth:i,category:t,galleries:h})=>r(m,{header:r(a,{children:[e("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Category Edit"}),r("div",{className:"space-x-4 flex",children:[e("a",{className:"text-white rounded-full px-3 py-0.5 bg-white/10 hover:bg-primary-500",href:route("categories.show",t.slug),target:"_blank",children:"View"}),e(l,{live:t.live,size:"md"})]})]}),user:i.user,children:[e(o,{title:"Dashboard Category Edit"}),e("div",{className:"py-12",children:e("div",{className:"wrapper text-white",children:r(s,{className:"col-span-4",children:[e(p,{model:t,namedRoute:"dashboard.categories.upload"}),e(d,{})]})})})]});export{D as default};
