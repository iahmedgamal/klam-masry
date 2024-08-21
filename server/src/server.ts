import express, { Request, Response } from "express";
import cors from "cors";
import connectDB from "./databse/db";
import WordModel from "./databse/word";
const app = express();
const PORT = 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  try {
    const words = await WordModel.find();
    console.log("words",words);
    res.json(words);
  } catch (error) {
    res.status(500).json({ message: "Error fetching words", error});
  }
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
