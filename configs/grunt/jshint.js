var grunt = require('grunt');

module.exports = {
  options: {
    jshintrc: 'configs/linters/.jshintrc'
  },

  plugin: {
    src: ['src/plugin/scripts/**/*.js']
  },

  demo: {
    src: ['src/demo/scripts/**/*.js']
  }
};