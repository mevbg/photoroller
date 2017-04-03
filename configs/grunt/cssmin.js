var grunt = require('grunt');

module.exports = {
  options: {
    sourceMap: true,
    sourceMapInlineSources: true,
    keepSpecialComments: '*',
    format: {
      breaks: {
        afterComment: true
      }
    }
  },

  plugin: {
    files: {
      'dist/css/<%= pkg.name.toLowerCase() %>.min.css': ['dist/css/<%= pkg.name.toLowerCase() %>.css']
    }
  }
};