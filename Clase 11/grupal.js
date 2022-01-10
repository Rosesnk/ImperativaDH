// 1 
let peliculas = ["star wars" , "totoro" , "rocky" , "pulp fiction" , "la vida es bella"]

function convertirAMayusculas(peliculas){
    peliculas[0] = peliculas[0].toUpperCase()
    peliculas[1] = peliculas[1].toUpperCase()
    peliculas[2] = peliculas[2].toUpperCase()
    peliculas[3] = peliculas[3].toUpperCase()
    peliculas[4] = peliculas[4].toUpperCase()
    return peliculas

}

convertirAMayusculas(peliculas)

// 2 

function pasajeDeElementos(array1, array2) {
    array1.push(array2.pop().toUpperCase())
    array1.push(array2.pop().toUpperCase())
    array1.push(array2.pop().toUpperCase())
    array1.push(array2.pop().toUpperCase())
    array1.push(array2.pop().toUpperCase())
    return array1
    }
    