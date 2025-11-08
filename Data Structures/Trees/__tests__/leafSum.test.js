const BinaryTree = require("./BinaryTree");
const TNode = require("./TNode");

describe("SumOfLeafNodes()", () => {
  test("calculates correct leaf sum for given example", () => {
    const Btree = new BinaryTree();
    Btree.root = new TNode(9);
    Btree.root.left = new TNode(8);
    Btree.root.right = new TNode(12);
    Btree.root.left.left = new TNode(3);
    Btree.root.left.right = new TNode(7);
    Btree.root.right.left = new TNode(17);
    Btree.root.right.right = new TNode(23);
    Btree.root.left.left.right = new TNode(4);

    expect(Btree.SumOfLeafNodes()).toBe(51);
  });

  test("calculates sum with negative leaf values", () => {
    const tree = new BinaryTree();
    tree.root = new TNode(-10);
    tree.root.left = new TNode(-5);
    tree.root.right = new TNode(-20);
    tree.root.left.left = new TNode(-2);
    tree.root.left.right = new TNode(-3);

    // Leaf nodes are -2, -3, and -20
    expect(tree.SumOfLeafNodes()).toBe(-25);
  });
});
