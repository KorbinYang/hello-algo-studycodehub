# [时间复杂度(time_complexity)](./time_complexity.md)

## 对数阶(O(log n))：不太理解，留着

## 线性对数阶(nlogn): 也不理解，留着

# 附录：

## 一句话拓展知识点：

### [python](./python/main.py)

-   在 python 中，下划线 \_ 用作变量名时，表示一个**临时变量**或**无意义的变量**。
-   在 Python 中，**list** 是一种内置的数据结构，用于存储有序的、可变的元素集合。
-   在 python 中，**//**是一种除法运算符。表示“_地板除_”,即返回两个数相除后的整数部分（向下取整）。
    -   结果是整数类型（如果两个数都是整数）。
    -   如果操作数中有一个是浮点数，则结果是浮点数。
    -   向下取整。
-   **shuffle**是 Python 标准库 random 模块中的一个函数，用于随机打乱列表中的元素顺序。
    > shuffle 函数会对给定的列表进行原地（in-place）随机排序，即直接修改原列表，而不返回新的列表。

### [js](./js/main.js)

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
