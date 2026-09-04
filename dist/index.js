"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(q){throw (r=0, q)}};};var s=i(function(E,f){
var t=/[\uDC00-\uDFFF]/,u=/[\uD800-\uDBFF]/;function O(e){var r;for(r=0;r<e.length;r++){if(r===0&&t.test(e[r])||r===e.length-1&&u.test(e[r]))return!1;if(r<e.length-1&&u.test(e[r]))if(t.test(e[r+1]))r+=1;else return!1;if(r>0&&t.test(e[r])&&!u.test(e[r-1]))return!1}return!0}f.exports=O
});var n=i(function(T,o){
var g=s();function d(e){return typeof e=="string"&&g(e)}o.exports=d
});var l=i(function(U,v){
var R=require('@stdlib/assert-is-string/dist'),W=s();function p(e){return R.isObject(e)&&W(e.valueOf())}v.exports=p
});var F=i(function(h,c){
var S=n(),_=l();function x(e){return S(e)||_(e)}c.exports=x
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),a=F(),b=n(),j=l();m(a,"isPrimitive",b);m(a,"isObject",j);module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
