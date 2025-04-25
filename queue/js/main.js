import { ListNode, DoubleListNode } from '../../linkedList/js/main.js'

// 基于链表实现的队列
class LinkedListQueue {
    constructor() {
        this._front = null
        this._rear = null
        this._size = 0
    }

    size() {
        return this._size
    }

    is_empty() {
        return this.size() === 0
    }

    push(num) {
        const node = new ListNode(num)

        if (this.is_empty()) {
            this._front = node
            this._rear = node
        } else {
            this._rear.next = node
            this._rear = node
        }

        this._size += 1
    }

    pop() {
        if (this.is_empty()) {
            throw new Error('队列为空')
        }

        const num = this._front.val
        this._front = this._front.next
        this._size -= 1

        return num
    }

    peek() {
        if (this.is_empty()) {
            throw new Error('队列为空')
        }

        return this._front.val
    }

    to_list() {
        const listArray = []
        let temp = this._front

        while (temp) {
            listArray.push(temp.val)
            temp = temp.next
        }

        return listArray
    }
}

//  实例化队列
const myLinkedListQueue = new LinkedListQueue()
console.log('myLinkedListQueue:', myLinkedListQueue.size())
console.log('myLinkedListQueue:', myLinkedListQueue.is_empty())

//  入队
myLinkedListQueue.push(1)
myLinkedListQueue.push(3)
myLinkedListQueue.push(2)
myLinkedListQueue.push(5)
myLinkedListQueue.push(4)
console.log('myLinkedListQueue 入队:', myLinkedListQueue.to_list())

//  出队
const frontNum = myLinkedListQueue.pop()
console.log('myLinkedListQueue 出队:', myLinkedListQueue.to_list(), frontNum)

//  访问队首元素
const peekNum = myLinkedListQueue.peek()
console.log(
    'myLinkedListQueue 访问队首元素:',
    myLinkedListQueue.to_list(),
    peekNum
)

// 基于环形数组实现的队列
class ArrayQueue {
    constructor(size) {
        this._nums = new Array(size).fill(0)
        this._size = 0
        this._capacity = size
        this._front = 0
    }

    capacity() {
        return this._capacity
    }

    size() {
        return this._size
    }

    is_empty() {
        return this.size() === 0
    }

    push(num) {
        if (this.size() === this.capacity()) {
            throw new Error('队列已满')
        }

        const rear = (this._front + this.size()) % this.capacity()
        this._nums[rear] = num
        this._size += 1
    }

    peek() {
        if (this.is_empty()) {
            throw new Error('队列为空')
        }
        return this._nums[this._front]
    }
    pop() {
        if (this.is_empty()) {
            throw new Error('队列为空')
        }
        const num = this.peek()
        this._front = (this._front + 1) % this.capacity()
        this._size -= 1
        return num
    }

    to_list() {
        const res = new Array(this.size()).fill(0)
        let j = this._front
        for (let i = 0; i < this.size(); i++) {
            res[i] = this._nums[j % this.capacity()]
            j += 1
        }

        return res
    }
}

// 队列初始化
const myArrayQueue = new ArrayQueue(5)
// 容量
console.log('myArrayQueue 容量:', myArrayQueue.capacity())
// 长度
console.log('myArrayQueue 长度:', myArrayQueue.size())
// 判断队列是否为空
console.log('myArrayQueue 判断队列是否为空:', myArrayQueue.is_empty())
// 入队
myArrayQueue.push(1)
myArrayQueue.push(3)
myArrayQueue.push(2)
myArrayQueue.push(5)
myArrayQueue.push(4)
// myArrayQueue.push(100) // 队列已满
console.log('myArrayQueue 入队:', myArrayQueue.to_list())
// 出队
const item = myArrayQueue.pop()
console.log('myArrayQueue 出队:', myArrayQueue.to_list(), item)

/**
 * 基于双向链表实现的双向队列
 */
