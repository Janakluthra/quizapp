// import { questionmodel } from "../models/question-schema.js";
// export const getquestions = (request, response) => {
//   response.status(200).json();
// };
// export const addquestions = async(request, response) => {
//     try{

//     const question=request.body;
//     const doc=await questionmodel.create(product);
//     if(doc && doc._id){
//         response.status(200).json({message:'new question added in db'})
//     }
//     else
//     {
//         response.status(200).json({message:'unable to added in db'})
//     }

// }

// // catch((err)=> response.status(200).json({message:'unable to added in db'}))

// }
//
//import { QuestionModel } from "../models/question-schema.js";
import { viewAllQuestion } from "../services/question-operation.js";
export const viewAll = async (request, response) => {
  const docs = await viewAllQuestion();
  console.log(docs);
  response.status(200).json(docs);
};
