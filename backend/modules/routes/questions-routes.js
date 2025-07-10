import express from "express";
import { viewAll } from "../controllers/question-controller.js";
export const questionRoutes = express.Router();
questionRoutes.get("/view-Questions", viewAll);
