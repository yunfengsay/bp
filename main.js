let BPNet = require('./BP')

let x = [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1]
    ] //输入样本
let d = [
        [0],
        [1],
        [1],
        [0]
    ] //理想输出
let bp = new BPNet(4, [2, 6, 1], undefined, undefined, 0.5, 5000, 0.0001)
bp.train(x, d)
let y = bp.forward([0, 1])
console.log(y[2][0])
let y2 = bp.forward([0, 0])
console.log(y2[2][0])
let y3 = bp.forward([1, 1])
console.log(y3[2][0])
let y4 = bp.forward([1, 0])
console.log(y4[2][0])