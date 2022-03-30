// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

let test = [7, 1, 2, 3, 9];
let secondCase = [6, 9, 3, 4, 5, 8];

//multiply short side by "width" (dofference of indices)
// empty or 1 value should return 0
//nested loop
//min(a, b) * (b - a)
//maxArea variable

const MostWater = (arr) => {
  let maxArea = 0
  for(let i = 0; i < arr.length; i++){
    for(let j= i + 1; j < arr.length; j++){
      let currentArea = Math.min(arr[i], arr[j]) * (j - i);
        maxArea = Math.max(currentArea, maxArea)
    }
  }
  return maxArea
}
//time: O(n^2)
//Space: O(1)

//Shifting Pointers
//Starting with two pointers on the outside for max area
//Move in whichever side is shorter
//store max area
//compare new width * height against  max area
const MostWaterOpt = (arr) => {
  let maxArea = 0
  let left = 0
  let right = arr.length - 1;
  let height = 0
  let width = 0
  let workingArea = 0

  while(left < right){
    height = Math.min(arr[left], arr[right])
    width = right - left
    workingArea = height * width
    maxArea = Math.max(maxArea, workingArea)

    if(arr[left] > arr[right]){
      right--
      continue
    } else {
      left++
    }
  }
  return maxArea
}

console.log(MostWaterOpt(test))
console.log(MostWater(test))
