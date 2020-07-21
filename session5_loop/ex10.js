let n = parseInt(prompt("Nhập 1 số"));
const f1 = 1;
const f2 = 1;
for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
}
console.log(f[n]);