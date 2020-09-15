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

/**
 * Returns true if the line is a single class definition
 *
 * @param string $line
 * @return bool
 */
function isClassLine(string $line)
{
    if ((strpos($line, '.') === 0) and (strpos($line, ',') === false)) {
        return true;
    }
    return false;
}

/**
 * Given a SCSS class definition line, get the class name without "."
 *
 * @param string $scssLine
 * @return string
 */
function parseLineForClassName(string $scssLine): string
{
    list($className, $bracket) = explode(" ", $scssLine);
    return str_replace('.', '', $className);
}

/**
 * Get the button class names form the button source file
 *
 * @return array
 */
function getButtonClassNamesFromSourceForButtons()
{
    $buttonClassNames = [];

    $file = fopen('src/buttons.scss', 'r');
    while (!feof($file)) {
        $line = fgets($file);
        if (!isClassLine($line)) {
            continue;
        }
        $className = parseLineForClassName($line);
        if ($className === 'btn-sm') {
            // Add the two types of small buttons - primary and secondary
            $buttonClassNames[] = 'btn-primary '.parseLineForClassName($line);
            $buttonClassNames[] = 'btn-secondary '.parseLineForClassName($line);
        } else {
            $buttonClassNames[] = parseLineForClassName($line);
        }
    }
    fclose($file);

    // Add the disabled type of each button
    foreach ($buttonClassNames as $buttonClassName) {
        $buttonClassNames[] = 'disabled '.$buttonClassName;
    }

    return $buttonClassNames;
}

/**
 * Get the name of the button from the class name
 * because if we just use the class name as the name,
 * it would be too long.
 *
 * @param $classNames
 * @return array
 */
function getButtonNamesFromClassNames($classNames)
{
    $buttonNames = [];
    foreach ($classNames as $className) {
        switch ($className) {
            case 'btn-primary':
            case 'disabled btn-primary':
                $buttonNames[] = 'primary';
                break;
            case 'btn-secondary':
            case 'disabled btn-secondary':
                $buttonNames[] = 'secondary';
                break;
            case 'btn-primary btn-sm':
            case 'disabled btn-primary btn-sm':
                $buttonNames[] = 'small 1';
                break;
            case 'btn-secondary btn-sm':
            case 'disabled btn-secondary btn-sm':
                $buttonNames[] = 'small 2';
                break;
            default:
                $buttonNames[] = 'disabled';
                break;
        }
    }
    return $buttonNames;
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
$buttonClassNames = getButtonClassNamesFromSourceForButtons();
$buttonNames = getButtonNamesFromClassNames($buttonClassNames);

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
