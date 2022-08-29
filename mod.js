// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,c=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var a,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(f.call(r,t)||c.call(r,t)?(a=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=a):r[t]=e.value),s="get"in e,p="set"in e,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,t,e.get),p&&i&&i.call(r,t,e.set),r};var a=t;function l(r,t,e){a(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function s(r){var t=function(r){return"/"===r.charAt(0)}(r),e="/"===y(r,-1);return(r=function(r,t){for(var e=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}(p(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&e&&(r+="/"),(t?"/":"")+r}function p(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}var y="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)},b=/./;function v(r){return"boolean"==typeof r}var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function j(){return d&&"symbol"==typeof Symbol.toStringTag}var w=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;var g,m="function"==typeof Symbol?Symbol.toStringTag:"";g=j()?function(r){var t,e,n,o,u;if(null==r)return w.call(r);e=r[m],u=m,t=null!=(o=r)&&_.call(o,u);try{r[m]=void 0}catch(t){return w.call(r)}return n=w.call(r),t?r[m]=e:delete r[m],n}:function(r){return w.call(r)};var h=g,O=Boolean.prototype.toString;var E=j();function S(r){return"object"==typeof r&&(r instanceof Boolean||(E?function(r){try{return O.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===h(r)))}function A(r){return v(r)||S(r)}function P(){return new Function("return this;")()}l(A,"isPrimitive",v),l(A,"isObject",S);var B="object"==typeof self?self:null,T="object"==typeof window?window:null,x="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof x?x:null;var k=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return P()}if(B)return B;if(T)return T;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),V=k.document&&k.document.childNodes,C=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var G,L=/^\s*function\s*([^(]*)/i;l(F,"REGEXP",L),G=Array.isArray?Array.isArray:function(r){return"[object Array]"===h(r)};var M=G;function q(r){return null!==r&&"object"==typeof r}var I=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!M(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(q);function J(r){var t,e,n,o;if(("Object"===(e=h(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=L.exec(n.toString()))return t[1]}return q(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l(q,"isObjectLikeArray",I);var R="function"==typeof b||"object"==typeof C||"function"==typeof V?function(r){return J(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?J(r).toLowerCase():t};var U,X,z=Object.getPrototypeOf;X=Object.getPrototypeOf,U="function"===R(X)?z:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===h(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var D=U;function H(r){return null==r?null:(r=Object(r),D(r))}var K,Q=Math.floor;function W(r,t,e,n,o){var u,i,f,c,a,l,s,p,y,b,v,d,j;if(r<=0)return 0;if(1===r||0===n)return t+e[o];if(u=o,r<8){for(v=0,j=0;j<r;j++)v+=t+e[u],u+=n;return v}if(r<=128){for(i=t+e[u],f=t+e[u+n],c=t+e[u+2*n],a=t+e[u+3*n],l=t+e[u+4*n],s=t+e[u+5*n],p=t+e[u+6*n],y=t+e[u+7*n],u+=8*n,b=r%8,j=8;j<r-b;j+=8)i+=t+e[u],f+=t+e[u+n],c+=t+e[u+2*n],a+=t+e[u+3*n],l+=t+e[u+4*n],s+=t+e[u+5*n],p+=t+e[u+6*n],y+=t+e[u+7*n],u+=8*n;for(v=i+f+(c+a)+(l+s+(p+y));j<r;j++)v+=t+e[u],u+=n;return v}return d=Q(r/2),W(d-=d%8,t,e,n,u)+W(r-d,t,e,n,u+d*n)}function Y(r,t,e,n){var o,u,i;if(r<=0)return 0;if(1===r||0===n)return t+e[0];if(o=n<0?(1-r)*n:0,r<8){for(u=0,i=0;i<r;i++)u+=t+e[o],o+=n;return u}return W(r,t,e,n,o)}l(Y,"ndarray",W);var Z=function(r){try{return require(r)}catch(r){return function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===h(r))return!0;r=H(r)}return!1}(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}(function(){var r=Array.prototype.slice.call(arguments,0);return s(p(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}("/home/runner/work/stats-base-dmeanlipw/stats-base-dmeanlipw/node_modules/@stdlib/blas-ext-base-dapxsumpw/lib","./native.js"));K=Z instanceof Error?Y:Z;const{ndarray:$}=K;function rr(r,t,e){var n;return r<=0?NaN:1===r||0===e?t[0]:t[n=e<0?(1-r)*e:0]+$(r-1,-t[n],t,e,n+e)/r}function tr(r,t,e,n){return r<=0?NaN:1===r||0===e?t[n]:t[n]+$(r-1,-t[n],t,e,n+e)/r}l(rr,"ndarray",tr);export{rr as default,tr as ndarray};
//# sourceMappingURL=mod.js.map
