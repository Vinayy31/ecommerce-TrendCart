# TrendCart - MERN E-Commerce Website

## Overview

TrendCart is a full-stack E-Commerce web application developed using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). The application provides separate functionalities for Users and Admins, enabling complete online shopping and inventory management.

## Features

### User Features

* User Registration
* User Login Authentication
* Browse Product Catalogue
* View Product Details
* Add Products to Cart
* Remove Products from Cart
* Checkout with Cash On Delivery
* Place Orders
* View Order History
* Request Product Returns

### Admin Features

* Admin Login
* View All Products
* Add New Products
* Edit Existing Products
* Delete Products
* Manage Inventory
* View Customer Orders
* Approve Return Requests

## Technologies Used

### Frontend

* React.js
* React Router DOM
* CSS
* Local Storage

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt.js

### Database

* MongoDB
* Mongoose

## Project Structure

Ecommerce/
├── client/
│ ├── src/
│ ├── public/
│ └── package.json
│
├── server/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── server.js
│
└── README.md

## Database Collections

### Users

* name
* email
* password
* isAdmin

### Products

* name
* image
* brand
* category
* description
* price
* countInStock

### Orders

* user
* orderItems
* shippingAddress
* totalPrice
* isDelivered
* isReturned

## Authentication

* JWT Token Based Authentication
* Password Encryption using bcrypt.js
* Role-based access for Admin and User

## Future Enhancements

* Online Payment Gateway Integration
* Product Reviews & Ratings
* Wishlist Functionality
* Order Tracking System
* Search and Filter Products
* Admin Analytics Dashboard

## Installation

### Clone Repository

git clone <repository-url>

### Frontend

cd client
npm install
npm run dev

### Backend

cd server
npm install
npm start

### Environment Variables

Create a .env file inside the server folder and add:

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

PORT=4000

## Testing

* User Registration and Login
* Product Management
* Cart Operations
* Checkout Flow
* Order Placement
* Return Request Approval
* Admin Inventory Management

## Author

Vinay Kumar M

MentorMind MERN Stack E-Commerce Project
