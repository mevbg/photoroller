var grunt = require('grunt');

module.exports = {
  demo: {
    options: {
      removeComments: true,
      collapseWhitespace: true,
      minifyJS: true
    },
    expand: true,
    cwd: './',
    src: '*.html',
    dest: './'
  }
};