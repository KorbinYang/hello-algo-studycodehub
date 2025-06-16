from collections import deque


class TreeNode:
    """二叉树结点类"""

    def __init__(self, val: int):
        self.val: int = val
        self.left: TreeNode | None = None
        self.right: TreeNode | None = None


testTreeNode = TreeNode(6)
print(testTreeNode.val)

# 初始化二叉树
# 初始化节点
n1 = TreeNode(val=1)
n2 = TreeNode(2)
n3 = TreeNode(3)
n4 = TreeNode(4)
n5 = TreeNode(5)
# 构建节点之间的引用
n1.left = n2
n1.right = n3
n2.left = n4
n2.right = n5

# 插入与删除节点
p = TreeNode(0)
# 在 n1 -> n2 之间插入节点p
n1.left = p
p.left = n2
# 删除节点p
n1.left = n2


def level_order(root: TreeNode | None) -> list[int]:
    """层序遍历"""
    # 初始化队列，加入根节点
    queue: deque[TreeNode] = deque()
    queue.append(root)
    # 初始化一个列表，用于保存遍历序列
    res = []
    while queue:
        node: TreeNode = queue.popleft()  # 队列出队
        res.append(node.val)  # 保存节点值
        if node.left is not None:
            queue.append(node.left)  # 左子节点入队
        if node.right is not None:
            queue.append(node.right)  # 右子节点入队
    return res


testList = level_order(n1)
print("层序遍历n1:", testList)


# 二叉树的深度优先遍历（前序、中序、后序遍历）
def pre_order(root: TreeNode | None) -> list[int]:
    """前序遍历"""
    res = []
    if root is None:
        return res
    # 访问优先级：根节点 -> 左子树 -> 右子树
    res.append(root.val)  # 根节点
    res += pre_order(root.left)  # 左子树
    res += pre_order(root.right)  # 右子树
    return res


def in_order(root: TreeNode | None) -> list[int]:
    """中序遍历"""
    res = []
    if root is None:
        return res
    res += in_order(root.left)
    res.append(root.val)
    res += in_order(root.right)
    return res


def post_order(root: TreeNode | None) -> list[int]:
    """后序遍历"""
    res = []
    if root is None:
        return res
    res += post_order(root.left)
    res += post_order(root.right)
    res.append(root.val)
    return res


testPreList = pre_order(n1)
print("前序遍历n1:", testPreList)

testInList = in_order(n1)
print("中序遍历n1:", testInList)


# 基于数组表示的二叉树
class ArrayBinaryTree:
    """数组表示下的二叉树"""

    def __init__(self, arr: list[int | None]):
        """构造方法"""
        self._tree = list(arr)

    def size(self):
        """列表容量"""
        return len(self._tree)

    def val(self, i: int) -> int:
        """获取索引为 i 节点的值"""
        # 若索引越界，则返回 None，代表空位
        if i < 0 or i >= self.size():
            return None
        return self._tree[i]

    def left(self, i: int) -> int | None:
        """获取索引为 i 节点的左子节点的索引"""
        return 2 * i + 1

    def right(self, i: int) -> int | None:
        """获取索引为 i 节点的右子节点的索引"""
        return 2 * i + 2

    def parent(self, i: int) -> int | None:
        """获取索引为 i 节点的父节点的索引"""
        return (i - 1) // 2

    def level_order(self) -> list[int]:
        """层序遍历"""
        self.res = []
        for i in range(self.size()):
            if self.val(i) is not None:
                self.res.append(self.val(i))
        return self.res

    def dfs(self, i: int, order: str):
        """深度优先遍历"""
        if self.val(i) is None:
            return

        # 使用 if 语句来控制根节点的访问时机，左右子树节点按顺序执行
        # 前序遍历
        if order == "pre":
            self.res.append(self.val(i))  # 前序遍历先访问根节点
        self.dfs(self.left(i), order)
        # 中序遍历
        if order == "in":
            self.res.append(
                self.val(i)
            )  # 中序遍历先访问左节点，再访问根节点，其次访问右节点
        self.dfs(self.right(i), order)
        # 后续遍历
        if order == "post":
            self.res.append(self.val(i))  # 后序遍历访问完左右节点后最后访问根节点

    def pre_order(self) -> list[int]:
        """前序遍历"""
        self.res = []
        self.dfs(0, order="pre")
        return self.res

    def in_order(self) -> list[int]:
        """中序遍历"""
        self.res = []
        self.dfs(0, order="in")
        return self.res

    def post_order(self) -> list[int]:
        """后续遍历"""
        self.res = []
        self.dfs(0, order="post")
        return self.res


testNormalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
testBinaryTree = ArrayBinaryTree(testNormalArray)

# 数组表示二叉树-层序遍历
print("数组表示二叉树-层序遍历:", testBinaryTree.level_order())

# 数组表示二叉树-递归前序遍历
print("数组表示二叉树-递归前序遍历:", testBinaryTree.pre_order())

# 数组表示二叉树-递归中序遍历
print("数组表示二叉树-递归中序遍历:", testBinaryTree.in_order())

# 数组表示二叉树-递归后序遍历
print("数组表示二叉树-递归后序遍历:", testBinaryTree.post_order())
