const express = require("express");
const router = express.Router();

const userController = require("../../controllers/User.controller");

router.post("/register", userController.create);
router.post("/login", userController.login);

router.delete("/logout", userController.logout);

module.exports = router;