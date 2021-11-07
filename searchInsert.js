// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
    if (target < nums[Math.floor(nums.length / 2)]) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === target || nums[i] > target) {
                return i;
            }
        }
        return Math.floor(nums.length / 2);
    }
    if (target >= nums[Math.floor(nums.length / 2)]) {
        for (let i = Math.floor(nums.length / 2); i < nums.length; i++) {
            if (nums[i] === target || nums[i] > target) {
                return i;
            }
        }
        return nums.length;
    }

};

console.log(searchInsert([1, 3, 5, 6], 4))
// console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 7))
// console.log(searchInsert([1, 3, 5, 6], 2))
// console.log(searchInsert([1], 0))