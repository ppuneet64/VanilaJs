/**
 * 
 * A queue is a data structure that follows First In First Out (FIFO) principle. The element that is added first is accessed at first. This is like being in a queue to get a movie ticket. The first one gets the ticket first.
 */

class Queue {
    constructor() {
        this.items = [];
    }

    /**
     * add element to the queue
     * @param {any} element to be added in queue
     * @returns added item
     */
    enqueue(element) {
        return this.items.push(element);
    }

    /**
     * remove element from the queue
     * @returns removed items
     */
    dequeue() {
        if (this.items.length > 0) {
            return this.items.shift();
        }
    }

    /**
     * view the last element in queue
     * @returns Last Item
     */
    peek() {
        return this.items[this.items.length - 1];
    }

    /**
     * Check if Queue is empty or not
     * @returns true || false
     */
    isEmpty() {
        return this.items.length == 0;
    }

    /**
     * the size of the queue
     * @returns size of queue
     */
    size() {
        return this.items.length;
    }

    /**
     * empty the queue
     */
    clear() {
        this.items = [];
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);
console.log(queue.items);

queue.dequeue();
console.log(queue.items);

console.log(queue.peek());

console.log(queue.isEmpty());

console.log(queue.size());

queue.clear();
console.log(queue.items);