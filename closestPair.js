function closestPair(...args) {
    let min = Number.MAX_SAFE_INTEGER;
    let result= [];


    const sortedArr = args.sort((a,b)=> a-b);

    for (let i =0;i<sortedArr.length -1;i++){
        let diff = sortedArr[i+1] - sortedArr[i];
        if(diff < min){
            min = diff;
        }
    }

    for(let j =0;j<sortedArr.length-1;j++){
        let diff = sortedArr[j+1] - sortedArr[j];
        if(diff === min){
            result.push([sortedArr[j+1],sortedArr[j]]);
        }
    }

    return result;
}

console.log(closestPair(-20, -3910, -357, -3620, 7374, -7330, 30, 6246, -646, 266, -510, -460 ));