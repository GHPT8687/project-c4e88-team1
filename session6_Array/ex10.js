let weight = [];
while (weight.length < 10) {
    weight.push(Number(prompt("Nhập trọng lượng của gà")));
}
console.log(`Trọng lượng của từng con gà: ${weight}`);
// a
for (let i = 0; i < 10; i++) {
    weight[i] *= 1.5;
}
console.log(`Trọng lượng của từng con gà sau 2 tuần: ${weight}`);

let max = Math.max.apply(null, weight);
// b
console.log(`Con gà thứ ${weight.indexOf(max) + 1} có trọng lượng lớn nhất`);
// c
weight.splice(Math.floor(Math.random * 10),1);
weight.splice(Math.floor(Math.random * 10),1);
weight.splice(Math.floor(Math.random * 10),1);
for (let j = 0; j < 7; j++) {
    weight[j] /= 2;
}
console.log(`Trọng lượng của những con gà còn lại sau đợt dịch: ${weight}`);
