import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-4 sm:p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <p className="text-gray-300 mb-4">
          If you have any questions or feedback, feel free to reach out to us. We are here to help!
        </p>
        <p className="text-gray-300 mb-4">
          <strong>QuizApp Support Team</strong><br />
          Email: <a href="mailto:support@quizapp.com" className="text-blue-400 hover:underline">support@quizapp.com</a><br />
          Phone: +1 (555) 123-4567<br />
          Address: 123 Quiz Lane, Knowledge City, Learnland, 45678
        </p>
        <p className="text-gray-300">
          Feel free to connect with us on social media:
          <ul className="list-none mt-2 flex gap-4">
            <li>
              <a href="https://facebook.com/quizapp" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/quizapp" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com/quizapp" className="text-pink-500 hover:underline" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Contact;
