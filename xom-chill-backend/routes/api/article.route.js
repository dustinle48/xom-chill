const express = require("express");
const router = express.Router();

const articleController = require("../../controllers/Article.controller");

router.get("/", articleController.find);
router.get("/:id", articleController.findOne);

router.post("/", articleController.create);

module.exports = router;