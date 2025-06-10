console.log('Labas, mygtukai!');


const funClick1 = function () {
    console.log('Mygtuką 1 kažkas paspaudė');
}

//1
const btn1 = document.querySelector('#btn1');

//2
// btn1.addEventListener


//3 
btn1.addEventListener('click', funClick1);

// Paspaudus "Bebro mygtuką" h2 turi nusidažyti kažkokia spalva (ne juoda)
const btn2 = document.querySelector('#btn2');

const funClick2 = function () {
    const h2 = document.querySelector('h2');
    if (h2.style.color === 'crimson') {
        h2.style.color = 'black';
    } else {
        h2.style.color = 'crimson';
    }
}




// const funClick4 = function() {
//     btn2.style.color = 'black';
// }



btn2.addEventListener('click', funClick2);

btn2.addEventListener('mouseover', function (e) {
    e.target.style.color = 'skyblue';
});


btn2.addEventListener('mouseleave', function () {
    btn2.style.color = 'black';
});


const vz = document.querySelector('a');


vz.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('Tu paspaudei ant VZLinko');
});

const vaikas = document.querySelector('.vaikas');
const tevas = document.querySelector('.tevas');


vaikas.addEventListener('click', function (e) {
    e.stopPropagation();
    vaikas.style.backgroundColor = 'darkblue';
    // e.target.style.backgroundColor = 'darkblue';
});


tevas.addEventListener('click', function (e) {
    
    tevas.style.backgroundColor = 'orangered';
    // e.target.style.backgroundColor = 'orangered';
});



const btn3 = document.querySelector('#btn3');

btn3.addEventListener('click', function () {
    const input = document.querySelector('input');
    const reiksme = +input.value;

    console.log(reiksme);
});

