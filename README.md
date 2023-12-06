# ShopEase API - Building a Secure and Scalable RESTful Backend for Online Shopping

ShopEase API is a robust and scalable backend solution designed for powering online shopping experiences. Developed with Node.js, Express, and MongoDB, this project focuses on providing a secure, well-documented, and feature-rich API. Key features include user authentication with role-based access control, seamless product and category management, efficient shopping cart handling, and streamlined order processing. With comprehensive testing, security measures, and API documentation using Swagger/OpenAPI, ShopEase API sets the foundation for building a reliable and high-performance online shopping platform. The project emphasizes flexibility and maintainability, making it adaptable to evolving business requirements and ensuring a seamless experience for both developers and end-users.

## Routes

### Public Routes:

1. Authentication:

- POST /api/auth/register: Public route for user registration.
- POST /api/auth/login: Public route for user login.

2. Product Information:

- GET /api/products: Public route to retrieve a list of products.
- GET /api/products/{productId}: Public route to retrieve details of a specific product.

### Private Routes (Authentication Required):

1. User Profile:

- GET /api/users/me: Private route to retrieve the profile of the authenticated user.
- PUT /api/users/me: Private route to update the profile of the authenticated user.

2. Shopping Cart:

- GET /api/cart: Private route to retrieve the items in the user's shopping cart.
- POST /api/cart/add: Private route to add items to the shopping cart.
- PUT /api/cart/update: Private route to update the quantity of items in the shopping cart.
- DELETE /api/cart/remove: Private route to remove items from the shopping cart.

3. Orders:

- GET /api/orders: Private route to retrieve a list of orders for the authenticated user.
- POST /api/orders/place: Private route to place a new order.

### Admin Routes (Higher Level of Security):

1. Product and Category Management:

- POST /api/admin/products: Admin route to add a new product.
- PUT /api/admin/products/{productId}: Admin route to update details of a product.
- DELETE /api/admin/products/{productId}: Admin route to delete a product.
- POST /api/admin/categories: Admin route to add a new product category.
- PUT /api/admin/categories/{categoryId}: Admin route to update details of a category.
- DELETE /api/admin/categories/{categoryId}: Admin route to delete a category.

2. User Management:

- GET /api/admin/users: Admin route to retrieve a list of all users.
- PUT /api/admin/users/{userId}: Admin route to update details of a user.
- DELETE /api/admin/users/{userId}: Admin route to delete a user.
