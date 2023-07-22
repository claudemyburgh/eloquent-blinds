import{d,R as M}from"./index.esm-48297038.js";function Ve(){for(var e=0,r,t,n="";e<arguments.length;)(r=arguments[e++])&&(t=Ae(r))&&(n&&(n+=" "),n+=t);return n}function Ae(e){if(typeof e=="string")return e;for(var r,t="",n=0;n<e.length;n++)e[n]&&(r=Ae(e[n]))&&(t&&(t+=" "),t+=r);return t}var he="-";function Be(e){var r=Je(e),t=e.conflictingClassGroups,n=e.conflictingClassGroupModifiers,o=n===void 0?{}:n;function s(i){var u=i.split(he);return u[0]===""&&u.length!==1&&u.shift(),Me(u,r)||qe(i)}function a(i,u){var l=t[i]||[];return u&&o[i]?[].concat(l,o[i]):l}return{getClassGroupId:s,getConflictingClassGroupIds:a}}function Me(e,r){var a;if(e.length===0)return r.classGroupId;var t=e[0],n=r.nextPart.get(t),o=n?Me(e.slice(1),n):void 0;if(o)return o;if(r.validators.length!==0){var s=e.join(he);return(a=r.validators.find(function(i){var u=i.validator;return u(s)}))==null?void 0:a.classGroupId}}var Ce=/^\[(.+)\]$/;function qe(e){if(Ce.test(e)){var r=Ce.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function Je(e){var r=e.theme,t=e.prefix,n={nextPart:new Map,validators:[]},o=Ze(Object.entries(e.classGroups),t);return o.forEach(function(s){var a=s[0],i=s[1];ge(i,n,a,r)}),n}function ge(e,r,t,n){e.forEach(function(o){if(typeof o=="string"){var s=o===""?r:Ee(r,o);s.classGroupId=t;return}if(typeof o=="function"){if(Xe(o)){ge(o(n),r,t,n);return}r.validators.push({validator:o,classGroupId:t});return}Object.entries(o).forEach(function(a){var i=a[0],u=a[1];ge(u,Ee(r,i),t,n)})})}function Ee(e,r){var t=e;return r.split(he).forEach(function(n){t.nextPart.has(n)||t.nextPart.set(n,{nextPart:new Map,validators:[]}),t=t.nextPart.get(n)}),t}function Xe(e){return e.isThemeGetter}function Ze(e,r){return r?e.map(function(t){var n=t[0],o=t[1],s=o.map(function(a){return typeof a=="string"?r+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(function(i){var u=i[0],l=i[1];return[r+u,l]})):a});return[n,s]}):e}function De(e){if(e<1)return{get:function(){},set:function(){}};var r=0,t=new Map,n=new Map;function o(s,a){t.set(s,a),r++,r>e&&(r=0,n=t,t=new Map)}return{get:function(a){var i=t.get(a);if(i!==void 0)return i;if((i=n.get(a))!==void 0)return o(a,i),i},set:function(a,i){t.has(a)?t.set(a,i):o(a,i)}}}var Re="!";function Ke(e){var r=e.separator||":",t=r.length===1,n=r[0],o=r.length;return function(a){for(var i=[],u=0,l=0,f,p=0;p<a.length;p++){var v=a[p];if(u===0){if(v===n&&(t||a.slice(p,p+o)===r)){i.push(a.slice(l,p)),l=p+o;continue}if(v==="/"){f=p;continue}}v==="["?u++:v==="]"&&u--}var b=i.length===0?a:a.substring(l),c=b.startsWith(Re),h=c?b.substring(1):b,m=f&&f>l?f-l:void 0;return{modifiers:i,hasImportantModifier:c,baseClassName:h,maybePostfixModifierPosition:m}}}function Ye(e){if(e.length<=1)return e;var r=[],t=[];return e.forEach(function(n){var o=n[0]==="[";o?(r.push.apply(r,t.sort().concat([n])),t=[]):t.push(n)}),r.push.apply(r,t.sort()),r}function _e(e){return{cache:De(e.cacheSize),splitModifiers:Ke(e),...Be(e)}}var Qe=/\s+/;function er(e,r){var t=r.splitModifiers,n=r.getClassGroupId,o=r.getConflictingClassGroupIds,s=new Set;return e.trim().split(Qe).map(function(a){var i=t(a),u=i.modifiers,l=i.hasImportantModifier,f=i.baseClassName,p=i.maybePostfixModifierPosition,v=n(p?f.substring(0,p):f),b=!!p;if(!v){if(!p)return{isTailwindClass:!1,originalClassName:a};if(v=n(f),!v)return{isTailwindClass:!1,originalClassName:a};b=!1}var c=Ye(u).join(":"),h=l?c+Re:c;return{isTailwindClass:!0,modifierId:h,classGroupId:v,originalClassName:a,hasPostfixModifier:b}}).reverse().filter(function(a){if(!a.isTailwindClass)return!0;var i=a.modifierId,u=a.classGroupId,l=a.hasPostfixModifier,f=i+u;return s.has(f)?!1:(s.add(f),o(u,l).forEach(function(p){return s.add(i+p)}),!0)}).reverse().map(function(a){return a.originalClassName}).join(" ")}function rr(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var n,o,s,a=i;function i(l){var f=r[0],p=r.slice(1),v=p.reduce(function(b,c){return c(b)},f());return n=_e(v),o=n.cache.get,s=n.cache.set,a=u,u(l)}function u(l){var f=o(l);if(f)return f;var p=er(l,n);return s(l,p),p}return function(){return a(Ve.apply(null,arguments))}}function w(e){var r=function(n){return n[e]||[]};return r.isThemeGetter=!0,r}var Pe=/^\[(?:([a-z-]+):)?(.+)\]$/i,tr=/^\d+\/\d+$/,nr=new Set(["px","full","screen"]),or=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ir=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ar=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function A(e){return V(e)||nr.has(e)||tr.test(e)||be(e)}function be(e){return B(e,"length",fr)}function sr(e){return B(e,"size",Oe)}function lr(e){return B(e,"position",Oe)}function ur(e){return B(e,"url",pr)}function ne(e){return B(e,"number",V)}function V(e){return!Number.isNaN(Number(e))}function cr(e){return e.endsWith("%")&&V(e.slice(0,-1))}function Y(e){return Se(e)||B(e,"number",Se)}function g(e){return Pe.test(e)}function _(){return!0}function N(e){return or.test(e)}function dr(e){return B(e,"",gr)}function B(e,r,t){var n=Pe.exec(e);return n?n[1]?n[1]===r:t(n[2]):!1}function fr(e){return ir.test(e)}function Oe(){return!1}function pr(e){return e.startsWith("url(")}function Se(e){return Number.isInteger(Number(e))}function gr(e){return ar.test(e)}function br(){var e=w("colors"),r=w("spacing"),t=w("blur"),n=w("brightness"),o=w("borderColor"),s=w("borderRadius"),a=w("borderSpacing"),i=w("borderWidth"),u=w("contrast"),l=w("grayscale"),f=w("hueRotate"),p=w("invert"),v=w("gap"),b=w("gradientColorStops"),c=w("gradientColorStopPositions"),h=w("inset"),m=w("margin"),x=w("opacity"),E=w("padding"),S=w("saturate"),C=w("scale"),q=w("sepia"),K=w("skew"),$=w("space"),L=w("translate"),H=function(){return["auto","contain","none"]},W=function(){return["auto","hidden","clip","visible","scroll"]},F=function(){return["auto",g,r]},y=function(){return[g,r]},J=function(){return["",A]},X=function(){return["auto",V,g]},I=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},Z=function(){return["solid","dashed","dotted","double","none"]},ee=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},G=function(){return["start","end","center","between","around","evenly","stretch"]},P=function(){return["","0",g]},re=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},k=function(){return[V,ne]},te=function(){return[V,g]};return{cacheSize:500,theme:{colors:[_],spacing:[A],blur:["none","",N,g],brightness:k(),borderColor:[e],borderRadius:["none","","full",N,g],borderSpacing:y(),borderWidth:J(),contrast:k(),grayscale:P(),hueRotate:te(),invert:P(),gap:y(),gradientColorStops:[e],gradientColorStopPositions:[cr,be],inset:F(),margin:F(),opacity:k(),padding:y(),saturate:k(),scale:k(),sepia:P(),skew:te(),space:y(),translate:y()},classGroups:{aspect:[{aspect:["auto","square","video",g]}],container:["container"],columns:[{columns:[N]}],"break-after":[{"break-after":re()}],"break-before":[{"break-before":re()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(I(),[g])}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:H()}],"overscroll-x":[{"overscroll-x":H()}],"overscroll-y":[{"overscroll-y":H()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[h]}],"inset-x":[{"inset-x":[h]}],"inset-y":[{"inset-y":[h]}],start:[{start:[h]}],end:[{end:[h]}],top:[{top:[h]}],right:[{right:[h]}],bottom:[{bottom:[h]}],left:[{left:[h]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Y]}],basis:[{basis:F()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",g]}],grow:[{grow:P()}],shrink:[{shrink:P()}],order:[{order:["first","last","none",Y]}],"grid-cols":[{"grid-cols":[_]}],"col-start-end":[{col:["auto",{span:["full",Y]},g]}],"col-start":[{"col-start":X()}],"col-end":[{"col-end":X()}],"grid-rows":[{"grid-rows":[_]}],"row-start-end":[{row:["auto",{span:[Y]},g]}],"row-start":[{"row-start":X()}],"row-end":[{"row-end":X()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",g]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",g]}],gap:[{gap:[v]}],"gap-x":[{"gap-x":[v]}],"gap-y":[{"gap-y":[v]}],"justify-content":[{justify:["normal"].concat(G())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(G(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(G(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[E]}],px:[{px:[E]}],py:[{py:[E]}],ps:[{ps:[E]}],pe:[{pe:[E]}],pt:[{pt:[E]}],pr:[{pr:[E]}],pb:[{pb:[E]}],pl:[{pl:[E]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[$]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[$]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",g,r]}],"min-w":[{"min-w":["min","max","fit",g,A]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[N]},N,g]}],h:[{h:[g,r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",g,A]}],"max-h":[{"max-h":[g,r,"min","max","fit"]}],"font-size":[{text:["base",N,be]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",ne]}],"font-family":[{font:[_]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",g]}],"line-clamp":[{"line-clamp":["none",V,ne]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",g,A]}],"list-image":[{"list-image":["none",g]}],"list-style-type":[{list:["none","disc","decimal",g]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[x]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[x]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(Z(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",A]}],"underline-offset":[{"underline-offset":["auto",g,A]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:y()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",g]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",g]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[x]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(I(),[lr])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",sr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},ur]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[c]}],"gradient-via-pos":[{via:[c]}],"gradient-to-pos":[{to:[c]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[x]}],"border-style":[{border:[].concat(Z(),["hidden"])}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[x]}],"divide-style":[{divide:Z()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:[""].concat(Z())}],"outline-offset":[{"outline-offset":[g,A]}],"outline-w":[{outline:[A]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:J()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[x]}],"ring-offset-w":[{"ring-offset":[A]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",N,dr]}],"shadow-color":[{shadow:[_]}],opacity:[{opacity:[x]}],"mix-blend":[{"mix-blend":ee()}],"bg-blend":[{"bg-blend":ee()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[n]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",N,g]}],grayscale:[{grayscale:[l]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[p]}],saturate:[{saturate:[S]}],sepia:[{sepia:[q]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[l]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[x]}],"backdrop-saturate":[{"backdrop-saturate":[S]}],"backdrop-sepia":[{"backdrop-sepia":[q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",g]}],duration:[{duration:te()}],ease:[{ease:["linear","in","out","in-out",g]}],delay:[{delay:te()}],animate:[{animate:["none","spin","ping","pulse","bounce",g]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[C]}],"scale-x":[{"scale-x":[C]}],"scale-y":[{"scale-y":[C]}],rotate:[{rotate:[Y,g]}],"translate-x":[{"translate-x":[L]}],"translate-y":[{"translate-y":[L]}],"skew-x":[{"skew-x":[K]}],"skew-y":[{"skew-y":[K]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",g]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",g]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":y()}],"scroll-mx":[{"scroll-mx":y()}],"scroll-my":[{"scroll-my":y()}],"scroll-ms":[{"scroll-ms":y()}],"scroll-me":[{"scroll-me":y()}],"scroll-mt":[{"scroll-mt":y()}],"scroll-mr":[{"scroll-mr":y()}],"scroll-mb":[{"scroll-mb":y()}],"scroll-ml":[{"scroll-ml":y()}],"scroll-p":[{"scroll-p":y()}],"scroll-px":[{"scroll-px":y()}],"scroll-py":[{"scroll-py":y()}],"scroll-ps":[{"scroll-ps":y()}],"scroll-pe":[{"scroll-pe":y()}],"scroll-pt":[{"scroll-pt":y()}],"scroll-pr":[{"scroll-pr":y()}],"scroll-pb":[{"scroll-pb":y()}],"scroll-pl":[{"scroll-pl":y()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",g]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[A,ne]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var Lr=rr(br),mr=Object.defineProperty,vr=(e,r,t)=>r in e?mr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,ce=(e,r,t)=>(vr(e,typeof r!="symbol"?r+"":r,t),t);let hr=class{constructor(){ce(this,"current",this.detect()),ce(this,"handoffState","pending"),ce(this,"currentId",0)}set(r){this.current!==r&&(this.handoffState="pending",this.currentId=0,this.current=r)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},ie=new hr,ae=(e,r)=>{ie.isServer?d.useEffect(e,r):d.useLayoutEffect(e,r)};function D(e){let r=d.useRef(e);return ae(()=>{r.current=e},[e]),r}function yr(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(r=>setTimeout(()=>{throw r}))}function Q(){let e=[],r={addEventListener(t,n,o,s){return t.addEventListener(n,o,s),r.add(()=>t.removeEventListener(n,o,s))},requestAnimationFrame(...t){let n=requestAnimationFrame(...t);return r.add(()=>cancelAnimationFrame(n))},nextFrame(...t){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...t))},setTimeout(...t){let n=setTimeout(...t);return r.add(()=>clearTimeout(n))},microTask(...t){let n={current:!0};return yr(()=>{n.current&&t[0]()}),r.add(()=>{n.current=!1})},style(t,n,o){let s=t.style.getPropertyValue(n);return Object.assign(t.style,{[n]:o}),this.add(()=>{Object.assign(t.style,{[n]:s})})},group(t){let n=Q();return t(n),this.add(()=>n.dispose())},add(t){return e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let o of e.splice(n,1))o()}},dispose(){for(let t of e.splice(0))t()}};return r}function je(){let[e]=d.useState(Q);return d.useEffect(()=>()=>e.dispose(),[e]),e}let j=function(e){let r=D(e);return M.useCallback((...t)=>r.current(...t),[r])};function ze(){let[e,r]=d.useState(ie.isHandoffComplete);return e&&ie.isHandoffComplete===!1&&r(!1),d.useEffect(()=>{e!==!0&&r(!0)},[e]),d.useEffect(()=>ie.handoff(),[]),e}function R(e,r,...t){if(e in r){let o=r[e];return typeof o=="function"?o(...t):o}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(r).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,R),n}let Fe=Symbol();function Wr(e,r=!0){return Object.assign(e,{[Fe]:r})}function Ie(...e){let r=d.useRef(e);d.useEffect(()=>{r.current=e},[e]);let t=j(n=>{for(let o of r.current)o!=null&&(typeof o=="function"?o(n):o.current=n)});return e.every(n=>n==null||(n==null?void 0:n[Fe]))?void 0:t}function me(...e){return e.filter(Boolean).join(" ")}var Ge=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Ge||{}),z=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(z||{});function Ne({ourProps:e,theirProps:r,slot:t,defaultTag:n,features:o,visible:s=!0,name:a}){let i=$e(r,e);if(s)return oe(i,t,n,a);let u=o??0;if(u&2){let{static:l=!1,...f}=i;if(l)return oe(f,t,n,a)}if(u&1){let{unmount:l=!0,...f}=i;return R(l?0:1,{0(){return null},1(){return oe({...f,hidden:!0,style:{display:"none"}},t,n,a)}})}return oe(i,t,n,a)}function oe(e,r={},t,n){let{as:o=t,children:s,refName:a="ref",...i}=de(e,["unmount","static"]),u=e.ref!==void 0?{[a]:e.ref}:{},l=typeof s=="function"?s(r):s;"className"in i&&i.className&&typeof i.className=="function"&&(i.className=i.className(r));let f={};if(r){let p=!1,v=[];for(let[b,c]of Object.entries(r))typeof c=="boolean"&&(p=!0),c===!0&&v.push(b);p&&(f["data-headlessui-state"]=v.join(" "))}if(o===d.Fragment&&Object.keys(ke(i)).length>0){if(!d.isValidElement(l)||Array.isArray(l)&&l.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(i).map(c=>`  - ${c}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(c=>`  - ${c}`).join(`
`)].join(`
`));let p=l.props,v=typeof(p==null?void 0:p.className)=="function"?(...c)=>me(p==null?void 0:p.className(...c),i.className):me(p==null?void 0:p.className,i.className),b=v?{className:v}:{};return d.cloneElement(l,Object.assign({},$e(l.props,ke(de(i,["ref"]))),f,u,wr(l.ref,u.ref),b))}return d.createElement(o,Object.assign({},de(i,["ref"]),o!==d.Fragment&&u,o!==d.Fragment&&f),l)}function wr(...e){return{ref:e.every(r=>r==null)?void 0:r=>{for(let t of e)t!=null&&(typeof t=="function"?t(r):t.current=r)}}}function $e(...e){if(e.length===0)return{};if(e.length===1)return e[0];let r={},t={};for(let n of e)for(let o in n)o.startsWith("on")&&typeof n[o]=="function"?(t[o]!=null||(t[o]=[]),t[o].push(n[o])):r[o]=n[o];if(r.disabled||r["aria-disabled"])return Object.assign(r,Object.fromEntries(Object.keys(t).map(n=>[n,void 0])));for(let n in t)Object.assign(r,{[n](o,...s){let a=t[n];for(let i of a){if((o instanceof Event||(o==null?void 0:o.nativeEvent)instanceof Event)&&o.defaultPrevented)return;i(o,...s)}}});return r}function ye(e){var r;return Object.assign(d.forwardRef(e),{displayName:(r=e.displayName)!=null?r:e.name})}function ke(e){let r=Object.assign({},e);for(let t in r)r[t]===void 0&&delete r[t];return r}function de(e,r=[]){let t=Object.assign({},e);for(let n of r)n in t&&delete t[n];return t}let we=d.createContext(null);we.displayName="OpenClosedContext";var O=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(O||{});function Le(){return d.useContext(we)}function xr({value:e,children:r}){return M.createElement(we.Provider,{value:e},r)}function xe(){let e=d.useRef(!1);return ae(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Cr(e=0){let[r,t]=d.useState(e),n=xe(),o=d.useCallback(u=>{n.current&&t(l=>l|u)},[r,n]),s=d.useCallback(u=>!!(r&u),[r]),a=d.useCallback(u=>{n.current&&t(l=>l&~u)},[t,n]),i=d.useCallback(u=>{n.current&&t(l=>l^u)},[t]);return{flags:r,addFlag:o,hasFlag:s,removeFlag:a,toggleFlag:i}}function Er(e){let r={called:!1};return(...t)=>{if(!r.called)return r.called=!0,e(...t)}}function fe(e,...r){e&&r.length>0&&e.classList.add(...r)}function pe(e,...r){e&&r.length>0&&e.classList.remove(...r)}function Sr(e,r){let t=Q();if(!e)return t.dispose;let{transitionDuration:n,transitionDelay:o}=getComputedStyle(e),[s,a]=[n,o].map(u=>{let[l=0]=u.split(",").filter(Boolean).map(f=>f.includes("ms")?parseFloat(f):parseFloat(f)*1e3).sort((f,p)=>p-f);return l}),i=s+a;if(i!==0){t.group(l=>{l.setTimeout(()=>{r(),l.dispose()},i),l.addEventListener(e,"transitionrun",f=>{f.target===f.currentTarget&&l.dispose()})});let u=t.addEventListener(e,"transitionend",l=>{l.target===l.currentTarget&&(r(),u())})}else r();return t.add(()=>r()),t.dispose}function kr(e,r,t,n){let o=t?"enter":"leave",s=Q(),a=n!==void 0?Er(n):()=>{};o==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let i=R(o,{enter:()=>r.enter,leave:()=>r.leave}),u=R(o,{enter:()=>r.enterTo,leave:()=>r.leaveTo}),l=R(o,{enter:()=>r.enterFrom,leave:()=>r.leaveFrom});return pe(e,...r.enter,...r.enterTo,...r.enterFrom,...r.leave,...r.leaveFrom,...r.leaveTo,...r.entered),fe(e,...i,...l),s.nextFrame(()=>{pe(e,...l),fe(e,...u),Sr(e,()=>(pe(e,...i),fe(e,...r.entered),a()))}),s.dispose}function Tr({container:e,direction:r,classes:t,onStart:n,onStop:o}){let s=xe(),a=je(),i=D(r);ae(()=>{let u=Q();a.add(u.dispose);let l=e.current;if(l&&i.current!=="idle"&&s.current)return u.dispose(),n.current(i.current),u.add(kr(l,t.current,i.current==="enter",()=>{u.dispose(),o.current(i.current)})),u.dispose},[r])}function U(e=""){return e.split(" ").filter(r=>r.trim().length>1)}let se=d.createContext(null);se.displayName="TransitionContext";var Ar=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Ar||{});function Mr(){let e=d.useContext(se);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function Rr(){let e=d.useContext(le);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let le=d.createContext(null);le.displayName="NestingContext";function ue(e){return"children"in e?ue(e.children):e.current.filter(({el:r})=>r.current!==null).filter(({state:r})=>r==="visible").length>0}function He(e,r){let t=D(e),n=d.useRef([]),o=xe(),s=je(),a=j((b,c=z.Hidden)=>{let h=n.current.findIndex(({el:m})=>m===b);h!==-1&&(R(c,{[z.Unmount](){n.current.splice(h,1)},[z.Hidden](){n.current[h].state="hidden"}}),s.microTask(()=>{var m;!ue(n)&&o.current&&((m=t.current)==null||m.call(t))}))}),i=j(b=>{let c=n.current.find(({el:h})=>h===b);return c?c.state!=="visible"&&(c.state="visible"):n.current.push({el:b,state:"visible"}),()=>a(b,z.Unmount)}),u=d.useRef([]),l=d.useRef(Promise.resolve()),f=d.useRef({enter:[],leave:[],idle:[]}),p=j((b,c,h)=>{u.current.splice(0),r&&(r.chains.current[c]=r.chains.current[c].filter(([m])=>m!==b)),r==null||r.chains.current[c].push([b,new Promise(m=>{u.current.push(m)})]),r==null||r.chains.current[c].push([b,new Promise(m=>{Promise.all(f.current[c].map(([x,E])=>E)).then(()=>m())})]),c==="enter"?l.current=l.current.then(()=>r==null?void 0:r.wait.current).then(()=>h(c)):h(c)}),v=j((b,c,h)=>{Promise.all(f.current[c].splice(0).map(([m,x])=>x)).then(()=>{var m;(m=u.current.shift())==null||m()}).then(()=>h(c))});return d.useMemo(()=>({children:n,register:i,unregister:a,onStart:p,onStop:v,wait:l,chains:f}),[i,a,n,p,v,f,l])}function Pr(){}let Or=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Te(e){var r;let t={};for(let n of Or)t[n]=(r=e[n])!=null?r:Pr;return t}function jr(e){let r=d.useRef(Te(e));return d.useEffect(()=>{r.current=Te(e)},[e]),r}let zr="div",We=Ge.RenderStrategy;function Fr(e,r){let{beforeEnter:t,afterEnter:n,beforeLeave:o,afterLeave:s,enter:a,enterFrom:i,enterTo:u,entered:l,leave:f,leaveFrom:p,leaveTo:v,...b}=e,c=d.useRef(null),h=Ie(c,r),m=b.unmount?z.Unmount:z.Hidden,{show:x,appear:E,initial:S}=Mr(),[C,q]=d.useState(x?"visible":"hidden"),K=Rr(),{register:$,unregister:L}=K,H=d.useRef(null);d.useEffect(()=>$(c),[$,c]),d.useEffect(()=>{if(m===z.Hidden&&c.current){if(x&&C!=="visible"){q("visible");return}return R(C,{hidden:()=>L(c),visible:()=>$(c)})}},[C,c,$,L,x,m]);let W=D({enter:U(a),enterFrom:U(i),enterTo:U(u),entered:U(l),leave:U(f),leaveFrom:U(p),leaveTo:U(v)}),F=jr({beforeEnter:t,afterEnter:n,beforeLeave:o,afterLeave:s}),y=ze();d.useEffect(()=>{if(y&&C==="visible"&&c.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[c,C,y]);let J=S&&!E,X=(()=>!y||J||H.current===x?"idle":x?"enter":"leave")(),I=Cr(0),Z=j(k=>R(k,{enter:()=>{I.addFlag(O.Opening),F.current.beforeEnter()},leave:()=>{I.addFlag(O.Closing),F.current.beforeLeave()},idle:()=>{}})),ee=j(k=>R(k,{enter:()=>{I.removeFlag(O.Opening),F.current.afterEnter()},leave:()=>{I.removeFlag(O.Closing),F.current.afterLeave()},idle:()=>{}})),G=He(()=>{q("hidden"),L(c)},K);Tr({container:c,classes:W,direction:X,onStart:D(k=>{G.onStart(c,k,Z)}),onStop:D(k=>{G.onStop(c,k,ee),k==="leave"&&!ue(G)&&(q("hidden"),L(c))})}),d.useEffect(()=>{J&&(m===z.Hidden?H.current=null:H.current=x)},[x,J,C]);let P=b,re={ref:h};return E&&x&&S&&(P={...P,className:me(b.className,...W.current.enter,...W.current.enterFrom)}),M.createElement(le.Provider,{value:G},M.createElement(xr,{value:R(C,{visible:O.Open,hidden:O.Closed})|I.flags},Ne({ourProps:re,theirProps:P,defaultTag:zr,features:We,visible:C==="visible",name:"Transition.Child"})))}function Ir(e,r){let{show:t,appear:n=!1,unmount:o,...s}=e,a=d.useRef(null),i=Ie(a,r);ze();let u=Le();if(t===void 0&&u!==null&&(t=(u&O.Open)===O.Open),![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[l,f]=d.useState(t?"visible":"hidden"),p=He(()=>{f("hidden")}),[v,b]=d.useState(!0),c=d.useRef([t]);ae(()=>{v!==!1&&c.current[c.current.length-1]!==t&&(c.current.push(t),b(!1))},[c,t]);let h=d.useMemo(()=>({show:t,appear:n,initial:v}),[t,n,v]);d.useEffect(()=>{if(t)f("visible");else if(!ue(p))f("hidden");else{let S=a.current;if(!S)return;let C=S.getBoundingClientRect();C.x===0&&C.y===0&&C.width===0&&C.height===0&&f("hidden")}},[t,p]);let m={unmount:o},x=j(()=>{var S;v&&b(!1),(S=e.beforeEnter)==null||S.call(e)}),E=j(()=>{var S;v&&b(!1),(S=e.beforeLeave)==null||S.call(e)});return M.createElement(le.Provider,{value:p},M.createElement(se.Provider,{value:h},Ne({ourProps:{...m,as:d.Fragment,children:M.createElement(Ue,{ref:i,...m,...s,beforeEnter:x,beforeLeave:E})},theirProps:{},defaultTag:d.Fragment,features:We,visible:l==="visible",name:"Transition"})))}function Gr(e,r){let t=d.useContext(se)!==null,n=Le()!==null;return M.createElement(M.Fragment,null,!t&&n?M.createElement(ve,{ref:r,...e}):M.createElement(Ue,{ref:r,...e}))}let ve=ye(Ir),Ue=ye(Fr),Nr=ye(Gr),Ur=Object.assign(ve,{Child:Nr,Root:ve});export{Ur as $,Le as C,ye as D,ke as R,Ge as S,Wr as T,Ne as X,Ve as a,Q as b,xr as c,O as d,ze as e,ie as f,xe as g,yr as h,ae as l,j as o,je as p,D as s,Lr as t,R as u,Ie as y};
