import{s as o}from"./slugify-60143bb7.js";function i(t){return t.replace(/[_-]/g," ")}function c(t){return t.replace(/\?.+/,"")}function f(t){return(t==null?void 0:t.charAt((t==null?void 0:t.length)-1))==" "?t:o(t,{lower:!0})}function u(t){let s=["B","KB","MB","GB","TB"],n=t,r;for(r=0;n>=1024&&r<4;r++)n/=1024;return n.toFixed(2)+s[r]}function B(...t){return t.filter(Boolean).join(" ")}export{B as a,u as b,c,f as s,i as u};
