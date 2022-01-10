const users = [
    'Martin',
    'Homero',
    'Cosme',
    'Steven',
    'Adam',
];

// verificar si existe

function buscarNombre(nombre, cb){
    for (let i = 0; i < users.length; i++) {
        const element = users[i];
        if (element === nombre) {
           return  cb(element)
        }
    }
    console.log("Error usuario No  encontrado");        

}

function mostrarResultado(res){
    console.log("usuario encontrado: " + res);        
 }

//Array de nombres

//Ejemplo de invocacion con callback como argumento
buscarNombre('Martin',mostrarResultado)