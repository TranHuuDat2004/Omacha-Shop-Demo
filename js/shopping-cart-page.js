document.addEventListener('DOMContentLoaded', function() {
    
    // =================================================================
    // CÁC HÀM TIỆN ÍCH (Lấy từ cart.js để tránh lặp code, nhưng để ở đây cho đơn giản)
    // =================================================================
    function getCart() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }

    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
        // Gọi lại các hàm render để cập nhật toàn bộ trang
        renderFullCartPage();
        updateHeaderIcons(); // Cập nhật icon trên header
    }

    // =================================================================
    // CÁC HÀM THAO TÁC VỚI GIỎ HÀNG (Cụ thể cho trang này)
    // =================================================================
    function updateQuantity(productId, newQuantity) {
        const cart = getCart();
        const productIndex = cart.findIndex(item => item.productId === productId);

        if (productIndex > -1) {
            if (newQuantity > 0) {
                cart[productIndex].quantity = newQuantity;
            } else {
                // Nếu số lượng là 0 hoặc ít hơn, xóa sản phẩm
                cart.splice(productIndex, 1);
            }
        }
        saveCart(cart);
    }

    function removeFromCart(productId) {
        let cart = getCart();
        cart = cart.filter(item => item.productId !== productId);
        saveCart(cart);
    }

    // =================================================================
    // HÀM HIỂN THỊ CHÍNH
    // =================================================================
    function renderFullCartPage() {
        const cart = getCart();
        const tableBody = document.querySelector('.table-shopping-cart tbody');
        const cartTotalsContainer = document.querySelector('.bor10.p-lr-40'); // Container của Cart Totals

        if (!tableBody || !cartTotalsContainer) {
            console.error("Cart container or totals container not found on this page.");
            return;
        }

        // Xóa nội dung bảng cũ
        tableBody.innerHTML = '';
        // Thêm lại hàng tiêu đề
        tableBody.innerHTML = `
            <tr class="table_head">
                <th class="column-1">Product</th>
                <th class="column-2"></th>
                <th class="column-3">Price</th>
                <th class="column-4">Quantity</th>
                <th class="column-5">Total</th>
            </tr>
        `;

        if (cart.length === 0) {
            const emptyRow = `<tr><td colspan="5" style="text-align: center; padding: 40px;">Your shopping cart is empty.</td></tr>`;
            tableBody.innerHTML += emptyRow;
            // Cập nhật tổng tiền
            updateCartTotals(0);
            return;
        }
        
        let subtotal = 0;
        cart.forEach(cartItem => {
            const productInfo = product.find(p => p.p_id === cartItem.productId);
            if (productInfo) {
                const itemTotal = productInfo.p_price * cartItem.quantity;
                subtotal += itemTotal;
                const mainImage = productInfo.p_image[0] || 'placeholder.png';

                const rowHTML = `
                    <tr class="table_row" data-product-id="${productInfo.p_id}">
                        <td class="column-1">
                            <div class="how-itemcart1 remove-item-btn" title="Remove item">
                                <img src="images/${mainImage}" alt="${productInfo.p_name}">
                            </div>
                        </td>
                        <td class="column-2">${productInfo.p_name}</td>
                        <td class="column-3">$${productInfo.p_price.toFixed(2)}</td>
                        <td class="column-4">
                            <div class="wrap-num-product flex-w m-l-auto m-r-0">
                                <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                    <i class="fs-16 zmdi zmdi-minus"></i>
                                </div>
                                <input class="mtext-104 cl3 txt-center num-product" type="number" name="num-product" value="${cartItem.quantity}" min="1">
                                <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                    <i class="fs-16 zmdi zmdi-plus"></i>
                                </div>
                            </div>
                        </td>
                        <td class="column-5">$${itemTotal.toFixed(2)}</td>
                    </tr>
                `;
                tableBody.innerHTML += rowHTML;
            }
        });

        // Cập nhật tổng tiền
        updateCartTotals(subtotal);
    }

    function updateCartTotals(subtotal) {
        const subtotalElement = document.querySelector('.bor10 .flex-w.flex-t.bor12 .size-209 span');
        const totalElement = document.querySelector('.bor10 .flex-w.flex-t.p-t-27 .size-209 span');
        
        if(subtotalElement) subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        if(totalElement) totalElement.textContent = `$${subtotal.toFixed(2)}`; // Giả sử không có phí ship
    }

    // =================================================================
    // LẮNG NGHE SỰ KIỆN
    // =================================================================
    const cartTable = document.querySelector('.table-shopping-cart');
    if (cartTable) {
        cartTable.addEventListener('click', function(event) {
            const target = event.target;
            const row = target.closest('.table_row');
            if (!row) return;

            const productId = parseInt(row.dataset.productId);
            
            // Xóa sản phẩm
            if (target.closest('.remove-item-btn')) {
                if (confirm('Are you sure you want to remove this item?')) {
                    removeFromCart(productId);
                }
            }

            // Giảm số lượng
            if (target.closest('.btn-num-product-down')) {
                const quantityInput = row.querySelector('.num-product');
                let currentQuantity = parseInt(quantityInput.value);
                if (currentQuantity > 1) {
                    updateQuantity(productId, currentQuantity - 1);
                }
            }

            // Tăng số lượng
            if (target.closest('.btn-num-product-up')) {
                const quantityInput = row.querySelector('.num-product');
                let currentQuantity = parseInt(quantityInput.value);
                updateQuantity(productId, currentQuantity + 1);
            }
        });
        
        // Cập nhật khi người dùng tự nhập số lượng
        cartTable.addEventListener('change', function(event){
            const target = event.target;
            if(target.classList.contains('num-product')){
                const row = target.closest('.table_row');
                const productId = parseInt(row.dataset.productId);
                let newQuantity = parseInt(target.value);
                if(isNaN(newQuantity) || newQuantity < 1) {
                    newQuantity = 1;
                    target.value = 1;
                }
                updateQuantity(productId, newQuantity);
            }
        });
    }


    // --- KHỞI TẠO ---
    renderFullCartPage();
});