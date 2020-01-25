var grunt = require('grunt'),
  sass = require('node-sass'),
  fs = require('fs'),
  path = require('path'),
  mime = require('mime-types'),
  sassDataURI = require('lib-sass-data-uri'),
  nodeSassGlobbing = require('node-sass-globbing');

module.exports = {
  options: {
    implementation: sass,
    importer: nodeSassGlobbing,
    functions: Object.assign({}, sassDataURI)
  },

  plugin: {
    options: {
      outputStyle: 'expanded',
      sourceMap: false
    },
    files: {
      'dist/css/<%= pkg.name %>.css': 'src/plugin/styles/<%= pkg.name %>.scss'
    }
  },

  demo: {
    options: {
      outputStyle: 'compressed',
      sourceMap: !grunt.pluginData.prod
    },
    files: {
      'assets/demo/css/demo.css': 'src/demo/styles/demo.scss'
    }
  }
};
