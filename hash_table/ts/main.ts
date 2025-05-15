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

/**
 * 链式地址哈希表的简单实现
 */
class HashMapChaining {
    private _buckets: Array<Array<Pair | undefined>>
    public _capacity: number = 4
    private _size: number = 0
    private _extend_ratio = 2
    private _load_thres = 2 / 3

    constructor() {
        this._buckets = new Array(this._capacity).fill(0).map(() => [])
    }

    private hash_func(key: number): number {
        return key % this._capacity
    }

    public load_factor(): number {
        return this._size / this._capacity
    }

    private extend(): void {
        // 暂存原 buckets
        const buckets = this._buckets

        // 重新初始化 this._buckets
        this._capacity *= this._extend_ratio
        this._buckets = new Array(this._capacity).fill(0).map(() => [])
        this._size = 0

        // 将原buckets元素添加至扩容后的
        buckets.forEach((bucket) => {
            bucket.forEach((pair) => {
                this.put(pair!.key, pair!.val)
            })
        })
    }

    put(key: number, val: string): void {
        // 扩容
        if (this.load_factor() > this._load_thres) {
            this.extend()
        }

        // 哈希寻找桶的索引
        const index = this.hash_func(key)
        // 通过索引找到桶(桶一定存在，已初始化)
        const bucket = this._buckets[index]

        // 遍历桶查找对应的键值对
        for (const pair of bucket) {
            // 找到对应的键值对，更新键值对并返回
            if (pair?.key === key) {
                pair.val = val
                return
            }
        }

        // 否则新增键值对至桶中
        const pair = new Pair(key, val)
        bucket.push(pair)
        this._size += 1
    }

    remove(key: number): void {
        const index = this.hash_func(key)
        const bucket = this._buckets[index]
        console.log(bucket)

        for (const pair of bucket) {
            if (pair?.key === key) {
                const paitIndex = bucket.findIndex((pair) => pair?.key === key)
                bucket.splice(paitIndex, 1)
                return
            }
        }

        throw new Error('键值对不存在')
    }

    get(key: number): string {
        const index = this.hash_func(key)
        const bucket = this._buckets[index]

        for (const pair of bucket) {
            if (pair?.key === key) {
                return pair.val
            }
        }

        throw new Error('键值对不存在')
    }

    print() {
        this._buckets.forEach((bucket) => {
            const res: string[] = []
            bucket.forEach((pair) => {
                res.push(pair!.key + '->' + pair!.val)
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
hamp_cha.print()
console.log('负载因子:', hamp_cha.load_factor())
console.log('容量：', hamp_cha._capacity)
// 增-扩容
hamp_cha.put(444, 'ddd')
hamp_cha.put(555, 'eee')
hamp_cha.print()
console.log('负载因子:', hamp_cha.load_factor())
console.log('容量：', hamp_cha._capacity)

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
