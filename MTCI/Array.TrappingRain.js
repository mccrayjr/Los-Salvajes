// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
let topo = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]


//Approach
// currentWater= min(maxLeft, maxRight) - Current hieght
// iterate over array, sending pointers righ and left, subtracting current height from the smaller left or right height
//Vars Total, maxL, maxR

//Time O(n^2)
//Space: O(1)

const trappingRain = (arr) => {
  let totalWater = 0

  for(let i = 0; i < arr.length; i++){
    let currentHeight = arr[i]
    let maxLeft = 0
    let maxRight = 0
    let left = i
    let right = i
    while(left >= 0){
      maxLeft = Math.max(maxLeft, arr[left])
      left--
    }

    while(right <= arr.length - 1){
      maxRight = Math.max(maxRight, arr[right])
      right++
    }
    let currentWater = Math.min(maxLeft, maxRight) - currentHeight
    if(currentWater > 0){
      totalWater += currentWater
    }
  }
  return totalWater
}

console.log(trappingRain(topo))

//Identify which pointer with lesser value
//Is this pointer val <= maxVal on that side
//if true update maxValue
//if not get water for that pointer value
//Move pointer inward
//Repeat for other pointer

//Time: O(n)
//Space: O(1)
const trappingRainOpt = (arr) => {
  let totalWater = 0
  let maxLeft = 0
  let maxRight = 0
  let left = 0
  let right = arr.length - 1

  while(left < right){
    if(arr[left] <= arr[right]){
      if (arr[left] >= maxLeft){
        maxLeft = arr[left]
      } else {
      totalWater += maxLeft - arr[left]
      }
      left++
    } else {
      if (arr[right] >= maxRight){
        maxRight = arr[right]
      } else {
      totalWater += maxRight - arr[right]
      }
      right--
      }
  }
return totalWater
}
//make totalRain variable
//two pointer left stationary right traversing right
//initially if left is less than right left++ & continue
//if right is less than left add the diff to total rain and right++
//if right is equal to/greater than left, set left to right idx and right to left +1
//(handling) if last elem (right) is less than or equal left add nothing

console.log(trappingRainOpt(topo))
