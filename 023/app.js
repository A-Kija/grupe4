console.log('Bebrų dainos');


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        // console.log(json);
        printUsers(json);
    });


const printUsers = users => {
    const ul = document.querySelector('ul');
    users.forEach(user => {
        // const li = document.createElement('li');
        // li.textContent = `${user.name} (${user.email}) from ${user.address.city}`;
        // ul.appendChild(li);
        const template = document.querySelector('#user-template');
        const clone = template.content.cloneNode(true); // padaro atskirą kopiją
        clone.querySelector('.name').textContent = user.name;
        clone.querySelector('.email').textContent = user.email;
        clone.querySelector('.city').textContent = user.address.city;
        ul.appendChild(clone);
    });
}

const cart = [
    { id: 877, title: 'Pieniškos dešros', price: 2.45, count: 2 },
    { id: 8974, title: 'Sviestukas sintetinis', price: 3.20, count: 1 },
    { id: 16548, title: 'Batonas studentų', price: 1.22, count: 1 },
    { id: 974, title: 'Bulvės 4kl', price: 0.88, count: 2 }
];


const batonas = cart.find(p => p.id == 16548);

console.log(batonas);

const noDesra = cart.filter(p => p.id != 877);

console.log(noDesra);


let cartCount = 0;
cart.forEach(p => cartCount = cartCount + p.count);


const cartCount2 = cart.reduce((acc, p) => acc + p.count, 0);


console.log(cartCount, cartCount2);

//Kava