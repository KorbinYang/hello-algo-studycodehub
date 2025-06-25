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


# 将二叉搜索树封装为一个类
class BinarySearchTree:
    def __init__(self, rootNum: int):
        # 初始化二叉搜索树根节点为 None
        self._root = None
        # 插入二叉搜索树根节点
        self.insert(rootNum)

    # 二叉搜索树
    def search(self, num: int) -> TreeNode | None:
        """查找节点"""
        cur: TreeNode = self._root

        # 循环查找，越过节点后跳出
        while cur is not None:
            # 目标节点在 cur 的右子树中
            if num > cur.val:
                cur = cur.right
            # 目标节点在 cur 的左子树中
            elif num < cur.val:
                cur = cur.left
            # 找到目标节点，跳出循环
            else:
                break
        return cur

    def insert(self, num: int):
        """插入节点"""
        # 若树为空，则初始化根节点
        if self._root is None:
            self._root = TreeNode(num)
            return
        # 循环查找，越过叶节点后跳出
        cur, pre = self._root, None
        while cur is not None:
            # 找到重复节点，直接返回
            if cur.val == num:
                return

            pre = cur

            # 插入位置在 cur 的右子树中
            if num > cur.val:
                cur = cur.right
            # 插入位置在 cur 的左子树中
            else:
                cur = cur.left

        # 插入节点
        node = TreeNode(num)
        if num > pre.val:
            pre.right = node
        else:
            pre.left = node

    def remove(self, num: int):
        """删除节点"""
        # 若树为空，则直接返回
        if self._root is None:
            return
        # 循环查找，越过叶节点后跳出
        cur, pre = self._root, None
        while cur is not None:
            # 找到待删除节点，跳出循环
            if cur.val == num:
                break
            pre = cur
            # 待删除节点在 cur 的右子树中
            if num > cur.val:
                cur = cur.right
            # 待删除节点在 cur 的左子树中
            else:
                cur = cur.left
        # 若无待删除节点，则直接返回
        if cur is None:
            return

        # 子节点数量 = 0 or 1
        if cur.left is None or cur.right is None:
            # 当子节点数量 = 0 、1时，child = null、该子节点
            child = cur.left or cur.right
            # 删除节点 cur
            if cur != self._root:
                if pre.left == cur:
                    pre.left = child
                else:
                    pre.right = child
            else:
                # 若删除节点为根节点，则重新指定根节点
                self._root = child
        # 子节点数量 = 2
        else:
            # 获取中序遍历中 cur 的下一个节点
            tmp: TreeNode = cur.right
            while tmp.left is not None:
                tmp = tmp.left
                # 递归删除节点 tmp
                self.remove(tmp.val)
                # 用 tmp 覆盖 cur
                cur.val = tmp.val


binarySearchTree = BinarySearchTree(8)  # 初始化二叉搜索树根节点，值为8
# 二叉搜索树插入其他节点
levelOneNums = [4, 12]
levelTwoNums = [2, 6, 10, 14]
levelThreeNums = [1, 3, 5, 7, 9, 11, 13, 15]

# 插入第一层节点
for i in range(len(levelOneNums)):
    binarySearchTree.insert(levelOneNums[i])
# 插入第二层节点
for i in range(len(levelTwoNums)):
    binarySearchTree.insert(levelTwoNums[i])
# 插入第三层节点
for i in range(len(levelThreeNums)):
    binarySearchTree.insert(levelThreeNums[i])


targetTreeNode = binarySearchTree.search(6)
print(
    "二叉搜索树搜索目标节点",
    targetTreeNode.val,
    targetTreeNode.left.val,
    targetTreeNode.right.val,
)

# 二叉搜索树删除节点测试
# 删除没有子节点的节点（叶子节点）
binarySearchTree.remove(3)
removeNodeParent = binarySearchTree.search(2)
print("删除节点的父节点：", removeNodeParent.left.val, removeNodeParent.right)

# 删除只有一个子节点的节点
binarySearchTree.remove(2)
removeNodeParent1 = binarySearchTree.search(1)
print(
    "删除节点信息：",
    removeNodeParent1.left,
    removeNodeParent1.right,
    binarySearchTree.search(4).left.val,
)

# 二叉搜索树删除有两个节点的节点
binarySearchTree.remove(4)
removeNodeParent2 = binarySearchTree.search(8)
print("删除节点的父节点：", removeNodeParent2.left.val)

# 删除根节点
binarySearchTree.remove(8)
afterRemoveRootNode = binarySearchTree.search(9)
print("根节点的左节点", afterRemoveRootNode.left.val)
