# 递归求和1到n,递增1
def recur(n: int) -> int:
    # 终止条件
    if n == 1:
        return 1
    # 递：递归调用
    res = recur(n - 1)
    # 归：返回结果
    return n + res


z = 5
sum3 = recur(z)
print(f"递归调用1到{z}的和为：{sum3}")


# 递归求和1到n,递增1（尾递归）
def tail_recur(n, res):
    # 终止条件
    if n == 0:
        return res
    # 尾递归调用
    return tail_recur(n - 1, res + n)


a = 5
sum4 = tail_recur(a, 0)
print(f"尾递归调用1到{a}的和为：{sum4}")


# 递归树
# 求斐波那契数列的第n个数字
def fib(n: int) -> int:
    res = 0
    # 终止条件
    if n == 1 or n == 2:
        return n - 1
    # 递归调用
    res = fib(n - 1) + fib(n - 2)
    # 返回结果
    return res


fibN = 5
fibNum = fib(fibN)
print(f"斐波那契数列第{fibN}个数为:{fibNum}")

# 使用显示的栈模拟递归调用栈的行为(1到n求和)


def for_loop_recur(n: int) -> int:
    # 使用一个显示的栈模拟系统调用栈
    stack = []
    res = 0
    # 递：递归调用
    for i in range(n, 0, -1):
        stack.append(i)
    # 归：返回结果
    while stack:
        # 通过出栈操作模拟归
        res += stack.pop()
    # res = 1+2+3+...+n
    return res


b = 5
sum5 = for_loop_recur(b)
print(f"迭代模拟递归调用1到{b}的和为：{sum5}")
