// cart.js - Quản lý toàn bộ logic giỏ hàng

// Đảm bảo script chỉ chạy khi trang đã tải xong
document.addEventListener('DOMContentLoaded', function() {

    // =================================================================
    // CÁC HÀM QUẢN LÝ DỮ LIỆU (localStorage)
    // =================================================================

    /**
     * Lấy dữ liệu giỏ hàng từ localStorage.
     * @returns {Array} Mảng các sản phẩm trong giỏ, ví dụ: [{ productId: 1, quantity: 2 }]
     */
    function getCart() {
        const cartData = localStorage.getItem('cart');
        return cartData ? JSON.parse(cartData) : [];
    }

    /**
     * Lưu dữ liệu giỏ hàng vào localStorage.
     * @param {Array} cart - Mảng giỏ hàng cần lưu.
     */
    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
        // Sau khi lưu, cập nhật lại giao diện
        renderCart();
    }


    // =================================================================
    // CÁC HÀM THAO TÁC VỚI GIỎ HÀNG
    // =================================================================

    /**
     * Thêm sản phẩm vào giỏ hàng.
     * @param {number} productId - ID của sản phẩm.
     * @param {number} quantity - Số lượng cần thêm.
     */
    window.addToCart = function(productId, quantity = 1) {
        const cart = getCart();
        const productIndex = cart.findIndex(item => item.productId === productId);

        if (productIndex > -1) {
            // Nếu sản phẩm đã có trong giỏ, tăng số lượng
            cart[productIndex].quantity += quantity;
        } else {
            // Nếu chưa có, thêm mới
            cart.push({ productId, quantity });
        }
        
        saveCart(cart);
        // Hiển thị thông báo hoặc mở giỏ hàng
        alert('Đã thêm sản phẩm vào giỏ hàng!');
        // Bạn có thể mở panel giỏ hàng bằng cách gọi hàm của template, ví dụ:
        // $('.js-panel-cart').addClass('show-header-cart'); 
    }

    /**
     * Xóa sản phẩm khỏi giỏ hàng.
     * @param {number} productId - ID của sản phẩm cần xóa.
     */
    function removeFromCart(productId) {
        let cart = getCart();
        cart = cart.filter(item => item.productId !== productId);
        saveCart(cart);
    }

    /**
     * Xóa toàn bộ giỏ hàng
     */
    function clearCart() {
        saveCart([]);
    }


    // =================================================================
    // HÀM HIỂN THỊ GIỎ HÀNG (RENDER UI)
    // =================================================================

    function renderCart() {
        const cart = getCart();
        const cartContainer = document.querySelector('.header-cart-wrapitem');
        const cartTotalElement = document.querySelector('.header-cart-total');

        if (!cartContainer || !cartTotalElement) {
            console.error("Không tìm thấy các thành phần của giỏ hàng trên trang.");
            return;
        }

        // Xóa nội dung cũ
        cartContainer.innerHTML = '';

        if (cart.length === 0) {
            cartContainer.innerHTML = '<li class="header-cart-item">Giỏ hàng của bạn trống.</li>';
            cartTotalElement.innerText = 'Total: $0.00';
            return;
        }

        let total = 0;
        cart.forEach(cartItem => {
            // Tìm thông tin đầy đủ của sản phẩm từ database
            const product = database.product.find(p => p.p_id === cartItem.productId);

            if (product) {
                const subtotal = product.p_price * cartItem.quantity;
                total += subtotal;

                // Lấy ảnh đầu tiên của sản phẩm
                const mainImage = product.p_image[0] || 'placeholder.png';

                const cartItemHTML = `
                    <li class="header-cart-item flex-w flex-t m-b-12">
						<div class="header-cart-item-img" data-product-id="${product.p_id}">
                            <i class="fas fa-times-circle remove-item-icon"></i>
							<img src="images/${mainImage}" alt="${product.p_name}">
						</div>

						<div class="header-cart-item-txt p-t-8">
							<a href="product-detail.html?id=${product.p_id}" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
								${product.p_name}
							</a>

							<span class="header-cart-item-info">
								${cartItem.quantity} x $${product.p_price.toFixed(2)}
							</span>
						</div>
					</li>
                `;
                cartContainer.innerHTML += cartItemHTML;
            }
        });
        
        // Cập nhật tổng tiền
        cartTotalElement.innerText = `Total: $${total.toFixed(2)}`;
    }

    
    // =================================================================
    // LẮNG NGHE SỰ KIỆN
    // =================================================================

    // Gọi hàm render lần đầu khi trang tải xong
    renderCart();

    // Lắng nghe sự kiện click trên toàn bộ giỏ hàng để xử lý nút xóa
    const cartContent = document.querySelector('.header-cart-content');
    if (cartContent) {
        cartContent.addEventListener('click', function(event) {
            // Kiểm tra xem phần tử được click có phải là nút xóa không
            if (event.target.classList.contains('remove-item-icon')) {
                // Lấy ID sản phẩm từ `data-product-id` của thẻ cha
                const productId = parseInt(event.target.parentElement.dataset.productId);
                if (productId) {
                    if (confirm('Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng?')) {
                        removeFromCart(productId);
                    }
                }
            }
        });
    }

});