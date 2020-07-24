let n1 = parseInt(prompt("Số phần tử của mảng 1"));
let n2 = parseInt(prompt("Số phần tử của mảng 2"));
let arr1 = [];
let arr2 = [];

while (arr1.length < n1) {
    arr1.push(prompt("Nhập phần tử của mảng 1"));
}
while (arr2.length < n2) {
    arr2.push(prompt("Nhập phần tử của mảng 2"));
}
console.log(arr1);
console.log(arr2);
if (arr1 === arr2) {
    console.log("=");
}
else {
    console.log("!=");
}