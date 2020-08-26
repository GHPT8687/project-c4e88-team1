let cmts = [];

// hiển thị theo thứ tự thời gian giảm dần: mới nhập thì hiển thị trước/ bên trên.
function display() {
    let cmt = document.getElementById("txt_comment").value;
    cmts.unshift(cmt);
    localStorage.setItem('comments', JSON.stringify(cmts));  // lưu vào localStorage
    cmts = JSON.parse(localStorage.getItem('comments'));    // lấy ra để dùng
    
    if (cmt.length > 0) {    // để đảm bảo cmt rỗng k đc hiển thị
        if (typeof(Storage) === undefined) {    // kiểm tra xem trình duyệt có hỗ trợ localStorage k
            alert("Không thể lưu nội dung vì trình duyệt của bạn đã quá cũ. Hãy nâng cấp trình duyệt ngay!");
        }
        else {
            document.getElementById("txt_comment").value = '';
            document.getElementById("display").innerHTML = '';
            for (let i = 0; i < cmts.length; i++) {
                document.getElementById("display").innerHTML += `
                <hr>
                <p>${cmts[i]}</p>`; 
            }
        }
    }
    else {   // vì cmt rỗng vẫn đc lưu vào localStorage nên đoạn này sẽ loại nó ra
        alert("Hãy nhập nội dung trước khi post!");
        cmts.splice(0, 1);
    } 
}

// hiển thị ra màn hình để khi ấn F5 thì comments vẫn còn trên màn hình
cmts = JSON.parse(localStorage.getItem('comments'));
if (cmts !== null && cmts.length > 0) {    // khi có nội dung lưu trong localStorage thì thực hiện đoạn này
    for (let i = 0; i < cmts.length; i++) {
        document.getElementById("display").innerHTML += `
        <hr>
        <p>${cmts[i]}</p>`; 
    }
} 
else {
    cmts = [];
}