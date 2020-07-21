let n = prompt("Enter a number");
let count = 0;
for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        console.log(i);
        count++;
        if (count === 2) {
            console.log("Là số nguyên tố");
        }
        else {
            console.log("Là hợp số");
            if (n / i === i) {
                console.log("Là số chính phương");
            }
            else {
                console.log("Không là số chính phương");
            }
        }
    }
}
