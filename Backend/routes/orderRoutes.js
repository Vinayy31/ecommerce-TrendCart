import express from "express";
import {
  placeOrder,
  getOrders,
  approveReturn,
} from "../controllers/orderController.js";

const router = express.Router();

// GET ALL ORDERS
router.get("/", getOrders);

// PLACE ORDER
router.post("/", placeOrder);

// APPROVE RETURN
router.put("/return/:id", approveReturn);

export default router;