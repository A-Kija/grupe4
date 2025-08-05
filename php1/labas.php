<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>
    <?php
        $pirmas = 1;
        $antras = 8;
        echo($pirmas + $antras);
        $antras = 30;
        echo $pirmas + $antras;
    ?>
    </h1>
    <p>
        <?php
        echo str_repeat('Bebras ', 100);
        ?>
    </p>
    <p>They are primarily found in North America and Europe, living in freshwater habitats.</p>
</body>
</html>
<?php

echo 'galas';