"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3766],{96868:function(e,t,n){n.d(t,{Z:function(){return o}});function o(e,t){"function"==typeof e?e(t):e&&(e.current=t)}},13626:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(67294),r=n(96868);function i(...e){return o.useMemo(()=>e.every(e=>null==e)?null:t=>{e.forEach(e=>{(0,r.Z)(e,t)})},e)}},30437:function(e,t,n){n.d(t,{Z:function(){return o}});function o(e,t=[]){if(void 0===e)return{};let n={};return Object.keys(e).filter(n=>n.match(/^on[A-Z]/)&&"function"==typeof e[n]&&!t.includes(n)).forEach(t=>{n[t]=e[t]}),n}},71276:function(e,t,n){n.d(t,{Z:function(){return o}});function o(e,t){return"function"==typeof e?e(t):e}},69945:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(87462),r=n(63366),i=n(13626),a=n(86010),s=n(30437);function f(e){if(void 0===e)return{};let t={};return Object.keys(e).filter(t=>!(t.match(/^on[A-Z]/)&&"function"==typeof e[t])).forEach(n=>{t[n]=e[n]}),t}var l=n(71276);let c=["elementType","externalSlotProps","ownerState"];function u(e){var t,n;let{elementType:u,externalSlotProps:p,ownerState:d}=e,v=(0,r.Z)(e,c),m=(0,l.Z)(p,d),{props:h,internalRef:y}=function(e){let{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:i,className:l}=e;if(!t){let e=(0,a.Z)(null==i?void 0:i.className,null==r?void 0:r.className,l,null==n?void 0:n.className),t=(0,o.Z)({},null==n?void 0:n.style,null==i?void 0:i.style,null==r?void 0:r.style),s=(0,o.Z)({},n,i,r);return e.length>0&&(s.className=e),Object.keys(t).length>0&&(s.style=t),{props:s,internalRef:void 0}}let c=(0,s.Z)((0,o.Z)({},i,r)),u=f(r),p=f(i),d=t(c),v=(0,a.Z)(null==d?void 0:d.className,null==n?void 0:n.className,l,null==i?void 0:i.className,null==r?void 0:r.className),m=(0,o.Z)({},null==d?void 0:d.style,null==n?void 0:n.style,null==i?void 0:i.style,null==r?void 0:r.style),h=(0,o.Z)({},d,n,p,u);return v.length>0&&(h.className=v),Object.keys(m).length>0&&(h.style=m),{props:h,internalRef:d.ref}}((0,o.Z)({},v,{externalSlotProps:m})),g=(0,i.Z)(y,null==m?void 0:m.ref,null==(t=e.additionalProps)?void 0:t.ref),b=(n=(0,o.Z)({},h,{ref:g}),"string"==typeof u?n:(0,o.Z)({},n,{ownerState:(0,o.Z)({},n.ownerState,d)}));return b}},90629:function(e,t,n){n.d(t,{Z:function(){return w}});var o=n(63366),r=n(87462),i=n(67294),a=n(86010),s=n(15463),f=n(41796),l=n(90948);let c=e=>((e<1?5.11916*e**2:4.5*Math.log(e+1)+2)/100).toFixed(2);var u=n(71657),p=n(45154),d=n(22104);function v(e){return(0,d.Z)("MuiPaper",e)}(0,p.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var m=n(85893);let h=["className","component","elevation","square","variant"],y=e=>{let{square:t,elevation:n,variant:o,classes:r}=e,i={root:["root",o,!t&&"rounded","elevation"===o&&`elevation${n}`]};return(0,s.Z)(i,v,r)},g=(0,l.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return(0,r.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,r.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,f.Fq)("#fff",c(t.elevation))}, ${(0,f.Fq)("#fff",c(t.elevation))})`},e.vars&&{backgroundImage:null==(n=e.vars.overlays)?void 0:n[t.elevation]}))}),b=i.forwardRef(function(e,t){let n=(0,u.Z)({props:e,name:"MuiPaper"}),{className:i,component:s="div",elevation:f=1,square:l=!1,variant:c="elevation"}=n,p=(0,o.Z)(n,h),d=(0,r.Z)({},n,{component:s,elevation:f,square:l,variant:c}),v=y(d);return(0,m.jsx)(g,(0,r.Z)({as:s,ownerState:d,className:(0,a.Z)(v.root,i),ref:t},p))});var w=b},95551:function(e,t,n){function o(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function r(e){var t=o(e).Element;return e instanceof t||e instanceof Element}function i(e){var t=o(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function a(e){if("undefined"==typeof ShadowRoot)return!1;var t=o(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}n.d(t,{fi:function(){return el}});var s,f,l,c,u,p=Math.max,d=Math.min,v=Math.round;function m(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function h(){return!/^((?!chrome|android).)*safari/i.test(m())}function y(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var a=e.getBoundingClientRect(),s=1,f=1;t&&i(e)&&(s=e.offsetWidth>0&&v(a.width)/e.offsetWidth||1,f=e.offsetHeight>0&&v(a.height)/e.offsetHeight||1);var l=(r(e)?o(e):window).visualViewport,c=!h()&&n,u=(a.left+(c&&l?l.offsetLeft:0))/s,p=(a.top+(c&&l?l.offsetTop:0))/f,d=a.width/s,m=a.height/f;return{width:d,height:m,top:p,right:u+d,bottom:p+m,left:u,x:u,y:p}}function g(e){var t=o(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function b(e){return e?(e.nodeName||"").toLowerCase():null}function w(e){return((r(e)?e.ownerDocument:e.document)||window.document).documentElement}function x(e){return y(w(e)).left+g(e).scrollLeft}function O(e){return o(e).getComputedStyle(e)}function j(e){var t=O(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function E(e){var t=y(e),n=e.offsetWidth,o=e.offsetHeight;return 1>=Math.abs(t.width-n)&&(n=t.width),1>=Math.abs(t.height-o)&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function Z(e){return"html"===b(e)?e:e.assignedSlot||e.parentNode||(a(e)?e.host:null)||w(e)}function k(e,t){void 0===t&&(t=[]);var n,r=function e(t){return["html","body","#document"].indexOf(b(t))>=0?t.ownerDocument.body:i(t)&&j(t)?t:e(Z(t))}(e),a=r===(null==(n=e.ownerDocument)?void 0:n.body),s=o(r),f=a?[s].concat(s.visualViewport||[],j(r)?r:[]):r,l=t.concat(f);return a?l:l.concat(k(Z(f)))}function D(e){return i(e)&&"fixed"!==O(e).position?e.offsetParent:null}function A(e){for(var t=o(e),n=D(e);n&&["table","td","th"].indexOf(b(n))>=0&&"static"===O(n).position;)n=D(n);return n&&("html"===b(n)||"body"===b(n)&&"static"===O(n).position)?t:n||function(e){var t=/firefox/i.test(m());if(/Trident/i.test(m())&&i(e)&&"fixed"===O(e).position)return null;var n=Z(e);for(a(n)&&(n=n.host);i(n)&&0>["html","body"].indexOf(b(n));){var o=O(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||t}var P="bottom",M="right",R="left",L="auto",N=["top",P,M,R],W="start",S="viewport",B="popper",H=N.reduce(function(e,t){return e.concat([t+"-"+W,t+"-end"])},[]),T=[].concat(N,[L]).reduce(function(e,t){return e.concat([t,t+"-"+W,t+"-end"])},[]),q=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],C={placement:"bottom",modifiers:[],strategy:"absolute"};function V(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}var F={passive:!0};function I(e){return e.split("-")[0]}function _(e){return e.split("-")[1]}function $(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function U(e){var t,n=e.reference,o=e.element,r=e.placement,i=r?I(r):null,a=r?_(r):null,s=n.x+n.width/2-o.width/2,f=n.y+n.height/2-o.height/2;switch(i){case"top":t={x:s,y:n.y-o.height};break;case P:t={x:s,y:n.y+n.height};break;case M:t={x:n.x+n.width,y:f};break;case R:t={x:n.x-o.width,y:f};break;default:t={x:n.x,y:n.y}}var l=i?$(i):null;if(null!=l){var c="y"===l?"height":"width";switch(a){case W:t[l]=t[l]-(n[c]/2-o[c]/2);break;case"end":t[l]=t[l]+(n[c]/2-o[c]/2)}}return t}var z={top:"auto",right:"auto",bottom:"auto",left:"auto"};function X(e){var t,n,r,i,a,s,f=e.popper,l=e.popperRect,c=e.placement,u=e.variation,p=e.offsets,d=e.position,m=e.gpuAcceleration,h=e.adaptive,y=e.roundOffsets,g=e.isFixed,b=p.x,x=void 0===b?0:b,j=p.y,E=void 0===j?0:j,Z="function"==typeof y?y({x:x,y:E}):{x:x,y:E};x=Z.x,E=Z.y;var k=p.hasOwnProperty("x"),D=p.hasOwnProperty("y"),L=R,N="top",W=window;if(h){var S=A(f),B="clientHeight",H="clientWidth";S===o(f)&&"static"!==O(S=w(f)).position&&"absolute"===d&&(B="scrollHeight",H="scrollWidth"),("top"===c||(c===R||c===M)&&"end"===u)&&(N=P,E-=(g&&S===W&&W.visualViewport?W.visualViewport.height:S[B])-l.height,E*=m?1:-1),(c===R||("top"===c||c===P)&&"end"===u)&&(L=M,x-=(g&&S===W&&W.visualViewport?W.visualViewport.width:S[H])-l.width,x*=m?1:-1)}var T=Object.assign({position:d},h&&z),q=!0===y?(n=(t={x:x,y:E}).x,r=t.y,{x:v(n*(i=window.devicePixelRatio||1))/i||0,y:v(r*i)/i||0}):{x:x,y:E};return(x=q.x,E=q.y,m)?Object.assign({},T,((s={})[N]=D?"0":"",s[L]=k?"0":"",s.transform=1>=(W.devicePixelRatio||1)?"translate("+x+"px, "+E+"px)":"translate3d("+x+"px, "+E+"px, 0)",s)):Object.assign({},T,((a={})[N]=D?E+"px":"",a[L]=k?x+"px":"",a.transform="",a))}var Y={left:"right",right:"left",bottom:"top",top:"bottom"};function G(e){return e.replace(/left|right|bottom|top/g,function(e){return Y[e]})}var J={start:"end",end:"start"};function K(e){return e.replace(/start|end/g,function(e){return J[e]})}function Q(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&a(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function ee(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function et(e,t,n){var i,a,s,f,l,c,u,d,v,m;return t===S?ee(function(e,t){var n=o(e),r=w(e),i=n.visualViewport,a=r.clientWidth,s=r.clientHeight,f=0,l=0;if(i){a=i.width,s=i.height;var c=h();(c||!c&&"fixed"===t)&&(f=i.offsetLeft,l=i.offsetTop)}return{width:a,height:s,x:f+x(e),y:l}}(e,n)):r(t)?((i=y(t,!1,"fixed"===n)).top=i.top+t.clientTop,i.left=i.left+t.clientLeft,i.bottom=i.top+t.clientHeight,i.right=i.left+t.clientWidth,i.width=t.clientWidth,i.height=t.clientHeight,i.x=i.left,i.y=i.top,i):ee((a=w(e),f=w(a),l=g(a),c=null==(s=a.ownerDocument)?void 0:s.body,u=p(f.scrollWidth,f.clientWidth,c?c.scrollWidth:0,c?c.clientWidth:0),d=p(f.scrollHeight,f.clientHeight,c?c.scrollHeight:0,c?c.clientHeight:0),v=-l.scrollLeft+x(a),m=-l.scrollTop,"rtl"===O(c||f).direction&&(v+=p(f.clientWidth,c?c.clientWidth:0)-u),{width:u,height:d,x:v,y:m}))}function en(){return{top:0,right:0,bottom:0,left:0}}function eo(e){return Object.assign({},en(),e)}function er(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}function ei(e,t){void 0===t&&(t={});var n,o,a,s,f,l,c,u=t,v=u.placement,m=void 0===v?e.placement:v,h=u.strategy,g=void 0===h?e.strategy:h,x=u.boundary,j=u.rootBoundary,E=u.elementContext,D=void 0===E?B:E,R=u.altBoundary,L=u.padding,W=void 0===L?0:L,H=eo("number"!=typeof W?W:er(W,N)),T=e.rects.popper,q=e.elements[void 0!==R&&R?D===B?"reference":B:D],C=(n=r(q)?q:q.contextElement||w(e.elements.popper),l=(f=[].concat("clippingParents"===(o=void 0===x?"clippingParents":x)?(a=k(Z(n)),r(s=["absolute","fixed"].indexOf(O(n).position)>=0&&i(n)?A(n):n)?a.filter(function(e){return r(e)&&Q(e,s)&&"body"!==b(e)}):[]):[].concat(o),[void 0===j?S:j]))[0],(c=f.reduce(function(e,t){var o=et(n,t,g);return e.top=p(o.top,e.top),e.right=d(o.right,e.right),e.bottom=d(o.bottom,e.bottom),e.left=p(o.left,e.left),e},et(n,l,g))).width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c),V=y(e.elements.reference),F=U({reference:V,element:T,strategy:"absolute",placement:m}),I=ee(Object.assign({},T,F)),_=D===B?I:V,$={top:C.top-_.top+H.top,bottom:_.bottom-C.bottom+H.bottom,left:C.left-_.left+H.left,right:_.right-C.right+H.right},z=e.modifiersData.offset;if(D===B&&z){var X=z[m];Object.keys($).forEach(function(e){var t=[M,P].indexOf(e)>=0?1:-1,n=["top",P].indexOf(e)>=0?"y":"x";$[e]+=X[n]*t})}return $}function ea(e,t,n){return p(e,d(t,n))}function es(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ef(e){return["top",M,P,R].some(function(t){return e[t]>=0})}var el=(l=void 0===(f=(s={defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=void 0===i||i,s=r.resize,f=void 0===s||s,l=o(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&c.forEach(function(e){e.addEventListener("scroll",n.update,F)}),f&&l.addEventListener("resize",n.update,F),function(){a&&c.forEach(function(e){e.removeEventListener("scroll",n.update,F)}),f&&l.removeEventListener("resize",n.update,F)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=U({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=n.adaptive,i=n.roundOffsets,a=void 0===i||i,s={placement:I(t.placement),variation:_(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===o||o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,X(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===r||r,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,X(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];i(r)&&b(r)&&(Object.assign(r.style,n),Object.keys(o).forEach(function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var o=t.elements[e],r=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]="",e},{});i(o)&&b(o)&&(Object.assign(o.style,a),Object.keys(r).forEach(function(e){o.removeAttribute(e)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.offset,i=void 0===r?[0,0]:r,a=T.reduce(function(e,n){var o,r,a,s,f,l;return e[n]=(o=t.rects,a=[R,"top"].indexOf(r=I(n))>=0?-1:1,f=(s="function"==typeof i?i(Object.assign({},o,{placement:n})):i)[0],l=s[1],f=f||0,l=(l||0)*a,[R,M].indexOf(r)>=0?{x:l,y:f}:{x:f,y:l}),e},{}),s=a[t.placement],f=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=l),t.modifiersData[o]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,l=n.padding,c=n.boundary,u=n.rootBoundary,p=n.altBoundary,d=n.flipVariations,v=void 0===d||d,m=n.allowedAutoPlacements,h=t.options.placement,y=I(h),g=f||(y!==h&&v?function(e){if(I(e)===L)return[];var t=G(e);return[K(e),t,K(t)]}(h):[G(h)]),b=[h].concat(g).reduce(function(e,n){var o,r,i,a,s,f,p,d,h,y,g,b;return e.concat(I(n)===L?(r=(o={placement:n,boundary:c,rootBoundary:u,padding:l,flipVariations:v,allowedAutoPlacements:m}).placement,i=o.boundary,a=o.rootBoundary,s=o.padding,f=o.flipVariations,d=void 0===(p=o.allowedAutoPlacements)?T:p,0===(g=(y=(h=_(r))?f?H:H.filter(function(e){return _(e)===h}):N).filter(function(e){return d.indexOf(e)>=0})).length&&(g=y),Object.keys(b=g.reduce(function(e,n){return e[n]=ei(t,{placement:n,boundary:i,rootBoundary:a,padding:s})[I(n)],e},{})).sort(function(e,t){return b[e]-b[t]})):n)},[]),w=t.rects.reference,x=t.rects.popper,O=new Map,j=!0,E=b[0],Z=0;Z<b.length;Z++){var k=b[Z],D=I(k),A=_(k)===W,S=["top",P].indexOf(D)>=0,B=S?"width":"height",q=ei(t,{placement:k,boundary:c,rootBoundary:u,altBoundary:p,padding:l}),C=S?A?M:R:A?P:"top";w[B]>x[B]&&(C=G(C));var V=G(C),F=[];if(i&&F.push(q[D]<=0),s&&F.push(q[C]<=0,q[V]<=0),F.every(function(e){return e})){E=k,j=!1;break}O.set(k,F)}if(j)for(var $=v?3:1,U=function(e){var t=b.find(function(t){var n=O.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return E=t,"break"},z=$;z>0&&"break"!==U(z);z--);t.placement!==E&&(t.modifiersData[o]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,i=n.altAxis,a=n.boundary,s=n.rootBoundary,f=n.altBoundary,l=n.padding,c=n.tether,u=void 0===c||c,v=n.tetherOffset,m=void 0===v?0:v,h=ei(t,{boundary:a,rootBoundary:s,padding:l,altBoundary:f}),y=I(t.placement),g=_(t.placement),b=!g,w=$(y),x="x"===w?"y":"x",O=t.modifiersData.popperOffsets,j=t.rects.reference,Z=t.rects.popper,k="function"==typeof m?m(Object.assign({},t.rects,{placement:t.placement})):m,D="number"==typeof k?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),L=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,N={x:0,y:0};if(O){if(void 0===r||r){var S,B="y"===w?"top":R,H="y"===w?P:M,T="y"===w?"height":"width",q=O[w],C=q+h[B],V=q-h[H],F=u?-Z[T]/2:0,U=g===W?j[T]:Z[T],z=g===W?-Z[T]:-j[T],X=t.elements.arrow,Y=u&&X?E(X):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:en(),J=G[B],K=G[H],Q=ea(0,j[T],Y[T]),ee=b?j[T]/2-F-Q-J-D.mainAxis:U-Q-J-D.mainAxis,et=b?-j[T]/2+F+Q+K+D.mainAxis:z+Q+K+D.mainAxis,eo=t.elements.arrow&&A(t.elements.arrow),er=eo?"y"===w?eo.clientTop||0:eo.clientLeft||0:0,es=null!=(S=null==L?void 0:L[w])?S:0,ef=ea(u?d(C,q+ee-es-er):C,q,u?p(V,q+et-es):V);O[w]=ef,N[w]=ef-q}if(void 0!==i&&i){var el,ec,eu=O[x],ep="y"===x?"height":"width",ed=eu+h["x"===w?"top":R],ev=eu-h["x"===w?P:M],em=-1!==["top",R].indexOf(y),eh=null!=(el=null==L?void 0:L[x])?el:0,ey=em?ed:eu-j[ep]-Z[ep]-eh+D.altAxis,eg=em?eu+j[ep]+Z[ep]-eh-D.altAxis:ev,eb=u&&em?(ec=ea(ey,eu,eg))>eg?eg:ec:ea(u?ey:ed,eu,u?eg:ev);O[x]=eb,N[x]=eb-eu}t.modifiersData[o]=N}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n,o=e.state,r=e.name,i=e.options,a=o.elements.arrow,s=o.modifiersData.popperOffsets,f=I(o.placement),l=$(f),c=[R,M].indexOf(f)>=0?"height":"width";if(a&&s){var u=eo("number"!=typeof(t="function"==typeof(t=i.padding)?t(Object.assign({},o.rects,{placement:o.placement})):t)?t:er(t,N)),p=E(a),d=o.rects.reference[c]+o.rects.reference[l]-s[l]-o.rects.popper[c],v=s[l]-o.rects.reference[l],m=A(a),h=m?"y"===l?m.clientHeight||0:m.clientWidth||0:0,y=u["y"===l?"top":R],g=h-p[c]-u["y"===l?P:M],b=h/2-p[c]/2+(d/2-v/2),w=ea(y,b,g);o.modifiersData[r]=((n={})[l]=w,n.centerOffset=w-b,n)}},effect:function(e){var t=e.state,n=e.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"!=typeof o||(o=t.elements.popper.querySelector(o)))&&Q(t.elements.popper,o)&&(t.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,a=ei(t,{elementContext:"reference"}),s=ei(t,{altBoundary:!0}),f=es(a,o),l=es(s,r,i),c=ef(f),u=ef(l);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:l,isReferenceHidden:c,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":u})}}]}).defaultModifiers)?[]:f,u=void 0===(c=s.defaultOptions)?C:c,function(e,t,n){void 0===n&&(n=u);var a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},C,u),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],c=!1,p={state:s,setOptions:function(n){var o,i,a,c,v,m="function"==typeof n?n(s.options):n;d(),s.options=Object.assign({},u,s.options,m),s.scrollParents={reference:r(e)?k(e):e.contextElement?k(e.contextElement):[],popper:k(t)};var h=(i=Object.keys(o=[].concat(l,s.options.modifiers).reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{})).map(function(e){return o[e]}),a=new Map,c=new Set,v=[],i.forEach(function(e){a.set(e.name,e)}),i.forEach(function(e){c.has(e.name)||function e(t){c.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!c.has(t)){var n=a.get(t);n&&e(n)}}),v.push(t)}(e)}),q.reduce(function(e,t){return e.concat(v.filter(function(e){return e.phase===t}))},[]));return s.orderedModifiers=h.filter(function(e){return e.enabled}),s.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,o=e.effect;if("function"==typeof o){var r=o({state:s,name:t,instance:p,options:void 0===n?{}:n});f.push(r||function(){})}}),p.update()},forceUpdate:function(){if(!c){var e,t,n,r,a,f,l,u,d,m,h,O,Z=s.elements,k=Z.reference,D=Z.popper;if(V(k,D)){s.rects={reference:(t=A(D),n="fixed"===s.options.strategy,r=i(t),u=i(t)&&(f=v((a=t.getBoundingClientRect()).width)/t.offsetWidth||1,l=v(a.height)/t.offsetHeight||1,1!==f||1!==l),d=w(t),m=y(k,u,n),h={scrollLeft:0,scrollTop:0},O={x:0,y:0},(r||!r&&!n)&&(("body"!==b(t)||j(d))&&(h=(e=t)!==o(e)&&i(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:g(e)),i(t)?(O=y(t,!0),O.x+=t.clientLeft,O.y+=t.clientTop):d&&(O.x=x(d))),{x:m.left+h.scrollLeft-O.x,y:m.top+h.scrollTop-O.y,width:m.width,height:m.height}),popper:E(D)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach(function(e){return s.modifiersData[e.name]=Object.assign({},e.data)});for(var P=0;P<s.orderedModifiers.length;P++){if(!0===s.reset){s.reset=!1,P=-1;continue}var M=s.orderedModifiers[P],R=M.fn,L=M.options,N=void 0===L?{}:L,W=M.name;"function"==typeof R&&(s=R({state:s,options:N,name:W,instance:p})||s)}}}},update:function(){return a||(a=new Promise(function(e){Promise.resolve().then(function(){a=void 0,e(new Promise(function(e){p.forceUpdate(),e(s)}))})})),a},destroy:function(){d(),c=!0}};if(!V(e,t))return p;function d(){f.forEach(function(e){return e()}),f=[]}return p.setOptions(n).then(function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)}),p})}}]);