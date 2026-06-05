const { Router } = require("express");
const { notImplemented } = require("../../shared/utils/notImplemented");

const router = Router();

router.post("/", notImplemented("Create order"));
router.get("/", notImplemented("List orders"));
router.get("/:id", notImplemented("Get order"));
router.patch("/:id/cancel", notImplemented("Cancel order"));
router.patch("/:id/return", notImplemented("Return order"));
router.patch("/:id/status", notImplemented("Update order status"));

module.exports = router;
