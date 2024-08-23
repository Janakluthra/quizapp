import { QuestionModel } from "../models/questions-schema.js";
export const viewAllQuestion = async () => {
  try {
    const docs = await QuestionModel.find({}).exec();
    console.log("Docs are ", docs);
    return docs;
  } catch (err) {
    throw err;
  }
};
