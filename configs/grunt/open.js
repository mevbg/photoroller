var grunt = require('grunt');

module.exports = {
  dev : {
    app: 'Google Chrome',
    path: 'http://localhost:<%= settings.port %>'
  },

  prod : {
    app: 'Google Chrome',
    path: '<%= pkg.homepage %>'
  },

  build: {
    app: 'Google Chrome',
    path: 'https://travis-ci.org/<%= settings.githubUsername %>/<%= pkg.name %>/builds'
  },

  repo: {
    app: 'Google Chrome',
    path: 'https://github.com/<%= settings.githubUsername %>/<%= pkg.name %>'
  }
};