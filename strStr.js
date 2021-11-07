// Implement strStr().
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {

    if (needle.length > haystack.length) return -1;
    if (needle.length === 0) return 0;

    let arr1 = haystack.split('');
    let arr2 = needle.split('');
    for (let i = 0; i < arr1.length; i++) {
        let count = 0;
        for (let j = 0; j < arr2.length; j++) {
            if (arr2[j] === arr1[j + i]) {
                count++;
            }
        }
        if (count === arr2.length) {
            return i;
        }

    }
    return -1;
};

console.log(strStr(haystack = "aaaaaa", needle = "bba"));
console.log(strStr(haystack = "hellooll", needle = "lol"))
console.log(strStr(haystack = "hello", needle = "ll"))
console.log(strStr(haystack = "", needle = ""))
console.log(strStr(haystack = "", needle = "a"))
console.log(strStr(haystack = "mississippi", needle = "mississippi"))
console.log(strStr(haystack = "mississippi", needle = "issip"))

