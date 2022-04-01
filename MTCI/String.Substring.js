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
    memo[str[p1]] = true
    if(memo[str[p2]]){
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

console.log(longestSub(test))
