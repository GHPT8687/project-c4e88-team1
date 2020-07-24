let n = parseInt(prompt("Mảng của bạn có bao nhiêu số?"));
let arr = [];
let sum = 0;
let compared = [];

while (arr.length < n) {
    arr.push(Number(prompt("Nhập số cho mảng")));
}
console.log(arr);

// ex4
arr.sort(function(a, b) {return (b - a)});
console.log(`Mảng theo thứ tự giảm dần: ${arr}`);

// ex1, ex6
let compare = Number(prompt("Nhập số so sánh"));
for (let i = 0; i < n; i++) {
   sum += arr[i];
   if (arr[i] > compare) {
       compared.push(arr[i]);
   }
}
console.log(`Tổng các phần tử của mảng: ${sum}`);
console.log(`Trung bình cộng của mảng: ${sum / n}`);  // ex2
console.log(`Các số lớn hơn ${compare}: ${compared}`);

// ex3, ex5
if (n === 2) {
    max = Math.max.apply(null, arr);
    min = Math.min.apply(null, arr);
    console.log(`Số lớn nhất của mảng: ${max}`);
    console.log(`Số nhỏ nhất của mảng: ${min}`);
    console.log("Không có số lớn thứ 2 và số nhỏ thứ 2");
}
else {
    console.log(`Số lớn nhất của mảng: ${arr[0]}`);
    console.log(`Số nhỏ nhất của mảng: ${arr[n - 1]}`);
    console.log(`Số lớn thứ hai của mảng: ${arr[1]}`);
    console.log(`Số nhỏ thứ hai của mảng: ${arr[n - 2]}`);
}