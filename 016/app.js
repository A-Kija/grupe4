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



const melynas1 = '<h1 style="color:skyblue";>Barsukas</h1>'; // cia stringas
sekcija3.innerHTML = melynas1;


const melynas2 = document.createElement('h1'); // cia objektas
melynas2.style.color = 'skyblue'; // objektui duodam savybe
melynas2.innerText = 'Barsukas';
sekcija4.appendChild(melynas2); // objekta iterpiam i html