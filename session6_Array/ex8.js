let str = prompt("Nhập 1 chuỗi");
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(`Chuỗi bị đảo ngược: ${reversed}`);