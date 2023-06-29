import{r as t,a as e,j as s,q as E,W as F}from"./app-c204392b.js";import{P as g}from"./Panel-5df3bd22.js";import"./Dropdown-4571472e.js";import{I as c}from"./InputError-798f5c80.js";import{T as u,a as T,b as I}from"./SaveSubmitButton-6a8b3789.js";import{I as d}from"./InputLabel-4f490f04.js";import{_ as p}from"./index-7980bbbf.js";import{T as v}from"./ToastItem-f0765873.js";import{$ as M,t as $}from"./tw-merge-0b009063.js";function L({title:a,titleId:l,...m},n){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":l},m),a?t.createElement("title",{id:l},a):null,t.createElement("path",{d:"M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z"}))}const k=t.forwardRef(L),P=k;function B({title:a,titleId:l,...m},n){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":l},m),a?t.createElement("title",{id:l},a):null,t.createElement("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"}))}const D=t.forwardRef(B),H=D,R=({message:a,time:l=3e3})=>{const[m,n]=t.useState(!0);return t.useEffect(()=>{const r=setTimeout(()=>{n(!1)},l);return()=>{clearTimeout(r)}},[m]),e(M,{show:m,enter:"transition-opacity duration-75",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"p-2 rounded-lg bg-emerald-600 shadow-lg sm:p-3 mb-4",children:s("div",{className:"flex items-center justify-between flex-wrap",children:[s("div",{className:"w-0 flex-1 flex items-center",children:[e("span",{className:"flex p-2 rounded-lg bg-emerald-800",children:e(P,{className:"h-6 w-6 text-white","aria-hidden":"true"})}),e("p",{className:"ml-3 font-medium text-white truncate",children:a})]}),e("div",{className:"order-2 flex-shrink-0 sm:order-3 sm:ml-2",children:s("button",{type:"button",onClick:()=>n(!1),className:"-mr-1 flex p-2 rounded-md hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-white",children:[e("span",{className:"sr-only",children:"Dismiss"}),e(H,{className:"h-6 w-6 text-white","aria-hidden":"true"})]})})]})})})},W=({subject:a="",className:l})=>{const{auth:m,flash:n}=E().props;t.useState();function r(h){h.preventDefault(),N({...o,[h.target.name]:h.target.value})}function w(h){h.preventDefault(),b(),C(route("contact.form"),{onSuccess:()=>{_(),p.custom(f=>e(v,{t:f,type:"success",title:"Success",message:"Message successfully send",icon:"check"}))},onError:()=>{p.custom(f=>e(v,{t:f,icon:"cross",type:"error",title:"Error",message:"Something went wrong"}))},preserveState:!0,preserveScroll:!0})}const{data:o,setData:N,processing:y,recentlySuccessful:x,errors:i,clearErrors:b,reset:_,post:C,get:z}=F({first_name:"",last_name:"",email:"",phone:"",message:"",subject:`${(a==null?void 0:a.length)!==0?"Please give me a quote for "+a:""}  `});return s(g,{className:$("my-4 md:my-6 lg:my-8 space-y-4",l),styles:"default",children:[e(g.Header,{heading:`${(a==null?void 0:a.length)===0?"Contact Us":"Get Quote for "+a}`}),n&&e(R,{message:n}),s("form",{onSubmit:w,noValidate:!0,method:"POST",className:"space-y-2",children:[s("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2",children:[s("div",{className:"col-span-2 md:col-span-1",children:[e(d,{htmlFor:"first_name",value:"First Name"}),e(u,{name:"first_name",id:"first_name",value:o.first_name,onChange:r,className:"w-full mt-2"}),e(c,{className:"mt-2",message:i.first_name})]}),s("div",{className:"col-span-2 md:col-span-1",children:[e(d,{htmlFor:"last_name",value:"Last Name"}),e(u,{name:"last_name",id:"last_name",value:o.last_name,onChange:r,className:"w-full mt-2"}),e(c,{className:"mt-2",message:i.last_name})]}),s("div",{className:"col-span-2 md:col-span-1",children:[e(d,{htmlFor:"email",value:"Email"}),e(u,{name:"email",id:"email",type:"email",value:o.email,onChange:r,className:"w-full mt-2"}),e(c,{className:"mt-2",message:i.email})]}),s("div",{className:"col-span-2 md:col-span-1",children:[e(d,{htmlFor:"phone",value:"Phone"}),e(u,{name:"phone",id:"phone",type:"tel",value:o.phone,onChange:r,className:"w-full mt-2"}),e(c,{className:"mt-2",message:i.phone})]}),s("div",{className:"col-span-2",children:[e(d,{htmlFor:"subject",value:"Subject"}),e(u,{name:"subject",id:"subject",type:"text",disabled:(a==null?void 0:a.length)!==0,value:o.subject,onChange:r,className:"w-full mt-2"}),e(c,{className:"mt-2",message:i.subject})]})]}),s("div",{children:[e(d,{htmlFor:"message",value:"Message"}),e(T,{name:"message",id:"message",onChange:r,value:o.message,className:"w-full mt-2 min-h-[175px]"}),e(c,{className:"mt-2",message:i.message})]}),e("div",{children:e(I,{type:"submit",processing:y,recentlySuccessful:x,buttonText:"Send email"})})]})]})};export{W as C};
