/**
 * 空间复杂度 space_complexity
 */

class ListNode {
    constructor(next: number, val: string) {
        this.next = next
        this.val = val
    }

    public next: number = 0
    public val: string = ''
}

export function fn() {
    return 0
}

export function constant(n: number) {
    // 常量、变量、对象占用O(1)空间
    let a = 0
    const nums = new Array(10000).fill(0)
    const node = new ListNode(0, 'hello')
    console.log(node.val)

    for (let i = 1; i <= n; i++) {
        const c = 0 // 循环中变量占用O(1)空间
    }

    for (let j = 1; j <= n; j++) {
        fn() // 循环中函数占用O(1)空间
    }
}

constant(10)

// 线性阶O(n)
export function linear(n: number) {
    // 长度为 n 的列表占用O(n)空间
    const nums = new Array(n).fill(0)
    // 长度为 n 的哈希表占用O(n)空间
    const hmap = new Map<number, string>()
    for (let i = 0; i < n; i++) {
        hmap.set(i, i.toString())
    }
    const arrayHmap = Array.from(hmap.entries())
    const serializableHmap = Object.fromEntries(hmap.entries())
    console.log(
        `nums:`,
        nums,
        `hmap:`,
        `对象输出：`,
        serializableHmap,
        `数组输出：`,
        arrayHmap
    )
}

linear(5)

// 线性阶(递归实现)
export function linear_recur(n: number) {
    console.log('递归 n =', n)
    if (n === 1) {
        return
    }
    linear_recur(n - 1)
}

linear_recur(5)

// 平方阶O(n^2)
export function quadratic(n: number) {
    const num_matrix = []
    for (let i = 0; i < n; i++) {
        num_matrix[i] = new Array(n).fill(0)
    }
    console.log('num_matrix:', num_matrix)
}

quadratic(5)

// 平方阶（递归实现）
export function quadratic_recur(n: number) {
    if (n <= 0) {
        return 0
    }
    const nums = new Array(n).fill(0)
    console.log(`nums:`, nums)
    return quadratic_recur(n - 1)
}

quadratic_recur(5)

// 指数阶O(2^n)
/**
 * 待定...
 */
