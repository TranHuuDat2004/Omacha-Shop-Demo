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

// Dữ liệu Comments (ĐÃ CẬP NHẬT với thuộc tính 'userType')
const comments = [
  { IDcomment: 13, commentText: "sam oke ples", commentName: "sam", email: "sam@gmail.com", dateComment: "2024-05-29 00:00:00", replyText: null, userType: 'male' },
  { IDcomment: 21, commentText: "khách", commentName: "khách", email: "k@gmail.com", dateComment: "2024-05-11 00:00:00", replyText: "cảm ơn ạ", userType: 'female' },
  { IDcomment: 28, commentText: "chao mot ngay moi", commentName: "linh", email: "duongthuylinh@gmail.com", dateComment: "2024-05-11 00:00:00", replyText: null, userType: 'female' },
  { IDcomment: 29, commentText: "123456", commentName: "thuylinh", email: "duongthuylinh@gmail.com", dateComment: "2024-05-11 00:00:00", replyText: "hello ban", userType: 'female' },
  { IDcomment: 32, commentText: "Đẹp quá à", commentName: "Tran Huu Dat", email: "huudat.lego@gmail.com", dateComment: "2024-05-15 00:00:00", replyText: null, userType: 'male' },
  // Thêm một ví dụ comment của admin để demo
  { IDcomment: 33, commentText: "Sản phẩm này rất tốt, khuyến khích mọi người mua nhé!", commentName: "Admin", email: "admin@omacha.com", dateComment: "2024-05-16 00:00:00", replyText: null, userType: 'admin' },
];



// Dữ liệu Contacts
const contacts = [
  { c_id: 1, c_name: "Huudat2004", c_email: "huudat.lego@gmail.com", c_subject: "First Contact", c_message: "First Contact" },
  { c_id: 10, c_name: "Huudat2004", c_email: "huudat.lego@gmail.com", c_subject: "10th May", c_message: "Hello" },
  { c_id: 11, c_name: "Huudat2004", c_email: "huudat.lego@gmail.com", c_subject: "First Contact", c_message: "8:29PM" },
];

// Dữ liệu Discount
const discount = [
  { d_id: 2, d_name: "Wood toys for your kids", d_amount: 20, d_description: "Discount 20%", d_start_date: "2024-04-30", d_end_date: "2024-05-18" },
];

// Dữ liệu Login/Users
const login = [
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
];

// Dữ liệu Orders
const order = [
  { o_id: 70, u_id: 2, p_id: 3, o_price: 11, o_quantity: 5, o_status: true },
  { o_id: 79, u_id: 14, p_id: 6, o_price: 13, o_quantity: 5, o_status: true },
  { o_id: 84, u_id: 14, p_id: 4, o_price: 11, o_quantity: 1, o_status: true },
  { o_id: 86, u_id: 24, p_id: 2, o_price: 13, o_quantity: 1, o_status: false },
  { o_id: 87, u_id: 24, p_id: 3, o_price: 11, o_quantity: 1, o_status: false },
  { o_id: 94, u_id: 14, p_id: 5, o_price: 11, o_quantity: 3, o_status: true },
  { o_id: 95, u_id: 14, p_id: 1, o_price: 13, o_quantity: 3, o_status: true },
  { o_id: 96, u_id: 14, p_id: 21, o_price: 10, o_quantity: 3, o_status: true },
];

// Dữ liệu Order Details (hiện đang rỗng)
const order_detail = [];

