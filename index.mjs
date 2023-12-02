// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import{ndarray as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dapxsumpw@v0.1.0-esm/index.mjs";function n(e,n,t){var s;return e<=0?NaN:1===e||0===t?n[0]:n[s=t<0?(1-e)*t:0]+r(e-1,-n[s],n,t,s+t)/e}function t(e,n,t,s){return e<=0?NaN:1===e||0===t?n[s]:n[s]+r(e-1,-n[s],n,t,s+t)/e}e(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
