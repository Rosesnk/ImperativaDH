//Nomenclatura: CamelCase  Snake_case Kebab-case

//Palabras reservadas: var , let , const
// var se mantiene en todo el codigo
//let puede repetirse, es una buena practica usarlo
//const se mantiene fijo en todo el codigo

//TIPOS DE DATOS

//Datos number (enteros o con decimales con punto, no coma)
let edad = 27  //con numeros enteros
console.log(edad)

let precio = 150.50 //con numeros decimales
console.log(precio)


//Strings (textos entre comillas dobles o simples, son el valor asignado a la variable en letras)

let nombre = "Rosa"; //con comillas dobles
console.log(nombre)

let apellido = 'Hans' //con comillas simples
console.log(apellido)


//Boleanos ( true o false sin comillas)

let verdadero = true;
console.log(verdadero)

let falso = false
console.log(falso)


//Not a number (NaN) cuando se mezclan cosas que no coinciden
let notanumber = NaN;
console.log(notanumber)

//Null (cuando no sabemos cual es el valor total)

let nulo = null
console.log(nulo)

//Undifined (cuando una variable no tiene valor asignado, hasta que se le asigna un valor con el =)

let sinValor;
console.log(sinValor);


//Datos especiales: objetoLiteral (puede tener varias claves asignadas y se detallan entre llaves)  
let persona = {
    nombre: 'Rocio', edad: '27'
}
console.log(persona);


//Datos especiales: arrays (tiene indices numericos que comienzan con numero cero y se encierra entre corchetes)
let paises = ['Argentina','Venezuela', 'Colombia']
console.log(paises);



