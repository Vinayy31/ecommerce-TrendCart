import Product from "../models/productModel.js";


// GET ALL PRODUCTS

const getProducts = async (req, res) => {

  try {

    const products = await Product.find();

    res.json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

// const productExites = await product.findOne({ name });

// if (productExites) {
//   console.log("Product already exists");
//   return res.status(400).json({
//     message: "Product already exists",
//   })
// }

// CREATE PRODUCT

const createProduct = async (req, res) => {

  try {

    const {
      name,
      image,
      brand,
      category,
      description,
      price,
      countInStock,
    } = req.body;

    const product = await Product.create({

      name,
      image,
      brand,
      category,
      description,
      price,
      countInStock,

    });

    res.status(201).json(product);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

const getProductById = async (
  req,
  res
) => {

  try {

    const product =
      await Product.findById(
        req.params.id
      );


    if (!product) {

      return res.status(404).json({
        message: "Product not found",
      });
    }


    res.json(product);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};
//DELETE PRODUCT
const deleteProduct = async (
  req,
  res
) => {

  try {

    const product =
      await Product.findById(
        req.params.id
      );


    if (!product) {

      return res.status(404).json({
        message: "Product not found",
      });
    }


    await product.deleteOne();


    res.json({
      message:
        "Product deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};
const updateProduct = async (
  req,
  res
) => {

  try {

    const product =
      await Product.findById(
        req.params.id
      );


    if (!product) {

      return res.status(404).json({
        message: "Product not found",
      });
    }


    product.name =
      req.body.name || product.name;

    product.brand =
      req.body.brand || product.brand;

    product.category =
      req.body.category ||
      product.category;

    product.image =
      req.body.image || product.image;

    product.price =
      req.body.price || product.price;


    const updatedProduct =
      await product.save();


    res.json(updatedProduct);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

export {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};