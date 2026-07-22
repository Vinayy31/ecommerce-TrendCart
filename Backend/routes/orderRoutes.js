import express from "express";
import {
  placeOrder,
  getOrders,
  approveReturn,
} from "../controllers/orderController.js";

const router = express.Router();


router.get("/", getOrders);


router.post("/", placeOrder);


router.put("/return/:id", approveReturn);

export default router;