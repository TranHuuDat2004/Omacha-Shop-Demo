document.addEventListener('DOMContentLoaded', function() {
    
    const orderTableBody = document.getElementById('order-table-body');
    const paginationSummary = document.getElementById('pagination-summary');

    /**
     * Hàm để hiển thị danh sách đơn hàng lên bảng
     * @param {Array} ordersData - Mảng các đơn hàng (từ `const order`)
     * @param {Array} productsData - Mảng các sản phẩm (từ `const product`)
     * @param {Array} usersData - Mảng người dùng (từ `const login`)
     */
    function renderOrderTable(ordersData, productsData, usersData) {
        if (!orderTableBody) {
            console.error("Table body with id 'order-table-body' not found.");
            return;
        }

        orderTableBody.innerHTML = '';

        if (ordersData.length === 0) {
            orderTableBody.innerHTML = '<tr><td colspan="6" class="px-4 py-3 text-center">No orders found.</td></tr>';
            return;
        }

        ordersData.forEach(orderItem => {
            // Tìm thông tin khách hàng tương ứng
            const customer = usersData.find(u => u.userID === orderItem.u_id);
            // Tìm thông tin sản phẩm tương ứng
            const productInfo = productsData.find(p => p.p_id === orderItem.p_id);

            // Xử lý trường hợp không tìm thấy (dữ liệu không nhất quán)
            const customerName = customer ? customer.userName : 'Unknown User';
            const productName = productInfo ? productInfo.p_name : 'Unknown Product';
            const amount = productInfo ? `$${(productInfo.p_price * orderItem.o_quantity).toFixed(2)}` : 'N/A';

            // Xác định trạng thái của đơn hàng
            const statusText = orderItem.o_status ? 'Completed' : 'Pending';
            const statusClass = orderItem.o_status 
                ? 'text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100' 
                : 'text-orange-700 bg-orange-100 dark:text-white dark:bg-orange-600';

            const orderRowHTML = `
                <tr class="text-gray-700 dark:text-gray-400">
                    <td class="px-4 py-3 text-sm">
                        #${orderItem.o_id}
                    </td>
                    <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                            <div>
                                <p class="font-semibold">${customerName}</p>
                                <p class="text-xs text-gray-600 dark:text-gray-400">User ID: ${orderItem.u_id}</p>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-3 text-sm">
                        ${productName} (x${orderItem.o_quantity})
                    </td>
                    <td class="px-4 py-3 text-sm">
                        ${amount}
                    </td>
                    <td class="px-4 py-3 text-xs">
                        <span class="px-2 py-1 font-semibold leading-tight rounded-full ${statusClass}">
                            ${statusText}
                        </span>
                    </td>
                    <td class="px-4 py-3">
                        <div class="flex items-center justify-center space-x-4 text-sm">
                            <button class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="View Details" title="View Details">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </button>
                            <button class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Delete" title="Delete">
                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                    </td>
                </tr>
            `;
            orderTableBody.innerHTML += orderRowHTML;
        });

        if (paginationSummary) {
            paginationSummary.textContent = `Showing 1-${ordersData.length} of ${ordersData.length}`;
        }
    }

    // --- KHỞI TẠO ---
    // Gọi hàm render, truyền vào các mảng dữ liệu cần thiết từ data.js
    renderOrderTable(order, product, login);
});