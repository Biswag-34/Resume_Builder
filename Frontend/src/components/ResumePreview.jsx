import { PDFDownloadLink, Document, Page, Text, View, Image, StyleSheet } from "@react-pdf/renderer";
import Template1 from "../template/Templates1";
import Template2 from "../template/Templates2";
import Template3 from "../template/Templates3";

const ResumePreview = ({ formData, selectedTemplate }) => {
  // Define PDF Styles
  const styles = StyleSheet.create({
    page: { padding: 30, fontSize: 12 },
    section: { marginBottom: 10 },
    title: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
    text: { marginBottom: 3 },
    profileContainer: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
    profileImage: { width: 80, height: 80, borderRadius: 40, marginRight: 15 },
    textContainer: { flex: 1 },
    bulletList: { marginLeft: 10 },
  });

  // Function to format text with line breaks
  const formatText = (text) => text.split("\n").map((line, index) => <Text key={index}>{line}</Text>);

  // Resume PDF Document
  const ResumeDocument = () => (
    <Document>
      <Page style={styles.page}>
        {/* Profile Picture Side-by-Side with Name & Contact Info (Only for Template3) */}
        {selectedTemplate === "template3" && formData.image && (
          <View style={styles.profileContainer}>
            <Image src={formData.image} style={styles.profileImage} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{formData.name}</Text>
              <Text style={styles.text}>{formData.email}</Text>
              <Text style={styles.text}>{formData.phone}</Text>
            </View>
          </View>
        )}

        {/* Name & Contact Info (For Other Templates) */}
        {selectedTemplate !== "template3" && (
          <View style={styles.section}>
            <Text style={styles.title}>{formData.name}</Text>
            <Text style={styles.text}>{formData.email} | {formData.phone}</Text>
          </View>
        )}

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.title}>Summary</Text>
          <Text style={styles.text}>{formatText(formData.summary)}</Text>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.title}>Skills</Text>
          <View style={styles.bulletList}>
            {formData.skills.split(",").map((skill, index) => (
              <Text key={index}>• {skill.trim()}</Text>
            ))}
          </View>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.title}>Experience</Text>
          <Text style={styles.text}>{formatText(formData.experience)}</Text>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.title}>Education</Text>
          <Text style={styles.text}>{formatText(formData.education)}</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="p-6 bg-white rounded shadow-lg mt-6">
      <h2 className="text-2xl font-bold text-center mb-4">Resume Preview</h2>

      <div className="border p-4 rounded">
        {selectedTemplate === "template1" && <Template1 formData={formData} />}
        {selectedTemplate === "template2" && <Template2 formData={formData} />}
        {selectedTemplate === "template3" && <Template3 formData={formData} />}
      </div>

      <div className="text-center mt-6">
        <PDFDownloadLink
          document={<ResumeDocument />}
          fileName="resume.pdf"
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
        >
          {({ loading }) => (loading ? "Generating..." : "Download PDF")}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default ResumePreview;
