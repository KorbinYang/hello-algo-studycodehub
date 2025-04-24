import sys
from pathlib import Path

# 获取当前文件的父目录的父目录的父目录（项目根目录）
project_root = Path(__file__).parent.parent.parent
sys.path.append(str(project_root))


try:
    from linkedList.python.main import ListNode
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
