// header.js - Manages dynamic display and behavior of the header (Merged Notice Bar Version)

document.addEventListener('DOMContentLoaded', function() {

    // --- STEP 1: GET STATE DATA & CHECK IF NOTICE WAS CLOSED ---
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || null;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistItemCount = wishlist.length;
    
    // Kiểm tra xem người dùng đã đóng thông báo trong top-bar chưa
    const isNoticeClosed = localStorage.getItem('topBarNoticeClosed') === 'true';

    // --- STEP 2: BUILD DYNAMIC HTML PARTS ---
    let loginStatusHTML = '';
    if (loggedInUser) {
        loginStatusHTML = `<div class="data1"><span style="color: #49243E;">Welcome, <b>${loggedInUser.userName}</b></span></div><div class="data2"><a href="#" id="logout-button" style="color: #49243E;"><b>Logout</b></a></div>`;
    } else {
        loginStatusHTML = `<div class="data1"><a href="register.html" style="color: #49243E;"><b>Login /</b></a></div><div class="data2"><a href="register.html" style="color: #49243E;"><b>Register</b></a></div>`;
    }


    // --- STEP 3: CONSTRUCT THE ENTIRE HEADER HTML ---
    const headerHTML = `
    <header>
        <div class="container-menu-desktop">
            <div class="top-bar">
                <div class="content-topbar flex-sb-m h-full container">
                    <!-- Left Column: Contact -->
                    <div class="left-top-bar">
                        <div class="d-inline-flex align-items-center">
                            <p style="color: #F4538A"><i class="fa fa-envelope mr-2"></i><a href="mailto:omachacontact@gmail.com" style="color: #000; text-decoration: none;">omachacontact@gmail.com</a></p>
                            <p class="text-body px-3">|</p>
                            <p style="color: #F4538A"><i class="fa fa-phone-alt mr-2"></i><a href="tel:+19223600" style="color: #000; text-decoration: none;">+1922 4800</a></p>
                        </div>
                    </div>



                    <!-- Right Column: Social & Login -->
                    <div class="col-lg-6 text-center text-lg-right">
                        <div class="d-inline-flex align-items-center">
                            <a class="text-primary px-3" href="https://www.facebook.com/profile.php?id=61557250007525" target="_blank"><i style="color: #49243E;" class="fab fa-facebook-f"></i></a>
                            <a class="text-primary px-3" href="https://twitter.com/reis_adventures" target="_blank"><i style="color: #49243E;" class="fab fa-twitter"></i></a>
                            <a class="text-primary px-3" href="https://www.linkedin.com/in/reis-adventures-458144300/" target="_blank"><i style="color: #49243E;" class="fab fa-linkedin-in"></i></a>
                            <a class="text-primary px-3" href="https://www.instagram.com/reis_adventures2024?igsh=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr" target="_blank"><i style="color: #49243E;" class="fab fa-instagram"></i></a>
                            ${loginStatusHTML}
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
                            <li><a href="about.html">Pages</a>
                                <ul class="sub-menu">
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="#">Faq</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="wrap-icon-header flex-w flex-r-m">
                        <div class="icon-header-item cl13 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search"><i class="zmdi zmdi-search"></i></div>
                        <div class="icon-header-item cl13 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify="${cartItemCount}"><i class="zmdi zmdi-shopping-cart"></i></div>
                        <a href="#" class="dis-block icon-header-item cl13 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify="${wishlistItemCount}"><i class="zmdi zmdi-favorite-outline"></i></a>
                    </div>
                </nav>
            </div>
        </div>
    </header>`;

    // --- STEP 4: INJECT HEADER INTO THE PAGE ---
    const placeholder = document.getElementById('header-placeholder');
    if (placeholder) {
        placeholder.outerHTML = headerHTML;
    }

    // --- STEP 5: ATTACH EVENT LISTENERS AFTER HTML IS INJECTED ---
    
    // Attach listener for the close button
    const closeNoticeButton = document.querySelector('.top-bar-notice-close');
    if (closeNoticeButton) {
        closeNoticeButton.addEventListener('click', function() {
            // Hide the parent container
            this.parentElement.style.display = 'none';
            // Save the closed state to localStorage
            localStorage.setItem('topBarNoticeClosed', 'true');
        });
    }

    // Attach listener for logout button
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('loggedInUser');
            alert('You have successfully logged out!');
            window.location.reload();
        });
    }

    // Highlight active menu
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const menuLinks = document.querySelectorAll('.main-menu a');
    menuLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.parentElement.classList.add('active-menu');
        }
    });

    // --- STEP 6: STICKY HEADER LOGIC ---
    const topBar = document.querySelector('.top-bar');
    const menuWrap = document.querySelector('.wrap-menu-desktop');

    if (topBar && menuWrap) {
        const headerTopHeight = topBar.offsetHeight;
        let isSticky = false;

        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;

            if (scrollPosition > headerTopHeight && !isSticky) {
                isSticky = true;
                topBar.style.display = 'none';
                menuWrap.style.position = 'fixed';
                menuWrap.style.top = '0';
                menuWrap.style.width = '100%';
                menuWrap.style.backgroundColor = '#ffffff';
                menuWrap.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else if (scrollPosition <= headerTopHeight && isSticky) {
                isSticky = false;
                topBar.style.display = '';
                menuWrap.style.position = 'relative';
                menuWrap.style.top = 'auto';
                menuWrap.style.width = '';
                menuWrap.style.backgroundColor = '#FFEFEF';
                menuWrap.style.boxShadow = '';
            }
        });
    }
});