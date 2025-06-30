function updateHeaderIcons() {
    // Lấy dữ liệu mới nhất từ localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
    const wishlistItemCount = wishlist.length;

    // Tìm các icon trên header
    const cartIcon = document.querySelector('.js-show-cart');
    const wishlistIcon = document.querySelector('.icon-header-noti[data-notify]'); // Cần một selector tốt hơn nếu có nhiều icon

    // Cập nhật thuộc tính data-notify
    if (cartIcon) {
        cartIcon.setAttribute('data-notify', cartItemCount);
    }
    if (wishlistIcon) {
        // Giả sử icon wishlist là cái thứ hai
        document.querySelectorAll('.icon-header-noti')[1].setAttribute('data-notify', wishlistItemCount);
    }
    console.log('Header icons updated!');
}


document.addEventListener('DOMContentLoaded', function() {

    // --- STEP 1: GET STATE DATA ---
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || null;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistItemCount = wishlist.length;

    // --- STEP 2: BUILD DYNAMIC HTML PARTS (VERSION ĐÃ CẬP NHẬT) ---
    let loginStatusHTML = '';
    if (loggedInUser) {
        // Giao diện KHI ĐÃ ĐĂNG NHẬP
        loginStatusHTML = `
            <div class="header-login-status" style="display: flex; align-items: center;">
                <span style="color: #49243E;">Welcome, <b>${loggedInUser.userName}</b></span>
                
                <!-- Dải phân cách với khoảng trống hai bên -->
                <span style="margin: 0 12px; color: #dddddd;">|</span> 
                
                <a href="#" id="logout-button" style="color: #F4538A; font-weight: bold; text-decoration: none;">Logout</a>
            </div>`;
    } else {
        // Giao diện KHI CHƯA ĐĂNG NHẬP
        loginStatusHTML = `
            <div class="header-login-status" style="display: flex; align-items: center; font-weight: bold; color: #49243E;">
                <a href="login.html" style="color: inherit; text-decoration: none;">Login</a>
                
                <!-- Dải phân cách với khoảng trống hai bên -->
                <span style="margin: 0 10px; color: #dddddd;">|</span> 
                
                <a href="register.html" style="color: inherit; text-decoration: none;">Register</a>
            </div>`;
    }

    // --- STEP 3: CONSTRUCT THE ENTIRE HEADER HTML (Không thay đổi) ---
    const headerHTML = `
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
    </header>;`

    // --- STEP 4 & 5 & 6 (Không thay đổi) ---
    const placeholder = document.getElementById('header-placeholder');
    if (placeholder) {
        placeholder.outerHTML = headerHTML;
    }

    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('loggedInUser');
            alert('You have successfully logged out!');
            window.location.reload(); 
        });
    }

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const menuLinks = document.querySelectorAll('.main-menu a');
    menuLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.parentElement.classList.add('active-menu');
        }
    });

    const topBar = document.querySelector('.top-bar');
    const menuWrap = document.querySelector('.wrap-menu-desktop');
    if (topBar && menuWrap) {
        const headerTopHeight = topBar.offsetHeight;
        window.addEventListener('scroll', function() {
            if (window.scrollY > headerTopHeight) {
                document.body.classList.add('fix-menu-desktop');
            } else {
                document.body.classList.remove('fix-menu-desktop');
            }
        });
    }
});