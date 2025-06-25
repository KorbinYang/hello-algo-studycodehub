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
    constructor(rootNum: number) {
        // 初始化二叉搜索树根节点为 null
        this._root = null
        // 插入根节点
        this.insert(rootNum)
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

    insert(num: number) {
        if (this._root === null) {
            this._root = new TreeNode(num)
            return
        }

        let cur: TreeNode | null = this._root
        let pre: TreeNode | null = null
        // 循环查找，越过叶节点跳出
        while (cur !== null) {
            if (cur.val === num) {
                return
            }

            // 保存当前节点
            pre = cur

            if (num > cur.val) {
                cur = cur.right
            } else {
                cur = cur.left
            }
        }

        const node = new TreeNode(num)
        if (num > pre!.val) {
            pre!.right = node
        } else {
            pre!.left = node
        }
    }

    remove(num: number) {
        // 如果二叉搜索树根节点为空，则直接返回
        if (this._root === null) {
            return
        }
        let cur: TreeNode | null = this._root
        let pre: TreeNode | null = null
        // 循环遍历二叉搜索树，cur 越过叶子节点跳出
        while (cur !== null) {
            // 找到目标节点，跳出循环
            if (cur.val === num) {
                break
            }
            // 否则，向下继续遍历
            pre = cur
            // 如果目标节点在 cur 的右子树中
            if (num > cur.val) {
                cur = cur.right
            } else {
                // 目标节点在cur的左子树
                cur = cur.left
            }
        }

        // cur 为 null时，while 循环终止，此时二叉树中没有目标节点，直接返回
        if (cur === null) {
            return
        }

        // while 循环找到待删除目标节点，强制跳出循环，此时分两种情况
        // 目标节点有 0 或 1 个子节点
        if (cur.left === null || cur.right === null) {
            // 此时目标节点的子节点为
            const child = cur.left || cur.right
            // 删除目标节点
            // 删除目标节点分两种情况，根节点直接替换，其他节点用父节点来连接
            if (cur !== this._root) {
                // 判断目标节点在父节点的哪一边
                // 在左边
                if (cur === pre?.left) {
                    pre.left = child
                } else {
                    // 在右边
                    pre!.right = child
                }
            } else {
                // 目标节点为根节点直接替换为 child
                this._root = child
            }
        } else {
            // 目标节点有两个子节点
            // 找到 cur 中序遍历的下一个节点
            let tmp: TreeNode = cur.right
            // 如果cur 中序遍历的下一个节点的左节点存在，递归删除tmp
            while (tmp.left !== null) {
                tmp = tmp.left
                this.remove(tmp.val)
                cur.val = tmp.val
            }
        }
    }
}

const binarySearchTree = new BinarySearchTree(8)

// 二叉搜索树插入其他节点
const levelOneNums = [4, 12]
const levelTwoNums = [2, 6, 10, 14]
const levelThreeNums = [1, 3, 5, 7, 9, 11, 13, 15]
// 插入第一层节点
levelOneNums.forEach((num) => {
    binarySearchTree.insert(num)
})
// 插入第二层节点
levelTwoNums.forEach((num) => {
    binarySearchTree.insert(num)
})
// 插入第三层节点
levelThreeNums.forEach((num) => {
    binarySearchTree.insert(num)
})

const targetTreeNode = binarySearchTree.search(6)
console.log(
    '二叉搜索树搜索目标节点',
    targetTreeNode?.val,
    targetTreeNode?.left?.val,
    targetTreeNode?.right?.val
)

// 二叉搜索树删除节点测试
// 删除没有子节点的节点（叶子节点）
binarySearchTree.remove(3)
const removeNodeParent = binarySearchTree.search(2)
console.log(
    '删除节点的父节点：',
    removeNodeParent?.left?.val,
    removeNodeParent?.right
)

// 删除只有一个子节点的节点
binarySearchTree.remove(2)
const removeNodeParent1 = binarySearchTree.search(1)
console.log(
    '删除节点信息：',
    removeNodeParent1?.left,
    removeNodeParent1?.right,
    binarySearchTree.search(4)?.left?.val
)

// 二叉搜索树删除有两个节点的节点
binarySearchTree.remove(4)
const removeNodeParent2 = binarySearchTree.search(8)
console.log('删除节点的父节点：', removeNodeParent2?.left?.val)

// 删除根节点
binarySearchTree.remove(8)
const afterRemoveRootNode = binarySearchTree.search(9)
console.log('根节点的左节点', afterRemoveRootNode?.left?.val)

