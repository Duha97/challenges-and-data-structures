class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(value){
        this.stack.push(value);
        if(this.minStack.length === 0 || value < this.minStack[this.minStack.length-1]){
            this.minStack.push(value);
        }
         
    }

    pop(){
        if (this.stack.length === 0) return null;
        const removed = this.stack.pop();
        
        if (removed === this.minStack[this.minStack.length - 1]) {
         this.minStack.pop();
        }

        return removed;        
    }

    top(){
        return this.stack[this.stack.length - 1] ?? null;
    }

    isEmpty(){
        return this.stack.length === 0;
    }

    getMin(){
        if(this.minStack.length === 0) return null;
        return this.minStack[this.minStack.length-1];
    }

    printStack(){
        console.log("Top ->" + this.stack.join(" -> ") + "(min:" +this.getMin() +")");
    }

}

module.exports = MinStack;