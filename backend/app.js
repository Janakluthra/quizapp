import express from "express";
import { createConnection } from "./shared/db/connection.js";
import dotenv from "dotenv";
import cors from "cors";
import { QuestionModel } from "./modules/models/questions-schema.js";
import { questionRoutes } from "./modules/routes/questions-routes.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use("/", questionRoutes);

const promise = createConnection();
promise.then((r) => {
  app.listen(4444, (err) => {
    if (err) {
      console.log("application is not running");
    } else {
      console.log("application is running");
    }
  });
  //   .catch((err) => {
  //     console.log("application cannot run and db down", err);
  //   });
});

app.get("/view-Questions", async (req, res) => {
  try {
    const questions = await QuestionModel.find();
    console.log("questions", questions);
    res.json(questions);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});
app.post("/", async (req, res) => {
  try {
    const body = req.body;
    const questions = await QuestionModel.create(body);
    console.log("questions", questions);
    res.json(questions);
    return;
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});
