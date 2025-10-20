const { BinaryTree, BinarySearchTree, TNode } = require('../BinarySearchTree');

describe('BinaryTree', () => {
  let bt;

  beforeEach(() => {
    // Tree structure:
    //       1
    //     /   \
    //    2     3
    //   / \
    //  4   5
    bt = new BinaryTree();
    bt.root = new TNode(1);
    bt.root.left = new TNode(2);
    bt.root.right = new TNode(3);
    bt.root.left.left = new TNode(4);
    bt.root.left.right = new TNode(5);
  });

  test('Pre-order traversal returns [1, 2, 4, 5, 3]', () => {
    expect(bt.preOrder()).toEqual([1, 2, 4, 5, 3]);
  });

  test('In-order traversal returns [4, 2, 5, 1, 3]', () => {
    expect(bt.inOrder()).toEqual([4, 2, 5, 1, 3]);
  });

  test('Post-order traversal returns [4, 5, 2, 3, 1]', () => {
    expect(bt.postOrder()).toEqual([4, 5, 2, 3, 1]);
  });
});


describe('BinarySearchTree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
    [50, 30, 70, 20, 40, 60, 80].forEach(val => bst.add(val));
  });

  test('Adding nodes places them in correct position (in-order should be sorted)', () => {
    expect(bst.inOrder()).toEqual([20, 30, 40, 50, 60, 70, 80]);
  });

  test('Contains should return true for existing node', () => {
    expect(bst.contains(60)).toBe(true);
  });

  test('Contains should return false for non-existing node', () => {
    expect(bst.contains(100)).toBe(false);
  });

  test('Remove should delete a node and preserve BST structure', () => {
    bst.remove(30); // Has 2 children
    expect(bst.inOrder()).toEqual([20, 40, 50, 60, 70, 80]);

    bst.remove(20); // Leaf node
    expect(bst.inOrder()).toEqual([40, 50, 60, 70, 80]);

    bst.remove(70); // Has one child
    expect(bst.inOrder()).toEqual([40, 50, 60, 80]);
  });
});
