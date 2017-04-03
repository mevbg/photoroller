var grunt = require('grunt');

module.exports = {
  options: {
    files: [
      'package.json',
      'bower.json'
    ],
    updateConfigs: ['pkg'],
    commit: false,
    commitMessage: 'Release v%VERSION%',
    commitFiles: ['-a'],
    createTag: true,
    tagName: 'v%VERSION%',
    tagMessage: 'Version %VERSION%',
    push: true,
    pushTo: 'origin',
    gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
    globalReplace: true,
    prereleaseName: false,
    regExp: false
  }
};