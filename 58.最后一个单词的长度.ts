/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  const l = s.length;
  let num = 0;
  for (let i = l - 1; i >= 0; i--) {
    // 不处理最后的空格
    if (s[i] === " " && num === 0) { continue; }
    if (s[i] === " ") { return num }
    num++;
  }
  return num;
};
// @lc code=end

