import{q as k,r as E,W as T,j as l,a as e}from"./app-ad7d8609.js";import"./Dropdown-422750d4.js";import{I as i}from"./InputError-8b129f39.js";import{T as b,S as p,a as d,b as j}from"./SaveSubmitButton-8a3d374e.js";import{I as n}from"./InputLabel-f677de27.js";import{s as D}from"./helpers-81345a39.js";import{C as m}from"./CharCounter-6523c878.js";import{_ as N}from"./index-7c7a1668.js";import{T as y}from"./ToastItem-77c5f860.js";import"./tw-merge-ff8a1dcb.js";import"./PrimaryButton-43b33803.js";import"./slugify-34512d66.js";const M=()=>{var g,v,f,x;const{category:t,categories_all:h}=k().props,[c,C]=E.useState({description:(g=t.description)==null?void 0:g.length,body:(v=t.body)==null?void 0:v.length,slug:(f=t.slug)==null?void 0:f.length,excerpt:(x=t.excerpt)==null?void 0:x.length}),{data:r,setData:S,put:w,errors:s,processing:F,recentlySuccessful:I}=T({title:t.title||"",slug:t.slug||"",parent_id:t.parent_id||"",description:t.description||"",body:t.body||"",excerpt:t.excerpt||"",live:t.live,popular:t.popular}),_=a=>{a.preventDefault(),w(route("dashboard.categories.update",t),{preserveState:!0,preserveScroll:!0,onSuccess:()=>{N.custom(u=>e(y,{t:u,type:"success",title:"Success",message:"Category successfully updated",icon:"check"}))},onError:()=>{N.custom(u=>e(y,{t:u,type:"error",title:"Error",message:"Something went wrong",icon:"cross"}))}})};function o(a){a.preventDefault(),S({...r,[a.target.id]:a.target.value}),C({...c,[a.target.id]:a.target.value.length})}return l("form",{className:"mt-6 space-y-6",onSubmit:_,children:[l("div",{children:[e(n,{htmlFor:"title",value:"Title"}),e(b,{id:"title",value:r.title,onChange:o,type:"text",className:"mt-1 block w-full"}),e(i,{message:s.title,className:"mt-2"})]}),l("div",{children:[e(n,{htmlFor:"slug",value:"Slug"}),e(b,{id:"slug",value:D(r.slug),onChange:o,type:"text",className:"mt-1 block w-full"}),e(m,{count:c.slug,max:100}),e(i,{message:s.slug,className:"mt-4"})]}),e("pre",{}),l("div",{children:[e(n,{htmlFor:"parent_id",value:"Parent Id"}),l(p,{id:"parent_id",defaultValue:r.parent_id,onChange:o,className:"mt-1 block w-full",children:[e("option",{value:"",children:"None"}),h&&h.map(a=>e("option",{value:a.id,children:a.title},a.uuid))]}),e(i,{message:s.parent_id,className:"mt-2"})]}),l("div",{children:[e(n,{htmlFor:"description",value:"Description"}),e(d,{id:"description",value:r.description,onChange:o,className:"mt-1 block w-full min-h-[100px]"}),e(m,{count:c.description||0,max:500}),e(i,{message:s.description,className:"mt-4"})]}),l("div",{children:[e(n,{htmlFor:"excerpt",value:"Excerpt"}),e(d,{id:"excerpt",value:r.excerpt,onChange:o,className:"mt-1 block w-full min-h-[100px]"}),e(m,{count:c.excerpt||0,max:500}),e(i,{message:s.excerpt,className:"mt-4"})]}),l("div",{children:[e(n,{htmlFor:"body",value:"Body"}),e(d,{id:"body",value:r.body,onChange:o,className:"mt-1 block w-full min-h-[200px]"}),e(m,{count:c.body||0,max:2500}),e(i,{message:s.body,className:"mt-4"})]}),l("div",{className:"grid grid-cols-2 gap-6",children:[l("div",{children:[e(n,{htmlFor:"live",value:"Live"}),l(p,{id:"live",name:"live",className:"w-full mt-1",value:r.live,onChange:o,children:[e("option",{value:"1",children:"Live"}),e("option",{value:"0",children:"Not Live"})]}),e(i,{message:s.live,className:"mt-2"})]}),l("div",{children:[e(n,{htmlFor:"popular",value:"Popular"}),l(p,{id:"popular",name:"popular",className:"w-full mt-1",value:r.popular,onChange:o,children:[e("option",{value:"1",children:"Popular"}),e("option",{value:"0",children:"Not Popular"})]}),e(i,{message:s.popular,className:"mt-2"})]})]}),e("div",{className:"flex items-center justify-between",children:e(j,{processing:F,recentlySuccessful:I})})]})};export{M as default};