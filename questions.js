let de = [
    {"Kim loại nào sau đây không tác dụng với dung dịch CuSO4?": ['Ag', 'Mg', 'Fe', 'Al']},
    {"Kim loại nào sau đây là kim loại kiềm?": ['Cu', 'Na', 'Mg', 'Al']},
    {"Khí X sinh ra trong quy trình đốt nhiên liệu hóa thạch, rất độc và gây ô nhiêm môi trường. Khí X là": ['CO', 'H2', 'NH3', 'N2']},
    {"Thủy phân este CH3CH2COOCH3, thu được ancol có công thức là": ['CH3OH', 'C3H7OH', 'C2H5OH', 'C3H5OH']},
    {"Ở nhiệt độ thường, kim loại Fe không phản ứng với dung dịch nào sau đây?": ['NaNO3', 'HCI', 'CuSO4', 'AgNO3']},
    {"Dung dịch chất nào sau đây làm xanh quỳ tím?": ['Metanol', 'Glixerol', 'Axit axetic', 'Metylamin']},
    {"Chất nào sau đây có tính lưỡng tính?": ['NaNO3', 'MgCl2', 'Al(OH)3', 'Na2CO3']},
    {"Sắt có số oxi hóa +3 trong hợp chất nào sau đây?": ['Fe(OH)2', 'Fe(NO3)2', 'Fe2(SO4)3', 'FeO']},
    {"Chất nào sau đây có phản ứng trùng hợp?": ['Etilen', 'Etylen glicol', 'Etylamin', 'Axit axetic']},
    {"Phản ứng nào sau đây là phản ứng nhiệt nhôm?": ['3FeO + 2Al 3Fe + Al2O3', '2Al + 2NaOH + 2H2O2NaAlO2 + 3H2', '2Al + 3H2SO4Al2(SO4)3+ 3H2', '2Al + 3CuSO4Al2(SO4)3+ 3Cu']},
    {"Số nguyên tử cacbon trong phân tử glucozo là": ['5', '10', '6', '12']},
    {"Ở nhiệt độ thường, kim loại nào sau đây tan hết trong nước dư?": ['Ba', 'Al', 'Fe', 'Cu']},
    {"Chất nào sau đây được dùng đề làm mềm nước cứng có tính tạm thời?": ['CaCO3', 'MgCl2', 'NaOH', 'Fe(OH)2']},
    {"Dung dịch KOH tác dụng với chất nào sau đây tạo ra kết tủa Fe(OH)3?": ['FeCl3', 'FeO', 'Fe2O3', 'Fe3O4']},
    {"Chất nào sau đây là chất điện ly yếu?": ['HCI', 'KNO3', 'CH3COOH', 'NaOH']},
    {"Thủy phân triolein có công thức (C17H33COO)3C3H5 trong dung dịch NaOH, thu được glyxerol và muối X. Công thức của X là": ['C17H35COONa', 'CH3COONa', 'C2H5COONa', 'C17H33COONa']},
    {"Natri hidroxit (còn gọi là xút ăn da) có công thức hóa học là": ['NaOH', 'NaHCO3', 'Na2CO3', 'Na2SO4']},
    {"Chất nào sau đây có một liên kết ba trong phân tử?": ['Metan', 'Etilen', 'Axetilen', 'Benzen']},
    {"Chất X có công thức H2N-CH(CH3)COOH. Tên gọi của X là": ['glyxin', 'valin', 'alanin', 'lysin']},
    {"Thành phần chính của vỏ các loại ốc, sến, sò là": ['Ca(NO3)2', 'CaCO3', 'NaCl', 'Na2CO3']}
];

let listIndexCauHoi = [];
let newList = [];
let indexRandom;
while (newList.length < 10) {
    indexRandom = Math.floor((Math.random() * 100));
    if (indexRandom < de.length) {
        listIndexCauHoi.push(indexRandom);
    }
    newList = [...new Set(listIndexCauHoi)];
}

console.log(newList);

for (let i = 0; i <= newList.length; i++) {
    let cau = newList[i];
    for (let cauHoi in de[cau]) {
        let dapAn = de[cau][cauHoi];
        document.getElementById("question").innerHTML +=
            `<li><h4>${cauHoi}</h4></li>
            <input type="checkbox"> A. ${dapAn[0]} <br>
            <input type="checkbox"> B. ${dapAn[1]}  <br>
            <input type="checkbox"> C. ${dapAn[2]}  <br>
            <input type="checkbox"> D. ${dapAn[3]}`
    }
}