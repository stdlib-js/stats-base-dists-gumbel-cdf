// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function r(t,n,r){return e(t)||e(n)||e(r)||r<=0?NaN:s(-s(-((t-n)/r)))}function i(t,r){return e(t)||e(r)||r<=0?n(NaN):function(n){if(e(n))return NaN;return s(-s(-((n-t)/r)))}}t(r,"factory",i);export{r as default,i as factory};
//# sourceMappingURL=index.mjs.map
