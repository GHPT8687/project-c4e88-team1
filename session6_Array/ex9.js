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

// for (let i = 0; i < n1; i++) {
//     arr3.push(arr1[i]);    
// }
// for (let j = 0; j < n2; j++) {
//     arr3.push(arr2[j]);    
// }

let arr3 = arr1.concat(arr2);
console.log(`Mảng 3 chứa cả mảng 1 và mảng 2: ${arr3}`);