document.addEventListener('DOMContentLoaded', function() {
    
    // --- Lấy các phần tử DOM ---
    const orderListContainer = document.getElementById('order-summary-list');
    const orderTotalElement = document.getElementById('order-total-price');
    const placeOrderBtn = document.getElementById('place-order-btn');
    const billingForm = document.getElementById('billing-form');

    // --- Lấy dữ liệu từ localStorage ---
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    // `product` và `login` là các biến toàn cục từ data.js
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || null;


    // --- HÀM RENDER TÓM TẮT ĐƠN HÀNG ---
    function renderOrderSummary() {
        if (!orderListContainer || !orderTotalElement) return;

        if (cart.length === 0) {
            orderListContainer.innerHTML = '<p>Your cart is empty.</p>';
            placeOrderBtn.disabled = true;
            return;
        }

        let total = 0;
        let summaryHTML = '';
        cart.forEach(cartItem => {
            const productInfo = product.find(p => p.p_id === cartItem.productId);
            if (productInfo) {
                const subtotal = productInfo.p_price * cartItem.quantity;
                total += subtotal;
                summaryHTML += `
                    <div class="order-summary-item">
                        <span class="stext-108 cl6">${productInfo.p_name}  <strong>× ${cartItem.quantity}</strong></span>
                        <span class="stext-108 cl6">$${subtotal.toFixed(2)}</span>
                    </div>`;
            }
        });
        orderListContainer.innerHTML = summaryHTML;
        orderTotalElement.textContent = `$${total.toFixed(2)}`;
    }

    // --- HÀM XUẤT HÓA ĐƠN PDF BẰNG JAVASCRIPT ---
    function generateInvoicePDF() {
        // Khởi tạo đối tượng jsPDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Định dạng ngày giờ
        const now = new Date();
        const date = now.toLocaleDateString('en-GB'); // dd/mm/yyyy
        const time = now.toLocaleTimeString('en-US');

        // --- Thông tin cửa hàng và hóa đơn ---
        doc.setFontSize(22);
        doc.text("OMACHA TOY STORE", 105, 20, { align: 'center' });
        doc.setFontSize(12);
        doc.text("17 Nguyen Huu Tho Street", 105, 30, { align: 'center' });
        doc.text("Phone: 0901234567", 105, 37, { align: 'center' });
        
        doc.setFontSize(18);
        doc.text("Invoice", 105, 55, { align: 'center' });

        doc.setFontSize(10);
        doc.text(`Date: ${date}`, 20, 70);
        doc.text(`Time: ${time}`, 80, 70);
        doc.text("Employee: Nguyen Thuy Khanh", 20, 77);
        doc.text(`Customer: ${loggedInUser ? loggedInUser.userName : 'Guest'}`, 20, 84);

        // --- Tạo bảng sản phẩm ---
        const head = [['#', 'Product Name', 'Price', 'Quantity', 'Total']];
        const body = [];
        let subtotal = 0;

        cart.forEach((cartItem, index) => {
            const productInfo = product.find(p => p.p_id === cartItem.productId);
            if (productInfo) {
                const itemTotal = productInfo.p_price * cartItem.quantity;
                subtotal += itemTotal;
                body.push([
                    index + 1,
                    productInfo.p_name,
                    `$${productInfo.p_price.toFixed(2)}`,
                    cartItem.quantity,
                    `$${itemTotal.toFixed(2)}`
                ]);
            }
        });

        doc.autoTable({
            head: head,
            body: body,
            startY: 95, // Vị trí bắt đầu của bảng
            theme: 'striped', // hoặc 'grid', 'plain'
            styles: { fontSize: 9 },
            headStyles: { fillColor: [244, 83, 138] } // Màu hồng #F4538A
        });

        // --- Thông tin tổng kết ---
        let finalY = doc.lastAutoTable.finalY + 15; // Lấy vị trí cuối cùng của bảng
        doc.setFontSize(10);
        doc.text(`Total Quantity of Items: ${cart.reduce((sum, item) => sum + item.quantity, 0)}`, 20, finalY);
        doc.text("Shipping: FreeShip", 20, finalY + 7);

        doc.text(`Subtotal: $${subtotal.toFixed(2)}`, 140, finalY);
        doc.text(`Discount: 0%`, 140, finalY + 7);
        doc.text(`Total: $${subtotal.toFixed(2)}`, 140, finalY + 14);


        // --- Lời cảm ơn ---
        doc.setFontSize(12);
        doc.setFont('helvetica', 'italic');
        doc.text("Thank you for your order!", 105, finalY + 30, { align: 'center' });

        // --- Lưu file PDF ---
        doc.save('invoice-omacha.pdf');
    }

    // --- LẮNG NGHE SỰ KIỆN CLICK ---
    if (placeOrderBtn) {
        placeOrderBtn.addEventListener('click', function(event) {
            event.preventDefault();

            if (billingForm.checkValidity()) {
                // 1. Xuất hóa đơn PDF
                generateInvoicePDF();
                
                // 2. Thông báo cho người dùng
                alert("Order placed successfully! Your invoice is being downloaded.");
                
                // 3. Xóa giỏ hàng
                localStorage.removeItem('cart');
                
                // 4. Cập nhật header và chuyển hướng
                updateHeaderIcons();
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000); // Chờ 1 giây để người dùng thấy thông báo

            } else {
                billingForm.reportValidity();
                alert("Please fill out all required billing details.");
            }
        });
    }

    // --- KHỞI TẠO ---
    renderOrderSummary();
});

// Đừng quên đảm bảo file header.js có hàm updateHeaderIcons() toàn cục
function updateHeaderIcons() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartIcon = document.querySelector('.js-show-cart');
    if (cartIcon) {
        cartIcon.setAttribute('data-notify', cartItemCount);
    }
}