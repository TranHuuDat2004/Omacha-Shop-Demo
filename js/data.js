/* ===================================================================
   CẢNH BÁO BẢO MẬT QUAN TRỌNG
======================================================================
   Dữ liệu trong file này, đặc biệt là bảng 'login', chứa thông tin
   nhạy cảm (tên người dùng và mật khẩu). Việc đưa file này lên một
   trang web công khai như GitHub Pages sẽ khiến BẤT KỲ AI cũng có thể
   xem được các thông tin này.

   File này chỉ nên được sử dụng cho mục đích DEMO TĨNH, nơi các chức
   năng đăng nhập, đăng ký không hoạt động thực sự. TUYỆT ĐỐI không
   sử dụng cấu trúc này cho một sản phẩm thật.
=================================================================== */

const database = {
  comments: [
    { IDcomment: 13, commentText: "sam oke ples", commentName: "sam", email: "sam@gmail.com", dateComment: "2024-05-29 00:00:00", replyText: null },
    { IDcomment: 21, commentText: "khách", commentName: "khách", email: "k@gmail.com", dateComment: "2024-05-11 00:00:00", replyText: "cảm ơn ạ" },
    { IDcomment: 28, commentText: "chao mot ngay moi", commentName: "linh", email: "duongthuylinh@gmail.com", dateComment: "2024-05-11 00:00:00", replyText: null },
    { IDcomment: 29, commentText: "123456", commentName: "thuylinh", email: "duongthuylinh@gmail.com", dateComment: "2024-05-11 00:00:00", replyText: "hello ban" },
    { IDcomment: 32, commentText: "Đẹp quá à", commentName: "Tran Huu Dat", email: "huudat.lego@gmail.com", dateComment: "2024-05-15 00:00:00", replyText: null },
  ],
  contacts: [
    { c_id: 1, c_name: "Huudat2004", c_email: "huudat.lego@gmail.com", c_subject: "First Contact", c_message: "First Contact" },
    { c_id: 10, c_name: "Huudat2004", c_email: "huudat.lego@gmail.com", c_subject: "10th May", c_message: "Hello" },
    { c_id: 11, c_name: "Huudat2004", c_email: "huudat.lego@gmail.com", c_subject: "First Contact", c_message: "8:29PM" },
  ],
  discount: [
    { d_id: 2, d_name: "Wood toys for your kids", d_amount: 20, d_description: "Discount 20%", d_start_date: "2024-04-30", d_end_date: "2024-05-18" },
  ],
  login: [
    {
      userID: 1,
      userName: "admin",
      email: "admin@gmail.com",
      loginpassword: "admin123", // Mật khẩu đơn giản cho demo
      role: "admin", // Thêm vai trò để dễ dàng phân quyền
    },
    {
      userID: 2,
      userName: "user",
      email: "user@gmail.com",
      loginpassword: "user123", // Mật khẩu đơn giản cho demo
      role: "user", // Vai trò của người dùng thường
    },
  ],
  order: [
    { o_id: 70, u_id: 21, p_id: 3, o_price: 11, o_quantity: 5, o_status: true },
    { o_id: 79, u_id: 14, p_id: 6, o_price: 13, o_quantity: 5, o_status: true },
    { o_id: 84, u_id: 14, p_id: 4, o_price: 11, o_quantity: 1, o_status: true },
    { o_id: 86, u_id: 24, p_id: 2, o_price: 13, o_quantity: 1, o_status: false },
    { o_id: 87, u_id: 24, p_id: 3, o_price: 11, o_quantity: 1, o_status: false },
    { o_id: 94, u_id: 14, p_id: 5, o_price: 11, o_quantity: 3, o_status: true },
    { o_id: 95, u_id: 14, p_id: 1, o_price: 13, o_quantity: 3, o_status: true },
    { o_id: 96, u_id: 14, p_id: 21, o_price: 10, o_quantity: 3, o_status: true },
  ],
  order_detail: [],
  product: [
    { p_id: 1, p_name: "LEGO 70365 Axl", p_image: ["LEGO_70365_1.png", "LEGO_70365_2.png", "LEGO_70365_3.png"], p_type: "Plastic", p_price: 12.99, p_provider: "LEGO", p_age: "0-12 months", p_description: "Features a buildable battle suit with highly posable limbs and a minifigure cockpit. Charge into battle with an even bigger Axl and send the Stone monsters flying! Also includes a super-sized buildable axe. Accessory elements include a Combo NEXO Power shield and five scannable NEXO Powers." },
    { p_id: 2, p_name: "Rabit", p_image: ["rabit.png", "About-Icon-1.webp", "About-Icon-2.webp"], p_type: "Plastic", p_price: 12.99, p_provider: "dun dun dun", p_age: "3+ years", p_description: "it is very pretty" },
    { p_id: 3, p_name: "Elephant Jelly Cat", p_image: ["Elephant.png"], p_type: "Cotton", p_price: 10.99, p_provider: "Cookie", p_age: "0-12 months", p_description: "it is very pretty" },
    { p_id: 4, p_name: "Unicorn", p_image: ["unicorn.png"], p_type: "Cotton", p_price: 10.99, p_provider: "Baby Logo", p_age: "1-2 years", p_description: "it is very pretty" },
    { p_id: 5, p_name: "Barbie", p_image: ["barbie.png"], p_type: "Plastic", p_price: 10.99, p_provider: "BarBie", p_age: "3+ years", p_description: "it is very pretty" },
    { p_id: 6, p_name: "Beach", p_image: ["beach.png"], p_type: "Plastic", p_price: 12.99, p_provider: "Cookie", p_age: "5+ years", p_description: "it is very pretty" },
    { p_id: 7, p_name: "Frog Duck", p_image: ["frog.png"], p_type: "Cotton", p_price: 12.99, p_provider: "Frog Leaf", p_age: "1-2 years", p_description: "it is very pretty" },
    { p_id: 8, p_name: "Bear Jelly Cat", p_image: ["bearjellycat.png"], p_type: "Cotton", p_price: 10.99, p_provider: "DiNo", p_age: "0-12 months", p_description: "it is very pretty" },
    { p_id: 9, p_name: "Giraffe Jelly Cat", p_image: ["giraffe.png"], p_type: "Cotton", p_price: 12.99, p_provider: "Frog Leaf", p_age: "0-12 months", p_description: "it is very pretty" },
    { p_id: 10, p_name: "Bear Baby Tower", p_image: ["beartowel.png"], p_type: "Cotton", p_price: 12.99, p_provider: "Frog Leaf", p_age: "0-12 months", p_description: "it is very pretty" },
    { p_id: 11, p_name: "Flower Jelly Cat", p_image: ["Jelly Cat Flower.png"], p_type: "Cotton", p_price: 10.99, p_provider: "Frog Leaf", p_age: "0-12 months", p_description: "it is very pretty" },
    { p_id: 12, p_name: "Ring", p_image: ["ring.png"], p_type: "Wood", p_price: 8.49, p_provider: "dun dun dun", p_age: "0-12 months", p_description: "it is very pretty" },
    { p_id: 13, p_name: "Tiger Ring", p_image: ["tiger2.png"], p_type: "Cotton", p_price: 8.49, p_provider: "Baby Logo", p_age: "1-2 years", p_description: "it is very pretty" },
    { p_id: 14, p_name: "Duck", p_image: ["duck.png"], p_type: "Plastic", p_price: 5.25, p_provider: "dun dun dun", p_age: "1-2 years", p_description: "it is very pretty" },
    { p_id: 15, p_name: "Frog", p_image: ["frog1.png"], p_type: "Plastic", p_price: 8.49, p_provider: "Frog Leaf", p_age: "3+ years", p_description: "it is very pretty" },
    { p_id: 16, p_name: "Barbie Cutie Reveal", p_image: ["barbie2.png"], p_type: "Rubberized Plastic", p_price: 5.25, p_provider: "BarBie", p_age: "5+ years", p_description: "it is very pretty" },
    { p_id: 17, p_name: "Logic Matrix", p_image: ["logicmatrix.png"], p_type: "Metal", p_price: 5.25, p_provider: "Cookie", p_age: "5+ years", p_description: "it is very pretty" },
    { p_id: 18, p_name: "Music", p_image: ["music1.png"], p_type: "Wood", p_price: 8.49, p_provider: "dun dun dun", p_age: "5+ years", p_description: "it is very pretty" },
    { p_id: 21, p_name: "LEGO 70362 Clay", p_image: ["LEGO_70362_1.png", "70362.jpeg", "19458_lego-nexo-chien-giap-clay-tuticare-2.jpg"], p_type: "Plastic", p_price: 9.99, p_provider: "LEGO", p_age: "5+ years", p_description: "Features a buildable battle suit with highly posable limbs and a minifigure cockpit. Also includes a super-sized buildable sword. Accessory elements include a Combo NEXO Power shield and 5 scannable NEXO Powers. Download the free LEGO® NEXO KNIGHTS™: MERLOK 2.0 app to your smartphone or tablet." },
    { p_id: 22, p_name: "Sticker", p_image: ["StickerCookieRun 1.png", "StickerCookieRun 2.png", "StickerCookieRun 3.png"], p_type: "Plastic", p_price: 9.99, p_provider: "Cookie", p_age: "5+ years", p_description: "Sticker Very Good" },
    { p_id: 23, p_name: "LEGO 70363 Macy", p_image: ["Macy 1.jpg", "Macy 2.jpg", "Macy 3.jpg"], p_type: "Plastic", p_price: 9.99, p_provider: "LEGO", p_age: "5+ years", p_description: "Đặc điểm nổi bật của Lego Nexo Knights 70363 - Chiến giáp Macy:\r\nGồm 66 miếng ghép thuộc chủ đề Lego Nexo Knights mới nhất năm 2017.\r\nKết hợp chơi xếp hình và lắp ráp mô hình trong bộ Lego Nexo Knights 70363 - Chiến giáp Macy cùng công nghệ hấp dẫn khi có thể chơi cả trên ứng dụng điện thoại và máy tính bảng." },
  ],
  review: [
    { r_id: 3, r_name: "Justin Bieber", r_star: "7", r_email: "justinbieber@gmail.com", r_description: "Using cotton buckets regularly will help your skin become cleaner, softer and brighter. However, it should be noted that excessive use can cause damage to the skin, so use gently and only periodically." },
    { r_id: 23, r_name: "HuuDat", r_star: "5", r_email: "HuuDat", r_description: "Hello" },
    { r_id: 24, r_name: "ThuyKhanh", r_star: "4", r_email: "ThuyKhanh", r_description: "Đẹp quá" },
    { r_id: 25, r_name: "ThuyLinh", r_star: "0", r_email: "ThuyLinh", r_description: "Hay lắm mua ngay nha" },
    { r_id: 26, r_name: "BInhQuyen", r_star: "0", r_email: "BInhQuyen", r_description: "Mua liền" },
    { r_id: 30, r_name: "Zalo", r_star: "0", r_email: "", r_description: "Mua thêm đi" },
  ],
  wishlist: [],
};