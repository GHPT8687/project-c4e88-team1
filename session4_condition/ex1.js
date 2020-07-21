let year = parseInt(prompt("Nhập năm"));
if (year % 4 === 0) {
    console.log(`Năm ${year} có 366 ngày`);
}
else {
    console.log(`Năm ${year} có 365 ngày`);
}