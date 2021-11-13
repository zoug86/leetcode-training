// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// Example 1:

// Input: x = 121
// Output: true
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

const isPalindrome = function (x) {
    if (x < 0) return false;
    let y = x;
    let result = 0;
    while (y >= 1) {
        result = result * 10 + Math.floor(y % 10);
        y = y / 10;
    }
    return result === x;
};

console.log(isPalindrome(010));
console.log(isPalindrome(121));
console.log(isPalindrome(987654321));