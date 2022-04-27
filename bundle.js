'use strict';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var react = {exports: {}};

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1=Symbol.for("react.element"),n$1=Symbol.for("react.portal"),p$2=Symbol.for("react.fragment"),q$2=Symbol.for("react.strict_mode"),r$1=Symbol.for("react.profiler"),t$1=Symbol.for("react.provider"),u$1=Symbol.for("react.context"),v$1=Symbol.for("react.forward_ref"),w$1=Symbol.for("react.suspense"),x$1=Symbol.for("react.memo"),y$1=Symbol.for("react.lazy"),z$2=Symbol.iterator;function A$2(a){if(null===a||"object"!==typeof a)return null;a=z$2&&a[z$2]||a["@@iterator"];return "function"===typeof a?a:null}
var B$1={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C$1=Object.assign,D$2={};function E$2(a,b,e){this.props=a;this.context=b;this.refs=D$2;this.updater=e||B$1;}E$2.prototype.isReactComponent={};
E$2.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E$2.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F$2(){}F$2.prototype=E$2.prototype;function G$2(a,b,e){this.props=a;this.context=b;this.refs=D$2;this.updater=e||B$1;}var H$2=G$2.prototype=new F$2;
H$2.constructor=G$2;C$1(H$2,E$2.prototype);H$2.isPureReactComponent=!0;var I$2=Array.isArray,J$1=Object.prototype.hasOwnProperty,K$1={current:null},L$1={key:!0,ref:!0,__self:!0,__source:!0};
function M$2(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J$1.call(b,d)&&!L$1.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l$1,type:a,key:k,ref:h,props:c,_owner:K$1.current}}
function N$1(a,b){return {$$typeof:l$1,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O$1(a){return "object"===typeof a&&null!==a&&a.$$typeof===l$1}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P$2=/\/+/g;function Q$2(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R$2(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l$1:case n$1:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q$2(h,0):d,I$2(c)?(e="",null!=a&&(e=a.replace(P$2,"$&/")+"/"),R$2(c,b,e,"",function(a){return a})):null!=c&&(O$1(c)&&(c=N$1(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P$2,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I$2(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q$2(k,g);h+=R$2(k,b,e,f,c);}else if(f=A$2(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q$2(k,g++),h+=R$2(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S$2(a,b,e){if(null==a)return a;var d=[],c=0;R$2(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
var U$2={current:null},V$2={transition:null},W$2={ReactCurrentDispatcher:U$2,ReactCurrentBatchConfig:V$2,ReactCurrentOwner:K$1};react_production_min.Children={map:S$2,forEach:function(a,b,e){S$2(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S$2(a,function(){b++;});return b},toArray:function(a){return S$2(a,function(a){return a})||[]},only:function(a){if(!O$1(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E$2;react_production_min.Fragment=p$2;
react_production_min.Profiler=r$1;react_production_min.PureComponent=G$2;react_production_min.StrictMode=q$2;react_production_min.Suspense=w$1;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W$2;
react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C$1({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K$1.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J$1.call(b,f)&&!L$1.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l$1,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u$1,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t$1,_context:a};return a.Consumer=a};react_production_min.createElement=M$2;react_production_min.createFactory=function(a){var b=M$2.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
react_production_min.forwardRef=function(a){return {$$typeof:v$1,render:a}};react_production_min.isValidElement=O$1;react_production_min.lazy=function(a){return {$$typeof:y$1,_payload:{_status:-1,_result:a},_init:T}};react_production_min.memo=function(a,b){return {$$typeof:x$1,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V$2.transition;V$2.transition={};try{a();}finally{V$2.transition=b;}};react_production_min.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
react_production_min.useCallback=function(a,b){return U$2.current.useCallback(a,b)};react_production_min.useContext=function(a){return U$2.current.useContext(a)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U$2.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U$2.current.useEffect(a,b)};react_production_min.useId=function(){return U$2.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U$2.current.useImperativeHandle(a,b,e)};
react_production_min.useInsertionEffect=function(a,b){return U$2.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U$2.current.useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return U$2.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U$2.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U$2.current.useRef(a)};react_production_min.useState=function(a){return U$2.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U$2.current.useSyncExternalStore(a,b,e)};
react_production_min.useTransition=function(){return U$2.current.useTransition()};react_production_min.version="18.0.0-fc46dba67-20220329";

(function (module) {

	{
	  module.exports = react_production_min;
	}
} (react));

var React = /*@__PURE__*/getDefaultExportFromCjs(react.exports);

var reactDom = {exports: {}};

var reactDom_production_min = {};

var scheduler = {exports: {}};

var scheduler_production_min = {};

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (exports) {
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
	function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()};}else {var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q};}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
	"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t);}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else {var b=h(t);null!==b&&K(H,b.startTime-a);}}
	function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b);}else k(r);v=h(r);}if(null!==v)var w=!0;else {var m=h(t);null!==m&&K(H,m.startTime-b);w=!1;}return w}finally{v=null,y=c,z=!1;}}var N=!1,O=null,L=-1,P=5,Q=-1;
	function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a);}finally{b?S():(N=!1,O=null);}}else N=!1;}var S;if("function"===typeof F)S=function(){F(R);};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null);};}else S=function(){D(R,0);};function I(a){O=a;N||(N=!0,S());}function K(a,b){L=D(function(){a(exports.unstable_now());},b);}
	exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J));};
	exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5;};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y;}var c=y;y=b;try{return a()}finally{y=c;}};exports.unstable_pauseExecution=function(){};
	exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=y;y=a;try{return b()}finally{y=c;}};
	exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
	exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c;}}};
} (scheduler_production_min));

