/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
    const f = x < 0
    let s = String(x);
    let n = Number(s.split('').slice(+f).reverse().join(''))
    let result = f ? -n : n

    return result < -Math.pow(2, 31) || result > (Math.pow(2, 31) - 1) ? 0 : result
};
// @lc code=end

