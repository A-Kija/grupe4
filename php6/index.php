<?php

$A = 'Labas';
$B = 'Bebrai';
$C = 'Ate';

echo $A . ' ' . $B . ' ' . $C . '<br>';

$C .= $A; // $C = $C . $A

echo $C;

require __DIR__ . '/Planas.php';
require __DIR__ . '/Planas2.php';
require __DIR__ . '/Atvaizdavimas.php';
require __DIR__ . '/Matematika.php';
require __DIR__ . '/SuKonstanta.php';

$atv = new Matematika();

$atv->atvaizduotiSuma(8, 3);


echo Matematika::P2, Matematika::ATV;


$sk = new SuKonstanta();

$sk->paint();

// SuKonstanta::NAMES;
SuKonstanta::PRICES;
