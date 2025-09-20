const Node = require("./Node");

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.rear) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    dequeue() {
        if (!this.front) return "Queue is empty, nothing to dequeue";
        const removedValue = this.front.value;
        this.front = this.front.next;
        if (!this.front) this.rear = null;
        this.size--;
        return removedValue;
    }

    peek() {
        return this.front ? this.front.value : null;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
}

module.exports = Queue;