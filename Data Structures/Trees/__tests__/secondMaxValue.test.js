const BinaryTree = require('../BinaryTree');
const TNode = require('../TNode');

describe("Find Second Maximum Value in Binary Tree", () => {
  test("should find the 2nd maximum value in a normal binary tree", () => {
    const tree = new BinaryTree();
    tree.insert(10);
    tree.insert(5);
    tree.insert(20);
    tree.insert(3);
    tree.insert(7);
    tree.insert(15);
    tree.insert(25);

    expect(tree.findSecondMax()).toBe(20);
  });

  test("should handle an empty tree", () => {
    const tree = new BinaryTree();
    expect(tree.findSecondMax()).toBeNull();
  });

  test("should handle a tree with only one node", () => {
    const tree = new BinaryTree();
    tree.insert(10);
    expect(tree.findSecondMax()).toBeNull();
  });

  test("should handle duplicate maximum values", () => {
    const tree = new BinaryTree();
    tree.insert(10);
    tree.insert(10);
    tree.insert(5);
    tree.insert(7);
    expect(tree.findSecondMax()).toBe(7);
  });

  test("should handle a tree with negative values", () => {
    const tree = new BinaryTree();
    tree.insert(-10);
    tree.insert(-20);
    tree.insert(-5);
    expect(tree.findSecondMax()).toBe(-10);
  });
});
