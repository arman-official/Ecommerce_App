const { Router } = require("express");
const { notImplemented } = require("../../shared/utils/notImplemented");

const router = Router();

router.post("/", notImplemented("Create brand"));
router.get("/", notImplemented("List brands"));
router.get("/:id", notImplemented("Get brand"));
router.put("/:id", notImplemented("Update brand"));
router.delete("/:id", notImplemented("Delete brand"));

module.exports = router;
