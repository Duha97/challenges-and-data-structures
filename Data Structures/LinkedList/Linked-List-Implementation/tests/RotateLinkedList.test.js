const LinkedList = require("../rotateLinkedList/rotateLinkedList");

describe("Rotate Linked List", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
    [1, 2, 3, 4, 5, 6].forEach(num => {
      let node = { data: num, next: null };
      if (!list.head) list.head = node;
      else {
        let current = list.head;
        while (current.next) current = current.next;
        current.next = node;
      }
    });
  });

  test("Rotate by k=0 (no change)", () => {
    list.rotateLeft(0);
    expect(list.display()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("Rotate by k=2", () => {
    list.rotateLeft(2);
    expect(list.display()).toEqual([3, 4, 5, 6, 1, 2]);
  });

  test("Rotate by k > length (k=7)", () => {
    list.rotateLeft(7);
    expect(list.display()).toEqual([2, 3, 4, 5, 6, 1]);
  });

  test("Rotate by negative k (k=-2, rotate right)", () => {
    list.rotateLeft(-2);
    expect(list.display()).toEqual([5, 6, 1, 2, 3, 4]);
  });
});
