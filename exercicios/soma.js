let a = "Abobrinha";
let theValue = "n";
for (i = 0; i < a.length; i++){
    console.log(a[i])
    if (a[i]==theValue){
        break;
    }
}

const bilhetes = [12, 45, 67, 89, 23, 55 ,91, 34, 78];
let bilhetePremiado =23;
for ( let i = 0; i < bilhetes.length; i++){
    if(bilhetes[i] == bilhetePremiado){

    
    console.log(` O numero sorteado foi${bilhetes[i]}`)
        break;
    }else{
        console.log(` Nao foi sorteado ${bilhetes[i]}`)
    }
    }

    let i = 0;
    let n = 0;
    while(i < 5){
        i++;
        if(i==3) {
            continue;
        }
        console.log(i)
    }


