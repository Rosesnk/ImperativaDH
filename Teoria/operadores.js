//Operacion de asigacion es el =

//Operadores aritmeticos

//Suma

console.log( 5 + 4 );

//Resta

console.log(10 - 6);

//Multiplicacion 

console.log( 3 * 4 );

//Divison 

console.log( 10 / 2);

//Modulo % , muestra el resto de una division

console.log( 10 % 2 );

//Incremento 

let numero = 6;
console.log(++numero);

//Decremento
let otroNumero = 10;
console.log (--otroNumero);




//Comparacion simple 

console.log( 5 == '5');  // numero vs string


//Comparacion estricta

console.log( 5 === '5');  //numero vs string, en estricto no considera 


//Desigualdad simple 

console.log( 5 != '5');

//Desigualdad estricta 

console.log( 5 !== '5');


//Mayor que 

console.log (6 > 6);

//Mayor o igual que 

console.log ( 6 >= 6 );

//Menor 

console.log ( 7 < 7 );

//Menor o igual que 

console.log ( 7 <= 7);

// AND &&

console.log(false && true);
console.log(true&&true);

// OR barra recta doble

console.log( false || true );
console.log( true || true );
console.log( false || false );

// Concatenacion + 

let nombre = Rosalie;
let apellido = Hans ;

console.log( nombre + '' + apellido ); //la concatenacion del string vacio es para que aparezca un espacio entre la variable nombre y la variable apellido




function Neik(Frase){
    return Frase.toUpperCase()
};

Neik("extranio a mi patito");


typeof Neik


function circunferencia (radio){
    return 2 * radio * Math.PI
};

circunferencia(4)

