document.addEventListener('DOMContentLoaded', function() {
    
    // Tìm đến form
    const addProductForm = document.getElementById('add-product-form');

    // Nếu tìm thấy form, gắn sự kiện submit
    if (addProductForm) {
        addProductForm.addEventListener('submit', function(event) {
            // Ngăn chặn hành vi gửi form mặc định
            event.preventDefault();

            // === LẤY DỮ LIỆU TỪ CÁC Ô INPUT ===
            const productName = document.getElementById('product-name').value.trim();
            const productPrice = parseFloat(document.getElementById('product-price').value);
            const productProvider = document.getElementById('product-provider').value.trim();
            const productType = document.getElementById('product-type').value;
            const productAge = document.getElementById('product-age').value.trim();
            const productImages = document.getElementById('product-images').value.split(',').map(img => img.trim());
            const productDescription = document.getElementById('product-description').value.trim();

            // === TẠO MỘT ĐỐI TƯỢNG SẢN PHẨM MỚI ===
            // Tạo ID mới bằng cách tìm ID lớn nhất hiện có và cộng thêm 1
            const newProductId = Math.max(...product.map(p => p.p_id)) + 1;

            const newProduct = {
                p_id: newProductId,
                p_name: productName,
                p_image: productImages.filter(img => img !== ''), // Loại bỏ các tên file trống
                p_type: productType,
                p_price: productPrice,
                p_provider: productProvider,
                p_age: productAge,
                p_description: productDescription,
                // Bạn có thể thêm các thuộc tính mặc định khác nếu cần
                weight: "N/A",
                dimensions: "N/A",
                recommendedAge: productAge, // Dùng lại thông tin đã nhập
                brand: productProvider // Dùng lại thông tin đã nhập
            };

            // === XỬ LÝ LOGIC (DEMO) ===
            // Trong một ứng dụng thật, bạn sẽ gửi `newProduct` đến server ở đây.
            // Trong demo này, chúng ta sẽ chỉ in ra console và hiển thị thông báo.

            console.log("New Product Created (Demo):", newProduct);
            
            // Thông báo cho admin
            alert(`Product "${newProduct.p_name}" has been created successfully (check console for details).`);

            // Xóa nội dung form để chuẩn bị cho lần nhập tiếp theo
            addProductForm.reset();
        });
    }

});