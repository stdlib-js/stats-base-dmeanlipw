"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var p=n(function(b,t){
var d=require('@stdlib/blas-ext-base-dapxsumpw/dist').ndarray;function o(e,r,i){var a;return e<=0?NaN:e===1||i===0?r[0]:(i<0?a=(1-e)*i:a=0,r[a]+d(e-1,-r[a],r,i,a+i)/e)}t.exports=o
});var q=n(function(g,v){
var w=require('@stdlib/blas-ext-base-dapxsumpw/dist').ndarray;function y(e,r,i,a){return e<=0?NaN:e===1||i===0?r[a]:r[a]+w(e-1,-r[a],r,i,a+i)/e}v.exports=y
});var l=n(function(h,m){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=p(),f=q();j(s,"ndarray",f);m.exports=s
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),x=require('@stdlib/assert-is-error/dist'),E=l(),u,c=_(R(__dirname,"./native.js"));x(c)?u=E:u=c;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
