let height = Number(prompt("Nhập chiều cao (cm)"));
let weight = Number(prompt("Nhập cân nặng (kg)"));
let bmi = weight/(height**2/10000);
console.log(`Chỉ số BMI của bạn là ${bmi}`);

if (bmi < 18.5) {
    console.log("Bạn gầy. Ăn nhiều hơn nhé");
}

else if (bmi < 25) {
    console.log("Cơ thể bạn chuẩn đấy. Cố gắng duy trì nhé");
}

else if (bmi < 30) {
    console.log("Bạn thừa cân 1 chút. Mũm mĩm dễ thương đấy nhưng mà chăm tập thể dục hơn nhé");
}

else if (bmi < 40) {
    console.log("Giảm cân đi bạn nhé. Bạn béo rồi!");
}

else {
    console.log("Giảm cân ngay đi bạn ơi! Béo quá rồi!!!");
}