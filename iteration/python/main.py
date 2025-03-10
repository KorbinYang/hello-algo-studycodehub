# 1到n求和
def for_loop(n: int) -> int:
    res = 0
    for i in range(1, n + 1):
        res += i
    return res


n = 5
sum = for_loop(n)
print(f"1到{n}的和为：{sum}")
