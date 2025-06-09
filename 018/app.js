console.log('Have fun!');


const manoStringas = 'AAA';

const manoStringas2 = 'A'.repeat(3);

const manoFunkcija = function () {
    return 'BBB';
}

console.log(manoStringas);

console.log(manoFunkcija);

console.log(manoFunkcija());


const manoFunkcija2 = function () {
    return 'B'.repeat(3);
}

console.log(manoStringas2);

console.log(manoFunkcija2());

const manoFunkcija3 = function (kiekis) { // funkcijos deklaravimas (kiekis - parametras)
    kiekis = kiekis + 2;
    return 'B'.repeat(kiekis);
}

console.log(manoFunkcija3(5)); // funkcijos naudojimas (5 - argumentas)
console.log(manoFunkcija3(10)); // funkcijos naudojimas
console.log(manoFunkcija3(15)); // funkcijos naudojimas


const fun1 = function (pa1, pa2) {
    const rez = pa1 + pa2;
    return rez;
}


const sk1 = 8;

console.log(fun1(sk1, 1));
console.log(fun1(sk1, 7));

const fun2 = function (pa1, pa2, pa3 = 100) {
    const rez1 = pa1 + pa2;
    const rez2 = pa1 + pa2 + pa3;

    // const rez = {};
    // rez.r1 = rez1;
    // rez.r2 = rez2;

    const rez = [];
    rez.push(rez1);
    rez.push(rez2);

    return rez;
}

console.log(fun2(7, 7));

//Parašykite funkciją kuri gauna du skaičius ir gražina didesnį (dėl paprastumo tarkim, kad skaičiai niekad nebus lygus)


const daugiau = function (sk1, sk2) {
    let rez;
    if (sk1 > sk2) {
        rez = sk1;
    } else {
        rez = sk2;
    }
    return rez;
}
console.log(daugiau(5, 8));
console.log(daugiau(10, 7));

const daugiau2 = function (sk1, sk2) {

    if (sk1 > sk2) {
        return sk1;
    }
    return sk2;
}

console.log(daugiau2(5, 8));
console.log(daugiau2(10, 7));


const daugiau3 = function (sk1, sk2) {
    return sk1 > sk2 ? sk1 : sk2;
}

console.log(daugiau3(5, 8));
console.log(daugiau3(10, 7));


const obuoliai = function() {
    return this.sakos * 5;
}


const medis = {};

medis.sakos = 10;

medis.obuoliai = obuoliai;

console.log(medis.obuoliai());


const medis2 = {};

medis2.sakos = 31;

medis2.obuoliai = obuoliai;

console.log(medis2.obuoliai());



const hVienas = function(tekstas, spalva = 'crimson') { // anoniminė
    const section = document.querySelector('section');
    const h1 = document.createElement('div');
    h1.style.color = spalva;
    h1.innerText = tekstas;
    section.appendChild(h1);
}

hVienas('Bebras');
hVienas('Barsukas', 'orange');
hVienas('Briedis');


function suma(a, b) { // vardinė funkcija
    return a + b;
}


function suma(a, b) { // vardinė funkcija
    return a * b;
}


const suma2 = function(a, b) {
    return a + b;
}

// const suma2 = function(a, b) {
//     return a * b;
// }



console.log(suma(5, 6));

