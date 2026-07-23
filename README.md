# ecommerce-TrendCart
TrendCart – MERN Stack E-Commerce Website

TrendCart is a full-stack e-commerce web application developed using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). It allows users to browse products, manage carts, place orders, and enables administrators to manage products through an admin dashboard.
Features

# User Features

- User Registration & Login
- JWT Authentication
- Browse Products
- Search Products
- Filter Products by Category
- View Product Details
- Add Products to Cart
- Update Product Quantity
- Checkout Page
- Place Orders
- View Order History
- Responsive Design

---

## 👨‍💼 Admin Features

- Secure Admin Login
- Dashboard
- View All Products
- Search Products
- Edit Product
- Delete Product
- Product Statistics
- Manage Inventory

 Tech Stack

## Frontend

- React.js
- React Router DOM
- CSS3
- HTML5
- JavaScript (ES6)

## Backend

- Node.js
- Express.js

## Database

- MongoDB
- Mongoose

## Authentication

- JWT
- bcryptjs

## Tools

- Git
- GitHub
- VS Code
- Postman

---

# Project Structure

```
TrendCart
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── styles
│   │   └── App.jsx
│
├── server
│   ├── controllers
│   ├── models
│   ├── middleware
│   ├── routes
│   ├── config
│   └── server.js
│
└── README.md
```

---

---

## Backend Setup

```bash
cd server
npm install
npm start
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

# ⚙ Environment Variables

Create a `.env` file inside the server folder.

```
PORT=4000

MONGO_URI=Your MongoDB Atlas Connection String

JWT_SECRET=Your Secret Key
```

---

#  Application Pages

- Home
- Login
- Register
- Products
- Product Details
- Cart
- Checkout
- Orders
- Admin Dashboard

---

#  API Endpoints

## User

- POST /api/users/register
- POST /api/users/login

## Products

- GET /api/products
- GET /api/products/:id
- POST /api/products
- PUT /api/products/:id
- DELETE /api/products/:id

## Orders

- POST /api/orders
- GET /api/orders/myorders

---

# Responsive Design

The application is fully responsive and works on

- Desktop
- Laptop
- Tablet
- Mobile

---

# Authentication

- JWT Token Authentication
- Protected Routes
- Admin Authorization
- Password Encryption using bcryptjs

---


---

# 👨‍💻 Author

**Vinay Kumar M**

Full Stack Developer


# ⭐ Acknowledgements

- MongoDB
- Express.js
- React.js
- Node.js
- Snapdeal Mentor-Led Internship
- Open Source Community
