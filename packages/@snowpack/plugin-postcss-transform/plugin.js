const execa = require('execa');

module.exports = function postcssTransformPlugin(_, options) {
  return {
    name: '@snowpack/postcss-transform',
    async transform({fileExt, contents}) {
      const {input = ['.css'], config, sourceMaps = true} = options;
      if (!input.includes(fileExt)) return;

      const flags = [];
      if (config) flags.push(`--config ${config}`);

      const {stdout} = await execa('postcss', flags, {
        cwd: process.cwd(),
        input: contents,
      });

      if (stdout) return stdout;
    },
  };
};
