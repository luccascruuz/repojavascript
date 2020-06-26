function cardapio(codigo, qtd){
    switch(codigo){
        case 100: {
            var z = qtd*3
            console.log(z.toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'}))
            break
        }
    }
}
cardapio(100, 3)
