import e from"react";
/*! *****************************************************************************
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
***************************************************************************** */var r=function(){return r=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},r.apply(this,arguments)};function t(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}var n={exports:{}},o={},a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function s(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var l=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;var n=Object.getOwnPropertyNames(r).map((function(e){return r[e]}));if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var t,n,o=s(e),l=1;l<arguments.length;l++){for(var u in t=Object(arguments[l]))i.call(t,u)&&(o[u]=t[u]);if(a){n=a(t);for(var f=0;f<n.length;f++)c.call(t,n[f])&&(o[n[f]]=t[n[f]])}}return o},u=e,f=60103;
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */if(o.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var p=Symbol.for;f=p("react.element"),o.Fragment=p("react.fragment")}var d=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y=Object.prototype.hasOwnProperty,v={key:!0,ref:!0,__self:!0,__source:!0};function b(e,r,t){var n,o={},a=null,i=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(i=r.ref),r)y.call(r,n)&&!v.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:f,type:e,key:a,ref:i,props:o,_owner:d.current}}o.jsx=b,o.jsxs=b;var m,h={};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */m=h,"production"!==process.env.NODE_ENV&&function(){var r=e,t=l,n=60103,o=60106;m.Fragment=60107;var a=60108,i=60114,c=60109,s=60110,u=60112,f=60113,p=60120,d=60115,y=60116,v=60121,b=60122,h=60117,g=60129,j=60131;if("function"==typeof Symbol&&Symbol.for){var O=Symbol.for;n=O("react.element"),o=O("react.portal"),m.Fragment=O("react.fragment"),a=O("react.strict_mode"),i=O("react.profiler"),c=O("react.provider"),s=O("react.context"),u=O("react.forward_ref"),f=O("react.suspense"),p=O("react.suspense_list"),d=O("react.memo"),y=O("react.lazy"),v=O("react.block"),b=O("react.server.block"),h=O("react.fundamental"),O("react.scope"),O("react.opaque.id"),g=O("react.debug_trace_mode"),O("react.offscreen"),j=O("react.legacy_hidden")}var _="function"==typeof Symbol&&Symbol.iterator,x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function w(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];k("error",e,t)}function k(e,r,t){var n=x.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(r+="%s",t=t.concat([n]));var o=t.map((function(e){return""+e}));o.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,o)}function R(e){return e.displayName||"Context"}function E(e){if(null==e)return null;if("number"==typeof e.tag&&w("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case m.Fragment:return"Fragment";case o:return"Portal";case i:return"Profiler";case a:return"StrictMode";case f:return"Suspense";case p:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case s:return R(e)+".Consumer";case c:return R(e._context)+".Provider";case u:return l=e,b=e.render,h="ForwardRef",g=b.displayName||b.name||"",l.displayName||(""!==g?h+"("+g+")":h);case d:return E(e.type);case v:return E(e._render);case y:var r=e,t=r._payload,n=r._init;try{return E(n(t))}catch(e){return null}}var l,b,h,g;return null}var P,S,C,N,$,F,T,D=0;function I(){}I.__reactDisabledLog=!0;var A,L=x.ReactCurrentDispatcher;function W(e,r,t){if(void 0===A)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);A=n&&n[1]||""}return"\n"+A+e}var U,z=!1,M="function"==typeof WeakMap?WeakMap:Map;function Y(e,r){if(!e||z)return"";var n,o=U.get(e);if(void 0!==o)return o;z=!0;var a,i=Error.prepareStackTrace;Error.prepareStackTrace=void 0,a=L.current,L.current=null,function(){if(0===D){P=console.log,S=console.info,C=console.warn,N=console.error,$=console.group,F=console.groupCollapsed,T=console.groupEnd;var e={configurable:!0,enumerable:!0,value:I,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}D++}();try{if(r){var c=function(){throw Error()};if(Object.defineProperty(c.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(c,[])}catch(e){n=e}Reflect.construct(e,[],c)}else{try{c.call()}catch(e){n=e}e.call(c.prototype)}}else{try{throw Error()}catch(e){n=e}e()}}catch(r){if(r&&n&&"string"==typeof r.stack){for(var s=r.stack.split("\n"),l=n.stack.split("\n"),u=s.length-1,f=l.length-1;u>=1&&f>=0&&s[u]!==l[f];)f--;for(;u>=1&&f>=0;u--,f--)if(s[u]!==l[f]){if(1!==u||1!==f)do{if(u--,--f<0||s[u]!==l[f]){var p="\n"+s[u].replace(" at new "," at ");return"function"==typeof e&&U.set(e,p),p}}while(u>=1&&f>=0);break}}}finally{z=!1,L.current=a,function(){if(0==--D){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:t({},e,{value:P}),info:t({},e,{value:S}),warn:t({},e,{value:C}),error:t({},e,{value:N}),group:t({},e,{value:$}),groupCollapsed:t({},e,{value:F}),groupEnd:t({},e,{value:T})})}D<0&&w("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=i}var d=e?e.displayName||e.name:"",y=d?W(d):"";return"function"==typeof e&&U.set(e,y),y}function q(e,r,t){return Y(e,!1)}function B(e,r,t){if(null==e)return"";if("function"==typeof e)return Y(e,!(!(n=e.prototype)||!n.isReactComponent));var n;if("string"==typeof e)return W(e);switch(e){case f:return W("Suspense");case p:return W("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case u:return q(e.render);case d:return B(e.type,r,t);case v:return q(e._render);case y:var o=e,a=o._payload,i=o._init;try{return B(i(a),r,t)}catch(e){}}return""}U=new M;var V={},H=x.ReactDebugCurrentFrame;function J(e){if(e){var r=e._owner,t=B(e.type,e._source,r?r.type:null);H.setExtraStackFrame(t)}else H.setExtraStackFrame(null)}var X,G,K,Q=x.ReactCurrentOwner,Z=Object.prototype.hasOwnProperty,ee={key:!0,ref:!0,__self:!0,__source:!0};function re(e,r,t,o,a){var i,c={},s=null,l=null;for(i in void 0!==t&&(s=""+t),function(e){if(Z.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return void 0!==e.key}(r)&&(s=""+r.key),function(e){if(Z.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return void 0!==e.ref}(r)&&(l=r.ref,function(e,r){if("string"==typeof e.ref&&Q.current&&r&&Q.current.stateNode!==r){var t=E(Q.current.type);K[t]||(w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',E(Q.current.type),e.ref),K[t]=!0)}}(r,a)),r)Z.call(r,i)&&!ee.hasOwnProperty(i)&&(c[i]=r[i]);if(e&&e.defaultProps){var u=e.defaultProps;for(i in u)void 0===c[i]&&(c[i]=u[i])}if(s||l){var f="function"==typeof e?e.displayName||e.name||"Unknown":e;s&&function(e,r){var t=function(){X||(X=!0,w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}(c,f),l&&function(e,r){var t=function(){G||(G=!0,w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}(c,f)}return function(e,r,t,o,a,i,c){var s={$$typeof:n,type:e,key:r,ref:t,props:c,_owner:i,_store:{}};return Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(s,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(s,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s}(e,s,l,a,o,Q.current,c)}K={};var te,ne=x.ReactCurrentOwner,oe=x.ReactDebugCurrentFrame;function ae(e){if(e){var r=e._owner,t=B(e.type,e._source,r?r.type:null);oe.setExtraStackFrame(t)}else oe.setExtraStackFrame(null)}function ie(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}function ce(){if(ne.current){var e=E(ne.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}te=!1;var se={};function le(e,r){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var t=function(e){var r=ce();if(!r){var t="string"==typeof e?e:e.displayName||e.name;t&&(r="\n\nCheck the top-level render call using <"+t+">.")}return r}(r);if(!se[t]){se[t]=!0;var n="";e&&e._owner&&e._owner!==ne.current&&(n=" It was passed a child from "+E(e._owner.type)+"."),ae(e),w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),ae(null)}}}function ue(e,r){if("object"==typeof e)if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];ie(n)&&le(n,r)}else if(ie(e))e._store&&(e._store.validated=!0);else if(e){var o=function(e){if(null===e||"object"!=typeof e)return null;var r=_&&e[_]||e["@@iterator"];return"function"==typeof r?r:null}(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)ie(a.value)&&le(a.value,r)}}function fe(e){var r,t=e.type;if(null!=t&&"string"!=typeof t){if("function"==typeof t)r=t.propTypes;else{if("object"!=typeof t||t.$$typeof!==u&&t.$$typeof!==d)return;r=t.propTypes}if(r){var n=E(t);!function(e,r,t,n,o){var a=Function.call.bind(Object.prototype.hasOwnProperty);for(var i in e)if(a(e,i)){var c=void 0;try{if("function"!=typeof e[i]){var s=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw s.name="Invariant Violation",s}c=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){c=e}!c||c instanceof Error||(J(o),w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof c),J(null)),c instanceof Error&&!(c.message in V)&&(V[c.message]=!0,J(o),w("Failed %s type: %s",t,c.message),J(null))}}(r,e.props,"prop",n,e)}else void 0===t.PropTypes||te||(te=!0,w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",E(t)||"Unknown"));"function"!=typeof t.getDefaultProps||t.getDefaultProps.isReactClassApproved||w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function pe(e,r,t,o,l,O){var _=function(e){return"string"==typeof e||"function"==typeof e||e===m.Fragment||e===i||e===g||e===a||e===f||e===p||e===j||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===d||e.$$typeof===c||e.$$typeof===s||e.$$typeof===u||e.$$typeof===h||e.$$typeof===v||e[0]===b)}(e);if(!_){var x="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(x+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var k,R=function(e){return void 0!==e?"\n\nCheck your code at "+e.fileName.replace(/^.*[\\\/]/,"")+":"+e.lineNumber+".":""}(l);x+=R||ce(),null===e?k="null":Array.isArray(e)?k="array":void 0!==e&&e.$$typeof===n?(k="<"+(E(e.type)||"Unknown")+" />",x=" Did you accidentally export a JSX literal instead of a component?"):k=typeof e,w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",k,x)}var P=re(e,r,t,l,O);if(null==P)return P;if(_){var S=r.children;if(void 0!==S)if(o)if(Array.isArray(S)){for(var C=0;C<S.length;C++)ue(S[C],e);Object.freeze&&Object.freeze(S)}else w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ue(S,e)}return e===m.Fragment?function(e){for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if("children"!==n&&"key"!==n){ae(e),w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),ae(null);break}}null!==e.ref&&(ae(e),w("Invalid attribute `ref` supplied to `React.Fragment`."),ae(null))}(P):fe(P),P}var de=function(e,r,t){return pe(e,r,t,!1)},ye=function(e,r,t){return pe(e,r,t,!0)};m.jsx=de,m.jsxs=ye}(),"production"===process.env.NODE_ENV?n.exports=o:n.exports=h;var g=function(e){var o=e.children,a=t(e,["children"]);return n.exports.jsx("button",r({},a,{children:o}),void 0)},j=function(e){var o=e.id,a=e.label,i=t(e,["id","label"]);return n.exports.jsxs(n.exports.Fragment,{children:[n.exports.jsx("input",r({type:"checkbox",id:o},i),void 0),n.exports.jsx("label",r({htmlFor:o},{children:a}),void 0)]},void 0)},O=function(e){var o=e.id,a=e.label,i=e.stacked,c=void 0!==i&&i,s=e.style,l=t(e,["id","label","stacked","style"]);return n.exports.jsxs("div",r({className:c?"field-row-stacked":"field-row",style:s},{children:[n.exports.jsx("label",r({htmlFor:o},{children:a}),void 0),n.exports.jsx("input",r({id:o,type:"text"},l),void 0)]}),void 0)},_=function(e){var t=e.children;return n.exports.jsx("div",r({className:"window-body"},{children:t}),void 0)},x=function(e){var t=e.title,o=e.statusBar,a=e.width,i=e.children;return n.exports.jsxs("div",r({className:"window",style:{width:a}},{children:[t,n.exports.jsx(_,{children:i},void 0),o]}),void 0)},w=function(e){var t=e.children;return n.exports.jsx("p",r({className:"status-bar-field"},{children:t}),void 0)},k=function(e){var t=e.children;return n.exports.jsx("div",r({className:"status-bar"},{children:t}),void 0)},R=function(e){var r=e.onClick;return n.exports.jsx("button",{"aria-label":"Minimize",onClick:r},void 0)},E=function(e){var r=e.onClick;return n.exports.jsx("button",{"aria-label":"Restore",onClick:r},void 0)},P=function(e){var r=e.onClick;return n.exports.jsx("button",{"aria-label":"Close",onClick:r},void 0)},S=function(e){var r=e.onClick;return n.exports.jsx("button",{"aria-label":"Maximize",onClick:r},void 0)},C=function(e){var r=e.onClick;return n.exports.jsx("button",{"aria-label":"Help",onClick:r},void 0)},N=function(e){var t=e.title,o=e.inactive,a=e.children;return n.exports.jsxs("div",r({className:"title-bar "+(o?"inactive":"")},{children:[n.exports.jsx("div",r({className:"title-bar-text"},{children:t}),void 0),n.exports.jsx("div",r({className:"title-bar-controls"},{children:a}),void 0)]}),void 0)};export{g as Button,j as Checkbox,P as CloseButton,C as HelpButton,S as MaximizeButton,R as MinimizeButton,E as RestoreButton,w as StatusBarField,O as TextBox,x as Window,_ as WindowBody,k as WindowStatusBar,N as WindowTitle};
//# sourceMappingURL=index.js.map
