/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
// function addBinary(a: string, b: string): string {
//   let tmp = 0;
//   let result = "";
//   let al = a.length;
//   let bl = b.length;
//   // 循环共有的
//   while (al && bl) { 
//     const res = +a[--al] + +b[--bl] + tmp;
//     tmp = +(res > 1)
//     result = (res % 2) + result;
//   }
//   // 循环a剩余的
//   while (al) { 
//     const res = +a[--al] + tmp;
//     tmp = +(res > 1)
//     result = (res % 2) + result;
//   }
//   // 循环b剩余的
//   while (bl) { 
//     const res = +b[--bl] + tmp;
//     tmp = +(res > 1)
//     result = (res % 2) + result;
//   }
//   if (tmp) { 
//     result = '1' + result;
//   }
//   return result;
// };
function addBinary(a: string, b: string): string {
  let tmp = 0;
  let result = "";
  const l = Math.max(a.length, b.length);
  a = a.padStart(l, '0')
  b = b.padStart(l, '0')
  for (let i = l - 1; i >= 0; i--) { 
    const res = +a[i] + +b[i] + tmp;
    tmp = res > 1 ? 1 : 0;
    result = (res % 2) + result
  }
  result = `${tmp > 0 ? '1' : ''}${result}`
  return result
};
// @lc code=end

