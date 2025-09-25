const Stack = require("../Stack&Queue-Implementation/Stack");

class StackWithDeleteMiddle extends Stack {
    deleteMiddle(){
        if (this.isEmpty()) return "Stack is empty";

        let tempTop = this.top;
        let count = 0;
        
        while (tempTop){
            count++;
            tempTop = tempTop.next;
        }

        const middleIndex = Math.floor(count/2);

        if (middleIndex === 0) {
            this.top = this.top.next;
            return;
        }

        const tempStack = new Stack();
        let index = 0;
        
        while (!this.isEmpty()) {
            const val = this.pop();

            if (index === middleIndex) {
                index++;
                continue;
            }

            tempStack.push(val);
            index++;
        }

        while (!tempStack.isEmpty()) {
            this.push(tempStack.pop());
        }
        }
}

module.exports = StackWithDeleteMiddle;