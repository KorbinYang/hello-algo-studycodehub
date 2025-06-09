export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val: number) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const testTreeNode = new TreeNode(6)
console.log(testTreeNode.val)

// 初始化二叉树
// 初始化节点
const n1 = new TreeNode(1)
const n2 = new TreeNode(2)
const n3 = new TreeNode(3)
const n4 = new TreeNode(4)
const n5 = new TreeNode(5)
// 构建节点之间的引用
n1.left = n2
n1.right = n3
n2.left = n4
n2.right = n5

// 插入与删除节点
const p = new TreeNode(0)
// 在 n1 -> n2 之间插入节点 p
n1.left = p
p.left = n2
// 删除节点 p
n1.left = n2

function level_order(root: TreeNode): number[] {
    const queue: TreeNode[] = []
    queue.push(root)
    const res: number[] = []

    while (queue.length > 0) {
        const node = queue.shift() as TreeNode
        res.push(node.val)

        if (node.left !== null) {
            queue.push(node.left)
        }
        if (node.right !== null) {
            queue.push(node.right)
        }
    }

    return res
}

const testList = level_order(n1)
console.log('层序遍历n1:', testList)

/**
 * 二叉树的深度优先遍历（前序、中序、后序遍历）
 */
function pre_order(root: TreeNode | null): number[] {
    // 前序遍历
    const res: Array<number> = []
    if (root === null) {
        return res
    }

    res.push(root.val)
    res.push(...pre_order(root.left))
    res.push(...pre_order(root.right))
    return res
}

function in_order(root: TreeNode | null): number[] {
    // 中序遍历
    const res: Array<number> = []
    if (root === null) {
        return res
    }

    res.push(...in_order(root.left))
    res.push(root.val)
    res.push(...in_order(root.right))
    return res
}

function post_order(root: TreeNode | null): number[] {
    const res: Array<number> = []
    if (root === null) {
        return res
    }

    res.push(...post_order(root.left))
    res.push(...post_order(root.right))
    res.push(root.val)
    return res
}

const tesPretList = pre_order(n1)
console.log('前序遍历n1:', tesPretList)

const tesIntList = in_order(n1)
console.log('中序遍历n1:', tesIntList)

const tesPosttList = post_order(n1)
console.log('后序遍历n1:', tesPosttList)

