// 哈希表常用操作
// 初始化哈希表
const hmap = new Map()

// 添加操作
// 在哈希表中添加键值对(key, value)
hmap.set(12836, '小哈')
hmap.set(15937, '小啰')
hmap.set(16750, '小算')
hmap.set(13276, '小法')
hmap.set(10583, '小鸭')

// 查询操作
const namestr = hmap.get(15937)
console.log('namestr', namestr)

// 删除操作
// 在哈希表中删除键值对(key, value)
hmap.delete(10583)
console.log('hmap', hmap)

// 遍历哈希表
// 遍历键值对
// 使用 entries()
const keyValue = hmap.entries()
for (const [key, val] of keyValue) {
    console.log(key, '->', val)
}
// 使用forEach()直接遍历map
hmap.forEach((value, key) => {
    console.log(key, '-->', value)
})
// 转换为数组后遍历
const hmapArr = Array.from(hmap)
hmapArr.forEach(([key, value]) => {
    console.log(key, '--->', value)
})
;[...hmapArr].forEach(([key, value]) => {
    console.log(key, '---->', value)
})

// 单独遍历键 key
const keys = hmap.keys()
for (const key of keys) {
    console.log(key)
}

// 单独遍历值 value
const values = hmap.values()
for (const val of values) {
    console.log(val)
}

/**
 * 使用数组实现一个简单的哈希表（key -> 哈希函数 -> 桶 -> value）
 */
class Pair {
    constructor(key, val) {
        this.key = key
        this.val = val
    }
}

class ArrayHashMap {
    constructor() {
        this._buckets = new Array(100)
    }

    hash_func(key) {
        const index = key % 100
        return index
    }

    get(key) {
        const pair = this._buckets[this.hash_func(key)]
        if (pair) {
            return pair.val
        }
    }

    put(key, val) {
        const pair = new Pair(key, val)
        this._buckets[this.hash_func(key)] = pair
    }

    remove(key) {
        this._buckets[this.hash_func(key)] = undefined
    }

    entry_set() {
        const res = []

        this._buckets.forEach((pair) => {
            if (pair) {
                res.push(pair)
            }
        })

        return res
    }

    key_set() {
        const res = []
        this._buckets.forEach((pair) => {
            if (pair) {
                res.push(pair.key)
            }
        })

        return res
    }

    value_set() {
        const res = []
        this._buckets.forEach((pair) => {
            if (pair) {
                res.push(pair.val)
            }
        })
        return res
    }

    print() {
        this._buckets.forEach((pair) => {
            if (pair) {
                console.log(pair.key, '->', pair.val)
            }
        })
    }
}

// 初始自定义化哈希表
const arrHamp = new ArrayHashMap()
arrHamp.print()

// 添加操作
// 在哈希表中添加键值对(key, value)
arrHamp.put(111, '一一')
arrHamp.put(222, '二二')
arrHamp.put(333, '三三')
arrHamp.print()

// 查询操作
const namestring = arrHamp.get(333)
console.log('namestring', namestring)

// 删除操作
// 在哈希表中删除键值对(key, value)
arrHamp.remove(222)
arrHamp.print()

// 遍历哈希表
// 遍历键值对
arrHamp.entry_set().forEach((pair) => {
    console.log(pair.key, '-->', pair.val)
})

// 单独遍历键 key
arrHamp.key_set().forEach((key) => {
    console.log(key)
})

// 单独遍历值 value
arrHamp.value_set().forEach((val) => {
    console.log(val)
})
