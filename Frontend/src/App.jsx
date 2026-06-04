import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Products from "./pages/Product.jsx";
import Orders from "./pages/Orders.jsx";
import Admin from "./pages/Admin.jsx";
import ProductDetails from "./pages/ProductDetail.jsx";

function Home() {
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 80000,
      image:
        "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg",
    },

    {
      id: 2,
      name: "Samsung S24",
      price: 75000,
      image:
        "https://m.media-amazon.com/images/I/71RVuBs3q9L._SX679_.jpg",
    },

    {
      id: 3,
      name: "HP Laptop",
      price: 95000,
      image:
        "https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg",
    },

    {
      id: 4,
      name: "Boat Headphones",
      price: 3000,
      image:
        "https://m.media-amazon.com/images/I/61u1VALn6JL._SX679_.jpg",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      <Navbar />



      <div
        style={{
          background:
            "linear-gradient(to right, #2563eb, #38bdf8)",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "55px",
            marginBottom: "20px",
          }}
        >
          Welcome to TrendCart
        </h1>

        <p
          style={{
            fontSize: "22px",
          }}
        >
          Best Deals • Best Products • Fast Delivery
        </p>
      </div>



      <h1
        style={{
          textAlign: "center",
          marginTop: "40px",
          fontSize: "40px",
        }}
      >
        Latest Products
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "30px",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;