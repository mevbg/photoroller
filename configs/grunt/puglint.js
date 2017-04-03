var grunt = require('grunt');

module.exports = {
  demo: {
    options: {
      config: {
        'extends': './configs/linters/.pug-lintrc'
      }
    },
    src: ['src/demo/markup/**/*.pug']
  }
};