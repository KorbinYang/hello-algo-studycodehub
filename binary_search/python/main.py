def binary_search(nums: list[int], target: int) -> int:
    """二分查找（双闭区间）"""
    # 初始化双闭区间[0, n-1], 即i,j 分别指向数组首元素、尾元素
    i, j = 0, len(nums) - 1
    # 循环，当搜索空间为空时跳出(当i > j 时为空)
    while i <= j:
        # 理论上 python 的数字可以无限大（取决于内存大小），无需考虑大数越界问题
        m = (i + j) // 2  # 计算中点索引 m (// 总是返回一个整数)
        if nums[m] < target:
            i = m + 1  # 此情况说明 target 在区间 [m+1, j] 中
        elif nums[m] > target:
            j = m - 1  # 此情况说明 target 在区间 [i, m-1] 中
        else:
            return m  # 找到目标元素，返回索引
    return -1  # 未找到目标元素，返回 -1


testArray = [1, 4, 7, 9, 0, 3, 5, 6, 8, 3]
testTarget = 6
testResult = binary_search(testArray, testTarget)
print("二分查找（双闭区间）索引:", testResult)


def binary_search_icro(nums: list[int], target: int) -> int:
    """二分查找（左闭右开区间）"""
    i, j = 0, len(nums)

    while i < j:
        m = (i + j) // 2
        if target > nums[m]:
            i = m + 1
        elif target < nums[m]:
            j = m
        else:
            return m
    return -1


testArrayICRO = [1, 4, 7, 9, 0, 3, 5, 6, 8, 3]
testTargetICRO = 6
testResultICRO = binary_search(testArrayICRO, testTargetICRO)
print("二分查找（左闭右开区间）索引:", testResultICRO)


def binary_search_insertion_simple(nums: list[int], target: int) -> int:
    """二分查找插入点（无重复元素）"""
    i, j = 0, len(nums) - 1  # 初始化双闭区间
    while i <= j:
        m = (i + j) // 2  # 计算中点索引 m
        if target > nums[m]:
            i = m + 1  # target 在区间[m+1, j]中
        elif target < nums[m]:
            j = m - 1  # target 在区间[i, m-1]中
        else:
            return m  # 找到 target ，返回插入点 m
    # 未找到 target, 返回插入点 i
    return i


testInsertionArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]  # 有序数组
testInsertionTarget1 = 6
testInsertionTarget2 = 10
testResultInsertionIndex1 = binary_search_insertion_simple(
    testInsertionArray, testInsertionTarget1
)
testResultInsertionIndex2 = binary_search_insertion_simple(
    testInsertionArray, testInsertionTarget2
)
print("二分查找插入点索引为:", testResultInsertionIndex1, testResultInsertionIndex2)


def binary_search_insertion(nums: list[int], target: int) -> int:
    """二分查找插入点(存在重复元素)"""
    i, j = 0, len(nums) - 1  # 初始化双闭区间
    while i <= j:
        m = (i + j) // 2  # 计算中点索引 m
        if target > nums[m]:
            i = m + 1  # target 在区间[m+1, j]中
        elif target < nums[m]:
            j = m - 1  # target 在区间[i, m-1]中
        else:
            j = m - 1
    # 返回插入点
    return i


testNums = [1, 3, 6, 6, 6, 6, 6, 10, 12, 15]
# 插入 6，数组中有5个重复元素。选择最左边target的index
testTargetIndex = binary_search_insertion(testNums, 6)
print("二分查找插入点(存在重复元素)：", testTargetIndex)
