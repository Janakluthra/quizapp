import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4 sm:p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">About QuizApp</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <p className="text-gray-300 mb-4">
          Welcome to QuizApp, the ultimate platform to test and enhance your knowledge through engaging quizzes. Our app offers a variety of quizzes that cater to different subjects and skill levels.
        </p>
        <p className="text-gray-300 mb-4">
          Whether you are preparing for an interview, looking to improve your coding skills, or simply enjoying some fun aptitude challenges, QuizApp has something for you. Our quizzes are designed to provide a comprehensive learning experience with immediate feedback and detailed explanations.
        </p>
        <p className="text-gray-300">
          Key Features:
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Wide range of quiz categories including Aptitude, Coding, and Interview.</li>
            <li>Timed quizzes with score tracking.</li>
            <li>Instant feedback on answers.</li>
            <li>Detailed explanations for each question.</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default About;
