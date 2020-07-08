x = Number(prompt("Nhập số có 3 chữ số"));

let so1 = parseInt(x / 100); // chữ số hàng trăm
le = x % 100; // số dư
let so2 = parseInt(le / 10); // chữ số hàng chục
let so3 = le % 10; // chữ số hàng đơn vị

let sum = so1 + so2 + so3;
console.log(`Tổng các chữ số của số ${x} là ${sum}`);