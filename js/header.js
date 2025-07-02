// js/header.js - Quản lý toàn bộ Header, Hamburger Menu và Sidebar Giỏ hàng

/**
 * Hàm toàn cục để cập nhật các chỉ số (số lượng) trên icon của header.
 * Có thể được gọi từ các file khác như cart.js.
 */
function updateHeaderIcons() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
    const wishlistItemCount = wishlist.length;

    // Cập nhật cho cả desktop và mobile
    document.querySelectorAll('.js-show-cart').forEach(icon => {
        icon.setAttribute('data-notify', cartItemCount);
    });

    // Tìm icon wishlist một cách an toàn hơn
    document.querySelectorAll('a.icon-header-noti').forEach(iconLink => {
        if (iconLink.querySelector('.zmdi-favorite-outline')) {
            iconLink.setAttribute('data-notify', wishlistItemCount);
        }
    });

    console.log('Header icons updated!');
}

/**
 * Hàm chính để xây dựng và chèn header và sidebar cart vào trang.
 */
function renderHeaderAndSidebar() {
    // Lấy dữ liệu cần thiết
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || null;
    const cartItemCount = (JSON.parse(localStorage.getItem('cart')) || []).reduce((total, item) => total + item.quantity, 0);
    const wishlistItemCount = (JSON.parse(localStorage.getItem('wishlist')) || []).length;

    // Tạo HTML cho phần trạng thái đăng nhập
    let loginStatusHTML = '';
    if (loggedInUser) {
        loginStatusHTML = `
            <div class="header-login-status" style="display: flex; align-items: center;">
                <span style="color: #49243E;">Welcome, <b>${loggedInUser.userName}</b></span>
                <span style="margin: 0 12px; color: #dddddd;">|</span> 
                <a href="#" id="logout-button" style="color: #F4538A; font-weight: bold; text-decoration: none;">Logout</a>
            </div>`;
    } else {
        loginStatusHTML = `
            <div class="header-login-status" style="display: flex; align-items: center; font-weight: bold; color: #49243E;">
                <a href="login.html" style="color: inherit; text-decoration: none;">Login</a>
                <span style="margin: 0 10px; color: #dddddd;">|</span> 
                <a href="register.html" style="color: inherit; text-decoration: none;">Register</a>
            </div>`;
    }

    // Tạo chuỗi HTML hoàn chỉnh
    const headerAndCartHTML = `
        <header>
        <div class="container-menu-desktop">
            <div class="top-bar">
                <div class="content-topbar flex-sb-m h-full container">
                    <div class="left-top-bar">
                        <div class="d-inline-flex align-items-center">
                            <p style="color: #F4538A"><i class="fa fa-envelope mr-2"></i><a href="mailto:omachacontact@gmail.com" style="color: #000; text-decoration: none;">omachacontact@gmail.com</a></p>
                            <p class="text-body px-3">|</p>
                            <p style="color: #F4538A"><i class="fa fa-phone-alt mr-2"></i><a href="tel:+19223600" style="color: #000; text-decoration: none;">+1922 4800</a></p>
                        </div>
                    </div>
                    <div class="col-lg-6 text-center text-lg-right">
                        <div class="d-inline-flex align-items-center">
                            <a class="text-primary px-3" href="https://www.facebook.com/profile.php?id=61557250007525" target="_blank"><i style="color: #49243E;" class="fab fa-facebook-f"></i></a>
                            <a class="text-primary px-3" href="https://twitter.com/reis_adventures" target="_blank"><i style="color: #49243E;" class="fab fa-twitter"></i></a>
                            <a class="text-primary px-3" href="https://www.linkedin.com/in/reis-adventures-458144300/" target="_blank"><i style="color: #49243E;" class="fab fa-linkedin-in"></i></a>
                            <a class="text-primary px-3" href="https://www.instagram.com/reis_adventures2024?igsh=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr" target="_blank"><i style="color: #49243E;" class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="wrap-menu-desktop" style="position: relative; top: auto; background-color: #FFEFEF;">
                <nav class="limiter-menu-desktop container" style="background-color: transparent !important;">
                    <a href="index.html" class="navbar-brand"><h1 class="m-0 text-primary1 mt-3 "><span class="text-dark1"><img class="Imagealignment" src="images/icon.png">Omacha</h1></a>
                    <div class="menu-desktop">
                        <ul class="main-menu">
                            <li><a href="index.html">Home</a></li>
                            <li class="label1" data-label1="hot"><a href="product.html">Product</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="about.html">About Us</a></li>
                        </ul>
                    </div>
                    <div class="wrap-icon-header flex-w flex-r-m">
                        <div class="icon-header-item cl13 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search"><i class="zmdi zmdi-search"></i></div>
                        <div class="icon-header-item cl13 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify="${cartItemCount}"><i class="zmdi zmdi-shopping-cart"></i></div>
                        <a href="#" class="dis-block icon-header-item cl13 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify="${wishlistItemCount}"><i class="zmdi zmdi-favorite-outline"></i></a>
                        <div style="padding-left: 20px;">
                           ${loginStatusHTML}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <!-- ... (Header Mobile) ... -->
            <div class="wrap-header-mobile"><div class="logo-mobile"><a href="index.html"><img src="images/icon.png" alt="OMACHA"></a></div><div class="wrap-icon-header flex-w flex-r-m m-r-15"><div class="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search"><i class="zmdi zmdi-search"></i></div><div class="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify="${cartItemCount}"><i class="zmdi zmdi-shopping-cart"></i></div><a href="wishlist.html" class="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti" data-notify="${wishlistItemCount}"><i class="zmdi zmdi-favorite-outline"></i></a></div><div class="btn-show-menu-mobile hamburger hamburger--squeeze"><span class="hamburger-box"><span class="hamburger-inner"></span></span></div></div>
            <!-- Menu Mobile -->
            <div class="menu-mobile"><ul class="main-menu-m"><li><a href="index.html">Home</a></li><li><a href="product.html">Product</a></li><li><a href="blog.html">Blog</a></li><li><a href="contact.html">Contact</a></li><li><a href="about.html">About Us</a></li></ul><div class="login-status-mobile" style="padding: 15px; border-top: 1px solid #e6e6e6; margin-top: 15px; text-align: center;"></div></div>
        </header>
       
    `;

    // Chèn HTML vào trang
    const placeholder = document.getElementById('header-placeholder');
    if (placeholder) {
        placeholder.insertAdjacentHTML('beforebegin', headerAndCartHTML);
        placeholder.remove();
    }
}

