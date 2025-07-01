document.addEventListener('DOMContentLoaded', function() {
    
    const discountTableBody = document.getElementById('discount-table-body');
    const paginationSummary = document.getElementById('pagination-summary');

    /**
     * Hàm để hiển thị danh sách mã giảm giá lên bảng
     * @param {Array} discountsData - Mảng các đối tượng giảm giá (từ `const discount`)
     */
    function renderDiscountTable(discountsData) {
        if (!discountTableBody) {
            console.error("Table body with id 'discount-table-body' not found.");
            return;
        }

        discountTableBody.innerHTML = '';

        if (discountsData.length === 0) {
            discountTableBody.innerHTML = '<tr><td colspan="5" class="px-4 py-3 text-center">No discounts found.</td></tr>';
            return;
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0); // Đặt giờ về 0 để so sánh ngày chính xác

        discountsData.forEach(item => {
            // Định dạng lại ngày để hiển thị
            const startDate = new Date(item.d_start_date).toLocaleDateString('en-GB');
            const endDate = new Date(item.d_end_date).toLocaleDateString('en-GB');
            
            // Xác định trạng thái của mã giảm giá
            const d_start = new Date(item.d_start_date);
            const d_end = new Date(item.d_end_date);
            
            let statusText = '';
            let statusClass = '';

            if (today > d_end) {
                statusText = 'Expired';
                statusClass = 'text-gray-700 bg-gray-100 dark:text-gray-100 dark:bg-gray-700';
            } else if (today >= d_start && today <= d_end) {
                statusText = 'Active';
                statusClass = 'text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100';
            } else {
                statusText = 'Scheduled';
                statusClass = 'text-blue-700 bg-blue-100 dark:bg-blue-700 dark:text-blue-100';
            }

            const discountRowHTML = `
                <tr class="text-gray-700 dark:text-gray-400">
                    <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                            <div>
                                <p class="font-semibold">${item.d_name}</p>
                                <p class="text-xs text-gray-600 dark:text-gray-400">
                                    ${item.d_description}
                                </p>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-3 text-sm font-semibold">
                        ${item.d_amount}%
                    </td>
                    <td class="px-4 py-3 text-sm">
                        ${startDate} - ${endDate}
                    </td>
                    <td class="px-4 py-3 text-xs">
                        <span class="px-2 py-1 font-semibold leading-tight rounded-full ${statusClass}">
                            ${statusText}
                        </span>
                    </td>
                    <td class="px-4 py-3">
                        <div class="flex items-center justify-center space-x-4 text-sm">
                            <button class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Edit" title="Edit">
                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
                            </button>
                            <button class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Delete" title="Delete">
                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                    </td>
                </tr>
            `;
            discountTableBody.innerHTML += discountRowHTML;
        });

        if (paginationSummary) {
            paginationSummary.textContent = `Showing 1-${discountsData.length} of ${discountsData.length}`;
        }
    }

    // --- KHỞI TẠO ---
    renderDiscountTable(discount); // `discount` được lấy từ data.js
});