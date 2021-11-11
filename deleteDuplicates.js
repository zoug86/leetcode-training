// Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
// Return the linked list sorted as well.

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
const deleteDuplicates = function (head) {
    let newList = new ListNode();
    newList = head
    while (newList) {
        if (newList.next != null && newList.val == newList.next.val) {
            newList.next = newList.next.next;
        } else {
            newList = newList.next;
        }
    }

    return head;
};

