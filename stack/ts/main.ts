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
