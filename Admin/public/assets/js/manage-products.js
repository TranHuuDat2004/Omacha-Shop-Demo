document.addEventListener('DOMContentLoaded', function() {
    
    // Tìm đến các phần tử cần cập nhật
    const productTableBody = document.getElementById('product-table-body');
    const paginationSummary = document.getElementById('pagination-summary');

    /**
     * Hàm để hiển thị danh sách sản phẩm lên bảng
     * @param {Array} products - Mảng các đối tượng sản phẩm (từ `const product`)
     */
    function renderProductTable(products) {
        if (!productTableBody) {
            console.error("Table body with id 'product-table-body' not found.");
            return;
        }

        productTableBody.innerHTML = '';

        if (products.length === 0) {
            productTableBody.innerHTML = '<tr><td colspan="5" class="px-4 py-3 text-center">No products found.</td></tr>';
            return;
        }

        products.forEach(item => {
            const firstImage = item.p_image[0] || 'default-product.png'; // Ảnh mặc định nếu không có

            const productRowHTML = `
                <tr class="text-gray-700 dark:text-gray-400">
                    <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                            <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                <img class="object-cover w-full h-full rounded-full"
                                    src="../../images/${firstImage}"
                                    alt="${item.p_name}" loading="lazy" />
                                <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                            <div>
                                <p class="font-semibold">${item.p_name}</p>
                                <p class="text-xs text-gray-600 dark:text-gray-400">ID: ${item.p_id}</p>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-3 text-sm">
                        $${item.p_price.toFixed(2)}
                    </td>
                    <td class="px-4 py-3 text-sm">
                        ${item.p_type}
                    </td>
                    <td class="px-4 py-3 text-sm">
                        ${item.p_provider}
                    </td>
                    <td class="px-4 py-3">
                        <div class="flex items-center justify-center space-x-4 text-sm">
                            <button
                                class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                aria-label="Edit" title="Edit">
                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
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
            productTableBody.innerHTML += productRowHTML;
        });

        if (paginationSummary) {
            paginationSummary.textContent = `Showing 1-${products.length} of ${products.length}`;
        }
    }

    // --- KHỞI TẠO ---
    // Gọi hàm render, truyền vào mảng `product` từ file data.js
    renderProductTable(product);

});