function way1(str) {
    return str === str.toLowerCase().split('').reverse().join('');
}

function way2(str) {
    for(let i=0;i<str.length/2;i++){
        if(str[i] !== str[str.length-1-i]){
            return false;
        }
    }
    return true;
}