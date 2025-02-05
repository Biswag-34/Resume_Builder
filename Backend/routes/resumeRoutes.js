import express from "express";
import Resume from "../models/Resume.js";
import generatePDF from "../utils/pdfGenerator.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Save Resume Data
router.post("/save", authMiddleware, async (req, res) => {
  try {
    const resume = new Resume({ ...req.body, userId: req.user.id });
    await resume.save();
    res.json({ message: "Resume Saved", resume });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

// Generate and Download PDF
router.post("/generate-pdf", authMiddleware, async (req, res) => {
  try {
    const pdfBuffer = await generatePDF(req.body.templateHTML);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=resume.pdf");
    res.send(pdfBuffer);
  } catch (err) {
    res.status(500).json({ message: "PDF Generation Failed", error: err.message });
  }
});

export default router;
