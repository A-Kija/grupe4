console.log('Hello, Troleibusai!');

class Troleibusas {

    constructor() {
        this.keleiviuSkaicius = 0;
    }

    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius = this.keleiviuSkaicius + keleiviuSkaicius;
    }

    islipa(keleiviuSkaicius) {
        // const liko = this.keleiviuSkaicius - keleiviuSkaicius;
        // this.keleiviuSkaicius = Math.max(0, liko);
        this.keleiviuSkaicius = Math.max(0, this.keleiviuSkaicius - keleiviuSkaicius);
    }

    vaziuoja() {
        console.log(`Vaziuoja ${this.keleiviuSkaicius} keleiviai su troleibusu`);
    }
}

const t4 = new Troleibusas();

t4.ilipa(5);
t4.ilipa(15);

t4.ilipa(36);
t4.ilipa(14);

t4.islipa(62);

t4.vaziuoja();

t4.islipa(62);

t4.vaziuoja();






