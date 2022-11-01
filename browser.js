// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(t){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,a=e.__defineSetter__,u=e.__lookupGetter__,f=e.__lookupSetter__,c=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,n){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(u.call(t,r)||f.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=c):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,r,n.get),p&&a&&a.call(t,r,n.set),t};function l(t,r,n){c(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function y(t){return t!=t}var p=Math.floor,b=Math.ceil;function v(t){return t<0?b(t):p(t)}var d=Number.NEGATIVE_INFINITY,_=Number.POSITIVE_INFINITY;function s(t){return t===_||t===d}var A,w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),m=Object.prototype.toString,h=Object.prototype.hasOwnProperty,U="function"==typeof Symbol?Symbol.toStringTag:"",j=w&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e,o,i;if(null==t)return m.call(t);n=t[U],i=U,r=null!=(o=t)&&h.call(o,i);try{t[U]=void 0}catch(r){return m.call(t)}return e=m.call(t),r?t[U]=n:delete t[U],e}:function(t){return m.call(t)},g="function"==typeof Uint32Array,N="function"==typeof Uint32Array?Uint32Array:null,I="function"==typeof Uint32Array?Uint32Array:void 0;A=function(){var t,r,n;if("function"!=typeof N)return!1;try{r=new N(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(g&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?I:function(){throw new Error("not implemented")};var O,S=A,E="function"==typeof Float64Array,F="function"==typeof Float64Array?Float64Array:null,T="function"==typeof Float64Array?Float64Array:void 0;O=function(){var t,r,n;if("function"!=typeof F)return!1;try{r=new F([1,3.14,-3.14,NaN]),n=r,t=(E&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?T:function(){throw new Error("not implemented")};var H,G=O,P="function"==typeof Uint8Array,x="function"==typeof Uint8Array?Uint8Array:null,L="function"==typeof Uint8Array?Uint8Array:void 0;H=function(){var t,r,n;if("function"!=typeof x)return!1;try{r=new x(r=[1,3.14,-3.14,256,257]),n=r,t=(P&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?L:function(){throw new Error("not implemented")};var M,V=H,W="function"==typeof Uint16Array,k="function"==typeof Uint16Array?Uint16Array:null,Y="function"==typeof Uint16Array?Uint16Array:void 0;M=function(){var t,r,n;if("function"!=typeof k)return!1;try{r=new k(r=[1,3.14,-3.14,65536,65537]),n=r,t=(W&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?Y:function(){throw new Error("not implemented")};var C,q={uint16:M,uint8:V};(C=new q.uint16(1))[0]=4660;var z,B,D=52===new q.uint8(C.buffer)[0];!0===D?(z=1,B=0):(z=0,B=1);var J={HIGH:z,LOW:B},K=new G(1),Q=new S(K.buffer),R=J.HIGH,X=J.LOW;function Z(t,r){return K[0]=r,t[0]=Q[R],t[1]=Q[X],t}function $(t,r){return 1===arguments.length?Z([0,0],t):Z(t,r)}var tt,rt,nt=!0===D?1:0,et=new G(1),ot=new S(et.buffer);function it(t){return et[0]=t,ot[nt]}!0===D?(tt=1,rt=0):(tt=0,rt=1);var at={HIGH:tt,LOW:rt},ut=new G(1),ft=new S(ut.buffer),ct=at.HIGH,lt=at.LOW;function yt(t,r){return ft[ct]=t,ft[lt]=r,ut[0]}var pt=[0,0];function bt(t,r,n,e){return y(t)||s(t)?(r[e]=t,r[e+n]=0,r):0!==t&&function(t){return Math.abs(t)}(t)<22250738585072014e-324?(r[e]=4503599627370496*t,r[e+n]=-52,r):(r[e]=t,r[e+n]=0,r)}l((function(t){return bt(t,[0,0],1,0)}),"assign",bt);var vt=[0,0],dt=[0,0];function _t(t,r){var n,e,o,i,a;return 0===r||0===t||y(t)||s(t)?t:(bt(t,vt,1,0),r+=vt[1],r+=function(t){var r=it(t);return(r=(2146435072&r)>>>20)-1023|0}(t=vt[0]),r<-1074?(o=t,$(pt,0),i=pt[0],i&=2147483647,a=it(o),yt(i|=a&=2147483648,pt[1])):r>1023?t<0?d:_:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,$(dt,t),n=dt[0],n&=2148532223,e*yt(n|=r+1023<<20,dt[1])))}var st=1.4426950408889634,At=1/(1<<28);function wt(t){var r;return y(t)||t===_?t:t===d?0:t>709.782712893384?_:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<At?1+t:function(t,r,n){var e,o,i,a;return _t(1-(r-(e=t-r)*(i=e-(o=e*e)*(0===(a=o)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-i)-t),n)}(t-.6931471803691238*(r=v(t<0?st*t-.5:st*t+.5)),1.9082149292705877e-10*r,r)}function mt(t,r,n){return y(t)||y(r)||y(n)||n<=0?NaN:wt(-wt(-(t-r)/n))}function ht(t,r){return y(t)||y(r)||r<=0?(n=NaN,function(){return n}):function(n){return y(n)?NaN:wt(-wt(-(n-t)/r))};var n}l(mt,"factory",ht),t.default=mt,t.factory=ht,Object.defineProperty(t,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).cdf={});
//# sourceMappingURL=browser.js.map
