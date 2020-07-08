money = Number(prompt("Nhập số tiền"));

let dong100 = parseInt(money / 100000);
du1 = money % 100000; // dư lần 1
let dong50 = parseInt(du1 / 50000);
du2 = du1 % 50000; // dư lần 2
let dong20 = parseInt(du2 / 20000);
du3 = du2 % 20000; // dư lần 3
let dong10 = du3 / 10000;

console.log(`${money} đổi được ${dong100} đồng 100k, ${dong50} đồng 50k, ${dong20} đồng 20k và ${dong10} đồng 10k`);