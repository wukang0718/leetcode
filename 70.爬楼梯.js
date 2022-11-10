/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const db = [0, 1, 2];
  for (let i = 3; i <= n; i++) { 
    db[i] = db[i - 1] + db[i - 2];
  }
  return db[n]
};
// @lc code=end

