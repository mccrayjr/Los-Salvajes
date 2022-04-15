class Node {
  constructor(value, next = null){
    this.value = value
    this.next = next;
  }
}

const findCycleStart = (head) => {
  let cycleLength = 0,
  slow = head,
  fast = head;

  while(fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if(slow === fast){
      cycleLength = calculateCycleLength(slow)
      break
    }
  }
  return findStart(head, length)
}

const calculateCycleLength = (slow) => {
  let current = slow,
  cycleLength = 0;
  while(true){
    current = current.next
    cycleLength += 1;
    if(current === slow){
      break
    }
  }
  return cycleLength
}
const findStart = (head, length) => {
  let p1 = head,
    p2 = head;

    while (length > 0) {
      p2 = p2.next;
      length -= 1;
    }

    while(length > 0){
      p1 = p1.next;
      p2 = p2.next;
    }
    return p1
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle start: ${findCycleStart(head).value}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle start: ${findCycleStart(head).value}`);

head.next.next.next.next.next.next = head;
console.log(`LinkedList cycle start: ${findCycleStart(head).value}`);
