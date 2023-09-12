const { Router } = require("express");
const { getAllArticles, createArticles, getArticle } = require("../controllers/articles.controller");
const router = Router();

router.get("/", getAllArticles)
router.get("/:id", getArticle)
router.post("/", createArticles)

module.exports = router;