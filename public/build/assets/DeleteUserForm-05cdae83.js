import{r as c,W as x,j as r,a as e}from"./app-c8db7f33.js";import{D as d}from"./DangerButton-f6582440.js";import{M as D,S as N}from"./Modal-863ac981.js";import"./Dropdown-08f428cb.js";import{I as v}from"./InputError-b729c2e0.js";import{T as b}from"./SaveSubmitButton-33d6adf0.js";import{I as k}from"./InputLabel-8faeeb2b.js";import{P as C}from"./Panel-ff3e6bfc.js";import"./tw-merge-5972549c.js";import"./keyboard-be622d60.js";import"./use-root-containers-d6786255.js";import"./PrimaryButton-f229f3ea.js";function H({className:i=""}){const[m,s]=c.useState(!1),a=c.useRef(),{data:u,setData:p,delete:f,processing:y,reset:n,errors:h}=x({password:""}),w=()=>{s(!0)},g=o=>{o.preventDefault(),f(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>t(),onError:()=>{var l;return(l=a.current)==null?void 0:l.focus()},onFinish:()=>n()})},t=()=>{s(!1),n()};return r("section",{className:`space-y-6 ${i}`,children:[e(C.Header,{heading:"Delete Account",paragraph:`Once your account is deleted, all of its resources and data will be permanently deleted. Before
                    deleting your account, please download any data or information that you wish to retain.`}),e(d,{onClick:w,children:"Delete Account"}),e(D,{show:m,onClose:t,children:r("form",{onSubmit:g,className:"p-6",children:[e("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Are you sure you want to delete your account?"}),e("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),r("div",{className:"mt-6",children:[e(k,{htmlFor:"password",value:"Password",className:"sr-only"}),e(b,{id:"password",type:"password",name:"password",ref:a,value:u.password,onChange:o=>p("password",o.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),e(v,{message:h.password,className:"mt-2"})]}),r("div",{className:"mt-6 flex justify-end",children:[e(N,{onClick:t,children:"Cancel"}),e(d,{className:"ml-3",disabled:y,children:"Delete Account"})]})]})})]})}export{H as default};