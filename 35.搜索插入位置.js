/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {
//     if (nums.length === 1) {
//         return +(target > nums[0])
//     }
//     for (let i = 0; i < nums.length; i++) {
//         const element = nums[i];
//         if (element === target || element > target) {
//             return i
//         }
//     }
//     return nums.length
// };
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.length === 1) {
        if (nums[0] < target) {
            return 1
        }
        return 0;
    }
    const l = Math.ceil(nums.length / 2);
    if (target === nums[l]) {
        return l
    } else if (target > nums[l]) {
        return l + searchInsert(nums.slice(l), target)
    } else {
        return searchInsert(nums.slice(0, l), target)
    }
};
// @lc code=end

