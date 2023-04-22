import{a as e,q as u,r as w,j as i,F as y,g as j,d as D,W as P,b as Q}from"./app-eaf4554e.js";import{i as U,_ as R,a as W,b as Y,c as J,d as K,e as H,f as X,u as b,A as Z}from"./AuthenticatedLayout-6069adb6.js";import{D as I,S as ee,M as ae}from"./Modal-3d418902.js";import{P as N}from"./PrimaryButton-070ec07c.js";import{c as A,u as M,s as te}from"./helpers-b4979488.js";import{D as re}from"./Datatable-9d534a8b.js";import{C as G}from"./Checkbox-a68d8d7a.js";import"./Dropdown-cc143fa1.js";import{T as B,S as $}from"./SaveSubmitButton-9cc004ac.js";import{P as q}from"./Panel-fc6ef8eb.js";import{s as le}from"./slugify-1b5e862a.js";import{I as ne}from"./InputError-f3b06719.js";import{I as x}from"./InputLabel-554eb3d3.js";import{S as se}from"./SelectCategory-5b139015.js";import"./prototypes-fee88381.js";import"./ApplicationLogo-0adbd980.js";function ie(a,t){var r=a.length;for(a.sort(t);r--;)a[r]=a[r].value;return a}var ce=ie,O=U;function oe(a,t){if(a!==t){var r=a!==void 0,l=a===null,s=a===a,n=O(a),c=t!==void 0,d=t===null,h=t===t,o=O(t);if(!d&&!o&&!n&&a>t||n&&c&&h&&!d&&!o||l&&c&&h||!r&&h||!s)return 1;if(!l&&!n&&!o&&a<t||o&&r&&s&&!l&&!n||d&&r&&s||!c&&s||!h)return-1}return 0}var de=oe,me=de;function he(a,t,r){for(var l=-1,s=a.criteria,n=t.criteria,c=s.length,d=r.length;++l<c;){var h=me(s[l],n[l]);if(h){if(l>=d)return h;var o=r[l];return h*(o=="desc"?-1:1)}}return a.index-t.index}var ue=he,k=R,pe=W,ge=X,fe=Y,ve=ce,be=J,xe=ue,ye=K,we=H;function Ne(a,t,r){t.length?t=k(t,function(n){return we(n)?function(c){return pe(c,n.length===1?n[0]:n)}:n}):t=[ye];var l=-1;t=k(t,be(ge));var s=fe(a,function(n,c,d){var h=k(t,function(o){return o(n)});return{criteria:h,index:++l,value:n}});return ve(s,function(n,c){return xe(n,c,r)})}var Se=Ne,Ce=Se,E=H;function _e(a,t,r,l){return a==null?[]:(E(t)||(t=t==null?[]:[t]),r=l?void 0:r,E(r)||(r=r==null?[]:[r]),Ce(a,t,r))}var ke=_e;const De=({children:a})=>e("div",{className:"flex space-x-4",children:a}),Ae=({data:a,categories_all:t})=>{const{url:r}=u(),[l,s]=w.useState(!1),{quickSearch:n,setQuickSearch:c,order:d,setOrder:h,setFilteredData:o,filteredData:S,selected:p,setSelected:C}=b(),_=()=>{let g;return g=a.records.data,g=g.filter(v=>Object.keys(v).some(f=>String(v[f]).toLowerCase().indexOf(n.toLowerCase())>-1)),g=ke(g,v=>{let f=v[d.key];return isNaN(parseFloat(f))?String(f).toLowerCase():parseFloat(f)},d.order),g};w.useEffect(()=>{o(_())},[d,n]);const L=()=>{s(!1),j.delete(`${A(r)}/${p}`,{preserveState:!1,onSuccess:()=>{C([])}})};return e("div",{children:i("div",{className:"pb-12",children:[e(Fe,{categories:t}),a.meta.allow.searching&&e(qe,{}),p.length>0&&e("div",{className:"flex mb-4 space-x-8",children:e(De,{children:l?i(y,{children:[i("span",{children:["Are you sure you want to delete"," ",p.length," ",p.length>1?a.meta.name:a.meta.name_singular," ","?"]}),e(N,{onClick:L,children:"Yes"}),e(ee,{onClick:()=>s(!1),children:"Cancel"})]}):e(I,{onClick:()=>s(!0),children:"Delete"})})}),i(re,{children:[e($e,{}),e(Be,{})]}),e(Le,{})]})})},$e=()=>{var n;const{order:a,selected:t,handleToggleSelectedAll:r,handleColumnOrder:l}=b(),{data:s}=u().props;return e("thead",{className:"bg-gray-900/75",children:i("tr",{children:[s.meta.allow.deletions&&e("th",{className:"p-3.5 w-5",children:e(G,{checked:t.length>0,onChange:c=>r(c,s.records.data)})}),(n=s.columns.displayable)==null?void 0:n.map(c=>e("th",{className:`p-3.5 text-left text-sm font-semibold text-gray-100 uppercase ${c==="id"&&"w-[70px]"}`,scope:"col",children:i("button",{type:"button",className:"flex space-x-2 items-center uppercase",onClick:()=>l(c),children:[e("span",{children:M(c)}),a.key===c&&e(ze,{order:a.order})]})},c)),e("th",{className:"w-[70px] text-right p-3.5",children:e("span",{className:"sr-only",children:"Edit or delete"})})]})})},Me=({id:a,deletion:t})=>{const{url:r}=u(),[l,s]=w.useState(!1);return e("div",{className:"flex space-x-5 relative items-center",children:l?i("div",{className:"flex space-x-1",children:[e(D,{preserveScroll:!0,preserveState:!1,method:"delete",href:`${A(r)}/${a}`,as:"button",className:"text-green-500 bg-gray-900/75 p-1 rounded ",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5",children:e("path",{fillRule:"evenodd",d:"M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",clipRule:"evenodd"})})}),e("button",{className:"text-red-500 bg-gray-900/75 p-1 rounded",type:"button",onClick:n=>s(!l),children:e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5",children:e("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})})})]}):i(y,{children:[t&&e("button",{type:"button",onClick:n=>s(!l),children:e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5 text-rose-600",children:e("path",{fillRule:"evenodd",d:"M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z",clipRule:"evenodd"})})}),e(D,{type:"button",href:`${A(r)}/${a}/edit`,children:i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5 text-gray-400",children:[e("path",{d:"M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z"}),e("path",{d:"M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z"})]})})]})})},Be=()=>{const{data:{columns:a,meta:t}}=u().props,{filteredData:r,handleSelected:l,selected:s}=b();return e("tbody",{className:"divide-y divide-gray-900",children:r&&r.map((n,c)=>i("tr",{className:"even:bg-gray-900/50",children:[t.allow.deletions&&e("td",{className:"p-3.5 w-5",children:e(G,{id:n.id,onChange:l,value:n.id,checked:s.includes(n.id)})}),a.displayable.map(d=>e("td",{className:"max-w-[200px] px-3.5 py-4 text-sm text-gray-500",children:e("div",{className:"line-clamp-2",children:n[d]})},`${d}-${c}`)),e("th",{className:"w-[70px] text-right px-3.5 py-4 text-sm ",children:e(Me,{id:n.id,deletion:t.allow.deletions})})]},`row-${c}`))})},Le=()=>{const{data:{records:a}}=u().props,{limit:t}=b();return e(y,{children:a.links.length>3&&e("nav",{className:"relative z-0 my-4 md:my-6 flex justify-center rounded-md shadow-sm -space-x-px","aria-label":"Pagination",children:a==null?void 0:a.links.map((r,l)=>e(D,{preserveScroll:!1,method:"get",href:r.url||"",disabled:r.active||!r.url,as:"button",data:{limit:t},className:`z-10 relative inline-flex items-center px-4 py-2 hover:bg-gray-900/10 text-sm font-medium border border-gray-700 disabled:cursor-not-allowed
          ${r.active?" bg-primary-500":" bg-gray-800"}
          `,dangerouslySetInnerHTML:{__html:r.label}},l.toString()))})})},Fe=({categories:a})=>{const{data:{meta:{name_singular:t,name:r,allow:l},columns:s,database:n}}=u().props,{url:c}=u(),[d,h]=w.useState(!1),o=s.quick_create,S={};o.forEach(m=>{S[m]=""});const{data:p,setData:C,post:_,processing:L,errors:g,clearErrors:v,reset:f}=P({...S});function F(){h(!1),f(),v()}function T(){h(!0)}const z=m=>{m.preventDefault(),C({...p,[m.target.name]:m.target.name==="slug"?te(m.target.value):m.target.value})},V=m=>{m.preventDefault(),v(),_(`${c}`,{onSuccess:()=>{F(),f()},onError:()=>{},preserveState:!0})};return i(y,{children:[e(ae,{show:d,onClose:F,maxWidth:"lg",closeable:!0,children:i(q,{children:[e(q.Header,{heading:`Create a new ${t}`}),i("form",{onSubmit:V,className:"mt-4 space-y-6",children:[s.quick_create.map(m=>i("div",{children:[e(x,{htmlFor:m,value:M(m),className:"capitalize"}),m==="category_id"?e(se,{id:"category_id",name:m,categories:a,defaultValue:p.category_id,onChange:z}):e(B,{id:m,name:m,className:"mt-1 block w-full",onChange:z,value:p[m]}),e(ne,{className:"mt-2",message:g[m]})]},le(m))),e("div",{children:e(N,{type:"submit",children:"Create"})})]})]})}),e("div",{className:"wrapper py-4 rounded bg-gray-800 my-4 md:my-6",children:i("div",{className:"flex justify-between",children:[e("h1",{className:"capitalize font-semibold text-2xl",children:r}),l.creation&&i(N,{type:"button",onClick:T,children:["Create new ",t]})]})})]})},ze=({order:a})=>e("div",{className:`${a==="asc"?"rotate-0":"rotate-180"}`,children:e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5 ",children:e("path",{fillRule:"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",clipRule:"evenodd"})})}),qe=()=>{u();const{quickSearch:a,setQuickSearch:t}=b();return i("div",{className:"bg-gray-800 p-4 rounded my-4 md:my-6 space-y-4",children:[e(Ee,{}),i("div",{className:"grid grid-cols-12 gap-4 md:gap-x-6 lg:gap-x-8",children:[i("div",{className:"col-span-12 md:col-span-8 lg:col-span-10",children:[e(x,{className:"mb-1",htmlFor:"quick-search",children:"Quick Search"}),e(B,{type:"search",id:"quick-search",className:"w-full max-w-full",onChange:l=>{l.preventDefault(),t(l.target.value)},value:a})]}),e("div",{className:"col-span-12 md:col-span-4 lg:col-span-2",children:e(Oe,{})})]})]})},Oe=()=>{const{url:a}=u(),{limit:t,setLimit:r}=b();return i(y,{children:[e(x,{className:"mb-1",htmlFor:"display-limit",children:"Display Limit"}),i($,{onChange:s=>{r(s.target.value),j.get(`${a}`,{limit:s.target.value},{preserveState:!1})},id:"display-limit",name:"limit",className:"w-full max-w-full",value:t,children:[e("option",{value:"10",children:"10"}),e("option",{value:"25",children:"25"}),e("option",{value:"50",children:"50"}),e("option",{value:"100",children:"100"}),e("option",{value:"250",children:"250"})]})]})},Ee=()=>{const{url:a}=u(),{data:{columns:t}}=u().props,{limit:r}=b(),{data:l,setData:s,get:n,errors:c}=P({column:"id",operator:"equals",limit:r,value:""}),d=o=>{s({...l,[o.target.id]:o.target.value})};return i("form",{className:"grid grid-cols-12 gap-4 md:gap-x-6 lg:gap-x-8",onSubmit:o=>{o.preventDefault(),n(`${a}`,{preserveState:!1})},children:[i("div",{className:"col-span-12 md:col-span-6 lg:col-span-2",children:[e(x,{className:"mb-1",htmlFor:"column",children:"Filter column"}),e($,{id:"column",className:"w-full max-w-full",value:l.column,onChange:d,children:t.updatable.map(o=>e("option",{value:o,children:M(o)},o))})]}),i("div",{className:"col-span-12 md:col-span-6 lg:col-span-2",children:[e(x,{className:"mb-1",htmlFor:"operator",children:"Operator"}),i($,{id:"operator",className:"w-full max-w-full",value:l.operator,onChange:d,children:[e("option",{value:"equals",children:"Equals"}),e("option",{value:"contains",children:"Contains"}),e("option",{value:"starts_with",children:"Starts with"}),e("option",{value:"ends_with",children:"Ends with"}),e("option",{value:"greater_than",children:"Greater than"}),e("option",{value:"greater_or_equal_than",children:"Greater or equal than"}),e("option",{value:"less_than",children:"Less than"}),e("option",{value:"less_or_equal_than",children:"Less or equal than"})]})]}),i("div",{className:"col-span-12 md:col-span-8 flex flex-grow-0",children:[i("div",{className:"flex-1",children:[e(x,{className:"mb-1",htmlFor:"value",children:"Full Search"}),e(B,{type:"search",id:"value",className:"w-full max-w-full rounded-r-none",value:l.value,onChange:d})]}),e("div",{className:"flex items-end",children:e(N,{type:"submit",className:"min-h-[42px] rounded-l-none",children:"Search"})})]})]})},ea=({auth:a,data:t,categories_all:r})=>i(Z,{user:a.user,header:e("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight capitalize",children:t.meta.name}),children:[e(Q,{title:`Dashboard ${t.meta.name.capitalize()}`}),e("div",{className:"py-12",children:e("div",{className:"wrapper text-white",children:e(Ae,{data:t,categories_all:r})})})]});export{ea as default};
