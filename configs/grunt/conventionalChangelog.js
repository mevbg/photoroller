var grunt = require('grunt');

module.exports = {
  options: {
    changelogOpts: {
      preset: 'angular'
    },
    context: {
      linkCompare: false
    }
  },
  release: {
    src: 'CHANGELOG.md'
  }
};