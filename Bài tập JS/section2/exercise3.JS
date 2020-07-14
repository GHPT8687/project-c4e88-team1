x = Number(prompt("Nhập số x"));

let y1 = 4 * (x * x + 10 * x * Math.sqrt(x) + 3 * x + 1);

// tử
let tu = Math.sin(Math.PI * x**2) + Math.sqrt(x**2 + 1);
// mẫu
let mau = Math.pow(Math.E, 2*x) + Math.cos(Math.PI / 4 * x);
let y2 = tu / mau;

console.log(`y1 = ${y1}`);
console.log(`y2 = ${y2}`);

// const pi = Math.PI;  để đỡ phải nhập Math.PI nhiều lần
// Có thể cả const x2 = x**2;