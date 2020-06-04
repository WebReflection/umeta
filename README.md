# <em>µ</em>meta

[![Build Status](https://travis-ci.com/WebReflection/umeta.svg?branch=master)](https://travis-ci.com/WebReflection/umeta) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/umeta/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/umeta?branch=master)

A _micro_ helper for `import.meta` data.

```js
import umeta from 'umeta';

const {dirName, fileName, require} = umeta(import.meta);
```

The `dirName` and `fileName` respectively represent `__dirname` and `__filename`, while the `require` utility helps importing conditionally, or on demand, CommonJS friendly modules.

### How to transform `import.meta` for CommonJS ?

There are at least two options:

  * [ascjs](https://github.com/WebReflection/ascjs/#readme), based on `@babel/parser`
  * [ucjs](https://github.com/WebReflection/ucjs/#readme), based on `@babel/core` and with minimal dependencies (compatible with dynamic `import(...)` too)
