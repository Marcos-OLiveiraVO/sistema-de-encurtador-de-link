const express = require("express");
const router = express.Router();
const { addUrl, getUrl } = require("../Controllers/urlController");

router.use(express.json());

router.post("/", addUrl);

router.get("/:hash", getUrl);

module.exports = router;
