var grunt = require('grunt');

module.exports = {
  page_styles: {
    files: [
      {
        expand: true,
        cwd: './',
        flatten: true,
        src: ['<%= settings.assetsPath %>dist/css/*.*'],
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
        src: ['<%= settings.assetsPath %>dist/js/*.*'],
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
        src: ['<%= settings.assetsPath %>dist/favicons/*.*'],
        dest: 'assets/page/favicons'
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