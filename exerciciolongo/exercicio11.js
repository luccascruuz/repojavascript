function anobi(x){
    if(x%4==0){
        if(x%100!=0){
            return console.log(true)
        }
        else{
            return console.log(false)
        }
    }
    else if(x%400==0){
        return console.log(true)
    }
    else{
        return console.log(false)
    }
}

anobi(2016)
