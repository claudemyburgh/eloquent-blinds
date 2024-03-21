import{q as k,e as E,W as P,f as a,b as e}from"./index.esm-26f22f77.js";import"./Dropdown-fc5a5bb9.js";import{I as r}from"./InputError-0104161a.js";import{T as f,a as m,S as x}from"./Textarea-1978c24a.js";import{I as i}from"./InputLabel-8747606c.js";import{S as T}from"./SelectStepCategory-cf0a4e45.js";import{S as D}from"./SaveSubmitButton-41b0ae27.js";import{s as L}from"./helpers-1b11cd0d.js";import{C as u}from"./CharCounter-148e4971.js";import{_ as y}from"./index-76c32116.js";import{T as b}from"./ToastItem-f897d400.js";import"./PrimaryButton-079c5970.js";import"./slugify-1b4b5c30.js";const R=()=>{var p,g,h,v;const{product:t,categories_all:N,tags:S}=k().props,[n,C]=E.useState({description:(p=t.description)==null?void 0:p.length,body:(g=t.body)==null?void 0:g.length,slug:(h=t.slug)==null?void 0:h.length,excerpt:(v=t.excerpt)==null?void 0:v.length}),{data:l,setData:F,put:w,errors:o,processing:j,recentlySuccessful:I}=P({title:t.title||"",slug:t.slug||"",category_id:t.category_id||"",description:t.description||"",body:t.body||"",excerpt:t.excerpt||"",json:t.json||"",live:t.live,popular:t.popular,tag:S||""}),_=c=>{c.preventDefault(),w(route("dashboard.products.update",t),{preserveState:!0,preserveScroll:!0,onSuccess:()=>{y.custom(d=>e(b,{t:d,type:"success",title:"Success",message:"Product successfully updated",icon:"check"}))},onError:()=>{y.custom(d=>e(b,{t:d,type:"error",title:"Error",message:"Something went wrong",icon:"cross"}))}})};function s(c){c.preventDefault(),F({...l,[c.target.id]:c.target.value}),C({...n,[c.target.id]:c.target.value.length})}return a("form",{className:"mt-6 space-y-6",onSubmit:_,children:[a("div",{children:[e(i,{htmlFor:"title",value:"Title"}),e(f,{id:"title",value:l.title,onChange:s,type:"text",className:"mt-1 block w-full"}),e(r,{message:o.title,className:"mt-2"})]}),a("div",{children:[e(i,{htmlFor:"slug",value:"Slug"}),e(f,{id:"slug",value:L(l.slug),onChange:s,type:"text",className:"mt-1 block w-full"}),e(u,{count:n.slug,max:100}),e(r,{message:o.slug,className:"mt-4"})]}),a("div",{children:[e(i,{htmlFor:"category_id",value:"Category"}),e(T,{id:"category_id",categories:N,defaultValue:l.category_id,onChange:s}),e(r,{message:o.category_id,className:"mt-2"})]}),a("div",{children:[e(i,{htmlFor:"description",value:"Description"}),e(m,{id:"description",value:l.description,onChange:s,className:"mt-1 block w-full min-h-[100px]"}),e(u,{count:n.description||0,max:500}),e(r,{message:o.description,className:"mt-4"})]}),a("div",{children:[e(i,{htmlFor:"excerpt",value:"Excerpt"}),e(m,{id:"excerpt",value:l.excerpt,onChange:s,className:"mt-1 block w-full min-h-[100px]"}),e(u,{count:n.excerpt||0,max:500}),e(r,{message:o.excerpt,className:"mt-4"})]}),a("div",{children:[e(i,{htmlFor:"body",value:"Body"}),e(m,{id:"body",value:l.body,onChange:s,className:"mt-1 block w-full min-h-[200px]"}),e(u,{count:n.body||0,max:2500}),e(r,{message:o.body,className:"mt-4"})]}),a("div",{className:"grid grid-cols-2 gap-6",children:[a("div",{children:[e(i,{htmlFor:"live",value:"Live"}),a(x,{id:"live",name:"live",className:"w-full mt-1",value:l.live,onChange:s,children:[e("option",{value:"1",children:"Live"}),e("option",{value:"0",children:"Not Live"})]}),e(r,{message:o.live,className:"mt-2"})]}),a("div",{children:[e(i,{htmlFor:"popular",value:"Popular"}),a(x,{id:"popular",name:"popular",className:"w-full mt-1",value:l.popular,onChange:s,children:[e("option",{value:"1",children:"Popular"}),e("option",{value:"0",children:"Not Popular"})]}),e(r,{message:o.popular,className:"mt-2"})]})]}),a("div",{children:[e(i,{htmlFor:"json",value:"Json data"}),e(m,{id:"json",value:l.json,onChange:s,className:"mt-1 block w-full min-h-[100px]"}),e(r,{message:o.json,className:"mt-4"})]}),e("div",{className:"flex items-center justify-between",children:e(D,{processing:j,recentlySuccessful:I})})]})};export{R as default};
