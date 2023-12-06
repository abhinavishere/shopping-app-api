require("dotenv").config();
const express = require("express");

const app = express();

// Built-in Middleware for JSON
app.use(express.json());

// content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// Auth Router
app.use("/api/auth", require("./routes/authRoutes"));
// Products Router
app.use("/api", require("./routes/productRoutes"));
// User Router
app.use("/api", require("./routes/userRoutes"));
// Order Router
app.use("/api", require("./routes/orderRoutes"));
// Cart Router
app.use("/api", require("./routes/cartRoutes"));

// Listen on PORT
app.listen(process.env.PORT, () => {
  console.info(`Server running on port ${process.env.PORT}`);
});
