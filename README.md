<img width="100" src="https://github.com/kutsan/config/raw/master/.github/assets/logo.png" alt="Logo" />

# config

[![npm](https://img.shields.io/npm/v/@kutsan/config)](https://www.npmjs.com/package/@kutsan/config)

Sharable configurations files for tools that I use.

## Usage

```sh
npm install @kutsan/config --save-dev
```

### [eslint](https://github.com/eslint/eslint)

First, install `@rushstack/eslint-patch` to patch ESLint to support modern module resolver.

```
npm install @rushstack/eslint-patch --save-dev
```

Then, use in your `.eslintrc.js`.

```javascript
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: [
    require.resolve('@kutsan/config/eslint'),
    require.resolve('@kutsan/config/eslint/ts'),
    require.resolve('@kutsan/config/eslint/tsx')
  ]
}
```

### [prettier](https://github.com/prettier/prettier)

Use as is in your `prettier.config.js`.

```javascript
module.exports = require('@kutsan/config/prettier')
```

In order to override rules, use spread operator.

```javascript
module.exports = {
  ...require('@kutsan/config/prettier'),
  semi: true
}
```

### [stylelint](https://github.com/stylelint/stylelint)

Use with `extends` in your `stylelint.config.js`.

```javascript
module.exports = {
  extends: '@kutsan/config/stylelint'
}
```

## License

GPL-3.0
