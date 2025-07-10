import { useUser } from "../user/User";
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { ResultTable } from "./ResultTable";

const COLORS = ["#4caf50", "#f44336"];

export const Result = () => {
  const { userData } = useUser();

  console.log("User data in Result:", userData);

  const totalQuestions = userData.totalQuestions || 0;
  const correctAnswers = userData.correctAnswers || 0;
  const incorrectAnswers = userData.incorrectAnswers || 0;
  const score = userData.score || 0;
  const attempts = userData.attempts || 0;
  const status = userData.status || "Unknown";

  const info = [
    { name: "Correct", value: correctAnswers },
    { name: "Incorrect", value: incorrectAnswers },
  ];

  const correctPercentage = totalQuestions > 0 
    ? ((correctAnswers / totalQuestions) * 100).toFixed(1)
    : "0.0";
  const incorrectPercentage = totalQuestions > 0
    ? (100 - parseFloat(correctPercentage)).toFixed(1)
    : "0.0";

  // Handle case where no data is available
  if (!userData || Object.keys(userData).length === 0) {
    return (
      <div className="mx-auto bg-gray-800 p-4 sm:p-12 rounded-lg text-white text-center" style={{ maxWidth: "90%", minHeight: "90vh" }}>
        <h1 className="text-2xl sm:text-3xl mb-4">No Result Data Available</h1>
        <p className="mb-4">Please take a quiz first to see your results.</p>
        <Link
          to={"/"}
          className="bg-yellow-400 text-black py-2 px-6 rounded-md text-lg no-underline hover:bg-yellow-500 transition-colors"
        >
          Go to Quiz
        </Link>
      </div>
    );
  }

  return (
    <div
      className="mx-auto bg-gray-800 p-4 sm:p-12 rounded-lg"
      style={{ maxWidth: "90%", minHeight: "90vh" }}
    >
      <h1 className="text-white font-bold w-full sm:w-1/2 border-4 py-4 mx-auto rounded-md text-2xl sm:text-3xl text-center mb-8">
        Quiz Result - {userData.category || "General"}
      </h1>

      {/* Score Overview */}
      <div className="bg-gray-700 rounded-lg p-6 mb-8">
        <div className="text-center text-white">
          <div className="text-4xl font-bold mb-2 text-blue-400">
            {score} / {totalQuestions * 10}
          </div>
          <div className={`text-2xl font-semibold ${status === 'Passed' ? 'text-green-400' : 'text-red-400'}`}>
            {status}
          </div>
          <div className="text-gray-300 mt-2">
            Questions Attempted: {attempts} / {totalQuestions}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mb-8">
        <div className="text-lg text-gray-400 mb-4">
          <span className="font-bold text-white text-xl sm:text-2xl">
            Quiz Performance:
          </span>
        </div>
        
        {totalQuestions > 0 ? (
          <>
            <div className="w-64 h-64 sm:w-80 sm:h-80 mb-4">
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
            <div className="text-white text-center">
              <div className="flex flex-col sm:flex-row justify-around mb-4">
                <div className="bg-green-500 text-white py-2 px-4 rounded-md mb-2 sm:mb-0 sm:mr-4">
                  Correct: {correctPercentage}%
                </div>
                <div className="bg-red-500 text-white py-2 px-4 rounded-md">
                  Incorrect: {incorrectPercentage}%
                </div>
              </div>
              <div className="text-lg text-gray-400">
                <p>Correct Answers: {correctAnswers}</p>
                <p>Incorrect Answers: {incorrectAnswers}</p>
                <p>Unanswered: {totalQuestions - attempts}</p>
              </div>
            </div>
          </>
        ) : (
          <div className="text-white text-center">
            <p>No performance data available</p>
          </div>
        )}
      </div>

      <div className="w-full mb-8">
        <ResultTable userData={userData} />
      </div>

      <div className="flex justify-center mt-8">
        <Link
          to={"/"}
          className="bg-yellow-400 text-black py-2 px-6 rounded-md text-lg no-underline hover:bg-yellow-500 transition-colors"
        >
          Take Another Quiz
        </Link>
      </div>
    </div>
  );
};

export default Result;