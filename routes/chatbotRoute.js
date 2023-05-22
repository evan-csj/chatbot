const router = require("express").Router();
const chatbotController = require("../controllers/chatbotController");

router.route("/").post(chatbotController.getResponse);
module.exports = router;
