/**
 * 链表节点类
 */
class ListNode {
    public next: ListNode | null
    public val: number
    constructor(val: number) {
        this.val = val
        this.next = null
    }
}

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
export function insert(n0: ListNode, P: ListNode): void {
    let n1 = n0.next
    n0.next = P
    P.next = n1
}

const testN0 = n0
const P = new ListNode(0)
insert(testN0, P)
console.log('testN0:', testN0.next?.val, P.next?.val)

let p: ListNode | null = testN0
while (p) {
    console.log('遍历testN0:', p.val)
    p = p.next
}
