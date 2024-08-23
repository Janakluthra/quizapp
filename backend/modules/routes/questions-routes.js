// import express from "express";
// const routes = express.Router();
// routes.get("/viewquestions", (request, response) => {
//   response.send("questions");
// });
// // routes.post("/addquestions", (request, response) => {
// //   response.send("questions");
// // });

import express from "express";
import { viewAll } from "../controllers/question-controller.js";
export const questionRoutes = express.Router();
questionRoutes.get("/view-Questions", viewAll);
