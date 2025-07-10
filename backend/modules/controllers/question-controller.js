import { viewAllQuestion } from "../services/question-operation.js";
export const viewAll = async (request, response) => {
  const docs = await viewAllQuestion();
  console.log(docs);
  response.status(200).json(docs);
};
