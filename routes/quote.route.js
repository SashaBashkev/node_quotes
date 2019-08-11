const express = require("express");
const router = express.Router();
const quote_controller = require("../controllers/quote.controller");
// Route test
router.get("/", quote_controller.index);
router.get("/details/:id", quote_controller.details);
router.post("/", quote_controller.create);
router.get("/edit", quote_controller.update);
router.delete("/:id", quote_controller.delete);
module.exports = router;
