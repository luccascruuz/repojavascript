function calculadorasimples(x, y, z){
    switch(y){
        case '+': {
            return console.log(x+z)
            break
        }
        case '-': {
            return console.log(x-z)
            break
        }
        case '/': {
            return console.log(x/z)
            break
        }
        case '*': {
            return console.log(x*z)
            break
        }
        default: {
            return console.log("operação inválida")
            break
        }
    }
}

calculadorasimples(2, '+', 3)
calculadorasimples(2,'-', 1)
calculadorasimples(2, '*', 2)
calculadorasimples(6, '/', 2)
calculadorasimples(2, "dd", 5)