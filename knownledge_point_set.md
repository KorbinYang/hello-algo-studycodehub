# [时间复杂度(time_complexity)](./time_complexity/time_complexity.md)

# [空间复杂度(space_complexity)](./space_complexity/space_complexity.md)

# [迭代（iteration）:](./iteration/iteration.md)

# [递归(recursion):](./recursion/recursion.md)

# [数组（array）:](./array/array.md)

# [链表（linked list）:](./linkedList/linkedList.md)

---

# 附录：

## 一句话拓展知识点：

### Python

-   **列表(list)**: Python 内置的 list 是最常用的**动态数组类型**，可以存储任意类型的元素。

-   在 python 中，下划线 \_ 用作变量名时，表示一个**临时变量**或**无意义的变量**。
-   在 Python 中，**list** 是一种内置的数据结构，用于存储有序的、可变的元素集合。
-   在 python 中，**//**是一种除法运算符。表示“_地板除_”,即返回两个数相除后的整数部分（向下取整）。
    -   结果是整数类型（如果两个数都是整数）。
    -   如果操作数中有一个是浮点数，则结果是浮点数。
    -   向下取整。
-   **shuffle**是 Python 标准库 random 模块中的一个函数，用于随机打乱列表中的元素顺序。

    > shuffle 函数会对给定的列表进行原地（in-place）随机排序，即直接修改原列表，而不返回新的列表。

-   在 Python 中，**dict** 是一种内置的数据结构，表示**字典（哈希表）**。
    -   定义：字典是一种可变的、无序的键值对集合。每个键（key）必须是唯一的，并且与一个值（value）相关联。
    -   创建字典：可以通过**大括号 {}** 或者 **dict() 函数**来创建字典。
    -   在 Python 3.9 及以上版本中，可以使用 **dict[key_type, value_type]** 来进行**类型提示**。在较早版本中需要从 typing 模块导入 Dict。
-   **str()** 是 Python 的内置函数，用于将对象转换为**字符串类型**。

-   **\_\_init\_\_** 是 Python 类中的一个特殊方法，称为 **构造函数** 或 **初始化方法**。当创建类的实例时 **\_\_init\_\_** 方法会被自动调用，用于初始化新创建的对象状态。
    -   参数：
        **self**: 表示当前实例对象，是 Python 类中方法的第一个隐式参数。
        **val**: int: 表示节点的值，类型为整数。
    -   功能：
        初始化 self.val 为传入的 val 参数值。
        初始化 self.next 为 None，表示当前节点的下一个节点默认为空。
-   python 中没有 do...while...循环，只有 while...循环

-   **def** 用于定义函数。
    python 定义一个函数的基本语法如下：

    -   **def** 关键字后跟着函数名。
    -   函数名后跟圆括号 **()**,括号内可以包含参数。
    -   冒号 **:** 结束函数定义的第一行。
    -   函数体需要缩进，通常用**四个空格**或**一个制表符**。

-   **range() 函数**用于生成一个不可变的整数序列，通常用于**for 循环**中循环指定的次数。
    -   **range(start, stop, step)** 函数可接收三个参数，**stop**必选,**start**与**step**可选，默认 start 为 0，step 为 1。
-   **f"..."** 表示这是一个 **f-string**。一种**格式化字符串字面值**。

    -   **f-string** 以 **f 或 F** 开头，后面跟着一个用引号括起来的字符串。
    -   在字符串中，可以使用**大括号 {}** 来嵌入变量或表达式，这些变量或表达式的值会在运行时被计算并替换到字符串中

-   **-> int** 函数注解（function annotation）的一部分，用于指示函数的返回类型。_可选。_

-   enumerate(): 在 Python 中，enumerate 是一个非常有用的**内置函数**，用于在遍历可迭代对象（如列表、元组等）时**同时获取元素的索引和值**。

### Javascript

-   在 JavaScript 中，**数组（Array）**是一种用于存储有序数据集合的**对象**，可以动态调整大小，并且可以包含任意类型的元素。

-   js 中随机打乱数组元素的常见方法：

    -   使用 sort()和 Math.random()。
        > Math.random() 生成一个 0 到 1 之间的随机数，减去 0.5 后，结果可能是正数、负数或零，这样 sort() 方法会根据这个随机值来重新排序数组。
    -   Fisher-Yates 洗牌算法(**效率高且结果均匀**)：

        > 它从数组的末尾开始，随机选择一个元素并与当前元素交换，直到遍历完整个数组。

        ```js
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1))
                ;[array[i], array[j]] = [array[j], array[i]]
            }
            return array
        }
        ```

    -   使用 lodash 库：
        lodash 是一个流行的 JavaScript 工具库，其中的 shuffle 方法可以轻松地打乱数组。

        ```js
        const _ = require('lodash')

        const array = [1, 2, 3, 4, 5]
        const shuffledArray = _.shuffle(array)

        console.log(shuffledArray)
        ```

-   Map 对象：
    -   正确的存储数据到 Map 中的方式是使用 **set(key, value)** 方法。
    -   **JSON.stringify()**不能直接序列化 Map 对象。
        > Map 对象是一个键值对集合,但它的结构无法通过 JSON.stringify() 直接序列化。JSON.stringify() 只会处理**对象的可枚举属性**，而 Map 的键值对**并不存储为对象的属性**，因此序列化结果为空对象 {}。
-   **Object.fromEntries()** 静态方法将**键值对列表**转换为一个**对象**。

-   ES 模块化可以解决顶级作用域使用同名函数的问题。
    > 如 mian.js 和 main.ts 中的 export default for_loop 函数。

### Typescript

-   Map 对象：

    -   正确的存储数据到 Map 中的方式是使用 **set(key, value)** 方法。

-   TypeScript 的静态类型检查并不依赖**运行时逻辑**。

    > 如下代码 res = stack.pop()代码会被 ts 静态类型检查检测并报错。

    ```ts
    let res = 0
    const stack: number[] = []
    while (stack.length > 0) {
        res += stack.pop()
    }
    ```

-   执行 ts 文件时注意要配置 **tsconfig.json**。
    -   可以用 **tsc --init** 生成 tsconfig.json 文件。

