function diffInArray(arr1,arr2) {
    const concatArray =  arr1.concat(arr2);

    return concatArray.filter(item => !arr1.includes(item) || !arr2.includes(item));
}

function sameInArray(arr1,arr2){
    const union = [];
    arr1.forEach(i => {
        if(arr2.includes(i)){
            union.push(i)
        }
    });
    return union;
}


console.log(diffInArray([1,5,3],[2,5,3,9]));
console.log(sameInArray([1,5,3],[2,5,3,9]));

