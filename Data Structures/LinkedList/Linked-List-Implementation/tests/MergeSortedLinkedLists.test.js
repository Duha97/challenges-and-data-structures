const LinkedList = require("./LinkedList"); 

describe("mergeSortedLists()", () => {
  test("One list is empty", () => {
    let list1 = new LinkedList();
    list1.add(1);
    list1.add(3);
    list1.add(5);

    let emptyList = new LinkedList();

    let merged = LinkedList.mergeSortedLists(list1, emptyList);

    let result = [];
    let current = merged.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }

    expect(result).toEqual([1, 3, 5]);
  });

  test("Both lists are empty", () => {
    let empty1 = new LinkedList();
    let empty2 = new LinkedList();

    let merged = LinkedList.mergeSortedLists(empty1, empty2);

    expect(merged).toBeNull();
  });

  test("Merging non-empty lists", () => {
    let list1 = new LinkedList();
    list1.add(1);
    list1.add(4);
    list1.add(7);

    let list2 = new LinkedList();
    list2.add(2);
    list2.add(3);
    list2.add(6);

    let merged = LinkedList.mergeSortedLists(list1, list2);

    let result = [];
    let current = merged.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }

    expect(result).toEqual([1, 2, 3, 4, 6, 7]);
  });
});
