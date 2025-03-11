// 1到n求和
export function for_loop(n: number): number {
    let res = 0

    for (let i = 1; i <= n; i++) {
        res += i
    }

    return res
}

const n = 5
const sum = for_loop(n)
console.log(`1到${n}的和为：${sum}`)

// while 循环实现1到n求和
export function while_loop(n: number): number {
    let res = 0
    let i = 1

    while (i <= n) {
        res += i
        i += 1
    }

    return res
}

const m = 5
const sum1 = while_loop(n)
console.log(`1到${m}的和为：${sum1}`)

// while 循环实现1到n求和, i 每轮进行两次更新
export function while_loop_ii(n: number): number {
    let res = 0
    let i = 1

    while (i <= n) {
        res += i
        i += 1
        i *= 2
    }

    return res
}

const x = 30
const sum2 = while_loop_ii(x)
console.log(`1到${x}的和为：${sum2}`)

// 嵌套循环

export function nested_for_loop(n: number): string {
    let res = ''

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            res += `(${i}, ${j}),`
        }
    }

    return res
}

const y = 5
const sumStr = nested_for_loop(y)
console.log(`1到${y}的和为：${sumStr}`)
