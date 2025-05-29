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

