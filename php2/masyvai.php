<?php
echo '<pre>';

$mas1 = [1, 'bebras', 2]; // kintamojo tipas Array. NE objektas

$mas2 = $mas1; // Priskirimas pagal reiksme

print_r($mas1);

array_push($mas1, 'Barsukas'); // profai taip nedaro

// $mas1[] = $mas2[] = 'Vilkas'; // taip daro
$mas1[] = 'Vilkas'; // taip daro

array_unshift($mas1, 'Briedis');

$mas2[101] = 'Tigras';

$mas2['bla'] = 'Tigras-2';

$mas2[-5] = 'Tigras-3';
@$mas2[-5.87] = 'Tigras-4'; // skaiciai tik integer tipo

@$mas2[2/3] = 'Kengura'; //@ uztildo warningus ir deprekacijas

print_r($mas1);
print_r($mas2);
echo count($mas2);

$mas3 = [5, 8, 7 => 5, 87 => 10, 3 => 'bla', 'a' => 555];

$mas3[] = 102;

$senoviskas = array(1, 2, 3); // senoviskai, padarysit juoksis is jusu

print_r($senoviskas);
print_r($mas3);

// sort($mas3);

function manoSortas($a, $b) {
    return $a <=> $b;
}

usort($mas3, 'manoSortas');

print_r($mas3);