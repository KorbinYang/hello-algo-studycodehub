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
