/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  if (!s.length) { return 0 }
  let str = s[0];
  let max = 1;
  let l = s.length;
  for (let i = 1; i < l; i++) {
    let index = str.indexOf(s[i]);
    if (index !== -1) {
      max = Math.max(str.length, max);
      str = str.slice(index + 1).concat(s[i]);
    } else {
      str  += s[i]
    }
  }
  max = Math.max(str.length, max);
  return max
};
// @lc code=end

