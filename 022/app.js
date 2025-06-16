function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


console.log('hello, Json');

// JSON JavScript Object Notation


const obj = [
    {a: 2},
    {a: 2},
    {a: [4, 5]},
];


console.log(obj, typeof obj);

const objString = JSON.stringify(obj);

console.log(objString, typeof objString);


const objBack = JSON.parse(objString);

console.log(objBack, typeof objBack);


console.clear();

// fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json()) // kai sulaukiam atsakyma paverciam objektu
//       .then(json => {
//         console.log(json);
//         printTitles(json);
//     }) // atspausdinam konsoleja


// console.log('kodas PO fetch');


// const printTitles = obj => {
//     const ul = document.querySelector('ul');

//     obj.forEach(p => {
//         const li = document.createElement('li');
//         li.innerText = p.title;
//         ul.appendChild(li);
//     });

// }

const cart = [
    { id: 877, title: 'Pieniškos dešros', price: 2.45, count: 2 },
    { id: 8974, title: 'Sviestukas sintetinis', price: 3.20, count: 1 },
    { id: 16548, title: 'Batonas studentų', price: 1.22, count: 1 },
    { id: 974, title: 'Bulvės 4kl', price: 0.88, count: 2 }
];

// Prie kiekvieno produkto pridėti savybę total ir joje paskaičiuoti atitinkamo produkto bendrą sumą

const cartWithTotal = cart.map(p => ({...p, total: p.count * p.price}));

console.log(cartWithTotal);

const newProduct = { id: 7892, title: 'Morkos beveik plautos', price: 0.35, count: 1 };
// pridėti produktą į cart masyvą

cart.push(newProduct);

console.log(cart);

const batonas = cart.find(p => p.title == 'Batonas studentų');

console.log(batonas);


const newProduct2 = { id: 974, title: 'Bulvės 4kl', price: 0.88, count: 2 };
const newProduct3 = { id: 9320, title: 'Bulvės 4kl', price: 0.98, count: 2 };
const deti = rand(0, 1) ? newProduct2 : newProduct3;
// prideti produktą deti į krepšelį

const cartProduct = cart.find(p => p.id == deti.id);

if (cartProduct) {
    cartProduct.count = cartProduct.count + deti.count;
} else {
    cart.push(deti);
}

console.log(cart);

