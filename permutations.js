function permutations(str) {
    let result =[];

    if(str.length ===1){
        result.push(str)
        return result;
    }

    for(let i =0;i<str.length;i++){
        let firstChar = str[i];
        let remainingChars = str.substring(0,i)+str.substring(i+1);
        let permutation = permutations(remainingChars);
        for(let j =0; j< remainingChars.length;j++){
            result.push(firstChar + permutation[j]);
        }
    }

    return result;
}