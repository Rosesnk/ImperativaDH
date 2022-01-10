const jsonHelper = require('./jsonHelper');

const funciones = {
    buscarPorTitulo: function (archivo, titulo) {
        let archivoLeido = jsonHelper.leerJson(archivo);
        let mensajeError = "No se encontró coincidencias. Verifique los datos ingresados";
        let libroEncontrado;
        for (let i = 0; i < archivoLeido.length; i++) {
            if (titulo === archivoLeido[i].titulo) {
                libroEncontrado = archivoLeido[i];
            }
        }
        return libroEncontrado ? libroEncontrado : mensajeError;
    },
    buscarPorAutor: function (archivo, autor) {
        let archivoLeido = jsonHelper.leerJson(archivo);
        let autoresEncontrados = [];
        for (let i = 0; i < archivoLeido.length; i++) {
            if (autor === archivoLeido[i].autor) {
                autoresEncontrados.push(archivoLeido[i]);
            }
        }
        return autoresEncontrados;
    },
    filtrarPorPrecio: function (archivo, precio) {
        let archivoLeido = jsonHelper.leerJson(archivo);
        let preciosEncontrados = [];
        for (let i = 0; i < archivoLeido.length; i++) {
            if (archivoLeido[i].precio <= precio) {
                preciosEncontrados.push(archivoLeido[i]);
            }
        }
        return preciosEncontrados;
    },
    // modificarStock: function (archivo, titulo, cantidad) {
    //     let archivoLeido = jsonHelper.leerJson(archivo);
    //     let tituloEncontrado = this.buscarPorTitulo(archivoLeido,titulo);
    //     tituloEncontrado.stock = cantidad;
    //     jsonHelper.escribirJson( archivoLeido,tituloEncontrado)
    //     return tituloEncontrado;
    // },
    //   precioPromedio: function () {
    //     let suma = 0;
    //     for (let i = 0; i < this.libros.length; i++) {
    //       suma += this.libros[i].precio;
    //     }
    //     let promedio = suma / this.libros.length;
    //     return 'El precio promedio de cada libro es de: ' + promedio;
    //   }
};

module.exports = funciones;