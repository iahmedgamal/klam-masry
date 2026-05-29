const express = require("express");
const NodeCache = require("node-cache");
const WordModel = require("../databse/word");
const { WORDS_PER_PAGE, RATE_LIMIT } = require("../../utils/constant");

const router = express.Router();
const cache = new NodeCache({ stdTTL: RATE_LIMIT.GENERAL.WINDOW_MS / 1000 });

router.get("/", async (req, res) => {
  const cacheKey = req.originalUrl;
  const cached = cache.get(cacheKey);
  if (cached) return res.json(cached);

  const page = parseInt(req.query.page) || 1;

  try {
    const words = await WordModel.find()
      .sort({ appeared: -1 })
      .skip((page - 1) * WORDS_PER_PAGE)
      .limit(WORDS_PER_PAGE);

    cache.set(cacheKey, words);
    res.json(words);
  } catch (error) {
    res.status(500).json({ message: "Error fetching words", error });
  }
});

router.get("/word/:id", async (req, res) => {
  try {
    const word = await WordModel.findById(req.params.id);
    if (!word) return res.status(404).json({ message: "Word not found" });
    res.json(word);
  } catch (error) {
    res.status(500).json({ message: "Error fetching word", error });
  }
});

// TODO: uncomment once auth middleware is in place
// router.put("/word/:id", async (req, res) => {
//   try {
//     const word = await WordModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json({ message: "Word updated successfully", word });
//   } catch (error) {
//     res.status(500).json({ message: "Error updating word", error });
//   }
// });

// router.delete("/word/:id", async (req, res) => {
//   try {
//     const word = await WordModel.findByIdAndDelete(req.params.id);
//     res.json({ message: "Word deleted successfully", word });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting word", error });
//   }
// });

module.exports = router;
