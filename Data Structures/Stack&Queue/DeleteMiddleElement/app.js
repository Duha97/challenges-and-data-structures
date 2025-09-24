const StackWithDeleteMiddle = require("./StackWithDeleteMiddle");

const stack = new StackWithDeleteMiddle();

[1, 2, 3, 4, 5].forEach(val => stack.push(val));

console.log("Before deleting middle:");
let current = stack.top;
while (current) {
    console.log(current.value);
    current = current.next;
}

stack.deleteMiddle();

console.log("\nAfter deleting middle:");
current = stack.top;
while (current) {
    console.log(current.value);
    current = current.next;
}

console.log("\nAfter deleting another middle (even number of elements):");
stack.deleteMiddle();
current = stack.top;
while (current) {
    console.log(current.value);
    current = current.next;
}