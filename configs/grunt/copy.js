var grunt = require('grunt');

module.exports = {
  page_styles: {
    files: [
      {
        expand: true,
        cwd: './',
        flatten: true,
        src: ['<%= assets %>dist/css/*.*'],
        dest: 'assets/page/css'
      }
    ]
  },

  page_scripts: {
    files: [
      {
        expand: true,
        cwd: './',
        flatten: true,
        src: ['<%= assets %>dist/js/*.*'],
        dest: 'assets/page/js'
      }
    ]
  },

  page_favicons: {
    files: [
      {
        expand: true,
        cwd: './',
        flatten: true,
        src: ['<%= assets %>dist/favicons/*.*'],
        dest: 'assets/page/favicons'
      }
    ]
  },

  demo_markup: {
    files: [
      {
        src: ['src/demo/markup/demo.html'],
        dest: 'assets/demo/demo.html'
      }
    ]
  },

  demo_images: {
    files: [
      {
        expand: true,
        cwd: './src/demo/images/',
        src: ['**/*.*'],
        dest: 'assets/demo/images'
      }
    ]
  }
};