/**
 * 
 * The stack is a data structure that follows Last In First Out (LIFO) principle. The element that is added at last is accessed at first. This is like stacking your books on top of each other. The book that you put at last comes first.
 */
class Stack {
    constructor() {
        this.items = [];
    }

    /**
     * add element to the queue
     * @param {any} element to be added in queue
     * @returns added item
     */
    add(element) {
        return this.items.push(element);
    }

    /**
    * remove element from the stack
    * @returns removed items
    */
    remove() {
        if (this.items.length > 0) {
            return this.items.pop();
        }
    }

    /**
     * view the last element in stack
     * @returns Last Item
     */
    peek() {
        return this.items[this.items.length - 1];
    }

    /**
     * Check if Stack is empty or not
     * @returns true || false
     */
    isEmpty() {
        return this.items.length == 0;
    }

    /**
     * the size of the Stack
     * @returns size of Stack
     */
    size() {
        return this.items.length;
    }

    /**
     * empty the Stack
     */
    clear() {
        this.items = [];
    }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);
console.log(stack.items);

stack.remove();
console.log(stack.items);

console.log(stack.peek());

console.log(stack.isEmpty());

console.log(stack.size());

stack.clear();
console.log(stack.items);