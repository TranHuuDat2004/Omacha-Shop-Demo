document.addEventListener('DOMContentLoaded', function() {
    // Lấy các phần tử từ DOM
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('login-button');
    const errorMessage = document.getElementById('error-message');

    // Kiểm tra xem nút đăng nhập có tồn tại không
    if (loginButton) {
        // Gắn sự kiện click cho nút đăng nhập
        loginButton.addEventListener('click', function(event) {
            // Ngăn chặn hành vi mặc định của form (không cần thiết với type="button" nhưng để cho chắc)
            event.preventDefault();

            // Lấy giá trị từ các ô input
            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            // Kiểm tra xem người dùng đã nhập đủ thông tin chưa
            if (username === '' || password === '') {
                displayError('Please enter both username and password.');
                return;
            }

            // Gọi hàm xử lý đăng nhập
            handleLogin(username, password);
        });
    }

    function handleLogin(username, password) {
        // Tìm người dùng trong mảng 'login' (từ data.js)
        // So sánh không phân biệt chữ hoa/thường cho username
        const foundUser = login.find(
            user => user.userName.toLowerCase() === username.toLowerCase() && user.loginpassword === password
        );

        // Nếu tìm thấy người dùng
        if (foundUser) {
            // Lưu thông tin người dùng vào localStorage để các trang khác có thể sử dụng
            // Chỉ lưu thông tin an toàn, không lưu mật khẩu
            const userToStore = {
                userID: foundUser.userID,
                userName: foundUser.userName,
                email: foundUser.email,
                role: foundUser.role
            };
            localStorage.setItem('loggedInUser', JSON.stringify(userToStore));

            // Ẩn thông báo lỗi nếu có
            errorMessage.style.display = 'none';

            // Dựa vào vai trò (role) để chuyển hướng
            if (foundUser.role === 'admin') {
                // Chuyển hướng đến trang dashboard của admin
                // alert('Admin login successful! Redirecting to dashboard...');
                window.location.href = 'Admin/public/index.html'; 
            } else {
                // Chuyển hướng đến trang chủ cho user thường
                // alert('Login successful! Welcome back, ' + foundUser.userName + '!');
                window.location.href = 'index.html'; // Hoặc trang profile của user
            }
        } else {
            // Nếu không tìm thấy, hiển thị thông báo lỗi
            displayError('Invalid username or password.');
        }
    }

    // Hàm để hiển thị thông báo lỗi
    function displayError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }
});