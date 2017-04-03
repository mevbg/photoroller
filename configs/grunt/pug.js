var grunt = require('grunt');

module.exports = {
  options: {
    pretty: !grunt.pluginData.prod,
    data: {
      debug: !grunt.pluginData.prod,
      pkg: grunt.pluginData.pkg,
      envPath: grunt.pluginData.envPath
    }
  },

  demo: {
    files: {
      'index.html': 'src/demo/markup/index.pug'
    }
  }
};