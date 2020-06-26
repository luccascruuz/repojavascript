function valorserpago(idade){
    if(idade<=10){
        var valortotal = 180
        return console.log(valortotal.toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'}))
    }
    else if(idade<=30){
        valortotal = 150
        return console.log(valortotal.toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'}))
    }
    else if(idade<=60){
        valortotal = 195
        return console.log(valortotal.toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'}))
    }
    else if(idade>60){
        valortotal =230
        return console.log(valortotal.toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'}))
    }
}
valorserpago(25)