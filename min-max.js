function secondMin(arr) {
    let min = Number.MAX_SAFE_INTEGER;
    let secondMin = Number.MAX_SAFE_INTEGER;

    for(let i=0;i<arr.length;i++){

        if(arr[i] < min){
            secondMin = min;
            min = arr[i];
        }

        if(arr[i] > min && arr[i] < secondMin){
            secondMin = arr[i];
        }
    }

    return secondMin;
}

function secondMax(arr) {
    let max = Number.MIN_SAFE_INTEGER;
    let secondMax = Number.MIN_SAFE_INTEGER;

    for(let i=0;i<arr.length;i++){
        if(arr[i] > max){
            secondMax = max;
            max = arr[i];
        }

        if(arr[i] < max && arr[i] > secondMax){
            secondMax = arr[i];
        }
    }

    return secondMax;
}


console.log(secondMin([1,2,3,1,5,56,1,6]));
console.log(secondMax([1,2,3,1,5,56,1,6]));