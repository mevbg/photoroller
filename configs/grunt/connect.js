var grunt = require('grunt'),
    rewriteModule = require('http-rewrite-middleware');

module.exports = {
  server: {
    options: {
      port: grunt.pluginData.settings.port,
      base: '.',
      livereload: false
    }
  }
};