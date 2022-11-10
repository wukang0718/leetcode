/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var deleteDuplicates = function (head) {
//   if (!head) { return head }
//   let tmp = head
//   while (tmp.next) {
//     if (tmp.val === tmp.next.val) { 
//       tmp.next = tmp.next.next
//     } else {
//       tmp = tmp.next
//     }
//   }
//   return head
// };
var deleteDuplicates = function (head) {
  if (!head || !head.next) { return head }
  if (head.val === head.next.val) { 
    head = deleteDuplicates(head.next)
  } else {
    head.next = deleteDuplicates(head.next)
  }
  return head
};
// @lc code=end

