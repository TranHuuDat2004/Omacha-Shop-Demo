// js/cart.js - Quản lý TOÀN BỘ logic giỏ hàng (dữ liệu + giao diện + sự kiện)

document.addEventListener('DOMContentLoaded', function () {

    // =================================================================
    // CÁC HÀM QUẢN LÝ DỮ LIỆU
    // =================================================================
    function getCart() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }

    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCartUI();
    }

    // Thêm sản phẩm mẫu nếu giỏ hàng trống (chỉ chạy 1 lần)
    function initializeCart() {
        if (!localStorage.getItem('cart')) {
            console.log("Initializing cart with sample items.");
            const sampleItems = [
                { productId: 3, quantity: 1 },
                { productId: 1, quantity: 2 }
            ];
            localStorage.setItem('cart', JSON.stringify(sampleItems));
        }
    }


    // =================================================================
    // CÁC HÀM THAO TÁC VỚI GIỎ HÀNG
    // =================================================================
    window.addToCart = function (productId, quantity = 1) {
        const cart = getCart();
        const productIndex = cart.findIndex(item => item.productId === productId);
        if (productIndex > -1) {
            cart[productIndex].quantity += quantity;
        } else {
            cart.push({ productId, quantity });
        }
        saveCart(cart);
        // alert('Product added to cart!');
        $('.js-panel-cart').addClass('show-header-cart');
    }

    function removeFromCart(productId) {
        let cart = getCart();
        cart = cart.filter(item => item.productId !== productId);
        saveCart(cart);
    }


    // =================================================================
    // HÀM HIỂN THỊ GIỎ HÀNG (RENDER UI)
    // =================================================================
    function renderCartUI() {
        const cart = getCart();
        const cartContainer = document.querySelector('.header-cart-wrapitem');
        const cartTotalElement = document.querySelector('.header-cart-total');
        const cartNotifyIcon = document.querySelector('.js-show-cart');

        if (!cartContainer || !cartTotalElement || !cartNotifyIcon) return;

        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartNotifyIcon.setAttribute('data-notify', totalItems);

        if (cart.length === 0) {
            cartContainer.innerHTML = '<li class="header-cart-item p-t-10 p-b-10" style="text-align: center;">Your cart is empty.</li>';
            cartTotalElement.innerHTML = 'Total: $0.00';
            return;
        }

        let total = 0;
        let cartHTML = '';
        cart.forEach(cartItem => {
            const productInfo = product.find(p => p.p_id === cartItem.productId);
            if (productInfo) {
                total += productInfo.p_price * cartItem.quantity;
                const mainImage = productInfo.p_image[0] || 'placeholder.png';
                cartHTML += `
                    <li class="header-cart-item flex-w flex-t m-b-12">
						<div class="header-cart-item-img remove-from-cart-btn" data-product-id="${productInfo.p_id}" title="Remove this item">
							<img src="images/${mainImage}" alt="${productInfo.p_name}">
						</div>
						<div class="header-cart-item-txt p-t-8">
							<a href="product-detail.html?p_id=${productInfo.p_id}" class="header-cart-item-name m-b-18 hov-cl1 trans-04">${productInfo.p_name}</a>
							<span class="header-cart-item-info">${cartItem.quantity} x $${productInfo.p_price.toFixed(2)}</span>
						</div>
					</li>`;
            }
        });
        cartContainer.innerHTML = cartHTML;
        cartTotalElement.innerHTML = `Total: $${total.toFixed(2)}`;
    }


    // =================================================================
    // LẮNG NGHE SỰ KIỆN (PHIÊN BẢN MỚI, ĐÁNG TIN CẬY)
    // =================================================================

    // Sử dụng jQuery và Event Delegation để đảm bảo các sự kiện hoạt động
    // ngay cả trên các phần tử được tạo động bởi header.js
    const $body = $('body');

    // Sự kiện MỞ sidebar giỏ hàng
    $body.on('click', '.js-show-cart', function () {
        $('.js-panel-cart').addClass('show-header-cart');
    });

    // Sự kiện ĐÓNG sidebar giỏ hàng (khi click nút 'X')
    $body.on('click', '.js-hide-cart', function () {
        $('.js-panel-cart').removeClass('show-header-cart');
    });

    // Sự kiện ĐÓNG sidebar giỏ hàng (khi click vào lớp phủ màu đen)
    $body.on('click', '.s-full', function () {
        $('.js-panel-cart').removeClass('show-header-cart');
    });

    // Sự kiện XÓA một sản phẩm khỏi giỏ hàng
    $body.on('click', '.remove-from-cart-btn', function () {
        const productId = parseInt($(this).data('product-id'));
        if (productId && confirm('Are you sure you want to remove this item?')) {
            removeFromCart(productId);
        }
    });

    // =================================================================
    // KHỞI TẠO
    // =================================================================
    initializeCart();
    renderCartUI();
    // GỌI HÀM CẬP NHẬT HEADER
    updateHeaderIcons(); // <--- DÒNG QUAN TRỌNG
});