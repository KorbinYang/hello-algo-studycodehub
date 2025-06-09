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
