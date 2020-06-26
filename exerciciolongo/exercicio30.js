function maiormenor(){
    let vet = [11, 16, 23, 17, 18, 45, 9, 15]
    let maiornum = vet[0]
    let menornum = vet[0]
    for(let i =1; i<vet.length; i++){
        if(vet[i]>maiornum){
            maiornum = vet[i]
        }
        else if(vet[i]<menornum){
            menornum = vet[i]
        }
    }
    return console.log(maiornum, menornum)
}
maiormenor()