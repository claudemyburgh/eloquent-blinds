import{q as _,W as b,j as r,a as e}from"./app-d6834cdf.js";import"./Dropdown-a2a06479.js";import{I as i}from"./InputError-a2d8dbf4.js";import{T as n,b as N}from"./SaveSubmitButton-ef80a674.js";import{I as c}from"./InputLabel-201a0123.js";import{s as S}from"./helpers-d43862fc.js";import{_ as u}from"./index-1f588ca9.js";import{T as p}from"./ToastItem-d90f5388.js";import"./tw-merge-a3538b4c.js";import"./PrimaryButton-0c842d5b.js";import"./slugify-f02ce444.js";const L=()=>{const{user:t}=_().props,{data:a,setData:d,put:f,errors:m,processing:h,recentlySuccessful:v}=b({first_name:t.first_name||"",last_name:t.last_name||"",email:t.email||"",password:t.password||""}),g=s=>{s.preventDefault(),f(route("dashboard.users.update",t),{preserveState:!0,preserveScroll:!0,onSuccess:()=>{u.custom(o=>e(p,{t:o,type:"success",title:"Success",message:"User successfully updated",icon:"check"}))},onError:()=>{u.custom(o=>e(p,{t:o,type:"error",title:"Error",message:"Something went wrong",icon:"cross"}))}})};function l(s){s.preventDefault(),d({...a,[s.target.id]:s.target.value})}return r("form",{className:"mt-6 space-y-6",onSubmit:g,children:[r("div",{children:[e(c,{htmlFor:"first_name",value:"First Name"}),e(n,{id:"first_name",value:a.first_name,onChange:l,type:"text",className:"mt-1 block w-full"}),e(i,{message:m.first_name,className:"mt-2"})]}),r("div",{children:[e(c,{htmlFor:"last_name",value:"Last Name"}),e(n,{id:"last_name",value:a.last_name,onChange:l,type:"text",className:"mt-1 block w-full"}),e(i,{message:m.last_name,className:"mt-2"})]}),r("div",{children:[e(c,{htmlFor:"email",value:"Email"}),e(n,{id:"email",value:S(a.email),onChange:l,type:"text",className:"mt-1 block w-full"}),e(i,{message:m.email,className:"mt-2"})]}),e("div",{className:"flex items-center justify-between",children:e(N,{processing:h,recentlySuccessful:v})})]})};export{L as default};
