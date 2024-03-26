var reverseList = function (head) {
    let node = head
    let prev = null
    while (node) {
        let next = node.next
        node.next = prev
        prev = node
        node = next
    }
    return prev
};
