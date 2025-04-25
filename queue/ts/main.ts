import { ListNode, DoubleListNode } from '../../linkedList/ts/main'

// 基于链表实现的队列
class LinkedListQueue {
    private _front: ListNode | null = null
    private _rear: ListNode | null = null
    private _size: number = 0

    constructor() {}

    public size(): number {
        return this._size
    }

    is_empty(): boolean {
        return this._size === 0
    }

    push(num: number) {
        const node = new ListNode(num)
        if (this._front == null || this._rear == null) {
            this._front = node
            this._rear = node
        } else {
            this._rear.next = node
            this._rear = node
        }

        this._size += 1
    }

    pop(): number {
        if (this._front === null) {
            throw new Error('队列为空')
        }
        const num = this._front?.val
        this._front = this._front.next
        return num
    }

    peek(): number {
        if (this._front === null) {
            throw new Error('队列为空')
        }

        return this._front?.val
    }

    to_list(): number[] {
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
    private _nums: number[]
    private _size: number = 0
    private _front: number = 0

    constructor(size: number) {
        this._nums = new Array(size).fill(0)
    }

    public capacity(): number {
        return this._nums.length
    }

    size(): number {
        return this._size
    }

    is_empty(): boolean {
        return this.size() === 0
    }

    push(num: number) {
        if (this.size() === this.capacity()) {
            throw new Error('队列已满')
        }
        const rear = (this._front + this._size) % this.capacity()
        this._nums[rear] = num
        this._size += 1
    }

    peek(): number {
        if (this.is_empty()) {
            throw new Error('队列为空')
        }

        return this._nums[this._front]
    }

    pop(): number {
        if (this.is_empty()) {
            throw new Error('队列为空')
        }
        const num = this.peek()
        this._front = (this._front + 1) % this.capacity()
        this._size -= 1

        return num
    }

    to_list(): number[] {
        const res = new Array(this.size()).fill(0)
        let j = this._front
        for (let i = 0; i < this.size(); i++) {
            res[i] = this._nums[j % this.capacity()]
            j++
        }
        return res
    }
}

// 队列初始化
const myArrayQueue = new ArrayQueue(5)
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
console.log('myArrayQueue 入队:', myArrayQueue.to_list())
// myArrayQueue.push(100)  # 队列已满
// 出队
const item = myArrayQueue.pop()
console.log('myArrayQueue 出队:', myArrayQueue.to_list(), item)

/**
 * 基于双向链表实现的双向队列
 */
class LinkedListDoubleEndedQueue {
    private _front: DoubleListNode | null = null
    private _rear: DoubleListNode | null = null
    private _size: number = 0

    constructor() {}

    public size(): number {
        return this._size
    }

    is_empty(): boolean {
        return this._size === 0
    }

    private push(num: number, is_front: boolean) {
        const node = new DoubleListNode(num)

        if (this.is_empty()) {
            this._front = this._rear = node
        } else if (is_front) {
            //  队首入队
            this._front!.prev = node
            node.next = this._front
            this._front = node
        } else {
            // 队尾入队
            this._rear!.next = node
            node.prev = this._rear
            this._rear = node
        }

        this._size += 1
    }

    push_first(num: number) {
        this.push(num, true)
    }

    push_last(num: number) {
        this.push(num, false)
    }

    private pop(is_front: boolean): number {
        if (this.is_empty()) {
            throw new Error('双向队列为空')
        }

        let num: number = -1

        if (is_front) {
            // 队首出队
            num = this._front!.val
            const fnext = this._front!.next
            if (fnext) {
                fnext.prev = null
                this._front!.next = null // 可选，对链首断开无影响
            }

            this._front = fnext
        } else {
            // 队尾出队
            num = this._rear!.val
            const rprev = this._rear!.prev
            if (rprev) {
                rprev.next = null
                this._rear!.prev = null // // 可选，对链尾断开无影响s
            }

            this._rear = rprev
        }

        this._size -= 1
        return num
    }

    pop_first(): number {
        return this.pop(true)
    }

    pop_last(): number {
        return this.pop(false)
    }

    peek_first(): number {
        if (this.is_empty()) {
            throw new Error('双向队列为空')
        }

        return this._front!.val // 使用非空断言 (!) 确保 _front 存在
    }

    peek_last(): number {
        if (this.is_empty()) {
            throw new Error('双向队列为空')
        }

        return this._rear!.val
    }
    to_list(): number[] {
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