// Dữ liệu Products (ĐÃ CẬP NHẬT TOÀN BỘ)
const product = [
  {
    p_id: 1, p_name: "LEGO 70365 Axl",
    p_image: ["LEGO_70365_1.png", "LEGO_70365_2.png", "LEGO_70365_3.png"],
    p_type: "Plastic", p_price: 12.99, p_provider: "LEGO", p_age: "0-12 months",
    p_description: "Features a buildable battle suit with highly posable limbs and a minifigure cockpit. Charge into battle with an even bigger Axl and send the Stone monsters flying! Also includes a super-sized buildable axe. Accessory elements include a Combo NEXO Power shield and five scannable NEXO Powers.",
    weight: "0.5 kg", dimensions: "20 x 15 x 5 cm", recommendedAge: "7-14 years", brand: "LEGO"
  },
  {
    p_id: 2, p_name: "Rabit",
    p_image: ["rabit.png", "About-Icon-1.webp", "About-Icon-2.webp"],
    p_type: "Plastic", p_price: 12.99, p_provider: "dun dun dun", p_age: "3+ years",
    p_description: "it is very pretty",
    weight: "0.3 kg", dimensions: "25 x 10 x 15 cm", recommendedAge: "3+ years", brand: "dun dun dun"
  },
  {
    p_id: 3, p_name: "Elephant Jelly Cat",
    p_image: ["Elephant.png"],
    p_type: "Cotton", p_price: 10.99, p_provider: "Cookie", p_age: "0-12 months",
    p_description: "it is very pretty",
    weight: "0.3 kg", dimensions: "25 x 10 x 15 cm", recommendedAge: "All ages", brand: "Jellycat"
  },
  {
    p_id: 4, p_name: "Unicorn",
    p_image: ["unicorn.png"],
    p_type: "Cotton", p_price: 10.99, p_provider: "Baby Logo", p_age: "1-2 years",
    p_description: "it is very pretty",
    weight: "0.3 kg", dimensions: "25 x 10 x 15 cm", recommendedAge: "1-2 years", brand: "Baby Logo"
  },
  {
    p_id: 5, p_name: "Barbie",
    p_image: ["barbie.png"],
    p_type: "Plastic", p_price: 10.99, p_provider: "BarBie", p_age: "3+ years",
    p_description: "it is very pretty",
    weight: "0.4 kg", dimensions: "15 x 5 x 30 cm", recommendedAge: "3+ years", brand: "Barbie"
  },
  {
    p_id: 6, p_name: "Beach",
    p_image: ["beach.png"],
    p_type: "Plastic", p_price: 12.99, p_provider: "Cookie", p_age: "5+ years",
    p_description: "it is very pretty",
    weight: "0.6 kg", dimensions: "30 x 20 x 10 cm", recommendedAge: "5+ years", brand: "Cookie"
  },
  {
    p_id: 7, p_name: "Frog Duck",
    p_image: ["frog.png"],
    p_type: "Cotton", p_price: 12.99, p_provider: "Frog Leaf", p_age: "1-2 years",
    p_description: "it is very pretty",
    weight: "0.25 kg", dimensions: "20 x 12 x 12 cm", recommendedAge: "1-2 years", brand: "Frog Leaf"
  },
  {
    p_id: 8, p_name: "Bear Jelly Cat",
    p_image: ["bearjellycat.png"],
    p_type: "Cotton", p_price: 10.99, p_provider: "DiNo", p_age: "0-12 months",
    p_description: "it is very pretty",
    weight: "0.3 kg", dimensions: "25 x 10 x 15 cm", recommendedAge: "All ages", brand: "Jellycat"
  },
  {
    p_id: 9, p_name: "Giraffe Jelly Cat",
    p_image: ["giraffe.png"],
    p_type: "Cotton", p_price: 12.99, p_provider: "Frog Leaf", p_age: "0-12 months",
    p_description: "it is very pretty",
    weight: "0.35 kg", dimensions: "30 x 10 x 15 cm", recommendedAge: "All ages", brand: "Jellycat"
  },
  {
    p_id: 10, p_name: "Bear Baby Tower",
    p_image: ["beartowel.png"],
    p_type: "Cotton", p_price: 12.99, p_provider: "Frog Leaf", p_age: "0-12 months",
    p_description: "it is very pretty",
    weight: "0.4 kg", dimensions: "40 x 40 x 5 cm", recommendedAge: "0-12 months", brand: "Frog Leaf"
  },
  {
    p_id: 11, p_name: "Flower Jelly Cat",
    p_image: ["Jelly Cat Flower.png"],
    p_type: "Cotton", p_price: 10.99, p_provider: "Frog Leaf", p_age: "0-12 months",
    p_description: "it is very pretty",
    weight: "0.2 kg", dimensions: "20 x 20 x 8 cm", recommendedAge: "All ages", brand: "Jellycat"
  },
  {
    p_id: 12, p_name: "Ring",
    p_image: ["ring.png"],
    p_type: "Wood", p_price: 8.49, p_provider: "dun dun dun", p_age: "0-12 months",
    p_description: "it is very pretty",
    weight: "0.1 kg", dimensions: "10 x 10 x 2 cm", recommendedAge: "0-12 months", brand: "dun dun dun"
  },
  {
    p_id: 13, p_name: "Tiger Ring",
    p_image: ["tiger2.png"],
    p_type: "Cotton", p_price: 8.49, p_provider: "Baby Logo", p_age: "1-2 years",
    p_description: "it is very pretty",
    weight: "0.15 kg", dimensions: "12 x 12 x 3 cm", recommendedAge: "1-2 years", brand: "Baby Logo"
  },
  {
    p_id: 14, p_name: "Duck",
    p_image: ["duck.png"],
    p_type: "Plastic", p_price: 5.25, p_provider: "dun dun dun", p_age: "1-2 years",
    p_description: "it is very pretty",
    weight: "0.1 kg", dimensions: "8 x 8 x 7 cm", recommendedAge: "1-2 years", brand: "dun dun dun"
  },
  {
    p_id: 15, p_name: "Frog",
    p_image: ["frog1.png"],
    p_type: "Plastic", p_price: 8.49, p_provider: "Frog Leaf", p_age: "3+ years",
    p_description: "it is very pretty",
    weight: "0.2 kg", dimensions: "10 x 9 x 6 cm", recommendedAge: "3+ years", brand: "Frog Leaf"
  },
  {
    p_id: 16, p_name: "Barbie Cutie Reveal",
    p_image: ["barbie2.png"],
    p_type: "Rubberized Plastic", p_price: 5.25, p_provider: "BarBie", p_age: "5+ years",
    p_description: "it is very pretty",
    weight: "0.45 kg", dimensions: "18 x 7 x 32 cm", recommendedAge: "5+ years", brand: "Barbie"
  },
  {
    p_id: 17, p_name: "Logic Matrix",
    p_image: ["logicmatrix.png"],
    p_type: "Metal", p_price: 5.25, p_provider: "Cookie", p_age: "5+ years",
    p_description: "it is very pretty",
    weight: "0.7 kg", dimensions: "25 x 25 x 5 cm", recommendedAge: "5+ years", brand: "Cookie"
  },
  {
    p_id: 18, p_name: "Music",
    p_image: ["music1.png"],
    p_type: "Wood", p_price: 8.49, p_provider: "dun dun dun", p_age: "5+ years",
    p_description: "it is very pretty",
    weight: "0.5 kg", dimensions: "20 x 15 x 10 cm", recommendedAge: "5+ years", brand: "dun dun dun"
  },
  {
    p_id: 21, p_name: "LEGO 70362 Clay",
    p_image: ["LEGO_70362_1.png", "70362.jpeg", "19458_lego-nexo-chien-giap-clay-tuticare-2.jpg"],
    p_type: "Plastic", p_price: 9.99, p_provider: "LEGO", p_age: "5+ years",
    p_description: "Features a buildable battle suit with highly posable limbs and a minifigure cockpit. Also includes a super-sized buildable sword. Accessory elements include a Combo NEXO Power shield and 5 scannable NEXO Powers. Download the free LEGO® NEXO KNIGHTS™: MERLOK 2.0 app to your smartphone or tablet.",
    weight: "0.5 kg", dimensions: "20 x 15 x 5 cm", recommendedAge: "7-14 years", brand: "LEGO"
  },
  {
    p_id: 22, p_name: "Sticker",
    p_image: ["StickerCookieRun 1.png", "StickerCookieRun 2.png", "StickerCookieRun 3.png"],
    p_type: "Plastic", p_price: 9.99, p_provider: "Cookie", p_age: "5+ years",
    p_description: "Sticker Very Good",
    weight: "0.05 kg", dimensions: "15 x 10 x 0.1 cm", recommendedAge: "All ages", brand: "Cookie"
  },
  {
    p_id: 23, p_name: "LEGO 70363 Macy",
    p_image: ["Macy 1.jpg", "Macy 2.jpg", "Macy 3.jpg"],
    p_type: "Plastic", p_price: 9.99, p_provider: "LEGO", p_age: "5+ years",
    p_description: "Đặc điểm nổi bật của Lego Nexo Knights 70363 - Chiến giáp Macy:\r\nGồm 66 miếng ghép thuộc chủ đề Lego Nexo Knights mới nhất năm 2017.\r\nKết hợp chơi xếp hình và lắp ráp mô hình trong bộ Lego Nexo Knights 70363 - Chiến giáp Macy cùng công nghệ hấp dẫn khi có thể chơi cả trên ứng dụng điện thoại và máy tính bảng.",
    weight: "0.5 kg", dimensions: "20 x 15 x 5 cm", recommendedAge: "7-14 years", brand: "LEGO"
  },
];

