# EEE+ Theme

This package it to ensure we are using consistent theme variables (and other shared assets) for the EEE+ suite of tools

## Installation

Install this like any other NPM package. See https://www.npmjs.com/package/@ucirvine/eeeplus-theme for more info

## How to contribute

### Requirements

**Software**
* PHP `^7.0`
* Yarn `^1.22`

**To make changes**
* GitHub.com account
* Write access to the `eeeplus-theme` on the `ucirvine` GitHub.com account

**To publish to the package**
* npmjs.com account
* Access to the `ucirvine` NPM account
* Added your NPM account to your command line by running `npm adduser` and following the prompts

### Making changes

1. Update any scss files you need. If you add a new file, do the following:
   1. Add it to `build.sh` to the bottom of the list of other SCSS files in the following format:
      `cat 'src/FILENMAME' >> dist/theme.scss`. Note that the files are added manually so that they are included in
      the correct order.
   2. Be sure to add a new line at the bottom of each file so that it does not stack into the previous file.
2. Run `build.sh` to merge all the files into `dist/theme.scss` and generate the demo docs.
3. Update `package.json` to increment the version number appropriately. The version number follows [SemVer](https://semver.org/) as with
   our other tools.
4. Commit the changes to a new branch and submit a pull request

**To test changes on a branch, not a release**  

If you're ever making updates to the theme package and want to test them out in a tool before you make a release,
run `npm install --save ucirvine/eeeplus-theme#branch-name` in whatever tool to use the branch instead of a release

### Publishing changes

Publish the changes via npm: `npm publish` -- Note the repository requires 2FA to be enabled for you to publish


