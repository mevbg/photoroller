var grunt = require('grunt');

module.exports = {
  plugin: {
    options: {
      banner: grunt.pluginData.prod ? '<%= banner %>\n' : ''
    },
    src: ['src/plugin/scripts/jquery.<%= pkg.name.toLowerCase() %>.js'],
    dest: 'dist/js/jquery.<%= pkg.name.toLowerCase() %>.js'
  },

  demo: {
    src: ['src/demo/scripts/*.js'],
    dest: 'assets/demo/js/demo_bundle.js'
  }
};