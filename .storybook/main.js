const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials'],
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
