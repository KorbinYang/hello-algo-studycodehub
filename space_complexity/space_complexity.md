# [时间复杂度(space_complexity)](./space_complexity.md)

# 附录：

## 一句话拓展知识点：

### [python](./python/main.py)

-   在 Python 中，**dict** 是一种内置的数据结构，表示**字典（哈希表）**。
    -   定义：字典是一种可变的、无序的键值对集合。每个键（key）必须是唯一的，并且与一个值（value）相关联。
    -   创建字典：可以通过**大括号 {}** 或者 **dict() 函数**来创建字典。
    -   在 Python 3.9 及以上版本中，可以使用 **dict[key_type, value_type]** 来进行**类型提示**。在较早版本中需要从 typing 模块导入 Dict。
-   **str()** 是 Python 的内置函数，用于将对象转换为**字符串类型**。

### [js](./js/main.js)

-   Map 对象：
    -   正确的存储数据到 Map 中的方式是使用 **set(key, value)** 方法。
    -   **JSON.stringify()**不能直接序列化 Map 对象。
        > Map 对象是一个键值对集合,但它的结构无法通过 JSON.stringify() 直接序列化。JSON.stringify() 只会处理**对象的可枚举属性**，而 Map 的键值对**并不存储为对象的属性**，因此序列化结果为空对象 {}。
-   **Object.fromEntries()** 静态方法将**键值对列表**转换为一个**对象**。

### [ts](./ts/main.ts)

-   Map 对象：
    -   正确的存储数据到 Map 中的方式是使用 **set(key, value)** 方法。
