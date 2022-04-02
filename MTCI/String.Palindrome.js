let test1 = 'aabaa'
let test2 = "aabbaa"

const isPal = (str) => {
  str = str.replace(/[^A-Za-z0-9]/g).toLowerCase()
  let left = 0
  let right = 0

  if(str.length % 2 === 0){
    left = (str.length / 2) - 1
    right = (str.length / 2)
    console.log("Inside if", [left, right], str)

  } else {
    left = Math.floor(str.length / 2)
    right = Math.floor(str.length / 2)
    console.log("Inside else", [left, right], str)
  }

  while( left >= 0 && right < str.length){
    if(str[left] !== str[right]){
      return false
    }
    right++
    left--
    }

  return true
}

const someFunc = (str, left, right) => {
  while(left <= right){
    if(str[left] !== str[right]){
      return false
    }
    right--
    left++
}
return true
}

const isKindaPal = (str) => {
  let left = 0
  let right = str.length - 1

  while(left <= right){
    if(str[left] !== str[right]){
     return someFunc(str. left + 1, right) || someFunc(str. left, right - 1) //if either returns true, it returns true, if both false, returns false
    }
    right--
    left++
  }
  return true
}

console.log(isPal(test1))
console.log(isPal(test2))
