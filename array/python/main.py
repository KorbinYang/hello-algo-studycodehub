"""数组常用操作"""

# 初始化数组

import random


arr: list[int] = [0] * 5  # [0,0,0,0,0]
nums: list[int] = [1, 2, 3, 4, 5]


# 访问元素
def random_access(nums: list[int]) -> int:
    """随机访问元素"""
    # 在区间[0, len(nums) - 1] 中随机抽取一个数字
    random_index = random.randint(0, len(nums) - 1)
    # 获取并返回随机元素
    random_num = nums[random_index]
    return random_num


num = random_access(nums)
print(f"随机元素为：{num}")


# 插入元素
def insert(nums: list[int], num: int, index: int):
    """在数组的索引 index 处插入元素 num"""
    # 把索引 index 以及之后的所有元素向后移动一位
    for i in range(len(nums) - 1, index, -1):
        nums[i] = nums[i - 1]
    # 将 num 赋给 index 处的元素
    nums[index] = num


insertNum = 6
insertIndex = 2
insert(nums, insertNum, insertIndex)
print(f"插入后的数组: {nums}")


# 删除元素
def remove(nums: list[int], index: int):
    """删除索引 index 处的元素"""
    # 把索引 index 处的元素向前移动一位
    for i in range(index, len(nums) - 1):
        nums[i] = nums[i + 1]


removeIndex = 2
remove(nums, removeIndex)
print(f"删除后的数组为：{nums}")


# 遍历数组
def traverse(nums: list[int]):
    """遍历数组"""
    indexCount = 0
    count = 0
    enumIndexCount = 0
    enumCount = 0
    # 通过索引遍历数组
    for i in range(len(nums)):
        indexCount += nums[i]
    # 直接遍历数组
    for num in nums:
        count += num
    # 同时遍历数据索引和元素
    for i, num in enumerate(nums):
        enumIndexCount += nums[i]
        enumCount += num
    print(
        f"indexCount: {indexCount}, count: {count}, enumIndexCount: {enumIndexCount}, enumCount: {enumCount}"
    )


nums = [1, 2, 3, 4, 5]
traverse(nums)


# 查找元素
def find(nums: list[int], target: int) -> int:
    """在数组中查找元素"""
    for i in range(len(nums)):
        if nums[i] == target:
            return i
    return -1


fNums = [1, 2, 3, 4, 5]
fIndex = find(fNums, 4)
print(f"查找的元素索引为：{fIndex}")


# 扩容数组
def extend(nums: list[int], enlarge: int) -> list[int]:
    """拓展数组长度"""
    # 初始化一个拓展长度后的数组
    res = [0] * (len(nums) + enlarge)
    # 将原数组中的所有元素复制到新数组
    for i in range(len(nums)):
        res[i] = nums[i]
    # 返回拓展后的新数组
    return res


eNums = [1, 2, 3, 4, 5]
exNums = extend(eNums, 5)
print("拓展后的数组：", exNums)
