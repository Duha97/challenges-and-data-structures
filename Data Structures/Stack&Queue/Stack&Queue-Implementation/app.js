const Node = require("./Node");
const Stack = require("./Stack");
const Queue = require("./Queue");


const stack = new Stack();
stack.push(10); 
stack.push(20); 
stack.push(30); 

console.log(stack.pop());    
console.log(stack.peek());
console.log(stack.isEmpty());
stack.pop();
stack.pop();
console.log(stack.isEmpty());

const queue = new Queue();
queue.enqueue(10); 
queue.enqueue(20);
queue.enqueue(30); 

console.log(queue.dequeue()); 
console.log(queue.peek());
console.log(queue.isEmpty()); 
queue.dequeue(); 
queue.dequeue();
console.log(queue.isEmpty());
