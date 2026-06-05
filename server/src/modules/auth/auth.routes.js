const { Router } = require("express");
const { notImplemented } = require("../../shared/utils/notImplemented");

const router = Router();

router.post("/register", notImplemented("Register"));
router.post("/login", notImplemented("Login"));
router.post("/logout", notImplemented("Logout"));
router.post("/refresh", notImplemented("Refresh token"));
router.post("/verify-email", notImplemented("Email verification"));
router.post("/forgot-password", notImplemented("Forgot password"));
router.post("/reset-password", notImplemented("Reset password"));
router.post("/change-password", notImplemented("Change password"));
router.get("/profile", notImplemented("Get profile"));
router.patch("/profile", notImplemented("Update profile"));

module.exports = router;
