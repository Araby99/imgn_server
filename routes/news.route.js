const { Router } = require("express");
const { getAllNews, createNews, getNews, getLastThree, updateNews, deleteNews, getRelated } = require("../controllers/news.controller");
const { admin } = require("../middlewars/admin.middleware");
const router = Router();

router.post("/", getAllNews)
router.get("/getLastThree", getLastThree)
router.get("/:id", getNews)
router.post("/create", admin, createNews)
router.put("/:_id", admin, updateNews)
router.delete("/:_id", deleteNews)
router.post("/related/:tag", getRelated)

module.exports = router;