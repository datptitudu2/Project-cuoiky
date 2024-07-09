// lưu ý cái này là thông tin tài khoản//
document.addEventListener('DOMContentLoaded', function() {
    const storedUserInfo = localStorage.getItem('userInfo');
    const userInfo = storedUserInfo ? JSON.parse(storedUserInfo) : null;
    const userInfoDiv = document.getElementById('userInfo');

    if (userInfo && userInfo.ten) {
        // Nếu đã đăng nhập
        userInfoDiv.innerHTML = `<p style="padding-left:40px">Xin chào, ${userInfo.ten}</p><a href="#" onclick="logout()">Đăng xuất</a>`;
    } else {
        // Nếu chưa đăng nhập
        userInfoDiv.innerHTML = `
            <a href="http://127.0.0.1:5500/js/login.html">Đăng nhập</a>
            <a href="http://127.0.0.1:5500/js/dangky.html">Đăng ký</a>
        `;
    }
});

function logout() {
    localStorage.removeItem('userInfo'); // Xóa thông tin người dùng khi đăng xuất
    window.location.href = 'http://127.0.0.1:5500/js/login.html'; // Chuyển hướng về trang đăng nhập
}









document.getElementById('zaloButton').addEventListener('click', function() {
  window.location.href = 'https://zalo.me/g/rrjgou055'; })
  document.getElementById('messengerButton').addEventListener('click', function() {
      window.location.href = 'https://www.facebook.com/dattkdz/about'; })

      document.getElementById('search-icon').addEventListener('click', function() {
        var searchContainer = document.getElementById('searchContainer');
        searchContainer.classList.toggle('active');
    });
 if(!localStorage.getItem('sanpham')) {
    const sanpham = ['Giày Air Jordan 6 Rings ‘Tropical Twist’ (GS) 323419-115',
       'Giày (WMNS) Air Jordan 6 Retro GORE-TEX ‘Brown Kelp’ FD1643-300',
        'Giày Converse Run Star Hi ‘Black’ 166800C', 
        'Giày Nike Dunk Low EMB ‘NBA 75th Anniversary Chicago’ DD3363-100',
      'Giày nam Nike Air Force 1 ID ‘Gucci’ CT7875-994',
      'Giày nam Nike Air Force 1 Low ‘Under Construction – White’ BQ4421-100',
    'Giày Nike Air Jordan 1 Retro High OG ‘Heritage’ 555088-161',
    'Giày adidas Alphabounce Ek ‘Triple Black’ GY5403',
    'Giày adidas Alphabounce Ek ‘Black/Orange’ GW2267',
    'Giày adidas Samba Og ‘Core Black’ IH3119',
    'Giày adidas Forum Exhibit Low Off White Shadow Navy GX4121',
    'Giày adidas Forum Low ‘Black White’ HQ1494',
    'Giày adidas Forum Exhibit Low ‘Chalky Brown’ GW6347',
    'Giày Home Alone x adidas Forum Low ‘White Red’ GZ4378',
    'Giày adidas Forum Low ‘Royal Blue’ FY7974',
    'Giày adidas Forum Exhibit Low 2.0 ‘Kream’ ID1849',
    'Giày adidas Forum Exhibit Low ‘Sky Tint’ GW6348',
    'Giày adidas Forum Low Trắng Đen FY7757',
    'Giày adidas Forum Low Off White Magic Beige HQ1492',
    'Giày adidas Forum Low ‘White Iridescent’ GX5061'];
    localStorage.setItem('sanpham', JSON.stringify(sanpham));
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const tim_kiem_input = document.getElementById('search');
    const tim_kiem_icon = document.getElementById('search-icon');
    const ket_qua_container = document.getElementById('results');
  
    tim_kiem_icon.addEventListener('click', function() {
      // Hiển thị hoặc ẩn thanh tìm kiếm
      if (tim_kiem_input.style.display === 'none' || tim_kiem_input.style.display === '') {
        tim_kiem_input.style.display = 'block';
        tim_kiem_input.focus();
      } else {
        tim_kiem_input.style.display = 'none';
        ket_qua_container.style.display = 'none';
      }
    });
  
    tim_kiem_input.addEventListener('input', function() {
      const query = this.value.toLowerCase();
      const sanpham = JSON.parse(localStorage.getItem('sanpham'));
      const filteredSanpham = sanpham.filter(product => product.toLowerCase().includes(query));
  
      // Hiển thị kết quả tìm kiếm
      ket_qua_container.innerHTML = '';
      filteredSanpham.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('result-item');
        div.textContent = product;
        ket_qua_container.appendChild(div);
      });
  
      ket_qua_container.style.display = filteredSanpham.length > 0 ? 'block' : 'none';
  
      // Xử lý sự kiện click vào kết quả tìm kiếm
      const resultItems = document.querySelectorAll('.result-item');
      resultItems.forEach(item => {
        item.addEventListener('click', function() {
          const productName = this.textContent;
          const productURL = generateProductURL(productName); // Chuyển hướng đến trang web của sản phẩm
          window.location.href = productURL;
          ket_qua_container.style.display = 'none';
        });
      });
    });
  
    // Đóng kết quả tìm kiếm khi click bên ngoài
    document.addEventListener('click', function(event) {
      if (!tim_kiem_icon.contains(event.target) && !ket_qua_container.contains(event.target) && !tim_kiem_input.contains(event.target)) {
        ket_qua_container.style.display = 'none';
        tim_kiem_input.style.display = 'none';
      }
    });
  
    // Hàm sinh URL dựa vào tên sản phẩm
    function generateProductURL(productName) {
     
      switch (productName) {
        case 'Giày Air Jordan 6 Rings ‘Tropical Twist’ (GS) 323419-115':
          return 'http://127.0.0.1:5500/js/web001.html';
        case 'Giày (WMNS) Air Jordan 6 Retro GORE-TEX ‘Brown Kelp’ FD1643-300':
          return 'http://127.0.0.1:5500/js/web02.html';
        
        case 'Giày Nike Dunk Low EMB ‘NBA 75th Anniversary Chicago’ DD3363-100':
            return 'http://127.0.0.1:5500/js/web3.html';
          case 'Giày Converse Run Star Hi ‘Black’ 166800C':
            return 'http://127.0.0.1:5500/js/web4.html';
          
          case 'Giày nam Nike Air Force 1 ID ‘Gucci’ CT7875-994':
            return 'http://127.0.0.1:5500/js/web5.html';
          
            case 'Giày nam Nike Air Force 1 Low ‘Under Construction – White’ BQ4421-100':
            return 'http://127.0.0.1:5500/js/web6.html';
         
         
          case 'Giày Nike Air Jordan 1 Retro High OG ‘Heritage’ 555088-161':
            return 'http://127.0.0.1:5500/js/web7.html';
          case 'Giày adidas Alphabounce Ek ‘Triple Black’ GY5403':
            return 'http://127.0.0.1:5500/js/web8.html';
        
          case 'Giày adidas Alphabounce Ek ‘Black/Orange’ GW2267':
            return 'http://127.0.0.1:5500/js/web9.html';
            
            case 'Giàyadidas Samba Og ‘Core Black’ IH3119':
            return 'http://127.0.0.1:5500/js/web10.html';
            case 'Giày adidas Forum Exhibit Low Off White Shadow Navy GX4121':
            return 'http://127.0.0.1:5500/js/web11.html';
            
            case 'Giày adidas Forum Low ‘Black White’ HQ1494':
            return 'http://127.0.0.1:5500/js/web12.html';
            case 'Giày adidas Forum Exhibit Low ‘Chalky Brown’ GW6347':
            return 'http://127.0.0.1:5500/js/web13.html';
            case 'Giày Home Alone x adidas Forum Low ‘White Red’ GZ4378<':
            return 'http://127.0.0.1:5500/js/web14.html';
            case 'Giày adidas Forum Low ‘Royal Blue’ FY7974':
            return 'http://127.0.0.1:5500/js/web15.html';
            case 'Giày adidas Forum Exhibit Low 2.0 ‘Kream’ ID1849':
            return 'http://127.0.0.1:5500/js/web16.html';
            case 'Giày adidas Forum Exhibit Low ‘Sky Tint’ GW6348':
            return 'http://127.0.0.1:5500/js/web17.html';
            case 'Giày adidas Forum Low Trắng Đen FY7757':
            return 'http://127.0.0.1:5500/js/web18.html';
            case 'Giày adidas Forum Low Off White Magic Beige HQ1492':
            return 'http://127.0.0.1:5500/js/web19.html';
            case 'Giày adidas Forum Low ‘White Iridescent’ GX5061':
            return 'http://127.0.0.1:5500/js/web20.html';
            
        default:
          return 'http://127.0.0.1:5500/js/trangchu.html'; // URL mặc định hoặc xử lý khi không có sản phẩm nào phù hợp
      }
    }
  });
  

 
let chiSo = 0;
const tongSoAnh = 3; 

function hienThiAnhTiepTheo() {
    chiSo = (chiSo + 1) % tongSoAnh;
    const dichChuyen = -chiSo * 100;
    const anh = document.querySelector('.anh');
    anh.style.transform = `translateX(${dichChuyen}%)`;
}

hienThiAnhTiepTheo(); 

setInterval(hienThiAnhTiepTheo, 3000); 


document.getElementById("change1").addEventListener("click", function() {
// Hiển thị các ảnh giày mới
document.getElementById("more-shoes").style.display = "block";
// Ẩn nút "Xem tất cả"
this.style.display = "none";
});






// Lấy tất cả các phần tử ảnh giày
var shoes = document.querySelectorAll('.shoe img');


shoes.forEach(function(shoe) {
    shoe.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)'; // Phóng to ảnh khi hover
        this.style.transition = 'transform 0.3s ease'; // Thêm hiệu ứng chuyển động
    });

    shoe.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)'; 
    });
});



    