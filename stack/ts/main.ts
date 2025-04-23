import { ListNode } from '../../linkedList/ts/main'

// 初始化栈
// ts 中没有内置栈，可以把数组 Array 当作栈来使用
const stack: number[] = []

// 元素入栈
stack.push(1)
stack.push(3)
stack.push(2)
stack.push(5)
stack.push(4)
console.log('元素入栈:', stack)

// 访问栈顶元素
const peek: number = stack[stack.length - 1]
console.log('访问栈顶元素:', stack, peek)

// 元素出栈
const pop = stack.pop()
console.log('元素出栈:', stack, pop)

// 获取栈的长度
const size = stack.length
console.log('获取栈的长度:', stack, size)

// 判断是否为空
const is_empty = stack.length === 0
console.log('判断是否为空:', stack, is_empty)

/**
 * 栈的实现
 */
// 基于链表的实现
class LinkedListStack {
    private _size: number = 0
    private _peek: ListNode | null = null

    constructor() {}

    public size(): number {
        return this._size
    }

    is_empty(): boolean {
        return this._size === 0
    }

    push(val: number) {
        const node = new ListNode(val)
        node.next = this._peek
        this._peek = node
        this._size += 1
    }

    peek(): number | undefined {
        if (this.is_empty()) {
            throw new Error('栈为空')
        }
        return this._peek?.val
    }

    pop(): number | null {
        if (this.is_empty()) {
            throw new Error('栈为空')
        }
        const num = this._peek?.val || null
        this._peek = this._peek?.next || null
        return num
    }

    to_list(): number[] {
        const list = []
        let peek = this._peek
        while (peek) {
            list.push(peek.val)
            peek = peek.next
        }
        list.reverse()

        return list
    }
}

const myStack = new LinkedListStack()
console.log('myStack size:', myStack.size())
console.log('myStack is_empty:', myStack.is_empty())

// 入栈
myStack.push(1)
myStack.push(3)
myStack.push(2)
myStack.push(5)
myStack.push(4)
console.log('myStack入栈:', myStack.to_list())

// 栈顶元素访问
const myPeek = myStack.peek()
console.log('myStack栈顶元素访问:', myStack.to_list(), myPeek)

// 出栈
const num = myStack.pop()
console.log('myStack出栈:', myStack.to_list(), num)

/**
 * 基于数组实现的栈
 */
class ArrayStack {
    private _stack: number[] = []

    constructor() {}

    public size(): number {
        return this._stack.length
    }

    is_empty(): boolean {
        return this.size() === 0
    }

    push(item: number) {
        if (this.is_empty()) {
            throw new Error('栈为空')
        }

        this._stack.push(item)
    }

    pop(): number {
        if (this.is_empty()) {
            throw new Error('栈为空')
        }

        const num = this._stack.pop()
        if (num === undefined) {
            throw new Error('栈操作错误')
        }
        return num
    }

    peek(): number {
        if (this.is_empty()) {
            throw new Error('栈为空')
        }

        return this._stack[this.size() - 1]
    }

    to_list(): number[] {
        return this._stack
    }
}

const myArrayStack = new LinkedListStack()
console.log('myArrayStack size:', myArrayStack.size())
console.log('myArrayStack is_empty:', myArrayStack.is_empty())

// 入栈
myArrayStack.push(1)
myArrayStack.push(3)
myArrayStack.push(2)
myArrayStack.push(5)
myArrayStack.push(4)
console.log('myArrayStack入栈:', myArrayStack.to_list())

// 栈顶元素访问
const myArrayPeek = myArrayStack.peek()
console.log('myArrayStack栈顶元素访问:', myArrayStack.to_list(), myArrayPeek)

// 出栈
const num1 = myArrayStack.pop()
console.log('myArrayStack出栈:', myArrayStack.to_list(), num1)

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
