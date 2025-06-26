console.log('Kibiras 1');

class Kibiras1 {


    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni() {
        this.akmenuKiekis++;
        // this.akmenuKiekis = this.akmenuKiekis + 1;
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
        // this.akmenuKiekis = this.akmenuKiekis + kiekis;
    }

    kiekPririnktaAkmenu() {
        console.log('Kibire jau yra:', this.akmenuKiekis);
    }

    gautiAkmenuKieki() {
        return this.akmenuKiekis;
    }

}

const k1 = new Kibiras1();
const k2 = new Kibiras1();

k1.prideti1Akmeni();
k1.prideti1Akmeni();
k1.pridetiDaugAkmenu(5);

k2.pridetiDaugAkmenu(10);
k2.prideti1Akmeni();


k1.kiekPririnktaAkmenu();
k2.kiekPririnktaAkmenu();

const k2Kiekis = k2.gautiAkmenuKieki();
console.log(k2Kiekis);
