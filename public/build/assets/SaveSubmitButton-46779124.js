import{r as e,a as u,F as m,j as y}from"./app-f24f09fd.js";import{P as p}from"./PrimaryButton-37a8937f.js";import{$ as g}from"./transition-6528a38e.js";const v=e.forwardRef(function({className:n="",isFocused:s=!1,children:o,showValue:f=!1,options:l=[],...c},r){const d=e.useRef(null);return e.useImperativeHandle(r,()=>({focus:()=>{var a;return(a=d.current)==null?void 0:a.focus()}})),e.useEffect(()=>{var a;s&&((a=d.current)==null||a.focus())},[]),u("select",{...c,className:"border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-primary-500 dark:focus:border-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 rounded-md shadow-sm "+n,ref:d,children:o})}),R=e.forwardRef(function({type:n="text",className:s="",isFocused:o=!1,...f},l){const c=e.useRef(null);return e.useImperativeHandle(l,()=>({focus:()=>{var r;return(r=c.current)==null?void 0:r.focus()}})),e.useEffect(()=>{var r;o&&((r=c.current)==null||r.focus())},[]),u("input",{...f,type:n,className:"border-gray-300 dark:border-gray-700 dark:bg-gray-900 text-gray-600 dark:text-gray-300 focus:border-primary-500 dark:focus:border-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 rounded-md shadow-sm "+s,ref:c})}),S=e.forwardRef(function({type:n="text",className:s="",isFocused:o=!1,maxChar:f=1e3,...l},c){var a;const r=e.useRef(null),d=()=>{var t;r.current&&(r.current.style.height="auto",r.current.style.height=((t=r.current)==null?void 0:t.scrollHeight)+15+"px")};return e.useImperativeHandle(c,()=>({focus:()=>{var t;return(t=r.current)==null?void 0:t.focus()}})),e.useEffect(()=>{var t;o&&((t=r.current)==null||t.focus())},[]),e.useEffect(()=>{d()},[(a=r.current)==null?void 0:a.scrollHeight]),u(m,{children:u("textarea",{...l,className:"border-gray-300 dark:border-gray-700 dark:bg-gray-900 text-gray-600 dark:text-gray-300 focus:border-primary-500 dark:focus:border-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 rounded-md shadow-sm "+s,ref:r})})}),x=({processing:i,recentlySuccessful:n,buttonText:s="Save",message:o="Saved.",type:f="submit"})=>y("div",{className:"flex items-center gap-4",children:[u(p,{type:f,disabled:i,children:s}),u(g,{show:n,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:u("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:o})})]}),w=x;export{v as S,R as T,S as a,w as b};
