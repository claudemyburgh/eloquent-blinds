import{s as o}from"./slugify-7ae98c14.js";function c(t){return t.replace(/[_-]/g," ")}function e(t){return t.replace(/\?.+/,"")}function f(t){return(t==null?void 0:t.charAt((t==null?void 0:t.length)-1))==" "?t:o(t,{lower:!0})}function g(t){let s=["B","KB","MB","GB","TB"],n=t,r;for(r=0;n>=1024&&r<4;r++)n/=1024;return n.toFixed(2)+s[r]}export{g as b,e as c,f as s,c as u};
