import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../components/InputForm";
import TemplateSelector from "../components/TemplateSelector";
import ResumePreview from "../components/ResumePreview";

const ResumeEditor = () => {
  const [formData, setFormData] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState("template1");
  const navigate = useNavigate();

  // Handle navigating to the download page with the form data
  const handleDownload = () => {
    if (formData) {
      navigate("/download", { state: { resumeData: formData, template: selectedTemplate } });
    } else {
      alert("Please fill out the resume form first.");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Build Your Resume</h1>

      {/* Display input form if data is not yet submitted */}
      {!formData ? (
        <InputForm onSubmit={setFormData} />
      ) : (
        <div className="w-full max-w-4xl">
          {/* Template selection */}
          <TemplateSelector onSelect={setSelectedTemplate} />
          {/* Preview resume */}
          <ResumePreview formData={formData} selectedTemplate={selectedTemplate} />
          
          {/* Proceed to download button */}
          <div className="text-center mt-6">
            <button 
              onClick={handleDownload} 
              className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition"
            >
              Proceed to Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeEditor;
