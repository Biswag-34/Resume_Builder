import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  summary: { type: String, required: true },
  skills: { type: String, required: true },
  experience: { type: String, required: true },
  education: { type: String, required: true },
  template: { type: String, required: true }
});

export default mongoose.model("Resume", ResumeSchema);
