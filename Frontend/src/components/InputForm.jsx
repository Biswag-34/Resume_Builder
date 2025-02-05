import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaBriefcase, FaGraduationCap, FaStar, FaCamera } from "react-icons/fa";

const InputForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    skills: "",
    experience: "",
    education: "",
    image: null,
  });

  const [step, setStep] = useState(1);

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Image Upload (Convert Image to Base64)
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result }); // Store base64 image
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Step Navigation
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-300">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Build Your Resume</h2>

      {/* Step 1: Basic Info */}
      {step === 1 && (
        <>
          <div className="flex items-center space-x-2 mb-4">
            <FaUser className="text-blue-500" />
            <input 
              type="text" 
              name="name" 
              placeholder="Full Name" 
              value={formData.name} 
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <FaEnvelope className="text-blue-500" />
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              value={formData.email} 
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <FaPhone className="text-blue-500" />
            <input 
              type="text" 
              name="phone" 
              placeholder="Phone Number" 
              value={formData.phone} 
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button 
            onClick={nextStep} 
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Next →
          </button>
        </>
      )}

      {/* Step 2: Experience & Education */}
      {step === 2 && (
        <>
          <div className="flex items-center space-x-2 mb-4">
            <FaBriefcase className="text-green-500" />
            <textarea 
              name="experience" 
              placeholder="Work Experience" 
              value={formData.experience} 
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <FaGraduationCap className="text-green-500" />
            <textarea 
              name="education" 
              placeholder="Education Details" 
              value={formData.education} 
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <div className="flex justify-between">
            <button 
              onClick={prevStep} 
              className="bg-gray-400 text-white py-3 px-6 rounded-lg hover:bg-gray-500 transition"
            >
              ← Back
            </button>
            <button 
              onClick={nextStep} 
              className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition"
            >
              Next →
            </button>
          </div>
        </>
      )}

      {/* Step 3: Skills, Summary, and Profile Picture */}
      {step === 3 && (
        <>
          <div className="flex items-center space-x-2 mb-4">
            <FaStar className="text-yellow-500" />
            <textarea 
              name="skills" 
              placeholder="Skills (comma separated)" 
              value={formData.skills} 
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <FaUser className="text-purple-500" />
            <textarea 
              name="summary" 
              placeholder="Professional Summary" 
              value={formData.summary} 
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-2 flex items-center">
              <FaCamera className="text-purple-500 mr-2" /> Upload Profile Picture
            </label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageUpload}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            {formData.image && (
              <img 
                src={formData.image} 
                alt="Profile" 
                className="w-32 h-32 rounded-full mx-auto mt-4 border-4 border-gray-300 shadow"
              />
            )}
          </div>

          <div className="flex justify-between">
            <button 
              onClick={prevStep} 
              className="bg-gray-400 text-white py-3 px-6 rounded-lg hover:bg-gray-500 transition"
            >
              ← Back
            </button>
            <button 
              onClick={() => onSubmit(formData)} 
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              Submit ✓
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default InputForm;
