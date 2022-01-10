function chorus(animal, sonido) {
    const texto = 
    " oh mc donaldo, sarasa tenia un " + 
    animal + 
    " que hace " + 
    sonido +
    ", " +
    sonido + 
    ", " +
    sonido;
    return texto
}

console.log( chorus("cerdo", "oink") )
console.log( chorus("vaca", "muuu") )

function f(x) {
    return 2 * x + 5;
}

const f = function (x) {
    return 2 * x + 5;
};

const pepe = 20
console.log( f(2) );
console.log( f(5) );
console.log( f(10) );
console.log( f(pepe));
