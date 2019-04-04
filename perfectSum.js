function perfectSum(arr,total) {

    arr = arr.filter(num=>num <= total);

    arr.sort((a,b)=>b-a);

    const result = [];

    while(arr.length > 0){
        let i,sum,addedIndices;

        for(i=0;i<arr.length;i++){
            if(sum+arr[i]<=total){
                sum += arr[i];
                addedIndices.push(i);
            }
        }

        const subset = [];
        for(i)
    }

}