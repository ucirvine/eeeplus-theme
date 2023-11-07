<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>EEE+ Theme</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <link href="theme.css" rel="stylesheet">
</head>

<body>
<main role="main" class="container" id="eeeplus-theme-demo">

    <div class="row">
        <div class="col">
            <h1>EEE+ Theme</h1>
        </div>
    </div>

    <div class="row mt-3">
        <div class="col">
            <h2><a href="#colors">#</a>Generic Colors</h2>
        </div>
    </div>

    <?php
    $counter = 0;
    foreach($colorVariables as $variable) {
        if ($counter != 0 and $counter % 6 == 0) {
            echo '</div>';
        }
        if ($counter == 0 OR $counter % 6 == 0) { echo '<div class="row mt-2">'; } ?>

        <div class="col-2 bg-<?php echo $variable; ?>">
            <div class="m-2">
                <?php echo $variable; ?>
            </div>
        </div>
        <?php
        $counter++;
    }
    ?>
    </div>

    <div class="row mt-3">
        <div class="col">
            <h2><a href="#tool-colors">#</a>Tool Specific Colors</h2>
        </div>
    </div>

    <?php
    $counter = 0;
    foreach($toolColorVariables as $variable) {
        if ($counter != 0 and $counter % 6 == 0) {
            echo '</div>';
        }
        if ($counter == 0 OR $counter % 6 == 0) { echo '<div class="row mt-2">'; } ?>

        <div class="col-2 bg-<?php echo $variable; ?>">
            <div class="m-2">
                <?php echo $variable; ?>
            </div>
        </div>
        <?php
        $counter++;
    }
    ?>
    </div>

    <div class="row mt-3">
        <div class="col">
            <h2><a href="#buttons">#</a>Buttons</h2>
        </div>
    </div>


    <?php
    $counter = 0;
    foreach($buttonClassNames as $className) {
        if ($counter != 0 and $counter % 4 == 0) {
            echo '</div>';
        }
        if ($counter == 0 OR $counter % 4 == 0) { echo '<div class="row mt-2">'; } ?>


        <div class="pb-2 pr-1">
            <button class="btn <?php echo $className; ?>">
                <?php echo $buttonNames[$counter]; ?>
            </button>
        </div>
        <?php
        $counter++;
    }
    ?>
    </div>

    <?php
    foreach ($messageClassNames as $className) {
    ?>
        <div class="<?php echo $className; ?>">Message</div>
    <?php
    }
    ?>


</main>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</body>
</html>
