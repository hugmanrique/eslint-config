# @hugmanrique/eslint-config

[![npm][npm]][npm-url]

My personal ESLint configuration based on [`eslint:recommended`](https://eslint.org/docs/rules/).
It includes [Prettier](https://prettier.io/) and is compatible with [React](https://reactjs.org/) and [webpack](https://webpack.js.org/).

## Install

```bash
$ npm install --save-dev eslint @hugmanrique/eslint-config
```

## Usage

Create an `.eslintrc` file in your project's root directory:

```json
{
  "extends": ["@hugmanrique/eslint-config"]
}
```

You can further [customize your config](https://eslint.org/docs/user-guide/configuring).

## License

[MIT](LICENSE) &copy; [Hugo Manrique](https://hugmanrique.me)

[npm]: https://img.shields.io/npm/v/@hugmanrique/eslint-config.svg
[npm-url]: https://npmjs.com/package/@hugmanrique/eslint-config