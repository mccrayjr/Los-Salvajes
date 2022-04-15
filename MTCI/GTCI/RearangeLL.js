class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }


  print_list() {
    let temp = this;
    while (temp !== null) {
      process.stdout.write(`${temp.value} `);
      temp = temp.next;
    }
    console.log();
  }
}

const reorder = (head) => {
  if(head === null || head.next){
    return //error handling
  }

  //find the middle of the linked list
  let slow = head,
      fast = head;
      while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
      }
  // slow is now pointing to the middle node
  let headSecondHalf = reverse(slow)
  let headFirstHalf = head

  //rearrange the ll to producte the output
  while(headFirstHalf !== null && headSecondHalf !== null){
    let temp = headFirstHalf.next
    headFirstHalf.next = headSecondHalf
    headFirstHalf = temp

    let secondTemp = headSecondHalf.next
    headSecondHalf.next = headFirstHalf
    headSecondHalf = secondTemp
  }
  // set the next of the last node to 'null'
  if(headFirstHalf !== null){
    headFirstHalf.next = null
  }
}

const reverse = (head) => {
  let prev = null

  while(head !== null){
    let next = head.next
    let head.next = prev
    prev = head
    head = next
  }
  return prev
}
