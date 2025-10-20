const BinaryTree = require("../BinaryTree");
const TNode = require("../TNode");

const Btree = new BinaryTree();
Btree.insert(10);
Btree.insert(5);
Btree.insert(20);
Btree.insert(3);
Btree.insert(7);
Btree.insert(15);
Btree.insert(25);

Btree.print();
console.log("Second Maximum Value:", Btree.findSecondMax());
