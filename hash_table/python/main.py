import sys
from pathlib import Path
from collections import deque

# 获取当前文件的父目录的父目录的父目录（项目根目录）
project_root = Path(__file__).parent.parent.parent
sys.path.append(str(project_root))


try:
    from linkedList.python.main import ListNode
except ImportError:
    print("无法导入 ListNode，请检查模块路径是否正确。")

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


# 链式地址哈希表的简单实现
class HashMapChaining:
    """链式地址哈希表"""

    def __init__(self):
        """构造方法"""
        self._size = 0  # 键值对数量
        self._capacity = 4  # 哈希表容量
        self._load_thres = 2 / 3  # 触发扩容的负载因子阈值
        self._extend_ratio = 2  # 扩容倍数
        self._buckets = [
            [] for _ in range(self._capacity)
        ]  # 桶数量-使用列表（动态数组）代替链表

    def hash_func(self, key: int) -> int:
        """哈希函数"""
        return key % self._capacity

    def load_factor(self) -> float:
        """负载因子"""
        return self._size / self._capacity

    def get(self, key: int) -> str | None:
        """查询操作"""
        index = self.hash_func(key)
        bucket = self._buckets[index]
        # 遍历桶，若找到 key, 则返回对应 val
        for pair in bucket:
            if pair.key == key:
                return pair.val
        # 若未找到 key, 则返回 None
        return None

    def put(self, key: int, val: str):
        """添加操作"""
        # 当负载因子超过阈值时，执行扩容
        if self.load_factor() > self._load_thres:
            self.extend()

        index = self.hash_func(key)
        bucket = self._buckets[index]
        # 遍历桶，若遇到指定 key,则更新对应 val 并返回
        for pair in bucket:
            if pair.key == key:
                pair.val = val
                return

        # 若无该 key,则将键值对添加至尾部
        pair = Pair(key, val)
        bucket.append(pair)

        self._size += 1

    def remove(self, key: int):
        """删除操作"""
        index = self.hash_func(key)
        bucket = self._buckets[index]

        # 遍历桶，从中删除键值对
        for pair in bucket:
            if pair.key == key:
                bucket.remove(pair)
                self._size -= 1
                break

    def extend(self):
        """扩容哈希表"""
        # 暂存原哈希表
        buckets = self._buckets
        # 初始化扩容后的新哈希表
        self._capacity *= self._extend_ratio
        self._buckets = [[] for _ in range(self._capacity)]
        self._size = 0

        # 将键值对从原哈希表搬运至新哈希表
        for bucket in buckets:
            for pair in bucket:
                self.put(pair.key, pair.val)

    def print(self):
        """打印哈希表"""
        for bucket in self._buckets:
            res = []
            for pair in bucket:
                res.append(str(pair.key) + "->" + pair.val)
            print(res)


# 初始化链式地址哈希表
hmapcha = HashMapChaining()
hmapcha.print()

# 增
print("增:")
hmapcha.put(111, "aaa")
hmapcha.put(222, "bbb")
hmapcha.put(333, "ccc")
print("负载因子:", hmapcha.load_factor())
print("容量：", hmapcha._capacity)
# 增-扩容
print("增-扩容:")
hmapcha.put(444, "ddd")
hmapcha.put(555, "eee")
print("负载因子:", hmapcha.load_factor())
print("容量：", hmapcha._capacity)
hmapcha.print()

# 删
hmapcha.remove(555)
print("删:")
hmapcha.print()

# 查
print("查:")
value = hmapcha.get(333)
print(value)

# 改
print("改:")
hmapcha.put(444, "fff")
hmapcha.print()


