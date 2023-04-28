import{r as f,W as N,j as a,a as s}from"./app-a5de80e5.js";import"./Dropdown-22f3848b.js";import{I as c}from"./InputError-c4a68cad.js";import{T as u,b as S}from"./SaveSubmitButton-e403f817.js";import{I as d}from"./InputLabel-8b0d7c01.js";import{P as b}from"./Panel-8498c055.js";import{_ as g}from"./index-54e7524f.js";import{T as _}from"./ToastItem-05bd0cda.js";import"./PrimaryButton-abe169e8.js";function B({className:h=""}){const m=f.useRef(),i=f.useRef(),{data:e,setData:t,errors:n,put:v,reset:p,processing:y,recentlySuccessful:P}=N({current_password:"",password:"",password_confirmation:""}),C=r=>{r.preventDefault(),v(route("password.update"),{preserveScroll:!0,onSuccess:()=>{p(),g.custom(o=>s(_,{t:o,type:"success",title:"Success",message:"Password successfully updated",icon:"check"}))},onError:o=>{var l,w;o.password&&(p("password","password_confirmation"),(l=m.current)==null||l.focus()),o.current_password&&(p("current_password"),(w=i.current)==null||w.focus()),g.custom(I=>s(_,{t:I,type:"error",title:"Error",message:"Something went wrong",icon:"cross"}))}})};return a("section",{className:h,children:[s(b.Header,{heading:"Update Password ",paragraph:"Ensure your account is using a long, random password to stay secure."}),a("form",{onSubmit:C,className:"mt-6 space-y-6",children:[a("div",{children:[s(d,{htmlFor:"current_password",value:"Current Password"}),s(u,{id:"current_password",ref:i,value:e.current_password,onChange:r=>t("current_password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password"}),s(c,{message:n.current_password,className:"mt-2"})]}),a("div",{children:[s(d,{htmlFor:"password",value:"New Password"}),s(u,{id:"password",ref:m,value:e.password,onChange:r=>t("password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s(c,{message:n.password,className:"mt-2"})]}),a("div",{children:[s(d,{htmlFor:"password_confirmation",value:"Confirm Password"}),s(u,{id:"password_confirmation",value:e.password_confirmation,onChange:r=>t("password_confirmation",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s(c,{message:n.password_confirmation,className:"mt-2"})]}),s(S,{processing:y,recentlySuccessful:P})]})]})}export{B as default};