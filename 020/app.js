console.log('Labas, Marsai!');
console.log('Labas, Venera!');

let funRezultatas;

function fun1(a) { // vardine funkcija
    return a * 7;
}

funRezultatas = fun1(3);
console.log(funRezultatas);

//---------------

const fun2 = function(a) { // anonimine funkcija
    return a * 7;
}

funRezultatas = fun2(3);
console.log(funRezultatas);

//---------------

const fun3 = (a) => {
    return a * 7;
}

funRezultatas = fun3(3);
console.log(funRezultatas);

//---------------

const obuoliai = function() {
    console.log('Paprasta:', this);
    return this.sakos * 8;
}

const obuoliaiRodykle = () => {
    console.log('Rodyklė:', this);
    return this.sakos * 8;
}

const medis = {};
medis.sakos = 10;
medis.obuoliai = obuoliai;
medis.obuoliaiRodykle = obuoliaiRodykle;

console.log('Paprasta:', medis.obuoliai());
console.log('Rodyklė:', medis.obuoliaiRodykle());


//---------------
// jeigu parametrų skaičius yra 1 tai galim praleist argumenų apvalius skliaustelius
const fun4 = a => { 
    return a * 7;
}

funRezultatas = fun4(3);
console.log(funRezultatas);

//---------------
// jeigu funkcijos kodo eilutė yra 1 galim praleisti garbanotus bloko skliaustelius tada negalima rašyti return
const fun5 = a => a * 7;


funRezultatas = fun5(3);
console.log(funRezultatas);

//---------------
const fun6 = _ => 'Bebras '.repeat(5);

funRezultatas = fun6();
console.log(funRezultatas);


const colors = ['green', 'blue', 'yellow', 'pink', 'black'];
// su ciklu konsolėje atspausdinkite spalvas po vieną spalvą (stulpeliu)

console.clear();

// for(let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

const elemPrint = function(el, index) {
    console.log(index, el);
}

// colors.forEach(elemPrint);

colors.forEach(el => console.log(el));