import { Link } from 'react-router-dom';
import AptitudeImg from '../../assets/aptitude_img.jpeg';
import codingImage from '../../assets/coding_image.jpeg';
import interviewImage from '../../assets/interview_img.jpeg';

const quizTypes = [
  {
    id: 'Aptitude',
    title: 'Aptitude',
    description: 'Test your problem-solving and analytical skills.',
    image: AptitudeImg,
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
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 text-white drop-shadow-lg">
        Choose Your <span className="text-yellow-400">Quiz</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {quizTypes.map((quiz) => (
          <div
            key={quiz.id}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-xs w-full transform hover:-translate-y-2"
          >
            <img
              src={quiz.image}
              alt={quiz.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{quiz.title}</h3>
              <p className="text-gray-400 mb-4 text-sm">{quiz.description}</p>
              <Link
                to={`/start?category=${quiz.id}`}
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full transition-colors duration-200"
              >
                Start Quiz
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
