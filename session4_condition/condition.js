// Nhập 3 số a, b, c và in ra 3 số theo thứ tự
let a = Number(prompt("Nhập a")); 
let b = Number(prompt("Nhập b"));

// if (a > b) {
//     console.log("a lớn hơn b");   
// }
// else if (a < b) {
//     console.log("a nhỏ hơn b");
// }
// else if (a == b) {
//     console.log("a bằng b");
// }

let c = Number(prompt("Nhập c"));
if (a > b && b > c) {
    console.log(a, b, c);
}
else if (a > b && b < c) {
    console.log(a, c, b);
}
else if (b > a && a > c) {
    console.log(b, a, c);
}
else if (b > a && a < c) {
   console.log(b, c, a);
}
