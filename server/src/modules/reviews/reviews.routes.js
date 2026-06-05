const { Router } = require("express");
const { notImplemented } = require("../../shared/utils/notImplemented");

const router = Router();

router.post("/", notImplemented("Create review"));
router.put("/:id", notImplemented("Update review"));
router.delete("/:id", notImplemented("Delete review"));
router.get("/product/:productId", notImplemented("List product reviews"));

module.exports = router;
