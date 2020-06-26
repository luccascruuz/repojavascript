/*Um homem decidiu ir à uma revenda comprar um carro. 
Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas 
e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. 
Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que 
não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui” */

function comprarcarro(x){
    switch(x){
        case 'hatch': {
            return console.log('Compra efetuada com sucesso')
            break
        }
        case 'sedans': {
            return console.log('tem certeza que não prefere esse modelo?')
            break
        }
        case 'motocicleta':{
            return console.log('tem certeza que não prefere esse modelo?')
            break
        }
        case 'caminhonete':{
            return console.log('tem certeza que não prefere esse modelo?')
            break
        }
        default: {
            return console.log('não trabalhamos com esse tipo de automovel aqui')
        }
    }
}

comprarcarro('hatch')
comprarcarro('sedans')
comprarcarro('motocicleta')
comprarcarro('caminhonete')
comprarcarro('teu')