import { ListNode } from '../../linkedList/ts/main'

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
