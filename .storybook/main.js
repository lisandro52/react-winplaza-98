module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-knobs"
  ],
  webpackFinal: config => {
    return {
      ...config,
      plugins: config.plugins.filter(plugin => {
        if (plugin.constructor.name === 'ESLintWebpackPlugin') {
          return false
        }
        return true
      }),
    }
  },
}