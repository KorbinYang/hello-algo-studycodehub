import sys
from pathlib import Path
from collections import deque

# 获取当前文件的父目录的父目录的父目录（项目根目录）
project_root = Path(__file__).parent.parent.parent
sys.path.append(str(project_root))


try:
    from linkedList.python.main import ListNode, DoubleListNode
except ImportError:
    print("无法导入 ListNode，请检查模块路径是否正确。")

print("ListNode类:", ListNode)

# 在 python 中可以直接使用现成的队列类
from collections import deque

# 在 python 中，我们一般将双向队列类 deque 当作队列使用
# 虽然 queue.Queue() 是纯正的队列类，但不太好用，因此不推荐
que: deque[int] = deque()

# 元素入队
que.append(1)
que.append(3)
que.append(2)
que.append(5)
que.append(4)

# 访问队首元素
front: int = que[0]

# 元素出队
pop: int = que.popleft()

# 获取队列的长度
size: int = len(que)

# 判断队列是否为空
is_empty: bool = len(que) == 0


# 基于链表实现的队列
class LinkedListQueue:
    """基于链表实现的队列"""

    def __init__(self):
        """构造方法"""
        self._front: ListNode | None = None  # 头节点 front
        self._rear: ListNode | None = None  # 尾节点 rear
        self._size: int = 0

    def size(self) -> int:
        """获取队列的长度"""
        return self._size

    def is_empty(self) -> bool:
        """判断队列是否为空"""
        return self.size() == 0

    def push(self, num: int):
        """入队"""
        # 在尾节点后添加 num
        node = ListNode(num)
        # 如果队列为空，则令头、尾节点都指向该节点
        if self.is_empty():
            self._front = node
            self._rear = node
        else:
            self._rear.next = node
            self._rear = node
        self._size += 1

    def pop(self) -> int:
        """出队"""
        num = self.peek()
        # 删除头节点
        self._front = self._front.next
        self._size -= 1
        return num

    def peek(self) -> int:
        """访问队首元素"""
        if self.is_empty():
            raise IndexError("队列为空")
        return self._front.val

    def to_list(self) -> list[int]:
        """转化为列表用于打印"""
        queue = []
        temp = self._front
        while temp:
            queue.append(temp.val)
            temp = temp.next
        return queue


# 实例化队列
myLinkedListQueue = LinkedListQueue()
print("myLinkedListQueue:", myLinkedListQueue.size())
print("myLinkedListQueue:", myLinkedListQueue.is_empty())

# 入队
myLinkedListQueue.push(1)
myLinkedListQueue.push(3)
myLinkedListQueue.push(2)
myLinkedListQueue.push(5)
myLinkedListQueue.push(4)
print("myLinkedListQueue 入队:", myLinkedListQueue.to_list())

# 出队
frontNum = myLinkedListQueue.pop()
print("myLinkedListQueue 出队:", myLinkedListQueue.to_list(), frontNum)

# 访问队首元素
peekNum = myLinkedListQueue.peek()
print("myLinkedListQueue 访问队首元素:", myLinkedListQueue.to_list(), peekNum)


# 基于环形数组实现的队列
class ArrayQueue:
    """基于环形数组实现的队列"""

    def __init__(self, size: int):
        """构造方法"""
        self._nums: list[int] = [0] * size  # 用于存储队列元素的数组
        self._front: int = 0  # 队首指针，指向队首元素
        self._size: int = 0  # 队列长度

    def capacity(self) -> int:
        """获取队列的容量"""
        return len(self._nums)

    def size(self) -> int:
        """获取队列的长度"""
        return self._size

    def is_empty(self) -> bool:
        """判断队列是否为空"""
        return self.size() == 0

    def push(self, num: int):
        """入队"""
        if self._size == self.capacity():
            raise IndexError("队列已满")
        # 计算队尾指针，指向队尾索引 + 1
        # 通过取余操作实现 rear 越过数组尾部后回到头部
        rear: int = (self._front + self._size) % self.capacity()
        # 将 num 添加至队尾
        self._nums[rear] = num
        self._size += 1

    def peek(self) -> int:
        """访问队首元素"""
        if self.is_empty():
            raise IndexError("队列为空")
        return self._nums[self._front]

    def pop(self) -> int:
        """出队"""
        num: int = self.peek()
        # 队首指针向后移动一位，若越过尾部，则返回数组头部
        self._front = (self._front + 1) % self.capacity()
        self._size -= 1
        return num

    def to_list(self) -> list[int]:
        """返回列表用于打印"""
        res = [0] * self.size()
        j: int = self._front
        for i in range(self.size()):
            res[i] = self._nums[(j % self.capacity())]
            j += 1
        return res


