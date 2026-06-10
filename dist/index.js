"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=c(function(O,f){
var t=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-exp/dist');function y(e,r,n){var i;return t(e)||t(r)||t(n)||n<=0?NaN:(i=(e-r)/n,s(-s(-i)))}f.exports=y
});var N=c(function(R,q){
var d=require('@stdlib/utils-constant-function/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-exp/dist');function x(e,r){if(u(e)||u(r)||r<=0)return d(NaN);return n;function n(i){var a;return u(i)?NaN:(a=(i-e)/r,v(-v(-a)))}}q.exports=x
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=o(),l=N();z(p,"factory",l);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
