/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// // @lc code=start
// function longestCommonPrefix(strs: string[]): string {
//     let arr = new Array(strs[0].length);
//     for (let i = 0; i < strs.length; i ++) {
//         const item = strs[i]
//         if (!item) {
//             return ''
//         }
//         const l = arr.length > item.length ? item.length : arr.length
//         arr.length = l
//         for (let index = 0; index < l; index ++) {
//             arr[index] = arr[index] || new Set()
//             arr[index].add(item[index])
//         }
//     }

//     let s = ''
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i].size === 1) {
//             s+=[...arr[i]][0]
//         } else {
//             return s
//         }
//     }
//     return s
// };
// @lc code=start
function longestCommonPrefix(strs: string[]): string {
    const l = Math.min(...strs.map(item => item.length))
    if (!l) {
        return ''
    }
    let s = '';
    for(let j = 0; j < l; j++) {
        s += strs[0][j]
        for (let i = 0; i < strs.length; i++) {
            if (strs[i][j] !== s[j]) {
                return s.slice(0, -1)
            }
        }
    }
    return s
};
// @lc code=end

