let contact = [];
let choice;
let a = true;

// viết các hàm ở đây

// 1. hàm thêm liên hệ mới vào danh bạ
function addContact() {
  let id = contact.length + 1; //theo kiểu số nguyên, và yêu cầu không được trùng lặp
  let name = prompt("Mời bạn nhập tên cho liên hệ mới muốn thêm: "); // tên liên hệ thuộc kiểu string
  let email = prompt("Mời bạn nhập email mới cho địa chỉ muốn thêm: "); // email thuộc kiểu string
  let phone = prompt(
    "Mời bạn nhập số điện thoại cho liên hệ mới mà bạn muốn thêm vào: "
  ); // string
  let newContact = { id, name, email, phone }; // tạo một đối tượng mới
  contact.push(newContact); // thêm vào danh sách contact
  alert("Bạn đã thêm danh sách thành công: ");
}

// 2. hàm hiển thị danh sách liên hệ
// 2.1 nếu danh sách rỗng thì hiển thị danh sách rỗng
function kiemTra() {
  if (contact.length == 0) {
    alert("Danh sách liên hệ rỗng");
  }
}
// 2.2 nếu danh sách không rỗng thì hiển thị danh sách
function showContact() {
  if (contact.length > 0) {
    for (let i = 0; i < contact.length; i++) {
      alert(`ID: ${contact[i].id} - Tên: ${contact[i].name}
                Email: ${contact[i].email} - Số điện thoại: ${contact[i].phone}`);
    }
  }
}

// 3. hàm tìm kiếm thông tin theo số điện thoại
// 3.1 vẫn sử dụng hàm kiểm tra nếu danh sách trống
// 3.2 tìm kiếm thông tin theo số điện thoại
function timKiem() {
  if (contact.length == 0) {
    alert("Danh sách liên hệ rỗng");
  } else {
    let phone = prompt("Mời bạn nhập số điện thoại muốn tìm kiếm: ");
    for (let i = 0; i < contact.length; i++) {
      if (contact[i].phone == phone) {
        alert(`ID: ${contact[i].id} - Tên: ${contact[i].name}
                        Email: ${contact[i].email} - Số điện thoại: ${contact[i].phone}
                        `);
        break;
      }
    }
  }
}

// 4.cập nhật thông tin name phone email theo id
// 4.1 vẫn sử dụng hàm kiểm tra nếu mảng rỗng
// 4.2 nếu mảng không rỗng thì tiến hành cập nhật thông tin
function capNhat() {
  if (contact.length == 0) {
    alert("Danh sách liên hệ rỗng");
  } else {
    let id = prompt("Mời bạn nhập id muốn cập nhật: ");
    let name = prompt("Mời bạn nhập tên mới: ");
    let email = prompt("Mời bạn nhập email mới: ");
    let phone = prompt("Mời bạn nhập số điện thoại mới: ");
    for (let i = 0; i < contact.length; i++) {
      if (contact[i].id == id) {
        contact[i].name = name;
        contact[i].email = email;
      }
    }
  }
}

// 5. xóa một đối tượng khỏi danh sách theo id
// 5.1 vẫn sử dụng hàm kiểm tra nếu danh sách rỗng
// 5.2 tìm kiếm id và xóa
function xoa() {
  if (contact.length == 0) {
    alert("Danh sách liên hệ rỗng");
  } else {
    let id = prompt("Mời bạn nhập id muốn xóa: ");
    for (let i = 0; i < contact.length; i++) {
      if (contact[i].id == id) {
        contact.splice(i, 1);
        alert("Đã xóa thành công");
        break;
      }
    }
  }
}

// tiến hành in menu cho người dùng chọn
let menu = `
------ MENU ------
1. Thêm đối tượng Contact vào danh sách liên hệ.
2. Hiển thị danh sách danh bạ.
3. Tìm kiếm thông tin Contact theo số điện thoại.
4. Cập nhật thông tin Contact(name, email, phone) theo id.
5. Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
6. Thoát.

Lựa chọn của bạn là gì?
`;

while (a) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
      addContact();
      break;
    case 2:
      showContact();
      break;
    case 3:
      timKiem();
      break;
    case 4:
      capNhat();
      break;
    case 5:
      xoa();
      break;
    case 6:
      a = false;
      alert("Chương trình đã thoát.");
      break;
    default:
      alert("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
  }
}
