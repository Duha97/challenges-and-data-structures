const TNode = require("./TNode");
class BinaryTree {
    constructor(root) {
       this.root = null;
    }

    insert(value){
        this.insertHelperMethod(this.root,value);
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


}

module.exports = BinaryTree;
