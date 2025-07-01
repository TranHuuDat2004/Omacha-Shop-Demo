document.addEventListener('DOMContentLoaded', function() {
    // Cập nhật các card thống kê
    if (typeof login !== 'undefined' && typeof order !== 'undefined') {
        const totalOrdersCard = document.getElementById('total-orders-card');
        const totalUsersCard = document.getElementById('total-users-card');
        
        if(totalOrdersCard) totalOrdersCard.textContent = order.length;
        if(totalUsersCard) totalUsersCard.textContent = login.length;
    }

    // =======================================================
    // GỌI CÁC HÀM KHỞI TẠO BIỂU ĐỒ Ở ĐÂY
    // =======================================================
    
    // Kiểm tra xem hàm có tồn tại không trước khi gọi
    if (typeof createPieChart === 'function') {
        createPieChart();
    }
    
    if (typeof createLineChart === 'function') {
        createLineChart();
    }
});