console.log('Labas, Briedi');


const zodis1 = 'Zuikis';

const antraRaide = zodis1[1];

// console.log(antraRaide);

// Žodį "Didžiulis" naudojant ciklą for konsolėje atspausdinti po vieną raidę eilutėje;


const D = 'Didžiulis';

for (let i = 0; i < D.length; i++) {
    console.log(D[i]);
}


let dHtml = '';

for (let i = 0; i < D.length; i++) {
    dHtml += '<span>' + D[i] + '</span>';
}

document.querySelector('#d1').innerHTML = dHtml; // labai labai lėtas


const sekcija2 = document.querySelector('#d2');
for (let i = 0; i < D.length; i++) {
    const span = document.createElement('span');
    span.innerText = D[i];
    sekcija2.appendChild(span);
}

const sekcija3 = document.querySelector('#d3');
const sekcija4 = document.querySelector('#d4');
const sekcija31 = document.querySelector('#d31');
const sekcija41 = document.querySelector('#d41');


const melynas1 = '<h1 style="color:skyblue";>Barsukas</h1>'; // cia stringas
sekcija3.innerHTML = melynas1;
sekcija31.innerHTML = melynas1;

const melynas2 = document.createElement('h1'); // cia objektas
melynas2.style.color = 'skyblue'; // objektui duodam savybe
melynas2.innerText = 'Barsukas';
sekcija4.appendChild(melynas2); // objekta iterpiam i html
sekcija41.appendChild(melynas2); // objekta iterpiam i html


if ('A' > 'a') {
    console.log('Jo');
} else {
    console.log('Ne');
}

const zodis2 = 'An-tan--as';

console.log(zodis2.charCodeAt(0));

console.log(zodis2.repeat(200));

console.log(zodis2.split('--'));

const two = zodis2.split('--');


console.log(two);

const all = []

for (let i = 0; i < two.length; i++) {
    all.push(...two[i].split('-'));
}
console.log(all);

// Yra žodis "ananasas". Reikia su for ciklu pereiti kiekvieną raidę ir konsolėje spausdinti tik tada jeigu raidė yra "a"


const B = 'ananasas';

for (let i = 0; i < B.length; i++) {
    // B[i] == 'a' && console.log(B[i]);
    if (B[i] == 'a') {
        console.log(B[i]);
    }
}

// console.log(B);