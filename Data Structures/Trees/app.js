const BinarySearchTree = require('./BinarySearchTree');
const BinaryTree = require('./BinaryTree');
const TNode = require('./TNode');

console.log("=== Binary Tree Example ===");

const bt = new BinaryTree();
bt.root = new TNode(1);
bt.root.left = new TNode(2);
bt.root.right = new TNode(3);
bt.root.left.left = new TNode(4);
bt.root.left.right = new TNode(5);

console.log("Pre-order traversal:", bt.PreOrder());
console.log("In-order traversal:", bt.InOrder());
console.log("Post-order traversal:", bt.PostOrder());

console.log("Binary Tree Structure:");
bt.print();

console.log("\n=== Binary Search Tree Example ===");

const bst = new BinarySearchTree();
[50, 30, 70, 20, 40, 60, 80].forEach(value => bst.add(value));

console.log("In-order traversal:", bst.InOrder());
console.log("Pre-order traversal:", bst.PreOrder());
console.log("Post-order traversal:", bst.PostOrder());

console.log("Binary Search Tree Structure:");
bst.print();

console.log("Contains 60?", bst.contains(60));  // true
console.log("Contains 100?", bst.contains(100));  // false

console.log("Removing 30...");
bst.remove(30);
bst.print();

console.log("Removing root (50)...");
bst.remove(50);
bst.print();
