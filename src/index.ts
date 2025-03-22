import express from "express";
import { rateLimit } from "express-rate-limit";
import { Request, Response } from "express";
import cors from "cors";

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-8",
  legacyHeaders: false,
});

app.use(cors());
app.use(limiter);
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    msg: "server is working",
  });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log("server listening at: ", PORT);
});
