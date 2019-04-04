function way1(number) {
    let a = 1;let b = 0;let i;

    while (number > 1){
        i = a;
        a = a+b;
        b= i;
        number--;
    }
    return b;
}

function way2(num) {
    if(num <= 1) return 1;
    return way2(num-1)+way2(num-2);
}

console.log(way2(10));