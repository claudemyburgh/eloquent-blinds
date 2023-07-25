import{q as E,d as P,W as T,e as a,j as e}from"./index.esm-7e288f01.js";import"./Dropdown-c8bbabc6.js";import{I as s}from"./InputError-ca9eea04.js";import{T as d,a as p,S as y}from"./Textarea-82c98a4b.js";import{I as i}from"./InputLabel-8c091354.js";import{S as j}from"./SelectCategory-1d0229fa.js";import{S as D}from"./SaveSubmitButton-02d2a428.js";import{s as L}from"./helpers-4f89d69e.js";import{C as n}from"./CharCounter-12678dc9.js";import{_ as x}from"./index-0ee53222.js";import{T as N}from"./ToastItem-1439baca.js";import"./transition-d4d33e78.js";import"./PrimaryButton-0cec20dc.js";import"./slugify-05cdbe72.js";const U=()=>{var g,h,v,f;const{product:t,categories_all:b,tags:S}=E().props,[m,C]=P.useState({description:(g=t.description)==null?void 0:g.length,body:(h=t.body)==null?void 0:h.length,slug:(v=t.slug)==null?void 0:v.length,excerpt:(f=t.excerpt)==null?void 0:f.length}),{data:l,setData:w,put:F,errors:r,processing:I,recentlySuccessful:_}=T({title:t.title||"",slug:t.slug||"",category_id:t.category_id||"",description:t.description||"",body:t.body||"",excerpt:t.excerpt||"",live:t.live,popular:t.popular,tag:S||""}),k=c=>{c.preventDefault(),F(route("dashboard.products.update",t),{preserveState:!0,preserveScroll:!0,onSuccess:()=>{x.custom(u=>e(N,{t:u,type:"success",title:"Success",message:"Product successfully updated",icon:"check"}))},onError:()=>{x.custom(u=>e(N,{t:u,type:"error",title:"Error",message:"Something went wrong",icon:"cross"}))}})};function o(c){c.preventDefault(),w({...l,[c.target.id]:c.target.value}),C({...m,[c.target.id]:c.target.value.length})}return a("form",{className:"mt-6 space-y-6",onSubmit:k,children:[a("div",{children:[e(i,{htmlFor:"title",value:"Title"}),e(d,{id:"title",value:l.title,onChange:o,type:"text",className:"mt-1 block w-full"}),e(s,{message:r.title,className:"mt-2"})]}),a("div",{children:[e(i,{htmlFor:"slug",value:"Slug"}),e(d,{id:"slug",value:L(l.slug),onChange:o,type:"text",className:"mt-1 block w-full"}),e(n,{count:m.slug,max:100}),e(s,{message:r.slug,className:"mt-4"})]}),a("div",{children:[e(i,{htmlFor:"tag",value:"Keywords"}),e(d,{id:"tag",value:l.tag,onChange:o,type:"text",className:"mt-1 block w-full"}),e(s,{message:r.tag,className:"mt-4"})]}),a("div",{children:[e(i,{htmlFor:"category_id",value:"Category"}),e(j,{id:"category_id",categories:b,defaultValue:l.category_id,onChange:o}),e(s,{message:r.category_id,className:"mt-2"})]}),a("div",{children:[e(i,{htmlFor:"description",value:"Description"}),e(p,{id:"description",value:l.description,onChange:o,className:"mt-1 block w-full min-h-[100px]"}),e(n,{count:m.description||0,max:500}),e(s,{message:r.description,className:"mt-4"})]}),a("div",{children:[e(i,{htmlFor:"excerpt",value:"Excerpt"}),e(p,{id:"excerpt",value:l.excerpt,onChange:o,className:"mt-1 block w-full min-h-[100px]"}),e(n,{count:m.excerpt||0,max:500}),e(s,{message:r.excerpt,className:"mt-4"})]}),a("div",{children:[e(i,{htmlFor:"body",value:"Body"}),e(p,{id:"body",value:l.body,onChange:o,className:"mt-1 block w-full min-h-[200px]"}),e(n,{count:m.body||0,max:2500}),e(s,{message:r.body,className:"mt-4"})]}),a("div",{className:"grid grid-cols-2 gap-6",children:[a("div",{children:[e(i,{htmlFor:"live",value:"Live"}),a(y,{id:"live",name:"live",className:"w-full mt-1",value:l.live,onChange:o,children:[e("option",{value:"1",children:"Live"}),e("option",{value:"0",children:"Not Live"})]}),e(s,{message:r.live,className:"mt-2"})]}),a("div",{children:[e(i,{htmlFor:"popular",value:"Popular"}),a(y,{id:"popular",name:"popular",className:"w-full mt-1",value:l.popular,onChange:o,children:[e("option",{value:"1",children:"Popular"}),e("option",{value:"0",children:"Not Popular"})]}),e(s,{message:r.popular,className:"mt-2"})]})]}),e("div",{className:"flex items-center justify-between",children:e(D,{processing:I,recentlySuccessful:_})})]})};export{U as default};
