const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  webpackFinal: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        src: path.resolve(__dirname, '../src'),
      },
    },
  }),
}
