console.log('Hello to grybas');

class Grybas {

    #valgomas;
    #sukirmijes;
    #svoris;

    constructor() {
        this.#valgomas = !this.#rand(0, 1);
        this.#sukirmijes = !this.#rand(0, 1);
        this.#svoris = this.#rand(5, 45);
    }

    get valgomas() {
        return this.#valgomas;
    }

    get sukirmijes() {
        return this.#sukirmijes;
    }

    get svoris() {
        return this.#svoris;
    }

    #rand(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }
}

class Krepsys {

    #dydis;
    #prikrauta;

    constructor() {
        this.#dydis = 500;
        this.#prikrauta = 0;
    }

    deti(grybas) {
        if (grybas.valgomas && !grybas.sukirmijes) {
            this.#prikrauta += grybas.svoris;
            console.log(this.#prikrauta);
        }
        
        return this.#prikrauta < this.#dydis
    }

}

const K = new Krepsys();

do { } while (K.deti(new Grybas));

console.log(K);