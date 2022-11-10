/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根 
 */

// @lc code=start
// function mySqrt(x: number): number {
//   if (x === 0) { return 0 }
//   if (x < 4) { return 1 }
//   const mid = x / 2
//   for (let i = 2; i <= mid; i++) { 
//     if (i * i === x) { return i }
//     if (i * i > x) { 
//       return i - 1
//     }
//   }
//   return 2
// };
function mySqrt(x: number): number {
  if (x === 0) { return 0 }
  const mid = x / 2
  // 二分法找
  let left = 1;
  let right = Math.ceil(mid);
  while (left < right) {
    const tmp = Math.ceil((left + right) / 2);
    const res = tmp * tmp;
    if (res === x) { return tmp }
    if (left === tmp || right === tmp) {
      return x < res ? left : right
    }
    // 中间值乘机大于，替换右值
    // 中间值乘机小于，替换左值
    if (res > x) { right = tmp }
    if (res < x) { left = tmp }
  }
  return left
};
// @lc code=end

