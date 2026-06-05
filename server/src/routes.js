const { Router } = require("express");
const { sendSuccess } = require("./shared/utils/response");

const authRoutes = require("./modules/auth/auth.routes");
const userRoutes = require("./modules/users/users.routes");
const productRoutes = require("./modules/products/products.routes");
const categoryRoutes = require("./modules/categories/categories.routes");
const brandRoutes = require("./modules/brands/brands.routes");
const searchRoutes = require("./modules/search/search.routes");
const cartRoutes = require("./modules/cart/cart.routes");
const wishlistRoutes = require("./modules/wishlist/wishlist.routes");
const reviewRoutes = require("./modules/reviews/reviews.routes");
const orderRoutes = require("./modules/orders/orders.routes");
const paymentRoutes = require("./modules/payments/payments.routes");
const sellerRoutes = require("./modules/seller/seller.routes");
const adminRoutes = require("./modules/admin/admin.routes");

const router = Router();

router.get("/health", (req, res) =>
  sendSuccess(res, {
    message: "Service healthy",
    data: { uptime: process.uptime() }
  })
);

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);
router.use("/brands", brandRoutes);
router.use("/search", searchRoutes);
router.use("/cart", cartRoutes);
router.use("/wishlist", wishlistRoutes);
router.use("/reviews", reviewRoutes);
router.use("/orders", orderRoutes);
router.use("/payments", paymentRoutes);
router.use("/seller", sellerRoutes);
router.use("/admin", adminRoutes);

module.exports = router;
