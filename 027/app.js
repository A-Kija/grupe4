console.log('Labas, Objektai!');


const preke1 = {
    title: 'Plastikinės samanos',
    price: 10,
    amount: 5,
    cat: 'Bebro prekės',
    vat: function() {
        return this.price * this.amount / 100 * 21;
    },
    total: function() {
        return (this.price * this.amount + this.vat()).toFixed(2);
    }
}

const preke2 = {
    title: 'Guminiai robotai',
    price: 158.20,
    amount: 3,
    cat: 'Bebro prekės',
    vat: function() {
        return this.price * this.amount / 100 * 21;
    },
    total: function() {
        return (this.price * this.amount + this.vat()).toFixed(2);
    }
}



class BebroPreke {

    constructor(pavadinimas, kaina, kiekis) {
        this.title = pavadinimas;
        this.price = kaina;
        this.amount = kiekis;
        this.cat = 'Bebro prekės';
    }

    vat() {
        return this.price * this.amount / 100 * 21;
    }

    total() {
        return (this.price * this.amount + this.vat()).toFixed(2);
    }

}

const preke3 = new BebroPreke('Plastikiniai maišai', 0.42, 10);
const preke4 = new BebroPreke('Džiutiniai maišai', 0.77, 10);




console.log(preke1, preke1.total());
console.log(preke2, preke2.total());
console.log(preke3, preke3.total());
console.log(preke4, preke4.total());


// 1. Sukurti klasę Du pagal tą klasę pagaminti objektą ir tą objektą atspausdinti konsolėje;
// 2. Patobulinkit klasę, pridėdami savybę "kiek", kuri lygi 2;
// 3. Patobulinkit klasę, pridėdami savybę "turi", kurią galima įrašyti objekto kūrimo metu
// 4. Patobulinkit klasę, pridėdami metodą "daug", kuris sudaugina kiek ir turiu ir grąžina rezultatą
// 5. Patobulinkit klasę, pridėdami metodą, kuris įgalina pakeisti savybe "kiek"
// 6. Patobulinkit klasę, pridėdami metodą, kuris įgalina pakeisti savybe "kiek", jeigu norime keisti,
// į skaičių kuris yra didesnis nei 10, keitimo NEATLIEKAME


// PETRAS
class Du {
    constructor(t) { // pasileidzia pati
        this.kiek = 2;
        this.turiu = t;
    }

    daug() { // getter
        return this.kiek * this.turiu;
    }

    keistiKiek(k) { // setter
        if (k <= 10) {
            this.kiek = k;
        }
        return this;
    }
}

// ONA
const du01 = new Du(55);
const du02 = new Du(33);

;

console.log(du01.keistiKiek(70).keistiKiek(4).keistiKiek(5).kiek); // chaining

// console.log(du01, du02, du01.daug(), du02.daug());

// console.log(typeof Du, typeof du01);