document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const postId = parseInt(params.get('id'));

    if (!postId) {
        document.body.innerHTML = "<h1>Blog post ID not specified!</h1>";
        return;
    }

    const selectedPost = posts.find(p => p.id === postId);

    if (!selectedPost) {
        document.body.innerHTML = `<h1>Blog post with ID ${postId} not found!</h1>`;
        return;
    }

    // Gọi các hàm hiển thị
    displayBlogDetails(selectedPost);
    displayBlogComments(selectedPost.comments);
    // GỌI HÀM MỚI ĐỂ HIỂN THỊ SIDEBAR
    renderSidebar(posts); 
});

/**
 * Hiển thị chi tiết của một bài blog.
 * @param {object} post Đối tượng bài viết cần hiển thị.
 */
function displayBlogDetails(post) {
    // ... (Hàm này giữ nguyên, không thay đổi) ...
    document.title = post.title;
    document.getElementById('breadcrumb-title').textContent = post.title;
    document.getElementById('blog-image').src = `images/${post.image}`;
    document.getElementById('blog-title').textContent = post.title;
    document.getElementById('blog-meta-date').textContent = post.date;
    document.getElementById('blog-meta-author').textContent = post.author;
    document.getElementById('blog-meta-category').textContent = post.category;
    document.getElementById('blog-content').innerHTML = post.content;
    const tagsContainer = document.getElementById('blog-tags');
    if (tagsContainer) {
        tagsContainer.innerHTML = post.tags.map(tag => `<a href="#" class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">${tag}</a>`).join('');
    }
}

/**
 * Hiển thị danh sách bình luận cho một bài blog.
 * @param {Array} commentsToRender Mảng các bình luận của bài viết.
 */
function displayBlogComments(commentsToRender) {
    // ... (Hàm này giữ nguyên, không thay đổi) ...
    const commentContainer = document.getElementById('review-list-container');
    if (!commentContainer) return;
    if (!commentsToRender || commentsToRender.length === 0) {
        commentContainer.innerHTML = '<p class="stext-102 cl6">Be the first to leave a comment!</p>';
        return;
    }
    let commentsHTML = '';
    commentsToRender.forEach(comment => {
        commentsHTML += `<div class="flex-w flex-t p-b-40"><div class="wrap-pic-s size-109 bor0 of-hidden m-r-18 m-t-6"><img src="${comment.avatar}" alt="${comment.name}"></div><div class="size-207"><div class="flex-w flex-sb-m p-b-17"><span class="mtext-107 cl2 p-r-20">${comment.name}</span></div><p class="stext-102 cl6">${comment.text}</p>${comment.reply ? `<div class="p-t-15 p-l-25" style="border-left: 2px solid #e6e6e6; margin-left: 20px; margin-top: 15px;"><span class="mtext-107 cl2" style="font-weight: bold;">Admin's Reply:</span><p class="stext-102 cl6">${comment.reply}</p></div>` : ''}</div></div>`;
    });
    commentContainer.innerHTML = commentsHTML;
}


/**
 * ==========================================================
 * HÀM MỚI: HIỂN THỊ NỘI DUNG CHO SIDEBAR
 * (Lấy từ logic của file blog.js)
 * ==========================================================
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