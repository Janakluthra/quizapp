import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Question } from "./Question";
import { useUser } from "../user/User";
import { Timer } from "lucide-react";

export const Quiz = () => {
  const { category } = useParams();
  const [currInd, setInd] = useState(0);
  const [quizData, setQuizData] = useState([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const navigate = useNavigate();
  const { userAnswers, updateUserAnswers, userData, updateUserData } =
    useUser();
  console.log(userAnswers, "uSERAnswersa dmnfbsjkd");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:4444/view-Questions");
        console.log("response ", response);
        const result = await response.json();
        console.log("response ", result);
        const categoryData = result.filter(
          (item) => item.category === category
        );
        console.log("Loaded quiz data:", categoryData);
        setQuizData(result);
        setTimeLeft(result.length * 60);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      // handleSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  function onNext() {
    if (currInd < quizData.length - 1) {
      setInd(currInd + 1);
    }
  }

  function onPrev() {
    if (currInd > 0) {
      setInd(currInd - 1);
    }
  }

  function onAnswerChange(e) {
    updateUserAnswers(currInd, e.target.value);
    console.log(userAnswers, "shjagdaslidjasukdhss");
  }

  function handleSubmit() {
    console.log(quizData, userAnswers, "lsjdvjhjhsbasjhasjd");
    const score = Object.keys(userAnswers).reduce((score, index) => {
      if (quizData[index].answer === userAnswers[index]) {
        score += 10;
      } else {
        score -= 5;
      }
      return score;
    }, 0);

    const userResultData = {
      ...userData,
      category,
      attempts: Object.keys(userAnswers).length,
      score,
      totalQuestions: quizData.length,
      status: score >= quizData.length * 5 ? "Passed" : "Failed",
    };

    console.log("User result data:", userResultData);
    updateUserData(userResultData);
    navigate("/result");
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

  return (
    <div
      className="mx-auto my-10 p-4 sm:p-8 bg-gray-800 rounded-lg"
      style={{ maxWidth: "90%", minHeight: "90vh" }}
    >
      <h1 className="text-2xl sm:text-3xl text-center w-full sm:w-1/2 mx-auto font-bold border-4 text-white rounded-lg p-4 mb-4">
        {category} Quiz
      </h1>
      <div className="flex items-center justify-center my-4 text-xl mb-4 text-white">
        <Timer className="w-6 h-6 text-blue-400 mr-2" />
        <span>Time Left: {formattedTime}</span>
      </div>
      <div className="mx-auto max-w-xl">
        <div>
          {console.log(quizData, "sdfsdgjuhas")}
          {quizData[currInd] && (
            <Question
              question={quizData[currInd]}
              onAnswerChange={onAnswerChange}
            />
          )}
        </div>
      </div>
      <div className="mt-8 sm:mt-12">
        <div className="flex justify-center items-center mb-4">
          <div className="bg-gray-600 h-2 w-4/5 rounded-full overflow-hidden">
            <div
              className="bg-blue-500 h-full rounded-full"
              style={{ width: `${((currInd + 1) / quizData.length) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8 space-x-4">
          {currInd > 0 && (
            <button
              className="bg-green-500 text-black py-2 px-4 sm:px-6 rounded-md text-base sm:text-lg hover:bg-green-800 transition-colors"
              onClick={onPrev}
            >
              Prev
            </button>
          )}
          {currInd === quizData.length - 1 ? (
            <button
              className="bg-blue-500 text-white py-2 px-4 sm:px-6 rounded-md text-base sm:text-lg hover:bg-blue-800 transition-colors"
              onClick={handleSubmit}
            >
              Submit
            </button>
          ) : (
            <button
              className="bg-green-500 text-black py-2 px-4 sm:px-6 rounded-md text-base sm:text-lg hover:bg-green-800 transition-colors"
              onClick={onNext}
            >
              Next
            </button>
          )}
        </div>
        <div className="text-white text-center mt-4">
          Question {currInd + 1} of {quizData.length}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
