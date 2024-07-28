// // export default Start
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { useUser } from '../user/User';

// const Start = () => {
//   const [username, setUserName] = useState('');
//   const navigate = useNavigate();
//   const { updateUserData } = useUser();

//   function handleStart() {
//     if (username.trim()) {
//       updateUserData({ username });
//       navigate('/quiz');
//     }
//   }

//   return (
//     <div className='p-4 sm:p-8'>
//       <h1 className='text-2xl sm:text-3xl font-bold bg-indigo-500 text-center text-white mb-6 py-2 w-full sm:w-3/4 lg:w-1/2 mx-auto rounded-md border-2'>
//         Quiz Instructions
//       </h1>
//       <ol className='list-decimal list-inside sm:space-y-3 text-sm sm:text-lg text-gray-50 mx-auto w-full sm:w-3/4 lg:w-1/2'>
//         <li>You will be asked 10 questions one after another.</li>
//         <li>10 points are awarded for the correct answer.</li>
//         <li>There is negative marking of 5 points for each incorrect answer.</li>
//         <li>You will be allotted 10 minutes to finish the Quiz</li>
//         <li>Each question has four options. You can choose only one option.</li>
//         <li>You can review and change answers before the quiz finishes.</li>
//         <li>The result will be declared at the end of the quiz.</li>
//       </ol>
//       <div className='flex flex-col items-center mt-10'>
//         <input
//           type='text'
//           value={username}
//           onChange={(evn) => setUserName(evn.target.value)}
//           placeholder='Enter your Username'
//           className='py-2 px-4 w-full sm:w-1/2 lg:w-1/3 rounded-md border border-gray-300'
//         />
//         <button
//           className='bg-purple-700 text-white py-2 px-6 rounded-md text-lg mt-4 hover:bg-purple-900 transition-colors'
//           onClick={handleStart}
//         >
//           Start Quiz
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Start



import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useUser } from '../user/User';

const Start = () => {
  const [username, setUserName] = useState('');
  const navigate = useNavigate();
  const { updateUserData } = useUser();
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  function handleStart() {
    if (username.trim()) {
      console.log('Starting quiz with category:', category);
      updateUserData({ username });
      navigate(`/quiz/${category}`);
    }
  }
  

  return (
    <div className='p-4 sm:p-8'>
      <h1 className='text-2xl sm:text-3xl font-bold bg-indigo-500 text-center text-white mb-6 py-2 w-full sm:w-3/4 lg:w-1/2 mx-auto rounded-md border-2'>
        Quiz Instructions
      </h1>
      <ol className='list-decimal list-inside sm:space-y-3 text-sm sm:text-lg text-gray-50 mx-auto w-full sm:w-3/4 lg:w-1/2'>
        <li>You will be asked 10 questions one after another.</li>
        <li>10 points are awarded for the correct answer.</li>
        <li>There is negative marking of 5 points for each incorrect answer.</li>
        <li>You will be allotted 10 minutes to finish the Quiz</li>
        <li>Each question has four options. You can choose only one option.</li>
        <li>You can review and change answers before the quiz finishes.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>
      <div className='flex flex-col items-center mt-10'>
        <input
          type='text'
          value={username}
          onChange={(evn) => setUserName(evn.target.value)}
          placeholder='Enter your Username'
          className='py-2 px-4 w-full sm:w-1/2 lg:w-1/3 rounded-md border border-gray-300'
        />
        <button
          className='bg-purple-700 text-white py-2 px-6 rounded-md text-lg mt-4 hover:bg-purple-900 transition-colors'
          onClick={handleStart}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Start;
