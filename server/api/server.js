const express = require("express");
const cors = require("cors");
const connectDB = require("./databse/db")
const WordModel = require("./databse/word");

const app = express();
const PORT = 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const words = await WordModel.find();
    console.log("words", words);
    res.json(words);
  } catch (error) {
    res.status(500).json({ message: "Error fetching words", error });
  }
});

app.get("/word/:id", async (req, res) => {
  try {
    const wordId = req.params.id;
    const word = await WordModel.findById(wordId);

    if (!word) {
      return res.status(404).json({ message: "Word not found" });
    }

    res.json(word);
  } catch (error) {
    res.status(500).json({ message: "Error fetching the word", error });
  }
});

app.get("/api/search", async (req, res) => {
  try {
    const { query } = req.query

    if (!query) {
      return res.status(400).json({ message: "Query parameter is missing" });
    }

    const searchWordsResuts = await WordModel.find({
      $or: [
        {
          en: { $regex: query, $options: "i" }
        }
      ]
    }).limit(10);
    res.json(searchWordsResuts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching search related", error });
  }
});


app.delete("/word/:id", async (req, res) => { 
  const wordId = req.params.id
  await WordModel.findByIdAndDelete(wordId).then((word) => {
    res.json({ message: "Word deleted successfully", word })
  }).catch((error) => {
    res.status(500).json({ message: "Error deleting the word", error })
  })
})

app.put("/word/:id", async (req, res) => {
  const wordId = req.params.id
  const updatedWord = req.body
  await WordModel.findByIdAndUpdate(wordId, updatedWord).then((word) => {
    res.json({ message: "Word updated successfully", word })
  }).catch((error) => {
    res.status(500).json({ message: "Error updating the word", error })
  })
})

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
