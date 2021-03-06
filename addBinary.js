// Given two binary strings a and b, return their sum as a binary string.
// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
    // VERY LONG SOLUTION
    // let arr1 = a.split('');
    // let arr2 = b.split('');
    // let l = Math.abs(arr1.length - arr2.length);
    // if (arr1.length > arr2.length) {
    //     for (let i = 0; i < l; i++) {
    //         arr2.unshift('0')
    //     }
    // }
    // if (arr1.length < arr2.length) {
    //     for (let i = 0; i < l; i++) {
    //         arr1.unshift('0')
    //     }
    // }
    // let arr = [];
    // let c = '0';
    // for (let i = arr1.length - 1; i >= 0; i--) {
    //     if (arr1[i] === arr2[i]) {
    //         if (arr1[i] === '1' && c === '1') {
    //             arr.unshift('1');
    //             c = '1';
    //         } else if (arr1[i] === '0' && c === '1') {
    //             arr.unshift('1');
    //             c = '0'
    //         } else if (arr1[i] === '0' && c === '0') {
    //             arr.unshift('0');
    //             c = '0'
    //         } else {
    //             arr.unshift('0');
    //             c = '1'
    //         }
    //     } else {
    //         if (arr1[i] === '1' && c === '1') {
    //             arr.unshift('0');
    //             c = '1';
    //         } else if (arr1[i] === '0' && c === '1') {
    //             arr.unshift('0');
    //             c = '1'
    //         } else if (arr1[i] === '0' && c === '0') {
    //             arr.unshift('1');
    //             c = '0'
    //         } else {
    //             arr.unshift('1');
    //             c = '0'
    //         }
    //     }
    // }
    // if (c !== '0') {
    //     arr.unshift(c);
    // }
    // return arr.join("");

    // SHORT SOLUTION
    let carry = 0;
    let result = '';

    let n = a.length - 1;
    let m = b.length - 1;

    for (; n >= 0 || m >= 0 || carry > 0; n--, m--) {
        let sum = (+a[n] || 0) + (+b[m] || 0) + carry;
        if (sum > 1) {
            sum = sum % 2;
            carry = 1
        } else {
            carry = 0;
        }
        result = `${sum}${result}`
    }
    console.log(result)
    return result;
};

addBinary(a = "11101", b = "111")
addBinary(a = "11", b = "1")
addBinary(a = "1010", b = "1011")
addBinary(a = "100", b = "110010")