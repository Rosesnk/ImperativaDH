function mayorMenorQue100 (num1 , num2) {
    if (num1 + num2 < 100) {
        return "La suma de " + num1 + " y " + num2 + " es menor que 100"
    } else if ( num1 + num2 > 100){
        return "La suma de " + num1 + " y " + num2 + " es mayor que 100"
    } else{
        return "La suma de " + num1 + " y " + num2 + " es exactamente 100"
    }
}

mayorMenorQue100 (57, 43)
