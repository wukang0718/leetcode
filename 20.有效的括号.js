/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const left = ['(', '[', '{']
    const right = [')', ']', '}']
    const arr = [];
    for (let i = 0; i < s.length; i++) {
        if (left.includes(s[i])) {
            arr.push(s[i])
        } else if (right.includes(s[i])) {
            const leftItem = arr.pop();
            const leftIndex = left.indexOf(leftItem)
            const rightIndex = right.indexOf(s[i])
            if (leftIndex !== rightIndex) {
                return false
            }
        }
    }
    return !arr.length
};
// @lc code=start
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function (s) {
//     const map = new Map([['(', ')'], ['[', ']'], ['{', '}']])
//     const arr = [];
//     for (let i = 0; i < s.length; i++) {
//         if (map.has(s[i])) {
//             arr.push(s[i])
//         } else {
//             const leftItem = arr.pop();
//             if (map.get(leftItem) !== s[i]) {
//                 return false
//             }
//         }
//     }
//     return !arr.length
// };
// @lc code=end

