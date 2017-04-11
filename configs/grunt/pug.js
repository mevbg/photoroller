var grunt = require('grunt');

module.exports = {
  options: {
    pretty: !grunt.pluginData.prod,
    data: grunt.pluginData
  },

  page: {
    files: {
      'index.html': '<%= assets %>src/markup/index.pug'
    }
  }
};