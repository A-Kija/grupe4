console.log('Hello, Kitty!');

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

/*

kai reikia suskaiciuot kartus kazkieno
for
while
do while

specialus ir keistas ciklas
switch

kai reikia pereiti per struktura
for in
for of

ciklu valdymas
continue
break

*/

for (let i = 0; i < 7; i++) {
    const random = rand(10, 99);

    if (random > 50) {
        continue;
    }

    console.log(`Nr.${i + 1} - ${random}`);

}

console.log('-------------------------');


for (let i = 0; i < 7; i++) {
    const random = rand(10, 99);

    if (random > 70) {
        break;
    }

    console.log(`Nr.${i + 1} - ${random}`);

}

console.clear();

for (let i = 0; i < 3; i++) {

    const HS = rand(0, 1) ? 'H' : 'S';
    console.log(HS);

}