const { Router } = require("express");
const { getAllArticles, createArticles, getArticle } = require("../controllers/articles.controller");
const { admin } = require("../middlewars/admin.middleware");
const router = Router();

router.get("/", getAllArticles)
router.get("/:id", getArticle)
router.post("/", admin, createArticles)

module.exports = router;