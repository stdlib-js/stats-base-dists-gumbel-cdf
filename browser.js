// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function i(r,t,e){var i=!1,a=t-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var t,n,c;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!e(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==t)&&(c=4294967295+c+1),c<0?(n=(-c).toString(t),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(t),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,v=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var t,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((t=r.precision)>0&&(t-=1),n=i.toExponential(t)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,b,"$1e"),n=p.call(n,v,"e"),n=p.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,g,"$1."),n=p.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function A(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function F(r,t,e){var n=t-r.length;return n<0?r:r=e?r+A(n):A(n)+r}var I=String.fromCharCode,N=isNaN,E=Array.isArray;function _(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function T(r){var t,e,n,a,o,f,l,s,p;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(u(n=r[s]))f+=n;else{if(t=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(a=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,N(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,N(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!N(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=N(o)?String(n.arg):I(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=F(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function j(r){var t,e,n,i;for(e=[],i=0,n=S.exec(r);n;)(t=r.slice(i,S.lastIndex-n[0].length)).length&&e.push(t),e.push(U(n)),i=S.lastIndex,n=S.exec(r);return(t=r.slice(i)).length&&e.push(t),e}function x(r){return"string"==typeof r}function k(r){var t,e;if(!x(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[j(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return T.apply(null,t)}var O=Object.prototype,V=O.toString,G=O.__defineGetter__,H=O.__defineSetter__,W=O.__lookupGetter__,$=O.__lookupSetter__,L=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(W.call(r,t)||$.call(r,t)?(n=r.__proto__,r.__proto__=O,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),a="get"in e,o="set"in e,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&G&&G.call(r,t,e.get),o&&H&&H.call(r,t,e.set),r};function P(r,t,e){L(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function C(r){return r!=r}var R=Math.floor,Y=Math.ceil;function Z(r){return r<0?Y(r):R(r)}var M=Number,X=M.NEGATIVE_INFINITY,z=Number.POSITIVE_INFINITY,q=Number.POSITIVE_INFINITY,B=M.NEGATIVE_INFINITY,D=Number.POSITIVE_INFINITY,J=M.NEGATIVE_INFINITY;function K(r){return r===D||r===J}var Q,rr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),tr=Object.prototype.toString,er=Object.prototype.hasOwnProperty,nr="function"==typeof Symbol?Symbol:void 0,ir="function"==typeof nr?nr.toStringTag:"",ar=rr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,i,a;if(null==r)return tr.call(r);e=r[ir],a=ir,t=null!=(i=r)&&er.call(i,a);try{r[ir]=void 0}catch(t){return tr.call(r)}return n=tr.call(r),t?r[ir]=e:delete r[ir],n}:function(r){return tr.call(r)},or="function"==typeof Uint32Array,cr="function"==typeof Uint32Array?Uint32Array:null,ur="function"==typeof Uint32Array?Uint32Array:void 0;Q=function(){var r,t,e;if("function"!=typeof cr)return!1;try{t=new cr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(or&&e instanceof Uint32Array||"[object Uint32Array]"===ar(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr,lr=Q,sr="function"==typeof Float64Array,pr="function"==typeof Float64Array?Float64Array:null,yr="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,t,e;if("function"!=typeof pr)return!1;try{t=new pr([1,3.14,-3.14,NaN]),e=t,r=(sr&&e instanceof Float64Array||"[object Float64Array]"===ar(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var dr,gr=fr,hr="function"==typeof Uint8Array,wr="function"==typeof Uint8Array?Uint8Array:null,vr="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,t,e;if("function"!=typeof wr)return!1;try{t=new wr(t=[1,3.14,-3.14,256,257]),e=t,r=(hr&&e instanceof Uint8Array||"[object Uint8Array]"===ar(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var br,mr=dr,Ar="function"==typeof Uint16Array,Fr="function"==typeof Uint16Array?Uint16Array:null,Ir="function"==typeof Uint16Array?Uint16Array:void 0;br=function(){var r,t,e;if("function"!=typeof Fr)return!1;try{t=new Fr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Ar&&e instanceof Uint16Array||"[object Uint16Array]"===ar(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ir:function(){throw new Error("not implemented")};var Nr,Er={uint16:br,uint8:mr};(Nr=new Er.uint16(1))[0]=4660;var _r,Tr,Sr=52===new Er.uint8(Nr.buffer)[0];!0===Sr?(_r=1,Tr=0):(_r=0,Tr=1);var Ur={HIGH:_r,LOW:Tr},jr=new gr(1),xr=new lr(jr.buffer),kr=Ur.HIGH,Or=Ur.LOW;function Vr(r,t,e,n){return jr[0]=r,t[n]=xr[kr],t[n+e]=xr[Or],t}function Gr(r){return Vr(r,[0,0],1,0)}P(Gr,"assign",Vr);var Hr,Wr="function"==typeof Float64Array,$r="function"==typeof Float64Array?Float64Array:null,Lr="function"==typeof Float64Array?Float64Array:void 0;Hr=function(){var r,t,e;if("function"!=typeof $r)return!1;try{t=new $r([1,3.14,-3.14,NaN]),e=t,r=(Wr&&e instanceof Float64Array||"[object Float64Array]"===ar(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Lr:function(){throw new Error("not implemented")};var Pr=!0===Sr?1:0,Cr=new Hr(1),Rr=new lr(Cr.buffer);function Yr(r){return Cr[0]=r,Rr[Pr]}var Zr,Mr,Xr,zr="function"==typeof Float64Array,qr="function"==typeof Float64Array?Float64Array:null,Br="function"==typeof Float64Array?Float64Array:void 0;Zr=function(){var r,t,e;if("function"!=typeof qr)return!1;try{t=new qr([1,3.14,-3.14,NaN]),e=t,r=(zr&&e instanceof Float64Array||"[object Float64Array]"===ar(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Br:function(){throw new Error("not implemented")},!0===Sr?(Mr=1,Xr=0):(Mr=0,Xr=1);var Dr={HIGH:Mr,LOW:Xr},Jr=new Zr(1),Kr=new lr(Jr.buffer),Qr=Dr.HIGH,rt=Dr.LOW;function tt(r,t){return Kr[Qr]=r,Kr[rt]=t,Jr[0]}var et=[0,0];function nt(r,t,e,n){return C(r)||K(r)?(t[n]=r,t[n+e]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}P((function(r){return nt(r,[0,0],1,0)}),"assign",nt);var it,at,ot,ct="function"==typeof Float64Array,ut="function"==typeof Float64Array?Float64Array:null,ft="function"==typeof Float64Array?Float64Array:void 0;it=function(){var r,t,e;if("function"!=typeof ut)return!1;try{t=new ut([1,3.14,-3.14,NaN]),e=t,r=(ct&&e instanceof Float64Array||"[object Float64Array]"===ar(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ft:function(){throw new Error("not implemented")},!0===Sr?(at=1,ot=0):(at=0,ot=1);var lt={HIGH:at,LOW:ot},st=new it(1),pt=new lr(st.buffer),yt=lt.HIGH,dt=lt.LOW;function gt(r,t,e,n){return st[0]=r,t[n]=pt[yt],t[n+e]=pt[dt],t}function ht(r){return gt(r,[0,0],1,0)}P(ht,"assign",gt);var wt=[0,0],vt=[0,0];function bt(r,t){var e,n,i,a,o,c;return 0===t||0===r||C(r)||K(r)?r:(nt(r,wt,1,0),t+=wt[1],t+=function(r){var t=Yr(r);return(t=(2146435072&t)>>>20)-1023|0}(r=wt[0]),t<-1074?(i=0,a=r,Gr.assign(i,et,1,0),o=et[0],o&=2147483647,c=Yr(a),tt(o|=c&=2147483648,et[1])):t>1023?r<0?B:q:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,ht.assign(r,vt,1,0),e=vt[0],e&=2148532223,n*tt(e|=t+1023<<20,vt[1])))}var mt=1.4426950408889634,At=1/(1<<28);function Ft(r){var t;return C(r)||r===z?r:r===X?0:r>709.782712893384?z:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<At?1+r:function(r,t,e){var n,i,a,o;return bt(1-(t-(n=r-t)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),e)}(r-.6931471803691238*(t=Z(r<0?mt*r-.5:mt*r+.5)),1.9082149292705877e-10*t,t)}function It(r,t,e){return C(r)||C(t)||C(e)||e<=0?NaN:Ft(-Ft(-(r-t)/e))}return P(It,"factory",(function(r,t){return C(r)||C(t)||t<=0?(e=NaN,function(){return e}):function(e){return C(e)?NaN:Ft(-Ft(-(e-r)/t))};var e})),It},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).cdf=t();
//# sourceMappingURL=browser.js.map
