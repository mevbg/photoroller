module.exports = function(grunt) {
  var path = require('path'),
      assets = grunt.file.exists('../assets.json') ?
               grunt.file.readJSON('../assets.json').path :
               'node_modules/my-jquery-plugins-assets/',
      common = grunt.file.readJSON(assets + 'configs/common.json'),
      pkg = grunt.file.readJSON('package.json'),
      settings = grunt.file.readJSON('configs/settings.json'),
      banner = require(assets + 'configs/banner'),
      env = grunt.option('target') || 'dev',
      prod = env === 'prod';

  grunt.pluginData = {
    assets: assets,
    pkg: pkg,
    common: common,
    settings: settings,
    prod: prod,
    env: env,

    envPath: !prod ?
             'assets/page/' :
             'https://jquery-plugins.' + common.domain + '/',

    banner: banner,

    domain: pkg.name.toLowerCase() + '.' + common.domain
  };

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'configs/grunt'),
    data: grunt.pluginData
  });

  grunt.registerTask('build', function() {
    grunt.task.run(['concurrent:build']);
    grunt.task.run(['concurrent:' + env]);
  });
};
