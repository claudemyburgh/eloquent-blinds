import{W as f,r as g,j as a,a as e,b as h,d as x}from"./app-eaf4554e.js";import{C as b}from"./Checkbox-a68d8d7a.js";import"./Dropdown-cc143fa1.js";import{I as l}from"./InputError-f3b06719.js";import{T as i}from"./SaveSubmitButton-9cc004ac.js";import{I as n}from"./InputLabel-554eb3d3.js";import{G as w}from"./GuestLayout-e6885725.js";import{P as v}from"./PrimaryButton-070ec07c.js";import"./ApplicationLogo-0adbd980.js";function D({status:m,canResetPassword:d}){const{data:s,setData:t,post:c,processing:u,errors:o,reset:p}=f({email:"",password:"",remember:!1});return g.useEffect(()=>()=>{p("password")},[]),a(w,{children:[e(h,{title:"Log in"}),m&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:m}),a("form",{onSubmit:r=>{r.preventDefault(),c(route("login"))},children:[a("div",{children:[e(n,{htmlFor:"email",value:"Email"}),e(i,{id:"email",type:"email",name:"email",value:s.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:r=>t("email",r.target.value)}),e(l,{message:o.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(n,{htmlFor:"password",value:"Password"}),e(i,{id:"password",type:"password",name:"password",value:s.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:r=>t("password",r.target.value)}),e(l,{message:o.password,className:"mt-2"})]}),e("div",{className:"block mt-4",children:a("label",{className:"flex items-center",children:[e(b,{name:"remember",checked:s.remember,onChange:r=>t("remember",r.target.checked)}),e("span",{className:"ml-2 text-sm text-gray-600 dark:text-gray-400",children:"Remember me"})]})}),a("div",{className:"flex items-center justify-end mt-4",children:[d&&e(x,{href:route("password.request"),className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Forgot your password?"}),e(v,{className:"ml-4",disabled:u,children:"Log in"})]})]})]})}export{D as default};
