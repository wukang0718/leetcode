/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
// function romanToInt(s: string): number {
//     const obj = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     }
//     const twoObjKeys = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM']
//     // 获取两个罗马数字的整数
//     const getResult = (str: string): number => {
//         if (str.length === 2 && obj[str[0]] < obj[str[1]]) {
//             return obj[str[1]] - obj[str[0]]
//         } else {
//             return str.split('').map(item => obj[item]).reduce((sum, curr) => sum + curr, 0)
//         }
//     }
//     let sArr = []
//     let i = 0
//     if (s.length <= 2) {
//         return getResult(s)
//     }
//     for (let j = 0; j < s.length - 1; j++) {
//         if (twoObjKeys.includes(s[j] + s[j + 1])) {
//             sArr.push(getResult(s.substring(i, j)))
//             i = j
//             if (j !== s.length - 2) {
//                 sArr.push(getResult(s.substring(j, j + 2)))
//                 i = j + 2
//             }
//             j++;
//         }
//     }
//     sArr.push(getResult(s.substring(i, s.length)))

//     return sArr.reduce((sum, curr) => sum + curr, 0)

// };
// @lc code=start
function romanToInt(s: string): number {
    const obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let arr = []
    for(let i = 0; i < s.length - 1; i++) {
        if (obj[s[i]] < obj[s[i + 1]]) {
            arr.push(-obj[s[i]])
        } else {
            arr.push(obj[s[i]])
        }
    }
    arr.push(obj[s[s.length - 1]])
    return arr.reduce((sum, curr) => sum + curr, 0)
}
// @lc code=end

