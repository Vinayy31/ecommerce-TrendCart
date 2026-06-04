import express from "express";

import {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
  
} from "../controllers/productController.js";

import {
  protect,
  adminOnly,
} from "../middleware/authMiddleware.js";

const router = express.Router();


// GET PRODUCTS

router.get("/", getProducts);
router.get("/:id", getProductById);

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

router.put("/:id", updateProduct);



// CREATE PRODUCT (ADMIN ONLY)

router.post(
  "/",
  protect,
  adminOnly,
  createProduct
);


export default router;