function valoranuidade(mespagar, anuidade){
    if(mespagar>0&&mespagar<13){
        let calcularanuidade  = anuidade*Math.pow(1.05, mespagar)
       return console.log(calcularanuidade.toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})) 
    }
    else{
        return console.log('mês inválido')
    }
}

valoranuidade(6, 60)