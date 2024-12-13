
document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('mouseenter', () => showButtons(product));
    product.addEventListener('mouseleave', () => hideButtons(product));
});

function showButtons(product) {
    const buttons = product.querySelector('.product-buttons');
    buttons.style.display = 'block';
}

function hideButtons(product) {
    const buttons = product.querySelector('.product-buttons');
    buttons.style.display = 'none';
}
function viewDetails(img, name, price,quantity) {
    if (sessionStorage.getItem('detail') !== null) {
        // Nếu tồn tại, xóa item đó
        sessionStorage.removeItem('detail');
      }else{
        window.location.href = "Detail.html";
    var imgEle = document.getElementById(img);
    var nameEle = document.getElementById(name);
    var priceEle = document.getElementById(price);
    var quantityEle = document.getElementById(quantity);

    var img = imgEle.src;
    var name = nameEle.innerText;
    var price = priceEle.innerText;
    var quantity = quantityEle.innerText;

    var detail = JSON.parse(sessionStorage.getItem('detail')) || [];
    detail.push({ img, name, price,quantity });
    sessionStorage.setItem('detail', JSON.stringify(detail));
      }
    
}

function addToCart(img, name, price,quantity) {
    var imgElement = document.getElementById(img);
    var nameElement = document.getElementById(name);
    var priceElement = document.getElementById(price);
    var quantity = document.getElementById(quantity);

    var img = imgElement.src;
    var name = nameElement.innerText;
    var price = priceElement.innerText;
    var quantity = quantity.innerText;

    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ img, name, price,quantity });
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Kiểm tra trạng thái đăng nhập từ localStorage
const isLoggedIn = localStorage.getItem('isLoggedIn');

// Nếu đã đăng nhập, thay đổi nội dung thành biểu tượng người
if (isLoggedIn === 'true') {
    // document.getElementById('dangNhapLink').innerHTML = '<i class="fas fa-user" onclick="iconClick(event)"></i> <a onclick="iconClick(event)">Đăng xuất</a>';
}


function iconClick(event){
    event.preventDefault();
    // window.location.href = 'DangNhap.html';
    alert("Đã đăng xuất!");
    document.getElementById('dangNhapLink').innerHTML='<div class="DangNhap" id="dangNhapLink"> <a href="DangNhap.html">Đăng nhập</a> <a href="#">|</a> <a href="DangKy.html">Đăng ký</a> </div>';
    isLoggedIn=false;
}