// Bài tập: 
// 1. Cho người dùng thêm vào 5 số bất kì
// 2. In ra các số chẵn và số lượng số chẵn
// 3. In ra các số > 10
// 4. Tính tổng tất cả gt trong mảng và trung bình cộng của mảng
// 5. Cho người dùng nhập 1 số index và gt mới. Update gt mới tại index này
// 6. Cho người dùng nhập 1 số, xóa các phần tử bé hơn số này

let arr = [];
let evenNumbers = [];
let evenNumbers_count = 0;
// let largerThan10 = [];
let sum = 0;
let arr_compared = [];

while (arr.length < 5) {
    arr.push(Number(prompt("Nhập số cho mảng")));
}

console.log(`Mảng của bạn: ${arr}`);

for (let i = 0; i < 5; i++) {
    if (arr[i] % 2 === 0) {
        evenNumbers_count++;
        evenNumbers.push(arr[i]);
    }

    // if (arr[i] > 10) {
    //     largerThan10.push(arr[i]);
    // }

    sum += arr[i];

}

console.log(`Có ${evenNumbers_count} số chẵn: ${evenNumbers}`);

// console.log(`Các số lớn hơn 10: ${largerThan10}`);
let filtered_10 = arr.filter(function(value, index, arr) {
    return value > 10;
});
console.log(`Các số lớn hơn 10: ${filtered_10}`);

console.log(`Tổng của các giá trị trong mảng: ${sum}`);
console.log(`Trung bình cộng của mảng: ${sum / 5}`);

let newIndex = Number(prompt("Nhập 1 index mới"));
arr[newIndex] = Number(prompt("Nhập 1 giá trị cho index vừa nhập"));

console.log(`Mảng mới sau khi cập nhật: ${arr}`);


let compare = Number(prompt("Nhập 1 số để so sánh"));
// for (let j = 0; j < arr.length; j++) {
//     if (arr[j] > compare) {
//         arr_compared.push(arr[j]);
//     }
// }

// console.log(`Số so sánh: ${compare}`);
// console.log(`Mảng mới sau khi so sánh: ${arr_compared}`);

let filtered_compare = arr.filter(function(value, index, arr) {
    return value > compare;
});
console.log(`Các số sau khi so sánh: ${filtered_compare}`);