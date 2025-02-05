import { useEffect, useState } from "react";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DownloadPage = () => {
  const location = useLocation();
  const [resumeData, setResumeData] = useState(location.state?.resumeData || {});

  useEffect(() => {
    if (!resumeData.name) {
      alert("No resume data found. Please go back and fill out the form.");
    }
  }, [resumeData]);

  const styles = StyleSheet.create({
    page: { padding: 30, fontSize: 12 },
    section: { marginBottom: 10 },
    title: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
    text: { marginBottom: 3 }
  });

  const ResumeDocument = () => (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>{resumeData.name}</Text>
          <Text style={styles.text}>{resumeData.email} | {resumeData.phone}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Summary</Text>
          <Text style={styles.text}>{resumeData.summary}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Skills</Text>
          <Text style={styles.text}>{resumeData.skills}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Experience</Text>
          <Text style={styles.text}>{resumeData.experience}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Education</Text>
          <Text style={styles.text}>{resumeData.education}</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Resume is Ready!</h1>
      {resumeData.name ? (
        <PDFDownloadLink
          document={<ResumeDocument />}
          fileName="resume.pdf"
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
        >
          {({ loading }) => (loading ? "Generating..." : "Download PDF")}
        </PDFDownloadLink>
      ) : (
        <p className="text-red-500">No resume data found.</p>
      )}
    </div>
  );
};

export default DownloadPage;
