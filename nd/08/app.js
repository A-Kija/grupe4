console.log('Labas, aš esu Stiklinė');

class Stikline {

    #turis;

    constructor(turis) {
        this.#turis = turis;
        this.kiekis = 0;
    }

    ipilti(kiekis) {
        this.kiekis = this.kiekis + kiekis;
        this.kiekis = Math.min(this.#turis, this.kiekis);
        return this;
    }

    ispilti() {
        const kiekis = this.kiekis;
        this.kiekis = 0;
        return kiekis;
    }
}


const s200 = new Stikline(200);
const s150 = new Stikline(150);
const s100 = new Stikline(100);


s100.ipilti(s150.ipilti(s200.ipilti(320).ispilti()).ispilti());


console.log(s200, s150, s100);