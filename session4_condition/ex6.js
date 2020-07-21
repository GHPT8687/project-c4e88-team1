var input = parseInt(prompt("Nhập số điện dùng trong 1 tháng"));
var bac1 = 50 * 1.678;
var bac2 = 50 * 1.734;
var bac3 = 100 * 2.014;
var bac4 = 100 * 2.536;
var bac5 = 100 * 2.834;
if (input <= 50) {
    console.log(`Tiền điện bậc 1: ${input * 1.678}`);
}
else if (input <= 100) {
    let b2 = (input - 50) * 1.734
    console.log(`Tiền điện bậc 1: ${bac1}`);
    console.log(`Tiền điện bậc 2: ${b2}`);
    console.log(`Tổng: ${bac1 + b2}`);
}
else if (input <= 200) {
    let b3 = (input - 100) * 2.014;
    console.log(`Tiền điện bậc 1: ${bac1}`);
    console.log(`Tiền điện bậc 2: ${bac2}`);
    console.log(`Tiền điện bậc 3: ${b3}`);
    console.log(`Tổng: ${bac1 + bac2 + b3}`);
}
else if (input <= 300) {
    let b4 = (input - 200) * 2.536;
    console.log(`Tiền điện bậc 1: ${bac1}`);
    console.log(`Tiền điện bậc 2: ${bac2}`);
    console.log(`Tiền điện bậc 3: ${bac3}`);
    console.log(`Tiền điện bậc 4: ${b4}`);
    console.log(`Tổng: ${bac1 + bac2 + bac3 + b4}`);
}
else if (input <= 400) {
    let b5 = (input - 300) * 2.834;
    console.log(`Tiền điện bậc 1: ${bac1}`);
    console.log(`Tiền điện bậc 2: ${bac2}`);
    console.log(`Tiền điện bậc 3: ${bac3}`);
    console.log(`Tiền điện bậc 4: ${bac4}`);
    console.log(`Tiền điện bậc 5: ${b5}`);
    console.log(`Tổng: ${bac1 + bac2 + bac3 + bac4 + b5}`);
}
else if (input > 400) {
    let b6 = (input - 400) * 2.927;
    console.log(`Tiền điện bậc 1: ${bac1}`);
    console.log(`Tiền điện bậc 2: ${bac2}`);
    console.log(`Tiền điện bậc 3: ${bac3}`);
    console.log(`Tiền điện bậc 4: ${bac4}`);
    console.log(`Tiền điện bậc 5: ${bac5}`);
    console.log(`Tiền điện bậc 6: ${b6}`);
    console.log(`Tổng: ${bac1 + bac2 + bac3 + bac4 + bac5 + b6}`);
}