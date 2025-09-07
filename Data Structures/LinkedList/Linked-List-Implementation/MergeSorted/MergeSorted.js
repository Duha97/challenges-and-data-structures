const LinkedList = require("../LinkedList");

const list1 = new LinkedList();
const list2 = new LinkedList();

list1.add(1);
list1.add(3);
list1.add(5);

list2.add(2);
list2.add(4);
list2.add(6);

const mergedList = LinkedList.mergeSortedLists(list1, list2);

console.log("Merged Sorted Linked List:");
mergedList.printList();
