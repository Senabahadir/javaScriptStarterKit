function findPrime(...numbers) {
    let sonuc = true
    console.log(numbers)
    for (let i=0; i<numbers.length; i++){
        for(let j=2; j<numbers[i]; j++){
            if(numbers[i] % j ==0){
                sonuc =false;
                break;
            }
        }
        if(sonuc){
            console.log(numbers[i] + " Asal")
        }
        else{
            console.log(numbers[i] + " Asal değil")
        }
    }
}

findPrime(7, 8, 1)