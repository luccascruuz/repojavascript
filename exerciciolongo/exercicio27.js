function alturacrianca(altura1, taxacrescimento1, altura2, taxacrescimento2){
    if(altura1>altura2){
        let menoraltura = altura2
        let maioraltura = altura1
        let taxamenor = taxacrescimento2
        let taxamaior = taxacrescimento1
    } 
    else{
        menoraltura = altura1
        maioraltura = altura2
        taxamenor = taxacrescimento1
        taxamaior = taxacrescimento2
    }
    let cont =0
    while(menoraltura<=maioraltura){
        menoraltura+=taxamenor
        maioraltura+=taxamaior
        cont++
    }
    console.log('A menor criança ultrapassará em ' + cont + ' anos.')

}
alturacrianca(35, 2, 48, 1)