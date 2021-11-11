// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
    // we can notice that the number of steps can be simulated to a fibonacci series
    // for n = 1, we have 1 step, for n = 2, we have 2 steps, for n =3, we have 3 steps, etc
    if (n <= 1) return 1;
    let steps = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        steps[i] = steps[i - 1] + steps[i - 2];
    }
    return steps[n];
};

console.log(climbStairs(45))