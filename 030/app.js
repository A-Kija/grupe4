console.log('labas, Statikai!');




class AuksoPuodas {

    static suma = 20200;

    constructor() {
        
    }

    isleisti(kiek) {
        if (this.suma < kiek) {
            console.log('Baigėsi pinigai');
            return;
        }
        this.suma -= kiek;
        console.log('Liko', this.suma);
    }
}


const Jonas = new AuksoPuodas();
const Jeronimas = new AuksoPuodas();
const Brigita = new AuksoPuodas();


Jonas.isleisti(15000);

Brigita.isleisti(20000);