(function (module) {

	{
	  module.exports = scheduler_production_min;
	}
} (scheduler));

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa=react.exports,ba=scheduler.exports;function p$1(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ca=new Set,da={};function ea(a,b){fa(a,b);fa(a+"Capture",b);}
function fa(a,b){da[a]=b;for(a=0;a<b.length;a++)ca.add(b[a]);}
var ha=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ia=Object.prototype.hasOwnProperty,ja=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ka=
{},la={};function ma(a){if(ia.call(la,a))return !0;if(ia.call(ka,a))return !1;if(ja.test(a))return la[a]=!0;ka[a]=!0;return !1}function na(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
function oa(a,b,c,d){if(null===b||"undefined"===typeof b||na(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function q$1(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var z$1={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z$1[a]=new q$1(a,0,!1,a,null,!1,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z$1[b]=new q$1(b,1,!1,a[1],null,!1,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z$1[a]=new q$1(a,2,!1,a.toLowerCase(),null,!1,!1);});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z$1[a]=new q$1(a,2,!1,a,null,!1,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z$1[a]=new q$1(a,3,!1,a.toLowerCase(),null,!1,!1);});
["checked","multiple","muted","selected"].forEach(function(a){z$1[a]=new q$1(a,3,!0,a,null,!1,!1);});["capture","download"].forEach(function(a){z$1[a]=new q$1(a,4,!1,a,null,!1,!1);});["cols","rows","size","span"].forEach(function(a){z$1[a]=new q$1(a,6,!1,a,null,!1,!1);});["rowSpan","start"].forEach(function(a){z$1[a]=new q$1(a,5,!1,a.toLowerCase(),null,!1,!1);});var pa=/[\-:]([a-z])/g;function qa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(pa,
qa);z$1[b]=new q$1(b,1,!1,a,null,!1,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(pa,qa);z$1[b]=new q$1(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(pa,qa);z$1[b]=new q$1(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1);});["tabIndex","crossOrigin"].forEach(function(a){z$1[a]=new q$1(a,1,!1,a.toLowerCase(),null,!1,!1);});
z$1.xlinkHref=new q$1("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z$1[a]=new q$1(a,1,!1,a.toLowerCase(),null,!0,!0);});
function ra(a,b,c,d){var e=z$1.hasOwnProperty(b)?z$1[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])oa(b,c,e,d)&&(c=null),d||null===e?ma(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)));}
var sa=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ta=Symbol.for("react.element"),ua=Symbol.for("react.portal"),va=Symbol.for("react.fragment"),wa=Symbol.for("react.strict_mode"),xa=Symbol.for("react.profiler"),ya=Symbol.for("react.provider"),Aa=Symbol.for("react.context"),Ba=Symbol.for("react.forward_ref"),Ca=Symbol.for("react.suspense"),Da=Symbol.for("react.suspense_list"),Ea=Symbol.for("react.memo"),Fa=Symbol.for("react.lazy");var Ga=Symbol.for("react.offscreen");var Ha=Symbol.iterator;function Ia(a){if(null===a||"object"!==typeof a)return null;a=Ha&&a[Ha]||a["@@iterator"];return "function"===typeof a?a:null}var A$1=Object.assign,Ja;function Ka(a){if(void 0===Ja)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ja=b&&b[1]||"";}return "\n"+Ja+a}var La=!1;
function Ma(a,b){if(!a||La)return "";La=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[]);}catch(l){var d=l;}Reflect.construct(a,[],b);}else {try{b.call();}catch(l){d=l;}a.call(b.prototype);}else {try{throw Error();}catch(l){d=l;}a();}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{La=!1,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Ka(a):""}
function Na(a){switch(a.tag){case 5:return Ka(a.type);case 16:return Ka("Lazy");case 13:return Ka("Suspense");case 19:return Ka("SuspenseList");case 0:case 2:case 15:return a=Ma(a.type,!1),a;case 11:return a=Ma(a.type.render,!1),a;case 1:return a=Ma(a.type,!0),a;default:return ""}}
function Oa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case va:return "Fragment";case ua:return "Portal";case xa:return "Profiler";case wa:return "StrictMode";case Ca:return "Suspense";case Da:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Aa:return (a.displayName||"Context")+".Consumer";case ya:return (a._context.displayName||"Context")+".Provider";case Ba:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ea:return b=a.displayName||null,null!==b?b:Oa(a.type)||"Memo";case Fa:b=a._payload;a=a._init;try{return Oa(a(b))}catch(c){}}return null}
function Pa(a){var b=a.type;switch(a.tag){case 24:return "Cache";case 9:return (b.displayName||"Context")+".Consumer";case 10:return (b._context.displayName||"Context")+".Provider";case 18:return "DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return "Fragment";case 5:return b;case 4:return "Portal";case 3:return "Root";case 6:return "Text";case 16:return Oa(b);case 8:return b===wa?"StrictMode":"Mode";case 22:return "Offscreen";
case 12:return "Profiler";case 21:return "Scope";case 13:return "Suspense";case 19:return "SuspenseList";case 25:return "TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Qa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return ""}}
function Ra(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Sa(a){var b=Ra(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
null;delete a[b];}}}}function Ta(a){a._valueTracker||(a._valueTracker=Sa(a));}function Ua(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=Ra(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Va(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Wa(a,b){var c=b.checked;return A$1({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Xa(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Qa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function Ya(a,b){b=b.checked;null!=b&&ra(a,"checked",b,!1);}
function Za(a,b){Ya(a,b);var c=Qa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?$a(a,b.type,c):b.hasOwnProperty("defaultValue")&&$a(a,b.type,Qa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
function ab(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
function $a(a,b,c){if("number"!==b||Va(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}var bb=Array.isArray;
function cb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else {c=""+Qa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
function db(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p$1(91));return A$1({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function eb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p$1(92));if(bb(c)){if(1<c.length)throw Error(p$1(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Qa(c)};}
function fb(a,b){var c=Qa(b.value),d=Qa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function gb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}function hb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}
function ib(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?hb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var jb,kb=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else {jb=jb||document.createElement("div");jb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=jb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
function lb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
var mb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nb=["Webkit","ms","Moz","O"];Object.keys(mb).forEach(function(a){nb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);mb[b]=mb[a];});});function ob(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||mb.hasOwnProperty(a)&&mb[a]?(""+b).trim():b+"px"}
function pb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ob(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var qb=A$1({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function rb(a,b){if(b){if(qb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p$1(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p$1(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p$1(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p$1(62));}}
function sb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}var tb=null;function ub(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var vb=null,wb=null,xb=null;
function yb(a){if(a=zb(a)){if("function"!==typeof vb)throw Error(p$1(280));var b=a.stateNode;b&&(b=Ab(b),vb(a.stateNode,a.type,b));}}function Bb(a){wb?xb?xb.push(a):xb=[a]:wb=a;}function Cb(){if(wb){var a=wb,b=xb;xb=wb=null;yb(a);if(b)for(a=0;a<b.length;a++)yb(b[a]);}}function Db(a,b){return a(b)}function Eb(){}var Fb=!1;function Gb(a,b,c){if(Fb)return a(b,c);Fb=!0;try{return Db(a,b,c)}finally{if(Fb=!1,null!==wb||null!==xb)Eb(),Cb();}}
function Hb(a,b){var c=a.stateNode;if(null===c)return null;var d=Ab(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p$1(231,b,typeof c));return c}var Ib=!1;if(ha)try{var Jb={};Object.defineProperty(Jb,"passive",{get:function(){Ib=!0;}});window.addEventListener("test",Jb,Jb);window.removeEventListener("test",Jb,Jb);}catch(a){Ib=!1;}function Kb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(m){this.onError(m);}}var Lb=!1,Mb=null,Nb=!1,Ob=null,Pb={onError:function(a){Lb=!0;Mb=a;}};function Qb(a,b,c,d,e,f,g,h,k){Lb=!1;Mb=null;Kb.apply(Pb,arguments);}
function Rb(a,b,c,d,e,f,g,h,k){Qb.apply(this,arguments);if(Lb){if(Lb){var l=Mb;Lb=!1;Mb=null;}else throw Error(p$1(198));Nb||(Nb=!0,Ob=l);}}function Sb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Tb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Ub(a){if(Sb(a)!==a)throw Error(p$1(188));}
function Vb(a){var b=a.alternate;if(!b){b=Sb(a);if(null===b)throw Error(p$1(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Ub(e),a;if(f===d)return Ub(e),b;f=f.sibling;}throw Error(p$1(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(p$1(189));}}if(c.alternate!==d)throw Error(p$1(190));}if(3!==c.tag)throw Error(p$1(188));return c.stateNode.current===c?a:b}function Wb(a){a=Vb(a);return null!==a?Xb(a):null}function Xb(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=Xb(a);if(null!==b)return b;a=a.sibling;}return null}
var Yb=ba.unstable_scheduleCallback,Zb=ba.unstable_cancelCallback,$b=ba.unstable_shouldYield,ac=ba.unstable_requestPaint,D$1=ba.unstable_now,bc=ba.unstable_getCurrentPriorityLevel,cc=ba.unstable_ImmediatePriority,dc=ba.unstable_UserBlockingPriority,ec=ba.unstable_NormalPriority,fc=ba.unstable_LowPriority,gc=ba.unstable_IdlePriority,hc=null,ic=null;function jc(a){if(ic&&"function"===typeof ic.onCommitFiberRoot)try{ic.onCommitFiberRoot(hc,a,void 0,128===(a.current.flags&128));}catch(b){}}
var lc=Math.clz32?Math.clz32:kc,mc=Math.log,nc=Math.LN2;function kc(a){a>>>=0;return 0===a?32:31-(mc(a)/nc|0)|0}var oc=64,pc=4194304;
function qc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function rc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=qc(h):(f&=g,0!==f&&(d=qc(f)));}else g=c&~e,0!==g?d=qc(g):0!==f&&(d=qc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-lc(b),e=1<<c,d|=a[c],b&=~e;return d}
function sc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return -1;case 134217728:case 268435456:case 536870912:case 1073741824:return -1;default:return -1}}
function tc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-lc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=sc(h,b);}else k<=b&&(a.expiredLanes|=h);f&=~h;}}function uc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function vc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}function wc(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-lc(b);a[b]=c;}
function xc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-lc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f;}}function yc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-lc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e;}}var E$1=0;function zc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}
var Ac,Bc,Cc,Dc,Ec,Fc=!1,Gc=[],Hc=null,Ic=null,Jc=null,Kc=new Map,Lc=new Map,Mc=[],Nc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Oc(a,b){switch(a){case "focusin":case "focusout":Hc=null;break;case "dragenter":case "dragleave":Ic=null;break;case "mouseover":case "mouseout":Jc=null;break;case "pointerover":case "pointerout":Kc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Lc.delete(b.pointerId);}}
function Pc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=zb(b),null!==b&&Bc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Qc(a,b,c,d,e){switch(b){case "focusin":return Hc=Pc(Hc,a,b,c,d,e),!0;case "dragenter":return Ic=Pc(Ic,a,b,c,d,e),!0;case "mouseover":return Jc=Pc(Jc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Kc.set(f,Pc(Kc.get(f)||null,a,b,c,d,e));return !0;case "gotpointercapture":return f=e.pointerId,Lc.set(f,Pc(Lc.get(f)||null,a,b,c,d,e)),!0}return !1}
function Rc(a){var b=Sc(a.target);if(null!==b){var c=Sb(b);if(null!==c)if(b=c.tag,13===b){if(b=Tb(c),null!==b){a.blockedOn=b;Ec(a.priority,function(){Cc(c);});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}
function Tc(a){if(null!==a.blockedOn)return !1;for(var b=a.targetContainers;0<b.length;){var c=Uc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);tb=d;c.target.dispatchEvent(d);tb=null;}else return b=zb(c),null!==b&&Bc(b),a.blockedOn=c,!1;b.shift();}return !0}function Vc(a,b,c){Tc(a)&&c.delete(b);}function Wc(){Fc=!1;null!==Hc&&Tc(Hc)&&(Hc=null);null!==Ic&&Tc(Ic)&&(Ic=null);null!==Jc&&Tc(Jc)&&(Jc=null);Kc.forEach(Vc);Lc.forEach(Vc);}
function Xc(a,b){a.blockedOn===b&&(a.blockedOn=null,Fc||(Fc=!0,ba.unstable_scheduleCallback(ba.unstable_NormalPriority,Wc)));}
function Yc(a){function b(b){return Xc(b,a)}if(0<Gc.length){Xc(Gc[0],a);for(var c=1;c<Gc.length;c++){var d=Gc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==Hc&&Xc(Hc,a);null!==Ic&&Xc(Ic,a);null!==Jc&&Xc(Jc,a);Kc.forEach(b);Lc.forEach(b);for(c=0;c<Mc.length;c++)d=Mc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Mc.length&&(c=Mc[0],null===c.blockedOn);)Rc(c),null===c.blockedOn&&Mc.shift();}var Zc=sa.ReactCurrentBatchConfig;
function $c(a,b,c,d){var e=E$1,f=Zc.transition;Zc.transition=null;try{E$1=1,ad(a,b,c,d);}finally{E$1=e,Zc.transition=f;}}function bd(a,b,c,d){var e=E$1,f=Zc.transition;Zc.transition=null;try{E$1=4,ad(a,b,c,d);}finally{E$1=e,Zc.transition=f;}}
function ad(a,b,c,d){var e=Uc(a,b,c,d);if(null===e)cd(a,b,d,dd,c),Oc(a,d);else if(Qc(e,a,b,c,d))d.stopPropagation();else if(Oc(a,d),b&4&&-1<Nc.indexOf(a)){for(;null!==e;){var f=zb(e);null!==f&&Ac(f);f=Uc(a,b,c,d);null===f&&cd(a,b,d,dd,c);if(f===e)break;e=f;}null!==e&&d.stopPropagation();}else cd(a,b,d,null,c);}var dd=null;
function Uc(a,b,c,d){dd=null;a=ub(d);a=Sc(a);if(null!==a)if(b=Sb(a),null===b)a=null;else if(c=b.tag,13===c){a=Tb(b);if(null!==a)return a;a=null;}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null;}else b!==a&&(a=null);dd=a;return null}
function ed(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(bc()){case cc:return 1;case dc:return 4;case ec:case fc:return 16;case gc:return 536870912;default:return 16}default:return 16}}var fd=null,gd=null,hd=null;function id(){if(hd)return hd;var a,b=gd,c=b.length,d,e="value"in fd?fd.value:fd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return hd=e.slice(a,1<d?1-d:void 0)}
function jd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function kd(){return !0}function ld(){return !1}
function md(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?kd:ld;this.isPropagationStopped=ld;return this}A$1(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=kd);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=kd);},persist:function(){},isPersistent:kd});return b}
var nd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},od=md(nd),pd=A$1({},nd,{view:0,detail:0}),qd=md(pd),rd,sd,td,vd=A$1({},pd,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ud,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==td&&(td&&"mousemove"===a.type?(rd=a.screenX-td.screenX,sd=a.screenY-td.screenY):sd=rd=0,td=a);return rd},movementY:function(a){return "movementY"in a?a.movementY:sd}}),wd=md(vd),xd=A$1({},vd,{dataTransfer:0}),yd=md(xd),zd=A$1({},pd,{relatedTarget:0}),Ad=md(zd),Bd=A$1({},nd,{animationName:0,elapsedTime:0,pseudoElement:0}),Cd=md(Bd),Dd=A$1({},nd,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),Ed=md(Dd),Fd=A$1({},nd,{data:0}),Gd=md(Fd),Hd={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Id={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Jd[a])?!!b[a]:!1}function ud(){return Kd}
var Ld=A$1({},pd,{key:function(a){if(a.key){var b=Hd[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=jd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Id[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ud,charCode:function(a){return "keypress"===a.type?jd(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
a.type?jd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Md=md(Ld),Nd=A$1({},vd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Od=md(Nd),Pd=A$1({},pd,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ud}),Qd=md(Pd),Rd=A$1({},nd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sd=md(Rd),Td=A$1({},vd,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Ud=md(Td),Vd=[9,13,27,32],Wd=ha&&"CompositionEvent"in window,Xd=null;ha&&"documentMode"in document&&(Xd=document.documentMode);var Yd=ha&&"TextEvent"in window&&!Xd,Zd=ha&&(!Wd||Xd&&8<Xd&&11>=Xd),$d=String.fromCharCode(32),ae=!1;
function be(a,b){switch(a){case "keyup":return -1!==Vd.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return !0;default:return !1}}function ce(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var de=!1;function ee(a,b){switch(a){case "compositionend":return ce(b);case "keypress":if(32!==b.which)return null;ae=!0;return $d;case "textInput":return a=b.data,a===$d&&ae?null:a;default:return null}}
function fe(a,b){if(de)return "compositionend"===a||!Wd&&be(a,b)?(a=id(),hd=gd=fd=null,de=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return Zd&&"ko"!==b.locale?null:b.data;default:return null}}
var ge={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function he(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!ge[a.type]:"textarea"===b?!0:!1}function ie(a,b,c,d){Bb(d);b=je(b,"onChange");0<b.length&&(c=new od("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var ke=null,le=null;function me(a){ne(a,0);}function oe(a){var b=pe(a);if(Ua(b))return a}
function qe(a,b){if("change"===a)return b}var re=!1;if(ha){var se;if(ha){var te="oninput"in document;if(!te){var ue=document.createElement("div");ue.setAttribute("oninput","return;");te="function"===typeof ue.oninput;}se=te;}else se=!1;re=se&&(!document.documentMode||9<document.documentMode);}function ve(){ke&&(ke.detachEvent("onpropertychange",we),le=ke=null);}function we(a){if("value"===a.propertyName&&oe(le)){var b=[];ie(b,le,a,ub(a));Gb(me,b);}}
function xe(a,b,c){"focusin"===a?(ve(),ke=b,le=c,ke.attachEvent("onpropertychange",we)):"focusout"===a&&ve();}function ye(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return oe(le)}function ze(a,b){if("click"===a)return oe(b)}function Ae(a,b){if("input"===a||"change"===a)return oe(b)}function Be(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var Ce="function"===typeof Object.is?Object.is:Be;
function De(a,b){if(Ce(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++){var e=c[d];if(!ia.call(b,e)||!Ce(a[e],b[e]))return !1}return !0}function Ee(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Fe(a,b){var c=Ee(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Ee(c);}}function Ge(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Ge(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function He(){for(var a=window,b=Va();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=Va(a.document);}return b}function Ie(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Je(a){var b=He(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Ge(c.ownerDocument.documentElement,c)){if(null!==d&&Ie(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Fe(c,f);var g=Fe(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)));}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top;}}
var Ke=ha&&"documentMode"in document&&11>=document.documentMode,Le=null,Me=null,Ne=null,Oe=!1;
function Pe(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Oe||null==Le||Le!==Va(d)||(d=Le,"selectionStart"in d&&Ie(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Ne&&De(Ne,d)||(Ne=d,d=je(Me,"onSelect"),0<d.length&&(b=new od("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Le)));}
function Qe(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Re={animationend:Qe("Animation","AnimationEnd"),animationiteration:Qe("Animation","AnimationIteration"),animationstart:Qe("Animation","AnimationStart"),transitionend:Qe("Transition","TransitionEnd")},Se={},Te={};
ha&&(Te=document.createElement("div").style,"AnimationEvent"in window||(delete Re.animationend.animation,delete Re.animationiteration.animation,delete Re.animationstart.animation),"TransitionEvent"in window||delete Re.transitionend.transition);function Ue(a){if(Se[a])return Se[a];if(!Re[a])return a;var b=Re[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Te)return Se[a]=b[c];return a}var Ve=Ue("animationend"),We=Ue("animationiteration"),Xe=Ue("animationstart"),Ye=Ue("transitionend"),Ze=new Map,$e="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function af(a,b){Ze.set(a,b);ea(b,[a]);}for(var bf=0;bf<$e.length;bf++){var cf=$e[bf],df=cf.toLowerCase(),ef=cf[0].toUpperCase()+cf.slice(1);af(df,"on"+ef);}af(Ve,"onAnimationEnd");af(We,"onAnimationIteration");af(Xe,"onAnimationStart");af("dblclick","onDoubleClick");af("focusin","onFocus");af("focusout","onBlur");af(Ye,"onTransitionEnd");fa("onMouseEnter",["mouseout","mouseover"]);fa("onMouseLeave",["mouseout","mouseover"]);fa("onPointerEnter",["pointerout","pointerover"]);
fa("onPointerLeave",["pointerout","pointerover"]);ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ea("onBeforeInput",["compositionend","keypress","textInput","paste"]);ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ff="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gf=new Set("cancel close invalid load scroll toggle".split(" ").concat(ff));
function hf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Rb(d,b,void 0,a);a.currentTarget=null;}
function ne(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;hf(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;hf(e,h,l);f=k;}}}if(Nb)throw a=Ob,Nb=!1,Ob=null,a;}
function F$1(a,b){var c=b[jf];void 0===c&&(c=b[jf]=new Set);var d=a+"__bubble";c.has(d)||(kf(b,a,2,!1),c.add(d));}function lf(a,b,c){var d=0;b&&(d|=4);kf(c,a,d,b);}var mf="_reactListening"+Math.random().toString(36).slice(2);function nf(a){if(!a[mf]){a[mf]=!0;ca.forEach(function(b){"selectionchange"!==b&&(gf.has(b)||lf(b,!1,a),lf(b,!0,a));});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[mf]||(b[mf]=!0,lf("selectionchange",!1,b));}}
function kf(a,b,c,d){switch(ed(b)){case 1:var e=$c;break;case 4:e=bd;break;default:e=ad;}c=e.bind(null,b,c,a);e=void 0;!Ib||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1);}
function cd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return;}for(;null!==h;){g=Sc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode;}}d=d.return;}Gb(function(){var d=f,e=ub(c),g=[];
a:{var h=Ze.get(a);if(void 0!==h){var k=od,n=a;switch(a){case "keypress":if(0===jd(c))break a;case "keydown":case "keyup":k=Md;break;case "focusin":n="focus";k=Ad;break;case "focusout":n="blur";k=Ad;break;case "beforeblur":case "afterblur":k=Ad;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=wd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
yd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Qd;break;case Ve:case We:case Xe:k=Cd;break;case Ye:k=Sd;break;case "scroll":k=qd;break;case "wheel":k=Ud;break;case "copy":case "cut":case "paste":k=Ed;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Od;}var v=0!==(b&4),C=!v&&"scroll"===a,t=v?null!==h?h+"Capture":null:h;v=[];for(var r=d,x;null!==
r;){x=r;var B=x.stateNode;5===x.tag&&null!==B&&(x=B,null!==t&&(B=Hb(r,t),null!=B&&v.push(of(r,B,x))));if(C)break;r=r.return;}0<v.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:v}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==tb&&(n=c.relatedTarget||c.fromElement)&&(Sc(n)||n[pf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Sc(n):null,null!==
n&&(C=Sb(n),n!==C||5!==n.tag&&6!==n.tag))n=null;}else k=null,n=d;if(k!==n){v=wd;B="onMouseLeave";t="onMouseEnter";r="mouse";if("pointerout"===a||"pointerover"===a)v=Od,B="onPointerLeave",t="onPointerEnter",r="pointer";C=null==k?h:pe(k);x=null==n?h:pe(n);h=new v(B,r+"leave",k,c,e);h.target=C;h.relatedTarget=x;B=null;Sc(e)===d&&(v=new v(t,r+"enter",n,c,e),v.target=x,v.relatedTarget=C,B=v);C=B;if(k&&n)b:{v=k;t=n;r=0;for(x=v;x;x=qf(x))r++;x=0;for(B=t;B;B=qf(B))x++;for(;0<r-x;)v=qf(v),r--;for(;0<x-r;)t=
qf(t),x--;for(;r--;){if(v===t||null!==t&&v===t.alternate)break b;v=qf(v);t=qf(t);}v=null;}else v=null;null!==k&&rf(g,h,k,v,!1);null!==n&&null!==C&&rf(g,C,n,v,!0);}}}a:{h=d?pe(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var O=qe;else if(he(h))if(re)O=Ae;else {O=ye;var T=xe;}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(O=ze);if(O&&(O=O(a,d))){ie(g,O,c,e);break a}T&&T(a,h,d);"focusout"===a&&(T=h._wrapperState)&&
T.controlled&&"number"===h.type&&$a(h,"number",h.value);}T=d?pe(d):window;switch(a){case "focusin":if(he(T)||"true"===T.contentEditable)Le=T,Me=d,Ne=null;break;case "focusout":Ne=Me=Le=null;break;case "mousedown":Oe=!0;break;case "contextmenu":case "mouseup":case "dragend":Oe=!1;Pe(g,c,e);break;case "selectionchange":if(Ke)break;case "keydown":case "keyup":Pe(g,c,e);}var za;if(Wd)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
case "compositionupdate":L="onCompositionUpdate";break b}L=void 0;}else de?be(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(Zd&&"ko"!==c.locale&&(de||"onCompositionStart"!==L?"onCompositionEnd"===L&&de&&(za=id()):(fd=e,gd="value"in fd?fd.value:fd.textContent,de=!0)),T=je(d,L),0<T.length&&(L=new Gd(L,a,null,c,e),g.push({event:L,listeners:T}),za?L.data=za:(za=ce(c),null!==za&&(L.data=za))));if(za=Yd?ee(a,c):fe(a,c))d=je(d,"onBeforeInput"),0<d.length&&(e=new Gd("onBeforeInput",
"beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=za);}ne(g,b);});}function of(a,b,c){return {instance:a,listener:b,currentTarget:c}}function je(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Hb(a,c),null!=f&&d.unshift(of(a,f,e)),f=Hb(a,b),null!=f&&d.push(of(a,f,e)));a=a.return;}return d}function qf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function rf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Hb(c,f),null!=k&&g.unshift(of(c,k,h))):e||(k=Hb(c,f),null!=k&&g.push(of(c,k,h))));c=c.return;}0!==g.length&&a.push({event:b,listeners:g});}var sf=/\r\n?/g,tf=/\u0000|\uFFFD/g;function uf(a){return ("string"===typeof a?a:""+a).replace(sf,"\n").replace(tf,"")}function vf(a,b,c){b=uf(b);if(uf(a)!==b&&c)throw Error(p$1(425));}function wf(){}
var xf=null;function yf(a,b){return "textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var zf="function"===typeof setTimeout?setTimeout:void 0,Af="function"===typeof clearTimeout?clearTimeout:void 0,Bf="function"===typeof Promise?Promise:void 0,Df="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Bf?function(a){return Bf.resolve(null).then(a).catch(Cf)}:zf;function Cf(a){setTimeout(function(){throw a;});}
function Ef(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);Yc(b);return}d--;}else "$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e;}while(c);Yc(b);}function Ff(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Gf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null}var Hf=Math.random().toString(36).slice(2),If="__reactFiber$"+Hf,Jf="__reactProps$"+Hf,pf="__reactContainer$"+Hf,jf="__reactEvents$"+Hf,Kf="__reactListeners$"+Hf,Lf="__reactHandles$"+Hf;
function Sc(a){var b=a[If];if(b)return b;for(var c=a.parentNode;c;){if(b=c[pf]||c[If]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Gf(a);null!==a;){if(c=a[If])return c;a=Gf(a);}return b}a=c;c=a.parentNode;}return null}function zb(a){a=a[If]||a[pf];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function pe(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p$1(33));}function Ab(a){return a[Jf]||null}var Mf=[],Nf=-1;function Of(a){return {current:a}}
function G$1(a){0>Nf||(a.current=Mf[Nf],Mf[Nf]=null,Nf--);}function H$1(a,b){Nf++;Mf[Nf]=a.current;a.current=b;}var Pf={},I$1=Of(Pf),Qf=Of(!1),Rf=Pf;function Sf(a,b){var c=a.type.contextTypes;if(!c)return Pf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Tf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Uf(){G$1(Qf);G$1(I$1);}function Vf(a,b,c){if(I$1.current!==Pf)throw Error(p$1(168));H$1(I$1,b);H$1(Qf,c);}function Wf(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p$1(108,Pa(a)||"Unknown",e));return A$1({},c,d)}
function Xf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Pf;Rf=I$1.current;H$1(I$1,a);H$1(Qf,Qf.current);return !0}function Yf(a,b,c){var d=a.stateNode;if(!d)throw Error(p$1(169));c?(a=Wf(a,b,Rf),d.__reactInternalMemoizedMergedChildContext=a,G$1(Qf),G$1(I$1),H$1(I$1,a)):G$1(Qf);H$1(Qf,c);}var Zf=null,$f=!1,ag=!1;function bg(a){null===Zf?Zf=[a]:Zf.push(a);}function cg(a){$f=!0;bg(a);}
function dg(){if(!ag&&null!==Zf){ag=!0;var a=0,b=E$1;try{var c=Zf;for(E$1=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}Zf=null;$f=!1;}catch(e){throw null!==Zf&&(Zf=Zf.slice(a+1)),Yb(cc,dg),e;}finally{E$1=b,ag=!1;}}return null}var eg=sa.ReactCurrentBatchConfig;function fg(a,b){if(a&&a.defaultProps){b=A$1({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var gg=Of(null),hg=null,ig=null,jg=null;function kg(){jg=ig=hg=null;}
function lg(a){var b=gg.current;G$1(gg);a._currentValue=b;}function mg(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return;}}function ng(a,b){hg=a;jg=ig=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(og=!0),a.firstContext=null);}
function pg(a){var b=a._currentValue;if(jg!==a)if(a={context:a,memoizedValue:b,next:null},null===ig){if(null===hg)throw Error(p$1(308));ig=a;hg.dependencies={lanes:0,firstContext:a};}else ig=ig.next=a;return b}var qg=null,rg=!1;function sg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null};}
function tg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function ug(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function vg(a,b){var c=a.updateQueue;null!==c&&(c=c.shared,null!==J&&0!==(a.mode&1)&&0===(K&2)?(a=c.interleaved,null===a?(b.next=b,null===qg?qg=[c]:qg.push(c)):(b.next=a.next,a.next=b),c.interleaved=b):(a=c.pending,null===a?b.next=b:(b.next=a.next,a.next=b),c.pending=b));}function wg(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;yc(a,c);}}
function xg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b;}
function yg(a,b,c,d){var e=a.updateQueue;rg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k));}if(null!==f){var w=e.baseState;g=0;m=l=k=null;h=f;do{var u=h.lane,y=h.eventTime;if((d&u)===u){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,v=h;u=b;y=c;switch(v.tag){case 1:n=v.payload;if("function"===typeof n){w=n.call(y,w,u);break a}w=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=v.payload;u="function"===typeof n?n.call(y,w,u):n;if(null===u||void 0===u)break a;w=A$1({},w,u);break a;case 2:rg=!0;}}null!==h.callback&&0!==h.lane&&(a.flags|=64,u=e.effects,null===u?e.effects=[h]:u.push(h));}else y={eventTime:y,lane:u,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=w):m=m.next=y,g|=u;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else u=h,h=u.next,u.next=null,e.lastBaseUpdate=u,e.shared.pending=null;}while(1);null===m&&(k=w);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);zg|=g;a.lanes=g;a.memoizedState=w;}}
function Ag(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p$1(191,e));e.call(d);}}}var Bg=(new aa.Component).refs;function Cg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A$1({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}
var Fg={isMounted:function(a){return (a=a._reactInternals)?Sb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=M$1(),e=Dg(a),f=ug(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);vg(a,f);b=Eg(a,e,d);null!==b&&wg(b,a,e);},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=M$1(),e=Dg(a),f=ug(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);vg(a,f);b=Eg(a,e,d);null!==b&&wg(b,a,e);},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=M$1(),d=Dg(a),e=ug(c,
d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);vg(a,e);b=Eg(a,d,c);null!==b&&wg(b,a,d);}};function Gg(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!De(c,d)||!De(e,f):!0}
function Hg(a,b,c){var d=!1,e=Pf;var f=b.contextType;"object"===typeof f&&null!==f?f=pg(f):(e=Tf(b)?Rf:I$1.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Sf(a,e):Pf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Fg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Ig(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Fg.enqueueReplaceState(b,b.state,null);}
function Jg(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Bg;sg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=pg(f):(f=Tf(b)?Rf:I$1.current,e.context=Sf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Cg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Fg.enqueueReplaceState(e,e.state,null),yg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308);}var Kg=[],Lg=0,Mg=null,Ng=0,Og=[],Pg=0,Qg=null,Rg=1,Sg="";function Tg(a,b){Kg[Lg++]=Ng;Kg[Lg++]=Mg;Mg=a;Ng=b;}
function Ug(a,b,c){Og[Pg++]=Rg;Og[Pg++]=Sg;Og[Pg++]=Qg;Qg=a;var d=Rg;a=Sg;var e=32-lc(d)-1;d&=~(1<<e);c+=1;var f=32-lc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;Rg=1<<32-lc(b)+e|c<<e|d;Sg=f+a;}else Rg=1<<f|c<<e|d,Sg=a;}function Vg(a){null!==a.return&&(Tg(a,1),Ug(a,1,0));}function Wg(a){for(;a===Mg;)Mg=Kg[--Lg],Kg[Lg]=null,Ng=Kg[--Lg],Kg[Lg]=null;for(;a===Qg;)Qg=Og[--Pg],Og[Pg]=null,Sg=Og[--Pg],Og[Pg]=null,Rg=Og[--Pg],Og[Pg]=null;}var Xg=null,Yg=null,N=!1,Zg=null;
function $g(a,b){var c=ah(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c);}
function bh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,Xg=a,Yg=Ff(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,Xg=a,Yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==Qg?{id:Rg,overflow:Sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=ah(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,Xg=a,Yg=
null,!0):!1;default:return !1}}function ch(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function dh(a){if(N){var b=Yg;if(b){var c=b;if(!bh(a,b)){if(ch(a))throw Error(p$1(418));b=Ff(c.nextSibling);var d=Xg;b&&bh(a,b)?$g(d,c):(a.flags=a.flags&-4097|2,N=!1,Xg=a);}}else {if(ch(a))throw Error(p$1(418));a.flags=a.flags&-4097|2;N=!1;Xg=a;}}}function eh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Xg=a;}
function fh(a){if(a!==Xg)return !1;if(!N)return eh(a),N=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!yf(a.type,a.memoizedProps));if(b&&(b=Yg)){if(ch(a)){for(a=Yg;a;)a=Ff(a.nextSibling);throw Error(p$1(418));}for(;b;)$g(a,b),b=Ff(b.nextSibling);}eh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p$1(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){Yg=Ff(a.nextSibling);break a}b--;}else "$"!==c&&
"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}Yg=null;}}else Yg=Xg?Ff(a.stateNode.nextSibling):null;return !0}function gh(){Yg=Xg=null;N=!1;}function hh(a){null===Zg?Zg=[a]:Zg.push(a);}
function ih(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p$1(309));var d=c.stateNode;}if(!d)throw Error(p$1(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;b===Bg&&(b=e.refs={});null===a?delete b[f]:b[f]=a;};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p$1(284));if(!c._owner)throw Error(p$1(290,a));}return a}
function jh(a,b){a=Object.prototype.toString.call(b);throw Error(p$1(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function kh(a){var b=a._init;return b(a._payload)}
function lh(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c);}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=mh(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=nh(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===va)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Fa&&kh(f)===b.type))return d=e(b,c.props),d.ref=ih(a,b,c),d.return=a,d;d=oh(c.type,c.key,c.props,null,a.mode,d);d.ref=ih(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=ph(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=qh(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function w(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=nh(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case ta:return c=oh(b.type,b.key,b.props,null,a.mode,c),
c.ref=ih(a,null,b),c.return=a,c;case ua:return b=ph(b,a.mode,c),b.return=a,b;case Fa:var d=b._init;return w(a,d(b._payload),c)}if(bb(b)||Ia(b))return b=qh(b,a.mode,c,null),b.return=a,b;jh(a,b);}return null}function u(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case ta:return c.key===e?k(a,b,c,d):null;case ua:return c.key===e?l(a,b,c,d):null;case Fa:return e=c._init,u(a,
b,e(c._payload),d)}if(bb(c)||Ia(c))return null!==e?null:m(a,b,c,d,null);jh(a,c);}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case ta:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case ua:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Fa:var f=d._init;return y(a,b,c,f(d._payload),e)}if(bb(d)||Ia(d))return a=a.get(c)||null,m(b,a,d,e,null);jh(b,d);}return null}
function n(e,g,h,k){for(var l=null,n=null,m=g,r=g=0,x=null;null!==m&&r<h.length;r++){m.index>r?(x=m,m=null):x=m.sibling;var t=u(e,m,h[r],k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,r);null===n?l=t:n.sibling=t;n=t;m=x;}if(r===h.length)return c(e,m),N&&Tg(e,r),l;if(null===m){for(;r<h.length;r++)m=w(e,h[r],k),null!==m&&(g=f(m,g,r),null===n?l=m:n.sibling=m,n=m);N&&Tg(e,r);return l}for(m=d(e,m);r<h.length;r++)x=y(m,e,r,h[r],k),null!==x&&(a&&null!==x.alternate&&m.delete(null===
x.key?r:x.key),g=f(x,g,r),null===n?l=x:n.sibling=x,n=x);a&&m.forEach(function(a){return b(e,a)});N&&Tg(e,r);return l}function v(e,g,h,k){var l=Ia(h);if("function"!==typeof l)throw Error(p$1(150));h=l.call(h);if(null==h)throw Error(p$1(151));for(var m=l=null,n=g,r=g=0,x=null,t=h.next();null!==n&&!t.done;r++,t=h.next()){n.index>r?(x=n,n=null):x=n.sibling;var v=u(e,n,t.value,k);if(null===v){null===n&&(n=x);break}a&&n&&null===v.alternate&&b(e,n);g=f(v,g,r);null===m?l=v:m.sibling=v;m=v;n=x;}if(t.done)return c(e,
n),N&&Tg(e,r),l;if(null===n){for(;!t.done;r++,t=h.next())t=w(e,t.value,k),null!==t&&(g=f(t,g,r),null===m?l=t:m.sibling=t,m=t);N&&Tg(e,r);return l}for(n=d(e,n);!t.done;r++,t=h.next())t=y(n,e,r,t.value,k),null!==t&&(a&&null!==t.alternate&&n.delete(null===t.key?r:t.key),g=f(t,g,r),null===m?l=t:m.sibling=t,m=t);a&&n.forEach(function(a){return b(e,a)});N&&Tg(e,r);return l}function C(a,d,f,h){"object"===typeof f&&null!==f&&f.type===va&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case ta:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===va){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Fa&&kh(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=ih(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling;}f.type===va?(d=qh(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=oh(f.type,f.key,f.props,null,a.mode,h),h.ref=ih(a,d,f),h.return=a,a=h);}return g(a);case ua:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=ph(f,a.mode,h);d.return=a;a=d;}return g(a);case Fa:return l=f._init,C(a,d,l(f._payload),h)}if(bb(f))return n(a,d,f,h);if(Ia(f))return v(a,d,f,h);jh(a,f);}return "string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=nh(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return C}var rh=lh(!0),sh=lh(!1),th={},uh=Of(th),vh=Of(th),wh=Of(th);function xh(a){if(a===th)throw Error(p$1(174));return a}function yh(a,b){H$1(wh,b);H$1(vh,a);H$1(uh,th);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:ib(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=ib(b,a);}G$1(uh);H$1(uh,b);}function zh(){G$1(uh);G$1(vh);G$1(wh);}
function Ah(a){xh(wh.current);var b=xh(uh.current);var c=ib(b,a.type);b!==c&&(H$1(vh,a),H$1(uh,c));}function Bh(a){vh.current===a&&(G$1(uh),G$1(vh));}var P$1=Of(0);
function Ch(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}var Dh=[];
function Eh(){for(var a=0;a<Dh.length;a++)Dh[a]._workInProgressVersionPrimary=null;Dh.length=0;}var Fh=sa.ReactCurrentDispatcher,Gh=sa.ReactCurrentBatchConfig,Hh=0,Q$1=null,R$1=null,S$1=null,Ih=!1,Jh=!1,Kh=0,Lh=0;function U$1(){throw Error(p$1(321));}function Mh(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!Ce(a[c],b[c]))return !1;return !0}
function Nh(a,b,c,d,e,f){Hh=f;Q$1=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Fh.current=null===a||null===a.memoizedState?Oh:Ph;a=c(d,e);if(Jh){f=0;do{Jh=!1;Kh=0;if(25<=f)throw Error(p$1(301));f+=1;S$1=R$1=null;b.updateQueue=null;Fh.current=Qh;a=c(d,e);}while(Jh)}Fh.current=Rh;b=null!==R$1&&null!==R$1.next;Hh=0;S$1=R$1=Q$1=null;Ih=!1;if(b)throw Error(p$1(300));return a}function Sh(){var a=0!==Kh;Kh=0;return a}
function Th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===S$1?Q$1.memoizedState=S$1=a:S$1=S$1.next=a;return S$1}function Uh(){if(null===R$1){var a=Q$1.alternate;a=null!==a?a.memoizedState:null;}else a=R$1.next;var b=null===S$1?Q$1.memoizedState:S$1.next;if(null!==b)S$1=b,R$1=a;else {if(null===a)throw Error(p$1(310));R$1=a;a={memoizedState:R$1.memoizedState,baseState:R$1.baseState,baseQueue:R$1.baseQueue,queue:R$1.queue,next:null};null===S$1?Q$1.memoizedState=S$1=a:S$1=S$1.next=a;}return S$1}
function Vh(a,b){return "function"===typeof b?b(a):b}
function Wh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p$1(311));c.lastRenderedReducer=a;var d=R$1,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Hh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else {var w={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=w,g=d):k=k.next=w;Q$1.lanes|=m;zg|=m;}l=l.next;}while(null!==l&&l!==f);null===k?g=d:k.next=h;Ce(d,b.memoizedState)||(og=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d;}a=c.interleaved;if(null!==a){e=a;do f=e.lane,Q$1.lanes|=f,zg|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return [b.memoizedState,c.dispatch]}
function Xh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p$1(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);Ce(f,b.memoizedState)||(og=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}function Yh(){}
function Zh(a,b){var c=Q$1,d=Uh(),e=b(),f=!Ce(d.memoizedState,e);f&&(d.memoizedState=e,og=!0);d=d.queue;$h(ai.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==S$1&&S$1.memoizedState.tag&1){c.flags|=2048;bi(9,ci.bind(null,c,d,e,b),void 0,null);if(null===J)throw Error(p$1(349));0!==(Hh&30)||di(c,b,e);}return e}function di(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=Q$1.updateQueue;null===b?(b={lastEffect:null,stores:null},Q$1.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a));}
function ci(a,b,c,d){b.value=c;b.getSnapshot=d;ei(b)&&Eg(a,1,-1);}function ai(a,b,c){return c(function(){ei(b)&&Eg(a,1,-1);})}function ei(a){var b=a.getSnapshot;a=a.value;try{var c=b();return !Ce(a,c)}catch(d){return !0}}function fi(a){var b=Th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:a};b.queue=a;a=a.dispatch=gi.bind(null,Q$1,a);return [b.memoizedState,a]}
function bi(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=Q$1.updateQueue;null===b?(b={lastEffect:null,stores:null},Q$1.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function hi(){return Uh().memoizedState}function ii(a,b,c,d){var e=Th();Q$1.flags|=a;e.memoizedState=bi(1|b,c,void 0,void 0===d?null:d);}
function ji(a,b,c,d){var e=Uh();d=void 0===d?null:d;var f=void 0;if(null!==R$1){var g=R$1.memoizedState;f=g.destroy;if(null!==d&&Mh(d,g.deps)){e.memoizedState=bi(b,c,f,d);return}}Q$1.flags|=a;e.memoizedState=bi(1|b,c,f,d);}function ki(a,b){return ii(8390656,8,a,b)}function $h(a,b){return ji(2048,8,a,b)}function li(a,b){return ji(4,2,a,b)}function mi(a,b){return ji(4,4,a,b)}
function ni(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}function oi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ji(4,4,ni.bind(null,b,a),c)}function pi(){}function qi(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function ri(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function si(a,b){var c=E$1;E$1=0!==c&&4>c?c:4;a(!0);var d=Gh.transition;Gh.transition={};try{a(!1),b();}finally{E$1=c,Gh.transition=d;}}function ti(){return Uh().memoizedState}function ui(a,b,c){var d=Dg(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};vi(a)?wi(b,c):(xi(a,b,c),c=M$1(),a=Eg(a,d,c),null!==a&&yi(a,b,d));}
function gi(a,b,c){var d=Dg(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(vi(a))wi(b,e);else {xi(a,b,e);var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(Ce(h,g))return}catch(k){}finally{}c=M$1();a=Eg(a,d,c);null!==a&&yi(a,b,d);}}function vi(a){var b=a.alternate;return a===Q$1||null!==b&&b===Q$1}
function wi(a,b){Jh=Ih=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}function xi(a,b,c){null!==J&&0!==(a.mode&1)&&0===(K&2)?(a=b.interleaved,null===a?(c.next=c,null===qg?qg=[b]:qg.push(b)):(c.next=a.next,a.next=c),b.interleaved=c):(a=b.pending,null===a?c.next=c:(c.next=a.next,a.next=c),b.pending=c);}function yi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;yc(a,c);}}
var Rh={readContext:pg,useCallback:U$1,useContext:U$1,useEffect:U$1,useImperativeHandle:U$1,useInsertionEffect:U$1,useLayoutEffect:U$1,useMemo:U$1,useReducer:U$1,useRef:U$1,useState:U$1,useDebugValue:U$1,useDeferredValue:U$1,useTransition:U$1,useMutableSource:U$1,useSyncExternalStore:U$1,useId:U$1,unstable_isNewReconciler:!1},Oh={readContext:pg,useCallback:function(a,b){Th().memoizedState=[a,void 0===b?null:b];return a},useContext:pg,useEffect:ki,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ii(4194308,
4,ni.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ii(4194308,4,a,b)},useInsertionEffect:function(a,b){return ii(4,2,a,b)},useMemo:function(a,b){var c=Th();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=ui.bind(null,Q$1,a);return [d.memoizedState,a]},useRef:function(a){var b=
Th();a={current:a};return b.memoizedState=a},useState:fi,useDebugValue:pi,useDeferredValue:function(a){var b=fi(a),c=b[0],d=b[1];ki(function(){var b=Gh.transition;Gh.transition={};try{d(a);}finally{Gh.transition=b;}},[a]);return c},useTransition:function(){var a=fi(!1),b=a[0];a=si.bind(null,a[1]);Th().memoizedState=a;return [b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=Q$1,e=Th();if(N){if(void 0===c)throw Error(p$1(407));c=c();}else {c=b();if(null===J)throw Error(p$1(349));
0!==(Hh&30)||di(d,b,c);}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;ki(ai.bind(null,d,f,a),[a]);d.flags|=2048;bi(9,ci.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Th(),b=J.identifierPrefix;if(N){var c=Sg;var d=Rg;c=(d&~(1<<32-lc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Kh++;0<c&&(b+="H"+c.toString(32));b+=":";}else c=Lh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Ph={readContext:pg,useCallback:qi,useContext:pg,useEffect:$h,useImperativeHandle:oi,
useInsertionEffect:li,useLayoutEffect:mi,useMemo:ri,useReducer:Wh,useRef:hi,useState:function(){return Wh(Vh)},useDebugValue:pi,useDeferredValue:function(a){var b=Wh(Vh),c=b[0],d=b[1];$h(function(){var b=Gh.transition;Gh.transition={};try{d(a);}finally{Gh.transition=b;}},[a]);return c},useTransition:function(){var a=Wh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:ti,unstable_isNewReconciler:!1},Qh={readContext:pg,useCallback:qi,useContext:pg,useEffect:$h,
useImperativeHandle:oi,useInsertionEffect:li,useLayoutEffect:mi,useMemo:ri,useReducer:Xh,useRef:hi,useState:function(){return Xh(Vh)},useDebugValue:pi,useDeferredValue:function(a){var b=Xh(Vh),c=b[0],d=b[1];$h(function(){var b=Gh.transition;Gh.transition={};try{d(a);}finally{Gh.transition=b;}},[a]);return c},useTransition:function(){var a=Xh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:ti,unstable_isNewReconciler:!1};
function zi(a,b){try{var c="",d=b;do c+=Na(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e}}function Ai(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Bi="function"===typeof WeakMap?WeakMap:Map;function Ci(a,b,c){c=ug(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Di||(Di=!0,Ei=d);Ai(a,b);};return c}
function Fi(a,b,c){c=ug(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Ai(a,b);};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Ai(a,b);"function"!==typeof d&&(null===Gi?Gi=new Set([this]):Gi.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}
function Hi(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Bi;var e=new Set;d.set(b,e);}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ii.bind(null,a,b,c),b.then(a,a));}function Ji(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return;}while(null!==a);return null}
function Ki(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=ug(-1,1),b.tag=2,vg(c,b))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Li,Mi,Ni,Oi;
Li=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Mi=function(){};
Ni=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;xh(uh.current);var f=null;switch(c){case "input":e=Wa(a,e);d=Wa(a,d);f=[];break;case "select":e=A$1({},e,{value:void 0});d=A$1({},d,{value:void 0});f=[];break;case "textarea":e=db(a,e);d=db(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=wf);}rb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="");}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(da.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g]);}else c||(f||(f=[]),f.push(l,
c)),c=k;else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(da.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&F$1("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Oi=function(a,b,c,d){c!==d&&(b.flags|=4);};
function Pi(a,b){if(!N)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
function V$1(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Qi(a,b,c){var d=b.pendingProps;Wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V$1(b),null;case 1:return Tf(b.type)&&Uf(),V$1(b),null;case 3:d=b.stateNode;zh();G$1(Qf);G$1(I$1);Eh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)fh(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==Zg&&(Ri(Zg),Zg=null));Mi(a,b);V$1(b);return null;case 5:Bh(b);var e=xh(wh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Ni(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else {if(!d){if(null===b.stateNode)throw Error(p$1(166));V$1(b);return null}a=xh(uh.current);if(fh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[If]=b;d[Jf]=f;a=0!==(b.mode&1);switch(c){case "dialog":F$1("cancel",d);F$1("close",d);break;case "iframe":case "object":case "embed":F$1("load",d);break;case "video":case "audio":for(e=0;e<ff.length;e++)F$1(ff[e],d);break;case "source":F$1("error",d);break;case "img":case "image":case "link":F$1("error",
d);F$1("load",d);break;case "details":F$1("toggle",d);break;case "input":Xa(d,f);F$1("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};F$1("invalid",d);break;case "textarea":eb(d,f),F$1("invalid",d);}rb(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(vf(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(vf(d.textContent,h,a),e=["children",""+h]):da.hasOwnProperty(g)&&null!=h&&"onScroll"===
g&&F$1("scroll",d);}switch(c){case "input":Ta(d);ab(d,f,!0);break;case "textarea":Ta(d);gb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=wf);}d=e;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=hb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):
(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[If]=b;a[Jf]=d;Li(a,b,!1,!1);b.stateNode=a;a:{g=sb(c,d);switch(c){case "dialog":F$1("cancel",a);F$1("close",a);e=d;break;case "iframe":case "object":case "embed":F$1("load",a);e=d;break;case "video":case "audio":for(e=0;e<ff.length;e++)F$1(ff[e],a);e=d;break;case "source":F$1("error",a);e=d;break;case "img":case "image":case "link":F$1("error",a);F$1("load",a);e=d;break;case "details":F$1("toggle",
a);e=d;break;case "input":Xa(a,d);e=Wa(a,d);F$1("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A$1({},d,{value:void 0});F$1("invalid",a);break;case "textarea":eb(a,d);e=db(a,d);F$1("invalid",a);break;default:e=d;}rb(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?pb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&kb(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&lb(a,k):"number"===typeof k&&lb(a,
""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(da.hasOwnProperty(f)?null!=k&&"onScroll"===f&&F$1("scroll",a):null!=k&&ra(a,f,k,g));}switch(c){case "input":Ta(a);ab(a,d,!1);break;case "textarea":Ta(a);gb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Qa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?cb(a,!!d.multiple,f,!1):null!=d.defaultValue&&cb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&
(a.onclick=wf);}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1;}}d&&(b.flags|=4);}null!==b.ref&&(b.flags|=512,b.flags|=2097152);}V$1(b);return null;case 6:if(a&&null!=b.stateNode)Oi(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(p$1(166));c=xh(wh.current);xh(uh.current);if(fh(b)){d=b.stateNode;c=b.memoizedProps;d[If]=b;if(f=d.nodeValue!==c)if(a=Xg,null!==a)switch(g=0!==(a.mode&1),a.tag){case 3:vf(d.nodeValue,
c,g);break;case 5:!0!==a.memoizedProps[void 0]&&vf(d.nodeValue,c,g);}f&&(b.flags|=4);}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[If]=b,b.stateNode=d;}V$1(b);return null;case 13:G$1(P$1);d=b.memoizedState;if(N&&null!==Yg&&0!==(b.mode&1)&&0===(b.flags&128)){for(d=Yg;d;)d=Ff(d.nextSibling);gh();b.flags|=98560;return b}if(null!==d&&null!==d.dehydrated){d=fh(b);if(null===a){if(!d)throw Error(p$1(318));d=b.memoizedState;d=null!==d?d.dehydrated:null;if(!d)throw Error(p$1(317));d[If]=b;}else gh(),0===
(b.flags&128)&&(b.memoizedState=null),b.flags|=4;V$1(b);return null}null!==Zg&&(Ri(Zg),Zg=null);if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;c=!1;null===a?fh(b):c=null!==a.memoizedState;d&&!c&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(P$1.current&1)?0===W$1&&(W$1=3):Si()));null!==b.updateQueue&&(b.flags|=4);V$1(b);return null;case 4:return zh(),Mi(a,b),null===a&&nf(b.stateNode.containerInfo),V$1(b),null;case 10:return lg(b.type._context),V$1(b),null;case 17:return Tf(b.type)&&Uf(),V$1(b),null;case 19:G$1(P$1);
f=b.memoizedState;if(null===f)return V$1(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Pi(f,!1);else {if(0!==W$1||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Ch(a);if(null!==g){b.flags|=128;Pi(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,
f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;H$1(P$1,P$1.current&1|2);return b.child}a=a.sibling;}null!==f.tail&&D$1()>Ti&&(b.flags|=128,d=!0,Pi(f,!1),b.lanes=4194304);}else {if(!d)if(a=Ch(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,
null!==c&&(b.updateQueue=c,b.flags|=4),Pi(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!N)return V$1(b),null}else 2*D$1()-f.renderingStartTime>Ti&&1073741824!==c&&(b.flags|=128,d=!0,Pi(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g);}if(null!==f.tail)return b=f.tail,f.rendering=b,f.tail=b.sibling,f.renderingStartTime=D$1(),b.sibling=null,c=P$1.current,H$1(P$1,d?c&1|2:c&1),b;V$1(b);return null;case 22:case 23:return Ui(),d=null!==
b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(Vi&1073741824)&&(V$1(b),b.subtreeFlags&6&&(b.flags|=8192)):V$1(b),null;case 24:return null;case 25:return null}throw Error(p$1(156,b.tag));}var Wi=sa.ReactCurrentOwner,og=!1;function Xi(a,b,c,d){b.child=null===a?sh(b,null,c,d):rh(b,a.child,c,d);}
function Yi(a,b,c,d,e){c=c.render;var f=b.ref;ng(b,e);d=Nh(a,b,c,d,f,e);c=Sh();if(null!==a&&!og)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);N&&c&&Vg(b);b.flags|=1;Xi(a,b,d,e);return b.child}
function $i(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!aj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bj(a,b,f,d,e);a=oh(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:De;if(c(g,d)&&a.ref===b.ref)return Zi(a,b,e)}b.flags|=1;a=mh(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function bj(a,b,c,d,e){if(null!==a&&De(a.memoizedProps,d)&&a.ref===b.ref)if(og=!1,0!==(a.lanes&e))0!==(a.flags&131072)&&(og=!0);else return b.lanes=a.lanes,Zi(a,b,e);return cj(a,b,c,d,e)}
function dj(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null},H$1(ej,Vi),Vi|=c;else if(0!==(c&1073741824))b.memoizedState={baseLanes:0,cachePool:null},d=null!==f?f.baseLanes:c,H$1(ej,Vi),Vi|=d;else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null},b.updateQueue=null,H$1(ej,Vi),Vi|=a,null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):
d=c,H$1(ej,Vi),Vi|=d;Xi(a,b,e,c);return b.child}function fj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152;}function cj(a,b,c,d,e){var f=Tf(c)?Rf:I$1.current;f=Sf(b,f);ng(b,e);c=Nh(a,b,c,d,f,e);d=Sh();if(null!==a&&!og)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);N&&d&&Vg(b);b.flags|=1;Xi(a,b,c,e);return b.child}
function gj(a,b,c,d,e){if(Tf(c)){var f=!0;Xf(b);}else f=!1;ng(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Hg(b,c,d),Jg(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=pg(l):(l=Tf(c)?Rf:I$1.current,l=Sf(b,l));var m=c.getDerivedStateFromProps,w="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;w||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ig(b,g,d,l);rg=!1;var u=b.memoizedState;g.state=u;yg(b,d,g,e);k=b.memoizedState;h!==d||u!==k||Qf.current||rg?("function"===typeof m&&(Cg(b,c,m,d),k=b.memoizedState),(h=rg||Gg(b,c,h,d,u,k,l))?(w||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.flags|=4194308)):("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1);}else {g=b.stateNode;tg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:fg(b.type,h);g.props=l;w=b.pendingProps;u=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=pg(k):(k=Tf(c)?Rf:I$1.current,k=Sf(b,k));var y=c.getDerivedStateFromProps;(m="function"===
typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==w||u!==k)&&Ig(b,g,d,k);rg=!1;u=b.memoizedState;g.state=u;yg(b,d,g,e);var n=b.memoizedState;h!==w||u!==n||Qf.current||rg?("function"===typeof y&&(Cg(b,c,y,d),n=b.memoizedState),(l=rg||Gg(b,c,l,d,u,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&
g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&u===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&u===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=
k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&u===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&u===a.memoizedState||(b.flags|=1024),d=!1);}return hj(a,b,c,d,f,e)}
function hj(a,b,c,d,e,f){fj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&Yf(b,c,!1),Zi(a,b,f);d=b.stateNode;Wi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=rh(b,a.child,null,f),b.child=rh(b,null,h,f)):Xi(a,b,h,f);b.memoizedState=d.state;e&&Yf(b,c,!0);return b.child}function ij(a){var b=a.stateNode;b.pendingContext?Vf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Vf(a,b.context,!1);yh(a,b.containerInfo);}
function jj(a,b,c,d,e){gh();hh(e);b.flags|=256;Xi(a,b,c,d);return b.child}var kj={dehydrated:null,treeContext:null,retryLane:0};function lj(a){return {baseLanes:a,cachePool:null}}
function mj(a,b,c){var d=b.pendingProps,e=P$1.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;H$1(P$1,e&1);if(null===a){dh(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;e=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,e={mode:"hidden",children:e},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
e):f=nj(e,d,0,null),a=qh(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=lj(c),b.memoizedState=kj,a):oj(b,e)}e=a.memoizedState;if(null!==e){h=e.dehydrated;if(null!==h){if(g){if(b.flags&256)return b.flags&=-257,pj(a,b,c,Error(p$1(422)));if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=nj({mode:"visible",children:d.children},e,0,null);f=qh(f,e,c,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&rh(b,a.child,
null,c);b.child.memoizedState=lj(c);b.memoizedState=kj;return f}if(0===(b.mode&1))b=pj(a,b,c,null);else if("$!"===h.data)b=pj(a,b,c,Error(p$1(419)));else if(d=0!==(c&a.childLanes),og||d){d=J;if(null!==d){switch(c&-c){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=
268435456;break;default:f=0;}d=0!==(f&(d.suspendedLanes|c))?0:f;0!==d&&d!==e.retryLane&&(e.retryLane=d,Eg(a,d,-1));}Si();b=pj(a,b,c,Error(p$1(421)));}else "$?"===h.data?(b.flags|=128,b.child=a.child,b=qj.bind(null,a),h._reactRetry=b,b=null):(c=e.treeContext,Yg=Ff(h.nextSibling),Xg=b,N=!0,Zg=null,null!==c&&(Og[Pg++]=Rg,Og[Pg++]=Sg,Og[Pg++]=Qg,Rg=c.id,Sg=c.overflow,Qg=b),b=oj(b,b.pendingProps.children),b.flags|=4096);return b}if(f)return d=rj(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,
f.memoizedState=null===e?lj(c):{baseLanes:e.baseLanes|c,cachePool:null},f.childLanes=a.childLanes&~c,b.memoizedState=kj,d;c=sj(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=rj(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?lj(c):{baseLanes:e.baseLanes|c,cachePool:null},f.childLanes=a.childLanes&~c,b.memoizedState=kj,d;c=sj(a,b,d.children,c);b.memoizedState=null;return c}
function oj(a,b){b=nj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sj(a,b,c,d){var e=a.child;a=e.sibling;c=mh(e,{mode:"visible",children:c});0===(b.mode&1)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(d=b.deletions,null===d?(b.deletions=[a],b.flags|=16):d.push(a));return b.child=c}
function rj(a,b,c,d,e){var f=b.mode;a=a.child;var g=a.sibling,h={mode:"hidden",children:c};0===(f&1)&&b.child!==a?(c=b.child,c.childLanes=0,c.pendingProps=h,b.deletions=null):(c=mh(a,h),c.subtreeFlags=a.subtreeFlags&14680064);null!==g?d=mh(g,d):(d=qh(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function pj(a,b,c,d){null!==d&&hh(d);rh(b,a.child,null,c);a=oj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function tj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);mg(a.return,b,c);}function uj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e);}
function vj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Xi(a,b,d.children,c);d=P$1.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else {if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&tj(a,c,b);else if(19===a.tag)tj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}H$1(P$1,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Ch(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);uj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Ch(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}uj(b,!0,c,null,f);break;case "together":uj(b,!1,null,null,void 0);break;default:b.memoizedState=null;}return b.child}
function Zi(a,b,c){null!==a&&(b.dependencies=a.dependencies);zg|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p$1(153));if(null!==b.child){a=b.child;c=mh(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=mh(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}
function wj(a,b,c){switch(b.tag){case 3:ij(b);gh();break;case 5:Ah(b);break;case 1:Tf(b.type)&&Xf(b);break;case 4:yh(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;H$1(gg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return H$1(P$1,P$1.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return mj(a,b,c);H$1(P$1,P$1.current&1);a=Zi(a,b,c);return null!==a?a.sibling:null}H$1(P$1,P$1.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return vj(a,b,c);b.flags|=128;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);H$1(P$1,P$1.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dj(a,b,c)}return Zi(a,b,c)}
function xj(a,b){Wg(b);switch(b.tag){case 1:return Tf(b.type)&&Uf(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return zh(),G$1(Qf),G$1(I$1),Eh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Bh(b),null;case 13:G$1(P$1);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p$1(340));gh();}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return G$1(P$1),null;case 4:return zh(),null;case 10:return lg(b.type._context),null;case 22:case 23:return Ui(),
null;case 24:return null;default:return null}}var yj=!1,zj=!1,Aj="function"===typeof WeakSet?WeakSet:Set,X$1=null;function Bj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null);}catch(d){Cj(a,b,d);}else c.current=null;}function Dj(a,b,c){try{c();}catch(d){Cj(a,b,d);}}var Ej=!1;
function Fj(a,b){a=He();if(Ie(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType;}catch(O){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,w=a,u=null;b:for(;;){for(var y;;){w!==c||0!==e&&3!==w.nodeType||(h=g+e);w!==f||0!==d&&3!==w.nodeType||(k=g+d);3===w.nodeType&&(g+=w.nodeValue.length);
if(null===(y=w.firstChild))break;u=w;w=y;}for(;;){if(w===a)break b;u===c&&++l===e&&(h=g);u===f&&++m===d&&(k=g);if(null!==(y=w.nextSibling))break;w=u;u=w.parentNode;}w=y;}c=-1===h||-1===k?null:{start:h,end:k};}else c=null;}c=c||{start:0,end:0};}else c=null;xf={focusedElem:a,selectionRange:c};for(X$1=b;null!==X$1;)if(b=X$1,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,X$1=a;else for(;null!==X$1;){b=X$1;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;case 1:if(null!==
n){var v=n.memoizedProps,C=n.memoizedState,t=b.stateNode,r=t.getSnapshotBeforeUpdate(b.elementType===b.type?v:fg(b.type,v),C);t.__reactInternalSnapshotBeforeUpdate=r;}break;case 3:var x=b.stateNode.containerInfo;if(1===x.nodeType)x.textContent="";else if(9===x.nodeType){var B=x.body;null!=B&&(B.textContent="");}break;case 5:case 6:case 4:case 17:break;default:throw Error(p$1(163));}}catch(O){Cj(b,b.return,O);}a=b.sibling;if(null!==a){a.return=b.return;X$1=a;break}X$1=b.return;}n=Ej;Ej=!1;return n}
function Gj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Dj(b,c,f);}e=e.next;}while(e!==d)}}function Hj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d();}c=c.next;}while(c!==b)}}function Ij(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c;}"function"===typeof b?b(a):b.current=a;}}
function Jj(a,b,c){if(ic&&"function"===typeof ic.onCommitFiberUnmount)try{ic.onCommitFiberUnmount(hc,b);}catch(g){}switch(b.tag){case 0:case 11:case 14:case 15:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a=a.next;do{var e=d,f=e.destroy;e=e.tag;void 0!==f&&(0!==(e&2)?Dj(b,c,f):0!==(e&4)&&Dj(b,c,f));d=d.next;}while(d!==a)}break;case 1:Bj(b,c);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount();}catch(g){Cj(b,
c,g);}break;case 5:Bj(b,c);break;case 4:Kj(a,b,c);}}function Lj(a){var b=a.alternate;null!==b&&(a.alternate=null,Lj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[If],delete b[Jf],delete b[jf],delete b[Kf],delete b[Lf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null;}function Mj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Nj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Mj(a.return))return null;a=a.return;}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child;}if(!(a.flags&2))return a.stateNode}}
function Oj(a){a:{for(var b=a.return;null!==b;){if(Mj(b))break a;b=b.return;}throw Error(p$1(160));}var c=b;switch(c.tag){case 5:b=c.stateNode;c.flags&32&&(lb(b,""),c.flags&=-33);c=Nj(a);Pj(a,c,b);break;case 3:case 4:b=c.stateNode.containerInfo;c=Nj(a);Qj(a,c,b);break;default:throw Error(p$1(161));}}
function Qj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=wf));else if(4!==d&&(a=a.child,null!==a))for(Qj(a,b,c),a=a.sibling;null!==a;)Qj(a,b,c),a=a.sibling;}
function Pj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Pj(a,b,c),a=a.sibling;null!==a;)Pj(a,b,c),a=a.sibling;}
function Kj(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(p$1(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return;}e=!0;}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,m=k;;)if(Jj(h,m,l),null!==m.child&&4!==m.tag)m.child.return=m,m=m.child;else {if(m===k)break a;for(;null===m.sibling;){if(null===m.return||m.return===k)break a;m=m.return;}m.sibling.return=m.return;m=m.sibling;}g?(h=
f,k=d.stateNode,8===h.nodeType?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode);}else if(18===d.tag)g?(h=f,k=d.stateNode,8===h.nodeType?Ef(h.parentNode,k):1===h.nodeType&&Ef(h,k),Yc(h)):Ef(f,d.stateNode);else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Jj(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&
(e=!1);}d.sibling.return=d.return;d=d.sibling;}}
function Rj(a,b){switch(b.tag){case 0:case 11:case 14:case 15:Gj(3,b,b.return);Hj(3,b);Gj(5,b,b.return);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){"input"===a&&"radio"===d.type&&null!=d.name&&Ya(c,d);sb(a,e);b=sb(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?pb(c,h):"dangerouslySetInnerHTML"===g?kb(c,h):"children"===g?lb(c,h):ra(c,g,h,b);}switch(a){case "input":Za(c,
d);break;case "textarea":fb(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?cb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?cb(c,!!d.multiple,d.defaultValue,!0):cb(c,!!d.multiple,d.multiple?[]:"",!1));}c[Jf]=d;}}return;case 6:if(null===b.stateNode)throw Error(p$1(162));b.stateNode.nodeValue=b.memoizedProps;return;case 3:null!==a&&a.memoizedState.isDehydrated&&Yc(b.stateNode.containerInfo);return;case 12:return;case 13:Sj(b);
return;case 19:Sj(b);return;case 17:return}throw Error(p$1(163));}function Sj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Aj);b.forEach(function(b){var d=Tj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
function Uj(a,b){for(X$1=b;null!==X$1;){b=X$1;var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{Kj(a,e,b);var f=e.alternate;null!==f&&(f.return=null);e.return=null;}catch(L){Cj(e,b,L);}}c=b.child;if(0!==(b.subtreeFlags&12854)&&null!==c)c.return=b,X$1=c;else for(;null!==X$1;){b=X$1;try{var g=b.flags;g&32&&lb(b.stateNode,"");if(g&512){var h=b.alternate;if(null!==h){var k=h.ref;null!==k&&("function"===typeof k?k(null):k.current=null);}}if(g&8192)switch(b.tag){case 13:if(null!==b.memoizedState){var l=
b.alternate;if(null===l||null===l.memoizedState)Vj=D$1();}break;case 22:var m=null!==b.memoizedState,w=b.alternate,u=null!==w&&null!==w.memoizedState;c=b;a:{d=c;e=m;for(var y=null,n=d;;){if(5===n.tag){if(null===y){y=n;var v=n.stateNode;if(e){var C=v.style;"function"===typeof C.setProperty?C.setProperty("display","none","important"):C.display="none";}else {var t=n.stateNode,r=n.memoizedProps.style,x=void 0!==r&&null!==r&&r.hasOwnProperty("display")?r.display:null;t.style.display=ob("display",x);}}}else if(6===
n.tag)null===y&&(n.stateNode.nodeValue=e?"":n.memoizedProps);else if((22!==n.tag&&23!==n.tag||null===n.memoizedState||n===d)&&null!==n.child){n.child.return=n;n=n.child;continue}if(n===d)break;for(;null===n.sibling;){if(null===n.return||n.return===d)break a;y===n&&(y=null);n=n.return;}y===n&&(y=null);n.sibling.return=n.return;n=n.sibling;}}if(m&&!u&&0!==(c.mode&1)){X$1=c;for(var B=c.child;null!==B;){for(c=X$1=B;null!==X$1;){d=X$1;var O=d.child;switch(d.tag){case 0:case 11:case 14:case 15:Gj(4,d,d.return);break;
case 1:Bj(d,d.return);var T=d.stateNode;if("function"===typeof T.componentWillUnmount){var za=d.return;try{T.props=d.memoizedProps,T.state=d.memoizedState,T.componentWillUnmount();}catch(L){Cj(d,za,L);}}break;case 5:Bj(d,d.return);break;case 22:if(null!==d.memoizedState){Wj(c);continue}}null!==O?(O.return=d,X$1=O):Wj(c);}B=B.sibling;}}}switch(g&4102){case 2:Oj(b);b.flags&=-3;break;case 6:Oj(b);b.flags&=-3;Rj(b.alternate,b);break;case 4096:b.flags&=-4097;break;case 4100:b.flags&=-4097;Rj(b.alternate,b);
break;case 4:Rj(b.alternate,b);}}catch(L){Cj(b,b.return,L);}c=b.sibling;if(null!==c){c.return=b.return;X$1=c;break}X$1=b.return;}}}function Xj(a,b,c){X$1=a;Yj(a);}
function Yj(a,b,c){for(var d=0!==(a.mode&1);null!==X$1;){var e=X$1,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||yj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||zj;h=yj;var l=zj;yj=g;if((zj=k)&&!l)for(X$1=e;null!==X$1;)g=X$1,k=g.child,22===g.tag&&null!==g.memoizedState?Zj(e):null!==k?(k.return=g,X$1=k):Zj(e);for(;null!==f;)X$1=f,Yj(f),f=f.sibling;X$1=e;yj=h;zj=l;}ak(a);}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,X$1=f):ak(a);}}
function ak(a){for(;null!==X$1;){var b=X$1;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:zj||Hj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!zj)if(null===c)d.componentDidMount();else {var e=b.elementType===b.type?c.memoizedProps:fg(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate);}var f=b.updateQueue;null!==f&&Ag(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode;}Ag(b,g,c);}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src);}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var w=m.dehydrated;null!==w&&Yc(w);}}}break;case 19:case 17:case 21:case 22:case 23:break;
default:throw Error(p$1(163));}zj||b.flags&512&&Ij(b);}catch(u){Cj(b,b.return,u);}}if(b===a){X$1=null;break}c=b.sibling;if(null!==c){c.return=b.return;X$1=c;break}X$1=b.return;}}function Wj(a){for(;null!==X$1;){var b=X$1;if(b===a){X$1=null;break}var c=b.sibling;if(null!==c){c.return=b.return;X$1=c;break}X$1=b.return;}}
function Zj(a){for(;null!==X$1;){var b=X$1;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Hj(4,b);}catch(k){Cj(b,c,k);}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount();}catch(k){Cj(b,e,k);}}var f=b.return;try{Ij(b);}catch(k){Cj(b,f,k);}break;case 5:var g=b.return;try{Ij(b);}catch(k){Cj(b,g,k);}}}catch(k){Cj(b,b.return,k);}if(b===a){X$1=null;break}var h=b.sibling;if(null!==h){h.return=b.return;X$1=h;break}X$1=b.return;}}
var bk=Math.ceil,ck=sa.ReactCurrentDispatcher,dk=sa.ReactCurrentOwner,ek=sa.ReactCurrentBatchConfig,K=0,J=null,Y=null,Z$1=0,Vi=0,ej=Of(0),W$1=0,fk=null,zg=0,gk=0,hk=0,ik=null,jk=null,Vj=0,Ti=Infinity,Di=!1,Ei=null,Gi=null,kk=!1,lk=null,mk=0,nk=0,ok=null,pk=-1,qk=0;function M$1(){return 0!==(K&6)?D$1():-1!==pk?pk:pk=D$1()}
function Dg(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z$1)return Z$1&-Z$1;if(null!==eg.transition)return 0===qk&&(a=oc,oc<<=1,0===(oc&4194240)&&(oc=64),qk=a),qk;a=E$1;if(0!==a)return a;a=window.event;a=void 0===a?16:ed(a.type);return a}function Eg(a,b,c){if(50<nk)throw nk=0,ok=null,Error(p$1(185));var d=rk(a,b);if(null===d)return null;wc(d,b,c);if(0===(K&2)||d!==J)d===J&&(0===(K&2)&&(gk|=b),4===W$1&&sk(d,Z$1)),tk(d,c),1===b&&0===K&&0===(a.mode&1)&&(Ti=D$1()+500,$f&&dg());return d}
function rk(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
function tk(a,b){var c=a.callbackNode;tc(a,b);var d=rc(a,a===J?Z$1:0);if(0===d)null!==c&&Zb(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&Zb(c);if(1===b)0===a.tag?cg(uk.bind(null,a)):bg(uk.bind(null,a)),Df(function(){0===K&&dg();}),c=null;else {switch(zc(d)){case 1:c=cc;break;case 4:c=dc;break;case 16:c=ec;break;case 536870912:c=gc;break;default:c=ec;}c=vk(c,wk.bind(null,a));}a.callbackPriority=b;a.callbackNode=c;}}
function wk(a,b){pk=-1;qk=0;if(0!==(K&6))throw Error(p$1(327));var c=a.callbackNode;if(xk()&&a.callbackNode!==c)return null;var d=rc(a,a===J?Z$1:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=yk(a,d);else {b=d;var e=K;K|=2;var f=zk();if(J!==a||Z$1!==b)Ti=D$1()+500,Ak(a,b);do try{Bk();break}catch(h){Ck(a,h);}while(1);kg();ck.current=f;K=e;null!==Y?b=0:(J=null,Z$1=0,b=W$1);}if(0!==b){2===b&&(e=uc(a),0!==e&&(d=e,b=Dk(a,e)));if(1===b)throw c=fk,Ak(a,0),sk(a,d),tk(a,D$1()),c;if(6===b)sk(a,d);else {e=
a.current.alternate;if(0===(d&30)&&!Ek(e)&&(b=yk(a,d),2===b&&(f=uc(a),0!==f&&(d=f,b=Dk(a,f))),1===b))throw c=fk,Ak(a,0),sk(a,d),tk(a,D$1()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p$1(345));case 2:Fk(a,jk);break;case 3:sk(a,d);if((d&130023424)===d&&(b=Vj+500-D$1(),10<b)){if(0!==rc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){M$1();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=zf(Fk.bind(null,a,jk),b);break}Fk(a,jk);break;case 4:sk(a,d);if((d&4194240)===d)break;b=
a.eventTimes;for(e=-1;0<d;){var g=31-lc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f;}d=e;d=D$1()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*bk(d/1960))-d;if(10<d){a.timeoutHandle=zf(Fk.bind(null,a,jk),d);break}Fk(a,jk);break;case 5:Fk(a,jk);break;default:throw Error(p$1(329));}}}tk(a,D$1());return a.callbackNode===c?wk.bind(null,a):null}function Dk(a,b){var c=ik;a.current.memoizedState.isDehydrated&&(Ak(a,b).flags|=256);a=yk(a,b);2!==a&&(b=jk,jk=c,null!==b&&Ri(b));return a}
function Ri(a){null===jk?jk=a:jk.push.apply(jk,a);}function Ek(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!Ce(f(),e))return !1}catch(g){return !1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else {if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return !0;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return !0}
function sk(a,b){b&=~hk;b&=~gk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-lc(b),d=1<<c;a[c]=-1;b&=~d;}}function uk(a){if(0!==(K&6))throw Error(p$1(327));xk();var b=rc(a,0);if(0===(b&1))return tk(a,D$1()),null;var c=yk(a,b);if(0!==a.tag&&2===c){var d=uc(a);0!==d&&(b=d,c=Dk(a,d));}if(1===c)throw c=fk,Ak(a,0),sk(a,b),tk(a,D$1()),c;if(6===c)throw Error(p$1(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Fk(a,jk);tk(a,D$1());return null}
function Gk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Ti=D$1()+500,$f&&dg());}}function Hk(a){null!==lk&&0===lk.tag&&0===(K&6)&&xk();var b=K;K|=1;var c=ek.transition,d=E$1;try{if(ek.transition=null,E$1=1,a)return a()}finally{E$1=d,ek.transition=c,K=b,0===(K&6)&&dg();}}function Ui(){Vi=ej.current;G$1(ej);}
function Ak(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Af(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;Wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Uf();break;case 3:zh();G$1(Qf);G$1(I$1);Eh();break;case 5:Bh(d);break;case 4:zh();break;case 13:G$1(P$1);break;case 19:G$1(P$1);break;case 10:lg(d.type._context);break;case 22:case 23:Ui();}c=c.return;}J=a;Y=a=mh(a.current,null);Z$1=Vi=b;W$1=0;fk=null;hk=gk=zg=0;jk=ik=null;if(null!==qg){for(b=
0;b<qg.length;b++)if(c=qg[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g;}c.pending=d;}qg=null;}return a}
function Ck(a,b){do{var c=Y;try{kg();Fh.current=Rh;if(Ih){for(var d=Q$1.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}Ih=!1;}Hh=0;S$1=R$1=Q$1=null;Jh=!1;Kh=0;dk.current=null;if(null===c||null===c.return){W$1=1;fk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z$1;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,w=m.tag;if(0===(m.mode&1)&&(0===w||11===w||15===w)){var u=m.alternate;u?(m.updateQueue=u.updateQueue,m.memoizedState=u.memoizedState,
m.lanes=u.lanes):(m.updateQueue=null,m.memoizedState=null);}var y=Ji(g);if(null!==y){y.flags&=-257;Ki(y,g,h,f,b);y.mode&1&&Hi(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var v=new Set;v.add(k);b.updateQueue=v;}else n.add(k);break a}else {if(0===(b&1)){Hi(f,l,b);Si();break a}k=Error(p$1(426));}}else if(N&&h.mode&1){var C=Ji(g);if(null!==C){0===(C.flags&65536)&&(C.flags|=256);Ki(C,g,h,f,b);hh(k);break a}}f=k;4!==W$1&&(W$1=2);null===ik?ik=[f]:ik.push(f);k=zi(k,h);h=g;do{switch(h.tag){case 3:h.flags|=65536;
b&=-b;h.lanes|=b;var t=Ci(h,k,b);xg(h,t);break a;case 1:f=k;var r=h.type,x=h.stateNode;if(0===(h.flags&128)&&("function"===typeof r.getDerivedStateFromError||null!==x&&"function"===typeof x.componentDidCatch&&(null===Gi||!Gi.has(x)))){h.flags|=65536;b&=-b;h.lanes|=b;var B=Fi(h,f,b);xg(h,B);break a}}h=h.return;}while(null!==h)}Ik(c);}catch(O){b=O;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function zk(){var a=ck.current;ck.current=Rh;return null===a?Rh:a}
function Si(){if(0===W$1||3===W$1||2===W$1)W$1=4;null===J||0===(zg&268435455)&&0===(gk&268435455)||sk(J,Z$1);}function yk(a,b){var c=K;K|=2;var d=zk();J===a&&Z$1===b||Ak(a,b);do try{Jk();break}catch(e){Ck(a,e);}while(1);kg();K=c;ck.current=d;if(null!==Y)throw Error(p$1(261));J=null;Z$1=0;return W$1}function Jk(){for(;null!==Y;)Kk(Y);}function Bk(){for(;null!==Y&&!$b();)Kk(Y);}function Kk(a){var b=Lk(a.alternate,a,Vi);a.memoizedProps=a.pendingProps;null===b?Ik(a):Y=b;dk.current=null;}
function Ik(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Qi(c,b,Vi),null!==c){Y=c;return}}else {c=xj(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else {W$1=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a;}while(null!==b);0===W$1&&(W$1=5);}function Fk(a,b){var c=E$1,d=ek.transition;try{ek.transition=null,E$1=1,Mk(a,b,c);}finally{ek.transition=d,E$1=c;}return null}
function Mk(a,b,c){do xk();while(null!==lk);if(0!==(K&6))throw Error(p$1(327));var d=a.finishedWork,e=a.finishedLanes;if(null===d)return null;a.finishedWork=null;a.finishedLanes=0;if(d===a.current)throw Error(p$1(177));a.callbackNode=null;a.callbackPriority=0;var f=d.lanes|d.childLanes;xc(a,f);a===J&&(Y=J=null,Z$1=0);0===(d.subtreeFlags&2064)&&0===(d.flags&2064)||kk||(kk=!0,vk(ec,function(){xk();return null}));f=0!==(d.flags&15990);if(0!==(d.subtreeFlags&15990)||f){f=ek.transition;ek.transition=null;var g=
E$1;E$1=1;var h=K;K|=4;dk.current=null;Fj(a,d);Uj(a,d);Je(xf);xf=null;a.current=d;Xj(d);ac();K=h;E$1=g;ek.transition=f;}else a.current=d;kk&&(kk=!1,lk=a,mk=e);f=a.pendingLanes;0===f&&(Gi=null);jc(d.stateNode);tk(a,D$1());if(null!==b)for(c=a.onRecoverableError,d=0;d<b.length;d++)c(b[d]);if(Di)throw Di=!1,a=Ei,Ei=null,a;0!==(mk&1)&&0!==a.tag&&xk();f=a.pendingLanes;0!==(f&1)?a===ok?nk++:(nk=0,ok=a):nk=0;dg();return null}
function xk(){if(null!==lk){var a=zc(mk),b=ek.transition,c=E$1;try{ek.transition=null;E$1=16>a?16:a;if(null===lk)var d=!1;else {a=lk;lk=null;mk=0;if(0!==(K&6))throw Error(p$1(331));var e=K;K|=4;for(X$1=a.current;null!==X$1;){var f=X$1,g=f.child;if(0!==(X$1.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(X$1=l;null!==X$1;){var m=X$1;switch(m.tag){case 0:case 11:case 15:Gj(8,m,f);}var w=m.child;if(null!==w)w.return=m,X$1=w;else for(;null!==X$1;){m=X$1;var u=m.sibling,y=m.return;Lj(m);if(m===
l){X$1=null;break}if(null!==u){u.return=y;X$1=u;break}X$1=y;}}}var n=f.alternate;if(null!==n){var v=n.child;if(null!==v){n.child=null;do{var C=v.sibling;v.sibling=null;v=C;}while(null!==v)}}X$1=f;}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,X$1=g;else b:for(;null!==X$1;){f=X$1;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Gj(9,f,f.return);}var t=f.sibling;if(null!==t){t.return=f.return;X$1=t;break b}X$1=f.return;}}var r=a.current;for(X$1=r;null!==X$1;){g=X$1;var x=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
x)x.return=g,X$1=x;else b:for(g=r;null!==X$1;){h=X$1;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Hj(9,h);}}catch(O){Cj(h,h.return,O);}if(h===g){X$1=null;break b}var B=h.sibling;if(null!==B){B.return=h.return;X$1=B;break b}X$1=h.return;}}K=e;dg();if(ic&&"function"===typeof ic.onPostCommitFiberRoot)try{ic.onPostCommitFiberRoot(hc,a);}catch(O){}d=!0;}return d}finally{E$1=c,ek.transition=b;}}return !1}function Nk(a,b,c){b=zi(c,b);b=Ci(a,b,1);vg(a,b);b=M$1();a=rk(a,1);null!==a&&(wc(a,1,b),tk(a,b));}
function Cj(a,b,c){if(3===a.tag)Nk(a,a,c);else for(;null!==b;){if(3===b.tag){Nk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Gi||!Gi.has(d))){a=zi(c,a);a=Fi(b,a,1);vg(b,a);a=M$1();b=rk(b,1);null!==b&&(wc(b,1,a),tk(b,a));break}}b=b.return;}}
function Ii(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=M$1();a.pingedLanes|=a.suspendedLanes&c;J===a&&(Z$1&c)===c&&(4===W$1||3===W$1&&(Z$1&130023424)===Z$1&&500>D$1()-Vj?Ak(a,0):hk|=c);tk(a,b);}function Ok(a,b){0===b&&(0===(a.mode&1)?b=1:(b=pc,pc<<=1,0===(pc&130023424)&&(pc=4194304)));var c=M$1();a=rk(a,b);null!==a&&(wc(a,b,c),tk(a,c));}function qj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Ok(a,c);}
function Tj(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p$1(314));}null!==d&&d.delete(b);Ok(a,c);}var Lk;
Lk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Qf.current)og=!0;else {if(0===(a.lanes&c)&&0===(b.flags&128))return og=!1,wj(a,b,c);og=0!==(a.flags&131072)?!0:!1;}else og=!1,N&&0!==(b.flags&1048576)&&Ug(b,Ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;var e=Sf(b,I$1.current);ng(b,c);e=Nh(null,b,d,a,e,c);var f=Sh();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?
(b.tag=1,b.memoizedState=null,b.updateQueue=null,Tf(d)?(f=!0,Xf(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,sg(b),e.updater=Fg,b.stateNode=e,e._reactInternals=b,Jg(b,d,a,c),b=hj(null,b,d,!0,f,c)):(b.tag=0,N&&f&&Vg(b),Xi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Pk(d);a=fg(d,a);switch(e){case 0:b=cj(null,b,d,a,c);break a;case 1:b=gj(null,b,
d,a,c);break a;case 11:b=Yi(null,b,d,a,c);break a;case 14:b=$i(null,b,d,fg(d.type,a),c);break a}throw Error(p$1(306,d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:fg(d,e),cj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:fg(d,e),gj(a,b,d,e,c);case 3:a:{ij(b);if(null===a)throw Error(p$1(387));d=b.pendingProps;f=b.memoizedState;e=f.element;tg(a,b);yg(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,
cache:g.cache,transitions:g.transitions},b.updateQueue.baseState=f,b.memoizedState=f,b.flags&256){e=Error(p$1(423));b=jj(a,b,d,c,e);break a}else if(d!==e){e=Error(p$1(424));b=jj(a,b,d,c,e);break a}else for(Yg=Ff(b.stateNode.containerInfo.firstChild),Xg=b,N=!0,Zg=null,c=sh(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else {gh();if(d===e){b=Zi(a,b,c);break a}Xi(a,b,d,c);}b=b.child;}return b;case 5:return Ah(b),null===a&&dh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,
yf(d,e)?g=null:null!==f&&yf(d,f)&&(b.flags|=32),fj(a,b),Xi(a,b,g,c),b.child;case 6:return null===a&&dh(b),null;case 13:return mj(a,b,c);case 4:return yh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=rh(b,null,d,c):Xi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:fg(d,e),Yi(a,b,d,e,c);case 7:return Xi(a,b,b.pendingProps,c),b.child;case 8:return Xi(a,b,b.pendingProps.children,c),b.child;case 12:return Xi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=
b.type._context;e=b.pendingProps;f=b.memoizedProps;g=e.value;H$1(gg,d._currentValue);d._currentValue=g;if(null!==f)if(Ce(f.value,g)){if(f.children===e.children&&!Qf.current){b=Zi(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=ug(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k;}}f.lanes|=
c;k=f.alternate;null!==k&&(k.lanes|=c);mg(f.return,c,b);h.lanes|=c;break}k=k.next;}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p$1(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);mg(g,c,b);g=f.sibling;}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return;}f=g;}Xi(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,d=b.pendingProps.children,
ng(b,c),e=pg(e),d=d(e),b.flags|=1,Xi(a,b,d,c),b.child;case 14:return d=b.type,e=fg(d,b.pendingProps),e=fg(d.type,e),$i(a,b,d,e,c);case 15:return bj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:fg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Tf(d)?(a=!0,Xf(b)):a=!1,ng(b,c),Hg(b,d,e),Jg(b,d,e,c),hj(null,b,d,!0,a,c);case 19:return vj(a,b,c);case 22:return dj(a,b,c)}throw Error(p$1(156,b.tag));};function vk(a,b){return Yb(a,b)}
function Qk(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null;}function ah(a,b,c,d){return new Qk(a,b,c,d)}function aj(a){a=a.prototype;return !(!a||!a.isReactComponent)}
function Pk(a){if("function"===typeof a)return aj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Ba)return 11;if(a===Ea)return 14}return 2}
function mh(a,b){var c=a.alternate;null===c?(c=ah(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function oh(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)aj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case va:return qh(c.children,e,f,b);case wa:g=8;e|=8;break;case xa:return a=ah(12,c,b,e|2),a.elementType=xa,a.lanes=f,a;case Ca:return a=ah(13,c,b,e),a.elementType=Ca,a.lanes=f,a;case Da:return a=ah(19,c,b,e),a.elementType=Da,a.lanes=f,a;case Ga:return nj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case Aa:g=9;break a;case Ba:g=11;
break a;case Ea:g=14;break a;case Fa:g=16;d=null;break a}throw Error(p$1(130,null==a?a:typeof a,""));}b=ah(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function qh(a,b,c,d){a=ah(7,a,d,b);a.lanes=c;return a}function nj(a,b,c,d){a=ah(22,a,d,b);a.elementType=Ga;a.lanes=c;a.stateNode={};return a}function nh(a,b,c){a=ah(6,a,null,b);a.lanes=c;return a}
function ph(a,b,c){b=ah(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function Rk(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=vc(0);this.expirationTimes=vc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=vc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null;}function Sk(a,b,c,d,e,f,g,h,k){a=new Rk(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=ah(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null};sg(f);return a}function Tk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:ua,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function Uk(a){if(!a)return Pf;a=a._reactInternals;a:{if(Sb(a)!==a||1!==a.tag)throw Error(p$1(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Tf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return;}while(null!==b);throw Error(p$1(171));}if(1===a.tag){var c=a.type;if(Tf(c))return Wf(a,c,b)}return b}
function Vk(a,b,c,d,e,f,g,h,k){a=Sk(c,d,!0,a,e,f,g,h,k);a.context=Uk(null);c=a.current;d=M$1();e=Dg(c);f=ug(d,e);f.callback=void 0!==b&&null!==b?b:null;vg(c,f);a.current.lanes=e;wc(a,e,d);tk(a,d);return a}function Wk(a,b,c,d){var e=b.current,f=M$1(),g=Dg(e);c=Uk(c);null===b.context?b.context=c:b.pendingContext=c;b=ug(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);vg(e,b);a=Eg(e,g,f);null!==a&&wg(a,e,g);return g}
function Xk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Yk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function Zk(a,b){Yk(a,b);(a=a.alternate)&&Yk(a,b);}function $k(){return null}var al="function"===typeof reportError?reportError:function(a){console.error(a);};function bl(a){this._internalRoot=a;}
cl.prototype.render=bl.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p$1(409));Wk(a,b,null,null);};cl.prototype.unmount=bl.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Hk(function(){Wk(null,a,null,null);});b[pf]=null;}};function cl(a){this._internalRoot=a;}
cl.prototype.unstable_scheduleHydration=function(a){if(a){var b=Dc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Mc.length&&0!==b&&b<Mc[c].priority;c++);Mc.splice(c,0,a);0===c&&Rc(a);}};function dl(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function el(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function fl(){}
function gl(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=Xk(g);f.call(a);};}var g=Vk(b,d,a,0,null,!1,!1,"",fl);a._reactRootContainer=g;a[pf]=g.current;nf(8===a.nodeType?a.parentNode:a);Hk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=Xk(k);h.call(a);};}var k=Sk(a,0,!1,null,null,!1,!1,"",fl);a._reactRootContainer=k;a[pf]=k.current;nf(8===a.nodeType?a.parentNode:a);Hk(function(){Wk(b,k,c,d);});return k}
function hl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=Xk(g);h.call(a);};}Wk(b,g,a,e);}else g=gl(c,b,a,e,d);return Xk(g)}Ac=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=qc(b.pendingLanes);0!==c&&(yc(b,c|1),tk(b,D$1()),0===(K&6)&&(Ti=D$1()+500,dg()));}break;case 13:var d=M$1();Hk(function(){return Eg(a,1,d)});Zk(a,1);}};Bc=function(a){if(13===a.tag){var b=M$1();Eg(a,134217728,b);Zk(a,134217728);}};
Cc=function(a){if(13===a.tag){var b=M$1(),c=Dg(a);Eg(a,c,b);Zk(a,c);}};Dc=function(){return E$1};Ec=function(a,b){var c=E$1;try{return E$1=a,b()}finally{E$1=c;}};
vb=function(a,b,c){switch(b){case "input":Za(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Ab(d);if(!e)throw Error(p$1(90));Ua(d);Za(d,e);}}}break;case "textarea":fb(a,c);break;case "select":b=c.value,null!=b&&cb(a,!!c.multiple,b,!1);}};Db=Gk;Eb=Hk;
var il={usingClientEntryPoint:!1,Events:[zb,pe,Ab,Bb,Cb,Gk]},jl={findFiberByHostInstance:Sc,bundleType:0,version:"18.0.0-fc46dba67-20220329",rendererPackageName:"react-dom"};
var kl={bundleType:jl.bundleType,version:jl.version,rendererPackageName:jl.rendererPackageName,rendererConfig:jl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sa.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Wb(a);return null===a?null:a.stateNode},findFiberByHostInstance:jl.findFiberByHostInstance||
$k,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{hc=ll.inject(kl),ic=ll;}catch(a){}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=il;
reactDom_production_min.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!dl(b))throw Error(p$1(200));return Tk(a,b,null,c)};reactDom_production_min.createRoot=function(a,b){if(!dl(a))throw Error(p$1(299));var c=!1,d="",e=al;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=Sk(a,1,!1,null,null,c,!1,d,e);a[pf]=b.current;nf(8===a.nodeType?a.parentNode:a);return new bl(b)};
reactDom_production_min.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p$1(188));a=Object.keys(a).join(",");throw Error(p$1(268,a));}a=Wb(b);a=null===a?null:a.stateNode;return a};reactDom_production_min.flushSync=function(a){return Hk(a)};reactDom_production_min.hydrate=function(a,b,c){if(!el(b))throw Error(p$1(200));return hl(null,a,b,!0,c)};
reactDom_production_min.hydrateRoot=function(a,b,c){if(!dl(a))throw Error(p$1(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=al;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=Vk(b,null,a,1,null!=c?c:null,e,!1,f,g);a[pf]=b.current;nf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new cl(b)};reactDom_production_min.render=function(a,b,c){if(!el(b))throw Error(p$1(200));return hl(null,a,b,!1,c)};reactDom_production_min.unmountComponentAtNode=function(a){if(!el(a))throw Error(p$1(40));return a._reactRootContainer?(Hk(function(){hl(null,null,a,!1,function(){a._reactRootContainer=null;a[pf]=null;});}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Gk;
reactDom_production_min.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!el(c))throw Error(p$1(200));if(null==a||void 0===a._reactInternals)throw Error(p$1(38));return hl(a,b,c,!1,d)};reactDom_production_min.version="18.0.0-fc46dba67-20220329";

(function (module) {

	function checkDCE() {
	  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	  if (
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
	  ) {
	    return;
	  }
	  try {
	    // Verify that the code above has been dead code eliminated (DCE'd).
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    // DevTools shouldn't crash React, no matter what.
	    // We should still report in case we break this code.
	    console.error(err);
	  }
	}

	{
	  // DCE check should happen before ReactDOM bundle executes so that
	  // DevTools can report bad minification during injection.
	  checkDCE();
	  module.exports = reactDom_production_min;
	}
} (reactDom));

var ReactDOM = /*@__PURE__*/getDefaultExportFromCjs(reactDom.exports);

function n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return "'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(n){return !!n&&!!n[Q]}function t(n){return !!n&&(function(n){if(!n||"object"!=typeof n)return !1;var r=Object.getPrototypeOf(n);if(null===r)return !0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===Z}(n)||Array.isArray(n)||!!n[L]||!!n.constructor[L]||s(n)||v(n))}function i(n,r,t){void 0===t&&(t=!1),0===o(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n);})):n.forEach((function(t,e){return r(e,t,n)}));}function o(n){var r=n[Q];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,r){return 2===o(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a(n,r){return 2===o(n)?n.get(r):n[r]}function f(n,r,t){var e=o(n);2===e?n.set(r,t):3===e?(n.delete(r),n.add(t)):n[r]=t;}function c(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]});}return Object.create(Object.getPrototypeOf(n),r)}function d(n,e){return void 0===e&&(e=!1),y(n)||r(n)||!t(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,r){return d(r,!0)}),!0),n)}function h(){n(2);}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(r){var t=tn[r];return t||n(18,r),t}function m(n,r){tn[n]||(tn[n]=r);}function _(){return U}function j(n,r){r&&(b("Patches"),n.u=[],n.s=[],n.v=r);}function O(n){g(n),n.p.forEach(S),n.p=null;}function g(n){n===U&&(U=n.l);}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var r=n[Q];0===r.i||1===r.i?r.j():r.O=!0;}function P(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.g||b("ES5").S(e,r,o),o?(i[Q].P&&(O(e),n(4)),t(r)&&(r=M(e,r),e.l||x(e,r)),e.u&&b("Patches").M(i[Q].t,r,e.u,e.s)):r=M(e,i,[]),O(e),e.u&&e.v(e.u,e.s),r!==H?r:void 0}function M(n,r,t){if(y(r))return r;var e=r[Q];if(!e)return i(r,(function(i,o){return A(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(r,i){return A(n,e,o,r,i,t)})),x(n,o,!1),t&&n.u&&b("Patches").R(e,t,n.u,n.s);}return e.o}function A(e,i,o,a,c,s){if(r(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!r(v))return;e.m=!1;}if(t(c)&&!y(c)){if(!e.h.F&&e._<1)return;M(e,c),i&&i.A.l||x(e,c);}}function x(n,r,t){void 0===t&&(t=!1),n.h.F&&n.m&&d(r,t);}function z(n,r){var t=n[Q];return (t?p(t):n)[r]}function I(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t);}}function k(n){n.P||(n.P=!0,n.l&&k(n.l));}function E(n){n.o||(n.o=l(n.t));}function R(n,r,t){var e=s(r)?b("MapSet").N(r,t):v(r)?b("MapSet").T(r,t):n.g?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b("ES5").J(r,t);return (t?t.A:_()).p.push(e),e}function D(e){return r(e)||n(22,e),function n(r){if(!t(r))return r;var e,u=r[Q],c=o(r);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=F(r,c),u.I=!1;}else e=F(r,c);return i(e,(function(r,t){u&&a(u.t,r)===t||f(e,r,n(t));})),3===c?new Set(e):e}(e)}function F(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function C(){function r(n,r){function t(){this.constructor=n;}a(n,r),n.prototype=(t.prototype=r.prototype,new t);}function e(n){n.o||(n.D=new Map,n.o=new Map(n.t));}function o(n){n.o||(n.o=new Set,n.t.forEach((function(r){if(t(r)){var e=R(n.A.h,r,n);n.p.set(r,e),n.o.add(e);}else n.o.add(r);})));}function u(r){r.O&&n(3,JSON.stringify(p(r)));}var a=function(n,r){return (a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r;}||function(n,r){for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t]);})(n,r)},f=function(){function n(n,r){return this[Q]={i:2,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,D:void 0,t:n,k:this,C:!1,O:!1},this}r(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,r){var t=this[Q];return u(t),p(t).has(n)&&p(t).get(n)===r||(e(t),k(t),t.D.set(n,!0),t.o.set(n,r),t.D.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return !1;var r=this[Q];return u(r),e(r),k(r),r.t.has(n)?r.D.set(n,!1):r.D.delete(n),r.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),k(n),n.D=new Map,i(n.t,(function(r){n.D.set(r,!1);})),n.o.clear());},o.forEach=function(n,r){var t=this;p(this[Q]).forEach((function(e,i){n.call(r,t.get(i),i,t);}));},o.get=function(n){var r=this[Q];u(r);var i=p(r).get(n);if(r.I||!t(i))return i;if(i!==r.t.get(n))return i;var o=R(r.A.h,i,r);return e(r),r.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,r=this,t=this.keys();return (n={})[V]=function(){return r.values()},n.next=function(){var n=t.next();return n.done?n:{done:!1,value:r.get(n.value)}},n},o.entries=function(){var n,r=this,t=this.keys();return (n={})[V]=function(){return r.entries()},n.next=function(){var n=t.next();if(n.done)return n;var e=r.get(n.value);return {done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,r){return this[Q]={i:3,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,O:!1,C:!1},this}r(n,Set);var t=n.prototype;return Object.defineProperty(t,"size",{get:function(){return p(this[Q]).size}}),t.has=function(n){var r=this[Q];return u(r),r.o?!!r.o.has(n)||!(!r.p.has(n)||!r.o.has(r.p.get(n))):r.t.has(n)},t.add=function(n){var r=this[Q];return u(r),this.has(n)||(o(r),k(r),r.o.add(n)),this},t.delete=function(n){if(!this.has(n))return !1;var r=this[Q];return u(r),o(r),k(r),r.o.delete(n)||!!r.p.has(n)&&r.o.delete(r.p.get(n))},t.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),k(n),n.o.clear());},t.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},t.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},t.keys=function(){return this.values()},t[V]=function(){return this.values()},t.forEach=function(n,r){for(var t=this.values(),e=t.next();!e.done;)n.call(r,e.value,e.value,this),e=t.next();},n}();m("MapSet",{N:function(n,r){return new f(n,r)},T:function(n,r){return new c(n,r)}});}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t);})),r},tn={},en={get:function(n,r){if(r===Q)return n;var e=p(n);if(!u(e,r))return function(n,r,t){var e,i=I(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t(i)?i:i===z(n.t,r)?(E(n),n.o[r]=R(n.A.h,i,n)):i},has:function(n,r){return r in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,r,t){var e=I(p(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z(p(n),r),o=null==i?void 0:i[Q];if(o&&o.t===t)return n.o[r]=t,n.D[r]=!1,!0;if(c(t,i)&&(void 0!==t||u(n.t,r)))return !0;E(n),k(n);}return n.o[r]===t&&"number"!=typeof t&&(void 0!==t||r in n.o)||(n.o[r]=t,n.D[r]=!0,!0)},deleteProperty:function(n,r){return void 0!==z(n.t,r)||r in n.t?(n.D[r]=!1,E(n),k(n)):delete n.D[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11);},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12);}},on={};i(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)};})),on.deleteProperty=function(r,t){return on.set.call(this,r,t,void 0)},on.set=function(r,t,e){return en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.g=B,this.F=!0,this.produce=function(r,i,o){if("function"==typeof r&&"function"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return (t=i).call.apply(t,[r,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),t(r)){var c=w(e),s=R(e,r,void 0),v=!0;try{f=i(s),v=!1;}finally{v?O(c):g(c);}return "undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw O(c),n})):(j(c,o),P(f,c))}if(!r||"object"!=typeof r){if(void 0===(f=i(r))&&(f=r),f===H&&(f=void 0),e.F&&d(f,!0),o){var p=[],l=[];b("Patches").M(r,f,p,l),o(p,l);}return f}n(21,r);},this.produceWithPatches=function(n,r){if("function"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,o=e.produce(n,r,(function(n,r){t=n,i=r;}));return "undefined"!=typeof Promise&&o instanceof Promise?o.then((function(n){return [n,t,i]})):[o,t,i]},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze);}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,g(i),o},i.finishDraft=function(r,t){var e=r&&r[Q];var i=e.A;return j(i,t),P(void 0,i)},i.setAutoFreeze=function(n){this.F=n;},i.setUseProxies=function(r){r&&!B&&n(20),this.g=r;},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var o=b("Patches").$;return r(n)?o(n,t):this.produce(n,(function(n){return o(n,t)}))},e}(),an=new un,fn=an.produce;an.produceWithPatches.bind(an);an.setAutoFreeze.bind(an);an.setUseProxies.bind(an);an.applyPatches.bind(an);an.createDraft.bind(an);an.finishDraft.bind(an);

