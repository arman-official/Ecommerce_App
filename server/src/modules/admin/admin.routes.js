const { Router } = require("express");
const { notImplemented } = require("../../shared/utils/notImplemented");

const router = Router();

router.get("/dashboard", notImplemented("Admin dashboard"));
router.get("/users", notImplemented("Admin users"));
router.get("/sellers", notImplemented("Admin sellers"));
router.get("/products", notImplemented("Admin products"));
router.get("/categories", notImplemented("Admin categories"));
router.get("/orders", notImplemented("Admin orders"));
router.get("/analytics", notImplemented("Admin analytics"));

module.exports = router;
