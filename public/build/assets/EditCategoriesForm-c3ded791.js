import{q as T,e as D,W as L,f as l,b as e}from"./index.esm-b13dcf95.js";import"./Dropdown-d41c8316.js";import{I as i}from"./InputError-30a1abf3.js";import{T as p,S as m,a as v}from"./Textarea-3ee37b1a.js";import{I as n}from"./InputLabel-698c3925.js";import{S as P}from"./SaveSubmitButton-a5bab951.js";import{s as j}from"./helpers-4e9f6025.js";import{C as u}from"./CharCounter-af676958.js";import{_ as b}from"./index-e928716d.js";import{T as C}from"./ToastItem-da39be71.js";import"./PrimaryButton-6ae253e3.js";import"./slugify-86247c2b.js";const O=()=>{var h,f,y,x,N;const{category:t,categories_all:g,galleries:S}=T().props,[c,_]=D.useState({description:(h=t.description)==null?void 0:h.length,body:(f=t.body)==null?void 0:f.length,slug:(y=t.slug)==null?void 0:y.length,excerpt:(x=t.excerpt)==null?void 0:x.length}),{data:r,setData:w,put:F,errors:o,processing:I,recentlySuccessful:k}=L({title:t.title||"",slug:t.slug||"",parent_id:t.parent_id||"",description:t.description||"",body:t.body||"",excerpt:t.excerpt||"",live:t.live,popular:t.popular,video_url:t.video_url||"",gallery:((N=t.galleries[0])==null?void 0:N.id)||""}),E=a=>{a.preventDefault(),F(route("dashboard.categories.update",t),{preserveState:!0,preserveScroll:!0,onSuccess:()=>{b.custom(d=>e(C,{t:d,type:"success",title:"Success",message:"Category successfully updated",icon:"check"}))},onError:()=>{b.custom(d=>e(C,{t:d,type:"error",title:"Error",message:"Something went wrong",icon:"cross"}))}})};function s(a){a.preventDefault(),w({...r,[a.target.id]:a.target.value}),_({...c,[a.target.id]:a.target.value.length})}return l("form",{className:"mt-6 space-y-6",onSubmit:E,children:[l("div",{children:[e(n,{htmlFor:"title",value:"Title"}),e(p,{id:"title",value:r.title,onChange:s,type:"text",className:"mt-1 block w-full"}),e(i,{message:o.title,className:"mt-2"})]}),l("div",{children:[e(n,{htmlFor:"slug",value:"Slug"}),e(p,{id:"slug",value:j(r.slug),onChange:s,type:"text",className:"mt-1 block w-full"}),e(u,{count:c.slug,max:100}),e(i,{message:o.slug,className:"mt-4"})]}),l("div",{children:[e(n,{htmlFor:"parent_id",value:"Parent Id"}),l(m,{id:"parent_id",defaultValue:r.parent_id,onChange:s,className:"mt-1 block w-full",children:[e("option",{value:"",children:"None"}),g&&g.map(a=>e("option",{value:a.id,children:a.title},a.uuid))]}),e(i,{message:o.parent_id,className:"mt-2"})]}),l("div",{children:[e(n,{htmlFor:"description",value:"Description"}),e(v,{id:"description",value:r.description,onChange:s,className:"mt-1 block w-full min-h-[100px]"}),e(u,{count:c.description||0,max:500}),e(i,{message:o.description,className:"mt-4"})]}),l("div",{children:[e(n,{htmlFor:"excerpt",value:"Excerpt"}),e(v,{id:"excerpt",value:r.excerpt,onChange:s,className:"mt-1 block w-full min-h-[100px]"}),e(u,{count:c.excerpt||0,max:500}),e(i,{message:o.excerpt,className:"mt-4"})]}),l("div",{children:[e(n,{htmlFor:"body",value:"Body"}),e(v,{id:"body",value:r.body,onChange:s,className:"mt-1 block w-full min-h-[200px]"}),e(u,{count:c.body||0,max:2500}),e(i,{message:o.body,className:"mt-4"})]}),l("div",{className:"grid grid-cols-2 gap-6",children:[l("div",{children:[e(n,{htmlFor:"live",value:"Live"}),l(m,{id:"live",name:"live",className:"w-full mt-1",value:r.live,onChange:s,children:[e("option",{value:"1",children:"Live"}),e("option",{value:"0",children:"Not Live"})]}),e(i,{message:o.live,className:"mt-2"})]}),l("div",{children:[e(n,{htmlFor:"popular",value:"Popular"}),l(m,{id:"popular",name:"popular",className:"w-full mt-1",value:r.popular,onChange:s,children:[e("option",{value:"1",children:"Popular"}),e("option",{value:"0",children:"Not Popular"})]}),e(i,{message:o.popular,className:"mt-2"})]})]}),l("div",{children:[e(n,{htmlFor:"gallery",value:"Gallery"}),l(m,{showValue:!0,id:"gallery",name:"gallery",className:"w-full mt-1",value:r.gallery,onChange:s,children:[e("option",{value:"",children:"Select a gallery"}),S.map(a=>e("option",{value:a.id,children:a.title},a.id))]}),e(i,{message:o.gallery,className:"mt-2"})]}),l("div",{children:[e(n,{htmlFor:"video_url",value:"Video Url"}),e(p,{id:"video_url",value:r.video_url,onChange:s,type:"text",className:"mt-1 block w-full"}),e(i,{message:o.video_url,className:"mt-2"})]}),e("div",{className:"flex items-center justify-between",children:e(P,{processing:I,recentlySuccessful:k})})]})};export{O as default};