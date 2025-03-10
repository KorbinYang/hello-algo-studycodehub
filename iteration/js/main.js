// 1到n求和
function for_loop(n) {
    let res = 0

    for (let i = 1; i <= n; i++) {
        res += i
    }

    return res
}

const n = 5
const sum = for_loop(n)
console.log(`1到${n}的和为：${sum}`)

export default for_loop
