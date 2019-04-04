function f(number,...args) {
let sum1 = 0,sum2 = 0;

for(let i=0;i<number/2;i++){
    sum1+= args[i];
}

for(let j = number/2; j<number;j++){
    sum2 += args[j];
}

return Math.abs(sum1-sum2)
}

console.log(f(6, 1,2,1,2,1,3));

