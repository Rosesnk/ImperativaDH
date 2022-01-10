function generacion (nacimiento){
    if (nacimiento<=1964)
    {return "Baby boomer ";
    }else if (nacimiento>=1965 && nacimiento<=1981){
        return "Generacion X";
    }else if (nacimiento>=1982 && nacimiento<=1997){
        return "Millennial";
    }else if (nacimiento>=1998){
        return "Generacion Z";
    }}
    
    generacion(1994);