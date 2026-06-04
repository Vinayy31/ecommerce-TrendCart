import mongoose from "mongoose";

const orderSchema = mongoose.Schema(

  {
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    orderItems: [
      {
        name: String,
        qty: Number,
        image: String,
        price: Number,
      },
    ],

    shippingAddress: {
      type: String,
      required: true,
    },

    totalPrice: {
      type: Number,
      required: true,
    },

    isDelivered: {
      type: Boolean,
      default: false,
    },

    isReturned: {
      type: Boolean,
      default: false,
    },
  },

  {
    timestamps: true,
  }
);

const Order = mongoose.model(
  "Order",
  orderSchema
);

export default Order;