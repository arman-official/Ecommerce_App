const { User } = require("./user.model");
const { RefreshToken } = require("./refreshToken.model");
const { Category } = require("./category.model");
const { Brand } = require("./brand.model");
const { Product } = require("./product.model");
const { Cart } = require("./cart.model");
const { Wishlist } = require("./wishlist.model");
const { Review } = require("./review.model");
const { Order } = require("./order.model");
const { Payment } = require("./payment.model");

module.exports = {
  User,
  RefreshToken,
  Category,
  Brand,
  Product,
  Cart,
  Wishlist,
  Review,
  Order,
  Payment
};
