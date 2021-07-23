/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function(haystack, needle) {
//     if (!needle) {
//         return 0
//     }
//     return haystack.indexOf(needle)
// };
var strStr = function(haystack, needle) {
    if (!needle || haystack === needle) {
        return 0
    }
    const l = needle.length
    for (let i = 0; i <= haystack.length - l; i++) {
        const item = haystack.slice(i, i + l);
        if (item === needle) {
            return i
        }
    }
    return -1
};
// @lc code=end