function e(r,t,o){var i=react.exports.useMemo(function(){return fn(r)},[r]);return react.exports.useReducer(i,t,o)}

// Reference: https://css-tricks.com/using-requestanimationframe-with-react-hooks/
const useAnimationFrame = (callback) => {
    const requestRef = React.useRef();
    const previousTimeRef = React.useRef();
    const animate = (time) => {
        if (previousTimeRef.current != undefined) {
            const deltaTime = time - previousTimeRef.current;
            callback(deltaTime / 1000);
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    };
    React.useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, []);
};

function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}

/**
 * React currently throws a warning when using useLayoutEffect on the server. To
 * get around it, we can conditionally useEffect on the server (no-op) and
 * useLayoutEffect in the browser. We occasionally need useLayoutEffect to
 * ensure we don't get a render flash for certain operations, but we may also
 * need affected components to render on the server. One example is when setting
 * a component's descendants to retrieve their index values.
 *
 * Important to note that using this hook as an escape hatch will break the
 * eslint dependency warnings unless you rename the import to `useLayoutEffect`.
 * Use sparingly only when the effect won't effect the rendered HTML to avoid
 * any server/client mismatch.
 *
 * If a useLayoutEffect is needed and the result would create a mismatch, it's
 * likely that the component in question shouldn't be rendered on the server at
 * all, so a better approach would be to lazily render those in a parent
 * component after client-side hydration.
 *
 * https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * https://github.com/reduxjs/react-redux/blob/master/src/utils/useIsomorphicLayoutEffect.js
 *
 * @param effect
 * @param deps
 */

