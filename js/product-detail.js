document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('p_id'));

    if (!productId) {
        document.body.innerHTML = "<h1>Product ID not specified!</h1>";
        return;
    }

    const selectedProduct = product.find(p => p.p_id === productId);

    if (!selectedProduct) {
        document.body.innerHTML = `<h1>Product with ID ${productId} not found!</h1>`;
        return;
    }

    displayProductDetails(selectedProduct);
    displayProductReviews(selectedProduct.comments || []); // Hiển thị comment của sản phẩm nếu có

    // =======================================================
    // GẮN SỰ KIỆN CHO CÁC NÚT BẤM MỚI
    // =======================================================
    const quantityInput = document.getElementById('quantity-input');
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    const buyNowBtn = document.getElementById('buy-it-now-btn');

    // Lắng nghe sự kiện click nút "Add to cart"
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const quantity = parseInt(quantityInput.value);
            if (quantity > 0) {
                // Gọi hàm addToCart toàn cục từ file cart.js
                window.addToCart(productId, quantity);
            } else {
                alert("Please enter a valid quantity.");
            }
        });
    }

    // Lắng nghe sự kiện click nút "Buy It Now"
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', function() {
            const quantity = parseInt(quantityInput.value);
            if (quantity > 0) {
                // Thêm vào giỏ hàng
                window.addToCart(productId, quantity);
                // Và chuyển hướng ngay đến trang giỏ hàng
                window.location.href = 'shopping-cart.html';
            } else {
                alert("Please enter a valid quantity.");
            }
        });
    }
});


function displayProductDetails(product) {
    // ... (toàn bộ nội dung hàm displayProductDetails giữ nguyên như cũ)
    // --- Cập nhật Breadcrumb ---
    const breadcrumbProductName = document.querySelector('.bread-crumb .stext-109.cl4');
    if (breadcrumbProductName) breadcrumbProductName.textContent = product.p_name;

    // --- Cập nhật thông tin chính ---
    const productNameElement = document.querySelector('.js-name-detail');
    const productPriceElement = document.querySelector('.mtext-106.cl2');
    const productDescriptionElement = document.querySelector('.p-t-23.stext-102.cl3');
    if (productNameElement) productNameElement.textContent = product.p_name;
    if (productPriceElement) productPriceElement.textContent = `$${product.p_price.toFixed(2)}`;
    if (productDescriptionElement) productDescriptionElement.innerHTML = product.p_description.replace(/\r\n/g, '<br>');

    // --- Cập nhật thư viện ảnh (Slick Slider) ---
    const galleryContainer = document.querySelector('.slick3.gallery-lb');
    const dotsContainer = document.querySelector('.wrap-slick3-dots');
    if (galleryContainer && dotsContainer) {
        let galleryHTML = '';
        product.p_image.forEach(imageFile => {
            galleryHTML += `
                <div class="item-slick3" data-thumb="images/${imageFile}">
                    <div class="wrap-pic-w pos-relative zoom-container">
                        <img src="images/${imageFile}" alt="${product.p_name}">
                        <a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/${imageFile}">
                            <i class="fa fa-expand"></i>
                        </a>
                    </div>
                </div>`;
        });
        galleryContainer.innerHTML = galleryHTML;
        $('.slick3').slick('unslick');
        $('.slick3').slick({
            slidesToShow: 1, slidesToScroll: 1, fade: true, infinite: true, autoplay: false,
            arrows: true, appendArrows: $('.wrap-slick3-arrows'),
            prevArrow: '<button class="arrow-slick3 prev-slick3"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow: '<button class="arrow-slick3 next-slick3"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
            dots: true, appendDots: $('.wrap-slick3-dots'), dotsClass: 'slick3-dots',
            customPaging: function (slick, index) {
                var portrait = $(slick.$slides[index]).data('thumb');
                return `<img src=" ${portrait} "/>`;
            },
        });
    }

    // --- Cập nhật tab "Description" ---
    const tabDescription = document.querySelector('#description .how-pos2');
    if (tabDescription) tabDescription.innerHTML = `<p class="stext-102 cl6">${product.p_description.replace(/\r\n/g, '<br>')}</p>`;

    // --- Cập nhật tab "Additional information" ---
    const infoBrand = document.getElementById('info-brand');
    const infoAge = document.getElementById('info-age');
    const infoMaterial = document.getElementById('info-material');
    const infoWeight = document.getElementById('info-weight');
    const infoDimensions = document.getElementById('info-dimensions');

    // Sử dụng toán tử '||' để cung cấp giá trị mặc định nếu thuộc tính không tồn tại
    if (infoBrand) infoBrand.textContent = product.brand || 'N/A';
    if (infoAge) infoAge.textContent = product.recommendedAge || product.p_age || 'N/A'; // Ưu tiên recommendedAge
    if (infoMaterial) infoMaterial.textContent = product.p_type || 'N/A';
    if (infoWeight) infoWeight.textContent = product.weight || 'N/A';
    if (infoDimensions) infoDimensions.textContent = product.dimensions || 'N/A';

}

