const { Router } = require("express");
const { notImplemented } = require("../../shared/utils/notImplemented");

const router = Router();

router.get("/dashboard", notImplemented("Seller dashboard"));
router.get("/products", notImplemented("Seller products"));
router.get("/orders", notImplemented("Seller orders"));
router.get("/analytics", notImplemented("Seller analytics"));

module.exports = router;
