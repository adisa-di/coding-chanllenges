/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    
  let result = []
  let p1 = 0
  
  // find location for the first pointer
  while (nums[p1] < 0 && p1 <= nums.length - 1) {
      p1 += 1
  }
  
  let p2 = p1 - 1 // set p2 to start left of p1

  while (p2 >= 0 && p1 <= nums.length - 1) {
      
      const sq1 = Math.pow(nums[p1], 2);
      const sq2 = Math.pow(nums[p2], 2);
      
      if (sq1 < sq2) {
          result.push(sq1);
          p1 += 1; 
      } else if (sq1 > sq2) {
          result.push(sq2);
          p2 -= 1; 
      } else {  // push both
          result.push(sq1, sq2);
          p1 += 1; 
          p2 -= 1; 
      }
  }
  
  while (p1 <= nums.length - 1) {
      result.push(Math.pow(nums[p1], 2));
      p1 += 1;
  }
  
  while (p2 >= 0) {
      result.push(Math.pow(nums[p2], 2));
      p2 -= 1;
  }
  
  return result;
};

var twoSum = function(numbers, target) {
    
  // start at both sides of the list
  let left = 0; 
  let right = numbers.length - 1; 
  
  while (left < right) {
      const sum = numbers[left] + numbers[right];
      if (sum > target) {
          right -= 1;
      } else if (sum < target) {
          left += 1;
      } else {
          return [left + 1, right + 1];
      }
  }    
};

console.log(sortedSquares([-3, -3, -2, 1, 4, 5, 6, 8]));