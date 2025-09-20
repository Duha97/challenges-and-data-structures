const Node = require("./Node");

class Stack {
    constructor() {
        this.top = null;
    }

    push(value){
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop(){
        if (!this.top) return "Stack is empty, cannot pop";
        const removed = this.top.value;
        this.top = this.top.next;
        return removed;
    }

    peek(){

        return this.top?this.top.value:"Stack is empty, nothing to peek";
    }

    isEmpty(){
        return this.top === null;
    }
}

module.exports = Stack;