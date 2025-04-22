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

# 初始化栈
# python 没有内置的栈类，可以把 list 当作栈来使用
stack: list[int] = []

# 元素入栈
stack.append(1)
stack.append(3)
stack.append(2)
stack.append(5)
stack.append(4)
print("元素入栈:", stack)

# 访问栈顶元素
peek: int = stack[-1]
print("访问栈顶元素:", stack, peek)

# 元素出栈
pop: int = stack.pop()
print("元素出栈:", stack, pop)

# 获取栈的长度
size: int = len(stack)
print("获取栈的长度:", stack, size)

# 判断是否为空
is_empty: bool = len(stack) == 0
print("判断是否为空:", stack, is_empty)


# 栈的实现
# 基于链表的实现
class LinkedListStack:
    """基于链表实现的栈"""

    def __init__(self):
        """构造方法"""
        self._peek: ListNode | None = None
        self._size: int = 0

    def size(self) -> int:
        """获取栈的长度"""
        return self._size

    def is_empty(self) -> bool:
        """判断栈是否为空"""
        return self._size == 0

    def push(self, val: int):
        """入栈"""
        node = ListNode(val)
        node.next = self._peek
        self._peek = node
        self._size += 1

    def pop(self) -> int:
        """出栈"""
        num = self.peek()
        self._peek = self._peek.next
        self._size -= 1
        return num

    def peek(self) -> int:
        """访问栈顶元素"""
        if self.is_empty():
            raise IndexError("栈为空")
        return self._peek.val

    def to_list(self) -> list[int]:
        """转化为列表用于打印"""
        arr = []
        node = self._peek
        while node:
            arr.append(node.val)
            node = node.next
        arr.reverse()
        return arr


# 实例化 栈
myStack = LinkedListStack()
print("myStack实例化:", myStack.to_list())

# 入栈
myStack.push(1)
myStack.push(3)
myStack.push(2)
myStack.push(5)
myStack.push(4)
print("myStack入栈:", myStack.to_list())

# 栈顶元素访问
peek = myStack.peek()
print("myStack栈顶元素访问:", myStack.to_list(), peek)

# 出栈
num = myStack.pop()
print("myStack出栈:", myStack.to_list(), num)


# 基于数组实现的栈
class ArrayStack:
    """基于数组实现的栈"""

    def __init__(self):
        """构造方法"""
        self._stack: list[int] = []
        self._size: int = 0

    def size(self) -> int:
        """获取栈的长度"""
        return len(self._stack)

    def is_empty(self) -> bool:
        """判断栈是否为空"""
        return self.size() == 0

    def push(self, item: int):
        self._stack.append(item)

    def pop(self) -> int:
        if self.is_empty():
            raise IndexError("栈为空")
        return self._stack.pop()

    def peek(self) -> int:
        if self.is_empty():
            raise IndexError("栈为空")
        return self._stack[-1]

    def to_list(self) -> list[int]:
        return self._stack


# 实例化 栈
myArrayStack = ArrayStack()
print("myArrayStack实例化:", myArrayStack.to_list())

# 入栈
myArrayStack.push(1)
myArrayStack.push(3)
myArrayStack.push(2)
myArrayStack.push(5)
myArrayStack.push(4)
print("myArrayStack入栈:", myArrayStack.to_list())

# 栈顶元素访问
peek = myArrayStack.peek()
print("myArrayStack栈顶元素访问:", myArrayStack.to_list(), peek)

# 出栈
num = myArrayStack.pop()
print("myArrayStack出栈:", myArrayStack.to_list(), num)

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
