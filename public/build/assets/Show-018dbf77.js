import{r as $,R as H,W as L,j as p,F as V,a as m,d as q,b as J}from"./app-b46587ef.js";import{A as Q}from"./AuthenticatedLayout-514e2fb0.js";import{P as w}from"./Panel-8e148a89.js";import{S as Z,M as B}from"./Modal-7c7d1c77.js";import{M as G,E as K}from"./EmailClient-3395f7cb.js";import"./ApplicationLogo-ecd934d7.js";import"./Dropdown-00a83457.js";import"./index-ce1d5e95.js";import"./InputError-bcaaedef.js";import"./SaveSubmitButton-e01e37b3.js";import"./PrimaryButton-e670fa33.js";import"./InputLabel-b36166ac.js";function ee(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function g(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function N(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?N=function(a){return typeof a}:N=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},N(e)}function c(e){g(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||N(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}var te={};function ae(){return te}function F(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function x(e,t){g(2,arguments);var a=c(e),r=c(t),n=a.getTime()-r.getTime();return n<0?-1:n>0?1:n}var A=6e4,R=36e5;function re(e,t){g(2,arguments);var a=c(e),r=c(t),n=a.getFullYear()-r.getFullYear(),o=a.getMonth()-r.getMonth();return n*12+o}function ne(e,t){return g(2,arguments),c(e).getTime()-c(t).getTime()}var I={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}},ie="trunc";function oe(e){return e?I[e]:I[ie]}function ue(e){g(1,arguments);var t=c(e);return t.setHours(23,59,59,999),t}function se(e){g(1,arguments);var t=c(e),a=t.getMonth();return t.setFullYear(t.getFullYear(),a+1,0),t.setHours(23,59,59,999),t}function le(e){g(1,arguments);var t=c(e);return ue(t).getTime()===se(t).getTime()}function de(e,t){g(2,arguments);var a=c(e),r=c(t),n=x(a,r),o=Math.abs(re(a,r)),i;if(o<1)i=0;else{a.getMonth()===1&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-n*o);var s=x(a,r)===-n;le(c(e))&&o===1&&x(e,r)===1&&(s=!1),i=n*(o-Number(s))}return i===0?0:i}function fe(e,t,a){g(2,arguments);var r=ne(e,t)/1e3;return oe(a==null?void 0:a.roundingMethod)(r)}var me={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ce=function(t,a,r){var n,o=me[t];return typeof o=="string"?n=o:a===1?n=o.one:n=o.other.replace("{{count}}",a.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n};const he=ce;function P(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,r=e.formats[a]||e.formats[e.defaultWidth];return r}}var ve={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ge={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},pe={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},be={date:P({formats:ve,defaultWidth:"full"}),time:P({formats:ge,defaultWidth:"full"}),dateTime:P({formats:pe,defaultWidth:"full"})};const ye=be;var Me={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},we=function(t,a,r,n){return Me[t]};const De=we;function b(e){return function(t,a){var r=a!=null&&a.context?String(a.context):"standalone",n;if(r==="formatting"&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=a!=null&&a.width?String(a.width):o;n=e.formattingValues[i]||e.formattingValues[o]}else{var s=e.defaultWidth,u=a!=null&&a.width?String(a.width):e.defaultWidth;n=e.values[u]||e.values[s]}var l=e.argumentCallback?e.argumentCallback(t):t;return n[l]}}var Ne={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},xe={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Se={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Te={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Pe={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},We={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ce=function(t,a){var r=Number(t),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Oe={ordinalNumber:Ce,era:b({values:Ne,defaultWidth:"wide"}),quarter:b({values:xe,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:b({values:Se,defaultWidth:"wide"}),day:b({values:Te,defaultWidth:"wide"}),dayPeriod:b({values:Pe,defaultWidth:"wide",formattingValues:We,defaultFormattingWidth:"wide"})};const Fe=Oe;function y(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.width,n=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(n);if(!o)return null;var i=o[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(s)?ke(s,function(h){return h.test(i)}):Ie(s,function(h){return h.test(i)}),l;l=e.valueCallback?e.valueCallback(u):u,l=a.valueCallback?a.valueCallback(l):l;var d=t.slice(i.length);return{value:l,rest:d}}}function Ie(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function ke(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}function _e(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var n=r[0],o=t.match(e.parsePattern);if(!o)return null;var i=e.valueCallback?e.valueCallback(o[0]):o[0];i=a.valueCallback?a.valueCallback(i):i;var s=t.slice(n.length);return{value:i,rest:s}}}var je=/^(\d+)(th|st|nd|rd)?/i,Ae=/\d+/i,Re={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ye={any:[/^b/i,/^(a|c)/i]},Ee={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ue={any:[/1/i,/2/i,/3/i,/4/i]},Xe={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ze={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},$e={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},He={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Le={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ve={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},qe={ordinalNumber:_e({matchPattern:je,parsePattern:Ae,valueCallback:function(t){return parseInt(t,10)}}),era:y({matchPatterns:Re,defaultMatchWidth:"wide",parsePatterns:Ye,defaultParseWidth:"any"}),quarter:y({matchPatterns:Ee,defaultMatchWidth:"wide",parsePatterns:Ue,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:y({matchPatterns:Xe,defaultMatchWidth:"wide",parsePatterns:ze,defaultParseWidth:"any"}),day:y({matchPatterns:$e,defaultMatchWidth:"wide",parsePatterns:He,defaultParseWidth:"any"}),dayPeriod:y({matchPatterns:Le,defaultMatchWidth:"any",parsePatterns:Ve,defaultParseWidth:"any"})};const Je=qe;var Qe={code:"en-US",formatDistance:he,formatLong:ye,formatRelative:De,localize:Fe,match:Je,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Ze=Qe;function Y(e,t){if(e==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}function Be(e){return Y({},e)}var k=1440,Ge=2520,W=43200,Ke=86400;function _(e,t,a){var r,n;g(2,arguments);var o=ae(),i=(r=(n=a==null?void 0:a.locale)!==null&&n!==void 0?n:o.locale)!==null&&r!==void 0?r:Ze;if(!i.formatDistance)throw new RangeError("locale must contain formatDistance property");var s=x(e,t);if(isNaN(s))throw new RangeError("Invalid time value");var u=Y(Be(a),{addSuffix:!!(a!=null&&a.addSuffix),comparison:s}),l,d;s>0?(l=c(t),d=c(e)):(l=c(e),d=c(t));var h=fe(d,l),S=(F(d)-F(l))/1e3,f=Math.round((h-S)/60),v;if(f<2)return a!=null&&a.includeSeconds?h<5?i.formatDistance("lessThanXSeconds",5,u):h<10?i.formatDistance("lessThanXSeconds",10,u):h<20?i.formatDistance("lessThanXSeconds",20,u):h<40?i.formatDistance("halfAMinute",0,u):h<60?i.formatDistance("lessThanXMinutes",1,u):i.formatDistance("xMinutes",1,u):f===0?i.formatDistance("lessThanXMinutes",1,u):i.formatDistance("xMinutes",f,u);if(f<45)return i.formatDistance("xMinutes",f,u);if(f<90)return i.formatDistance("aboutXHours",1,u);if(f<k){var U=Math.round(f/60);return i.formatDistance("aboutXHours",U,u)}else{if(f<Ge)return i.formatDistance("xDays",1,u);if(f<W){var X=Math.round(f/k);return i.formatDistance("xDays",X,u)}else if(f<Ke)return v=Math.round(f/W),i.formatDistance("aboutXMonths",v,u)}if(v=de(d,l),v<12){var z=Math.round(f/W);return i.formatDistance("xMonths",z,u)}else{var O=v%12,T=Math.floor(v/12);return O<3?i.formatDistance("aboutXYears",T,u):O<9?i.formatDistance("overXYears",T,u):i.formatDistance("almostXYears",T+1,u)}}function j(e,t){var a;g(1,arguments);var r=ee((a=t==null?void 0:t.additionalDigits)!==null&&a!==void 0?a:2);if(r!==2&&r!==1&&r!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(!(typeof e=="string"||Object.prototype.toString.call(e)==="[object String]"))return new Date(NaN);var n=rt(e),o;if(n.date){var i=nt(n.date,r);o=it(i.restDateString,i.year)}if(!o||isNaN(o.getTime()))return new Date(NaN);var s=o.getTime(),u=0,l;if(n.time&&(u=ot(n.time),isNaN(u)))return new Date(NaN);if(n.timezone){if(l=ut(n.timezone),isNaN(l))return new Date(NaN)}else{var d=new Date(s+u),h=new Date(0);return h.setFullYear(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()),h.setHours(d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds(),d.getUTCMilliseconds()),h}return new Date(s+u+l)}var D={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},et=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,tt=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,at=/^([+-])(\d{2})(?::?(\d{2}))?$/;function rt(e){var t={},a=e.split(D.dateTimeDelimiter),r;if(a.length>2)return t;if(/:/.test(a[0])?r=a[0]:(t.date=a[0],r=a[1],D.timeZoneDelimiter.test(t.date)&&(t.date=e.split(D.timeZoneDelimiter)[0],r=e.substr(t.date.length,e.length))),r){var n=D.timezone.exec(r);n?(t.time=r.replace(n[1],""),t.timezone=n[1]):t.time=r}return t}function nt(e,t){var a=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(a);if(!r)return{year:NaN,restDateString:""};var n=r[1]?parseInt(r[1]):null,o=r[2]?parseInt(r[2]):null;return{year:o===null?n:o*100,restDateString:e.slice((r[1]||r[2]).length)}}function it(e,t){if(t===null)return new Date(NaN);var a=e.match(et);if(!a)return new Date(NaN);var r=!!a[4],n=M(a[1]),o=M(a[2])-1,i=M(a[3]),s=M(a[4]),u=M(a[5])-1;if(r)return mt(t,s,u)?st(t,s,u):new Date(NaN);var l=new Date(0);return!dt(t,o,i)||!ft(t,n)?new Date(NaN):(l.setUTCFullYear(t,o,Math.max(n,i)),l)}function M(e){return e?parseInt(e):1}function ot(e){var t=e.match(tt);if(!t)return NaN;var a=C(t[1]),r=C(t[2]),n=C(t[3]);return ct(a,r,n)?a*R+r*A+n*1e3:NaN}function C(e){return e&&parseFloat(e.replace(",","."))||0}function ut(e){if(e==="Z")return 0;var t=e.match(at);if(!t)return 0;var a=t[1]==="+"?-1:1,r=parseInt(t[2]),n=t[3]&&parseInt(t[3])||0;return ht(r,n)?a*(r*R+n*A):NaN}function st(e,t,a){var r=new Date(0);r.setUTCFullYear(e,0,4);var n=r.getUTCDay()||7,o=(t-1)*7+a+1-n;return r.setUTCDate(r.getUTCDate()+o),r}var lt=[31,null,31,30,31,30,31,31,30,31,30,31];function E(e){return e%400===0||e%4===0&&e%100!==0}function dt(e,t,a){return t>=0&&t<=11&&a>=1&&a<=(lt[t]||(E(e)?29:28))}function ft(e,t){return t>=1&&t<=(E(e)?366:365)}function mt(e,t,a){return t>=1&&t<=53&&a>=0&&a<=6}function ct(e,t,a){return e===24?t===0&&a===0:a>=0&&a<60&&t>=0&&t<60&&e>=0&&e<25}function ht(e,t){return t>=0&&t<=59}const Pt=({auth:e,message:t})=>{const a=new Date;$.useState(!1);const[r,n]=H(G),{data:o,setData:i,reset:s,patch:u,errors:l,clearErrors:d,processing:h}=L({read_at:null});function S(){n(!1),s(),d()}function f(){n(!0)}return p(Q,{header:p(V,{children:[m("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Messages"}),m(q,{as:"button",className:"text-white border border-gray-500 px-4 uppercase text-xs py-2 rounded-lg",href:route("dashboard.messages.index"),children:"Back"})]}),user:e.user,children:[m(J,{title:"Dashboard Messages Show"}),m("div",{className:"py-12",children:p("div",{className:"wrapper ",children:[p(w,{children:[m(w.Header,{heading:t.subject,paragraph:`Message from ${t.user.name}`}),p("div",{className:"flex justify-between items-center",children:[p("ul",{className:"md:flex md:space-x-4 my-4 text-white",children:[m("li",{children:t.user.name}),m("li",{children:t.user.email}),m("li",{children:t.user.phone})]}),m("div",{children:p("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs md:text-sm font-medium bg-gray-100 text-gray-800",children:["Send"," ",_(j(t.created_at),a,{includeSeconds:!0,addSuffix:!0})]})})]}),m("div",{className:"my-4 text-gray-200",children:t.message}),m("div",{className:"space-x-4 pt-4",children:m(Z,{className:"btn btn-secondary text-white",onClick:f,children:"Replay"})})]}),t.children&&t.children.map(v=>p(w,{styles:"gray",className:"my-4",children:[m(w.Header,{heading:v.subject,paragraph:`Message from ${v.user.name}`}),p("span",{className:"inline-flex items-center my-4 px-2.5 py-0.5 rounded-full text-xs md:text-sm font-medium bg-gray-100 text-gray-800",children:["Send"," ",_(j(v.created_at),a,{includeSeconds:!0,addSuffix:!0})]}),m("div",{className:"my-4 text-gray-200",children:v.message})]},v.id)),m(B,{show:r,onClose:S,maxWidth:"2xl",closeable:!0,children:m(K,{parent:t.id,subject:t.subject,user:t.user})})]})})]})};export{Pt as default};
