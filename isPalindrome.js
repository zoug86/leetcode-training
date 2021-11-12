// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing
// all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
    let str = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    for (let i = 0, j = str.length - 1; i < str.length / 2, j >= str.length / 2; i++, j--) {
        if (str[i] !== str[j]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))