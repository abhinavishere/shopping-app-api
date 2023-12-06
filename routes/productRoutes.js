const router = require("express").Router();
const {
  getAllProducts,
  getProductById,
} = require("../controllers/productController");

// Public Routes
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);

module.exports = router;
