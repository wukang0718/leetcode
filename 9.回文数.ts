/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false
    }
    return String(x).split('').reverse().join('') === String(x)
};
// @lc code=end

