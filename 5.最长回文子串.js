/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const l = s.length;
  if (l === 1) { return s }
  if (l === 2 && s[0] === s[1]) { return s }
  let maxLen = 1;
  let begin = 0;
  const dp = new Array(l).fill().map(() => [])
  // 先循环回文串的长度
  for (let L = 2; L <= l; L++) { 
    // 从最左边的位置开始
    for (let i = 0; i < l; i++) { 
      const j = L + i - 1;
      if (j >= l) { break }
      if (s[i] !== s[j]) { 
        dp[i][j] = false;
      } else {
        if (L <= 3) { 
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }
      if (dp[i][j]) {
        maxLen = L;           
        begin = i;
      }
    }
  }
  return s.slice(begin, begin + maxLen)
};
// @lc code=end