# 包含懒删除的开放寻址（线性探测）哈希表的实现
class HashMapOpenAddresssing:
    """开放寻址哈希表"""

    def __init__(self):
        """构造方法"""
        self._size = 0  # 键值对数量
        self._capacity = 4  # 哈希表容量
        self._load_thres = 2 / 3  # 触发扩容的负载因子阈值
        self._extend_ratio = 2  # 扩容倍数
        self._buckets: list[Pair | None] = [None] * self._capacity  # 桶数量
        self._TOMBSTONE = Pair(-1, "-1")  # 删除标记

    def hash_func(self, key: int) -> int:
        """哈希函数"""
        return key % self._capacity

    def load_factor(self) -> float:
        """负载因子"""
        return self._size / self._capacity

    def find_bucket(self, key: int) -> int:
        """搜索 key 对应的桶索引"""
        index = self.hash_func(key)
        first_tombstone = -1
        # 线性探测，当遇到空桶时跳出
        while self._buckets[index] is not None:
            # 若遇到 key,返回对应的桶索引
            if self._buckets[index].key == key:
                # 若之前遇到了删除标记，则将键值对移动至该索引处
                if first_tombstone != -1:
                    self._buckets[first_tombstone] = self._buckets[index]
                    self._buckets[index] = self._TOMBSTONE
                    return first_tombstone
                return index  # 返回桶索引
            # 记录首个遇到的删除标记
            if first_tombstone == -1 and self._buckets[index] is self._TOMBSTONE:
                first_tombstone = index
            # 计算桶索引，越过尾部则返回头部
            index = (index + 1) % self._capacity
        # 若 key不存在，则返回添加点的索引
        return index if first_tombstone == -1 else first_tombstone

    def get(self, key: int) -> str:
        """查询操作"""
        # 搜索 key 对应的桶索引
        index = self.find_bucket(key)
        # 若找到键值对，则返回对应 val
        if self._buckets[index] not in [None, self._TOMBSTONE]:
            return self._buckets[index].val
        # 若键值对不存在，则返回 None
        return None

    def put(self, key: int, val: str):
        """添加操作"""
        # 当负载因子超过阈值时，执行扩容
        if self.load_factor() > self._load_thres:
            self.extend()
        # 搜索 key 对应的桶索引
        index = self.find_bucket(key)
        # 若找到键值对，则覆盖 val 并返回
        if self._buckets[index] not in [None, self._TOMBSTONE]:
            self._buckets[index].val = val
            return
        # 若键值对不存在，则添加该键值对
        self._buckets[index] = Pair(key, val)
        self._size += 1

    def remove(self, key: int):
        """删除操作"""
        # 搜索 key 对应的桶索引
        index = self.find_bucket(key)
        # 若找到键值对，则用删除标记覆盖它
        if self._buckets[index] not in [None, self._TOMBSTONE]:
            self._buckets[index] = self._TOMBSTONE
            self._size -= 1

    def extend(self):
        """扩容哈希表"""
        # 暂存哈希表
        buckets_tmp = self._buckets
        # 初始化扩容后的哈希表
        self._capacity *= self._extend_ratio
        self._buckets = [None] * self._capacity
        self._size = 0
        # 将键值对从原哈希表搬运至新哈希表
        for pair in buckets_tmp:
            if pair not in [None, self._TOMBSTONE]:
                self.put(pair.key, pair.val)

    def print(self):
        """打印哈希表"""
        for pair in self._buckets:
            if pair is None:
                print("None")
            elif pair is self._TOMBSTONE:
                print("TOMBSTONE")
            else:
                print(pair.key, "->", pair.val)


# 实例化开放寻址(线性探测)哈希表
hmap_open = HashMapOpenAddresssing()
print("实例化哈希表:", hmap_open._capacity, hmap_open._size)
hmap_open.print()

# 增
hmap_open.put(111, "aaa")
hmap_open.put(222, "bbb")
hmap_open.put(333, "ccc")
print("增:", hmap_open._capacity, hmap_open._size)
hmap_open.print()
# 增-扩容
hmap_open.put(444, "ddd")
hmap_open.put(555, "eee")
print("增-扩容:", hmap_open._capacity, hmap_open._size)
hmap_open.print()

# 删
hmap_open.remove(555)
print("删:", hmap_open._capacity, hmap_open._size)
hmap_open.print()

# 查
val_open = hmap_open.get(333)
print("查:", hmap_open._capacity, hmap_open._size, val_open)
hmap_open.print()

# 改
hmap_open.put(444, "fff")
print("改:", hmap_open._capacity, hmap_open._size)
hmap_open.print()


# 哈希算法的设计
def add_hash(key: str) -> int:
    """加法哈希"""
    hash = 0
    modules = 1000000007
    for c in key:
        hash += ord(c)
    return hash % modules


def mul_hash(key: str) -> int:
    """乘法哈希"""
    hash = 0
    modules = 1000000007
    for c in key:
        hash = 31 * hash + ord(c)
    return hash % modules


def xor_hash(key: str) -> int:
    """异或哈希"""
    hash = 0
    modules = 1000000007
    for c in key:
        hash ^= ord(c)
    return hash % modules


def rot_hash(key: str) -> int:
    """旋转哈希"""
    hash = 0
    modules = 1000000007
    for c in key:
        hash = (hash << 4) ^ (hash >> 28) ^ ord(c)
    return hash % modules


# 加法哈希
hash_result = add_hash("hello")
print("加法哈希:", hash_result)

# 乘法哈希
hash_result1 = mul_hash("hello")
print("乘法哈希:", hash_result1)

# 异或哈希
hash_result2 = xor_hash("hello")
print("异或哈希:", hash_result2)

# 旋转哈希
hash_result3 = rot_hash("hello")
print("旋转哈希:", hash_result3)

# 调用编程语言内置函数计算各类数据类型的哈希值
num = 3
hash_num = hash(num)
print(hash_num)
# 整数的哈希值为 3

bol = True
hash_bol = hash(bol)
print(hash_bol)
# 布尔量 True 的哈希值为 1

dec = 3.14159
hash_dec = hash(dec)
print(hash_dec)
# 小数 3.14159 的哈希值为

str = "Hello 算法"
hash_str = hash(str)
print(hash_str)

tup = (12836, "小哈")
hash_tup = hash(tup)
print(hash_tup)

obj = ListNode(0)
hash_obj = hash(obj)
print(hash_obj)
