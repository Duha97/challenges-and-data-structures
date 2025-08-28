const LinkedList = require('./LinkedList');

describe('LinkedList - reverse()', () => {
  let list;
  let consoleSpy;
  let printListSpy;


  beforeEach(() => {
    list = new LinkedList();
    consoleSpy = jest.spyOn(console, 'log'); 
    printListSpy = jest.spyOn(list,'printList');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
    printListSpy.mockRestore();
  });

test('Test reversing a non empty list',()=>{
  list.add(1);
  list.add(2);
  list.add(3);

  list.reverse();

  expect(list.head.data).toBe(3);
  expect(list.head.next.data).toBe(2);
  expect(list.head.next.next.data).toBe(3);
  expect(list.head.next.next.next).toBeNull();

  printList(list);
});

test('Test reversing a single node list',()=>{
  list.add(5);
  list.reverse(testData);

  expect(list.head.data).toBe(5);
  expect(list.head.next.data).toBe(null);

  expect(consoleSpy).toHaveBeenCalledWith("Single node list. No changes made.");
  expect(printListSpy).toHaveBeenCalledWith("testData");

});

test('Tests reversing empty list and logs message', () => {
    list.reverse();

    expect(list.head).toBeNull();
    expect(consoleSpy).toHaveBeenCalledWith("List is empty, please add nodes");
    expect(printListSpy).not.toHaveBeenCalled();
  });


test('reverses a list with duplicate values', () => {
    list.add(5);
    list.add(10);
    list.add(5);
    list.add(20);

    list.reverse();

    expect(list.head.data).toBe(20);
    expect(list.head.next.data).toBe(5);
    expect(list.head.next.next.data).toBe(10);
    expect(list.head.next.next.next.data).toBe(5);
    expect(list.head.next.next.next.next).toBeNull();

    expect(consoleSpy).not.toHaveBeenCalled();
    expect(printListSpy).not.toHaveBeenCalled();
  });
})