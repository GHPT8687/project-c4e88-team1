let month = parseInt(prompt("Nhập tháng bạn muốn biết số ngày"));
let year = parseInt(prompt("Nhập năm"));
if (year % 4 === 0) {
    console.log("Năm nhuận");
}
else {
    console.log("Không là năm nhuận");
}

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 10:
    case 12: 
        console.log("31 ngày");
        break;
    
    case 2:
        if (year % 4 === 0) {
            console.log("29 ngày");
        }
        else {
            console.log("28 ngày");
        }
        break;

    case 4:
    case 6:
    case 8:
    case 9:
    case 11:
        console.log("30 ngày");
        break;

default:
    console.log("Không phải tháng trong năm");
}