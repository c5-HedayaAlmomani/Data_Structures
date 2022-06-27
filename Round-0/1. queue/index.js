/* 
--- Description
 Create a queue data structure. The queue should be a class with methods:
    - enqueue: stores an element in the queue
    - dequeue: removes the first entered element from the queue
    - rear: returns last item
    - front: returns first item
    - size: returns the size of the queue


--- Examples
    const q = new Queue();
    q.enqueue(1);  // queue is now [1]
    q.enqueue(5); // queue is now [1, 5]
    q.dequeue(); // queue is now [5]
*/
class Queue {

    constructor() {
        this.data = [];
      }


enqueue(value){
    this.data.push(value);
}

dequeue(){
    this.data.shift(value);
}

rear(){
   return this.data[this.data.length-1]
}

front(){
    return this.data.length
}
size(){
    return this.data.length
}


}



module.exports = Queue;
