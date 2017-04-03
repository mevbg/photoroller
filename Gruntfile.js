module.exports = function(grunt) {
  var path = require('path'),
      pkg = grunt.file.readJSON('package.json'),
      settings = grunt.file.readJSON('configs/settings.json'),
      env = grunt.option('target') || 'dev',
      prod = env === 'prod';

  grunt.pluginData = {
    pkg: pkg,
    settings: settings,
    prod: prod,
    env: env,

    envPath: !prod ?
      'assets/page/' :
      'http://assets.martinmetodiev.com/',

    banner: '/*! \n' +
            ' <%= pkg.title %> v<%= pkg.version %>\n' +
            ' <%= pkg.homepage%>\n' +
            '\n' +
            ' Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
            ' Licensed under the <%= pkg.license %> license.\n' +
            '*/\n',

    domain: pkg.name.toLowerCase() + '.martinmetodiev.com'
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