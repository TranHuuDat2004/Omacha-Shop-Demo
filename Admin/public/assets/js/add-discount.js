document.addEventListener('DOMContentLoaded', function() {
    
    const addDiscountForm = document.getElementById('add-discount-form');

    if (addDiscountForm) {
        addDiscountForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // --- LẤY DỮ LIỆU TỪ FORM ---
            const discountName = document.getElementById('discount-name').value.trim();
            const discountAmount = parseInt(document.getElementById('discount-amount').value);
            const startDate = document.getElementById('discount-start-date').value;
            const endDate = document.getElementById('discount-end-date').value;
            const discountDescription = document.getElementById('discount-description').value.trim();

            // --- KIỂM TRA DỮ LIỆU ---
            if (new Date(endDate) < new Date(startDate)) {
                alert("End date cannot be earlier than start date.");
                return;
            }

            // --- TẠO ĐỐI TƯỢNG GIẢM GIÁ MỚI ---
            const newDiscountId = Math.max(...discount.map(d => d.d_id)) + 1;

            const newDiscount = {
                d_id: newDiscountId,
                d_name: discountName,
                d_amount: discountAmount,
                d_description: discountDescription,
                d_start_date: startDate,
                d_end_date: endDate
            };

            // --- XỬ LÝ LOGIC (DEMO) ---
            // In ra console để kiểm tra
            console.log("New Discount Created (Demo):", newDiscount);

            // Thêm vào mảng `discount` trong bộ nhớ (để demo)
            // Lưu ý: Thay đổi này sẽ mất khi tải lại trang
            discount.push(newDiscount);
            
            // Thông báo thành công
            alert(`Discount "${newDiscount.d_name}" has been created successfully.`);

            // Xóa nội dung form
            addDiscountForm.reset();
        });
    }

});