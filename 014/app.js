console.log('NSO');

// const nso = {};  // tuscias

const nso = {
    aliensCount: 4,
    starSystem: 'Gama Epsilon 4587-888'
};

nso.speed = 50;
nso.speedType = 'km/s';


console.log(nso.speed + ' ' + nso.speedType);

console.log(nso);


// Sukurti objektą me, kuris turi turėt savybes vardui, pavardei, metams ir svoriui.
// Tada naudokite objektą ir konsolėje atspausdinkite:
// "Vardenis Pavardenis gimė prieš 50 metų ir užaugo iki 50 svorio"

// Į objektą me prideti savybe kurioje būtų paskaičiuotas svoris po 10 metų


const me = {
    v: 'Arvydas',
    p: 'Kijakauskas',
    m: 51,
    s: 71
}

console.log(`${me.v} ${me.p} gimė prieš ${me.m} metų ir užaugo iki ${me.s} svorio`);

// 71 / 51 * 10 + 71;

me.s10 = me.s / me.m * 10 + me.s;

console.log(me);





let A = 5;
let B = A; // by value

A = A + 2;

console.log(A, B);

let C = {
    sk: 5
};

let D = C; // by reference

C.sk = C.sk + 2;
D.sk = D.sk + 2;

console.log(C, D);

console.log(5 === 5);

const o1 = { sk: 5 };
const o2 = { sk: 5 };


console.log(o2 === o1);


const barsukas = document.querySelector('h1');

const barsukas2 = document.querySelector('h1 + h1');

barsukas2.style.color = 'green';


console.log(barsukas);
console.log(barsukas2);


const namas = {
    stogas: 'Skardinis',
    kambariai: {
        virtuve: 'Didelė',
        svetaine: 'Dar didesnė'
    }
};

console.log(namas.stogas, namas.kambariai.virtuve);

namas.durys = 'Medinės';

namas.kambariai.miegamasis = 'Gigantiškas';



// let ABC;

// console.log(ABC);


console.log(namas.langai?.pirmas);


const noriuPaziuret = 'miegamasis';


console.log(namas.kambariai[noriuPaziuret]);

