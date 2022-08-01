// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__,l=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),p="get"in t,_="set"in t,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(e,r,t.get),_&&i&&i.call(e,r,t.set),e};function c(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var p=Math.floor;function _(e,r,t,n,o){var a,i,u,f,l,c,d,y,b,s,v,j,m;if(e<=0)return 0;if(1===e||0===n)return r+t[o];if(a=o,e<8){for(v=0,m=0;m<e;m++)v+=r+t[a],a+=n;return v}if(e<=128){for(i=r+t[a],u=r+t[a+n],f=r+t[a+2*n],l=r+t[a+3*n],c=r+t[a+4*n],d=r+t[a+5*n],y=r+t[a+6*n],b=r+t[a+7*n],a+=8*n,s=e%8,m=8;m<e-s;m+=8)i+=r+t[a],u+=r+t[a+n],f+=r+t[a+2*n],l+=r+t[a+3*n],c+=r+t[a+4*n],d+=r+t[a+5*n],y+=r+t[a+6*n],b+=r+t[a+7*n],a+=8*n;for(v=i+u+(f+l)+(c+d+(y+b));m<e;m++)v+=r+t[a],a+=n;return v}return j=p(e/2),_(j-=j%8,r,t,n,a)+_(e-j,r,t,n,a+j*n)}function d(e,r,t){var n;return e<=0?NaN:1===e||0===t?r[0]:r[n=t<0?(1-e)*t:0]+_(e-1,-r[n],r,t,n+t)/e}function y(e,r,t,n){return e<=0?NaN:1===e||0===t?r[n]:r[n]+_(e-1,-r[n],r,t,n+t)/e}c((function(e,r,t,n){var o,a,i;if(e<=0)return 0;if(1===e||0===n)return r+t[0];if(o=n<0?(1-e)*n:0,e<8){for(a=0,i=0;i<e;i++)a+=r+t[o],o+=n;return a}return _(e,r,t,n,o)}),"ndarray",_),c(d,"ndarray",y),e.default=d,e.ndarray=y,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).dmeanlipw={});
//# sourceMappingURL=browser.js.map
