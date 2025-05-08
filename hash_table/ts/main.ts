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
