// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        obj.hasOwnProperty(nums[i]) ? obj[nums[i]]++ : obj[nums[i]] = 1;
        if (obj[nums[i]] > 1) return true;
    }

    return false;
};

console.log(containsDuplicate(nums = [1, 2, 3, 1]))
console.log(containsDuplicate(nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))