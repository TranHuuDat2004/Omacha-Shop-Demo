document.addEventListener('DOMContentLoaded', function() {
    // Chỉ chạy mã nếu tìm thấy vùng chứa blog
    if (document.getElementById('blog-list-container')) {
        renderBlogList(posts); // `posts` được lấy từ file data.js
        renderSidebar(posts);
    }
});

/**
 * Hiển thị danh sách các bài viết ra trang chính.
 * @param {Array} postsToRender Mảng các đối tượng bài viết cần hiển thị.
 */
function renderBlogList(postsToRender) {
    const container = document.getElementById('blog-list-container');
    if (!container) return;

    let blogListHTML = '';

    postsToRender.forEach(post => {
        // Tạo một đoạn trích ngắn từ nội dung đầy đủ
        const excerpt = createExcerpt(post.content, 100);

        blogListHTML += `
            <div class="col-sm-6 col-md-4 p-b-40">
                <div class="blog-item">
                    <div class="hov-img0">
                        <a href="blog-detail.html?id=${post.id}">
                            <img src="images/${post.image}" alt="IMG-BLOG" class="zoomable-img">
                        </a>
                    </div>
                    <div class="p-t-15">
                        <div class="stext-116 cl8 hov-cl1 trans-04 m-b-12">
                            <span>
                                By ${post.author}
                                <span class="cl12 m-l-4 m-r-6">|</span>
                            </span>
                            <span>
                                ${post.date}
                            </span>
                        </div>
                        <h4 class="p-b-12">
                            <a href="blog-detail.html?id=${post.id}" class="ltext-108 cl2 hov-cl1 trans-04">
                                ${post.title}
                            </a>
                        </h4>
                        <p class="stext-108 cl6">
                            ${excerpt}
                        </p>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = blogListHTML;
}

/**
 * Hiển thị các mục trong sidebar (Recent Posts, Categories).
 * @param {Array} allPosts Mảng chứa tất cả các bài viết.
 */
function renderSidebar(allPosts) {
    const recentContainer = document.getElementById('recent-post-list');
    const categoryContainer = document.getElementById('category-list');

    // Render Recent Posts (lấy 3 bài mới nhất)
    if (recentContainer) {
        let recentHTML = '';
        const recentPosts = allPosts.slice(0, 3); // Lấy 3 bài đầu tiên
        recentPosts.forEach(post => {
            recentHTML += `
                <li class="flex-w flex-t p-b-30">
                    <a href="blog-detail.html?id=${post.id}" class="wrap-pic-w hov-ovelay1 m-r-20">
                        <img src="images/${post.image}" alt="${post.title}">
                    </a>
                    <div class="size-215 flex-col-t p-t-8">
                        <a href="blog-detail.html?id=${post.id}" class="stext-116 cl8 hov-cl1 trans-04">
                            ${post.title}
                        </a>
                        <span class="stext-116 cl6 p-t-20">
                            ${post.date}
                        </span>
                    </div>
                </li>
            `;
        });
        recentContainer.innerHTML = recentHTML;
    }

    // Render Categories (lấy các category duy nhất)
    if (categoryContainer) {
        let categoryHTML = '';
        const categories = [...new Set(allPosts.map(post => post.category))]; // Lấy các category không trùng lặp
        categories.forEach(category => {
            categoryHTML += `
                <li class="bor18">
                    <a href="#" class="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4">
                        ${category}
                    </a>
                </li>
            `;
        });
        categoryContainer.innerHTML = categoryHTML;
    }
}


/**
 * Tạo một đoạn trích ngắn từ chuỗi HTML.
 * @param {string} htmlString Chuỗi HTML đầy đủ.
 * @param {number} maxLength Độ dài tối đa của đoạn trích.
 * @returns {string} Đoạn văn bản ngắn.
 */
function createExcerpt(htmlString, maxLength) {
    // Tạo một phần tử tạm để phân tích HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;
    // Lấy nội dung văn bản, loại bỏ các thẻ HTML
    let text = tempDiv.textContent || tempDiv.innerText || "";
    // Cắt ngắn và thêm '...' nếu cần
    if (text.length > maxLength) {
        return text.substring(0, maxLength).trim() + '...';
    }
    return text;
}