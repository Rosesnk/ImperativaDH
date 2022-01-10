//Ejemplo de length  para saber la longitud de un string

let mensaje = 'Gran dia para practicar Javascript!' ;
console.log(mensaje.length);


//Ejemplo de indexOf  para saber si existe algo en el string

console.log(mensaje.indexOf ('dia'));


//Ejemplo de slice , devuelve lo que esta entre las posiiones 0 y 24 

console.log(mensaje.slice(0, 24));

//Ejemplo trim   elimina los espacios en blanco de los bordes


let mensaje1 = 'Gran dia para precticar jjavascript'
console.log(mensaje1.trim());

//Ejemplo de split para generar un array

console.log(mensaje1.split(' '));

//Ejemplo de replace  para cambiar una porcion de texto por otra

console.log(mensaje1.replace('jjavascript', 'todo'));

console.log(mensaje);

//Asi se llama 

let miSerie = 'Mad men';
miSerie.length;


// Otro ejemplo de slice. el numero negativo cuenta de atras hacia adelante a la posicion numero 10

let frase = 'Breaking bad rules!'
frase.slice(-10);

//otro ejemplo de split

let cancion = 'and bingo was his name, oh!'
cancion.split(' ') //devuelve un array usando como separador los espacios en blanco
cancion.split(', ') //deveulve un array usando como separador las comas del string


//otro ejemplo de replace

let frase = 'aguante phyton!'
frase.replace('phyton', 'JS') //devuelve aguante JS
frase.replace('phy', 'JS') // devuelve aguante JSton , solo reemplaza las letras nombradas




