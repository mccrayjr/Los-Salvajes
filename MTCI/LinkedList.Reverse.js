// Given link list reverse it
[1, 2, 3 , 4, 5]


const reverseLL = (head) => {
  let prev = null
  let current = head



  while(current){
    let next = current.next //holds the reference to the rest of the list
    current.next = prev //sets new value of current node to the previously traversed node (add everything from prev onto current.next)
    prev = current //holds the mutated Node value
    current = next //changing the value of this variable to the reference of the rest of the list
  }
  return prev
}

