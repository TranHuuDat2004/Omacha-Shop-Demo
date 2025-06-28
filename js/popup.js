// popup.js - Manages the one-time demo notice pop-up.

document.addEventListener('DOMContentLoaded', function() {

    const popupLocalStorageKey = 'omachaDemoPopupViewed';

    // --- KIỂM TRA LOCALSTORAGE ---
    // Nếu người dùng đã xem pop-up trước đó, không làm gì cả.
    if (localStorage.getItem(popupLocalStorageKey) === 'true') {
        return;
    }

    // --- TẠO HTML CHO POP-UP ---
    const popupHTML = `
    <div class="popup-overlay">
        <div class="popup-modal">
            <span class="popup-close-icon" title="Close">×</span>
            <h2>Welcome to the Demo!</h2>
            <p>
                Please note: This is a <strong>Front-end only</strong> demonstration. 
                The complete project, including the Back-end (PHP & MySQL), is available on
                <a href="https://github.com/TranHuuDat2004/Omacha-Shop" target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>
            <a href="#" class="popup-close-btn">Got it!</a>
        </div>
    </div>
    `;

    // --- CHÈN POP-UP VÀO TRANG ---
    document.body.insertAdjacentHTML('beforeend', popupHTML);

    // --- THÊM SỰ KIỆN ĐÓNG POP-UP ---
    const overlay = document.querySelector('.popup-overlay');
    const closeButtons = document.querySelectorAll('.popup-close-icon, .popup-close-btn');

    function closePopup() {
        // Ẩn pop-up
        if (overlay) {
            overlay.classList.add('popup-hidden');
        }
        // Lưu trạng thái vào localStorage để không hiển thị lại
        localStorage.setItem(popupLocalStorageKey, 'true');
    }

    // Gắn sự kiện click cho tất cả các nút đóng
    closeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            closePopup();
        });
    });

    // Cũng có thể đóng khi click vào nền mờ bên ngoài
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closePopup();
            }
        });
    }

});