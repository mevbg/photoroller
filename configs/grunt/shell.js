var grunt = require('grunt');

module.exports = {
  feature: {
    command: [
      'read -p "Commit message: " msg',
      'FEATURE_BRANCH="$(git rev-parse --abbrev-ref HEAD)"',
      'git checkout dev',
      'git merge --squash ${FEATURE_BRANCH} && git reset',
      'git add . && git commit -m "$msg"',
      'git branch -D ${FEATURE_BRANCH}'
    ].join('&&')
  },

  prepare: {
    command: 'git checkout -b release dev'
  },

  changelog: {
    command: [
      'touch CHANGELOG.md',
      'grunt conventionalChangelog',
      'git add CHANGELOG.md',
      'git commit -m "CHANGELOG"'
    ].join('&&')
  },

  prod: {
    command: [
      'git checkout prod',
      'git merge --no-ff staging -m "Release v<%= pkg.version %>"'
    ].join('&&')
  },

  dist: {
    command: [
      'grunt clean:all',
      'grunt build --target=prod',
      'git add "assets" "dist" "index.html" -f',
      'git commit -m "Distribution"'
    ].join('&&')
  },

  release: {
    command: [
      'git add . && git commit -m "v<%= pkg.version %>"',
      'git checkout -b prod origin/prod && git checkout -b staging prod',
      'git merge --no-ff release -m \'Merge branch "release" into "staging"\'',
      'grunt shell:changelog',
      'grunt shell:dist',
      'git checkout prod',
      'git merge --no-ff staging -m "Release v<%= pkg.version %>"',
      'grunt bump-commit',
      'git checkout dev',
      'git merge --no-ff release -m \'Merge branch "release" into "dev"\'',
      'git push',
      'git branch -D release && git branch -D staging && git branch -D prod',
      'grunt concurrent:review',
      'grunt build'
    ].join('&&')
  }
};