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

// 访问链表节点，时间复杂度O(n)
export function access(head, index) {
    for (let i = 0; i < index; i++) {
        if (!head) {
            return null
        }
        head = head.next
    }

    return head
}

const index = 3
const testNode = testN0
const indexNode = access(testNode, index)
console.log(`索引为${index}的节点值为:${indexNode.val}`)

// 查找结点
/**
 * 在链表中查找值为 target 的首个节点
 */
export function find(head, target) {
    let index = 0
    while (head) {
        if (head.val === target) {
            return index
        }
        head = head.next
        index += 1
    }

    return -1
}

const target = 5
const testNode1 = testN0
const findIndex = find(testNode1, target)
console.log(`查找的索引为${findIndex}`)

// 双向链表节点类
class DoubleListNode {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

const dbListNode = new DoubleListNode(100)
console.log(`双向链表:`, dbListNode.val, dbListNode.next, dbListNode.prev)

/**
 * 在 JavaScript 中，数组（Array）是一种用于存储有序数据集合的对象，可以动态调整大小，并且可以包含任意类型的元素。
 * js的数组（Array） 几乎涵盖了 python 中列表的所有功能，并且更加灵活。
 */
/**
 * 列表常用操作
 */
/**
 * 初始化列表(数组)
 */
// 无初始值
let nums1 = []
// 有初始值
let nums2 = [1, 3, 2, 5, 4]

/**
 * 访问元素
 */
const num = nums2[1]
/**
 *更新元素
 */
nums2[1] = 0
console.log(`列表操作:`, num, nums2)

/**
 * 插入和删除元素
 */
// 清空列表(数组)
nums2 = [1, 1, 1, 1, 1]
nums2 = []
console.log('clear()', nums2)
nums2 = [2, 2, 2, 2, 2]
nums2.length = 0
console.log('clear()', nums2)
nums2 = [3, 3, 3, 3, 3]
nums2.splice(0, nums2.length)
console.log('clear()', nums2)
nums2 = [5, 5, 5, 5, 5]
while (nums2.length) nums2.pop()
console.log('clear()', nums2)
nums2 = [6, 6, 6, 6, 6]
while (nums2.length) nums2.shift()

// 在尾部添加元素
nums2.push(1)
nums2.push(3)
nums2.push(2)
nums2.push(5)
nums2.push(4)
console.log(`在尾部添加元素:`, nums2)

// 在中间插入元素
nums2.splice(3, 0, 6)
console.log(`在索引3处插入数字6:`, nums2)

// 删除元素
nums2.splice(3, 1)
console.log(`删除索引3处的元素:`, nums2)

/**
 * 遍历列表
 */
// 通过索引遍历列表
let count = 0
for (let i = 0; i < nums2.length; i++) {
    count += nums2[i]
}
console.log(`通过索引遍历列表:`, count)

let count1 = 0
// 直接遍历列表
nums2.forEach((num) => (count1 += num))
console.log(`直接遍历列表:`, count1)

/**
 * 拼接列表
 */
// 拼接两个列表
const nums = [6, 7, 8, 10, 9]
const nums3 = nums2.concat(nums)
console.log(`拼接两个列表:`, typeof nums3, nums3)

/**
 * 排序列表
 */
nums3.sort((x, y) => x - y)
console.log(`排序列表:`, nums3)
