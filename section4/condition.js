let a = Number(prompt("Nhập a")); 
let b = Number(prompt("Nhập b"));

if (a > b) {
    console.log("a lớn hơn b");   
}
else if (a < b) {
    console.log("a nhỏ hơn b");
}
else if (a == b) {
    console.log("a bằng b");
}

let c = Number(prompt("Nhập c"));
if (a > b) {
    secondMax = a;
    min = b;
}
else {
    secondMax = b;
    min = a;
}
if (c > secondMax) {
    max = c;
}
else {
    max = secondMax;
    if (c > min) {
        c = secondMax;
    }
    else {
        c = min;
    }
}
console.log(max, secondMax, min);