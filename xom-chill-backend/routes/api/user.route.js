const express = require("express");
const router = express.Router();

const controller = require("../../controllers/User.controller");

router.get("/", controller.find);
router.get("/:id", controller.findOne);

module.exports = router;