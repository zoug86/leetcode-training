// Given a string s, return the longest palindromic substring in s.
// Example 1:
// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
    // if (s.length <= 1) return s;
    // let longPalin = '';
    // let sub = '';
    // for (let i = 0; i < s.length; i++) {
    //     for (let j = i; j < s.length; j++) {
    //         sub += s[j];
    //         if ((sub.length > longPalin.length) &&
    //             (sub.substring(0, Math.floor(sub.length / 2)) ===
    //                 sub.substring(sub.length % 2 === 0 ? Math.floor(sub.length / 2) : Math.floor(sub.length / 2) + 1, sub.length).split('').reverse().join(''))) {
    //             longPalin = sub;
    //         }
    //     }
    //     sub = '';
    // }
    // return longPalin;
    let max = '';
    for (let i = 0; i < s.length; i++) {
        // this loop is to take into account 
        // different palindromes like 'aba' and 'abba'
        for (let j = 0; j < 2; j++) {
            let left = i;
            let right = i + j;
            while (left >= 0 && s[left] === s[right]) {
                left--;
                right++;
            }
            // here imagine we get into string like
            // "sabbad", then
            // right = 5
            // left = 0
            // and actual length of "abba" should be "4"
            // 5 - 0 - 1 === 4
            if ((right - left - 1) > max.length) {
                max = s.substring(left + 1, right);
            }

        }
        // No better move exists
        if (Math.ceil(max.length / 2) >= s.length - i) break;
    }
    return max;
};

console.log(longestPalindrome("babad"))
console.log(longestPalindrome("cbbd"))
console.log(longestPalindrome("ac"))
console.log(longestPalindrome("a"))
console.log(longestPalindrome("cyyoacmjwjubfkzrrbvquqkwhsxvmytmjvbborrtoiyotobzjmohpadfrvmxuagbdczsjuekjrmcwyaovpiogspbslcppxojgbfxhtsxmecgqjfuvahzpgprscjwwutwoiksegfreortttdotgxbfkisyakejihfjnrdngkwjxeituomuhmeiesctywhryqtjimwjadhhymydlsmcpycfdzrjhstxddvoqprrjufvihjcsoseltpyuaywgiocfodtylluuikkqkbrdxgjhrqiselmwnpdzdmpsvbfimnoulayqgdiavdgeiilayrafxlgxxtoqskmtixhbyjikfmsmxwribfzeffccczwdwukubopsoxliagenzwkbiveiajfirzvngverrbcwqmryvckvhpiioccmaqoxgmbwenyeyhzhliusupmrgmrcvwmdnniipvztmtklihobbekkgeopgwipihadswbqhzyxqsdgekazdtnamwzbitwfwezhhqznipalmomanbyezapgpxtjhudlcsfqondoiojkqadacnhcgwkhaxmttfebqelkjfigglxjfqegxpcawhpihrxydprdgavxjygfhgpcylpvsfcizkfbqzdnmxdgsjcekvrhesykldgptbeasktkasyuevtxrcrxmiylrlclocldmiwhuizhuaiophykxskufgjbmcmzpogpmyerzovzhqusxzrjcwgsdpcienkizutedcwrmowwolekockvyukyvmeidhjvbkoortjbemevrsquwnjoaikhbkycvvcscyamffbjyvkqkyeavtlkxyrrnsmqohyyqxzgtjdavgwpsgpjhqzttukynonbnnkuqfxgaatpilrrxhcqhfyyextrvqzktcrtrsbimuokxqtsbfkrgoiznhiysfhzspkpvrhtewthpbafmzgchqpgfsuiddjkhnwchpleibavgmuivfiorpteflholmnxdwewj"))

// let sub = 'bab';
// let temp = sub.substring(0, Math.floor(sub.length / 2))
// console.log(temp)
// console.log(temp)
// console.log(sub.indexOf(temp.split('').reverse().join('')) !== -1)
