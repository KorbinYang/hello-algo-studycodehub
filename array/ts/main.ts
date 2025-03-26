/**
 * 数组常用操作
 */

// 初始化数组

// 类型推断
const arr = new Array(5).fill(0) // [0,0,0,0,0]
const nums = [1, 2, 3, 4, 5]

// 类型注解
const arr1: number[] = new Array(5).fill(0)
const nums1: number[] = [1, 2, 3, 4, 5]

// 访问元素
export function random_access(nums: number[]): number {
    // 在区间[0, len(nums) - 1] 中随机抽取一个数字
    const random_index = Math.floor(Math.random() * nums.length)
    // 获取并返回随机元素
    const random_num = nums[random_index]
    return random_num
}

const num = random_access(nums)
console.log(`随机元素为：${num}`)

// 插入元素
/**
 * 在数组的索引 index 处插入元素 num
 * @param {number[]} nums
 * @param {number} num
 * @param {number} index
 */
export function insert(nums: number[], num: number, index: number) {
    // 把索引 index 以及之后的所有元素向后移动一位
    for (let i = nums.length - 1; i > index; i--) {
        nums[i] = nums[i - 1]
    }
    nums[index] = num
}

const insertNum = 6
const insertIndex = 2
insert(nums, insertNum, insertIndex)
console.log(`插入后的数组: `, nums)

// 删除元素
export function remove(nums: number[], index: number) {
    for (let i = index; i < nums.length - 1; i++) {
        nums[i] = nums[i + 1]
    }
}

const removeIndex = 2
remove(nums, removeIndex)
console.log(`删除后的数组为:`, nums)

// 遍历数组
export function traverse(nums: number[]) {
    /**
     * 遍历数组
     */

    let indexCount = 0
    let count = 0
    let enumIndexCount = 0
    let enumCount = 0

    // 通过索引遍历数组
    for (let i = 0; i < nums.length; i++) {
        indexCount += nums[i]
    }

    // 直接遍历数组
    for (const num of nums) {
        count += num
    }
    // 同时遍历数据索引和元素
    nums.forEach((num, i) => {
        enumIndexCount += nums[i]
        enumCount += num
    })

    console.log(
        `indexCount: ${indexCount}, count: ${count}, enumIndexCount: ${enumIndexCount}, enumCount: ${enumCount}`
    )
}

const nums2 = [1, 2, 3, 4, 5]
traverse(nums2)

// 查找元素
export function find(nums: number[], target: number): number {
    /**
     * 在数组中查找元素
     */
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i
        }
    }

    return -1
}

const fNums: number[] = [1, 2, 3, 4, 5]
const fIndex: number = find(fNums, 4)
console.log(`查找的元素索引为：${fIndex}`)

// 扩容数组
export function extend(nums: number[], enlarge: number): number[] {
    /**
     * 拓展数组长度
     */
    // 初始化一个拓展长度后的数组
    const res = new Array(nums.length + enlarge).fill(0)
    // 将原数组中的所有元素复制到新数组
    for (let i = 0; i < nums.length; i++) {
        res[i] = nums[i]
    }
    // 返回拓展后的新数组
    return res
}

const eNums: number[] = [1, 2, 3, 4, 5]
const exNums: number[] = extend(eNums, 5)
console.log('拓展后的数组：', exNums)
