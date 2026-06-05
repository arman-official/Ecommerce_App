const { Router } = require("express");
const { notImplemented } = require("../../shared/utils/notImplemented");

const router = Router();

router.post("/", notImplemented("Create category"));
router.get("/", notImplemented("List categories"));
router.get("/:id", notImplemented("Get category"));
router.put("/:id", notImplemented("Update category"));
router.delete("/:id", notImplemented("Delete category"));

module.exports = router;
