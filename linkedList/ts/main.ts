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

// 删除链表节点
export function remove(n0: ListNode) {
    let p: ListNode | null = n0.next
    let n1 = p?.next
    if (n1) {
        n0.next = n1
    }
}

remove(testN0)
let po: ListNode | null = testN0
while (po) {
    console.log('删除后遍历的值:', po.val)
    po = po.next
}

// 访问链表节点，时间复杂度为O(n)
export function access(head: ListNode | null, index: number): ListNode | null {
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
console.log(`索引为${index}的节点值为:${indexNode?.val}`)

// 查找节点
export function find(head: ListNode | null, target: number): number {
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
    public val: number
    public next: DoubleListNode | null
    public prev: DoubleListNode | null

    constructor(val: number) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

const dbListNode = new DoubleListNode(100)
console.log(`双向链表节点:`, dbListNode.val, dbListNode.next, dbListNode.prev)

/**
 * 在 Typescript 中，数组（Array）是一种用于存储有序数据集合的对象，可以动态调整大小，并且可以包含任意类型的元素。
 * TS的数组（Array） 几乎涵盖了 python 中列表的所有功能，并且更加灵活。
 */
/**
 * 列表常用操作
 */
/**
 * 初始化列表(数组)
 */
// 无初始值
let nums1: number[] = []
// 有初始值
let nums2: number[] = [1, 3, 2, 5, 4]

/**
 * 访问元素
 */
const num = nums2[1]
/**
 * 更新元素
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
nums3.sort((a, b) => a - b)
console.log(`排序列表:`, nums3)

/**
 * 列表实现
 */
class MyList {
    private _capacity: number = 10 // 列表初始容量
    private _extend_retio: number = 2 // 扩容倍率
    private _size: number = 0 // 列表长度
    private _arr: number[] = new Array(this._capacity).fill(0) //数组（存储列表元素）

    constructor() {
        console.log(`MyList初始_arr:`, this._arr)
    }

    public size(): number {
        return this._size
    }

    capacity(): number {
        return this._capacity
    }

    get(index: number): number {
        if (index < 0 || index >= this._size) {
            throw new Error('索引越界')
        }
        return this._arr[index]
    }

    set(num: number, index: number) {
        if (index < 0 || index >= this._size) {
            throw new Error('索引越界')
        }

        this._arr[index] = num
    }

    add(num: number) {
        // 长度超出扩容
        if (this._size === this._capacity) {
            this.extendCapacity()
        }
        this._arr[this._size] = num

        this._size += 1
    }

    remove(index: number): number {
        if (index < 0 || index >= this._size) {
            throw new Error('索引越界')
        }
        const num = this._arr[index]
        // 把 index 之后的元素向前移动一位
        for (let i = index; i < this._size - 1; i++) {
            this._arr[index] = this._arr[index + 1]
        }

        return num
    }

    insert(num: number, index: number) {
        // 长度超出扩容
        if (this._size === this._capacity) {
            this.extendCapacity()
        }
        // 将 index 处及之后的元素值向后移动一位
        for (let i = this._size - 1; i >= index; i--) {
            this._arr[i + 1] = this._arr[i]
        }

        this._arr[index] = num

        this._size += 1
    }
    // 返回有效长度的列表
    to_array() {
        return this._arr.slice(0, this._size)
    }

    protected extendCapacity() {
        this._arr = this._arr.concat(
            new Array(this._capacity * (this._extend_retio - 1)).fill(0)
        )

        this._capacity = this._arr.length
    }
}

const myList = new MyList()
// 获取列表长度
console.log(`myList列表长度:`, myList.size())
// console.log(`myList列表长度:`, myList._size) // 不能获取私有属性

// 获取列表容量
console.log(`myList列表容量:`, myList.capacity())

// get
// const getItem = myList.get(1000) // 索引越界异常
// const getItem = myList.get(0) // 初始状态无元素，不能访问
// console.log(`myList get`, getItem)

// set
// myList.set(100, 0) // 初始状态无元素，不能修改

// 增
myList.add(1)
myList.add(3)
myList.add(2)
myList.add(5)
myList.add(4)
myList.add(0)
myList.add(6)
console.log('myList增:', myList.to_array())
// 增 触发扩容
myList.add(99)
myList.add(99)
myList.add(99)
myList.add(99)
myList.add(99)
myList.add(99)
myList.add(99)
console.log('myList增-触发扩容:', myList.to_array(), myList.capacity())
// console.log('不可访问私有属性_capacity:', myList._capacity)

// 删
const removeItem = myList.remove(6)
console.log('myList删:', myList.to_array())

// 查
const num3 = myList.get(3)
console.log('myList查:', num3, myList.to_array())

// 改
myList.set(55, 5)
console.log('myList改:', myList.to_array())

// 中间插入
myList.insert(100, 3)
console.log('myList中间插入:', myList.to_array())
// 中间插入-触发扩容
myList.insert(1000, 3)
myList.insert(1000, 3)
myList.insert(1000, 3)
myList.insert(1000, 3)
myList.insert(1000, 3)
myList.insert(1000, 3)
myList.insert(1000, 3)
myList.insert(1000, 3)
myList.insert(1000, 3)
myList.insert(1000, 3)
console.log('myList中间插入-触发扩容:', myList.to_array(), myList.capacity())
