# @kutsan/config

[![npm](https://img.shields.io/npm/v/@kutsan/config.svg?style=flat-square)](https://www.npmjs.com/package/@kutsan/config)

> Sharable configurations files for tools that I use.

## Usage

```sh
npm install @kutsan/config --save-dev
```

### [prettier](https://github.com/prettier/prettier)

Use as is in your `prettier.config.js`,

```javascript
module.exports = require('@kutsan/config/prettier')
```

or override rules with spread operator, since [`prettier` doesn't support `extends` mechanic](https://github.com/prettier/prettier/issues/3146) at the present time.

```javascript
module.exports = {
	...require('@kutsan/config/prettier')
	tabWidth: 2,
	useTabs: false,
	semi: true
}
```

## License

GPL-3.0
