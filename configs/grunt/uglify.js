var grunt = require('grunt');

module.exports = {
  options: {
    compress: {
      drop_debugger: grunt.pluginData.prod,
      drop_console: grunt.pluginData.prod
    },
    preserveComments: false,
    quoteStyle: 1
  },

  plugin: {
    options: {
      banner: grunt.pluginData.prod ? '<%= banner %>\n' : '',
      sourceMap: true
    },
    src:  'dist/js/jquery.<%= pkg.name.toLowerCase() %>.js',
    dest: 'dist/js/jquery.<%= pkg.name.toLowerCase() %>.min.js'
  },

  demo: {
    options: {
      sourceMap: !grunt.pluginData.prod
    },
    src:  'assets/demo/js/demo_bundle.js',
    dest: 'assets/demo/js/demo.js'
  }
};