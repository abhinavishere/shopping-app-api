const router = require("express").Router();
const {
  getCurrentUserCart,
  addItemToCart,
  updateItemInCart,
  removeItemFromCart,
} = require("../controllers/cartController");

// Public Routes
router.get("/cart", getCurrentUserCart);
router.post("/cart/add", addItemToCart);
router.put("/cart/update", updateItemInCart);
router.delete("/cart/remove", removeItemFromCart);

module.exports = router;
