/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i]
        const num = target - item;
        if (map.has(num)) {
            return [map.get(num), i]
        } else {
            map.set(item, i)
        }
    }
};
// @lc code=end

