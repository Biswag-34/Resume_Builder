const Template3 = ({ formData }) => {
  return (
    <div className="p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg border border-gray-300 flex flex-col md:flex-row items-center md:items-start">
      
      {/* Left Section - Profile Picture */}
      <div className="md:w-1/3 text-center md:text-left p-4">
        {formData.image && (
          <img 
            src={formData.image} 
            alt="Profile" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto md:mx-0 border-4 border-gray-300 shadow"
          />
        )}
      </div>

      {/* Right Section - Resume Details */}
      <div className="md:w-2/3 p-4">
        {/* Name, Email & Phone (Side-by-side layout for mobile and desktop) */}
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div className="w-full md:w-1/3">
            <h1 className="text-4xl font-bold text-gray-800">{formData.name}</h1>
          </div>
          <div className="w-full md:w-1/3 text-gray-600">
            <p>{formData.email}</p>
            <p>{formData.phone}</p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Summary</h2>
          <p className="text-gray-700 leading-relaxed">{formData.summary}</p>
        </div>

        {/* Skills Section */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            {formData.skills.split(",").map((skill, index) => (
              <li key={index} className="ml-4">{skill.trim()}</li>
            ))}
          </ul>
        </div>

        {/* Experience Section */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Experience</h2>
          <p className="text-gray-700 leading-relaxed">{formData.experience}</p>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Education</h2>
          <p className="text-gray-700 leading-relaxed">{formData.education}</p>
        </div>
      </div>

    </div>
  );
};

export default Template3;
