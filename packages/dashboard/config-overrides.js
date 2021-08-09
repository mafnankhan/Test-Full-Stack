module.exports = function override(config, env) {
  // disable eslint and typescript checks so the project compiles
  config.plugins = config.plugins.filter(
    (plugin) =>
      !plugin.constructor.name.toLowerCase().includes('eslint') &&
      !plugin.constructor.name.toLowerCase().includes('tscheck'),
  );

  // fix image require breaking change
  // @see https://github.com/facebook/create-react-app/pull/9934
  config.module.rules = config.module.rules.map((rule) => {
    if (rule && rule.oneOf) {
      rule.oneOf = rule.oneOf.map((oneOf) => {
        if (
          oneOf.loader &&
          (oneOf.loader.toString().includes('/url-loader/') ||
            oneOf.loader.toString().includes('/file-loader/'))
        ) {
          oneOf.options = oneOf.options || {};
          oneOf.options.esModule = false;
        }

        return oneOf;
      });
    }

    return rule;
  });

  return config;
};
