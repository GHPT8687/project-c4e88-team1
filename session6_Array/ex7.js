const given = ["Javascript", "Html", "Css", "Pascal"];
let str = prompt("Nhập 1 chuỗi");
let check = str.toLowerCase();
let g = [];
for (let i = 0; i < given.length; i++) {
    g.push(given[i].toLowerCase());
}

if (g[0].includes(check)) {
    console.log(given[0]);
}
if (g[1].includes(check)) {
    console.log(given[1]);
}
if (g[2].includes(check)) {
    console.log(given[2]);
}
if (g[3].includes(check)) {
    console.log(given[3]);
}