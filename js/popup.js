// js/popup.js - Manages the demo notice pop-up.

document.addEventListener('DOMContentLoaded', function() {

    const popupLocalStorageKey = 'omachaDemoPopupViewed';

    // --- TẠO HTML CHO POP-UP VÀ CHÈN VÀO TRANG ---
    // Đã cập nhật lại nội dung
    const popupHTML = `
    <div id="demo-popup-overlay" class="popup-overlay popup-hidden">
        <div class="popup-modal">
            <span class="popup-close-icon" title="Close">×</span>
            <h2>Welcome to the Omacha Demo!</h2>
            <p>
                This is a <strong>Front-end only</strong> demonstration. Core features are simulated with static data. The complete project, including the Back-end (PHP & MySQL), is available on
                <a href="https://github.com/TranHuuDat2004/Omacha-Shop" target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>
            <p class="desktop-notice">
                <i class="fa fa-desktop"></i> For the best viewing experience, please use a desktop browser.
            </p>
            <a href="#" class="popup-close-btn">Got it!</a>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', popupHTML);


    // --- CÁC HÀM ĐIỀU KHIỂN POP-UP ---
    const overlay = document.getElementById('demo-popup-overlay');

    function openPopup() {
        if (overlay) {
            overlay.classList.remove('popup-hidden');
        }
    }

    function closePopup() {
        if (overlay) {
            overlay.classList.add('popup-hidden');
        }
        // Lưu lại để không tự động hiện lại trong phiên này
        localStorage.setItem(popupLocalStorageKey, 'true');
    }


    // --- GẮN CÁC SỰ KIỆN ---

    // 1. Gắn sự kiện cho các nút đóng pop-up
    const closeButtons = document.querySelectorAll('.popup-close-icon, .popup-close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            closePopup();
        });
    });

    // 2. Gắn sự kiện đóng khi click ra ngoài
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closePopup();
            }
        });
    }

    // 3. Gắn sự kiện MỞ lại pop-up cho nút info trên header
    // Dùng event delegation để đảm bảo nút hoạt động dù header được nạp động
    document.body.addEventListener('click', function(e) {
        if (e.target.closest('#show-demo-notice-btn')) {
            e.preventDefault();
            openPopup();
        }
    });

    
    // --- HIỂN THỊ POP-UP LẦN ĐẦU ---
    // Nếu người dùng chưa từng thấy pop-up, tự động mở nó ra
    if (localStorage.getItem(popupLocalStorageKey) !== 'true') {
        // Thêm một độ trễ nhỏ để người dùng kịp nhìn thấy trang trước khi pop-up hiện ra
        setTimeout(openPopup, 1000); 
    }
});