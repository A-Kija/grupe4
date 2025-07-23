const fs = require('node:fs');

const users = [
    { name: 'Briedis', psw: '123' },
    { name: 'Barsukas', psw: '123' },
    { name: 'Bebras', psw: '123' }
];

fs.writeFileSync('./users.json', JSON.stringify(users));