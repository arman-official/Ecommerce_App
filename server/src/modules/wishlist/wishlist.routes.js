const { Router } = require("express");
const { notImplemented } = require("../../shared/utils/notImplemented");

const router = Router();

router.get("/", notImplemented("Get wishlist"));
router.post("/items", notImplemented("Add to wishlist"));
router.delete("/items/:productId", notImplemented("Remove wishlist item"));

module.exports = router;
