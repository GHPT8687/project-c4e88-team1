let myQuestions = [
    {
        question: "Chất nào sau đây có phản ứng trùng hợp?",
        answers: {
            a: 'Etilen',
            b: 'Etylen glicol',
            c: 'Etylamin',
            d: 'Axit axetic'},
        correctAnswer: 'a'
    },
    {
        question: "Kim loại nào sau đây không tác dụng với dung dịch CuSO4?",
        answers: {
            a: 'Ag',
            b: 'Mg',
            c: 'Fe',
            d: 'Al'
        },
        correctAnswer: 'a'
    },
    {
        question: "Kim loại nào sau đây là kim loại kiềm?",
        answers: {
            a: 'Cu',
            b: 'Na',
            c: 'Mg',
            d: 'Al'
        },
        correctAnswer: 'b'   
    },
    {
        question: "Khí X sinh ra trong quy trình đốt nhiên liệu hóa thạch, rất độc và gây ô nhiêm môi trường. Khí X là",
        answers: {
            a: 'CO',
            b: 'H2',
            c: 'NH3',
            d: 'N2'
        },
        correctAnswer: 'a'
    },
    {
        question: "Ở nhiệt độ thường, kim loại Fe không phản ứng với dung dịch nào sau đây?",
        answers: {
            a: 'NaNO3',
            b: 'HCl',
            c: 'CuSO4',
            d: 'AgNO3'
        },
        correctAnswer: 'a'
    },
    {
        question: "Dung dịch chất nào sau đây làm xanh quỳ tím?",
        answers: {
            a: 'Metanol',
            b: 'Glixerol',
            c: 'Axit axetic',
            d: 'Metylamin'
        },
        correctAnswer: 'd'
    },
    {
        question: "Số nguyên tử cacbon trong phân tử glucozo là",
        answers: {
            a: '5',
            b: '10',
            c: '6',
            d: '12'
        },
        correctAnswer: 'c'
    },
    {
        question: "Chất nào sau đây có tính lưỡng tính?",
        answers: {
            a: 'NaNO3',
            b: 'MgCl2',
            c: 'Al(OH)3',
            d: 'Na2CO3'
        },
        correctAnswer: 'c'
    },
    {
        question: "Chất nào sau đây được dùng đề làm mềm nước cứng có tính tạm thời?",
        answers: {
            a: 'CaCO3',
            b: 'MgCl2',
            c: 'NaOH',
            d: 'Fe(OH2)'
        },
        correctAnswer: 'c'
    },
    {
        question: "Chất X có công thức H2N-CH(CH3)COOH. Tên gọi của X là",
        answers: {
            a: 'glyxin',
            b: 'valin',
            c: 'alanin',
            d: 'lysin'
        },
        correctAnswer: 'c'
    },
    {
        question: "Thủy phân este CH3CH2COOCH3, thu được ancol có công thức là",
        answers: {
            a: 'CH3OH',
            b: 'C3H7OH',
            c: 'C2H5OH',
            d: 'C3H5OH'
        },
        correctAnswer: 'a'
    },
    {
        question: "Sắt có số oxi hóa +3 trong hợp chất nào sau đây?",
        answers: {
            a: 'Fe(OH)2',
            b: 'Fe(NO3)2',
            c: 'Fe2(SO4)3',
            d: 'FeO'
        },
        correctAnswer: 'c'
    },
    {
        question: "Thành phần chính của vỏ các loại ốc, sến, sò là",
        answers: {
            a: 'Ca(NO3)2',
            b: 'CaCO3',
            c: 'NaCl',
            d: 'Na2CO3'
        },
        correctAnswer: 'b'
    },
    {
        question: "Chất nào sau đây có một liên kết ba trong phân tử?",
        answers: {
            a: 'Metan',
            b: 'Etilen',
            c: 'Axetilen',
            d: 'Benzen'
        },
        correctAnswer: 'c'
    },
    {
        question: "Chất nào sau đây là chất điện ly yếu?",
        answers: {
            a: 'HCl',
            b: 'KNO3',
            c: 'NaOH',
            d: 'CH3COOH'
        },
        correctAnswer: 'd'
    },
    {
        question: "Thủy phân triolein có công thức (C17H33COO)3C3H5 trong dung dịch NaOH, thu được glyxerol và muối X. Công thức của X là",
        answers: {
            a: 'C17H35COONa',
            b: 'CH3COONa',
            c: 'C2H5COONa',
            d: 'C17H33COONa'
        },
        correctAnswer: 'd'
    },
    {
        question: "Natri hidroxit (còn gọi là xút ăn da) có công thức hóa học là",
        answers: {
            a: 'NaOH',
            b: 'NaHCO3',
            c: 'Na2CO3',
            d: 'Na2SO4'
        },
        correctAnswer: 'a'
    },
];

let newList = [];
let indexRandom;
let listIndexCauHoi = [];
while (newList.length < 10) {
    indexRandom = Math.floor((Math.random() * 100));
    if (indexRandom < myQuestions.length) {   // đảm bảo index < số câu của đề
        listIndexCauHoi.push(indexRandom);
    }
    newList = [...new Set(listIndexCauHoi)];  // đảm bảo list k bị trùng số
}

let questionsDisplayed = [];
for (let index of newList) {
    questionsDisplayed.push(myQuestions[index]);
}