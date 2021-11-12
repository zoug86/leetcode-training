// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.
// Example 1:
// Input: nums = [3,2,3]
// Output: 3

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        obj.hasOwnProperty(nums[i]) ? obj[nums[i]]++ : obj[nums[i]] = 1;
    }
    return Object.keys(obj).sort((a, b) => obj[b] - obj[a])[0]
};

console.log(majorityElement(nums = [2, 2, 1, 1, 1, 2, 2]))