let menu = [];
let choice;
let a = true;

// viết các hàm ở đây

// 1. thêm món ăn vào danh mục
function addMenu() {
  let id = menu.length + 1; // sinh id tự động
  let tenMonAn = prompt("mời bạn nhập tên món ăn muốn thêm: ");
  let gia = prompt("mời bạn nhập giá món ăn muốn thêm: ");
  let moTa = prompt("bạn hãy mô tả món ăn mà bạn đã thêm: ");
  let newMenu = { id, tenMonAn, gia, moTa };
  menu.push(newMenu);
}

// 2. xóa món ăn theo tên khỏi danh mục
function deleteMenu() {
  if (menu.length == 0) {
    alert("danh sách món ăn đang rỗng");
  } else {
    let tenMonAnXoa = prompt("mời bạn nhập tên món ăn muốn xóa: ");
    let index = menu.findIndex((item) => item.tenMonAn === tenMonAnXoa);
    if (index != -1) {
      menu.splice(index, 1);
      alert("món ăn đã được xóa");
    }
  }
}

// 3. cập nhập thông tin theo tên của món ăn
function updateMenu() {
  if (menu.length == 0) {
    alert("menu của bạn đang rỗng: ");
  } else {
    let tenMonAnCapNhat = prompt("mời bạn nhập tên món ăn muốn cập: ");
    let index = menu.findIndex((item) => item.tenMonAn === tenMonAnCapNhat);
    if (index != -1) {
      let newTenMonAn = prompt("mời bạn nhập tên món ăn mới: ");
      let newGia = prompt("mời bạn nhập giá món ăn mới: ");
      let newMoTa = prompt("bạn hãy viết mô ta mới cho món ăn: ");
      menu[index].tenMonAn = newTenMonAn;
      menu[index].gia = newGia;
      menu[index].moTa = newMoTa;
      alert("thông tin món ăn của bạn đã được cập nhật:");
    }
  }
}

// 4. in ra toàn bộ danh mục và món ăn
function showMenu() {
  if (menu.length == 0) {
    alert("danh sách món ăn đang rỗng");
  } else {
    for (let i = 0; i < menu.length; i++) {
      alert(
        `ID: ${menu[i].id} - Tên Món Ăn: ${menu[i].tenMonAn} - Gia: ${menu[i].gia} - Mô Tả: ${menu[i].moTa}`
      );
    }
  }
}

// 5. tìm kiếm tên món ăn theo tên
function searchMenu() {
  if (menu.length == 0) {
    alert("danh sách món ăn đang rỗng");
  } else {
    let tenMonAnTimKiem = prompt("mời bạn nhập tên món ăn muốn tìm: ");
    let index = menu.findIndex((item) => item.tenMonAn === tenMonAnTimKiem);
    if (index != -1) {
      alert(`món ăn ${tenMonAnTimKiem} đã được tìm thấy`);
    }
  }
}

// in ra menu hiển thị
let cacluachon = `
------ MENU ------
1. Thêm món ăn vào danh mục.
2. Xóa món ăn theo tên khỏi danh mục.
3. Cập nhật thông tin theo tên của món ăn  (tên, giá, mô tả).
4. Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
5. Tìm kiếm món ăn theo tên trong toàn bộ menu.
6. Thoát

Lựa chọn của bạn là gì?
`;

while (a) {
  choice = +prompt(cacluachon);
  switch (choice) {
    case 1:
      addMenu();
      break;
    case 2:
      tenMonAnXoa();
      break;
    case 3:
      tenMonAnCapNhat();
      break;
    case 4:
      showMenu();
      break;
    case 5:
      searchMenu();
      break;
    case 6:
      a = false;
      alert("Chương trình đã thoát.");
      break;
    default:
      alert("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
  }
}
