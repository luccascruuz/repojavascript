function sistemasdenotas(x){
    if (x % 5 > 2 && x>37) {
        var nota = x + (5 - (x % 5))
    } else {
        nota = x
    }
    if(nota<40){
        console.log("REPROVADO com nota: " + nota)
    }
    else{
        console.log("APROVADO com nota: " + nota)
    }

}

sistemasdenotas(38)
