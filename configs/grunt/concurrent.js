var grunt = require('grunt'),

  // page markup
  pageMarkupTasks = ['pug:page'],

  // demo markup
  demoMarkupTasks = ['clean:demo_markup', 'copy:demo_markup'],

  // demo styles
  demoStylesTasks = ['sass:demo'],

  // demo scripts
  demoScriptsTasks = ['concat:demo', 'uglify:demo'],

  // demo scripts
  demoImagesTasks = ['clean:demo_images', 'copy:demo_images'],

  // plugin scripts
  pluginScriptsTasks = ['concat:plugin', 'uglify:plugin'],

  // plugin styles
  pluginStylesTasks = grunt.pluginData.prod ?
    ['sass:plugin', 'usebanner:plugin_styles', 'cssmin:plugin'] :
    ['sass:plugin', 'cssmin:plugin'];

module.exports = {
  build: [
    pageMarkupTasks,
    demoMarkupTasks,
    demoStylesTasks,
    demoScriptsTasks,
    demoImagesTasks,
    pluginScriptsTasks,
    pluginStylesTasks
  ],

  dev: [
    ['copy:page_styles'],
    ['copy:page_scripts'],
    ['copy:page_favicons']
  ],

  prod: [
    'htmlmin:demo'
  ],

  review: [
    'open:build',
    'open:repo',
    'open:prod'
  ]
};