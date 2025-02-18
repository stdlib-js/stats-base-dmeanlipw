"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=n(function(g,s){
var c=require('@stdlib/blas-ext-base-dapxsumpw/dist').ndarray;function l(e,r,a,i){return e<=0?NaN:e===1||a===0?r[i]:r[i]+c(e-1,-r[i],r,a,i+a)/e}s.exports=l
});var p=n(function(h,v){
var y=require('@stdlib/strided-base-stride2offset/dist'),w=u();function j(e,r,a){return w(e,r,a,y(e,a))}v.exports=j
});var m=n(function(k,d){
var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=p(),R=u();x(q,"ndarray",R);d.exports=q
});var _=require("path").join,f=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=m(),t,o=f(_(__dirname,"./native.js"));E(o)?t=O:t=o;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
