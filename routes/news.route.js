const { Router } = require("express");
const { getAllNews, createNews, getNews } = require("../controllers/news.controller");
const router = Router();

router.get("/", getAllNews)
router.get("/:id", getNews)
router.post("/", createNews)

module.exports = router;