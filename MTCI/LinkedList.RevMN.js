//[1, 2, 3 , 4, 5] 


//I need variables to store previous, current, beginning, middle, and endd
//counter initiated at 1
//While loop
//Grabs beginning 
//inititated someFun at m and passes in counter && n and stores value middle -> reverses LL sect
//keeps traversing to grab the end value
//Second while loop
//resets counter to 1
//Traverses beggining
//sets next of beginning[m] to middle 
//continues traversing
//sets next of bginning[n] to end
//returns beginning

//conditonal if counter === m do "something"  if counter === n do "something else"
//counter ++

const revLL = (head1, currentCount1, right1) => {
  let current1 = head1
  let prev1 = null
  let tracker1 = currentCount1
  
  while(current1 && tracker1 <= right1 ){
    let next1 = current1.next
    current1.next = prev1
    prev1 = current1
    current1 = next1
    tracker1++
  }
  return prev1
}

const reverseLLmn = (head, left, right) =>{
  //things to keep track of
  let node = head
  let current = head
  let start = null // head [m - 1]
  let tail = null // eventually set to head[n + 1] 
  let middle = null
  let counter = 1
  
  while(current){ // taverses ll  and  establishes start/middle/tail
    counter++
    let next = current.next
    if(counter === left){
      start = current
      middle = revLL(next, counter, right)
    }
    if(counter === right){
      tail = current
    }
    current = next
  }
  
  current = start
  current.next = middle
  counter = left
  
  while(current) { //traverses current and adds tail to the end of middle
    counter++
    let next = current.next
    if(counter === right){
      current.next = tail
      break
    }
    current = next
  }
  return node
  
}

const solution = (head, m, n) =>{
  let currentPos = 1
  let currentNode = head
  let start = head
  
  while(currentPos < m){
    start = currentNode
    currentNode = currentNode.next
    currentPos++
  }
  let newList = null
  let tail = currentNode //this will ultimately be the last node in the reversed portion
  
  while(currentPos >= m && currentPos <= n){
    const next = currentNode.next
    currentNode.next = newList
    newList = currentNode
    currentNode = next
    currentPos++
  }
  start.next = newList
  tail.next = currentNode //connectiong it to the rest of the LL after traversal/reversal
  if(m > 1){
    return head
  }
  return newListaaa
}