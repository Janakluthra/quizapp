import React from 'react';
import { Link } from 'react-router-dom';
import AptitudeImg from '../../assets/aptitude_img.jpeg';
import codingImage from '../../assets/coding_image.jpeg';
import interviewImage from '../../assets/interview_img.jpeg';
const quizTypes = [
  {
    id: 'Aptitude',
    title: 'Aptitude',
    description: 'Test your problem-solving and analytical skills.',
     image: AptitudeImg
  },
  {
    id: 'Coding',
    title: 'Coding',
    description: 'Challenge your programming knowledge and skills.',
     image: codingImage,
  },
  {
    id: 'Interview',
    title: 'Interview',
    description: 'Prepare for common interview questions and scenarios.',
     image: interviewImage,
  },
];

const MainPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Choose a Quiz</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {quizTypes.map((quiz) => (
          <div key={quiz.id} className="card bg-white shadow-lg rounded-lg overflow-hidden max-w-xs">
            <img src={quiz.image} className="card-img-top w-full h-48 object-cover" alt={quiz.title} />
            <div className="card-body p-6">
              <h5 className="card-title text-xl font-semibold mb-2 text-gray-800">{quiz.title}</h5>
              <p className="card-text text-gray-600 mb-4">{quiz.description}</p>
              <Link 
                to={`/start?category=${quiz.id}`} 
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                Start {quiz.title} Quiz
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
