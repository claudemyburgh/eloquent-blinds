import{q as _,W as S,f as r,b as e}from"./index.esm-7a096b41.js";import"./Dropdown-4011b9d6.js";import{I as i}from"./InputError-966f87fc.js";import{T as n}from"./Textarea-5e5e0f35.js";import{I as c}from"./InputLabel-24e51369.js";import{S as b}from"./SaveSubmitButton-32ef56ad.js";import{s as N}from"./helpers-69dcf652.js";import{_ as u}from"./index-c067a6e5.js";import{T as p}from"./ToastItem-87c29127.js";import"./PrimaryButton-44be1e23.js";import"./slugify-ee9a0573.js";const L=()=>{const{user:t}=_().props,{data:a,setData:f,put:d,errors:m,processing:h,recentlySuccessful:v}=S({first_name:t.first_name||"",last_name:t.last_name||"",email:t.email||"",password:t.password||""}),g=s=>{s.preventDefault(),d(route("dashboard.users.update",t),{preserveState:!0,preserveScroll:!0,onSuccess:()=>{u.custom(l=>e(p,{t:l,type:"success",title:"Success",message:"User successfully updated",icon:"check"}))},onError:()=>{u.custom(l=>e(p,{t:l,type:"error",title:"Error",message:"Something went wrong",icon:"cross"}))}})};function o(s){s.preventDefault(),f({...a,[s.target.id]:s.target.value})}return r("form",{className:"mt-6 space-y-6",onSubmit:g,children:[r("div",{children:[e(c,{htmlFor:"first_name",value:"First Name"}),e(n,{id:"first_name",value:a.first_name,onChange:o,type:"text",className:"mt-1 block w-full"}),e(i,{message:m.first_name,className:"mt-2"})]}),r("div",{children:[e(c,{htmlFor:"last_name",value:"Last Name"}),e(n,{id:"last_name",value:a.last_name,onChange:o,type:"text",className:"mt-1 block w-full"}),e(i,{message:m.last_name,className:"mt-2"})]}),r("div",{children:[e(c,{htmlFor:"email",value:"Email"}),e(n,{id:"email",value:N(a.email),onChange:o,type:"text",className:"mt-1 block w-full"}),e(i,{message:m.email,className:"mt-2"})]}),e("div",{className:"flex items-center justify-between",children:e(b,{processing:h,recentlySuccessful:v})})]})};export{L as default};