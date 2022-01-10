/* EJERCITAR OBJETOS LITERALES */

// Crear un objeto vacio

let cantante = {}

// Asignarle propiedad "nombre" con valor "tu nombre"

cantante.nombre = "Juanes"


// Leer la propiedad nombre
console.log("El cantante es " + cantante.nombre)

' ${nombre}' //template literals ?  
// ' ' backticks


// Borrar la propiedad nombre

delete cantante.nombre 

console.log (cantante.nombre)

// Crear un array con al menos con 2 o más objetos, con propiedades "id", nombre", "dni", "status"

let cantantes = [
    {
        id: 1,
        nombre: 'juanes',
        dni: 95839
        status: true
        conocerEstado: function(){
            if (this.status == true)
        } // tambien se puede escribir sin function .. conocerEstado(){}
    },

    {   id: 2,
        nombre: 'Adele'
        dni: 32456
        status: false
        conocerEstado: function()

]

// Ahora cada objeto crear un método llamado "conocerEstado"

// juntos vamos a construir una lógica que chequee depende del status, retorne un mensaje distinto.

/* Juntando conocimientos de las clases pasadas */

// Crear un bucle para iterar el array y devuelva el nombre 

// Crear una función en donde se integrará el bucle, pero ahora tomará el array como parámetro

// crear una función que permitirá agregar un nuevo objeto según lo que se pase por parámetros y se debe enviar al array.

// Borrar un registro, debemos buscar el objeto según el ID, y eliminarlo del array

// Modificar un registro, debemos buscar el objeto según el ID y modificarlo