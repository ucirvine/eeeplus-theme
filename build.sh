#!/bin/bash

####
# This file builds the EEEPlus theme. Be sure to run npm install before running this script.
####

# Merge SCSS files into the distributed theme file. See README for more details on merging.
cat 'src/colors.scss' > dist/theme.scss
cat 'src/tool-colors.scss' >> dist/theme.scss
cat 'src/typography.scss' >> dist/theme.scss
cat 'src/shortcuts.scss' >> dist/theme.scss
cat 'src/custom-error-pages.scss' >> dist/theme.scss
cat 'src/announcements.scss' >> dist/theme.scss
cat 'src/buttons.scss' >> dist/theme.scss
cat 'src/demo.scss' >> dist/theme.scss
cat 'src/messages.scss' >> dist/theme.scss
cat 'src/flexible-button-bypass.scss' >> dist/theme.scss
cat 'src/eeeplus-global-navbar.scss' >> dist/theme.scss

# Generate the demo theme files
sass --style=compressed dist/theme.scss > docs/theme.css
php generator/generate_demo_files.php
