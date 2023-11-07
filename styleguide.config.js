const path = require('path');
module.exports = {
  skipComponentsWithoutExample: true,
  styleguideDir: 'docs',
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
  sections: [
    {
      name: 'Intro',
      sections: [
        {
          name: 'Why a library for this?',
          content: 'src/docs/why.md',
        },
        {
          name: 'Installation',
          content: 'src/docs/installation.md',
        },
        {
          name: 'Configuration',
          content: 'src/docs/configuration.md',
        },
      ],
    },
    {
      name: 'Components API',
      components: 'src/components/**/*.tsx',
    },
  ],
};
