const { Router } = require("express");
const { notImplemented } = require("../../shared/utils/notImplemented");

const router = Router();

router.get("/", notImplemented("Get cart"));
router.post("/items", notImplemented("Add to cart"));
router.patch("/items/:itemId", notImplemented("Update cart item"));
router.delete("/items/:itemId", notImplemented("Remove cart item"));
router.post("/save", notImplemented("Save cart"));

module.exports = router;
