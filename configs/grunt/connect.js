var grunt = require('grunt'),
    rewriteModule = require('http-rewrite-middleware');

module.exports = {
  server: {
    options: {
      port: grunt.pluginData.common.port,
      base: '.',
      livereload: false
    }
  }
};