import{r as f,W as N,j as o,a as s}from"./app-18fda815.js";import"./Dropdown-08afeb4a.js";import{I as c}from"./InputError-b9474739.js";import{T as u,b as S}from"./SaveSubmitButton-4a75f38d.js";import{I as d}from"./InputLabel-a5b7ce03.js";import{P as b}from"./Panel-23aeb3f9.js";import{_ as g}from"./index-84a8a0d9.js";import{T as _}from"./ToastItem-b385a050.js";import"./tw-merge-0022e46f.js";import"./PrimaryButton-0c032296.js";function H({className:h=""}){const m=f.useRef(),i=f.useRef(),{data:e,setData:t,errors:n,put:v,reset:p,processing:y,recentlySuccessful:P}=N({current_password:"",password:"",password_confirmation:""}),C=r=>{r.preventDefault(),v(route("password.update"),{preserveScroll:!0,onSuccess:()=>{p(),g.custom(a=>s(_,{t:a,type:"success",title:"Success",message:"Password successfully updated",icon:"check"}))},onError:a=>{var l,w;a.password&&(p("password","password_confirmation"),(l=m.current)==null||l.focus()),a.current_password&&(p("current_password"),(w=i.current)==null||w.focus()),g.custom(I=>s(_,{t:I,type:"error",title:"Error",message:"Something went wrong",icon:"cross"}))}})};return o("section",{className:h,children:[s(b.Header,{heading:"Update Password ",paragraph:"Ensure your account is using a long, random password to stay secure."}),o("form",{onSubmit:C,className:"mt-6 space-y-6",children:[o("div",{children:[s(d,{htmlFor:"current_password",value:"Current Password"}),s(u,{id:"current_password",ref:i,value:e.current_password,onChange:r=>t("current_password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password"}),s(c,{message:n.current_password,className:"mt-2"})]}),o("div",{children:[s(d,{htmlFor:"password",value:"New Password"}),s(u,{id:"password",ref:m,value:e.password,onChange:r=>t("password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s(c,{message:n.password,className:"mt-2"})]}),o("div",{children:[s(d,{htmlFor:"password_confirmation",value:"Confirm Password"}),s(u,{id:"password_confirmation",value:e.password_confirmation,onChange:r=>t("password_confirmation",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s(c,{message:n.password_confirmation,className:"mt-2"})]}),s(S,{processing:y,recentlySuccessful:P})]})]})}export{H as default};