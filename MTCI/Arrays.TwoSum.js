// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//Time and space

const twoSum = (arr, target) => {
  for(let i = 0; i < arr.length - 1; i++){
    let pointOne = arr[i]
    let numToFind = target - pointOne

    for(let j = i+1; j < arr.length; j++){
      let pointTwo = arr[j]
      if(pointTwo === numToFind){
        return [i, j]
      }
    }
  }
  return null
}

const twoSumOpt = (arr, target) => {
  let hash = {}
  for(let i = 0; i < arr.length - 1; i++){
    let pointOne = arr[i]
    let numToFind = target - pointOne
    if(hash[pointOne]){ //or (hash[pointOne] >= 0)
      return [i, hash[pointOne]]
    }
    hash[numToFind] = i
  }

}


//console.log(twoSum([1, 3, 7, 9, 2], 11))
console.log(twoSumOpt([1, 3, 7, 9, 2], 11))
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
