const path = require('path');
module.exports = {
  skipComponentsWithoutExample: true,

  components: 'src/components/**/*.tsx',
  require: [path.resolve(__dirname, 'src/styleguide/setup.js')],
  styleguideComponents: {
    StyleGuideRenderer: path.join(
      __dirname,
      'src/styleguide/style-guide-renderer.tsx'
    ),
    TableOfContentsRenderer: path.join(
      __dirname,
      'src/styleguide/toc-renderer.tsx'
    ),
    // Wrapper: path.join(__dirname, 'src/styleguide/wrapper.tsx'),
  },
};
