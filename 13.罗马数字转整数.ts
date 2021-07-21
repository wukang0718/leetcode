/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

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
    // 获取两个罗马数字的整数
    const getResult = (str: string): number => {
        if (str.length === 2 && obj[str[0]] < obj[str[1]]) {
            return obj[str[1]] - obj[str[0]]
        } else {
            return str.split('').map(item => obj[item]).reduce((sum, curr) => sum+curr, 0)
        }
    }
    let sArr = []
    let i = 0
    if (s.length % 2 !== 0) {
        sArr.push(getResult(s.slice(i, 1)))
        i++;
    }
    while(i < s.length) {
        sArr.push(getResult(s.slice(i, i+2)))
        i+=2
    }
    
    return sArr.reduce((sum, curr) => sum+curr, 0)

};
// @lc code=end

