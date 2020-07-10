# EEE+ Theme

This package it to ensure we are using consistent theme variables (and other shared assets) for the EEE+ suite of tools

## Installation

Install this like any other NPM package. See https://www.npmjs.com/package/@ucirvine/eeeplus-theme for more info

## How to contribute

### Requirements

**To make changes**
* GitHub.com account
* Write access to the `eeeplus-theme` on the `ucirvine` GitHub.com account

**To publish to the package**
* npmjs.com account
* Access to the `ucirvine` NPM account
* Added your NPM account to your command line by running `npm adduser` and following the prompts

### Making changes

1. Update any scss files you need. If you add a new file, be sure to add it to `gulpfile.js` so it gets merged
1. Run `npm build` to merge all the files into `dist/theme.scss`
1. Update `package.json` to increment the version number appropriately. The version number follows [SemVer](https://semver.org/) as with
   our other tools.
1. Commit the changes to a new branch and submit a pull request

### Publishing changes

Publish the changes via npm: `npm publish` -- Note the repository requires 2FA to be enabled for you to publish
