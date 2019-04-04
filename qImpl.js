class Queue {
    constructor(){
        this.items =[];
    }

    enqueue(item){
        this.items.push(item);
    }

    dequeue(){
        if(!this.isEmpty())this.items.shift();
    }

    front(){
        if(!this.isEmpty())return this.items[0];
    }

    isEmpty(){
        return this.items.length===0;
    }

    print(){
        if(!this.isEmpty()){
            this.items.forEach(i=>{
                console.log(i);
            })
        }
    }
}