// 常数阶O(1)
export function constant(n) {
    let count = 0
    const size = 100000
    for (let i = 1; i <= size; i++) {
        count += 1
    }

    return count
}

const n = 5
const res = constant(n)
console.log(`结果为${res}`)

// 线性阶O(n)
export function linear(n) {
    let count = 0
    for (let i = 1; i <= n; i++) {
        count += 1
    }

    return count
}

const n1 = 5
const res1 = linear(n1)
console.log(`线性阶结果为${res1}`)

export function array_traversal(list) {
    let count = 0
    for (let item of list) {
        count += 1
    }
    return count
}

const list = [1, 2, 3, 4, 5]
const res2 = array_traversal(list)
console.log(`线性阶结果为${res2}`)

// 平方阶O(n^2)
export function quadratic(n) {
    let count = 0
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            count += 1
        }
    }

    return count
}

const n2 = 5
const res3 = quadratic(n2)
console.log(`线性阶结果为${res3}`)

// 冒泡排序(bubble sort)
export function bubble_sort(list) {
    let count = 0 // 计数器
    // 外循环： 未排序区间为[0,i]
    for (let i = list.length - 1; i > 0; i--) {
        // 内循环：将未排序区间[0,i]中的最大元素交换至该区间的最右端
        for (let j = 0; j < i; j++) {
            if (list[j] > list[j + 1]) {
                const tmp = list[j]
                list[j] = list[j + 1]
                list[j + 1] = tmp
                count += 3
            }
        }
    }

    return count
}

const inoderList = [2, 5, 7, 1, 5, 9, 3]
const oderListCount = bubble_sort(inoderList)
console.log(`排序后的列表为`, inoderList, `操作了${oderListCount}次`)

// 指数阶O(2^n)
export function exponential(n) {
    let count = 0
    let base = 1

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= base; j++) {
            count += 1
        }
        base *= 2
    }

    return count
}

const expN = 5
const expRes = exponential(expN)
console.log(`指数分裂${expN}次后，计数为${expRes}`)

// 指数阶O(2^n),递归实现
export function exp_recur(n) {
    if (n === 1) {
        return 1
    }

    return exp_recur(n - 1) + exp_recur(n - 1) + 1
}

const expNN = 5
const expRess = exp_recur(expNN)
console.log(`指数1到第${expNN}位之和为${expRess}`)

// 对数阶O(log n)
export function logarithmetic(n) {
    let count = 0
    while (n > 1) {
        n = n / 2
        count += 1
    }

    return 1
}

console.log(`logarithmetic的操作数为: ${logarithmetic(5)}`)

// 对数阶O(log n)，递归实现
export function log_recur(n) {
    if (n <= 1) {
        return 0
    }

    return log_recur(n / 2) + 1
}

console.log(`log_recur的操作数为: ${log_recur(5)}`)

// 线性对数阶O(nlogn)
export function linear_log_recur(n) {
    if (n <= 1) {
        return 1
    }

    let count =
        linear_log_recur(Math.floor(n / 2)) +
        linear_log_recur(Math.floor(n / 2))
    for (let i = 1; i <= n; i++) {
        count += 1
    }

    return count
}

const llcN = 100
const llcRes = linear_log_recur(llcN)
console.log(`linear_log_recur操作数为${llcRes}`)

// 阶乘阶（O(n!)）
export function factorial_recur(n) {
    if (n === 0) {
        return 1
    }
    let count = 0
    // 从一个分裂出n个
    for (let i = 1; i <= n; i++) {
        count += factorial_recur(n - 1)
    }

    return count
}

const fcN = 5
const fcRes = factorial_recur(fcN)
console.log(`阶乘阶第${fcN}层的节点数量为${fcRes}`)

// 最差、最佳、平均时间复杂度
export function random_numbers(n) {
    // 生成一个数组,元素为1,2,3,...,n,顺序被打乱

    // 生成数组 nums =：1,2,3,...,n
    const nums = []
    for (let i = 1; i <= n; i++) {
        nums.push(i)
    }
    // 随机打乱数组元素（使用Fisher-Yates洗牌算法）
    for (let i = nums.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[nums[i], nums[j]] = [nums[j], nums[i]]
    }

    return nums
}

export function find_one(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            return i
        }
    }

    return -1
}

const rnN = 10
const randomNums = random_numbers(rnN)
const index = find_one(randomNums)
console.log(randomNums, `找到数组中1的索引为${index}`)
