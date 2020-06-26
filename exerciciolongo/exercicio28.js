function paresimpar(){
    let numint = [1, 56, 3, 45, 78, 1, 59, 47, 22]
    let contpar = 0
    let contimpar = 0
    for(let i=0; i<numint.length; i++){
        if(numint[i]%2==0){
            contpar++
        }
        else{
            contimpar++
        }
    }
    return console.log(contpar, contimpar)
}
paresimpar()