var useIsomorphicLayoutEffect = /*#__PURE__*/canUseDOM() ? react.exports.useLayoutEffect : react.exports.useEffect;

/**
 * Forces a re-render, similar to `forceUpdate` in class components.
 */

function useForceUpdate() {
  var _useState = react.exports.useState(Object.create(null)),
      dispatch = _useState[1];

  return react.exports.useCallback(function () {
    dispatch(Object.create(null));
  }, []);
}

function _objectWithoutPropertiesLoose$2(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded$1 = ["unstable_skipInitialRender"];
/**
 * Portal
 *
 * @see Docs https://reach.tech/portal#portal
 */

var PortalImpl = function PortalImpl(_ref) {
  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "reach-portal" : _ref$type,
      containerRef = _ref.containerRef;
  var mountNode = react.exports.useRef(null);
  var portalNode = react.exports.useRef(null);
  var forceUpdate = useForceUpdate();

  useIsomorphicLayoutEffect(function () {
    // This ref may be null when a hot-loader replaces components on the page
    if (!mountNode.current) return; // It's possible that the content of the portal has, itself, been portaled.
    // In that case, it's important to append to the correct document element.

    var ownerDocument = mountNode.current.ownerDocument;
    var body = (containerRef == null ? void 0 : containerRef.current) || ownerDocument.body;
    portalNode.current = ownerDocument == null ? void 0 : ownerDocument.createElement(type);
    body.appendChild(portalNode.current);
    forceUpdate();
    return function () {
      if (portalNode.current && body) {
        body.removeChild(portalNode.current);
      }
    };
  }, [type, forceUpdate, containerRef]);
  return portalNode.current ? /*#__PURE__*/reactDom.exports.createPortal(children, portalNode.current) : /*#__PURE__*/react.exports.createElement("span", {
    ref: mountNode
  });
};

var Portal = function Portal(_ref2) {
  var unstable_skipInitialRender = _ref2.unstable_skipInitialRender,
      props = _objectWithoutPropertiesLoose$2(_ref2, _excluded$1);

  var _React$useState = react.exports.useState(false),
      hydrated = _React$useState[0],
      setHydrated = _React$useState[1];

  react.exports.useEffect(function () {
    if (unstable_skipInitialRender) {
      setHydrated(true);
    }
  }, [unstable_skipInitialRender]);

  if (unstable_skipInitialRender && !hydrated) {
    return null;
  }

  return /*#__PURE__*/react.exports.createElement(PortalImpl, props);
};

/**
 * Get an element's owner document. Useful when components are used in iframes
 * or other environments like dev tools.
 *
 * @param element
 */

function getOwnerDocument(element) {
  return canUseDOM() ? element ? element.ownerDocument : document : null;
}

/**
 * Checks whether or not a value is a boolean.
 *
 * @param value
 */
/**
 * Checks whether or not a value is a function.
 *
 * @param value
 */

function isFunction(value) {
  // eslint-disable-next-line eqeqeq
  return !!(value && {}.toString.call(value) == "[object Function]");
}

function noop() {}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

/**
 * Passes or assigns an arbitrary value to a ref function or object.
 *
 * @param ref
 * @param value
 */
function assignRef$1(ref, value) {
  if (ref == null) return;

  if (isFunction(ref)) {
    ref(value);
  } else {
    try {
      ref.current = value;
    } catch (error) {
      throw new Error("Cannot assign value \"" + value + "\" to ref \"" + ref + "\"");
    }
  }
}
/**
 * Passes or assigns a value to multiple refs (typically a DOM node). Useful for
 * dealing with components that need an explicit ref for DOM calculations but
 * also forwards refs assigned by an app.
 *
 * @param refs Refs to fork
 */

function useComposedRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  return react.exports.useCallback(function (node) {
    for (var _iterator = _createForOfIteratorHelperLoose(refs), _step; !(_step = _iterator()).done;) {
      var ref = _step.value;
      assignRef$1(ref, node);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, refs);
}

/**
 * Wraps a lib-defined event handler and a user-defined event handler, returning
 * a single handler that allows a user to prevent lib-defined handlers from
 * firing.
 *
 * @param theirHandler User-supplied event handler
 * @param ourHandler Library-supplied event handler
 */
function composeEventHandlers(theirHandler, ourHandler) {
  return function (event) {
    theirHandler && theirHandler(event);

    if (!event.defaultPrevented) {
      return ourHandler(event);
    }
  };
}

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

var propTypes = {exports: {}};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = factoryWithThrowingShims();
}

var FOCUS_GROUP = 'data-focus-lock';
var FOCUS_DISABLED = 'data-focus-lock-disabled';
var FOCUS_ALLOW = 'data-no-focus-lock';
var FOCUS_AUTO = 'data-autofocus-inside';

/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
    return ref;
}

/**
 * creates a MutableRef with ref change callback
 * @param initialValue - initial ref value
 * @param {Function} callback - a callback to run when value changes
 *
 * @example
 * const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
 * ref.current = 1;
 * // prints 0 -> 1
 *
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 * @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
 * @returns {MutableRefObject}
 */
