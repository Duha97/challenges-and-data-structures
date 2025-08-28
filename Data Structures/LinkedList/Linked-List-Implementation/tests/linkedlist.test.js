const list = require('./LinkedList');


  test('should add nodes to the list', () => {
    list.add(1);
    list.add(2);
    list.add(3);

    expect(list.head.data).toBe(1);
    expect(list.head.next.data).toBe(2);
    expect(list.head.next.next.data).toBe(3);
  });

  test('should remove a node by value', () => {
    list.add(10);
    list.add(20);
    list.remove(10);
    expect(list.printList()).toEqual([20]);
  });

  test('includes() should return true if value exists', () => {
    list.add(10);
    list.add(20);
    expect(list.includes(20)).toBe(true);
    expect(list.includes(30)).toBe(false);
  });

  test('insertAt() should insert node at specific index', () => {
    list.add(10);
    list.add(30);
    list.insertAt(20, 1);
    expect(list.printList()).toEqual([10, 20, 30]);
  });

  test('insertAt() throws error for invalid index', () => {
    list.add(10);
    expect(() => list.insertAt(20, 5)).toThrow("Index out of bounds");
  });

