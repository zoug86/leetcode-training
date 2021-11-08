// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.
// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
    return s.split(' ').filter(word => word !== "").pop().length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("luffy is still joyboy"))