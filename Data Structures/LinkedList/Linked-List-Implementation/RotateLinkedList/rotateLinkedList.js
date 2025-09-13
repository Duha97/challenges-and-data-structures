const LinkedList = require("../LinkedList.js");
const Node = require("../Node");

let list = new LinkedList();
[1,2,3,4,5,6].forEach(num => {
  list.add(num);
});
list.printList();
list.rotateLeft(2);
list.printList();  
list.rotateLeft(-2);
list.printList();   
