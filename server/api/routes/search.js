const express = require("express");
const WordModel = require("../databse/word");
const { searchLimiter } = require("../middleware/rateLimiter");
const { SEARCH_RESULTS_LIMIT } = require("../../utils/constant");

const router = express.Router();

router.get("/search", searchLimiter, async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json({ message: "Query parameter is missing" });

  try {
    const words = await WordModel.find({
      en: { $regex: query, $options: "i" },
    }).limit(SEARCH_RESULTS_LIMIT);
    res.json(words);
  } catch (error) {
    res.status(500).json({ message: "Error fetching search results", error });
  }
});

module.exports = router;
