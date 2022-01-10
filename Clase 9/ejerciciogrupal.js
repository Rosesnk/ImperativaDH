/* Obtenemos un array de correos a los cuales deberemos realizar una serie de verificaciones para corroborar si son válidos. Para ello, por el momento, debemos buscar el carácter “@” en cada elemento y agregar aquellos que lo tengan al array de correos admitidos. En caso de no encontrar el carácter, se deberá agregar al array de correos descartados. */

/*
1. Desarrollar una función que realice la verificación de cada elemento del array de correos pendientes. En caso de validar, agregar al arrayCorreoAdmitidos, caso contrario agregar al arrayCorreoDescartados.
2. Mostrar por pantalla la cantidad y los elementos de cada array.
*/

let arrayCorreosPendientes = [ 
	'iroman@digitalhouse.com',
	'loki%digitalhouse.com',
	'loki@digitalhouse.com',
	'thanosdigitalhouse.com',
	'thanos@digitalhouse.com'
];

/* array de correos admitidos */
let arrayCorreosAdmitidos = [
  'thor@digitalhouse.com',
  'tucuMan@digitalhouse.com',
  'wanda@digitalhouse.com'
];

let arrayCorreosDescartados = [];
function verificarCorreo(correo){
 	//tu código   
}
console.log("--- Array de correos admitidos: " + "longitud de array" + " ---");
console.log(arrayCorreosAdmitidos);
console.log();
console.log("---Array de correos Descartados:"+  "longitud de array" + " ---");
console.log(arrayCorreosDescartados);





