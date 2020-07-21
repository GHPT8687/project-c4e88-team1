let a = Number(prompt("Nhập số a"));
let b = Number(prompt("Nhập số b"));
let c = Number(prompt("Nhập số c"));

if (a >= b) {
    if (c >= a) {
        max = c;
        secondMax = a;
        min = b;
    }
    else {
        max = a;
        if (c >= b) {
            secondMax = c;
            min = b;
        }
        else {
            secondMax = b;
            min = c;
        }
    }
}
else if (b >= a) {
    if (c >= b) {
        max = c;
        secondMax = b;
        min = a;
    }
    else {
        max = b;
        if (a >= c) {
            secondMax = a;
            min = c;
        }
        else {
            secondMax = c;
            min = a;
        }
    }
}
console.log(min, secondMax, max);

