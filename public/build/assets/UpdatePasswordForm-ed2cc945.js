import{d as f,W as I,e as o,j as s}from"./index.esm-48297038.js";import"./Dropdown-2033e0d4.js";import{I as c}from"./InputError-b09f672a.js";import{T as u}from"./Textarea-c85e137e.js";import{I as d}from"./InputLabel-69e9285d.js";import{S as N}from"./SaveSubmitButton-0182dd6a.js";import{P as b}from"./Panel-e12bf16d.js";import{_ as g}from"./index-7f4f57d2.js";import{T as _}from"./ToastItem-f7da6358.js";import"./transition-e0e80a29.js";import"./PrimaryButton-037916a7.js";function L({className:h=""}){const m=f.useRef(),i=f.useRef(),{data:e,setData:t,errors:n,put:v,reset:p,processing:y,recentlySuccessful:P}=I({current_password:"",password:"",password_confirmation:""}),S=r=>{r.preventDefault(),v(route("password.update"),{preserveScroll:!0,onSuccess:()=>{p(),g.custom(a=>s(_,{t:a,type:"success",title:"Success",message:"Password successfully updated",icon:"check"}))},onError:a=>{var l,w;a.password&&(p("password","password_confirmation"),(l=m.current)==null||l.focus()),a.current_password&&(p("current_password"),(w=i.current)==null||w.focus()),g.custom(C=>s(_,{t:C,type:"error",title:"Error",message:"Something went wrong",icon:"cross"}))}})};return o("section",{className:h,children:[s(b.Header,{heading:"Update Password ",paragraph:"Ensure your account is using a long, random password to stay secure."}),o("form",{onSubmit:S,className:"mt-6 space-y-6",children:[o("div",{children:[s(d,{htmlFor:"current_password",value:"Current Password"}),s(u,{id:"current_password",ref:i,value:e.current_password,onChange:r=>t("current_password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password"}),s(c,{message:n.current_password,className:"mt-2"})]}),o("div",{children:[s(d,{htmlFor:"password",value:"New Password"}),s(u,{id:"password",ref:m,value:e.password,onChange:r=>t("password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s(c,{message:n.password,className:"mt-2"})]}),o("div",{children:[s(d,{htmlFor:"password_confirmation",value:"Confirm Password"}),s(u,{id:"password_confirmation",value:e.password_confirmation,onChange:r=>t("password_confirmation",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s(c,{message:n.password_confirmation,className:"mt-2"})]}),s(N,{processing:y,recentlySuccessful:P})]})]})}export{L as default};
