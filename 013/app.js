console.log('Labas, Bebrai!');

// const stringas1 = 'Bebras';
// const stringas2 = ' ';
// const stringas3 = '';

// const log1 = !!stringas1;
// const log2 = !!stringas2;
// const log3 = !!stringas3;

// console.log(log1, log2, log3);

// const skaicius4 = 55;
// const skaicius5 = -4.55;
// const skaicius6 = 0;

// const log4 = !!skaicius4;
// const log5 = !!skaicius5;
// const log6 = !!skaicius6;

// console.log(log4, log5, log6);

/*
>
<
>=
<=
!=
==
!==
===
*/


if ( 5 > 4 && 7 > 2) {
    // saka true
    console.log('O... taip!');
} 
else {
    // saka false
    console.log('Hmm... ne!');
}

// || grazina pirma true reiksme

// && grazina pirma false reiksme


const A = (5 || 8) + (7 || 2);

console.log(A);


const B = 9;

if (B > 9) {
    console.log('B daugiau uz 9');
}

else if (B == 9) {
    console.log('B lygu 9');
} 

else {
    console.log('B maziau uz 9');
}

// Ternary


const C = 1;
let atsakymas;

if (C == 1) {
    atsakymas = 'C yra vienas';
} 
else {
    atsakymas = 'C nėra vienas';
}

console.log(atsakymas);

const atsakymas2 = C == 1 ? 'C yra vienas' : 'C nėra vienas'; // ternaris

console.log(atsakymas2);

let KI;

{
    {
        KI = 'vidus';
    }
    console.log(KI);
}

const s = 'black';


const turiu = s == 'green' ? 'Žalias' : s == 'red' ? 'Raudonas' : 'Kitas';

console.log(turiu);


console.log('%cBebrai ir barsukai', 'background-color: darkblue; color: white; font-style: italic; border: 5px solid hotpink; font-size: 2em;');


