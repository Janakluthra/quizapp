// import { SchemaTypes } from "mongoose";
// mongoose.schema({
//   questId: { type: SchemaTypes.string, required: true, unique: true },
//   option1: { type: SchemaTypes.string, required: true, unique: true },
//   option2: { type: SchemaTypes.string, required: true, unique: true },
//   option3: { type: SchemaTypes.string, required: true, unique: true },
//   option4: { type: SchemaTypes.string, required: true, unique: true },
//   answer: { type: SchemaTypes.string, required: true, unique: true },
// });
// export const questionmodel = mongoose.model("questions", questionSchema);
import mongoose, { SchemaTypes } from "mongoose";
const questionSchema = mongoose.Schema({
  questId: { type: SchemaTypes.Number, required: true, unique: true },
  quest: { type: SchemaTypes.String, required: true, unique: true },
  option1: { type: SchemaTypes.String, required: true, unique: true },
  option2: { type: SchemaTypes.String, required: true, unique: true },
  option3: { type: SchemaTypes.String, required: true, unique: true },
  option4: { type: SchemaTypes.String, required: true, unique: true },
  answer: { type: SchemaTypes.String, required: true, unique: true },
});
export const QuestionModel = mongoose.model("aptitudes", questionSchema);
