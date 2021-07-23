/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// // @lc code=start
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function(nums) {
    
//     for(let i = 0; i < nums.length; i++) {
//         const index = nums.indexOf(nums[i], i + 1)
//         if (index !== -1) {
//             nums.splice(index, 1)
//             i--;
//         }
//     }

//     return nums.length
// };
// // @lc code=start
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function(nums) {
    
//     const numArr = new Set(nums)
//     nums.length = 0;
//     nums.push(...numArr)

//     return nums.length
// };
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
    
//     for(let i = 0; i < nums.length; i++) {
//         while(true) {
//             const index = nums.indexOf(nums[i], i + 1)
//             if (index !== -1) {
//                 nums.splice(index, 1)
//             } else {
//                 break;
//             }
//         }
//     }

//     return nums.length
// };
var removeDuplicates = function(nums) {
    
    const numArr = new Set(nums)
    nums.length = 0;
    nums.push(...numArr)

    return nums.length
};
// @lc code=end

