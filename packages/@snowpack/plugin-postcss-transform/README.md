# @snowpack/plugin-postcss

Run [PostCSS](https://github.com/postcss/postcss) on all `.css` files. Note that this will only transform the contents of existing CSS files, and can’t combine or generate new files. For this reason, it’s best to not use this in conjunction with `postcss-import` or other plugins that may duplicate styles.

### Usage

From a terminal, run the following:

```
npm install --save-dev @snowpack/plugin-postcss postcss postcss-cli
```

Then add this plugin to your Snowpack config:

```js
// snowpack.config.json
{
  "plugins": [
    ["@snowpack/plugin-postcss-transform", { "input": [".css"] }]
  ]
}
```

Lastly, add a `postcss.config.js` file to the root of your project as you would normally:

```js
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [cssnano(), postcssPresetEnv()],
};
```

### Plugin Options

| Name     |    Type    | Description                                                                                                |
| :------- | :--------: | :--------------------------------------------------------------------------------------------------------- |
| `input`  | `string[]` | File extensions to transform (default: `['.css']`)                                                         |
| `config` |  `string`  | (optional) Set a custom path to your PostCSS config (in case PostCSS has trouble loading it automatically) |
