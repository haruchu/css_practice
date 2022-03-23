module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        cacheDirectory: true,
        presets: [require.resolve('@emotion/babel-preset-css-prop')],
      },
    });
    return config;
  },
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}