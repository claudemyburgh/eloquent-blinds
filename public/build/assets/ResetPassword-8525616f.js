import{W as w,r as f,j as e,a as s,b as v}from"./app-eaf4554e.js";import{G as h}from"./GuestLayout-e6885725.js";import"./Dropdown-cc143fa1.js";import{I as m}from"./InputError-f3b06719.js";import{T as l}from"./SaveSubmitButton-9cc004ac.js";import{I as i}from"./InputLabel-554eb3d3.js";import{P as g}from"./PrimaryButton-070ec07c.js";import"./ApplicationLogo-0adbd980.js";function E({token:n,email:d}){const{data:r,setData:o,post:p,processing:c,errors:t,reset:u}=w({token:n,email:d,password:"",password_confirmation:""});return f.useEffect(()=>()=>{u("password","password_confirmation")},[]),e(h,{children:[s(v,{title:"Reset Password"}),e("form",{onSubmit:a=>{a.preventDefault(),p(route("password.store"))},children:[e("div",{children:[s(i,{htmlFor:"email",value:"Email"}),s(l,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",onChange:a=>o("email",a.target.value)}),s(m,{message:t.email,className:"mt-2"})]}),e("div",{className:"mt-4",children:[s(i,{htmlFor:"password",value:"Password"}),s(l,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,onChange:a=>o("password",a.target.value)}),s(m,{message:t.password,className:"mt-2"})]}),e("div",{className:"mt-4",children:[s(i,{htmlFor:"password_confirmation",value:"Confirm Password"}),s(l,{type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>o("password_confirmation",a.target.value)}),s(m,{message:t.password_confirmation,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(g,{className:"ml-4",disabled:c,children:"Reset Password"})})]})]})}export{E as default};
