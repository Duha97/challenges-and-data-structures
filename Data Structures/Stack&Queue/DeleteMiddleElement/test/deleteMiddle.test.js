const StackWithDeleteMiddle = require('../StackWithDeleteMiddle');


describe('deleteMiddle()', () => {
    let stack;

    beforeEach(() =>{
        stack = new StackWithDeleteMiddle;
    });

test('Delete middle value of stack with odd number of elements',()=>{
    const stack = new StackWithDeleteMiddle();
    [1, 2, 3, 4, 5].forEach(v => stack.push(v)); 

    stack.deleteMiddle();

    let node = stack.top;
    const values = [];
    while (node) {
      values.push(node.value);
      node = node.next;
    }

    expect(values).toEqual([5, 4, 2, 1]);
});

test('Delete middle value of stack with even number of elements',()=>{
    const stack = new StackWithDeleteMiddle();
    [1, 2, 3, 4, 5, 6].forEach(v => stack.push(v)); 

    stack.deleteMiddle();

    let node = stack.top;
    const values = [];
    while (node) {
      values.push(node.value);
      node = node.next;
    }

    expect(values).toEqual([6, 5, 4, 2, 1]);
});

test('Delete from an empty stack',()=>{
    const stack = new StackWithDeleteMiddle();
    const result = stack.deleteMiddle();
    expect(result).toBe("Stack is empty");
    expect(stack.top).toBeNull();

});

test('Delete from a stack with one element',()=>{
    const stack = new StackWithDeleteMiddle();
    stack.push(42);

    stack.deleteMiddle();

    expect(stack.top).toBeNull();
});
});