// Given a string s, return the longest palindromic substring in s.
// Example 1:
// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

/**
 * @param {string} s
 * @return {string}
 */

// depp clones objects, arrays and functions
const superClone = (object) => {
    let cloning = {};

    Object.keys(object).map(prop => {
        if (Array.isArray(object[prop])) {
            cloning[prop] = [].concat(object[prop])
        } else if (typeof object[prop] === 'object') {
            cloning[prop] = superClone(object[prop])
        } else cloning[prop] = object[prop]
    })

    return cloning
}

let obj = { a: 1, b: 2 }

let obj2 = superClone(obj);

console.log(obj2 === obj)

obj2.a = 10;

console.log(obj2, obj)
