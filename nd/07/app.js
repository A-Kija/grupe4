console.log('Labas, statini kibirai!');

class Kibiras1 {

    static visiAkmenys = 0;

    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni() {
        this.akmenuKiekis++;
        this.constructor.visiAkmenys++;
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
        this.constructor.visiAkmenys += kiekis;
    }

    kiekPririnktaAkmenu() {
        console.log('Kibire jau yra:', this.akmenuKiekis);
    }

    akmenuSkaiciusVisuoseKibiruose() {
        console.log('Visuose Kibiruose jau yra:', this.constructor.visiAkmenys);
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

k1.akmenuSkaiciusVisuoseKibiruose();
