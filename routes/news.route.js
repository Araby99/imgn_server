const { Router } = require("express");
const { getAllNews, createNews, getNews, getLastThree } = require("../controllers/news.controller");
const { admin } = require("../middlewars/admin.middleware");
const router = Router();

router.get("/", getAllNews)
router.get("/getLastThree", getLastThree)
router.get("/:id", getNews)
router.post("/", admin, createNews)

module.exports = router;