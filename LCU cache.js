class Node{
    constructor(key,value,next=null,prev=null){
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class LCUCache{
    constructor(limit = 10){
        this.size = 0;
        this.limit = limit;
        this.head = null;
        this.tail = null;
        this.cache = {};
    }

    //writing to the head

    write(key,value){
        this.ensureLimit();

        //if the LCU is empty
        if(!this.head){
            this.head = this.tail = new Node(key,value);
        }
        else{
            //make a new node...assign the current head prev to new node..make node the head
            const node = new Node(key,value);
            this.head.prev = node;
            this.head = node;
        }

        //add node to cache map and increment the size
        this.cache[key] = this.head;
        this.size++;
    }

    ensureLimit(){
        if(this.size === this.limit){
            this.remove(this.tail.key);
        }
    }

    remove(key){

        const node  =  this.cache[key];

        //if the node is not the head..make the next node the next of prev node
        if(node.prev !== null){
            node.prev.next = node.next
        }
        else{
            this.head = node.next;
        }

        //if node is not the tail..make the next node prev as the prev next
        if(node.next !== null){
            node.next.prev = node.prev;
        }
        else{
            this.tail = node.prev
        }

        //delete the key from the cache

        delete this.cache[key];
        this.size--;
    }

    read(key){

        if(this.cache[key]){
            const value = this.cache[key].value;
            this.remove(key);
            this.write(key,value);

            return value;
        }

        return null;
    }

    clear(){
        this.head = null;
        this.tail = null;
        this.cache = {};
        this.size = 0;
    }

}


let lru = new LCUCache(3);

lru.write('a', 123);
lru.write('b', 456);
lru.write('c', 789);

console.log(lru.read('b'));

lru.write('d', 0);

console.log(lru.read('c'));

