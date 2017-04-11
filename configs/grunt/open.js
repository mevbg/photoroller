var grunt = require('grunt');

module.exports = {
  dev : {
    app: 'Google Chrome',
    path: 'http://localhost:<%= common.port %>'
  },

  prod : {
    app: 'Google Chrome',
    path: '<%= pkg.homepage %>'
  },

  build: {
    app: 'Google Chrome',
    path: 'https://travis-ci.org/<%= common.githubUsername %>/<%= pkg.name %>/builds'
  },

  repo: {
    app: 'Google Chrome',
    path: 'https://github.com/<%= common.githubUsername %>/<%= pkg.name %>'
  }
};