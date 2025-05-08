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
