const MinStack = require("./minStack");

describe('minStack', () => {
    let stack;

    beforeEach(() => {
        stack = new MinStack();
    });

    test('Retrieve the minimum value in stack', () =>{
        [12,2,3,4,5].forEach(val => stack.push(val));
        expect(stack.getMin()).toBe(2);
    });

    test('Test pop and getMin', () =>{
        [10,20,30,40,5].forEach(val => stack.push(val));
        stack.pop();
        expect(stack.getMin()).toBe(10);
        });

    test('Test push and getMin', () =>{
        [10,20,30,40,50].forEach(val => stack.push(val));
        expect(stack.getMin()).toBe(10);
        });

});