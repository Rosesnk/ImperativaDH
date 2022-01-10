const fs = require('fs');

const jsonHelper = {
    leerJson: function (nombreArchivo) {
        let lectura = fs.readFileSync(nombreArchivo);
        let lecturaObjeto = JSON.parse(lectura);
        return lecturaObjeto
    },
    escribirJson: function (nombreArchivo, datos) {
        let datosJson = JSON.stringify(datos);
        let escritura = fs.writeFileSync(nombreArchivo, datosJson);
        return escritura;
    }
};

module.exports = jsonHelper;