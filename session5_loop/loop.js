// for (let i = 0; i < 5; i++) {
//     console.log("Taylor Swift");
// }

// let n = Number(prompt("Nhập 1 số lớn hơn 8"));
// while (n <= 8) {
//     n = Number(prompt("Nhập lại 1 số lớn hơn 8"));
// }
// console.log(n);

// Nhập 1 chuỗi nhiều hơn 8 kí tự // ex13
// let password = prompt("Nhập mật khẩu lớn hơn 8 kí tự");
// while (password.length <= 8) {
//     password = prompt("Nhập lại mật khẩu lớn hơn 8 kí tự");
// }
// console.log(password);

// Yêu cầu nhập 2 số, số đầu dương, số 2 âm, in ra màn hình, nếu sai nhập lại cả 2
// let a = Number(prompt("Nhập 1 số dương"));
// let b = Number(prompt("Nhập 1 số âm"));
// while (a <= 0 || b >= 0) {
//     a = Number(prompt("Nhập lại 1 số dương"));
//     b = Number(prompt("Nhập lại 1 số âm"));
// }
// console.log(a, b);

// Nhập 1 mật khẩu dài hơn 8 kí tự và chứa @
// let password = prompt("Nhập mật khẩu");
// while (password <= 8 || password.includes("@") == false) {
//     password = prompt("Nhập lại mật khẩu");
// }
// console.log(password);

// Cho ngưới dùng nhập user và pass. Nếu user là 'admin' và pass là '123456' thì alert: Chào mừng admin
// sai: báo tk hoặc mk sai và cho nhập lại
// let user = prompt("Nhập tên tài khoản");
// let password = prompt("Nhập mật khẩu");
// while (user !== "admin" || password !== "123456") {
//     alert("Tên tài khoản hoặc mật khẩu sai");
//     user = prompt("Nhập tên tài khoản");
//     password = prompt("Nhập mật khẩu");
// }
// alert("Welcome admin");

// Kết hợp break và continue nếu while khó
let n = Number(prompt("Nhập 1 số lớn hơn 8"));
while (true) {
    n = Number(prompt("Nhập lại 1 số lớn hơn 8"));
    if (n > 8) {
        break;
    }
}
console.log(n);
