// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";var r=e,i=s;var a=n,d=e,m=s;var o=function(t,e,s){return r(t)||r(e)||r(s)||s<=0?NaN:i(-i(-((t-e)/s)))},l=function(t,e){return d(t)||d(e)||e<=0?a(NaN):function(s){if(d(s))return NaN;return m(-m(-((s-t)/e)))}};t(o,"factory",l);var p=o;export{p as default,l as factory};
//# sourceMappingURL=index.mjs.map
