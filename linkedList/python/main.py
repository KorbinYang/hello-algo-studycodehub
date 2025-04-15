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


class DoubleListNode:
    """双向链表节点类"""

    def __init__(self, val: int):
        self.val: int = val  # 节点值
        self.next: DoubleListNode | None = None  # 指向后续节点的引用
        self.prev: DoubleListNode | None = None  # 指向前驱节点的引用


dbListNode = DoubleListNode(100)
print(f"双向链表:{dbListNode.val, dbListNode.next, dbListNode.prev}")

# 在python中, Python 内置的 list 是最常用的动态数组类型，可以存储任意类型的元素。
# 列表常用操作
# 初始化列表
# 无初始值
nums1: list[int] = []
# 有初始值
nums2: list[int] = [1, 3, 2, 5, 4]

# 访问元素
num: int = nums2[1]
# 更新元素
nums2[1] = 0
print(f"列表操作:", num, nums2)


# 插入和删除元素
# 清空列表
nums2.clear()
print("clear():", nums2)

# 在尾部添加元素
nums2.append(1)
nums2.append(3)
nums2.append(2)
nums2.append(5)
nums2.append(4)
print(f"在尾部添加元素:", nums2)

# 在中间插入元素
nums2.insert(3, 6)  # 在索引3处插入数字6
print(f"在索引3处插入数字6:", nums2)

# 删除元素
nums2.pop(3)
print("删除索引3处的元素:", nums2)


# 遍历列表
# 通过索引遍历列表
count = 0
for i in range(len(nums2)):
    count += nums2[i]

print("通过索引遍历列表:", count)

# 直接遍历列表
count = 0
for num in nums2:
    count += num
print("直接遍历列表:", count)

# 拼接列表
# 拼接两个列表
nums1: list[int] = [6, 7, 8, 10, 9]
nums2 += nums1
print("拼接两个列表:", nums2)

# 排序列表
nums2.sort()
print("排序列表:", nums2)
