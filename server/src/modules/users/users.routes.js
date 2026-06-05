const { Router } = require("express");
const { notImplemented } = require("../../shared/utils/notImplemented");

const router = Router();

router.get("/me", notImplemented("Get current user"));
router.patch("/me", notImplemented("Update current user"));

module.exports = router;
