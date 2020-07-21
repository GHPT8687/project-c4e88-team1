// ex5
let n5 = Number(prompt("Nhập 1 số"));
let sum5 = 0;
for (let i5 = 1; i5 <= n5; i5++) {
    sum5 += i5;
}
console.log(`Tổng các số từ 1 đến ${n5} là ${sum5}`);

// ex6
let n6 = Number(prompt("Nhập 1 số"));
let sum6 = 0;
for (let i6 = 1; i6 <= 2*n6 + 1; i6++) {
    if (i6 % 2 === 1) {
        sum6 += i6;
    }
}
console.log(`Tổng các số lẻ từ 1 đến ${2*n6 + 1} là ${sum6}`);

// ex7
let n7 = Number(prompt("Nhập 1 số"));
let sum7 = 0;
for (let i7 = 1; i7 <= 2*n7; i7++) {
    if (i7 % 2 === 0) {
        sum7 += i7;
    }
}
console.log(`Tổng các số chẵn từ 2 đến ${2*n7} là ${sum7}`);