const BinaryTree = require("./BinaryTree");
const TNode = require("./TNode");

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  // Add a node
  add(value) {
    const newNode = new TNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  // Check if value exists
  contains(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

  // Remove a node
  remove(value, node = this.root, parent = null) {
    if (!node) return;

    if (value < node.value) {
      this.remove(value, node.left, node);
    } else if (value > node.value) {
      this.remove(value, node.right, node);
    } else {
      // Node to delete found
      if (node.left && node.right) {
        // Node with 2 children
        let min = this._findMin(node.right);
        node.value = min.value;
        this.remove(min.value, node.right, node);
      } else {
        const child = node.left || node.right;

        if (!parent) {
          this.root = child;
        } else if (parent.left === node) {
          parent.left = child;
        } else {
          parent.right = child;
        }
      }
    }
  }

  // Helper to find minimum node in subtree
  _findMin(node) {
    while (node.left) node = node.left;
    return node;
  }
}

module.exports = BinarySearchTree;