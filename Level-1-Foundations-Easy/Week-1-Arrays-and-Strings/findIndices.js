function findIndices(nums, target) {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in numMap) return [numMap[complement], i];

    numMap[nums[i]] = i;
  }
}

console.log(findIndices([2, 7, 11, 15], 9));
console.log(findIndices([3, 2, 4], 6));
console.log(findIndices([3, 3], 6));
