/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // let arr = nums1.concat(nums2).sort((a, b) => a - b)
  // let len = arr.length
  // if (len % 2 === 0) {
  //   return (arr[len / 2] + arr[len / 2 - 1]) / 2
  // } else {
  //   return arr[Math.floor(len / 2)]
  // }
  let m = nums1.length;
  let n = nums2.length;
  let i = 0;
  let j = 0;
  let len = m + n;
  let isDouble = len % 2 === 0;
  let mid = Math.floor(len / 2);
  let arr = [];
  if (!m) { 
    return isDouble ? (nums2[mid] + nums2[mid - 1]) / 2 : nums2[mid];
  }
  if (!n) { 
    return isDouble ? (nums1[mid] + nums1[mid - 1]) / 2 : nums1[mid];
  }
  while (i < m && j < n && i + j <= mid) { 
    if (nums1[i] < nums2[j]) { 
      arr.push(nums1[i]);
      i++;
    } else { 
      arr.push(nums2[j]);
      j++;
    }
  }
  if (i === m && j < n) {
    arr.push(...nums2.slice(j))
  } else if (i < m && j === n) { 
    arr.push(...nums1.slice(i))
  }
  return isDouble ? (arr[mid] + arr[mid - 1]) / 2 : arr[mid];
};
// @lc code=end

