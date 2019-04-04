function f(st1,st2) {

    let i=0,j=0,newStr='';

    while(i < st1.length && j < st2.length){
        newStr+=st1.charAt(i++);
        newStr+=st2.charAt(j++);
    }

    if(i!=st1.length){
        newStr+=st1.substr(i);
    }
    if(j!=st2.length){
        newStr+=st2.substr(j);
    }
    return newStr;
}