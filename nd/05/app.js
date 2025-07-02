console.log('Labas, pirkinių krepšeli!');

class PirkiniuKrepselis {


    constructor() {
        this.turinys = new Map();
    }

    idetiSureli(kiekis) {
        this.ideti(kiekis, 'sūrelis');
    }

    idetiPieno(kiekis) {
        this.ideti(kiekis, 'pienukas');
    }

    idetiDuonos(kiekis) {
        this.ideti(kiekis, 'batonas');
    }

    ideti(kiekis, ka) {
        if (this.turinys.has(ka)) {
            this.turinys.set(ka, this.turinys.get(ka) + kiekis);
        } else {
            this.turinys.set(ka, kiekis);
        }
    }

    krepselioTurinys() {
        this.turinys.forEach((kiek, kas) => console.log(`Turime ${kas} ${kiek} vienetus`));
    }

}


const norfa = new PirkiniuKrepselis();

norfa.idetiPieno(3);
norfa.idetiPieno(3);
norfa.idetiDuonos(2);
norfa.ideti(3, 'Sūris baltas');

norfa.krepselioTurinys();