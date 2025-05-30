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
