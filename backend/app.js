import express from "express";
import { createConnection } from "./shared/db/connection.js";
import dotenv from "dotenv";
import cors from "cors";
import { AptitudesModel, CodingRoundModel, HrRoundModel} from "./modules/models/questions-schema.js";
import { questionRoutes } from "./modules/routes/questions-routes.js";
import { resultRoutes } from "./modules/routes/result-routes.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());


app.use("/", questionRoutes);
app.use("/", resultRoutes);

app.post("/", async (req, res) => {
  try {
    const body = req.body;
    console.log(body)
    let Model;

    const category = body.category?.toLowerCase();
    if (category === "aptitude") {
      Model = AptitudesModel;
    } else if (category === "coding") {
      Model = CodingRoundModel;
    } else if (category === "interview") {
      Model = HrRoundModel;
    } else {
      return res.status(400).json({ error: "Unknown category" });
    }

    const questions = await Model.create(body);
    console.log(`Question saved to ${category} collection:`, questions);
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const promise = createConnection();
promise.then((r) => {
  app.listen(4444, (err) => {
    if (err) {
      console.log("application is not running");
    } else {
      console.log("application is running");
    }
  });
});