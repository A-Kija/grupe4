console.log('Hello, hello...');


class Miskas {
    constructor(kiekis, miskoPlotas) {
        this.kiekis = kiekis;
        this.miskoPlotas = miskoPlotas;
    }

    vienamGyvunuiTenkantisPlotas() {
        return (this.miskoPlotas / this.kiekis).toFixed(1);
    }

    bendra() {
        console.log('Aš miškas');
    }
}




class Bebrai extends Miskas {

    constructor(kiekis, miskoPlotas) {
        super(kiekis, miskoPlotas); // tevo konstruktoriaus paleidimas
    }

    uztvankuKiekis() {
        return Math.floor(this.kiekis / 11);
    }

    bendra() {
        console.log('Mes Bebrai');
    }
}


class Barsukai extends Miskas {


    urvuKiekisPlotoVienete() {
        return (this.miskoPlotas / this.kiekis * 5).toFixed(1);
    }

}


const bebrai = new Bebrai(68, 1587);
const barsukai = new Barsukai(158, 5698);

bebrai.bendra();
barsukai.bendra();

console.log(bebrai.vienamGyvunuiTenkantisPlotas(), bebrai.uztvankuKiekis());
console.log(barsukai.vienamGyvunuiTenkantisPlotas(), barsukai.urvuKiekisPlotoVienete());