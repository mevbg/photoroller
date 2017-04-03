var grunt = require('grunt');

module.exports = {
  demo_markup: {
    files: ['src/demo/markup/**/*.pug'],
    tasks: ['puglint:demo', 'clean:demo_markup', 'pug:demo']
  },

  demo_styles: {
    files: ['src/demo/styles/**/*.scss'],
    tasks: ['sasslint:demo', 'clean:demo_styles', 'sass:demo']
  },

  demo_scripts: {
    files: ['src/demo/scripts/**/*.js'],
    tasks: ['jshint:demo', 'clean:demo_scripts', 'concat:demo', 'uglify:demo']
  },

  demo_images: {
    files: ['src/demo/images/**/*.*'],
    tasks: ['clean:demo_images', 'copy:demo_images']
  },

  page_styles: {
    files: ['<%= settings.assetsPath %>dist/css/*.*'],
    tasks: ['clean:page_styles', 'copy:page_styles']
  },

  page_scripts: {
    files: ['<%= settings.assetsPath %>dist/js/*.*'],
    tasks: ['clean:page_scripts', 'copy:page_scripts']
  },

  page_favicons: {
    files: ['<%= settings.assetsPath %>dist/favicons/*.*'],
    tasks: ['clean:page_favicons', 'copy:page_favicons']
  },

  plugin_scripts: {
    files: ['src/plugin/scripts/**/*.js'],
    tasks: ['jshint:plugin', 'clean:plugin_scripts', 'concat:plugin', 'uglify:plugin']
  },

  plugin_styles: {
    files: ['src/plugin/styles/**/*.scss'],
    tasks: ['sasslint:plugin', 'clean:plugin_styles', 'sass:plugin', 'cssmin:plugin']
  }
};