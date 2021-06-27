<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Gumbel][gumbel-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Gumbel][gumbel-distribution] random variable is

<!-- <equation class="equation" label="eq:gumbel_cdf" align="center" raw="F\left( x; \mu, \beta \right ) = e^{{-e^{{-(x-\mu )/\beta }}}}" alt="Cumulative distribution function for a Gumbel distribution."> -->

<div class="equation" align="center" data-raw-text="F\left( x; \mu, \beta \right ) = e^{{-e^{{-(x-\mu )/\beta }}}}" data-equation="eq:gumbel_cdf">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/stats/base/dists/gumbel/cdf/docs/img/equation_gumbel_cdf.svg" alt="Cumulative distribution function for a Gumbel distribution.">
    <br>
</div>

<!-- </equation> -->

where `mu` is the location parameter and `beta > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-gumbel-cdf
```

</section>

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats-base-dists-gumbel-cdf' );
```

#### cdf( x, mu, beta )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [Gumbel][gumbel-distribution] distribution with parameters `mu` (location parameter) and `beta` (scale parameter).

```javascript
var y = cdf( 10.0, 0.0, 3.0 );
// returns ~0.965

y = cdf( -2.0, 0.0, 3.0 );
// returns ~0.143

y = cdf( 0.0, 0.0, 1.0 );
// returns ~0.368
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 0.0, 1.0 );
// returns NaN

y = cdf( 0.0, NaN, 1.0 );
// returns NaN

y = cdf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 0.0, -1.0 );
// returns NaN

y = cdf( 2.0, 0.0, 0.0 );
// returns NaN
```

#### cdf.factory( mu, beta )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [Gumbel][gumbel-distribution] distribution with parameters `mu` (location parameter) and `beta` (scale parameter).

```javascript
var mycdf = cdf.factory( 0.0, 3.0 );

var y = mycdf( 10.0 );
// returns ~0.965

y = mycdf( -2.0 );
// returns ~0.143
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var cdf = require( '@stdlib/stats-base-dists-gumbel-cdf' );

var beta;
var mu;
var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    x = randu() * 10.0;
    mu = randu() * 10.0;
    beta = randu() * 10.0;
    y = cdf( x, mu, beta );
    console.log( 'x: %d, µ: %d, β: %d, F(x;µ,β): %d', x.toFixed( 4 ), mu.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-gumbel-cdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-gumbel-cdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-gumbel-cdf/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-gumbel-cdf/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-gumbel-cdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-gumbel-cdf?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-gumbel-cdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-gumbel-cdf/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-gumbel-cdf/main/LICENSE

[gumbel-distribution]: https://en.wikipedia.org/wiki/Gumbel_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

</section>

<!-- /.links -->
