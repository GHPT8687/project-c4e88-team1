// ex8
let n8 = parseInt(prompt("Nhập 1 số"));
let sum8 = 0;
for (let i8 = 1; i8 <= n8; i8++) {
    sum8 += 1/i8; 
}
console.log(`Tổng nghịch đảo của các số từ 1 đến ${n8} là ${sum8}`);

// ex9
let n9 = parseInt(prompt("Nhập 1 số"));
let sum9 = 0;
for (let i9 = 1; i9 <= n9; i9++) {
    sum9 += 1/(i9 * (i9 + 1));
}
console.log(`Kết quả: ${sum9}`);