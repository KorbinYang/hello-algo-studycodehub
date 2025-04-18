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
