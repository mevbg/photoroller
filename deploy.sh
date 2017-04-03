#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

# Define variables
PRODUCTION_BRANCH="prod"
PAGES_BRANCH="gh-pages"
DEPLOY_DIR="deploy_dir"
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`

# Clone a working repository and get inside
git clone $REPO $DEPLOY_DIR
cd $DEPLOY_DIR

# Change the remote url from https:// to git@
git remote set-url origin $SSH_REPO

# Set user data
git config user.name "Travis CI"
git config user.email "$COMMIT_AUTHOR_EMAIL"

# Create a .gitignore that ignores node_modules, deploy_key and itself
printf 'node_modules/\n.gitignore\ndeploy_key' > .gitignore

# Install Grunt and all dependencies
npm install -g grunt-cli
npm install

# Get the deploy key by using Travis's stored variables to decrypt deploy_key.enc
ENCRYPTED_KEY_VAR="encrypted_${ENCRYPTION_LABEL}_key"
ENCRYPTED_IV_VAR="encrypted_${ENCRYPTION_LABEL}_iv"
ENCRYPTED_KEY=${!ENCRYPTED_KEY_VAR}
ENCRYPTED_IV=${!ENCRYPTED_IV_VAR}
openssl aes-256-cbc -K $ENCRYPTED_KEY -iv $ENCRYPTED_IV -in deploy_key.enc -out deploy_key -d
chmod 600 deploy_key
eval `ssh-agent -s`
ssh-add deploy_key

# Create a brand new empty page branch
git checkout --orphan $PAGES_BRANCH

# Unstage everything (just in case)
git reset

# Create a CNAME file
grunt shell:domain

# Stage everything and make an initial commit
git add .
git commit -m "Deploy to GitHub Pages: ${SHA}"

# Remove the remote page branch
git push origin --delete $PAGES_BRANCH

# Push the new page branch to origin
git push $SSH_REPO $PAGES_BRANCH