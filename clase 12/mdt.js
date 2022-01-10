const alicia = [ 23, 82, 46]
const bob = [ 45,8, 32]

function encontrarGanador(a,b) {
    let puntosPrimerParticipante = 0
    let puntosSegundoParticipante = 0
    
    for (let i = 0; i < 3; i++) {
        if (a[1]>b[i]) {
        puntosPrimerParticipante ++ 
        }

        else if (b[i]>a[i]){
        puntosSegundoParticipante ++
        } else {

    }
  let ganador = puntosPrimerParticipante > puntosSegundoParticipante ? "La ganadora es el participante 1" +  : "El ganador es el participante 2 " ;
  
}
return ganador
}

encontrarGanador(alicia , bob)

