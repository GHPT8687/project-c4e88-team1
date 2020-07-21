a = Number(prompt("Nhập số a"));
b = Number(prompt("Nhập số b"));
c = Number(prompt("Nhập số c"));
if ((a + b > c && (a + c > b || b +c > a))) {
    if (a**2 === b**2 + c**2 || b**2 === a**2 + c**2 || c**2 === a**2 + b**2) {
        console.log("Lập được tam giác vuông");
    }
    else if (a === b && b === c) {
        console.log("Lập được tam giác đều");
    }
    else if ((a === b && a !== c) || (a === c && a !== b)) {
        console.log("Lập được tam giác cân");
    }
}
else {
    console.log("Không lập được tam giác");
}