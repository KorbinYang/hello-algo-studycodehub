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
for (const [key, value] of hmap.entries()) {
    console.log(key, '->', value)
}
// 使用 forEach() 直接遍历
hmap.forEach((value, key) => {
    console.log(key, '-->', value)
})
// 转化为数组后遍历
const hmapArr = Array.from(hmap)
hmapArr.forEach(([key, value]) => {
    console.log(key, '--->', value)
})
;[...hmap].forEach(([key, value]) => {
    console.log(key, '---->', value)
})

// 单独遍历键 key
for (const key of hmap.keys()) {
    console.log(key)
}
// 单独遍历值 value
for (const val of hmap.values()) {
    console.log(val)
}

/**
 * 使用数组实现一个简单的哈希表（key -> 哈希函数 -> 桶 -> value）
 */
class Pair {
    key: number
    val: string

    constructor(key: number, val: string) {
        this.key = key
        this.val = val
    }
}

class ArrayHashMap {
    private _buckets: Pair[] | undefined[] = new Array(100)

    constructor() {}

    private hash_func(key: number) {
        const index = key % 100
        return index
    }

    get(key: number): string | undefined {
        const index = this.hash_func(key)
        const pair = this._buckets[index]
        if (pair) {
            return pair.val
        }
    }

    put(key: number, val: string) {
        const pair = new Pair(key, val)
        const index = this.hash_func(key)
        this._buckets[index] = pair
    }

    remove(key: number) {
        const index = this.hash_func(key)
        this._buckets[index] = undefined
    }

    entry_set() {
        const res: Pair[] = []
        this._buckets.forEach((pair) => {
            if (pair) {
                res.push(pair)
            }
        })
        return res
    }

    key_set() {
        const res: number[] = []
        this._buckets.forEach((pair) => {
            if (pair) {
                res.push(pair.key)
            }
        })

        return res
    }

    value_set() {
        const res: string[] = []
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
const arrHashMap = new ArrayHashMap()
arrHashMap.print()

// 添加操作
// 在哈希表中添加键值对(key, value)
arrHashMap.put(111, '一一')
arrHashMap.put(222, '二二')
arrHashMap.put(333, '三三')
arrHashMap.print()

// 查询操作
const namestring = arrHashMap.get(333)
console.log('namestring', namestring)

// 删除操作
// 在哈希表中删除键值对(key, value)
arrHashMap.remove(222)
arrHashMap.print()

// 遍历哈希表
// 遍历键值对
arrHashMap.entry_set().forEach((pair) => {
    console.log(pair.key, '-->', pair.val)
})

// 单独遍历键 key
arrHashMap.key_set().forEach((key) => {
    console.log(key)
})

// 单独遍历值 value
arrHashMap.value_set().forEach((val) => {
    console.log(val)
})
