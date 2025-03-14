"""空间复杂度 space_complexity"""


class ListNode:
    """定义链表节点类"""

    def __init__(self, val=0):
        self.val = val
        self.next = None


def function() -> int:
    return 0


def constant(n: int):
    """常数阶"""
    # 常量、变量、对象占用O(1)空间
    a = 0
    nums = [0] * 10000  # 创建一个包含 10000 个元素的列表，每个元素的初始值为 0
    node = ListNode(0)

    # 循环中变量占用O(1)空间
    for _ in range(n):
        c = 0
    # 循环中函数占用O(1)空间
    for _ in range(n):
        function()


# 线性阶O(n)
def linear(n: int):
    """线性阶"""
    # 长度为 n 的列表占用O(n)空间
    nums = [0] * n
    # 长度为 n 的哈希表占用O(n)空间
    hmap = dict[int, str]()
    for i in range(n):
        hmap[i] = str(i)
    print("nums:", nums, "hmap:", hmap)


linear(5)


def linear_recur(n: int):
    """线性阶(递归实现)"""
    print("递归 n = ", n)
    if n == 1:
        return
    linear_recur(n - 1)


linear_recur(5)


# 平方阶O(n^2)
def quadratic(n: int):
    """平方阶"""
    # 二维列表占用O(n^2)空间
    num_matrix = [[0] * n for _ in range(n)]
    print("num_matrix", num_matrix)


quadratic(5)


def quadratic_recur(n: int) -> int:
    """平方阶（递归实现）"""
    if n <= 0:
        return 0
    # 数组 nums 长度为 n,n-1,...,2,1
    nums = [0] * n
    print("nums:", nums)
    return quadratic_recur(n - 1)


quadratic_recur(5)


# 定义 TreeNode 类
class TreeNode:
    """定义二叉树节点类"""

    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# 指数阶O(2^n)
def build_tree(n: int) -> TreeNode | None:
    """指数阶（建立满二叉树）"""
    if n == 0:
        return None
    root = TreeNode(0)
    root.left = build_tree(n - 1)
    root.right = build_tree(n - 1)
    return root


fullTree = build_tree(5)
print(f"满二叉树：{fullTree}")
