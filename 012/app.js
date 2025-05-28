const b1 = 3;
const b2 = 5;
const b3 = 3 + 5;
console.log(b3);


const a1 = document.querySelector('.a1').innerText;
const a2 = document.querySelector('.a2').innerText;

const suma = +a1 + +a2;

const a3 = document.querySelector('.a3');

a3.innerText = suma;

const skaicius = 55;
const stringas = '55';

const skaiciusIsStringo1 = Number(stringas); // Labai teisingas
const skaiciusIsStringo2 = parseInt(stringas); // Specializuotai teisingas
const skaiciusIsStringo3 = +stringas; // Sutrumpintas hackas

console.log(skaiciusIsStringo1, skaiciusIsStringo2, skaiciusIsStringo3);

console.log(skaicius + stringas);
console.log(stringas + skaicius);

console.log( 9 % 3 );

const A = 0.2 + 0.4;

const B = 5.25822

console.log(B.toFixed(3)); // GALUTINIS TIK

console.log(78 / 0);

let C = 20;

console.log(C++); // 20

console.log(C); // 21


console.log(++C); // 22

console.log(C); // 22


let V1 = 2;


const R1 = ++V1 * V1++;

console.log(R1);


let V2 = 4;

// V2 = V2 + 5;

V2 += 5; // patrumpintas uzrasymas

console.log(V2);


let B1 = true;
let B2 = false;

let tusciasStringas = '';


console.log(typeof B1, typeof B2);

// ARBA OR ||
// IR AND &&
// NE NOT !

console.clear();

console.log('true || true', true || true);
console.log('true || false', true || false);
console.log('false || true', false || true);
console.log('false || false', false || false);
console.log('-------------------------------');
console.log('true && true', true && true);
console.log('true && false', true && false);
console.log('false && true', false && true);
console.log('false && false', false && false);
console.log('-------------------------------');
console.log('!true', !true);
console.log('!false', !false);