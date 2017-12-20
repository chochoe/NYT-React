const router = require("express").Router();
const newsRoutes = require("./articles");

router.use("/news", newsRoutes);

module.exports = router;
