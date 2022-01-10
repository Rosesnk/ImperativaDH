const archivos = require("./lecturaEscritura");
let arrayProfesionales = archivos.leerJson("profesionales");

//A

// A. Utilizar un método de array que retorne los primeros 5 profesionales del
// arrayProfesionales. No debe modificar el array original. Guardar el
// resultado de este método en una variable primerosCincoProfesionales,
// luego hacer la impresión de la misma.

let primerosCincoProfesionales = arrayProfesionales.slice(0, 5);
// console.log(primerosCincoProfesionales);

//B

// B. Utilizar un método de array que permita reemplazar el profesional con ID 14
// por un nuevoProfesional. Es decir, se modificará el arrayProfesionales.
// Luego, imprimirlo para verificar el cambio.

const nuevoProfesional = {
    identificador: 250,
    estaHabilitado: true,
    honorarioConsulta: 8000,
    edad: 52,
    nombre: 'Linus Torvalds',
    especialidad: 'Junior Developer',
    cantidadConsultas: 48,
    puntuacion: 50
};

arrayProfesionales.splice(15, 1, nuevoProfesional);
// console.log(arrayProfesionales[15]);

//C

// C. Ahora, necesitamos un método para ordenar el arrayProfesionales según
// la propiedad honorarioConsulta de menor a mayor. Mostrar el array
// ordenado.


// arrayProfesionales.honorarioConsulta.sort((a, b) => {
//     if (a == b) {
//         return 0;
//     }
//     if (a < b) {
//         return -1;
//     }
//     return 1;
// });

// arrayProfesionales.sort(function(a, b){
//     arrayProfesionales.honorarioConsulta
//     if (a == b) {
//         return 0;
//     }
//     if (a < b) {
//         return -1;
//     }
//     return 1;
// });

arrayProfesionales.sort((a, b) => {
    if (a.honorarioConsulta < b.honorarioConsulta) {
        return -1;
    }
    if (a.honorarioConsulta > b.honorarioConsulta) {
        return 1;
    }
    return 0;
});

// console.log(arrayProfesionales);

//D

// D. Utilizar un método para realizar una búsqueda sobre el arrayProfesionales
// del profesional con ID 15. Es decir, que retorne solo un profesional. Asignar
// este resultado a una variable, luego realizar la impresión de la misma.

// console.log(arrayProfesionales);

const resultado = arrayProfesionales.find( objeto => objeto.identificador === 250 );

console.log(resultado);

//E

const inventario = [
    {nombre: 'manzanas', cantidad: 2},
    {nombre: 'bananas', cantidad: 0},
    {nombre: 'cerezas', cantidad: 5}
];

// const resultado = inventario.find( fruta => fruta.nombre === 'cerezas' );

// console.log(resultado); // { nombre: 'cerezas', cantidad: 5 }

//F

//G 

//H 