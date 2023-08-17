import{j as e,q as l,e as r,k as n,F as c,i as d}from"./index.esm-7e288f01.js";import{u as o,A as p}from"./AuthenticatedLayout-e0f48162.js";import"./slugify-05cdbe72.js";import"./index-0ee53222.js";import"./Dropdown-c8bbabc6.js";import"./Textarea-82c98a4b.js";import"./Panel-26424cc9.js";import"./app-a1678f72.js";import{D as m}from"./Datatable-4ed4daaa.js";import"./ApplicationLogo-e80fc51b.js";import"./theme-script-fbbf9cf9.js";import"./ThemeSelector-34b2c170.js";import"./transition-d4d33e78.js";import"./keyboard-ec40ae2d.js";const x=({children:a})=>e("div",{className:"py-12",children:a}),h=()=>{const{messages:a}=l().props;return e("tbody",{className:"divide-y divide-gray-900",children:a.data&&a.data.map(t=>r("tr",{className:` ${t.read_at==null,"even:bg-gray-900/50"}`,children:[e("td",{className:"w-[50px] px-3.5 py-4 text-sm text-gray-500 hidden md:flex",scope:"col",children:t.id}),e("td",{className:"w-[40px] px-3.5 py-4 text-sm text-gray-500 text-center",scope:"col",children:t.read_at!==null?e("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/30 text-green-50",children:"Read"}):e("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-500/30 text-rose-50",children:"Unread"})}),e("td",{className:"max-w-[200px] px-3.5 py-4 text-sm text-gray-500",scope:"col",children:t.name}),e("td",{className:"max-w-[200px] px-3.5 py-4 text-sm text-gray-500 ",scope:"col",children:t.email}),e("td",{className:"max-w-[200px] px-3.5 py-4 text-sm text-gray-500",scope:"col",children:t.phone}),e("td",{className:"max-w-[200px] px-3.5 py-4 text-sm text-gray-500",scope:"col",colSpan:3,children:t.subject}),e("td",{className:"max-w-[200px] px-3.5 py-4 text-sm text-gray-500",scope:"col",children:e(n,{href:route("dashboard.messages.show",t.id),className:"px-4 py-1.5 rounded bg-gray-900/50 text-white text-xs uppercase",children:"View"})})]},t.id))})},y=()=>{const{messages:a}=l().props,{limit:t}=o();return e(c,{children:a.meta.links.length>3&&e("nav",{className:"relative z-0 my-4 md:my-6 flex justify-center rounded-md shadow-sm -space-x-px","aria-label":"Pagination",children:a.meta.links.map((s,i)=>e(n,{preserveScroll:!1,method:"get",href:s.url||"",disabled:s.active||!s.url,as:"button",data:{limit:t},className:`z-10 relative inline-flex items-center px-4 py-2 hover:bg-gray-900/10 text-sm font-medium border border-gray-700 disabled:cursor-not-allowed
            ${s.active?" bg-primary-500":" bg-gray-800"}
            `,dangerouslySetInnerHTML:{__html:s.label}},i.toString()))})})},g=()=>e("thead",{className:"bg-gray-900/75",children:r("tr",{children:[e("th",{className:"p-3.5 text-left text-sm font-semibold text-gray-100 uppercase hidden md:flex",scope:"col",children:e("span",{className:"pointer-events-none",children:"ID"})}),e("th",{className:"p-3.5 text-left text-sm font-semibold text-gray-100 uppercase",scope:"col",children:e("span",{className:"pointer-events-none",children:"Read"})}),e("th",{className:"p-3.5 text-left text-sm font-semibold text-gray-100 uppercase",scope:"col",children:e("span",{className:"pointer-events-none",children:"Name"})}),e("th",{className:"p-3.5 text-left text-sm font-semibold text-gray-100 uppercase",scope:"col",children:e("span",{className:"pointer-events-none",children:"Email"})}),e("th",{className:"p-3.5 text-left text-sm font-semibold text-gray-100 uppercase",scope:"col",children:e("span",{className:"pointer-events-none",children:"Phone"})}),e("th",{className:"p-3.5 text-left text-sm font-semibold text-gray-100 uppercase",scope:"col",colSpan:3,children:e("span",{className:"pointer-events-none",children:"Subject"})}),e("th",{className:"w-[70px] text-right p-3.5",children:e("span",{className:"sr-only",children:"Edit or delete"})})]})}),z=({auth:a,messages:t})=>r(p,{header:e(c,{children:e("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Messages"})}),user:a.user,children:[e(d,{title:"Dashboard Messages "}),e("div",{className:"py-12",children:e("div",{className:"wrapper text-white ",children:t.data.length>0?r(x,{children:[r(m,{children:[e(g,{}),e(h,{})]}),e(y,{})]}):e("div",{className:"py-20 text-xl text-center",children:"There is no message at this time."})})})]});export{z as default};