import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useUser } from '../user/User';

const Start = () => {
  const [username, setUserName] = useState('');
  const navigate = useNavigate();
  const { updateUserData } = useUser();
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  const handleStart = () => {
    if (username.trim()) {
      updateUserData({ username });
      navigate(`/quiz/${category}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 bg-gradient-to-r from-gray-900 via-purple-900 to-black">
      <div className="w-full max-w-3xl bg-gray-800 text-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Quiz Instructions
        </h1>

        <ol className="list-decimal list-inside space-y-3 text-lg text-gray-300 mb-8 px-4">
          <li>You will be asked 10 questions one after another.</li>
          <li>10 points are awarded for each correct answer.</li>
          <li>Negative marking of 5 points for each incorrect answer.</li>
          <li>You have 10 minutes to complete the quiz.</li>
          <li>Each question has four options. Only one can be selected.</li>
          <li>You can review and change answers before submission.</li>
          <li>Your result will be shown at the end of the quiz.</li>
        </ol>

        <div className="flex flex-col items-center">
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your username"
            className="w-full sm:w-2/3 lg:w-1/2 px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
          />

          <button
            onClick={handleStart}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
