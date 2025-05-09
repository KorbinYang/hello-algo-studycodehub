# 哈希表常用操作
# 初始化哈希表
hmap: dict = {}

# 添加操作
# 在哈希表中添加键值对(key, value)
hmap[12836] = "小哈"
hmap[15937] = "小啰"
hmap[16750] = "小算"
hmap[13276] = "小法"
hmap[10583] = "小鸭"

# 查询操作
name: str = hmap[15937]
print("name", name)

# 删除操作
# 在哈希表中删除键值对(key, value)
hmap.pop(10583)
print("hmap", hmap)

# 遍历哈希表
# 遍历键值对
for key, value in hmap.items():
    print(key, "->", value)
# 单独遍历键 key
for key in hmap.keys():
    print(key)
# 单独遍历值 value
for value in hmap.values():
    print(value)


# 使用数组实现一个简单的哈希表（key -> 哈希函数 -> 桶 -> value）
class Pair:
    """键值对"""

    def __init__(self, key: int, val: str):
        self.key = key
        self.val = val


class ArrayHashMap:
    """基于数组实现的哈希表"""

    def __init__(self):
        """构造方法"""
        # 初始化数组，包含 100 个桶
        self._buckets: list[Pair | None] = [None] * 100

    def hash_func(self, key: int) -> int:
        """哈希函数"""
        index = key % 100
        return index

    def get(self, key: int) -> str:
        """查询操作"""
        index: int = self.hash_func(key)
        pair: Pair = self._buckets[index]
        if pair is None:
            return None
        return pair.val

    def put(self, key: int, val: str):
        """添加操作"""
        pair = Pair(key, val)
        index: int = self.hash_func(key)
        self._buckets[index] = pair

    def remove(self, key: int):
        """删除操作"""
        index: int = self.hash_func(key)
        # 置为 None, 代表删除
        self._buckets[index] = None

    def entry_set(self) -> list[Pair]:
        """获取所有键值对"""
        result: list[Pair] = []
        for pair in self._buckets:
            if pair is not None:
                result.append(pair)
        return result

    def key_set(self) -> list[int]:
        """获取所有键"""
        result = []
        for pair in self._buckets:
            if pair is not None:
                result.append(pair.key)
        return result

    def value_set(self) -> list[str]:
        """获取所有值"""
        result = []
        for pair in self._buckets:
            if pair is not None:
                result.append(pair.val)
        return result

    def print(self):
        """打印哈希表"""
        for pair in self._buckets:
            if pair is not None:
                print(pair.key, "->", pair.val)


# 初始自定义化哈希表
arrHmap = ArrayHashMap()
arrHmap.print()

# 添加操作
# 在哈希表中添加键值对(key, value)
arrHmap.put(111, "一一")
arrHmap.put(222, "二二")
arrHmap.put(333, "三三")
arrHmap.print()

# 查询操作
nameStr = arrHmap.get(333)
print("namestr", nameStr)

# 删除操作
# 在哈希表中删除键值对(key, value)
arrHmap.remove(222)
arrHmap.print()

# 遍历哈希表
# 遍历键值对
for bucket in arrHmap.entry_set():
    print("遍历键值对:", bucket.key, "->", bucket.val)

# 单独遍历键 key
for key in arrHmap.key_set():
    print("key:", key)

# 单独遍历值 value
for val in arrHmap.value_set():
    print("val:", val)
