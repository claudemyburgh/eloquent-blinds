import{r as M,a as r,j as w,q as ye,W as we}from"./app-ad7d8609.js";import{P as J}from"./Panel-7fe58679.js";import"./Dropdown-422750d4.js";import{I as k}from"./InputError-8b129f39.js";import{T as L,a as be,b as Me}from"./SaveSubmitButton-8a3d374e.js";import{I as P}from"./InputLabel-f677de27.js";import{_ as K}from"./index-7c7a1668.js";import{T as ee}from"./ToastItem-77c5f860.js";import{$ as Ne,t as Ce}from"./tw-merge-ff8a1dcb.js";function Te({title:h,titleId:d,...v},p){return M.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:p,"aria-labelledby":d},v),h?M.createElement("title",{id:d},h):null,M.createElement("path",{d:"M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z"}))}const xe=M.forwardRef(Te),Ie=xe;function Fe({title:h,titleId:d,...v},p){return M.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:p,"aria-labelledby":d},v),h?M.createElement("title",{id:d},h):null,M.createElement("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"}))}const Ee=M.forwardRef(Fe),ke=Ee,Pe=({message:h,time:d=3e3})=>{const[v,p]=M.useState(!0);return M.useEffect(()=>{const g=setTimeout(()=>{p(!1)},d);return()=>{clearTimeout(g)}},[v]),r(Ne,{show:v,enter:"transition-opacity duration-75",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:r("div",{className:"p-2 rounded-lg bg-emerald-600 shadow-lg sm:p-3 mb-4",children:w("div",{className:"flex items-center justify-between flex-wrap",children:[w("div",{className:"w-0 flex-1 flex items-center",children:[r("span",{className:"flex p-2 rounded-lg bg-emerald-800",children:r(Ie,{className:"h-6 w-6 text-white","aria-hidden":"true"})}),r("p",{className:"ml-3 font-medium text-white truncate",children:h})]}),r("div",{className:"order-2 flex-shrink-0 sm:order-3 sm:ml-2",children:w("button",{type:"button",onClick:()=>p(!1),className:"-mr-1 flex p-2 rounded-md hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-white",children:[r("span",{className:"sr-only",children:"Dismiss"}),r(ke,{className:"h-6 w-6 text-white","aria-hidden":"true"})]})})]})})})};var X={};(function h(d,v,p,g){var _=!!(d.Worker&&d.Blob&&d.Promise&&d.OffscreenCanvas&&d.OffscreenCanvasRenderingContext2D&&d.HTMLCanvasElement&&d.HTMLCanvasElement.prototype.transferControlToOffscreen&&d.URL&&d.URL.createObjectURL);function N(){}function R(a){var e=v.exports.Promise,l=e!==void 0?e:d.Promise;return typeof l=="function"?new l(a):(a(N,N),null)}var S=function(){var a=Math.floor(16.666666666666668),e,l,n={},o=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(i){var t=Math.random();return n[t]=requestAnimationFrame(function s(u){o===u||o+a-1<u?(o=u,delete n[t],i()):n[t]=requestAnimationFrame(s)}),t},l=function(i){n[i]&&cancelAnimationFrame(n[i])}):(e=function(i){return setTimeout(i,a)},l=function(i){return clearTimeout(i)}),{frame:e,cancel:l}}(),A=function(){var a,e,l={};function n(o){function i(t,s){o.postMessage({options:t||{},callback:s})}o.init=function(s){var u=s.transferControlToOffscreen();o.postMessage({canvas:u},[u])},o.fire=function(s,u,C){if(e)return i(s,null),e;var c=Math.random().toString(36).slice(2);return e=R(function(b){function y(m){m.data.callback===c&&(delete l[c],o.removeEventListener("message",y),e=null,C(),b())}o.addEventListener("message",y),i(s,c),l[c]=y.bind(null,{data:{callback:c}})}),e},o.reset=function(){o.postMessage({reset:!0});for(var s in l)l[s](),delete l[s]}}return function(){if(a)return a;if(!p&&_){var o=["var CONFETTI, SIZE = {}, module = {};","("+h.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{a=new Worker(URL.createObjectURL(new Blob([o])))}catch(i){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",i),null}n(a)}return a}}(),T={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function W(a,e){return e?e(a):a}function z(a){return a!=null}function f(a,e,l){return W(a&&z(a[e])?a[e]:T[e],l)}function $(a){return a<0?0:Math.floor(a)}function x(a,e){return Math.floor(Math.random()*(e-a))+a}function I(a){return parseInt(a,16)}function ae(a){return a.map(re)}function re(a){var e=String(a).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:I(e.substring(0,2)),g:I(e.substring(2,4)),b:I(e.substring(4,6))}}function ne(a){var e=f(a,"origin",Object);return e.x=f(e,"x",Number),e.y=f(e,"y",Number),e}function te(a){a.width=document.documentElement.clientWidth,a.height=document.documentElement.clientHeight}function se(a){var e=a.getBoundingClientRect();a.width=e.width,a.height=e.height}function le(a){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=a,e}function ie(a,e,l,n,o,i,t,s,u){a.save(),a.translate(e,l),a.rotate(i),a.scale(n,o),a.arc(0,0,1,t,s,u),a.restore()}function oe(a){var e=a.angle*(Math.PI/180),l=a.spread*(Math.PI/180);return{x:a.x,y:a.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:a.startVelocity*.5+Math.random()*a.startVelocity,angle2D:-e+(.5*l-Math.random()*l),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:a.color,shape:a.shape,tick:0,totalTicks:a.ticks,decay:a.decay,drift:a.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:a.gravity*3,ovalScalar:.6,scalar:a.scalar}}function ce(a,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=e.wobbleSpeed,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble);var l=e.tick++/e.totalTicks,n=e.x+e.random*e.tiltCos,o=e.y+e.random*e.tiltSin,i=e.wobbleX+e.random*e.tiltCos,t=e.wobbleY+e.random*e.tiltSin;if(a.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-l)+")",a.beginPath(),e.shape==="circle")a.ellipse?a.ellipse(e.x,e.y,Math.abs(i-n)*e.ovalScalar,Math.abs(t-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):ie(a,e.x,e.y,Math.abs(i-n)*e.ovalScalar,Math.abs(t-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var s=Math.PI/2*3,u=4*e.scalar,C=8*e.scalar,c=e.x,b=e.y,y=5,m=Math.PI/y;y--;)c=e.x+Math.cos(s)*C,b=e.y+Math.sin(s)*C,a.lineTo(c,b),s+=m,c=e.x+Math.cos(s)*u,b=e.y+Math.sin(s)*u,a.lineTo(c,b),s+=m;else a.moveTo(Math.floor(e.x),Math.floor(e.y)),a.lineTo(Math.floor(e.wobbleX),Math.floor(o)),a.lineTo(Math.floor(i),Math.floor(t)),a.lineTo(Math.floor(n),Math.floor(e.wobbleY));return a.closePath(),a.fill(),e.tick<e.totalTicks}function me(a,e,l,n,o){var i=e.slice(),t=a.getContext("2d"),s,u,C=R(function(c){function b(){s=u=null,t.clearRect(0,0,n.width,n.height),o(),c()}function y(){p&&!(n.width===g.width&&n.height===g.height)&&(n.width=a.width=g.width,n.height=a.height=g.height),!n.width&&!n.height&&(l(a),n.width=a.width,n.height=a.height),t.clearRect(0,0,n.width,n.height),i=i.filter(function(m){return ce(t,m)}),i.length?s=S.frame(y):b()}s=S.frame(y),u=b});return{addFettis:function(c){return i=i.concat(c),C},canvas:a,promise:C,reset:function(){s&&S.cancel(s),u&&u()}}}function q(a,e){var l=!a,n=!!f(e||{},"resize"),o=f(e,"disableForReducedMotion",Boolean),i=_&&!!f(e||{},"useWorker"),t=i?A():null,s=l?te:se,u=a&&t?!!a.__confetti_initialized:!1,C=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,c;function b(m,U,V){for(var E=f(m,"particleCount",$),O=f(m,"angle",Number),D=f(m,"spread",Number),F=f(m,"startVelocity",Number),de=f(m,"decay",Number),ue=f(m,"gravity",Number),he=f(m,"drift",Number),Y=f(m,"colors",ae),fe=f(m,"ticks",Number),j=f(m,"shapes"),ge=f(m,"scalar"),G=ne(m),Q=E,H=[],ve=a.width*G.x,pe=a.height*G.y;Q--;)H.push(oe({x:ve,y:pe,angle:O,spread:D,startVelocity:F,color:Y[Q%Y.length],shape:j[x(0,j.length)],ticks:fe,decay:de,gravity:ue,drift:he,scalar:ge}));return c?c.addFettis(H):(c=me(a,H,s,U,V),c.promise)}function y(m){var U=o||f(m,"disableForReducedMotion",Boolean),V=f(m,"zIndex",Number);if(U&&C)return R(function(F){F()});l&&c?a=c.canvas:l&&!a&&(a=le(V),document.body.appendChild(a)),n&&!u&&s(a);var E={width:a.width,height:a.height};t&&!u&&t.init(a),u=!0,t&&(a.__confetti_initialized=!0);function O(){if(t){var F={getBoundingClientRect:function(){if(!l)return a.getBoundingClientRect()}};s(F),t.postMessage({resize:{width:F.width,height:F.height}});return}E.width=E.height=null}function D(){c=null,n&&d.removeEventListener("resize",O),l&&a&&(document.body.removeChild(a),a=null,u=!1)}return n&&d.addEventListener("resize",O,!1),t?t.fire(m,E,D):b(m,E,D)}return y.reset=function(){t&&t.reset(),c&&c.reset()},y}var B;function Z(){return B||(B=q(null,{useWorker:!0,resize:!0})),B}v.exports=function(){return Z().apply(this,arguments)},v.exports.reset=function(){Z().reset()},v.exports.create=q})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),X,!1);const Re=X.exports;X.exports.create;const Ue=({subject:h="",className:d})=>{const{auth:v,flash:p}=ye().props;M.useState();function g(x){x.preventDefault(),R({...N,[x.target.name]:x.target.value})}function _(x){x.preventDefault(),W(),f(route("contact.form"),{onSuccess:()=>{z(),K.custom(I=>r(ee,{t:I,type:"success",title:"Success",message:"Message successfully send",icon:"check"})),Re({particleCount:200,spread:220,origin:{y:.4},gravity:2,colors:["#5eead4","#2dd4bf","#0284c7","#22d3ee"]})},onError:()=>{K.custom(I=>r(ee,{t:I,icon:"cross",type:"error",title:"Error",message:"Something went wrong"}))},preserveState:!0,preserveScroll:!0})}const{data:N,setData:R,processing:S,recentlySuccessful:A,errors:T,clearErrors:W,reset:z,post:f,get:$}=we({first_name:"",last_name:"",email:"",phone:"",message:"",subject:`${(h==null?void 0:h.length)!==0?"Please give me a quote for "+h:""}  `});return w(J,{className:Ce("my-4 md:my-6 lg:my-8 space-y-4",d),styles:"default",children:[r(J.Header,{heading:`${(h==null?void 0:h.length)===0?"Contact Us":"Get Quote for "+h}`}),p&&r(Pe,{message:p}),w("form",{onSubmit:_,noValidate:!0,method:"POST",className:"space-y-2",children:[w("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2",children:[w("div",{className:"col-span-2 md:col-span-1",children:[r(P,{htmlFor:"first_name",value:"First Name"}),r(L,{name:"first_name",id:"first_name",value:N.first_name,onChange:g,className:"w-full mt-2"}),r(k,{className:"mt-2",message:T.first_name})]}),w("div",{className:"col-span-2 md:col-span-1",children:[r(P,{htmlFor:"last_name",value:"Last Name"}),r(L,{name:"last_name",id:"last_name",value:N.last_name,onChange:g,className:"w-full mt-2"}),r(k,{className:"mt-2",message:T.last_name})]}),w("div",{className:"col-span-2 md:col-span-1",children:[r(P,{htmlFor:"email",value:"Email"}),r(L,{name:"email",id:"email",type:"email",value:N.email,onChange:g,className:"w-full mt-2"}),r(k,{className:"mt-2",message:T.email})]}),w("div",{className:"col-span-2 md:col-span-1",children:[r(P,{htmlFor:"phone",value:"Phone"}),r(L,{name:"phone",id:"phone",type:"tel",value:N.phone,onChange:g,className:"w-full mt-2"}),r(k,{className:"mt-2",message:T.phone})]}),w("div",{className:"col-span-2",children:[r(P,{htmlFor:"subject",value:"Subject"}),r(L,{name:"subject",id:"subject",type:"text",disabled:(h==null?void 0:h.length)!==0,value:N.subject,onChange:g,className:"w-full mt-2"}),r(k,{className:"mt-2",message:T.subject})]})]}),w("div",{children:[r(P,{htmlFor:"message",value:"Message"}),r(be,{name:"message",id:"message",onChange:g,value:N.message,className:"w-full mt-2 min-h-[175px]"}),r(k,{className:"mt-2",message:T.message})]}),r("div",{children:r(Me,{type:"submit",processing:S,recentlySuccessful:A,buttonText:"Send email"})})]})]})};export{Ue as C};