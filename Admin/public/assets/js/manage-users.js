document.addEventListener('DOMContentLoaded', function() {
    
    // Tìm đến các phần tử cần cập nhật
    const userTableBody = document.getElementById('user-table-body');
    const paginationSummary = document.getElementById('pagination-summary');

    /**
     * Hàm để hiển thị danh sách người dùng lên bảng
     * @param {Array} users - Mảng các đối tượng người dùng (từ `const login`)
     */
    function renderUserTable(users) {
        // Kiểm tra xem có phần tử tbody không
        if (!userTableBody) {
            console.error("Table body with id 'user-table-body' not found.");
            return;
        }

        // Xóa nội dung cũ
        userTableBody.innerHTML = '';

        // Nếu không có người dùng, hiển thị thông báo
        if (users.length === 0) {
            userTableBody.innerHTML = '<tr><td colspan="4" class="px-4 py-3 text-center">No users found.</td></tr>';
            return;
        }

        // Lặp qua từng người dùng và tạo một hàng trong bảng
        users.forEach(user => {
            // Xác định màu sắc cho vai trò (role)
            const roleClass = user.role === 'admin' 
                ? 'text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-700' 
                : 'text-green-700 bg-green-100 dark:text-green-100 dark:bg-green-700';

            const userRowHTML = `
                <tr class="text-gray-700 dark:text-gray-400">
                    <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                            <!-- Avatar (có thể thêm ảnh sau) -->
                            <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                <img class="object-cover w-full h-full rounded-full"
                                    src="../../images/${user.role === 'admin' ? 'admin.jpg' : 'male.jpg'}"
                                    alt="${user.userName}" loading="lazy" />
                                <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                            <div>
                                <p class="font-semibold">${user.userName}</p>
                                <p class="text-xs text-gray-600 dark:text-gray-400">ID: ${user.userID}</p>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-3 text-sm">
                        ${user.email}
                    </td>
                    <td class="px-4 py-3 text-xs">
                        <span class="px-2 py-1 font-semibold leading-tight rounded-full ${roleClass}">
                            ${user.role}
                        </span>
                    </td>
                    <td class="px-4 py-3">
                        <div class="flex items-center justify-center space-x-4 text-sm">
                            <button
                                class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                aria-label="Edit">
                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                                    </path>
                                </svg>
                            </button>
                            <button
                                class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                aria-label="Delete">
                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
            `;
            userTableBody.innerHTML += userRowHTML;
        });

        // Cập nhật thông tin phân trang
        if(paginationSummary) {
            paginationSummary.textContent = `Showing 1-${users.length} of ${users.length}`;
        }
    }

    // --- KHỞI TẠO ---
    // Gọi hàm render, truyền vào mảng `login` từ file data.js
    renderUserTable(login);

});