const Template1 = ({ formData }) => {
    return (
      <div className="p-6 bg-white rounded shadow text-center">
        <h1 className="text-3xl font-bold">{formData.name}</h1>
        <p>{formData.email} | {formData.phone}</p>
        <h2 className="text-xl font-semibold mt-4">Summary</h2>
        <p>{formData.summary}</p>
        <h2 className="text-xl font-semibold mt-4">Skills</h2>
        <p>{formData.skills}</p>
        <h2 className="text-xl font-semibold mt-4">Experience</h2>
        <p>{formData.experience}</p>
        <h2 className="text-xl font-semibold mt-4">Education</h2>
        <p>{formData.education}</p>
      </div>
    );
  };
  
  export default Template1;
  