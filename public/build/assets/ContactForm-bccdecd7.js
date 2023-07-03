import{r as b,a as r,j as y,q as ye,W as we}from"./app-646ce15b.js";import{P as J}from"./Panel-34a1c04d.js";import"./Dropdown-f66a869d.js";import{I as E}from"./InputError-8418d26b.js";import{T as L,a as be,b as Me}from"./SaveSubmitButton-398038ff.js";import{I as k}from"./InputLabel-f9689e24.js";import{_ as K}from"./index-8a759e0e.js";import{T as ee}from"./ToastItem-889d111d.js";import{$ as Ne,t as Ce}from"./tw-merge-368bf7ec.js";function Te({title:h,titleId:d,...v},g){return b.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:g,"aria-labelledby":d},v),h?b.createElement("title",{id:d},h):null,b.createElement("path",{d:"M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z"}))}const xe=b.forwardRef(Te),Ie=xe;function Fe({title:h,titleId:d,...v},g){return b.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:g,"aria-labelledby":d},v),h?b.createElement("title",{id:d},h):null,b.createElement("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"}))}const Ee=b.forwardRef(Fe),ke=Ee,Pe=({message:h,time:d=3e3})=>{const[v,g]=b.useState(!0);return b.useEffect(()=>{const C=setTimeout(()=>{g(!1)},d);return()=>{clearTimeout(C)}},[v]),r(Ne,{show:v,enter:"transition-opacity duration-75",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:r("div",{className:"p-2 rounded-lg bg-emerald-600 shadow-lg sm:p-3 mb-4",children:y("div",{className:"flex items-center justify-between flex-wrap",children:[y("div",{className:"w-0 flex-1 flex items-center",children:[r("span",{className:"flex p-2 rounded-lg bg-emerald-800",children:r(Ie,{className:"h-6 w-6 text-white","aria-hidden":"true"})}),r("p",{className:"ml-3 font-medium text-white truncate",children:h})]}),r("div",{className:"order-2 flex-shrink-0 sm:order-3 sm:ml-2",children:y("button",{type:"button",onClick:()=>g(!1),className:"-mr-1 flex p-2 rounded-md hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-white",children:[r("span",{className:"sr-only",children:"Dismiss"}),r(ke,{className:"h-6 w-6 text-white","aria-hidden":"true"})]})})]})})})};var $={};(function h(d,v,g,C){var M=!!(d.Worker&&d.Blob&&d.Promise&&d.OffscreenCanvas&&d.OffscreenCanvasRenderingContext2D&&d.HTMLCanvasElement&&d.HTMLCanvasElement.prototype.transferControlToOffscreen&&d.URL&&d.URL.createObjectURL);function _(){}function P(a){var e=v.exports.Promise,l=e!==void 0?e:d.Promise;return typeof l=="function"?new l(a):(a(_,_),null)}var R=function(){var a=Math.floor(16.666666666666668),e,l,n={},o=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(i){var t=Math.random();return n[t]=requestAnimationFrame(function s(u){o===u||o+a-1<u?(o=u,delete n[t],i()):n[t]=requestAnimationFrame(s)}),t},l=function(i){n[i]&&cancelAnimationFrame(n[i])}):(e=function(i){return setTimeout(i,a)},l=function(i){return clearTimeout(i)}),{frame:e,cancel:l}}(),T=function(){var a,e,l={};function n(o){function i(t,s){o.postMessage({options:t||{},callback:s})}o.init=function(s){var u=s.transferControlToOffscreen();o.postMessage({canvas:u},[u])},o.fire=function(s,u,N){if(e)return i(s,null),e;var c=Math.random().toString(36).slice(2);return e=P(function(w){function p(m){m.data.callback===c&&(delete l[c],o.removeEventListener("message",p),e=null,N(),w())}o.addEventListener("message",p),i(s,c),l[c]=p.bind(null,{data:{callback:c}})}),e},o.reset=function(){o.postMessage({reset:!0});for(var s in l)l[s](),delete l[s]}}return function(){if(a)return a;if(!g&&M){var o=["var CONFETTI, SIZE = {}, module = {};","("+h.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{a=new Worker(URL.createObjectURL(new Blob([o])))}catch(i){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",i),null}n(a)}return a}}(),A={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function W(a,e){return e?e(a):a}function z(a){return a!=null}function f(a,e,l){return W(a&&z(a[e])?a[e]:A[e],l)}function x(a){return a<0?0:Math.floor(a)}function S(a,e){return Math.floor(Math.random()*(e-a))+a}function B(a){return parseInt(a,16)}function ae(a){return a.map(re)}function re(a){var e=String(a).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:B(e.substring(0,2)),g:B(e.substring(2,4)),b:B(e.substring(4,6))}}function ne(a){var e=f(a,"origin",Object);return e.x=f(e,"x",Number),e.y=f(e,"y",Number),e}function te(a){a.width=document.documentElement.clientWidth,a.height=document.documentElement.clientHeight}function se(a){var e=a.getBoundingClientRect();a.width=e.width,a.height=e.height}function le(a){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=a,e}function ie(a,e,l,n,o,i,t,s,u){a.save(),a.translate(e,l),a.rotate(i),a.scale(n,o),a.arc(0,0,1,t,s,u),a.restore()}function oe(a){var e=a.angle*(Math.PI/180),l=a.spread*(Math.PI/180);return{x:a.x,y:a.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:a.startVelocity*.5+Math.random()*a.startVelocity,angle2D:-e+(.5*l-Math.random()*l),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:a.color,shape:a.shape,tick:0,totalTicks:a.ticks,decay:a.decay,drift:a.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:a.gravity*3,ovalScalar:.6,scalar:a.scalar}}function ce(a,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=e.wobbleSpeed,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble);var l=e.tick++/e.totalTicks,n=e.x+e.random*e.tiltCos,o=e.y+e.random*e.tiltSin,i=e.wobbleX+e.random*e.tiltCos,t=e.wobbleY+e.random*e.tiltSin;if(a.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-l)+")",a.beginPath(),e.shape==="circle")a.ellipse?a.ellipse(e.x,e.y,Math.abs(i-n)*e.ovalScalar,Math.abs(t-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):ie(a,e.x,e.y,Math.abs(i-n)*e.ovalScalar,Math.abs(t-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var s=Math.PI/2*3,u=4*e.scalar,N=8*e.scalar,c=e.x,w=e.y,p=5,m=Math.PI/p;p--;)c=e.x+Math.cos(s)*N,w=e.y+Math.sin(s)*N,a.lineTo(c,w),s+=m,c=e.x+Math.cos(s)*u,w=e.y+Math.sin(s)*u,a.lineTo(c,w),s+=m;else a.moveTo(Math.floor(e.x),Math.floor(e.y)),a.lineTo(Math.floor(e.wobbleX),Math.floor(o)),a.lineTo(Math.floor(i),Math.floor(t)),a.lineTo(Math.floor(n),Math.floor(e.wobbleY));return a.closePath(),a.fill(),e.tick<e.totalTicks}function me(a,e,l,n,o){var i=e.slice(),t=a.getContext("2d"),s,u,N=P(function(c){function w(){s=u=null,t.clearRect(0,0,n.width,n.height),o(),c()}function p(){g&&!(n.width===C.width&&n.height===C.height)&&(n.width=a.width=C.width,n.height=a.height=C.height),!n.width&&!n.height&&(l(a),n.width=a.width,n.height=a.height),t.clearRect(0,0,n.width,n.height),i=i.filter(function(m){return ce(t,m)}),i.length?s=R.frame(p):w()}s=R.frame(p),u=w});return{addFettis:function(c){return i=i.concat(c),N},canvas:a,promise:N,reset:function(){s&&R.cancel(s),u&&u()}}}function q(a,e){var l=!a,n=!!f(e||{},"resize"),o=f(e,"disableForReducedMotion",Boolean),i=M&&!!f(e||{},"useWorker"),t=i?T():null,s=l?te:se,u=a&&t?!!a.__confetti_initialized:!1,N=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,c;function w(m,V,H){for(var F=f(m,"particleCount",x),O=f(m,"angle",Number),D=f(m,"spread",Number),I=f(m,"startVelocity",Number),de=f(m,"decay",Number),ue=f(m,"gravity",Number),he=f(m,"drift",Number),Y=f(m,"colors",ae),fe=f(m,"ticks",Number),j=f(m,"shapes"),ge=f(m,"scalar"),G=ne(m),Q=F,X=[],ve=a.width*G.x,pe=a.height*G.y;Q--;)X.push(oe({x:ve,y:pe,angle:O,spread:D,startVelocity:I,color:Y[Q%Y.length],shape:j[S(0,j.length)],ticks:fe,decay:de,gravity:ue,drift:he,scalar:ge}));return c?c.addFettis(X):(c=me(a,X,s,V,H),c.promise)}function p(m){var V=o||f(m,"disableForReducedMotion",Boolean),H=f(m,"zIndex",Number);if(V&&N)return P(function(I){I()});l&&c?a=c.canvas:l&&!a&&(a=le(H),document.body.appendChild(a)),n&&!u&&s(a);var F={width:a.width,height:a.height};t&&!u&&t.init(a),u=!0,t&&(a.__confetti_initialized=!0);function O(){if(t){var I={getBoundingClientRect:function(){if(!l)return a.getBoundingClientRect()}};s(I),t.postMessage({resize:{width:I.width,height:I.height}});return}F.width=F.height=null}function D(){c=null,n&&d.removeEventListener("resize",O),l&&a&&(document.body.removeChild(a),a=null,u=!1)}return n&&d.addEventListener("resize",O,!1),t?t.fire(m,F,D):w(m,F,D)}return p.reset=function(){t&&t.reset(),c&&c.reset()},p}var U;function Z(){return U||(U=q(null,{useWorker:!0,resize:!0})),U}v.exports=function(){return Z().apply(this,arguments)},v.exports.reset=function(){Z().reset()},v.exports.create=q})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),$,!1);const Re=$.exports;$.exports.create;const Ue=({subject:h="",className:d})=>{const{flash:v}=ye().props;b.useState();function g(x){x.preventDefault(),_({...M,[x.target.name]:x.target.value})}function C(x){x.preventDefault(),A(),z(route("contact.form"),{onSuccess:()=>{W(),K.custom(S=>r(ee,{t:S,type:"success",title:"Success",message:"Message successfully send",icon:"check"})),Re({particleCount:200,spread:220,origin:{y:.4},gravity:2,colors:["#5eead4","#2dd4bf","#0284c7","#22d3ee"]})},onError:()=>{K.custom(S=>r(ee,{t:S,icon:"cross",type:"error",title:"Error",message:"Something went wrong"}))},preserveState:!0,preserveScroll:!0})}const{data:M,setData:_,processing:P,recentlySuccessful:R,errors:T,clearErrors:A,reset:W,post:z,get:f}=we({first_name:"",last_name:"",email:"",phone:"",message:"",subject:`${(h==null?void 0:h.length)!==0?"Please give me a quote for "+h:""}  `});return y(J,{className:Ce("my-4 md:my-6 lg:my-8 space-y-4",d),styles:"default",children:[r(J.Header,{heading:`${(h==null?void 0:h.length)===0?"Contact Us":"Get Quote for "+h}`}),v&&r(Pe,{message:v}),y("form",{onSubmit:C,noValidate:!0,method:"POST",className:"space-y-2",children:[y("div",{className:"grid grid-co  ls-1 md:grid-cols-2 gap-x-6 gap-y-2",children:[y("div",{className:"col-span-2 md:col-span-1",children:[r(k,{htmlFor:"first_name",value:"First Name"}),r(L,{name:"first_name",id:"first_name",value:M.first_name,onChange:g,className:"w-full mt-2"}),r(E,{className:"mt-2",message:T.first_name})]}),y("div",{className:"col-span-2 md:col-span-1",children:[r(k,{htmlFor:"last_name",value:"Last Name"}),r(L,{name:"last_name",id:"last_name",value:M.last_name,onChange:g,className:"w-full mt-2"}),r(E,{className:"mt-2",message:T.last_name})]}),y("div",{className:"col-span-2 md:col-span-1",children:[r(k,{htmlFor:"email",value:"Email"}),r(L,{name:"email",id:"email",type:"email",value:M.email,onChange:g,className:"w-full mt-2"}),r(E,{className:"mt-2",message:T.email})]}),y("div",{className:"col-span-2 md:col-span-1",children:[r(k,{htmlFor:"phone",value:"Phone"}),r(L,{name:"phone",id:"phone",type:"tel",value:M.phone,onChange:g,className:"w-full mt-2"}),r(E,{className:"mt-2",message:T.phone})]}),y("div",{className:"col-span-2",children:[r(k,{htmlFor:"subject",value:"Subject"}),r(L,{name:"subject",id:"subject",type:"text",disabled:(h==null?void 0:h.length)!==0,value:M.subject,onChange:g,className:"w-full mt-2"}),r(E,{className:"mt-2",message:T.subject})]})]}),y("div",{children:[r(k,{htmlFor:"message",value:"Message"}),r(be,{name:"message",id:"message",onChange:g,value:M.message,className:"w-full mt-2 min-h-[175px]"}),r(E,{className:"mt-2",message:T.message})]}),r("div",{children:r(Me,{type:"submit",processing:P,recentlySuccessful:R,buttonText:"Send email"})})]})]})};export{Ue as C};