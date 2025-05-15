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

/**
 * 链式地址哈希表的简单实现
 */
class HashMapChaining {
    constructor() {
        this._capacity = 4
        this._size = 0
        this._buckets = new Array(this._capacity).fill(0).map(() => [])
        this._extend_ratio = 2
        this._load_thres = 2 / 3
    }

    hash_func(key) {
        return key % this._capacity
    }

    load_factor() {
        return this._size / this._capacity
    }

    extend() {
        // 暂存buckets
        const buckets = this._buckets

        // 初始化 this._buckets
        this._capacity *= this._extend_ratio
        this._buckets = new Array(this._capacity).fill(0).map(() => [])
        this._size = 0

        // 将原键值对添加至扩容后的哈希表
        buckets.forEach((bucket) => {
            bucket.forEach((pair) => {
                this.put(pair.key, pair.val)
            })
        })
    }
    put(key, val) {
        if (this.load_factor() > this._load_thres) {
            this.extend()
        }

        const index = this.hash_func(key)
        const bucket = this._buckets[index]

        for (const pair of bucket) {
            if (pair.key === key) {
                pair.val = val
                return
            }
        }

        const pair = new Pair(key, val)
        bucket.push(pair)
        this._size += 1
    }

    remove(key) {
        const index = this.hash_func(key)
        const bucket = this._buckets[index]

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1)
                break
            }
        }
    }

    get(key) {
        const index = this.hash_func(key)
        const bucket = this._buckets[index]

        for (const pair of bucket) {
            if (pair.key === key) {
                return pair.val
            }
        }

        return null
    }

    print() {
        this._buckets.forEach((bucket) => {
            const res = []
            bucket.forEach((pair) => {
                res.push(pair.key + '->' + pair.val)
            })
            console.log(res)
        })
    }
}

// 初始化链式地址哈希表
const hamp_cha = new HashMapChaining()
console.log('初始化链式地址哈希表:')
hamp_cha.print()

// 增
console.log('增：')
hamp_cha.put(111, 'aaa')
hamp_cha.put(222, 'bbb')
hamp_cha.put(333, 'ccc')
console.log('负载因子:', hamp_cha.load_factor())
console.log('容量：', hamp_cha._capacity)
hamp_cha.print()
// 增-扩容
hamp_cha.put(444, 'ddd')
hamp_cha.put(555, 'eee')
console.log('负载因子:', hamp_cha.load_factor())
console.log('容量：', hamp_cha._capacity)
hamp_cha.print()

// 删
hamp_cha.remove(555)
console.log('删:')
hamp_cha.print()

// 查
console.log('查:')
const value = hamp_cha.get(333)
console.log(value)

// 改
console.log('改')
hamp_cha.put(444, 'fff')
hamp_cha.print()
