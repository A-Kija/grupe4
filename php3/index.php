<?php

echo '<pre>';

for ($i = 1; $i < 6; $i++) {
    echo $i . '*';
}
echo '<br>';

foreach(range(1, 5) as $i) {
    echo $i . '*';
}

// print_r(range(1, 5));
// print_r(range('a', 'j'));
// print_r(range('a', 'Z'));

$mas5X5 = [];

for ($i = 0; $i < 5; $i++) {
    $mas5X5[$i] = [];
    $ilgis = rand(0, 4);
    if ($ilgis) {
        for ($j = 0; $j < $ilgis; $j++) {
            $mas5X5[$i][] = rand(10, 99);
        }
    }
    else {
        $mas5X5[$i] = rand(10, 99);
    }
}

// print_r($mas5X5);

$sum1 = 0;


foreach($mas5X5 as $v1) {
    if (is_array($v1)) {
        foreach($v1 as $v2) {
            $sum1 += $v2;
        }
    }
    else {
        $sum1 += $v1;
    }
}

echo "<h2>Suma: $sum1 </h2>";


// Padaryti random raidžių nuo "a" iki "k" generatorių;

$raide = range('a', 'k')[rand(0, 10)];

$r = range('a', 'k');
shuffle($r);
$raide2 = array_shift($r);

echo "<h2>Raide: $raide $raide2 </h2>";


// sukurti masyva is 51 atsitiktines raides nuo "a" iki "z"

$raides = range('a', 'z');
$kiekis = count($raides) - 1;
$raidMas = [];

for ($i = 0; $i < 51; $i++) {
    $raidMas[] = $raides[rand(0, $kiekis)];
}

print_r($raidMas);

// rasti kokių raidžių yra daugiausia