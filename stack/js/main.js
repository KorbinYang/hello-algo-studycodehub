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
