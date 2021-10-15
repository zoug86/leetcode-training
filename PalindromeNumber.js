// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// Example 1:

// Input: x = 121
// Output: true
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

const isPalindrome = function(x) {
    const str = x.toString();
    let j = str.length - 1;
    let count = 0;
    
    for(let i = 0; i < Math.floor(str.length / 2); i++) {
         if(str[i] === str[j]){
            count++;
            j--;
         }
         else return false;
    }
    // console.log(str.length/2)
    if(count === Math.floor(str.length / 2)) return true;

};

console.log(isPalindrome(01556465510));