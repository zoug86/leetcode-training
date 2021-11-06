// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        switch (c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }

        }
    }
    return stack.length === 0;
};

console.log(isValid("{[]}"));
//console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
// console.log(isValid("()"));
// console.log(isValid("){"));
//console.log(isValid("(){}}{"));
// console.log(isValid("[({])}"));