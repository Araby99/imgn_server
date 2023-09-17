const { Router } = require("express");
const { login } = require("../controllers/admin.controller");
const router = Router();

router.post("/login", login)

module.exports = router;