const TNode = require("./TNode");
class BinaryTree {
    constructor(root) {
       this.root = null;
    }

    insert(value){
        if (!this.root) {
        this.root = new TNode(value);
        return;
        }
    this.insertHelperMethod(this.root, value);
    }

    insertHelperMethod(node,value){
        if (value < node.value) {
            if (node.left === null) {
                node.left = new TNode(value);
            }
            else this.insertHelperMethod(node.left,value)

        }
        else{
            if(node.right === null){
                node.right = new TNode(value);
            }
            else this.insertHelperMethod(node.right,value);
        }
    }

    //Order tree (Root-left-right)
    PreOrder(node=this.root, result = []){
        if(node){
            result.push(node.value);
            this.PreOrder(node.left,result);
            this.PreOrder(node.right, result);
        }
        return result;
    }

    //Order tree (Left-Root-right)
    InOrder(node=this.root, result =[]){
        if(node){
            this.InOrder(node.left,result);
            result.push(node.value);
            this.InOrder(node.right,result);
        } 
        return result;
    }

    //Order tree (Left-Right-Root)
    PostOrder(node=this.root, result =[]){
        if(node){
            this.PostOrder(node.left,result);
            this.PostOrder(node.right,result);
            result.push(node.value);
        } 
        return result;      
    }

    print(node = this.root, prefix = "", isLeft = true) {
        if (node !== null) {
            console.log(prefix + (isLeft ? "├── " : "└── ") + node.value);
            this.print(node.left, prefix + (isLeft ? "│   " : "    "), true);
            this.print(node.right, prefix + (isLeft ? "│   " : "    "), false);
    }
    }

    findSecondMax() {
    if (!this.root) {
      console.log("Tree is empty");
      return null;
    }

    let first = -Infinity;
    let second = -Infinity;

    function traverse(node) {
      if (!node) return;

      if (node.value > first) {
        second = first;
        first = node.value;
      } else if (node.value > second && node.value < first) {
        second = node.value;
      }

      traverse(node.left);
      traverse(node.right);
    }

    traverse(this.root);

    if (second === -Infinity) {
      console.log("Tree does not have a second maximum value");
      return null;
    }

    return second;
  }

  SumOfLeafNodes(node = this.root) {
  try {
    // If tree is empty
    if (!node) {
      console.log("Tree is empty");
      return 0;
    }

    // Base case: leaf node
    if (!node.left && !node.right) {
      return node.value;
    }

    // Recursive case: sum from left and right subtrees
    let leftSum = this.SumOfLeafNodes(node.left);
    let rightSum = this.SumOfLeafNodes(node.right);

    return leftSum + rightSum;

  } catch (error) {
    console.error("Error calculating sum of leaf nodes:", error);
    return 0;
  }
}



}

module.exports = BinaryTree;
