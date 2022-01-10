// Te proveemos la siguiente plantilla que tiene tres partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados, el cual parte de un obj. literal creado con una prop libros que contiene nuestra base de datos.
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados.
/***********************************/
/* ↧ Desarrollo de las consignas ↧ */
/***********************************/
const bookstore = {
  libros: [
    {
      titulo: "Los Dias del Venado",
      autor: "Liliana Bodoc",
      editorial: "Debolsillo",
      fechaPublicacion: 2018,
      stock: 76,
      precio: 1399,
    },
    {
      titulo: "Los Dias de la Sombra",
      autor: "Liliana Bodoc",
      editorial: "Debolsillo",
      fechaPublicacion: 2018,
      stock: 29,
      precio: 1399,
    },
    {
      titulo: "Los Dias del Fuego",
      autor: "Liliana Bodoc",
      editorial: "Debolsillo",
      fechaPublicacion: 2018,
      stock: 65,
      precio: 1650,
    },
    {
      titulo: "El Silmarillion",
      autor: "J.r.r. Tolkien",
      editorial: "Minotauro",
      fechaPublicacion: 2010,
      stock: 7,
      precio: 2550,
    },
    {
      titulo: "Trilogia El Señor De Los Anillos",
      autor: "J.r.r. Tolkien",
      editorial: "Minotauro",
      fechaPublicacion: 2002,
      stock: 10,
      precio: 7770,
    },
    {
      titulo: "El Resplandor",
      autor: "Stephen King",
      editorial: "Debolsillo",
      fechaPublicacion: 2012,
      stock: 51,
      precio: 2599,
    },
    {
      titulo: "Doctor Sueño",
      autor: "Stephen King",
      editorial: "Debolsillo",
      fechaPublicacion: 2016,
      stock: 42,
      precio: 2599,
    },
    {
      titulo: "La Sombra",
      autor: "John Katzenbach",
      editorial: "Ediciones B",
      fechaPublicacion: 1995,
      stock: 85,
      precio: 2149,
    },
    {
      titulo: "Primera Persona Del Singular",
      autor: "Haruki Murakami",
      editorial: "Tusquets",
      fechaPublicacion: 2021,
      stock: 60,
      precio: 1790,
    },
    {
      titulo: "Fuego y Sangre",
      autor: "George r.r. Martin",
      editorial: "Plaza & Janes",
      fechaPublicacion: 2018,
      stock: 78,
      precio: 4449,
    },
  ],
  // buscarPorTitulo: function (titulo) {
  //   let mensajeError = "No se encontró coincidencias. Verifique los datos ingresados";
  //   let libroEncontrado;
  //   for (let i = 0; i < this.libros.length; i++) {
  //     if (titulo === this.libros[i].titulo) {
  //       libroEncontrado = this.libros[i];
  //     }
  //   }
  //   return libroEncontrado ? libroEncontrado : mensajeError;
  // },
  // buscarPorAutor: function (autor) {
  //   let autoresEncontrados = [];
  //   for (let i = 0; i < this.libros.length; i++) {
  //     if (autor === this.libros[i].autor) {
  //       autoresEncontrados.push(this.libros[i]);
  //     }
  //   }
  //   return autoresEncontrados;
  // },
  // filtrarPorPrecio: function (precio) {
  //   let preciosEncontrados = [];
  //   for (let i = 0; i < this.libros.length; i++) {
  //     if (this.libros[i].precio <= precio) {
  //       preciosEncontrados.push(this.libros[i]);
  //     }
  //   }
  //   return preciosEncontrados;
  // },
  // modificarStock: function (titulo, cantidad) {
  //   let tituloEncontrado = this.buscarPorTitulo(titulo);
  //   tituloEncontrado.stock = cantidad;
  //   return tituloEncontrado;
  // },
  // precioPromedio: function () {
  //   let suma = 0;
  //   for (let i = 0; i < this.libros.length; i++) {
  //     suma += this.libros[i].precio;
  //   }
  //   let promedio = suma / this.libros.length;
  //   return 'El precio promedio de cada libro es de: ' + promedio;
  // },
};

/***********************************/
/*   ↧ Ejecución de consignas ↧    */
/***********************************/
// console.log("---------- ↧ Punto A ↧ ----------");
// // Ejecución aquí ↧
// let resultadoPuntoA = bookstore.buscarPorTitulo("Doctor Sueño");
// console.log(resultadoPuntoA);

// console.log("---------------------------------");

// console.log("---------- ↧ Punto B ↧ ----------");
// // Ejecución aquí ↧
// let resultadoPuntoB = bookstore.buscarPorAutor("Stephen King");
// console.log(resultadoPuntoB);

// console.log("---------------------------------");

// console.log("---------- ↧ Punto C ↧ ----------");
// // Ejecución aquí ↧
// let resultadoPuntoC = bookstore.filtrarPorPrecio(2000);
// console.log(resultadoPuntoC);

// console.log("---------------------------------");

// console.log("---------- ↧ Punto D ↧ ----------");
// // Ejecución aquí ↧
// let resultadoPuntoD = bookstore.modificarStock("La Sombra", 80);
// console.log(resultadoPuntoD);

// console.log("---------------------------------");

// console.log("---------- ↧ Punto E ↧ ----------");
// // Ejecución aquí ↧
// let resultadoPuntoE = bookstore.precioPromedio();
// console.log(resultadoPuntoE);

// console.log("---------------------------------");

let fs = require('fs');

// fs.writeFileSync('libros.JSON',JSON.stringify(bookstore.libros));

let funciones = require('./funciones');

console.log(funciones.buscarPorTitulo('libros.JSON','Los Dias del Venado'));
console.log(funciones.buscarPorAutor('libros.JSON','Stephen King'));
console.log(funciones.filtrarPorPrecio('libros.JSON',2000));
// console.log(funciones.modificarStock('libros.JSON','Fuego y Sangre',80));