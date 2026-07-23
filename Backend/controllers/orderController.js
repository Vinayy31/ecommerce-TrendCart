import Order from "../models/OrderModel.js";

const placeOrder = async (
  req,
  res
) => {

  try {

    const {
      name,
      phone,
      orderItems,
      shippingAddress,
      totalPrice,
    } = req.body;


    const order =
      await Order.create({

        name,

        phone,

        orderItems,

        shippingAddress,

        totalPrice,

      });


    res.status(201).json(
      order
    );

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });
  }
};


const getOrders = async (
  req,
  res
) => {

  try {

    const orders =
      await Order.find();

    res.json(orders);

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });
  }
};



const approveReturn =
  async (req, res) => {

    try {

      const order =
        await Order.findById(
          req.params.id
        );


      if (!order) {

        return res.status(404).json({
          message:
            "Order not found",
        });
      }


      order.isReturned = true;

      await order.save();


      res.json({
        message:
          "Return Approved",
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });
    }
  };


export {
  placeOrder,
  getOrders,
  approveReturn,
};