function useCallbackRef(initialValue, callback) {
    var ref = react.exports.useState(function () { return ({
        // value
        value: initialValue,
        // last callback
        callback: callback,
        // "memoized" public interface
        facade: {
            get current() {
                return ref.value;
            },
            set current(value) {
                var last = ref.value;
                if (last !== value) {
                    ref.value = value;
                    ref.callback(value, last);
                }
            },
        },
    }); })[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}

/**
 * Merges two or more refs together providing a single interface to set their value
 * @param {RefObject|Ref} refs
 * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
 *
 * @see {@link mergeRefs} a version without buit-in memoization
 * @see https://github.com/theKashey/use-callback-ref#usemergerefs
 * @example
 * const Component = React.forwardRef((props, ref) => {
 *   const ownRef = useRef();
 *   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
 *   return <div ref={domRef}>...</div>
 * }
 */
function useMergeRefs(refs, defaultValue) {
    return useCallbackRef(defaultValue || null, function (newValue) { return refs.forEach(function (ref) { return assignRef(ref, newValue); }); });
}

var hiddenGuard = {
  width: '1px',
  height: '0px',
  padding: 0,
  overflow: 'hidden',
  position: 'fixed',
  top: '1px',
  left: '1px'
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

// Only Node.JS has a process variable that is of [[Class]] process
Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';

function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function () {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function (data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function () {
                buffer = buffer.filter(function (x) { return x !== item; });
            };
        },
        assignSyncMedium: function (cb) {
            assigned = true;
            while (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function (x) { return cb(x); },
                filter: function () { return buffer; },
            };
        },
        assignMedium: function (cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function () {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function () { return Promise.resolve().then(executeQueue); };
            cycle();
            buffer = {
                push: function (x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function (filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                },
            };
        },
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    return innerCreateMedium(defaults, middleware);
}
// eslint-disable-next-line @typescript-eslint/ban-types
function createSidecarMedium(options) {
    if (options === void 0) { options = {}; }
    var medium = innerCreateMedium(null);
    medium.options = __assign({ async: true, ssr: false }, options);
    return medium;
}

var SideCar$1 = function (_a) {
    var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return react.exports.createElement(Target, __assign({}, rest));
};
SideCar$1.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar$1;
}

var mediumFocus = createMedium({}, function (_ref) {
  var target = _ref.target,
      currentTarget = _ref.currentTarget;
  return {
    target: target,
    currentTarget: currentTarget
  };
});
var mediumBlur = createMedium();
var mediumEffect = createMedium();
var mediumSidecar = createSidecarMedium({
  async: true
});

var emptyArray = [];
var FocusLock = /*#__PURE__*/react.exports.forwardRef(function FocusLockUI(props, parentRef) {
  var _extends2;

  var _React$useState = react.exports.useState(),
      realObserved = _React$useState[0],
      setObserved = _React$useState[1];

  var observed = react.exports.useRef();
  var isActive = react.exports.useRef(false);
  var originalFocusedElement = react.exports.useRef(null);
  var children = props.children,
      disabled = props.disabled,
      noFocusGuards = props.noFocusGuards,
      persistentFocus = props.persistentFocus,
      crossFrame = props.crossFrame,
      autoFocus = props.autoFocus;
      props.allowTextSelection;
      var group = props.group,
      className = props.className,
      whiteList = props.whiteList,
      hasPositiveIndices = props.hasPositiveIndices,
      _props$shards = props.shards,
      shards = _props$shards === void 0 ? emptyArray : _props$shards,
      _props$as = props.as,
      Container = _props$as === void 0 ? 'div' : _props$as,
      _props$lockProps = props.lockProps,
      containerProps = _props$lockProps === void 0 ? {} : _props$lockProps,
      SideCar = props.sideCar,
      shouldReturnFocus = props.returnFocus,
      focusOptions = props.focusOptions,
      onActivationCallback = props.onActivation,
      onDeactivationCallback = props.onDeactivation;

  var _React$useState2 = react.exports.useState({}),
      id = _React$useState2[0]; // SIDE EFFECT CALLBACKS


  var onActivation = react.exports.useCallback(function () {
    originalFocusedElement.current = originalFocusedElement.current || document && document.activeElement;

    if (observed.current && onActivationCallback) {
      onActivationCallback(observed.current);
    }

    isActive.current = true;
  }, [onActivationCallback]);
  var onDeactivation = react.exports.useCallback(function () {
    isActive.current = false;

    if (onDeactivationCallback) {
      onDeactivationCallback(observed.current);
    }
  }, [onDeactivationCallback]);
  react.exports.useEffect(function () {
    if (!disabled) {
      // cleanup return focus on trap deactivation
      // sideEffect/returnFocus should happen by this time
      originalFocusedElement.current = null;
    }
  }, []);
  var returnFocus = react.exports.useCallback(function (allowDefer) {
    var returnFocusTo = originalFocusedElement.current;

    if (returnFocusTo && returnFocusTo.focus) {
      var howToReturnFocus = typeof shouldReturnFocus === 'function' ? shouldReturnFocus(returnFocusTo) : shouldReturnFocus;

      if (howToReturnFocus) {
        var returnFocusOptions = typeof howToReturnFocus === 'object' ? howToReturnFocus : undefined;
        originalFocusedElement.current = null;

        if (allowDefer) {
          // React might return focus after update
          // it's safer to defer the action
          Promise.resolve().then(function () {
            return returnFocusTo.focus(returnFocusOptions);
          });
        } else {
          returnFocusTo.focus(returnFocusOptions);
        }
      }
    }
  }, [shouldReturnFocus]); // MEDIUM CALLBACKS

  var onFocus = react.exports.useCallback(function (event) {
    if (isActive.current) {
      mediumFocus.useMedium(event);
    }
  }, []);
  var onBlur = mediumBlur.useMedium; // REF PROPAGATION
  // not using real refs due to race conditions

  var setObserveNode = react.exports.useCallback(function (newObserved) {
    if (observed.current !== newObserved) {
      observed.current = newObserved;
      setObserved(newObserved);
    }
  }, []);

  var lockProps = _extends$1((_extends2 = {}, _extends2[FOCUS_DISABLED] = disabled && 'disabled', _extends2[FOCUS_GROUP] = group, _extends2), containerProps);

  var hasLeadingGuards = noFocusGuards !== true;
  var hasTailingGuards = hasLeadingGuards && noFocusGuards !== 'tail';
  var mergedRef = useMergeRefs([parentRef, setObserveNode]);
  return /*#__PURE__*/react.exports.createElement(react.exports.Fragment, null, hasLeadingGuards && [
  /*#__PURE__*/
  // nearest focus guard
  react.exports.createElement("div", {
    key: "guard-first",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: hiddenGuard
  }), // first tabbed element guard
  hasPositiveIndices ? /*#__PURE__*/react.exports.createElement("div", {
    key: "guard-nearest",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 1,
    style: hiddenGuard
  }) : null], !disabled && /*#__PURE__*/react.exports.createElement(SideCar, {
    id: id,
    sideCar: mediumSidecar,
    observed: realObserved,
    disabled: disabled,
    persistentFocus: persistentFocus,
    crossFrame: crossFrame,
    autoFocus: autoFocus,
    whiteList: whiteList,
    shards: shards,
    onActivation: onActivation,
    onDeactivation: onDeactivation,
    returnFocus: returnFocus,
    focusOptions: focusOptions
  }), /*#__PURE__*/react.exports.createElement(Container, _extends$1({
    ref: mergedRef
  }, lockProps, {
    className: className,
    onBlur: onBlur,
    onFocus: onFocus
  }), children), hasTailingGuards && /*#__PURE__*/react.exports.createElement("div", {
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: hiddenGuard
  }));
});
FocusLock.propTypes = {};
FocusLock.defaultProps = {
  children: undefined,
  disabled: false,
  returnFocus: false,
  focusOptions: undefined,
  noFocusGuards: false,
  autoFocus: true,
  persistentFocus: false,
  crossFrame: true,
  hasPositiveIndices: undefined,
  allowTextSelection: undefined,
  group: undefined,
  className: undefined,
  whiteList: undefined,
  shards: undefined,
  as: 'div',
  lockProps: {},
  onActivation: undefined,
  onDeactivation: undefined
};

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function withSideEffect(reducePropsToState, handleStateChangeOnClient) {

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));
      handleStateChangeOnClient(state);
    }

    var SideEffect = /*#__PURE__*/function (_PureComponent) {
      _inheritsLoose(SideEffect, _PureComponent);

      function SideEffect() {
        return _PureComponent.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      SideEffect.peek = function peek() {
        return state;
      };

      var _proto = SideEffect.prototype;

      _proto.componentDidMount = function componentDidMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return /*#__PURE__*/React.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(react.exports.PureComponent);

    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    return SideEffect;
  };
}

var toArray = function (a) {
    var ret = Array(a.length);
    for (var i = 0; i < a.length; ++i) {
        ret[i] = a[i];
    }
    return ret;
};
var asArray = function (a) { return (Array.isArray(a) ? a : [a]); };

var filterNested = function (nodes) {
    var contained = new Set();
    var l = nodes.length;
    for (var i = 0; i < l; i += 1) {
        for (var j = i + 1; j < l; j += 1) {
            var position = nodes[i].compareDocumentPosition(nodes[j]);
            if ((position & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0) {
                contained.add(j);
            }
            if ((position & Node.DOCUMENT_POSITION_CONTAINS) > 0) {
                contained.add(i);
            }
        }
    }
    return nodes.filter(function (_, index) { return !contained.has(index); });
};
var getTopParent = function (node) {
    return node.parentNode ? getTopParent(node.parentNode) : node;
};
var getAllAffectedNodes = function (node) {
    var nodes = asArray(node);
    return nodes.filter(Boolean).reduce(function (acc, currentNode) {
        var group = currentNode.getAttribute(FOCUS_GROUP);
        acc.push.apply(acc, (group
            ? filterNested(toArray(getTopParent(currentNode).querySelectorAll("[".concat(FOCUS_GROUP, "=\"").concat(group, "\"]:not([").concat(FOCUS_DISABLED, "=\"disabled\"])"))))
            : [currentNode]));
        return acc;
    }, []);
};

var getActiveElement = function () {
    return (document.activeElement
        ? document.activeElement.shadowRoot
            ? document.activeElement.shadowRoot.activeElement
            : document.activeElement
        : undefined);
};

var focusInFrame = function (frame) { return frame === document.activeElement; };
var focusInsideIframe = function (topNode) {
    return Boolean(toArray(topNode.querySelectorAll('iframe')).some(function (node) { return focusInFrame(node); }));
};
var focusInside = function (topNode) {
    var activeElement = document && getActiveElement();
    if (!activeElement || (activeElement.dataset && activeElement.dataset.focusGuard)) {
        return false;
    }
    return getAllAffectedNodes(topNode).reduce(function (result, node) { return result || node.contains(activeElement) || focusInsideIframe(node); }, false);
};

var focusIsHidden = function () {
    var activeElement = document && getActiveElement();
    if (!activeElement) {
        return false;
    }
    return toArray(document.querySelectorAll("[".concat(FOCUS_ALLOW, "]"))).some(function (node) { return node.contains(activeElement); });
};

var isElementHidden = function (node) {
    if (node.nodeType !== Node.ELEMENT_NODE) {
        return false;
    }
    var computedStyle = window.getComputedStyle(node, null);
    if (!computedStyle || !computedStyle.getPropertyValue) {
        return false;
    }
    return (computedStyle.getPropertyValue('display') === 'none' || computedStyle.getPropertyValue('visibility') === 'hidden');
};
var isVisibleUncached = function (node, checkParent) {
    return !node ||
        node === document ||
        (node && node.nodeType === Node.DOCUMENT_NODE) ||
        (!isElementHidden(node) &&
            checkParent(node.parentNode && node.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                ?
                    node.parentNode.host
                : node.parentNode));
};
var isVisibleCached = function (visibilityCache, node) {
    var cached = visibilityCache.get(node);
    if (cached !== undefined) {
        return cached;
    }
    var result = isVisibleUncached(node, isVisibleCached.bind(undefined, visibilityCache));
    visibilityCache.set(node, result);
    return result;
};
var getDataset = function (node) {
    return node.dataset;
};
var isHTMLButtonElement = function (node) { return node.tagName === 'BUTTON'; };
var isHTMLInputElement = function (node) { return node.tagName === 'INPUT'; };
var isRadioElement = function (node) {
    return isHTMLInputElement(node) && node.type === 'radio';
};
var notHiddenInput = function (node) {
    return !((isHTMLInputElement(node) || isHTMLButtonElement(node)) && (node.type === 'hidden' || node.disabled)) &&
        !node.ariaDisabled;
};
var isGuard = function (node) { var _a; return Boolean(node && ((_a = getDataset(node)) === null || _a === void 0 ? void 0 : _a.focusGuard)); };
var isNotAGuard = function (node) { return !isGuard(node); };
var isDefined = function (x) { return Boolean(x); };

var findSelectedRadio = function (node, nodes) {
    return nodes
        .filter(isRadioElement)
        .filter(function (el) { return el.name === node.name; })
        .filter(function (el) { return el.checked; })[0] || node;
};
var correctNode = function (node, nodes) {
    if (isRadioElement(node) && node.name) {
        return findSelectedRadio(node, nodes);
    }
    return node;
};
var correctNodes = function (nodes) {
    var resultSet = new Set();
    nodes.forEach(function (node) { return resultSet.add(correctNode(node, nodes)); });
    return nodes.filter(function (node) { return resultSet.has(node); });
};

var pickFirstFocus = function (nodes) {
    if (nodes[0] && nodes.length > 1) {
        return correctNode(nodes[0], nodes);
    }
    return nodes[0];
};
var pickFocusable = function (nodes, index) {
    if (nodes.length > 1) {
        return nodes.indexOf(correctNode(nodes[index], nodes));
    }
    return index;
};

var NEW_FOCUS = 'NEW_FOCUS';
var newFocus = function (innerNodes, outerNodes, activeElement, lastNode) {
    var cnt = innerNodes.length;
    var firstFocus = innerNodes[0];
    var lastFocus = innerNodes[cnt - 1];
    var isOnGuard = isGuard(activeElement);
    if (activeElement && innerNodes.indexOf(activeElement) >= 0) {
        return undefined;
    }
    var activeIndex = activeElement !== undefined ? outerNodes.indexOf(activeElement) : -1;
    var lastIndex = lastNode ? outerNodes.indexOf(lastNode) : activeIndex;
    var lastNodeInside = lastNode ? innerNodes.indexOf(lastNode) : -1;
    var indexDiff = activeIndex - lastIndex;
    var firstNodeIndex = outerNodes.indexOf(firstFocus);
    var lastNodeIndex = outerNodes.indexOf(lastFocus);
    var correctedNodes = correctNodes(outerNodes);
    var correctedIndex = activeElement !== undefined ? correctedNodes.indexOf(activeElement) : -1;
    var correctedIndexDiff = correctedIndex - (lastNode ? correctedNodes.indexOf(lastNode) : activeIndex);
    var returnFirstNode = pickFocusable(innerNodes, 0);
    var returnLastNode = pickFocusable(innerNodes, cnt - 1);
    if (activeIndex === -1 || lastNodeInside === -1) {
        return NEW_FOCUS;
    }
    if (!indexDiff && lastNodeInside >= 0) {
        return lastNodeInside;
    }
    if (activeIndex <= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
        return returnLastNode;
    }
    if (activeIndex >= lastNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
        return returnFirstNode;
    }
    if (indexDiff && Math.abs(correctedIndexDiff) > 1) {
        return lastNodeInside;
    }
    if (activeIndex <= firstNodeIndex) {
        return returnLastNode;
    }
    if (activeIndex > lastNodeIndex) {
        return returnFirstNode;
    }
    if (indexDiff) {
        if (Math.abs(indexDiff) > 1) {
            return lastNodeInside;
        }
        return (cnt + lastNodeInside + indexDiff) % cnt;
    }
    return undefined;
};

var tabSort = function (a, b) {
    var tabDiff = a.tabIndex - b.tabIndex;
    var indexDiff = a.index - b.index;
    if (tabDiff) {
        if (!a.tabIndex) {
            return 1;
        }
        if (!b.tabIndex) {
            return -1;
        }
    }
    return tabDiff || indexDiff;
};
var orderByTabIndex = function (nodes, filterNegative, keepGuards) {
    return toArray(nodes)
        .map(function (node, index) { return ({
        node: node,
        index: index,
        tabIndex: keepGuards && node.tabIndex === -1 ? ((node.dataset || {}).focusGuard ? 0 : -1) : node.tabIndex,
    }); })
        .filter(function (data) { return !filterNegative || data.tabIndex >= 0; })
        .sort(tabSort);
};

var tabbables = [
    'button:enabled',
    'select:enabled',
    'textarea:enabled',
    'input:enabled',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[tabindex]',
    '[contenteditable]',
    '[autofocus]',
];

var queryTabbables = tabbables.join(',');
var queryGuardTabbables = "".concat(queryTabbables, ", [data-focus-guard]");
var getFocusables = function (parents, withGuards) {
    return parents.reduce(function (acc, parent) {
        return acc.concat(toArray(parent.querySelectorAll(withGuards ? queryGuardTabbables : queryTabbables)), parent.parentNode
            ? toArray(parent.parentNode.querySelectorAll(queryTabbables)).filter(function (node) { return node === parent; })
            : []);
    }, []);
};
var getParentAutofocusables = function (parent) {
    var parentFocus = parent.querySelectorAll("[".concat(FOCUS_AUTO, "]"));
    return toArray(parentFocus)
        .map(function (node) { return getFocusables([node]); })
        .reduce(function (acc, nodes) { return acc.concat(nodes); }, []);
};

var filterFocusable = function (nodes, visibilityCache) {
    return toArray(nodes)
        .filter(function (node) { return isVisibleCached(visibilityCache, node); })
        .filter(function (node) { return notHiddenInput(node); });
};
var getTabbableNodes = function (topNodes, visibilityCache, withGuards) {
    return orderByTabIndex(filterFocusable(getFocusables(topNodes, withGuards), visibilityCache), true, withGuards);
};
var getAllTabbableNodes = function (topNodes, visibilityCache) {
    return orderByTabIndex(filterFocusable(getFocusables(topNodes), visibilityCache), false);
};
var parentAutofocusables = function (topNode, visibilityCache) {
    return filterFocusable(getParentAutofocusables(topNode), visibilityCache);
};

var getParents = function (node, parents) {
    if (parents === void 0) { parents = []; }
    parents.push(node);
    if (node.parentNode) {
        getParents(node.parentNode, parents);
    }
    return parents;
};
var getCommonParent = function (nodeA, nodeB) {
    var parentsA = getParents(nodeA);
    var parentsB = getParents(nodeB);
    for (var i = 0; i < parentsA.length; i += 1) {
        var currentParent = parentsA[i];
        if (parentsB.indexOf(currentParent) >= 0) {
            return currentParent;
        }
    }
    return false;
};
var getTopCommonParent = function (baseActiveElement, leftEntry, rightEntries) {
    var activeElements = asArray(baseActiveElement);
    var leftEntries = asArray(leftEntry);
    var activeElement = activeElements[0];
    var topCommon = false;
    leftEntries.filter(Boolean).forEach(function (entry) {
        topCommon = getCommonParent(topCommon || entry, entry) || topCommon;
        rightEntries.filter(Boolean).forEach(function (subEntry) {
            var common = getCommonParent(activeElement, subEntry);
            if (common) {
                if (!topCommon || common.contains(topCommon)) {
                    topCommon = common;
                }
                else {
                    topCommon = getCommonParent(common, topCommon);
                }
            }
        });
    });
    return topCommon;
};
var allParentAutofocusables = function (entries, visibilityCache) {
    return entries.reduce(function (acc, node) { return acc.concat(parentAutofocusables(node, visibilityCache)); }, []);
};

var findAutoFocused = function (autoFocusables) {
    return function (node) { var _a; return node.autofocus || !!((_a = getDataset(node)) === null || _a === void 0 ? void 0 : _a.autofocus) || autoFocusables.indexOf(node) >= 0; };
};
var reorderNodes = function (srcNodes, dstNodes) {
    var remap = new Map();
    dstNodes.forEach(function (entity) { return remap.set(entity.node, entity); });
    return srcNodes.map(function (node) { return remap.get(node); }).filter(isDefined);
};
var getFocusMerge = function (topNode, lastNode) {
    var activeElement = document && getActiveElement();
    var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
    var commonParent = getTopCommonParent(activeElement || topNode, topNode, entries);
    var visibilityCache = new Map();
    var anyFocusable = getAllTabbableNodes(entries, visibilityCache);
    var innerElements = getTabbableNodes(entries, visibilityCache).filter(function (_a) {
        var node = _a.node;
        return isNotAGuard(node);
    });
    if (!innerElements[0]) {
        innerElements = anyFocusable;
        if (!innerElements[0]) {
            return undefined;
        }
    }
    var outerNodes = getAllTabbableNodes([commonParent], visibilityCache).map(function (_a) {
        var node = _a.node;
        return node;
    });
    var orderedInnerElements = reorderNodes(outerNodes, innerElements);
    var innerNodes = orderedInnerElements.map(function (_a) {
        var node = _a.node;
        return node;
    });
    var newId = newFocus(innerNodes, outerNodes, activeElement, lastNode);
    if (newId === NEW_FOCUS) {
        var autoFocusable = anyFocusable
            .map(function (_a) {
            var node = _a.node;
            return node;
        })
            .filter(findAutoFocused(allParentAutofocusables(entries, visibilityCache)));
        return {
            node: autoFocusable && autoFocusable.length ? pickFirstFocus(autoFocusable) : pickFirstFocus(innerNodes),
        };
    }
    if (newId === undefined) {
        return newId;
    }
    return orderedInnerElements[newId];
};

var getFocusabledIn = function (topNode) {
    var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
    var commonParent = getTopCommonParent(topNode, topNode, entries);
    var visibilityCache = new Map();
    var outerNodes = getTabbableNodes([commonParent], visibilityCache, true);
    var innerElements = getTabbableNodes(entries, visibilityCache)
        .filter(function (_a) {
        var node = _a.node;
        return isNotAGuard(node);
    })
        .map(function (_a) {
        var node = _a.node;
        return node;
    });
    return outerNodes.map(function (_a) {
        var node = _a.node, index = _a.index;
        return ({
            node: node,
            index: index,
            lockItem: innerElements.indexOf(node) >= 0,
            guard: isGuard(node),
        });
    });
};

var focusOn = function (target, focusOptions) {
    if ('focus' in target) {
        target.focus(focusOptions);
    }
    if ('contentWindow' in target && target.contentWindow) {
        target.contentWindow.focus();
    }
};
var guardCount = 0;
var lockDisabled = false;
var setFocus = function (topNode, lastNode, options) {
    if (options === void 0) { options = {}; }
    var focusable = getFocusMerge(topNode, lastNode);
    if (lockDisabled) {
        return;
    }
    if (focusable) {
        if (guardCount > 2) {
            console.error('FocusLock: focus-fighting detected. Only one focus management system could be active. ' +
                'See https://github.com/theKashey/focus-lock/#focus-fighting');
            lockDisabled = true;
            setTimeout(function () {
                lockDisabled = false;
            }, 1);
            return;
        }
        guardCount++;
        focusOn(focusable.node, options.focusOptions);
        guardCount--;
    }
};

function deferAction(action) {
  // Hidding setImmediate from Webpack to avoid inserting polyfill
  var _window = window,
      setImmediate = _window.setImmediate;

  if (typeof setImmediate !== 'undefined') {
    setImmediate(action);
  } else {
    setTimeout(action, 1);
  }
}

var focusOnBody = function focusOnBody() {
  return document && document.activeElement === document.body;
};

var isFreeFocus = function isFreeFocus() {
  return focusOnBody() || focusIsHidden();
};

var lastActiveTrap = null;
var lastActiveFocus = null;
var lastPortaledElement = null;
var focusWasOutsideWindow = false;

var defaultWhitelist = function defaultWhitelist() {
  return true;
};

var focusWhitelisted = function focusWhitelisted(activeElement) {
  return (lastActiveTrap.whiteList || defaultWhitelist)(activeElement);
};

var recordPortal = function recordPortal(observerNode, portaledElement) {
  lastPortaledElement = {
    observerNode: observerNode,
    portaledElement: portaledElement
  };
};

var focusIsPortaledPair = function focusIsPortaledPair(element) {
  return lastPortaledElement && lastPortaledElement.portaledElement === element;
};

function autoGuard(startIndex, end, step, allNodes) {
  var lastGuard = null;
  var i = startIndex;

  do {
    var item = allNodes[i];

    if (item.guard) {
      if (item.node.dataset.focusAutoGuard) {
        lastGuard = item;
      }
    } else if (item.lockItem) {
      if (i !== startIndex) {
        // we will tab to the next element
        return;
      }

      lastGuard = null;
    } else {
      break;
    }
  } while ((i += step) !== end);

  if (lastGuard) {
    lastGuard.node.tabIndex = 0;
  }
}

var extractRef$1 = function extractRef(ref) {
  return ref && 'current' in ref ? ref.current : ref;
};

var focusWasOutside = function focusWasOutside(crossFrameOption) {
  if (crossFrameOption) {
    // with cross frame return true for any value
    return Boolean(focusWasOutsideWindow);
  } // in other case return only of focus went a while aho


  return focusWasOutsideWindow === 'meanwhile';
};

var checkInHost = function checkInHost(check, el, boundary) {
  return el // find host equal to active element and check nested active element
  && (el.host === check && (!el.activeElement || boundary.contains(el.activeElement)) // dive up
  || el.parentNode && checkInHost(check, el.parentNode, boundary));
};

var withinHost = function withinHost(activeElement, workingArea) {
  return workingArea.some(function (area) {
    return checkInHost(activeElement, area, area);
  });
};

var activateTrap = function activateTrap() {
  var result = false;

  if (lastActiveTrap) {
    var _lastActiveTrap = lastActiveTrap,
        observed = _lastActiveTrap.observed,
        persistentFocus = _lastActiveTrap.persistentFocus,
        autoFocus = _lastActiveTrap.autoFocus,
        shards = _lastActiveTrap.shards,
        crossFrame = _lastActiveTrap.crossFrame,
        focusOptions = _lastActiveTrap.focusOptions;
    var workingNode = observed || lastPortaledElement && lastPortaledElement.portaledElement;
    var activeElement = document && document.activeElement;

    if (workingNode) {
      var workingArea = [workingNode].concat(shards.map(extractRef$1).filter(Boolean));

      if (!activeElement || focusWhitelisted(activeElement)) {
        if (persistentFocus || focusWasOutside(crossFrame) || !isFreeFocus() || !lastActiveFocus && autoFocus) {
          if (workingNode && !( // active element is "inside" working area
          focusInside(workingArea) || // check for shadow-dom contained elements
          activeElement && withinHost(activeElement, workingArea) || focusIsPortaledPair(activeElement))) {
            if (document && !lastActiveFocus && activeElement && !autoFocus) {
              // Check if blur() exists, which is missing on certain elements on IE
              if (activeElement.blur) {
                activeElement.blur();
              }

              document.body.focus();
            } else {
              result = setFocus(workingArea, lastActiveFocus, {
                focusOptions: focusOptions
              });
              lastPortaledElement = {};
            }
          }

          focusWasOutsideWindow = false;
          lastActiveFocus = document && document.activeElement;
        }
      }

      if (document) {
        var newActiveElement = document && document.activeElement;
        var allNodes = getFocusabledIn(workingArea);
        var focusedIndex = allNodes.map(function (_ref) {
          var node = _ref.node;
          return node;
        }).indexOf(newActiveElement);

        if (focusedIndex > -1) {
          // remove old focus
          allNodes.filter(function (_ref2) {
            var guard = _ref2.guard,
                node = _ref2.node;
            return guard && node.dataset.focusAutoGuard;
          }).forEach(function (_ref3) {
            var node = _ref3.node;
            return node.removeAttribute('tabIndex');
          });
          autoGuard(focusedIndex, allNodes.length, +1, allNodes);
          autoGuard(focusedIndex, -1, -1, allNodes);
        }
      }
    }
  }

  return result;
};

var onTrap = function onTrap(event) {
  if (activateTrap() && event) {
    // prevent scroll jump
    event.stopPropagation();
    event.preventDefault();
  }
};

var onBlur = function onBlur() {
  return deferAction(activateTrap);
};

var onFocus = function onFocus(event) {
  // detect portal
  var source = event.target;
  var currentNode = event.currentTarget;

  if (!currentNode.contains(source)) {
    recordPortal(currentNode, source);
  }
};

var FocusWatcher = function FocusWatcher() {
  return null;
};

var onWindowBlur = function onWindowBlur() {
  focusWasOutsideWindow = 'just'; // using setTimeout to set  this variable after React/sidecar reaction

  setTimeout(function () {
    focusWasOutsideWindow = 'meanwhile';
  }, 0);
};

var attachHandler = function attachHandler() {
  document.addEventListener('focusin', onTrap);
  document.addEventListener('focusout', onBlur);
  window.addEventListener('blur', onWindowBlur);
};

var detachHandler = function detachHandler() {
  document.removeEventListener('focusin', onTrap);
  document.removeEventListener('focusout', onBlur);
  window.removeEventListener('blur', onWindowBlur);
};

function reducePropsToState(propsList) {
  return propsList.filter(function (_ref5) {
    var disabled = _ref5.disabled;
    return !disabled;
  });
}

function handleStateChangeOnClient(traps) {
  var trap = traps.slice(-1)[0];

  if (trap && !lastActiveTrap) {
    attachHandler();
  }

  var lastTrap = lastActiveTrap;
  var sameTrap = lastTrap && trap && trap.id === lastTrap.id;
  lastActiveTrap = trap;

  if (lastTrap && !sameTrap) {
    lastTrap.onDeactivation(); // return focus only of last trap was removed

    if (!traps.filter(function (_ref6) {
      var id = _ref6.id;
      return id === lastTrap.id;
    }).length) {
      // allow defer is no other trap is awaiting restore
      lastTrap.returnFocus(!trap);
    }
  }

  if (trap) {
    lastActiveFocus = null;

    if (!sameTrap || lastTrap.observed !== trap.observed) {
      trap.onActivation();
    }

    activateTrap();
    deferAction(activateTrap);
  } else {
    detachHandler();
    lastActiveFocus = null;
  }
} // bind medium


mediumFocus.assignSyncMedium(onFocus);
mediumBlur.assignMedium(onBlur);
mediumEffect.assignMedium(function (cb) {
  return cb({
    moveFocusInside: setFocus,
    focusInside: focusInside
  });
});
var FocusTrap = withSideEffect(reducePropsToState, handleStateChangeOnClient)(FocusWatcher);

/* that would be a BREAKING CHANGE!
// delaying sidecar execution till the first usage
const RequireSideCar = (props) => {
  // eslint-disable-next-line global-require
  const SideCar = require('./Trap').default;
  return <SideCar {...props} />;
};
*/

var FocusLockCombination = /*#__PURE__*/react.exports.forwardRef(function FocusLockUICombination(props, ref) {
  return /*#__PURE__*/react.exports.createElement(FocusLock, _extends$1({
    sideCar: FocusTrap,
    ref: ref
  }, props));
});

var _ref = FocusLock.propTypes || {};
    _ref.sideCar;
    _objectWithoutPropertiesLoose$1(_ref, ["sideCar"]);

FocusLockCombination.propTypes = {};

var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';
/**
 * Name of a CSS variable containing the amount of "hidden" scrollbar
 * ! might be undefined ! use will fallback!
 */
var removedBarSizeVariable = '--removed-body-scroll-bar-size';

var effectCar = createSidecarMedium();

var nothing = function () {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */
var RemoveScroll = react.exports.forwardRef(function (props, parentRef) {
    var ref = react.exports.useRef(null);
    var _a = react.exports.useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing,
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
    var SideCar = sideCar;
    var containerRef = useMergeRefs([ref, parentRef]);
    var containerProps = __assign(__assign({}, rest), callbacks);
    return (react.exports.createElement(react.exports.Fragment, null,
        enabled && (react.exports.createElement(SideCar, { sideCar: effectCar, removeScrollBar: removeScrollBar, shards: shards, noIsolation: noIsolation, inert: inert, setCallbacks: setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref })),
        forwardProps ? (react.exports.cloneElement(react.exports.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef }))) : (react.exports.createElement(Container, __assign({}, containerProps, { className: className, ref: containerRef }), children))));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false,
};
RemoveScroll.classNames = {
    fullWidth: fullWidthClassName,
    zeroRight: zeroRightClassName,
};

var getNonce = function () {
    if (typeof __webpack_nonce__ !== 'undefined') {
        return __webpack_nonce__;
    }
    return undefined;
};

function makeStyleTag() {
    if (!document)
        return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = getNonce();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    // @ts-ignore
    if (tag.styleSheet) {
        // @ts-ignore
        tag.styleSheet.cssText = css;
    }
    else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function () {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function (style) {
            if (counter == 0) {
                if ((stylesheet = makeStyleTag())) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function () {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        },
    };
};

var styleHookSingleton = function () {
    var sheet = stylesheetSingleton();
    return function (styles) {
        react.exports.useEffect(function () {
            sheet.add(styles);
            return function () {
                sheet.remove();
            };
        }, [styles]);
    };
};

var styleSingleton = function () {
    var useStyle = styleHookSingleton();
    var Sheet = function (_a) {
        var styles = _a.styles;
        useStyle(styles);
        return null;
    };
    return Sheet;
};

var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0,
};
var parse = function (x) { return parseInt(x || '', 10) || 0; };
var getOffset = function (gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function (gapMode) {
    if (gapMode === void 0) { gapMode = 'margin'; }
    if (typeof window === 'undefined') {
        return zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0]),
    };
};

var Style = styleSingleton();
// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
var getStyles = function (_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) { gapMode = 'margin'; }
    return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === 'margin' &&
            "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === 'padding' && "padding-right: ".concat(gap, "px ").concat(important, ";"),
    ]
        .filter(Boolean)
        .join(''), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
/**
 * Removes page scrollbar and blocks page scroll when mounted
 */
var RemoveScrollBar = function (props) {
    var _a = react.exports.useState(getGapWidth(props.gapMode)), gap = _a[0], setGap = _a[1];
    react.exports.useEffect(function () {
        setGap(getGapWidth(props.gapMode));
    }, [props.gapMode]);
    var noRelative = props.noRelative, noImportant = props.noImportant, _b = props.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    return react.exports.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '') });
};

var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
                return true;
            },
        });
        // @ts-ignore
        window.addEventListener('test', options, options);
        // @ts-ignore
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
var nonPassive = passiveSupported ? { passive: false } : false;

