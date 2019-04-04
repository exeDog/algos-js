function anagram(str1,str2) {


    if(str1.length !== str2.length){
        return false;
    }

    let strCount= {};

    Array.prototype.forEach.call(str1,(char)=>{
        strCount[char] = strCount[char] ? strCount[char]+1: 1;
    });

    let strLength = str2.length;

    for(let i =0; i< strLength;i++){
        if(!strCount[str2[i]]){
            return false;
        }
        else{
            strCount[str2[i]] = strCount[str[i]]-1
        }
    }
    return true;
}