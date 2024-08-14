import*as t from"@dropins/tools/event-bus.js";import*as e from"@dropins/tools/fetch-graphql.js";import*as r from"@dropins/tools/preact-compat.js";import*as n from"@dropins/tools/preact-hooks.js";import*as o from"@dropins/tools/preact-jsx-runtime.js";import*as i from"@dropins/tools/preact.js";export const id=2655;export const ids=[2655];export const modules={892:(t,e,r)=>{r.d(e,{createElement:()=>n.createElement});var n=r(7706),o=r(2885);function i(t,e){for(var r in t)if("__source"!==r&&!(r in e))return!0;for(var n in e)if("__source"!==n&&t[n]!==e[n])return!0;return!1}function a(t,e){this.props=t,this.context=e}(a.prototype=new n.Component).isPureReactComponent=!0,a.prototype.shouldComponentUpdate=function(t,e){return i(this.props,t)||i(this.state,e)};var s=n.options.__b;n.options.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),s&&s(t)},"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var u=(n.toChildArray,n.options.__e);n.options.__e=function(t,e,r,n){if(t.then)for(var o,i=e;i=i.__;)if((o=i.__c)&&o.__c)return null==e.__e&&(e.__e=r.__e,e.__k=r.__k),o.__c(t,e);u(t,e,r,n)};var l=n.options.unmount;function c(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach((function(t){"function"==typeof t.__c&&t.__c()})),t.__c.__H=null),null!=(t=function(t,e){for(var r in e)t[r]=e[r];return t}({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map((function(t){return c(t,e,r)}))),t}function f(t,e,r){return t&&r&&(t.__v=null,t.__k=t.__k&&t.__k.map((function(t){return f(t,e,r)})),t.__c&&t.__c.__P===e&&(t.__e&&r.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=r)),t}function v(){this.__u=0,this.t=null,this.__b=null}function p(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function d(){this.u=null,this.o=null}n.options.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&32&t.__u&&(t.type=null),l&&l(t)},(v.prototype=new n.Component).__c=function(t,e){var r=e.__c,n=this;null==n.t&&(n.t=[]),n.t.push(r);var o=p(n.__v),i=!1,a=function(){i||(i=!0,r.__R=null,o?o(s):s())};r.__R=a;var s=function(){if(! --n.__u){if(n.state.__a){var t=n.state.__a;n.__v.__k[0]=f(t,t.__c.__P,t.__c.__O)}var e;for(n.setState({__a:n.__b=null});e=n.t.pop();)e.forceUpdate()}};n.__u++||32&e.__u||n.setState({__a:n.__b=n.__v.__k[0]}),t.then(a,a)},v.prototype.componentWillUnmount=function(){this.t=[]},v.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=c(this.__b,r,o.__O=o.__P)}this.__b=null}var i=e.__a&&(0,n.createElement)(n.Fragment,null,t.fallback);return i&&(i.__u&=-33),[(0,n.createElement)(n.Fragment,null,e.__a?null:t.children),i]};var h=function(t,e,r){if(++r[1]===r[0]&&t.o.delete(e),t.props.revealOrder&&("t"!==t.props.revealOrder[0]||!t.o.size))for(r=t.u;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;t.u=r=r[2]}};(d.prototype=new n.Component).__a=function(t){var e=this,r=p(e.__v),n=e.o.get(t);return n[0]++,function(o){var i=function(){e.props.revealOrder?(n.push(o),h(e,t,n)):o()};r?r(i):i()}},d.prototype.render=function(t){this.u=null,this.o=new Map;var e=(0,n.toChildArray)(t.children);t.revealOrder&&"b"===t.revealOrder[0]&&e.reverse();for(var r=e.length;r--;)this.o.set(e[r],this.u=[1,0,this.u]);return t.children},d.prototype.componentDidUpdate=d.prototype.componentDidMount=function(){var t=this;this.o.forEach((function(e,r){h(t,r,e)}))};var _="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,m=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,y=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,b=/[A-Z0-9]/g,g="undefined"!=typeof document,E=function(t){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(t)};n.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(t){Object.defineProperty(n.Component.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})}));var j=n.options.event;function O(){}function x(){return this.cancelBubble}function S(){return this.defaultPrevented}n.options.event=function(t){return j&&(t=j(t)),t.persist=O,t.isPropagationStopped=x,t.isDefaultPrevented=S,t.nativeEvent=t};var C={enumerable:!1,configurable:!0,get:function(){return this.class}},w=n.options.vnode;n.options.vnode=function(t){"string"==typeof t.type&&function(t){var e=t.props,r=t.type,o={};for(var i in e){var a=e[i];if(!("value"===i&&"defaultValue"in e&&null==a||g&&"children"===i&&"noscript"===r||"class"===i||"className"===i)){var s=i.toLowerCase();"defaultValue"===i&&"value"in e&&null==e.value?i="value":"download"===i&&!0===a?a="":"translate"===s&&"no"===a?a=!1:"ondoubleclick"===s?i="ondblclick":"onchange"!==s||"input"!==r&&"textarea"!==r||E(e.type)?"onfocus"===s?i="onfocusin":"onblur"===s?i="onfocusout":y.test(i)?i=s:-1===r.indexOf("-")&&m.test(i)?i=i.replace(b,"-$&").toLowerCase():null===a&&(a=void 0):s=i="oninput","oninput"===s&&o[i=s]&&(i="oninputCapture"),o[i]=a}}"select"==r&&o.multiple&&Array.isArray(o.value)&&(o.value=(0,n.toChildArray)(e.children).forEach((function(t){t.props.selected=-1!=o.value.indexOf(t.props.value)}))),"select"==r&&null!=o.defaultValue&&(o.value=(0,n.toChildArray)(e.children).forEach((function(t){t.props.selected=o.multiple?-1!=o.defaultValue.indexOf(t.props.value):o.defaultValue==t.props.value}))),e.class&&!e.className?(o.class=e.class,Object.defineProperty(o,"className",C)):(e.className&&!e.class||e.class&&e.className)&&(o.class=o.className=e.className),t.props=o}(t),t.$$typeof=_,w&&w(t)};var k=n.options.__r;n.options.__r=function(t){k&&k(t),t.__c};var P=n.options.diffed;n.options.diffed=function(t){P&&P(t);var e=t.props,r=t.__e;null!=r&&"textarea"===t.type&&"value"in e&&e.value!==r.value&&(r.value=null==e.value?"":e.value)},n.Fragment,o.useLayoutEffect,o.useState,o.useId,o.useReducer,o.useEffect,o.useLayoutEffect,o.useRef,o.useImperativeHandle,o.useMemo,o.useCallback,o.useContext,o.useDebugValue,n.createElement,n.createContext,n.createRef,n.Fragment,n.Component},1875:(t,e,r)=>{r.d(e,{vP:()=>_});var n=r(7706),o=r(2885);function i(){throw new Error("Cycle detected")}var a=Symbol.for("preact-signals");function s(){if(f>1)f--;else{for(var t,e=!1;void 0!==c;){var r=c;for(c=void 0,v++;void 0!==r;){var n=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&m(r))try{r.c()}catch(r){e||(t=r,e=!0)}r=n}}if(v=0,f--,e)throw t}}var u,l=void 0,c=void 0,f=0,v=0,p=0;function d(t){if(void 0!==l){var e=t.n;if(void 0===e||e.t!==l)return e={i:0,S:t,p:l.s,n:void 0,t:l,e:void 0,x:void 0,r:e},void 0!==l.s&&(l.s.n=e),l.s=e,t.n=e,32&l.f&&t.S(e),e;if(-1===e.i)return e.i=0,void 0!==e.n&&(e.n.p=e.p,void 0!==e.p&&(e.p.n=e.n),e.p=l.s,e.n=void 0,l.s.n=e,l.s=e),e}}function h(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function _(t){return new h(t)}function m(t){for(var e=t.s;void 0!==e;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function y(t){for(var e=t.s;void 0!==e;e=e.n){var r=e.S.n;if(void 0!==r&&(e.r=r),e.S.n=e,e.i=-1,void 0===e.n){t.s=e;break}}}function b(t){for(var e=t.s,r=void 0;void 0!==e;){var n=e.p;-1===e.i?(e.S.U(e),void 0!==n&&(n.n=e.n),void 0!==e.n&&(e.n.p=n)):r=e,e.S.n=e.r,void 0!==e.r&&(e.r=void 0),e=n}t.s=r}function g(t){h.call(this,void 0),this.x=t,this.s=void 0,this.g=p-1,this.f=4}function E(t){var e=t.u;if(t.u=void 0,"function"==typeof e){f++;var r=l;l=void 0;try{e()}catch(e){throw t.f&=-2,t.f|=8,j(t),e}finally{l=r,s()}}}function j(t){for(var e=t.s;void 0!==e;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,E(t)}function O(t){if(l!==this)throw new Error("Out-of-order effect");b(this),l=t,this.f&=-2,8&this.f&&j(this),s()}function x(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function S(t){var e=new x(t);try{e.c()}catch(t){throw e.d(),t}return e.d.bind(e)}function C(t,e){n.options[t]=e.bind(null,n.options[t]||function(){})}function w(t){u&&u(),u=t&&t.S()}function k(t){var e=this,r=t.data,i=function(t){return(0,o.useMemo)((function(){return _(t)}),[])}(r);i.value=r;var a=(0,o.useMemo)((function(){for(var t=e.__v;t=t.__;)if(t.__c){t.__c.__$f|=4;break}return e.__$u.c=function(){var t;(0,n.isValidElement)(a.peek())||3!==(null==(t=e.base)?void 0:t.nodeType)?(e.__$f|=1,e.setState({})):e.base.data=a.peek()},new g((function(){var t=i.value.value;return 0===t?0:!0===t?"":t||""}))}),[]);return a.value}function P(t,e,r,n){var o=e in t&&void 0===t.ownerSVGElement,i=_(r);return{o:function(t,e){i.value=t,n=e},d:S((function(){var r=i.value.value;n[e]!==r&&(n[e]=r,o?t[e]=r:r?t.setAttribute(e,r):t.removeAttribute(e))}))}}h.prototype.brand=a,h.prototype.h=function(){return!0},h.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},h.prototype.U=function(t){if(void 0!==this.t){var e=t.e,r=t.x;void 0!==e&&(e.x=r,t.e=void 0),void 0!==r&&(r.e=e,t.x=void 0),t===this.t&&(this.t=r)}},h.prototype.subscribe=function(t){var e=this;return S((function(){var r=e.value,n=32&this.f;this.f&=-33;try{t(r)}finally{this.f|=n}}))},h.prototype.valueOf=function(){return this.value},h.prototype.toString=function(){return this.value+""},h.prototype.toJSON=function(){return this.value},h.prototype.peek=function(){return this.v},Object.defineProperty(h.prototype,"value",{get:function(){var t=d(this);return void 0!==t&&(t.i=this.i),this.v},set:function(t){if(l instanceof g&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){v>100&&i(),this.v=t,this.i++,p++,f++;try{for(var e=this.t;void 0!==e;e=e.x)e.t.N()}finally{s()}}}}),(g.prototype=new h).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===p)return!0;if(this.g=p,this.f|=1,this.i>0&&!m(this))return this.f&=-2,!0;var t=l;try{y(this),l=this;var e=this.x();(16&this.f||this.v!==e||0===this.i)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return l=t,b(this),this.f&=-2,!0},g.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var e=this.s;void 0!==e;e=e.n)e.S.S(e)}h.prototype.S.call(this,t)},g.prototype.U=function(t){if(void 0!==this.t&&(h.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var e=this.s;void 0!==e;e=e.n)e.S.U(e)}},g.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},g.prototype.peek=function(){if(this.h()||i(),16&this.f)throw this.v;return this.v},Object.defineProperty(g.prototype,"value",{get:function(){1&this.f&&i();var t=d(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),x.prototype.c=function(){var t=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var e=this.x();"function"==typeof e&&(this.u=e)}finally{t()}},x.prototype.S=function(){1&this.f&&i(),this.f|=1,this.f&=-9,E(this),y(this),f++;var t=l;return l=this,O.bind(this,t)},x.prototype.N=function(){2&this.f||(this.f|=2,this.o=c,c=this)},x.prototype.d=function(){this.f|=8,1&this.f||j(this)},k.displayName="_st",Object.defineProperties(h.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:k},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),C("__b",(function(t,e){if("string"==typeof e.type){var r,n=e.props;for(var o in n)if("children"!==o){var i=n[o];i instanceof h&&(r||(e.__np=r={}),r[o]=i,n[o]=i.peek())}}t(e)})),C("__r",(function(t,e){w();var r,n=e.__c;n&&(n.__$f&=-2,void 0===(r=n.__$u)&&(n.__$u=r=function(t){var e;return S((function(){e=this})),e.c=function(){n.__$f|=1,n.setState({})},e}())),w(r),t(e)})),C("__e",(function(t,e,r,n){w(),t(e,r,n)})),C("diffed",(function(t,e){var r;if(w(),"string"==typeof e.type&&(r=e.__e)){var n=e.__np,o=e.props;if(n){var i=r.U;if(i)for(var a in i){var s=i[a];void 0===s||a in n||(s.d(),i[a]=void 0)}else r.U=i={};for(var u in n){var l=i[u],c=n[u];void 0===l?(l=P(r,u,c,o),i[u]=l):l.o(c,o)}}}t(e)})),C("unmount",(function(t,e){if("string"==typeof e.type){var r=e.__e;if(r){var n=r.U;if(n)for(var o in r.U=void 0,n){var i=n[o];i&&i.d()}}}else{var a=e.__c;if(a){var s=a.__$u;s&&(a.__$u=void 0,s.d())}}t(e)})),C("__h",(function(t,e,r,n){(n<3||9===n)&&(e.__$f|=2),t(e,r,n)})),n.Component.prototype.shouldComponentUpdate=function(t,e){var r=this.__$u;if(!(r&&void 0!==r.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var n in e)return!0;for(var o in t)if("__source"!==o&&t[o]!==this.props[o])return!0;for(var i in this.props)if(!(i in t))return!0;return!1}},3525:(t,e,r)=>{r.d(e,{w:()=>u});var n=r(294),o=r(2838),i=r(6129),a=r(5883);function s(t,e,r,n,o,i,a){try{var s=t[i](a),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,o)}var u=function(){var t,e=(t=function*(t){if(!t)throw new o.Xf;var{data:e,errors:r}=yield(0,n.AZ)("\n  query isEmailAvailable($email: String!) {\n    isEmailAvailable(email: $email) {\n      is_email_available\n    }\n  }\n",{method:"GET",cache:"no-cache",variables:{email:t}}).catch(a.n);return r&&(0,i.E)(r),(t=>Boolean(null==t?void 0:t.is_email_available))(e.isEmailAvailable)},function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){s(i,n,o,a,u,"next",t)}function u(t){s(i,n,o,a,u,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}()},5268:(t,e,r)=>{r.d(e,{k:()=>l});var n=r(2838),o=r(9175),i="\n  mutation setGuestEmail($cartId: String!, $email: String!) {\n    setGuestEmailOnCart(input: { cart_id: $cartId, email: $email }) {\n      cart {\n        id\n        ...CheckoutData\n        ...CartSummaryItems\n      }\n    }\n  }\n  ".concat(o.fi,"\n  ").concat(o.Bc,"\n"),a=r(5048),s=r(1831);function u(t,e,r,n,o,i,a){try{var s=t[i](a),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,o)}var l=function(){var t,e=(t=function*(t){var{cartId:e,email:r}=t;if(!e)throw new n.Nc;return yield(0,a.X)({type:"mutation",query:i,options:{variables:{cartId:e,email:r}},path:"setGuestEmailOnCart.cart",signalType:"cart",transformer:s.D})},function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){u(i,n,o,a,s,"next",t)}function s(t){u(i,n,o,a,s,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}()},36:(t,e,r)=>{r.d(e,{Q:()=>j});var n=r(3525),o=r(5268),i=r(1491),a=r(8422),s=r(9145),u=()=>(0,s.jsxs)("p",{className:"checkout-login-form__signIn",children:[(0,s.jsx)(a.EY,{id:"Checkout.LoginForm.account"}),(0,s.jsx)("a",{className:"checkout-login-form__link",href:"#",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(a.EY,{id:"Checkout.LoginForm.signIn"})})]}),l=r(2846),c=r(2421),f=t=>{var{value:e,error:r,hint:n,onChange:o,onBlur:i,onInvalid:u}=t,f=(0,a.FV)({LoginFormLabel:"Checkout.LoginForm.ariaLabel",LoginFormFloatingLabel:"Checkout.LoginForm.floatingLabel",LoginFormPlaceholder:"Checkout.LoginForm.placeholder"});return(0,s.jsx)(l.D,{size:"medium",error:r,hint:n,children:(0,s.jsx)(c.p,{id:"customer-email",name:"userName",type:"email",value:e,autocomplete:"email",placeholder:f.LoginFormPlaceholder,floatingLabel:f.LoginFormFloatingLabel,onChange:o,onBlur:i,onInvalid:u,required:!0,"aria-label":f.LoginFormLabel,"aria-required":!0})})},v=r(5444),p=["name","className","currentEmail","hint","error","onEmailChange","onEmailBlur","onEmailInvalid"];function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){var n,o,i;n=t,o=e,i=r[e],(o=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var _=t=>{var{name:e,className:r,currentEmail:n,hint:o,error:l=null,onEmailChange:c,onEmailBlur:d,onEmailInvalid:_}=t,m=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,p),y=(0,a.FV)({Title:"Checkout.LoginForm.title"});return(0,s.jsxs)("div",h(h({},m),{},{className:(0,v.L)(["checkout-login-form",r]),children:[(0,s.jsxs)("div",{className:"checkout-login-form__heading",children:[(0,s.jsx)(i.D,{level:2,className:"checkout-login-form__title",children:y.Title}),(0,s.jsx)(u,{})]}),(0,s.jsx)("div",{className:"checkout-login-form__content",children:(0,s.jsxs)("form",{className:(0,v.L)(["dropin-login-form__form",r]),name:e,noValidate:!0,children:[(0,s.jsx)("button",{type:"submit",disabled:!0,style:"display: none","aria-hidden":"true"}),(0,s.jsx)(f,{value:n||void 0,error:l||"",hint:o,onChange:c,onBlur:d,onInvalid:_})]})})]}))},m=r(2885),y=r(2094),b=r(984),g=["className","email"];function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var j=t=>{var{className:e,email:r=null}=t,i=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,g),u=(0,a.FV)({LoginFormInvalidEmailError:"Checkout.LoginForm.invalidEmailError",LoginFormMissingEmailError:"Checkout.LoginForm.missingEmailError",LoginFormEmailExists:"Checkout.LoginForm.emailExists"}),{data:l}=b.D.value,c=(null==l?void 0:l.id)||"",f=!!l,[v,p]=(0,m.useState)(!1),[d,h]=(0,m.useState)(r),[j,O]=(0,m.useState)(),[x,S]=(0,m.useState)(!0),C=t=>t.valid?null:t.valueMissing?u.LoginFormMissingEmailError:u.LoginFormInvalidEmailError;return!v&&f&&(p(!0),h((null==l?void 0:l.email)||r)),(0,m.useEffect)((()=>{if(d&&!j&&(null==l?void 0:l.email)!==d){var t=setTimeout((()=>{(0,n.w)(d).then((t=>{S(t),(0,o.k)({cartId:c,email:d}).catch((t=>{console.log("set email failed",t)}))})).catch((t=>{console.log(t),O(u.LoginFormInvalidEmailError),S(!0)}))}),1e3);return()=>{t&&clearTimeout(t)}}}),[d,j,u.LoginFormInvalidEmailError,null==l?void 0:l.email,c]),(0,s.jsx)(_,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(Object(r),!0).forEach((function(e){var n,o,i,a;n=t,o=e,i=r[e],(o="symbol"==typeof(a=function(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o))?a:String(a))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({className:e,currentEmail:d,error:j,hint:x?"":u.LoginFormEmailExists,name:y.r,onEmailBlur:t=>{var{validity:e}=t.target;O(C(e))},onEmailChange:t=>{var{value:e}=t.target;h(e),O(null),S(!0)},onEmailInvalid:t=>{var{validity:e}=t.target;O(C(e))}},i))}},2094:(t,e,r)=>{r.d(e,{r:()=>n});var n="login-form"},5859:(t,e,r)=>{r.d(e,{Ay:()=>o.Q,QB:()=>o.Q,rT:()=>n.r});var n=r(2094),o=r(36)},6129:(t,e,r)=>{r.d(e,{E:()=>n});var n=t=>{if(t)throw Error(t.map((t=>t.message)).join(" "))}},1178:(e,r,n)=>{var o,i;e.exports=(o={events:()=>t.events},i={},n.d(i,o),i)},5867:(t,r,n)=>{var o,i;t.exports=(o={FetchGraphQL:()=>e.FetchGraphQL},i={},n.d(i,o),i)},1771:(t,e,n)=>{var o,i;t.exports=(o={Suspense:()=>r.Suspense,createContext:()=>r.createContext,forwardRef:()=>r.forwardRef,lazy:()=>r.lazy,useCallback:()=>r.useCallback,useContext:()=>r.useContext,useEffect:()=>r.useEffect,useImperativeHandle:()=>r.useImperativeHandle,useMemo:()=>r.useMemo,useRef:()=>r.useRef,useState:()=>r.useState},i={},n.d(i,o),i)},2885:(t,e,r)=>{var o,i;t.exports=(o={useCallback:()=>n.useCallback,useContext:()=>n.useContext,useDebugValue:()=>n.useDebugValue,useEffect:()=>n.useEffect,useId:()=>n.useId,useImperativeHandle:()=>n.useImperativeHandle,useLayoutEffect:()=>n.useLayoutEffect,useMemo:()=>n.useMemo,useReducer:()=>n.useReducer,useRef:()=>n.useRef,useState:()=>n.useState},i={},r.d(i,o),i)},997:(t,e,r)=>{var n,i;t.exports=(n={Fragment:()=>o.Fragment,jsx:()=>o.jsx,jsxs:()=>o.jsxs},i={},r.d(i,n),i)},7706:(t,e,r)=>{var n,o;t.exports=(n={Component:()=>i.Component,Fragment:()=>i.Fragment,cloneElement:()=>i.cloneElement,createContext:()=>i.createContext,createElement:()=>i.createElement,createRef:()=>i.createRef,h:()=>i.h,hydrate:()=>i.hydrate,isValidElement:()=>i.isValidElement,options:()=>i.options,render:()=>i.render,toChildArray:()=>i.toChildArray},o={},r.d(o,n),o)}};import a from"../runtime.js";import*as s from"../4568.js";a.C(s);import*as u from"../7878.js";a.C(u);import*as l from"../2362.js";a.C(l);import*as c from"../104.js";a.C(c);import*as f from"./LoginForm.js";a.C(f);var v=(5859,a(a.s=5859)),p=v.rT,d=v.QB,h=v.Ay;export{p as LOGIN_FORM_NAME,d as LoginForm,h as default};