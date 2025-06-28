# Omacha Shop - E-commerce Toy Store

<p align="center">
  <img src="screenshot/logo.png" alt="Omacha Shop Homepage" height="50px"/>
  <!-- Make sure the logo path is correct -->
</p>


Welcome to Omacha Shop, a delightful e-commerce platform dedicated to bringing joy and quality toys to children and families. This project showcases a full-stack web application built with PHP, designed for use with XAMPP, and features a comprehensive set of functionalities for both customers and administrato

## 🌟 Project Overview

Omacha Shop is designed to provide a seamless and enjoyable online shopping experience for toy enthusiasts. From browsing a diverse collection of toys to secure (simulated) payment and order tracking, Omacha aims to be a trusted destination for parents and children alike. The platform also includes a robust administration system for efficient business management.

**Live Demo (Github Pages):** 

Customer: [https://tranhuudatlego.github.io/Frontend/] 

Admin: [https://tranhuudatlego.github.io/Admin/]

## ✨ Key Features

### For Customers:
*   **Intuitive Product Browsing:**
    *   Homepage with featured products, new arrivals, and shop by category/age.
    *   Advanced search functionality.
    *   Product listing page with filtering options (price, type, tags).
    *   Detailed product pages with multiple screenshot, descriptions, additional information, and customer reviews.
*   **Shopping Cart & Wishlist:**
    *   Add to cart functionality.
    *   Side cart preview.
    *   Dedicated cart page with quantity updates, coupon application.
    *   Wishlist feature to save favorite items.
*   **Secure Checkout Process:**
    *   Clear checkout steps.
    *   Shipping information and calculation (placeholder for actual shipping methods).
    *   Order y and "Thank You" page upon successful purchase.
    *   Invoice generation (PDF export option).
*   **User Accounts:**
    *   Customer registration and login.
    *   (Potentially) Order history and profile management.
*   **Engagement & Information:**
    *   **Blog Section:** Articles related to toys, child development, and parenting.
    *   **About Us Page:** Sharing the store's story, mission, and team.
    *   **Contact Page:** With a contact form and location map.
    *   Product reviews and ratings.
    *   Comment system on blog posts with admin reply functionality.

### 🛍️ Customer Interface
|           Home Page (Layout 1)            |             Product Listing (with Filter)              |                    Product Detail Page                    |
| :---------------------------------------: | :----------------------------------------------------: | :-------------------------------------------------------: |
|  ![Omacha Home 1](screenshot/Home1.jpg)   | ![Omacha Product List & Filter](screenshot/filter.jpg) |  ![Omacha Product Detail](screenshot/product_detail.jpg)  |
|             **Shopping Cart**             |                  **Checkout Process**                  |                    **Thank You Page**                     |
|    ![Omacha Cart](screenshot/cart.jpg)    |      ![Omacha Checkout](screenshot/checkout.jpg)       |       ![Omacha Thank You](screenshot/thankyou.jpg)        |
|              **Login Page**               |                 **Registration Page**                  |                     **Wishlist Page**                     |
|   ![Omacha Login](screenshot/login.jpg)   |      ![Omacha Register](screenshot/signup.jpg)       |        ![Omacha Wishlist](screenshot/wishlist.jpg)        |
|               **Blog Page**               |                   **About Us Page**                    |                     **Contact Page**                      |
|    ![Omacha Blog](screenshot/blog.jpg)    |       ![Omacha About Us](screenshot/about5.jpg)        |         ![Omacha Contact](screenshot/contact.jpg)         |
|        **Order Detail**         |                   **Search Results**                   |          **Comment Section** (e.g., on Product)           |
| ![Omacha Invoice](screenshot/checkout1.jpg) |    ![Omacha Search Results](screenshot/search.jpg)     | ![Omacha Comment Section](screenshot/comment_product.jpg) |
|     **Home Page (Layout 2)**     |           **Home Page (Layout 3)**            |             **Home Page (Layout 4)**             |
|  ![Omacha Home 2](screenshot/Home2.jpg)   |         ![Omacha Home 3](screenshot/Home3.jpg)         |          ![Omacha Home 4](screenshot/Home4.jpg)           |
|     **Home Page (Layout 5)**     |      **Invoice**                                                   |                                                           |
|  ![Omacha Home 5](screenshot/Home5.jpg)   |           ![Invoice](screenshot/invoice.jpg)                                             |                                                           |

### For Administrators (Admin Dashboard):
*   **Dashboard Overview:** Quick statistics on total orders, users, new sales, pending comments.
*   **User Management:** View and manage registered users.
*   **Product Management:**
    *   Add new products with details like name, image, price, type, age, provider.
    *   View, edit, and delete existing products.
*   **Order Management:** View and manage customer orders.
*   **Comment Management:** View, approve, and reply to comments on blog posts or products.
*   **Content Management (Implicit):** Managing blog posts, categories, etc.
*   **Statistical Reports:** Visual charts for best sellers, revenue over time.

### ⚙️ Admin Interface
|                     Admin Login Page                     |               Admin Signup Page (if applicable)                |                      Admin Dashboard                       |
| :------------------------------------------------------: | :------------------------------------------------------------: | :--------------------------------------------------------: |
|    ![Omacha Admin Login](screenshot/login_admin.jpg)     |      ![Omacha Admin Signup](screenshot/create_admin.jpg)       |      ![Omacha Admin Dashboard](screenshot/admin1.jpg)      |
|                   **Add Product Form**                   |                   **Manage Products (List)**                   |                  **Manage Orders (List)**                  |
| ![Omacha Admin Add Product](screenshot/add_product.jpg)  | ![Omacha Admin Manage Products](screenshot/manage_product.jpg) | ![Omacha Admin Manage Orders](screenshot/manage_order.jpg) |
|                 **Manage Users (List)**                  |                                                                |                                                            |
| ![Omacha Admin Manage Users](screenshot/manage_user.jpg) |                                                                |                                                            |

## 🛠️ Technology Stack

*   **Frontend:**
    *   HTML5
    *   CSS3
    *   JavaScript
    *   Bootstrap (Likely, based on UI elements)
    *   Tailwind 
*   **Backend:**
    *   PHP (Procedural or with a custom structure)
*   **Database:**
    *   MySQL (Managed via phpMyAdmin in XAMPP)
*   **Web Server:**
    *   Apache (via XAMPP)


## 🚀 Getting Started

### Prerequisites

*   **XAMPP:** Download and install XAMPP (includes Apache, PHP, MySQL/MariaDB, phpMyAdmin) from [Apache Friends](https://www.apachefriends.org/index.html).
*   **Git:** For cloning the repository.

### Installation & Setup

1.  **Start XAMPP:**
    *   Open the XAMPP Control Panel.
    *   Start the **Apache** and **MySQL** services.

2.  **Clone the repository:**
    *   Open your command line/terminal.
    *   Navigate to the `htdocs` directory inside your XAMPP installation folder (e.g., `C:\xampp\htdocs` on Windows, or `/Applications/XAMPP/htdocs` on macOS).
    *   Clone the project:
        ```bash
        git clone https://github.com/TranHuuDat2004/Omacha_Shop.git
        cd OmachaShop
        ```

        The project should now be in a folder like `C:\xampp\htdocs\OmachaShop`.

3.  **Database Setup:**
    *   Open your web browser and go to `http://localhost/phpmyadmin`.
    *   Create a new database:
        *   Click on "New" on the left sidebar.
        *   Enter the database name as `toy-shop`.
        *   Choose a collation (e.g., `utf8mb4_general_ci`) and click "Create".
    *   Import the SQL file:
        *   Select the newly created `toy-shop` database from the left sidebar.
        *   Click on the "Import" tab at the top.
        *   Click "Choose File" and navigate to the `OmachaShop/Frontend/` directory (or wherever `toy-shop.sql` is located within your project structure) and select the `toy-shop.sql` file.
        *   Scroll down and click "Go".

4.  **Configure Database Connection (if necessary):**
    *   Your PHP application will need to connect to the database. Locate the PHP file(s) in your project that handle database connections (e.g., `config.php`, `db_connect.php`, or similar).
    *   Ensure the connection details are correct for a default XAMPP setup:
        *   Hostname: `localhost`
        *   Database Name: `toy-shop`
        *   Username: `root`
        *   Password: `(empty by default)`
    *   *(If your connection file is structured differently, adjust accordingly.)*

5.  **Accessing the Application:**
    *   **Customer Site:** Open your browser and go to `http://localhost/OmachaShop/` (or `http://localhost/YourProjectFolderName/` if you named the folder differently in `htdocs`).
    *   **Admin Panel:** Access via `http://localhost/OmachaShop/admin/` (or the specific path to your admin area, e.g., `admin.php`, `admin_login.php`).
        *   Default admin credentials (if any, please specify): `Username: [admin_user]`, `Password: [admin_pass]` *(Update these if you have default credentials)*



## License

This work is licensed under a [Creative Commons Attribution-NonCommercial 4.0 International License](https://creativecommons.org/licenses/by-nc/4.0/).

You are free to:
- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material

Under the following terms:
- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made.
- **NonCommercial** — You may not use the material for commercial purposes.

![License: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/88x31.png)

## 👤 Contributors

*   **[Team Engineering]**
    *   **Nguyễn Thùy Khanh** - Team Leader | Project Visionary & Lead Ideator
    *   **Trần Hữu Đạt** - Full-Stack Web Developer - [@TranHuuDat2004](https://github.com/TranHuuDat2004)
    *   **Trần Bình Quyển** - Member
    *   **Dương Thị Thùy Linh** - Member
