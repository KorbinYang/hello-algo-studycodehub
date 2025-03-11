# 1到n求和
def for_loop(n: int) -> int:
    res = 0
    for i in range(1, n + 1):
        res += i
    return res


n = 5
sum = for_loop(n)
print(f"1到{n}的和为：{sum}")


# while 循环实现1到n求和
def while_loop(n: int) -> int:
    # while 循环
    res = 0
    i = 1  # 初始化条件变量
    # 循环求和1,2,...,n-1,n
    while i <= n:
        res += i
        i += 1
    return res


m = 5
sum1 = while_loop(m)
print(f"1到{m}的和为：{sum1}")


# while 循环实现1到n求和, i 每轮进行两次更新
def while_loop_ii(n: int) -> int:
    res = 0
    i = 1
    # 循环求和1,4,10,...
    while i <= n:
        res += i
        # 更新变量条件
        i += 1
        i *= 2
    return res


x = 30
sum2 = while_loop_ii(x)
print(f"1到{x}的和为：{sum2}")
