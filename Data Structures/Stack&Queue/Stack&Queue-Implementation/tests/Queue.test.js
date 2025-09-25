const Queue = require('../Queue');
const Node = require('../Node');

describe('Queue', () => {
    let queue;

    beforeEach(() => {
        queue = new Queue();
    });

    test('should return true when testing empty queue', () => {
        expect(queue.isEmpty()).toBe(true);
    });
    
    test('should enqueue elements and update size', () => {
        queue.enqueue(1);
        expect(queue.getSize()).toBe(1);
        expect(queue.peek()).toBe(1);
        queue.enqueue(2);
        expect(queue.getSize()).toBe(2);
        expect(queue.peek()).toBe(1);
    });

    test('should dequeue elements in FIFO order', () => {
        queue.enqueue('a');
        queue.enqueue('b');
        queue.enqueue('c');
        expect(queue.dequeue()).toBe('a');
        expect(queue.dequeue()).toBe('b');
        expect(queue.dequeue()).toBe('c');
        expect(queue.getSize()).toBe(0);
        expect(queue.isEmpty()).toBe(true);
    });

});