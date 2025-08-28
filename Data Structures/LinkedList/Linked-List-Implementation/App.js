const LinkedList = require("./LinkedList");

const list = new LinkedList();

list.add(5);
list.add(7);
list.add(12);
list.add(14);

list.printList();
list.remove(7);
list.printList();

console.log(list.includes(20));
console.log(list.includes(12));

list.insertAt(90,2);
list.printList();


