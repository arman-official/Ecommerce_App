const { Router } = require("express");
const { notImplemented } = require("../../shared/utils/notImplemented");

const router = Router();

router.post("/intent", notImplemented("Create payment intent"));
router.post("/webhook", notImplemented("Stripe webhook"));
router.post("/refunds", notImplemented("Create refund"));
router.get("/:id", notImplemented("Get payment"));

module.exports = router;
