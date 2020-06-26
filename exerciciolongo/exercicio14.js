function feiralivre(x){
    switch(x){
        case 'maça':{
            return console.log('Não vendemos essa fruta aqui')
            break
        }
        case 'kiwi': {
            return console.log('Estamos com escasssez de kiwis')
            break
        }
        case 'melancia': {
            return console.log('Aqui está, são 3 reais o quilo')
            break
        }
        default: {
            console.log('erro no console')
        }
    }
}

feiralivre('maça')
feiralivre('melancia')
feiralivre('kiwi')
feiralivre("erer")