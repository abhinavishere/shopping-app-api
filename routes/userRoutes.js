const router = require("express").Router();
const {
  getCurrentUserInfo,
  updateCurrentUserInfo,
  getAllUsers,
  updateUserInfo,
  deleteUser,
} = require("../controllers/userController");

// Public Routes
router.get("/users/me", getCurrentUserInfo);
router.post("/users/me", updateCurrentUserInfo);
// Private Routes
router.get("/admin/users", getAllUsers);
router.post("/admin/users/:id", updateUserInfo);
router.delete("/admin/users/:id", deleteUser);

module.exports = router;
