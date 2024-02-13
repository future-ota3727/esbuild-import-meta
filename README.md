# esbuild-import-meta
Sample project showing that import.meta.url does not work properly under esbuild in Node.js

## Installation

```bash
npm install
```

## Case1: output format is ESModule

```bash
npm run esm
```

Expected Error

```
node:internal/modules/cjs/loader:933
  const err = new Error(message);
              ^

Error: Cannot find module '.'
```

## Case2: output format is CommonJS

```bash
npm run cjs
```

Expected Error

```
node:internal/modules/cjs/loader:1224
    throw new ERR_INVALID_ARG_VALUE('filename', filename, createRequireError);
    ^

TypeError [ERR_INVALID_ARG_VALUE]: The argument 'filename' must be a file URL object, file URL string, or absolute path 
```
