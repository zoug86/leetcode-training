// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const longestCommonPrefix = (strs) => {
    let commStr = '';
    for (let i = 0; i < strs[0].length; i++) {
        let occurence = 0;
        for (let j = 1; j < strs.length; j++) {
            if (strs[j].indexOf(strs[0][i], i) === i) {
                occurence++;
                //console.log(strs[0][i]);
            }
        }
        if (occurence === strs.length - 1) {
            commStr += strs[0][i];
        } else {
            break;
        }
    }
    console.log(commStr);
    return commStr;
}

longestCommonPrefix(["aa", "aa"]) // fl
longestCommonPrefix(["flower", "flow", "flight"]) // fl