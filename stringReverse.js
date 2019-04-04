function way1(str) {
    return str.toLowerCase().split('').reverse().join('')
}

function way2(str){
    let newStr = '';
    for(let i=str.length-1;i>=0;i--){
        newStr += str[i];
    }
    return newStr;
}

function way3(str){
    return str ==='' ? '' : way3(str.substr(1))+ str.charAt(0);
}

console.log(way1('Priyank'));
console.log(way2('Priyank'));
console.log(way3('Priyank'));