const router = require("express").Router();
const newsRoutes = require("./articles");

// Book routes
router.use("/news", newsRoutes);

module.exports = router;
