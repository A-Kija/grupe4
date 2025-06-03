console.log('Labas, Bebrionai!');

const namas = {
    kambariai: 5,
    langai: true,
    aukstai: 2,
};

const piestukai = [
    'raudonas',
    'mėlynas',
    'žalias',
    'geltonas'
];

console.log(namas);

piestukai[2] = 'oranžinis'; // pakeičiame žalią spalvą į oranžinę


piestukai[4] = 'rožinis'; // pridedame rožinį pieštuką į penktą vietą (indeksas 4)

// piestukai[6] = 'baltas'; // pridedame baltą pieštuką į septintą vietą (indeksas 6)

piestukai.push('baltas'); // pridedame baltą pieštuką į masyvo pabaigą


console.log(piestukai, piestukai.length); // išvedame pieštukų masyvą ir jo ilgį

const temp = piestukai[0]; // saugome pirmo pieštuko spalvą į temp kintamąjį
piestukai[0] = piestukai[3]; // pirmą pieštuką pakeičiame į ketvirtą
piestukai[3] = temp; // ketvirtą pieštuką pakeičiame į pirmo spalvą



console.log(piestukai, piestukai.length); // išvedame pieštukų masyvą ir jo ilgį

//array
const objektynas = [
    { a: 1, b: 2 },
    { a: 3, b: 4 },
    777,
    { a: 7, b: 8 }
];


const A = objektynas[0];
objektynas.push(A);

objektynas[0].a = 10; // pakeičiame pirmo objekto a reikšmę į 10
objektynas[0].c = 20; // pridedame naują savybę c su reikšme 20

console.log(objektynas);




for (let i = 0; i < 10; i++) {
    console.log('GA GA');
}

for (let i = 0; i < piestukai.length; i++) {
    console.log(piestukai[i]);
    // console.log(`Pieštukas ${i + 1}: ${piestukai[i]}`);
}


let htmlLis = '';

for (let i = 0; i < piestukai.length; i++) {
    htmlLis += '<li>' + piestukai[i] + '</li>';
}

console.log(htmlLis);

const ul = document.querySelector('ul'); // pasirenkame ul elementą
ul.innerHTML = htmlLis; // įrašome sukurtą HTML į ul elementą


const allLis = document.querySelectorAll('li'); // pasirenkame visus li elementus

console.log(allLis); // išvedame visus li elementus

for (let i = 0; i < allLis.length; i++) {
    const li = allLis[i];
    if (i % 2) {
       li.style.color = 'orange'; 
    } else {
        li.style.color = 'crimson';
    }
}

