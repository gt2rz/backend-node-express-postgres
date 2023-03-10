import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

const app = express();

app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
