let larg = window.innerWidth
let alt = window.innerHeight

let header = document.getElementById('header');
let baner = document.getElementById('baner');
let footer = document.getElementById('footer');

let p1 = document.createElement('p1');
let p2 = document.createElement('p2');


console.log(larg +' Largura ' + alt +' Altura');



// meu monitor 1364Larg 698Alt.

// monitor convencional 1920Larg 1010Alt.

//a barra de endereço junto as guias tem 70px.

if(larg >= 1400 && alt >= 1010){
    baner.classList.remove('baner')
    footer.classList.remove('footer')


    baner.classList.add('banerg')
    footer.classList.add('stug');
}

console.log(p1, p2);