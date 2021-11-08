// Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.
// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
    let max = nums[0], pre = nums[0];

    for (let i = 1; i < nums.length; i++) {
        pre = Math.max(nums[i], pre + nums[i]);
        max = Math.max(pre, max);
    }
    return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray([5, 4, -1, 7, 8]))
console.log(maxSubArray([-2, -1]))
console.log(maxSubArray([-1]))
console.log(maxSubArray([1, 2, -1, -2, 2, 1, -2, 1, 4, -5, 4]))