import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">AI Resume Maker</h1>
      <p className="text-lg text-gray-600 max-w-xl">
        Create a professional resume in minutes! Just enter your details, choose a template, and download a high-quality PDF.
      </p>
      <Link to="/resume-editor">
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg rounded-md shadow hover:bg-blue-600 transition">
          Build Your Resume
        </button>
      </Link>
    </div>
  );
};

export default Home;
