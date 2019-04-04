function primeFactor(number) {
    let primeArray = [],isPrime;

    //check if number is divisible
    for(let i=2; i<=number; i++){
        if(number%i===0){

            // if that divisor is a prime number
            for(let j=2; j<=i/2; j++){
                if(i%j ===0){
                    isPrime = false;
                }
                else{
                    isPrime = true;
                }

                if(isPrime){
                    number = number/i;
                    primeArray.push(i);
                }
            }
        }
    }
}