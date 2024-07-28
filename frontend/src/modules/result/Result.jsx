import React from 'react';
import { useUser } from '../user/User';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { ResultTable } from './ResultTable';

const COLORS = ['#4caf50', '#f44336'];

export const Result = () => {
  const { userData } = useUser();

  const totalQuestions = userData.totalQuestions || 0;
  const correctAnswers = Math.round(userData.score / 10);
  const incorrectAnswers = totalQuestions - correctAnswers;

  const info = [
    { name: 'Correct', value: correctAnswers },
    { name: 'Incorrect', value: incorrectAnswers }
  ];

  const correctPercentage = ((correctAnswers / totalQuestions) * 100).toFixed(1);
  const incorrectPercentage = (100 - parseFloat(correctPercentage)).toFixed(1);

  return (
    <div className='mx-auto bg-gray-800 p-4 sm:p-12 rounded-lg' style={{ maxWidth: '90%', minHeight: '90vh' }}>
      <h1 className='text-white font-bold w-full sm:w-1/2 border-4 py-4 mx-auto rounded-md text-2xl sm:text-3xl text-center mb-8'>Result</h1>

      <div className='flex flex-col items-center mb-8'>
        <div className='text-lg text-gray-400 mb-4'>
          <span className='font-bold text-white text-xl sm:text-2xl'>Quiz Performance:</span>
        </div>
        <div className='w-64 h-64 sm:w-80 sm:h-80 mb-4'>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={info}
                cx="50%"
                cy="50%"
                outerRadius="80%"
                fill="#8884d8"
                dataKey="value"
              >
                {info.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className='text-white text-center'>
          <div className='flex flex-col sm:flex-row justify-around mb-4'>
            <div className='bg-green-500 text-white py-2 px-4 rounded-md mb-2 sm:mb-0 sm:mr-4'>
              Correct: {correctPercentage}%
            </div>
            <div className='bg-red-500 text-white py-2 px-4 rounded-md'>
              Incorrect: {incorrectPercentage}%
            </div>
          </div>
          <div className='text-lg text-gray-400'>
            <p>Correct Answers: {correctAnswers}</p>
            <p>Incorrect Answers: {incorrectAnswers}</p>
          </div>
        </div>
      </div>

      <div className='w-full mb-8'>
        <ResultTable userData={userData} />
      </div>

      <div className='flex justify-center mt-8'>
        <Link 
          to={'/'}
          className='bg-yellow-400 text-black py-2 px-6 rounded-md text-lg no-underline hover:bg-yellow-500 transition-colors'
        >
          Restart
        </Link>
      </div>
    </div>
  );
};

export default Result;