# 队列初始化
myArrayQueue = ArrayQueue(5)
# 容量
print("myArrayQueue 容量:", myArrayQueue.capacity())
# 长度
print("myArrayQueue 长度:", myArrayQueue.size())
# 判断队列是否为空
print("myArrayQueue 判断队列是否为空:", myArrayQueue.is_empty())
# 入队
myArrayQueue.push(1)
myArrayQueue.push(3)
myArrayQueue.push(2)
myArrayQueue.push(5)
myArrayQueue.push(4)
print("myArrayQueue 入队:", myArrayQueue.to_list())
# myArrayQueue.push(100)  # 队列已满
# 出队
item = myArrayQueue.pop()
print("myArrayQueue 出队:", myArrayQueue.to_list(), item)


# python 内置双向队列类，可直接使用
# 初始化双向队列
myDeque: deque[int] = deque()
print("myDeque 初始化双向队列:", myDeque)

# 元素入队
myDeque.append(2)  # 添加至队尾
myDeque.append(5)
myDeque.append(4)
myDeque.appendleft(3)  # 添加至队首
myDeque.appendleft(1)
print("myDeque 元素入队:", myDeque)

# 访问元素
front: int = myDeque[0]  # 队首元素
rear: int = myDeque[-1]  # 队尾元素
print("myDeque 访问元素:", myDeque, front, rear)

# 元素出队
pop_front: int = myDeque.popleft()  # 队首元素出队
pop_rear: int = myDeque.pop()  # 队尾元素出队
print("myDeque 元素出队:", myDeque, pop_front, pop_rear)

# 获取双向队列的长度
size: int = len(myDeque)
print("myDeque 获取双向队列的长度:", myDeque, size)

# 判断双向队列是否为空
is_empty: bool = len(myDeque) == 0
print("myDeque 获取双向队列的长度:", myDeque, is_empty)


class LinkedListDoubleEndedQueue:
    """基于双向链表实现的双向队列"""

    def __init__(self):
        """构造方法"""
        self._front: DoubleListNode | None = None  # 头节点
        self._rear: DoubleListNode | None = None  # 尾节点
        self._size: int = 0  # 双向队列的长度

    def size(self) -> int:
        """获取双向队列的长度"""
        return self._size

    def is_empty(self) -> bool:
        """判断双向队列是否为空"""
        return self._size == 0

    def push(self, num: int, is_front: bool):
        """入队操作"""
        node = DoubleListNode(num)
        # 若链表为空，则令front 和 rear 都指向 node
        if self.is_empty():
            self._front = self._rear = node
        elif is_front:
            # 将 node 添加至链表头部
            self._front.prev = node
            node.next = self._front
            self._front = node  # 更新头节点
        else:
            # 将 node 添加至链表尾部
            self._rear.next = node
            node.prev = self._rear
            self._rear = node  # 更新尾节点
        self._size += 1  # 更新队列长度

    def push_first(self, num: int):
        """队首入队"""
        self.push(num, True)

    def push_last(self, num: int):
        """队尾入队"""
        self.push(num, False)

    def pop(self, is_front: bool) -> int:
        """出队操作"""
        if self.is_empty():
            raise IndexError("双向队列为空")
        # 队首出队操作
        if is_front:
            val: int = self._front.val  # 暂存头节点的值
            # 删除头节点
            fnext: DoubleListNode | None = self._front.next
            if fnext != None:
                fnext.prev = None
            self._front = fnext  # 更新头节点
        # 队尾出队操作
        else:
            val: int = self._rear.val  # 暂存尾节点的值
            # 删除尾节点
            rprev: DoubleListNode | None = self._rear.prev
            if rprev != None:
                rprev.next = None
            self._rear = rprev  # 更新尾节点
        self._size -= 1  # 更新队列长度
        return val

    def pop_first(self) -> int:
        """队首出队"""
        return self.pop(True)

    def pop_last(self) -> int:
        """队尾出队"""
        return self.pop(False)

    def peek_first(self) -> int:
        """访问队首元素"""
        if self.is_empty():
            raise IndexError("双向队列为空")
        return self._front.val

    def peek_last(self) -> int:
        """访问队尾元素"""
        if self.is_empty():
            raise IndexError("双向队列为空")
        return self._rear.val

    def to_list(self) -> list[int]:
        """返回数组用于打印"""
        node = self._front
        res = [0] * self.size()
        for i in range(self.size()):
            res[i] = node.val
            node = node.next
        return res