// Dữ liệu Reviews
const review = [
  { r_id: 3, r_name: "Justin Bieber", r_star: "7", r_email: "justinbieber@gmail.com", r_description: "Using cotton buckets regularly will help your skin become cleaner, softer and brighter. However, it should be noted that excessive use can cause damage to the skin, so use gently and only periodically." },
  { r_id: 23, r_name: "HuuDat", r_star: "5", r_email: "HuuDat", r_description: "Hello" },
  { r_id: 24, r_name: "ThuyKhanh", r_star: "4", r_email: "ThuyKhanh", r_description: "Đẹp quá" },
  { r_id: 25, r_name: "ThuyLinh", r_star: "0", r_email: "ThuyLinh", r_description: "Hay lắm mua ngay nha" },
  { r_id: 26, r_name: "BInhQuyen", r_star: "0", r_email: "BInhQuyen", r_description: "Mua liền" },
  { r_id: 30, r_name: "Zalo", r_star: "0", r_email: "", r_description: "Mua thêm đi" },
];

// Dữ liệu Wishlist (hiện đang rỗng)
const wishlist = [];

// Dữ liệu Blog Posts
const posts = [
  {
    id: 1,
    title: "8 Inspiring Ways to Wear Dresses in the Winter",
    image: "blog-04.jpg", // Ví dụ, bạn cần có ảnh này
    author: "Admin",
    date: "July 18, 2024",
    category: "StreetStyle",
    tags: ["Fashion", "StreetStyle"],
    content: `
      <p class="stext-117 cl6 p-b-26">
        Winter doesn't mean you have to pack away your favorite dresses. With the right layering techniques, you can rock a dress even on the chilliest days. One popular method is to layer a turtleneck sweater underneath a slip dress. This not only keeps you warm but also adds a chic, '90s-inspired vibe to your outfit. Pair it with ankle boots and a long wool coat for a look that's both stylish and practical.
      </p>
      <p class="stext-117 cl6 p-b-26">
        Another great option is the sweater dress. It's the perfect combination of comfort and style. Choose a chunky knit sweater dress and pair it with over-the-knee boots for a cozy yet sophisticated ensemble. You can cinch the waist with a belt to add definition to your silhouette. Don't be afraid to play with textures; a leather jacket over a soft knit dress creates a beautiful contrast that is sure to turn heads. Accessorize with a warm scarf and a beanie to complete your winter-ready look.
      </p>
    `,
    comments: [
      { name: "Sarah (a Mom)", avatar: "images/female.jpg", text: "This is so helpful! I always struggle with finding the right toys." },
      { name: "Admin", avatar: "images/admin.png", text: "You're welcome, Sarah! The goal is always fun and learning combined." }
    ]
  },
  {
    id: 2,
    title: "The Great Big List of Men’s Gifts for the Holidays",
    image: "blog-05.jpg", // Ví dụ, bạn cần có ảnh này
    author: "Admin",
    date: "July 15, 2024",
    category: "Gifts",
    tags: ["Lifestyle", "Gifts"],
    content: `
      <p class="stext-117 cl6 p-b-26">
        Finding the perfect gift for the men in your life can be a challenge, but we've got you covered. For the tech enthusiast, consider a pair of high-quality noise-canceling headphones or the latest smart-watch. These gadgets are not only useful but also show that you're in tune with his interests.
      </p>
      <p class="stext-117 cl6 p-b-26">
        If he's more of an outdoorsman, a durable multi-tool, a high-performance jacket, or a portable camping stove could be the perfect present. For the man who appreciates the finer things, a classic leather wallet, a set of premium grooming products, or a subscription to a craft beer or coffee club will surely be a hit. The key is to think about his hobbies and passions to find a gift that is both thoughtful and practical.
      </p>
    `,
    comments: [
      { name: "Sarah (a Mom)", avatar: "images/female.jpg", text: "This is so helpful! I always struggle with finding the right toys." },
      { name: "Admin", avatar: "images/admin.png", text: "You're welcome, Sarah! The goal is always fun and learning combined." }
    ]
  },
  {
    id: 3,
    title: "What Are the Best Toys for Child Development",
    image: "blog-01.jpg", // Gán một ảnh ví dụ
    author: "Admin",
    date: "July 12, 2024",
    category: "Development",
    tags: ["Education", "Toys"],
    content: `
      <p class="stext-117 cl6 p-b-26">
        Selecting toys that promote child development involves considering various factors such as age appropriateness, safety, and educational value. For infants and toddlers, toys that stimulate the senses, such as rattles, textured balls, and musical toys, are beneficial for sensory exploration and motor skill development. Additionally, toys that encourage grasping, stacking, and sorting help enhance fine motor skills and hand-eye coordination.
      </p>
      <p class="stext-117 cl6 p-b-26">
        As children grow older, toys that promote imaginative play, such as dolls, action figures, and dress-up costumes, foster creativity and social skills. Building blocks, puzzles, and construction sets are excellent for developing problem-solving abilities, spatial reasoning, and logical thinking. Educational toys like alphabet blocks, counting games, and science kits can also support early literacy, numeracy, and scientific curiosity. Ultimately, the best toys for child development are those that engage children's interests, spark their curiosity, and provide opportunities for exploration, learning, and social interaction.
      </p>
    `,
    comments: [
      { name: "Sarah (a Mom)", avatar: "images/female.jpg", text: "This is so helpful! I always struggle with finding the right toys." },
      { name: "Admin", avatar: "images/admin.png", text: "You're welcome, Sarah! The goal is always fun and learning combined." }
    ]
  },
  {
    id: 4,
    title: "How Do Toys Impact a Child's Learning",
    image: "blog-02.jpg", // Gán một ảnh ví dụ
    author: "Admin",
    date: "July 10, 2024",
    category: "Learning",
    tags: ["Psychology", "Toys"],
    content: `
      <p class="stext-117 cl6 p-b-26">
        Toys wield significant influence on a child's learning journey, serving as more than just objects of amusement. They act as conduits for exploration, enabling kids to engage with various concepts and skills in an interactive manner. Whether it's through building, problem-solving, or role-playing, toys stimulate different areas of development, including cognitive, social, and emotional domains.
      </p>
      <p class="stext-117 cl6 p-b-26">
        Moreover, the impact of toys extends beyond immediate enjoyment, shaping long-term abilities and attitudes. Educational toys, for instance, not only impart knowledge but also cultivate a love for learning and curiosity. Similarly, toys that encourage collaboration and communication help children develop essential social skills and empathy. Therefore, choosing toys thoughtfully and providing diverse play experiences can profoundly influence a child's growth and learning trajectory.
      </p>
    `,
    comments: [
      { name: "Sarah (a Mom)", avatar: "images/female.jpg", text: "This is so helpful! I always struggle with finding the right toys." },
      { name: "Admin", avatar: "images/admin.png", text: "You're welcome, Sarah! The goal is always fun and learning combined." }
    ]
  },
  {
    id: 5,
    title: "Build Worlds, Collect Pieces With Your Young Ones",
    image: "blog-03.jpg", // Gán một ảnh ví dụ
    author: "Admin",
    date: "July 08, 2024",
    category: "Family",
    tags: ["Creativity", "Bonding"],
    content: `
      <p class="stext-117 cl6 p-b-26">
        Building worlds and collecting pieces with your young ones is not just about creating physical structures; it's about fostering creativity, imagination, and bonding. Whether it's constructing elaborate Lego creations, piecing together puzzles, or designing imaginative landscapes with building blocks, these activities provide valuable opportunities for children to explore their creativity and problem-solving skills.
      </p>
      <p class="stext-117 cl6 p-b-26">
        Moreover, engaging in such activities promotes collaboration and communication as children work together to bring their ideas to life. Through building and collecting, children learn important concepts such as spatial awareness, pattern recognition, and perseverance. As parents or caregivers, participating in these activities with your young ones not only strengthens your bond but also allows you to witness their growth and development firsthand. So, dive into the world of building and collecting with your children, and watch as their imaginations soar and their confidence grows with each piece they add to their creations.
      </p>
    `,
    comments: [
      { name: "Sarah (a Mom)", avatar: "images/female.jpg", text: "This is so helpful! I always struggle with finding the right toys." },
      { name: "Admin", avatar: "images/admin.png", text: "You're welcome, Sarah! The goal is always fun and learning combined." }
    ]
  },
  {
    id: 6,
    title: "The Joys of Being a Parent: A Guide to Parenting",
    image: "blog-06.jpg", // Gán một ảnh ví dụ
    author: "Admin",
    date: "July 05, 2024",
    category: "Parenting",
    tags: ["Guidance", "Family"],
    content: `
      <p class="stext-117 cl6 p-b-26">
        Parenting is a journey filled with ups and downs, but ultimately, it's one of the most rewarding experiences in life. From the first moment you hold your newborn in your arms to the milestones they reach as they grow, the joys of parenthood are unparalleled. It's a journey of unconditional love, selflessness, and constant learning.
      </p>
      <p class="stext-117 cl6 p-b-26">
        While parenting may come with its challenges, there's no shortage of guidance and support available to navigate the journey. From parenting books and online resources to support groups and advice from fellow parents, there are endless opportunities to learn and grow as a parent. Embracing the joys of being a parent also means embracing the journey, cherishing every moment, and celebrating the unique bond you share with your child.
      </p>
    `,
    comments: [
      { name: "Sarah (a Mom)", avatar: "images/female.jpg", text: "This is so helpful! I always struggle with finding the right toys." },
      { name: "Admin", avatar: "images/admin.png", text: "You're welcome, Sarah! The goal is always fun and learning combined." }
    ]
  },
  {
    id: 7,
    title: "Essential Tips for Buying and Caring for Kids' Toys",
    image: "blog-07.jpg", // Gán một ảnh ví dụ
    author: "Admin",
    date: "July 02, 2024",
    category: "Tips",
    tags: ["Safety", "Shopping"],
    content: `
      <p class="stext-117 cl6 p-b-26">
        When it comes to buying toys for children, safety should always be the top priority. Look for toys that are age-appropriate and free from small parts or sharp edges that could pose a choking hazard. Check for any safety labels or certifications to ensure the toy meets recognized safety standards. Additionally, consider the child's interests and developmental stage when choosing toys, opting for options that encourage creativity, learning, and physical activity.
      </p>
      <p class="stext-117 cl6 p-b-26">
        Caring for kids' toys is essential to prolong their lifespan and maintain their safety. Regularly clean toys to remove dirt, germs, and bacteria, especially for toys that are frequently used. Inspect toys for any signs of damage or wear, such as loose parts or broken pieces, and repair or replace them as needed. Establishing a routine for cleaning up and storing toys properly can help teach children responsibility and keep play areas organized and safe.
      </p>
    `,
    comments: [
      { name: "Sarah (a Mom)", avatar: "images/female.jpg", text: "This is so helpful! I always struggle with finding the right toys." },
      { name: "Admin", avatar: "images/admin.png", text: "You're welcome, Sarah! The goal is always fun and learning combined." }
    ]
  },
  {
    id: 8,
    title: "When a Little Toy Brings Everyone Together",
    image: "blog-08.jpg", // Gán một ảnh ví dụ
    author: "Admin",
    date: "June 30, 2024",
    category: "Community",
    tags: ["Connection", "Play"],
    content: `
      <p class="stext-117 cl6 p-b-26">
        Sometimes, the smallest things can have the biggest impact, and toys are no exception. A simple toy has the magical ability to bring people together, transcending age, background, and culture. Whether it's a classic board game during a family gathering, a shared puzzle solving session, or a friendly competition with remote-controlled cars, toys have a unique power to unite people in laughter, fun, and camaraderie.
      </p>
      <p class="stext-117 cl6 p-b-26">
        Beyond mere entertainment, these shared play experiences foster bonds, promote communication, and create cherished memories that last a lifetime. Whether it's parents playing with their children, friends enjoying a game night, or communities coming together for toy drives and events, the joy and connection that toys bring serve as a reminder of the simple pleasures in life and the importance of shared experiences.
      </p>
    `,
    comments: [
      { name: "Sarah (a Mom)", avatar: "images/female.jpg", text: "This is so helpful! I always struggle with finding the right toys." },
      { name: "Admin", avatar: "images/admin.png", text: "You're welcome, Sarah! The goal is always fun and learning combined." }
    ]
  },
  {
    id: 9,
    title: "Fun Ways to Help Your Child Learn and Grow",
    image: "blog-09.jpg", // Gán một ảnh ví dụ
    author: "Admin",
    date: "June 28, 2024",
    category: "Activities",
    tags: ["Learning", "Fun"],
    content: `
      <p class="stext-117 cl6 p-b-26">
        Turn cooking into a learning experience by inviting your child to join you in the kitchen. Let them help with simple tasks like measuring ingredients, mixing, and decorating. This not only teaches them practical skills but also introduces concepts like math (measuring ingredients), science (mixing ingredients to create chemical reactions), and creativity (decorating dishes). Plus, they'll feel proud of their culinary creations and be more inclined to try new foods.
      </p>
      <p class="stext-117 cl6 p-b-26">
        Encourage your child's love for music and movement by organizing dance parties or music jam sessions at home. Provide a variety of instruments like drums, shakers, or even homemade options like pots and pans. Dancing and making music together not only fosters creativity but also improves coordination and rhythm. You can also introduce educational songs that teach concepts like counting, the alphabet, or colors, making learning feel like playtime. These activities promote physical activity while stimulating cognitive development in a fun and engaging way.
      </p>
    `,
    comments: [
      { name: "Sarah (a Mom)", avatar: "images/female.jpg", text: "This is so helpful! I always struggle with finding the right toys." },
      { name: "Admin", avatar: "images/admin.png", text: "You're welcome, Sarah! The goal is always fun and learning combined." }
    ]
  },
  {
    id: 10,
    title: "Exploring the Evolution of Toys Through the Years",
    image: "blog-10.jpg", // Gán một ảnh ví dụ
    author: "Admin",
    date: "June 25, 2024",
    category: "History",
    tags: ["Evolution", "Technology"],
    content: `
      <p class="stext-117 cl6 p-b-26">
        Toys have experienced a remarkable evolution throughout history, mirroring societal shifts and technological advancements. Initially, toys were rudimentary, often handmade from natural materials like wood or clay. These early playthings, such as dolls, spinning tops, and carved animals, encouraged creativity and imaginative play.
      </p>
      <p class="stext-117 cl6 p-b-26">
        As industrialization progressed, toy manufacturing became more standardized, leading to the mass production of toys made from metal, plastic, and other materials. This era saw the rise of iconic toys like model trains, teddy bears, and building blocks, shaping the childhoods of generations. Today, the toy industry continues to evolve rapidly, with toys incorporating state-of-the-art technology like robotics, virtual reality, and interactive features. Despite these modern innovations, there's a growing appreciation for vintage and retro toys, underscoring the enduring appeal of traditional play experiences.
      </p>
    `,
    comments: [
      { name: "Sarah (a Mom)", avatar: "images/female.jpg", text: "This is so helpful! I always struggle with finding the right toys." },
      { name: "Admin", avatar: "images/admin.png", text: "You're welcome, Sarah! The goal is always fun and learning combined." }
    ]
  },
  {
    id: 11,
    title: "What's Hot and What's Not in the Toy World",
    image: "blog-11.jpg", // Gán một ảnh ví dụ
    author: "Admin",
    date: "June 22, 2024",
    category: "Trends",
    tags: ["STEM", "Digital"],
    content: `
      <p class="stext-117 cl6 p-b-26">
        In the ever-evolving toy world, trends come and go, shaping the preferences of children and parents alike. Today, STEM (Science, Technology, Engineering, and Mathematics) toys are gaining popularity as parents seek to introduce their children to educational yet entertaining play experiences. These toys encourage critical thinking, problem-solving, and innovation, preparing kids for future success in a technology-driven world.
      </p>
      <p class="stext-117 cl6 p-b-26">
        Conversely, traditional toys like dolls and action figures remain timeless classics, offering endless imaginative possibilities. However, with the rise of digital entertainment, such as video games and interactive apps, some traditional toys face stiff competition. Yet, even in this digital age, there's a growing appreciation for toys that promote hands-on, unplugged play, striking a balance between virtual and real-world experiences.
      </p>
    `,
    comments: [
      { name: "Sarah (a Mom)", avatar: "images/female.jpg", text: "This is so helpful! I always struggle with finding the right toys." },
      { name: "Admin", avatar: "images/admin.png", text: "You're welcome, Sarah! The goal is always fun and learning combined." }
    ]
  },
  {
    id: 12,
    title: "The Incredible Impact of Toys On Young Minds",
    image: "blog-12.jpg", // Gán một ảnh ví dụ
    author: "Admin",
    date: "June 20, 2024",
    category: "Development",
    tags: ["Cognitive", "Growth"],
    content: `
      <p class="stext-117 cl6 p-b-26">
        Toys wield an incredible influence on the minds of children, shaping their development in profound ways. These playthings are not merely objects for amusement but serve as essential tools for learning and growth. Through play, children engage in imaginative exploration, honing their creativity and problem-solving skills. From building blocks to pretend playsets, toys provide fertile ground for children to develop crucial cognitive and social abilities.
      </p>
      <p class="stext-117 cl6 p-b-26">
        Moreover, toys serve as educational aids tailored to specific developmental needs. Whether it's a puzzle to challenge their problem-solving abilities or a musical instrument to foster a love for music, each toy offers unique opportunities for learning. By interacting with these toys, children not only refine their motor skills but also cultivate a thirst for knowledge and a passion for exploration. Thus, the impact of toys on young minds is undeniable, shaping the foundation of their future learning and development.
      </p>
    `,
    comments: [
      { name: "Sarah (a Mom)", avatar: "images/female.jpg", text: "This is so helpful! I always struggle with finding the right toys." },
      { name: "Admin", avatar: "images/admin.png", text: "You're welcome, Sarah! The goal is always fun and learning combined." }
    ]
  }
];