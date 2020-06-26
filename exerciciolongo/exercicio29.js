function percorrervet(){
    let vet = [1, 11, 16, 23, 17, 18, 45, 9, 15]
    let cont =0
    let cont1 =0
    for(let i =0; i<vet.length; i++){
        if(vet[i]>=10&&vet[i]<=20){
            cont++
        }
        else{
            cont1++
        }
    }
    return console.log(cont, cont1)
}

percorrervet()