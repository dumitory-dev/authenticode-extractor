import{w as Q,ar as P,o as U,g as w,s as L,c as k,a as i,h as b,b as S,x as T,y as j,r as g,C as D,O as F,U as H,q as K}from"./index.50867fd6.js";const Z={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},G=["beforeShow","show","beforeHide","hide"];function J({showing:e,canShow:a,hideOnRouteChange:n,handleShow:o,handleHide:d,processOnMount:v}){const h=w(),{props:r,emit:c,proxy:B}=h;let s;function m(t){e.value===!0?q(t):y(t)}function y(t){if(r.disable===!0||t!==void 0&&t.qAnchorHandled===!0||a!==void 0&&a(t)!==!0)return;const u=r["onUpdate:modelValue"]!==void 0;u===!0&&(c("update:modelValue",!0),s=t,L(()=>{s===t&&(s=void 0)})),(r.modelValue===null||u===!1)&&f(t)}function f(t){e.value!==!0&&(e.value=!0,c("beforeShow",t),o!==void 0?o(t):c("show",t))}function q(t){if(r.disable===!0)return;const u=r["onUpdate:modelValue"]!==void 0;u===!0&&(c("update:modelValue",!1),s=t,L(()=>{s===t&&(s=void 0)})),(r.modelValue===null||u===!1)&&_(t)}function _(t){e.value!==!1&&(e.value=!1,c("beforeHide",t),d!==void 0?d(t):c("hide",t))}function x(t){r.disable===!0&&t===!0?r["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):t===!0!==e.value&&(t===!0?f:_)(s)}Q(()=>r.modelValue,x),n!==void 0&&P(h)===!0&&Q(()=>B.$route.fullPath,()=>{n.value===!0&&e.value===!0&&q()}),v===!0&&U(()=>{x(r.modelValue)});const p={show:y,hide:q,toggle:m};return Object.assign(B,p),p}var X=k({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:a}){const n=i(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>b("div",{class:n.value},S(a.default))}});const A={dark:{type:Boolean,default:null}};function V(e,a){return i(()=>e.dark===null?a.dark.isActive:e.dark)}var Y=k({name:"QItem",props:{...A,...T,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:a,emit:n}){const{proxy:{$q:o}}=w(),d=V(e,o),{hasLink:v,linkAttrs:h,linkClass:r,linkTag:c,navigateOnClick:B}=j(),s=g(null),m=g(null),y=i(()=>e.clickable===!0||v.value===!0||e.tag==="label"),f=i(()=>e.disable!==!0&&y.value===!0),q=i(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(d.value===!0?" q-item--dark":"")+(v.value===!0&&e.active===null?r.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(f.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),_=i(()=>{if(e.insetLevel===void 0)return null;const u=o.lang.rtl===!0?"Right":"Left";return{["padding"+u]:16+e.insetLevel*56+"px"}});function x(u){f.value===!0&&(m.value!==null&&(u.qKeyEvent!==!0&&document.activeElement===s.value?m.value.focus():document.activeElement===m.value&&s.value.focus()),B(u))}function p(u){if(f.value===!0&&D(u,[13,32])===!0){F(u),u.qKeyEvent=!0;const I=new MouseEvent("click",u);I.qKeyEvent=!0,s.value.dispatchEvent(I)}n("keyup",u)}function t(){const u=H(a.default,[]);return f.value===!0&&u.unshift(b("div",{class:"q-focus-helper",tabindex:-1,ref:m})),u}return()=>{const u={ref:s,class:q.value,style:_.value,role:"listitem",onClick:x,onKeyup:p};return f.value===!0?(u.tabindex=e.tabindex||"0",Object.assign(u,h.value)):y.value===!0&&(u["aria-disabled"]="true"),b(c.value,u,t())}}});const O=["ul","ol"];var ee=k({name:"QList",props:{...A,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const n=w(),o=V(e,n.proxy.$q),d=i(()=>O.includes(e.tag)?null:"list"),v=i(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(o.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>b(e.tag,{class:v.value,role:d.value},S(a.default))}}),te=k({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:a}){const n=i(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>b(e.tag,{class:n.value},S(a.default))}});let E,C=0;const l=new Array(256);for(let e=0;e<256;e++)l[e]=(e+256).toString(16).substring(1);const z=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return a=>{const n=new Uint8Array(a);return e.getRandomValues(n),n}}return a=>{const n=[];for(let o=a;o>0;o--)n.push(Math.floor(Math.random()*256));return n}})(),M=4096;function $(){(E===void 0||C+16>M)&&(C=0,E=z(M));const e=Array.prototype.slice.call(E,C,C+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,l[e[0]]+l[e[1]]+l[e[2]]+l[e[3]]+"-"+l[e[4]]+l[e[5]]+"-"+l[e[6]]+l[e[7]]+"-"+l[e[8]]+l[e[9]]+"-"+l[e[10]]+l[e[11]]+l[e[12]]+l[e[13]]+l[e[14]]+l[e[15]]}function N(e){return e==null?null:e}function R(e,a){return e==null?a===!0?`f_${$()}`:null:e}function ae({getValue:e,required:a=!0}={}){if(K.value===!0){const n=e!==void 0?g(N(e())):g(null);return a===!0&&n.value===null&&U(()=>{n.value=`f_${$()}`}),e!==void 0&&Q(e,o=>{n.value=R(o,a)}),n}return e!==void 0?i(()=>R(e(),a)):g(`f_${$()}`)}var ne=k({name:"QCard",props:{...A,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:a}){const{proxy:{$q:n}}=w(),o=V(e,n),d=i(()=>"q-card"+(o.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>b(e.tag,{class:d.value},S(a.default))}}),ue=(e,a)=>{const n=e.__vccOpts||e;for(const[o,d]of a)n[o]=d;return n};export{ee as Q,ue as _,G as a,J as b,A as c,V as d,Y as e,X as f,ae as g,ne as h,te as i,$ as j,Z as u};