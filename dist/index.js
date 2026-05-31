"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=i(function(D,f){
var t=/[\uDC00-\uDFFF]/,u=/[\uD800-\uDBFF]/;function q(e){var r;for(r=0;r<e.length;r++){if(r===0&&t.test(e[r])||r===e.length-1&&u.test(e[r]))return!1;if(r<e.length-1&&u.test(e[r]))if(t.test(e[r+1]))r+=1;else return!1;if(r>0&&t.test(e[r])&&!u.test(e[r-1]))return!1}return!0}f.exports=q
});var n=i(function(E,o){
var O=s();function g(e){return typeof e=="string"&&O(e)}o.exports=g
});var l=i(function(T,v){
var d=require('@stdlib/assert-is-string/dist'),R=s();function W(e){return d.isObject(e)&&R(e.valueOf())}v.exports=W
});var F=i(function(U,c){
var p=n(),S=l();function _(e){return p(e)||S(e)}c.exports=_
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),a=F(),x=n(),b=l();m(a,"isPrimitive",x);m(a,"isObject",b);module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
