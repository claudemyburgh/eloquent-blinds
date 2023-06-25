import{q as i,j as a,a as e,b as s,d as l}from"./app-9b4777dd.js";import{A as o}from"./AppLayout-440e9b3c.js";import"./ThemeSelector-fad8d4ba.js";import"./tw-merge-dbdd30c1.js";import"./keyboard-f645c49a.js";import"./use-root-containers-3a9a3256.js";import"./index-fcd3af88.js";import"./theme-script-be5e800f.js";const g=()=>{const{ziggy:t,faqs:d}=i().props;return a(o,{children:[e(s,{title:"FAQ's",children:e("link",{rel:"canonical",href:t.location})}),e("div",{className:"relative wrapper pt-40",children:a("div",{className:"grid md:grid-cols-2 md:divide-x md:divide-dashed md:divide-gray-800",children:[e("div",{className:"relative md:pr-6",children:a("header",{className:"md:sticky top-32",children:[e("h2",{className:"text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl",children:"Frequently asked questions"}),a("p",{className:"mt-6 text-lg leading-8 text-gray-500 dark:text-gray-300",children:["Questions. Frequently asked ones. Plus our answers. That's how FAQs work. If you can't find what you're looking for, you can always"," ",e(l,{href:route("quote"),className:"font-medium  text-primary-600 hover:text-primary-500",children:"send us an email"})," ","with your enquiry."]})]})}),e("section",{className:"md:pl-6",children:e("dl",{className:"sm:mt-16 divide-y divide-solid divide-gray-900/10 dark:divide-gray-500/10",children:d.map(r=>a("div",{className:"py-8",children:[e("dt",{className:"text-xl font-medium text-gray-900 dark:text-gray-100",children:r.question}),e("dd",{className:"mt-3 text-lg text-gray-500 dark:text-gray-400",children:r.answer})]},r.id))})})]})})]})};export{g as default};