(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2998],{13264:function(e,t,n){"use strict";var r=n(70182);let i=(0,r.ZP)();t.Z=i},59180:function(e,t,n){"use strict";function r(e,t,n){let r={};return Object.keys(e).forEach(i=>{r[i]=e[i].reduce((e,r)=>(r&&(e.push(t(r)),n&&n[r]&&e.push(n[r])),e),[]).join(" ")}),r}n.d(t,{Z:function(){return r}})},75646:function(e,t,n){"use strict";let r;n.d(t,{Z:function(){return s}});let i=e=>e,o=(r=i,{configure(e){r=e},generate:e=>r(e),reset(){r=i}}),l={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function s(e,t,n="Mui"){let r=l[t];return r?`${n}-${r}`:`${o.generate(e)}-${t}`}},69974:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(35944),i=n(99226),o=n(25675),l=n.n(o);let s=e=>{let{src:t,alt:n,title:o,heights:s}=e;return(0,r.tZ)(i.Z,{sx:{height:s,width:"100%",position:"relative",borderRadius:"8px",overflow:"hidden",fontSize:0},children:(0,r.tZ)(l(),{priority:!0,src:t,alt:n,title:o,fill:!0,sizes:"(max-width: 1200px) 88vw, 1200px",style:{objectFit:"cover"}})})};var c=s},75163:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r,i,o=n(35944);n(9452),(r=i||(i={}))[r.normal=21]="normal",r[r.small=18]="small";let l=e=>{let{code:t,size:n="normal",square:r=!1}=e,l=i[n];return(0,o.tZ)("span",{className:"fi fi-".concat(t),style:{borderRadius:r?0:3,width:4*l/3,height:l}})};var s=l},4061:function(e,t,n){"use strict";var r=n(35944),i=n(26447),o=n(23795),l=n(16457),s=n(32618);let c=e=>{let{items:t}=e,{locale:n}=(0,l.Z)();return(0,r.tZ)(i.Z,{id:"header_item_links",direction:"row",spacing:2,sx:{display:{xs:"none",sm:"block"}},children:t.map(e=>(0,r.tZ)(o.Z,{variant:"bodySmallBold",color:"monochrome.darker",href:(0,s.Z)(e.url,n.region),target:e.target||"_self",children:e.text},e.text))})};t.Z=c},74747:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var r=n(35944),i=n(26447),o=n(99226),l=n(18177),s=n(69974),c=n(5367),a=n(22188),u=n(12804),d=n(66838),h=n(51661),m=n(80560),p=n(4061);let Z=e=>{let{pageType:t,showCountrySelector:n=!1}=e,l=(0,m.Z)("extraMenuItemsDesktop");return(0,r.tZ)(o.Z,{mt:2,mb:3,id:"header",children:(0,r.BX)(i.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,r.tZ)(h.Z,{size:h.e.Medium}),(0,r.BX)(i.Z,{direction:"row",spacing:3,children:[(0,r.tZ)(p.Z,{items:l}),n&&(0,r.tZ)(u.Z,{CountrySelectorComponent:d.Z,pageType:t})]})]})})};var f=n(30297),g=n(15861);let v=e=>{let{title:t}=e;return(0,r.tZ)(o.Z,{id:"menu_title",sx:{height:40,px:2,backgroundColor:"primary.light",color:"primary.dark",display:"flex",alignItems:"center"},children:(0,r.tZ)(g.Z,{variant:"bodyBold",children:t})})};var b=n(16457);let x=(e,t)=>{let n=[];for(let r=0;r<e.length;r+=t){let i=null==e?void 0:e.slice(r,r+t);n.push(i)}return n};var y=n(32618),_=n(78561),k=n(23795),w=n(52229);let C=e=>{let{url:t}=e,{t:n}=(0,f.$G)();return(0,r.tZ)(o.Z,{p:1,height:a.W6,sx:{"&:hover .showall":{borderRadius:"8px",backgroundColor:"monochrome.lighter",cursor:"pointer"}},children:(0,r.tZ)(k.Z,{id:"menu_show_all",href:t,underline:"none",variant:"bodyBold",color:"interaction.main",className:"showall",p:1,onClick:()=>{(0,w.Z)(JSON.stringify({event:"click_category",selected_category:t.split("/")[1]||"",event_location:"header"}))},children:n("menu_show_all")})})},O=(e,t,n)=>{var r,i;return e===n-1&&(null==t?void 0:null===(r=t.submenuItems)||void 0===r?void 0:r.length)&&(null==t?void 0:null===(i=t.submenuItems)||void 0===i?void 0:i.length)>14},R=e=>{let{item:t}=e,{locale:n}=(0,b.Z)(),o=t.submenuItems?x(t.submenuItems.slice(0,14),5):[];return(0,r.tZ)(r.HY,{children:o.map((e,l)=>{let s=O(l,t,o.length);return(0,r.BX)(i.Z,{id:"submenu_column",direction:"column",sx:{minWidth:"130px"},children:[e.map(e=>(0,r.tZ)(_.Z,{item:e,desktop:!0},e.text)),s&&(0,r.tZ)(C,{url:(0,y.Z)(t.url,n.region)})]},"column-".concat(l+1))})})},B=e=>{let{item:t}=e;return(0,r.BX)(o.Z,{id:"submenu",sx:{top:-1,left:"100%",position:"absolute",opacity:0,visibility:"hidden",borderRadius:"0 0 8px 8px",backgroundColor:"common.white",transition:"visibility 0s, opacity 300ms ease-in",border:"thin solid",borderLeft:"2px solid",borderColor:"monochrome.lighter"},className:"submenu",children:[t.text&&(0,r.tZ)(v,{title:null==t?void 0:t.text}),(0,r.tZ)(i.Z,{spacing:1,pb:1,direction:"row",children:t.submenuItems&&(0,r.tZ)(R,{item:t})})]})};var I=n(68594);let E=e=>{let{items:t}=e,{t:n}=(0,f.$G)();return(0,r.BX)(o.Z,{id:"menu",sx:{top:0,left:"5%",position:"absolute",backgroundColor:"common.white",width:"30%",minWidth:"275px",borderRadius:"0 0 8px 8px",border:"thin solid",borderColor:"monochrome.lighter"},children:[(0,r.tZ)(v,{title:n("shop_by_category")}),(0,r.tZ)(i.Z,{pb:1,id:"menu_items",children:t.map(e=>e&&(0,r.BX)(o.Z,{sx:{"&:hover":{".submenu":{opacity:1,visibility:"visible"},".category":{fontWeight:{xs:400,sm:700}}}},className:"menu-box",children:[(0,r.tZ)(I.Z,{item:e,desktop:!0}),(0,r.tZ)(B,{item:e})]},e.text))})]})},P=e=>{let{bannerProps:t,carouselProps:n}=e;return t?(0,r.tZ)(s.Z,{src:t.src,alt:t.alt,title:t.title,heights:t.heights}):(null==n?void 0:n.banners)?(0,r.tZ)(c.Z,{banners:n.banners,heights:n.heights}):null},T=e=>{let{items:t,carouselProps:n,bannerProps:s,pageType:c,showCountrySelector:u}=e,d=null==s?void 0:s.heights,{sm:h,md:m,lg:p}=a.NA,f=a.W6*(t.length+1)+t.length*a.qg,g={sm:Math.max(f,(null==d?void 0:d.sm)||h),md:Math.max(f,(null==d?void 0:d.md)||m),lg:Math.max(f,(null==d?void 0:d.lg)||p)};return(0,r.BX)(i.Z,{sx:{width:"100%"},children:[(0,r.tZ)(Z,{pageType:c,showCountrySelector:u}),(0,r.tZ)(l.Z,{}),(0,r.BX)(o.Z,{sx:{position:"relative",height:g},children:[(0,r.tZ)(P,{carouselProps:n,bannerProps:s}),(0,r.tZ)(E,{items:t})]})]})};var N=T},242:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(35944),i=n(26447),o=n(65582),l=n(87821),s=n(59019);let c=e=>{let{FooterProps:t,PageHeaderProps:n,ContainerProps:c,children:a}=e;return(0,r.BX)(i.Z,{sx:{minHeight:"100vh"},spacing:3,children:[(0,r.BX)(i.Z,{children:[(0,r.tZ)(o.Z,{sx:{px:{xs:0,sm:5,lg:0,lineHeight:0}},children:(0,r.tZ)(s.Z,{menu:null==n?void 0:n.menu})}),null==n?void 0:n.adornment,(0,r.tZ)(o.Z,{sx:{py:2,px:{xs:3,sm:5,lg:0},...c},className:"page-content",children:a})]}),(0,r.tZ)(l.Z,{news:null==t?void 0:t.news,navLinks:null==t?void 0:t.navLinks})]})};var a=c},3381:function(e,t,n){"use strict";n.r(t);var r=n(35944),i=n(26447),o=n(67720),l=n(242),s=n(74747);let c=e=>{let{FooterProps:t,MenuProps:n,children:c}=e;return(0,r.tZ)(l.Z,{PageHeaderProps:{menu:(0,r.tZ)(s.Z,{...n})},FooterProps:t,ContainerProps:{pt:5},children:(0,r.tZ)(i.Z,{spacing:5,divider:(0,r.tZ)(o.Z,{}),children:(0,r.tZ)(i.Z,{direction:"row",spacing:5,children:c})})})};t.default=c},32983:function(e,t,n){"use strict";var r,i;n.d(t,{c:function(){return r}}),n(9676),n(215),(i=r||(r={})).Brand="BRAND",i.Category="CATEGORY",i.Other="OTHER",i.Product="PRODUCT",i.Home="HOME",i.General="GENERAL",i.Infos="INFO",i.OrderFinished="ORDER_FINISHED"},42625:function(e,t){"use strict";t.Z=e=>null!==e},9452:function(){},92703:function(e,t,n){"use strict";var r=n(50414);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,l){if(l!==r){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},45697:function(e,t,n){e.exports=n(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);