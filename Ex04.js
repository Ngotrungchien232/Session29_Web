let congViec = [];
let choice;
let a = true;

// viết các hàm ở đây

// 1. thêm công việc mới
function addCongViec() {
  let id = congViec.length + 1;
  let tenCongViec = prompt("Nhập công việc mới mà bạn muốn thêm: ");
  let moTa = prompt("mời bạn nhập mô tả cho công việc đã thêm: ");
  let thoiGianBatDau = prompt(
    "mời bạn nhập thời gian bắt đầu cho công việc này là: "
  );
  let isAvailable = true;
  let newcongViec = { id, tenCongViec, moTa, thoiGianBatDau };
  congViec.push(newcongViec);
}

// 2. hiển thị tất cả công việc
function showcongViec() {
  if (congViec.length == 0) {
    alert("Không có công việc nào");
  } else {
    for (let i = 0; i < congViec.length; i++) {
      alert(
        `ID: ${congViec[i].id} - Tên công việc: ${congViec[i].tenCongViec} - Mô Tả công việc: ${congViec[i].moTa} - Thời gian bắt đầu công việc: ${congViec[i].thoiGianBatDau} - Trạng thái công việc: ${congViec[i].isAvailable}`
      );
    }
  }
}

// 3. cập nhật trạng thái công việc theo id
function updateCongViec() {
  if (congViec.length == 0) {
    alert("Không có công việc nào");
  } else {
    let id = prompt("Nhập id công việc mà bạn muốn cập nhật: ");
    let isAvailable = prompt("Nhập trạng thái công việc mới: ");
    for (let i = 0; i < congViec.length; i++) {
      if (congViec[i].id == id) {
        congViec[i].isAvailable = isAvailable;
        alert("cập nhập công việc thành công: ");
      }
    }
  }
}

// 4. lọc công việc theo trạng thái hoàn thành, chưa hoàn thành
function filterCongViec() {
  if (congViec.length == 0) {
    alert("Không có công việc nào");
  } else {
    let isAvailable = prompt("Nhập trạng thái công việc mà bạn muốn lọc: ");
    for (let i = 0; i < congViec.length; i++) {
      if (congViec[i].isAvailable == isAvailable) {
        alert(`ID: ${congViec[i].id} - Tên công việc: ${congViec[i].tenCongViec} - Mô Tả công việc: ${congViec[i].moTa}
                        - Thời gian bắt đầu công việc: ${congViec[i].thoiGianBatDau} - Trạng thái công việc: ${congViec[i].is}Available`);
      }
    }
  }
}

// 5. sắp xếp công việc theo trạng thái công việc
function sortCongViec() {
  if (congViec.length == 0) {
    alert("Không có công việc nào");
  } else {
    let isAvailable = prompt("Nhập trạng thái công việc mà bạn muốn sắp xếp: ");
    congViec.sort((a, b) => {
      if (a.isAvailable == isAvailable && b.isAvailable == isAvailable) {
        return a.id - b.id;
      }
    });
  }
}

// in ra menu hiển thị
let cacluachon = `
------ MENU ------
1. Thêm công việc mới.
2. Hiển thị tất cả các công việc.
3. Cập nhật trạng thái công việc theo id.
4. Lọc các công việc theo trạng thái hoàn thành, chưa hoàn thành.
5. Sắp xếp các công việc theo trạng thái công việc.
6. Thoát.
Lựa chọn của bạn là gì?
`;

while (a) {
  choice = +prompt(cacluachon);
  switch (choice) {
    case 1:
      addCongViec();
      break;
    case 2:
      showcongViec();
      break;
    case 3:
      updateCongViec();
      break;
    case 4:
      filterCongViec();
      break;
    case 5:
      sortCongViec();
      break;
    case 6:
      a = false;
      alert("Chương trình đã thoát.");
      break;
    default:
      alert("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
  }
}
