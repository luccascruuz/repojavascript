function sacardinheiro(valorsaque){
    let cont100=0
    let cont50=0
    let cont10=0
    let cont5=0
    let cont1=0
    let valornota = calcularvalornota(valorsaque)
    while(valorsaque>=valornota){
        switch(valornota){
            case 100: {
                valorsaque -= 100
                cont100++
                break
            }
            case 50: {
                valorsaque -= 50
                cont50++
                break
            }
            case 10: {
                valorsaque-=10
                cont10++
                break
            }
            case 5: {
                valorsaque-=5
                cont5++
                break
            }
            case 1: {
                valorsaque-=1
                cont1++
                break
            }

        }
        valornota = calcularvalornota(valorsaque)
    }
    return elaborarResultado(cont100, cont50, cont10, cont5, cont1)
}
function calcularvalornota(valorsaque){
    if(valorsaque>=100){
        return 100
    }
    else if(valorsaque>=50){
        return 50
    }
    else if(valorsaque>=10){
        return 10
    }
    else if(valorsaque>=5){
        return 5
    }
    else if(valorsaque>=1){
        return 1
    }
}
function elaborarResultado(cont100, cont50, cont10, cont5, cont1) {
    let resultado = ''

    if (cont100 > 0) {
        resultado += `${cont100} nota(s) de R$ 100. `
    }

    if (cont50 > 0) {
        resultado += `${cont50} nota(s) de R$ 50. `
    }

    if (cont10 > 0) {
        resultado += `${cont10} nota(s) de R$ 10. `
    }

    if (cont5 > 0) {
        resultado += `${cont5} nota(s) de R$ 5. `
    }

    if (cont1 > 0) {
        resultado += `${cont1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(sacardinheiro(159))