/**
 * Hàm này chuyên để gắn các sự kiện cho header SAU KHI nó đã được render.
 */
function attachHeaderEvents() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || null;

    // Tạo HTML cho phần login trên mobile
    const mobileLoginContainer = document.querySelector('.login-status-mobile');
    if (mobileLoginContainer) {
        if (loggedInUser) {
            mobileLoginContainer.innerHTML = `<div style="margin-bottom: 10px;">Welcome, <b>${loggedInUser.userName}</b></div><a href="#" id="logout-button-mobile" class="flex-c-m stext-101 cl0 size-108 bg3 bor1 hov-btn3 p-lr-15 trans-04">Logout</a>`;
        } else {
            mobileLoginContainer.innerHTML = `<a href="login.html" class="flex-c-m stext-101 cl0 size-108 bg3 bor1 hov-btn3 p-lr-15 trans-04">Login / Register</a>`;
        }
    }

    // Hàm xử lý logout chung
    function handleLogout(e) {
        e.preventDefault();
        if (confirm("Are you sure you want to log out?")) {
            localStorage.removeItem('loggedInUser');
            alert('You have successfully logged out!');
            window.location.reload();
        }
    }

    // Gắn sự kiện cho các nút logout
    // Dùng jQuery và event delegation để đảm bảo hoạt động
    $('body').on('click', '#logout-button, #logout-button-mobile', handleLogout);

    // Gắn sự kiện cho nút Hamburger Menu
    $('body').on('click', '.btn-show-menu-mobile', function () {
        $(this).toggleClass('is-active');
        $('.menu-mobile').slideToggle(300);
    });

    // Active menu
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    $('.main-menu a').each(function () {
        if ($(this).attr('href') === currentPage) {
            $(this).parent().addClass('active-menu');
        }
    });
}

// --- THỰC THI ---
document.addEventListener('DOMContentLoaded', function () {
    renderHeaderAndSidebar(); // 1. Vẽ khung HTML
    attachHeaderEvents();     // 2. Gắn sự kiện cho các nút
    updateHeaderIcons();      // 3. Cập nhật số lượng ban đầu
});