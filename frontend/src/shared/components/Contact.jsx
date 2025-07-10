import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
        Contact Us
      </h1>

      <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-3xl mx-auto text-white">
        <p className="text-lg text-gray-300 mb-6">
          We'd love to hear from you! Whether you have a question, feedback, or just want to say hi — feel free to reach out.
        </p>

        <div className="space-y-4 text-gray-300 mb-8">
          <div className="flex items-center">
            <Mail className="text-blue-400 mr-3" />
            <span>Email: <a href="mailto:support@quizapp.com" className="text-blue-400 hover:underline">support@quizapp.com</a></span>
          </div>
          <div className="flex items-center">
            <Phone className="text-green-400 mr-3" />
            <span>Phone: <span className="text-white">xxx-345-309530</span></span>
          </div>
          <div className="flex items-center">
            <MapPin className="text-red-400 mr-3" />
            <span>Address: 123 Quiz Lane, Knowledge City, Learnland, 45678</span>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Connect with us</h2>
          <div className="flex space-x-6">
            <a href="https://facebook.com/quizapp" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
              <Facebook className="text-blue-500 hover:text-blue-600 w-6 h-6" />
            </a>
            <a href="https://twitter.com/quizapp" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
              <Twitter className="text-sky-400 hover:text-sky-500 w-6 h-6" />
            </a>
            <a href="https://instagram.com/quizapp" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
              <Instagram className="text-pink-500 hover:text-pink-600 w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
