const router = require("express").Router();
const bookRoutes = require("./news");

// Book routes
router.use("/news", newsRoutes);

module.exports = router;
