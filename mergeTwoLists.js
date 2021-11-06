// Merge two sorted linked lists and return it as a sorted list.
// The list should be made by splicing together the nodes of the first two lists.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const mergeTwoLists = function (l1, l2) {
    let newList = new ListNode();
    let head = newList;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            newList.next = l1
            l1 = l1.next
        } else {
            newList.next = l2
            l2 = l2.next
        }

        newList = newList.next;
    }
    newList.next = l1 || l2
    return head.next;
};

l1 = [1, 3, 4]
l2 = [1, 2, 4]

mergeTwoLists(l1, l2)