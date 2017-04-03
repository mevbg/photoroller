var grunt = require('grunt');

module.exports = {
  plugin_styles: {
    options: {
      banner: grunt.pluginData.prod ? '<%= banner %>' : ''
    },
    files: {
      src: ['dist/css/<%= pkg.name %>.css']
    }
  }
};