var elementCouldBeVScrolled = function (node) {
    var styles = window.getComputedStyle(node);
    return (styles.overflowY !== 'hidden' && // not-not-scrollable
        !(styles.overflowY === styles.overflowX && styles.overflowY === 'visible') // scrollable
    );
};
var elementCouldBeHScrolled = function (node) {
    var styles = window.getComputedStyle(node);
    return (styles.overflowX !== 'hidden' && // not-not-scrollable
        !(styles.overflowY === styles.overflowX && styles.overflowX === 'visible') // scrollable
    );
};
var locationCouldBeScrolled = function (axis, node) {
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== 'undefined' && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
            if (s > d) {
                return true;
            }
        }
        current = current.parentNode;
    } while (current && current !== document.body);
    return false;
};
var getVScrollVariables = function (_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
        scrollTop,
        scrollHeight,
        clientHeight,
    ];
};
var getHScrollVariables = function (_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
        scrollLeft,
        scrollWidth,
        clientWidth,
    ];
};
var elementCouldBeScrolled = function (axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function (axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function (axis, direction) {
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */
    return axis === 'h' && direction === 'rtl' ? -1 : 1;
};
var handleScroll = function (axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        target = target.parentNode;
    } while (
    // portaled content
    (!targetInLock && target !== document.body) ||
        // self content
        (targetInLock && (endTarget.contains(target) || endTarget === target)));
    if (isDeltaPositive && ((noOverscroll && availableScroll === 0) || (!noOverscroll && delta > availableScroll))) {
        shouldCancelScroll = true;
    }
    else if (!isDeltaPositive &&
        ((noOverscroll && availableScrollTop === 0) || (!noOverscroll && -delta > availableScrollTop))) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};

var getTouchXY = function (event) {
    return 'changedTouches' in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function (event) { return [event.deltaX, event.deltaY]; };
var extractRef = function (ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function (x, y) { return x[0] === y[0] && x[1] === y[1]; };
var generateStyle = function (id) { return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n"); };
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = react.exports.useRef([]);
    var touchStartRef = react.exports.useRef([0, 0]);
    var activeAxis = react.exports.useRef();
    var id = react.exports.useState(idCounter++)[0];
    var Style = react.exports.useState(function () { return styleSingleton(); })[0];
    var lastProps = react.exports.useRef(props);
    react.exports.useEffect(function () {
        lastProps.current = props;
    }, [props]);
    react.exports.useEffect(function () {
        if (props.inert) {
            document.body.classList.add("block-interactivity-".concat(id));
            var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
            allow_1.forEach(function (el) { return el.classList.add("allow-interactivity-".concat(id)); });
            return function () {
                document.body.classList.remove("block-interactivity-".concat(id));
                allow_1.forEach(function (el) { return el.classList.remove("allow-interactivity-".concat(id)); });
            };
        }
        return;
    }, [props.inert, props.lockRef.current, props.shards]);
    var shouldCancelEvent = react.exports.useCallback(function (event, parent) {
        if ('touches' in event && event.touches.length === 2) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = getTouchXY(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        // allow horizontal touch move on Range inputs. They will not cause any scroll
        if ('touches' in event && moveDirection === 'h' && target.type === 'range') {
            return false;
        }
        var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        }
        else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
            // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return handleScroll(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = react.exports.useCallback(function (_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
        var sourceEvent = shouldPreventQueue.current.filter(function (e) { return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta); })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            event.preventDefault();
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || [])
                .map(extractRef)
                .filter(Boolean)
                .filter(function (node) { return node.contains(event.target); });
            var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
            if (shouldStop) {
                event.preventDefault();
            }
        }
    }, []);
    var shouldCancel = react.exports.useCallback(function (name, delta, target, should) {
        var event = { name: name, delta: delta, target: target, should: should };
        shouldPreventQueue.current.push(event);
        setTimeout(function () {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function (e) { return e !== event; });
        }, 1);
    }, []);
    var scrollTouchStart = react.exports.useCallback(function (event) {
        touchStartRef.current = getTouchXY(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = react.exports.useCallback(function (event) {
        shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = react.exports.useCallback(function (event) {
        shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    react.exports.useEffect(function () {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove,
        });
        document.addEventListener('wheel', shouldPrevent, nonPassive);
        document.addEventListener('touchmove', shouldPrevent, nonPassive);
        document.addEventListener('touchstart', scrollTouchStart, nonPassive);
        return function () {
            lockStack = lockStack.filter(function (inst) { return inst !== Style; });
            document.removeEventListener('wheel', shouldPrevent, nonPassive);
            document.removeEventListener('touchmove', shouldPrevent, nonPassive);
            document.removeEventListener('touchstart', scrollTouchStart, nonPassive);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return (react.exports.createElement(react.exports.Fragment, null,
        inert ? react.exports.createElement(Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? react.exports.createElement(RemoveScrollBar, { gapMode: "margin" }) : null));
}

var SideCar = exportSidecar(effectCar, RemoveScrollSideCar);

var ReactRemoveScroll = react.exports.forwardRef(function (props, ref) { return (react.exports.createElement(RemoveScroll, __assign({}, props, { ref: ref, sideCar: SideCar }))); });
ReactRemoveScroll.classNames = RemoveScroll.classNames;

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded = ["as", "isOpen"],
    _excluded2 = ["allowPinchZoom", "as", "dangerouslyBypassFocusLock", "dangerouslyBypassScrollLock", "initialFocusRef", "onClick", "onDismiss", "onKeyDown", "onMouseDown", "unstable_lockFocusAcrossFrames"],
    _excluded3 = ["as", "onClick", "onKeyDown"],
    _excluded4 = ["allowPinchZoom", "initialFocusRef", "isOpen", "onDismiss"];
({
  allowPinchZoom: propTypes.exports.bool,
  dangerouslyBypassFocusLock: propTypes.exports.bool,
  dangerouslyBypassScrollLock: propTypes.exports.bool,
  // TODO:
  initialFocusRef: function initialFocusRef() {
    return null;
  },
  onDismiss: propTypes.exports.func
}); ////////////////////////////////////////////////////////////////////////////////

/**
 * DialogOverlay
 *
 * Low-level component if you need more control over the styles or rendering of
 * the dialog overlay.
 *
 * Note: You must render a `DialogContent` inside.
 *
 * @see Docs https://reach.tech/dialog#dialogoverlay
 */

var DialogOverlay = /*#__PURE__*/react.exports.forwardRef(function DialogOverlay(_ref, forwardedRef) {
  var _ref$as = _ref.as,
      Comp = _ref$as === void 0 ? "div" : _ref$as,
      _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? true : _ref$isOpen,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);
  // up again when the menu closes, only pops up when focus returns again
  // to the tooltip (like native OS tooltips).

  react.exports.useEffect(function () {
    if (isOpen) {
      // @ts-ignore
      window.__REACH_DISABLE_TOOLTIPS = true;
    } else {
      window.requestAnimationFrame(function () {
        // Wait a frame so that this doesn't fire before tooltip does
        // @ts-ignore
        window.__REACH_DISABLE_TOOLTIPS = false;
      });
    }
  }, [isOpen]);
  return isOpen ? /*#__PURE__*/react.exports.createElement(Portal, {
    "data-reach-dialog-wrapper": ""
  }, /*#__PURE__*/react.exports.createElement(DialogInner, _extends({
    ref: forwardedRef,
    as: Comp
  }, props))) : null;
});

////////////////////////////////////////////////////////////////////////////////

/**
 * DialogInner
 */
var DialogInner = /*#__PURE__*/react.exports.forwardRef(function DialogInner(_ref2, forwardedRef) {
  var allowPinchZoom = _ref2.allowPinchZoom,
      _ref2$as = _ref2.as,
      Comp = _ref2$as === void 0 ? "div" : _ref2$as,
      _ref2$dangerouslyBypa = _ref2.dangerouslyBypassFocusLock,
      dangerouslyBypassFocusLock = _ref2$dangerouslyBypa === void 0 ? false : _ref2$dangerouslyBypa,
      _ref2$dangerouslyBypa2 = _ref2.dangerouslyBypassScrollLock,
      dangerouslyBypassScrollLock = _ref2$dangerouslyBypa2 === void 0 ? false : _ref2$dangerouslyBypa2,
      initialFocusRef = _ref2.initialFocusRef,
      onClick = _ref2.onClick,
      _ref2$onDismiss = _ref2.onDismiss,
      onDismiss = _ref2$onDismiss === void 0 ? noop : _ref2$onDismiss,
      onKeyDown = _ref2.onKeyDown,
      onMouseDown = _ref2.onMouseDown,
      unstable_lockFocusAcrossFrames = _ref2.unstable_lockFocusAcrossFrames,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  var mouseDownTarget = react.exports.useRef(null);
  var overlayNode = react.exports.useRef(null);
  var ref = useComposedRefs(overlayNode, forwardedRef);
  var activateFocusLock = react.exports.useCallback(function () {
    if (initialFocusRef && initialFocusRef.current) {
      initialFocusRef.current.focus();
    }
  }, [initialFocusRef]);

  function handleClick(event) {
    if (mouseDownTarget.current === event.target) {
      event.stopPropagation();
      onDismiss(event);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      event.stopPropagation();
      onDismiss(event);
    }
  }

  function handleMouseDown(event) {
    mouseDownTarget.current = event.target;
  }

  react.exports.useEffect(function () {
    return overlayNode.current ? createAriaHider(overlayNode.current) : void null;
  }, []);
  return /*#__PURE__*/react.exports.createElement(FocusLockCombination, {
    autoFocus: true,
    returnFocus: true,
    onActivation: activateFocusLock,
    disabled: dangerouslyBypassFocusLock,
    crossFrame: unstable_lockFocusAcrossFrames != null ? unstable_lockFocusAcrossFrames : true
  }, /*#__PURE__*/react.exports.createElement(ReactRemoveScroll, {
    allowPinchZoom: allowPinchZoom,
    enabled: !dangerouslyBypassScrollLock
  }, /*#__PURE__*/react.exports.createElement(Comp, _extends({}, props, {
    ref: ref,
    "data-reach-dialog-overlay": ""
    /*
     * We can ignore the `no-static-element-interactions` warning here
     * because our overlay is only designed to capture any outside
     * clicks, not to serve as a clickable element itself.
     */
    ,
    onClick: composeEventHandlers(onClick, handleClick),
    onKeyDown: composeEventHandlers(onKeyDown, handleKeyDown),
    onMouseDown: composeEventHandlers(onMouseDown, handleMouseDown)
  }))));
});

/**
 * DialogContent
 *
 * Low-level component if you need more control over the styles or rendering of
 * the dialog content.
 *
 * Note: Must be a child of `DialogOverlay`.
 *
 * Note: You only need to use this when you are also styling `DialogOverlay`,
 * otherwise you can use the high-level `Dialog` component and pass the props
 * to it. Any props passed to `Dialog` component (besides `isOpen` and
 * `onDismiss`) will be spread onto `DialogContent`.
 *
 * @see Docs https://reach.tech/dialog#dialogcontent
 */


var DialogContent = /*#__PURE__*/react.exports.forwardRef(function DialogContent(_ref3, forwardedRef) {
  var _ref3$as = _ref3.as,
      Comp = _ref3$as === void 0 ? "div" : _ref3$as,
      onClick = _ref3.onClick;
      _ref3.onKeyDown;
      var props = _objectWithoutPropertiesLoose(_ref3, _excluded3);

  return /*#__PURE__*/react.exports.createElement(Comp, _extends({
    "aria-modal": "true",
    role: "dialog",
    tabIndex: -1
  }, props, {
    ref: forwardedRef,
    "data-reach-dialog-content": "",
    onClick: composeEventHandlers(onClick, function (event) {
      event.stopPropagation();
    })
  }));
});

/**
 * Dialog
 *
 * High-level component to render a modal dialog window over the top of the page
 * (or another dialog).
 *
 * @see Docs https://reach.tech/dialog#dialog
 */


var Dialog = /*#__PURE__*/react.exports.forwardRef(function Dialog(_ref4, forwardedRef) {
  var _ref4$allowPinchZoom = _ref4.allowPinchZoom,
      allowPinchZoom = _ref4$allowPinchZoom === void 0 ? false : _ref4$allowPinchZoom,
      initialFocusRef = _ref4.initialFocusRef,
      isOpen = _ref4.isOpen,
      _ref4$onDismiss = _ref4.onDismiss,
      onDismiss = _ref4$onDismiss === void 0 ? noop : _ref4$onDismiss,
      props = _objectWithoutPropertiesLoose(_ref4, _excluded4);

  return /*#__PURE__*/react.exports.createElement(DialogOverlay, {
    allowPinchZoom: allowPinchZoom,
    initialFocusRef: initialFocusRef,
    isOpen: isOpen,
    onDismiss: onDismiss
  }, /*#__PURE__*/react.exports.createElement(DialogContent, _extends({
    ref: forwardedRef
  }, props)));
});


function createAriaHider(dialogNode) {
  var originalValues = [];
  var rootNodes = [];
  var ownerDocument = getOwnerDocument(dialogNode);

  if (!dialogNode) {

    return noop;
  }

  Array.prototype.forEach.call(ownerDocument.querySelectorAll("body > *"), function (node) {
    var _dialogNode$parentNod, _dialogNode$parentNod2;

    var portalNode = (_dialogNode$parentNod = dialogNode.parentNode) == null ? void 0 : (_dialogNode$parentNod2 = _dialogNode$parentNod.parentNode) == null ? void 0 : _dialogNode$parentNod2.parentNode;

    if (node === portalNode) {
      return;
    }

    var attr = node.getAttribute("aria-hidden");
    var alreadyHidden = attr !== null && attr !== "false";

    if (alreadyHidden) {
      return;
    }

    originalValues.push(attr);
    rootNodes.push(node);
    node.setAttribute("aria-hidden", "true");
  });
  return function () {
    rootNodes.forEach(function (node, index) {
      var originalValue = originalValues[index];

      if (originalValue === null) {
        node.removeAttribute("aria-hidden");
      } else {
        node.setAttribute("aria-hidden", originalValue);
      }
    });
  };
}

const defaultValue = () => { }; // eslint-disable-line @typescript-eslint/no-empty-function
var DispatchContext = React.createContext(defaultValue);

var _a$1;
class Character {
    constructor(kinematic, behaviours, 
    // Suggested: a single emoji
    label) {
        this[_a$1] = true;
        this.kinematic = kinematic || {
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [0, 0],
            velocity: [0, 0],
            orientation: 0,
            rotation: 0,
        };
        this.behaviours = behaviours || [];
        this.label = label;
    }
}
_a$1 = L;

function initScenario$7() {
    return {
        name: "Blank",
        description: "Blank",
        characters: new Map([
            [
                "_1",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [150, 150],
                    velocity: [0, 0],
                    orientation: 2 * Math.PI,
                    rotation: 0,
                }, []),
            ],
        ]),
        shapes: new Map(),
        paths: new Map(),
    };
}

var _a;
class AbstractBehaviour {
    constructor() {
        this.weight = 1;
        this.debug = {
            circles: [],
            edges: [],
            points: [],
            vectors: [],
        };
        this[_a] = true;
    }
}
_a = L;

function mapToRange(orientation) {
    // To rotate all the way clockwise, use the value 6.283
    // 6.3 is (I expect) NE 0.01...
    const nextOrientation = Math.abs(orientation) > Math.PI
        ? orientation - Math.PI * 2 * Math.sign(orientation)
        : orientation;
    return nextOrientation % (Math.PI * 2);
}

/*
 * Aims to match a given orientation.
 * Increases rotation speed
 * Backs off based on timeToTarget
 * Stops within alignTolerance
 */
class Align extends AbstractBehaviour {
    constructor(targetId, maxRotation, decelerationTolerance, alignTolerance, timeToTarget) {
        super();
        this.name = "ALIGN";
        this.targetId = targetId;
        this.maxRotation = maxRotation !== null && maxRotation !== void 0 ? maxRotation : 120;
        this.decelerationTolerance = decelerationTolerance !== null && decelerationTolerance !== void 0 ? decelerationTolerance : 2;
        this.alignTolerance = alignTolerance !== null && alignTolerance !== void 0 ? alignTolerance : 0.01;
        this.timeToTarget = timeToTarget !== null && timeToTarget !== void 0 ? timeToTarget : 0.1;
    }
    calculate(kinematic, orientation) {
        const linear = [0, 0];
        const rotation = mapToRange(orientation - kinematic.orientation);
        const rotationSize = Math.abs(rotation);
        if (rotationSize < this.alignTolerance) {
            return {
                linear,
                angular: 0,
            };
        }
        const isSlowed = rotationSize <= this.decelerationTolerance;
        const idealRotation = isSlowed
            ? (this.maxRotation * rotationSize) / this.decelerationTolerance
            : this.maxRotation;
        const nextIdealRotation = idealRotation * (rotation / rotationSize);
        const angular = (nextIdealRotation - kinematic.rotation) / this.timeToTarget;
        const angularAcceleration = Math.abs(angular);
        const finalAngular = angularAcceleration > kinematic.maxAngularAcceleration
            ? (angular * kinematic.maxAngularAcceleration) / angularAcceleration
            : angular;
        return {
            angular: finalAngular,
            linear,
        };
    }
}

var dist = {};

Object.defineProperty(dist, "__esModule", { value: true });
var distance_1 = dist.distance = normalise_1 = dist.normalise = radiansToVector_1 = dist.radiansToVector = dist.degreesToVector = vectorToRadians_1 = dist.vectorToRadians = length_1 = dist.length = dist.cross = dot_1 = dist.dot = multiply_1 = dist.multiply = subtract_1 = dist.subtract = add_1 = dist.add = void 0;
function add(_a, _b) {
    var ax = _a[0], az = _a[1];
    var bx = _b[0], bz = _b[1];
    return [ax + bx, az + bz];
}
var add_1 = dist.add = add;
function subtract(_a, _b) {
    var ax = _a[0], az = _a[1];
    var bx = _b[0], bz = _b[1];
    return [ax - bx, az - bz];
}
var subtract_1 = dist.subtract = subtract;
function multiply(_a, i) {
    var x = _a[0], z = _a[1];
    return [x * i, z * i];
}
var multiply_1 = dist.multiply = multiply;
function dot(_a, _b) {
    var ax = _a[0], az = _a[1];
    var bx = _b[0], bz = _b[1];
    return ax * bx + az * bz;
}
var dot_1 = dist.dot = dot;
function cross(_a, _b) {
    var ax = _a[0], az = _a[1];
    var bx = _b[0], bz = _b[1];
    return ax * bz - az * bx;
}
dist.cross = cross;
function length(_a) {
    var x = _a[0], z = _a[1];
    return Math.hypot(x, z);
}
var length_1 = dist.length = length;
function vectorToRadians(_a) {
    var x = _a[0], z = _a[1];
    return Math.atan2(z, x);
}
var vectorToRadians_1 = dist.vectorToRadians = vectorToRadians;
function degreesToVector(angle) {
    var theta = (angle * Math.PI) / 180;
    return [Math.cos(theta), Math.sin(theta)];
}
dist.degreesToVector = degreesToVector;
function radiansToVector(rad) {
    return [Math.cos(rad), Math.sin(rad)];
}
var radiansToVector_1 = dist.radiansToVector = radiansToVector;
function normalise(v) {
    var l = length(v);
    return l === 0 ? v : multiply(v, 1 / length(v));
}
var normalise_1 = dist.normalise = normalise;
function distance(v1, v2) {
    return length(subtract(v1, v2));
}
distance_1 = dist.distance = distance;

class Arrive extends AbstractBehaviour {
    constructor(targetId, timeToTarget, targetRadius, slowRadius) {
        super();
        this.name = "ARRIVE";
        this.targetId = targetId;
        this.timeToTarget = timeToTarget !== null && timeToTarget !== void 0 ? timeToTarget : 3;
        this.targetRadius = targetRadius !== null && targetRadius !== void 0 ? targetRadius : 5;
        this.slowRadius = slowRadius !== null && slowRadius !== void 0 ? slowRadius : 60;
    }
    calculate(kinematic, targetPosition) {
        const distanceToTarget = distance_1(kinematic.position, targetPosition);
        const directionToTarget = subtract_1(targetPosition, kinematic.position);
        if (distanceToTarget < this.targetRadius) {
            return null;
        }
        const idealSpeed = distanceToTarget > this.slowRadius
            ? kinematic.maxSpeed
            : kinematic.maxSpeed * (distanceToTarget / this.slowRadius);
        // Here we appear to take a vector from the two points, and relate it to
        // the ideal speed
        const idealVelocity = multiply_1(normalise_1(directionToTarget), idealSpeed);
        const reduced = subtract_1(idealVelocity, kinematic.velocity);
        // A higher value will arrive sooner
        const linear = multiply_1(reduced, 1 / this.timeToTarget);
        const finalLinear = length_1(linear) > kinematic.maxAcceleration
            ? multiply_1(normalise_1(linear), kinematic.maxAcceleration)
            : linear;
        this.debug.circles = [
            {
                position: targetPosition,
                radius: 2,
                fillStyle: "rgba(0, 0,255, 0.5)",
            },
        ];
        return {
            angular: 0,
            linear: finalLinear,
        };
    }
}

class CollisionAvoidance extends AbstractBehaviour {
    constructor(radius) {
        super();
        this.name = "COLLISION_AVOIDANCE";
        // Holds the collision radius of a character (we assume all characters have
        // the same radius here)
        this.radius = radius || 10;
    }
    calculate(kinematic, targets) {
        const init = {
            timeToCollision: Infinity,
            minSeparation: 0,
            distance: 0,
            relativePos: [0, 0],
            relativeVel: [0, 0],
            target: null,
        };
        const final = targets.reduce((acc, target) => {
            // We find the relationship between the character kinematic and each target kinematic
            const relativePos = subtract_1(target.position, kinematic.position);
            const relativeVel = subtract_1(kinematic.velocity, target.velocity);
            const relativeSpeed = length_1(relativeVel);
            // A positive value for the dot product implies the character and target may cross paths
            const timeToCollision = dot_1(relativePos, relativeVel) / relativeSpeed ** 2;
            // `distance` is the gap between the kinematics in pixels
            const distance = length_1(relativePos);
            // `minSeparation` is the distance between the two kinematics at the time of the closest
            // approach. Given they will not collide, no steering is needed.
            const minSeparation = distance - relativeSpeed * timeToCollision;
            if (minSeparation > 2 * this.radius) {
                return acc;
            }
            // Given a negative timeToCollision, the characters are moving apart.
            if (timeToCollision > 0 && timeToCollision < acc.timeToCollision) {
                // Will collide with this target first
                return {
                    timeToCollision,
                    minSeparation,
                    distance,
                    relativePos,
                    relativeVel,
                    target,
                };
            }
            return acc;
        }, init);
        if (!final.target) {
            this.debug.circles = [
                {
                    position: kinematic.position,
                    radius: this.radius,
                    fillStyle: "rgba(0, 255, 0, 0.1)",
                },
            ];
            return {
                angular: 0,
                linear: [0, 0],
            };
        }
        const isCollisionExpected = final.minSeparation <= 0 || final.distance < 2 * this.radius;
        // Avoid by altering course
        const steeringBasedOnCurrentPosition = subtract_1(kinematic.position, final.target.position);
        // Avoid by slamming the brakes and altering course
        const steeringBasedOnFutureRelativePosition = add_1(final.relativePos, multiply_1(final.relativeVel, final.timeToCollision));
        const relativePos = isCollisionExpected
            ? // If we’re going to hit exactly, or if we’re already colliding, then
                // do the steering based on current position.
                steeringBasedOnCurrentPosition
            : // Otherwise calculate the future relative position
                steeringBasedOnFutureRelativePosition;
        this.debug.circles = [
            {
                position: kinematic.position,
                radius: this.radius,
                fillStyle: isCollisionExpected
                    ? "rgba(255, 0, 0, 0.1)"
                    : "rgba(0, 255, 0, 0.1)",
            },
            {
                // Green
                position: add_1(kinematic.position, steeringBasedOnFutureRelativePosition),
                radius: 2,
                fillStyle: "rgba(0, 255, 0, 1)",
            },
            {
                // Red
                position: add_1(kinematic.position, steeringBasedOnCurrentPosition),
                radius: 2,
                fillStyle: "rgba(255, 0, 0, 1)",
            },
        ];
        // Avoid the target
        return {
            linear: multiply_1(normalise_1(relativePos), kinematic.maxAcceleration),
            angular: 0,
        };
    }
}

class Flee extends AbstractBehaviour {
    constructor(targetId) {
        super();
        this.name = "FLEE";
        this.targetId = targetId;
    }
    calculate(kinematic, targetPosition) {
        const linear = multiply_1(normalise_1(subtract_1(kinematic.position, targetPosition)), kinematic.maxAcceleration);
        const angular = 0;
        return {
            angular,
            linear,
        };
    }
}

class Evade extends AbstractBehaviour {
    constructor(targetId, maxPrediction) {
        super();
        this.name = "EVADE";
        this.targetId = targetId;
        this.flee = new Flee(targetId);
        this.maxPrediction = maxPrediction !== null && maxPrediction !== void 0 ? maxPrediction : 1;
    }
    calculate(kinematic, target) {
        const direction = subtract_1(target.position, kinematic.position);
        const distance = length_1(direction);
        const speed = length_1(kinematic.velocity);
        const prediction = speed <= distance / this.maxPrediction
            ? this.maxPrediction
            : distance / speed;
        const nextTargetPosition = add_1(target.position, multiply_1(target.velocity, prediction));
        return this.flee.calculate(kinematic, nextTargetPosition);
    }
}

class Face extends AbstractBehaviour {
    constructor(targetId) {
        super();
        this.name = "FACE";
        this.targetId = targetId;
        this.align = new Align(targetId);
    }
    calculate(kinematic, position) {
        const direction = subtract_1(position, kinematic.position);
        if (length_1(direction) === 0) {
            return {
                angular: 0,
                linear: [0, 0],
            };
        }
        const nextOrientation = Math.atan2(direction[1], direction[0]);
        return this.align.calculate(kinematic, nextOrientation);
    }
}

const zero2D = [0, 0];
function vectorToEdge2D(t, [px, pz], [[ax, az], [bx, bz]]) {
    return [(1 - t) * ax + t * bx - px, (1 - t) * az + t * bz - pz];
}
function sqDiag([x, z]) {
    return x ** 2 + z ** 2;
}
function findEdgeIntersection([a1, a2], [b1, b2]) {
    const [s1x, s1y] = subtract_1(a2, a1);
    const [s2x, s2y] = subtract_1(b2, b1);
    const s = (-s1y * (a1[0] - b1[0]) + s1x * (a1[1] - b1[1])) / (-s2x * s1y + s1x * s2y);
    const t = (s2x * (a1[1] - b1[1]) - s2y * (a1[0] - b1[0])) / (-s2x * s1y + s1x * s2y);
    if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
        const x = a1[0] + t * s1x;
        const z = a1[1] + t * s1y;
        return [x, z];
    }
    return null;
}
function findClosestPointOnEdge([[ax, az], [bx, bz]], [px, pz]) {
    const v = [bx - ax, bz - az]; // distance from a to b
    const u = [ax - px, az - pz]; // distance from p to a
    const vu = v[0] * u[0] + v[1] * u[1]; // sum the multiplied distances?
    const vv = sqDiag(v); // dist from a->b squared
    const t = -vu / vv;
    if (t >= 0 && t <= 1) {
        return vectorToEdge2D(t, zero2D, [
            [ax, az],
            [bx, bz],
        ]);
    }
    const g0 = sqDiag(vectorToEdge2D(0, [px, pz], [
        [ax, az],
        [bx, bz],
    ]));
    const g1 = sqDiag(vectorToEdge2D(1, [px, pz], [
        [ax, az],
        [bx, bz],
    ]));
    return g0 <= g1 ? [ax, az] : [bx, bz];
}
function isBetween([ax, az], [bx, bz], [cx, cz], tolerance) {
    //test if the point c is inside a pre-defined distance (tolerance) from the line
    const distance = Math.abs((cz - bz) * ax - (cx - bx) * az + cx * bz - cz * bx) /
        Math.sqrt(Math.pow(cz - bz, 2) + Math.pow(cx - bx, 2));
    if (distance > tolerance) {
        return false;
    }
    //test if the point c is between a and b
    const dotproduct = (cx - ax) * (bx - ax) + (cz - az) * (bz - az);
    if (dotproduct < 0) {
        return false;
    }
    const squaredlengthba = (bx - ax) * (bx - ax) + (bz - az) * (bz - az);
    if (dotproduct > squaredlengthba) {
        return false;
    }
    return true;
}
function getParam(path, characterPosition) {
    const closestPoint = findClosestPointOnPath(path, characterPosition);
    const init = {
        distance: 0,
        node: path.points[0],
        done: false,
    };
    const points = path.isClosed ? [...path.points, path.points[0]] : path.points;
    return points.reduce((acc, node) => {
        if (acc.done) {
            return acc;
        }
        const isBetweenPoints = isBetween(acc.node, node, closestPoint, 0.1);
        if (acc.node !== node && isBetweenPoints) {
            return {
                done: true,
                distance: acc.distance + distance_1(acc.node, closestPoint),
                node: closestPoint,
            };
        }
        return {
            done: false,
            node,
            distance: acc.distance + distance_1(acc.node, node),
        };
    }, init).distance;
}
// Returns the position at {param} distance along the path.
function getPosition(path, param) {
    const init = {
        distance: 0,
        node: path.points[0],
        done: false,
    };
    const points = path.isClosed ? [...path.points, path.points[0]] : path.points;
    return points.reduce((acc, node) => {
        if (acc.done) {
            return acc;
        }
        const accDist = acc.distance + distance_1(acc.node, node);
        if (accDist < param) {
            // have not reached param yet
            return {
                distance: accDist,
                node,
                done: false,
            };
        }
        const remainingDistanceToParam = param - acc.distance;
        const v = subtract_1(acc.node, node);
        const nodeAtParam = subtract_1(acc.node, multiply_1(normalise_1(v), remainingDistanceToParam));
        return {
            distance: acc.distance,
            node: nodeAtParam,
            done: true,
        };
    }, init).node;
}
function distanceToEdge([[ax, az], [bx, bz]], [px, pz] // point
) {
    const A = px - ax;
    const B = pz - az;
    const C = bx - ax;
    const D = bz - az;
    const dot = A * C + B * D;
    const lengthSquared = C ** 2 + D ** 2;
    const param = lengthSquared === 0 ? -1 : dot / lengthSquared;
    if (param < 0) {
        const dx = px - ax;
        const dy = pz - az;
        return Math.sqrt(dx ** 2 + dy ** 2);
    }
    if (param > 1) {
        const dx = px - bx;
        const dy = pz - bz;
        return Math.sqrt(dx ** 2 + dy ** 2);
    }
    const dx = px - (ax + param * C);
    const dy = pz - (az + param * D);
    return Math.sqrt(dx ** 2 + dy ** 2);
}
function findClosestEdgeToPoint(point, path) {
    const closingEdge = [
        path.points[path.points.length - 1],
        path.points[0],
    ];
    const initialEdges = path.isClosed ? [closingEdge] : [];
    const edges = path.points.reduce((acc, vecB, index) => {
        if (index === 0) {
            return acc;
        }
        const vecA = path.points[index - 1];
        const edge = [vecA, vecB];
        return [...acc, edge];
    }, initialEdges);
    const distances = edges.map((seg, index) => {
        return { dist: distanceToEdge(seg, point), index };
    });
    const shortest = distances.reduce((acc, d) => (acc.dist <= d.dist ? acc : d), {
        dist: Infinity,
        index: -1,
    });
    return edges[shortest.index];
}
function findClosestPointOnPath(path, point) {
    if (path.points.length < 2) {
        return point;
    }
    return findClosestPointOnEdge(findClosestEdgeToPoint(point, path), point);
}

class Seek extends AbstractBehaviour {
    constructor(targetId) {
        super();
        this.name = "SEEK";
        this.targetId = targetId;
    }
    calculate(kinematic, targetPosition) {
        const linear = multiply_1(normalise_1(subtract_1(targetPosition, kinematic.position)), kinematic.maxAcceleration);
        const angular = 0;
        return {
            angular,
            linear,
        };
    }
}

class FollowPathChaseRabbit extends AbstractBehaviour {
    constructor(pathId, pathOffset) {
        super();
        this.name = "FOLLOW_PATH_CHASE_RABBIT";
        this.pathId = pathId;
        // Holds the distance along the path to generate the target. Can be negative
        // if the character is to move along the reverse direction
        this.pathOffset = pathOffset !== null && pathOffset !== void 0 ? pathOffset : 30;
        this.seek = new Seek("");
    }
    calculate(kinematic, path) {
        // Find the current position on the path
        const currentParam = getParam(path, kinematic.position);
        // Offset it
        const targetParam = currentParam + this.pathOffset;
        // Get the target position
        const targetPosition = getPosition(path, targetParam);
        this.debug.edges = [
            {
                strokeStyle: "rgb(0, 105, 92)",
                edge: [kinematic.position, targetPosition],
            },
        ];
        this.debug.points = [
            { position: targetPosition, fillStyle: "rgb(0, 105, 92)" },
        ];
        const { linear } = this.seek.calculate(kinematic, targetPosition);
        return { angular: 0, linear };
    }
}

class FollowPathPredict extends AbstractBehaviour {
    constructor(pathId, pathOffset, predictTime) {
        super();
        this.name = "FOLLOW_PATH_PREDICT";
        this.pathId = pathId;
        // Holds the distance along the path to generate the target. Can be negative
        // if the character is to move along the reverse direction
        this.pathOffset = pathOffset !== null && pathOffset !== void 0 ? pathOffset : 30;
        // Holds the time in the future to predict the character position
        this.predictTime = predictTime !== null && predictTime !== void 0 ? predictTime : 0.1;
        this.seek = new Seek("");
    }
    calculate(kinematic, path) {
        // Find the predicted future location
        const futurePos = add_1(kinematic.position, multiply_1(kinematic.velocity, this.predictTime));
        // Find the predicted position on the path
        const currentParam = getParam(path, futurePos);
        // Offset it
        const targetParam = currentParam + this.pathOffset;
        // Get the target position
        const targetPosition = getPosition(path, targetParam);
        this.debug.edges = [
            { strokeStyle: "rgb(0, 105, 92)", edge: [futurePos, targetPosition] },
        ];
        this.debug.points = [{ position: futurePos, fillStyle: "rgb(0, 105, 92)" }];
        const { linear } = this.seek.calculate(kinematic, targetPosition);
        return { angular: 0, linear };
    }
}

class LookWhereYouAreGoing extends AbstractBehaviour {
    constructor(align) {
        super();
        this.name = "LOOK_WHERE_YOU_ARE_GOING";
        this.align = align || new Align("");
    }
    calculate(kinematic) {
        if (length_1(kinematic.velocity) === 0) {
            return {
                linear: [0, 0],
                angular: 0,
            };
        }
        const orientation = vectorToRadians_1(kinematic.velocity);
        return this.align.calculate(kinematic, orientation);
    }
}

class MatchVelocity extends AbstractBehaviour {
    constructor(targetId, timeToTarget) {
        super();
        this.name = "MATCH_VELOCITY";
        this.targetId = targetId;
        this.timeToTarget = timeToTarget !== null && timeToTarget !== void 0 ? timeToTarget : 0.1;
    }
    calculate(kinematic, target) {
        const angular = 0;
        const linear = subtract_1(target.velocity, kinematic.velocity);
        const dividedLinear = multiply_1(linear, 1 / this.timeToTarget);
        const finalLinear = length_1(dividedLinear) > kinematic.maxAcceleration
            ? multiply_1(normalise_1(linear), kinematic.maxAcceleration)
            : linear;
        return {
            angular,
            linear: finalLinear,
        };
    }
}

function getNormals([a, b]) {
    const [dx, dy] = subtract_1(a, b);
    return [
        [-dy, dx],
        [dy, -dx],
    ];
}
function findAllIntersections(edge, // Edge, absolutely positioned
shapes) {
    return shapes.reduce((acc, shape) => {
        return shape.path.points.reduce((innerAcc, point, index) => {
            const lastIndex = index === 0 ? shape.path.points.length - 1 : index - 1;
            const [relA, relB] = [point, shape.path.points[lastIndex]];
            const absoluteEdge = [
                add_1(shape.path.position, relA),
                add_1(shape.path.position, relB),
            ];
            const p = findEdgeIntersection(edge, absoluteEdge);
            if (p) {
                const inter = {
                    point: p,
                    edge: absoluteEdge,
                };
                return [...innerAcc, inter];
            }
            return innerAcc;
        }, acc);
    }, []);
}
// If the edge is from point A to point B, the first intersection is the one
// closest to point A
function findFirstIntersection(edge, shapes) {
    const intersections = findAllIntersections(edge, shapes);
    if (intersections.length === 0) {
        return null;
    }
    const a = edge[0];
    const init = { int: null, dist: Infinity };
    return intersections.reduce((acc, int) => {
        const dist = distance_1(a, int.point);
        return dist < acc.dist ? { int, dist } : acc;
    }, init).int;
}
function getCollision(edge, shapes) {
    const intersection = findFirstIntersection(edge, shapes);
    if (intersection) {
        // Here we get the normals for the intersected edge
        const normals = getNormals(intersection.edge);
        return {
            position: intersection.point,
            normal: normalise_1(normals[0]),
        };
    }
    return null;
}

function getWhiskerRay(k, radians, magnitude) {
    const bearing = vectorToRadians_1(k.velocity) - radians;
    return [
        k.position,
        add_1(k.position, multiply_1(radiansToVector_1(bearing), magnitude)),
    ];
}
class ObstacleAvoidance extends AbstractBehaviour {
    constructor(avoidDistance) {
        super();
        this.name = "OBSTACLE_AVOIDANCE";
        // Holds the minimum distance to a wall (i.e., how far to avoid collision)
        // should be greater than the radius of the character
        this.avoidDistance = avoidDistance !== null && avoidDistance !== void 0 ? avoidDistance : 10;
        // Holds the distance to look ahead for a collision
        // (i.e., the length of the collision ray)
        this.seek = new Seek("");
        this.rayIndex = 0;
        this.collisionIndex = -1;
        this.incrementing = true;
        this.collisions = [null, null, null, null, null, null];
    }
    // This selects a ray, such that we sweep back and forth between selected rays
    // on each tick.
    updateRayIndex() {
        if (this.incrementing) {
            this.rayIndex++;
            if (this.rayIndex === 5) {
                this.incrementing = false;
            }
            return;
        }
        if (!this.incrementing) {
            this.rayIndex--;
            if (this.rayIndex === 0) {
                this.incrementing = true;
            }
        }
    }
    calculate(kinematic, shapes) {
        const speed = length_1(kinematic.velocity);
        const rays = [
            getWhiskerRay(kinematic, -0.9, 0.3 * speed),
            getWhiskerRay(kinematic, -0.3, 1 * speed),
            getWhiskerRay(kinematic, -0.1, 2.1 * speed),
            getWhiskerRay(kinematic, 0.1, 2.1 * speed),
            getWhiskerRay(kinematic, 0.3, 1 * speed),
            getWhiskerRay(kinematic, 0.9, 0.3 * speed),
        ];
        // We have a set of "rays", like whiskers that extend from the character.
        // We sweep across the rays, checking one ray on each tick for a collision.
        // For each sweep we select the ray with the closest collision, and given
        // such a ray exists, we halt sweeping and continue to check that ray for
        // collisions on each tick until they no longer are present.
        // Sweeping then resumes.
        const hasRayWithCollision = this.collisionIndex > -1 &&
            !!getCollision(rays[this.collisionIndex], shapes);
        if (!hasRayWithCollision) {
            this.collisionIndex = -1;
            this.updateRayIndex();
        }
        this.collisions[this.rayIndex] = getCollision(rays[this.rayIndex], shapes);
        if (this.rayIndex === 0 || this.rayIndex === 5) {
            // find the nearest collision to the kinematic
            this.collisionIndex = this.collisions.reduce((acc, item, index) => {
                if (!item) {
                    return acc;
                }
                const accCollision = this.collisions[acc];
                if (!accCollision) {
                    return index;
                }
                const distanceFromCollision = length_1(subtract_1(kinematic.position, item.position));
                const distanceFromAcc = length_1(subtract_1(kinematic.position, accCollision.position));
                return distanceFromCollision < distanceFromAcc ? index : acc;
            }, -1);
        }
        const collision = this.collisions[this.collisionIndex];
        // Show the whiskers
        this.debug.edges = rays.map((edge, index) => {
            let strokeStyle = "rgb(224, 224, 224)";
            if (index === this.rayIndex) {
                strokeStyle = "rgb(191, 54, 12)";
            }
            if (index === this.collisionIndex) {
                strokeStyle = "rgb(68, 138, 255)";
            }
            return {
                edge,
                strokeStyle,
            };
        });
        // If have no collision, do nothing
        if (!collision) {
            this.debug.points = [];
            this.debug.circles = [];
            delete this.debug.text;
            return {
                angular: 0,
                linear: [0, 0],
            };
        }
        // Show collision points
        this.debug.points = [
            {
                fillStyle: "rgba(245, 0, 87)",
                position: collision.position,
            },
        ];
        // Given a collision, we make the steering seek a target such that the character
        // steers away from the side with the collision, and change velocity relative to
        // the collision proximity.
        const projectedPosition = kinematic.velocity;
        const relPos = subtract_1(kinematic.position, collision.position);
        // Find whether the collision is to the left or right of the kinematics direction of travel
        const isLeftOfBearing = -projectedPosition[0] * relPos[1] + projectedPosition[1] * relPos[0] < 0;
        const charBearing = vectorToRadians_1(kinematic.velocity);
        const adjustment = isLeftOfBearing ? (-2 * Math.PI) / 9 : (2 * Math.PI) / 9;
        const nextBearing = mapToRange(charBearing - Math.PI + adjustment);
        const distanceFromCollision = length_1(subtract_1(kinematic.position, collision.position));
        const magnitude = Math.max(distanceFromCollision * 0.8, 5);
        const targetPosition = add_1(kinematic.position, multiply_1(radiansToVector_1(nextBearing), magnitude));
        this.debug.circles = [
            {
                position: targetPosition,
                radius: 2,
                fillStyle: "rgba(0, 255,0, 0.5)",
            },
        ];
        // 2. Delegate to seek
        return this.seek.calculate(kinematic, targetPosition);
    }
}

class Pursue extends AbstractBehaviour {
    constructor(targetId, maxPrediction) {
        super();
        this.name = "PURSUE";
        this.maxPrediction = maxPrediction !== null && maxPrediction !== void 0 ? maxPrediction : 1;
        this.seek = new Seek(targetId);
        this.targetId = targetId;
    }
    calculate(kinematic, target) {
        const direction = subtract_1(target.position, kinematic.position);
        const distance = length_1(direction);
        const speed = length_1(kinematic.velocity);
        const prediction = speed <= distance / this.maxPrediction
            ? this.maxPrediction
            : distance / speed;
        const nextTargetPosition = add_1(target.position, multiply_1(target.velocity, prediction));
        return this.seek.calculate(kinematic, nextTargetPosition);
    }
}

class Separation extends AbstractBehaviour {
    constructor(threshold, decayCoefficient) {
        super();
        this.name = "SEPARATION";
        // The threshold to take action
        this.threshold = threshold !== null && threshold !== void 0 ? threshold : 250;
        // Holds the constant coefficient of decay for the inverse square law force
        this.decayCoefficient = decayCoefficient !== null && decayCoefficient !== void 0 ? decayCoefficient : 1500;
    }
    calculate(kinematic, targets) {
        return targets.reduce((acc, target) => {
            const direction = subtract_1(kinematic.position, target.position);
            const distance = length_1(direction);
            if (distance < this.threshold) {
                const strength = Math.min(this.decayCoefficient / distance ** 2, kinematic.maxAcceleration);
                const normalDirection = normalise_1(direction);
                const linear = multiply_1(normalDirection, strength);
                return {
                    linear: add_1(linear, acc.linear),
                    angular: 0,
                };
            }
            return acc;
        }, {
            linear: [0, 0],
            angular: 0,
        });
    }
}

class Wander extends AbstractBehaviour {
    constructor(wanderOffset, wanderRadius, wanderRate) {
        super();
        this.name = "WANDER";
        // The offset and radius of the wander circle
        this.wanderOffset = wanderOffset !== null && wanderOffset !== void 0 ? wanderOffset : 40;
        this.wanderRadius = wanderRadius !== null && wanderRadius !== void 0 ? wanderRadius : 20;
        this.wanderRate = wanderRate !== null && wanderRate !== void 0 ? wanderRate : 0.4;
        this.wanderOrientation = 0;
    }
    calculate(kinematic) {
        const random = Math.random() - Math.random();
        this.wanderOrientation += random * this.wanderRate;
        const targetOrientation = this.wanderOrientation + kinematic.orientation;
        const targetOrientationAsVector = radiansToVector_1(targetOrientation);
        // Anchor for the wander circle
        const circleCentrePosition = multiply_1(radiansToVector_1(kinematic.orientation), this.wanderOffset);
        const nextTargetPosition = add_1(circleCentrePosition, multiply_1(targetOrientationAsVector, this.wanderRadius));
        const linear = multiply_1(nextTargetPosition, kinematic.maxAcceleration);
        this.debug.vectors = [
            { position: nextTargetPosition, fillStyle: "rgb(191, 54, 12)" },
        ];
        return {
            angular: 0,
            linear,
        };
    }
}

function initScenario$6() {
    return {
        name: "Wander",
        description: "This character exhibits the wander behaviour",
        characters: new Map([
            [
                "_1",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [400, 380],
                    velocity: [0, 0],
                    orientation: (3 * Math.PI) / 2,
                    rotation: 0,
                }, [new Wander(), new LookWhereYouAreGoing()]),
            ],
            [
                "_2",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [380, 400],
                    velocity: [0, 0],
                    orientation: Math.PI,
                    rotation: 0,
                }, [new Wander(), new LookWhereYouAreGoing()]),
            ],
            [
                "_3",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [400, 420],
                    velocity: [0, 0],
                    orientation: Math.PI / 2,
                    rotation: 0,
                }, [new Wander(), new LookWhereYouAreGoing()]),
            ],
            [
                "_4",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [420, 400],
                    velocity: [0, 0],
                    orientation: 0,
                    rotation: 0,
                }, [new Wander(), new LookWhereYouAreGoing()]),
            ],
        ]),
        shapes: new Map(),
        paths: new Map(),
    };
}

function initScenario$5() {
    return {
        name: "Collision Avoidance",
        description: "This character exhibits the collision avoidance behaviour",
        characters: new Map([
            [
                "_1",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [400, 280],
                    velocity: [0, 15],
                    orientation: 1.5,
                    rotation: 0,
                }, [new CollisionAvoidance()]),
            ],
            [
                "_2",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [380, 400],
                    velocity: [0, -10],
                    orientation: 1.5 * Math.PI,
                    rotation: 0,
                }, []),
            ],
            [
                "_3",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [402, 440],
                    velocity: [0, -8],
                    orientation: 1.5 * Math.PI,
                    rotation: 0,
                }, []),
            ],
            [
                "_4",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [420, 480],
                    velocity: [0, -12],
                    orientation: 1.5 * Math.PI,
                    rotation: 0,
                }, []),
            ],
            [
                "_5",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [340, 520],
                    velocity: [0, -12],
                    orientation: 1.5 * Math.PI,
                    rotation: 0,
                }, []),
            ],
            [
                "_6",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [360, 540],
                    velocity: [0, -8],
                    orientation: 1.5 * Math.PI,
                    rotation: 0,
                }, []),
            ],
            [
                "_7",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [380, 600],
                    velocity: [0, -15],
                    orientation: 1.5 * Math.PI,
                    rotation: 0,
                }, []),
            ],
            [
                "_8",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [400, 650],
                    velocity: [0, -8],
                    orientation: 1.5 * Math.PI,
                    rotation: 0,
                }, []),
            ],
            [
                "_9",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [420, 550],
                    velocity: [0, -10],
                    orientation: 1.5 * Math.PI,
                    rotation: 0,
                }, []),
            ],
        ]),
        shapes: new Map(),
        paths: new Map(),
    };
}

const range1 = [50, 150, 250, 350, 450, 550];
const range2 = [100, 200, 300, 400, 500, 600];
const range3 = [150, 250, 350, 450, 550, 650];
function makePair(x, z) {
    const id = `${x}:${z}`;
    const shape = {
        path: {
            label: id,
            isClosed: false,
            position: [
                x + (-10 + Math.round(Math.random() * 20)),
                z + (-10 + Math.round(Math.random() * 20)),
            ],
            points: [
                [-10, -10],
                [10, -10],
                [10, 10],
                [-10, 10], // BL
            ],
        },
    };
    return [id, shape];
}
const pairs1 = range1
    .map((x) => range2.map((z) => makePair(x, z)))
    .flat();
