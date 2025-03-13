import random


# 常数阶O(1)
def constant(n: int) -> int:
    count = 0
    size = 100000
    for _ in range(size):
        count += 1
    return count


n = 5
res = constant(n)
print(f"结果为{res}")


# 线性阶O(n)
def linear(n: int) -> int:
    count = 0
    for _ in range(n):
        count += 1
    return count


n1 = 5
res1 = linear(n1)
print(f"线性阶结果为{res1}")


def array_traversal(nums: list[int]) -> int:
    count = 0
    for num in nums:
        count += 1
    return count


listVar = [1, 2, 3, 4, 5]
res2 = array_traversal(listVar)
print(f"线性阶结果为{res2}")


# 平方阶O(n^2)
def quadratic(n: int) -> int:
    count = 0
    for i in range(n):
        for j in range(n):
            count += 1
    return count


n2 = 5
res3 = quadratic(n2)
print(f"线性阶结果为{res3}")


# 冒泡排序(bubble sort)
def bubble_sort(nums: list[int]) -> int:
    count = 0  # 计数器
    # 外循环：未排序的区间为[0,i]
    for i in range(len(nums) - 1, 0, -1):
        # 内循环：将未排序区间[0,i]中的最大元素交换至该区间的最右端
        for j in range(i):
            if nums[j] > nums[j + 1]:
                # 交换nums[j]与nums[j+1]
                tmp: int = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = tmp
                count += 3
    return count


inoderList = [2, 5, 7, 1, 5, 9, 3]
oderListCount = bubble_sort(inoderList)
print(f"排序后的列表为{inoderList},操作了{oderListCount}次")


# 指数阶O(2^n)
def exponential(n: int) -> int:
    count = 0
    base = 1
    for _ in range(n):
        for _ in range(base):
            count += 1
        base *= 2
    return count


expN = 5
expRes = exponential(expN)
print(f"指数分裂{expN}次后，计数为{expRes}")


# 指数阶O(2^n),递归实现
def exp_recur(n: int) -> int:
    count = 0
    if n == 1:
        return 1
    return exp_recur(n - 1) + exp_recur(n - 1) + 1


expNN = 5
expRess = exp_recur(expNN)
print(f"指数1到第{expNN}位之和为{expRess}")


# 对数阶O(log n)
def logarithmetic(n: int) -> int:
    count = 0
    while n > 1:
        n = n / 2
        count += 1
    return count


print(f"logarithmetic的操作数为: {logarithmetic(5)}")


# 对数阶O(log n)，递归实现
def log_recur(n: int) -> int:
    if n <= 1:
        return 0
    return log_recur(n / 2) + 1


print(f"log_recur的操作数为: {log_recur(5)}")


# 线性对数阶O(nlogn)
def linear_log_recur(n: int) -> int:
    """线性对数阶"""
    if n <= 1:
        return 1
    count: int = linear_log_recur(n // 2) + linear_log_recur(n // 2)
    for _ in range(n):
        count += 1
    return count


llcN = 100
llcRes = linear_log_recur(llcN)
print(f"linear_log_recur操作数为{llcRes}")

# 阶乘阶（O(n!)）


def factorial_recur(n: int) -> int:
    """阶乘阶（递归实现）"""
    if n == 0:
        return 1
    count = 0
    # 从1个分裂出n个
    for _ in range(n):
        count += factorial_recur(n - 1)
    return count


fcN = 5
fcRes = factorial_recur(fcN)
print(f"阶乘阶第{fcN}层的节点数量为{fcRes}")


# 最差、最佳、平均时间复杂度
def random_numbers(n: int) -> list[int]:
    """生成一个数组,元素为1,2,3,...,n,顺序被打乱"""
    # 生成数组 nums =：1,2,3,...,n
    nums = [i for i in range(1, n + 1)]
    # 随机打乱数组元素
    random.shuffle(nums)
    return nums


def find_one(nums: list[int]) -> int:
    """查找数组 nums 中数字 1 所在的索引"""
    for i in range(len(nums)):
        # 当元素 1 在数组头部时，达到最佳时间复杂度Ω(1)
        # 当元素 1 在数组尾部时，达到最差时间复杂度O(n)
        if (nums[i]) == 1:
            return i
    return -1


rnN = 10
randomNums = random_numbers(rnN)
index = find_one(randomNums)
print(randomNums, f"找到数组中1的索引为{index}")
