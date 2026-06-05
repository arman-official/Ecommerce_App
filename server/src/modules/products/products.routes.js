const { Router } = require("express");
const { notImplemented } = require("../../shared/utils/notImplemented");

const router = Router();

router.post("/", notImplemented("Create product"));
router.get("/", notImplemented("List products"));
router.get("/:id", notImplemented("Get product"));
router.put("/:id", notImplemented("Update product"));
router.delete("/:id", notImplemented("Delete product"));

module.exports = router;
