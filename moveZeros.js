// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === 0 && nums[j] !== 0) {
                let temp = nums[j];
                nums[j] = nums[i];
                nums[i] = temp
            }
        }
    }
    console.log(nums)
};

console.log(moveZeroes([0, 1, 0, 3, 12]))
console.log(moveZeroes([0]))
console.log(moveZeroes([0, 0, 1]))