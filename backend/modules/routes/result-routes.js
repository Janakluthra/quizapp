import express from "express";
import { saveResult, getResults } from "../controllers/result-controller.js";
export const resultRoutes = express.Router();

resultRoutes.post("/save-result", saveResult);
resultRoutes.get("/get-results", getResults);
