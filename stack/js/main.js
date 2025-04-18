import { ListNode } from '../../linkedList/js/main.js'

// 初始化栈
// js 中没有内置栈，可以把数组 Array 当作栈来使用
const stack = []

// 元素入栈
stack.push(1)
stack.push(3)
stack.push(2)
stack.push(5)
stack.push(4)
console.log('元素入栈:', stack)

// 访问栈顶元素
const peek = stack[stack.length - 1]
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
    constructor() {
        this._size = 0
        this._peek = null // 一般用链表头节点表示链表
    }

    size() {
        return this._size
    }

    is_empty() {
        return this._size === 0
    }

    push(val) {
        const node = new ListNode(val)
        node.next = this._peek
        this._peek = node
        this._size += 1
    }

    peek() {
        if (this.is_empty()) {
            throw new Error('栈为空')
        }
        return this._peek.val
    }

    pop() {
        const num = this._peek.val
        this._peek = this._peek.next
        this._size -= 1
        return num
    }

    to_list() {
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

// 实例化 栈
const myStack = new LinkedListStack()
console.log('myStack实例化:', myStack.to_list())

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
