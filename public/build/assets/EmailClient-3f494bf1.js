import{q as S,W as v,b as a,f as o}from"./index.esm-7a096b41.js";import{P as x}from"./Panel-992ea771.js";import"./Dropdown-4011b9d6.js";import{I as y}from"./InputError-966f87fc.js";import{a as I}from"./Textarea-5e5e0f35.js";import{I as E}from"./InputLabel-24e51369.js";import{S as M}from"./SaveSubmitButton-32ef56ad.js";import{a as j,R as C}from"./app-82fe7624.js";const O=j({key:"model_close",default:!1}),D=({user:t,subject:m,parent:l,...n})=>{const{auth:s}=S().props,[N,i]=C(O),{data:r,setData:u,processing:c,recentlySuccessful:p,errors:d,clearErrors:f,reset:g,post:b}=v({name:t.name,email:t.email,parent_id:l,subject:m,message:"",user_id:s.user.id,from:{name:s.user.name,email:s.user.email}});function _(e){e.preventDefault(),u({...r,[e.target.name]:e.target.value})}function h(e){e.preventDefault(),f(),b(route("dashboard.email.send"),{onSuccess:()=>{g(),i(!1)},preserveScroll:!0})}return a(x,{...n,children:o("form",{className:"space-y-6",onSubmit:h,children:[o("div",{children:[a(E,{htmlFor:"message",value:"Message"}),a(I,{id:"message",name:"message",value:r.message,onChange:_,className:"mt-1 block w-full min-h-[300px] disabled:opacity-50"}),a(y,{message:d.message,className:"mt-2"})]}),a(M,{type:"submit",processing:c,recentlySuccessful:p,buttonText:"Send email"})]})})},B=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));export{D as E,O as M,B as a};