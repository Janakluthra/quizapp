import mongoose, { SchemaTypes } from "mongoose";

const resultSchema = mongoose.Schema({
  username: { type: SchemaTypes.String, required: true },
  score: { type: SchemaTypes.Number, required: true },
  attempts: { type: SchemaTypes.Number, required: true },
  status: { type: SchemaTypes.String, required: true },
  category: { type: SchemaTypes.String, required: true }, 
  totalQuestions: { type: SchemaTypes.Number, required: true }, 
  timestamp: { type: SchemaTypes.Date, default: Date.now },
});

export const ResultModel = mongoose.model("results", resultSchema);