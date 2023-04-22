import{r as f,W as C,j as a,a as s}from"./app-eaf4554e.js";import"./Dropdown-cc143fa1.js";import{I as p}from"./InputError-f3b06719.js";import{T as d,b as N}from"./SaveSubmitButton-9cc004ac.js";import{I as u}from"./InputLabel-554eb3d3.js";import{P as b}from"./Panel-fc6ef8eb.js";import"./PrimaryButton-070ec07c.js";function k({className:v=""}){const c=f.useRef(),m=f.useRef(),{data:o,setData:e,errors:t,put:_,reset:n,processing:g,recentlySuccessful:h}=C({current_password:"",password:"",password_confirmation:""}),P=r=>{r.preventDefault(),_(route("password.update"),{preserveScroll:!0,onSuccess:()=>n(),onError:l=>{var w,i;l.password&&(n("password","password_confirmation"),(w=c.current)==null||w.focus()),l.current_password&&(n("current_password"),(i=m.current)==null||i.focus())}})};return a("section",{className:v,children:[s(b.Header,{heading:"Update Password ",paragraph:"Ensure your account is using a long, random password to stay secure."}),a("form",{onSubmit:P,className:"mt-6 space-y-6",children:[a("div",{children:[s(u,{htmlFor:"current_password",value:"Current Password"}),s(d,{id:"current_password",ref:m,value:o.current_password,onChange:r=>e("current_password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password"}),s(p,{message:t.current_password,className:"mt-2"})]}),a("div",{children:[s(u,{htmlFor:"password",value:"New Password"}),s(d,{id:"password",ref:c,value:o.password,onChange:r=>e("password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s(p,{message:t.password,className:"mt-2"})]}),a("div",{children:[s(u,{htmlFor:"password_confirmation",value:"Confirm Password"}),s(d,{id:"password_confirmation",value:o.password_confirmation,onChange:r=>e("password_confirmation",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s(p,{message:t.password_confirmation,className:"mt-2"})]}),s(N,{processing:g,recentlySuccessful:h})]})]})}export{k as default};
