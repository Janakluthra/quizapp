// // eslint-disable-next-line no-unused-vars
// import React from 'react';

// export const Question = ({ question, onAnswerChange,c }) => {
//   return (
//     <div className='p-4'>
//       <h2 className='text-lg font-bold text-white mb-6'>{question.question}</h2>
//       <ul key={question.id}>
//         {question.options.map((option, ind) => (
//           <li key={ind}>
//             <input
//               className='mr-2'
//               type='radio'
//               value={option}
//               name='option'
//               id={`option${ind}`}
//               onChange={onAnswerChange}
//             />
//             <label className='text-white' htmlFor={`option${ind}`}>
//               {option}
//             </label>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

import React from 'react';

export const Question = ({ question, onAnswerChange }) => {
  return (
    <div className='p-8 bg-gray-800 rounded-lg shadow-lg max-w-3xl mx-auto'>
      <h2 className='text-3xl font-bold text-white mb-6'>{question.question}</h2>
      <ul key={question.id} className='space-y-4'>
        {question.options.map((option, ind) => (
          <li key={ind} className='flex items-center'>
            <input
              type='radio'
              value={option}
              name={`question-${question.id}`}
              id={`option${ind}`}
              onChange={onAnswerChange}
              className='mr-3 h-5 w-5'
            />
            <label
              htmlFor={`option${ind}`}
              className='flex items-center cursor-pointer w-full p-4 rounded-mdz bg-gray-700 hover:bg-violet-700 transition-colors'
            >
              
              <span className='text-white text-lg'>{option}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

