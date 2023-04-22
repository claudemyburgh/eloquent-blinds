import{a as e,q as c,j as r,d,F as i,b as o}from"./app-62c96502.js";import{u as p,A as m}from"./AuthenticatedLayout-5cf4bffb.js";import"./slugify-1e786c38.js";import"./Dropdown-ee8679eb.js";import"./SaveSubmitButton-9c780f7d.js";import"./Panel-292fba50.js";import{D as x}from"./Datatable-2d181e36.js";import"./ApplicationLogo-06e77e82.js";import"./PrimaryButton-33f404a7.js";const h=({children:a})=>e("div",{className:"py-12",children:a}),y=()=>{const{messages:a}=c().props;return e("tbody",{className:"divide-y divide-gray-900",children:a.data&&a.data.map(t=>{var s,l,n;return r("tr",{className:` ${t.read_at==null,"even:bg-gray-900/50"}`,children:[e("td",{className:"w-[50px] px-3.5 py-4 text-sm text-gray-500 hidden md:flex",scope:"col",children:t.id}),e("td",{className:"w-[40px]  px-3.5 py-4 text-sm text-gray-500 text-center",scope:"col",children:t.read_at?e("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/30 text-green-50",children:"Read"}):e("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-500/30 text-rose-50",children:"Unread"})}),e("td",{className:"max-w-[200px] px-3.5 py-4 text-sm text-gray-500",scope:"col",children:(s=t.user)==null?void 0:s.name}),e("td",{className:"max-w-[200px] px-3.5 py-4 text-sm text-gray-500",scope:"col",children:(l=t.user)==null?void 0:l.email}),e("td",{className:"max-w-[200px] px-3.5 py-4 text-sm text-gray-500",scope:"col",children:(n=t.user)==null?void 0:n.phone}),e("td",{className:"max-w-[200px] px-3.5 py-4 text-sm text-gray-500",scope:"col",colSpan:3,children:t.subject}),e("td",{className:"max-w-[200px] px-3.5 py-4 text-sm text-gray-500",scope:"col",children:e(d,{href:route("dashboard.messages.show",t.id),className:"px-4 py-1.5 rounded bg-gray-900/50 text-white",children:"Read"})})]},t.id)})})},g=()=>{const{messages:a}=c().props,{limit:t}=p();return e(i,{children:a.links.length>3&&e("nav",{className:"relative z-0 my-4 md:my-6 flex justify-center rounded-md shadow-sm -space-x-px","aria-label":"Pagination",children:a.links.map((s,l)=>e(d,{preserveScroll:!1,method:"get",href:s.url||"",disabled:s.active||!s.url,as:"button",data:{limit:t},className:`z-10 relative inline-flex items-center px-4 py-2 hover:bg-gray-900/10 text-sm font-medium border border-gray-700 disabled:cursor-not-allowed
            ${s.active?" bg-primary-500":" bg-gray-800"}
            `,dangerouslySetInnerHTML:{__html:s.label}},l.toString()))})})},u=()=>e("thead",{className:"bg-gray-900/75",children:r("tr",{children:[e("th",{className:"p-3.5 text-left text-sm font-semibold text-gray-100 uppercase hidden md:flex",scope:"col",children:e("span",{className:"pointer-events-none",children:"ID"})}),e("th",{className:"p-3.5 text-left text-sm font-semibold text-gray-100 uppercase",scope:"col",children:e("span",{className:"pointer-events-none",children:"Read"})}),e("th",{className:"p-3.5 text-left text-sm font-semibold text-gray-100 uppercase",scope:"col",children:e("span",{className:"pointer-events-none",children:"Name"})}),e("th",{className:"p-3.5 text-left text-sm font-semibold text-gray-100 uppercase",scope:"col",children:e("span",{className:"pointer-events-none",children:"Email"})}),e("th",{className:"p-3.5 text-left text-sm font-semibold text-gray-100 uppercase",scope:"col",children:e("span",{className:"pointer-events-none",children:"Phone"})}),e("th",{className:"p-3.5 text-left text-sm font-semibold text-gray-100 uppercase",scope:"col",colSpan:3,children:e("span",{className:"pointer-events-none",children:"Subject"})}),e("th",{className:"w-[70px] text-right p-3.5",children:e("span",{className:"sr-only",children:"Edit or delete"})})]})}),_=({auth:a,messages:t})=>r(m,{header:e(i,{children:e("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Messages"})}),user:a.user,children:[e(o,{title:"Dashboard Messages "}),e("div",{className:"py-12",children:e("div",{className:"wrapper text-white ",children:t.data.length>0?r(h,{children:[r(x,{children:[e(u,{}),e(y,{})]}),e(g,{})]}):e("div",{className:"py-20 text-xl text-center",children:"There is no message at this time."})})})]});export{_ as default};
