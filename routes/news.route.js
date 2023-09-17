const { Router } = require("express");
const { getAllNews, createNews, getNews } = require("../controllers/news.controller");
const { admin } = require("../middlewars/admin.middleware");
const router = Router();

router.get("/", getAllNews)
router.get("/:id", getNews)
router.post("/", admin, createNews)

module.exports = router;