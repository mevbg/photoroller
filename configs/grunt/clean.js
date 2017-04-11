var grunt = require('grunt');

module.exports = {
  all:            ['index.html', 'assets', 'dist'],

  plugin_scripts: ['dist/js'],
  plugin_styles:  ['dist/css'],

  demo_markup:    ['assets/demo/demo.html'],
  demo_styles:    ['assets/demo/css'],
  demo_scripts:   ['assets/demo/js'],
  demo_images:    ['assets/demo/images'],

  page_markup:    ['index.html'],
  page_styles:    ['assets/page/css'],
  page_scripts:   ['assets/page/js'],
  page_favicons:  ['assets/page/favicons']
};