const pairs2 = range2
    .map((x) => range3.map((z) => makePair(x, z)))
    .flat();
function initScenario$4() {
    return {
        name: "Obstacle Avoidance (many)",
        description: "This character exhibits the obstacle avoidance behaviour",
        characters: new Map([
            [
                "_1",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 300,
                    maxSpeed: 45,
                    position: [55, 20],
                    velocity: [40, 0],
                    orientation: 0,
                    rotation: 0,
                }, [
                    new ObstacleAvoidance(),
                    new LookWhereYouAreGoing(),
                    new Arrive("_2"),
                ], "🐭"),
            ],
            [
                "_2",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 300,
                    maxSpeed: 45,
                    position: [325, 680],
                    velocity: [0, 0],
                    orientation: 0,
                    rotation: 0,
                }, [
                    new ObstacleAvoidance(),
                    new LookWhereYouAreGoing(),
                ], "🧀"),
            ],
        ]),
        shapes: new Map([...pairs1, ...pairs2]),
        paths: new Map(),
    };
}

function initScenario$3() {
    return {
        name: "Obstacle Avoidance (walls)",
        description: "This character exhibits the obstacle avoidance behaviour",
        characters: new Map([
            [
                "_1",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 25,
                    position: [200, 65],
                    velocity: [-12, 10],
                    orientation: 1.5,
                    rotation: 0,
                }, [
                    new ObstacleAvoidance(),
                    new LookWhereYouAreGoing(),
                ]),
            ],
        ]),
        shapes: new Map([
            [
                "wall--left",
                {
                    path: {
                        label: "wall1path",
                        isClosed: false,
                        position: [40, 40],
                        points: [
                            [0, 0],
                            [10, 0],
                            [10, 400],
                            [0, 400],
                        ],
                    },
                },
            ],
            [
                "wall--right",
                {
                    path: {
                        label: "wall2path",
                        isClosed: false,
                        position: [450, 40],
                        points: [
                            [0, 0],
                            [10, 0],
                            [10, 400],
                            [0, 400],
                        ],
                    },
                },
            ],
            [
                "wall--top",
                {
                    path: {
                        label: "wall3path",
                        isClosed: false,
                        position: [50, 30],
                        points: [
                            [0, 0],
                            [400, 0],
                            [400, 10],
                            [0, 10],
                        ],
                    },
                },
            ],
            [
                "wall--bottom",
                {
                    path: {
                        label: "wall4path",
                        isClosed: false,
                        position: [50, 440],
                        points: [
                            [0, 0],
                            [400, 0],
                            [400, 10],
                            [0, 10],
                        ],
                    },
                },
            ],
            [
                "box--top",
                {
                    path: {
                        label: "wall2path",
                        isClosed: false,
                        position: [315, 240],
                        points: [
                            [0, 0],
                            [30, 0],
                            [30, 30],
                            [0, 30],
                        ],
                    },
                },
            ],
        ]),
        paths: new Map(),
    };
}

function initScenario$2() {
    return {
        name: "Evade",
        description: "The evading character will attempt to flee the predicted future position of the pursuer",
        characters: new Map([
            [
                "mouse",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [150, 150],
                    velocity: [0, 0],
                    orientation: 2 * Math.PI,
                    rotation: 0,
                }, []),
            ],
            [
                "cat",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [350, 350],
                    velocity: [0, 0],
                    orientation: 2 * Math.PI,
                    rotation: 0,
                }, [new Pursue("mouse")]),
            ],
        ]),
        shapes: new Map(),
        paths: new Map(),
    };
}

function initScenario$1() {
    return {
        name: "Follow path",
        description: "There are two path following behaviours - chase rabbit, and predictive.",
        characters: new Map([
            [
                "_1",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [20, 20],
                    velocity: [0, 0],
                    orientation: 0,
                    rotation: 0,
                }, [
                    new FollowPathPredict("p1"),
                    new LookWhereYouAreGoing(),
                ]),
            ],
            [
                "_2",
                new Character({
                    maxAcceleration: 20,
                    maxAngularAcceleration: 140,
                    maxSpeed: 60,
                    position: [120, 320],
                    velocity: [0, 0],
                    orientation: 0,
                    rotation: 0,
                }, [
                    new Pursue("_1"),
                    new Separation(),
                    new LookWhereYouAreGoing(),
                ]),
            ],
            [
                "_3",
                new Character({
                    maxAcceleration: 20,
                    maxAngularAcceleration: 140,
                    maxSpeed: 40,
                    position: [120, 140],
                    velocity: [0, 0],
                    orientation: 0,
                    rotation: 0,
                }, [
                    new Pursue("_1"),
                    new Separation(),
                    new LookWhereYouAreGoing(),
                ]),
            ],
        ]),
        shapes: new Map(),
        paths: new Map([
            [
                "p1",
                {
                    label: "Closed path",
                    position: [20, 20],
                    isClosed: true,
                    points: [
                        [150, 50],
                        [150, 240],
                        [250, 480],
                        [400, 600],
                        [550, 480],
                        [700, 240],
                        [700, 50],
                    ],
                },
            ],
        ]),
    };
}

function initScenario() {
    return {
        name: "Separation",
        description: "These characters move to separate themselves from each other",
        characters: new Map([
            [
                "_0",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [400, 200],
                    velocity: [0, 20],
                    orientation: 1.5,
                    rotation: 0,
                }, [new Separation()]),
            ],
            [
                "_1",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [399, 400],
                    velocity: [0, 0],
                    orientation: 1.5,
                    rotation: 0,
                }, [new Separation()]),
            ],
            [
                "_2",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [399, 401],
                    velocity: [0, 0],
                    orientation: 1.5,
                    rotation: 0,
                }, [new Separation()]),
            ],
            [
                "_3",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [399, 399],
                    velocity: [0, 0],
                    orientation: 1.5,
                    rotation: 0,
                }, [new Separation()]),
            ],
            [
                "_4",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [400, 400],
                    velocity: [0, 0],
                    orientation: 1.5,
                    rotation: 0,
                }, [new Separation()]),
            ],
            [
                "_5",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [400, 401],
                    velocity: [0, 0],
                    orientation: 1.5,
                    rotation: 0,
                }, [new Separation()]),
            ],
            [
                "_6",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [400, 399],
                    velocity: [0, 0],
                    orientation: 1.5,
                    rotation: 0,
                }, [new Separation()]),
            ],
            [
                "_7",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [401, 400],
                    velocity: [0, 0],
                    orientation: 1.5,
                    rotation: 0,
                }, [new Separation()]),
            ],
            [
                "_8",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [401, 399],
                    velocity: [0, 0],
                    orientation: 1.5,
                    rotation: 0,
                }, [new Separation()]),
            ],
            [
                "_9",
                new Character({
                    maxAcceleration: 25,
                    maxAngularAcceleration: 140,
                    maxSpeed: 45,
                    position: [401, 401],
                    velocity: [0, 0],
                    orientation: 1.5,
                    rotation: 0,
                }, [new Separation()]),
            ],
        ]),
        shapes: new Map(),
        paths: new Map(),
    };
}

// The scenarios use stateful class instances to represent various items.
// It is not straightforward to make these immutable; for simplicities sake
// we will reinitialise each scenario when we switch to it.
function getScenario(id) {
    switch (id) {
        case "SC_BLANK":
            return initScenario$7();
        case "SC_WANDER":
            return initScenario$6();
        case "SC_COLL":
            return initScenario$5();
        case "SC_OB_1":
            return initScenario$4();
        case "SC_OB_2":
            return initScenario$3();
        case "SC_EVADE":
            return initScenario$2();
        case "SC_PATH":
            return initScenario$1();
        case "SC_SEPARATION":
            return initScenario();
        default:
            return null;
    }
}
function getState(config) {
    var _a, _b;
    return {
        ui: {
            actionFeedbackCount: -1,
            canvasDimensions: [800, 800],
            isDebugMode: (_a = config === null || config === void 0 ? void 0 : config.debug) !== null && _a !== void 0 ? _a : false,
            isPaused: true,
            isSettingTarget: false,
            focussedCharacterId: "_1",
            focussedScenarioId: (_b = config.scenarioId) !== null && _b !== void 0 ? _b : null,
        },
        scenarioIds: [
            "SC_BLANK",
            "SC_WANDER",
            "SC_COLL",
            "SC_OB_1",
            "SC_OB_2",
            "SC_EVADE",
            "SC_PATH",
            "SC_SEPARATION",
        ],
        scenario: getScenario(config.scenarioId),
    };
}

var queryString = {};

var strictUriEncode = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

var decodeUriComponent = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};

var splitOnFirst = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};

var filterObj = function (obj, predicate) {
	var ret = {};
	var keys = Object.keys(obj);
	var isArr = Array.isArray(predicate);

	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		var val = obj[key];

		if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
			ret[key] = val;
		}
	}

	return ret;
};

