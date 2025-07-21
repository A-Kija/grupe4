console.log('CATS');

const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];
const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1.

bitGirls.unshift('Nausėda');

console.log(bitGirls);

// 2.

const bitCats = cats.map(cat => {
    return [
        cat,
        rand(0, 1) ? 'storas' : 'normalus'
    ];
});

console.log(bitCats);

// 3.

const catsStats = bitCats.reduce((accumulator, currentValue) => {
    if (currentValue[1] == 'storas') {
        accumulator.storu++;
    } else {
        accumulator.normaliu++;
    }
    return accumulator;
},
    { storu: 0, normaliu: 0 }
);

console.log(catsStats);

let storiKatinai = 0;
let normKatinai = 0;

bitCats.forEach(cat => {
    if (cat[1] == 'storas') {
        storiKatinai++;
    } else {
        normKatinai++;
    }
});

console.log(storiKatinai, normKatinai);


// 4.

bitCats.sort((a, b) => a[0][1].localeCompare(b[0][1]));

console.log(bitCats);

// 5.

const happyCats = bitGirls.map((girl, index) => {
    const cat = cats[index - 1] || 'Barsukas';
    return [girl, cat];
});

console.log(happyCats);