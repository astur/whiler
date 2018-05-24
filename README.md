# whiler

Simple endless cycle. Like while(true) but async.

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]

## Install

```bash
npm i whiler
```

## Usage

Takes a function as a parameter and runs it in loop while function return a truthy value or promise of a truthy value. Resolves when function return a falsy value or promise of a falsy value. Rejects when function throws or rejects.

```js
const whiler = require('whiler');
whiler(someAsyncFunction).then(whatever);
```

## License

MIT

[npm-url]: https://npmjs.org/package/whiler
[npm-image]: https://badge.fury.io/js/whiler.svg
[travis-url]: https://travis-ci.org/astur/whiler
[travis-image]: https://travis-ci.org/astur/whiler.svg?branch=master