(function (exports) {
	const strictUriEncode$1 = strictUriEncode;
	const decodeComponent = decodeUriComponent;
	const splitOnFirst$1 = splitOnFirst;
	const filterObject = filterObj;

	const isNullOrUndefined = value => value === null || value === undefined;

	const encodeFragmentIdentifier = Symbol('encodeFragmentIdentifier');

	function encoderForArrayFormat(options) {
		switch (options.arrayFormat) {
			case 'index':
				return key => (result, value) => {
					const index = result.length;

					if (
						value === undefined ||
						(options.skipNull && value === null) ||
						(options.skipEmptyString && value === '')
					) {
						return result;
					}

					if (value === null) {
						return [...result, [encode(key, options), '[', index, ']'].join('')];
					}

					return [
						...result,
						[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
					];
				};

			case 'bracket':
				return key => (result, value) => {
					if (
						value === undefined ||
						(options.skipNull && value === null) ||
						(options.skipEmptyString && value === '')
					) {
						return result;
					}

					if (value === null) {
						return [...result, [encode(key, options), '[]'].join('')];
					}

					return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
				};

			case 'colon-list-separator':
				return key => (result, value) => {
					if (
						value === undefined ||
						(options.skipNull && value === null) ||
						(options.skipEmptyString && value === '')
					) {
						return result;
					}

					if (value === null) {
						return [...result, [encode(key, options), ':list='].join('')];
					}

					return [...result, [encode(key, options), ':list=', encode(value, options)].join('')];
				};

			case 'comma':
			case 'separator':
			case 'bracket-separator': {
				const keyValueSep = options.arrayFormat === 'bracket-separator' ?
					'[]=' :
					'=';

				return key => (result, value) => {
					if (
						value === undefined ||
						(options.skipNull && value === null) ||
						(options.skipEmptyString && value === '')
					) {
						return result;
					}

					// Translate null to an empty string so that it doesn't serialize as 'null'
					value = value === null ? '' : value;

					if (result.length === 0) {
						return [[encode(key, options), keyValueSep, encode(value, options)].join('')];
					}

					return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
				};
			}

			default:
				return key => (result, value) => {
					if (
						value === undefined ||
						(options.skipNull && value === null) ||
						(options.skipEmptyString && value === '')
					) {
						return result;
					}

					if (value === null) {
						return [...result, encode(key, options)];
					}

					return [...result, [encode(key, options), '=', encode(value, options)].join('')];
				};
		}
	}

	function parserForArrayFormat(options) {
		let result;

		switch (options.arrayFormat) {
			case 'index':
				return (key, value, accumulator) => {
					result = /\[(\d*)\]$/.exec(key);

					key = key.replace(/\[\d*\]$/, '');

					if (!result) {
						accumulator[key] = value;
						return;
					}

					if (accumulator[key] === undefined) {
						accumulator[key] = {};
					}

					accumulator[key][result[1]] = value;
				};

			case 'bracket':
				return (key, value, accumulator) => {
					result = /(\[\])$/.exec(key);
					key = key.replace(/\[\]$/, '');

					if (!result) {
						accumulator[key] = value;
						return;
					}

					if (accumulator[key] === undefined) {
						accumulator[key] = [value];
						return;
					}

					accumulator[key] = [].concat(accumulator[key], value);
				};

			case 'colon-list-separator':
				return (key, value, accumulator) => {
					result = /(:list)$/.exec(key);
					key = key.replace(/:list$/, '');

					if (!result) {
						accumulator[key] = value;
						return;
					}

					if (accumulator[key] === undefined) {
						accumulator[key] = [value];
						return;
					}

					accumulator[key] = [].concat(accumulator[key], value);
				};

			case 'comma':
			case 'separator':
				return (key, value, accumulator) => {
					const isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
					const isEncodedArray = (typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator));
					value = isEncodedArray ? decode(value, options) : value;
					const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
					accumulator[key] = newValue;
				};

			case 'bracket-separator':
				return (key, value, accumulator) => {
					const isArray = /(\[\])$/.test(key);
					key = key.replace(/\[\]$/, '');

					if (!isArray) {
						accumulator[key] = value ? decode(value, options) : value;
						return;
					}

					const arrayValue = value === null ?
						[] :
						value.split(options.arrayFormatSeparator).map(item => decode(item, options));

					if (accumulator[key] === undefined) {
						accumulator[key] = arrayValue;
						return;
					}

					accumulator[key] = [].concat(accumulator[key], arrayValue);
				};

			default:
				return (key, value, accumulator) => {
					if (accumulator[key] === undefined) {
						accumulator[key] = value;
						return;
					}

					accumulator[key] = [].concat(accumulator[key], value);
				};
		}
	}

	function validateArrayFormatSeparator(value) {
		if (typeof value !== 'string' || value.length !== 1) {
			throw new TypeError('arrayFormatSeparator must be single character string');
		}
	}

	function encode(value, options) {
		if (options.encode) {
			return options.strict ? strictUriEncode$1(value) : encodeURIComponent(value);
		}

		return value;
	}

	function decode(value, options) {
		if (options.decode) {
			return decodeComponent(value);
		}

		return value;
	}

	function keysSorter(input) {
		if (Array.isArray(input)) {
			return input.sort();
		}

		if (typeof input === 'object') {
			return keysSorter(Object.keys(input))
				.sort((a, b) => Number(a) - Number(b))
				.map(key => input[key]);
		}

		return input;
	}

	function removeHash(input) {
		const hashStart = input.indexOf('#');
		if (hashStart !== -1) {
			input = input.slice(0, hashStart);
		}

		return input;
	}

	function getHash(url) {
		let hash = '';
		const hashStart = url.indexOf('#');
		if (hashStart !== -1) {
			hash = url.slice(hashStart);
		}

		return hash;
	}

	function extract(input) {
		input = removeHash(input);
		const queryStart = input.indexOf('?');
		if (queryStart === -1) {
			return '';
		}

		return input.slice(queryStart + 1);
	}

	function parseValue(value, options) {
		if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
			value = Number(value);
		} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
			value = value.toLowerCase() === 'true';
		}

		return value;
	}

	function parse(query, options) {
		options = Object.assign({
			decode: true,
			sort: true,
			arrayFormat: 'none',
			arrayFormatSeparator: ',',
			parseNumbers: false,
			parseBooleans: false
		}, options);

		validateArrayFormatSeparator(options.arrayFormatSeparator);

		const formatter = parserForArrayFormat(options);

		// Create an object with no prototype
		const ret = Object.create(null);

		if (typeof query !== 'string') {
			return ret;
		}

		query = query.trim().replace(/^[?#&]/, '');

		if (!query) {
			return ret;
		}

		for (const param of query.split('&')) {
			if (param === '') {
				continue;
			}

			let [key, value] = splitOnFirst$1(options.decode ? param.replace(/\+/g, ' ') : param, '=');

			// Missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			value = value === undefined ? null : ['comma', 'separator', 'bracket-separator'].includes(options.arrayFormat) ? value : decode(value, options);
			formatter(decode(key, options), value, ret);
		}

		for (const key of Object.keys(ret)) {
			const value = ret[key];
			if (typeof value === 'object' && value !== null) {
				for (const k of Object.keys(value)) {
					value[k] = parseValue(value[k], options);
				}
			} else {
				ret[key] = parseValue(value, options);
			}
		}

		if (options.sort === false) {
			return ret;
		}

		return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
			const value = ret[key];
			if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
				// Sort object keys, not values
				result[key] = keysSorter(value);
			} else {
				result[key] = value;
			}

			return result;
		}, Object.create(null));
	}

	exports.extract = extract;
	exports.parse = parse;

	exports.stringify = (object, options) => {
		if (!object) {
			return '';
		}

		options = Object.assign({
			encode: true,
			strict: true,
			arrayFormat: 'none',
			arrayFormatSeparator: ','
		}, options);

		validateArrayFormatSeparator(options.arrayFormatSeparator);

		const shouldFilter = key => (
			(options.skipNull && isNullOrUndefined(object[key])) ||
			(options.skipEmptyString && object[key] === '')
		);

		const formatter = encoderForArrayFormat(options);

		const objectCopy = {};

		for (const key of Object.keys(object)) {
			if (!shouldFilter(key)) {
				objectCopy[key] = object[key];
			}
		}

		const keys = Object.keys(objectCopy);

		if (options.sort !== false) {
			keys.sort(options.sort);
		}

		return keys.map(key => {
			const value = object[key];

			if (value === undefined) {
				return '';
			}

			if (value === null) {
				return encode(key, options);
			}

			if (Array.isArray(value)) {
				if (value.length === 0 && options.arrayFormat === 'bracket-separator') {
					return encode(key, options) + '[]';
				}

				return value
					.reduce(formatter(key), [])
					.join('&');
			}

			return encode(key, options) + '=' + encode(value, options);
		}).filter(x => x.length > 0).join('&');
	};

	exports.parseUrl = (url, options) => {
		options = Object.assign({
			decode: true
		}, options);

		const [url_, hash] = splitOnFirst$1(url, '#');

		return Object.assign(
			{
				url: url_.split('?')[0] || '',
				query: parse(extract(url), options)
			},
			options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: decode(hash, options)} : {}
		);
	};

	exports.stringifyUrl = (object, options) => {
		options = Object.assign({
			encode: true,
			strict: true,
			[encodeFragmentIdentifier]: true
		}, options);

		const url = removeHash(object.url).split('?')[0] || '';
		const queryFromUrl = exports.extract(object.url);
		const parsedQueryFromUrl = exports.parse(queryFromUrl, {sort: false});

		const query = Object.assign(parsedQueryFromUrl, object.query);
		let queryString = exports.stringify(query, options);
		if (queryString) {
			queryString = `?${queryString}`;
		}

		let hash = getHash(object.url);
		if (object.fragmentIdentifier) {
			hash = `#${options[encodeFragmentIdentifier] ? encode(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;
		}

		return `${url}${queryString}${hash}`;
	};

	exports.pick = (input, filter, options) => {
		options = Object.assign({
			parseFragmentIdentifier: true,
			[encodeFragmentIdentifier]: false
		}, options);

		const {url, query, fragmentIdentifier} = exports.parseUrl(input, options);
		return exports.stringifyUrl({
			url,
			query: filterObject(query, filter),
			fragmentIdentifier
		}, options);
	};

	exports.exclude = (input, filter, options) => {
		const exclusionFilter = Array.isArray(filter) ? key => !filter.includes(key) : (key, value) => !filter(key, value);

		return exports.pick(input, exclusionFilter, options);
	};
} (queryString));

const config = queryString.parse(window.location.hash, {
    parseBooleans: true,
});
var StateContext = React.createContext(getState(config));

const DebugControl = () => {
    const state = react.exports.useContext(StateContext);
    const dispatch = react.exports.useContext(DispatchContext);
    return (React.createElement("div", { className: "checkbox-pair" },
        React.createElement("label", { htmlFor: "debug" }, "Show debug geometry"),
        React.createElement("input", { type: "checkbox", checked: state.ui.isDebugMode, id: "debug", onChange: () => {
                dispatch({ type: "DEBUG_MODE_CHANGED" });
                const config = queryString.parse(window.location.hash);
                window.location.hash = queryString.stringify(Object.assign(Object.assign({}, config), { debug: !state.ui.isDebugMode }));
            } })));
};

const ScenarioSidebar = () => {
    const [showDialog, setShowDialog] = React.useState(false);
    const dispatch = React.useContext(DispatchContext);
    const state = React.useContext(StateContext);
    const focussedScenario = state.scenario;
    return (React.createElement("aside", { className: "scenario-sidebar", "aria-label": "Scenario sidebar" },
        React.createElement("h1", null, "Steering Behaviours!"),
        React.createElement("fieldset", null,
            React.createElement("label", { htmlFor: "pick-scenario" }, "Pick a scenario"),
            React.createElement("select", { "data-id": "pick-scenario", value: state.ui.focussedScenarioId || undefined, onChange: (e) => {
                    dispatch({
                        type: "SCENARIO_CHANGED",
                        payload: e.target.value,
                    });
                    const config = queryString.parse(window.location.hash);
                    window.location.hash = queryString.stringify(Object.assign(Object.assign({}, config), { scenarioId: e.target.value }));
                } }, ...state.scenarioIds.map((id) => {
                var _a;
                return (React.createElement("option", { key: id, value: id }, (_a = getScenario(id)) === null || _a === void 0 ? void 0 : _a.name));
            })),
            React.createElement("span", { "data-id": "scenario-description" }, focussedScenario === null || focussedScenario === void 0 ? void 0 : focussedScenario.description),
            React.createElement(DebugControl, null)),
        React.createElement("button", { "data-id": "play-pause-button", type: "button", id: "play-pause", onClick: () => {
                dispatch({ type: "PLAY_BUTTON_CLICKED" });
            } }, state.ui.isPaused ? "Start" : "Pause"),
        React.createElement("button", { "data-id": "reset-button", type: "button", id: "reset", onClick: () => {
                dispatch({ type: "RESET_BUTTON_CLICKED" });
            } }, "Reset"),
        React.createElement("button", { "data-id": "about-dialog-button", id: "about", type: "button", onClick: () => {
                setShowDialog(true);
            } }, "About this app"),
        React.createElement(Dialog, { "data-id": "about-dialog", "aria-label": "About this app dialog", isOpen: showDialog, onDismiss: () => {
                setShowDialog(false);
            } },
            React.createElement("header", null,
                React.createElement("h2", null, "About"),
                React.createElement("button", { type: "button", onClick: () => {
                        setShowDialog(false);
                    } }, "Close")),
            React.createElement("p", null,
                React.createElement("em", null, "Steering Behaviours!"),
                " is a zoo and playground for exploring steering behaviours as described in the book",
                " ",
                React.createElement("a", { target: "_blank", href: "https://isbnsearch.org/isbn/0367670569" }, "AI for Games"),
                " ",
                "by Ian Millington."),
            React.createElement("p", null,
                "This project uses the",
                " ",
                React.createElement("a", { href: "https://opensource.org/licenses/MIT", target: "_blank" }, "MIT License"),
                " ",
                "and includes code from",
                " ",
                React.createElement("a", { href: "https://github.com/craigdallimore/steering-behaviour/blob/main/package.json", target: "_blank" }, "other open source projects"),
                " ",
                "which carry their respective licenses."),
            React.createElement("p", null,
                React.createElement("a", { href: "https://github.com/craigdallimore/steering-behaviour", target: "_blank" }, "Github")),
            React.createElement("p", null,
                "Copyright \u00A9 2022",
                " ",
                React.createElement("a", { href: "mailto:decoy9697@gmail.com" }, "Craig Dallimore"),
                "."))));
};

function drawGrid(ctx, v) {
    ctx.save();
    ctx.strokeStyle = "hsl(203, 26%, 82%, 0.25)";
    for (let x = 10; x < v[0]; x += 10) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, v[1]);
        ctx.stroke();
    }
    for (let z = 10; z < v[1]; z += 10) {
        ctx.beginPath();
        ctx.moveTo(0, z);
        ctx.lineTo(v[0], z);
        ctx.stroke();
    }
    ctx.restore();
    return ctx;
}

function drawPath(ctx, path, strokeStyle, lineDash = [5, 3]) {
    if (path.points.length < 2) {
        return ctx;
    }
    ctx.save();
    ctx.setLineDash(lineDash);
    ctx.strokeStyle = strokeStyle;
    ctx.moveTo(path.position[0], path.position[1]);
    ctx.beginPath();
    for (let i = 0; i < path.points.length; i++) {
        const point = path.points[i];
        if (i === 0) {
            ctx.beginPath();
            ctx.moveTo(point[0], point[1]);
        }
        else {
            ctx.lineTo(point[0], point[1]);
        }
    }
    ctx.stroke();
    if (path.isClosed) {
        ctx.beginPath();
        ctx.moveTo(...path.points[path.points.length - 1]);
        ctx.lineTo(...path.points[0]);
        ctx.closePath();
        ctx.stroke();
    }
    ctx.restore();
    return ctx;
}

function drawSelectionBox(ctx, v) {
    const [x, z] = v;
    ctx.save();
    ctx.transform(1, 0, 0, 1, x, z);
    ctx.strokeStyle = "rgb(46, 125, 50)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-12, -7);
    ctx.lineTo(-12, -12);
    ctx.lineTo(-7, -12);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(7, -12);
    ctx.lineTo(12, -12);
    ctx.lineTo(12, -7);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(12, 7);
    ctx.lineTo(12, 12);
    ctx.lineTo(7, 12);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-7, 12);
    ctx.lineTo(-12, 12);
    ctx.lineTo(-12, 7);
    ctx.stroke();
    ctx.restore();
    return ctx;
}

function drawShape(ctx, shape, strokeStyle, fillStyle) {
    if (shape.path.points.length < 3) {
        return ctx;
    }
    const [x, z] = shape.path.position;
    ctx.save();
    ctx.strokeStyle = strokeStyle;
    ctx.fillStyle = fillStyle;
    ctx.moveTo(shape.path.position[0], shape.path.position[1]);
    ctx.beginPath();
    for (let i = 0; i < shape.path.points.length; i++) {
        const point = shape.path.points[i];
        ctx.lineTo(x + point[0], z + point[1]);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.restore();
    return ctx;
}

function drawCircle(ctx, position, radius, fillStyle) {
    const [x, z] = position;
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = fillStyle;
    ctx.moveTo(x - radius, z - radius);
    ctx.ellipse(x, z, radius * 2, radius * 2, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
    return ctx;
}

function getCharacter (id, characters) {
    if (!id) {
        return null;
    }
    const char = characters.get(id);
    return char || null;
}

function getFocussedCharacter(state) {
    return (state.scenario &&
        getCharacter(state.ui.focussedCharacterId, state.scenario.characters));
}

function drawVector(ctx, from, to, fillStyle) {
    const [x1, z1] = from;
    const distance = length_1(to);
    const orientation = distance > 0 ? vectorToRadians_1(to) : 0;
    ctx.save();
    ctx.fillStyle = fillStyle;
    ctx.transform(1, 0, 0, 1, x1, z1);
    ctx.rotate(orientation);
    ctx.beginPath();
    ctx.moveTo(distance, 0);
    ctx.lineTo(distance - 5, 5);
    ctx.lineTo(distance - 5, 0.5);
    ctx.lineTo(0, 0.5);
    ctx.lineTo(0, -0.5);
    ctx.lineTo(distance - 5, -0.5);
    ctx.lineTo(distance - 5, -5);
    ctx.lineTo(distance, 0);
    ctx.fill();
    ctx.closePath();
    ctx.restore();
    return ctx;
}

function drawDebug(ctx, debug, kinematic) {
    debug.points.forEach(({ fillStyle, position }) => {
        drawCircle(ctx, position, 2, fillStyle);
    });
    debug.vectors.forEach(({ fillStyle, position }) => {
        drawVector(ctx, kinematic.position, position, fillStyle);
    });
    debug.edges.forEach(({ strokeStyle, edge }) => {
        drawPath(ctx, {
            position: kinematic.position,
            points: edge,
            label: "Debug",
            isClosed: false,
        }, strokeStyle, [2, 2]);
    });
    debug.circles.forEach(({ position, radius, fillStyle }) => {
        drawCircle(ctx, position, radius, fillStyle);
    });
    if (debug.text && debug.text.length > 0) {
        ctx.fillText(debug.text, kinematic.position[0] + 15, kinematic.position[1] + 10);
    }
    return ctx;
}

function getFirstTargetId(behaviours) {
    return behaviours.reduce((acc, behaviour) => {
        if (acc) {
            return acc;
        }
        if ("targetId" in behaviour) {
            return behaviour.targetId;
        }
        return acc;
    }, null);
}

function drawArrow(ctx, c) {
    const [x, z] = c.position;
    ctx.save();
    ctx.transform(1, 0, 0, 1, x, z);
    ctx.fillStyle = "rgb(240, 98, 146)";
    ctx.rotate(c.orientation);
    ctx.moveTo(10, 0);
    ctx.beginPath();
    ctx.lineTo(-10, 5);
    ctx.lineTo(-5, 0);
    ctx.lineTo(-10, -5);
    ctx.lineTo(10, 0);
    ctx.fill();
    ctx.restore();
    return ctx;
}

function drawCharacter(ctx, c) {
    ctx.save();
    if (c.label) {
        ctx.font = "20px sans-serif";
        ctx.fillText(c.label, c.kinematic.position[0] - 10, c.kinematic.position[1] + 7);
    }
    else {
        drawArrow(ctx, c.kinematic);
    }
    ctx.restore();
    return ctx;
}

function drawScene(ctx, state) {
    ctx.clearRect(0, 0, state.ui.canvasDimensions[0], state.ui.canvasDimensions[1]);
    drawGrid(ctx, state.ui.canvasDimensions);
    if (!state.scenario) {
        return;
    }
    state.scenario.shapes.forEach((s) => {
        drawShape(ctx, s, "rgba(74, 20, 140, 1)", "rgba(237, 231, 246, 1)");
    });
    const focussedCharacter = getFocussedCharacter(state);
    const targetId = focussedCharacter
        ? getFirstTargetId(focussedCharacter.behaviours)
        : null;
    if (state.ui.actionFeedbackCount > -1 && focussedCharacter && targetId) {
        const target = state.scenario.characters.get(targetId);
        if (target) {
            drawCircle(ctx, target.kinematic.position, 10, `rgba(255, 255, 0, ${Math.max(state.ui.actionFeedbackCount, 1) / 100})`);
        }
    }
    state.scenario.characters.forEach((cha) => {
        drawCharacter(ctx, cha);
        if (state.ui.isDebugMode) {
            cha.behaviours.forEach((behaviour) => {
                drawDebug(ctx, behaviour.debug, cha.kinematic);
            });
        }
    });
    state.scenario.paths.forEach((p) => {
        drawPath(ctx, p, "rgba(178, 223, 219, 1)");
    });
    if (focussedCharacter) {
        drawSelectionBox(ctx, focussedCharacter.kinematic.position);
    }
}

const Canvas = (props) => {
    const canvasRef = React.useRef(null);
    const ctxRef = React.useRef(null);
    if (ctxRef.current) {
        drawScene(ctxRef.current, props.state);
    }
    function onResize() {
        var _a;
        const p = (_a = canvasRef.current) === null || _a === void 0 ? void 0 : _a.parentNode;
        const { width, height } = p.getBoundingClientRect();
        const wd = width * devicePixelRatio;
        const hd = height * devicePixelRatio;
        if (ctxRef.current) {
            const ctx = ctxRef.current;
            ctx.canvas.width = wd;
            ctx.canvas.height = hd;
            // To get crisp lines on high DPI screens, we set the dimensions of the
            // canvas proportionate to the devicePixelRatio, then use inline CSS to
            // keep it the correct fit for the layout.
            // This causes the drawn area to be too small on high DPI screens, so we
            // scale the drawn area based on the device pixel ratio.
            ctx.scale(devicePixelRatio, devicePixelRatio);
            ctx.translate(0.5, 0.5);
        }
        props.dispatch({
            type: "CANVAS_RESIZED",
            payload: [wd, hd],
        });
    }
    React.useLayoutEffect(() => {
        if (canvasRef.current && !ctxRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            ctxRef.current = ctx;
        }
    }, [canvasRef.current]);
    React.useEffect(() => {
        window.requestAnimationFrame(onResize);
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []);
    return (React.createElement("canvas", { className: props.state.ui.isPaused ? "paused" : "playing", ref: canvasRef, id: "canvas-main", onClick: (e) => {
            const target = e.target;
            const { top, left } = target.getBoundingClientRect();
            props.dispatch({
                type: "CANVAS_CLICKED",
                payload: [e.clientX - left, e.clientY - top],
            });
        } }));
};

function updateFocussedCharacter (state, fn) {
    if (!state.ui.focussedCharacterId || !state.scenario) {
        return state;
    }
    const id = state.ui.focussedCharacterId;
    const char = state.scenario.characters.get(state.ui.focussedCharacterId);
    if (!char) {
        return state;
    }
    state.scenario.characters.set(id, fn(char));
    return state;
}

function limitOrientation(o) {
    if (o > 2 * Math.PI) {
        return -2 * Math.PI;
    }
    if (o < -2 * Math.PI) {
        return 2 * Math.PI;
    }
    return o;
}

function updateKinematic(steering, kinematic, time) {
    const nextPosition = add_1(kinematic.position, multiply_1(kinematic.velocity, time));
    // The velocity is increased by a difference of the maximum acceleration
    // multiplied by time.
    const nextVelocity = add_1(kinematic.velocity, multiply_1(steering.linear, time));
    // time is going to be a decimal between 0 and 1 (probably).
    // Here we multiply the rotation speed by time (giving a time-proportional
    // value) and add it to the current orientation.
    const nextOrientation = limitOrientation(kinematic.orientation + kinematic.rotation * time);
    const nextRotation = steering.angular * time;
    const finalVelocity = length_1(nextVelocity) >= kinematic.maxSpeed
        ? multiply_1(normalise_1(nextVelocity), kinematic.maxSpeed)
        : nextVelocity;
    kinematic.position = nextPosition;
    kinematic.velocity = finalVelocity;
    kinematic.orientation = nextOrientation;
    kinematic.rotation = nextRotation;
    return kinematic;
}

function getSteering(char, scenario, behaviour) {
    switch (behaviour.name) {
        case "ALIGN": {
            const target = getCharacter(behaviour.targetId, scenario.characters);
            if (!target) {
                return null;
            }
            return behaviour.calculate(char.kinematic, target.kinematic.orientation);
        }
        case "ARRIVE": {
            const target = getCharacter(behaviour.targetId, scenario.characters);
            if (!target) {
                return null;
            }
            return behaviour.calculate(char.kinematic, target.kinematic.position);
        }
        case "COLLISION_AVOIDANCE": {
            const others = [...scenario.characters.values()]
                .filter((ent) => ent !== char)
                .map((char) => char.kinematic);
            return behaviour.calculate(char.kinematic, others);
        }
        case "EVADE": {
            const target = getCharacter(behaviour.targetId, scenario.characters);
            if (!target) {
                return null;
            }
            return behaviour.calculate(char.kinematic, target.kinematic);
        }
        case "FACE": {
            const target = getCharacter(behaviour.targetId, scenario.characters);
            if (!target) {
                return null;
            }
            return behaviour.calculate(char.kinematic, target.kinematic.position);
        }
        case "FLEE": {
            const target = getCharacter(behaviour.targetId, scenario.characters);
            if (!target) {
                return null;
            }
            return behaviour.calculate(char.kinematic, target.kinematic.position);
        }
        case "FOLLOW_PATH_CHASE_RABBIT": {
            const path = scenario.paths.get(behaviour.pathId);
            if (!path) {
                return null;
            }
            return behaviour.calculate(char.kinematic, path);
        }
        case "FOLLOW_PATH_PREDICT": {
            const path = scenario.paths.get(behaviour.pathId);
            if (!path) {
                return null;
            }
            return behaviour.calculate(char.kinematic, path);
        }
        case "LOOK_WHERE_YOU_ARE_GOING": {
            return behaviour.calculate(char.kinematic);
        }
        case "MATCH_VELOCITY": {
            const target = getCharacter(behaviour.targetId, scenario.characters);
            if (!target) {
                return null;
            }
            return behaviour.calculate(char.kinematic, target.kinematic);
        }
        case "OBSTACLE_AVOIDANCE": {
            return behaviour.calculate(char.kinematic, [...scenario.shapes.values()]);
        }
        case "PURSUE": {
            const target = getCharacter(behaviour.targetId, scenario.characters);
            if (!target) {
                return null;
            }
            return behaviour.calculate(char.kinematic, target.kinematic);
        }
        case "SEEK": {
            const target = getCharacter(behaviour.targetId, scenario.characters);
            if (!target) {
                return null;
            }
            return behaviour.calculate(char.kinematic, target.kinematic.position);
        }
        case "SEPARATION": {
            const others = [...scenario.characters.values()]
                .filter((ent) => ent !== char)
                .map((char) => char.kinematic);
            return behaviour.calculate(char.kinematic, others);
        }
        case "WANDER": {
            return behaviour.calculate(char.kinematic);
        }
        default: {
            return null;
        }
    }
}
function blendSteerings(steerings, kinematic) {
    return steerings.reduce((acc, [steering, weight]) => {
        if (weight === 0) {
            return acc;
        }
        const angular = acc.angular + steering.angular;
        const linear = add_1(acc.linear, steering.linear);
        const scale = length_1(linear);
        return {
            linear: multiply_1(normalise_1(linear), Math.min(scale, kinematic.maxAcceleration)),
            angular: Math.min(kinematic.maxAngularAcceleration, angular),
        };
    }, {
        linear: [0, 0],
        angular: 0,
    });
}
function applyBehaviours(char, time, scenario) {
    const steerings = char.behaviours.reduce((acc, behaviour) => {
        const steering = getSteering(char, scenario, behaviour);
        return steering ? [...acc, [steering, behaviour.weight]] : acc;
    }, []);
    const steering = blendSteerings(steerings, char.kinematic);
    char.kinematic = updateKinematic(steering, char.kinematic, time);
    return char;
}

// HELPERS --------------------------------------------------------------------
function reducer(state, action) {
    switch (action.type) {
        case "RESET_BUTTON_CLICKED": {
            state.ui.isPaused = true;
            state.scenario = state.ui.focussedScenarioId
                ? getScenario(state.ui.focussedScenarioId)
                : null;
            return state;
        }
        case "PLAY_BUTTON_CLICKED":
            state.ui.isPaused = !state.ui.isPaused;
            return state;
        case "DEBUG_MODE_CHANGED":
            state.ui.isDebugMode = !state.ui.isDebugMode;
            return state;
        case "CANVAS_RESIZED":
            state.ui.canvasDimensions = action.payload;
            return state;
        case "CANVAS_CLICKED": {
            if (!state.scenario) {
                return state;
            }
            const clickPosition = action.payload;
            const distanceMap = [...state.scenario.characters].reduce((m, [id, char]) => {
                const d = distance_1(clickPosition, char.kinematic.position);
                m.set(id, d);
                return m;
            }, new Map());
            const closestToClick = [...distanceMap].reduce((acc, entry) => {
                return acc[1] < entry[1] ? acc : entry;
            }, [null, Infinity]);
            const [clickedCharacterId, clickedCharacterDistance] = closestToClick;
            if (!clickedCharacterId) {
                // Suppose there are no characters on the board
                return state;
            }
            if (clickedCharacterDistance > 15) {
                // Too far away from any character; we consider this as deselection
                state.ui.isSettingTarget = false;
                state.ui.focussedCharacterId = null;
                return state;
            }
            if (state.ui.isSettingTarget &&
                clickedCharacterId !== state.ui.focussedCharacterId // A character cannot target themselves
            ) {
                const nextState = updateFocussedCharacter(state, (char) => {
                    char.behaviours.forEach((behaviour) => {
                        if ("targetId" in behaviour) {
                            behaviour.targetId = clickedCharacterId;
                        }
                    });
                    return char;
                });
                nextState.ui.actionFeedbackCount = 60;
                return nextState;
            }
            state.ui.focussedCharacterId = clickedCharacterId;
            const focussedCharacter = state.scenario.characters.get(clickedCharacterId);
            // The newly focussed character may be able to have a target assigned.
            state.ui.isSettingTarget = !!(focussedCharacter && getFirstTargetId(focussedCharacter.behaviours));
            return state;
        }
        case "BEHAVIOUR_ADDED": {
            const nextState = updateFocussedCharacter(state, (char) => {
                char.behaviours = [...char.behaviours, action.payload];
                return char;
            });
            if ("targetId" in action.payload) {
                nextState.ui.isSettingTarget = true;
            }
            return nextState;
        }
        case "BEHAVIOUR_CHANGED": {
            const nextState = updateFocussedCharacter(state, (char) => {
                const index = char.behaviours.findIndex((behaviour) => behaviour.name === action.payload.name);
                if (index > -1) {
                    char.behaviours[index] = action.payload;
                }
                return char;
            });
            if ("targetId" in action.payload) {
                nextState.ui.isSettingTarget = true;
            }
            return nextState;
        }
        case "BEHAVIOUR_REMOVED": {
            const nextState = updateFocussedCharacter(state, (char) => {
                char.behaviours = char.behaviours.filter((behaviour) => behaviour.name !== action.payload);
                if (char.behaviours.length === 0) {
                    char.kinematic.velocity = [0, 0];
                }
                return char;
            });
            return nextState;
        }
        case "SCENARIO_CHANGED":
            state.ui.focussedScenarioId = action.payload;
            state.scenario = getScenario(action.payload);
            return state;
        case "ROTATION_CHANGED":
            return updateFocussedCharacter(state, (char) => {
                return Object.assign(Object.assign({}, char), { kinematic: Object.assign(Object.assign({}, char.kinematic), { rotation: action.payload }) });
            });
        case "ORIENTATION_CHANGED":
            return updateFocussedCharacter(state, (char) => {
                char.kinematic.orientation = action.payload;
                return char;
            });
        case "MAX_ACCELERATION_CHANGED":
            return updateFocussedCharacter(state, (char) => {
                char.kinematic.maxAcceleration = action.payload;
                return char;
            });
        case "MAX_ANGULAR_ACCELERATION_CHANGED":
            return updateFocussedCharacter(state, (char) => {
                char.kinematic.maxAngularAcceleration = action.payload;
                return char;
            });
        case "POSX_CHANGED":
            return updateFocussedCharacter(state, (char) => {
                return Object.assign(Object.assign({}, char), { kinematic: Object.assign(Object.assign({}, char.kinematic), { position: [action.payload, char.kinematic.position[1]] }) });
            });
        case "POSZ_CHANGED":
            return updateFocussedCharacter(state, (char) => {
                return Object.assign(Object.assign({}, char), { kinematic: Object.assign(Object.assign({}, char.kinematic), { position: [char.kinematic.position[0], action.payload] }) });
            });
        case "VELX_CHANGED":
            return updateFocussedCharacter(state, (char) => {
                return Object.assign(Object.assign({}, char), { kinematic: Object.assign(Object.assign({}, char.kinematic), { velocity: [action.payload, char.kinematic.velocity[1]] }) });
            });
        case "VELZ_CHANGED":
            return updateFocussedCharacter(state, (char) => {
                return Object.assign(Object.assign({}, char), { kinematic: Object.assign(Object.assign({}, char.kinematic), { velocity: [char.kinematic.velocity[0], action.payload] }) });
            });
        case "TICK": {
            if (state.ui.isPaused) {
                return state;
            }
            const time = action.payload;
            if (!state.scenario) {
                return state;
            }
            const scenario = state.scenario;
            if (state.ui.actionFeedbackCount > -1) {
                state.ui.actionFeedbackCount--;
            }
            scenario.characters = new Map([...scenario.characters].map(([id, char]) => {
                const nextChar = applyBehaviours(char, time, scenario);
                return [id, nextChar];
            }));
            return state;
        }
        default:
            return state;
    }
}

const NumericField = (props) => {
    const [isFocussed, setIsFocussed] = React.useState(false);
    // A bit gnarly.
    // The value we show is fixed to two decimal places to make it easier to read.
    // The system will still represent it as the full 3.00000001 under the hood.
    // When the user is typing (and the input has focus) we stop using .toFixed on
    // the value as it interferes with the typing experience.
    const value = typeof props.value === "number"
        ? isFocussed
            ? props.value
            : props.value.toFixed(2)
        : undefined;
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { htmlFor: props.id }, props.label),
        React.createElement("input", { onFocus: (e) => {
                setIsFocussed(true);
                if (e.target instanceof HTMLInputElement) {
                    props.onChange(parseFloat(e.target.value));
                }
            }, step: "any", onBlur: () => setIsFocussed(false), id: props.id, type: "number", min: props.min, max: props.max, value: value, onChange: (e) => {
                if (e.target instanceof HTMLInputElement) {
                    props.onChange(parseFloat(e.target.value));
                }
            } })));
};

function makeUpdatedClone(orig, field, value) {
    const proto = Object.getPrototypeOf(orig);
    const clone = Object.assign(Object.create(proto), orig);
    clone[field] = value;
    return clone;
}

const AlignControls = (props) => {
    const { behaviour } = props;
    return (React.createElement(React.Fragment, null,
        React.createElement(NumericField, { id: "max-rotation", label: "Max. rotation", value: behaviour.maxRotation, onChange: (maxRotation) => {
                props.onBehaviourChange(makeUpdatedClone(behaviour, "maxRotation", maxRotation));
            } }),
        React.createElement(NumericField, { id: "deceleration-tolerance", label: "Deceleration tolerance", value: behaviour.decelerationTolerance, onChange: (decelerationTolerance) => {
                props.onBehaviourChange(makeUpdatedClone(behaviour, "decelerationTolerance", decelerationTolerance));
            } }),
        React.createElement(NumericField, { id: "align-tolerance", label: "Align tolerance", value: behaviour.alignTolerance, onChange: (alignTolerance) => {
                props.onBehaviourChange(makeUpdatedClone(behaviour, "alignTolerance", alignTolerance));
            } }),
        React.createElement(NumericField, { id: "time-to-target", label: "Time to target", value: behaviour.timeToTarget, onChange: (timeToTarget) => {
                props.onBehaviourChange(makeUpdatedClone(behaviour, "timeToTarget", timeToTarget));
            } })));
};

const ArriveControls = (props) => {
    const { behaviour } = props;
    return (React.createElement(React.Fragment, null,
        React.createElement(NumericField, { id: "target-radius", label: "Target Radius", value: behaviour.targetRadius, onChange: (targetRadius) => {
                props.onBehaviourChange(makeUpdatedClone(behaviour, "targetRadius", targetRadius));
            } }),
        React.createElement(NumericField, { id: "slow-radius", label: "Slow radius", value: behaviour.slowRadius, onChange: (slowRadius) => {
                props.onBehaviourChange(makeUpdatedClone(behaviour, "slowRadius", slowRadius));
            } }),
        React.createElement(NumericField, { id: "time-to-target", label: "time to target", value: behaviour.timeToTarget, onChange: (timeToTarget) => {
                props.onBehaviourChange(makeUpdatedClone(behaviour, "timeToTarget", timeToTarget));
            } })));
};

const CollisionAvoidanceControls = (props) => {
    const { behaviour } = props;
    return (React.createElement(NumericField, { id: "radius", label: "Radius", value: behaviour.radius, onChange: (radius) => {
            props.onBehaviourChange(makeUpdatedClone(behaviour, "radius", radius));
        } }));
};

const EvadeControls = (props) => {
    const { behaviour } = props;
    return (React.createElement(NumericField, { id: "max-prediction", label: "Max. prediction", value: behaviour.maxPrediction, onChange: (maxPrediction) => {
            props.onBehaviourChange(makeUpdatedClone(behaviour, "maxPrediction", maxPrediction));
        } }));
};

const FaceControls = (props) => {
    const { behaviour } = props;
    return (React.createElement(AlignControls, { behaviour: behaviour.align, onBehaviourChange: (align) => {
            props.onBehaviourChange(makeUpdatedClone(behaviour, "align", align));
        } }));
};

const SelectPath = (props) => {
    const entries = Array.from(props.pathMap);
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { htmlFor: "select-path" }, "Select a path"),
        React.createElement("select", { id: "select-path", value: props.pathId, onChange: (e) => {
                props.onSelectPath(e.target.value);
            } },
            React.createElement("option", null, "No path selected"),
            entries.map(([pathId, path]) => (React.createElement("option", { key: pathId, value: pathId }, path.label))))));
};

const FollowPathChaseRabbitControls = (props) => {
    var _a, _b;
    const { behaviour } = props;
    const state = react.exports.useContext(StateContext);
    return (React.createElement(React.Fragment, null,
        React.createElement(NumericField, { id: "path-offset", label: "Path Offset", value: behaviour.pathOffset, onChange: (pathOffset) => {
                props.onBehaviourChange(makeUpdatedClone(behaviour, "pathOffset", pathOffset));
            } }),
        React.createElement(SelectPath, { pathId: behaviour.pathId, onSelectPath: (pathId) => {
                props.onBehaviourChange(makeUpdatedClone(behaviour, "pathId", pathId));
            }, pathMap: (_b = (_a = state.scenario) === null || _a === void 0 ? void 0 : _a.paths) !== null && _b !== void 0 ? _b : new Map() })));
};

const FollowPathPredictControls = (props) => {
    var _a, _b;
    const { behaviour } = props;
    const state = react.exports.useContext(StateContext);
    return (React.createElement(React.Fragment, null,
        React.createElement(NumericField, { id: "path-offset", label: "Path Offset", value: behaviour.pathOffset, onChange: (pathOffset) => {
                props.onBehaviourChange(makeUpdatedClone(behaviour, "pathOffset", pathOffset));
            } }),
        React.createElement(NumericField, { id: "predict-time", label: "Predict Time", value: behaviour.predictTime, onChange: (predictTime) => {
                props.onBehaviourChange(makeUpdatedClone(behaviour, "predictTime", predictTime));
            } }),
        React.createElement(SelectPath, { pathId: behaviour.pathId, onSelectPath: (pathId) => {
                props.onBehaviourChange(makeUpdatedClone(behaviour, "pathId", pathId));
            }, pathMap: (_b = (_a = state.scenario) === null || _a === void 0 ? void 0 : _a.paths) !== null && _b !== void 0 ? _b : new Map() })));
};

const LookWhereYouAreGoingControls = (props) => {
    const { behaviour } = props;
    return (React.createElement(AlignControls, { behaviour: props.behaviour.align, onBehaviourChange: (align) => {
            props.onBehaviourChange(makeUpdatedClone(behaviour, "align", align));
        } }));
};

const MatchVelocityControls = (props) => {
    const { behaviour } = props;
    return (React.createElement(NumericField, { id: "time-to-target", label: "time to target", value: behaviour.timeToTarget, onChange: (timeToTarget) => {
            props.onBehaviourChange(makeUpdatedClone(behaviour, "timeToTarget", timeToTarget));
        } }));
};

const ObstacleAvoidanceControls = (props) => {
    const { behaviour } = props;
    return (React.createElement(NumericField, { id: "avoid-distance", label: "Avoid Distance", value: behaviour.avoidDistance, onChange: (avoidDistance) => {
            props.onBehaviourChange(makeUpdatedClone(behaviour, "avoidDistance", avoidDistance));
        } }));
};

const PursueControls = (props) => {
    const { behaviour } = props;
    return (React.createElement(NumericField, { id: "max-prediction", label: "Max. prediction", value: behaviour.maxPrediction, onChange: (maxPrediction) => {
            props.onBehaviourChange(makeUpdatedClone(behaviour, "maxPrediction", maxPrediction));
        } }));
};

const SeparationControls = (props) => {
    const { behaviour } = props;
    return (React.createElement(React.Fragment, null,
        React.createElement(NumericField, { id: "threshold", label: "Threshold", value: behaviour.threshold, onChange: (threshold) => {
                props.onBehaviourChange(makeUpdatedClone(behaviour, "threshold", threshold));
            } }),
        React.createElement(NumericField, { id: "decay-coefficient", label: "Decay Coefficient", value: behaviour.decayCoefficient, onChange: (decayCoefficient) => {
                props.onBehaviourChange(makeUpdatedClone(behaviour, "decayCoefficient", decayCoefficient));
            } })));
};

const WanderControls = (props) => {
    const { behaviour } = props;
    return (React.createElement(React.Fragment, null,
        React.createElement(NumericField, { id: "wander-offset", label: "Offset", value: behaviour.wanderOffset, onChange: (wanderOffset) => {
                props.onBehaviourChange(makeUpdatedClone(behaviour, "wanderOffset", wanderOffset));
            } }),
        React.createElement(NumericField, { id: "wander-radius", label: "Radius", value: behaviour.wanderRadius, onChange: (wanderRadius) => {
                props.onBehaviourChange(makeUpdatedClone(behaviour, "wanderRadius", wanderRadius));
            } }),
        React.createElement(NumericField, { id: "wander-rate", label: "Rate", value: behaviour.wanderRate, onChange: (wanderRate) => {
                props.onBehaviourChange(makeUpdatedClone(behaviour, "wanderRate", wanderRate));
            } })));
};

const AssignedTarget = (props) => {
    return (React.createElement(React.Fragment, null, props.targetId ? (React.createElement("label", { className: "label-target-id" },
        "Current target",
        React.createElement("code", null,
            "ID: ",
            props.targetId))) : (React.createElement("label", { className: "label-target-id no-target" }, "No target has been assigned yet"))));
};

const BehaviourSpecificControls = (props) => {
    const { behaviour } = props;
    switch (behaviour.name) {
        case "ALIGN":
            return (React.createElement(React.Fragment, null,
                React.createElement(AlignControls, { behaviour: behaviour, onBehaviourChange: props.onBehaviourChange }),
                React.createElement(AssignedTarget, { targetId: behaviour.targetId })));
        case "ARRIVE":
            return (React.createElement(React.Fragment, null,
                React.createElement(ArriveControls, { behaviour: behaviour, onBehaviourChange: props.onBehaviourChange }),
                React.createElement(AssignedTarget, { targetId: behaviour.targetId })));
        case "COLLISION_AVOIDANCE":
            return (React.createElement(CollisionAvoidanceControls, { behaviour: behaviour, onBehaviourChange: props.onBehaviourChange }));
        case "EVADE":
            return (React.createElement(React.Fragment, null,
                React.createElement(EvadeControls, { behaviour: behaviour, onBehaviourChange: props.onBehaviourChange }),
                React.createElement(AssignedTarget, { targetId: behaviour.targetId })));
        case "FACE":
            return (React.createElement(React.Fragment, null,
                React.createElement(FaceControls, { behaviour: behaviour, onBehaviourChange: props.onBehaviourChange }),
                React.createElement(AssignedTarget, { targetId: behaviour.targetId })));
        case "FLEE":
            return React.createElement(AssignedTarget, { targetId: behaviour.targetId });
        case "FOLLOW_PATH_CHASE_RABBIT":
            return (React.createElement(FollowPathChaseRabbitControls, { behaviour: behaviour, onBehaviourChange: props.onBehaviourChange }));
        case "FOLLOW_PATH_PREDICT":
            return (React.createElement(FollowPathPredictControls, { behaviour: behaviour, onBehaviourChange: props.onBehaviourChange }));
        case "LOOK_WHERE_YOU_ARE_GOING":
            return (React.createElement(LookWhereYouAreGoingControls, { behaviour: behaviour, onBehaviourChange: props.onBehaviourChange }));
        case "MATCH_VELOCITY":
            return (React.createElement(React.Fragment, null,
                React.createElement(MatchVelocityControls, { behaviour: behaviour, onBehaviourChange: props.onBehaviourChange }),
                React.createElement(AssignedTarget, { targetId: behaviour.targetId })));
        case "OBSTACLE_AVOIDANCE":
            return (React.createElement(ObstacleAvoidanceControls, { behaviour: behaviour, onBehaviourChange: props.onBehaviourChange }));
        case "PURSUE":
            return (React.createElement(React.Fragment, null,
                React.createElement(PursueControls, { behaviour: behaviour, onBehaviourChange: props.onBehaviourChange }),
                React.createElement(AssignedTarget, { targetId: behaviour.targetId })));
        case "SEEK":
            return React.createElement(AssignedTarget, { targetId: behaviour.targetId });
        case "SEPARATION":
            return (React.createElement(SeparationControls, { behaviour: behaviour, onBehaviourChange: props.onBehaviourChange }));
        case "WANDER":
            return (React.createElement(WanderControls, { behaviour: behaviour, onBehaviourChange: props.onBehaviourChange }));
        default:
            return null;
    }
};

const SelectBehaviour = (props) => {
    return (React.createElement("select", { id: "behaviour", value: props.behaviourName, onChange: (e) => {
            if (e.target.value === "NONE") {
                return;
            }
            props.onSelectBehaviour(e.target.value);
        } },
        React.createElement("option", { value: "ALIGN" }, "Align"),
        React.createElement("option", { value: "ARRIVE" }, "Arrive"),
        React.createElement("option", { value: "COLLISION_AVOIDANCE" }, "Collision Avoidance"),
        React.createElement("option", { value: "EVADE" }, "Evade"),
        React.createElement("option", { value: "FACE" }, "Face"),
        React.createElement("option", { value: "FLEE" }, "Flee"),
        React.createElement("option", { value: "FOLLOW_PATH_CHASE_RABBIT" }, "Follow path (chase rabbit)"),
        React.createElement("option", { value: "FOLLOW_PATH_PREDICT" }, "Follow path (predictive)"),
        React.createElement("option", { value: "LOOK_WHERE_YOU_ARE_GOING" }, "Look where you are going"),
        React.createElement("option", { value: "MATCH_VELOCITY" }, "Match velocity"),
        React.createElement("option", { value: "NONE" }, "None"),
        React.createElement("option", { value: "OBSTACLE_AVOIDANCE" }, "Obstacle avoidance"),
        React.createElement("option", { value: "PURSUE" }, "Pursue"),
        React.createElement("option", { value: "SEEK" }, "Seek"),
        React.createElement("option", { value: "SEPARATION" }, "Separation"),
        React.createElement("option", { value: "WANDER" }, "Wander")));
};

const getDefaultBehaviour = (name, scenario) => {
    var _a, _b;
    switch (name) {
        case "ALIGN":
            return new Align("");
        case "ARRIVE":
            return new Arrive("");
        case "COLLISION_AVOIDANCE":
            return new CollisionAvoidance();
        case "EVADE":
            return new Evade("");
        case "FACE":
            return new Face("");
        case "FLEE":
            return new Flee("");
        case "FOLLOW_PATH_CHASE_RABBIT": {
            const firstPath = (_a = scenario === null || scenario === void 0 ? void 0 : scenario.paths.keys().next().value) !== null && _a !== void 0 ? _a : "";
            return new FollowPathChaseRabbit(firstPath);
        }
        case "FOLLOW_PATH_PREDICT": {
            const firstPath = (_b = scenario === null || scenario === void 0 ? void 0 : scenario.paths.keys().next().value) !== null && _b !== void 0 ? _b : "";
            return new FollowPathPredict(firstPath);
        }
        case "LOOK_WHERE_YOU_ARE_GOING":
            return new LookWhereYouAreGoing();
        case "MATCH_VELOCITY":
            return new MatchVelocity("");
        case "OBSTACLE_AVOIDANCE":
            return new ObstacleAvoidance();
        case "PURSUE":
            return new Pursue("");
        case "SEEK":
            return new Seek("");
        case "SEPARATION":
            return new Separation();
        case "WANDER":
            return new Wander();
        default:
            return new Wander();
    }
};
const AddBehaviour = (props) => {
    const [isAddingBehaviour, setIsAddingBehaviour] = React.useState(false);
    const state = react.exports.useContext(StateContext);
    if (isAddingBehaviour) {
        return (React.createElement(React.Fragment, null,
            React.createElement(SelectBehaviour, { behaviourName: "NONE", onSelectBehaviour: (nextBehaviourName) => {
                    setIsAddingBehaviour(false);
                    props.onBehaviourChange(getDefaultBehaviour(nextBehaviourName, state.scenario));
                } }),
            React.createElement("button", { className: "button-cancel", type: "button", onClick: () => {
                    setIsAddingBehaviour(false);
                } }, "Cancel")));
    }
    return (React.createElement("button", { type: "button", onClick: () => {
            setIsAddingBehaviour(true);
        } }, "Add behaviour"));
};

const RemoveBehaviour = (props) => {
    const dispatch = React.useContext(DispatchContext);
    return (React.createElement("button", { "data-id": "remove-behaviour", className: "button-cross", "aria-label": "Remove behaviour", role: "button", onClick: () => {
            dispatch({ type: "BEHAVIOUR_REMOVED", payload: props.name });
        } }, "\u00D7"));
};

const getName = (name) => {
    switch (name) {
        case "ALIGN":
            return "Align";
        case "ARRIVE":
            return "Arrive";
        case "COLLISION_AVOIDANCE":
            return "Collision avoidance";
        case "EVADE":
            return "Evade";
        case "FACE":
            return "Face";
        case "FLEE":
            return "Flee";
        case "FOLLOW_PATH_CHASE_RABBIT":
            return "Follow path (chase the rabbit)";
        case "FOLLOW_PATH_PREDICT":
            return "Follow path (predict)";
        case "LOOK_WHERE_YOU_ARE_GOING":
            return "Look where you are going";
        case "MATCH_VELOCITY":
            return "Match velocity";
        case "OBSTACLE_AVOIDANCE":
            return "Obstacle avoidance";
        case "PURSUE":
            return "Pursue";
        case "SEEK":
            return "Seek";
        case "SEPARATION":
            return "Separation";
        case "WANDER":
            return "Wander";
        default:
            return "No behaviour";
    }
};
const Behaviours = (props) => {
    return (React.createElement("fieldset", { className: "behaviours" },
        React.createElement("legend", null, "Behaviours"),
        React.createElement("ul", { "data-id": "behaviour-list" }, props.character.behaviours.map((behaviour) => (React.createElement("li", { key: behaviour.name, "data-id": behaviour.name },
            React.createElement("header", null,
                React.createElement("h3", null, getName(behaviour.name)),
                React.createElement(RemoveBehaviour, { name: behaviour.name })),
            React.createElement(BehaviourSpecificControls, { behaviour: behaviour, onBehaviourChange: (payload) => {
                    props.dispatch({
                        type: "BEHAVIOUR_CHANGED",
                        payload,
                    });
                } }))))),
        React.createElement(AddBehaviour, { onBehaviourChange: (payload) => {
                props.dispatch({
                    type: "BEHAVIOUR_ADDED",
                    payload,
                });
            } })));
};

const CharacterSidebar = () => {
    const dispatch = React.useContext(DispatchContext);
    const state = React.useContext(StateContext);
    const focussedCharacter = getFocussedCharacter(state);
    const idText = state.ui.focussedCharacterId
        ? `ID: ${state.ui.focussedCharacterId}`
        : "--";
    return (React.createElement("aside", { className: "character-sidebar", "aria-label": "Character sidebar" },
        React.createElement("h2", null, focussedCharacter ? "Selected Item" : "Nothing selected"),
        focussedCharacter && (React.createElement("form", null,
            React.createElement("fieldset", null,
                React.createElement("legend", { "data-id": "kinematic-id" },
                    "Kinematic ",
                    React.createElement("code", null, idText)),
                React.createElement("label", { htmlFor: "orientation" }, "Orientation"),
                React.createElement("input", { id: "orientation", type: "range", min: "-2", max: "2", step: "0.1", value: focussedCharacter.kinematic.orientation.toString(), onChange: (e) => {
                        if (e.target instanceof HTMLInputElement) {
                            dispatch({
                                type: "ORIENTATION_CHANGED",
                                payload: parseFloat(e.target.value),
                            });
                        }
                    } }),
                React.createElement(NumericField, { id: "max-acceleration", label: "Max. Acceleration", value: focussedCharacter.kinematic.maxAcceleration, onChange: (payload) => {
                        dispatch({
                            type: "MAX_ACCELERATION_CHANGED",
                            payload,
                        });
                    } }),
                React.createElement(NumericField, { id: "max-angular-acceleration", label: "Max. Angular Acceleration", value: focussedCharacter.kinematic.maxAngularAcceleration, onChange: (payload) => {
                        dispatch({
                            type: "MAX_ANGULAR_ACCELERATION_CHANGED",
                            payload,
                        });
                    } }),
                React.createElement(NumericField, { label: "Rotation", id: "rotation", value: focussedCharacter.kinematic.rotation, onChange: (payload) => {
                        dispatch({
                            type: "ROTATION_CHANGED",
                            payload,
                        });
                    } }),
                React.createElement(NumericField, { label: "Horizontal position", id: "position-x", min: 0, max: 800, value: focussedCharacter.kinematic.position[0], onChange: (payload) => {
                        dispatch({
                            type: "POSX_CHANGED",
                            payload,
                        });
                    } }),
                React.createElement(NumericField, { label: "Vertical position", id: "position-z", min: 0, max: 800, value: focussedCharacter.kinematic.position[1], onChange: (payload) => {
                        dispatch({
                            type: "POSZ_CHANGED",
                            payload,
                        });
                    } }),
                React.createElement(NumericField, { label: "Horizontal velocity", id: "vel-x", value: focussedCharacter.kinematic.velocity[0], onChange: (payload) => {
                        dispatch({
                            type: "VELX_CHANGED",
                            payload,
                        });
                    } }),
                React.createElement(NumericField, { label: "Vertical velocity", id: "vel-z", value: focussedCharacter.kinematic.velocity[1], onChange: (payload) => {
                        dispatch({
                            type: "VELZ_CHANGED",
                            payload,
                        });
                    } })),
            React.createElement(Behaviours, { dispatch: dispatch, character: focussedCharacter })))));
};

C(); // immer can understand Map and Set
const Main = () => {
    const config = queryString.parse(window.location.hash, {
        parseBooleans: true,
    });
    const [state, dispatch] = e(reducer, getState(config));
    useAnimationFrame((tick) => {
        dispatch({ type: "TICK", payload: tick });
    });
    const [animation, setAnimation] = React.useState(false);
    function onAnimationEnd() {
        setAnimation(false);
    }
    React.useEffect(() => {
        setAnimation(true);
    }, [state.ui.isPaused]);
    return (React.createElement(React.StrictMode, null,
        React.createElement(DispatchContext.Provider, { value: dispatch },
            React.createElement(StateContext.Provider, { value: state },
                React.createElement(ScenarioSidebar, null))),
        React.createElement("main", null,
            React.createElement(Canvas, { state: state, dispatch: dispatch }),
            React.createElement("div", { className: animation ? "x" : "", id: "play-status", "aria-label": state.ui.isPaused ? "pause" : "play", role: "status", onAnimationEnd: onAnimationEnd },
                React.createElement("svg", { viewBox: "0 0 70 70" },
                    React.createElement("path", { d: state.ui.isPaused
                            ? "M 20,20 30,20 30,50 20,50 z M 40,20 50,20 50,50 40,50"
                            : "M 30,25 45,35 30, 45" })))),
        React.createElement(DispatchContext.Provider, { value: dispatch },
            React.createElement(StateContext.Provider, { value: state },
                React.createElement(CharacterSidebar, null)))));
};

ReactDOM.render(React.createElement(Main, null), document.getElementById("root"));
//# sourceMappingURL=bundle.js.map
