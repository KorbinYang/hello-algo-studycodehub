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

// 基于数组表示的二叉树
class ArrayBinaryTree {
    private _tree: Array<number | null> = []
    private _res: number[] = []

    constructor(arr: Array<number | null>) {
        this._tree = arr
    }

    private _size() {
        return this._tree.length
    }

    private _val(i: number): number | null {
        if (i < 0 || i >= this._size()) {
            return null
        }

        return this._tree[i]
    }

    private _left(i: number) {
        return 2 * i + 1
    }

    private _right(i: number) {
        return 2 * i + 2
    }

    private _parent(i: number) {
        return Math.floor((i - 1) / 2)
    }

    public level_order() {
        this._res = [] // 初始化返回结果

        for (let i = 0; i < this._size(); i++) {
            if (this._val(i) !== null) {
                this._res.push(this._val(i) as number)
            }
        }

        return this._res
    }

    private dfs(i: number, order: string) {
        // 终止条件
        if (this._val(i) === null) {
            return
        }

        // 前序遍历
        if (order === 'pre') {
            this._res.push(this._val(i) as number)
        }
        this.dfs(this._left(i), order)
        // 中序遍历
        if (order === 'in') {
            this._res.push(this._val(i) as number)
        }
        this.dfs(this._right(i), order)
        // 后序遍历
        if (order === 'post') {
            this._res.push(this._val(i) as number)
        }
    }

    pre_order() {
        this._res = []
        this.dfs(0, 'pre')
        return this._res
    }

    in_order() {
        this._res = []
        this.dfs(0, 'in')
        return this._res
    }

    post_order() {
        this._res = []
        this.dfs(0, 'post')
        return this._res
    }
}

const testNormalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const testBinaryTree = new ArrayBinaryTree(testNormalArray)

// 数组表示二叉树-层序遍历
console.log('数组表示二叉树-层序遍历:', testBinaryTree.level_order())

// 数组表示二叉树-递归前序遍历
console.log('数组表示二叉树-递归前序遍历:', testBinaryTree.pre_order())

// 数组表示二叉树-递归中序遍历
console.log('数组表示二叉树-递归中序遍历:', testBinaryTree.in_order())

// 数组表示二叉树-递归后序遍历
console.log('数组表示二叉树-递归后序遍历:', testBinaryTree.post_order())

/**
 * 将二叉搜索树封装为一个类
 */
class BinarySearchTree {
    private _root: TreeNode | null
    constructor() {
        const treeNodes: Array<TreeNode> = new Array(15)
        for (let i = 0; i < treeNodes.length; i++) {
            treeNodes[i] = new TreeNode(i + 1)
        }

        // 暴力构建二叉搜索树
        treeNodes[7].left = treeNodes[3]
        treeNodes[3].left = treeNodes[1]
        treeNodes[3].right = treeNodes[5]

        treeNodes[1].left = treeNodes[0]
        treeNodes[1].right = treeNodes[2]

        treeNodes[5].left = treeNodes[4]
        treeNodes[5].right = treeNodes[6]

        treeNodes[7].right = treeNodes[11]
        treeNodes[11].left = treeNodes[9]
        treeNodes[11].right = treeNodes[13]

        treeNodes[9].left = treeNodes[8]
        treeNodes[9].right = treeNodes[10]

        treeNodes[13].left = treeNodes[12]
        treeNodes[13].right = treeNodes[14]

        this._root = treeNodes[7]
    }

    search(num: number): TreeNode | null {
        let cur = this._root

        while (cur !== null) {
            if (num > cur.val) {
                cur = cur.right
            } else if (num < cur.val) {
                cur = cur.left
            } else {
                break
            }
        }

        return cur
    }
}

const binarySearchTree = new BinarySearchTree()
const targetTreeNode = binarySearchTree.search(6)
console.log(
    '二叉搜索树搜索目标节点',
    targetTreeNode?.val,
    targetTreeNode?.left?.val,
    targetTreeNode?.right?.val
)

