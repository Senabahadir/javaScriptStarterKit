function friendNumers(num1, num2) {
    let toplam1 = 0
    let toplam2 = 0
    for(let i =2; i<=num1; i++ ){
        if(num1%i==0){
            toplam1+=i;
        }
    }
    for (let j=2; j<=num2; j++){
        if(num2%j==0){
            toplam2+=j
        }
    }
    console.log(toplam1)
    console.log(toplam2)
    if(toplam1 == toplam2){
        console.log("Arkadaş sayılar")
    }
    else{
        console.log("Arkadaş sayı değiller")
    }
      
}

friendNumers(2620, 2924)