import mongoose, { SchemaTypes } from "mongoose";

const questionSchema = mongoose.Schema({
  questId: { type: SchemaTypes.Number, required: true, unique: true },
  quest: { type: SchemaTypes.String, required: true },
  option1: { type: SchemaTypes.String, required: true },
  option2: { type: SchemaTypes.String, required: true },
  option3: { type: SchemaTypes.String, required: true },
  option4: { type: SchemaTypes.String, required: true },
  answer: { type: SchemaTypes.String, required: true },
  category: { type: SchemaTypes.String, required: true },
});

export const AptitudesModel = mongoose.model("AptitudesModel", questionSchema, "aptitudes");
export const CodingRoundModel = mongoose.model("CodingRoundModel", questionSchema, "codingRound");
export const HrRoundModel = mongoose.model("HrRoundModel", questionSchema, "HrRound");
