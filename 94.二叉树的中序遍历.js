/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
// var inorderTraversal = function(root) {
//   if (!root) { return [] }
//     const arr = []
//      // 递归实现
//     if (root.left !== null) {
//         arr.push(...inorderTraversal(root.left))
//     }
//     arr.push(root.val)
//     if (root.right !== null) {
//         arr.push(...inorderTraversal(root.right))
//     }
//     return arr
// };
// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
// var inorderTraversal = function (root) {
//   // 迭代 模拟一个栈
//   const res = [];
//   const stk = [];
//   while (root || stk.length) {
//     while (root) {
//       stk.push(root);
//       root = root.left;
//     }
//     root = stk.pop();
//     res.push(root.val);
//     root = root.right;
//   }
//   return res;
// };
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const res = [];
  let predecessor = null;
  while (root) {
    if (!root.left) {
      res.push(root.val);
      root = root.right;
    } else {
      predecessor = root.left;
      while (predecessor.right && predecessor.right !== root) {
        predecessor = predecessor.right;
      }
      if (!predecessor.right) {
        predecessor.right = root;
        root = root.left;
      } else {
        res.push(root.val);
        predecessor.right = null;
        root = root.right;
      }
    }
  }
  return res;
};
// @lc code=end
