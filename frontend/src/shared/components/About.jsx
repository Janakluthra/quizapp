import { Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 sm:p-12">
      <div className="max-w-4xl mx-auto bg-gray-900 shadow-2xl rounded-2xl p-8 sm:p-12 border border-gray-700">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="text-yellow-400 w-8 h-8 mr-2 animate-pulse" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center">
            About <span className="text-yellow-400">QuizApp</span>
          </h1>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Welcome to <span className="text-yellow-400 font-semibold">QuizApp</span> — your go-to platform to challenge and grow your skills through fun, interactive, and educational quizzes. Designed for learners of all levels, our quizzes keep you sharp while making learning engaging.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Whether you're prepping for your dream job interview, improving your coding logic, or sharpening your brain with aptitude puzzles — QuizApp is your companion for success. Expect speed, challenge, and clarity — all in one place.
        </p>

        <div className="bg-gray-800 border-l-4 border-yellow-400 p-6 rounded-lg">
          <h2 className="text-xl text-white font-semibold mb-4">🔥 Key Features</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>🎯 <span className="text-white font-medium">Diverse Categories:</span> Aptitude, Coding, Interview & more.</li>
            <li>⏱️ <span className="text-white font-medium">Timed Quizzes:</span> Practice under pressure with real-time timers.</li>
            <li>⚡ <span className="text-white font-medium">Instant Feedback:</span> Know where you stand instantly after each question.</li>
            <li>📚 <span className="text-white font-medium">Detailed Explanations:</span> Understand the “why” behind every answer.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
