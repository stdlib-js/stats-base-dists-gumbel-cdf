// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,v=/(\..*[^0])0*e/;function b(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=l.call(n,v,"$1e"),n=l.call(n,w,"e"),n=l.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,y,"e-0$1"),r.alternate&&(n=l.call(n,d,"$1."),n=l.call(n,g,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,_=isNaN,E=Array.isArray;function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,t,n,a,o,u,f,s,l,p,y,d,g;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,s=0;s<r.length;s++)if("string"==typeof(n=r[s]))u+=n;else{if(e=void 0!==n.precision,!(n=U(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(a=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,d=n.padRight,g=void 0,(g=y-p.length)<0?p:p=d?p+m(g):m(g)+p)),u+=n.arg||"",f+=1}return u}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,i;for(t=[],i=0,n=S.exec(r);n;)(e=r.slice(i,S.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),i=S.lastIndex,n=S.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){var e,t;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return I.apply(null,e)}var j=Object.prototype,N=j.toString,T=j.__defineGetter__,O=j.__defineSetter__,V=j.__lookupGetter__,$=j.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=j,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,t.get),o&&O&&O.call(r,e,t.set),r};function H(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){return r!=r}var C=Math.floor,L=Math.ceil;function P(r){return r<0?L(r):C(r)}var R=Number.NEGATIVE_INFINITY,Z=Number.POSITIVE_INFINITY,M=1023,X=1023,Y=-1023,z=-1074;function q(r){return r===Z||r===R}var B,D=2147483648,J=2147483647,K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Q=Object.prototype.toString,rr=Object.prototype.hasOwnProperty,er="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof er?er.toStringTag:"",nr=K&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return Q.call(r);t=r[tr],a=tr,e=null!=(i=r)&&rr.call(i,a);try{r[tr]=void 0}catch(e){return Q.call(r)}return n=Q.call(r),e?r[tr]=t:delete r[tr],n}:function(r){return Q.call(r)},ir="function"==typeof Uint32Array,ar="function"==typeof Uint32Array?Uint32Array:null,or="function"==typeof Uint32Array?Uint32Array:void 0;B=function(){var r,e,t;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(ir&&t instanceof Uint32Array||"[object Uint32Array]"===nr(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var cr,ur=B,fr="function"==typeof Float64Array,sr="function"==typeof Float64Array?Float64Array:null,lr="function"==typeof Float64Array?Float64Array:void 0;cr=function(){var r,e,t;if("function"!=typeof sr)return!1;try{e=new sr([1,3.14,-3.14,NaN]),t=e,r=(fr&&t instanceof Float64Array||"[object Float64Array]"===nr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr,yr=cr,dr="function"==typeof Uint8Array,gr="function"==typeof Uint8Array?Uint8Array:null,hr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,e,t;if("function"!=typeof gr)return!1;try{e=new gr(e=[1,3.14,-3.14,256,257]),t=e,r=(dr&&t instanceof Uint8Array||"[object Uint8Array]"===nr(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var wr,vr=pr,br="function"==typeof Uint16Array,mr="function"==typeof Uint16Array?Uint16Array:null,Ar="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,e,t;if("function"!=typeof mr)return!1;try{e=new mr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(br&&t instanceof Uint16Array||"[object Uint16Array]"===nr(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var _r,Er={uint16:wr,uint8:vr};(_r=new Er.uint16(1))[0]=4660;var Ur,Ir,Sr=52===new Er.uint8(_r.buffer)[0];!0===Sr?(Ur=1,Ir=0):(Ur=0,Ir=1);var xr={HIGH:Ur,LOW:Ir},kr=new yr(1),Fr=new ur(kr.buffer),jr=xr.HIGH,Nr=xr.LOW;function Tr(r,e,t,n){return kr[0]=r,e[n]=Fr[jr],e[n+t]=Fr[Nr],e}function Or(r){return Tr(r,[0,0],1,0)}H(Or,"assign",Tr);var Vr,$r,Gr=!0===Sr?1:0,Hr=new yr(1),Wr=new ur(Hr.buffer);function Cr(r){return Hr[0]=r,Wr[Gr]}!0===Sr?(Vr=1,$r=0):(Vr=0,$r=1);var Lr={HIGH:Vr,LOW:$r},Pr=new yr(1),Rr=new ur(Pr.buffer),Zr=Lr.HIGH,Mr=Lr.LOW;function Xr(r,e){return Rr[Zr]=r,Rr[Mr]=e,Pr[0]}var Yr=[0,0],zr=22250738585072014e-324,qr=4503599627370496;function Br(r,e,t,n){return W(r)||q(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<zr?(e[n]=r*qr,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}H((function(r){return Br(r,[0,0],1,0)}),"assign",Br);var Dr=2146435072,Jr=2220446049250313e-31,Kr=2148532223,Qr=[0,0],re=[0,0];function ee(r,e){var t,n,i,a,o,c;return 0===e||0===r||W(r)||q(r)?r:(Br(r,Qr,1,0),r=Qr[0],e+=Qr[1],e+=function(r){var e=Cr(r);return(e=(e&Dr)>>>20)-M|0}(r),e<z?(i=0,a=r,Or.assign(i,Yr,1,0),o=Yr[0],o&=J,c=Cr(a),Xr(o|=c&=D,Yr[1])):e>X?r<0?R:Z:(e<=Y?(e+=52,n=Jr):n=1,Or.assign(r,re,1,0),t=re[0],t&=Kr,n*Xr(t|=e+M<<20,re[1])))}var te=.6931471803691238,ne=1.9082149292705877e-10,ie=1.4426950408889634,ae=709.782712893384,oe=-745.1332191019411,ce=1/(1<<28),ue=-ce;function fe(r){var e;return W(r)||r===Z?r:r===R?0:r>ae?Z:r<oe?0:r>ue&&r<ce?1+r:function(r,e,t){var n,i,a,o;return ee(1-(e-(n=r-e)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-(e=P(r<0?ie*r-.5:ie*r+.5))*te,e*ne,e)}function se(r,e,t){return W(r)||W(e)||W(t)||t<=0?NaN:fe(-fe(-(r-e)/t))}return H(se,"factory",(function(r,e){return W(r)||W(e)||e<=0?(t=NaN,function(){return t}):function(t){return W(t)?NaN:fe(-fe(-(t-r)/e))};var t})),se},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).cdf=e();
//# sourceMappingURL=index.js.map