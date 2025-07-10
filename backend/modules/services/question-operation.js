import { AptitudesModel, CodingRoundModel, HrRoundModel } from "../models/questions-schema.js";

export const viewAllQuestion = async () => {
  try {
    console.log("Fetching questions from all collections...");
    
    const [aptitudeQuestions, codingQuestions, hrQuestions] = await Promise.all([
      AptitudesModel.find({}).exec(),
      CodingRoundModel.find({}).exec(),
      HrRoundModel.find({}).exec()
    ]);

    console.log("Aptitude questions count:", aptitudeQuestions.length);
    console.log("Coding questions count:", codingQuestions.length);
    console.log("HR questions count:", hrQuestions.length);

    if (aptitudeQuestions.length > 0) {
      console.log("Sample aptitude question:", aptitudeQuestions[0]);
    }
    if (codingQuestions.length > 0) {
      console.log("Sample coding question:", codingQuestions[0]);
    }
    if (hrQuestions.length > 0) {
      console.log("Sample HR question:", hrQuestions[0]);
    }

    const allQuestions = [
      ...aptitudeQuestions,
      ...codingQuestions,
      ...hrQuestions
    ];

    console.log("Total questions from all collections:", allQuestions.length);
    
    const categories = [...new Set(allQuestions.map(q => q.category))];
    console.log("Categories found:", categories);

    return allQuestions;
  } catch (err) {
    console.error("Error fetching questions:", err);
    throw err;
  }
};