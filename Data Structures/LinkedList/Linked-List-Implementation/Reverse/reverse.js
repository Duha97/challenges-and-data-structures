const LinkedList = require("../LinkedList");
const Node = require("../Node"); 

const list = new LinkedList();

list.add(10);
list.add(20);
list.add(30);
list.add(40);

console.log("Original List:");
list.printList();

list.reverse();

console.log("Reversed List:");
list.printList();
