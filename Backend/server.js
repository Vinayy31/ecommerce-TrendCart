import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();


// MIDDLEWARE

app.use(cors());

app.use(express.json());


// ROUTES

app.use("/api/users", userRoutes);

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);


// MONGODB CONNECTION

mongoose.connect(process.env.MONGO_URI)

.then(() => {

  console.log("MongoDB Connected");

})

.catch((error) => {

  console.log(error);
});


// SERVER

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);
});