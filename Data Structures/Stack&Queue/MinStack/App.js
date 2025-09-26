const MinStack = require("./minStack");

const minStack = new MinStack();

minStack.push(15); 
minStack.push(7); 
minStack.push(12);
minStack.push(3);

console.log("Original stack:")
minStack.printStack();

let min = minStack.getMin(); 
let popped = minStack.pop(); 
console.log("Stack after pop:")
minStack.printStack();

min = minStack.getMin(); 
let peeked = minStack.top(); 

console.log("Stack after push(2):")
minStack.push(2); 
minStack.printStack(); 

min = minStack.getMin();