class LinkedListDoubleEndedQueue {
    constructor() {
        this._front = null
        this._rear = null
        this._size = 0
    }

    size() {
        return this._size
    }

    is_empty() {
        return this.size() === 0
    }

    push(num, is_front) {
        const node = new DoubleListNode(num)
        if (this.is_empty()) {
            // 队列为空时
            this._front = this._rear = node
        } else if (is_front) {
            // 队首入队
            this._front.preve = node
            node.next = this._front
            this._front = node
        } else {
            // 队尾入队
            this._rear.next = node
            node.preve = this._rear
            this._rear = node
        }

        this._size += 1
    }

    push_first(num) {
        // 队首入队
        this.push(num, true)
    }

    push_last(num) {
        // 队尾入队
        this.push(num, false)
    }

    pop(is_front) {
        if (this.is_empty()) {
            // 队列为空时
            throw new Error('队列为空')
        }

        let val = null
        if (is_front) {
            // 队首出队
            val = this._front.val
            const fnext = this._front.next
            if (fnext) {
                fnext.preve = null
            }
            this._front = fnext
        } else {
            // 队尾出队
            val = this._rear.val
            const rprev = this._rear.preve
            if (rprev) {
                rprev.next = null
            }
            this._rear = rprev
        }

        this._size -= 1

        return val
    }

    pop_first() {
        // 队首出队
        return this.pop(true)
    }

    pop_last() {
        // 队尾出队
        return this.pop(false)
    }

    peek_first() {
        if (this.is_empty()) {
            throw new Error('队列为空')
        }
        return this._front.val
    }

    peek_last() {
        if (this.is_empty()) {
            throw new Error('队列为空')
        }

        return this._rear.val
    }

    to_list() {
        if (this.is_empty()) {
            return []
        }
        const res = []
        let tempNode = this._front
        while (tempNode) {
            res.push(tempNode.val)
            tempNode = tempNode.next
        }

        return res
    }
}

// 双向队列初始化
const myDoubleEndedQueue = new LinkedListDoubleEndedQueue()
console.log('myDoubleEndedQueue 双向队列初始化:', myDoubleEndedQueue.to_list())
// 双向队列长度
const dqSize = myDoubleEndedQueue.size()
console.log(
    'myDoubleEndedQueue 双向队列长度:',
    myDoubleEndedQueue.to_list(),
    dqSize
)
// 双向队列是否为空
const dqIsEmpty = myDoubleEndedQueue.is_empty()
console.log(
    'myDoubleEndedQueue 双向队列长度:',
    myDoubleEndedQueue.to_list(),
    dqIsEmpty
)
// 队首入队
myDoubleEndedQueue.push_first(2)
myDoubleEndedQueue.push_first(3)
myDoubleEndedQueue.push_first(1)
console.log('myDoubleEndedQueue 队首入队:', myDoubleEndedQueue.to_list())
// 队尾入队
myDoubleEndedQueue.push_last(5)
myDoubleEndedQueue.push_last(4)
console.log('myDoubleEndedQueue 队尾入队:', myDoubleEndedQueue.to_list())
// 队首出队
const firstItem = myDoubleEndedQueue.pop_first()
console.log(
    'myDoubleEndedQueue 队首出队:',
    myDoubleEndedQueue.to_list(),
    firstItem
)
// 队尾出队
const lastItem = myDoubleEndedQueue.pop_last()
console.log(
    'myDoubleEndedQueue 队尾出队:',
    myDoubleEndedQueue.to_list(),
    lastItem
)
// 访问队首元素
const firstPeek = myDoubleEndedQueue.peek_first()
console.log(
    'myDoubleEndedQueue 访问队首元素:',
    myDoubleEndedQueue.to_list(),
    firstPeek
)
// 访问队尾元素
const lastPeek = myDoubleEndedQueue.peek_last()
console.log(
    'myDoubleEndedQueue 访问队尾元素:',
    myDoubleEndedQueue.to_list(),
    lastPeek
)
