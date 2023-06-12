import{q as k,r as E,W as P,j as a,a as e}from"./app-0af5212a.js";import"./Dropdown-09918015.js";import{I as s}from"./InputError-86aa7351.js";import{T as f,a as p,S as x,b as T}from"./SaveSubmitButton-12196111.js";import{I as i}from"./InputLabel-b34532f6.js";import{S as j}from"./SelectCategory-dd5cb7af.js";import{s as D}from"./helpers-d602a172.js";import{C as n}from"./CharCounter-f2dfd1d6.js";import{_ as y}from"./index-19682f8c.js";import{T as b}from"./ToastItem-86eaa23d.js";import"./transition-7e390267.js";import"./PrimaryButton-ec6b1bcf.js";import"./slugify-7c885d73.js";const Q=()=>{var d,g,h,v;const{product:t,categories_all:N}=k().props,[m,S]=E.useState({description:(d=t.description)==null?void 0:d.length,body:(g=t.body)==null?void 0:g.length,slug:(h=t.slug)==null?void 0:h.length,excerpt:(v=t.excerpt)==null?void 0:v.length}),{data:l,setData:C,put:F,errors:r,processing:w,recentlySuccessful:I}=P({title:t.title||"",slug:t.slug||"",category_id:t.category_id||"",description:t.description||"",body:t.body||"",excerpt:t.excerpt||"",live:t.live,popular:t.popular}),_=c=>{c.preventDefault(),F(route("dashboard.products.update",t),{preserveState:!0,preserveScroll:!0,onSuccess:()=>{y.custom(u=>e(b,{t:u,type:"success",title:"Success",message:"Product successfully updated",icon:"check"}))},onError:()=>{y.custom(u=>e(b,{t:u,type:"error",title:"Error",message:"Something went wrong",icon:"cross"}))}})};function o(c){c.preventDefault(),C({...l,[c.target.id]:c.target.value}),S({...m,[c.target.id]:c.target.value.length})}return a("form",{className:"mt-6 space-y-6",onSubmit:_,children:[a("div",{children:[e(i,{htmlFor:"title",value:"Title"}),e(f,{id:"title",value:l.title,onChange:o,type:"text",className:"mt-1 block w-full"}),e(s,{message:r.title,className:"mt-2"})]}),a("div",{children:[e(i,{htmlFor:"slug",value:"Slug"}),e(f,{id:"slug",value:D(l.slug),onChange:o,type:"text",className:"mt-1 block w-full"}),e(n,{count:m.slug,max:100}),e(s,{message:r.slug,className:"mt-4"})]}),e("pre",{}),a("div",{children:[e(i,{htmlFor:"category_id",value:"Category"}),e(j,{id:"category_id",categories:N,defaultValue:l.category_id,onChange:o}),e(s,{message:r.category_id,className:"mt-2"})]}),a("div",{children:[e(i,{htmlFor:"description",value:"Description"}),e(p,{id:"description",value:l.description,onChange:o,className:"mt-1 block w-full min-h-[100px]"}),e(n,{count:m.description||0,max:500}),e(s,{message:r.description,className:"mt-4"})]}),a("div",{children:[e(i,{htmlFor:"excerpt",value:"Excerpt"}),e(p,{id:"excerpt",value:l.excerpt,onChange:o,className:"mt-1 block w-full min-h-[100px]"}),e(n,{count:m.excerpt||0,max:500}),e(s,{message:r.excerpt,className:"mt-4"})]}),a("div",{children:[e(i,{htmlFor:"body",value:"Body"}),e(p,{id:"body",value:l.body,onChange:o,className:"mt-1 block w-full min-h-[200px]"}),e(n,{count:m.body||0,max:2500}),e(s,{message:r.body,className:"mt-4"})]}),a("div",{className:"grid grid-cols-2 gap-6",children:[a("div",{children:[e(i,{htmlFor:"live",value:"Live"}),a(x,{id:"live",name:"live",className:"w-full mt-1",value:l.live,onChange:o,children:[e("option",{value:"1",children:"Live"}),e("option",{value:"0",children:"Not Live"})]}),e(s,{message:r.live,className:"mt-2"})]}),a("div",{children:[e(i,{htmlFor:"popular",value:"Popular"}),a(x,{id:"popular",name:"popular",className:"w-full mt-1",value:l.popular,onChange:o,children:[e("option",{value:"1",children:"Popular"}),e("option",{value:"0",children:"Not Popular"})]}),e(s,{message:r.popular,className:"mt-2"})]})]}),e("div",{className:"flex items-center justify-between",children:e(T,{processing:w,recentlySuccessful:I})})]})};export{Q as default};