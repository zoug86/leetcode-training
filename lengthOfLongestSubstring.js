// Given a string s, find the length of the longest substring without repeating characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    let subString = '';
    let arr = []
    for (let i = 0; i < s.length; i++) {
        if (subString.includes(s[i])) {
            arr.push(subString)
            i = s.indexOf(s[i]);
            subString = ''
        }
        if (!subString.includes(s[i])) {
            subString += s[i];
        }
    }
    arr.push(subString)
    arr.sort((a, b) => a.length - b.length)
    console.log(arr)
    return arr.pop().length;
};

// console.log(lengthOfLongestSubstring("abcabcbb"))
// console.log(lengthOfLongestSubstring("bbbbb"))
// console.log(lengthOfLongestSubstring("pwwkew"))
// console.log(lengthOfLongestSubstring(""))
// console.log(lengthOfLongestSubstring("cdd"))
console.log(lengthOfLongestSubstring("dvdf"))