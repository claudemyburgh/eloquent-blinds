import{q as l,j as i,b as d,a as e}from"./app-ad7d8609.js";import{A as p,I as c,H as n}from"./AppLayout-d76ed37f.js";import{R as g,r as h}from"./react-markdown-b61149ad.js";import{a as u}from"./helpers-81345a39.js";import{G as f}from"./GradientBorder-232d7c6a.js";import{C as o}from"./CategoryCard-53924ac3.js";import"./ThemeSelector-d94f40b9.js";import"./tw-merge-ff8a1dcb.js";import"./keyboard-825f1b71.js";import"./use-root-containers-1bb08102.js";import"./index-7c7a1668.js";import"./theme-script-be5e800f.js";import"./slugify-34512d66.js";const H=()=>{var s;const{ziggy:m,category:r,descendants:t}=l().props;return i(p,{children:[i(d,{title:"Frequently asked questions",children:[e("link",{rel:"canonical",href:m.location}),e("meta",{name:"description",content:r.description})]}),e("div",{className:"relative wrapper pt-32",children:i("div",{className:"wrapper md:flex md:flex-row-reverse gap-8 md:-mr-2",children:[e("div",{className:"md:w-1/2 mb-12 relative",children:e(f,{className:"overflow-hidden sticky top-24 ",children:e(c,{className:" rounded-lg aspect-4/3 object-cover",src:u((s=r==null?void 0:r.media[0])==null?void 0:s.original_url,"large"),alt:r.title})})}),i("div",{className:"md:w-1/2 space-y-6 md:-ml-2",children:[e(n,{as:"h1",type:"h1",children:r.title}),e(g,{className:"prose prose-lg dark:prose-invert ",children:r.body,remarkPlugins:[h]})]})]})}),i("div",{className:"wrapper my-12 grid grid-cols-2 md:grid-cols-4 gap-6",children:[t&&t.map(a=>e(o,{item:a,url:route("category",a)},a.title)),r.products&&r.products.map(a=>e(o,{item:a,url:route("product",{category:r,product:a})},a.title))]})]})};export{H as default};