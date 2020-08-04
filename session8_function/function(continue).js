// // Trả về 1 gt > 20
// let arr = [1, 20, 6, 12, 7, 10, 9, 5, 30, 50];
// function greaterThan20 (value) {
//     return value > 20;
// }
// console.log(`Số đầu tiên lớn hơn 20: ${arr.find(greaterThan20)}`);

// // Trả về 1 mảng gồm các gt > 10
// function greaterThan10 (v) {
//     return v > 10;
// }
// console.log(`Các số lớn hơn 10: ${arr.filter(greaterThan10)}`);

// // Trả về 1 mảng gồm các số chẵn
// function evenNumbers(va) {
//     return va % 2 === 0;
// }
// console.log(`Các số chẵn trong mảng: ${arr.filter(evenNumbers)}`);

// // Mảng ban đầu có số > 5 k
// function greaterThan5(val) {
//     return val > 5;
// }
// console.log(`Mảng có số lớn hơn 5? ${arr.some(greaterThan5)}`);

// // Mảng ban đầu có số chẵn k
// console.log(`Mảng có số chẵn? ${arr.some(evenNumbers)}`);

// // Tất cả giá trị của mảng là số lẻ k
// function oddNumbers(valu) {
//     return valu % 2 === 1;
// }
// console.log(`Mảng toàn số lẻ? ${arr.every(oddNumbers)}`);

let phones = [
    {
        name: "iPhone",
        price: 13e6,
        brand: "Apple"
    },
    {
        name: "Galaxy Note 10",
        price: 22e6,
        brand: "Samsung"
    },
    {
        name: "Xperia",
        price: 15e6,
        brand: "Sony"
    },
    {
        name: "iPhone Pro Max",
        price: 56e6,
        brand: "Apple"
    },
    {
        name: "Galaxy Fold",
        price: 50e6,
        brand: "Samsung"
    }
];

// 1. Tìm đt có giá > 18tr
let moreThan18m = phones.filter(function (phone, index) {  // quan tâm cái nào thì viết ra
    // console.log(index);                  // chưa biết làm gì thì cứ in ra để xem nó làm gì, biết rồi thì xóa bớt đi
    return phone.price > 18e6;
    // console.log(phone.price);             // mới đầu đặt là value, biết value in ra là đt rồi thì sửa thành phone
});
console.log("Điện thoại có giá lớn hơn 18 triệu");
print(moreThan18m);

function print (phones) {
    for (i = 0; i < phones.length; i++) {
        const phone = phones[i];
        for (const key in phone) {
            const value = phone[key];
            console.log(`${key}: ${value}`);
        }
        console.log("=============");
    }
}

// 2. Tìm đt có tên chứa 'iphone'
let iphone = phones.filter(function (phone){
    return phone.name.toLowerCase().includes('iphone');
});

console.log("Kết quả cho 'iphone'");
print(iphone);

// 3. Tìm đt có giá từ 10tr đến 20tr
let filtered = phones.filter(function (phone) {
    return phone.price >= 10e6 && phone.price <= 20e6;
});

console.log("Điện thoại có giá từ 10 triệu đến 20 triệu");
print(filtered);

// 4. Có đt < 18tr k?
let iflessThan18m = phones.some(dtDuoi18tr);
function dtDuoi18tr(phone) {
    return phone.price < 18e6;
}

let lessThan18m = phones.filter(function (phone) {
    return phone.price < 18e6;
});

if (iflessThan18m) {
    console.log(`Điện thoại dưới 18 triệu`);
    print(lessThan18m);
}
else {
    console.log("Không có điện thoại dưới 18 triệu");
    console.log("=============");
}

// 5. Tìm các đt của Apple
let apple = phones.filter(function (phone) {
    return phone.brand === 'Apple';
});

console.log("Điện thoại của Apple");
print(apple);

// 6. Tìm đt giá max, min
let prices = [];
for (let value of phones) {
    prices.push(value.price);
}

let max = Math.max.apply(null, prices);
let min = Math.min.apply(null, prices);

let maxPhone = phones.filter(function (phone) {
    return phone.price === max;
});

let minPhone = phones.filter(function (phone) {
    return phone.price === min;
});

console.log(`Điện thoại có giá cao nhất`);
print(maxPhone);

console.log(`Điện thoại có giá thấp nhất`);
print(minPhone);

// 7. Tính tổng gt của all đt
let sum = 0;
for (let x of prices) {
    sum += x;
}
console.log(`Tổng giá trị của tất cả điện thoại: ${sum}`);
console.log("=============");

// 8. Có bn đt của Sony?
let sony = phones.filter(function (phone) {
    return phone.brand === 'Sony';
});

console.log(`Có ${sony.length} điện thoại của Sony`);
print(sony);

// 9. Sắp xếp đt theo tên a -> z
let lowerCase = [];
let sortedName = [];

for (let phone of phones) {
    lowerCase.push(phone.name.toLowerCase());
}

lowerCase.sort();

for (let i = 0; i < lowerCase.length; i++) {
    for (let j = 0; j < phones.length; j++) {
        if (phones[j].name.toLowerCase().includes(lowerCase[i])) {
            sortedName.push(phones[j]);
        }
    }
}

console.log("Sắp xếp tên điện thoại theo thứ tự a -> z");
print(sortedName);

// 10. Sắp xếp đt theo giá cao -> thấp
let sortedPrice = [];

prices.sort(function (a, b) {
    return b - a;
});

for (i = 0; i < prices.length; i++) {
    for (j = 0; j < phones.length; j++) {
        if (phones[j].price === prices[i]) {
            sortedPrice.push(phones[j]);
        }
    }
}

console.log("Sắp xếp đt theo giá cao -> thấp");
print(sortedPrice);