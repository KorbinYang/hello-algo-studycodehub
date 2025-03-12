// 递归求和1到n,递增1
export function recur(n: number): number {
    // 终止条件
    if (n === 1) {
        return 1
    }
    // 递：递归调用
    let res = recur(n - 1)
    // 归：返回结果
    return n + res
}

const z = 5
const sum3 = recur(z)
console.log(`1到${z}的和为：${sum3}`)

// 递归求和1到n,递增1（尾递归）
export function tail_recur(n: number, res: number): number {
    // 终止条件
    if (n === 0) {
        return res
    }

    // 尾递归调用
    return tail_recur(n - 1, res + n)
}

const a = 5
const sum4 = tail_recur(a, 0)
console.log(`尾递归1到${a}的和为：${sum4}`)

// 递归树
// 求斐波那契数列的第n个数字
export function fib(n: number): number {
    let res = 0
    // 终止条件
    if (n === 1 || n === 2) {
        return n - 1
    }
    // 递归调用
    res = fib(n - 1) + fib(n - 2)
    // 返回结果
    return res
}

const fibN = 5
const fibNum = fib(fibN)
console.log(`斐波那契数列第${fibN}个数为:${fibNum}`)

//  使用显示的栈模拟递归调用栈的行为(1到n求和)
export function for_loop_recur(n: number): number {
    let res = 0
    // 使用一个显示的栈模拟系统调用栈
    const stack: number[] = []
    // 递：递归调用
    for (let i = 1; i <= n; i++) {
        stack.push(i)
    }
    // 归：返回结果
    while (stack.length > 0) {
        // 通过出栈操作模拟归
        res += Number(stack.pop())
    }
    // res = 1+2+3+...+n
    return res
}

const b = 5
const sum5 = for_loop_recur(b)
console.log(`迭代模拟递归调用1到${b}的和为：${sum5}`)
