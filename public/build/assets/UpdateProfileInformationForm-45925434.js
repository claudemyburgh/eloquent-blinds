import{q as x,W as k,e as t,j as e,k as N}from"./index.esm-7e288f01.js";import"./Dropdown-b908d338.js";import{I as m}from"./InputError-ca9eea04.js";import{T as n}from"./Textarea-9d55e3c7.js";import{I as l}from"./InputLabel-8c091354.js";import{S as b}from"./SaveSubmitButton-9df393fa.js";import{P as C}from"./Panel-26424cc9.js";import{_ as c}from"./index-c92754bf.js";import{T as d}from"./ToastItem-a5bd6f98.js";import"./PrimaryButton-0cec20dc.js";function D({mustVerifyEmail:f,status:p,className:h=""}){const r=x().props.auth.user,{data:s,setData:o,patch:g,errors:i,processing:v,recentlySuccessful:_}=k({first_name:r.first_name,last_name:r.last_name,email:r.email,phone:r.phone}),y=a=>{a.preventDefault(),g(route("profile.update"),{onSuccess:()=>{c.custom(u=>e(d,{t:u,type:"success",title:"Success",message:"User information successfully updated",icon:"check"}))},onError:()=>{c.custom(u=>e(d,{t:u,type:"error",title:"Error",message:"Something went wrong",icon:"cross"}))}})};return t("section",{className:h,children:[e(C.Header,{heading:"Profile Information",paragraph:"Update your account's profile information and email address."}),t("form",{onSubmit:y,className:"mt-6 space-y-6",children:[t("div",{children:[e(l,{htmlFor:"first_name",value:"First Name"}),e(n,{id:"first_name",className:"mt-1 block w-full",value:s.first_name,onChange:a=>o("first_name",a.target.value),required:!0,isFocused:!0,autoComplete:"first_name"}),e(m,{className:"mt-2",message:i.first_name})]}),t("div",{children:[e(l,{htmlFor:"last_name",value:"Last Name"}),e(n,{id:"last_name",className:"mt-1 block w-full",value:s.last_name,onChange:a=>o("last_name",a.target.value),required:!0,isFocused:!0,autoComplete:"last_name"}),e(m,{className:"mt-2",message:i.last_name})]}),t("div",{children:[e(l,{htmlFor:"email",value:"Email"}),e(n,{id:"email",type:"email",className:"mt-1 block w-full",value:s.email,onChange:a=>o("email",a.target.value),required:!0,autoComplete:"username"}),e(m,{className:"mt-2",message:i.email})]}),t("div",{children:[e(l,{htmlFor:"phone",value:"Phone"}),e(n,{id:"phone",type:"tel",className:"mt-1 block w-full",value:s.phone,onChange:a=>o("phone",a.target.value),autoComplete:"tel"}),e(m,{className:"mt-2",message:i.phone})]}),f&&r.email_verified_at===null&&t("div",{children:[t("p",{className:"text-sm mt-2 text-gray-800 dark:text-gray-200",children:["Your email address is unverified.",e(N,{href:route("verification.send"),method:"post",as:"button",className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Click here to re-send the verification email."})]}),p==="verification-link-sent"&&e("div",{className:"mt-2 font-medium text-sm text-green-600 dark:text-green-400",children:"A new verification link has been sent to your email address."})]}),e(b,{processing:v,recentlySuccessful:_})]})]})}export{D as default};
