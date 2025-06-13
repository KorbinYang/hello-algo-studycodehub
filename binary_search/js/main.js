/**
 * 二分查找（双闭区间）
 */
function binary_search(nums, target) {
    let i = 0
    let j = nums.length - 1

    while (i <= j) {
        let m = Math.floor((i + j) / 2)

        if (target > nums[m]) {
            i = m + 1
        } else if (target < nums[m]) {
            j = m - 1
        } else {
            return m
        }
    }

    return -1
}

const testArray = [1, 4, 7, 9, 0, 3, 5, 6, 8, 3]
const testTarget = 6
const testResult = binary_search(testArray, testTarget)
console.log('二分查找（双闭区间）索引:', testResult)

/**
 * 二分查找（左闭右开区间）
 */
function binary_search_icro(nums, target) {
    let i = 0
    let j = nums.length

    while (i < j) {
        let m = Math.floor((i + j) / 2)

        if (target > nums[m]) {
            i = m + 1
        } else if (target < nums[m]) {
            j = m
        } else {
            return m
        }
    }

    return -1
}

const testArrayICRO = [1, 4, 7, 9, 0, 3, 5, 6, 8, 3]
const testTargetICRO = 6
const testResultICRO = binary_search(testArrayICRO, testTargetICRO)
console.log('二分查找（左闭右开区间）索引:', testResultICRO)

// 二分查找插入点（无重复元素）
function binary_search_insertion_simple(nums, target) {
    let i = 0
    let j = nums.length - 1

    while (i <= j) {
        let m = Math.floor((i + j) / 2)

        if (target > nums[m]) {
            i = m + 1
        } else if (target < nums[m]) {
            j = m - 1
        } else {
            return m
        }
    }

    return i
}

const testInsertionArray = [1, 2, 3, 4, 5, 6, 7, 8, 9] // 有序数组
const testInsertionTarget1 = 6
const testInsertionTarget2 = 10
const testResultInsertionIndex1 = binary_search_insertion_simple(
    testInsertionArray,
    testInsertionTarget1
)
const testResultInsertionIndex2 = binary_search_insertion_simple(
    testInsertionArray,
    testInsertionTarget2
)
console.log(
    '二分查找插入点索引为:',
    testResultInsertionIndex1,
    testResultInsertionIndex2
)

