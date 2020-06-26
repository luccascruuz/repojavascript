function fatorial(num){
    if(num<2) return 1;
    else return num*fatorial(num-1)
}

console.log(fatorial(3))