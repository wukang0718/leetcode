/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
// function plusOne(digits: number[]): number[] {
//   const l = digits.length;
//   for (let i = l - 1; i >= 0; i--) { 
//     if (digits[i] === 9) {
//       digits[i] = 0;
//       if (i === 0) { 
//         digits.unshift(1)
//       }
//     } else {
//       digits[i]++;
//       break;
//     }
//   } 
//   return digits
// };
function plusOne(digits: number[]): number[] {
  const l = digits.length;
  for (let i = l - 1; i >= 0; i--) { 
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  } 
  digits.unshift(1);
  return digits
};
// @lc code=end

