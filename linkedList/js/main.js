/**
 * 链表节点类
 */
class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

// 实例化一个链表节点
const node = new ListNode(5)
console.log('val:', node.val, 'next:', node.next)

// 初始化链表 1 -> 3 -> 2 -> 5 -> 4
// 初始化各个节点
const n0 = new ListNode(1)
const n1 = new ListNode(3)
const n2 = new ListNode(2)
const n3 = new ListNode(5)
const n4 = new ListNode(4)
// 构建节点之间的引用
n0.next = n1
n1.next = n2
n2.next = n3
n3.next = n4

console.log(`链表：${n0}`)

// 在链表的节点n0 之后插入节点 P
export function insert(n0, P) {
    let n1 = n0.next
    P.next = n1
    n0.next = P
}

const testN0 = n0
const P = new ListNode(0)

insert(testN0, P)
console.log('testN0:', testN0.next.val, P.next.val)

let p = testN0 // 创建指针指向testN0
while (p) {
    console.log('遍历单链表的值:', p.val)
    p = p.next
}

// 删除链表节点
export function remove(n0) {
    let P = n0.next
    let n1 = P.next
    n0.next = n1
}

remove(testN0)

let po = testN0
while (po) {
    console.log('删除后遍历:', po.val)
    po = po.next
}
