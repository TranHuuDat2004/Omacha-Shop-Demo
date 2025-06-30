// Chờ cho toàn bộ trang được tải xong rồi mới chạy mã
document.addEventListener('DOMContentLoaded', function () {
    // 1. Tìm đến vùng chứa chính nơi bạn muốn sản phẩm xuất hiện
    //    Lưu ý: Trong file HTML, vùng này là <div class="row isotope-grid" id="product-list-container">
    const productContainer = document.getElementById('product-list-container');

    // Kiểm tra xem vùng chứa có tồn tại không để tránh lỗi
    if (productContainer) {
        // Tạo một chuỗi HTML rỗng để chứa tất cả sản phẩm
        let allProductsHTML = '';

        // Lặp qua từng sản phẩm trong mảng 'products' (mảng này được nạp từ data.js)
        product.forEach(product => {
            // Lấy hình ảnh đầu tiên từ mảng p_image
            const firstImage = product.p_image[0];

            // Tạo khối HTML cho một sản phẩm và thêm vào chuỗi
            // Đã sửa productdetail.php -> productdetail.html
            allProductsHTML += `
                <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item toy">
                    <!-- Block2 -->
                    <div class="block2">
                        <a href="productdetail.html?p_id=${product.p_id}" class="block2-pic hov-img0"
                            style="border: 0.1px dashed #000; border-radius: 50px;">
                            <img id="image-size" src="images/${firstImage}" alt="${product.p_name}">
                        </a>
                        <div class="block2-txt flex-w flex-t p-t-14">
                            <div class="block2-txt-child1 flex-col-l">
                                <a href="productdetail.html?p_id=${product.p_id}"
                                    class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                    ${product.p_name}
                                </a>
                                <p class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6 text1">
                                    ${product.p_type}
                                </p>
                                <span class="stext-105 cl3 price">$${product.p_price}</span>
                            </div>
                            <div class="block2-txt-child2 flex-r p-t-3">
                                <a href="addWishlist.html?p_id=${product.p_id}"
                                    class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                    <img class="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png"
                                        alt="ICON">
                                    <img class="icon-heart2 dis-block trans-04 ab-t-l"
                                        src="images/icons/icon-heart-02.png" alt="ICON">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        // 2. Gán thẳng toàn bộ chuỗi HTML đã tạo vào vùng chứa
        productContainer.innerHTML = allProductsHTML;
    } else {
        console.error("Product container not found! Check the ID 'product-list-container'.");
    }
});