const Template2 = ({ formData }) => {
    return (
      <div className="p-8 max-w-2xl mx-auto bg-white shadow-lg rounded-lg border border-gray-300">
        {/* Header Section */}
        <div className="text-center border-b pb-4 mb-6">
          <h1 className="text-4xl font-bold text-gray-800">{formData.name}</h1>
          <p className="text-gray-600">{formData.email} | {formData.phone}</p>
        </div>
  
        {/* Summary Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Summary</h2>
          <p className="text-gray-700 leading-relaxed">{formData.summary}</p>
        </div>
  
        {/* Skills Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            {formData.skills.split(",").map((skill, index) => (
              <li key={index} className="ml-4">{skill.trim()}</li>
            ))}
          </ul>
        </div>
  
        {/* Experience Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Experience</h2>
          <p className="text-gray-700 leading-relaxed">{formData.experience}</p>
        </div>
  
        {/* Education Section */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Education</h2>
          <p className="text-gray-700 leading-relaxed">{formData.education}</p>
        </div>
      </div>
    );
  };
  
  export default Template2;
  