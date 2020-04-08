# <em>µ</em>meta

A _micro_ helper for `import.meta` data.

```js
import umeta from 'umeta';

const {dirName, fileName, require} = umeta(import.meta);
```

The `dirName` and `fileName` respectively represent `__dirname` and `__filename`, while the `require` utility helps importing conditionally, or on demand, CommonJS friendly modules.