# 双向队列初始化
myDoubleEndedQueue = LinkedListDoubleEndedQueue()
print("myDoubleEndedQueue 双向队列初始化:", myDoubleEndedQueue.to_list())
# 双向队列长度
dqSize = myDoubleEndedQueue.size()
print("myDoubleEndedQueue 双向队列长度:", myDoubleEndedQueue.to_list(), dqSize)
# 双向队列是否为空
dqIsEmpty = myDoubleEndedQueue.is_empty()
print("myDoubleEndedQueue 双向队列长度:", myDoubleEndedQueue.to_list(), dqIsEmpty)
# 队首入队
myDoubleEndedQueue.push_first(2)
myDoubleEndedQueue.push_first(3)
myDoubleEndedQueue.push_first(1)
print("myDoubleEndedQueue 队首入队:", myDoubleEndedQueue.to_list())
# 队尾入队
myDoubleEndedQueue.push_last(5)
myDoubleEndedQueue.push_last(4)
print("myDoubleEndedQueue 队尾入队:", myDoubleEndedQueue.to_list())
# 队首出队
firstItem = myDoubleEndedQueue.pop_first()
print("myDoubleEndedQueue 队首出队:", myDoubleEndedQueue.to_list(), firstItem)
# 队尾出队
lastItem = myDoubleEndedQueue.pop_last()
print("myDoubleEndedQueue 队尾出队:", myDoubleEndedQueue.to_list(), lastItem)
# 访问队首元素
firstPeek = myDoubleEndedQueue.peek_first()
print("myDoubleEndedQueue 访问队首元素:", myDoubleEndedQueue.to_list(), firstPeek)
# 访问队尾元素
lastPeek = myDoubleEndedQueue.peek_last()
print("myDoubleEndedQueue 访问队尾元素:", myDoubleEndedQueue.to_list(), lastPeek)


# 基于数组实现双向队列的入队出队操作
class Array2Queue:
    def __init__(self, capacity: int):
        """构造方法"""
        self._nums: list[int] = [0] * capacity
        self._front: int = 0
        self._size: int = 0

    def capacity(self) -> int:
        """获取双向队列的容量"""
        return len(self._nums)

    def size(self) -> int:
        """获取双向队列的长度"""
        return self._size

    def is_empty(self) -> bool:
        """判断双向队列是否为空"""
        return self._size == 0

    def index(self, i: int) -> int:
        """计算环形数组索引"""
        # 通过取余操作实现数组首位相连
        # 当 i 越过数组尾部后，回到头部
        # 当 i 越过数组头部后，回到尾部
        return (i + self.capacity()) % self.capacity()

    def push_first(self, num: int):
        """队首入队"""
        if self._size == self.capacity():
            print("双向队列已满")
            return
        # 队首指针向左移动一位
        # 通过取余操作实现 front 越过数组头部后回到尾部
        self._front = self.index(self._front - 1)
        # 将 num 添加至队首
        self._nums[self._front] = num
        self._size += 1

    def push_last(self, num: int):
        """队尾入队"""
        if self._size == self.capacity():
            print("双向队列已满")
            return
        # 队尾向右移动一位
        # 通过取余操作使队尾超出容量后回到队首
        rear = self.index(self._front + self.size())
        # 将 num 添加至队尾
        self._nums[rear] = num
        self._size += 1

    def pop_first(self) -> int:
        """队首出队"""
        num = self.peek_first()
        # 队首指针向后移动一位
        self._front = self.index(self._front + 1)
        self._size -= 1
        return num

    def pop_last(self) -> int:
        """队尾出队"""
        num = self.peek_last()
        self._size -= 1
        return num

    def peek_first(self) -> int:
        """访问队首元素"""
        if self.is_empty():
            raise IndexError("双向队列为空")
        return self._nums[self._front]

    def peek_last(self) -> int:
        if self.is_empty():
            raise IndexError("双向队列为空")
        # 计算队尾元素索引
        last = self.index(self._front + self.size() - 1)
        return self._nums[last]

    def to_array(self) -> list[int]:
        """返回数组用于打印"""
        # 仅转换有效长度范围内的列表元素
        res = []
        for i in range(self.size()):
            res.append(self._nums[self.index(self._front + i)])
        return res


# 实例化双向队列
myArray2Queue = Array2Queue(10)
print(
    "myArray2Queue:",
    myArray2Queue.to_array(),
    myArray2Queue.capacity(),
    myArray2Queue.size(),
)
# 双向队列队首入队
myArray2Queue.push_first(2)
myArray2Queue.push_first(3)
myArray2Queue.push_first(1)
print("双向队列队首入队:", myArray2Queue.to_array())
# 双向队列队尾入队
myArray2Queue.push_last(5)
myArray2Queue.push_last(4)
print("双向队列队尾入队:", myArray2Queue.to_array())
# 双向队列队首出队
firstNum = myArray2Queue.pop_first()
print("双向队列队首出队:", firstNum, myArray2Queue.to_array())
# 双向队列队尾出队
lastNum = myArray2Queue.pop_last()
print("双向队列队尾出队:", myArray2Queue.to_array(), lastNum)
