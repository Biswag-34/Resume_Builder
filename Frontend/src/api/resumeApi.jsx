import axios from "axios";

const API_URL = "http://localhost:5000/api/resumes";

export const saveResume = async (resumeData) => {
  return axios.post(`${API_URL}/save`, resumeData);
};

export const generatePDF = async (templateHTML) => {
  return axios.post(`${API_URL}/generate-pdf`, { templateHTML }, { responseType: "blob" });
};
