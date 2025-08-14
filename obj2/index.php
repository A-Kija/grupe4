<?php

require __DIR__ . '/Page.php';
require __DIR__ . '/Article.php';


$article1 = new Article('5 dalykai');
$article2 = new Article('Didelis maišas su katėm');
$article3 = new Article();


echo '<pre>';

// var_dump($article1, $article2, $article3);

echo $article2->url;