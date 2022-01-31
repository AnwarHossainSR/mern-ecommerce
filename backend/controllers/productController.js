const Product = require("../models/productModel");

// Create Product -- Admin
exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Get All Products
exports.getAllProducts = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "all products",
  });
};
