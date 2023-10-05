const path = require('path');
module.exports = {
  components: 'src/components/**/*.tsx',
  styleguideComponents: {
    StyleGuideRenderer: path.join(
      __dirname,
      'src/styleguide/style-guide-renderer.tsx'
    ),
  },
};
