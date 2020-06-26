function planosalarial(x, y){
    switch(x){
        case 'A': {
            var z = y*0.1+y
            return console.log(z)
            break
        }
        case 'B': {
            var z = y*0.15+y
            return console.log(z)
            break
        }
        case 'C': {
            var z = y*0.2+y
            return console.log(z)
            break
        }
        default: {
            return console.log('plano inválido')
        }
    }
}

planosalarial('A', 100)
planosalarial('B', 100)
planosalarial('C', 100)
planosalarial("D", 100)