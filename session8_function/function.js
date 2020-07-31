// // function hello() {
// //     console.log("Welcome C4EJS 88");
// // }
// // hello();

// // function welcome(s) {
// //     console.log("Welcome", s);
// // }
// // let xinChao = "";
// // welcome(xinChao);
// // welcome("Taylor");

// // let a = 10;
// // let b = 3;

// // function tong(a, b) {
// //     console.log(`${a} + ${b} = ${a + b}`);
// // }
// // tong(a, b);

// // function tich(a, b) {
// //     console.log(`${a} * ${b} = ${a * b}`);
// // }
// // tich(a, b);

// // function thuong(a, b) {
// //     console.log(`${a} / ${b} = ${a / b}`);
// // }
// // thuong(a, b);

// // function hieu(a, b) {
// //     console.log(`${a} - ${b} = ${a - b}`);
// // }
// // hieu(a, b);

// // function ptBac1(a, b) {
// //     if (a === 0 && b !== 0) {
// //         console.log("Phương trình vô nghiệm");
// //     }
// //     else if (a === 0 && b === 0) {
// //         console.log("Phương trình có vô số nghiệm");
// //     }
// //     else {
// //         console.log(`Phương trình có nghiệm x = ${-b / a}`);
// //     }
// // }
// // ptBac1(5, -10);
// // ptBac1(3, 0);
// // ptBac1(0, 3);
// // ptBac1(0, 0);

// // function soNguyenTo(a) {
// //     let count = 0;
// //     if (a < 2) {
// //         console.log("Không phải số nguyên tố");
// //     }
// //     else {
// //         for (let i = 0; i <= a; i++) {
// //             if (a % i === 0) {
// //                 count++;
// //             }
// //         }
// //         if (count === 2) {
// //             console.log(`${a} là số nguyên tố`);
// //         }
// //         else {
// //             console.log(`${a} không là số nguyên tố`);
// //         }
// //     }
// // }

// // let x = Number(prompt("Nhập 1 số"));
// // soNguyenTo(x);

// // function tinhTong(a, b) {
// //     let c = a + b;
// //     return c;
// // }

// // let sum = tinhTong(10, 20);
// // console.log(sum);
// // console.log(`Trung bình cộng: ${sum / 2}`);

// // Nhận vào 1 số n, trả về tổng từ 1 đến n, in ra kq (ngoài function)
// // function sum2(n) {
// //     let sum = 0;
// //     for (let i = 0; i <= n; i++) {
// //        sum += i;
// //     }
// //     return sum;
// // }

// // let n = Number(prompt("Nhập 1 số"));
// // console.log(`Tổng các số từ 1 đến ${n}: ${sum2(n)}`);

// Tính giai thừa
function giaiThua(a) {
    result = 1;
    for (let i = 1; i <= a; i++) {
        result *= i;
    }
    return result;
}

let n = Number(prompt("Nhập 1 số để tính giai thừa"));
console.log(`${n}! = ${giaiThua(n)}`);

// Tính giai thừa theo cách đệ quy
function gt (n) {
    if (n === 1) {
        return 1;
    }
    return n* gt(n - 1);
}

console.log(gt(10));

// Nhập vào 1 mảng các số, trả về tổng các số trong mảng
function tinhTong(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function taoMang () {
    let soPhanTu = parseInt(prompt("Mảng có bao nhiêu phần tử?"));
    let mang = [];
    while (mang.length < soPhanTu) {
        mang.push(Number(prompt("Nhập số cho mảng")));
    }
    return mang;
}

console.log(`Tổng của mảng là ${tinhTong(taoMang())}`);

// Nhận vào 1 mảng các số, trả về min/max của mảng
function timMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}

function timMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

console.log(`Giá trị nhỏ nhất của mảng: ${timMin(taoMang())}`);
console.log(`Giá trị lớn nhất của mảng: ${timMax(taoMang())}`);

// Nhận vào 1 mảng và 1 số, trả về 1 mảng mới gồm các giá trị nhỏ hơn số đã cho
function compared (compare_number, arr) {
    result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < compare_number) {
            result.push(arr[i]);
        }
    }
    return result;
}

let soSanh = Number(prompt("Nhập 1 số để so sánh"));
console.log(`Các giá trị trong mảng nhỏ hơn ${soSanh}: ${compared(soSanh, taoMang())}`);
