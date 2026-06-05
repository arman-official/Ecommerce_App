const { Router } = require("express");
const { notImplemented } = require("../../shared/utils/notImplemented");

const router = Router();

router.get("/", notImplemented("Search"));
router.get("/suggestions", notImplemented("Search suggestions"));
router.get("/trending", notImplemented("Trending searches"));
router.get("/recent", notImplemented("Recent searches"));

module.exports = router;