// ==========================================================
// HÀM MỚI ĐỂ HIỂN THỊ REVIEW
// ==========================================================
// ==========================================================
// HÀM HIỂN THỊ REVIEW (PHIÊN BẢN CÓ AVATAR)
// ==========================================================
function displayProductReviews(commentsToRender) {
    const reviewContainer = document.getElementById('review-list-container');
    const reviewCountTab = document.querySelector('a[href="#reviews"]');

    if (!reviewContainer) return;

    // Cập nhật số lượng review trên tab
    if (reviewCountTab) {
        reviewCountTab.textContent = `Reviews (${commentsToRender.length})`;
    }
    
    let reviewsHTML = '';

    commentsToRender.forEach(comment => {
        // --- Logic chọn ảnh đại diện ---
        let avatarSrc = '';
        switch (comment.userType) {
            case 'male':
                avatarSrc = 'images/male.jpg';
                break;
            case 'female':
                avatarSrc = 'images/female.jpg';
                break;
            case 'admin':
                avatarSrc = 'images/admin.png';
                break;
            default:
                // Ảnh mặc định nếu không xác định được userType
                avatarSrc = 'images/default-avatar.png'; 
                break;
        }

        // --- Tạo khối HTML cho review ---
        reviewsHTML += `
            <div class="flex-w flex-t p-b-68">
                <!-- Cột Avatar -->
                <div class="wrap-pic-s size-109 bor0 of-hidden m-r-18 m-t-6">
                    <img src="${avatarSrc}" alt="${comment.commentName}">
                </div>

                <!-- Cột nội dung Review -->
                <div class="size-207">
                    <div class="flex-w flex-sb-m p-b-17">
                        <span class="mtext-107 cl2 p-r-20">${comment.commentName}</span>
                        <!-- Bạn có thể thêm logic hiển thị sao ở đây nếu muốn -->
                    </div>
                    <p class="stext-102 cl6">${comment.commentText}</p>
                    
                    <!-- Kiểm tra và hiển thị phần trả lời của admin -->
                    ${comment.replyText ? 
                    `
                    <div class="p-t-15 p-l-25" style="border-left: 2px solid #e6e6e6; margin-left: 20px; margin-top: 15px;">
                        <span class="mtext-107 cl2" style="font-weight: bold;">Admin's Reply:</span>
                        <p class="stext-102 cl6">${comment.replyText}</p>
                    </div>
                    ` 
                    : ''}
                </div>
            </div>
        `;
    });

    reviewContainer.innerHTML = reviewsHTML;
        // Zoom Image
    $(document).ready(function () {
        $(".zoom-container").mousemove(function (e) {
            var image = $(this).find("img");
            var offsetX = e.pageX - $(this).offset().left;
            var offsetY = e.pageY - $(this).offset().top;
            var posX = offsetX / $(this).width() * 100;
            var posY = offsetY / $(this).height() * 100;
            image.css("transform-origin", posX + "% " + posY + "%");
        });
    });
}


