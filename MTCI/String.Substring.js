//Given a string s, find the length of the longest substring without repeating characters.
//is the string contiguous | does case sensitivity matter

let test = "abccabb"

//pointers one at start; one to travers
// memo keeping track of chars in string
//varibale of maxLength
//variable of current length

const longestSub = (str) => {
  if(str.length <= 1){
    return str.length
}

  let p1 = 0
  let p2 = 1
  let maxLength = 0
  let currLength = 0
  let memo = {}

  while(p1 < str.length - maxLength){
    memo[str[p1]] = p1
    if(memo[str[p2]] === ){
      memo = {}
      p1++
      p2 = p1 + 1
      maxLength = Math.max(maxLength, currLength)
      currLength = 0
      continue
    } else {
      memo[str[p2]] = true
      currLength++
      p2++
    }
  }
  return maxLength
}

let testTwo = "abccabb"

const longestSubOpt = (string) => {
  if(str.length <= 1){
    return str.length
}

  let left = 0
  let longest = 0
  let seenChars = {}
  for(let right = 0; right < string.length; right++){ //right needs to iterate through rest of st
    const currentChar = string[right] //character getting from string
    const prevSeenChar = seenChars[currentChar] //is the above character already in the map; if so returns index if not return undefined 
    if(prevSeenChar >= left){  // is the previously seen index is greater than the right, it's a duplicate
      left = prevSeenChar + 1 //new position to where we'll start checking unique substring
    }
    seenChars[currentChar] = right //updating the index of that character to current right index
    longest = Math.max(longest, right -left + 1)
  }
  return longest
}


console.log(longestSub(test))
