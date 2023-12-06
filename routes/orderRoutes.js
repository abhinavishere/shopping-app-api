const router = require("express").Router();
const {
  getAllOrders,
  placeNewOrder,
} = require("../controllers/orderController");

router.get("/orders", getAllOrders);
router.post("/orders/place", placeNewOrder);

module.exports = router;
