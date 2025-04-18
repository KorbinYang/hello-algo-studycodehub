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
