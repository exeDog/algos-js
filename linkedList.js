class Node{
    constructor(value,next=null){
        this.value = value;
        this.next = next;

    }
}

class LinkedList {
    constructor(){
        this.head =null;
        this.tail =null;
        this.size =0;
    }

    //add to the end of the list
    add(value){

        const newNode = new Node(value);
        //if the list is empty
        if(!this.head){
            this.head = this.tail = new Node(value);

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        this.size++;

    }

    //adding to the head of the list
    preppend(value){
        const newNode = new Node(value,this.head);

        this.head = newNode;

        if(!this.tail){
            this.tail = newNode;
        }
        this.size++;
        return this;
    }

    insertAt(value,index){
        if(index > 0 && index > this.size){
            return false;
        }
        else{
            const newNode = new Node(value);
            let prev,curr;

            curr = this.head;

            if(index ===0){
                newNode.next = curr;
                this.head = newNode;
            }
            else{
                let i =0;

                while(i < index){
                    i++;
                    prev =curr;
                    curr =curr.next;
                }

                newNode.next = curr;
                prev.next = newNode;
            }
            this.size++;
        }
    }

    remove(index){
        if(index > 0 && index > this.size){
            return false;
        }
        else{
            let i =0;
            let prev,curr;
            curr = this.head;
            prev=curr;

            if(index ===0){
                this.head = curr.next;
            }
            else{
                while(i<index){
                    i++;
                    prev =curr;
                    curr = curr.next;
                }

                prev.next = curr.next;
            }
            this.size--;

            return curr.value;
        }
    }

    traverse(){
        let curr = this.head;

        while(curr){
            console.log(curr);
            curr = curr.next;
        }
    }

}