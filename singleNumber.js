// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
// Example 1:
// Input: nums = [2,2,1]
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
    // First Solution
    // let obj = {};
    // for (let i = 0; i < nums.length; i++) {
    //     if (obj[nums[i]]) {
    //         obj[nums[i]] += 1;
    //     } else {
    //         obj[nums[i]] = 1;
    //     }
    // }
    // for (key in obj) {
    //     if (obj[key] === 1) {
    //         return key;
    //     }
    // }
    // Second Solution
    nums.sort((a, b) => a - b);
    console.log(nums)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            continue;
        } else {
            if (i === 0) return nums[i];
            if (nums[i + 1] === nums[i + 2]) {
                continue;
            } else {
                return nums[i + 1];
            }
        }
    }

};

console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))
console.log(singleNumber([1]))