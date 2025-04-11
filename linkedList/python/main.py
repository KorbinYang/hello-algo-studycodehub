class ListNode:
    """链表节点类"""

    def __init__(self, val: int):
        self.val: int = val  # 节点值
        self.next: ListNode | None = None  # 指向下一节点的引用


# 实例化一个链表节点
node = ListNode(5)
print("val:", node.val, "next:", node.next)

# 初始化链表 1 -> 3 -> 2 -> 5 -> 4
# 初始化各个节点
n0 = ListNode(1)
n1 = ListNode(3)
n2 = ListNode(2)
n3 = ListNode(4)
n4 = ListNode(5)

# 构建节点之间的引用
n0.next = n1
n1.next = n2
n2.next = n3
n3.next = n4

print(f"链表：{n0}")


def insert(n0: ListNode, P: ListNode):
    """在链表的节点n0 之后插入节点 P"""
    n1 = n0.next
    P.next = n1
    n0.next = P


testN0 = n0
P = ListNode(0)

insert(testN0, P)
print("testN0:", testN0.next.val, P.next.val)

point = testN0
while point:
    print("遍历testN0:", point.val)
    point = point.next


# 删除链表节点
def remove(n0: ListNode):
    """删除链表的节点 n0 之后的首个节点"""
    if not n0.next:
        return
    # n0 -> P -> n1
    P = n0.next
    n1 = P.next
    n0.next = n1


testN0 = n0
remove(testN0)

po = testN0
while po:
    print("删除节点后遍历:", po.val)
    po = po.next


# 访问链表节点
def access(head: ListNode, index: int) -> ListNode | None:
    """访问链表中索引为 index 的节点"""
    for _ in range(index):
        if not head:
            return None
        head = head.next
    return head


index = 3
testN00 = testN0
indexNode = access(testN00, index)
print(f"索引为{index}的节点值为:", indexNode.val)


# 查找结点
def find(head: ListNode, target: int) -> int:
    """在链表中查找值为 target 的首个节点"""
    index = 0
    while head:
        if head.val == target:
            return index
        head = head.next
        index += 1
    return -1


target = 5
testNode = testN0
findIndex = find(testNode, target)
print(f"查找的节点索引为{findIndex}")
