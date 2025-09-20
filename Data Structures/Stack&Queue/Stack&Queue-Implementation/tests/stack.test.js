const Stack = require('../Stack'); 
const Node = require('../Node');

describe('Stack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    test('should push elements onto the stack', () => {
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
        expect(stack.size()).toBe(1);
        stack.push(2);
        expect(stack.size()).toBe(2);
    });

    test('should pop elements in LIFO order', () => {
        stack.push('a');
        stack.push('b');
        stack.push('c');
        expect(stack.pop()).toBe('c');
        expect(stack.pop()).toBe('b');
        expect(stack.pop()).toBe('a');
        expect(stack.isEmpty()).toBe(true);
    });

    test('Should return Stack is empty', () => {
        expect(stack.isEmpty()).toBe(true);
    });
});
