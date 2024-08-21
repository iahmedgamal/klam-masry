import express, { Request, Response } from "express";
import cors from "cors";
import { ApiResponse } from "@shared/types/words";
const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  const response: ApiResponse = {
    words: {
      1: {
        word: "من",
        appeared: 865140,
        en: "from",
      },
      2: {
        word: "في",
        appeared: 774717,
        en: "in",
      },
    },
  };
  res.json(response);
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
