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
