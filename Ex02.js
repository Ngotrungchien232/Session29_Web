let products = [];
let choice;
let running = true;

// 1. Thêm sản phẩm mới
function addProduct() {
  let id = products.length + 1;
  let name = prompt("Nhập tên sản phẩm:");
  let price = parseFloat(prompt("Nhập giá sản phẩm:"));
  let category = prompt("Nhập danh mục sản phẩm:");
  let quantity = parseInt(prompt("Nhập số lượng sản phẩm trong kho:"));

  let newProduct = { id, name, price, category, quantity };
  products.push(newProduct);
  alert("Thêm sản phẩm thành công!");
}

// 2. Hiển thị danh sách sản phẩm
function displayProducts() {
  if (products.length === 0) {
    alert("Danh sách sản phẩm trống.");
    return;
  }

  let productList = products
    .map(
      (p) =>
        `ID: ${p.id}, Tên: ${p.name}, Giá: ${p.price}, Danh mục: ${p.category}, Số lượng: ${p.quantity}`
    )
    .join("\n\n");

  alert("Danh sách sản phẩm:\n" + productList);
}

// 3. Hiển thị chi tiết sản phẩm theo ID
function showProductById() {
  let id = parseInt(prompt("Nhập ID sản phẩm cần xem chi tiết:"));
  let product = products.find((p) => p.id === id);

  if (!product) {
    alert("Không tìm thấy sản phẩm.");
    return;
  }

  alert(
    `ID: ${product.id}\nTên: ${product.name}\nGiá: ${product.price}\nDanh mục: ${product.category}\nSố lượng: ${product.quantity}`
  );
}

// 4. Cập nhật sản phẩm theo ID
function updateProduct() {
  let id = parseInt(prompt("Nhập ID sản phẩm cần cập nhật:"));
  let product = products.find((p) => p.id === id);

  if (!product) {
    alert("Không tìm thấy sản phẩm.");
    return;
  }

  product.name = prompt("Nhập tên mới:", product.name);
  product.price = parseFloat(prompt("Nhập giá mới:", product.price));
  product.category = prompt("Nhập danh mục mới:", product.category);
  product.quantity = parseInt(prompt("Nhập số lượng mới:", product.quantity));

  alert("Cập nhật sản phẩm thành công!");
}

// 5. Xóa sản phẩm theo ID
function deleteProduct() {
  let id = parseInt(prompt("Nhập ID sản phẩm cần xóa:"));
  let index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    alert("Không tìm thấy sản phẩm.");
    return;
  }

  products.splice(index, 1);
  alert("Xóa sản phẩm thành công!");
}

// 6. Lọc sản phẩm theo khoảng giá
function filterByPriceRange() {
  let minPrice = parseFloat(prompt("Nhập giá tối thiểu:"));
  let maxPrice = parseFloat(prompt("Nhập giá tối đa:"));

  let filteredProducts = products.filter(
    (p) => p.price >= minPrice && p.price <= maxPrice
  );

  if (filteredProducts.length === 0) {
    alert("Không tìm thấy sản phẩm nào trong khoảng giá này.");
    return;
  }

  let result = filteredProducts
    .map(
      (p) =>
        `ID: ${p.id}, Tên: ${p.name}, Giá: ${p.price}, Danh mục: ${p.category}, Số lượng: ${p.quantity}`
    )
    .join("\n\n");

  alert("Danh sách sản phẩm trong khoảng giá:\n" + result);
}

// Menu lựa chọn
let menu = `
------ MENU ------
1. Thêm sản phẩm vào danh sách.
2. Hiển thị tất cả sản phẩm.
3. Hiển thị chi tiết sản phẩm theo ID.
4. Cập nhật thông tin sản phẩm theo ID.
5. Xóa sản phẩm theo ID.
6. Lọc sản phẩm theo khoảng giá.
7. Thoát.

Lựa chọn của bạn là gì?
`;

while (running) {
  choice = parseInt(prompt(menu));
  switch (choice) {
    case 1:
      addProduct();
      break;
    case 2:
      displayProducts();
      break;
    case 3:
      showProductById();
      break;
    case 4:
      updateProduct();
      break;
    case 5:
      deleteProduct();
      break;
    case 6:
      filterByPriceRange();
      break;
    case 7:
      running = false;
      alert("Chương trình đã thoát.");
      break;
    default:
      alert("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
  }
}
