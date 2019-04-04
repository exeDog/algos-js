class Stack {
    constructor(){
        this.item=[]
    }

    push(element){
        this.item.push(element);
    }
    pop(){
        if(this.item.length > 0){
            this.item.pop();
        }
    }
    peek(){
        return this.item[this.item.length-1];
    }
    isEmpty(){
        return this.item.length === 0;
    }
    printStack(){
        this.item.forEach(i=>
        console.log(i))
    }

}