let vet =  [10, 10, 10]
function mediaarit(){
    let soma = 0
    for(let i =0; i<vet.length; i++){
        soma += vet[i]
    }
    let media1 = soma/vet.length
    return console.log(media1)
}

mediaarit()