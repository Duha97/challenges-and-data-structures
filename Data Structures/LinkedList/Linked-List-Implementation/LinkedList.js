const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  remove(data){

    if(this.head === null)
      return;

    if(this.head.data === data){
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    }
  }

  printList() {

    let current = this.head;

    if (current === null) {
      console.log("List is empty");
      return;
    }

    let values = [];
    while (current !== null) {
      values.push(current.data);
      current = current.next;
    }

    console.log("Head --> ", values.join(" --> "), " --> Null");
  }

  includes(data){
    if(this.head === null) 
      console.log("List is Empty");

    let current = this.head;
    while(current){
      if(current.data === data)
        return true;
      current = current.next;
    }
    return false;
  }

  insertAt(data,index){
   if (index < 0) throw new Error("Index must be non-negative");
   const newNode = new Node(data);
   
   if (index === 0){
    newNode.next = this.head;
    this.head = newNode;
    return;
   }

  let current = this.head;
  let previous = null;
  let i = 0;

    while (current && i < index) {
      previous = current;
      current = current.next;
      i++;
    }

    if (i !== index) throw new Error("Index out of bounds");

    newNode.next = current;
    previous.next = newNode;
  }

  reverse(data){
    if(this.head === null){
      console.log("List is empty, please add nodes");
      return;
    }

    if (!this.head.next) {
      console.log("Single node list. No changes made.");
      this.printList(data);
      return;
    } 

    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;

  }
}

module.exports = LinkedList;
