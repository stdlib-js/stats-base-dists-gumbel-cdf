// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,v=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=l.call(n,w,"$1e"),n=l.call(n,h,"e"),n=l.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,y,"e-0$1"),r.alternate&&(n=l.call(n,g,"$1."),n=l.call(n,v,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,_=isNaN,E=Array.isArray;function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,t,n,a,o,u,f,s,l,p,y,g,v;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,s=0;s<r.length;s++)if(n=r[s],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=U(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(a=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,g=n.padRight,v=void 0,(v=y-p.length)<0?p:p=g?p+m(v):m(v)+p)),u+=n.arg||"",f+=1}return u}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=S.exec(r);n;)(e=r.slice(i,S.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=S.lastIndex,n=S.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){var e,t;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return I.apply(null,e)}var N=Object.prototype,j=N.toString,T=N.__defineGetter__,O=N.__defineSetter__,V=N.__lookupGetter__,$=N.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===j.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,t.get),o&&O&&O.call(r,e,t.set),r};function H(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){return r!=r}var C=Math.floor,L=Math.ceil;function P(r){return r<0?L(r):C(r)}var R=Number.NEGATIVE_INFINITY,Z=Number.POSITIVE_INFINITY,M=1023,X=1023,Y=-1023,z=-1074;function q(r){return r===Z||r===R}var B=2147483648,D=2147483647;var J="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var K=Object.prototype.toString;var Q=Object.prototype.hasOwnProperty;var rr="function"==typeof Symbol?Symbol:void 0,er="function"==typeof rr?rr.toStringTag:"";var tr=J&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return K.call(r);t=r[er],a=er,e=null!=(i=r)&&Q.call(i,a);try{r[er]=void 0}catch(e){return K.call(r)}return n=K.call(r),e?r[er]=t:delete r[er],n}:function(r){return K.call(r)},nr="function"==typeof Uint32Array;var ir="function"==typeof Uint32Array?Uint32Array:null;var ar,or="function"==typeof Uint32Array?Uint32Array:void 0;ar=function(){var r,e,t;if("function"!=typeof ir)return!1;try{e=new ir(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(nr&&t instanceof Uint32Array||"[object Uint32Array]"===tr(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var cr=ar,ur="function"==typeof Float64Array;var fr="function"==typeof Float64Array?Float64Array:null;var sr,lr="function"==typeof Float64Array?Float64Array:void 0;sr=function(){var r,e,t;if("function"!=typeof fr)return!1;try{e=new fr([1,3.14,-3.14,NaN]),t=e,r=(ur&&t instanceof Float64Array||"[object Float64Array]"===tr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr=sr,yr="function"==typeof Uint8Array;var gr="function"==typeof Uint8Array?Uint8Array:null;var vr,dr="function"==typeof Uint8Array?Uint8Array:void 0;vr=function(){var r,e,t;if("function"!=typeof gr)return!1;try{e=new gr(e=[1,3.14,-3.14,256,257]),t=e,r=(yr&&t instanceof Uint8Array||"[object Uint8Array]"===tr(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var hr=vr,wr="function"==typeof Uint16Array;var br="function"==typeof Uint16Array?Uint16Array:null;var mr,Ar="function"==typeof Uint16Array?Uint16Array:void 0;mr=function(){var r,e,t;if("function"!=typeof br)return!1;try{e=new br(e=[1,3.14,-3.14,65536,65537]),t=e,r=(wr&&t instanceof Uint16Array||"[object Uint16Array]"===tr(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var _r,Er={uint16:mr,uint8:hr};(_r=new Er.uint16(1))[0]=4660;var Ur,Ir,Sr=52===new Er.uint8(_r.buffer)[0];!0===Sr?(Ur=1,Ir=0):(Ur=0,Ir=1);var kr={HIGH:Ur,LOW:Ir},xr=new pr(1),Fr=new cr(xr.buffer),Nr=kr.HIGH,jr=kr.LOW;function Tr(r,e,t,n){return xr[0]=r,e[n]=Fr[Nr],e[n+t]=Fr[jr],e}function Or(r){return Tr(r,[0,0],1,0)}H(Or,"assign",Tr);var Vr,$r,Gr=!0===Sr?1:0,Hr=new pr(1),Wr=new cr(Hr.buffer);function Cr(r){return Hr[0]=r,Wr[Gr]}!0===Sr?(Vr=1,$r=0):(Vr=0,$r=1);var Lr={HIGH:Vr,LOW:$r},Pr=new pr(1),Rr=new cr(Pr.buffer),Zr=Lr.HIGH,Mr=Lr.LOW;function Xr(r,e){return Rr[Zr]=r,Rr[Mr]=e,Pr[0]}var Yr=[0,0];var zr=22250738585072014e-324;var qr=4503599627370496;function Br(r,e,t,n){return W(r)||q(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<zr?(e[n]=r*qr,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}H((function(r){return Br(r,[0,0],1,0)}),"assign",Br);var Dr=2146435072;var Jr=2220446049250313e-31,Kr=2148532223,Qr=[0,0],re=[0,0];function ee(r,e){var t,n,i,a,o,c;return 0===e||0===r||W(r)||q(r)?r:(Br(r,Qr,1,0),r=Qr[0],e+=Qr[1],e+=function(r){var e=Cr(r);return(e=(e&Dr)>>>20)-M|0}(r),e<z?(i=0,a=r,Or.assign(i,Yr,1,0),o=Yr[0],o&=D,c=Cr(a),Xr(o|=c&=B,Yr[1])):e>X?r<0?R:Z:(e<=Y?(e+=52,n=Jr):n=1,Or.assign(r,re,1,0),t=re[0],t&=Kr,n*Xr(t|=e+M<<20,re[1])))}var te=.6931471803691238,ne=1.9082149292705877e-10,ie=1.4426950408889634,ae=709.782712893384,oe=-745.1332191019411,ce=1/(1<<28),ue=-ce;function fe(r){var e;return W(r)||r===Z?r:r===R?0:r>ae?Z:r<oe?0:r>ue&&r<ce?1+r:function(r,e,t){var n,i,a,o;return ee(1-(e-(n=r-e)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-(e=P(r<0?ie*r-.5:ie*r+.5))*te,e*ne,e)}function se(r,e,t){return W(r)||W(e)||W(t)||t<=0?NaN:fe(-fe(-((r-e)/t)))}function le(r,e){return W(r)||W(e)||e<=0?(t=NaN,function(){return t}):function(t){if(W(t))return NaN;return fe(-fe(-((t-r)/e)))};var t}H(se,"factory",le);export{se as default,le as factory};
//# sourceMappingURL=mod.js.map
