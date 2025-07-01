document.addEventListener('DOMContentLoaded', function () {

    const commentTableBody = document.getElementById('comment-table-body');
    const paginationSummary = document.getElementById('pagination-summary');

    /**
     * Hàm để hiển thị danh sách bình luận lên bảng
     * @param {Array} commentsData - Mảng các đối tượng bình luận (từ `const comments`)
     */
    function renderCommentTable(commentsData) {
        if (!commentTableBody) {
            console.error("Table body with id 'comment-table-body' not found.");
            return;
        }

        commentTableBody.innerHTML = '';

        if (commentsData.length === 0) {
            commentTableBody.innerHTML = '<tr><td colspan="5" class="px-4 py-3 text-center">No comments found.</td></tr>';
            return;
        }

        commentsData.forEach(comment => {
            // Định dạng ngày cho dễ đọc
            const commentDate = new Date(comment.dateComment).toLocaleDateString('en-GB');

            // Xác định trạng thái của bình luận
            const statusText = comment.replyText ? 'Replied' : 'Pending';
            const statusClass = comment.replyText
                ? 'text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100'
                : 'text-orange-700 bg-orange-100 dark:text-white dark:bg-orange-600';

            const commentRowHTML = `
                <tr class="text-gray-700 dark:text-gray-400">
                    <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                            <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                <img class="object-cover w-full h-full rounded-full"
                                    src="../../images/${comment.userType === 'admin' ? 'admin.jpg' : (comment.userType === 'male' ? 'male.jpg' : 'female.jpg')}"
                                    alt="${comment.commentName}" loading="lazy" />
                                <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                            <div>
                                <p class="font-semibold">${comment.commentName}</p>
                                <p class="text-xs text-gray-600 dark:text-gray-400">${comment.email}</p>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-3 text-sm">
                        ${comment.commentText}
                        ${comment.replyText ? `<br><small class="text-gray-500"><b>Reply:</b> ${comment.replyText}</small>` : ''}
                    </td>
                    <td class="px-4 py-3 text-xs">
                        <span class="px-2 py-1 font-semibold leading-tight rounded-full ${statusClass}">
                            ${statusText}
                        </span>
                    </td>
                    <td class="px-4 py-3 text-sm">
                        ${commentDate}
                    </td>
                    <td class="px-4 py-3">
                        <div class="flex items-center justify-center space-x-4 text-sm">
                            <button
                                class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                aria-label="Reply" title="Reply">
    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
    </svg>
                            </button>
                            <button
                                class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                aria-label="Delete" title="Delete">
                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
            `;
            commentTableBody.innerHTML += commentRowHTML;
        });

        if (paginationSummary) {
            paginationSummary.textContent = `Showing 1-${commentsData.length} of ${commentsData.length}`;
        }
    }

    // --- KHỞI TẠO ---
    renderCommentTable(comments); // `comments` được lấy từ data.js

});