import{W as n,j as s,a as e,b as d}from"./app-f24f09fd.js";import{G as u}from"./GuestLayout-6a92862d.js";import"./Dropdown-bdb94638.js";import{I as c}from"./InputError-09bff660.js";import{T as p}from"./SaveSubmitButton-46779124.js";import{P as f}from"./PrimaryButton-37a8937f.js";import"./ApplicationLogo-ae069d1f.js";import"./transition-6528a38e.js";function P({status:a}){const{data:r,setData:o,post:m,processing:i,errors:l}=n({email:""});return s(u,{children:[e(d,{title:"Forgot Password"}),e("div",{className:"mb-4 text-sm text-gray-600 dark:text-gray-400",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),a&&e("div",{className:"mb-4 font-medium text-sm text-green-600 dark:text-green-400",children:a}),s("form",{onSubmit:t=>{t.preventDefault(),m(route("password.email"))},children:[e(p,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",isFocused:!0,onChange:t=>o("email",t.target.value)}),e(c,{message:l.email,className:"mt-2"}),e("div",{className:"flex items-center justify-end mt-4",children:e(f,{className:"ml-4",disabled:i,children:"Email Password Reset Link"})})]})]})}export{P as default};
