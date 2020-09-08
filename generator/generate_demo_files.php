<?php

/**
 * Return true if the line is a comment or non variable line (e.g. empty space)
 *
 * @param string $line
 * @return bool
 */
function isVariableLine(string $line): bool
{
    if ((strpos($line, '/*') === false) and (strpos($line, '$') !== false)) {
        return true;
    }
    return false;
}

/**
 * Given a variable name (color variable), generate the background color line for it
 *
 * @param string $variableName
 * @return string
 */
function generateBackgroundLine(string $variableName): string
{
    return sprintf(
        ".bg-%s { background-color: $%s; }\n",
        $variableName,
        $variableName
    );
}

/**
 * Given a SCSS color line, get the variable name without "$"
 *
 * @param string $scssLine
 * @return string
 */
function parseLineForBackgroundVariableName(string $scssLine): string
{
    list($colorName, $hex) = explode(": ", $scssLine);
    return str_replace('$', '', $colorName);
}


/**
 * Generate the demo SCSS background color lines
 *
 * @param array $variableNames
 * @return array
 */
function generateDemoScssBackgroundColors (array $variableNames): array
{
    $printLines = [];

    foreach ($variableNames as $variableName) {
        $printLines[] = generateBackgroundLine($variableName);
    }

    return $printLines;
}

/**
 * Get the color variable names from the color source files
 *
 * @return array
 */
function getBackgroundColorVariableNamesFromSourceForColors()
{
    $colorVariables = [];
    $file = fopen('src/colors.scss', 'r');
    while (!feof($file)) {
        $line = fgets($file);
        if (!isVariableLine($line)) {
            continue;
        }
        $colorVariables[] = parseLineForBackgroundVariableName($line);
    }
    fclose($file);

    return $colorVariables;
}

/**
 * Get the color variable names from the color source files
 *
 * @return array
 */
function getBackgroundColorVariableNamesFromSourceForToolColors()
{
    $colorVariables = [];

    $file = fopen('src/tool-colors.scss', 'r');
    while (!feof($file)) {
        $line = fgets($file);
        if (!isVariableLine($line)) {
            continue;
        }
        $colorVariables[] = parseLineForBackgroundVariableName($line);
    }
    fclose($file);

    return $colorVariables;
}

/*
 * First generate the demo SCSS file to use in the index file
 */

$scssLines = [];
$scssLines[] = <<<SCSS
/* This is for the demo docs, don't really need to change much stuff here
 * unless adding new elements
 */

 @import 'colors.scss';
 @import 'tool-colors.scss';

 #eeeplus-theme-demo {

SCSS;

$colorVariables = getBackgroundColorVariableNamesFromSourceForColors();
$toolColorVariables = getBackgroundColorVariableNamesFromSourceForToolColors();

$scssLines = array_merge($scssLines, generateDemoScssBackgroundColors(
    array_merge(
        $colorVariables, $toolColorVariables
    )
));

$scssLines[] = "}\n";

file_put_contents('src/demo.scss', $scssLines);

ob_start();

require_once('index_template.php');

$template = ob_get_contents();

file_put_contents('docs/index.html', $template);
