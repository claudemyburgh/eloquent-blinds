import{c as v,q as S,R as x,W as y,a,j as o}from"./app-9d94defa.js";import{P as I}from"./Panel-c09cfa2c.js";import"./Dropdown-38394ce3.js";import{I as j}from"./InputError-64f48983.js";import{a as E,b as M}from"./SaveSubmitButton-036062f9.js";import{I as C}from"./InputLabel-620dab0f.js";const O=v({key:"model_close",default:!1}),D=({user:t,subject:l,parent:n,...m})=>{const{auth:s}=S().props,[N,i]=x(O),{data:r,setData:u,processing:c,recentlySuccessful:p,errors:d,clearErrors:f,reset:g,post:b}=y({name:t.name,email:t.email,parent_id:n,subject:l,message:"",user_id:s.user.id,from:{name:s.user.name,email:s.user.email}});function _(e){e.preventDefault(),u({...r,[e.target.name]:e.target.value})}function h(e){e.preventDefault(),f(),b(route("dashboard.email.send"),{onSuccess:()=>{g(),i(!1)},preserveScroll:!0})}return a(I,{...m,children:o("form",{className:"space-y-6",onSubmit:h,children:[o("div",{children:[a(C,{htmlFor:"message",value:"Message"}),a(E,{id:"message",name:"message",value:r.message,onChange:_,className:"mt-1 block w-full min-h-[300px] disabled:opacity-50"}),a(j,{message:d.message,className:"mt-2"})]}),a(M,{type:"submit",processing:c,recentlySuccessful:p,buttonText:"Send email"})]})})},w=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));export{D as E,O as M,w as a};